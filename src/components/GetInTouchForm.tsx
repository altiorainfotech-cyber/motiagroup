"use client";

import { useState, type FormEvent } from "react";

const inputClasses =
  "w-full rounded-full border border-[#377f45]/40 bg-white px-6 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-[#377f45] focus:outline-none";

const properties = [
  "Royal Citi - Residential",
  "Motia HUYS - Residential",
  "Royal Business Park - Commercial",
  "Motia HUYS - Commercial",
  "Motia Guildford - Commercial",
];

export default function GetInTouchForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="rounded-2xl bg-[#e8f0e9] p-8 shadow-xl sm:p-10">
      <h2 className="text-center text-2xl uppercase tracking-wide text-[#377f45] sm:text-3xl">Get in Touch</h2>

      {submitted ? (
        <p className="mt-8 text-center text-gray-700">Thank you! We&rsquo;ve received your message and will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input type="text" name="name" placeholder="Name" required className={inputClasses} />
          <input type="tel" name="phone" placeholder="Phone No." required className={inputClasses} />
          <input type="email" name="email" placeholder="Email" required className={inputClasses} />
          <select name="property" defaultValue="" required className={inputClasses}>
            <option value="" disabled>
              Select a Property
            </option>
            {properties.map((property) => (
              <option key={property} value={property}>
                {property}
              </option>
            ))}
          </select>
          <textarea
            name="comment"
            placeholder="Comment"
            rows={4}
            className="w-full rounded-2xl border border-[#377f45]/40 bg-white px-6 py-4 text-sm text-gray-700 placeholder:text-gray-400 focus:border-[#377f45] focus:outline-none"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-[#2f6b3a] py-4 text-sm font-medium text-white transition-colors hover:bg-[#245529]"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
