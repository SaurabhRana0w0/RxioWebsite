import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Zap, TrendingUp } from "lucide-react";
import { ShaderAnimation } from "@/components/ui/shader-animation";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col pt-40 lg:pt-60 pb-20 bg-white overflow-hidden font-satoshi">
      {/* Shader Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.14]">
        <ShaderAnimation />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse-soft animation-delay-200" />

      <div className="container-section relative z-10 flex flex-col items-center text-center">
        <div className="max-w-4xl flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-14 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-foreground/90 text-sm font-medium">
              Launch Offer: First 20 users get lifetime license at ₹8,000
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.2] mb-10 animate-slide-up">
            Built on the Promise of{" "}
            <span className="relative inline-block">
              Performance,
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" className="text-primary" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>{" "}
            Growth, and Efficiency
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-10 max-w-2xl animate-slide-up animation-delay-100 font-medium">
            Rxio builds high-performance, offline-first software using native technologies for businesses across India.
            We believe in lifetime ownership, not endless subscriptions. Our software runs on your system, works without internet,
            and stays yours forever — with regular updates and long-term support included.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up animation-delay-200">
            <Button asChild variant="gradient" size="xl">
              <Link to="/download">
                Download Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link to="/products">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 animate-slide-up animation-delay-300">
            {[
              { icon: Shield, label: "Lifetime License", desc: "Pay once, own forever" },
              { icon: Zap, label: "Offline-First", desc: "No internet required" },
              { icon: TrendingUp, label: "Native Performance", desc: "Built with C++ & SQLite" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-3 text-foreground/90 py-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-1">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-sm">{item.label}</p>
                  <p className="text-foreground/70 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
