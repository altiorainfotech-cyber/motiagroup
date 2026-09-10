import type { Metadata } from "next";
import { Building2, Factory, Mail, MapPin, Network, Phone, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ClientsSection from "@/components/ClientsSection";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import ProjectHero from "@/components/ProjectHero";
import RelatedLinks from "@/components/RelatedLinks";
import Reveal from "@/components/Reveal";
import { faqPageJsonLd } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Real Estate Developer in Tricity | Chandigarh, Mohali & Panchkula",
  description:
    "Explore residential, commercial and industrial developments by Motia Group across Chandigarh Tricity, including Zirakpur, Mohali, Panchkula and nearby growth corridors.",
};

const footprint = [
  {
    icon: Network,
    title: "Region-Wide Presence",
    text: "Developments and growth-corridor connectivity spanning Zirakpur, Mohali and the wider Panchkula-facing highway network.",
  },
  {
    icon: Building2,
    title: "20+ Years of Delivery",
    text: "Established in 2005, with 15 projects and 4,500+ homes and offices delivered across the Tricity region.",
  },
  {
    icon: Store,
    title: "Diversified Portfolio",
    text: "Residential apartments and plots, commercial high-street and office space, and industrial land under one developer.",
  },
];

const portfolio = [
  {
    icon: Building2,
    image: "/home-page-hero-section/harmonygreens-banner-02.webp",
    title: "Residential Communities",
    text: "Apartments, independent floors and plotted developments across Zirakpur and the Kurali corridor near Mohali.",
  },
  {
    icon: Store,
    image: "/high-street/banner.jpg",
    title: "Commercial Spaces",
    text: "High-street retail and office space positioned on major Zirakpur arterial roads for strong footfall and visibility.",
  },
  {
    icon: Factory,
    image: "/haryana-industral-plots/banner.jpg",
    title: "Industrial Land",
    text: "Fully developed industrial plots at Saha on NH-344, connecting the Panchkula-Yamunanagar highway corridor to manufacturing and logistics demand.",
  },
];

