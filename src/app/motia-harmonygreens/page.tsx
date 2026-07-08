import { CheckCircle, FileText } from "lucide-react";
import Image from "next/image";
import ImageCarousel from "@/components/ImageCarousel";
import ProjectHero from "@/components/ProjectHero";
import ProjectTabsLayout, { type ProjectTab } from "@/components/ProjectTabsLayout";
import SpecCarousel from "@/components/SpecCarousel";
import YouTubeThumbnail from "@/components/YouTubeThumbnail";

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
  "/Sample%20Flat%20Pictures/04-1.webp",
  "/Sample%20Flat%20Pictures/05.webp",
  "/Sample%20Flat%20Pictures/06.webp",
  "/Sample%20Flat%20Pictures/07.webp",
];

const floorPlanImages = [
  { src: "/floreplan/Screenshot-2024-11-29-171727.jpg", alt: "Site Plan" },
  { src: "/floreplan/Screenshot-2024-11-29-172140.jpg", alt: "Lower Ground Floor Shops" },
  { src: "/floreplan/Screenshot-2024-11-29-172213.jpg", alt: "Upper Ground Floor Shops" },
  { src: "/floreplan/Screenshot-2024-11-29-171700.jpg", alt: "First Floor Shops" },
  { src: "/floreplan/Screenshot-2024-11-29-172102.jpg", alt: "2 BHK - 1747 Sq. Ft." },
  { src: "/floreplan/Screenshot-2024-11-29-171859.jpg", alt: "3 BHK - 1755 Sq. Ft." },
  { src: "/floreplan/Screenshot-2024-11-29-171935.jpg", alt: "5+1 BHK - 3034 Sq. Ft." },
];

const specifications = [
  {
    icon: "/fireplace.png",
    title: "Water Supply",
    points: ["Tubewell with hydro pneumatic system", "Adequate storage for rain water harvesting"],
  },
];

const amenities = [
  "Low Rise - with S+4 concept",
  "1 Lift for 8 Flats",
  "Proposed Connectivity To PR-7, Airport Road",
  "Adjoining 300 Acres of Forest Land",
  "Lifetime Free Meditation (B.K Meditation Centre)",
  "Upto 64' Wide Internal Roads",
  "Well Covered Stilt Parking (Reserved Parking-1)",
  "Sand Pit & Open Air Amphitheatre",
  "Matt Finish Tiles in Parking",
  "Power Backup (24x7)",
  "Biometric Locks on Main Doors",
  "Free Club House",
  "E-Intercom (Application Based Security)",
  "Open Gymnasium & Gazebo",
  "Kids Play Area & Jogging Track",
  "Lush Green Boundary",
  "Green Dividers on Internal Roads",
  "Well Lit Internal Roads, with Pole Lights",
  "Commercial Arcade within Premises",
  "Earthquake Resistant RCC Frame Structure",
  "Rain Water Harvesting",
  "12' To 24' Gap Between Blocks",
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
            Driven with the purpose to build a legacy of innovation, trust, and exceptional customer experience,{" "}
            <span className="font-bold text-gray-900">Motia Group presents Harmony Greens – a </span>
            <span className="font-bold text-[#c2185b]">Premium Residence</span>
            <span className="font-bold text-gray-900"> project in Zirakpur</span>. Harmony Greens, a premium
            residential community, brings you an upgraded lifestyle in the lap of nature, away from the fast-paced
            tempo of city life, adjoining a forest cover of approx. 300 acres of land. An enchanting new way of life
            awaits you amidst the lush greenery.
          </p>
          <p>
            Beautifully spaced &amp; efficient 3/3+1/5+1 BHK (195 Sq. Yd. – 337 Sq. Yd.) options come with all modern
            &amp; world-class amenities. These beautifully crafted homes, with lush green surroundings, offer all
            major necessities in the vicinity along with high connectivity (double connectivity to 200 ft. PR7
            Airport Road). Staying close to nature, observing the little significant elements, and appreciating them
            from the very core is both therapeutic and self-healing.
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
            src="https://www.google.com/maps?q=Motiaz+Harmony+Greens,+Sanauli,+Zirakpur,+Punjab&z=15&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Motiaz Harmony Greens Location"
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
        <div className="mt-6 max-w-3xl">
          <YouTubeThumbnail
            youtubeId="mwSG69EsSZc"
            title="Motiaz Harmony Greens - 3 BHK / 4 BHK / 5 BHK Independent Floors"
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
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded">
            <Image
              src="/brochure-cover.webp"
              alt="Motia'z Harmony Greens Brochure"
              fill
              sizes="(min-width: 1024px) 900px, 100vw"
              className="object-cover"
            />
          </div>
          <a
            href="/brochure-harmonygreens.pdf"
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
        image="/home-page-hero-section/harmonygreens-banner-01.webp"
        title="Motia'z Harmony Greens - Premium Residences"
        subtitle="We offers premium residences that blend modern design with natural beauty. With spacious layouts, lush landscapes, and world-class amenities, it's the perfect choice for families seeking luxury and tranquility in a vibrant community"
      />
      <ProjectTabsLayout tabs={tabs} />
    </>
  );
}
