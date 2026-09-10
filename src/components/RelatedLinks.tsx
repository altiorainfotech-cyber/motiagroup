import Link from "next/link";

export type RelatedLink = { label: string; href: string };

export default function RelatedLinks({ links, title = "Explore More" }: { links: RelatedLink[]; title?: string }) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
      <p className="text-center text-sm font-semibold uppercase tracking-widest text-[#377f45]">{title}</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-full border border-[#377f45]/30 bg-white px-5 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-[#377f45] hover:text-[#377f45]"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