const pillars = [
  {
    pillar: "Region-Wide Footprint",
    commitment: "Projects and growth-corridor infrastructure spanning Zirakpur, the Mohali-facing Kurali belt, and the Panchkula highway corridor.",
  },
  {
    pillar: "Portfolio Diversification",
    commitment: "Residential, commercial and industrial developments under a single, accountable developer.",
  },
  {
    pillar: "Proven Delivery Track Record",
    commitment: "15 projects and 4,500+ homes and offices delivered since 2005.",
  },
  {
    pillar: "Local Market Expertise",
    commitment: "Two decades of on-ground experience in Tricity land parcels, approvals and construction quality.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Which parts of the Tricity region does Motia Group operate in?",
    answer: (
      <p>
        Motia Group is headquartered in Zirakpur and has delivered residential and commercial projects across
        Zirakpur and the Kurali belt near Mohali. Its industrial development at Saha, Haryana sits directly on the
        Panchkula-Yamunanagar highway corridor, giving it strong connectivity into Panchkula and the wider Tricity
        growth region.
      </p>
    ),
  },
  {
    question: "Does Motia Group build both residential and commercial projects?",
    answer: (
      <p>
        Yes. The portfolio spans residential apartments, independent floors and plots, commercial high-street shops
        and office space, and industrial plots, allowing homebuyers and investors to work with one trusted developer
        across categories.
      </p>
    ),
  },
  {
    question: "How experienced is Motia Group as a Tricity real estate developer?",
    answer: (
      <p>
        Motia Group has been developing real estate since 2005, completing 15 projects and delivering more than
        4,500 homes and offices across the region.
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
    question: "Which parts of the Tricity region does Motia Group operate in?",
    answer:
      "Motia Group is headquartered in Zirakpur and has delivered residential and commercial projects across Zirakpur and the Kurali belt near Mohali. Its industrial development at Saha, Haryana sits directly on the Panchkula-Yamunanagar highway corridor, giving it strong connectivity into Panchkula and the wider Tricity growth region.",
  },
  {
    question: "Does Motia Group build both residential and commercial projects?",
    answer:
      "Yes. The portfolio spans residential apartments, independent floors and plots, commercial high-street shops and office space, and industrial plots, allowing homebuyers and investors to work with one trusted developer across categories.",
  },
  {
    question: "How experienced is Motia Group as a Tricity real estate developer?",
    answer:
      "Motia Group has been developing real estate since 2005, completing 15 projects and delivering more than 4,500 homes and offices across the region.",
  },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ProjectHero
        image="/motiaz-royal-citi/citi-banner-1.webp"
        title="A Real Estate Developer Building Across the Chandigarh Tricity Region"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Real Estate Developer in Tricity" }]}
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
                  src="/home-page-hero-section/harmonygreens-banner-01.webp"
                  alt="A Motia Group development in the Chandigarh Tricity region"
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#377f45]">
              Real Estate Developer in Tricity
            </span>
            <div className="mt-4 space-y-4 text-gray-600">
              <p>
                The Chandigarh Tricity region, encompassing Chandigarh, Mohali, Panchkula and the rapidly expanding
                Zirakpur corridor, has become one of North India&rsquo;s most sought-after property markets. Since
                2005, Motia Group has built its reputation as a real estate developer serving this entire region,
                rather than a single pocket of it.
              </p>
              <p>
                From residential communities and independent floors to commercial high streets and industrial land,
                Motia Group&rsquo;s projects and growth-corridor connectivity span Zirakpur, the Kurali belt near
                Mohali, and the Panchkula-Yamunanagar highway corridor, giving homebuyers, retailers and investors a
                single trusted name across categories and geographies.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">A DEVELOPER FOR THE WHOLE TRICITY</h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {footprint.map((item, i) => (
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
            Our Portfolio
          </span>
          <h2 className="mt-2 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            One Developer, Three Categories, One Region
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Explore the categories of development Motia Group brings to the Tricity region:
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {portfolio.map((item, i) => (
            <Reveal key={item.title} variant="up" delay={i * 100}>
              <div className="group overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
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
              Why Choose Motia Group Across the Tricity Region
            </h2>
          </Reveal>

          <Reveal variant="up" delay={100}>
            <div className="mt-10 overflow-x-auto rounded-2xl shadow-lg ring-1 ring-black/5">
              <table className="w-full min-w-[560px] border-collapse bg-white text-left">
                <thead>
                  <tr className="bg-[#377f45] text-white">
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wide">Pillar of Excellence</th>
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wide">
                      Motia Group Commitment
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pillars.map((row, i) => (
                    <tr key={row.pillar} className={i % 2 === 1 ? "bg-[#f4f8f5]" : "bg-white"}>
                      <td className="px-6 py-4 text-sm font-bold text-gray-900">{row.pillar}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{row.commitment}</td>
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
          src="/motiaz-royal-business-park/banner.jpeg"
          alt="Motia Group development in the Chandigarh Tricity region"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1c2230]/85" />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Explore Motia Group Across the Tricity</h2>
            <p className="mt-4 text-white/80">
              Connect with our team to explore residential, commercial and industrial opportunities across the
              region.
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

      <Reveal variant="up">
        <RelatedLinks
          links={[
            { label: "Real Estate in Tricity", href: "/real-estate-in-tricity" },
            { label: "Real Estate Company in Chandigarh", href: "/real-estate-company-in-chandigarh" },
            { label: "Best Builders in Mohali", href: "/best-builders-in-mohali" },
            { label: "Residential Projects in Zirakpur", href: "/residential-projects" },
            { label: "Commercial Projects in Zirakpur", href: "/commercial-projects" },
          ]}
        />
      </Reveal>

      <Reveal variant="fade">
        <ClientsSection />
      </Reveal>
    </>
  );
}
