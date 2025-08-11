import Hero from "../sections/Hero";
import ProductsSection from "../sections/ProductsSection";
import BenefitsSection from "../sections/BenefitsSection";
import CTASection from "../sections/CTASection";
import TeamSection from "../sections/TeamSection";
import FAQSection from "../sections/FAQSection";
import ReviewsSection from "../sections/ReviewsSection";
import Footer from "../sections/Footer";
import FreeResourcesSection from "@/sections/FreeResources";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <Hero />
      <ProductsSection />
      <BenefitsSection />
      <FreeResourcesSection />
      <CTASection />
      <TeamSection />
      <FAQSection />
      <ReviewsSection />
      <Footer />
    </main>
  );
}
