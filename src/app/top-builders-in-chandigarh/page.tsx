import type { Metadata } from "next";
import { Building2, Home as HomeIcon, Mail, MapPin, Phone, ShieldCheck, Store, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ClientsSection from "@/components/ClientsSection";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import ProjectHero from "@/components/ProjectHero";
import Reveal from "@/components/Reveal";
import { faqPageJsonLd } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Top Builders in Chandigarh | Motia Group",
  description:
    "Reshaping Urban Living: Recognized Among the Top Builders in Chandigarh. Explore Motia Group's residential and commercial developments across the Tricity region.",
};

const advantages = [
  {
    icon: MapPin,
    title: "Strategic Locations",
    text: "Prime connectivity along major transit corridors, Airport Road, and highways.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Quality",
    text: "Modern engineering standards, premium construction materials, and safety.",
  },
  {
    icon: Users,
    title: "Customer-First Philosophy",
    text: "Transparent documentation, timely project delivery, and post-possession care.",
  },
];

const portfolio = [
  {
    icon: Building2,
    image: "/home-page-hero-section/harmonygreens-banner-01.webp",
    title: "Premium Residential Apartments",
    text: "Spacious 2, 3, and 4 BHK luxury flats with modern clubhouses, landscaped gardens, and 24/7 security.",
  },
  {
    icon: HomeIcon,
    image: "/motia-gill-estate/bannergillestate-1.webp",
    title: "Exclusive Gated Communities",
    text: "Independent floor layouts and gated villa developments offering total privacy and green open spaces.",
  },
  {
    icon: Store,
    image: "/home-page-hero-section/Royal-Business-Park.webp",
    title: "Commercial & Retail Plazas",
    text: "High-street retail shops, modern office suites, and food court spaces designed for heavy footfall.",
  },
];

const pillars = [
  {
    pillar: "Decades of Trust",
    commitment: "A legacy of successfully delivered residential and commercial projects.",
  },
  {
    pillar: "RERA Compliance",
    commitment: "100% transparent dealings, clear land titles, and RERA-registered developments.",
  },
  {
    pillar: "Modern Architecture",
    commitment: "Earthquake-resistant structures, smart layouts, and maximum natural ventilation.",
  },
  {
    pillar: "High ROI Value",
    commitment: "Properties positioned in rapidly appreciating corridors of the Tricity region.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "What makes Motia Group one of the top builders in the Chandigarh Tricity region?",
    answer: (
      <p>
        Motia Group stands out due to its commitment to timely project delivery, superior construction quality, prime
        location choices, and customer-centric policies that protect buyer investments.
      </p>
    ),
  },
  {
    question: "Are Motia Group residential and commercial projects RERA approved?",
    answer: (
      <p>
        Yes, all ongoing and newly launched developments by Motia Group are fully compliant with RERA guidelines and
        possess clear legal approvals.
      </p>
    ),
  },
];

const contactInfo: { icon: typeof Phone; label: string; value: string; href?: string }[] = [
  { icon: Phone, label: "Phone", value: "+91 [Your Phone Number]" },
  { icon: Mail, label: "Email", value: "sales@motiagroup.com", href: "mailto:sales@motiagroup.com" },
  { icon: MapPin, label: "Corporate Office", value: "Tricity Region, Punjab / Chandigarh" },
];

const faqSchema = faqPageJsonLd([
  {
    question: "What makes Motia Group one of the top builders in the Chandigarh Tricity region?",
    answer:
      "Motia Group stands out due to its commitment to timely project delivery, superior construction quality, prime location choices, and customer-centric policies that protect buyer investments.",
  },
  {
    question: "Are Motia Group residential and commercial projects RERA approved?",
    answer:
      "Yes, all ongoing and newly launched developments by Motia Group are fully compliant with RERA guidelines and possess clear legal approvals.",
  },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ProjectHero
        image="/motia-citi/hero%20banner.png"
        title="Reshaping Urban Living: Recognized Among the Top Builders in Chandigarh"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Top Builders in Chandigarh" }]}
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
                  src="/motia-heights/hero%20banner.png"
                  alt="A Motia Group residential development in the Chandigarh Tricity region"
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#377f45]">
              Top Builders in Chandigarh
            </span>
            <div className="mt-4 space-y-4 text-gray-600">
              <p>
                Finding a home or commercial space that seamlessly balances structural integrity, architectural
                elegance, and strategic location requires choosing a developer with a proven history of excellence.
                As one of the top builders in Chandigarh and the Tricity region, Motia Group has spent decades
                setting benchmarks in residential and commercial real estate development.
              </p>
              <p>
                From luxury high-rise apartments and gated villa communities to high-street commercial plazas, our
                projects are designed to offer modern amenities, eco-conscious planning, and long-term value
                appreciation for homebuyers and investors alike.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
              MOTIA GROUP ARCHITECTURAL ADVANTAGE
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {advantages.map((item, i) => (
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
            Our Portfolio
          </span>
          <h2 className="mt-2 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Signature Development Portfolio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Explore our versatile project categories across the Chandigarh Tricity area:
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {portfolio.map((item, i) => (
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
              Why Choose Motia Group Among Top Builders in Chandigarh?
            </h2>
          </Reveal>

          <Reveal variant="up" delay={100}>
            <div className="mt-10 overflow-x-auto rounded-2xl shadow-lg ring-1 ring-black/5">
              <table className="w-full min-w-[560px] border-collapse bg-white text-left">
                <thead>
                  <tr className="bg-[#377f45] text-white">
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wide">Pillar of Excellence</th>
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wide">
                      Motia Group Commitment
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pillars.map((row, i) => (
                    <tr key={row.pillar} className={i % 2 === 1 ? "bg-[#f4f8f5]" : "bg-white"}>
                      <td className="px-6 py-4 text-sm font-bold text-gray-900">{row.pillar}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{row.commitment}</td>
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
          src="/motiaz-royal-citi/citi-banner-1.webp"
          alt="Motia Group development in the Chandigarh Tricity region"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1c2230]/85" />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Explore Your Dream Property Today</h2>
            <p className="mt-4 text-white/80">
              Connect with our property experts to schedule a private site visit or explore our portfolio.
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
