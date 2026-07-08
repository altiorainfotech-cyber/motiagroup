import { CheckCircle, FileText } from "lucide-react";
import Image from "next/image";
import ImageCarousel from "@/components/ImageCarousel";
import ProjectHero from "@/components/ProjectHero";
import ProjectTabsLayout, { type ProjectTab } from "@/components/ProjectTabsLayout";
import SpecCarousel from "@/components/SpecCarousel";
import YouTubeThumbnail from "@/components/YouTubeThumbnail";

// Floor plan & specification images are reused from Harmony Greens as
// placeholders until Royal Citi-specific ones are provided.
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
  "24 hour water supply",
  "2 lifts/elevators",
  "Emergency alarm",
  "Intercom facility",
  "Three tier round the clock security",
  "Fire alarm system",
  "100% power backup for common facility",
  "Fire fighting equipment",
  "100% power backup for common facility",
  "Intercom facility",
  "Emergency alarm",
  "LPG pipeline supply",
  "5KVA power backup for each flat (Optional in Phase-2)",
  "Basement/Stilt/Open parking",
  "Swimming pool",
  "Health club/Gymnasium",
  "Open air lounge",
  "More than 80% open area",
  "Jogging track",
  "Landscaped garden",
  "Maintainance management service",
  "Lawn tennis & Basket ball courts",
];

const sampleFlatImages = ["/motiaz-royal-citi/ro1.jpg"];

const tabs: ProjectTab[] = [
  {
    id: "overview",
    label: "Overview",
    content: (
      <>
        <h2 className="text-2xl font-bold text-gray-900">OVERVIEW</h2>
        <div className="mt-4 space-y-4 text-gray-600">
          <p>
            Visualize a dream <span className="font-bold text-[#c2185b]">luxury house</span> to call your own, that
            too at an affordable price in Zirakpur, one of the fastest growing city in India. Spreading to an area of
            23 acres, Motia&rsquo;z Royal Citi with its admirable features truly offers residents a luxurious life
            close to nature. It has been planned around the natural topography on the foothills of the Shivalik
            hills, with the most sought after locations to dwell on. The well-planned amenities are strategically
            located and spread across the community to ensure that no matter where you buy your home, the distances
            are easily bridged. At the Royal Citi, we&rsquo;ve thought about everything, to keep your spirits
            soaring. With a perfect integration of residential complex and commercial complex, it&rsquo;s bound to
            indulge yourself in an ideal lifestyle. With the best of recreational amenities to make life here
            fulfilling and carefree! There&rsquo;s something for everyone here!
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
          {amenities.map((item, i) => (
            <li key={`${item}-${i}`} className="flex items-start gap-3 text-gray-600">
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
            src="https://www.google.com/maps?cid=14472286298464864037&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Motiaz Royal Citi Location"
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

        <h2 className="mt-16 text-2xl font-bold text-gray-900">SPECIFICATION</h2>
        <div className="mt-6">
          <SpecCarousel items={specifications} />
        </div>

        <h2 className="mt-16 text-2xl font-bold text-gray-900">PAYMENT PLAN</h2>
        <div className="mt-6 max-w-md overflow-hidden rounded border border-gray-200">
          <Image
            src="/motiaz-royal-citi/paymentroyalciti.png"
            alt="Motiaz Royal Citi Payment Plan"
            width={2281}
            height={3308}
            sizes="(min-width: 768px) 448px, 100vw"
            className="h-auto w-full"
          />
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
          <YouTubeThumbnail youtubeId="QM2M5bgbURs" title="Motiaz Royal Citi Walkthrough" />
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
          <div className="relative aspect-[1024/473] w-full overflow-hidden rounded">
            <Image
              src="/motiaz-royal-citi/downloadRC-1024x473.png"
              alt="Motiaz Royal Citi Brochure"
              fill
              sizes="(min-width: 1024px) 900px, 100vw"
              className="object-cover"
            />
          </div>
          <a
            href="/motiaz-royal-citi/RoyalCiti-Brochure.pdf"
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
        image="/motiaz-royal-citi/citi-banner-1.webp"
        title="Motia'z Royal Citi - Your Dream Luxury House"
        subtitle="We have the homes that you'll love to live in, with the luxury and comfort which makes life much easier"
      />
      <ProjectTabsLayout tabs={tabs} />
    </>
  );
}
