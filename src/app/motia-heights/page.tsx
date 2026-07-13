import {
  Bell,
  Building2,
  Car,
  ChefHat,
  Dumbbell,
  Hammer,
  Hospital,
  Landmark,
  Layers,
  Leaf,
  MapPin,
  Maximize2,
  ShieldCheck,
  TreePine,
  Waves,
  Wind,
} from "lucide-react";
import Image from "next/image";
import AmenityGroups, { type AmenityGroup } from "@/components/AmenityGroups";
import ProjectHero from "@/components/ProjectHero";
import ProjectTabsLayout, { type ProjectTab } from "@/components/ProjectTabsLayout";
import QuickFacts, { type QuickFact } from "@/components/QuickFacts";
import TabHeading from "@/components/TabHeading";

const quickFacts: QuickFact[] = [
  { icon: Layers, label: "Configuration", value: "3 BHK Apartments" },
  { icon: Maximize2, label: "Project Area", value: "14 Acres" },
  { icon: MapPin, label: "Location", value: "Krishna Enclave, Dhakoli" },
  { icon: Hospital, label: "Nearby", value: "Engg. College & Hospital, 500m" },
];

const amenityGroups: AmenityGroup[] = [
  {
    title: "Design & Structure",
    icon: Building2,
    items: [
      { icon: ShieldCheck, text: "Approved by Punjab Government" },
      { icon: ShieldCheck, text: "Earthquake resistant RCC framed structure" },
      { icon: Layers, text: "Optimum utilisation of available covered space" },
      { icon: Building2, text: "Modern elevators with gen-set back-up" },
    ],
  },
  {
    title: "Home Comforts",
    icon: ChefHat,
    items: [
      { icon: ChefHat, text: "Modular kitchen with electric chimney" },
      { icon: Hammer, text: "All necessary woodwork completed (ready to live)" },
      { icon: Wind, text: "Air-conditioned super luxury apartments" },
      { icon: Wind, text: "3 ACs bedroom flat" },
    ],
  },
  {
    title: "Safety & Utilities",
    icon: Bell,
    items: [
      { icon: ShieldCheck, text: "Walled complex to facilitate 24 hours security" },
      { icon: Bell, text: "Arrangement for 24 Hours Water Supply" },
    ],
  },
  {
    title: "Landscape & Recreation",
    icon: Leaf,
    items: [
      { icon: Leaf, text: "Beautifully landscaped exterior" },
      { icon: TreePine, text: "Appropriate landscaping" },
      { icon: Dumbbell, text: "Place for health club/community activities" },
      { icon: Waves, text: "Pool with outdoor sitting space" },
    ],
  },
  {
    title: "Location Advantage",
    icon: MapPin,
    items: [
      { icon: MapPin, text: "Strategic location with splendid surroundings" },
      { icon: Car, text: "Well-planned individual car parking" },
      { icon: Landmark, text: "Well-developed K Area (Military Establishment)" },
      { icon: Hospital, text: "Proposed Engg. College, Hospital within 500 meters" },
    ],
  },
];

const tabs: ProjectTab[] = [
  {
    id: "overview",
    label: "Overview",
    content: (
      <>
        <TabHeading eyebrow="Dhakoli . Zirakpur" title="Overview" />
        <QuickFacts facts={quickFacts} />
        <div className="mt-8 space-y-4 text-gray-600">
          <p>
            Every once in a while, a new inspired way of living comes along and sets expectation of a higher order.
            Motia Heights is the essence of these expectations. Located in Krishna Enclave, Dhakoli, Zirakpur, the
            Motia Heights goes far beyond just walls, floors and ceiling. It is the result of a design of the highest
            standards with thoughtful planning. The Motia Heights is composed of 3 BHK apartments spread over 14
            acres of prime land in Dhakoli. It is meticulously planned and thoughtfully designed with features that
            invite you to live a million moods of the perfect city life!
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
          description="Thoughtful design, security, and comfort built into every corner of Motia Heights."
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
            src="https://www.google.com/maps?q=K+Area+Road,+Dhakoli,+Zirakpur&z=15&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Motia Heights Location"
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
              src="/motia-heights/floor%20plan%20%26%20Site%20Plan.png"
              alt="Motia Heights Floor Plan & Site Plan"
              fill
              sizes="(min-width: 768px) 700px, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </>
    ),
  },
];

export default function Page() {
  return (
    <>
      <ProjectHero
        image="/motia-heights/hero%20banner.png"
        title="Motia Heights"
        subtitle="Surround yourself in comfort and enjoy lavish style whilst soaking up in the panoramic view"
        zoomBg
      />
      <ProjectTabsLayout tabs={tabs} />
    </>
  );
}
