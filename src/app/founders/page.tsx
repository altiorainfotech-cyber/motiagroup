import ClientsSection from "@/components/ClientsSection";
import PageBanner from "@/components/PageBanner";
import VisionMissionSection from "@/components/VisionMissionSection";

const founders = [
  {
    name: "Pawan Bansal",
    bio: "The Co-Founder, Mr. Pawan Bansal considered as one of the leading visionaries in the Real Estate Industry. It is after setting up Motia Group that Mr. Pawan Bansal involved himself completely into raising the standards of Real Estate sector in the country and has by his sheer grit and determination made Motia Group a trusted name in realty sector. Today, under the inspiring leadership of Mr. Pawan, Motia Group has made a well-known name that is renowned for its quality of constructions, on-time project delivery and well-engineered designs that have emerged as trendsetters in contemporary urban development and housing.",
  },
  {
    name: "Sahil Mittal",
    bio: "With a remarkable ability to turn concepts into tangible achievements, Sahil Mittal stands as a visionary driven by confidence and enthusiasm. His calm resilience has catalyzed transformative milestones within the company, reshaping its trajectory. Committed to excellence, he takes pride in ensuring projects are delivered on time while prioritizing unparalleled customer satisfaction. Constantly raising the industry's benchmark, he has an unwavering passion for innovation and progress. A true leader at heart, he inspires those around him to excel, guiding every endeavor with a sharp, focused approach that consistently redefines success.",
  },
  {
    name: "Ankush Mittal",
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

export default function Page() {
  return (
    <>
      <PageBanner
        title="Founders"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }, { label: "Founders" }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <h2 className="text-center text-2xl uppercase tracking-wide text-[#377f45] sm:text-3xl">Founders</h2>
        <div className="mt-10">
          <VisionMissionSection />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16 text-center sm:pb-20 lg:px-8">
        <h2 className="text-xl uppercase tracking-wide text-[#377f45] sm:text-2xl">
          Built on Expertise, Driven by Integrity
        </h2>
        <div className="mt-6 space-y-4 text-left text-gray-600">
          <p>
            At <span className="text-[#377f45]">Motia Group</span>, we bring construction and project management
            expertise that delivers <span className="font-semibold text-gray-900">quality, fair pricing, and on-time
            completion</span>. We achieve this by carefully selecting reliable subcontractors, hiring and nurturing
            top-tier talent, and collaborating with clients who value{" "}
            <span className="font-semibold text-gray-900">honesty, transparency, and open communication</span>.
          </p>
          <p>
            We believe that every stakeholder&mdash;whether you&rsquo;re an owner, architect, designer, engineer,
            tenant, broker, subcontractor, or supplier&mdash;plays a vital role in the success of our projects.
            That&rsquo;s why we treat everyone as a valued part of our team. This collaborative approach not only
            leads to outstanding results, but more importantly, it creates{" "}
            <span className="font-semibold text-gray-900">lasting relationships and satisfied clients</span>. And for
            us, the greatest reward is having customers who confidently refer us to others.
          </p>
        </div>

        <h2 className="mt-16 text-xl uppercase tracking-wide text-[#377f45] sm:text-2xl">
          Real Estate That Reflects a Life Without Compromises
        </h2>
        <div className="mt-6 space-y-4 text-left text-gray-600">
          <p>
            Welcome to Motia Group&mdash;where we don&rsquo;t just build properties; we craft lifestyles. Recognized
            as one of the leading real estate developers not only in{" "}
            <span className="font-semibold text-gray-900">Tricity</span> but across{" "}
            <span className="font-semibold text-gray-900">North India</span>, we offer both{" "}
            <span className="font-semibold text-gray-900">premium residential projects with modern amenities</span>{" "}
            and <span className="font-semibold text-gray-900">distinctive commercial properties</span>.
          </p>
          <p>
            From the initial idea to the final execution, we focus on{" "}
            <span className="font-semibold text-gray-900">perfection and excellence</span> at every stage. Our
            projects stand out because of their{" "}
            <span className="font-semibold text-gray-900">flawless design, superior build quality, and unmatched
            style</span>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16 sm:pb-20 lg:px-8">
        <h2 className="text-center text-xl uppercase tracking-wide text-[#377f45] sm:text-2xl">
          Visionaries Behind Our Growth
        </h2>
        <div className="mt-10 divide-y divide-gray-200">
          {founders.map((founder) => (
            <div key={founder.name} className="grid gap-4 py-8 first:pt-0 sm:grid-cols-[220px_1fr] sm:gap-8">
              <h3 className="text-xl uppercase tracking-wide text-[#377f45]">{founder.name}</h3>
              <div className="text-gray-600">{founder.bio}</div>
            </div>
          ))}
        </div>
      </section>

      <ClientsSection />
    </>
  );
}
