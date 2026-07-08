"use client";

import { useState, type ReactNode } from "react";
import { Plus } from "lucide-react";

export type FaqItem = {
  question: string;
  answer: ReactNode;
};

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-200">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.question} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-start gap-3 px-5 py-4 text-left"
            >
              <Plus className={`mt-0.5 size-4 shrink-0 text-gray-900 transition-transform ${open ? "rotate-45" : ""}`} />
              <span className="font-bold text-gray-900">{item.question}</span>
            </button>
            {open && <div className="space-y-3 px-5 pb-5 pl-12 text-sm leading-relaxed text-gray-600">{item.answer}</div>}
          </div>
        );
      })}
    </div>
  );
}
