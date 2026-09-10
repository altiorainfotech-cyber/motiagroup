import type { Metadata } from "next";
import { Building2, FileCheck, Globe2, Home as HomeIcon, Landmark, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ClientsSection from "@/components/ClientsSection";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import ProjectHero from "@/components/ProjectHero";
import Reveal from "@/components/Reveal";
import { faqPageJsonLd } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "NRI Property in Punjab | Buy Property in Punjab from Abroad",
  description:
    "Explore property investment opportunities in Punjab for NRIs, including residential and commercial properties, documentation, financing and purchase guidance.",
};

const reasons = [
  {
    icon: ShieldCheck,
    title: "20+ Years of Trust",
    text: "Established in 2005, Motia Group has delivered 15 projects and 4,500+ homes and offices across Punjab.",
  },
  {
    icon: Globe2,
    title: "Remote-Friendly Process",
    text: "Power of attorney, digital documentation and virtual site walkthroughs let you invest from wherever you live.",
  },
  {
    icon: FileCheck,
    title: "Transparent Paperwork",
    text: "Clear titles, RERA-registered developments and a dedicated team that guides you through every document.",
  },
];

const portfolio = [
  {
    icon: Building2,
    image: "/motiaz-royal-citi/citi-banner-1.webp",
    title: "Motia'z Royal Citi",
    text: "A 23-acre luxury homes and flats development in Zirakpur, Punjab.",
    href: "/motiaz-royal-citi",
  },
  {
    icon: HomeIcon,
    image: "/home-page-hero-section/harmonygreens-banner-01.webp",
    title: "Motia'z Harmony Greens",
    text: "Premium homes currently under development in Sanauli, Zirakpur, Punjab.",
    href: "/motia-harmonygreens",
  },
  {
    icon: MapPin,
    image: "/motia-gill-estate/bannergillestate-1.webp",
    title: "Motia'z Gill Estate",
    text: "Residential plots and commercial units in Kurali, Punjab, near Mohali.",
    href: "/motia-gill-estate",
  },
  {
    icon: Building2,
    image: "/motiahuys/banner.png",
    title: "Motia HUYS",
    text: "2 & 3 BHK independent floors on Peer Muchalla Road, Zirakpur, Punjab.",
    href: "/motia-huys",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Can I buy a home in Punjab entirely from abroad, without visiting India?",
    answer: (
      <p>
        Yes. Most of the process, from shortlisting a unit to signing documents, can be handled remotely through
        digital copies, video-call site walkthroughs and a Power of Attorney. Our team keeps you updated at every
        step so a trip to India is not required until you choose to visit in person.
      </p>
    ),
  },
  {
    question: "How do I set up a Power of Attorney (POA) to buy Punjab property from overseas?",
    answer: (
      <p>
        A POA is typically drafted, signed before the Indian Embassy or Consulate in your country of residence (or a
        notary, depending on local rules), and then sent to India for stamping and registration. Once registered,
        your POA holder can sign purchase and registration documents on your behalf.
      </p>
    ),
  },
  {
    question: "Will Motia Group help manage or rent out my property in Punjab while I live abroad?",
    answer: (
      <p>
        Our team can connect NRI owners with local property management and rental support so your home or
        commercial unit is looked after even when you are not in the country.
      </p>
    ),
  },
  {
    question: "What should I keep in mind about repatriating funds from a Punjab property in the future?",
    answer: (
      <p>
        Sale proceeds are generally routed back through an authorised dealer bank in India, subject to RBI/FEMA
        guidelines and applicable tax clearances. It is advisable to keep your NRE/NRO account details and purchase
        records in order from day one to keep this process smooth.
      </p>
    ),
  },
];

const contactInfo: { icon: typeof Phone; label: string; value: string; href?: string }[] = [
  { icon: Phone, label: "Phone", value: "+91 8860095959", href: "tel:+918860095959" },
  { icon: Mail, label: "Email", value: "info@motiagroup.com", href: "mailto:info@motiagroup.com" },
  {
    icon: Landmark,
    label: "Corporate Office",
    value: "Motia'z Royal Business Park, Chandigarh-Ambala Highway, Zirakpur",
  },
];

