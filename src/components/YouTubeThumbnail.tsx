"use client";

import Image from "next/image";
import { useState } from "react";
import { Play, X } from "lucide-react";

export default function YouTubeThumbnail({ youtubeId, title }: { youtubeId: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setPlaying(true)}
        aria-label={`Play video: ${title}`}
        className="group relative block aspect-video w-full overflow-hidden rounded bg-black"
      >
        <Image
          src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
          alt={title}
          fill
          sizes="(min-width: 1024px) 900px, 100vw"
          className="object-cover"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/20">
          <span className="flex size-16 items-center justify-center rounded-full bg-red-600 text-white shadow-lg sm:size-20">
            <Play className="size-7 translate-x-0.5 fill-white sm:size-8" />
          </span>
        </span>
      </button>

      {playing && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={() => setPlaying(false)}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setPlaying(false)}
              aria-label="Close video"
              className="absolute -top-10 right-0 text-white transition-colors hover:text-gray-300 sm:-top-12"
            >
              <X className="size-7 sm:size-8" />
            </button>
            <div className="aspect-video w-full overflow-hidden rounded bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="size-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
