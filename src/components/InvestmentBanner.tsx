import Image from "next/image";

export default function InvestmentBanner() {
  return (
    <section className="relative h-40 w-full overflow-hidden sm:h-52">
      <Image src="/footer.webp" alt="City skyline" fill sizes="100vw" className="object-cover" />
      <div className="relative flex h-full items-center justify-center px-6">
        <h2 className="text-center text-xl font-bold text-white sm:text-2xl lg:text-3xl">
          Today&rsquo;s Investment, Tomorrow&rsquo;s Pride
        </h2>
      </div>
    </section>
  );
}
