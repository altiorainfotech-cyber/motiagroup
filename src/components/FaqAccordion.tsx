"use client";

import { useState, type ReactNode } from "react";
import { Plus, X } from "lucide-react";

export type FaqItem = {
  question: string;
  answer: ReactNode;
};

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div
            key={item.question}
            className={`overflow-hidden rounded-2xl rounded-tl-none border-2 bg-white transition-colors duration-300 ${
              open ? "border-[#377f45]" : "border-[#377f45]/35 hover:border-[#377f45]/60"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full min-h-[84px] items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-medium text-gray-900">{item.question}</span>
              <span
                className={`flex size-7 shrink-0 items-center justify-center rounded-full transition-colors ${
                  open ? "bg-[#377f45] text-white" : "text-gray-900"
                }`}
              >
                {open ? <X className="size-4" /> : <Plus className="size-4" />}
              </span>
            </button>
            {open && (
              <div className="space-y-3 border-t border-[#377f45]/15 px-6 pb-6 pt-4 text-sm leading-relaxed text-gray-600">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
