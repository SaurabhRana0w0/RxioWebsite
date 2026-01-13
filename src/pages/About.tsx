import { Header } from "@/components/ui/header-2";
import { Footer } from "@/components/ui/modem-animated-footer";
import { Target, Eye, Heart } from "lucide-react";
import { SEO } from "@/components/SEO";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Rxio - Building Lifetime-Licensed Software"
        description="Rxio builds native, offline-first software for Indian businesses. We believe in ownership, performance, and reliability."
        keywords="about rxio, software company India, lifetime license, offline-first software"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-subtle">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-6">
                About Rxio
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
                Building Software That{" "}
                <span className="text-gradient-primary">Businesses Own</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We create high-performance, offline-first software using native technologies
                for businesses that value stability, control, and true ownership.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container-section">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Rxio was founded on a simple belief: businesses deserve software they can truly own.
                  In an era of endless subscriptions and cloud dependencies, we chose a different path —
                  building native, offline-first applications that work reliably, perform exceptionally,
                  and belong to the people who buy them.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We use technologies like C++ and SQLite not because they're trendy, but because
                  they deliver real performance and reliability. Our software runs on your hardware,
                  stores data locally, and doesn't stop working when the internet goes down.
                </p>
              </div>

              <div className="grid gap-6">
                {[
                  {
                    icon: Target,
                    title: "Our Focus",
                    description: "Building practical, high-performance software for Indian businesses across industries.",
                  },
                  {
                    icon: Eye,
                    title: "Our Vision",
                    description: "A world where businesses control their tools, not the other way around.",
                  },
                  {
                    icon: Heart,
                    title: "Our Values",
                    description: "Performance, ownership, honesty, and long-term support over quick profits.",
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

        {/* Company Info */}
        <section className="py-20 lg:py-32 bg-gradient-subtle">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Company in Its Early Days
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Rxio is a young company currently under registration in India. While we're just
                getting started, our commitment to quality and customer ownership is unwavering.
                We're building products we believe in, and we're excited to grow alongside the
                businesses we serve.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-light text-primary font-medium">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Launching Rxio Pharma — Our First Product
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
