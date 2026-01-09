import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What does 'lifetime license' mean?",
    answer: "When you purchase Rxio software, you own it forever. There are no monthly or yearly fees. You can use the software as long as you want, and all core updates are included.",
  },
  {
    question: "What's included in the launch offer?",
    answer: "The first 20 customers get the software for ₹8,000 (instead of ₹20,000) plus 1.5 years of free access to cloud and premium features when they become available.",
  },
  {
    question: "Is the software really offline-first?",
    answer: "Yes, the core software works completely without internet. All your data is stored locally. Cloud features (when available) are optional add-ons.",
  },
  {
    question: "What about future updates?",
    answer: "Regular updates, bug fixes, and feature improvements are included with your purchase. We're committed to maintaining the software for the long term.",
  },
  {
    question: "How does setup work?",
    answer: "After purchase, our support team will schedule a live session to help you set up the software on your system. This initial setup assistance is included in the price.",
  },
  {
    question: "What are the cloud features?",
    answer: "Cloud features (planned for 6-8 months after launch) will include multi-device sync, cloud backup, and advanced analytics. These will be optional add-ons valued at ₹6,000-₹8,000/year.",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 lg:pt-20">
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

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Launch Offer */}
              <div className="relative bg-gradient-hero rounded-2xl p-8 shadow-glow">
                <div className="absolute -top-3 left-8 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold">
                  <Sparkles className="w-4 h-4" />
                  Launch Offer
                </div>
                
                <div className="pt-6">
                  <p className="text-primary-foreground/80 text-sm mb-2">First 20 Users Only</p>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-display text-5xl font-bold text-primary-foreground">₹8,000</span>
                    <span className="text-primary-foreground/60 line-through text-xl">₹20,000</span>
                  </div>
                  <p className="text-primary-foreground/70 text-sm mb-8">One-time payment • Lifetime license</p>
                  
                  <ul className="space-y-4 mb-10">
                    {[
                      "Complete Rxio Pharma software",
                      "Lifetime ownership — no recurring fees",
                      "All core features included",
                      "1.5 years free cloud & premium features",
                      "Initial setup by Rxio support team",
                      "Regular updates & improvements",
                      "Priority support access",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-primary-foreground/90">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild variant="accent" size="lg" className="w-full">
                    <Link to="/download">Claim Launch Offer</Link>
                  </Button>
                  <p className="text-primary-foreground/60 text-xs text-center mt-4">
                    Limited to first 20 customers
                  </p>
                </div>
              </div>

              {/* Standard Price */}
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
                <p className="text-muted-foreground text-sm mb-2">Standard License</p>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-display text-5xl font-bold text-foreground">₹20,000</span>
                </div>
                <p className="text-muted-foreground text-sm mb-8">One-time payment • Lifetime license</p>
                
                <ul className="space-y-4 mb-10">
                  {[
                    "Complete Rxio Pharma software",
                    "Lifetime ownership — no recurring fees",
                    "All core features included",
                    "Initial setup by Rxio support team",
                    "Regular updates & improvements",
                    "Standard support access",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-foreground">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button asChild variant="outline" size="lg" className="w-full">
                  <Link to="/download">Get Started</Link>
                </Button>
                <p className="text-muted-foreground text-xs text-center mt-4">
                  Standard pricing after launch offer ends
                </p>
              </div>
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
