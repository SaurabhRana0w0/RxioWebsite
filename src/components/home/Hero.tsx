import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Zap, TrendingUp } from "lucide-react";
import { ShaderAnimation } from "@/components/ui/shader-animation";

const Hero = () => {
  return (
      <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
        {/* Shader Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.06]">
          <ShaderAnimation />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#2563EB]/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl animate-pulse-soft animation-delay-200" />

        <div className="container-section relative z-10 py-20 lg:py-32">
          <div className="max-w-4xl p-8 rounded-3xl backdrop-blur-md bg-white/40 border border-[#2563EB]/10 shadow-sm">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563EB]/10 backdrop-blur-md border border-[#2563EB]/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
            <span className="text-foreground/90 text-sm font-medium">
              Launch Offer: First 20 users get lifetime license at ₹8,000
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-8 animate-slide-up">
            Built on the Promise of{" "}
            <span className="relative">
              Performance,
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
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
            <Button asChild className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white border-none h-14 px-8 text-lg rounded-xl shadow-lg shadow-blue-500/20">
              <Link to="/download">
                Try Now — Free Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="h-14 px-8 text-lg rounded-xl border-2 hover:bg-slate-50">
              <Link to="/products">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-slide-up animation-delay-300">
            {[
              { icon: Shield, label: "Lifetime License", desc: "Pay once, own forever" },
              { icon: Zap, label: "Offline-First", desc: "No internet required" },
              { icon: TrendingUp, label: "Native Performance", desc: "Built with C++ & SQLite" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-foreground/90 bg-white/40 p-3 rounded-2xl border border-white/50 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div>
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
