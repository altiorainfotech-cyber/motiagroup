import type { Metadata } from "next";
import { Building2, Factory, Home as HomeIcon, MapPin, Store } from "lucide-react";
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
  title: "Real Estate in Tricity | Chandigarh, Mohali & Panchkula",
  description:
    "Explore residential, commercial and industrial real estate opportunities across Chandigarh Tricity, including Zirakpur, Mohali and Panchkula.",
};

const segments = [
  {
    icon: HomeIcon,
    title: "Residential Growth",
    text: "From apartments to plotted homes, demand keeps expanding across Zirakpur, Mohali's corridor and beyond.",
  },
  {
    icon: Store,
    title: "Commercial & Retail Corridors",
    text: "High streets, office spaces and retail plazas continue to grow along the region's busiest roads.",
  },
  {
    icon: Factory,
    title: "Industrial & Highway Development",
    text: "Emerging belts like Saha on the Panchkula-Yamunanagar corridor are opening up industrial opportunities.",
  },
  {
    icon: MapPin,
    title: "Infrastructure & Connectivity",
    text: "Highways, an international airport and planned sectors tie Chandigarh, Mohali, Panchkula and Zirakpur together.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "What areas make up the Chandigarh Tricity region?",
    answer: (
      <p>
        The Chandigarh Tricity refers to Chandigarh, Mohali and Panchkula, together with the fast-growing town of
        Zirakpur that borders both Chandigarh and Panchkula.
      </p>
    ),
  },
  {
    question: "Which types of real estate does Motia Group offer across the Tricity?",
    answer: (
      <p>
        Motia Group&rsquo;s portfolio spans residential apartments and plots, commercial office space and retail
        high streets, plus industrial plots, built up over 20+ years and 15 completed projects.
      </p>
    ),
  },
  {
    question: "Where are Motia Group's residential and commercial projects located within the Tricity?",
    answer: (
      <p>
        Most residential and commercial developments, including Motia&rsquo;z Royal Citi, Motia&rsquo;z Harmony
        Greens, Motia Heights, Motia Citi, Motia HUYS, Motia High Street and Motia&rsquo;z Royal Business Park, are
        in and around Zirakpur, with Motia&rsquo;z Gill Estate located in Kurali, near Mohali. You can browse the
        full list on our{" "}
        <Link href="/residential-projects" className="font-semibold text-[#377f45] hover:underline">
          residential projects
        </Link>{" "}
        and{" "}
        <Link href="/commercial-projects" className="font-semibold text-[#377f45] hover:underline">
          commercial projects
        </Link>{" "}
        pages.
      </p>
    ),
  },
  {
    question: "Is industrial real estate available in the Tricity growth corridor?",
    answer: (
      <p>
        Yes. Motia Group&rsquo;s Haryana Industrial Plots in Saha, on NH-344 along the Panchkula-Yamunanagar
        corridor and adjacent to Ambala, extend our presence into industrial real estate just beyond the core
        Tricity.
      </p>
    ),
  },
];

