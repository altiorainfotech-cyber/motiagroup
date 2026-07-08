"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type SpecItem = {
  icon: string;
  title: string;
  points: string[];
};

export default function SpecCarousel({ items }: { items: SpecItem[] }) {
  const [index, setIndex] = useState(0);
  const goTo = (next: number) => setIndex((next + items.length) % items.length);
  const current = items[index];

  return (
    <div className="relative mx-auto max-w-2xl">
      <div className="flex flex-col items-center border border-gray-300 bg-white px-8 py-10">
        <div className="relative size-16">
          <Image src={current.icon} alt="" fill sizes="64px" className="object-contain" />
        </div>

        <div className="mt-8 w-full max-w-md bg-gray-400/80 p-6">
          <h3 className="text-xl font-bold text-gray-900">{current.title}</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white">
            {current.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Previous specification"
        className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#377f45] p-2 text-white shadow-lg transition-colors hover:bg-[#2c6636]"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Next specification"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#377f45] p-2 text-white shadow-lg transition-colors hover:bg-[#2c6636]"
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
}
