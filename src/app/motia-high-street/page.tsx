import { Building2, Car, Grid3x3, Layers, Leaf, MapPin, Navigation, PartyPopper, Route, Sparkles, Store } from "lucide-react";
import Image from "next/image";
import AmenityGroups, { type AmenityGroup } from "@/components/AmenityGroups";
import DownloadCard from "@/components/DownloadCard";
import ProjectHero from "@/components/ProjectHero";
import ProjectTabsLayout, { type ProjectTab } from "@/components/ProjectTabsLayout";
import QuickFacts, { type QuickFact } from "@/components/QuickFacts";
import TabHeading from "@/components/TabHeading";

const quickFacts: QuickFact[] = [
  { icon: MapPin, label: "Location", value: "VIP Road, Zirakpur" },
  { icon: Store, label: "Type", value: "Commercial Space" },
  { icon: Layers, label: "Concept", value: "Upper & Lower Ground Shops" },
  { icon: PartyPopper, label: "Positioning", value: "Fun, Food & Fashion Hub" },
];

const amenityGroups: AmenityGroup[] = [
  {
    title: "Prime Location & Connectivity",
    icon: Navigation,
    items: [
      { icon: Navigation, text: "Ideally located in the heart of Zirakpur on the VIP Road which connects the two main national highways- NH-22 and NH-64" },
      { icon: Building2, text: "Surrounded by dense high rise residential towers like Pearl City Nirmal Chaaya, Silver City, etc." },
      { icon: Sparkles, text: "The overall location and added paved area provided a unique experience of commercial plaza rather than just a shopping complex." },
    ],
  },
  {
    title: "Design & Shopper Experience",
    icon: Store,
    items: [
      { icon: Car, text: "Huge parking space has been provided for a hassle free shopping experience. The whole parking area is paved with concrete pavers." },
      { icon: PartyPopper, text: "Huge area left in front of the complex can be a place for celebration handling open-air concerts, expositions, etc." },
      { icon: Leaf, text: "With no possible outdoor plaza or park nearby currently, the shopping complex comes up with landscaped area having fountains and plantation, enhancing the walkways and increased footfalls." },
      { icon: Route, text: "Wide Internal Corridors have been specially created to provide more circulation and clutter free spaces." },
      { icon: Layers, text: "The Upper and Lower grounds floor shop concept is introduced, giving more frontage and accessible shopping area for customers. The Lower Ground floor, unlike the rest of the places, has huge frontage and access." },
      { icon: Grid3x3, text: "Paved outer pathway along the shops have been specially added to provide circulation spaces without vehicular interference." },
    ],
  },
];

const tabs: ProjectTab[] = [
  {
    id: "overview",
    label: "Overview",
    content: (
      <>
        <TabHeading eyebrow="VIP Road . Zirakpur" title="Premium Commercial Space at Motia High Street" />
        <QuickFacts facts={quickFacts} />
        <div className="mt-8 space-y-4 text-gray-600">
          <p>
            High Street <span className="font-bold italic text-[#c2185b]">Commercial Space</span> by Motia Group: A
            Vibrant Hub on VIP Road, Zirakpur
          </p>
          <p>
            Nestled in the heart of the thriving residential zone on VIP Road, Zirakpur, the High Street Commercial
            Space by Motia Group stand out as the only major commercial destination in the area. Designed to be a
            one-stop spot for Fun, Food, and Fashion, this bustling hub has firmly established itself in the hearts
            of both customers and retailers.
          </p>
          <p>
            Backed by the trusted legacy of Motia Group, the development reflects a deep understanding of customer
            lifestyles. By blending affordable luxury with a strong &lsquo;customer-first&rsquo; approach, it has
            carved out a unique identity on the retail map. The space isn&rsquo;t just about shopping &mdash;
            it&rsquo;s about creating experiences.
          </p>
          <p>
            Thoughtfully designed with international architectural flair, the High Street Commercial Units exude
            elegance and sophistication. This meticulously planned commercial zone offers brands a premium platform
            to shine and gives visitors a seamless, enjoyable shopping journey.
          </p>
          <p>
            Whether you&rsquo;re looking to set up shop or spend a leisurely day out, the Motia Group&rsquo;s High
            Street Commercial Units deliver a complete and elevated experience &mdash; right in the heart of
            Zirakpur.
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
          description="A commercial plaza designed around location, access, and shopper experience."
        />
        <AmenityGroups groups={amenityGroups} />
      </>
    ),
  },
  {
    id: "floor-plan",
    label: "Floor-Plan",
    content: (
      <>
        <TabHeading eyebrow="Layouts" title="Floor Plan & Site Plan" />
        <div className="relative mt-6 aspect-[3/4] max-w-2xl overflow-hidden rounded-2xl bg-white p-4 shadow-lg ring-1 ring-black/5">
          <Image
            src="/high-street/floorplan.jpg"
            alt="Motia High Street Floor Plan & Site Plan"
            fill
            sizes="(min-width: 1024px) 700px, 100vw"
            className="object-contain"
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
          image="/high-street/download.png"
          title="Project Brochure"
          description="Get the full details on floor plans, amenities, and pricing in one PDF."
          href="/high-street/royalpaam.pdf"
          imageClassName="object-contain"
        />
      </>
    ),
  },
];

export default function Page() {
  return (
    <>
      <ProjectHero
        image="/high-street/banner.jpg"
        title="Motia High Street - Commercial Space"
        subtitle="The only commercial place, in and around the huge residential area on VIP Road, Zirakpur"
        zoomBg
      />
      <ProjectTabsLayout tabs={tabs} />
    </>
  );
}
