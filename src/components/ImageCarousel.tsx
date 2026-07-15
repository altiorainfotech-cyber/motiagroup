"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDE_DURATION = 4000;

export type CarouselImage = {
  src: string;
  alt: string;
};

export default function ImageCarousel({ images }: { images: CarouselImage[] }) {
  const [index, setIndex] = useState(0);
  const goTo = (next: number) => setIndex((next + images.length) % images.length);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative mx-auto max-w-2xl">
      <div className="group overflow-hidden rounded border-2 border-[#377f45]/40 bg-white p-2">
        <div className="relative aspect-[3/2] w-full overflow-hidden">
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
                sizes="(min-width: 768px) 600px, 100vw"
                className="object-contain transition-transform duration-500 group-hover:scale-105"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Previous image"
        className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#377f45] p-2 text-white shadow-lg transition-all hover:scale-110 hover:bg-[#2c6636]"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Next image"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#377f45] p-2 text-white shadow-lg transition-all hover:scale-110 hover:bg-[#2c6636]"
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
}
