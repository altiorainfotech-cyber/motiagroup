import type { Metadata } from "next";
import { Building2, Factory, LineChart, Mail, MapPin, Phone, PiggyBank, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ClientsSection from "@/components/ClientsSection";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import ProjectHero from "@/components/ProjectHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Property Investment in Zirakpur & Tricity | Motia Group",
  description:
    "Explore residential, commercial and industrial property investment opportunities in Zirakpur, Mohali, Panchkula, Kurali and the Tricity region.",
};

const angles = [
  {
    icon: LineChart,
    title: "Capital Appreciation",
    text: "Residential apartments and plots positioned along Zirakpur, Mohali and Kurali growth corridors.",
  },
  {
    icon: Store,
    title: "Rental Yield & Pre-Leased Commercial",
    text: "High-street retail and office space designed for steady footfall and long-term lease income.",
  },
  {
    icon: Factory,
    title: "Industrial & Logistics Investment",
    text: "Highway-connected industrial plots serving manufacturing, warehousing and logistics demand.",
  },
];

const avenues = [
  {
    avenue: "Residential",
    why: "Apartments, independent floors and plots across Zirakpur and the Kurali corridor, positioned for long-term capital appreciation.",
  },
  {
    avenue: "Commercial",
    why: "High-street shops and office space at Motia High Street and Motia'z Royal Business Park, suited to rental yield and pre-leased income.",
  },
  {
    avenue: "Industrial",
    why: "Highway-connected plots at Saha on NH-344, positioned for warehousing and logistics demand across the Panchkula-Ambala corridor.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Why invest in property in Zirakpur and the Tricity region?",
    answer: (
      <p>
        Zirakpur sits at the heart of the Tricity growth corridor, connecting Chandigarh, Mohali and Panchkula.
        Motia Group has been developing here since 2005, delivering 15 projects and 4,500+ homes and offices, which
        gives investors a long track record to evaluate alongside the area&rsquo;s continuing growth.
      </p>
    ),
  },
  {
    question: "What types of property investment does Motia Group offer?",
    answer: (
      <p>
        Investors can choose from residential apartments and plots, commercial high-street retail and office space,
        and industrial plots, allowing a portfolio approach across capital appreciation, rental yield and
        logistics-driven demand.
      </p>
    ),
  },
  {
    question: "Does Motia Group offer pre-leased commercial investment opportunities?",
    answer: (
      <p>
        Motia Group&rsquo;s commercial developments, including Motia High Street and Motia&rsquo;z Royal Business
        Park, are designed for retail and office tenancy, making them suited to investors seeking rental income
        alongside property ownership.
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

export default function Page() {
  return (
    <>
      <ProjectHero
        image="/motia-citi/hero%20banner.png"
        title="Property Investment in Zirakpur & the Tricity Region"
        ctaLabel="Talk to an Investment Advisor"
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
                  alt="Property investment opportunities across the Tricity region"
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#377f45]">
              Property Investment
            </span>
            <div className="mt-4 space-y-4 text-gray-600">
              <p>
                Property investment in Zirakpur and the wider Tricity region is not a one-size-fits-all decision.
                Some investors want steady capital appreciation from residential real estate, others want rental
                income from pre-leased commercial space, and some are looking further out, toward industrial and
                logistics land.
              </p>
              <p>
                Motia Group has spent over 20 years building across all three categories, giving investors a single
                developer relationship whether the goal is a residential unit in a growing neighbourhood, a
                commercial shop with lease income potential, or an industrial plot positioned on a major highway
                corridor.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">THREE WAYS TO INVEST</h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {angles.map((item, i) => (
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
            Explore Further
          </span>
          <h2 className="mt-2 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Browse Our Full Project Categories
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            For complete project listings within each category, visit:
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/residential-projects"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-gray-900 shadow-lg ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:text-[#377f45]"
          >
            <Building2 className="size-5 text-[#377f45]" />
            Residential Projects
          </Link>
          <Link
            href="/commercial-projects"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-gray-900 shadow-lg ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:text-[#377f45]"
          >
            <Store className="size-5 text-[#377f45]" />
            Commercial Projects
          </Link>
          <Link
            href="/industrial-plots"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-gray-900 shadow-lg ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:text-[#377f45]"
          >
            <Factory className="size-5 text-[#377f45]" />
            Industrial Plots
          </Link>
        </div>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              Matching Investment Goals to Property Type
            </h2>
          </Reveal>

          <Reveal variant="up" delay={100}>
            <div className="mt-10 overflow-x-auto rounded-2xl shadow-lg ring-1 ring-black/5">
              <table className="w-full min-w-[560px] border-collapse bg-white text-left">
                <thead>
                  <tr className="bg-[#377f45] text-white">
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wide">Investment Avenue</th>
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wide">Why It Works</th>
                  </tr>
                </thead>
                <tbody>
                  {avenues.map((row, i) => (
                    <tr key={row.avenue} className={i % 2 === 1 ? "bg-[#f4f8f5]" : "bg-white"}>
                      <td className="px-6 py-4 text-sm font-bold text-gray-900">{row.avenue}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{row.why}</td>
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
          alt="Motia Group property investment opportunities"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1c2230]/85" />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#377f45]/20 text-[#7fce8f]">
              <PiggyBank className="size-7" />
            </span>
            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">Build Your Property Portfolio Today</h2>
            <p className="mt-4 text-white/80">
              Talk to our team about residential, commercial and industrial investment opportunities.
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
              Talk to an Investment Advisor
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
