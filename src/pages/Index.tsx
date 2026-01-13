import { Header } from "@/components/ui/header-2";
import { Footer } from "@/components/ui/modem-animated-footer";
import Hero from "@/components/home/Hero";
import ValueProposition from "@/components/home/ValueProposition";
import ProductShowcase from "@/components/home/ProductShowcase";
import PricingPreview from "@/components/home/PricingPreview";
import CTASection from "@/components/home/CTASection";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Rxio - High-Performance Offline-First Software"
        description="Own your business software forever. Rxio builds lifetime-licensed, offline-first applications for Indian businesses like Rxio Pharma."
        keywords="pharmacy software, billing software, offline-first, Rxio, lifetime license"
      />
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
