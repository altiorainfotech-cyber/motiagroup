import AboutSection from "@/components/AboutSection";
import BuildingFutureSection from "@/components/BuildingFutureSection";
import ClientsSection from "@/components/ClientsSection";
import HeroSlider from "@/components/HeroSlider";
import HomeContactForm from "@/components/HomeContactForm";
import InvestmentBanner from "@/components/InvestmentBanner";
import MediaShowcaseSection from "@/components/MediaShowcaseSection";
import TestimonialSection from "@/components/TestimonialSection";
import VisionMissionSection from "@/components/VisionMissionSection";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <VisionMissionSection />
      <InvestmentBanner />
      <BuildingFutureSection />
      <MediaShowcaseSection />
      <TestimonialSection />
      <ClientsSection />
      <HomeContactForm />
    </>
  );
}
