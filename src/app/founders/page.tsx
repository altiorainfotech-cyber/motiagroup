import { Building2, ShieldCheck } from "lucide-react";
import Image from "next/image";
import ClientsSection from "@/components/ClientsSection";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import VisionMissionSection from "@/components/VisionMissionSection";

const founders = [
  {
    name: "Pawan Bansal",
    role: "Co-Founder, Motia Group",
    bio: "The Co-Founder, Mr. Pawan Bansal considered as one of the leading visionaries in the Real Estate Industry. It is after setting up Motia Group that Mr. Pawan Bansal involved himself completely into raising the standards of Real Estate sector in the country and has by his sheer grit and determination made Motia Group a trusted name in realty sector. Today, under the inspiring leadership of Mr. Pawan, Motia Group has made a well-known name that is renowned for its quality of constructions, on-time project delivery and well-engineered designs that have emerged as trendsetters in contemporary urban development and housing.",
  },
  {
    name: "Sahil Mittal",
    role: "Co-Founder, Motia Group",
    bio: "With a remarkable ability to turn concepts into tangible achievements, Sahil Mittal stands as a visionary driven by confidence and enthusiasm. His calm resilience has catalyzed transformative milestones within the company, reshaping its trajectory. Committed to excellence, he takes pride in ensuring projects are delivered on time while prioritizing unparalleled customer satisfaction. Constantly raising the industry's benchmark, he has an unwavering passion for innovation and progress. A true leader at heart, he inspires those around him to excel, guiding every endeavor with a sharp, focused approach that consistently redefines success.",
  },
  {
    name: "Ankush Mittal",
    role: "Co-Founder, Motia Group",
    bio: (
      <>
        <p>
          Motia Group has redefined real estate in North India with a foundation built on customer-centricity,
          cutting-edge engineering, and absolute transparency. Their philosophy goes beyond constructing
          buildings&mdash;they aim to build trust and nurture thriving communities. With a focus on sustainability
          and innovation, they inspire individuals to dream bigger and live better.
        </p>
        <p className="mt-4">
          Committed to &ldquo;Creating the Difference,&rdquo; Motia Group envisions a future where every project
          becomes a canvas for growth and success, fostering connections that endure for generations. Their pledge to
          help people &ldquo;Embrace the Difference&rdquo; reflects their role as more than developers&mdash;they are
          partners in shaping lives. As they venture boldly into new commercial horizons, Motia Group sets the stage
          for excellence and opportunity in every endeavor.
        </p>
      </>
    ),
  },
];

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Page() {
  return (
    <>
      <PageBanner
        title="Founders"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }, { label: "Founders" }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal variant="left">
            <div className="relative">
              <div className="absolute -right-4 -top-4 hidden h-full w-full rounded-2xl border-2 border-[#377f45]/30 sm:block" />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/cardslider-home/ARCHITECTURAL.webp"
                  alt="A Motia Group residential development at dusk"
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 right-6 flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)] ring-1 ring-black/5 sm:right-8">
                <span className="text-3xl font-bold text-[#377f45]">3</span>
                <span className="max-w-[130px] text-sm font-semibold leading-tight text-gray-900">
                  Visionaries Leading Motia Group
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-[#377f45]">Leadership</span>
              <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Founders</h2>
              <p className="mt-4 text-gray-600">
                Guided by decades of combined experience, our founders have shaped Motia Group into one of North
                India&rsquo;s most trusted names in real estate development &mdash; grounded in trust, craftsmanship,
                and a relentless focus on the people who live and work in what they build.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal variant="up" className="mt-16">
          <VisionMissionSection />
        </Reveal>
      </section>

      <section className="relative overflow-hidden bg-[#1c2230] py-20 sm:py-24">
        <Image
          src="/motiaz-royal-business-park/banner.jpeg"
          alt="Motia'z Royal Business Park, the Motia Group corporate headquarters"
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c2230] via-[#1c2230]/85 to-[#1c2230]/60" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <span className="block text-center text-sm font-semibold uppercase tracking-widest text-[#7fce8f]">
            Our Philosophy
          </span>
          <h2 className="mt-2 text-center text-3xl font-bold text-white sm:text-4xl">What Sets Us Apart</h2>

          <div className="mt-14 grid gap-12 sm:grid-cols-2 sm:gap-16">
            <Reveal variant="left">
              <div>
                <span className="flex size-14 items-center justify-center rounded-xl bg-[#377f45] text-white shadow-lg">
                  <ShieldCheck className="size-7" />
                </span>
                <h3 className="mt-6 text-xl font-bold text-white sm:text-2xl">
                  Built on Expertise, Driven by Integrity
                </h3>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-white/70">
                  <p>
                    At <span className="font-semibold text-[#7fce8f]">Motia Group</span>, we bring construction and
                    project management expertise that delivers{" "}
                    <span className="font-semibold text-white">quality, fair pricing, and on-time completion</span>.
                    We achieve this by carefully selecting reliable subcontractors, hiring and nurturing top-tier
                    talent, and collaborating with clients who value{" "}
                    <span className="font-semibold text-white">honesty, transparency, and open communication</span>.
                  </p>
                  <p>
                    We believe that every stakeholder&mdash;whether you&rsquo;re an owner, architect, designer,
                    engineer, tenant, broker, subcontractor, or supplier&mdash;plays a vital role in the success of
                    our projects. That&rsquo;s why we treat everyone as a valued part of our team. This collaborative
                    approach not only leads to outstanding results, but more importantly, it creates{" "}
                    <span className="font-semibold text-white">lasting relationships and satisfied clients</span>.
                    And for us, the greatest reward is having customers who confidently refer us to others.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal variant="right">
              <div>
                <span className="flex size-14 items-center justify-center rounded-xl bg-[#377f45] text-white shadow-lg">
                  <Building2 className="size-7" />
                </span>
                <h3 className="mt-6 text-xl font-bold text-white sm:text-2xl">
                  Real Estate That Reflects a Life Without Compromises
                </h3>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-white/70">
                  <p>
                    Welcome to Motia Group&mdash;where we don&rsquo;t just build properties; we craft lifestyles.
                    Recognized as one of the leading real estate developers not only in{" "}
                    <span className="font-semibold text-white">Tricity</span> but across{" "}
                    <span className="font-semibold text-white">North India</span>, we offer both{" "}
                    <span className="font-semibold text-white">premium residential projects with modern amenities</span>{" "}
                    and <span className="font-semibold text-white">distinctive commercial properties</span>.
                  </p>
                  <p>
                    From the initial idea to the final execution, we focus on{" "}
                    <span className="font-semibold text-white">perfection and excellence</span> at every stage. Our
                    projects stand out because of their{" "}
                    <span className="font-semibold text-white">
                      flawless design, superior build quality, and unmatched style
                    </span>
                    .
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:px-8">
        <span className="block text-center text-sm font-semibold uppercase tracking-widest text-[#377f45]">
          Meet The Team
        </span>
        <h2 className="mt-2 text-center text-3xl font-bold text-gray-900 sm:text-4xl">Visionaries Behind Our Growth</h2>

        <div className="mt-14 space-y-16">
          {founders.map((founder, i) => (
            <Reveal key={founder.name} variant={i % 2 === 0 ? "left" : "right"}>
              <div
                className={`flex flex-col items-center gap-8 sm:gap-12 ${
                  i % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row"
                }`}
              >
                <div className="flex shrink-0 flex-col items-center text-center">
                  <div className="flex size-28 items-center justify-center rounded-full bg-gradient-to-br from-[#377f45] to-[#1f4a28] text-3xl font-bold text-white shadow-[0_15px_35px_-10px_rgba(55,127,69,0.5)] ring-4 ring-[#377f45]/10 ring-offset-4">
                    {initials(founder.name)}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">{founder.name}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#377f45]">{founder.role}</p>
                </div>
                <div
                  className={`space-y-4 border-t border-[#377f45]/15 pt-6 text-gray-600 sm:border-t-0 sm:pt-0 ${
                    i % 2 === 1 ? "sm:border-r sm:pr-10" : "sm:border-l sm:pl-10"
                  }`}
                >
                  {founder.bio}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal variant="fade">
        <ClientsSection />
      </Reveal>
    </>
  );
}
