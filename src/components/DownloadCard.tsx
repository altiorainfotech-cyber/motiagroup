import { FileText } from "lucide-react";
import Image from "next/image";

export default function DownloadCard({
  image,
  title,
  description,
  href,
  imageClassName = "object-cover",
}: {
  image?: string;
  title: string;
  description: string;
  href: string;
  imageClassName?: string;
}) {
  return (
    <div className="mt-6 max-w-3xl overflow-hidden rounded-2xl bg-[#f4f8f5] shadow-lg ring-1 ring-black/5 sm:flex sm:items-center">
      {image && (
        <div className="relative aspect-[3/2] w-full sm:w-64 sm:shrink-0">
          <Image src={image} alt={title} fill sizes="(min-width: 640px) 256px, 100vw" className={imageClassName} />
        </div>
      )}
      <div className="p-6 sm:p-8">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
        <a
          href={href}
          download
          className="mt-5 inline-flex items-center gap-2 rounded bg-[#377f45] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#2c6636]"
        >
          <FileText className="size-5" />
          Download PDF
        </a>
      </div>
    </div>
  );
}
