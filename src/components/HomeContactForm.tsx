"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";

const inputClasses =
  "w-full rounded-full border border-[#377f45]/40 bg-white px-6 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-[#377f45] focus:outline-none";

export default function HomeContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: `${formData.get("firstName")} ${formData.get("lastName")}`.trim(),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-[#f4f8f5] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/motiaz-royal-citi/citi-banner-1.webp"
              alt="Motia'z Royal Citi, a Motia Group development"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-black/5 sm:p-10">
            {submitted ? (
              <p className="text-center text-lg text-gray-700">
                Thank you! We&rsquo;ve received your message and will get back to you soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <input type="text" name="firstName" placeholder="First Name" required className={inputClasses} />
                <input type="text" name="lastName" placeholder="Last Name" required className={inputClasses} />
                <input type="email" name="email" placeholder="Email" required className={inputClasses} />
                <input type="tel" name="phone" placeholder="Phone No." required className={inputClasses} />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  required
                  className="w-full rounded-2xl border border-[#377f45]/40 bg-white px-6 py-4 text-sm text-gray-700 placeholder:text-gray-400 focus:border-[#377f45] focus:outline-none sm:col-span-2"
                />
                {error && (
                  <p className="text-center text-sm text-red-600 sm:col-span-2">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-full bg-[#2f6b3a] py-4 text-sm font-medium text-white transition-all hover:scale-[1.02] hover:bg-[#245529] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 sm:col-span-2"
                >
                  {submitting ? "Sending..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
