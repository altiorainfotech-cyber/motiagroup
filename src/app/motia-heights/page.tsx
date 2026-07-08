import { CheckCircle } from "lucide-react";
import Image from "next/image";
import ProjectHero from "@/components/ProjectHero";
import ProjectTabsLayout, { type ProjectTab } from "@/components/ProjectTabsLayout";

const amenities = [
  "Approved by Punjab Government",
  "Earthquake resistant RCC framed structure",
  "Optimum utilisation of available covered space",
  "Strategic location with splendid surroundings",
  "Beautifully landscaped exterior",
  "Walled complex to facilitate 24 hours security",
  "Modern elevators with gen-set back-up",
  "Arrangement for 24 Hours Water Supply",
  "Well-planned individual car parking",
  "Modular kitchen with electric chimney",
  "All necessary woodwork completed (ready to live)",
  "Air-conditioned super luxury apartments",
  "Appropriate landscaping",
  "3 ACs bedroom flat",
  "Well-developed K Area (Military Establishment)",
  "Proposed Engg. College, Hospital within 500 meters",
  "Place for health club/community activities",
  "Pool with outdoor sitting space",
];

const tabs: ProjectTab[] = [
  {
    id: "overview",
    label: "Overview",
    content: (
      <>
        <h2 className="text-2xl font-bold text-gray-900">OVERVIEW - MOTIA HEIGHTS ZIRAKPUR</h2>
        <div className="mt-4 space-y-4 text-gray-600">
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
        <h2 className="text-2xl font-bold text-gray-900">FLOOR PLAN &amp; SITE PLAN</h2>
        <div className="mt-6 max-w-2xl overflow-hidden rounded border-2 border-[#377f45]/40 bg-white p-2">
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
      />
      <ProjectTabsLayout tabs={tabs} />
    </>
  );
}
