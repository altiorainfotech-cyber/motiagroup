import { Award, Building2, CalendarCheck, KeyRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "2005", label: "Year Established", icon: CalendarCheck },
  { value: "15", label: "Projects Completed", icon: Building2 },
  { value: "4500", label: "Homes/Offices Delivered", icon: KeyRound },
  { value: "15", label: "Awards Won", icon: Award },
];

export default function AboutSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
      <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden" aria-hidden="true">
        <Image
          src="/shap/model-building-with-wire-frame.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-scale-x-100 object-cover opacity-10"
        />
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="relative">
          <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-2xl border-2 border-[#377f45]/30 sm:block" />
          <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/home-page-hero-section/Royal-Business-Park.webp"
              alt="Motia'z Royal Business Park, a Motia Group development"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)] ring-1 ring-black/5 sm:left-8">
            <span className="text-3xl font-bold text-[#377f45]">20+</span>
            <span className="max-w-[110px] text-sm font-semibold leading-tight text-gray-900">Years of Real Estate Excellence</span>
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-[#377f45]">Who We Are</span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">About Us</h2>
          <div className="mt-6 space-y-5 text-gray-600">
            <p>
              Motia Group, is a reliable brand in residential real estate development, and many of the familiar real
              estate constructions in the region. Having spent years of experience in the commercial construction
              sector, we develop spaces that drive growth, creativity and value retention.
            </p>
            <p>
              We provide projects of quality, transparency and timely delivery in office towers, as well as IT office
              spaces in retail hubs, showrooms, and business centers. A combination of trust, teamwork and dedication
              towards customer satisfaction has earned us the reputation of being one of the best real estate
              companies in the area.
            </p>
            <p>
              It could be that you need to purchase <span className="font-semibold text-[#377f45]">Commercial Real Estate</span>,
              lease premium office space, or invest in inexpensive commercial real estate, Motia Group is the place to
              find the right solutions that will be done with integrity, innovation, and excellence at every stage.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5">
            {stats.map(({ value, label, icon: Icon }) => (
              <div
                key={label}
                className="rounded-xl bg-[#f4f8f5] p-4 ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg sm:p-5"
              >
                <Icon className="size-6 text-[#377f45]" />
                <div className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">{value}</div>
                <div className="text-xs font-medium text-gray-500 sm:text-sm">{label}</div>
              </div>
            ))}
          </div>

          <Link
            href="/founders"
            className="mt-10 inline-block rounded bg-[#377f45] px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#2c6636] active:scale-95"
          >
            Meet Our Founders
          </Link>
        </div>
      </div>
    </section>
  );
}
