import { PricingCard } from "@/components/ui/pricing-card";
import { useNavigate } from "react-router-dom";

const PricingPreview = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-subtle">
      <div className="container-section text-center pt-20">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-4">
          Simple Pricing
        </span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          One Price.{" "}
          <span className="text-gradient-primary">Lifetime Ownership.</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          No monthly subscriptions. No hidden fees. Pay once and own your software forever.
        </p>
      </div>

      <PricingCard
        title="Launch Offer"
        description="First 20 Users Only. Own the ultimate pharmacy management solution at a fraction of the cost."
        price={8000}
        originalPrice={20000}
        currency="₹"
        features={[
          {
            title: "Core Benefits",
            items: [
              "Lifetime software license",
              "All core features included",
              "Regular updates included",
              "Long-term support",
            ],
          },
          {
            title: "Launch Perks",
            items: [
              "1.5 years free cloud & premium",
              "Initial setup by Rxio support",
              "Priority feature requests",
              "VIP onboarding",
            ],
          },
        ]}
        buttonText="Claim Launch Offer"
        onButtonClick={() => navigate("/download")}
      />
      
      <div className="container-section pb-20 -mt-10">
        <p className="text-center text-muted-foreground text-sm">
          Cloud features (optional add-on) will be available after 6-8 months. Value: ₹6,000-₹8,000/year.
        </p>
      </div>
    </div>
  );
};

export default PricingPreview;
