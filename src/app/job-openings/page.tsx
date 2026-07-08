import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { clientLogos } from "@/data/clientLogos";

const jobs = [
  { title: "Sales Executive" },
  { title: "Sales Managers" },
  { title: "Telemarketing Representative" },
];

export default function Page() {
  const track = [...clientLogos, ...clientLogos];

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
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Job Openings</h2>
        <p className="mt-4 max-w-3xl text-gray-500">
          Job Openings alert! We&rsquo;re growing rapidly across North India, and to support our exciting expansion
          plans, we&rsquo;re looking for passionate individuals to join our team. Check out the current job openings
          at <span className="text-[#c2185b]">Motia Group</span> below.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="flex flex-col items-center rounded p-8 text-center transition-shadow hover:shadow-xl"
            >
              <div className="relative size-24 shrink-0">
                <Image src="/jkdafj.jpg" alt="" fill sizes="96px" className="rounded-full object-cover" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-500">{job.title}</h3>
              <a
                href="#"
                className="mt-6 rounded border-2 border-[#377f45] px-6 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-[#377f45] hover:text-white"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <h2 className="text-center text-2xl font-bold underline text-gray-900 sm:text-3xl">Our Clients</h2>

        <div className="mt-10 overflow-hidden py-12">
          <div className="animate-marquee flex w-max items-center gap-16 sm:gap-20">
            {track.map((logo, i) => (
              <div key={`${logo.src}-${i}`} className="relative h-20 w-[150px] shrink-0">
                <Image src={logo.src} alt={logo.alt} fill sizes="150px" className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
