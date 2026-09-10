import type { Metadata } from "next";
import { FileCheck2, Landmark, MapPin, Mail, Phone, Route, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ClientsSection from "@/components/ClientsSection";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import ProjectHero from "@/components/ProjectHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Residential Plots in Zirakpur | Premium Plots & Township Projects",
  description:
    "Find residential plots and township opportunities in and around Zirakpur with Motia Group. Explore locations, connectivity, amenities and project details.",
};

const checklist = [
  {
    icon: ShieldCheck,
    title: "RERA Registration",
    text: "Confirm the plotted development is registered with the state RERA authority before making any payment. This is the single biggest safeguard for a plot buyer.",
  },
  {
    icon: FileCheck2,
    title: "Clear Title & Registry",
    text: "Verify the land title is free of disputes and that registry documentation is transparent and ready to be transferred in your name.",
  },
  {
    icon: Route,
    title: "Internal Road Width",
    text: "Wider internal roads mean easier construction access later, better emergency access, and a more comfortable long-term living environment.",
  },
  {
    icon: Landmark,
    title: "Approved Layout Plan",
    text: "Cross-check that the layout plan, plot sizes and common facilities match what has actually been sanctioned by the local development authority.",
  },
];

const spotlightProjects = [
  {
    name: "Motia Citi",
    href: "/motia-citi",
    image: "/motia-citi/hero%20banner.png",
    location: "Chandigarh-Ambala Highway, Zirakpur",
    detail: "215 residential plots along the Chandigarh-Ambala Highway, our flagship plotted development in Zirakpur, delivered with internal roads, boundary walls and gated access already in place.",
  },
  {
    name: "Motia'z Gill Estate",
    href: "/motia-gill-estate",
    image: "/motia-gill-estate/bannergillestate-1.webp",
    location: "Kurali, near Mohali",
    detail: "A delivered township near Kurali offering residential plots alongside dedicated commercial space, suited to buyers who want both a home plot and rental income potential in one location.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "What documents should I check before buying a residential plot in Zirakpur?",
    answer: (
      <p>
        Ask for the RERA registration certificate, the approved layout plan, the title deed or chain of ownership
        documents, and the No Objection Certificates from relevant local authorities before making any booking
        payment.
      </p>
    ),
  },
  {
    question: "Can I get a bank loan against a residential plot?",
    answer: (
      <p>
        Yes, most nationalized and private banks offer plot loans for RERA-registered, clear-title developments,
        though terms differ from home loans. Our sales team can guide you toward banks that have already appraised
        Motia Group projects.
      </p>
    ),
  },
  {
    question: "How many plots are available at Motia Citi?",
    answer: (
      <p>
        Motia Citi is a delivered development of 215 residential plots on the Chandigarh-Ambala Highway in Zirakpur.
        Visit the{" "}
        <Link href="/motia-citi" className="font-semibold text-[#377f45] hover:underline">
          Motia Citi project page
        </Link>{" "}
        for size options and availability.
      </p>
    ),
  },
  {
    question: "Is registry immediate after booking a plot?",
    answer: (
      <p>
        Registry timelines depend on the specific project and payment plan chosen. Our team walks every buyer
        through the registry and possession process in detail before booking so there are no surprises later.
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
        image="/motia-citi/hero%20banner.png"
        title="Residential Plots in Zirakpur: A Buyer's Guide"
        ctaLabel="Enquire About Plots"
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
                  src="/motia-gill-estate/bannergillestate-1.webp"
                  alt="A residential plotted development by Motia Group near Zirakpur"
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#377f45]">
              Residential Plots in Zirakpur
            </span>
            <div className="mt-4 space-y-4 text-gray-600">
              <p>
                A residential plot is a different kind of investment from a ready flat: you are buying land, timing
                and paperwork as much as location. Zirakpur&apos;s rapid growth along the Chandigarh-Ambala Highway and
                PR-7 corridor has made plotted developments here especially attractive, but it also means more
                developers competing for buyer attention — not all with the same standards.
              </p>
              <p>
                This guide covers what to actually check before signing anything, and where Motia Group&apos;s own
                plotted developments — Motia Citi and Motia&apos;z Gill Estate — fit into that picture.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
              WHAT TO CHECK BEFORE YOU BUY A PLOT
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {checklist.map((item, i) => (
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
            Spotlight
          </span>
          <h2 className="mt-2 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Plotted Developments by Motia Group
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {spotlightProjects.map((item, i) => (
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
            <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">The Buying Process, Step by Step</h2>
          </Reveal>

          <div className="mt-10 space-y-4">
            {[
              "Shortlist the project and confirm RERA registration along with the approved layout plan.",
              "Visit the site to physically verify plot boundaries, road width and development status.",
              "Review the payment plan, booking agreement and expected registry timeline in writing.",
              "Complete registry with a clear, verified title transferred fully in your name.",
            ].map((step, i) => (
              <Reveal key={step} variant="up" delay={i * 100}>
                <div className="flex items-start gap-4 rounded-xl bg-white p-5 ring-1 ring-black/5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#377f45]/10 text-sm font-bold text-[#377f45]">
                    {i + 1}
                  </span>
                  <p className="text-gray-700">{step}</p>
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
          src="/motia-gill-estate/bannergillestate-1.webp"
          alt="Residential plots by Motia Group near Zirakpur"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1c2230]/85" />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Explore Available Plots?</h2>
            <p className="mt-4 text-white/80">
              Speak with our team about plot sizes, pricing and documentation at Motia Citi and Motia&apos;z Gill Estate.
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

      <Reveal variant="fade">
        <ClientsSection />
      </Reveal>
    </>
  );
}
