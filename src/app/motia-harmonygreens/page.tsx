import {
  ArrowLeftRight,
  Building2,
  Car,
  CloudRain,
  Dumbbell,
  Grid3x3,
  KeyRound,
  Layers,
  Leaf,
  Lightbulb,
  MapPin,
  Maximize2,
  Navigation,
  PartyPopper,
  Phone,
  PlayCircle,
  Route,
  Shield,
  ShieldCheck,
  Sparkles,
  Store,
  Tent,
  TreePine,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import AmenityGroups, { type AmenityGroup } from "@/components/AmenityGroups";
import DownloadCard from "@/components/DownloadCard";
import ImageCarousel from "@/components/ImageCarousel";
import PhotoCarousel from "@/components/PhotoCarousel";
import ProjectHero from "@/components/ProjectHero";
import ProjectTabsLayout, { type ProjectTab } from "@/components/ProjectTabsLayout";
import QuickFacts, { type QuickFact } from "@/components/QuickFacts";
import SpecCard from "@/components/SpecCard";
import TabHeading from "@/components/TabHeading";
import YouTubeThumbnail from "@/components/YouTubeThumbnail";

const quickFacts: QuickFact[] = [
  { icon: Layers, label: "Configuration", value: "3 / 3+1 / 5+1 BHK" },
  { icon: Maximize2, label: "Plot Size", value: "195 – 337 Sq. Yd." },
  { icon: MapPin, label: "Location", value: "Sanauli, Zirakpur" },
  { icon: Navigation, label: "Connectivity", value: "PR-7 Airport Road" },
];

const amenityGroups: AmenityGroup[] = [
  {
    title: "Design & Structure",
    icon: Building2,
    items: [
      { icon: Layers, text: "Low Rise - with S+4 concept" },
      { icon: Building2, text: "1 Lift for 8 Flats" },
      { icon: Car, text: "Well Covered Stilt Parking (Reserved Parking-1)" },
      { icon: Grid3x3, text: "Matt Finish Tiles in Parking" },
      { icon: ShieldCheck, text: "Earthquake Resistant RCC Frame Structure" },
      { icon: ArrowLeftRight, text: "12' To 24' Gap Between Blocks" },
    ],
  },
  {
    title: "Connectivity & Roads",
    icon: Route,
    items: [
      { icon: Navigation, text: "Proposed Connectivity To PR-7, Airport Road" },
      { icon: Route, text: "Upto 64' Wide Internal Roads" },
      { icon: Lightbulb, text: "Well Lit Internal Roads, with Pole Lights" },
    ],
  },
  {
    title: "Green & Sustainable Living",
    icon: Leaf,
    items: [
      { icon: TreePine, text: "Adjoining 300 Acres of Forest Land" },
      { icon: Leaf, text: "Lush Green Boundary" },
      { icon: Leaf, text: "Green Dividers on Internal Roads" },
      { icon: CloudRain, text: "Rain Water Harvesting" },
    ],
  },
  {
    title: "Lifestyle & Recreation",
    icon: PartyPopper,
    items: [
      { icon: Sparkles, text: "Lifetime Free Meditation (B.K Meditation Centre)" },
      { icon: Tent, text: "Sand Pit & Open Air Amphitheatre" },
      { icon: Users, text: "Free Club House" },
      { icon: Dumbbell, text: "Open Gymnasium & Gazebo" },
      { icon: PlayCircle, text: "Kids Play Area & Jogging Track" },
      { icon: Store, text: "Commercial Arcade within Premises" },
    ],
  },
  {
    title: "Safety & Convenience",
    icon: Shield,
    items: [
      { icon: Zap, text: "Power Backup (24x7)" },
      { icon: KeyRound, text: "Biometric Locks on Main Doors" },
      { icon: Phone, text: "E-Intercom (Application Based Security)" },
    ],
  },
];

const constructionUpdateImages = [
  "/construction%20updates/c1.webp",
  "/construction%20updates/c2.webp",
  "/construction%20updates/c3.webp",
  "/construction%20updates/c4.webp",
  "/construction%20updates/c5.webp",
  "/construction%20updates/c6.webp",
].map((src, i) => ({ src, alt: `Construction update ${i + 1}` }));

const sampleFlatImages = [
  "/Sample%20Flat%20Pictures/01.webp",
  "/Sample%20Flat%20Pictures/02.webp",
  "/Sample%20Flat%20Pictures/03.webp",
  "/Sample%20Flat%20Pictures/04.webp",
  "/Sample%20Flat%20Pictures/04-1.webp",
  "/Sample%20Flat%20Pictures/05.webp",
  "/Sample%20Flat%20Pictures/06.webp",
  "/Sample%20Flat%20Pictures/07.webp",
].map((src, i) => ({ src, alt: `Sample flat ${i + 1}` }));

const floorPlanImages = [
  { src: "/floreplan/Screenshot-2024-11-29-171727.jpg", alt: "Site Plan" },
  { src: "/floreplan/Screenshot-2024-11-29-172140.jpg", alt: "Lower Ground Floor Shops" },
  { src: "/floreplan/Screenshot-2024-11-29-172213.jpg", alt: "Upper Ground Floor Shops" },
  { src: "/floreplan/Screenshot-2024-11-29-171700.jpg", alt: "First Floor Shops" },
  { src: "/floreplan/Screenshot-2024-11-29-172102.jpg", alt: "2 BHK - 1747 Sq. Ft." },
  { src: "/floreplan/Screenshot-2024-11-29-171859.jpg", alt: "3 BHK - 1755 Sq. Ft." },
  { src: "/floreplan/Screenshot-2024-11-29-171935.jpg", alt: "5+1 BHK - 3034 Sq. Ft." },
];

const tabs: ProjectTab[] = [
  {
    id: "overview",
    label: "Overview",
    content: (
      <>
        <TabHeading eyebrow="Zirakpur . Premium Residences" title="Overview" />
        <QuickFacts facts={quickFacts} />
        <div className="mt-8 space-y-4 text-gray-600">
          <p>
            Driven with the purpose to build a legacy of innovation, trust, and exceptional customer experience,{" "}
            <span className="font-bold text-gray-900">Motia Group presents Harmony Greens</span> — a{" "}
            <span className="font-bold text-[#c2185b]">premium residence</span>
            <span className="font-bold text-gray-900"> project in Zirakpur</span>. A premium residential community
            bringing you an upgraded lifestyle in the lap of nature, away from the fast-paced tempo of city life,
            adjoining a forest cover of approx. 300 acres of land.
          </p>
          <p>
            Beautifully spaced &amp; efficient 3 / 3+1 / 5+1 BHK homes come with all modern &amp; world-class
            amenities, offering all major necessities in the vicinity along with high connectivity — double
            connectivity to the 200 ft. PR-7 Airport Road. Staying close to nature, observing the little significant
            elements, and appreciating them from the very core is both therapeutic and self-healing.
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
          description="Every corner of Harmony Greens is designed around comfort, safety, and green living."
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
        <TabHeading
          eyebrow="Find Us"
          title="Location Map"
          description="Motiaz Harmony Greens, Sanauli, Zirakpur, Punjab."
        />
        <div className="relative mt-6 h-[450px] w-full overflow-hidden rounded-2xl shadow-xl">
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
        <TabHeading
          eyebrow="Layouts"
          title="Floor Plan & Site Plan"
          description="Browse the site plan and unit layouts across configurations."
        />
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
        <TabHeading eyebrow="Built To Last" title="Specifications" />
        <SpecCard
          icon="/fireplace.png"
          title="Water Supply"
          points={["Tubewell with hydro pneumatic system", "Adequate storage for rain water harvesting"]}
        />
      </>
    ),
  },
  {
    id: "construction-updates",
    label: "Construction Updates",
    content: (
      <>
        <TabHeading eyebrow="Progress" title="Construction Updates" />
        <div className="mt-6">
          <PhotoCarousel images={constructionUpdateImages} />
        </div>
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
    content: (
      <>
        <TabHeading eyebrow="See It In Motion" title="Walkthrough" />
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
        <TabHeading eyebrow="Take It With You" title="Download" />
        <DownloadCard
          image="/brochure-cover.webp"
          title="Project Brochure"
          description="Get the full details on floor plans, specifications, and amenities in one PDF."
          href="/brochure-harmonygreens.pdf"
        />
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
        zoomBg
      />
      <ProjectTabsLayout tabs={tabs} />
    </>
  );
}
