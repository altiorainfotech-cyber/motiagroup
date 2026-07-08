import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { clientLogos } from "@/data/clientLogos";

export default function Page() {
  const track = [...clientLogos, ...clientLogos];

  return (
    <>
      <PageBanner
        title="Life at Motia"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Career" }, { label: "Life at Motia" }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold underline text-gray-900 sm:text-3xl">Life at Motia</h2>
        <div className="mt-6 space-y-4 text-gray-500">
          <p>
            We don&rsquo;t just build architectural wonders, we inspire others. This philosophy is engraved
            inherently within us and a testimony to it is the way our every department operates. Every employee at
            the <span className="text-[#c2185b]">Motia Group</span> is motivated to bring in new ground-breaking
            ideas and solutions to maintain a competitive working culture.
          </p>
          <p>
            We offer a positive yet testing work atmosphere to keep our employees on their toes. We collaborate with
            the best in the best in the fields of architecture, design, engineering, and construction to continuously
            keep ourselves updated with changing trends.
          </p>
          <p>
            We always pay attention to draw and retain the best minds in the construction sector. With a friendly
            work environment which aids communication and feedback into the system, it has helped the company to
            create inordinate work dynamics. We regularly engage our employees through activities, events, and
            celebrations. We encourage our employees for the development of a healthy mind and body with regular
            health camps, workshops, and seminars.
          </p>
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
