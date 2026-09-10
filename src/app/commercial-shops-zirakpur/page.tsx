import type { Metadata } from "next";
import { Eye, Mail, MapPin, Phone, ShoppingBag, TrendingUp, Users } from "lucide-react";
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
  title: "Commercial Shops in Zirakpur | Retail Spaces for Sale",
  description:
    "Explore commercial shops and retail spaces in Zirakpur at high-visibility locations designed for retail, food, lifestyle and business opportunities.",
};

const factors = [
  {
    icon: Eye,
    title: "Visibility from the Road",
    text: "A shop is only as good as how easily it is seen. Frontage on a well-travelled road drives walk-in customers without extra advertising spend.",
  },
  {
    icon: Users,
    title: "Footfall, Not Just Traffic",
    text: "Vehicle traffic and genuine footfall are different things. Look for developments near residential catchments and daily-use destinations that convert passers-by into customers.",
  },
  {
    icon: ShoppingBag,
    title: "Tenant Mix",
    text: "A well-planned mix of food, fashion, lifestyle and daily-need retailers keeps a commercial street busy across the day, benefiting every shop owner in it.",
  },
];

const buyerNotes = [
  {
    icon: TrendingUp,
    text: "Rental demand for retail shops tends to track footfall and category mix more closely than square footage alone, so evaluate the surrounding tenant plan, not just the unit.",
  },
  {
    icon: Eye,
    text: "Corner units and ground-floor shops with direct road frontage typically attract stronger tenant interest and rental premiums over inner or upper-floor units.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "What should I look for before buying a commercial shop in Zirakpur?",
    answer: (
      <p>
        Prioritize road visibility, footfall around the location, and the planned tenant mix of the development.
        A shop surrounded by complementary businesses, rather than isolated, tends to perform better over time.
      </p>
    ),
  },
  {
    question: "Where is Motia High Street located?",
    answer: (
      <p>
        Motia High Street is located on VIP Road in Zirakpur, a well-travelled retail corridor designed for
        consistent footfall.
      </p>
    ),
  },
  {
    question: "Is Motia High Street suitable for food and lifestyle businesses?",
    answer: (
      <p>
        Yes, the development&apos;s ground-floor and multi-level shop formats are suited to food outlets, fashion,
        lifestyle brands and everyday retail businesses alike.
      </p>
    ),
  },
  {
    question: "Can I rent out a shop instead of running a business myself?",
    answer: (
      <p>
        Yes, most buyers at retail developments like Motia High Street purchase shops as an investment and lease
        them out to retail tenants rather than operating a business themselves.
      </p>
    ),
  },
];

const contactInfo: { icon: typeof Phone; label: string; value: string; href?: string }[] = [
  { icon: Phone, label: "Phone", value: "+91 8860095959", href: "tel:+918860095959" },
  { icon: Mail, label: "Email", value: "info@motiagroup.com", href: "mailto:info@motiagroup.com" },
  { icon: MapPin, label: "Corporate Office", value: "Motia'z Royal Business Park, Zirakpur" },
];

const faqSchema = faqPageJsonLd([
  {
    question: "What should I look for before buying a commercial shop in Zirakpur?",
    answer:
      "Prioritize road visibility, footfall around the location, and the planned tenant mix of the development. A shop surrounded by complementary businesses, rather than isolated, tends to perform better over time.",
  },
  {
    question: "Where is Motia High Street located?",
    answer:
      "Motia High Street is located on VIP Road in Zirakpur, a well-travelled retail corridor designed for consistent footfall.",
  },
  {
    question: "Is Motia High Street suitable for food and lifestyle businesses?",
    answer:
      "Yes, the development's ground-floor and multi-level shop formats are suited to food outlets, fashion, lifestyle brands and everyday retail businesses alike.",
  },
  {
    question: "Can I rent out a shop instead of running a business myself?",
    answer:
      "Yes, most buyers at retail developments like Motia High Street purchase shops as an investment and lease them out to retail tenants rather than operating a business themselves.",
  },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ProjectHero
        image="/high-street/banner.jpg"
        title="Commercial Shops in Zirakpur: What Makes a Retail Unit Perform"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Commercial Shops in Zirakpur" }]}
        ctaLabel="Enquire About Shops"
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
                  src="/high-street/banner.jpg"
                  alt="Motia High Street commercial shops in Zirakpur"
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#377f45]">
              Commercial Shops in Zirakpur
            </span>
            <div className="mt-4 space-y-4 text-gray-600">
              <p>
                Buying a commercial shop is not the same decision as buying a home. A shop&apos;s value is tied
                directly to how visible it is, how much genuine footfall passes it, and who else is trading around
                it — not just its square footage or finish quality.
              </p>
              <p>
                Motia High Street on VIP Road was planned with these retail fundamentals in mind, giving shop owners
                and investors a location built for consistent customer traffic rather than just floor space.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
              WHAT MAKES A RETAIL SHOP PERFORM
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {factors.map((item, i) => (
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
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal variant="left">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#377f45]">
              Spotlight: Motia High Street
            </span>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">A Retail Address on VIP Road</h2>
            <p className="mt-4 text-gray-600">
              Motia High Street is a delivered commercial development of retail shops on VIP Road, Zirakpur —
              designed around ground-level visibility, a mixed tenant plan, and a location already surrounded by an
              established residential catchment.
            </p>
            <Link
              href="/motia-high-street"
              className="mt-6 inline-block rounded bg-[#377f45] px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-[#2c6636] active:scale-95"
            >
              View Motia High Street
            </Link>
          </Reveal>

          <Reveal variant="right">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/high-street/banner.jpg"
                alt="Motia High Street commercial shops on VIP Road, Zirakpur"
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
              For Investors: What to Weigh Up
            </h2>
          </Reveal>

          <div className="mt-10 space-y-4">
            {buyerNotes.map((item, i) => (
              <Reveal key={item.text} variant="up" delay={i * 100}>
                <div className="flex items-start gap-4 rounded-xl bg-white p-5 ring-1 ring-black/5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#377f45]/10 text-[#377f45]">
                    <item.icon className="size-5" />
                  </span>
                  <p className="text-gray-700">{item.text}</p>
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
          src="/high-street/banner.jpg"
          alt="Commercial shops at Motia High Street, Zirakpur"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1c2230]/85" />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Explore Available Retail Shops</h2>
            <p className="mt-4 text-white/80">
              Speak with our team about unit sizes, pricing and the tenant mix at Motia High Street.
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
            { label: "Motia High Street", href: "/motia-high-street" },
            { label: "Commercial Property in Zirakpur", href: "/commercial-property-zirakpur" },
            { label: "Commercial Projects in Zirakpur", href: "/commercial-projects" },
            { label: "Real Estate in Zirakpur", href: "/real-estate-in-zirakpur" },
            { label: "Property Investment", href: "/property-investment" },
          ]}
        />
      </Reveal>

      <Reveal variant="fade">
        <ClientsSection />
      </Reveal>
    </>
  );
}
