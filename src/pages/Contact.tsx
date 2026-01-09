import { useState } from "react";
import { Header } from "@/components/ui/header-2";
import { Footer } from "@/components/ui/modem-animated-footer";
import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-subtle">
          <div className="container-section">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-6">
                Get in Touch
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground">
                Have questions about Rxio Pharma? We're here to help.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    Email Us
                  </h3>
                  <a
                    href="mailto:hello@rxio.online"
                    className="text-primary hover:underline"
                  >
                    hello@rxio.online
                  </a>
                  <p className="text-muted-foreground text-sm mt-2">
                    We respond within 24-48 hours
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    Call Us
                  </h3>
                  <p className="text-foreground">+91 XXXX XXXXXX</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Mon-Sat, 10am-6pm IST
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    Location
                  </h3>
                  <p className="text-foreground">India</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Remote-first company
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-display font-semibold text-xl text-foreground">
                        Send a Message
                      </h2>
                      <p className="text-muted-foreground text-sm">
                        Fill out the form and we'll get back to you
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help?"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
