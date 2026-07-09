import { CheckCircle, FileText } from "lucide-react";
import Image from "next/image";
import ProjectHero from "@/components/ProjectHero";
import ProjectTabsLayout, { type ProjectTab } from "@/components/ProjectTabsLayout";

const amenities = [
  "Ideally located in the heart of Zirakpur on the VIP Road which connects the two main national highways- NH-22 and NH-64",
  "Surrounded by dense high rise residential towers like Pearl City Nirmal Chaaya, Silver City, etc.",
  "Huge parking space has been provided for a hassle free shopping experience. The whole parking area is paved with concrete pavers.",
  "Huge area left in front of the complex can be a place for celebration handling open-air concerts, expositions, etc.",
  "With no possible outdoor plaza or park nearby currently, the shopping complex comes up with landscaped area having fountains and plantation, enhancing the walkways and increased footfalls.",
  "Wide Internal Corridors have been specially created to provide more circulation and clutter free spaces.",
  "The Upper and Lower grounds floor shop concept is introduced, giving more frontage and accessible shopping area for customers. The Lower Ground floor, unlike the rest of the places, has huge frontage and access.",
  "Paved outer pathway along the shops have been specially added to provide circulation spaces without vehicular interference.",
  "The overall location and added paved area provided a unique experience of commercial plaza rather than just a shopping complex.",
];

const tabs: ProjectTab[] = [
  {
    id: "overview",
    label: "Overview",
    content: (
      <>
        <h2 className="text-2xl font-bold text-gray-900">PREMIUM COMMERCIAL SPACE AT MOTIA HIGH STREET</h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            High Street <span className="font-bold italic text-[#c2185b]">Commercial Space</span> by Motia Group: A
            Vibrant Hub on VIP Road, Zirakpur
          </p>
          <p>
            Nestled in the heart of the thriving residential zone on VIP Road, Zirakpur, the High Street Commercial
            Space by Motia Group stand out as the only major commercial destination in the area. Designed to be a
            one-stop spot for Fun, Food, and Fashion, this bustling hub has firmly established itself in the hearts
            of both customers and retailers.
          </p>
          <p>
            Backed by the trusted legacy of Motia Group, the development reflects a deep understanding of customer
            lifestyles. By blending affordable luxury with a strong &lsquo;customer-first&rsquo; approach, it has
            carved out a unique identity on the retail map. The space isn&rsquo;t just about shopping &mdash;
            it&rsquo;s about creating experiences.
          </p>
          <p>
            Thoughtfully designed with international architectural flair, the High Street Commercial Units exude
            elegance and sophistication. This meticulously planned commercial zone offers brands a premium platform
            to shine and gives visitors a seamless, enjoyable shopping journey.
          </p>
          <p>
            Whether you&rsquo;re looking to set up shop or spend a leisurely day out, the Motia Group&rsquo;s High
            Street Commercial Units deliver a complete and elevated experience &mdash; right in the heart of
            Zirakpur.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "facilities",
    label: "Facilities",
    content: (
      <>
        <h2 className="text-2xl font-bold text-gray-900">AMENITIES &amp; FACILITIES</h2>
        <ul className="mt-4 space-y-3">
          {amenities.map((item) => (
            <li key={item} className="flex items-start gap-3 text-gray-600">
              <CheckCircle className="mt-0.5 size-5 shrink-0 text-[#377f45]" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "floor-plan",
    label: "Floor-Plan",
    content: (
      <>
        <h2 className="text-2xl font-bold text-gray-900">FLOOR PLAN &amp; SITE PLAN</h2>
        <div className="relative mt-6 aspect-[3/4] max-w-2xl overflow-hidden rounded shadow">
          <Image
            src="/high-street/floorplan.jpg"
            alt="Motia High Street Floor Plan & Site Plan"
            fill
            sizes="(min-width: 1024px) 700px, 100vw"
            className="object-contain"
          />
        </div>
      </>
    ),
  },
  {
    id: "download",
    label: "Download",
    content: (
      <>
        <h2 className="text-2xl font-bold text-gray-900">DOWNLOAD</h2>
        <div className="mt-6 max-w-3xl">
          <div className="relative aspect-[2/1] w-full overflow-hidden rounded">
            <Image
              src="/high-street/download.png"
              alt="Motia High Street Brochure"
              fill
              sizes="(min-width: 1024px) 900px, 100vw"
              className="object-contain"
            />
          </div>
          <a
            href="/high-street/royalpaam.pdf"
            download
            className="mt-6 inline-flex items-center gap-2 text-lg font-medium text-red-600 hover:text-red-700"
          >
            <FileText className="size-6" />
            Download PDF
          </a>
        </div>
      </>
    ),
  },
];

export default function Page() {
  return (
    <>
      <ProjectHero
        image="/high-street/banner.jpg"
        title="Motia High Street - Commercial Space"
        subtitle="The only commercial place, in and around the huge residential area on VIP Road, Zirakpur"
      />
      <ProjectTabsLayout tabs={tabs} />
    </>
  );
}
