import { CheckCircle, FileText } from "lucide-react";
import Image from "next/image";
import ProjectHero from "@/components/ProjectHero";
import ProjectTabsLayout, { type ProjectTab } from "@/components/ProjectTabsLayout";
import SpecCarousel from "@/components/SpecCarousel";

// Construction updates & sample flat pictures are reused from Harmony Greens
// as placeholders until Gill Estate-specific ones are provided.
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

const amenities = [
  "On 200 Ft. wide Chandigarh - Kurali Highway",
  "40 Ft. wide Internal Roads",
  "Greens Parks",
  "Large Frontage",
  "Gated CCTV Monitored Entry",
  "24x7 Security",
  "Sewerage Treatment Plant",
  "Well Lit Streets",
  "Interlocking Tiles on internal Roads",
  "Water Storage Tank",
  "Door Bell",
  "Rain / Fluid Water Drainage",
  "EWS wide internal Roads",
  "Multiple Green Parks",
  "School Site",
  "Main Entrance 60 feet wide",
  "Second Entry 30 feet wide",
  "Approx. 17 feet wide Parking in Front of Commercial Units",
];

const tabs: ProjectTab[] = [
  {
    id: "overview",
    label: "Overview",
    content: (
      <>
        <h2 className="text-2xl font-bold text-gray-900">OVERVIEW - MOTIA&apos;Z GILL ESTATE</h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Visualize a dream luxury house to call your own, that too at an affordable price.{" "}
            <span className="font-bold text-[#c2185b]">Motia Group</span> launches the State of Art Township in
            Kurali spread across 21 acres and that too right on Mohali – Ropar Highway. This happens to be one of the
            fastest growing areas around Mohali. Motia&rsquo;z Gill Estate with its admirable features truly offers
            residents a luxurious life close to all amenities. It has been planned around the topography with the
            most sought after locations to dwell on. The well-planned amenities are strategically located and spread
            across the community to ensure that no matter where you buy your home, the distances are easily bridged.
            Motia&rsquo;z Gill Estate has plot variants of 75 / 120 / 175 / 275 Sq. Yrds.
          </p>
          <p>
            It also has 42 Commercial units facing the highway to support daily &amp; other household needs of the
            residents.
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
    id: "location-map",
    label: "Location Map",
    content: (
      <>
        <h2 className="text-2xl font-bold text-gray-900">LOCATION MAP</h2>
        <div className="relative mt-4 h-[450px] w-full overflow-hidden rounded">
            <iframe
            src="https://www.google.com/maps?q=Motia%27z+Gill+Estate,+NH205,+Chandigarh+Road&z=15&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Motia'z Gill Estate Location"
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
          <div className="relative aspect-square w-full">
            <Image
              src="/motia-gill-estate/floreplan.png"
              alt="Motia'z Gill Estate Floor Plan & Site Plan"
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
  {
    id: "walk-through",
    label: "Walk Through",
    content: (
      <>
        <h2 className="text-2xl font-bold text-gray-900">WALKTHROUGH</h2>
        <p className="mt-4 text-gray-500">Walkthrough video coming soon.</p>
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
          <div className="relative aspect-[1024/481] w-full overflow-hidden rounded">
            <Image
              src="/motia-gill-estate/download.png"
              alt="Motia'z Gill Estate Brochure"
              fill
              sizes="(min-width: 1024px) 900px, 100vw"
              className="object-cover"
            />
          </div>
          <a
            href="/motia-gill-estate/gillestate-bruchure-1.pdf"
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
        image="/motia-gill-estate/bannergillestate-1.webp"
        title="Motiaz Gill Estate"
        subtitle="Gill Estate offers a truly royal experience with round the clock amenities and exemplary services"
      />
      <ProjectTabsLayout tabs={tabs} />
    </>
  );
}
