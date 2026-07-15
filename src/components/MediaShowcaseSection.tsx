"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type CardGroup = { title: string; images: string[] };

const cardGroups: CardGroup[] = [
  {
    title: "Newspaper Highlights",
    images: [
      "/cardslider-home/NEWSPAPER%20HIGHLIGHTS/IMG-20250105-WA0000-700x700.jpg",
      "/cardslider-home/NEWSPAPER%20HIGHLIGHTS/Motia-Group-in-Danik-Bhaskar.webp",
      "/cardslider-home/NEWSPAPER%20HIGHLIGHTS/WhatsApp-Image-2025-01-19-at-11.24.09-700x700.jpeg",
    ],
  },
  {
    title: "Architectural Modelling",
    images: ["/cardslider-home/ARCHITECTURAL.webp"],
  },
  {
    title: "Media",
    images: ["/cardslider-home/MEDIA/archi4-700x700.webp", "/cardslider-home/MEDIA/architech-700x503.webp"],
  },
];

export default function MediaShowcaseSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
      <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
        {cardGroups.map((group) => (
          <div key={group.title} className="flex flex-col items-center">
            <h3 className="text-center text-xl font-bold uppercase tracking-wide text-[#377f45] sm:text-2xl">
              {group.title}
            </h3>
            <div className="mt-6 w-full max-w-sm rounded-lg border border-[#377f45]/20 bg-white p-3 shadow-[0_0_20px_-2px_rgba(55,127,69,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-5px_rgba(55,127,69,0.5)]">
              <ImageSlider images={group.images} title={group.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ImageSlider({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div>
      <div className="group relative aspect-square w-full overflow-hidden rounded">
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`${title} ${i + 1}`}
            fill
            sizes="(min-width: 640px) 320px, 90vw"
            className={`object-cover transition-all duration-700 group-hover:scale-110 ${i === index ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>
      {images.length > 1 && (
        <div className="mt-3 flex justify-center gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`size-2 rounded-full transition-colors ${i === index ? "bg-gray-900" : "bg-gray-300"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
