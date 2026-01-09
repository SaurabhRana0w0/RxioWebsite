import { Header } from "@/components/ui/header-2";
import { Footer } from "@/components/ui/modem-animated-footer";
import { Shield, Zap, TrendingUp, Heart, CheckCircle2, ArrowRight } from "lucide-react";

const WhyRxio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-hero">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-8">
                Why Choose Rxio?
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                In a world of endless subscriptions and cloud-dependent software, we chose a different path. 
                Here's why businesses trust Rxio.
              </p>
            </div>
          </div>
        </section>

        {/* Reasons Grid */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container-section">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-soft border border-border card-hover"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-6">
                    <reason.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {reason.description}
                  </p>
                  <ul className="space-y-2">
                    {reason.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-center gap-2 text-sm text-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-gradient-subtle">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Own Your Software?
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Try Rxio Pharma free and experience the difference of software built for ownership.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/download">
                    Download Free Demo
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/products">View Products</Link>
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

export default WhyRxio;
