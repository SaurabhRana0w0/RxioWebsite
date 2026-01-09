import { Header } from "@/components/ui/header-2";
import { Footer } from "@/components/ui/modem-animated-footer";
import { Check, Info, Shield, Zap, ArrowRight, HelpCircle } from "lucide-react";

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

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Launch Offer */}
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border-2 border-[#2563EB]/20 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                <div className="absolute -top-3 left-8 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#2563EB] text-white text-sm font-semibold shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Launch Offer
                </div>
                
                <div className="pt-6 relative z-10">
                  <p className="text-muted-foreground text-sm mb-2 font-medium">First 20 Users Only</p>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-display text-5xl font-bold text-[#2563EB]">₹8,000</span>
                    <span className="text-muted-foreground line-through text-xl">₹20,000</span>
                  </div>
                  <p className="text-muted-foreground/70 text-sm mb-8 font-medium">One-time payment • Lifetime license</p>
                  
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
                      <li key={index} className="flex items-start gap-3 text-foreground/90 font-medium">
                        <Check className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild size="lg" className="w-full bg-[#2563EB] hover:bg-[#2563EB]/90 text-white shadow-lg shadow-blue-500/20 h-14 text-lg rounded-xl">
                    <Link to="/download">Claim Launch Offer</Link>
                  </Button>
                  <p className="text-muted-foreground text-xs text-center mt-4">
                    Limited to first 20 customers
                  </p>
                </div>
              </div>

              {/* Standard Price */}
              <div className="bg-white rounded-2xl p-8 shadow-soft border border-border">
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
                      <Check className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button asChild variant="outline" size="lg" className="w-full h-14 text-lg rounded-xl border-2">
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
