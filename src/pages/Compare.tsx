import { Header } from "@/components/ui/header-2";
import { Footer } from "@/components/ui/modem-animated-footer";
import { Check, X, Shield, Zap, TrendingUp, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const comparisonData = [
  {
    category: "Financials",
    items: [
      { feature: "License Type", rxio: "Lifetime", subscription: "Rented" },
      { feature: "One-time Payment", rxio: true, subscription: false },
      { feature: "Monthly/Yearly Fees", rxio: false, subscription: true },
      { feature: "Long-term Cost", rxio: "Fixed", subscription: "Increasing" },
    ],
  },
  {
    category: "Technical",
    items: [
      { feature: "Offline Usage", rxio: true, subscription: "Often Limited" },
      { feature: "Data Ownership", rxio: "Local & Private", subscription: "Cloud/Vendor Managed" },
      { feature: "Performance", rxio: "Native Speed", subscription: "Browser/Web Speed" },
      { feature: "Internet Dependency", rxio: "None", subscription: "High" },
    ],
  },
];

const Compare = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-subtle">
          <div className="container-section">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-6">
                Comparison
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Rxio vs Subscription Software
              </h1>
              <p className="text-xl text-muted-foreground">
                See why lifetime ownership beats endless subscriptions for your business.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="max-w-4xl mx-auto">
              {/* Table Header */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="col-span-1"></div>
                <div className="bg-[#2563EB] rounded-t-xl p-4 text-center shadow-lg">
                  <span className="font-display font-bold text-lg text-white">Rxio</span>
                  <p className="text-white/80 text-xs mt-1">Lifetime License</p>
                </div>
                <div className="bg-slate-100 rounded-t-xl p-4 text-center border-x border-t border-border">
                  <span className="font-display font-semibold text-lg text-foreground">Subscription</span>
                  <p className="text-muted-foreground text-xs mt-1">Monthly/Yearly</p>
                </div>
              </div>

              {/* Comparison Categories */}
              {comparisonData.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-8">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-4 px-4">
                    {category.category}
                  </h3>
                  <div className="bg-card rounded-xl border border-border overflow-hidden shadow-soft">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`grid grid-cols-3 gap-4 p-4 ${
                          itemIndex !== category.items.length - 1 ? "border-b border-border" : ""
                        }`}
                      >
                        <div className="text-foreground text-sm">{item.feature}</div>
                        <div className="flex justify-center">
                          {item.rxio === true ? (
                            <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center">
                              <Check className="w-5 h-5 text-primary" />
                            </div>
                          ) : item.rxio === false ? (
                            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                              <X className="w-5 h-5 text-muted-foreground" />
                            </div>
                          ) : (
                            <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                              {item.rxio}
                            </span>
                          )}
                        </div>
                        <div className="flex justify-center">
                          {item.subscription === true ? (
                            <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center">
                              <Check className="w-5 h-5 text-primary" />
                            </div>
                          ) : item.subscription === false ? (
                            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                              <X className="w-5 h-5 text-muted-foreground" />
                            </div>
                          ) : (
                            <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                              {item.subscription}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Cost Comparison */}
            <div className="max-w-4xl mx-auto mt-16">
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
                <h3 className="font-display font-bold text-2xl text-foreground mb-6 text-center">
                  5-Year Cost Comparison
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center p-6 bg-primary-light rounded-xl">
                    <p className="text-muted-foreground mb-2">Rxio Pharma</p>
                    <p className="font-display text-4xl font-bold text-primary mb-2">₹8,000</p>
                    <p className="text-sm text-muted-foreground">One-time (launch offer)</p>
                    <p className="text-xs text-muted-foreground mt-4">
                      After 5 years, you've paid: ₹8,000
                    </p>
                  </div>
                  <div className="text-center p-6 bg-secondary rounded-xl">
                    <p className="text-muted-foreground mb-2">Typical Subscription</p>
                    <p className="font-display text-4xl font-bold text-foreground mb-2">₹60,000+</p>
                    <p className="text-sm text-muted-foreground">₹1,000/month × 60 months</p>
                    <p className="text-xs text-muted-foreground mt-4">
                      And you don't own anything
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-gradient-hero">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Choose Ownership Over Renting
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-10">
                Join the businesses that chose to own their software rather than rent it.
              </p>
              <Button asChild variant="accent" size="xl">
                <Link to="/download">
                  Try Rxio Pharma Free
                  <ArrowRight className="w-5 h-5" />
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

export default Compare;
