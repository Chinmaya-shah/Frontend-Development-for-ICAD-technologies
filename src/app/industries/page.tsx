"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParallaxImage from "@/components/ui/ParallaxImage";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function IndustriesOverviewPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = pageRef.current?.querySelectorAll(".industry-item-card");
    if (!cards) return;

    gsap.fromTo(
      cards,
      { opacity: 0, scale: 0.98 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".industries-grid-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ".accordion-section-container",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".accordion-section-container",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: pageRef });

  return (
    <div ref={pageRef}>
      <title>Industry Verticals & Sector Specializations | ICAD Technologies</title>
      <meta name="description" content="Learn how ICAD Technologies tailors enterprise tech frameworks for key sectors: Financial Services (FinTech), Smart IoT Manufacturing, Logistics, and Compliant Healthcare Networks." />
      <Navbar />
      <main className="flex-1 mt-20">
        {/* Hero Section */}
        <HeroSection
          title="Enterprise Industry Solutions"
          tagline="ENGINEERING EXCELLENCE"
          description="Deploying deep technical expertise across critical sectors to drive operational efficiency, digital resilience, and sustainable growth for enterprise leaders."
          heroImage="/images/about_office.png"
          heroImageAlt="A modern glass skyscraper reflecting sky."
          isDark={true}
        />

        {/* Bento Grid */}
        <section className="industries-grid-section py-xl px-margin-mobile md:px-margin-desktop bg-surface">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Manufacturing: Large Feature */}
            <div className="industry-item-card md:col-span-8 group relative overflow-hidden rounded-xl h-[450px] shadow-sm bg-surface-container flex flex-col justify-end p-lg">
              <ParallaxImage
                src="/images/enterprise_erp.png"
                alt="Automated industrial floor"
                className="absolute inset-0 w-full h-full"
                imgClassName="group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent pointer-events-none z-10"></div>

              <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-md w-full">
                <div className="space-y-sm">
                  <h3 className="text-headline-lg font-headline-lg text-on-primary">Manufacturing</h3>
                  <p className="text-body-md text-on-primary/80 max-w-md">
                    Revolutionizing production floors with IoT integration and predictive maintenance frameworks.
                  </p>
                  <div className="flex gap-lg">
                    <div>
                      <div className="text-headline-md font-headline-md text-secondary">32%</div>
                      <div className="text-label-sm text-on-primary/65">Efficiency Gains</div>
                    </div>
                    <div>
                      <div className="text-headline-md font-headline-md text-secondary">15%</div>
                      <div className="text-label-sm text-on-primary/65">Cost Reduction</div>
                    </div>
                  </div>
                </div>
                <Link
                  href="/industries/manufacturing"
                  className="bg-on-primary text-primary p-md rounded-full hover:bg-secondary hover:text-on-secondary transition-colors shrink-0"
                >
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </div>

            {/* FinTech: Vertical Feature */}
            <div className="industry-item-card md:col-span-4 group relative overflow-hidden rounded-xl h-[450px] shadow-sm bg-surface-container flex flex-col justify-end p-lg">
              <ParallaxImage
                src="/images/growth_metrics.png"
                alt="Stock market charts streaming on multiple screens"
                className="absolute inset-0 w-full h-full"
                imgClassName="group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent pointer-events-none z-10"></div>

              <div className="relative z-10 space-y-md w-full">
                <h3 className="text-headline-md font-headline-md text-on-primary">FinTech</h3>
                <p className="text-body-md text-on-primary/80">
                  High-frequency trading architectures and secure blockchain settlement systems.
                </p>
                <div className="mb-lg">
                  <div className="text-headline-md font-headline-md text-secondary">99.99%</div>
                  <div className="text-label-sm text-on-primary/65">Uptime Reliability</div>
                </div>
                <Link
                  href="/industries/fintech"
                  className="text-on-primary flex items-center gap-xs font-bold hover:text-secondary transition-colors"
                >
                  Explore Solutions <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Logistics: Wide Feature */}
            <div className="industry-item-card md:col-span-5 group relative overflow-hidden rounded-xl h-[400px] shadow-sm bg-surface-container flex flex-col justify-end p-lg">
              <ParallaxImage
                src="/images/cloud_architecture.png"
                alt="Automated cargo terminal"
                className="absolute inset-0 w-full h-full"
                imgClassName="group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent pointer-events-none z-10"></div>

              <div className="relative z-10 space-y-md w-full">
                <h3 className="text-headline-md font-headline-md text-on-primary">Logistics</h3>
                <p className="text-body-md text-on-primary/80">
                  Real-time supply chain visibility and automated warehouse orchestration.
                </p>
                <div className="flex gap-md pt-xs">
                  <span className="px-sm py-1 bg-white/10 text-on-primary text-label-sm rounded border border-white/10">
                    Route Optimization
                  </span>
                  <span className="px-sm py-1 bg-white/10 text-on-primary text-label-sm rounded border border-white/10">
                    AI Forecasting
                  </span>
                </div>
                <Link
                  href="/industries/logistics"
                  className="bg-on-primary text-primary w-10 h-10 rounded-full hover:bg-secondary hover:text-on-secondary transition-colors flex items-center justify-center"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Healthcare: Large Feature */}
            <div className="industry-item-card md:col-span-7 group relative overflow-hidden rounded-xl h-[400px] shadow-sm bg-surface-container flex flex-col justify-end p-lg">
              <ParallaxImage
                src="/images/cybersecurity.png"
                alt="Genomics tablet displayed in laboratory"
                className="absolute inset-0 w-full h-full"
                imgClassName="group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/30 to-transparent pointer-events-none z-10"></div>

              <div className="relative z-10 space-y-md max-w-sm">
                <h3 className="text-headline-lg font-headline-lg text-on-primary">Healthcare</h3>
                <p className="text-body-md text-on-primary/80">
                  Secure EMR platforms and AI-driven diagnostic tools for healthcare providers.
                </p>
                <div className="p-md bg-white/10 backdrop-blur-md border border-white/10 rounded-lg">
                  <div className="text-label-sm font-label-sm text-secondary uppercase tracking-widest mb-xs">
                    Key Metric
                  </div>
                  <div className="text-headline-md font-headline-md text-on-primary">
                    40% Faster Data Retrieval
                  </div>
                </div>
                <Link href="/industries/healthcare">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 mt-xs">
                    Case Study
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Capabilities Accordion */}
        <section className="accordion-section-container py-xl bg-surface-container-low px-margin-mobile md:px-margin-desktop">
          <div className="max-w-4xl mx-auto space-y-xl">
            <div className="text-center space-y-sm">
              <h2 className="text-headline-lg font-headline-lg text-primary dark:text-on-primary">
                Unified Cross-Industry Core
              </h2>
              <p className="text-body-md text-on-surface-variant dark:text-on-primary-container/85 max-w-xl mx-auto">
                Our foundational technology stack powers every solution we deploy.
              </p>
            </div>
            <div className="space-y-sm">
              <Accordion title="Hybrid Cloud Architecture">
                We design resilient, scalable cloud environments that balance the security of on-premise hardware with the agility of public cloud providers like AWS and Azure.
              </Accordion>
              <Accordion title="Cybersecurity Resilience">
                Our Zero-Trust framework ensures that data integrity is maintained across all industry touchpoints, protecting critical intellectual property and financial assets.
              </Accordion>
              <Accordion title="Applied AI & Machine Learning">
                Beyond standard LLMs, we implement specialized neural networks for pattern recognition in industrial telemetry and financial fraud detection.
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title="Ready to Transform Your Industry?"
          description="Connect with our specialized engineering leads for a technical deep-dive into how ICAD can optimize your specific operations."
        />
      </main>
      <Footer />
    </div>
  );
}
