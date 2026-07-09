import { CheckCircle, FileText } from "lucide-react";
import Image from "next/image";
import ImageCarousel from "@/components/ImageCarousel";
import ProjectHero from "@/components/ProjectHero";
import ProjectTabsLayout, { type ProjectTab } from "@/components/ProjectTabsLayout";
import SpecCarousel from "@/components/SpecCarousel";

// Specifications are reused from Harmony Greens as placeholders until
// Motia Huys-specific ones are provided.
const specifications = [
  {
    icon: "/fireplace.png",
    title: "Water Supply",
    points: ["Tubewell with hydro pneumatic system", "Adequate storage for rain water harvesting"],
  },
];

const floorPlanImages = [
  { src: "/motiahuys/floor%20plan%20%26%20Site%20Plan.png", alt: "2 BHK Typical Floor Plan - 21' x 46'-8\"" },
  { src: "/motiahuys/floor%20plan%20%26%20Site%20Plan2.png", alt: "3 BHK Typical Floor Plan - 24' x 52'-6\"" },
  { src: "/motiahuys/floor%20plan%20%26%20Site%20Plan3.png", alt: "3 BHK Typical Floor Plan - 21' x 46'-8\"" },
];

const sampleFlatImages = [
  { src: "/motiahuys/3%20BHK%20DINING%20%26%20LIVING%20AREA.png", caption: "3 BHK DINING & LIVING AREA" },
  { src: "/motiahuys/2%20BHK%20DINING%20%26%20LIVING.png", caption: "2 BHK DINING & LIVING" },
];

const amenities = [
  "Boundary wall and gated community with one entry and exit gate",
  "Commercial arcade in the campus",
  "Underground electric lines",
  "35' wide internal roads",
  "Most of the city conveniences at 5 minutes distance",
  "Stilt parking",
  "Earthquake resistant RCC structure",
  "Rain water drainage",
  "Park for children",
  "Visitor Parking",
  "Prime location connected to Himalayan Expressway",
  "CCTV monitoring",
  "Purified water supply",
];

const tabs: ProjectTab[] = [
  {
    id: "overview",
    label: "Overview",
    content: (
      <>
        <h2 className="text-2xl font-bold text-gray-900">OVERVIEW</h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Motia HUYS is the flagship project of the <span className="font-bold text-[#c2185b]">Motia Group</span>.
            This coveted residential property on Peer Muchalla Road is located just 6 km from the bus stand. The
            project has been designed around the concept of independent affordable floors. The exclusive design
            highlights the collaboration of premium quality and top-notch design to bring peace and harmony in the
            living environment. The independent 2 and 3 BHK floors are well-designed; providing both space and
            privacy. With a range of sophisticated amenities, it also provides facilities for every age group like a
            park for children, elder&rsquo;s area, green spaces with seating, etc., which makes it a perfect
            investment in the form of a home. It has good connectivity, located right next to the landmarks of
            Zirakpur, which makes it the abode of convenience. Also, for those looking for a source of shopping,
            there&rsquo;s a shopping mall too.
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
            src="https://www.google.com/maps?q=Motia+Huys,+Peer+Muchalla+Road,+Dhakoli,+Zirakpur&z=15&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Motia Huys Location"
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
        <div className="mt-6">
          <ImageCarousel images={floorPlanImages} />
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
    id: "sample-flat-pictures",
    label: "Sample Flat Pictures",
    content: (
      <>
        <h2 className="text-2xl font-bold text-gray-900">SAMPLE FLAT PICTURES</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {sampleFlatImages.map((img) => (
            <figure key={img.src}>
              <div className="relative aspect-[4/3] overflow-hidden rounded shadow">
                <Image src={img.src} alt={img.caption} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-2 text-center text-sm italic text-gray-600">{img.caption}</figcaption>
            </figure>
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
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded">
            <Image
              src="/motiahuys/download.webp"
              alt="Motia Huys Brochure"
              fill
              sizes="(min-width: 1024px) 900px, 100vw"
              className="object-cover"
            />
          </div>
          <a
            href="#"
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
      <ProjectHero image="/motiahuys/banner.png" title="Motia Huys" subtitle="Affordable independent housing" />
      <ProjectTabsLayout tabs={tabs} />
    </>
  );
}
