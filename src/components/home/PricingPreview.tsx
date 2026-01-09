import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const PricingPreview = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-4">
            Simple Pricing
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            One Price.{" "}
            <span className="text-gradient-primary">Lifetime Ownership.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            No monthly subscriptions. No hidden fees. Pay once and own your software forever.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Launch Offer */}
          <div className="relative bg-gradient-hero rounded-2xl p-8 shadow-glow">
            <div className="absolute -top-3 left-8 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Launch Offer
            </div>
            
            <div className="pt-4">
              <p className="text-primary-foreground/80 text-sm mb-2">First 20 Users Only</p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-display text-5xl font-bold text-primary-foreground">₹8,000</span>
                <span className="text-primary-foreground/60 line-through">₹20,000</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Lifetime software license",
                  "All core features included",
                  "1.5 years free cloud & premium",
                  "Initial setup by Rxio support",
                  "Regular updates included",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-primary-foreground/90">
                    <Check className="w-5 h-5 text-accent" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button asChild variant="accent" size="lg" className="w-full">
                <Link to="/download">Claim Launch Offer</Link>
              </Button>
            </div>
          </div>

          {/* Standard Price */}
          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
            <p className="text-muted-foreground text-sm mb-2">Standard License</p>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="font-display text-5xl font-bold text-foreground">₹20,000</span>
              <span className="text-muted-foreground">one-time</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              {[
                "Lifetime software license",
                "All core features included",
                "Initial setup by Rxio support",
                "Regular updates included",
                "Long-term support",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button asChild variant="outline" size="lg" className="w-full">
              <Link to="/pricing">View Full Details</Link>
            </Button>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="text-center text-muted-foreground text-sm mt-10">
          Cloud features (optional add-on) will be available after 6-8 months. Value: ₹6,000-₹8,000/year.
        </p>
      </div>
    </section>
  );
};

export default PricingPreview;
