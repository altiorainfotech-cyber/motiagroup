import type { Metadata } from "next";
import { Award, Building2, FileText, Landmark, Leaf, Mail, Phone, Route, Store, TreePine, Users } from "lucide-react";
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
  title: "Real Estate Company in Chandigarh | Motia Group",
  description:
    "Your Trusted Partner: Leading Real Estate Company in Chandigarh. End-to-end residential, commercial, and township solutions across Chandigarh, Zirakpur, and Mohali.",
};

const services = [
  {
    icon: Building2,
    image: "/home-page-hero-section/harmonygreens-banner-02.webp",
    title: "Residential Developments",
    text: "Modern high-rise flats, independent floors, and luxury penthouses.",
  },
  {
    icon: Store,
    image: "/home-page-hero-section/harmonygreens-banner-04.webp",
    title: "Commercial Investment Assets",
    text: "High-visibility retail outlets, office spaces, and SCO plots.",
  },
  {
    icon: TreePine,
    image: "/motia-gill-estate/bannergillestate-1.webp",
    title: "Integrated Township Planning",
    text: "Self-sustained communities featuring parks, markets, and security.",
  },
];

const buyerSupport = [
  {
    icon: Users,
    text: "Personalized consultation to match your budget and lifestyle requirements.",
  },
  {
    icon: Landmark,
    text: "Seamless home loan assistance through major nationalized and private banks.",
  },
  {
    icon: FileText,
    text: "Transparent documentation, legal clarity, and hassle-free possession handovers.",
  },
];

const apartAdvantages = [
  {
    icon: Award,
    title: "Legacy of Execution",
    text: "A robust history of building thriving residential communities and business centers.",
  },
  {
    icon: Route,
    title: "Prime Connectivity",
    text: "Projects located on wide arterial roads ensuring fast connectivity to Chandigarh city center.",
  },
  {
    icon: Leaf,
    title: "Sustainable Urban Design",
    text: "Designed with lush green parks, rainwater harvesting, and energy-efficient systems.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Why invest in the real estate market in and around Chandigarh?",
    answer: (
      <p>
        Chandigarh and its surrounding hubs (Mohali, Zirakpur) offer top-tier infrastructure, expanding IT sectors,
        excellent road and air connectivity, and steady property value appreciation.
      </p>
    ),
  },
  {
    question: "Does Motia Group assist buyers with home loan approvals?",
    answer: (
      <p>
        Yes, our projects are pre-approved by leading banks and financial institutions, making the loan sanction
        process quick and straightforward.
      </p>
    ),
  },
];

const contactInfo: { icon: typeof Phone; label: string; value: string; href?: string }[] = [
  { icon: Phone, label: "Corporate Helpline", value: "+1 [Your Phone Number] / +91 [Your Phone Number]" },
  { icon: Mail, label: "Email", value: "info@motiagroup.com", href: "mailto:info@motiagroup.com" },
];

const faqSchema = faqPageJsonLd([
  {
    question: "Why invest in the real estate market in and around Chandigarh?",
    answer:
      "Chandigarh and its surrounding hubs (Mohali, Zirakpur) offer top-tier infrastructure, expanding IT sectors, excellent road and air connectivity, and steady property value appreciation.",
  },
  {
    question: "Does Motia Group assist buyers with home loan approvals?",
    answer:
      "Yes, our projects are pre-approved by leading banks and financial institutions, making the loan sanction process quick and straightforward.",
  },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ProjectHero
        image="/motiaz-royal-business-park/banner.jpeg"
        title="Your Trusted Partner: Leading Real Estate Company in Chandigarh"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Real Estate Company in Chandigarh" }]}
        ctaLabel="Talk to an Expert"
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
                  src="/motiahuys/banner.png"
                  alt="A Motia Group residential development in the Chandigarh Tricity"
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#377f45]">
              Real Estate Company in Chandigarh
            </span>
            <div className="mt-4 space-y-4 text-gray-600">
              <p>
                Investing in real estate is one of the most significant financial decisions you will ever make.
                Partnering with an established, transparent real estate company in Chandigarh ensures that your
                investment yields safety, comfort, and exceptional returns. Motia Group provides end-to-end real
                estate solutions encompassing residential townships, luxury apartments, and corporate commercial
                spaces.
              </p>
              <p>
                Driven by innovation and ethical practices, we help families find their dream homes and business
                leaders secure high-yield commercial assets across Chandigarh, Zirakpur, Mohali, and surrounding
                growth hubs.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
              REAL ESTATE SERVICES &amp; VALUE PROPOSITION
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {services.map((item, i) => (
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
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-28">
        <Image
          src="/home-page-hero-section/Royal-Business-Park.webp"
          alt="Motia Group developments across the expanding Chandigarh Tricity belt"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#7fce8f]">Growth Corridor</span>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Serving the Expanding Chandigarh Tricity Belt
            </h2>
            <p className="mt-4 text-white/85 sm:text-lg">
              As the urban landscape of Chandigarh expands, Motia Group has strategically developed prime land
              parcels in high-growth corridors like Zirakpur and Mohali. These locations offer seamless transit
              connectivity to the Chandigarh International Airport, IT hubs, educational institutes, and healthcare
              centers.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20 lg:px-8">
        <Reveal variant="up">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">End-to-End Buyer Support</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Our customer service team guides you through every step of the property journey:
          </p>
        </Reveal>

        <div className="mt-10 space-y-4">
          {buyerSupport.map((item, i) => (
            <Reveal key={item.text} variant="up" delay={i * 100}>
              <div className="flex items-start gap-4 rounded-xl bg-[#f4f8f5] p-5 ring-1 ring-black/5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#377f45]/10 text-[#377f45]">
                  <item.icon className="size-5" />
                </span>
                <p className="text-gray-700">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              What Sets Motia Group Apart?
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {apartAdvantages.map((item, i) => (
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
          src="/motia-citi/hero%20banner.png"
          alt="Motia Group residential towers in the Chandigarh Tricity"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1c2230]/85" />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Partner with Motia Group</h2>
            <p className="mt-4 text-white/80">
              Discover premier residential and commercial properties with a trusted real estate leader.
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
              Get in Touch
            </Link>
          </Reveal>
        </div>
      </section>

      <Reveal variant="up">
        <RelatedLinks
          links={[
            { label: "Top Builders in Chandigarh", href: "/top-builders-in-chandigarh" },
            { label: "Real Estate Developer in Tricity", href: "/real-estate-developer-tricity" },
            { label: "Real Estate in Tricity", href: "/real-estate-in-tricity" },
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
