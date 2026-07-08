"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { testimonials } from "@/data/testimonials";

const SLIDE_DURATION = 7000;

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:px-8">
      <h2 className="text-center text-2xl uppercase tracking-wide text-[#377f45] sm:text-3xl">Testimonial</h2>

      <div className="mt-10 bg-gray-50 p-8 sm:p-12">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <div className="relative size-32 shrink-0 overflow-hidden rounded-full bg-gray-200 sm:size-36">
            {current.image ? (
              <Image src={current.image} alt={current.name} fill sizes="144px" className="object-cover" />
            ) : (
              <div className="flex size-full items-center justify-center text-2xl font-semibold text-[#377f45]">
                {initials(current.name)}
              </div>
            )}
          </div>
          <div className="text-center sm:text-left">
            <p className="text-xl text-[#377f45] sm:text-2xl">{current.name}</p>
            <p className="text-sm font-medium text-[#377f45] sm:text-base">{current.project}</p>
          </div>
        </div>

        <div className="mt-8 bg-white px-6 py-8 shadow-sm sm:px-10">
          <p className="text-center text-base italic leading-relaxed text-gray-800">{current.quote}</p>
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((t, i) => (
          <button
            key={t.name}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`size-2 rounded-full transition-colors ${i === index ? "bg-gray-800" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </section>
  );
}

function initials(name: string) {
  const cleaned = name.replace(/^(Mr\.?|Mrs\.?|Dr\.?|&)\s*/gi, "").trim();
  return cleaned
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
