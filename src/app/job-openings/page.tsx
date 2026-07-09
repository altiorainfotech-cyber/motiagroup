import { ArrowRight, Briefcase, Headset, Users } from "lucide-react";
import Link from "next/link";
import ClientsSection from "@/components/ClientsSection";
import PageBanner from "@/components/PageBanner";

const jobs = [
  {
    title: "Sales Executive",
    icon: Briefcase,
    text: "Drive property sales and build lasting relationships with prospective buyers and investors.",
  },
  {
    title: "Sales Managers",
    icon: Users,
    text: "Lead and mentor a team of sales executives to hit targets across our residential and commercial projects.",
  },
  {
    title: "Telemarketing Representative",
    icon: Headset,
    text: "Connect with leads over the phone to introduce our projects and set up site visits.",
  },
];

export default function Page() {
  return (
    <>
      <PageBanner
        title="Job Openings"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Career" }, { label: "Job Openings" }]}
        image="/career.jpg"
        overlayColor="#377F45"
        overlayOpacity={0.82}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <span className="block text-sm font-semibold uppercase tracking-widest text-[#377f45]">We&rsquo;re Hiring</span>
        <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Job Openings</h2>
        <p className="mt-4 max-w-3xl text-gray-600">
          Job Openings alert! We&rsquo;re growing rapidly across North India, and to support our exciting expansion
          plans, we&rsquo;re looking for passionate individuals to join our team. Check out the current job openings
          at <span className="font-semibold text-[#377f45]">Motia Group</span> below.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {jobs.map(({ title, icon: Icon, text }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-2xl border border-[#377f45]/20 bg-white p-8 text-center shadow-[0_0_20px_-2px_rgba(55,127,69,0.2)] transition-shadow hover:shadow-[0_0_30px_-2px_rgba(55,127,69,0.4)]"
            >
              <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-[#377f45]/10 text-[#377f45]">
                <Icon className="size-7" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-gray-900">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{text}</p>
              <Link
                href="/contact-us"
                className="mt-6 inline-flex items-center gap-1.5 rounded border-2 border-[#377f45] px-6 py-2 text-sm font-medium text-[#377f45] transition-colors hover:bg-[#377f45] hover:text-white"
              >
                View Details
                <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-[#f4f8f5] p-8 text-center sm:p-12">
          <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">Don&rsquo;t See The Right Fit?</h3>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            We&rsquo;re always looking for talented individuals to join our team. Get in touch and let us know how
            you&rsquo;d like to contribute.
          </p>
          <Link
            href="/contact-us"
            className="mt-6 inline-block rounded bg-[#377f45] px-8 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#2c6636]"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <ClientsSection />
    </>
  );
}
