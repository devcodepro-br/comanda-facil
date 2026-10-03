import FeaturesSection from "./_components/FeaturesSection";
import HeroSection from "./_components/HeroSection";
import LandingFooter from "./_components/LandingFooter";
import LandingNavbar from "./_components/LandingNavbar";
import PricingSection from "./_components/PricingSection";
import TestimonialsSection from "./_components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <LandingNavbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
      </main>
      <LandingFooter />
    </>
  );
}
