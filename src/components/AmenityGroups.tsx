import type { LucideIcon } from "lucide-react";

export type AmenityGroup = {
  title: string;
  icon: LucideIcon;
  items: { icon: LucideIcon; text: string }[];
};

export default function AmenityGroups({ groups }: { groups: AmenityGroup[] }) {
  return (
    <div className="mt-8 space-y-8">
      {groups.map((group) => (
        <div key={group.title}>
          <div className="flex items-center gap-2.5">
            <group.icon className="size-5 text-[#377f45]" />
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900">{group.title}</h3>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {group.items.map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-3 rounded-xl bg-[#f4f8f5] p-4 ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
              >
                <item.icon className="mt-0.5 size-5 shrink-0 text-[#377f45]" />
                <span className="text-sm text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
