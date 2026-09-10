import type { Metadata } from "next";
import { ArrowRight, Home, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ClientsSection from "@/components/ClientsSection";
import ProjectHero from "@/components/ProjectHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Residential Projects in Zirakpur & Tricity | Motia Group",
  description:
    "Explore residential projects by Motia Group, including premium homes, apartments, independent floors and residential plots in Zirakpur, Kurali and the Tricity region.",
};

type ResidentialProject = {
  title: string;
  href: string;
  image: string;
  status: "Ongoing" | "Delivered";
  location: string;
  description: string;
};

const ongoingProjects: ResidentialProject[] = [
  {
    title: "Motia'z Harmony Greens",
    href: "/motia-harmonygreens",
    image: "/home-page-hero-section/harmonygreens-banner-01.webp",
    status: "Ongoing",
    location: "Sanauli, Zirakpur, near PR-7 Airport Road",
    description: "Premium homes with spacious layouts and green surroundings.",
  },
];

const deliveredProjects: ResidentialProject[] = [
  {
    title: "Motia'z Royal Citi",
    href: "/motiaz-royal-citi",
    image: "/motiaz-royal-citi/citi-banner-1.webp",
    status: "Delivered",
    location: "Zirakpur",
    description: "23-acre project — luxury homes & flats.",
  },
  {
    title: "Motia'z Gill Estate",
    href: "/motia-gill-estate",
    image: "/motia-gill-estate/bannergillestate-1.webp",
    status: "Delivered",
    location: "Kurali, near Mohali",
    description: "Residential plots & commercial units in a modern township.",
  },
  {
    title: "Motia Heights",
    href: "/motia-heights",
    image: "/motia-heights/hero%20banner.png",
    status: "Delivered",
    location: "Dhakoli, Zirakpur",
    description: "3 BHK apartments with landscaped spaces.",
  },
  {
    title: "Motia Citi",
    href: "/motia-citi",
    image: "/motia-citi/hero%20banner.png",
    status: "Delivered",
    location: "Chandigarh-Ambala Highway, Zirakpur",
    description: "215 independent residential plots.",
  },
  {
    title: "Motia HUYS",
    href: "/motia-huys",
    image: "/motiahuys/banner.png",
    status: "Delivered",
    location: "Peer Muchalla Road, Zirakpur",
    description: "2 & 3 BHK independent floors.",
  },
];

function ProjectCard({ project }: { project: ResidentialProject }) {
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
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white ${
            project.status === "Delivered" ? "bg-[#377f45]" : "bg-amber-600"
          }`}
        >
          {project.status}
        </span>
      </div>
      <div className="p-6">
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#377f45]/10 px-2.5 py-1 text-xs font-semibold text-[#377f45]">
          <Home className="size-3.5" />
          Residential
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
        title="Residential Projects in Zirakpur & the Tricity"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Residential Projects" },
        ]}
        ctaLabel="Talk to Our Team"
        ctaHref="/contact-us"
        zoomBg
      />

      <section className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-20 lg:px-8">
        <Reveal variant="up">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#377f45]">
            Homes Across Zirakpur, Kurali & the Tricity
          </span>
          <p className="mt-4 text-gray-600">
            Whether you are looking to book early into an upcoming address or move straight into a ready home,
            Motia Group's residential portfolio spans premium apartments, independent floors and plotted
            developments. Browse our ongoing launch below, or explore our five already-delivered residential
            communities where families are already living.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <Reveal variant="up">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Ongoing Residential Project</h2>
          <p className="mt-2 text-gray-600">Book now to invest early in our newest residential address.</p>
        </Reveal>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ongoingProjects.map((project, i) => (
            <Reveal key={project.href} variant="up" delay={i * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Delivered Residential Projects</h2>
            <p className="mt-2 text-gray-600">Ready-to-move-in homes with an established track record.</p>
          </Reveal>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {deliveredProjects.map((project, i) => (
              <Reveal key={project.href} variant="up" delay={i * 100}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-28">
        <Image
          src="/motiaz-royal-citi/citi-banner-1.webp"
          alt="Residential development by Motia Group"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1c2230]/85" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Find Your Home With Motia Group</h2>
            <p className="mt-4 text-white/80">
              Speak with our property experts to shortlist the residential project that best fits your budget and
              timeline.
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
