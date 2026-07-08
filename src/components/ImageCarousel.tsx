"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type CarouselImage = {
  src: string;
  alt: string;
};

export default function ImageCarousel({ images }: { images: CarouselImage[] }) {
  const [index, setIndex] = useState(0);
  const goTo = (next: number) => setIndex((next + images.length) % images.length);
  const current = images[index];

  return (
    <div className="relative mx-auto max-w-2xl">
      <div className="overflow-hidden rounded border-2 border-[#377f45]/40 bg-white p-2">
        <div className="relative aspect-[3/2] w-full">
          <Image src={current.src} alt={current.alt} fill sizes="(min-width: 768px) 600px, 100vw" className="object-contain" />
        </div>
      </div>

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Previous image"
        className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#377f45] p-2 text-white shadow-lg transition-colors hover:bg-[#2c6636]"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Next image"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#377f45] p-2 text-white shadow-lg transition-colors hover:bg-[#2c6636]"
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
}
