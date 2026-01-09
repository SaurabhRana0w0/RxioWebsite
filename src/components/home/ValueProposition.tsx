import { Zap, TrendingUp, Gauge, Database, Shield, Headphones } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Performance",
    description: "Native C++ architecture delivers instant response times. No browser overhead, no cloud latency — just pure speed.",
    color: "primary",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Start small and scale confidently. Our software grows with your business without requiring costly upgrades or migrations.",
    color: "accent",
  },
  {
    icon: Gauge,
    title: "Efficiency",
    description: "Streamlined workflows that eliminate unnecessary steps. Focus on running your business, not learning complex software.",
    color: "primary",
  },
  {
    icon: Database,
    title: "Offline-First",
    description: "Your data stays on your system in a local SQLite database. Work without internet, access everything anytime.",
    color: "accent",
  },
  {
    icon: Shield,
    title: "True Ownership",
    description: "One-time payment, lifetime license. No monthly fees, no forced updates, no vendor lock-in. Your software, your rules.",
    color: "primary",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Our team handles initial setup and provides ongoing assistance. Real help from real people who understand your needs.",
    color: "accent",
  },
];

const ValueProposition = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-4">
            Why Choose Rxio
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Software Built for{" "}
            <span className="text-gradient-primary">Real Business Needs</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We focus on what matters most — reliability, performance, and putting you in control of your own tools.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-soft card-hover border border-border"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                  value.color === "primary"
                    ? "bg-primary-light text-primary"
                    : "bg-accent-light text-accent"
                }`}
              >
                <value.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
