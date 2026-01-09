import { Header } from "@/components/ui/header-2";
import { Footer } from "@/components/ui/modem-animated-footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Shield, Zap, TrendingUp, Monitor, ArrowRight, Sparkles, Package, ClipboardList, Clock, BarChart3, Receipt } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Inventory Management",
    description: "Real-time tracking of stock levels, batch numbers, and automatic low-stock alerts.",
  },
  {
    icon: Clock,
    title: "Expiry Tracking",
    description: "Automatic tracking of drug expiry dates with proactive alerts to minimize losses.",
  },
  {
    icon: Receipt,
    title: "GST-Ready Billing",
    description: "Create professional GST-compliant bills and manage tax filings with ease.",
  },
  {
    icon: ClipboardList,
    title: "Batch Management",
    description: "Track medication by batch numbers for precise inventory control and recall management.",
  },
  {
    icon: BarChart3,
    title: "Sales Analytics",
    description: "In-depth reporting and insights into your pharmacy's sales performance.",
  },
  {
    icon: Zap,
    title: "Offline Access",
    description: "Run your entire business without an internet connection, with local data security.",
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-subtle">
          <div className="container-section">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-light text-accent text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4" />
                  Our First Product
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Rxio Pharma
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Complete pharmacy management software built for Indian pharmacy owners. 
                  Manage your inventory, create GST-compliant bills, track batches and expiry dates, 
                  and run your pharmacy efficiently — all without needing internet.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="accent" size="lg">
                    <Link to="/download">
                      Try Free Demo
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>
              
              {/* Product Visual */}
              <div className="relative">
                <div className="bg-gradient-hero rounded-2xl p-8 shadow-floating">
                  <div className="bg-card rounded-xl p-6 shadow-elevated">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center">
                        <span className="text-primary-foreground font-bold">Rx</span>
                      </div>
                      <div>
                        <span className="font-display font-semibold text-foreground block">Rxio Pharma</span>
                        <span className="text-xs text-muted-foreground">Desktop Application</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                        <span className="text-sm text-foreground">Total Products</span>
                        <span className="font-display font-bold text-foreground">2,847</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                        <span className="text-sm text-foreground">Today's Sales</span>
                        <span className="font-display font-bold text-primary">₹24,580</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-accent-light rounded-lg">
                        <span className="text-sm text-foreground">Expiring Soon</span>
                        <span className="font-display font-bold text-accent">12 items</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container-section">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Everything You Need to Run Your Pharmacy
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive features designed specifically for pharmacy management in India.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-soft border border-border card-hover"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="py-20 lg:py-32 bg-gradient-subtle">
          <div className="container-section">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Built for Performance & Reliability
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Rxio Pharma is a native desktop application built with performance-first technologies. 
                  It runs directly on your Windows system without browser overhead or cloud dependencies.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Native C++ application for maximum performance",
                    "SQLite database for reliable local storage",
                    "Works completely offline",
                    "Windows desktop application",
                    "Regular updates and improvements",
                    "Setup and support included",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-card rounded-2xl p-8 shadow-elevated border border-border">
                <h3 className="font-display font-semibold text-xl text-foreground mb-6">
                  System Requirements
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Operating System", value: "Windows 10 or later" },
                    { label: "Processor", value: "Intel Core i3 or equivalent" },
                    { label: "Memory", value: "4 GB RAM minimum" },
                    { label: "Storage", value: "500 MB free space" },
                    { label: "Display", value: "1366 x 768 resolution" },
                    { label: "Internet", value: "Not required (offline-first)" },
                  ].map((spec, index) => (
                    <div key={index} className="flex justify-between py-3 border-b border-border last:border-0">
                      <span className="text-muted-foreground">{spec.label}</span>
                      <span className="font-medium text-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

          {/* CTA Section */}
          <section className="py-20 lg:py-32 bg-white border-y border-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl -mr-48 -mt-48" />
            <div className="container-section relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Try Rxio Pharma Today
                </h2>
                <p className="text-xl text-muted-foreground mb-10">
                  Download the free demo and explore all features. No credit card required.
                </p>
                <Button asChild className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white h-14 px-10 text-lg rounded-xl shadow-lg shadow-blue-500/20" size="xl">
                  <Link to="/download">
                    Download Free Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
