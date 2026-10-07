import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const MAX_BODY_BYTES = 20 * 1024;

const FIELD_LIMITS = {
  name: 100,
  email: 254,
  phone: 25,
  property: 150,
  message: 3000,
  website: 100,
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[0-9()\-.\s]{7,25}$/;

const GENERIC_ERROR = "Invalid request. Please check your details and try again.";

class PayloadTooLargeError extends Error {}

// Reads the request body incrementally and aborts as soon as it exceeds the
// limit, instead of buffering an arbitrarily large payload into memory first.
async function readBodyWithLimit(request: Request, maxBytes: number): Promise<string> {
  const reader = request.body?.getReader();
  if (!reader) return "";

  const decoder = new TextDecoder();
  let received = 0;
  let result = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    received += value.byteLength;
    if (received > maxBytes) {
      await reader.cancel();
      throw new PayloadTooLargeError();
    }

    result += decoder.decode(value, { stream: true });
  }

  result += decoder.decode();
  return result;
}

function cleanString(value: unknown, maxLength: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (trimmed.length > maxLength) return null;
  return trimmed;
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 415 });
  }

  const declaredLength = Number(request.headers.get("content-length") ?? 0);
  if (declaredLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Request too large." }, { status: 413 });
  }

  let rawBody: string;
  try {
    rawBody = await readBodyWithLimit(request, MAX_BODY_BYTES);
  } catch (err) {
    if (err instanceof PayloadTooLargeError) {
      return NextResponse.json({ error: "Request too large." }, { status: 413 });
    }
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 400 });
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 400 });
  }

  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 400 });
  }

  const body = parsed as Record<string, unknown>;

  const name = cleanString(body.name, FIELD_LIMITS.name);
  const email = cleanString(body.email, FIELD_LIMITS.email);
  const phone = cleanString(body.phone, FIELD_LIMITS.phone);
  const property = body.property === undefined ? "" : cleanString(body.property, FIELD_LIMITS.property);
  const message = body.message === undefined ? "" : cleanString(body.message, FIELD_LIMITS.message);
  const website = body.website === undefined ? "" : cleanString(body.website, FIELD_LIMITS.website);

  if (property === null || message === null || website === null) {
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 400 });
  }

  if (!name || !email || !phone) {
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 400 });
  }

  const digitCount = (phone.match(/\d/g) ?? []).length;
  if (!PHONE_RE.test(phone) || digitCount < 7) {
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 400 });
  }

  if (website) {
    // Honeypot tripped: respond exactly like a real success so the bot
    // doesn't learn to adapt, but never send the email.
    return NextResponse.json({ success: true });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    property ? `Property: ${property}` : null,
    message ? `Message: ${message}` : null,
  ].filter(Boolean);

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      text: lines.join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form email send failed:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }
}
