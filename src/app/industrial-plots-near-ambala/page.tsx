import type { Metadata } from "next";
import { Factory, Mail, MapPin, Phone, Plane, Route, Train } from "lucide-react";
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
  title: "Industrial Plots Near Ambala | NH-344 Industrial Property",
  description:
    "Explore industrial plots near Ambala with highway, railway and airport connectivity for manufacturing, warehousing and logistics businesses.",
};

const highlights = [
  {
    icon: Train,
    title: "Eastern Freight Railway Corridor",
    text: "Direct connectivity along the Eastern Freight Railway corridor toward Kolkata for efficient cargo movement.",
  },
  {
    icon: Route,
    title: "NH-344 Highway Frontage",
    text: "The Saha development sits on NH-344, immediately adjacent to Ambala, with direct highway access.",
  },
  {
    icon: Plane,
    title: "Near Ambala Local Airport",
    text: "Close proximity to Ambala's local airport adds an air-cargo option alongside road and rail.",
  },
];

const logistics = [
  {
    benchmark: "Freight Corridor",
    advantage: "Positioned along the Eastern Freight Railway corridor, enabling efficient cargo movement toward Kolkata.",
  },
  {
    benchmark: "Highway Network",
    advantage: "Direct frontage on NH-344, adjacent to Ambala, with onward links across North India.",
  },
  {
    benchmark: "Airport Access",
    advantage: "A short trip to Ambala's local airport supports time-sensitive logistics.",
  },
  {
    benchmark: "Multi-State Reach",
    advantage: "Convenient overlap with Punjab, Himachal Pradesh, Uttarakhand, Uttar Pradesh, Delhi and Haryana.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Are Motia Group's industrial plots located inside Ambala city?",
    answer: (
      <p>
        No. The development is located at Saha, Haryana, on NH-344, directly adjacent to Ambala. This gives
        businesses close proximity to Ambala&rsquo;s markets, highway network and transport infrastructure, without
        the plots being situated inside Ambala city itself.
      </p>
    ),
  },
  {
    question: "What logistics infrastructure supports these industrial plots near Ambala?",
    answer: (
      <p>
        The plots benefit from the Eastern Freight Railway corridor connecting toward Kolkata, direct NH-344 highway
        frontage, and proximity to Ambala&rsquo;s local airport, giving manufacturers and logistics operators
        multiple ways to move cargo efficiently.
      </p>
    ),
  },
  {
    question: "Is this development part of a larger industrial hub near Ambala?",
    answer: (
      <p>
        Yes. HSIIDC has planned an industrial area of roughly 1,200 acres in the surrounding region, which is
        expected to further shorten lead times and reduce logistics costs for businesses located here.
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
    question: "Are Motia Group's industrial plots located inside Ambala city?",
    answer:
      "No. The development is located at Saha, Haryana, on NH-344, directly adjacent to Ambala. This gives businesses close proximity to Ambala's markets, highway network and transport infrastructure, without the plots being situated inside Ambala city itself.",
  },
  {
    question: "What logistics infrastructure supports these industrial plots near Ambala?",
    answer:
      "The plots benefit from the Eastern Freight Railway corridor connecting toward Kolkata, direct NH-344 highway frontage, and proximity to Ambala's local airport, giving manufacturers and logistics operators multiple ways to move cargo efficiently.",
  },
  {
    question: "Is this development part of a larger industrial hub near Ambala?",
    answer:
      "Yes. HSIIDC has planned an industrial area of roughly 1,200 acres in the surrounding region, which is expected to further shorten lead times and reduce logistics costs for businesses located here.",
  },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ProjectHero
        image="/haryana-industral-plots/banner.jpg"
        title="Industrial Plots Near Ambala: NH-344 Freight & Logistics Corridor"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Industrial Plots Near Ambala" }]}
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
                  src="/haryana-industral-plots/last%20ebquri%20now%20section.jpg"
                  alt="Industrial plots near Ambala on NH-344"
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#377f45]">
              Industrial Plots Near Ambala
            </span>
            <div className="mt-4 space-y-4 text-gray-600">
              <p>
                For businesses that live and die by logistics, location near Ambala matters because of what runs
                through it: the Eastern Freight Railway corridor, NH-344, and a local airport, all within reach.
                Motia Group&rsquo;s industrial plots at Saha sit directly on NH-344, adjacent to Ambala, putting
                manufacturers and logistics operators at the intersection of all three.
              </p>
              <p>
                Rather than being located within Ambala city, the development is positioned just outside it, on the
                highway, so that freight can move efficiently toward Kolkata via the Eastern Freight Railway
                corridor while retaining direct road access to Ambala and the surrounding markets.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">FREIGHT & LOGISTICS ADVANTAGE</h2>
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
              See the Full Development at Saha, NH-344
            </h2>
            <p className="text-gray-600">
              Explore complete infrastructure, layout plans and connectivity details for the industrial plots
              adjacent to Ambala.
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
              Why Logistics Businesses Choose This Corridor
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
                  {logistics.map((row, i) => (
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
          src="/haryana-industral-plots/banner.jpg"
          alt="Industrial plots near Ambala with freight rail and highway access"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1c2230]/85" />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Move Your Cargo Faster Near Ambala</h2>
            <p className="mt-4 text-white/80">
              Talk to our team about industrial plots with freight rail, highway and airport connectivity.
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

      <Reveal variant="up">
        <RelatedLinks
          links={[
            { label: "Haryana Industrial Plots", href: "/haryana-industrial-plots" },
            { label: "Industrial Plots in Panchkula", href: "/industrial-plots-panchkula" },
            { label: "Industrial Plots", href: "/industrial-plots" },
            { label: "Property Investment", href: "/property-investment" },
            { label: "Real Estate Developer in Tricity", href: "/real-estate-developer-tricity" },
          ]}
        />
      </Reveal>

      <Reveal variant="fade">
        <ClientsSection />
      </Reveal>
    </>
  );
}
