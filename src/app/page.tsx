import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import BuildingFutureSection from "@/components/BuildingFutureSection";
import ClientsSection from "@/components/ClientsSection";
import HeroSlider from "@/components/HeroSlider";
import HomeContactForm from "@/components/HomeContactForm";
import InvestmentBanner from "@/components/InvestmentBanner";
import MediaShowcaseSection from "@/components/MediaShowcaseSection";
import Reveal from "@/components/Reveal";
import TestimonialSection from "@/components/TestimonialSection";
import VisionMissionSection from "@/components/VisionMissionSection";

export const metadata: Metadata = {
  title: "Real Estate Builder in Zirakpur | Residential, Commercial & Industrial | Motia Group",
  description:
    "Discover residential, commercial and industrial properties by Motia Group, a trusted real estate developer in Zirakpur and the Tricity region.",
};

export default function Home() {
  return (
    <>
      <h1 className="sr-only">
        Real Estate Builder in Zirakpur &mdash; Residential, Commercial &amp; Industrial Properties
      </h1>
      <HeroSlider />
      <Reveal variant="left">
        <AboutSection />
      </Reveal>
      <Reveal variant="up">
        <VisionMissionSection />
      </Reveal>
      <Reveal variant="zoom">
        <InvestmentBanner />
      </Reveal>
      <Reveal variant="right">
        <BuildingFutureSection />
      </Reveal>
      <Reveal variant="up">
        <MediaShowcaseSection />
      </Reveal>
      <Reveal variant="zoom">
        <TestimonialSection />
      </Reveal>
      <Reveal variant="fade">
        <ClientsSection />
      </Reveal>
      <Reveal variant="right">
        <HomeContactForm />
      </Reveal>
    </>
  );
}
