import { Header } from "@/components/ui/header-2";
import { Footer } from "@/components/ui/modem-animated-footer";
import Hero from "@/components/home/Hero";
import ValueProposition from "@/components/home/ValueProposition";
import ProductShowcase from "@/components/home/ProductShowcase";
import PricingPreview from "@/components/home/PricingPreview";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <ProductShowcase />
        <PricingPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
