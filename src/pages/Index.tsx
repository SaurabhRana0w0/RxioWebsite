import { Header } from "@/components/ui/header-2";
import { Footer } from "@/components/ui/modem-animated-footer";
import Hero from "@/components/home/Hero";
import ValueProposition from "@/components/home/ValueProposition";
import ProductShowcase from "@/components/home/ProductShowcase";
import PricingPreview from "@/components/home/PricingPreview";
import CTASection from "@/components/home/CTASection";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

const Index = () => {
  const socialLinks = [
    {
      icon: <Twitter className="w-6 h-6" />,
      href: "https://twitter.com/rxio",
      label: "Twitter",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://linkedin.com/company/rxio",
      label: "LinkedIn",
    },
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/rxio",
      label: "GitHub",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:hello@rxio.com",
      label: "Email",
    },
  ];

  const navLinks = [
    { label: "Why Rxio", href: "#" },
    { label: "Products", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Download", href: "#" },
  ];

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
      <Footer socialLinks={socialLinks} navLinks={navLinks} />
    </div>
  );
};

export default Index;