const faqSchema = faqPageJsonLd([
  {
    question: "What areas make up the Chandigarh Tricity region?",
    answer:
      "The Chandigarh Tricity refers to Chandigarh, Mohali and Panchkula, together with the fast-growing town of Zirakpur that borders both Chandigarh and Panchkula.",
  },
  {
    question: "Which types of real estate does Motia Group offer across the Tricity?",
    answer:
      "Motia Group's portfolio spans residential apartments and plots, commercial office space and retail high streets, plus industrial plots, built up over 20+ years and 15 completed projects.",
  },
  {
    question: "Where are Motia Group's residential and commercial projects located within the Tricity?",
    answer:
      "Most residential and commercial developments, including Motia'z Royal Citi, Motia'z Harmony Greens, Motia Heights, Motia Citi, Motia HUYS, Motia High Street and Motia'z Royal Business Park, are in and around Zirakpur, with Motia'z Gill Estate located in Kurali, near Mohali. You can browse the full list on our residential projects and commercial projects pages.",
  },
  {
    question: "Is industrial real estate available in the Tricity growth corridor?",
    answer:
      "Yes. Motia Group's Haryana Industrial Plots in Saha, on NH-344 along the Panchkula-Yamunanagar corridor and adjacent to Ambala, extend our presence into industrial real estate just beyond the core Tricity.",
  },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ProjectHero
        image="/motiaz-royal-citi/citi-banner-1.webp"
        title="Real Estate Across the Chandigarh Tricity Region"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Real Estate in Tricity" }]}
        ctaLabel="View All Projects"
        ctaHref="/residential-projects"
        zoomBg
      />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal variant="left">
            <div className="relative">
              <div className="absolute -right-4 -top-4 hidden h-full w-full rounded-2xl border-2 border-[#377f45]/30 sm:block" />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/motiaz-royal-business-park/banner.jpeg"
                  alt="Real estate across the Chandigarh Tricity region"
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#377f45]">
              Real Estate in Tricity
            </span>
            <div className="mt-4 space-y-4 text-gray-600">
              <p>
                Chandigarh, Mohali and Panchkula, together with the connecting town of Zirakpur, form one of North
                India&rsquo;s most active real estate markets. Planned sectors, highway corridors, an international
                airport and a steady inflow of working professionals have kept demand strong across residential,
                commercial and, increasingly, industrial property.
              </p>
              <p>
                For over 20 years, Motia Group has built across this region, from homes and offices in Zirakpur to a
                plotted township near Mohali and industrial plots on the highway corridor toward Panchkula and
                Yamunanagar, delivering 15 projects and 4,500+ homes and offices along the way.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
              THE TRICITY REAL ESTATE MARKET AT A GLANCE
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {segments.map((item, i) => (
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

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <Reveal variant="up">
          <span className="block text-center text-sm font-semibold uppercase tracking-widest text-[#377f45]">
            Browse by Category
          </span>
          <h2 className="mt-2 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Explore the Full Motia Group Portfolio
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <Reveal variant="left">
            <Link
              href="/residential-projects"
              className="group block overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src="/motia-heights/hero%20banner.png"
                  alt="Residential projects across the Tricity"
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="flex size-10 items-center justify-center rounded-lg bg-[#377f45]/10 text-[#377f45]">
                  <HomeIcon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-gray-900">Residential Projects</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Apartments, independent floors and plotted homes across Zirakpur and near Mohali.
                </p>
              </div>
            </Link>
          </Reveal>

          <Reveal variant="right">
            <Link
              href="/commercial-projects"
              className="group block overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src="/high-street/banner.jpg"
                  alt="Commercial projects across the Tricity"
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="flex size-10 items-center justify-center rounded-lg bg-[#377f45]/10 text-[#377f45]">
                  <Building2 className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-gray-900">Commercial Projects</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Office space and high-street retail across Zirakpur&rsquo;s business corridors.
                </p>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20 lg:px-8">
        <Reveal variant="up">
          <span className="block text-center text-sm font-semibold uppercase tracking-widest text-[#377f45]">
            FAQ
          </span>
          <h2 className="mt-2 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Real Estate in Tricity: Frequently Asked Questions
          </h2>
        </Reveal>

        <Reveal variant="up" delay={100} className="mt-12">
          <FaqAccordion items={faqs} />
        </Reveal>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Find Your Place in the Tricity</h2>
            <p className="mt-4 text-gray-600">
              Talk to our team about residential, commercial and industrial opportunities across the region.
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

      <Reveal variant="up">
        <RelatedLinks
          links={[
            { label: "Real Estate Developer in Tricity", href: "/real-estate-developer-tricity" },
            { label: "Real Estate in Mohali", href: "/real-estate-in-mohali" },
            { label: "Real Estate in Panchkula", href: "/real-estate-in-panchkula" },
            { label: "Real Estate Company in Chandigarh", href: "/real-estate-company-in-chandigarh" },
            { label: "Top Builders in Chandigarh", href: "/top-builders-in-chandigarh" },
          ]}
        />
      </Reveal>

      <Reveal variant="fade">
        <ClientsSection />
      </Reveal>
    </>
  );
}
