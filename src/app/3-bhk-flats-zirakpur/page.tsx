import type { Metadata } from "next";
import { Building2, Home as HomeIcon, Mail, MapPin, Phone, ShieldCheck, Sofa } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ClientsSection from "@/components/ClientsSection";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import ProjectHero from "@/components/ProjectHero";
import Reveal from "@/components/Reveal";
import { faqPageJsonLd } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "3 BHK Flats in Zirakpur | Premium Apartments & Homes",
  description:
    "Explore 3 BHK flats and premium residential projects in Zirakpur with modern amenities, convenient locations and quality construction by Motia Group.",
};

const highlights = [
  {
    icon: Sofa,
    title: "Spacious 3 BHK Layouts",
    text: "Thoughtfully planned 3 bedroom homes with generous living areas, natural light and functional layouts.",
  },
  {
    icon: ShieldCheck,
    title: "Modern Amenities",
    text: "Landscaped grounds, dedicated parking and secure, gated living for growing families.",
  },
  {
    icon: Building2,
    title: "Prime Zirakpur Locations",
    text: "Homes positioned along Zirakpur's key residential corridors, close to schools, markets and highways.",
  },
];

const options = [
  {
    icon: Building2,
    image: "/motia-heights/hero%20banner.png",
    title: "Motia Heights",
    text: "Delivered 3 BHK apartments in Dhakoli, Zirakpur, designed for families seeking a ready-to-move premium home.",
  },
  {
    icon: HomeIcon,
    image: "/motiahuys/banner.png",
    title: "Motia HUYS",
    text: "2 & 3 BHK independent floors on Peer Muchalla Road, Zirakpur, for buyers who prefer low-density, independent living.",
  },
];

const comparison = [
  {
    property: "Motia Heights",
    highlights: "Dhakoli, Zirakpur - premium delivered 3 BHK apartments with modern amenities.",
  },
  {
    property: "Motia HUYS",
    highlights: "Peer Muchalla Road, Zirakpur - delivered 2 & 3 BHK independent floors.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Where in Zirakpur can I find 3 BHK flats by Motia Group?",
    answer: (
      <p>
        Motia Heights in Dhakoli, Zirakpur offers premium 3 BHK apartments, while Motia HUYS on Peer Muchalla Road,
        Zirakpur offers 3 BHK independent floors for buyers who prefer a low-density, more private living format.
      </p>
    ),
  },
  {
    question: "What amenities do Motia Group's 3 BHK homes include?",
    answer: (
      <p>
        Our 3 BHK residences are built with modern amenities including landscaped common areas, dedicated parking,
        secure gated access and quality construction finishes throughout.
      </p>
    ),
  },
  {
    question: "Is Motia Heights ready to move into?",
    answer: (
      <p>
        Yes, Motia Heights is a delivered project in Dhakoli, Zirakpur, meaning 3 BHK homes there are ready for
        immediate possession.
      </p>
    ),
  },
];

const contactInfo: { icon: typeof Phone; label: string; value: string; href?: string }[] = [
  { icon: Phone, label: "Phone", value: "+91 8860095959", href: "tel:+918860095959" },
  { icon: Mail, label: "Email", value: "info@motiagroup.com", href: "mailto:info@motiagroup.com" },
  {
    icon: MapPin,
    label: "Corporate Office",
    value: "Motia'z Royal Business Park, 4th Floor, Chandigarh-Ambala Highway, Zirakpur",
  },
];

const faqSchema = faqPageJsonLd([
  {
    question: "Where in Zirakpur can I find 3 BHK flats by Motia Group?",
    answer:
      "Motia Heights in Dhakoli, Zirakpur offers premium 3 BHK apartments, while Motia HUYS on Peer Muchalla Road, Zirakpur offers 3 BHK independent floors for buyers who prefer a low-density, more private living format.",
  },
  {
    question: "What amenities do Motia Group's 3 BHK homes include?",
    answer:
      "Our 3 BHK residences are built with modern amenities including landscaped common areas, dedicated parking, secure gated access and quality construction finishes throughout.",
  },
  {
    question: "Is Motia Heights ready to move into?",
    answer:
      "Yes, Motia Heights is a delivered project in Dhakoli, Zirakpur, meaning 3 BHK homes there are ready for immediate possession.",
  },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ProjectHero
        image="/motia-heights/hero%20banner.png"
        title="3 BHK Flats in Zirakpur — Premium Apartments by Motia Group"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "3 BHK Flats in Zirakpur" }]}
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
                  src="/motia-heights/hero%20banner.png"
                  alt="3 BHK apartments at Motia Heights, Zirakpur"
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#377f45]">
              3 BHK Flats in Zirakpur
            </span>
            <div className="mt-4 space-y-4 text-gray-600">
              <p>
                If you are searching for a 3 BHK flat in Zirakpur, Motia Heights in Dhakoli offers spacious, premium
                apartments built for family living, with modern amenities and a location that keeps you close to
                schools, markets and major highways.
              </p>
              <p>
                For buyers who prefer the privacy of an independent floor over an apartment, Motia HUYS on Peer
                Muchalla Road offers 3 BHK independent floors alongside 2 BHK options, giving you flexibility within
                the same trusted Zirakpur address.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">WHY CHOOSE A 3 BHK WITH MOTIA GROUP</h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {highlights.map((item, i) => (
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
            Choose Your Format
          </span>
          <h2 className="mt-2 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Where to Find 3 BHK Homes in Zirakpur
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Two ways to own a 3 BHK home with Motia Group in Zirakpur:
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {options.map((item, i) => (
            <Reveal key={item.title} variant="up" delay={i * 100}>
              <div className="group overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-[#377f45]/10 text-[#377f45]">
                    <item.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              Compare Motia Group's 3 BHK Homes in Zirakpur
            </h2>
          </Reveal>

          <Reveal variant="up" delay={100}>
            <div className="mt-10 overflow-x-auto rounded-2xl shadow-lg ring-1 ring-black/5">
              <table className="w-full min-w-[560px] border-collapse bg-white text-left">
                <thead>
                  <tr className="bg-[#377f45] text-white">
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wide">Property</th>
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wide">3 BHK Highlights</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row.property} className={i % 2 === 1 ? "bg-[#f4f8f5]" : "bg-white"}>
                      <td className="px-6 py-4 text-sm font-bold text-gray-900">{row.property}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{row.highlights}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
          src="/motiahuys/banner.png"
          alt="Motia Group residential homes in Zirakpur"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1c2230]/85" />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Find Your 3 BHK Home in Zirakpur</h2>
            <p className="mt-4 text-white/80">
              Speak with our team to schedule a visit to Motia Heights or Motia HUYS.
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
