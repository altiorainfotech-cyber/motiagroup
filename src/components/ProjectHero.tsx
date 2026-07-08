import Image from "next/image";
import Link from "next/link";

export default function ProjectHero({
  image,
  title,
  subtitle,
  ctaLabel = "Get in Touch",
  ctaHref = "/contact-us",
}: {
  image: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="relative h-[380px] w-full overflow-hidden bg-black sm:h-[460px] lg:h-[520px]">
      <Image src={image} alt={title} fill priority sizes="100vw" className="object-cover" />

      <div className="absolute inset-x-0 bottom-16 px-6 sm:bottom-20 sm:px-12 lg:px-20">
        <div className="inline-block w-fit max-w-2xl bg-black/55 px-6 py-5">
          <h1 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">{title}</h1>
          {subtitle && <p className="mt-2 text-sm text-white/90 sm:text-base">{subtitle}</p>}
        </div>
      </div>

      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-12">
        <Link
          href={ctaHref}
          className="inline-block rounded bg-[#377f45] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#2c6636] sm:text-base"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
