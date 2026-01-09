"use client";
import React from "react";
import { Link } from "react-router-dom";
import {
  Twitter,
  Linkedin,
  Mail,
  Facebook,
  Instagram,
  Heart,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface FooterProps {
  brandName?: string;
  brandDescription?: string;
  socialLinks?: SocialLink[];
  navLinks?: FooterLink[];
  className?: string;
}

/* SOCIAL LINKS */
const defaultSocialLinks: SocialLink[] = [
  {
    icon: <Facebook className="w-6 h-6" />,
    href: "https://facebook.com/rxio",
    label: "Facebook",
  },
  {
    icon: <Instagram className="w-6 h-6" />,
    href: "https://instagram.com/rxio",
    label: "Instagram",
  },
  {
    icon: <Twitter className="w-6 h-6" />,
    href: "https://twitter.com/rxio",
    label: "Twitter",
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    href: "https://linkedin.com/company/rxio",
    label: "LinkedIn",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    href: "mailto:hello@rxio.online",
    label: "Email",
  },
];

/* NAV LINKS */
const defaultNavLinks: FooterLink[] = [
  { label: "Why Rxio", href: "/why-rxio" },
  { label: "Products", href: "/products" },
  { label: "Pricing", href: "/pricing" },
  { label: "Download", href: "/download" },
  { label: "Compare", href: "/compare" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const Footer = ({
  brandName = "Rxio",
  brandDescription = "High-performance, offline-first software built for businesses that value ownership, stability, and long-term control.",
  socialLinks = defaultSocialLinks,
  navLinks = defaultNavLinks,
  className,
}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <section className={cn("relative w-full overflow-hidden", className)}>
      <footer className="bg-background relative">

        {/* MAIN FOOTER CONTENT */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold text-foreground">
              {brandName}
            </h2>

            <p className="mt-2 max-w-md text-muted-foreground font-medium">
              {brandDescription}
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-5 mt-6">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-muted-foreground hover:text-[#2563EB] transition"
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* NAV LINKS */}
            <div className="flex flex-wrap justify-center gap-5 mt-8 text-sm font-medium text-muted-foreground">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="hover:text-foreground transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM CREDIT BAR */}
        <div className="mt-16">
          <div className="max-w-7xl mx-auto px-6 pb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              {/* LEFT */}
              <p className="text-sm text-muted-foreground text-center md:text-left">
                © {currentYear} {brandName}. All rights reserved.
              </p>

              {/* RIGHT – DEV CREDIT */}
              <div className="flex items-center gap-2 text-base text-muted-foreground">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-[#2563EB] fill-[#2563EB]" />
                <span>by</span>
                <a
                  href="https://portfolio.saurabhrana.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:text-foreground transition"
                >
                  Saurabh Rana
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* BIG RXIO BACKGROUND TEXT */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none select-none">
            <h1 className="text-[24vw] font-extrabold text-foreground/[0.03] tracking-tighter uppercase leading-none">
            {brandName}
          </h1>
        </div>

      </footer>
    </section>
  );
};
