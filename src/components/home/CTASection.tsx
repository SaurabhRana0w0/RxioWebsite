import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container-section">
        <div className="bg-gradient-hero rounded-3xl p-10 md:p-16 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Take Control of Your Business Software?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10">
              Download the free demo, explore every feature, and decide if Rxio is right for you. 
              No credit card required. No time limit on the trial.
            </p>
            
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="accent" size="xl" className="bg-white text-[#2563eb] hover:bg-white/90">
                  <Link to="/download">
                    <Download className="w-5 h-5" />
                    Download now
                  </Link>
                </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/contact">
                  Contact Sales
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
