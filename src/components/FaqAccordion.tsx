"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export type FaqItem = {
  question: string;
  answer: ReactNode;
};

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.question} className={open ? "bg-[#f4f8f5]" : "bg-white"}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center gap-4 px-5 py-4 text-left"
            >
              <span
                className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                  open ? "bg-[#377f45] text-white" : "bg-[#377f45]/10 text-[#377f45]"
                }`}
              >
                <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
              </span>
              <span className={`font-semibold ${open ? "text-[#377f45]" : "text-gray-900"}`}>{item.question}</span>
            </button>
            {open && (
              <div className="space-y-3 px-5 pb-5 pl-[52px] text-sm leading-relaxed text-gray-600">{item.answer}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
