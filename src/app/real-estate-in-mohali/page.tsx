import type { Metadata } from "next";
import { Cpu, MapPin, Plane, Route } from "lucide-react";
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
  title: "Real Estate in Mohali | Residential & Commercial Properties",
  description:
    "Explore residential, commercial and investment opportunities in Mohali, including nearby projects and growth corridors connected to Chandigarh Tricity.",
};

const drivers = [
  {
    icon: Cpu,
    title: "IT City & Employment Hub",
    text: "Mohali's IT parks and business hubs continue to draw a steady stream of working professionals.",
  },
  {
    icon: Plane,
    title: "Airport-Adjacent Location",
    text: "Chandigarh International Airport sits within Mohali district, keeping the city well connected nationally.",
  },
  {
    icon: Route,
    title: "Expanding Growth Corridors",
    text: "Kharar, New Chandigarh and Kurali along the Mohali-Ropar Highway are opening up fresh development belts.",
  },
  {
    icon: MapPin,
    title: "Planned Sector Layouts",
    text: "Mohali's sector-based planning keeps its residential and institutional areas well organised.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Is Chandigarh International Airport located near Mohali?",
    answer: (
      <p>
        Yes, Chandigarh International Airport falls within Mohali district, which keeps the wider Mohali growth
        corridor well connected for both residents and businesses.
      </p>
    ),
  },
  {
    question: "What is the Mohali growth corridor known for?",
    answer: (
      <p>
        Beyond Mohali&rsquo;s own sectors, the belt stretching toward Kharar, New Chandigarh and Kurali along the
        Mohali-Ropar Highway has become an active zone for plotted developments and new housing.
      </p>
    ),
  },
  {
    question: "Does Motia Group have a project inside Mohali city itself?",
    answer: (
      <p>
        Motia&rsquo;z Gill Estate is located in Kurali on the Mohali-Ropar Highway, in the broader Mohali growth
        corridor, rather than within Mohali&rsquo;s city sectors. It remains one of the closest Motia Group
        developments to Mohali.
      </p>
    ),
  },
  {
    question: "What kind of property does Motia'z Gill Estate offer near Mohali?",
    answer: (
      <p>
        Spread across 21 acres in Kurali, Motia&rsquo;z Gill Estate offers residential plots along with commercial
        units, wide roads and township-style infrastructure.
      </p>
    ),
  },
];

const faqSchema = faqPageJsonLd([
  {
    question: "Is Chandigarh International Airport located near Mohali?",
    answer:
      "Yes, Chandigarh International Airport falls within Mohali district, which keeps the wider Mohali growth corridor well connected for both residents and businesses.",
  },
  {
    question: "What is the Mohali growth corridor known for?",
    answer:
      "Beyond Mohali's own sectors, the belt stretching toward Kharar, New Chandigarh and Kurali along the Mohali-Ropar Highway has become an active zone for plotted developments and new housing.",
  },
  {
    question: "Does Motia Group have a project inside Mohali city itself?",
    answer:
      "Motia'z Gill Estate is located in Kurali on the Mohali-Ropar Highway, in the broader Mohali growth corridor, rather than within Mohali's city sectors. It remains one of the closest Motia Group developments to Mohali.",
  },
  {
    question: "What kind of property does Motia'z Gill Estate offer near Mohali?",
    answer:
      "Spread across 21 acres in Kurali, Motia'z Gill Estate offers residential plots along with commercial units, wide roads and township-style infrastructure.",
  },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ProjectHero
        image="/motia-gill-estate/bannergillestate-1.webp"
        title="Mohali: IT City Connectivity Meets Growing Real Estate Demand"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Real Estate in Mohali" }]}
        ctaLabel="Explore Gill Estate"
        ctaHref="/motia-gill-estate"
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
                  alt="Real estate near Mohali along the Mohali-Ropar Highway"
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#377f45]">
              Real Estate in Mohali
            </span>
            <div className="mt-4 space-y-4 text-gray-600">
              <p>
                Mohali, officially Sahibzada Ajit Singh Nagar, has grown from a planned satellite town into one of
                the Tricity&rsquo;s key employment and IT hubs. Its sector-based layout, proximity to Chandigarh
                International Airport, and steady flow of working professionals have kept demand for housing and
                commercial space consistently strong.
              </p>
              <p>
                That demand has also spilled outward, into growth corridors such as Kharar, New Chandigarh and
                Kurali along the Mohali-Ropar Highway, where plotted developments and townships are giving buyers
                more room to build close to Mohali without its city-centre premiums.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
              WHY MOHALI CONTINUES TO ATTRACT BUYERS
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

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal variant="left">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#377f45]">
              Near Mohali
            </span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Motia&rsquo;z Gill Estate, Kurali</h2>
            <p className="mt-4 text-gray-600">
              Spread across 21 acres right on the Mohali-Ropar Highway, Motia&rsquo;z Gill Estate sits in one of the
              fastest-growing pockets in the Mohali growth corridor. The development offers residential plots
              alongside commercial units, wide internal roads, green spaces and modern township infrastructure,
              giving buyers a plotted alternative close to Mohali.
            </p>
            <Link
              href="/motia-gill-estate"
              className="mt-6 inline-block rounded bg-[#377f45] px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-[#2c6636] active:scale-95"
            >
              View Gill Estate
            </Link>
          </Reveal>

          <Reveal variant="right">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/motia-gill-estate/bannergillestate-1.webp"
                alt="Motia'z Gill Estate in Kurali, near Mohali"
                fill
                sizes="(min-width: 1024px) 500px, 100vw"
                className="object-cover"
              />
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
            Real Estate in Mohali: Frequently Asked Questions
          </h2>
        </Reveal>

        <Reveal variant="up" delay={100} className="mt-12">
          <FaqAccordion items={faqs} />
        </Reveal>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Considering Property Near Mohali?</h2>
            <p className="mt-4 text-gray-600">
              Talk to our team about plots and commercial units in the Mohali growth corridor.
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
            { label: "Motia'z Gill Estate", href: "/motia-gill-estate" },
            { label: "Property in Kurali", href: "/property-in-kurali" },
            { label: "Best Builders in Mohali", href: "/best-builders-in-mohali" },
            { label: "Real Estate Developer in Tricity", href: "/real-estate-developer-tricity" },
            { label: "Real Estate in Tricity", href: "/real-estate-in-tricity" },
          ]}
        />
      </Reveal>

      <Reveal variant="fade">
        <ClientsSection />
      </Reveal>
    </>
  );
}
