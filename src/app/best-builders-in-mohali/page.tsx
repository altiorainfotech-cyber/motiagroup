import type { Metadata } from "next";
import { Building2, Dumbbell, Mail, MapPin, Phone, Route, ShieldCheck, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ClientsSection from "@/components/ClientsSection";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import ProjectHero from "@/components/ProjectHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Best Builders in Mohali | Motia Group",
  description:
    "Crafting Excellence: Premier Choice Among the Best Builders in Mohali. Contemporary architecture, robust infrastructure, and lifestyle amenities across Mohali.",
};

const highlights = [
  {
    icon: Route,
    title: "Strategic Proximity to IT City & Airport Road",
    text: "High appreciation potential and fast commute.",
  },
  {
    icon: Dumbbell,
    title: "Modern Lifestyle Amenities",
    text: "Swimming pools, fully equipped gyms, clubhouses, and sports courts.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Gated Environments",
    text: "Multi-tier 24/7 CCTV surveillance, manned entry gates, and intercoms.",
  },
];

const properties = [
  {
    icon: Building2,
    image: "/home-page-hero-section/harmonygreens-banner-01.webp",
    title: "Luxury 2, 3 & 4 BHK Apartments",
    text: "Smartly planned layouts maximizing natural light, featuring modular kitchens, spacious balconies, and premium bath fittings.",
  },
  {
    icon: MapPin,
    image: "/motia-gill-estate/bannergillestate-1.webp",
    title: "Independent Floors & Villas",
    text: "For those who prefer low-density living, our independent floors offer freedom, privacy, and dedicated parking spaces.",
  },
  {
    icon: Store,
    image: "/home-page-hero-section/harmonygreens-banner-04.webp",
    title: "Commercial Shops & Office Spaces",
    text: "Strategically situated on major 200-foot wide sector roads, ensuring high footfall for retailers and corporate offices.",
  },
];

const trust = [
  {
    benchmark: "Location Strategy",
    advantage: "Positioned near major IT parks, international schools, and hospitals.",
  },
  {
    benchmark: "Construction Standard",
    advantage: "High-grade materials, earthquake-resistant design, and premium finishes.",
  },
  {
    benchmark: "Community Amenities",
    advantage: "Landscaped gardens, jogging tracks, community halls, and children’s play areas.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Why is Mohali considered a prime location for property investment?",
    answer: (
      <p>
        Mohali benefits from proximity to the Chandigarh International Airport, rapidly expanding IT City campuses,
        world-class medical institutions, and planned wide-road infrastructure.
      </p>
    ),
  },
  {
    question: "What safety features are included in Motia Group residential communities in Mohali?",
    answer: (
      <p>
        Our gated communities feature 24/7 security personnel, CCTV coverage, automated barrier gates, fire safety
        systems, and intercom facilities.
      </p>
    ),
  },
];

const contactInfo: { icon: typeof Phone; label: string; value: string; href?: string }[] = [
  { icon: Phone, label: "Sales Helpline", value: "+91 [Your Phone Number]" },
  { icon: Mail, label: "Email", value: "mohali@motiagroup.com", href: "mailto:mohali@motiagroup.com" },
  { icon: MapPin, label: "Visit", value: "Motia Group Sales Gallery, Mohali / Tricity" },
];

export default function Page() {
  return (
    <>
      <ProjectHero
        image="/motiahuys/banner.png"
        title="Crafting Excellence: Premier Choice Among the Best Builders in Mohali"
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
                  src="/motiaz-royal-citi/citi-banner-1.webp"
                  alt="A Motia Group residential development in Mohali"
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#377f45]">
              Best Builders in Mohali
            </span>
            <div className="mt-4 space-y-4 text-gray-600">
              <p>
                Mohali has rapidly evolved into one of Northern India&rsquo;s most prominent commercial, educational,
                and residential hubs. Homebuyers and investors seeking modern living spaces turn to Motia Group,
                recognized among the best builders in Mohali. Our developments offer contemporary architecture,
                robust infrastructure, and lifestyle amenities tailored for progressive urban living.
              </p>
              <p>
                Whether you are searching for a peaceful family apartment near green belts or a high-footfall retail
                shop near major industrial and IT corridors, Motia Group delivers benchmark real estate solutions in
                Mohali.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">MOHALI DEVELOPMENT HIGHLIGHTS</h2>
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
            Property Options
          </span>
          <h2 className="mt-2 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Diverse Property Options in Mohali
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Explore our signature property categories designed for various lifestyle needs:
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {properties.map((item, i) => (
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
              Why Buyers Trust Motia Group in Mohali
            </h2>
          </Reveal>

          <Reveal variant="up" delay={100}>
            <div className="mt-10 overflow-x-auto rounded-2xl shadow-lg ring-1 ring-black/5">
              <table className="w-full min-w-[560px] border-collapse bg-white text-left">
                <thead>
                  <tr className="bg-[#377f45] text-white">
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wide">Project Benchmark</th>
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wide">
                      The Motia Advantage in Mohali
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {trust.map((row, i) => (
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
          src="/motiaz-royal-business-park/banner.jpeg"
          alt="Motia Group sales gallery in Mohali"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1c2230]/85" />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Book Your Site Visit in Mohali Today</h2>
            <p className="mt-4 text-white/80">
              Experience our ongoing and ready-to-move projects firsthand. Contact Motia Group today.
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
