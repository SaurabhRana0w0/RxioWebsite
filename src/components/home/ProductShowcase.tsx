import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Package, 
  Receipt, 
  Calendar, 
  BarChart3,
  Bell,
  HardDrive
} from "lucide-react";

const features = [
  { icon: Package, label: "Inventory Management" },
  { icon: Receipt, label: "GST Billing" },
  { icon: Calendar, label: "Batch & Expiry Tracking" },
  { icon: BarChart3, label: "Business Reports" },
  { icon: Bell, label: "Stock Alerts" },
  { icon: HardDrive, label: "Offline Storage" },
];

const ProductShowcase = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-light text-accent text-sm font-medium mb-4">
              Featured Product
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Rxio Pharma
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Complete pharmacy management software designed for Indian pharmacy owners. 
              Handle inventory, generate GST-compliant bills, track batches and expiry dates, 
              and gain insights into your business — all without requiring internet connectivity.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary"
                >
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link to="/products">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/download">Try Free Demo</Link>
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative bg-gradient-hero rounded-2xl p-8 lg:p-12 shadow-floating">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-foreground/10 rounded-full blur-2xl" />
              
              {/* Mock Dashboard */}
              <div className="relative bg-card rounded-xl p-6 shadow-elevated">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">Rx</span>
                  </div>
                  <span className="font-display font-semibold text-foreground">Rxio Pharma</span>
                </div>
                
                {/* Stats Preview */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-secondary rounded-lg p-4">
                    <p className="text-xs text-muted-foreground mb-1">Today's Sales</p>
                    <p className="font-display text-2xl font-bold text-foreground">₹24,580</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-4">
                    <p className="text-xs text-muted-foreground mb-1">Items Sold</p>
                    <p className="font-display text-2xl font-bold text-foreground">47</p>
                  </div>
                </div>

                {/* Stock Alert Preview */}
                <div className="bg-accent-light border border-accent/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Bell className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-foreground">Stock Alerts</span>
                  </div>
                  <p className="text-xs text-muted-foreground">3 items running low, 2 expiring soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
