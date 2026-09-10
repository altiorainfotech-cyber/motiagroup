import type { Metadata } from "next";
import { Building2, Coffee, Mail, MapPin, Phone, ShieldCheck, Users2, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ClientsSection from "@/components/ClientsSection";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import ProjectHero from "@/components/ProjectHero";
import Reveal from "@/components/Reveal";
import TestimonialSection from "@/components/TestimonialSection";

export const metadata: Metadata = {
  title: "Office Space in Zirakpur | Commercial Offices & Business Spaces",
  description:
    "Find office space in Zirakpur with excellent highway connectivity, modern facilities and business-friendly infrastructure at Motia Group developments.",
};

const reasons = [
  {
    icon: Zap,
    title: "Built for Hybrid & Growing Teams",
    text: "Flexible floor plates that scale from a compact team room to full floors, suited to businesses that have outgrown a home office or a shared co-working desk.",
  },
  {
    icon: ShieldCheck,
    title: "24x7 Power Back-Up & Security",
    text: "Uninterrupted power and round-the-clock security infrastructure, essential for businesses that run continuous operations or handle sensitive work.",
  },
  {
    icon: Users2,
    title: "A Working Business Community",
    text: "Engineering, construction and data-centre companies already operate on-site, giving new tenants an established business ecosystem from day one.",
  },
];

const connectivity = [
  "Direct frontage on NH-22, keeping the commute short for staff and visitors arriving from Chandigarh, Mohali and Panchkula.",
  "Fast access to Chandigarh International Airport for teams that travel frequently for client or vendor meetings.",
  "Proximity to established residential catchments in Zirakpur, useful for hiring locally and reducing staff commute times.",
];

const faqs: FaqItem[] = [
  {
    question: "Why choose office space in Zirakpur over Chandigarh or Mohali?",
    answer: (
      <p>
        Zirakpur sits directly on NH-22 with fast connectivity to Chandigarh, Mohali, Panchkula and the airport,
        while typically offering more competitive pricing than establishing an office within Chandigarh city
        itself.
      </p>
    ),
  },
  {
    question: "What kind of businesses operate at Motia'z Royal Business Park?",
    answer: (
      <p>
        Current tenants include engineering, construction and data-centre companies that specifically chose the
        location for its highway connectivity, 24x7 power back-up and security infrastructure.
      </p>
    ),
  },
  {
    question: "Can I expand my office space later as my team grows?",
    answer: (
      <p>
        Yes. Several existing tenants at Royal Business Park started with a smaller footprint and later added
        adjoining space as their team and operations grew.
      </p>
    ),
  },
  {
    question: "Is Motia'z Royal Business Park suitable for a corporate head office?",
    answer: (
      <p>
        Yes, the development is designed for both branch offices and full corporate operations, with the scale and
        infrastructure to support a formal registered business address.
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
        title="Office Space in Zirakpur, Built Around NH-22 Connectivity"
        ctaLabel="Enquire About Office Space"
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
                  alt="Office space at Motia'z Royal Business Park, Zirakpur"
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#377f45]">
              Office Space in Zirakpur
            </span>
            <div className="mt-4 space-y-4 text-gray-600">
              <p>
                Work has changed. Many businesses today are not choosing between a home office and a city-centre
                tower — they are looking for a business park that offers real infrastructure, room to grow, and a
                short, predictable commute for a hybrid or partially remote team.
              </p>
              <p>
                Motia&apos;z Royal Business Park on NH-22 was built for exactly this shift: a highway-facing business
                address in Zirakpur with the power, security and scale that a serious, growing company actually
                needs.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
              WHY CHOOSE OFFICE SPACE HERE
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {reasons.map((item, i) => (
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
          src="/motiaz-royal-business-park/banner.jpeg"
          alt="Motia'z Royal Business Park on NH-22, Zirakpur"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#7fce8f]">
              Location Advantage
            </span>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Right on NH-22</h2>
            <div className="mx-auto mt-6 max-w-xl space-y-3 text-left">
              {connectivity.map((line) => (
                <div key={line} className="flex items-start gap-3">
                  <Building2 className="mt-1 size-4 shrink-0 text-[#7fce8f]" />
                  <p className="text-sm text-white/85 sm:text-base">{line}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20 lg:px-8">
        <Reveal variant="up">
          <div className="flex items-start gap-4 rounded-xl bg-[#f4f8f5] p-6 ring-1 ring-black/5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#377f45]/10 text-[#377f45]">
              <Coffee className="size-5" />
            </span>
            <p className="text-gray-700">
              Beyond the desk: on-site infrastructure at Royal Business Park is designed to support the everyday
              needs of a working office, from continuous power and security to a business environment where clients
              and vendors are comfortable visiting.
            </p>
          </div>
        </Reveal>
      </section>

      <Reveal variant="fade">
        <TestimonialSection />
      </Reveal>

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
          src="/home-page-hero-section/Royal-Business-Park.webp"
          alt="Office space at Motia'z Royal Business Park, Zirakpur"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1c2230]/85" />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Set Up Your Office on NH-22</h2>
            <p className="mt-4 text-white/80">
              Visit{" "}
              <Link href="/motiaz-royal-business-park" className="font-semibold text-[#7fce8f] hover:underline">
                Motia&apos;z Royal Business Park
              </Link>{" "}
              or speak with our team about available floor plates.
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
              Schedule a Visit
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
