import type { Metadata } from "next";
import { Award, Building2, Calendar, CheckCircle2, Home as HomeIcon, Mail, MapPin, Phone, ShieldCheck, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ClientsSection from "@/components/ClientsSection";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import ProjectHero from "@/components/ProjectHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Real Estate Builder in Zirakpur | Residential & Commercial Properties",
  description:
    "Motia Group is a real estate developer in Zirakpur offering residential, commercial and investment properties across key locations in the Tricity region.",
};

const credentials = [
  {
    icon: Calendar,
    title: "20+ Years in Zirakpur",
    text: "Established in 2005 and headquartered in Zirakpur, building this city long before it became the Tricity's fastest-growing address.",
  },
  {
    icon: Building2,
    title: "15 Completed Projects",
    text: "A proven local track record across residential townships, apartments, independent floors and commercial developments.",
  },
  {
    icon: HomeIcon,
    title: "4,500+ Homes & Offices Delivered",
    text: "Thousands of families and businesses across Zirakpur and the surrounding Tricity already call a Motia address home.",
  },
];

const checklist = [
  {
    icon: MapPin,
    title: "Local Presence, Not a Fly-In Developer",
    text: "Our corporate office sits on the Chandigarh-Ambala Highway in Zirakpur itself, so site visits, approvals and after-sales support are handled by a team that lives and works in this city.",
  },
  {
    icon: ShieldCheck,
    title: "Construction Standards You Can Verify",
    text: "Every development follows structured engineering practices, quality checks at each construction stage, and documented approvals before handover.",
  },
  {
    icon: Award,
    title: "A Track Record Across Cycles",
    text: "Two decades of delivery through changing market conditions is a far stronger signal than a glossy brochure from a builder new to the region.",
  },
];

const portfolio = [
  { name: "Motia'z Harmony Greens", href: "/motia-harmonygreens", type: "Residential · Ongoing", desc: "Premium homes on PR-7 Airport Road, Sanauli, Zirakpur." },
  { name: "Motia'z Royal Citi", href: "/motiaz-royal-citi", type: "Residential · Delivered", desc: "23-acre luxury homes and flats development in Zirakpur." },
  { name: "Motia Heights", href: "/motia-heights", type: "Residential · Delivered", desc: "3 BHK apartments in Dhakoli, Zirakpur." },
  { name: "Motia Citi", href: "/motia-citi", type: "Residential · Delivered", desc: "215 residential plots on the Chandigarh-Ambala Highway." },
  { name: "Motia HUYS", href: "/motia-huys", type: "Residential · Delivered", desc: "2 & 3 BHK independent floors on Peer Muchalla Road." },
  { name: "Motia'z Royal Business Park", href: "/motiaz-royal-business-park", type: "Commercial · Delivered", desc: "Office space on NH-22, Zirakpur." },
  { name: "Motia High Street", href: "/motia-high-street", type: "Commercial · Delivered", desc: "Retail shops on VIP Road, Zirakpur." },
  { name: "Motia'z Gill Estate", href: "/motia-gill-estate", type: "Residential + Commercial · Delivered", desc: "Plots and commercial space near Kurali, Mohali." },
];

const faqs: FaqItem[] = [
  {
    question: "What should I check before choosing a real estate builder in Zirakpur?",
    answer: (
      <p>
        Look at how many years the builder has operated in Zirakpur specifically, whether their past projects were
        delivered on time, whether current and past developments are RERA-registered, and whether the builder
        maintains a genuine local office you can walk into rather than a regional sales desk.
      </p>
    ),
  },
  {
    question: "Is Motia Group based in Zirakpur or just active here?",
    answer: (
      <p>
        Motia Group is headquartered in Zirakpur, with our corporate office at Motia&apos;z Royal Business Park on the
        Chandigarh-Ambala Highway. We have been building here since 2005.
      </p>
    ),
  },
  {
    question: "Does Motia Group build both residential and commercial projects?",
    answer: (
      <p>
        Yes. Our Zirakpur portfolio spans residential apartments, independent floors and plotted developments
        alongside commercial office space and retail high streets, giving buyers and investors a single trusted
        builder across property types.
      </p>
    ),
  },
  {
    question: "How many projects has Motia Group delivered so far?",
    answer: (
      <p>
        Motia Group has completed 15 projects, delivering more than 4,500 homes and offices across Zirakpur, Mohali
        and the wider Chandigarh Tricity region.
      </p>
    ),
  },
];

