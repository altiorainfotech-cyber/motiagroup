"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDE_DURATION = 4000;

export type PhotoCarouselImage = {
  src: string;
  alt: string;
  caption?: string;
};

export default function PhotoCarousel({ images }: { images: PhotoCarouselImage[] }) {
  const [index, setIndex] = useState(0);
  const goTo = (next: number) => setIndex((next + images.length) % images.length);
  const current = images[index];

  useEffect(() => {
    if (images.length < 2) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="group relative aspect-[3/2] w-full overflow-hidden rounded-2xl shadow-lg">
        {images.map((image, i) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              i === index ? "z-10 translate-x-0" : i < index ? "-translate-x-full" : "translate-x-full"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 768px) 720px, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={i === 0}
            />
          </div>
        ))}

        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-gray-900 shadow-lg transition-all hover:scale-110 hover:bg-white"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Next image"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-gray-900 shadow-lg transition-all hover:scale-110 hover:bg-white"
        >
          <ChevronRight className="size-5" />
        </button>

        <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">
          {index + 1} / {images.length}
        </span>
      </div>

      {current.caption && <p className="mt-3 text-center text-sm italic text-gray-600">{current.caption}</p>}

      <div className="mt-4 flex justify-center gap-2">
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to image ${i + 1}`}
            className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-[#377f45]" : "w-2 bg-gray-300 hover:bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
}
