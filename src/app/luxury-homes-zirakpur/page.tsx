import type { Metadata } from "next";
import { Dumbbell, Mail, MapPin, Phone, Shield, Sparkles, Trees } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ClientsSection from "@/components/ClientsSection";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import ProjectHero from "@/components/ProjectHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Luxury Homes in Zirakpur | Premium Residential Projects",
  description:
    "Discover luxury homes in Zirakpur with premium layouts, modern amenities, green spaces and excellent connectivity from Motia Group.",
};

const lifestyle = [
  {
    icon: Trees,
    title: "Green, Landscaped Living",
    text: "Wide landscaped lawns and tree-lined walkways designed so residents step out of an apartment and into open, breathable green space.",
  },
  {
    icon: Dumbbell,
    title: "Clubhouse & Recreation",
    text: "Clubhouses, fitness spaces and dedicated recreation areas built for everyday use, not just amenity checklists on a brochure.",
  },
  {
    icon: Shield,
    title: "Gated Security & Privacy",
    text: "24/7 gated security and controlled access, giving families the privacy and peace of mind that define a genuinely premium address.",
  },
];

const spotlight = [
  {
    name: "Motia'z Royal Citi",
    href: "/motiaz-royal-citi",
    image: "/motiaz-royal-citi/citi-banner-1.webp",
    status: "Delivered",
    detail: "A 23-acre luxury development of homes and flats in Zirakpur, already home to families who value its scale, planning and connectivity along the Delhi Highway.",
  },
  {
    name: "Motia'z Harmony Greens",
    href: "/motia-harmonygreens",
    image: "/home-page-hero-section/harmonygreens-banner-01.webp",
    status: "Ongoing",
    detail: "Premium homes on PR-7 Airport Road in Sanauli, Zirakpur, designed around a clubhouse, meditation centre and nature-facing layouts for a calmer, greener lifestyle.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "What makes a home 'luxury' at Motia Group developments?",
    answer: (
      <p>
        Beyond finishes, our luxury developments are defined by scale of planning, dedicated green and recreational
        space, clubhouse amenities, and gated security — the everyday lifestyle infrastructure that separates a
        premium address from a standard one.
      </p>
    ),
  },
  {
    question: "Is Motia'z Royal Citi ready to move in?",
    answer: (
      <p>
        Yes, Motia&apos;z Royal Citi is a delivered 23-acre development in Zirakpur. Visit the{" "}
        <Link href="/motiaz-royal-citi" className="font-semibold text-[#377f45] hover:underline">
          Royal Citi project page
        </Link>{" "}
        for current availability.
      </p>
    ),
  },
  {
    question: "What amenities does Motia'z Harmony Greens offer?",
    answer: (
      <p>
        Harmony Greens is planned around a clubhouse and a dedicated meditation centre, along with green, nature-facing
        layouts, located on PR-7 Airport Road in Sanauli, Zirakpur.
      </p>
    ),
  },
  {
    question: "Which luxury project should I consider if I want a ready home versus a new launch?",
    answer: (
      <p>
        Motia&apos;z Royal Citi is fully delivered for buyers who want to move in without waiting, while Motia&apos;z
        Harmony Greens is an ongoing premium project for buyers who want to book early in a newer development.
      </p>
    ),
  },
];

const contactInfo: { icon: typeof Phone; label: string; value: string; href?: string }[] = [
  { icon: Phone, label: "Phone", value: "+91 8860095959", href: "tel:+918860095959" },
  { icon: Mail, label: "Email", value: "info@motiagroup.com", href: "mailto:info@motiagroup.com" },
  { icon: MapPin, label: "Corporate Office", value: "Motia'z Royal Business Park, Zirakpur" },
];

