import { Clock } from "lucide-react";
import TabHeading from "@/components/TabHeading";

export default function ComingSoon({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <>
      <TabHeading eyebrow={eyebrow} title={title} />
      <div className="mt-6 flex max-w-xl items-center gap-4 rounded-2xl bg-[#f4f8f5] p-6 ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg sm:p-8">
        <Clock className="size-8 shrink-0 text-[#377f45]" />
        <p className="text-sm text-gray-600">This section is being updated — check back soon.</p>
      </div>
    </>
  );
}
