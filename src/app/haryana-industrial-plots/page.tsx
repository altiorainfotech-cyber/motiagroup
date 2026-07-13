import { Car, FileText, MapPin, Route, Shield, Store, Train, TreePine, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AmenityGroups, { type AmenityGroup } from "@/components/AmenityGroups";
import ProjectHero from "@/components/ProjectHero";
import ProjectTabsLayout, { type ProjectTab } from "@/components/ProjectTabsLayout";
import QuickFacts, { type QuickFact } from "@/components/QuickFacts";
import TabHeading from "@/components/TabHeading";

const quickFacts: QuickFact[] = [
  { icon: MapPin, label: "Location", value: "NH-344, Saha" },
  { icon: Store, label: "Type", value: "Industrial Plots" },
  { icon: Truck, label: "Access", value: "Highway, Rail & Airport" },
  { icon: Train, label: "Corridor", value: "Eastern Freight Railway" },
];

const projectDetailGroups: AmenityGroup[] = [
  {
    title: "Project Infrastructure",
    icon: Shield,
    items: [
      {
        icon: Shield,
        text: "Secure and controlled environment with 24/7 manned security, CCTV coverage, intercom system, gated access, and compound wall with fencing",
      },
      {
        icon: Route,
        text: "Infrastructure supported by 60-ft interior roads, street lighting, interior electrical wiring, and a sewage treatment plant",
      },
      { icon: TreePine, text: "Green parks constructed within the campus for a balanced environment" },
      { icon: Car, text: "Dedicated small parking lots designed for specific vehicle types" },
      {
        icon: Store,
        text: "A high street inside the campus with shops, showrooms, and booths to serve workforce needs and day-to-day operations",
      },
    ],
  },
];

const locationText =
  "The location lies on NH-344, and adjacent to Ambala, takes advantage of the connectivity of Eastern freight railway corridor to Kolkata to move the cargo, is near Ambala local airport, and a short trip to Himachal Pradesh through Kala Amb and Nahan in District Sirmaur. Uttarakhand and Uttar Pradesh are about 70 km apart, and the Punjab, Himachal Pradesh, Uttarakhand, Uttar Pradesh, Delhi, and Haryana overlap well out of this hub. The further shortening of lead times and logistics costs is an HSIIDC plan of an estimated 1,200-acre industrial area in the area and around the cargo facilities.";

const tabs: ProjectTab[] = [
  {
    id: "introduction",
    label: "Introduction",
    content: (
      <>
        <TabHeading eyebrow="Saha . Panchkula-Yamunanagar Highway" title="Introduction" />
        <QuickFacts facts={quickFacts} />
        <p className="mt-8 text-gray-600">
          <span className="font-bold text-[#c2185b]">Motia Group</span> offers fully developed industrial plots
          (NH-344) (Panchkula-Yamunanagar highway) at Saha, which is designed and intended to be used as a
          manufacturing, warehousing and logistic location. The address offers real multimodal access, with highway
          face and freight rail access, and airport access and as such you can establish faster and scale with ease.
        </p>
      </>
    ),
  },
  {
    id: "project-details",
    label: "Project Details",
    content: (
      <>
        <TabHeading eyebrow="Infrastructure" title="Project Details" />
        <AmenityGroups groups={projectDetailGroups} />
      </>
    ),
  },
  {
    id: "location-connectivity",
    label: "Location & Connectivity",
    content: (
      <>
        <TabHeading eyebrow="Find Us" title="Location & Connectivity" description={locationText} />
        <div className="relative mt-6 h-[450px] w-full overflow-hidden rounded-2xl shadow-xl">
          <iframe
            src="https://www.google.com/maps?q=30.300750,77.000139&z=15&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Haryana Industrial Plots Location"
            className="absolute inset-0 size-full border-0"
          />
        </div>
      </>
    ),
  },
  {
    id: "why-motia-group",
    label: "Why Motia Group",
    content: (
      <>
        <TabHeading eyebrow="Our Track Record" title="Why Motia Group" />
        <div className="mt-8 space-y-4 text-gray-600">
          <p>
            At <span className="font-bold text-gray-900">Motia Group</span>, we believe in building more than just
            spaces &mdash; we build <span className="font-bold text-gray-900">trust, comfort, and lasting relationships</span>.
            With decades of excellence in real estate development, our name stands for{" "}
            <span className="font-bold text-gray-900">quality construction, modern design, and a customer-first approach</span>.
          </p>
          <p>
            Renowned for our <span className="font-bold text-[#c2185b]">Industrial Plots</span> and landmark
            residential and commercial developments, <span className="font-bold text-gray-900">Motia Group</span> has
            been shaping skylines with superior craftsmanship, timely delivery, and lasting value. Our consistent
            commitment to <span className="font-bold text-gray-900">innovation, sustainability, and reliability</span>{" "}
            has earned the trust of{" "}
            <span className="font-bold text-gray-900">thousands of satisfied families, entrepreneurs, and investors</span>,
            making us one of the most respected names in the{" "}
            <span className="font-bold text-gray-900">real estate and industrial development</span> sectors.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "discover-the-space",
    label: "Discover the Space",
    content: (
      <>
        <TabHeading eyebrow="Take A Look Inside" title="Discover the Space" />
        <div className="mt-6 h-[450px] w-full overflow-hidden rounded-2xl shadow-lg">
          <video controls className="h-full w-full object-cover" src="/haryana-industral-plots/Video.mp4" />
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
        <div className="mt-6 flex max-w-xl items-center gap-4 rounded-2xl bg-[#f4f8f5] p-6 ring-1 ring-black/5 sm:p-8">
          <FileText className="size-10 shrink-0 text-[#377f45]" />
          <div>
            <h3 className="text-lg font-bold text-gray-900">Layout Plan</h3>
            <a
              href="/haryana-industral-plots/Haryana-Industrial-Township-LAYOUT-11-06-2025-1.pdf"
              download
              className="mt-3 inline-flex items-center gap-2 rounded bg-[#377f45] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#2c6636]"
            >
              <FileText className="size-5" />
              Download PDF
            </a>
          </div>
        </div>
      </>
    ),
  },
];

export default function Page() {
  return (
    <>
      <ProjectHero image="/haryana-industral-plots/banner.jpg" title="Haryana Industrial Plots – Motia Group" zoomBg />

      <ProjectTabsLayout tabs={tabs} />

      <section className="relative overflow-hidden py-24 sm:py-32">
        <Image
          src="/haryana-industral-plots/last%20ebquri%20now%20section.jpg"
          alt="Haryana Industrial Plots site plan"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-white/90 sm:text-lg">{locationText}</p>
          <Link
            href="/contact-us"
            className="mt-8 inline-block rounded bg-[#377f45] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2c6636]"
          >
            Enquire Now
          </Link>
        </div>
      </section>
    </>
  );
}
