"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Reveal from "@/components/Reveal";

const REVEAL_VARIANTS = ["up", "left", "right"] as const;

export type ProjectTab = {
  id: string;
  label: string;
  content: ReactNode;
};

export default function ProjectTabsLayout({ tabs }: { tabs: ProjectTab[] }) {
  const [active, setActive] = useState(tabs[0]?.id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );

    tabs.forEach((tab) => {
      const el = sectionRefs.current[tab.id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [tabs]);

  const goTo = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[260px_1fr] lg:gap-12">
        <nav className="lg:sticky lg:top-28 lg:self-start">
          <ul className="space-y-3">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  type="button"
                  onClick={() => goTo(tab.id)}
                  className={`w-full px-6 py-4 text-left text-sm font-medium text-white transition-all ${
                    active === tab.id ? "bg-[#377f45]" : "bg-[#1f2430] hover:translate-x-1 hover:bg-[#2a3040]"
                  }`}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-16">
          {tabs.map((tab, i) => (
            <section
              key={tab.id}
              id={tab.id}
              ref={(el) => {
                sectionRefs.current[tab.id] = el;
              }}
              className="scroll-mt-32"
            >
              <Reveal variant={REVEAL_VARIANTS[i % REVEAL_VARIANTS.length]}>{tab.content}</Reveal>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
