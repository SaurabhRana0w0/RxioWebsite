import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  Monitor, 
  CheckCircle2, 
  ArrowRight, 
  Headphones,
  Shield,
  Clock
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Download the Demo",
    description: "Click the download button to get the Rxio Pharma demo installer. It's free and takes just a few minutes.",
  },
  {
    number: "02",
    title: "Install & Explore",
    description: "Run the installer and explore all features. The demo has no time limit — take your time to evaluate.",
  },
  {
    number: "03",
    title: "Purchase License",
    description: "If you're satisfied, purchase a lifetime license. You can do this directly through our website or contact our team.",
  },
  {
    number: "04",
    title: "Setup Assistance",
    description: "Our support team will schedule a live session to help you set up the software with your actual data.",
  },
];

const DownloadPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-hero">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8">
                <Monitor className="w-4 h-4 text-primary-foreground" />
                <span className="text-primary-foreground/90 text-sm font-medium">
                  Windows Desktop Application
                </span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Download Rxio Pharma
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-10">
                Try the complete software free. Explore every feature, no credit card required, no time limits.
              </p>
              
              <Button variant="accent" size="xl" className="group">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download Free Demo
              </Button>
              
              <p className="text-primary-foreground/60 text-sm mt-4">
                Version 1.0 • Windows 10 or later • ~150 MB
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container-section">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-6">
                Try Before You Buy
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground">
                We want you to be completely satisfied before you purchase. Here's our simple process.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-card rounded-xl p-6 shadow-soft border border-border h-full">
                    <span className="font-display text-4xl font-bold text-primary/20 mb-4 block">
                      {step.number}
                    </span>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-1/2 -right-6 w-5 h-5 text-muted-foreground/30 transform -translate-y-1/2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 lg:py-32 bg-gradient-subtle">
          <div className="container-section">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  What's in the Demo?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  The demo includes all features of the full software. The only limitation is data capacity — 
                  you can add up to 100 products and 50 transactions to test the system.
                </p>
                
                <ul className="space-y-4 mb-10">
                  {[
                    "Full inventory management",
                    "GST-compliant billing",
                    "Batch & expiry tracking",
                    "Sales & purchase management",
                    "Business reports",
                    "Stock alerts",
                    "Offline functionality",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Button asChild size="lg">
                  <Link to="/products">
                    View All Features
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
              
              <div className="grid gap-6">
                {[
                  {
                    icon: Clock,
                    title: "No Time Limit",
                    description: "Use the demo as long as you need to evaluate. There's no trial period.",
                  },
                  {
                    icon: Shield,
                    title: "No Risk",
                    description: "No credit card required. No automatic charges. Complete freedom to decide.",
                  },
                  {
                    icon: Headphones,
                    title: "Support Available",
                    description: "Have questions during evaluation? Our team is here to help you explore.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-5 p-6 rounded-xl bg-card border border-border shadow-soft"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Purchase */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Purchase?
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                After trying the demo, you can purchase a lifetime license. Our team will help you 
                migrate your demo data and set up the full version.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/pricing">View Pricing</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Contact Sales</Link>
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

export default DownloadPage;
