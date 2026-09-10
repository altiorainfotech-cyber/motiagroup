import type { Metadata } from "next";
import { Award, Building2, CalendarCheck, Factory, Gem, Handshake, KeyRound, ShieldCheck, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ClientsSection from "@/components/ClientsSection";
import ProjectHero from "@/components/ProjectHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Motia Group | Real Estate Developer in Zirakpur & Tricity",
  description:
    "Learn about Motia Group's journey in residential and commercial real estate development, our projects, leadership, values and commitment to quality.",
};

const stats = [
  { value: "2005", label: "Year Established", icon: CalendarCheck },
  { value: "15", label: "Projects Completed", icon: Building2 },
  { value: "4500+", label: "Homes/Offices Delivered", icon: KeyRound },
  { value: "15", label: "Awards Won", icon: Award },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Transparency",
    text: "Clear documentation, RERA-compliant dealings, and honest communication at every stage of the buying journey.",
  },
  {
    icon: Gem,
    title: "Quality",
    text: "Modern engineering standards and premium materials across every residential, commercial, and industrial project.",
  },
  {
    icon: Handshake,
    title: "Customer-First",
    text: "Timely delivery and dedicated post-possession support that puts long-term buyer relationships first.",
  },
];

const projectTypes = [
  {
    icon: Building2,
    image: "/home-page-hero-section/harmonygreens-banner-01.webp",
    title: "Residential Projects",
    text: "Apartments, floors, and gated communities across Zirakpur, Mohali, and the Tricity region, from ongoing launches like Motia'z Harmony Greens to delivered addresses like Motia'z Royal Citi.",
    href: "/residential-projects",
  },
  {
    icon: Store,
    image: "/home-page-hero-section/Royal-Business-Park.webp",
    title: "Commercial Projects",
    text: "Office spaces and high-street retail developments such as Motia'z Royal Business Park and Motia High Street, built for businesses and investors alike.",
    href: "/commercial-projects",
  },
  {
    icon: Factory,
    image: "/haryana-industral-plots/banner.jpg",
    title: "Industrial Plots",
    text: "Strategically located industrial land, including our Haryana Industrial Plots on NH-344, designed for manufacturing and business growth.",
    href: "/industrial-plots",
  },
];

export default function Page() {
  return (
    <>
      <ProjectHero
        image="/aboutus.jpg"
        title="About Motia Group — Real Estate Developer in Zirakpur & Tricity"
        subtitle="20+ years of building homes, workspaces, and industrial land across North India"
        ctaLabel="Contact Us"
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
                  alt="A Motia Group development in the Chandigarh Tricity region"
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#377f45]">Who We Are</span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              A Trusted Real Estate Developer in Zirakpur
            </h2>
            <div className="mt-6 space-y-4 text-gray-600">
              <p>
                Motia Group is a real estate developer headquartered in Zirakpur, Punjab, with a presence that spans
                the Chandigarh Tricity region and beyond. Established in 2005, we have spent more than two decades
                building residential communities, commercial spaces, and industrial land that stand the test of time.
              </p>
              <p>
                Our portfolio reflects that range: 15 projects completed and over 4,500 homes and offices delivered
                to date, from gated residential communities to high-street commercial plazas and industrial plots.
                Every project we undertake is guided by the same principles of quality construction, transparent
                dealings, and timely delivery.
              </p>
              <p>
                Behind every Motia Group development is a leadership team committed to raising the standard of real
                estate in the region.{" "}
                <Link href="/founders" className="font-semibold text-[#377f45] hover:underline">
                  Meet our founders
                </Link>{" "}
                to learn more about the people driving that vision forward.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal variant="up">
            <span className="block text-center text-sm font-semibold uppercase tracking-widest text-[#377f45]">
              Our Track Record
            </span>
            <h2 className="mt-2 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              20+ Years of Real Estate Excellence
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {stats.map(({ value, label, icon: Icon }, i) => (
              <Reveal key={label} variant="up" delay={i * 100}>
                <div className="rounded-xl bg-white p-5 text-center ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6">
                  <Icon className="mx-auto size-7 text-[#377f45]" />
                  <div className="mt-3 text-3xl font-bold text-gray-900">{value}</div>
                  <div className="text-xs font-medium text-gray-500 sm:text-sm">{label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <Reveal variant="up">
          <span className="block text-center text-sm font-semibold uppercase tracking-widest text-[#377f45]">
            Our Values
          </span>
          <h2 className="mt-2 text-center text-3xl font-bold text-gray-900 sm:text-4xl">What Drives Us</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            The values that shape every Motia Group project, from first blueprint to final handover.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {values.map((item, i) => (
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
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal variant="up">
            <span className="block text-center text-sm font-semibold uppercase tracking-widest text-[#377f45]">
              What We Build
            </span>
            <h2 className="mt-2 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              Residential, Commercial & Industrial
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
              Explore the three pillars of the Motia Group portfolio.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {projectTypes.map((item, i) => (
              <Reveal key={item.title} variant="up" delay={i * 100}>
                <Link
                  href={item.href}
                  className="group block overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
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
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-28">
        <Image
          src="/footer.webp"
          alt="City skyline representing the Motia Group development footprint"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1c2230]/85" />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Let&apos;s Build Your Future Together</h2>
            <p className="mt-4 text-white/80">
              Whether you&apos;re looking for a home, a workspace, or an investment, our team is ready to help you
              find the right Motia Group project.
            </p>
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
