import { Header } from "@/components/ui/header-2";
import { Footer } from "@/components/ui/modem-animated-footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Info, Shield, Zap, ArrowRight, HelpCircle } from "lucide-react";
import { PricingCard } from "@/components/ui/pricing-card";

const faqs = [
  {
    question: "Is it really a one-time payment?",
    answer: "Yes. When you buy Rxio Pharma, you get a lifetime license. There are no monthly or yearly subscription fees to keep using the core software on your local system.",
  },
  {
    question: "Do I get updates?",
    answer: "Absolutely. We provide regular updates to improve performance, add new features, and ensure compatibility with the latest operating systems.",
  },
  {
    question: "Will it work without internet?",
    answer: "Yes, Rxio Pharma is built to be offline-first. Your inventory, billing, and patient records are stored locally on your system, and the software doesn't need internet to function.",
  },
  {
    question: "Is setup and support included?",
    answer: "Yes, our support team will help you with the initial setup and configuration to ensure everything is running smoothly. We also provide documentation and standard support for all users.",
  },
  {
    question: "What are 'Cloud Features'?",
    answer: "Cloud features are optional add-ons like remote analytics, cloud backup, and multi-device synchronization. These will be available in the future for a separate fee, but the core software will always remain offline-capable and subscription-free.",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-subtle">
          <div className="container-section">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-6">
                Simple Pricing
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                One Price. <span className="text-gradient-primary">Forever Yours.</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                No monthly subscriptions. No hidden fees. Pay once and own your software forever.
              </p>
            </div>

            {/* Pricing Card */}
            <div className="max-w-6xl mx-auto">
              <PricingCard
                title="Launch Offer"
                description="Special lifetime license for our first 20 users. One-time payment, no monthly fees."
                price={8000}
                originalPrice={20000}
                currency="₹"
                features={[
                  {
                    title: "Software & License",
                    items: [
                      "Complete Rxio Pharma software",
                      "Lifetime ownership — no recurring fees",
                      "All core features included",
                      "Regular updates & improvements",
                    ],
                  },
                  {
                    title: "Perks & Support",
                    items: [
                      "1.5 years free cloud & premium features",
                      "Initial setup by Rxio support team",
                      "Priority support access",
                      "Special 'Early Adopter' status",
                    ],
                  },
                ]}
                buttonText="Claim Launch Offer"
                onButtonClick={() => window.location.href = '/download'}
              />
            </div>

            {/* Cloud Add-on Note */}
            <div className="max-w-2xl mx-auto mt-12">
              <div className="bg-card rounded-xl p-6 border border-border shadow-soft">
                <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                  Cloud Features (Coming Soon)
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Optional cloud features including multi-device sync, cloud backup, and advanced analytics 
                  will be available 6-8 months after launch. Value: ₹6,000-₹8,000/year. Launch offer customers 
                  get 1.5 years free. Cloud is always optional — your software works perfectly offline.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container-section">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-6">
                <HelpCircle className="w-4 h-4" />
                Common Questions
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="grid gap-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-6 shadow-soft border border-border"
                  >
                    <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
