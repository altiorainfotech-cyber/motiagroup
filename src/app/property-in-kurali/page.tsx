import type { Metadata } from "next";
import { Building2, MapPin, Mail, Phone, Route, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ClientsSection from "@/components/ClientsSection";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import ProjectHero from "@/components/ProjectHero";
import Reveal from "@/components/Reveal";
import { faqPageJsonLd } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Property in Kurali | Residential Plots & Township Projects",
  description:
    "Explore residential plots, township projects and commercial opportunities in Kurali with Motia Group, strategically located near Mohali and Chandigarh.",
};

const areaHighlights = [
  {
    icon: Route,
    title: "Connectivity to Mohali & Chandigarh",
    text: "Kurali sits on the road corridor linking Mohali and Chandigarh, making daily commutes practical for residents.",
  },
  {
    icon: TrendingUp,
    title: "Emerging Growth Corridor",
    text: "As Mohali and Chandigarh expand outward, Kurali is steadily gaining attention as a more affordable, spacious alternative.",
  },
  {
    icon: Building2,
    title: "Plots, Not Just Flats",
    text: "Kurali offers the rare opportunity to own residential plots and design a home the way you want it.",
  },
];

const gillEstate = {
  status: "Delivered",
  location: "Kurali, near Mohali",
  offering: "Residential plots and commercial space",
};

const benchmarks = [
  {
    benchmark: "Location Advantage",
    advantage: "Positioned in Kurali with direct road access toward Mohali and Chandigarh.",
  },
  {
    benchmark: "Plotted Development",
    advantage: "Residential plots that give owners full control over design, layout and construction timeline.",
  },
  {
    benchmark: "Commercial Component",
    advantage: "Dedicated commercial space within the township for everyday retail needs.",
  },
  {
    benchmark: "Developer Track Record",
    advantage: "Backed by Motia Group, a Tricity developer with 15 projects delivered since 2005.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Why should I consider buying property in Kurali?",
    answer: (
      <p>
        Kurali offers residential plots at a scale that is increasingly hard to find closer to central Mohali and
        Chandigarh, while still remaining well connected to both cities by road. This makes it appealing for buyers
        who want space, flexibility and long-term growth potential.
      </p>
    ),
  },
  {
    question: "What does Motia'z Gill Estate in Kurali offer?",
    answer: (
      <p>
        Motia&rsquo;z Gill Estate is a delivered township in Kurali offering residential plots along with dedicated
        commercial space, allowing owners to build their own home while having everyday retail conveniences close
        by.
      </p>
    ),
  },
  {
    question: "Is Kurali well connected to Mohali and Chandigarh?",
    answer: (
      <p>
        Yes. Kurali is positioned along the road corridor connecting Mohali and Chandigarh, giving residents
        practical access to both cities for work, education and daily needs.
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
    question: "Why should I consider buying property in Kurali?",
    answer:
      "Kurali offers residential plots at a scale that is increasingly hard to find closer to central Mohali and Chandigarh, while still remaining well connected to both cities by road. This makes it appealing for buyers who want space, flexibility and long-term growth potential.",
  },
  {
    question: "What does Motia'z Gill Estate in Kurali offer?",
    answer:
      "Motia'z Gill Estate is a delivered township in Kurali offering residential plots along with dedicated commercial space, allowing owners to build their own home while having everyday retail conveniences close by.",
  },
  {
    question: "Is Kurali well connected to Mohali and Chandigarh?",
    answer:
      "Yes. Kurali is positioned along the road corridor connecting Mohali and Chandigarh, giving residents practical access to both cities for work, education and daily needs.",
  },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ProjectHero
        image="/motia-gill-estate/bannergillestate-1.webp"
        title="Property in Kurali — Residential Plots & Township Living Near Mohali"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Property in Kurali" }]}
        ctaLabel="Enquire About Kurali"
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
                  src="/motia-gill-estate/bannergillestate-1.webp"
                  alt="Motia'z Gill Estate township in Kurali"
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#377f45]">
              Property in Kurali
            </span>
            <div className="mt-4 space-y-4 text-gray-600">
              <p>
                Kurali is quietly becoming one of the more interesting residential addresses on the Mohali-Chandigarh
                map. Positioned on the road corridor between the two cities, it offers buyers a chance to own
                spacious residential plots at a scale that has become harder to find closer to the city centres.
              </p>
              <p>
                Motia Group brought this vision to life with Motia&rsquo;z Gill Estate, a delivered township in
                Kurali combining residential plots with dedicated commercial space, giving residents the freedom to
                design their own home along with everyday retail convenience close by.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">WHY KURALI IS WORTH A LOOK</h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {areaHighlights.map((item, i) => (
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
            Motia&rsquo;z Gill Estate, Kurali
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            A delivered residential and commercial township in the heart of Kurali:
          </p>
        </Reveal>

        <Reveal variant="up" delay={100}>
          <div className="mt-12 grid gap-8 rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5 sm:grid-cols-3 sm:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#377f45]">Status</p>
              <p className="mt-2 text-lg font-bold text-gray-900">{gillEstate.status}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#377f45]">Location</p>
              <p className="mt-2 text-lg font-bold text-gray-900">{gillEstate.location}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#377f45]">Offering</p>
              <p className="mt-2 text-lg font-bold text-gray-900">{gillEstate.offering}</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/motia-gill-estate"
              className="inline-block rounded bg-[#377f45] px-8 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-[#2c6636] active:scale-95"
            >
              View Motia&rsquo;z Gill Estate
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Buy Property in Kurali with Motia Group
            </h2>
          </Reveal>

          <Reveal variant="up" delay={100}>
            <div className="mt-10 overflow-x-auto rounded-2xl shadow-lg ring-1 ring-black/5">
              <table className="w-full min-w-[560px] border-collapse bg-white text-left">
                <thead>
                  <tr className="bg-[#377f45] text-white">
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wide">Benchmark</th>
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wide">The Motia Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  {benchmarks.map((row, i) => (
                    <tr key={row.benchmark} className={i % 2 === 1 ? "bg-[#f4f8f5]" : "bg-white"}>
                      <td className="px-6 py-4 text-sm font-bold text-gray-900">{row.benchmark}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{row.advantage}</td>
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
          src="/motiaz-royal-citi/citi-banner-1.webp"
          alt="Motia Group development near Kurali and Mohali"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1c2230]/85" />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Discover Your Plot in Kurali Today</h2>
            <p className="mt-4 text-white/80">
              Connect with our property experts to learn more about Motia&rsquo;z Gill Estate in Kurali.
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
