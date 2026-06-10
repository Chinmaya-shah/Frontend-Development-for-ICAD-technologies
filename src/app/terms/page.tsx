"use client";

import React, { useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Scale, FileText, ShieldAlert, Hammer, AlertTriangle, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function TermsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      ".terms-header-tag, .terms-title, .terms-subtitle",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }
    );

    gsap.fromTo(
      ".terms-section-card",
      { opacity: 0, y: 30, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".terms-content-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <title>Terms & Conditions | ICAD Technologies</title>
      <meta name="description" content="Review the Terms and Conditions governing your access and usage of ICAD Technologies' services, proprietary products, and edge infrastructure." />
      <Navbar />
      <main className="flex-1 mt-20 pb-xl bg-surface dark:bg-zinc-950">
        {/* Hero Banner */}
        <section className="relative py-xl px-margin-mobile md:px-margin-desktop bg-surface-container-low border-b border-outline/30 dark:bg-zinc-900">
          <div className="max-w-[1440px] mx-auto space-y-sm">
            <span className="terms-header-tag inline-block px-3 py-1 bg-secondary text-on-secondary font-label-sm text-label-sm rounded-full font-bold uppercase dark:bg-secondary-fixed dark:text-on-secondary-fixed">
              Governance & Legal
            </span>
            <h1 className="terms-title text-display-lg-mobile md:text-display-lg font-display-lg text-primary dark:text-white leading-tight">
              Terms & Conditions
            </h1>
            <p className="terms-subtitle text-body-lg text-on-surface-variant dark:text-zinc-300 max-w-2xl">
              Our terms and conditions govern the provisioning of our high-performance technology consulting, custom software products, and edge infrastructure platforms.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-margin-mobile md:px-margin-desktop py-xl">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">
            
            {/* Sidebar quick overview card - Takes 4 columns */}
            <div className="lg:col-span-4 space-y-md sticky top-28">
              <div className="neumorphic-raised p-lg rounded-2xl bg-white dark:bg-primary-container border border-outline-variant/30 space-y-md">
                <Scale className="w-10 h-10 text-secondary" />
                <h3 className="text-headline-md font-headline-md text-primary dark:text-on-primary">
                  Legal Framework
                </h3>
                <p className="text-label-md text-on-surface-variant dark:text-on-primary-container/85 leading-relaxed">
                  Our terms establish a transparent legal relationship governing our engineering solutions, deliverables, and service usage.
                </p>
                <div className="space-y-sm pt-sm border-t border-outline/30">
                  <div className="flex items-center gap-xs text-[11px] font-mono font-bold text-on-surface-variant dark:text-on-primary-container">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span>INTELLECTUAL PROPERTY PROTECTION</span>
                  </div>
                  <div className="flex items-center gap-xs text-[11px] font-mono font-bold text-on-surface-variant dark:text-on-primary-container">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span>MUTUAL NON-DISCLOSURE STANDARDS</span>
                  </div>
                  <div className="flex items-center gap-xs text-[11px] font-mono font-bold text-on-surface-variant dark:text-on-primary-container">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span>LIMITATION OF LIABILITY CAPS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Terms Content - Takes 8 columns */}
            <div className="lg:col-span-8 space-y-lg terms-content-grid">
              
              {/* Card 1: Acceptance of Terms */}
              <div className="terms-section-card p-lg neumorphic-raised rounded-2xl bg-white dark:bg-primary-container border border-outline-variant/30 space-y-md">
                <div className="flex items-center gap-md pb-xs border-b border-outline/30">
                  <FileText className="w-6 h-6 text-secondary" />
                  <h2 className="text-headline-md font-headline-md text-primary dark:text-on-primary">
                    1. Acceptance of Terms
                  </h2>
                </div>
                <p className="text-body-md text-on-surface-variant dark:text-on-primary-container/85 leading-relaxed">
                  By accessing the ICAD Technologies web ecosystem, or by purchasing/subscribing to our custom enterprise software platforms, strategic consulting deliverables, and managed cloud environments, you agree to comply with and be bound by these Terms and Conditions.
                </p>
                <p className="text-body-md text-on-surface-variant dark:text-on-primary-container/85 leading-relaxed">
                  If you are entering into these terms on behalf of a corporation or legal entity, you warrant that you possess full administrative authority to bind that entity. If you do not agree with any clause of these terms, you must terminate all usage of our services immediately.
                </p>
              </div>

              {/* Card 2: Intellectual Property */}
              <div className="terms-section-card p-lg neumorphic-raised rounded-2xl bg-white dark:bg-primary-container border border-outline-variant/30 space-y-md">
                <div className="flex items-center gap-md pb-xs border-b border-outline/30">
                  <Hammer className="w-6 h-6 text-secondary" />
                  <h2 className="text-headline-md font-headline-md text-primary dark:text-on-primary">
                    2. Intellectual Property Rights
                  </h2>
                </div>
                <p className="text-body-md text-on-surface-variant dark:text-on-primary-container/85 leading-relaxed">
                  All systems, source code, visual configurations, templates, documentation, architectural methodologies, and assets displayed on our website or delivered as pre-built software products are the exclusive intellectual property of ICAD Technologies.
                </p>
                <ul className="list-disc pl-md text-body-md text-on-surface-variant dark:text-on-primary-container/85 space-y-xs">
                  <li><strong>Limited License:</strong> Subject to compliance with these terms and individual service agreements, we grant you a non-exclusive, non-transferable, revocable license to access and use our platforms.</li>
                  <li><strong>Prohibited Use:</strong> You may not reverse-engineer, decompile, extract, republish, or copy any code blocks, styles, or system components from our platforms without written consent.</li>
                  <li><strong>Trademarks:</strong> The ICAD Technologies brand mark, logos, and custom graphics are protected. No trademark license is implied or granted by this agreement.</li>
                </ul>
              </div>

              {/* Card 3: User Conduct & Responsibilities */}
              <div className="terms-section-card p-lg neumorphic-raised rounded-2xl bg-white dark:bg-primary-container border border-outline-variant/30 space-y-md">
                <div className="flex items-center gap-md pb-xs border-b border-outline/30">
                  <ShieldAlert className="w-6 h-6 text-secondary" />
                  <h2 className="text-headline-md font-headline-md text-primary dark:text-on-primary">
                    3. Acceptable Use Policy
                  </h2>
                </div>
                <p className="text-body-md text-on-surface-variant dark:text-on-primary-container/85 leading-relaxed">
                  To preserve the high speed, reliability, and security of our services, you agree not to:
                </p>
                <ul className="list-disc pl-md text-body-md text-on-surface-variant dark:text-on-primary-container/85 space-y-xs">
                  <li>Inject malicious agents, payloads, scripts, or worms into client service endpoints or contact interfaces.</li>
                  <li>Perform unauthorized penetration tests, security scans, or stress tests without explicit scheduling and written approval.</li>
                  <li>Use any automated scraping, crawling, or data harvesting scripts to download data directories or client logs.</li>
                </ul>
              </div>

              {/* Card 4: Limitation of Liability */}
              <div className="terms-section-card p-lg neumorphic-raised rounded-2xl bg-white dark:bg-primary-container border border-outline-variant/30 space-y-md">
                <div className="flex items-center gap-md pb-xs border-b border-outline/30">
                  <AlertTriangle className="w-6 h-6 text-secondary" />
                  <h2 className="text-headline-md font-headline-md text-primary dark:text-on-primary">
                    4. Limitation of Liability
                  </h2>
                </div>
                <p className="text-body-md text-on-surface-variant dark:text-on-primary-container/85 leading-relaxed">
                  ICAD Technologies delivers consulting services and secure cloud orchestration using standard enterprise-grade safety. However, to the maximum extent permitted by applicable law:
                </p>
                <p className="text-body-md font-mono text-on-surface-variant dark:text-on-primary-container/85 bg-surface-container-low p-sm rounded-lg border border-outline/20 text-xs">
                  IN NO EVENT SHALL ICAD TECHNOLOGIES, ITS DIRECTORS, EMPLOYEES, OR PARTNERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA LOSS, OR BUSINESS INTERRUPTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR INABILITY TO USE OUR SERVICES.
                </p>
              </div>

              {/* Card 5: Governing Law & Jurisdiction */}
              <div className="terms-section-card p-lg neumorphic-raised rounded-2xl bg-white dark:bg-primary-container border border-outline-variant/30 space-y-md">
                <h2 className="text-headline-md font-headline-md text-primary dark:text-on-primary">
                  5. Governing Law
                </h2>
                <p className="text-body-md text-on-surface-variant dark:text-on-primary-container/85 leading-relaxed">
                  These Terms and Conditions shall be governed by, construed, and enforced in accordance with the laws of India, without regard to its conflict of law principles. Any dispute arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the competent courts of India.
                </p>
              </div>

              {/* Card 6: Contact & Inquiries */}
              <div className="terms-section-card p-lg neumorphic-raised rounded-2xl bg-white dark:bg-primary-container border border-outline-variant/30 space-y-md">
                <h2 className="text-headline-md font-headline-md text-primary dark:text-on-primary">
                  Legal Desk Contact
                </h2>
                <p className="text-body-md text-on-surface-variant dark:text-on-primary-container/85 leading-relaxed">
                  If you have any questions or require clarification regarding these terms, please contact our administrative legal desk:
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
