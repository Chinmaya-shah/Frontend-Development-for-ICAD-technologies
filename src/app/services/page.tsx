"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Laptop, Database, Brain, Cloud, Megaphone, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Category structure mapping
const categories = [
  {
    id: "dev-design",
    title: "Development & Design",
    icon: Laptop,
    services: [
      { slug: "web-development", name: "Custom Web Development", desc: "High-performance, scalable web architectures built with React, Node.js, and modern cloud stacks.", icon: "Laptop" },
      { slug: "mobile-app-development", name: "Native Mobile Apps", desc: "Premium iOS and Android experiences focusing on fluidity, security, and user retention.", icon: "Laptop" },
      { slug: "ui-ux-design", name: "UI/UX Strategy", desc: "Conversion-driven design systems and user journey optimization for complex digital products.", icon: "Laptop" },
      { slug: "branding", name: "Brand Identity", desc: "Comprehensive social media management and brand narrative development.", icon: "Laptop" }
    ]
  },
  {
    id: "enterprise",
    title: "Enterprise Solutions",
    icon: Database,
    services: [
      { slug: "erp-solutions", name: "Bespoke ERP Implementation", desc: "Streamline your operations with customized ERP systems that integrate finance, logistics, and HR.", icon: "Database" },
      { slug: "crm-solutions", name: "CRM Customization", desc: "Maximize customer lifecycle value with Salesforce and HubSpot integrations tailored to your sales DNA.", icon: "Database" },
      { slug: "it-consulting", name: "Legacy Migration & IT Consulting", desc: "Modernize outdated monolithic systems into agile, cloud-ready architectures without downtime.", icon: "HelpCircle" }
    ]
  },
  {
    id: "ai-data",
    title: "AI & Data Intelligence",
    icon: Brain,
    services: [
      { slug: "ai-ml", name: "Generative AI Solutions", desc: "Deploy custom LLMs and RAG-based systems to automate knowledge work and enhance customer support.", icon: "Brain" },
      { slug: "data-analytics", name: "Data Warehousing & BI", desc: "Unified data lakes and warehouses built on Snowflake, BigQuery, and Azure for cross-departmental BI.", icon: "BarChart3" }
    ]
  },
  {
    id: "infra",
    title: "Infrastructure & Security",
    icon: Cloud,
    services: [
      { slug: "cloud-infrastructure", name: "Cloud Architecture (AWS/Azure)", desc: "Multi-region cloud strategies designed for high uptime and dynamic autoscaling capabilities.", icon: "Cloud" },
      { slug: "cybersecurity", name: "Cybersecurity & Compliance", desc: "Secure and regulatory compliant security frameworks including penetration testing and continuous security operations centers.", icon: "Shield" },
      { slug: "hosting", name: "Managed Edge Hosting", desc: "Edge CDN, load balancing, and DNS resolution setups configured for fast TTFB latency.", icon: "Cloud" },
      { slug: "devops", name: "DevOps & CI/CD Services", desc: "Automate packaging and deployment cycles to achieve stable, zero-downtime releases.", icon: "Cloud" }
    ]
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    icon: Megaphone,
    services: [
      { slug: "seo", name: "Advanced SEO", desc: "Technical SEO audits and content strategies to dominate search rankings.", icon: "Search" },
      { slug: "google-ads", name: "Paid Acquisition", desc: "ROI-focused PPC campaigns across Google, LinkedIn, and programmatic networks.", icon: "Megaphone" },
      { slug: "digital-marketing", name: "Growth Marketing", desc: "Lifecycle automation and segmented drip campaigns for lead nurturing.", icon: "Megaphone" }
    ]
  }
];

export default function ServicesPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useGSAP(() => {
    const sections = pageRef.current?.querySelectorAll(".service-section");
    if (!sections) return;

    sections.forEach((section) => {
      const cards = section.querySelectorAll(".service-item-card");
      if (cards.length === 0) return;

      gsap.fromTo(
        cards,
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, { scope: pageRef });

  return (
    <div ref={pageRef}>
      <title>Enterprise Technology Services & Solutions | ICAD Technologies</title>
      <meta name="description" content="Explore ICAD Technologies' services: Web/Mobile Development, Custom ERP/CRM Solutions, AI/ML Integrations, Cloud Infrastructure, Cybersecurity, and Managed Edge Hosting." />
      <Navbar />
      <main className="flex-1 mt-20">
        {/* Hero Section */}
        <HeroSection
          title="Future-Proof Technologies for Enterprises"
          tagline="Our Capabilities"
          description="ICAD Technologies delivers precision-engineered solutions across the digital spectrum, empowering leaders to navigate complex technological landscapes with confidence."
          heroImage="/images/services_hero.png"
          heroImageAlt="Abstract 3D digital flow and cloud data architecture connections"
        />

        {/* Services Content Wrapper to constrain sticky bounds */}
        <div className="relative">
          {/* Dynamic Category Navigation Sticky Bar */}
          <div 
            className={`sticky z-40 bg-surface/85 backdrop-blur-md py-md mb-lg border-b border-outline hidden md:block transition-all duration-300 ${
              navbarVisible ? "top-[76px]" : "top-[16px]"
            }`}
            data-cursor-guide="Jump to Section - Quick navigation links"
          >
            <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-6 lg:px-8 xl:px-margin-desktop flex justify-between items-center">
              <span className="text-[10px] lg:text-[11px] font-mono font-bold text-outline uppercase tracking-widest whitespace-nowrap mr-2">
                Jump to Section
              </span>
              <div className="flex space-x-1 md:space-x-2 lg:space-x-sm xl:space-x-lg overflow-x-auto no-scrollbar py-1">
                {categories.map((cat) => (
                  <a
                    key={cat.id}
                    href={`#${cat.id}`}
                    className="text-[11px] lg:text-[12px] xl:text-[13px] font-bold text-on-surface-variant hover:text-secondary transition-colors whitespace-nowrap"
                  >
                    {cat.title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services Listings grouped by Category */}
          <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop space-y-xl pb-xl">
            {categories.map((cat) => {
              const CatIcon = cat.icon;
              return (
                <section
                  key={cat.id}
                  id={cat.id}
                  className="service-section scroll-mt-32 space-y-lg"
                  data-cursor-guide={`Core Capabilities: ${cat.title}`}
                >
                  <div className="flex items-center space-x-md border-b border-outline/30 pb-xs">
                    <CatIcon className="w-8 h-8 text-secondary" />
                    <h2 className="text-headline-lg font-headline-lg text-primary dark:text-on-primary">
                      {cat.title}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                    {cat.services.map((service, idx) => (
                      <div
                        key={idx}
                        className="service-item-card neumorphic-raised p-6 md:p-8 pb-8 md:pb-10 flex flex-col justify-between min-h-[260px]"
                      >
                        <div className="space-y-sm">
                          <h3 className="text-headline-md font-headline-md text-primary dark:text-on-primary">
                            {service.name}
                          </h3>
                          <p className="text-body-md text-on-surface-variant dark:text-on-primary-container/85 leading-relaxed">
                            {service.desc}
                          </p>
                        </div>
                        <Link
                          href={`/services/${service.slug}`}
                          className="text-secondary dark:text-secondary-fixed font-label-md text-label-md flex items-center group mt-md hover:underline"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-xs group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