const faqSchema = faqPageJsonLd([
  {
    question: "Can I buy a home in Punjab entirely from abroad, without visiting India?",
    answer:
      "Yes. Most of the process, from shortlisting a unit to signing documents, can be handled remotely through digital copies, video-call site walkthroughs and a Power of Attorney. Our team keeps you updated at every step so a trip to India is not required until you choose to visit in person.",
  },
  {
    question: "How do I set up a Power of Attorney (POA) to buy Punjab property from overseas?",
    answer:
      "A POA is typically drafted, signed before the Indian Embassy or Consulate in your country of residence (or a notary, depending on local rules), and then sent to India for stamping and registration. Once registered, your POA holder can sign purchase and registration documents on your behalf.",
  },
  {
    question: "Will Motia Group help manage or rent out my property in Punjab while I live abroad?",
    answer:
      "Our team can connect NRI owners with local property management and rental support so your home or commercial unit is looked after even when you are not in the country.",
  },
  {
    question: "What should I keep in mind about repatriating funds from a Punjab property in the future?",
    answer:
      "Sale proceeds are generally routed back through an authorised dealer bank in India, subject to RBI/FEMA guidelines and applicable tax clearances. It is advisable to keep your NRE/NRO account details and purchase records in order from day one to keep this process smooth.",
  },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ProjectHero
        image="/motiaz-royal-citi/citi-banner-1.webp"
        title="NRI Property in Punjab: Invest in Your Roots from Anywhere"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "NRI Property in Punjab" }]}
        ctaLabel="Enquire Now"
        ctaHref="/contact-us"
        zoomBg
      />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal variant="left">
            <div className="relative">
              <div className="absolute -right-4 -top-4 hidden h-full w-full rounded-2xl border-2 border-[#377f45]/30 sm:block" />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/home-page-hero-section/harmonygreens-banner-02.webp"
                  alt="A Motia Group residential development in Punjab"
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#377f45]">
              NRI Property in Punjab
            </span>
            <div className="mt-4 space-y-4 text-gray-600">
              <p>
                For Non-Resident Indians, owning a home or commercial unit back in Punjab is often more than an
                investment, it is a way of staying rooted to family and community while building long-term value in
                one of North India&rsquo;s fastest-growing states. Zirakpur and its surrounding belt, part of the
                Chandigarh Tricity region, has emerged as a preferred choice for NRIs looking to invest close to
                Chandigarh.
              </p>
              <p>
                With over 20 years in Punjab real estate, 15 completed projects and 4,500+ homes and offices
                delivered, Motia Group has built a track record NRIs can rely on, whether you are buying your first
                property in India or expanding an existing portfolio.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal variant="up">
            <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
              WHY NRIs INVEST IN PUNJAB WITH MOTIA GROUP
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {reasons.map((item, i) => (
              <Reveal key={item.title} variant="up" delay={i * 100}>
                <div className="corner-shoot-card rounded-2xl bg-white p-6 ring-1 ring-black/5 sm:p-8">
                  <div className="corner-shoot-content">
                    <span className="card-icon flex size-12 items-center justify-center rounded-xl bg-[#377f45]/10 text-[#377f45]">
                      <item.icon className="size-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <Reveal variant="up">
          <span className="block text-center text-sm font-semibold uppercase tracking-widest text-[#377f45]">
            Punjab Portfolio
          </span>
          <h2 className="mt-2 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Projects Across Punjab for NRI Investors
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            From ready-to-move homes to under-construction developments, explore options across Punjab&rsquo;s
            growth corridor.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.map((item, i) => (
            <Reveal key={item.title} variant="up" delay={i * 100}>
              <Link
                href={item.href}
                className="group block overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-[#377f45]/10 text-[#377f45]">
                    <item.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{item.text}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-28">
        <Image
          src="/motia-gill-estate/bannergillestate-1.webp"
          alt="A Motia Group development in Punjab for NRI investors"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1c2230]/85" />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Your Property in Punjab, Managed From Anywhere</h2>
            <p className="mt-4 text-white/80">
              A dedicated NRI relationship team, digital documentation and remote-friendly processes mean distance
              never has to stand between you and a home in Punjab.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20 lg:px-8">
        <Reveal variant="up">
          <span className="block text-center text-sm font-semibold uppercase tracking-widest text-[#377f45]">
            FAQ
          </span>
          <h2 className="mt-2 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            NRI Property in Punjab: Quick Answers
          </h2>
        </Reveal>

        <Reveal variant="up" delay={100} className="mt-12">
          <FaqAccordion items={faqs} />
        </Reveal>

        <Reveal variant="up" delay={150}>
          <p className="mt-8 text-center text-sm text-gray-600">
            Looking for more detail on loans, RBI rules, taxes and documentation? Visit our full{" "}
            <Link href="/nris" className="font-semibold text-[#377f45] hover:underline">
              NRI Property FAQ
            </Link>
            .
          </p>
        </Reveal>
      </section>

      <section className="bg-[#f4f8f5] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Start Your Punjab Property Journey Today</h2>
            <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-3 text-left">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#377f45]/10 text-[#377f45]">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#377f45]">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm text-gray-700 transition-colors hover:text-[#377f45]">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-700">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/contact-us"
              className="mt-10 inline-block rounded bg-[#377f45] px-8 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-[#2c6636] active:scale-95"
            >
              Talk to Our NRI Desk
            </Link>
          </Reveal>
        </div>
      </section>

      <Reveal variant="fade">
        <ClientsSection />
      </Reveal>
    </>
  );
}
