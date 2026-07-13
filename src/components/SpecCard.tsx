import Image from "next/image";

export default function SpecCard({ icon, title, points }: { icon: string; title: string; points: string[] }) {
  return (
    <div className="mt-6 flex max-w-xl items-start gap-4 rounded-2xl bg-[#f4f8f5] p-6 ring-1 ring-black/5 sm:p-8">
      <div className="relative size-12 shrink-0">
        <Image src={icon} alt="" fill sizes="48px" className="object-contain" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <ul className="mt-3 space-y-2 text-sm text-gray-600">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#377f45]" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
