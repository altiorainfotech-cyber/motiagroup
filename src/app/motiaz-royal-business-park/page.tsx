import { CheckCircle, FileText } from "lucide-react";
import Image from "next/image";
import ImageCarousel from "@/components/ImageCarousel";
import ProjectHero from "@/components/ProjectHero";
import ProjectTabsLayout, { type ProjectTab } from "@/components/ProjectTabsLayout";
import YouTubeThumbnail from "@/components/YouTubeThumbnail";

const amenities = [
  "Landscaped green areas and internal pathways",
  "Options available (for fully furnished SOHO & service apartments)",
  "Separate meeting & conference room",
  "Wide corridors and a huge waiting area",
  "Exquisite terrace",
  "Swimming pool, gymnasium",
  "Complete Wi-Fi enabled zone",
  "High speed lifts in all blocks",
  "Concierge services",
  "Top facility management",
];

const floorPlanImages = [
  { src: "/motiaz-royal-business-park/floor%20plan%20%26%20Site%20Plan1.jpg", alt: "Floor Plan & Site Plan" },
  { src: "/motiaz-royal-business-park/floor%20plan%20%26%20Site%20Plan2.png", alt: "Floor Plan & Site Plan" },
  { src: "/motiaz-royal-business-park/floor%20plan%20%26%20Site%20Plan3.jpg", alt: "Floor Plan & Site Plan" },
];

const paymentPlanImages = [
  "/motiaz-royal-business-park/payment-rbp-1.jpeg",
  "/motiaz-royal-business-park/payment-rbp-2.jpeg",
];

const tabs: ProjectTab[] = [
  {
    id: "overview",
    label: "Overview",
    content: (
      <>
        <h2 className="text-2xl font-bold text-gray-900">OVERVIEW</h2>
        <p className="mt-4 text-gray-600">
          <span className="font-bold text-[#c2185b]">Motiaz Royal Business</span> Park is an ongoing project, a
          business hub with an integrated township located at Delhi-Chandigarh National Highway 22&mdash;one of
          Punjab&rsquo;s largest business parks. Spread over 3 acres of land, the business park is replete with
          facilities like hotels, restaurants, banquets and the necessary infrastructure to support growing
          businesses. It also has an in-house parking facility, 24&times;7 security and power back up. It is easily
          accessible by road and offers well-designed office spaces with a huge super built-up area. It offers
          affordable working space, thereby, meeting the demand for affordable Grade &lsquo;A&rsquo; co-working
          spaces in and around tricity area. With Co-Working creating a structural change in commercial office
          markets with a growing need for the supply side to provide flexibility, services, turn-key solutions,
          scalability &amp; optimum design, Motia Group has made this futuristic business centre, thus catering to
          the commercial needs of the corporate world.
        </p>
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
            src="https://www.google.com/maps?q=Motiaz+Royal+Business+Park,+Chandigarh-Ambala+Highway,+Zirakpur&z=15&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Motiaz Royal Business Park Location"
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
        <h2 className="text-2xl font-bold text-gray-900">PAYMENT PLANS</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {paymentPlanImages.map((src) => (
            <div key={src} className="relative aspect-[3/4] overflow-hidden rounded border border-gray-200 shadow">
              <Image src={src} alt="Payment plan" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-contain" />
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
            youtubeId="RhOHRRGvn5M"
            title="Royal Business Park Zirakpur | Fully Furnished, Semi-Furnished Office"
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
              src="/motiaz-royal-business-park/download-rbp.jpg"
              alt="Motiaz Royal Business Park Brochure"
              fill
              sizes="(min-width: 1024px) 900px, 100vw"
              className="object-cover"
            />
          </div>
          <a
            href="/motiaz-royal-business-park/RBP-Brochure-1.pdf"
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
        image="/motiaz-royal-business-park/banner.jpeg"
        title="Motiaz Royal Business Park"
        subtitle="A business landmark that your clients can find easily"
      />
      <ProjectTabsLayout tabs={tabs} />
    </>
  );
}
