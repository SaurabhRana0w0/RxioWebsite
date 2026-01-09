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
    href: "mailto:hello@rxio.com",
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
      <footer className="bg-background mt-20 relative">

        {/* MAIN CONTAINER */}
        <div className="max-w-7xl mx-auto min-h-[30rem] sm:min-h-[35rem] md:min-h-[40rem] relative p-4 py-10 flex flex-col justify-between">

          {/* TOP CONTENT */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-foreground text-3xl font-bold">
              {brandName}
            </h2>

            <p className="mt-2 max-w-sm text-muted-foreground font-semibold">
              {brandDescription}
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex mt-4 gap-5">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-muted-foreground hover:text-[#2563eb] transition"
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* NAV LINKS */}
            <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm font-medium text-muted-foreground">
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

          {/* BIG RXIO WATERMARK */}
          <div className="absolute bottom-24 inset-x-0 flex justify-center pointer-events-none select-none">
            <h1 className="text-[12vw] sm:text-[15vw] md:text-[20vw] font-bold text-foreground/[0.025] uppercase tracking-tighter">
              {brandName}
            </h1>
          </div>

            {/* BOTTOM BAR */}
          <div className="mt-20 flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative z-10">
            
            {/* LEFT */}
            <p className="text-base text-muted-foreground text-center md:text-left">
              © {currentYear} {brandName}. All rights reserved.
            </p>

            {/* RIGHT */}
            <div className="flex items-center gap-2 text-muted-foreground text-base">
              <a
                href="https://portfolio.saurabhrana.me"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-foreground transition-colors"
              >
                Saurabh Rana
              </a>
            </div>

          </div>
        </div>
      </footer>
    </section>
  );
};

