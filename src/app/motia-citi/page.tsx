import Image from "next/image";
import ProjectHero from "@/components/ProjectHero";
import ProjectTabsLayout, { type ProjectTab } from "@/components/ProjectTabsLayout";
import SpecCarousel from "@/components/SpecCarousel";

// Specifications, construction updates & sample flat pictures are reused
// from Harmony Greens as placeholders until Motia Citi-specific ones are
// provided. Facilities, Walk Through, and Download have no source content
// yet, so they're left as "coming soon".
const constructionUpdateImages = [
  "/construction%20updates/c1.webp",
  "/construction%20updates/c2.webp",
  "/construction%20updates/c3.webp",
  "/construction%20updates/c4.webp",
  "/construction%20updates/c5.webp",
  "/construction%20updates/c6.webp",
];

const sampleFlatImages = [
  "/Sample%20Flat%20Pictures/01.webp",
  "/Sample%20Flat%20Pictures/02.webp",
  "/Sample%20Flat%20Pictures/03.webp",
  "/Sample%20Flat%20Pictures/04.webp",
  "/Sample%20Flat%20Pictures/05.webp",
];

const specifications = [
  {
    icon: "/fireplace.png",
    title: "Water Supply",
    points: ["Tubewell with hydro pneumatic system", "Adequate storage for rain water harvesting"],
  },
];

function ComingSoon({ title }: { title: string }) {
  return (
    <>
      <h2 className="text-2xl font-bold uppercase text-gray-900">{title}</h2>
      <p className="mt-4 text-gray-500">Content coming soon.</p>
    </>
  );
}

const tabs: ProjectTab[] = [
  {
    id: "overview",
    label: "Overview",
    content: (
      <>
        <h2 className="text-2xl font-bold text-gray-900">OVERVIEW</h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            <span className="font-bold text-[#c2185b]">Motia Citi</span> is a delivered project. With great
            reachability and accessibility, it&rsquo;s one of the best places to reside in Zirakpur. The project is
            spread over 11 acres and offers 215 residential independent plots. It is strategically located on
            Chandigarh Ambala highway. With 35 ft. wide internal roads, it promises openness and fresh air.
          </p>
        </div>
      </>
    ),
  },
  { id: "facilities", label: "Facilities", content: <ComingSoon title="Amenities & Facilities" /> },
  {
    id: "location-map",
    label: "Location Map",
    content: (
      <>
        <h2 className="text-2xl font-bold text-gray-900">LOCATION MAP</h2>
        <div className="relative mt-4 h-[450px] w-full overflow-hidden rounded">
            <iframe
            src="https://www.google.com/maps?cid=1145837265482741397&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Motia Citi Location"
            className="absolute inset-0 size-full border-0"
            />
          </div>
      </>
    ),
  },
  {
    id: "floor-plan",
    label: "Floor-Plan",
    content: (
      <>
        <h2 className="text-2xl font-bold text-gray-900">FLOOR PLAN &amp; SITE PLAN</h2>
        <div className="mt-6 max-w-2xl overflow-hidden rounded border-2 border-[#377f45]/40 bg-white p-2">
          <div className="relative aspect-[3/2] w-full">
            <Image
              src="/motia-citi/floor%20plan%20%26%20Site%20Plan.png"
              alt="Motia Citi Floor Plan & Site Plan"
              fill
              sizes="(min-width: 768px) 700px, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </>
    ),
  },
  {
    id: "specifications",
    label: "Specifications",
    content: (
      <>
        <h2 className="text-2xl font-bold text-gray-900">SPECIFICATION</h2>
        <div className="mt-6">
          <SpecCarousel items={specifications} />
        </div>
      </>
    ),
  },
  {
    id: "construction-updates",
    label: "Construction Updates",
    content: (
      <>
        <h2 className="text-2xl font-bold text-gray-900">CONSTRUCTION UPDATES</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {constructionUpdateImages.map((src) => (
            <div key={src} className="relative aspect-[3/2] overflow-hidden rounded shadow">
              <Image src={src} alt="Construction update" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "sample-flat-pictures",
    label: "Sample Flat Pictures",
    content: (
      <>
        <h2 className="text-2xl font-bold text-gray-900">SAMPLE FLAT PICTURES</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {sampleFlatImages.map((src) => (
            <div key={src} className="relative aspect-[3/2] overflow-hidden rounded shadow">
              <Image src={src} alt="Sample flat" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
            </div>
          ))}
        </div>
      </>
    ),
  },
  { id: "walk-through", label: "Walk Through", content: <ComingSoon title="Walkthrough" /> },
  { id: "download", label: "Download", content: <ComingSoon title="Download" /> },
];

export default function Page() {
  return (
    <>
      <ProjectHero
        image="/motia-citi/hero%20banner.png"
        title="Motia Citi"
        subtitle="Premium apartments and homes crafted with a sense to reconnect with nature."
      />
      <ProjectTabsLayout tabs={tabs} />
    </>
  );
}
