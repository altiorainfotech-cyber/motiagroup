import {
  Bell,
  Car,
  CloudRain,
  DoorOpen,
  Droplet,
  Droplets,
  Grid3x3,
  Layers,
  Leaf,
  Lightbulb,
  Lock,
  MapPin,
  Maximize2,
  Navigation,
  Route,
  School,
  Shield,
  Store,
  TreePine,
} from "lucide-react";
import Image from "next/image";
import AmenityGroups, { type AmenityGroup } from "@/components/AmenityGroups";
import DownloadCard from "@/components/DownloadCard";
import ProjectHero from "@/components/ProjectHero";
import ProjectTabsLayout, { type ProjectTab } from "@/components/ProjectTabsLayout";
import QuickFacts, { type QuickFact } from "@/components/QuickFacts";
import SpecCard from "@/components/SpecCard";
import TabHeading from "@/components/TabHeading";

const quickFacts: QuickFact[] = [
  { icon: Layers, label: "Plot Variants", value: "75 / 120 / 175 / 275 Sq. Yd." },
  { icon: Maximize2, label: "Project Area", value: "21 Acres" },
  { icon: MapPin, label: "Location", value: "Kurali, Mohali-Ropar Highway" },
  { icon: Store, label: "Commercial Units", value: "42 Units" },
];

const amenityGroups: AmenityGroup[] = [
  {
    title: "Roads & Connectivity",
    icon: Route,
    items: [
      { icon: Route, text: "On 200 Ft. wide Chandigarh - Kurali Highway" },
      { icon: Navigation, text: "40 Ft. wide Internal Roads" },
      { icon: Grid3x3, text: "Interlocking Tiles on internal Roads" },
      { icon: Route, text: "EWS wide internal Roads" },
      { icon: DoorOpen, text: "Main Entrance 60 feet wide" },
      { icon: DoorOpen, text: "Second Entry 30 feet wide" },
    ],
  },
  {
    title: "Green & Open Spaces",
    icon: Leaf,
    items: [
      { icon: TreePine, text: "Greens Parks" },
      { icon: Maximize2, text: "Large Frontage" },
      { icon: Leaf, text: "Multiple Green Parks" },
    ],
  },
  {
    title: "Safety & Utilities",
    icon: Shield,
    items: [
      { icon: Shield, text: "Gated CCTV Monitored Entry" },
      { icon: Lock, text: "24x7 Security" },
      { icon: Droplets, text: "Sewerage Treatment Plant" },
      { icon: Lightbulb, text: "Well Lit Streets" },
      { icon: Droplet, text: "Water Storage Tank" },
      { icon: Bell, text: "Door Bell" },
      { icon: CloudRain, text: "Rain / Fluid Water Drainage" },
    ],
  },
  {
    title: "Community & Parking",
    icon: Store,
    items: [
      { icon: School, text: "School Site" },
      { icon: Car, text: "Approx. 17 feet wide Parking in Front of Commercial Units" },
    ],
  },
];

const specifications = [
  {
    icon: "/fireplace.png",
    title: "Water Supply",
    points: ["Tubewell with hydro pneumatic system", "Adequate storage for rain water harvesting"],
  },
];

const tabs: ProjectTab[] = [
  {
    id: "overview",
    label: "Overview",
    content: (
      <>
        <TabHeading eyebrow="Kurali . State of Art Township" title="Motia'z Gill Estate" />
        <QuickFacts facts={quickFacts} />
        <div className="mt-8 space-y-4 text-gray-600">
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
        <TabHeading
          eyebrow="Everyday Comforts"
          title="Amenities & Facilities"
          description="Thoughtfully planned infrastructure, greenery, and security across the township."
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
        <TabHeading eyebrow="Layouts" title="Floor Plan & Site Plan" />
        <div className="mt-6 max-w-2xl overflow-hidden rounded-2xl bg-white p-4 shadow-lg ring-1 ring-black/5">
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
        <TabHeading eyebrow="Built To Last" title="Specification" />
        <SpecCard icon={specifications[0].icon} title={specifications[0].title} points={specifications[0].points} />
      </>
    ),
  },
  {
    id: "walk-through",
    label: "Walk Through",
    content: (
      <>
        <TabHeading eyebrow="See It In Motion" title="Walkthrough" />
        <p className="mt-6 text-gray-500">Walkthrough video coming soon.</p>
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
          image="/motia-gill-estate/download.png"
          title="Project Brochure"
          description="Get the full details on plot variants, amenities, and pricing in one PDF."
          href="/motia-gill-estate/gillestate-bruchure-1.pdf"
        />
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
        zoomBg
      />
      <ProjectTabsLayout tabs={tabs} />
    </>
  );
}