const contactInfo: { icon: typeof Phone; label: string; value: string; href?: string }[] = [
  { icon: Phone, label: "Phone", value: "+91 8860095959", href: "tel:+918860095959" },
  { icon: Mail, label: "Email", value: "info@motiagroup.com", href: "mailto:info@motiagroup.com" },
  { icon: MapPin, label: "Corporate Office", value: "Motia'z Royal Business Park, Zirakpur" },
];

export default function Page() {
  return (
    <>
      <ProjectHero
        image="/motiaz-royal-business-park/banner.jpeg"
        title="A Real Estate Builder Headquartered in Zirakpur, Built for Zirakpur"
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
                  src="/home-page-hero-section/Royal-Business-Park.webp"
                  alt="Motia'z Royal Business Park, the Zirakpur headquarters of Motia Group"
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#377f45]">
              Real Estate Builder in Zirakpur
            </span>
            <div className="mt-4 space-y-4 text-gray-600">
              <p>
                Zirakpur has dozens of names on hoardings promising the next big project. Very few of those builders
                actually live here. Motia Group was established in 2005 with its roots in Zirakpur, and our corporate
                office still stands on the Chandigarh-Ambala Highway today — not a satellite branch, but the place
                where every project on this page was actually planned, approved and delivered.
              </p>
              <p>
                Choosing a builder in a city you are about to invest in is different from choosing one anywhere else:
                you want a team that understands the local approval process, the actual pace of infrastructure
                growth along PR-7 and NH-22, and the track record of every project you can drive past today.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
              WHY OUR ZIRAKPUR CREDENTIALS MATTER
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {credentials.map((item, i) => (
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

      <section className="relative overflow-hidden py-20 sm:py-28">
        <Image
          src="/motia-citi/hero%20banner.png"
          alt="A Motia Group development in Zirakpur"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#7fce8f]">
              Why the Builder Matters
            </span>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              The Builder You Choose Outlasts the Sale
            </h2>
            <p className="mt-4 text-white/85 sm:text-lg">
              A plot or an apartment is only as good as the developer who stands behind it after possession. In
              Zirakpur&apos;s fast-growing market, that means checking who will still be answering your calls, resolving
              maintenance issues and honouring commitments five, ten, even twenty years down the line.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <Reveal variant="up">
          <span className="block text-center text-sm font-semibold uppercase tracking-widest text-[#377f45]">
            Our Portfolio
          </span>
          <h2 className="mt-2 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            The Motia Group Portfolio in Zirakpur &amp; Beyond
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            One builder, every property type — residential, commercial, plotted and delivered.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.map((item, i) => (
            <Reveal key={item.name} variant="up" delay={(i % 4) * 100}>
              <Link
                href={item.href}
                className="group block h-full rounded-2xl bg-white p-6 ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-[#377f45]/10 text-[#377f45]">
                  {item.type.startsWith("Commercial") ? <Store className="size-5" /> : <HomeIcon className="size-5" />}
                </span>
                <h3 className="mt-4 text-base font-bold text-gray-900 group-hover:text-[#377f45]">{item.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#377f45]">{item.type}</p>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              What to Verify Before You Choose a Builder
            </h2>
          </Reveal>

          <div className="mt-10 space-y-4">
            {checklist.map((item, i) => (
              <Reveal key={item.title} variant="up" delay={i * 100}>
                <div className="flex items-start gap-4 rounded-xl bg-white p-5 ring-1 ring-black/5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#377f45]/10 text-[#377f45]">
                    <item.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal variant="up" delay={300}>
              <div className="flex items-start gap-4 rounded-xl bg-white p-5 ring-1 ring-black/5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#377f45]/10 text-[#377f45]">
                  <CheckCircle2 className="size-5" />
                </span>
                <div>
                  <h3 className="font-bold text-gray-900">Real, Verifiable Delivery Numbers</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    15 completed projects and over 4,500 homes and offices handed over — figures you can verify
                    against our delivered developments across the region, not just projected sales targets.
                  </p>
                </div>
              </div>
            </Reveal>
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
          src="/motiaz-royal-citi/citi-banner-1.webp"
          alt="Motia Group residential development in Zirakpur"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1c2230]/85" />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Talk to Zirakpur&apos;s Local Builder</h2>
            <p className="mt-4 text-white/80">
              Visit our corporate office or schedule a call to discuss which Motia Group development fits your needs.
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
