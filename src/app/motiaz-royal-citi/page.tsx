import {
  AlertTriangle,
  Bell,
  BatteryCharging,
  Building2,
  Car,
  Droplet,
  Droplets,
  Dumbbell,
  Flame,
  Leaf,
  MapPin,
  Maximize2,
  Mountain,
  Phone,
  Route,
  Shield,
  Sofa,
  TreePine,
  Trophy,
  Waves,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import AmenityGroups, { type AmenityGroup } from "@/components/AmenityGroups";
import DownloadCard from "@/components/DownloadCard";
import ImageCarousel from "@/components/ImageCarousel";
import ProjectHero from "@/components/ProjectHero";
import ProjectTabsLayout, { type ProjectTab } from "@/components/ProjectTabsLayout";
import QuickFacts, { type QuickFact } from "@/components/QuickFacts";
import SpecCard from "@/components/SpecCard";
import TabHeading from "@/components/TabHeading";
import YouTubeThumbnail from "@/components/YouTubeThumbnail";

// Floor plan images are reused from Harmony Greens as
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

const quickFacts: QuickFact[] = [
  { icon: Building2, label: "Type", value: "Residential + Commercial" },
  { icon: Maximize2, label: "Project Area", value: "23 Acres" },
  { icon: MapPin, label: "Location", value: "Zirakpur" },
  { icon: Mountain, label: "Setting", value: "Shivalik Hills Foothills" },
];

const amenityGroups: AmenityGroup[] = [
  {
    title: "Safety & Security",
    icon: Shield,
    items: [
      { icon: Shield, text: "Three tier round the clock security" },
      { icon: AlertTriangle, text: "Fire alarm system" },
      { icon: Droplets, text: "Fire fighting equipment" },
      { icon: Bell, text: "Emergency alarm" },
      { icon: Phone, text: "Intercom facility" },
    ],
  },
  {
    title: "Utilities & Power",
    icon: Flame,
    items: [
      { icon: Droplet, text: "24 hour water supply" },
      { icon: Building2, text: "100% power backup for common facility" },
      { icon: BatteryCharging, text: "5KVA power backup for each flat (Optional in Phase-2)" },
      { icon: Flame, text: "LPG pipeline supply" },
    ],
  },
  {
    title: "Parking & Structure",
    icon: Car,
    items: [
      { icon: Building2, text: "2 lifts/elevators" },
      { icon: Car, text: "Basement/Stilt/Open parking" },
    ],
  },
  {
    title: "Recreation & Lifestyle",
    icon: Dumbbell,
    items: [
      { icon: Waves, text: "Swimming pool" },
      { icon: Dumbbell, text: "Health club/Gymnasium" },
      { icon: Sofa, text: "Open air lounge" },
      { icon: Route, text: "Jogging track" },
      { icon: Trophy, text: "Lawn tennis & Basket ball courts" },
      { icon: Leaf, text: "Landscaped garden" },
    ],
  },
  {
    title: "Community & Open Spaces",
    icon: TreePine,
    items: [
      { icon: TreePine, text: "More than 80% open area" },
      { icon: Wrench, text: "Maintainance management service" },
    ],
  },
];

const tabs: ProjectTab[] = [
  {
    id: "overview",
    label: "Overview",
    content: (
      <>
        <TabHeading eyebrow="Zirakpur . Luxury Living" title="Overview" />
        <QuickFacts facts={quickFacts} />
        <div className="mt-8 space-y-4 text-gray-600">
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
        <TabHeading
          eyebrow="Everyday Comforts"
          title="Amenities & Facilities"
          description="A well-rounded community built around security, comfort, and recreation."
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
        <TabHeading
          eyebrow="Layouts"
          title="Floor Plan & Site Plan"
          description="Browse the site plan and unit layouts across configurations."
        />
        <div className="mt-6">
          <ImageCarousel images={floorPlanImages} />
        </div>

        <div className="mt-16">
          <TabHeading eyebrow="Built To Last" title="Specification" />
          <SpecCard
            icon="/fireplace.png"
            title="Water Supply"
            points={["Tubewell with hydro pneumatic system", "Adequate storage for rain water harvesting"]}
          />
        </div>

        <div className="mt-16">
          <TabHeading eyebrow="Investment" title="Payment Plan" />
          <div className="mt-6 max-w-md overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
            <Image
              src="/motiaz-royal-citi/paymentroyalciti.png"
              alt="Motiaz Royal Citi Payment Plan"
              width={2281}
              height={3308}
              sizes="(min-width: 768px) 448px, 100vw"
              className="h-auto w-full"
            />
          </div>
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
        <div className="relative mx-auto mt-6 aspect-[3/2] max-w-3xl overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/motiaz-royal-citi/ro1.jpg"
            alt="Sample flat"
            fill
            sizes="(min-width: 768px) 720px, 100vw"
            className="object-cover"
          />
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
        <TabHeading eyebrow="Take It With You" title="Download" />
        <DownloadCard
          image="/motiaz-royal-citi/downloadRC-1024x473.png"
          title="Project Brochure"
          description="Get the full details on floor plans, specifications, and amenities in one PDF."
          href="/motiaz-royal-citi/RoyalCiti-Brochure.pdf"
        />
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
        zoomBg
      />
      <ProjectTabsLayout tabs={tabs} />
    </>
  );
}
