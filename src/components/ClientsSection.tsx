import Image from "next/image";
import { clientLogos } from "@/data/clientLogos";

export default function ClientsSection() {
  const track = [...clientLogos, ...clientLogos];

  return (
    <section className="py-16 sm:py-20">
      <h2 className="text-center text-2xl uppercase tracking-wide text-[#377f45] sm:text-3xl">Our Clients</h2>

      <div className="mt-10 overflow-hidden bg-gray-50 py-12">
        <div className="animate-marquee flex w-max items-center gap-16 sm:gap-20">
          {track.map((logo, i) => (
            <div key={`${logo.src}-${i}`} className="relative h-20 w-[150px] shrink-0">
              <Image src={logo.src} alt={logo.alt} fill sizes="150px" className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
