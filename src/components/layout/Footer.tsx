import { Link } from "react-router-dom";
import { Heart, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-section py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">R</span>
              </div>
              <span className="font-display font-bold text-xl">Rxio</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              High-performance, offline-first software built for businesses that value ownership, stability, and control.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
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
            <h4 className="font-display font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              {[
                { name: "Pricing", path: "/pricing" },
                { name: "Compare", path: "/compare" },
                { name: "Download", path: "/download" },
                { name: "Contact", path: "/contact" },
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
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
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
                <span className="text-primary-foreground/70 text-sm">+91 XXXX XXXXXX</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span className="text-primary-foreground/70 text-sm">India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Rxio. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="flex gap-6">
                <Link
                  to="/privacy"
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </div>
              <div className="flex items-center gap-1.5 text-primary-foreground/60 text-sm">
                <span>made with</span>
                <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                <span>by saurabhrana0w0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
