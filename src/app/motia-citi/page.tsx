import { Home, MapPin, Maximize2, Route } from "lucide-react";
import Image from "next/image";
import ComingSoon from "@/components/ComingSoon";
import ProjectHero from "@/components/ProjectHero";
import ProjectTabsLayout, { type ProjectTab } from "@/components/ProjectTabsLayout";
import QuickFacts, { type QuickFact } from "@/components/QuickFacts";
import SpecCard from "@/components/SpecCard";
import TabHeading from "@/components/TabHeading";

// Specifications are reused from Harmony Greens as placeholders until
// Motia Citi-specific ones are provided. Facilities, Walk Through, and
// Download have no source content yet, so they're left as "coming soon".
const specifications = [
  {
    icon: "/fireplace.png",
    title: "Water Supply",
    points: ["Tubewell with hydro pneumatic system", "Adequate storage for rain water harvesting"],
  },
];

const quickFacts: QuickFact[] = [
  { icon: Home, label: "Plots", value: "215 Independent Plots" },
  { icon: Maximize2, label: "Project Area", value: "11 Acres" },
  { icon: MapPin, label: "Location", value: "Chandigarh-Ambala Highway" },
  { icon: Route, label: "Road Width", value: "35 Ft. Wide Internal Roads" },
];

const tabs: ProjectTab[] = [
  {
    id: "overview",
    label: "Overview",
    content: (
      <>
        <TabHeading eyebrow="Zirakpur . Delivered Project" title="Overview" />
        <QuickFacts facts={quickFacts} />
        <div className="mt-8 space-y-4 text-gray-600">
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
  { id: "facilities", label: "Facilities", content: <ComingSoon eyebrow="Everyday Comforts" title="Amenities & Facilities" /> },
  {
    id: "location-map",
    label: "Location Map",
    content: (
      <>
        <TabHeading eyebrow="Find Us" title="Location Map" />
        <div className="relative mt-6 h-[450px] w-full overflow-hidden rounded-2xl shadow-xl">
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
        <TabHeading eyebrow="Layouts" title="Floor Plan & Site Plan" />
        <div className="mt-6 max-w-2xl overflow-hidden rounded-2xl bg-white p-4 shadow-lg ring-1 ring-black/5">
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
        <TabHeading eyebrow="Built To Last" title="Specification" />
        <SpecCard icon={specifications[0].icon} title={specifications[0].title} points={specifications[0].points} />
      </>
    ),
  },
  { id: "walk-through", label: "Walk Through", content: <ComingSoon eyebrow="See It In Motion" title="Walkthrough" /> },
  { id: "download", label: "Download", content: <ComingSoon eyebrow="Take It With You" title="Download" /> },
];

export default function Page() {
  return (
    <>
      <ProjectHero
        image="/motia-citi/hero%20banner.png"
        title="Motia Citi"
        subtitle="Premium apartments and homes crafted with a sense to reconnect with nature."
        zoomBg
      />
      <ProjectTabsLayout tabs={tabs} />
    </>
  );
}
