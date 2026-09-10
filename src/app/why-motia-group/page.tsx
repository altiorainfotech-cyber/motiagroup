import type { Metadata } from "next";
import { Building2, HeartHandshake, MapPinned, ShieldCheck, Timer, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import PageBanner from "@/components/PageBanner";
import RelatedLinks from "@/components/RelatedLinks";
import Reveal from "@/components/Reveal";
import TestimonialSection from "@/components/TestimonialSection";
import { faqPageJsonLd } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Why Choose Motia Group | Trusted Real Estate Developer in Zirakpur",
  description:
    "Discover why buyers and investors choose Motia Group for residential, commercial and industrial property across Zirakpur and North India.",
};

const reasons = [
  {
    icon: Timer,
    title: "A Proven Delivery Track Record",
    text: "15 projects completed and more than 4,500 homes and offices handed over since 2005. When we commit to a delivery timeline, our history shows we follow through.",
  },
  {
    icon: ShieldCheck,
    title: "RERA-Compliant, Transparent Dealings",
    text: "Clear land titles, registered approvals, and straightforward documentation, so buyers know exactly what they are investing in at every stage.",
  },
  {
    icon: Wrench,
    title: "Construction You Can Trust",
    text: "Modern engineering practices and quality materials go into every residential, commercial, and industrial development we build.",
  },
  {
    icon: MapPinned,
    title: "Locations That Hold Their Value",
    text: "From Sanauli and Zirakpur to Kurali and the Chandigarh-Ambala Highway, our projects sit on corridors with strong connectivity and long-term growth potential.",
  },
  {
    icon: HeartHandshake,
    title: "Support That Doesn't End at Possession",
    text: "Our relationship with buyers continues well past handover, with dedicated support for post-possession queries and service requests.",
  },
  {
    icon: Building2,
    title: "A Portfolio Built for Every Need",
    text: "Residential homes, commercial spaces, and industrial plots under one trusted name, giving buyers and investors options as their needs evolve.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Why should I choose Motia Group over other developers in Zirakpur?",
    answer: (
      <p>
        Motia Group brings together a proven delivery record of 15 completed projects and 4,500+ homes and offices
        handed over, RERA-compliant transparent dealings, and quality construction across residential, commercial,
        and industrial developments, all backed by more than 20 years of experience in the region.
      </p>
    ),
  },
  {
    question: "Are Motia Group projects RERA registered?",
    answer: (
      <p>
        Yes. Our ongoing and delivered developments follow RERA guidelines, with clear land titles and transparent
        documentation shared with buyers throughout the purchase process.
      </p>
    ),
  },
  {
    question: "What kind of support does Motia Group offer after possession?",
    answer: (
      <p>
        Our relationship with buyers doesn&apos;t end at handover. Our team remains available to assist with
        post-possession queries, documentation, and service requests for every project we deliver.
      </p>
    ),
  },
  {
    question: "What types of properties does Motia Group offer?",
    answer: (
      <p>
        We build residential apartments and gated communities, commercial office and retail spaces, and industrial
        plots, giving buyers and investors a range of options across Zirakpur, Mohali, and the wider Tricity and
        North India region.
      </p>
    ),
  },
];

const faqSchema = faqPageJsonLd([
  {
    question: "Why should I choose Motia Group over other developers in Zirakpur?",
    answer:
      "Motia Group brings together a proven delivery record of 15 completed projects and 4,500+ homes and offices handed over, RERA-compliant transparent dealings, and quality construction across residential, commercial, and industrial developments, all backed by more than 20 years of experience in the region.",
  },
  {
    question: "Are Motia Group projects RERA registered?",
    answer:
      "Yes. Our ongoing and delivered developments follow RERA guidelines, with clear land titles and transparent documentation shared with buyers throughout the purchase process.",
  },
  {
    question: "What kind of support does Motia Group offer after possession?",
    answer:
      "Our relationship with buyers doesn't end at handover. Our team remains available to assist with post-possession queries, documentation, and service requests for every project we deliver.",
  },
  {
    question: "What types of properties does Motia Group offer?",
    answer:
      "We build residential apartments and gated communities, commercial office and retail spaces, and industrial plots, giving buyers and investors a range of options across Zirakpur, Mohali, and the wider Tricity and North India region.",
  },
]);

export default function Page() {
  return (
    <>
      <PageBanner
        title="Why Choose Motia Group: Trusted Real Estate Developer in Zirakpur"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Why Motia Group" }]}
        image="/shap/abstract-architectural-drawing-sketch.jpg"
        overlayColor="#1c2230"
        overlayOpacity={0.75}
      />
      <JsonLd data={faqSchema} />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal variant="left">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#377f45]">
              Trusted Real Estate Developer in Zirakpur
            </span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              A Decision Backed by Two Decades of Delivery
            </h2>
            <div className="mt-6 space-y-4 text-gray-600">
              <p>
                Choosing a real estate developer is a long-term decision, and buyers across Zirakpur and the Tricity
                region weigh it carefully. Motia Group has spent over 20 years earning that trust, with 15 completed
                projects and more than 4,500 homes and offices delivered to families and businesses.
              </p>
              <p>
                That history matters because it reflects what happens after the sale, whether a project is finished
                on time, whether the paperwork is transparent, and whether the developer is still there to help once
                the keys are handed over. It is on these concrete measures, not marketing alone, that Motia Group has
                built its reputation.
              </p>
            </div>
          </Reveal>

          <Reveal variant="right">
            <div className="relative">
              <div className="absolute -right-4 -top-4 hidden h-full w-full rounded-2xl border-2 border-[#377f45]/30 sm:block" />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/motia-gill-estate/bannergillestate-1.webp"
                  alt="A Motia Group residential development"
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal variant="up">
            <span className="block text-center text-sm font-semibold uppercase tracking-widest text-[#377f45]">
              The Motia Group Difference
            </span>
            <h2 className="mt-2 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              Six Reasons Buyers Choose Us
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item, i) => (
              <Reveal key={item.title} variant="up" delay={(i % 3) * 100}>
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
          src="/motia-citi/hero%20banner.png"
          alt="A Motia Group development"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1c2230]/85" />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Experience the Motia Group Difference</h2>
            <p className="mt-4 text-white/80">
              Speak with our property experts to find the right home, workspace, or investment for you.
            </p>
            <Link
              href="/contact-us"
              className="mt-10 inline-block rounded bg-[#377f45] px-8 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-[#2c6636] active:scale-95"
            >
              Talk to Our Team
            </Link>
          </Reveal>
        </div>
      </section>

      <Reveal variant="up">
        <RelatedLinks
          links={[
            { label: "About Motia Group", href: "/about-us" },
            { label: "Motia Group Founders", href: "/founders" },
            { label: "Motia Group Awards & Recognition", href: "/awards" },
            { label: "Residential Projects in Zirakpur", href: "/residential-projects" },
            { label: "Commercial Projects in Zirakpur", href: "/commercial-projects" },
          ]}
        />
      </Reveal>
    </>
  );
}
