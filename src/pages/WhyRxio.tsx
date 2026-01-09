import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Wifi, 
  Zap, 
  IndianRupee, 
  Clock, 
  Heart,
  ArrowRight,
  Check
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "True Ownership",
    description: "When you buy Rxio software, you own it. No monthly payments, no subscription traps, no sudden price increases. Pay once and use it forever.",
    points: [
      "Lifetime license included",
      "No recurring fees",
      "Transfer between systems",
      "Your data stays yours",
    ],
  },
  {
    icon: Wifi,
    title: "Offline-First Design",
    description: "Our software doesn't depend on internet connectivity. Your business operations continue smoothly even when the connection drops.",
    points: [
      "Works without internet",
      "Local SQLite database",
      "No cloud dependency",
      "Instant data access",
    ],
  },
  {
    icon: Zap,
    title: "Native Performance",
    description: "Built with C++ and optimized for speed. No browser overhead, no electron bloat — just fast, responsive software that respects your time.",
    points: [
      "Built with C++",
      "Instant startup",
      "Low resource usage",
      "Smooth operations",
    ],
  },
  {
    icon: IndianRupee,
    title: "Fair Pricing",
    description: "One transparent price for a lifetime of use. No hidden fees, no premium tiers to access basic features, no forced upgrades.",
    points: [
      "One-time payment",
      "All features included",
      "No upselling tactics",
      "Clear, honest pricing",
    ],
  },
  {
    icon: Clock,
    title: "Long-Term Support",
    description: "We're committed to maintaining and improving our software for years to come. Regular updates are included in your purchase.",
    points: [
      "Regular updates",
      "Bug fixes included",
      "Feature improvements",
      "Responsive support",
    ],
  },
  {
    icon: Heart,
    title: "Built for Indian Businesses",
    description: "Designed with the unique needs of Indian businesses in mind. GST compliance, local payment methods, and support that understands your market.",
    points: [
      "GST-compliant billing",
      "Indian rupee pricing",
      "Local support team",
      "Market-specific features",
    ],
  },
];

const WhyRxio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-hero">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-8">
                Why Choose Rxio?
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                In a world of endless subscriptions and cloud-dependent software, we chose a different path. 
                Here's why businesses trust Rxio.
              </p>
            </div>
          </div>
        </section>

        {/* Reasons Grid */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container-section">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-soft border border-border card-hover"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-6">
                    <reason.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {reason.description}
                  </p>
                  <ul className="space-y-2">
                    {reason.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-center gap-2 text-sm text-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-gradient-subtle">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Own Your Software?
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Try Rxio Pharma free and experience the difference of software built for ownership.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/download">
                    Download Free Demo
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/products">View Products</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhyRxio;
