"use client";
import React from "react";
import { Link } from "react-router-dom";
import {
  NotepadTextDashed,
  Twitter,
  Linkedin,
  Mail,
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
  creatorName?: string;
  creatorUrl?: string;
  brandIcon?: React.ReactNode;
  className?: string;
}

const defaultSocialLinks = [
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

const defaultNavLinks = [
  { label: "Why Rxio", href: "/why-rxio" },
  { label: "Products", href: "/products" },
  { label: "Pricing", href: "/pricing" },
  { label: "Download", href: "/download" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Compare", href: "/compare" },
];

export const Footer = ({
  brandName = "Rxio",
  brandDescription = "High-performance, offline-first software built for businesses that value ownership, stability, and long-term control.",
  socialLinks = defaultSocialLinks,
  navLinks = defaultNavLinks,
  creatorName,
  creatorUrl,
  brandIcon,
  className,
}: FooterProps) => {
  return (
    <section className={cn("relative w-full mt-0 overflow-hidden", className)}>
      <footer className="border-t bg-background mt-20 relative">
        <div className="max-w-7xl flex flex-col justify-between mx-auto min-h-[30rem] sm:min-h-[35rem] md:min-h-[40rem] relative p-4 py-10">
          <div className="flex flex-col mb-12 sm:mb-20 md:mb-0 w-full">
            <div className="w-full flex flex-col items-center">
              <div className="space-y-2 flex flex-col items-center flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-foreground text-3xl font-bold">
                    {brandName}
                  </span>
                </div>
                <p className="text-muted-foreground font-semibold text-center w-full max-w-sm sm:w-96 px-4 sm:px-0">
                  {brandDescription}
                </p>
              </div>

              {socialLinks.length > 0 && (
                <div className="flex mb-8 mt-3 gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-6 h-6 hover:scale-110 duration-300">
                        {link.icon}
                      </div>
                      <span className="sr-only">{link.label}</span>
                    </a>
                  ))}
                </div>
              )}

                {navLinks.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-muted-foreground max-w-full px-4">
                    {navLinks.map((link, index) => (
                      <Link
                        key={index}
                        className="hover:text-foreground duration-300 hover:font-semibold"
                        to={link.href}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="absolute bottom-24 left-0 w-full flex justify-center pointer-events-none overflow-hidden select-none">
              <h1 className="text-[12vw] sm:text-[15vw] md:text-[20vw] font-bold text-foreground/[0.03] leading-none uppercase tracking-tighter">
                {brandName}
              </h1>
            </div>

            <div className="mt-20 md:mt-24 flex flex-col gap-2 md:gap-1 items-center justify-center md:flex-row md:items-center md:justify-between px-4 md:px-0 relative z-10">
            <p className="text-base text-muted-foreground text-center md:text-left">
              ©{new Date().getFullYear()} {brandName}. All rights reserved.
            </p>
            {creatorName && creatorUrl && (
              <nav className="flex gap-4">
                <a
                  href={creatorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-muted-foreground hover:text-foreground transition-colors duration-300 hover:font-medium"
                >
                  Crafted by {creatorName}
                </a>
              </nav>
            )}
          </div>
        </div>
      </footer>
    </section>
  );
};
