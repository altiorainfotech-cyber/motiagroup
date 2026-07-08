const cards = [
  {
    title: "Vision Statement",
    text: "To be the builder of choice for the value minded clients and high performing employees.",
  },
  {
    title: "Mission Statement",
    text: "Strive towards continuous improvement through participation of all stake holders.",
  },
  {
    title: "Purpose Statement",
    text: "To build a legacy of innovation, trust and exceptional customer experience.",
  },
];

export default function VisionMissionSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 sm:pb-20 lg:px-8">
      <div className="grid gap-8 sm:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-lg border border-[#377f45]/20 bg-white p-8 text-center shadow-[0_0_20px_-2px_rgba(55,127,69,0.35)]"
          >
            <h3 className="text-xl font-bold text-[#377f45]">{card.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
