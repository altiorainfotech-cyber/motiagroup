import {
  Building2,
  ConciergeBell,
  Dumbbell,
  Leaf,
  MapPin,
  Maximize2,
  Route,
  Shield,
  Sofa,
  Users,
  Waves,
  Wifi,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import AmenityGroups, { type AmenityGroup } from "@/components/AmenityGroups";
import DownloadCard from "@/components/DownloadCard";
import ImageCarousel from "@/components/ImageCarousel";
import ProjectHero from "@/components/ProjectHero";
import ProjectTabsLayout, { type ProjectTab } from "@/components/ProjectTabsLayout";
import QuickFacts, { type QuickFact } from "@/components/QuickFacts";
import TabHeading from "@/components/TabHeading";
import YouTubeThumbnail from "@/components/YouTubeThumbnail";

const floorPlanImages = [
  { src: "/motiaz-royal-business-park/floor%20plan%20%26%20Site%20Plan1.jpg", alt: "Floor Plan & Site Plan" },
  { src: "/motiaz-royal-business-park/floor%20plan%20%26%20Site%20Plan2.png", alt: "Floor Plan & Site Plan" },
  { src: "/motiaz-royal-business-park/floor%20plan%20%26%20Site%20Plan3.jpg", alt: "Floor Plan & Site Plan" },
];

const paymentPlanImages = [
  "/motiaz-royal-business-park/payment-rbp-1.jpeg",
  "/motiaz-royal-business-park/payment-rbp-2.jpeg",
];

const quickFacts: QuickFact[] = [
  { icon: MapPin, label: "Location", value: "Delhi-Chandigarh NH-22" },
  { icon: Maximize2, label: "Project Area", value: "3 Acres" },
  { icon: Building2, label: "Type", value: "Business Park / Co-working" },
  { icon: Shield, label: "Security", value: "24×7 Security & Power Backup" },
];

const amenityGroups: AmenityGroup[] = [
  {
    title: "Business Facilities",
    icon: Users,
    items: [
      { icon: Users, text: "Separate meeting & conference room" },
      { icon: Route, text: "Wide corridors and a huge waiting area" },
      { icon: Wifi, text: "Complete Wi-Fi enabled zone" },
      { icon: Wrench, text: "Top facility management" },
      { icon: ConciergeBell, text: "Concierge services" },
    ],
  },
  {
    title: "Building & Access",
    icon: Building2,
    items: [
      { icon: Building2, text: "High speed lifts in all blocks" },
      { icon: Sofa, text: "Options available (for fully furnished SOHO & service apartments)" },
      { icon: Sofa, text: "Exquisite terrace" },
    ],
  },
  {
    title: "Lifestyle & Wellness",
    icon: Waves,
    items: [
      { icon: Waves, text: "Swimming pool" },
      { icon: Dumbbell, text: "Gymnasium" },
      { icon: Leaf, text: "Landscaped green areas and internal pathways" },
    ],
  },
];

const tabs: ProjectTab[] = [
  {
    id: "overview",
    label: "Overview",
    content: (
      <>
        <TabHeading eyebrow="Zirakpur . NH-22" title="Overview" />
        <QuickFacts facts={quickFacts} />
        <p className="mt-8 text-gray-600">
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
        <TabHeading
          eyebrow="Everyday Comforts"
          title="Amenities & Facilities"
          description="Grade 'A' co-working infrastructure built for growing businesses."
        />
        <AmenityGroups groups={amenityGroups} />
      </>
    ),
  },
  {
    id: "location-map",
    label: "Location Map",
    content: (
      <>
        <TabHeading eyebrow="Find Us" title="Location Map" />
        <div className="relative mt-6 h-[450px] w-full overflow-hidden rounded-2xl shadow-xl">
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
        <TabHeading eyebrow="Layouts" title="Floor Plan & Site Plan" />
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
        <TabHeading eyebrow="Investment" title="Payment Plans" />
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {paymentPlanImages.map((src) => (
            <div key={src} className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5">
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
        <TabHeading eyebrow="See It In Motion" title="Walkthrough" />
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
        <TabHeading eyebrow="Take It With You" title="Download" />
        <DownloadCard
          image="/motiaz-royal-business-park/download-rbp.jpg"
          title="Project Brochure"
          description="Get the full details on office spaces, amenities, and pricing in one PDF."
          href="/motiaz-royal-business-park/RBP-Brochure-1.pdf"
        />
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
        zoomBg
      />
      <ProjectTabsLayout tabs={tabs} />
    </>
  );
}
