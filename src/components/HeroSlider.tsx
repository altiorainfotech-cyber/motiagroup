"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/data/heroSlides";

const SLIDE_DURATION = 6000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  const goTo = (next: number) => setIndex((next + heroSlides.length) % heroSlides.length);
  const current = heroSlides[index];

  return (
    <section className="relative h-[420px] w-full overflow-hidden bg-black sm:h-[520px] lg:h-[640px]">
      {heroSlides.map((slide, i) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            i === index ? "z-10 translate-x-0" : i < index ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover ${i === index ? "animate-hero-zoom-pan" : ""}`}
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      ))}

      <div key={index} className="absolute inset-x-0 bottom-16 z-20 px-6 sm:bottom-20 sm:px-12 lg:px-20">
        <div className="animate-hero-fade-up inline-block w-fit max-w-xl bg-black/55 px-6 py-5">
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">{current.title}</h2>
          {current.subtitle && <p className="mt-2 text-sm text-white/90 sm:text-base">{current.subtitle}</p>}
        </div>
      </div>

      <div key={`btn-${index}`} className="animate-hero-fade-up absolute bottom-6 right-6 z-20 sm:bottom-10 sm:right-12">
        <Link
          href="/contact-us"
          className="inline-block rounded bg-[#377f45] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#2c6636] sm:text-base"
        >
          {current.cta}
        </Link>
      </div>

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/40 sm:block"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/40 sm:block"
      >
        <ChevronRight className="size-5" />
      </button>

      <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-white" : "w-2 bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
}
