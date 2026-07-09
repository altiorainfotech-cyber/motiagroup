import { GraduationCap, HeartPulse, Lightbulb, Users2 } from "lucide-react";
import ClientsSection from "@/components/ClientsSection";
import PageBanner from "@/components/PageBanner";

const values = [
  {
    icon: Lightbulb,
    title: "Ground-Breaking Ideas",
    text: "Every employee is motivated to bring in new ideas and solutions to maintain a competitive working culture.",
  },
  {
    icon: Users2,
    title: "Collaborative Culture",
    text: "We collaborate with the best in architecture, design, engineering, and construction to stay ahead of trends.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Growth",
    text: "A friendly work environment that aids communication and feedback, helping build extraordinary work dynamics.",
  },
  {
    icon: HeartPulse,
    title: "Health & Wellness",
    text: "We encourage a healthy mind and body with regular health camps, workshops, and seminars for our team.",
  },
];

export default function Page() {
  return (
    <>
      <PageBanner
        title="Life at Motia"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Career" }, { label: "Life at Motia" }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <span className="block text-sm font-semibold uppercase tracking-widest text-[#377f45]">Careers</span>
        <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Life at Motia</h2>

        <div className="mt-6 max-w-3xl space-y-4 text-gray-600">
          <p>
            We don&rsquo;t just build architectural wonders, we inspire others. This philosophy is engraved
            inherently within us and a testimony to it is the way our every department operates. Every employee at
            the <span className="font-semibold text-[#377f45]">Motia Group</span> is motivated to bring in new
            ground-breaking ideas and solutions to maintain a competitive working culture.
          </p>
          <p>
            We offer a positive yet testing work atmosphere to keep our employees on their toes. We collaborate with
            the best in the fields of architecture, design, engineering, and construction to continuously keep
            ourselves updated with changing trends.
          </p>
          <p>
            We always pay attention to draw and retain the best minds in the construction sector. With a friendly
            work environment which aids communication and feedback into the system, it has helped the company to
            create inordinate work dynamics. We regularly engage our employees through activities, events, and
            celebrations. We encourage our employees for the development of a healthy mind and body with regular
            health camps, workshops, and seminars.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-[#377f45]/20 bg-white p-6 shadow-[0_0_20px_-2px_rgba(55,127,69,0.2)]"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-[#377f45]/10 text-[#377f45]">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <ClientsSection />
    </>
  );
}
