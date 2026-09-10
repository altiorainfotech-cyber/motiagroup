import type { Metadata } from "next";
import { Award, Building2, CalendarCheck, KeyRound, Newspaper, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import RelatedLinks from "@/components/RelatedLinks";
import Reveal from "@/components/Reveal";
import TestimonialSection from "@/components/TestimonialSection";

export const metadata: Metadata = {
  title: "Motia Group Awards & Recognition | Real Estate Developer",
  description:
    "Explore Motia Group's awards, recognitions and milestones in residential and commercial real estate development across North India.",
};

const stats = [
  { value: "20+", label: "Years of Real Estate Excellence", icon: CalendarCheck },
  { value: "15", label: "Projects Completed", icon: Building2 },
  { value: "4500+", label: "Homes/Offices Delivered", icon: KeyRound },
  { value: "15", label: "Awards Won", icon: Award },
];

const clippings = [
  {
    src: "/cardslider-home/NEWSPAPER%20HIGHLIGHTS/Motia-Group-in-Danik-Bhaskar.webp",
    alt: "Motia Group feature in Danik Bhaskar newspaper",
  },
  {
    src: "/cardslider-home/NEWSPAPER%20HIGHLIGHTS/IMG-20250105-WA0000-700x700.jpg",
    alt: "Motia Group newspaper feature clipping",
  },
  {
    src: "/cardslider-home/NEWSPAPER%20HIGHLIGHTS/WhatsApp-Image-2025-01-19-at-11.24.09-700x700.jpeg",
    alt: "Motia Group newspaper feature clipping",
  },
];

export default function Page() {
  return (
    <>
      <PageBanner
        title="Motia Group Awards & Recognition"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Awards" }]}
        image="/shap/grayish-white-line-texture-texture-background-shape-is-like-looking-up-tall-buildings.jpg"
        overlayColor="#1c2230"
        overlayOpacity={0.78}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <Reveal variant="up">
          <span className="block text-center text-sm font-semibold uppercase tracking-widest text-[#377f45]">
            Recognition & Trust
          </span>
          <h2 className="mt-2 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Two Decades of Milestones
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Motia Group&apos;s recognition in the real estate industry rests on a simple foundation, a consistent
            record of delivery, media trust, and satisfied clients built over more than 20 years.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map(({ value, label, icon: Icon }, i) => (
            <Reveal key={label} variant="up" delay={i * 100}>
              <div className="rounded-xl bg-[#f4f8f5] p-5 text-center ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg sm:p-6">
                <Icon className="mx-auto size-7 text-[#377f45]" />
                <div className="mt-3 text-3xl font-bold text-gray-900">{value}</div>
                <div className="text-xs font-medium text-gray-500 sm:text-sm">{label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Reveal variant="up">
            <div className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-black/5 sm:p-12">
              <Quote className="size-10 text-[#377f45]/25" />
              <p className="mt-4 text-xl italic leading-relaxed text-gray-800 sm:text-2xl">
                &ldquo;Motia Group projects are attractive because of their explicit focus on passive income
                potential, a rare trait among local developers.&rdquo;
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-[#377f45]">
                The Economic Times, Real Estate Special, 2023
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <Reveal variant="up">
          <span className="block text-center text-sm font-semibold uppercase tracking-widest text-[#377f45]">
            In the Press
          </span>
          <h2 className="mt-2 text-center text-3xl font-bold text-gray-900 sm:text-4xl">Media Highlights</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Motia Group&apos;s work has been featured across leading regional publications over the years.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {clippings.map((item, i) => (
            <Reveal key={item.src} variant="up" delay={i * 100}>
              <div className="group overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex items-center gap-2 p-4">
                  <Newspaper className="size-4 text-[#377f45]" />
                  <span className="text-xs font-medium text-gray-500">Newspaper Feature</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal variant="fade">
        <TestimonialSection />
      </Reveal>

      <section className="relative overflow-hidden py-20 sm:py-28">
        <Image
          src="/motiaz-royal-citi/citi-banner-1.webp"
          alt="A Motia Group development"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1c2230]/85" />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Be Part of Our Next Milestone</h2>
            <p className="mt-4 text-white/80">
              Connect with our team to explore the residential, commercial, and industrial projects behind Motia
              Group&apos;s track record.
            </p>
            <Link
              href="/contact-us"
              className="mt-10 inline-block rounded bg-[#377f45] px-8 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-[#2c6636] active:scale-95"
            >
              Get in Touch
            </Link>
          </Reveal>
        </div>
      </section>

      <Reveal variant="up">
        <RelatedLinks
          links={[
            { label: "Why Choose Motia Group", href: "/why-motia-group" },
            { label: "About Motia Group", href: "/about-us" },
            { label: "Motia Group Founders", href: "/founders" },
            { label: "Top Builders in Chandigarh", href: "/top-builders-in-chandigarh" },
            { label: "Residential Projects in Zirakpur", href: "/residential-projects" },
          ]}
        />
      </Reveal>
    </>
  );
}
