import type { Metadata } from "next";
import { ArrowRight, Building2, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ClientsSection from "@/components/ClientsSection";
import ProjectHero from "@/components/ProjectHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Commercial Property in Zirakpur & Tricity | Motia Group",
  description:
    "Explore commercial properties, office spaces, business parks and retail opportunities by Motia Group in Zirakpur and the Chandigarh Tricity region.",
};

type CommercialProject = {
  title: string;
  href: string;
  image: string;
  location: string;
  description: string;
};

const commercialProjects: CommercialProject[] = [
  {
    title: "Motia'z Royal Business Park",
    href: "/motiaz-royal-business-park",
    image: "/motiaz-royal-business-park/banner.jpeg",
    location: "NH-22, Zirakpur",
    description: "Premium office space & co-working facilities.",
  },
  {
    title: "Motia High Street",
    href: "/motia-high-street",
    image: "/high-street/banner.jpg",
    location: "VIP Road, Zirakpur",
    description: "Commercial shops for retail, food & lifestyle brands.",
  },
];

function ProjectCard({ project }: { project: CommercialProject }) {
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
        <span className="absolute left-4 top-4 rounded-full bg-[#377f45] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          Delivered
        </span>
      </div>
      <div className="p-6">
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#377f45]/10 px-2.5 py-1 text-xs font-semibold text-[#377f45]">
          <Building2 className="size-3.5" />
          Commercial
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
        image="/motiaz-royal-business-park/banner.jpeg"
        title="Commercial Property in Zirakpur & the Tricity"
        ctaLabel="Enquire Now"
        ctaHref="/contact-us"
        zoomBg
      />

      <section className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-20 lg:px-8">
        <Reveal variant="up">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#377f45]">
            Office Space & Retail Opportunities
          </span>
          <p className="mt-4 text-gray-600">
            For businesses and investors seeking a footprint in one of North India's fastest-growing commercial
            corridors, Motia Group offers two distinct commercial addresses along Zirakpur's busiest arteries — a
            dedicated office and business park, and a high-street retail destination built for footfall. Both are
            fully delivered and open for business today.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          {commercialProjects.map((project, i) => (
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
              Looking for Industrial Land Instead?
            </h2>
            <p className="mt-4 text-gray-600">
              Motia Group also develops industrial plots with highway, rail and airport connectivity across North
              India.
            </p>
            <Link
              href="/industrial-plots"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#377f45] transition-all hover:gap-3"
            >
              Explore Industrial Plots
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-28">
        <Image
          src="/high-street/banner.jpg"
          alt="Commercial development by Motia Group"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1c2230]/85" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Grow Your Business With Motia Group</h2>
            <p className="mt-4 text-white/80">
              Connect with our commercial leasing and sales team to find the right office or retail space for your
              brand.
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
