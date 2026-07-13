import {
  Car,
  CloudRain,
  DoorOpen,
  Droplet,
  Home,
  MapPin,
  Navigation,
  PlayCircle,
  Plug,
  Route,
  Shield,
  ShieldCheck,
  Store,
} from "lucide-react";
import AmenityGroups, { type AmenityGroup } from "@/components/AmenityGroups";
import ComingSoon from "@/components/ComingSoon";
import DownloadCard from "@/components/DownloadCard";
import ImageCarousel from "@/components/ImageCarousel";
import PhotoCarousel from "@/components/PhotoCarousel";
import ProjectHero from "@/components/ProjectHero";
import ProjectTabsLayout, { type ProjectTab } from "@/components/ProjectTabsLayout";
import QuickFacts, { type QuickFact } from "@/components/QuickFacts";
import SpecCard from "@/components/SpecCard";
import TabHeading from "@/components/TabHeading";

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
  {
    src: "/motiahuys/3%20BHK%20DINING%20%26%20LIVING%20AREA.png",
    alt: "3 BHK Dining & Living Area",
    caption: "3 BHK DINING & LIVING AREA",
  },
  {
    src: "/motiahuys/2%20BHK%20DINING%20%26%20LIVING.png",
    alt: "2 BHK Dining & Living",
    caption: "2 BHK DINING & LIVING",
  },
];

const quickFacts: QuickFact[] = [
  { icon: Home, label: "Configuration", value: "2 & 3 BHK Independent Floors" },
  { icon: MapPin, label: "Location", value: "Peer Muchalla Road, Zirakpur" },
  { icon: Navigation, label: "Distance", value: "6 km from Bus Stand" },
  { icon: Store, label: "Nearby", value: "Shopping Mall" },
];

const amenityGroups: AmenityGroup[] = [
  {
    title: "Design & Structure",
    icon: ShieldCheck,
    items: [
      { icon: ShieldCheck, text: "Earthquake resistant RCC structure" },
      { icon: Plug, text: "Underground electric lines" },
      { icon: Route, text: "35' wide internal roads" },
    ],
  },
  {
    title: "Safety & Security",
    icon: Shield,
    items: [
      { icon: DoorOpen, text: "Boundary wall and gated community with one entry and exit gate" },
      { icon: Shield, text: "CCTV monitoring" },
    ],
  },
  {
    title: "Green & Utilities",
    icon: CloudRain,
    items: [
      { icon: CloudRain, text: "Rain water drainage" },
      { icon: Droplet, text: "Purified water supply" },
    ],
  },
  {
    title: "Lifestyle & Convenience",
    icon: Store,
    items: [
      { icon: Store, text: "Commercial arcade in the campus" },
      { icon: MapPin, text: "Most of the city conveniences at 5 minutes distance" },
      { icon: PlayCircle, text: "Park for children" },
      { icon: Car, text: "Stilt parking" },
      { icon: Car, text: "Visitor Parking" },
      { icon: Navigation, text: "Prime location connected to Himalayan Expressway" },
    ],
  },
];

const tabs: ProjectTab[] = [
  {
    id: "overview",
    label: "Overview",
    content: (
      <>
        <TabHeading eyebrow="Zirakpur . Flagship Project" title="Overview" />
        <QuickFacts facts={quickFacts} />
        <div className="mt-8 space-y-4 text-gray-600">
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
        <TabHeading
          eyebrow="Everyday Comforts"
          title="Amenities & Facilities"
          description="Independent floors designed around security, convenience, and everyday ease."
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
        <TabHeading eyebrow="Built To Last" title="Specification" />
        <SpecCard icon={specifications[0].icon} title={specifications[0].title} points={specifications[0].points} />
      </>
    ),
  },
  {
    id: "sample-flat-pictures",
    label: "Sample Flat Pictures",
    content: (
      <>
        <TabHeading eyebrow="Take A Look Inside" title="Sample Flat Pictures" />
        <div className="mt-6">
          <PhotoCarousel images={sampleFlatImages} />
        </div>
      </>
    ),
  },
  {
    id: "walk-through",
    label: "Walk Through",
    content: <ComingSoon eyebrow="See It In Motion" title="Walkthrough" />,
  },
  {
    id: "download",
    label: "Download",
    content: (
      <>
        <TabHeading eyebrow="Take It With You" title="Download" />
        <DownloadCard
          image="/motiahuys/download.webp"
          title="Project Brochure"
          description="Get the full details on floor plans, specifications, and amenities in one PDF."
          href="#"
        />
      </>
    ),
  },
];

export default function Page() {
  return (
    <>
      <ProjectHero image="/motiahuys/banner.png" title="Motia Huys" subtitle="Affordable independent housing" zoomBg />
      <ProjectTabsLayout tabs={tabs} />
    </>
  );
}
