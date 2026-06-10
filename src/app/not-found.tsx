"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Cpu, Cloud, Briefcase, Mail, Sparkles } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function NotFoundPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      ".notfound-badge",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6 }
    );

    tl.fromTo(
      ".notfound-title",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.4"
    );

    tl.fromTo(
      ".notfound-desc",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.6"
    );

    tl.fromTo(
      ".notfound-ctas",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.6"
    );

    tl.fromTo(
      ".notfound-links-title, .notfound-link-card",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
      "-=0.6"
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 mt-20 flex flex-col justify-center items-center py-xl px-margin-mobile md:px-margin-desktop relative overflow-hidden bg-surface">
        {/* Consistent Brand Dot Pattern */}
        <div className="absolute inset-0 hero-pattern pointer-events-none z-0"></div>

        <div className="relative z-10 w-full max-w-4xl text-center space-y-lg my-12">
          {/* Badge & Typography */}
          <div className="space-y-sm">
            <span className="notfound-badge inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-secondary border border-secondary/20 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Error Code // 404
            </span>
            
            <div className="notfound-title select-none text-center">
              <span className="text-secondary font-display font-extrabold text-[8rem] sm:text-[11rem] leading-none block">
                404
              </span>
              <h1 className="font-display-lg text-headline-lg text-primary dark:text-on-primary uppercase tracking-tight -mt-2 sm:-mt-4">
                Coordinate Offline
              </h1>
            </div>
          </div>

          {/* Description */}
          <p className="notfound-desc text-body-lg text-on-surface-variant dark:text-on-primary-container/85 max-w-lg mx-auto leading-relaxed">
            The digital resource node you are seeking has been relocated, archived, or is currently offline. Let's guide you back to our system directories.
          </p>

          {/* CTA Button Cluster (Using Theme Neumorphic Buttons) */}
          <div className="notfound-ctas flex flex-col sm:flex-row items-center justify-center gap-md">
            <Link href="/" className="w-full sm:w-auto">
              <Button 
                variant="neumorphic-orange" 
                size="lg" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Return to Base
              </Button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <Button 
                variant="neumorphic" 
                size="lg" 
                className="w-full sm:w-auto flex items-center justify-center gap-2"
              >
                Explore Services
              </Button>
            </Link>
          </div>

          {/* Corporate Directory Panel */}
          <div className="space-y-md pt-lg border-t border-outline/30">
            <h3 className="notfound-links-title text-label-sm font-label-sm font-bold uppercase tracking-wider text-on-surface-variant dark:text-on-primary-container/70">
              Corporate Directory
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-md text-left">
              {/* Card 1 */}
              <Link 
                href="/services/it-consulting" 
                className="notfound-link-card p-md neumorphic-raised flex items-start gap-md group"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-container-high dark:bg-primary-container flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors duration-500 shrink-0">
                  <Cpu className="w-5 h-5 text-secondary group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-primary dark:text-on-primary text-body-md group-hover:text-secondary transition-colors">Strategic Consulting</h4>
                  <p className="text-label-sm text-on-surface-variant dark:text-on-primary-container/70">IT audits and development roadmaps.</p>
                </div>
              </Link>

              {/* Card 2 */}
              <Link 
                href="/services/cloud-infrastructure" 
                className="notfound-link-card p-md neumorphic-raised flex items-start gap-md group"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-container-high dark:bg-primary-container flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors duration-500 shrink-0">
                  <Cloud className="w-5 h-5 text-secondary group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-primary dark:text-on-primary text-body-md group-hover:text-secondary transition-colors">Cloud Architecture</h4>
                  <p className="text-label-sm text-on-surface-variant dark:text-on-primary-container/70">Multi-region infrastructure & IaC.</p>
                </div>
              </Link>

              {/* Card 3 */}
              <Link 
                href="/careers" 
                className="notfound-link-card p-md neumorphic-raised flex items-start gap-md group"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-container-high dark:bg-primary-container flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors duration-500 shrink-0">
                  <Briefcase className="w-5 h-5 text-secondary group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-primary dark:text-on-primary text-body-md group-hover:text-secondary transition-colors">Careers Hub</h4>
                  <p className="text-label-sm text-on-surface-variant dark:text-on-primary-container/70">Join our enterprise engineering team.</p>
                </div>
              </Link>

              {/* Card 4 */}
              <Link 
                href="/contact" 
                className="notfound-link-card p-md neumorphic-raised flex items-start gap-md group"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-container-high dark:bg-primary-container flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors duration-500 shrink-0">
                  <Mail className="w-5 h-5 text-secondary group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-primary dark:text-on-primary text-body-md group-hover:text-secondary transition-colors">Contact Support</h4>
                  <p className="text-label-sm text-on-surface-variant dark:text-on-primary-container/70">Direct support lines and briefing schedule.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
