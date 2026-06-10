import React from "react";
import Link from "next/link";
import { Handshake, Network } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-xl px-margin-mobile md:px-margin-desktop bg-surface-container-highest border-t border-outline-variant/30 text-on-surface dark:bg-primary dark:text-on-primary">
      {/* Grid of Links (Top) */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter mb-xl">
        {/* Column 1: Brand Info */}
        <div className="space-y-md">
          <span className="text-headline-md font-headline-md font-bold text-primary dark:text-on-primary">
            ICAD Technologies
          </span>
          <p className="text-body-md text-on-surface-variant dark:text-on-primary-container/85 max-w-xs leading-relaxed">
            Leaders in high-performance enterprise technology consulting and architectural implementation.
          </p>
        </div>

        {/* Column 2: Solutions */}
        <div>
          <h4 className="text-headline-sm font-headline-sm text-primary dark:text-on-primary mb-md">
            Solutions
          </h4>
          <ul className="space-y-sm">
            <li>
              <Link
                href="/services/it-consulting"
                className="text-on-surface-variant dark:text-on-primary-container/80 hover:text-secondary hover:underline transition-all text-label-sm font-label-sm"
              >
                Strategic Consulting
              </Link>
            </li>
            <li>
              <Link
                href="/services/cloud-infrastructure"
                className="text-on-surface-variant dark:text-on-primary-container/80 hover:text-secondary hover:underline transition-all text-label-sm font-label-sm"
              >
                Cloud Architecture
              </Link>
            </li>
            <li>
              <Link
                href="/services/cybersecurity"
                className="text-on-surface-variant dark:text-on-primary-container/80 hover:text-secondary hover:underline transition-all text-label-sm font-label-sm"
              >
                Cybersecurity
              </Link>
            </li>
            <li>
              <Link
                href="/services/ai-ml"
                className="text-on-surface-variant dark:text-on-primary-container/80 hover:text-secondary hover:underline transition-all text-label-sm font-label-sm"
              >
                AI Solutions
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Industries */}
        <div>
          <h4 className="text-headline-sm font-headline-sm text-primary dark:text-on-primary mb-md">
            Industries
          </h4>
          <ul className="space-y-sm">
            <li>
              <Link
                href="/industries/logistics"
                className="text-on-surface-variant dark:text-on-primary-container/80 hover:text-secondary hover:underline transition-all text-label-sm font-label-sm"
              >
                Logistics & Supply Chain
              </Link>
            </li>
            <li>
              <Link
                href="/industries/fintech"
                className="text-on-surface-variant dark:text-on-primary-container/80 hover:text-secondary hover:underline transition-all text-label-sm font-label-sm"
              >
                Finance
              </Link>
            </li>
            <li>
              <Link
                href="/industries/healthcare"
                className="text-on-surface-variant dark:text-on-primary-container/80 hover:text-secondary hover:underline transition-all text-label-sm font-label-sm"
              >
                Healthcare
              </Link>
            </li>
            <li>
              <Link
                href="/industries/manufacturing"
                className="text-on-surface-variant dark:text-on-primary-container/80 hover:text-secondary hover:underline transition-all text-label-sm font-label-sm"
              >
                Manufacturing
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Corporate */}
        <div>
          <h4 className="text-headline-sm font-headline-sm text-primary dark:text-on-primary mb-md">
            Corporate
          </h4>
          <ul className="space-y-sm">
            <li>
              <Link
                href="/about"
                className="text-on-surface-variant dark:text-on-primary-container/80 hover:text-secondary hover:underline transition-all text-label-sm font-label-sm"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="text-on-surface-variant dark:text-on-primary-container/80 hover:text-secondary hover:underline transition-all text-label-sm font-label-sm"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-on-surface-variant dark:text-on-primary-container/80 hover:text-secondary hover:underline transition-all text-label-sm font-label-sm"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-on-surface-variant dark:text-on-primary-container/80 hover:text-secondary hover:underline transition-all text-label-sm font-label-sm"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Dael-style Visual Centerpiece: Giant Text + Blur Line + Floating Badge */}
      <div className="relative w-full py-12 select-none overflow-hidden max-w-[1440px] mx-auto flex flex-col items-center justify-center">
        {/* Giant Logo Text */}
        <div className="font-display-lg font-extrabold tracking-tighter uppercase pointer-events-none select-none text-[clamp(4rem,14vw,11rem)] leading-none text-center bg-gradient-to-b from-primary/10 via-primary/5 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent bg-clip-text text-transparent">
          ICAD.TECH
        </div>

        {/* Blur Separator Line with Floating Badge */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-outline dark:via-outline-variant/30 to-transparent relative mt-6 mb-8">
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <Link
              href="/contact"
              className="w-16 h-16 rounded-3xl bg-surface/80 dark:bg-primary/80 backdrop-blur-sm border-2 border-outline dark:border-outline-variant/30 hover:border-secondary dark:hover:border-secondary flex items-center justify-center shadow-neumorphic-raised transition-all duration-300 group/badge cursor-pointer hover:scale-105 active:scale-95"
            >
              <Handshake className="w-8 h-8 text-secondary group-hover/badge:animate-handshake-loop" />
            </Link>
          </div>
        </div>
      </div>

      {/* Subfooter */}
      <div className="max-w-[1440px] mx-auto border-t border-outline-variant/30 pt-lg mt-md flex flex-col md:flex-row justify-between items-center gap-md">
        <p className="text-label-sm text-on-surface-variant dark:text-on-primary-container/70 text-center leading-relaxed">
          © 2003 - {new Date().getFullYear()} ICAD Technologies. All rights reserved. Excellence in Tech Consulting.
        </p>
        
        <div className="flex items-center gap-lg">
          <div className="flex gap-lg text-label-sm text-on-surface-variant dark:text-on-primary-container/70">
            <Link href="/privacy" className="hover:text-secondary">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-secondary">
              Terms
            </Link>
          </div>
          
          {/* Circular Pill Widget holding Sitemap Icon */}
          <Link
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-outline dark:border-outline-variant/30 bg-surface/60 dark:bg-primary-container/30 p-1.5 flex items-center justify-center hover:border-secondary hover:text-secondary transition-all"
            title="Sitemap"
          >
            <Network className="w-4 h-4 text-on-surface-variant dark:text-on-primary-container/70 hover:text-secondary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
