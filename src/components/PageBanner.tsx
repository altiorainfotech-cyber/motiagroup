import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Breadcrumb = { label: string; href?: string };

export default function PageBanner({
  title,
  breadcrumbs,
  image = "/aboutus.jpg",
  overlayColor,
  overlayOpacity = 0.82,
}: {
  title: string;
  breadcrumbs: Breadcrumb[];
  image?: string;
  overlayColor?: string;
  overlayOpacity?: number;
}) {
  return (
    <section className="relative h-[140px] w-full overflow-hidden sm:h-[180px]">
      <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
      {overlayColor && (
        <div className="absolute inset-0" style={{ backgroundColor: overlayColor, opacity: overlayOpacity }} />
      )}
      <div className="relative flex h-full w-full items-end">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 pb-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <h1 className="text-2xl font-bold text-white sm:text-3xl">{title}</h1>
          <nav className="flex flex-wrap items-center gap-2 text-sm font-medium text-white">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <ChevronRight className="size-4" />}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:underline">
                    {crumb.label}
                  </Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