export default function Page() {
  return (
    <>
      <ProjectHero
        image="/home-page-hero-section/harmonygreens-banner-01.webp"
        title="Luxury Homes in Zirakpur, Designed Around Lifestyle"
        ctaLabel="Book a Site Visit"
        ctaHref="/contact-us"
        zoomBg
      />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal variant="left">
            <div className="relative">
              <div className="absolute -right-4 -top-4 hidden h-full w-full rounded-2xl border-2 border-[#377f45]/30 sm:block" />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/motiaz-royal-citi/citi-banner-1.webp"
                  alt="A luxury home development by Motia Group in Zirakpur"
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#377f45]">
              Luxury Homes in Zirakpur
            </span>
            <div className="mt-4 space-y-4 text-gray-600">
              <p>
                A luxury home is less about a single feature and more about how an entire day feels — the walk
                through a landscaped entrance, a clubhouse that is actually used, the quiet of a gated, secure
                street. Zirakpur&apos;s two flagship premium addresses from Motia Group were both planned around that
                lifestyle standard.
              </p>
              <p>
                Motia&apos;z Royal Citi, delivered across 23 acres, and Motia&apos;z Harmony Greens, an ongoing premium
                development on PR-7 Airport Road, represent two different stages of the same commitment to
                lifestyle-first design.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
              THE LIFESTYLE BEHIND A LUXURY ADDRESS
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {lifestyle.map((item, i) => (
              <Reveal key={item.title} variant="up" delay={i * 100}>
                <div className="corner-shoot-card rounded-2xl bg-white p-6 ring-1 ring-black/5 sm:p-8">
                  <div className="corner-shoot-content">
                    <span className="card-icon flex size-12 items-center justify-center rounded-xl bg-[#377f45]/10 text-[#377f45]">
                      <item.icon className="size-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <Reveal variant="up">
          <span className="block text-center text-sm font-semibold uppercase tracking-widest text-[#377f45]">
            Spotlight
          </span>
          <h2 className="mt-2 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Premium Residential Addresses
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {spotlight.map((item, i) => (
            <Reveal key={item.name} variant="up" delay={i * 100}>
              <Link
                href={item.href}
                className="group block overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute right-4 top-4 rounded-full bg-[#377f45] px-3 py-1 text-xs font-semibold text-white">
                    {item.status}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#377f45]">{item.name}</h3>
                  <p className="mt-3 text-sm text-gray-600">{item.detail}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-28">
        <Image
          src="/home-page-hero-section/harmonygreens-banner-04.webp"
          alt="Green, landscaped living at a Motia Group luxury development"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <span className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#7fce8f]">
              <Sparkles className="size-4" /> A Quieter Kind of Luxury
            </span>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Where Everyday Life Feels Like an Amenity
            </h2>
            <p className="mt-4 text-white/85 sm:text-lg">
              From a landscaped morning walk to an evening at the clubhouse, our luxury developments are designed so
              the lifestyle is part of the address, not an add-on.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20 lg:px-8">
        <Reveal variant="up">
          <span className="block text-center text-sm font-semibold uppercase tracking-widest text-[#377f45]">
            FAQ
          </span>
          <h2 className="mt-2 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <Reveal variant="up" delay={100} className="mt-12">
          <FaqAccordion items={faqs} />
        </Reveal>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-28">
        <Image
          src="/motiaz-royal-citi/citi-banner-1.webp"
          alt="Luxury homes by Motia Group in Zirakpur"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1c2230]/85" />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Experience Our Premium Addresses</h2>
            <p className="mt-4 text-white/80">
              Schedule a visit to Motia&apos;z Royal Citi or Motia&apos;z Harmony Greens with our team.
            </p>

            <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-3 text-left">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#377f45]/20 text-[#7fce8f]">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#7fce8f]">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm text-white/90 transition-colors hover:text-white">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-white/90">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/contact-us"
              className="mt-10 inline-block rounded bg-[#377f45] px-8 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-[#2c6636] active:scale-95"
            >
              Schedule a Site Visit
            </Link>
          </Reveal>
        </div>
      </section>

      <Reveal variant="fade">
        <ClientsSection />
      </Reveal>
    </>
  );
}
