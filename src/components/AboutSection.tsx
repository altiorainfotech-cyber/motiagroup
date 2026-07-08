const stats = [
  { value: "2005", label: "Year Established" },
  { value: "15", label: "Projects Completed" },
  { value: "4500", label: "Homes/offices Delivered" },
  { value: "15", label: "Awards won" },
];

export default function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <h2 className="text-3xl font-medium uppercase tracking-wide text-[#377f45] sm:text-4xl">About Us</h2>
          <div className="mt-6 space-y-5 text-justify text-gray-700">
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
              It could be that you need to purchase <span className="text-[#377f45]">Commercial Real Estate</span>,
              lease premium office space, or invest in inexpensive commercial real estate, Motia Group is the place to
              find the right solutions that will be done with integrity, innovation, and excellence at every stage.
            </p>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="grid grid-cols-[auto_auto] items-center gap-x-6 gap-y-5 sm:gap-x-8 sm:gap-y-6">
            <div className="col-start-2">
              <StatPill {...stats[0]} />
            </div>
            <div className="col-start-1 row-start-2">
              <StatPill {...stats[1]} />
            </div>
            <div className="col-start-2 row-start-2">
              <StatPill {...stats[2]} />
            </div>
            <div className="col-start-2 row-start-3">
              <StatPill {...stats[3]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-white px-5 py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.2)] ring-1 ring-black/5">
      <span className="text-xl font-bold text-[#377f45] sm:text-2xl">{value}</span>
      <span className="max-w-[80px] text-xs font-bold leading-tight text-gray-900 sm:text-sm">{label}</span>
    </div>
  );
}
