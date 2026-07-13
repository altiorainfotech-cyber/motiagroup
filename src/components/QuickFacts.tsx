import type { LucideIcon } from "lucide-react";

export type QuickFact = {
  icon: LucideIcon;
  label: string;
  value: string;
};

export default function QuickFacts({ facts }: { facts: QuickFact[] }) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
      {facts.map(({ icon: Icon, label, value }) => (
        <div key={label} className="rounded-xl bg-[#f4f8f5] p-4 ring-1 ring-black/5 sm:p-5">
          <Icon className="size-6 text-[#377f45]" />
          <div className="mt-3 text-sm font-bold leading-snug text-gray-900 sm:text-base">{value}</div>
          <div className="text-xs font-medium text-gray-500">{label}</div>
        </div>
      ))}
    </div>
  );
}
