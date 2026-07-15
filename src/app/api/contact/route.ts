import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, property, message } = body ?? {};

  if (!name || !email || !phone) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
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
      html: `<div style="font-family: sans-serif; font-size: 14px; color: #222;">
        <h2 style="color: #2f6b3a;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${property ? `<p><strong>Property:</strong> ${property}</p>` : ""}
        ${message ? `<p><strong>Message:</strong><br/>${message}</p>` : ""}
      </div>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
