import { Compass, Eye, Target } from "lucide-react";

const cards = [
  {
    icon: Eye,
    title: "Vision Statement",
    text: "To be the builder of choice for the value minded clients and high performing employees.",
  },
  {
    icon: Target,
    title: "Mission Statement",
    text: "Strive towards continuous improvement through participation of all stake holders.",
  },
  {
    icon: Compass,
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
            className="corner-shoot-card rounded-lg border border-[#377f45]/20 bg-white p-8 text-center shadow-[0_0_20px_-2px_rgba(55,127,69,0.35)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-5px_rgba(55,127,69,0.5)]"
          >
            <div className="corner-shoot-content">
              <span className="card-icon mx-auto flex size-14 items-center justify-center rounded-full bg-[#377f45]/10 text-[#377f45] transition-colors duration-300">
                <card.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-[#377f45] transition-colors duration-300">{card.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-500 transition-colors duration-300">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
