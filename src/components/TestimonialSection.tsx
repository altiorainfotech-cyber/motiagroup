"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
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

  const goTo = (next: number) => setIndex((next + testimonials.length) % testimonials.length);
  const current = testimonials[index];

  return (
    <section className="bg-[#f4f8f5] py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <span className="block text-center text-sm font-semibold uppercase tracking-widest text-[#377f45]">
          Testimonials
        </span>
        <h2 className="mt-2 text-center text-3xl font-bold text-gray-900 sm:text-4xl">What Our Clients Say</h2>

        <div className="relative mt-12">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#377f45] p-3 text-white shadow-lg transition-colors hover:bg-[#2c6636] sm:flex"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-1/2 rounded-full bg-[#377f45] p-3 text-white shadow-lg transition-colors hover:bg-[#2c6636] sm:flex"
          >
            <ChevronRight className="size-5" />
          </button>

          <div key={index} className="animate-hero-fade-up relative rounded-2xl bg-white p-8 shadow-xl ring-1 ring-black/5 sm:p-12">
            <Quote className="pointer-events-none absolute -top-5 left-8 size-20 fill-[#377f45]/10 text-[#377f45]/10 sm:size-28" />

            <div className="relative flex flex-col items-center gap-6 text-center">
              <div className="relative size-24 shrink-0 overflow-hidden rounded-full bg-[#e8f0e9] ring-4 ring-[#377f45]/15 ring-offset-4 sm:size-28">
                {current.image ? (
                  <Image src={current.image} alt={current.name} fill sizes="112px" className="object-cover" />
                ) : (
                  <div className="flex size-full items-center justify-center text-2xl font-semibold text-[#377f45]">
                    {initials(current.name)}
                  </div>
                )}
              </div>

              <p className="max-w-2xl text-lg italic leading-relaxed text-gray-700 sm:text-xl">
                &ldquo;{current.quote}&rdquo;
              </p>

              <div>
                <p className="text-lg font-semibold text-gray-900">{current.name}</p>
                <span className="mt-2 inline-block rounded-full bg-[#377f45]/10 px-4 py-1 text-xs font-semibold text-[#377f45]">
                  {current.project}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-[#377f45]" : "w-2 bg-gray-300 hover:bg-gray-400"}`}
            />
          ))}
        </div>
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
