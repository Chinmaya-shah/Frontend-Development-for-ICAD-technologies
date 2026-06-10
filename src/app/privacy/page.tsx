"use client";

import React, { useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ShieldCheck, Eye, Lock, FileText, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function PrivacyPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      ".privacy-header-tag, .privacy-title, .privacy-subtitle",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }
    );

    gsap.fromTo(
      ".privacy-section-card",
      { opacity: 0, y: 30, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".privacy-content-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <title>Privacy Policy | ICAD Technologies</title>
      <meta name="description" content="Learn how ICAD Technologies handles, protects, and governs your corporate data and intellectual assets in our zero-trust ecosystem." />
      <Navbar />
      <main className="flex-1 mt-20 pb-xl bg-surface dark:bg-zinc-950">
        {/* Hero Banner */}
        <section className="relative py-xl px-margin-mobile md:px-margin-desktop bg-surface-container-low border-b border-outline/30 dark:bg-zinc-900">
          <div className="max-w-[1440px] mx-auto space-y-sm">
            <span className="privacy-header-tag inline-block px-3 py-1 bg-secondary text-on-secondary font-label-sm text-label-sm rounded-full font-bold uppercase dark:bg-secondary-fixed dark:text-on-secondary-fixed">
              Compliance & Safety
            </span>
            <h1 className="privacy-title text-display-lg-mobile md:text-display-lg font-display-lg text-primary dark:text-white leading-tight">
              Privacy Policy
            </h1>
            <p className="privacy-subtitle text-body-lg text-on-surface-variant dark:text-zinc-300 max-w-2xl">
              At ICAD Technologies, we build systems with sovereign security and absolute trust. This privacy policy details how we handle, collect, and protect your information.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-margin-mobile md:px-margin-desktop py-xl">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">
            
            {/* Sidebar quick overview card - Takes 4 columns */}
            <div className="lg:col-span-4 space-y-md sticky top-28">
              <div className="neumorphic-raised p-lg rounded-2xl bg-white dark:bg-primary-container border border-outline-variant/30 space-y-md">
                <ShieldCheck className="w-10 h-10 text-secondary" />
                <h3 className="text-headline-md font-headline-md text-primary dark:text-on-primary">
                  Sovereign Standards
                </h3>
                <p className="text-label-md text-on-surface-variant dark:text-on-primary-container/85 leading-relaxed">
                  Our privacy policies align with strict secure data management protocols to guarantee absolute data protection.
                </p>
                <div className="space-y-sm pt-sm border-t border-outline/30">
                  <div className="flex items-center gap-xs text-[11px] font-mono font-bold text-on-surface-variant dark:text-on-primary-container">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span>ZERO-TRUST ARCHITECTURE</span>
                  </div>
                  <div className="flex items-center gap-xs text-[11px] font-mono font-bold text-on-surface-variant dark:text-on-primary-container">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span>ENCRYPTED TRANSACTIONS</span>
                  </div>
                  <div className="flex items-center gap-xs text-[11px] font-mono font-bold text-on-surface-variant dark:text-on-primary-container">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span>AUDITABLE OBSERVABILITY</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Policy Content - Takes 8 columns */}
            <div className="lg:col-span-8 space-y-lg privacy-content-grid">
              
              {/* Card 1: Information Collection */}
              <div className="privacy-section-card p-lg neumorphic-raised rounded-2xl bg-white dark:bg-primary-container border border-outline-variant/30 space-y-md">
                <div className="flex items-center gap-md pb-xs border-b border-outline/30">
                  <Eye className="w-6 h-6 text-secondary" />
                  <h2 className="text-headline-md font-headline-md text-primary dark:text-on-primary">
                    1. Information We Collect
                  </h2>
                </div>
                <p className="text-body-md text-on-surface-variant dark:text-on-primary-container/85 leading-relaxed">
                  We collect information necessary to deliver strategic consulting, specialized software development, and edge infrastructure services. This includes:
                </p>
                <ul className="list-disc pl-md text-body-md text-on-surface-variant dark:text-on-primary-container/85 space-y-xs">
                  <li><strong>Identifiable Information:</strong> Name, corporate email, organization affiliation, and job title when you send inquiries.</li>
                  <li><strong>Technical Data:</strong> Network logs, IP addresses, browser agents, and diagnostic parameters required to maintain site speed and security.</li>
                  <li><strong>Transactional Details:</strong> Client project logs, budget parameters from cost estimation widgets, and service request details.</li>
                </ul>
              </div>

              {/* Card 2: How We Use Information */}
              <div className="privacy-section-card p-lg neumorphic-raised rounded-2xl bg-white dark:bg-primary-container border border-outline-variant/30 space-y-md">
                <div className="flex items-center gap-md pb-xs border-b border-outline/30">
                  <FileText className="w-6 h-6 text-secondary" />
                  <h2 className="text-headline-md font-headline-md text-primary dark:text-on-primary">
                    2. How We Use Data
                  </h2>
                </div>
                <p className="text-body-md text-on-surface-variant dark:text-on-primary-container/85 leading-relaxed">
                  Your information is utilized strictly to sustain client services, refine engineering deliverables, and guarantee application security:
                </p>
                <ul className="list-disc pl-md text-body-md text-on-surface-variant dark:text-on-primary-container/85 space-y-xs">
                  <li>To verify security authorizations and govern microservice gateway API calls.</li>
                  <li>To analyze usage metrics and accelerate core site speeds.</li>
                  <li>To process contact inquiries, deliver requested whitepapers, and organize architectural consultations.</li>
                </ul>
              </div>

              {/* Card 3: Security & Infrastructure */}
              <div className="privacy-section-card p-lg neumorphic-raised rounded-2xl bg-white dark:bg-primary-container border border-outline-variant/30 space-y-md">
                <div className="flex items-center gap-md pb-xs border-b border-outline/30">
                  <Lock className="w-6 h-6 text-secondary" />
                  <h2 className="text-headline-md font-headline-md text-primary dark:text-on-primary">
                    3. Data Security & Storage
                  </h2>
                </div>
                <p className="text-body-md text-on-surface-variant dark:text-on-primary-container/85 leading-relaxed">
                  We implement robust, zero-trust security measures to protect database assets against unauthorized access:
                </p>
                <ul className="list-disc pl-md text-body-md text-on-surface-variant dark:text-on-primary-container/85 space-y-xs">
                  <li>All web traffic uses encrypted channels (HTTPS/TLS) and edge CDNs.</li>
                  <li>Data is hosted on secure databases with strict microsegmentation access control gates.</li>
                  <li>No client credentials or data logs are sold or transferred to external commercial brokers.</li>
                </ul>
              </div>

              {/* Card 4: Inquiries & Contact */}
              <div className="privacy-section-card p-lg neumorphic-raised rounded-2xl bg-white dark:bg-primary-container border border-outline-variant/30 space-y-md">
                <h2 className="text-headline-md font-headline-md text-primary dark:text-on-primary">
                  Questions & Governance
                </h2>
                <p className="text-body-md text-on-surface-variant dark:text-on-primary-container/85 leading-relaxed">
                  If you have inquiries regarding this privacy statement or our secure data practices, please reach out to our privacy desk:
                </p>
                <p className="text-body-md font-bold text-secondary">
                  Email: info@icadtechnologies.com
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
