import { Link } from "react-router-dom";
import {
  Heart,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container-section py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">
                  R
                </span>
              </div>
              <span className="font-display font-bold text-xl">Rxio</span>
            </Link>

            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              High-performance, offline-first software built for businesses that
              value ownership, stability, and control.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-primary-foreground/5 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary/20 transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-primary-foreground/5 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary/20 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-primary-foreground/5 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary/20 transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Why Rxio", path: "/why-rxio" },
                { name: "Products", path: "/products" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Pricing", path: "/pricing" },
                { name: "Compare", path: "/compare" },
                { name: "Download", path: "/download" },
                { name: "Contact", path: "/contact" },
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms of Service", path: "/terms" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-primary" />
                <a
                  href="mailto:hello@rxio.online"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  hello@rxio.online
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-primary" />
                <span className="text-primary-foreground/70 text-sm">
                  +91 XXXX XXXXXX
                </span>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span className="text-primary-foreground/70 text-sm">
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar (OUTSIDE container — IMPORTANT) */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Left */}
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {currentYear} Rxio. All rights reserved.
            </p>

            {/* Right */}
            <div className="flex items-center gap-1.5 text-primary-foreground/60 text-sm">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
              <span>by</span>
              <a
                href="https://your-portfolio-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground transition-colors underline underline-offset-2"
              >
                Saurabh Rana
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

