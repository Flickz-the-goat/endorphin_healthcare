import Hero from "../sections/Hero";
import YourJourneySection from "../sections/YourJourneySection";
import ProductsSection from "../sections/ProductsSection";
import BenefitsSection from "../sections/BenefitsSection";
import CTASection from "../sections/CTASection";
import TeamSection from "../sections/TeamSection";
import FAQSection from "../sections/FAQSection";
import ReviewsSection from "../sections/ReviewsSection";
import FreeResourcesSection from "@/sections/FreeResources";
import OrbSection from "@/sections/OrbSection";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <Hero />
      <YourJourneySection />
      {
        //<OrbSection />
      }
      <ProductsSection />
      <BenefitsSection />
      <FreeResourcesSection />
      <CTASection />
      <TeamSection />
      <FAQSection />
      <ReviewsSection />
    </main>
  );
}
