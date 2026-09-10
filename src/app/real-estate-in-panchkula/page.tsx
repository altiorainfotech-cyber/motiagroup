import type { Metadata } from "next";
import { Factory, MapPin, Route, Building2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ClientsSection from "@/components/ClientsSection";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import ProjectHero from "@/components/ProjectHero";
import Reveal from "@/components/Reveal";
import { faqPageJsonLd } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Real Estate in Panchkula | Property & Investment Opportunities",
  description:
    "Explore residential, commercial and investment property opportunities in Panchkula and its surrounding growth corridors with Motia Group.",
};

const drivers = [
  {
    icon: Route,
    title: "Tricity-Wide Connectivity",
    text: "Panchkula is directly linked to Chandigarh, Mohali and Zirakpur, keeping it firmly within the Tricity market.",
  },
  {
    icon: MapPin,
    title: "Panchkula-Yamunanagar Corridor",
    text: "NH-344 runs from Panchkula toward Yamunanagar, passing through Saha, a fast-developing industrial belt.",
  },
  {
    icon: Factory,
    title: "Industrial Growth at Saha",
    text: "Motia Group's Haryana Industrial Plots sit on this very corridor, adjacent to Ambala, minutes from the highway.",
  },
  {
    icon: Building2,
    title: "Access to Zirakpur & Mohali",
    text: "Motia Group's Zirakpur homes and Mohali-corridor plots are a short drive from Panchkula.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Does Motia Group have a residential or commercial project located in Panchkula?",
    answer: (
      <p>
        Not directly within Panchkula itself. Motia Group&rsquo;s footprint spans the wider Chandigarh Tricity
        region, with residential and commercial developments in Zirakpur and a plotted township near Mohali. Our
        Haryana Industrial Plots at Saha sit on the Panchkula-Yamunanagar highway corridor, connecting our portfolio
        to the Panchkula side of the Tricity without being located inside Panchkula itself.
      </p>
    ),
  },
  {
    question: "How is Panchkula connected to Motia Group's Haryana Industrial Plots at Saha?",
    answer: (
      <p>
        The Haryana Industrial Plots are located in Saha on NH-344, the highway corridor that runs between Panchkula
        and Yamunanagar and sits adjacent to Ambala, giving investors based around Panchkula direct road access to
        the site.
      </p>
    ),
  },
  {
    question: "What investment opportunities does Motia Group offer close to Panchkula?",
    answer: (
      <p>
        Buyers connected to Panchkula can explore Motia Group&rsquo;s residential and commercial projects in nearby
        Zirakpur, a plotted development near Mohali, and industrial plots at Saha along the Panchkula-Yamunanagar
        corridor.
      </p>
    ),
  },
  {
    question: "Is Zirakpur close to Panchkula?",
    answer: (
      <p>
        Yes. Zirakpur, Panchkula and Chandigarh sit next to one another as part of the same Tricity region, connected
        by the Chandigarh-Ambala Highway, making Motia Group&rsquo;s Zirakpur projects easily accessible from
        Panchkula.
      </p>
    ),
  },
];

const faqSchema = faqPageJsonLd([
  {
    question: "Does Motia Group have a residential or commercial project located in Panchkula?",
    answer:
      "Not directly within Panchkula itself. Motia Group's footprint spans the wider Chandigarh Tricity region, with residential and commercial developments in Zirakpur and a plotted township near Mohali. Our Haryana Industrial Plots at Saha sit on the Panchkula-Yamunanagar highway corridor, connecting our portfolio to the Panchkula side of the Tricity without being located inside Panchkula itself.",
  },
  {
    question: "How is Panchkula connected to Motia Group's Haryana Industrial Plots at Saha?",
    answer:
      "The Haryana Industrial Plots are located in Saha on NH-344, the highway corridor that runs between Panchkula and Yamunanagar and sits adjacent to Ambala, giving investors based around Panchkula direct road access to the site.",
  },
  {
    question: "What investment opportunities does Motia Group offer close to Panchkula?",
    answer:
      "Buyers connected to Panchkula can explore Motia Group's residential and commercial projects in nearby Zirakpur, a plotted development near Mohali, and industrial plots at Saha along the Panchkula-Yamunanagar corridor.",
  },
  {
    question: "Is Zirakpur close to Panchkula?",
    answer:
      "Yes. Zirakpur, Panchkula and Chandigarh sit next to one another as part of the same Tricity region, connected by the Chandigarh-Ambala Highway, making Motia Group's Zirakpur projects easily accessible from Panchkula.",
  },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ProjectHero
        image="/haryana-industral-plots/banner.jpg"
        title="Panchkula & the Tricity: Connected Growth Along the Corridor"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Real Estate in Panchkula" }]}
        ctaLabel="Explore Investment Options"
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
                  alt="Industrial plots on the Panchkula-Yamunanagar highway corridor"
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#377f45]">
              Real Estate in Panchkula
            </span>
            <div className="mt-4 space-y-4 text-gray-600">
              <p>
                Panchkula is one of the three cities that make up the Chandigarh Tricity, alongside Chandigarh and
                Mohali, and it shares a border directly with Zirakpur. That closeness means growth in one part of the
                Tricity, whether new housing in Zirakpur or industrial development along the highway corridor,
                tends to benefit the whole region, Panchkula included.
              </p>
              <p>
                Motia Group does not currently have a project physically sited within Panchkula. What we do offer
                buyers connected to Panchkula is easy access to our developments elsewhere in the Tricity, and a
                direct highway link to our Haryana Industrial Plots in Saha, which sit on the
                Panchkula-Yamunanagar corridor (NH-344), adjacent to Ambala.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
              HOW MOTIA GROUP CONNECTS TO THE PANCHKULA REGION
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {drivers.map((item, i) => (
              <Reveal key={item.title} variant="up" delay={i * 100}>
                <div className="corner-shoot-card rounded-2xl bg-white p-6 ring-1 ring-black/5">
                  <div className="corner-shoot-content">
                    <span className="card-icon flex size-12 items-center justify-center rounded-xl bg-[#377f45]/10 text-[#377f45]">
                      <item.icon className="size-6" />
                    </span>
                    <h3 className="mt-5 text-base font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-28">
        <Image
          src="/motiaz-royal-citi/citi-banner-1.webp"
          alt="Motia Group development in the Tricity region near Panchkula"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1c2230]/85" />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">One Region, Many Opportunities</h2>
            <p className="mt-4 text-white/80">
              From homes in Zirakpur to industrial plots on the Panchkula-Yamunanagar corridor, Motia Group&rsquo;s
              portfolio spans the growth belt that surrounds Panchkula.
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
            Real Estate in Panchkula: Frequently Asked Questions
          </h2>
        </Reveal>

        <Reveal variant="up" delay={100} className="mt-12">
          <FaqAccordion items={faqs} />
        </Reveal>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Explore Opportunities Near Panchkula</h2>
            <p className="mt-4 text-gray-600">
              Speak with our team about our Zirakpur homes, Mohali-corridor plots and the Haryana Industrial Plots
              on the Panchkula-Yamunanagar highway.
            </p>
            <Link
              href="/contact-us"
              className="mt-8 inline-block rounded bg-[#377f45] px-8 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-[#2c6636] active:scale-95"
            >
              Contact Our Team
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
