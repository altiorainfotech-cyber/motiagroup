import type { Metadata } from "next";
import { ArrowRight, Factory, MapPin, Plane, Train, TrendingUp, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ClientsSection from "@/components/ClientsSection";
import ProjectHero from "@/components/ProjectHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Industrial Plots in Haryana & North India | Motia Group",
  description:
    "Explore industrial plots and commercial development opportunities by Motia Group with strategic highway, railway and airport connectivity across North India.",
};

const connectivityFeatures = [
  {
    icon: Truck,
    title: "Highway Connectivity",
    text: "Direct frontage on NH-344, linking Panchkula, Yamunanagar and Ambala.",
  },
  {
    icon: Train,
    title: "Rail Freight Access",
    text: "Close proximity to freight rail links for efficient goods movement.",
  },
  {
    icon: Plane,
    title: "Airport Proximity",
    text: "Well connected to regional airports for business and logistics travel.",
  },
  {
    icon: TrendingUp,
    title: "Growth Corridor",
    text: "Positioned along a rapidly industrialising stretch of North India.",
  },
];

export default function Page() {
  return (
    <>
      <ProjectHero
        image="/haryana-industral-plots/banner.jpg"
        title="Industrial Plots in Haryana & North India"
        ctaLabel="Enquire About Plots"
        ctaHref="/contact-us"
        zoomBg
      />

      <section className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-20 lg:px-8">
        <Reveal variant="up">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#377f45]">
            Why Choose Motia Group for Industrial Land
          </span>
          <p className="mt-4 text-gray-600">
            As manufacturing and logistics businesses look beyond saturated industrial belts, Motia Group is
            developing fully serviced industrial plots along one of North India's key highway corridors. Built for
            factories, warehouses and logistics parks alike, our industrial developments combine strategic
            connectivity with transparent, plot-level ownership — a category distinct from our residential and
            commercial portfolios.
          </p>
        </Reveal>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
              Built for Connectivity & Logistics
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {connectivityFeatures.map((item, i) => (
              <Reveal key={item.title} variant="up" delay={i * 100}>
                <div className="h-full rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-[#377f45]/10 text-[#377f45]">
                    <item.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <Reveal variant="up">
          <span className="block text-sm font-semibold uppercase tracking-widest text-[#377f45]">
            Flagship Industrial Development
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Haryana Industrial Plots</h2>
        </Reveal>

        <Reveal variant="up" delay={100}>
          <Link
            href="/haryana-industrial-plots"
            className="group mt-10 grid overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:grid-cols-2"
          >
            <div className="relative h-64 w-full overflow-hidden lg:h-full">
              <Image
                src="/haryana-industral-plots/banner.jpg"
                alt="Haryana Industrial Plots"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute left-4 top-4 rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                Ongoing
              </span>
            </div>
            <div className="flex flex-col justify-center p-8">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-lg bg-[#377f45]/10 px-2.5 py-1 text-xs font-semibold text-[#377f45]">
                <Factory className="size-3.5" />
                Industrial
              </span>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Haryana Industrial Plots</h3>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-gray-500">
                <MapPin className="size-4 shrink-0" />
                Saha, NH-344, Haryana, adjacent to Ambala
              </p>
              <p className="mt-3 text-sm text-gray-600">
                Fully developed industrial plots with highway, rail & airport connectivity along the
                Panchkula-Yamunanagar corridor.
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#377f45] transition-all group-hover:gap-2">
                View Full Project Details
                <ArrowRight className="size-4" />
              </span>
            </div>
          </Link>
        </Reveal>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-28">
        <Image
          src="/haryana-industral-plots/banner.jpg"
          alt="Industrial land development by Motia Group"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1c2230]/85" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Secure Your Industrial Plot Today</h2>
            <p className="mt-4 text-white/80">
              Talk to our team about plot sizes, pricing and connectivity advantages for your business.
            </p>
            <Link
              href="/contact-us"
              className="mt-10 inline-block rounded bg-[#377f45] px-8 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-[#2c6636] active:scale-95"
            >
              Contact Us
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
