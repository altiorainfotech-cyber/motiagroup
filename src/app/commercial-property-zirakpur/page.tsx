import type { Metadata } from "next";
import { Briefcase, Building2, Landmark, Mail, MapPin, Phone, Store, TrendingUp } from "lucide-react";
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
  title: "Commercial Property in Zirakpur | Shops, Offices & Business Spaces",
  description:
    "Explore commercial property in Zirakpur, including retail shops, office spaces and business opportunities at strategically located Motia Group developments.",
};

const types = [
  {
    icon: Building2,
    title: "Office Spaces",
    text: "Dedicated floors and suites suited to corporate, IT and professional services businesses that need a formal business address with scalable floor plates.",
  },
  {
    icon: Store,
    title: "Retail Shops",
    text: "Ground-floor and multi-level shops on high-footfall roads, built for food, fashion, lifestyle and everyday retail businesses that depend on visibility.",
  },
  {
    icon: Landmark,
    title: "SCO Plots & Business Space",
    text: "Shop-cum-office formats and standalone commercial plots that let owners build and brand their own structure within an approved commercial layout.",
  },
];

const spotlight = [
  {
    name: "Motia'z Royal Business Park",
    href: "/motiaz-royal-business-park",
    image: "/motiaz-royal-business-park/banner.jpeg",
    location: "NH-22, Zirakpur",
    detail: "A delivered office space development on the national highway, home to engineering, construction and data-centre businesses already operating on-site.",
  },
  {
    name: "Motia High Street",
    href: "/motia-high-street",
    image: "/high-street/banner.jpg",
    location: "VIP Road, Zirakpur",
    detail: "A delivered retail development of commercial shops on VIP Road, designed for high visibility and consistent footfall.",
  },
];

const investFactors = [
  {
    icon: TrendingUp,
    text: "Rental yield potential: commercial space in a growth corridor like Zirakpur typically commands stronger rental yields than residential property.",
  },
  {
    icon: Briefcase,
    text: "Tenant demand: proximity to highways and established residential catchments drives sustained business demand for both office and retail space.",
  },
  {
    icon: Landmark,
    text: "Ownership formats: decide between a ready office suite, a retail shop, or an SCO plot depending on whether you plan to lease, occupy, or build yourself.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "What types of commercial property are available in Zirakpur?",
    answer: (
      <p>
        Zirakpur&apos;s commercial market spans office spaces, retail shops and SCO (shop-cum-office) plots. Motia
        Group offers both delivered office space at Royal Business Park and retail shops at Motia High Street.
      </p>
    ),
  },
  {
    question: "Is commercial property a good investment in Zirakpur?",
    answer: (
      <p>
        Zirakpur&apos;s position on the Chandigarh-Ambala Highway and NH-22, combined with rapid residential growth in
        the surrounding catchment, has supported steady commercial demand for both office and retail formats.
      </p>
    ),
  },
  {
    question: "What is the difference between office space and an SCO plot?",
    answer: (
      <p>
        Office space is a ready, built floor or suite within a business park that you can lease out or occupy
        immediately. An SCO plot is undeveloped commercial land where the owner constructs and brands their own
        structure within the approved layout.
      </p>
    ),
  },
  {
    question: "Does Motia Group offer both office and retail commercial property?",
    answer: (
      <p>
        Yes. Office space is available at{" "}
        <Link href="/motiaz-royal-business-park" className="font-semibold text-[#377f45] hover:underline">
          Motia&apos;z Royal Business Park
        </Link>{" "}
        on NH-22, and retail shops are available at{" "}
        <Link href="/motia-high-street" className="font-semibold text-[#377f45] hover:underline">
          Motia High Street
        </Link>{" "}
        on VIP Road.
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
    question: "What types of commercial property are available in Zirakpur?",
    answer:
      "Zirakpur's commercial market spans office spaces, retail shops and SCO (shop-cum-office) plots. Motia Group offers both delivered office space at Royal Business Park and retail shops at Motia High Street.",
  },
  {
    question: "Is commercial property a good investment in Zirakpur?",
    answer:
      "Zirakpur's position on the Chandigarh-Ambala Highway and NH-22, combined with rapid residential growth in the surrounding catchment, has supported steady commercial demand for both office and retail formats.",
  },
  {
    question: "What is the difference between office space and an SCO plot?",
    answer:
      "Office space is a ready, built floor or suite within a business park that you can lease out or occupy immediately. An SCO plot is undeveloped commercial land where the owner constructs and brands their own structure within the approved layout.",
  },
  {
    question: "Does Motia Group offer both office and retail commercial property?",
    answer:
      "Yes. Office space is available at Motia'z Royal Business Park on NH-22, and retail shops are available at Motia High Street on VIP Road.",
  },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ProjectHero
        image="/motiaz-royal-business-park/banner.jpeg"
        title="Commercial Property in Zirakpur: Offices, Retail & Business Space"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Commercial Property in Zirakpur" }]}
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
                  src="/high-street/banner.jpg"
                  alt="Commercial property by Motia Group in Zirakpur"
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#377f45]">
              Commercial Property in Zirakpur
            </span>
            <div className="mt-4 space-y-4 text-gray-600">
              <p>
                Not every commercial property in Zirakpur serves the same purpose. Before comparing projects, it
                helps to understand the three broad formats on offer here — office space, retail shops, and SCO
                plots — since each suits a different kind of buyer, tenant and business plan.
              </p>
              <p>
                Motia Group has delivered commercial developments across two of these formats: office space at
                Motia&apos;z Royal Business Park on NH-22, and retail shops at Motia High Street on VIP Road.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
              TYPES OF COMMERCIAL PROPERTY IN ZIRAKPUR
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {types.map((item, i) => (
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
            Spotlight
          </span>
          <h2 className="mt-2 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Commercial Developments by Motia Group
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {spotlight.map((item, i) => (
            <Reveal key={item.name} variant="up" delay={i * 100}>
              <Link
                href={item.href}
                className="group block overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#377f45]">{item.name}</h3>
                  <p className="mt-1 flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-[#377f45]">
                    <MapPin className="size-3.5" /> {item.location}
                  </p>
                  <p className="mt-3 text-sm text-gray-600">{item.detail}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
              What Investors Should Weigh Up
            </h2>
          </Reveal>

          <div className="mt-10 space-y-4">
            {investFactors.map((item, i) => (
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
          src="/motiaz-royal-business-park/banner.jpeg"
          alt="Commercial property by Motia Group in Zirakpur"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1c2230]/85" />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Discuss Your Commercial Investment</h2>
            <p className="mt-4 text-white/80">
              Our team can help you compare office space and retail formats to match your business or investment goals.
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
            { label: "Office Space in Zirakpur", href: "/office-space-zirakpur" },
            { label: "Commercial Shops in Zirakpur", href: "/commercial-shops-zirakpur" },
            { label: "Commercial Projects in Zirakpur", href: "/commercial-projects" },
            { label: "Motia'z Royal Business Park", href: "/motiaz-royal-business-park" },
            { label: "Motia High Street", href: "/motia-high-street" },
          ]}
        />
      </Reveal>

      <Reveal variant="fade">
        <ClientsSection />
      </Reveal>
    </>
  );
}
