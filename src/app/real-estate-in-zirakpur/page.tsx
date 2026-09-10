import type { Metadata } from "next";
import { Building2, Home as HomeIcon, Plane, Route, ShoppingBag, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ClientsSection from "@/components/ClientsSection";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import ProjectHero from "@/components/ProjectHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Real Estate in Zirakpur | Residential & Commercial Properties",
  description:
    "Explore residential, commercial and investment property opportunities in Zirakpur with Motia Group, including homes, plots, offices and retail spaces.",
};

const drivers = [
  {
    icon: Route,
    title: "Highway Connectivity",
    text: "Zirakpur sits directly on the Chandigarh-Ambala Highway, linking it to Chandigarh, Panchkula and Mohali.",
  },
  {
    icon: Plane,
    title: "Airport Proximity",
    text: "A short drive from Chandigarh International Airport makes Zirakpur convenient for frequent travellers.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & High Street Growth",
    text: "VIP Road and the surrounding stretch have become a magnet for showrooms, retail chains and eateries.",
  },
  {
    icon: TrendingUp,
    title: "Rising Residential Demand",
    text: "As Chandigarh and Mohali fill up, homebuyers are increasingly looking to Zirakpur for space and value.",
  },
];

const properties = [
  {
    icon: HomeIcon,
    image: "/motiaz-royal-citi/citi-banner-1.webp",
    title: "Motia'z Royal Citi",
    text: "23-acre luxury homes and flats, delivered.",
    href: "/motiaz-royal-citi",
  },
  {
    icon: Building2,
    image: "/home-page-hero-section/harmonygreens-banner-01.webp",
    title: "Motia'z Harmony Greens",
    text: "Premium homes in Sanauli, Zirakpur, ongoing.",
    href: "/motia-harmonygreens",
  },
  {
    icon: HomeIcon,
    image: "/motia-heights/hero%20banner.png",
    title: "Motia Heights",
    text: "3 BHK apartments in Dhakoli, Zirakpur, delivered.",
    href: "/motia-heights",
  },
  {
    icon: ShoppingBag,
    image: "/high-street/banner.jpg",
    title: "Motia High Street",
    text: "Retail shops on VIP Road, Zirakpur, delivered.",
    href: "/motia-high-street",
  },
];

const faqs: FaqItem[] = [
  {
    question: "What makes Zirakpur a good real estate investment location?",
    answer: (
      <p>
        Zirakpur combines highway and airport connectivity with rapidly growing retail, commercial and residential
        infrastructure, making it one of the most active property markets on the edge of the Chandigarh Tricity
        region.
      </p>
    ),
  },
  {
    question: "How is Zirakpur connected to Chandigarh and the airport?",
    answer: (
      <p>
        Zirakpur lies on the Chandigarh-Ambala Highway, giving it direct road access to Chandigarh, Panchkula and
        Mohali, and it sits a short drive from Chandigarh International Airport.
      </p>
    ),
  },
  {
    question: "What types of properties are available in Zirakpur?",
    answer: (
      <p>
        Zirakpur offers a wide mix, from apartments and independent floors to plotted developments, office space and
        high-street retail shops, giving both end-users and investors multiple entry points.
      </p>
    ),
  },
  {
    question: "Is Zirakpur part of Punjab or the Chandigarh Tricity?",
    answer: (
      <p>
        Zirakpur is a town in Punjab that forms part of the wider Chandigarh Tricity region, bordering Chandigarh and
        Panchkula and well connected to Mohali.
      </p>
    ),
  },
];

export default function Page() {
  return (
    <>
      <ProjectHero
        image="/home-page-hero-section/harmonygreens-banner-01.webp"
        title="Zirakpur: A Fast-Growing Address on the Chandigarh Tricity Map"
        ctaLabel="View Properties"
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
                  src="/motia-citi/hero%20banner.png"
                  alt="Real estate development in Zirakpur"
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#377f45]">
              Real Estate in Zirakpur
            </span>
            <div className="mt-4 space-y-4 text-gray-600">
              <p>
                Once a quiet town on the outskirts of Chandigarh, Zirakpur has grown into one of the busiest
                real-estate corridors in the region. Its position on the Chandigarh-Ambala Highway places it within
                easy reach of Chandigarh, Panchkula and Mohali, while its own retail high streets, schools and
                hospitals have made it a self-sufficient hub in its own right.
              </p>
              <p>
                That combination of connectivity and growing infrastructure is why homebuyers, retailers and
                investors continue to look at Zirakpur as a destination for residential, commercial and
                investment-grade property.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
              WHAT&rsquo;S DRIVING REAL ESTATE GROWTH IN ZIRAKPUR
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

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <Reveal variant="up">
          <span className="block text-center text-sm font-semibold uppercase tracking-widest text-[#377f45]">
            Developments in Zirakpur
          </span>
          <h2 className="mt-2 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            A Mix of Homes, Retail and More
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {properties.map((item, i) => (
            <Reveal key={item.title} variant="up" delay={i * 100}>
              <Link
                href={item.href}
                className="group block overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-[#377f45]/10 text-[#377f45]">
                    <item.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{item.text}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-28">
        <Image
          src="/motiaz-royal-business-park/banner.jpeg"
          alt="Commercial real estate in Zirakpur"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1c2230]/85" />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">A Town Built for Convenience and Growth</h2>
            <p className="mt-4 text-white/80">
              From highway-facing offices to family homes minutes from schools and markets, Zirakpur offers a
              property mix that few Tricity towns can match.
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
            Real Estate in Zirakpur: Frequently Asked Questions
          </h2>
        </Reveal>

        <Reveal variant="up" delay={100} className="mt-12">
          <FaqAccordion items={faqs} />
        </Reveal>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Explore Property in Zirakpur</h2>
            <p className="mt-4 text-gray-600">
              Speak with our team to find a home or commercial space that fits your plans in Zirakpur.
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
