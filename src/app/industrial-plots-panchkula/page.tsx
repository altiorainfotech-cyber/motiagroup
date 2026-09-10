import type { Metadata } from "next";
import { Factory, Mail, MapPin, Phone, Route, Shield, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ClientsSection from "@/components/ClientsSection";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import ProjectHero from "@/components/ProjectHero";
import Reveal from "@/components/Reveal";
import { faqPageJsonLd } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Industrial Plots in Panchkula | Industrial Property & Investment",
  description:
    "Explore industrial plot opportunities in Panchkula with strategic connectivity for manufacturing, warehousing, logistics and business expansion.",
};

const highlights = [
  {
    icon: Route,
    title: "Direct Panchkula-Yamunanagar Highway Access",
    text: "The Saha development sits directly on NH-344, the highway corridor linking Panchkula to Yamunanagar.",
  },
  {
    icon: Truck,
    title: "Multimodal Connectivity",
    text: "Highway frontage, freight rail access and proximity to Ambala local airport support fast, flexible logistics.",
  },
  {
    icon: Shield,
    title: "Investment-Ready Infrastructure",
    text: "60-ft interior roads, sewage treatment, 24/7 security and a planned high street inside the campus.",
  },
];

const benchmarks = [
  {
    benchmark: "Connectivity to Panchkula",
    advantage: "Direct frontage on NH-344, the Panchkula-Yamunanagar highway corridor.",
  },
  {
    benchmark: "Development Scale",
    advantage: "Part of an HSIIDC-planned industrial belt of roughly 1,200 acres in the surrounding area.",
  },
  {
    benchmark: "Infrastructure",
    advantage: "Gated, secure plots with interior roads, utilities and a dedicated commercial high street.",
  },
  {
    benchmark: "Developer Track Record",
    advantage: "Delivered by Motia Group, a Tricity real estate developer with 15 projects since 2005.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Does Motia Group have industrial plots located inside Panchkula?",
    answer: (
      <p>
        Motia Group&rsquo;s industrial development is located at Saha, Haryana, on NH-344, which is the
        Panchkula-Yamunanagar highway. This gives Panchkula-based businesses fast, direct highway access to the
        development, though the plots themselves are situated at Saha rather than within Panchkula city.
      </p>
    ),
  },
  {
    question: "What connectivity do these industrial plots offer from Panchkula?",
    answer: (
      <p>
        The development sits on NH-344 with direct highway frontage toward Panchkula, along with freight rail access
        and proximity to Ambala local airport, supporting manufacturing, warehousing and logistics operations.
      </p>
    ),
  },
  {
    question: "Where can I see the full details of these industrial plots?",
    answer: (
      <p>
        Full project details, infrastructure specifications and location information are available on our{" "}
        <Link href="/haryana-industrial-plots" className="font-semibold text-[#377f45] hover:underline">
          Haryana Industrial Plots
        </Link>{" "}
        page, alongside our broader{" "}
        <Link href="/industrial-plots" className="font-semibold text-[#377f45] hover:underline">
          Industrial Plots
        </Link>{" "}
        overview.
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
    question: "Does Motia Group have industrial plots located inside Panchkula?",
    answer:
      "Motia Group's industrial development is located at Saha, Haryana, on NH-344, which is the Panchkula-Yamunanagar highway. This gives Panchkula-based businesses fast, direct highway access to the development, though the plots themselves are situated at Saha rather than within Panchkula city.",
  },
  {
    question: "What connectivity do these industrial plots offer from Panchkula?",
    answer:
      "The development sits on NH-344 with direct highway frontage toward Panchkula, along with freight rail access and proximity to Ambala local airport, supporting manufacturing, warehousing and logistics operations.",
  },
  {
    question: "Where can I see the full details of these industrial plots?",
    answer:
      "Full project details, infrastructure specifications and location information are available on our Haryana Industrial Plots page, alongside our broader Industrial Plots overview.",
  },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ProjectHero
        image="/haryana-industral-plots/banner.jpg"
        title="Industrial Plots on the Panchkula-Yamunanagar Highway Corridor"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Industrial Plots in Panchkula" }]}
        ctaLabel="Enquire Now"
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
                  src="/haryana-industral-plots/banner.jpg"
                  alt="Industrial plots on NH-344, the Panchkula-Yamunanagar highway"
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#377f45]">
              Industrial Plots in Panchkula
            </span>
            <div className="mt-4 space-y-4 text-gray-600">
              <p>
                Businesses searching for industrial plots in Panchkula are often looking for one thing above all:
                fast, reliable highway access. Motia Group&rsquo;s industrial plots at Saha sit directly on NH-344,
                the Panchkula-Yamunanagar highway, giving Panchkula-based manufacturers, warehousers and logistics
                operators a direct highway route into a fully developed industrial campus.
              </p>
              <p>
                While the plots are located at Saha rather than inside Panchkula city itself, the highway-frontage
                position was chosen specifically to serve businesses expanding out of the Panchkula and Tricity
                region who need scale, connectivity and investment-ready infrastructure.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">PANCHKULA CORRIDOR ADVANTAGE</h2>
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
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-2xl bg-white p-8 text-center shadow-lg ring-1 ring-black/5 sm:p-10">
            <span className="flex size-14 items-center justify-center rounded-xl bg-[#377f45]/10 text-[#377f45]">
              <Factory className="size-7" />
            </span>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Explore the Full Development at Saha, NH-344
            </h2>
            <p className="text-gray-600">
              For complete infrastructure details, layout plans and connectivity information on the industrial plots
              serving the Panchkula corridor, visit our dedicated project page.
            </p>
            <Link
              href="/haryana-industrial-plots"
              className="inline-block rounded bg-[#377f45] px-8 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-[#2c6636] active:scale-95"
            >
              View Haryana Industrial Plots
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Investors Choose This Panchkula-Facing Corridor
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
          src="/haryana-industral-plots/last%20ebquri%20now%20section.jpg"
          alt="Industrial plots layout near Panchkula on NH-344"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1c2230]/85" />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Expand Your Business Toward Panchkula</h2>
            <p className="mt-4 text-white/80">
              Speak with our team about industrial plots on the Panchkula-Yamunanagar highway corridor.
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
              Enquire Now
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
