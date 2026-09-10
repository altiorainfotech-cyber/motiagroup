import type { Metadata } from "next";
import { ArrowRight, Factory, Home, MapPin, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ClientsSection from "@/components/ClientsSection";
import ProjectHero from "@/components/ProjectHero";
import RelatedLinks from "@/components/RelatedLinks";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Ongoing Real Estate Projects in Zirakpur | Motia Group",
  description:
    "Explore ongoing residential and commercial projects by Motia Group in Zirakpur and surrounding growth corridors, including Harmony Greens.",
};

type OngoingProject = {
  title: string;
  href: string;
  image: string;
  category: "Residential" | "Industrial";
  location: string;
  description: string;
};

const ongoingProjects: OngoingProject[] = [
  {
    title: "Motia'z Harmony Greens",
    href: "/motia-harmonygreens",
    image: "/home-page-hero-section/harmonygreens-banner-01.webp",
    category: "Residential",
    location: "Sanauli, Zirakpur, near PR-7 Airport Road",
    description: "Premium homes with spacious layouts and green surroundings.",
  },
  {
    title: "Haryana Industrial Plots",
    href: "/haryana-industrial-plots",
    image: "/haryana-industral-plots/banner.jpg",
    category: "Industrial",
    location: "Saha, NH-344, Haryana, adjacent to Ambala",
    description: "Fully developed industrial plots with highway, rail & airport connectivity.",
  },
];

function ProjectCard({ project }: { project: OngoingProject }) {
  const CategoryIcon = project.category === "Residential" ? Home : Factory;
  return (
    <Link
      href={project.href}
      className="group block overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          <Rocket className="size-3.5" />
          Ongoing
        </span>
      </div>
      <div className="p-6">
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#377f45]/10 px-2.5 py-1 text-xs font-semibold text-[#377f45]">
          <CategoryIcon className="size-3.5" />
          {project.category}
        </span>
        <h3 className="mt-4 text-lg font-bold text-gray-900">{project.title}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-gray-500">
          <MapPin className="size-4 shrink-0" />
          {project.location}
        </p>
        <p className="mt-2 text-sm text-gray-600">{project.description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#377f45] transition-all group-hover:gap-2">
          View Project
          <ArrowRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}

export default function Page() {
  return (
    <>
      <ProjectHero
        image="/home-page-hero-section/harmonygreens-banner-01.webp"
        title="Ongoing Real Estate Projects in Zirakpur"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Ongoing Projects" },
        ]}
        ctaLabel="Invest Early"
        ctaHref="/contact-us"
        zoomBg
      />

      <section className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-20 lg:px-8">
        <Reveal variant="up">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#377f45]">
            Get In Early on Tomorrow's Growth Corridors
          </span>
          <p className="mt-4 text-gray-600">
            The best pricing and unit selection is almost always available before a project is complete. Motia
            Group currently has two developments under active development — a residential address in Zirakpur's
            expanding Sanauli belt, and an industrial land development along Haryana's NH-344 corridor. Both offer
            early investors the chance to enter ahead of the curve in fast-appreciating locations.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          {ongoingProjects.map((project, i) => (
            <Reveal key={project.href} variant="up" delay={i * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Prefer a Ready-to-Move Property?
            </h2>
            <p className="mt-4 text-gray-600">
              Motia Group also has 7 fully delivered residential and commercial projects across Zirakpur and the
              Tricity region.
            </p>
            <Link
              href="/delivered-projects"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#377f45] transition-all hover:gap-3"
            >
              Explore Delivered Projects
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-28">
        <Image
          src="/home-page-hero-section/harmonygreens-banner-02.webp"
          alt="An ongoing development by Motia Group"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1c2230]/85" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Reserve Your Unit Before Launch Pricing Ends</h2>
            <p className="mt-4 text-white/80">
              Connect with our sales team to learn about current availability, pricing and payment plans.
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

      <Reveal variant="up">
        <RelatedLinks
          links={[
            { label: "Delivered Projects", href: "/delivered-projects" },
            { label: "Residential Projects in Zirakpur", href: "/residential-projects" },
            { label: "Commercial Projects in Zirakpur", href: "/commercial-projects" },
            { label: "Property Investment", href: "/property-investment" },
            { label: "About Motia Group", href: "/about-us" },
          ]}
        />
      </Reveal>

      <Reveal variant="fade">
        <ClientsSection />
      </Reveal>
    </>
  );
}
