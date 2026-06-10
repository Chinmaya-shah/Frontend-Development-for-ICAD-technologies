"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Cpu, Shield, Zap, Sparkles, Building2, HeartPulse, Factory, Cloud, Brain, Plus, Laptop, BarChart3 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import Button from "@/components/ui/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MetricCounter from "@/components/ui/MetricCounter";
import ParallaxImage from "@/components/ui/ParallaxImage";
import ScrollReveal from "@/components/ui/ScrollReveal";
import RotatingBadge from "@/components/ui/RotatingBadge";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const servicesData = [
  {
    title: "Cloud Architecture",
    href: "/services/cloud-infrastructure",
    desc: "Scalable, cloud-native transformation for modern enterprise workloads. We design resilient multiregion networks and automated orchestration pipelines.",
    icon: Cloud,
    bgImage: "/images/cloud_architecture.png"
  },
  {
    title: "Cybersecurity",
    href: "/services/cybersecurity",
    desc: "Advanced threat intelligence and zero-trust framework implementation. Safeguard your operational assets and achieve compliance at speed.",
    icon: Shield,
    bgImage: "/images/cybersecurity.png"
  },
  {
    title: "AI Solutions",
    href: "/services/ai-ml",
    desc: "Custom generative AI and machine learning models for business automation. Leverage LLMs and specialized RAG networks to unlock massive scaling capabilities.",
    icon: Brain,
    bgImage: "/images/ai_solutions.png"
  },
  {
    title: "Software Engineering",
    href: "/services/web-development",
    desc: "High-performance bespoke web, mobile, and desktop applications. Engineered using Next.js, React Native, and Go for optimal user experience and latency.",
    icon: Laptop,
    bgImage: "/images/software_engineering.png"
  },
  {
    title: "Data & Analytics",
    href: "/services/data-analytics",
    desc: "Advanced data warehouse architectures, real-time pipeline ingestion, and predictive analytics dashboards. Enable data-driven enterprise operations.",
    icon: BarChart3,
    bgImage: "/images/growth_metrics.png"
  },
  {
    title: "Strategic Consulting",
    href: "/services/it-consulting",
    desc: "Advisory services focused on digital maturity, security audits, and operational excellence, ensuring your tech stack directly drives growth.",
    icon: Cpu,
    bgImage: "/images/enterprise_erp.png"
  },
  {
    title: "DevOps & CI/CD",
    href: "/services/devops",
    desc: "Automated integration and deployment pipelines to accelerate release velocity. We establish robust container orchestration and automated testing systems.",
    icon: Zap,
    bgImage: "/images/about_mission.png"
  },
  {
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    desc: "Precision customer acquisition and growth automation. Data-driven SEO, lifecycle marketing campaigns, and performance ads tailored for high-growth enterprise platforms.",
    icon: Sparkles,
    bgImage: "/images/leader_ai.png"
  }
];

const roadmapSteps = [
  {
    phase: "Discovery",
    title: "Auditing & Discovery",
    desc: "We perform exhaustive audits of infrastructure, network mapping, and security standards to isolate design bottlenecks and define roadmap boundaries."
  },
  {
    phase: "Blueprinting",
    title: "Architectural Blueprinting",
    desc: "Designing secure, zero-trust cloud architectures with multi-region redundancy patterns to achieve near-perfect system availability and strict security targets."
  },
  {
    phase: "Automation",
    title: "Orchestration & Automation",
    desc: "Implementing declarative infrastructure as code (IaC) and custom CI/CD pipelines to ensure rapid release cycles and automated rollbacks."
  },
  {
    phase: "Integration",
    title: "Intelligence Integration",
    desc: "Deploying generative AI networks, retrieval-augmented generation (RAG) frameworks, and cloud analytics to unlock data-driven business decisions."
  },
  {
    phase: "Optimization",
    title: "Latency & CDN Optimization",
    desc: "Establishing distributed Anycast networks, application-level intelligent load-balancers, and edge hosting parameters to drive site speeds to peak scores."
  }
];

export default function HomePage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  useGSAP(() => {
    // Value Proposition Cards
    gsap.fromTo(
      ".val-prop-card",
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".val-prop-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Services Cards
    gsap.fromTo(
      ".service-card",
      { opacity: 0, y: 50, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Industry Solutions Cards
    gsap.fromTo(
      ".industry-card",
      { opacity: 0, scale: 0.98 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".industries-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Impact Cards
    gsap.fromTo(
      ".impact-card",
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".impact-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Security Section
    const secTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".security-section",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
    secTl.fromTo(
      ".security-text",
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
    );
    secTl.fromTo(
      ".security-visual",
      { opacity: 0, scale: 0.95, x: 40 },
      { opacity: 1, scale: 1, x: 0, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    );

    // TechStack Cards
    gsap.fromTo(
      ".techstack-card",
      { opacity: 0, y: 50, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".techstack-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );



    // Horizontal Scroll Roadmap Animation
    const roadmapSection = pageRef.current?.querySelector(".roadmap-section");
    const horizontalTrack = pageRef.current?.querySelector(".roadmap-horizontal-track");
    
    if (roadmapSection && horizontalTrack) {
      const scrollAmount = horizontalTrack.scrollWidth - window.innerWidth;
      
      if (scrollAmount > 0) {
        gsap.to(horizontalTrack, {
          x: -scrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: roadmapSection,
            pin: true,
            start: "top 80px",
            end: () => `+=${scrollAmount}`,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          }
        });
      }
    }
  }, { scope: pageRef });

  return (
    <div ref={pageRef}>
      <title>ICAD Technologies | Global Excellence in Tech Consulting</title>
      <meta name="description" content="Strategic tech consulting, cloud transformation, zero-trust cybersecurity, custom software engineering, and AI solutions for enterprise leaders." />
      <Navbar />
      <main className="flex-1 mt-20">
        {/* Hero Section */}
        <HeroSection
          title={<>Engineering the Future of <span className="text-secondary">Enterprise Technology</span></>}
          tagline="ENTERPRISE TECH EXCELLENCE"
          description="Strategic consulting and innovative tech solutions designed for high-performance organizations seeking digital supremacy and operational precision."
          heroImage="/images/about_office.png"
          heroImageAlt="A futuristic, high-end corporate glass architecture building with clean lines and reflective surfaces."
          primaryBtnText="Explore Solutions"
          primaryBtnLink="/services"
          secondaryBtnText="About Us"
          secondaryBtnLink="/about"
        />

        {/* Value Proposition */}
        <section className="val-prop-section py-xl px-margin-mobile md:px-margin-desktop bg-surface-container-low" data-cursor-guide="Technical Depth, Operational Agility & Defense-Grade Security">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-gutter text-center">
            <div className="val-prop-card p-md neumorphic-raised rounded hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
              <Cpu className="w-10 h-10 text-secondary mx-auto mb-md animate-pulse" />
              <h3 className="text-headline-md font-headline-md text-primary dark:text-on-primary mb-2">
                Technical Depth
              </h3>
              <p className="text-on-surface-variant dark:text-on-primary-container/85">
                Deep engineering expertise that bridges the gap between complex challenges and elegant solutions.
              </p>
            </div>
            <div className="val-prop-card p-md neumorphic-raised rounded hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
              <Zap className="w-10 h-10 text-secondary mx-auto mb-md" />
              <h3 className="text-headline-md font-headline-md text-primary dark:text-on-primary mb-2">
                Operational Agility
              </h3>
              <p className="text-on-surface-variant dark:text-on-primary-container/85">
                Round-the-clock development model ensuring rapid delivery cycles for enterprise partners.
              </p>
            </div>
            <div className="val-prop-card p-md neumorphic-raised rounded hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
              <Shield className="w-10 h-10 text-secondary mx-auto mb-md" />
              <h3 className="text-headline-md font-headline-md text-primary dark:text-on-primary mb-2">
                Unwavering Security
              </h3>
              <p className="text-on-surface-variant dark:text-on-primary-container/85">
                Defense-grade cybersecurity integration built into every layer of our architectural design.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview Section (Interactive Flex Accordion) */}
        <section className="services-section py-xl px-margin-mobile md:px-margin-desktop bg-surface-container-low dark:bg-primary-container/10" data-cursor-guide="Core Services - Click cards to expand details">
          <div className="max-w-[1440px] mx-auto space-y-lg">
            <div className="border-b border-outline/30 pb-sm flex justify-between items-end">
              <div>
                <span className="text-label-sm uppercase tracking-widest text-secondary font-bold">
                  Core Expertise
                </span>
                <h2 className="text-headline-lg font-headline-lg text-primary dark:text-on-primary">
                  Core Services
                </h2>
              </div>
              <div className="h-1 w-20 bg-secondary mb-xs"></div>
            </div>

            <div 
              className="flex flex-col lg:flex-row w-full h-auto lg:h-[560px] gap-md transition-all duration-500"
              onMouseLeave={() => setHoveredService(null)}
            >
              {servicesData.map((item, idx) => {
                const Icon = item.icon;
                const isActive = idx === hoveredService;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredService(idx)}
                    onClick={() => setHoveredService(isActive ? null : idx)}
                    className={`relative flex flex-col justify-between overflow-hidden rounded-2xl transition-all duration-700 ease-in-out cursor-pointer group/card border ${
                      isActive
                        ? "lg:flex-[3] services-neumorphic-active text-white border-transparent p-6 md:p-8 pb-8 md:pb-12"
                        : "lg:flex-1 services-neumorphic-inactive border-transparent p-6 pb-8"
                    }`}
                  >
                    {/* Background Image Overlay on Active Card */}
                    {item.bgImage && isActive && (
                      <div className="absolute inset-0 pointer-events-none transition-all duration-1000 group-hover/card:scale-105 z-0">
                        <img
                          src={item.bgImage}
                          alt={item.title}
                          className="w-full h-full object-cover opacity-30 dark:opacity-20"
                        />
                        {/* Dark gradient to ensure high readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-transparent"></div>
                      </div>
                    )}

                    {/* Top Section: Icon & Header */}
                    <div className={`relative z-10 flex ${isActive ? "flex-col" : "flex-row lg:flex-col lg:items-center"} gap-md`}>
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-inner transition-colors duration-500 ${
                          isActive
                            ? "bg-secondary text-white"
                            : "bg-surface-container-high dark:bg-primary text-secondary dark:text-secondary-fixed"
                        }`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>

                      {/* Header Title (Standard for Mobile or Active Card) */}
                      <div className={isActive ? "block" : "lg:hidden"}>
                        <h3 className={`text-headline-md font-headline-md font-bold mb-xs ${isActive ? "text-white" : "text-primary dark:text-on-primary"}`}>
                          {item.title}
                        </h3>
                        <p className={`text-label-sm ${isActive ? "text-white/60" : "text-on-surface-variant"}`}>
                          Service
                        </p>
                      </div>
                    </div>

                    {/* Middle Section (Rotated Title for Inactive Large Cards) */}
                    {!isActive && (
                      <div className="hidden lg:flex flex-1 items-center justify-center w-full relative">
                        <h3 className="absolute text-headline-md font-headline-md font-bold whitespace-nowrap -rotate-90 tracking-widest text-on-surface-variant dark:text-on-primary-container group-hover/card:text-secondary transition-colors duration-300 pointer-events-none uppercase">
                          {item.title}
                        </h3>
                      </div>
                    )}

                    {/* Bottom Section: Description & Action Link */}
                    {isActive ? (
                      <div className="relative z-10 space-y-md mt-md lg:mt-0 animate-fade-in">
                        <p className="text-body-lg text-white/90 max-w-md leading-relaxed">
                          {item.desc}
                        </p>
                        <div className="pt-sm">
                          <Link href={item.href}>
                            <Button
                              variant="secondary"
                              className="flex items-center gap-2 group/btn rounded px-4"
                            >
                              View Details
                              <Plus className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-90" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-end lg:justify-center items-center mt-md lg:mt-0 shrink-0">
                        <div className="w-10 h-10 rounded border border-outline dark:border-primary-fixed-dim/30 flex items-center justify-center group-hover/card:bg-secondary group-hover/card:border-secondary group-hover/card:text-white dark:text-on-primary transition-all duration-500">
                          <Plus className="w-5 h-5 group-hover/card:rotate-90 transition-transform duration-500" />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industry Solutions Bento Grid */}
        <section className="industries-section py-xl px-margin-mobile md:px-margin-desktop bg-surface-container" data-cursor-guide="Industry Specialization - Solutions tailored to vertical-specific demands">
          <div className="max-w-[1440px] mx-auto space-y-lg">
            <div className="mb-lg text-center max-w-2xl mx-auto space-y-sm">
              <h2 className="text-headline-lg font-headline-lg text-primary dark:text-on-primary">
                Industry Specialization
              </h2>
              <p className="text-body-md text-on-surface-variant dark:text-on-primary-container/85">
                We deliver vertical-specific technology solutions tailored to the unique regulatory and operational demands of enterprise industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-gutter h-auto md:h-[600px]">
              {/* Asymmetric Large Bento Item */}
              <div className="industry-card md:col-span-2 md:row-span-2 neumorphic-raised p-md flex flex-col justify-end relative overflow-hidden group min-h-[300px]">
                <ParallaxImage
                  src="/images/cloud_architecture.png"
                  alt="Energy industry background"
                  className="absolute inset-0 w-full h-full opacity-90"
                  imgClassName="group-hover:scale-105 transition-transform duration-700"
                />
                {/* Dark gradient to ensure high readability and pop out the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/45 to-transparent pointer-events-none z-10"></div>
                <div className="relative z-20 space-y-sm">
                  <span className="text-label-sm uppercase tracking-widest text-secondary mb-2 block font-bold">
                    Enterprise Vertical
                  </span>
                  <h3 className="text-headline-lg font-headline-lg text-white">
                    Energy & Power
                  </h3>
                  <p className="text-white/80 pb-md">
                    Optimizing grid reliability and sustainable infrastructure through IoT and predictive analytics.
                  </p>
                  <Link href="/services/it-consulting">
                    <Button variant="secondary">View Sector Details</Button>
                  </Link>
                </div>
              </div>

              {/* Bento Item 2 */}
              <div className="industry-card md:col-span-2 neumorphic-raised p-md flex items-center gap-6 group">
                <div className="w-1/3 h-full overflow-hidden rounded-xl relative hidden sm:block">
                  <ParallaxImage
                     src="/images/growth_metrics.png"
                     alt="Financial stock market trading screens"
                     className="w-full h-full rounded-xl"
                     imgClassName="group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 space-y-sm">
                  <Link href="/industries/fintech" className="group-hover:text-secondary block">
                    <h3 className="text-headline-md font-headline-md text-primary dark:text-on-primary flex items-center gap-sm group-hover:text-secondary transition-colors">
                      <Building2 className="w-5 h-5 text-secondary" />
                      Finance
                    </h3>
                  </Link>
                  <p className="text-on-surface-variant dark:text-on-primary-container/85 text-body-md">
                    Secure, compliant fintech ecosystems for banking leaders.
                  </p>
                </div>
              </div>

              {/* Bento Item 3 */}
              <Link
                href="/industries/healthcare"
                className="industry-card neumorphic-raised p-md space-y-sm block"
              >
                <HeartPulse className="w-8 h-8 text-secondary" />
                <h3 className="text-headline-md font-headline-md text-primary dark:text-on-primary group-hover:text-secondary transition-colors">
                  Healthcare
                </h3>
                <p className="text-label-md text-on-surface-variant dark:text-on-primary-container/85">
                  Interoperable data systems for precision medicine.
                </p>
              </Link>

              {/* Bento Item 4 */}
              <Link
                href="/industries/manufacturing"
                className="industry-card neumorphic-raised p-md space-y-sm block"
              >
                <Factory className="w-8 h-8 text-secondary" />
                <h3 className="text-headline-md font-headline-md text-primary dark:text-on-primary group-hover:text-secondary transition-colors">
                  Manufacturing
                </h3>
                <p className="text-label-md text-on-surface-variant dark:text-on-primary-container/85">
                  Modern industrial automation and supply chain resilience.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Operational Impact Metrics Section */}
        <section className="impact-section py-xl px-margin-mobile md:px-margin-desktop bg-white dark:bg-primary-container/10 border-t border-outline/30" data-cursor-guide="Quantified Impact - See the measurable results we deliver">
          <div className="max-w-[1440px] mx-auto space-y-lg">
            <div className="text-center max-w-2xl mx-auto space-y-sm">
              <span className="text-label-sm uppercase tracking-widest text-secondary font-bold">
                Quantified Impact
              </span>
              <h2 className="text-headline-lg font-headline-lg text-primary dark:text-on-primary">
                Our Impact
              </h2>
              <p className="text-body-md text-on-surface-variant dark:text-on-primary-container/85">
                We deliver measurable operational excellence, combining technical depth with verified performance indicators.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter text-center">
              <div className="impact-card p-md xl:p-lg neumorphic-raised rounded hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                <div className="text-metric-value font-display-lg text-primary dark:text-on-primary font-bold mb-xs">
                  <MetricCounter value="-35%" />
                </div>
                <h4 className="text-headline-md font-headline-md text-secondary mb-2">
                  Cloud Overhead
                </h4>
                <p className="text-on-surface-variant dark:text-on-primary-container/80 text-label-sm leading-relaxed">
                  Average hosting overhead savings realized through automated resource scale sizing.
                </p>
              </div>

              <div className="impact-card p-md xl:p-lg neumorphic-raised rounded hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                <div className="text-metric-value font-display-lg text-primary dark:text-on-primary font-bold mb-xs">
                  <MetricCounter value="99.99%" />
                </div>
                <h4 className="text-headline-md font-headline-md text-secondary mb-2">
                  System Uptime
                </h4>
                <p className="text-on-surface-variant dark:text-on-primary-container/80 text-label-sm leading-relaxed">
                  Guaranteed service availability delivered through multi-region Kubernetes routing.
                </p>
              </div>

              <div className="impact-card p-md xl:p-lg neumorphic-raised rounded hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                <div className="text-metric-value font-display-lg text-primary dark:text-on-primary font-bold mb-xs">
                  <MetricCounter value="100%" />
                </div>
                <h4 className="text-headline-md font-headline-md text-secondary mb-2">
                  Organic Traffic
                </h4>
                <p className="text-on-surface-variant dark:text-on-primary-container/80 text-label-sm leading-relaxed">
                  Traffic increase realized across search engines by deploying semantic layouts and CWV fixes.
                </p>
              </div>

              <div className="impact-card p-md xl:p-lg neumorphic-raised rounded hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                <div className="text-metric-value font-display-lg text-primary dark:text-on-primary font-bold mb-xs">
                  <MetricCounter value="10x" />
                </div>
                <h4 className="text-headline-md font-headline-md text-secondary mb-2">
                  Pipeline Velocity
                </h4>
                <p className="text-on-surface-variant dark:text-on-primary-container/80 text-label-sm leading-relaxed">
                  Acceleration of software release intervals through standardized CI/CD pipelines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Transformation Roadmap (Horizontal Scroll Section) */}
        <section className="roadmap-section py-xl bg-surface-container-lowest overflow-hidden min-h-screen flex flex-col justify-center border-t border-outline/30" data-cursor-guide="Strategic Roadmap - Our phased approach to engineering digital supremacy">
          <div className="max-w-[1440px] w-full mx-auto px-margin-mobile md:px-margin-desktop mb-lg flex flex-col md:flex-row md:justify-between md:items-end gap-md">
            <div className="space-y-sm max-w-2xl">
              <span className="text-label-sm uppercase tracking-widest text-secondary font-bold animate-pulse">
                Execution Framework
              </span>
              <h2 className="text-headline-lg font-headline-lg text-primary dark:text-on-primary">
                Strategic Roadmap
              </h2>
              <p className="text-body-md text-on-surface-variant dark:text-on-primary-container/85">
                Our systematic, phased approach to engineering digital supremacy, operational resilience, and enterprise-grade tech stacks.
              </p>
            </div>
            <div className="text-[12px] font-mono font-bold text-outline uppercase tracking-wider hidden md:block select-none">
              Scroll Down to Traverse // ➔
            </div>
          </div>

          <div className="roadmap-horizontal-wrapper relative w-full flex items-center">
            <div className="roadmap-horizontal-track flex gap-xl pl-[10%] pr-[25%] py-md relative">
              {/* Connector line between phase cards */}
              <div className="absolute top-[45px] left-0 right-0 h-[2px] bg-outline-variant/60 z-0"></div>

              {roadmapSteps.map((step, idx) => (
                <div 
                  key={idx} 
                  className="roadmap-horizontal-card w-[350px] shrink-0 flex flex-col items-start relative z-10"
                >
                  {/* Indicator Dot */}
                  <div className="bg-secondary text-on-secondary w-14 h-14 rounded-full flex items-center justify-center font-bold text-headline-md border-4 border-surface shadow-sm mb-md dark:bg-secondary-fixed dark:text-on-secondary-fixed shrink-0">
                    •
                  </div>
                  {/* Phase Details Card */}
                  <div className="neumorphic-raised p-lg w-full bg-white dark:bg-primary-container rounded-2xl border border-outline-variant/30 space-y-sm">
                    <span className="text-secondary dark:text-secondary-fixed text-label-sm font-bold uppercase tracking-wider block">
                      {step.phase}
                    </span>
                    <h4 className="text-primary dark:text-on-primary font-headline-md text-headline-md font-bold">
                      {step.title}
                    </h4>
                    <p className="text-on-surface-variant dark:text-on-primary-container/85 text-body-md leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Compliance Section (Trust & Care) */}
        <section className="security-section py-xl px-margin-mobile md:px-margin-desktop bg-surface-container border-y border-outline/30" data-cursor-guide="Enterprise Shield - Uncompromising security & trust standards">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-xl items-center">
            <div className="security-text lg:col-span-5 space-y-md">
              <span className="text-label-sm uppercase tracking-widest text-secondary font-bold">
                Enterprise Shield
              </span>
              <h2 className="text-headline-lg font-headline-lg text-primary dark:text-on-primary">
                Sovereign Security. Absolute Trust.
              </h2>
              <p className="text-body-lg text-on-surface-variant dark:text-on-primary-container/85 leading-relaxed">
                We believe that trust is engineered, not assumed. Every line of code and infrastructure component we deploy complies with strict security frameworks to protect your data assets.
              </p>
              <div className="grid grid-cols-2 gap-md pt-sm">
                <div className="flex items-center gap-xs">
                  <Shield className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-label-md font-bold text-primary dark:text-on-primary">Zero-Trust Shield</span>
                </div>
                <div className="flex items-center gap-xs">
                  <Shield className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-label-md font-bold text-primary dark:text-on-primary">Data Security</span>
                </div>
                <div className="flex items-center gap-xs">
                  <Shield className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-label-md font-bold text-primary dark:text-on-primary">Access Control</span>
                </div>
                <div className="flex items-center gap-xs">
                  <Shield className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-label-md font-bold text-primary dark:text-on-primary">Privacy Secure</span>
                </div>
              </div>
            </div>

             <div className="security-visual lg:col-span-7 neumorphic-raised p-md md:p-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl"></div>
              <h4 className="font-headline-md text-headline-md text-primary dark:text-on-primary border-b border-outline/30 pb-xs mb-md">
                Compliance Standards & Safe Practices
              </h4>
              <ul className="space-y-sm text-body-md text-on-surface-variant dark:text-on-primary-container/85">
                <li className="flex gap-sm">
                  <span className="text-secondary font-bold">Approach //</span>
                  <span><strong>Zero-Trust Architecture:</strong> Micro-segmented database access requiring authorization tokens for all network transactions.</span>
                </li>
                <li className="flex gap-sm">
                  <span className="text-secondary font-bold">Testing //</span>
                  <span><strong>Static Code Testing:</strong> Regular CI/CD pipeline scans with code analyzers to eliminate code vulnerabilities before deployment.</span>
                </li>
                <li className="flex gap-sm">
                  <span className="text-secondary font-bold">Encryption //</span>
                  <span><strong>Encryption in Transit & Rest:</strong> Highly encrypted databases and secure edge CDN connection rules.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Core Tech Stack Section */}
        <section className="techstack-section py-xl px-margin-mobile md:px-margin-desktop bg-white dark:bg-primary-container/10" data-cursor-guide="Engineering Stack - Scalable and modern core technologies">
          <div className="max-w-[1440px] mx-auto space-y-lg">
            <div className="text-center max-w-2xl mx-auto space-y-sm">
              <span className="text-label-sm uppercase tracking-widest text-secondary font-bold">
                Engineering Stack
              </span>
              <h2 className="text-headline-lg font-headline-lg text-primary dark:text-on-primary">
                Modern Core Technologies
              </h2>
              <p className="text-body-md text-on-surface-variant dark:text-on-primary-container/85">
                We develop solutions using scalable and modern software core engineering tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* Frontend Card */}
              <div className="techstack-card p-lg neumorphic-raised">
                <h3 className="text-headline-md font-headline-md text-primary dark:text-on-primary mb-md border-b border-outline/30 pb-xs">
                  Frontend & Experience
                </h3>
                <div className="flex flex-wrap gap-xs mb-md">
                  {["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "Framer"].map((item, idx) => (
                    <span key={idx} className="px-sm py-1 bg-surface-container text-primary dark:bg-primary dark:text-on-primary font-bold text-[11px] rounded">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-on-surface-variant dark:text-on-primary-container/80 text-label-md leading-relaxed">
                  We craft ultra-fast, search-engine-optimized frontend architectures featuring smooth transitions, atomic component layouts, and modular design.
                </p>
              </div>

              {/* Backend & DB Card */}
              <div className="techstack-card p-lg neumorphic-raised">
                <h3 className="text-headline-md font-headline-md text-primary dark:text-on-primary mb-md border-b border-outline/30 pb-xs">
                  Backend & Database
                </h3>
                <div className="flex flex-wrap gap-xs mb-md">
                  {["Go (Golang)", "Rust", "Spring Boot", "PostgreSQL", "Redis", "Snowflake"].map((item, idx) => (
                    <span key={idx} className="px-sm py-1 bg-surface-container text-primary dark:bg-primary dark:text-on-primary font-bold text-[11px] rounded">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-on-surface-variant dark:text-on-primary-container/80 text-label-md leading-relaxed">
                  Our databases are designed for multi-region clustering, high read-write speeds, and compliance. Microservices are built using low-latency compile languages.
                </p>
              </div>

              {/* DevOps & Cloud Card */}
              <div className="techstack-card p-lg neumorphic-raised">
                <h3 className="text-headline-md font-headline-md text-primary dark:text-on-primary mb-md border-b border-outline/30 pb-xs">
                  Infrastructure & DevOps
                </h3>
                <div className="flex flex-wrap gap-xs mb-md">
                  {["Docker", "Kubernetes", "Terraform", "AWS", "Azure CDNs", "GitHub Actions"].map((item, idx) => (
                    <span key={idx} className="px-sm py-1 bg-surface-container text-primary dark:bg-primary dark:text-on-primary font-bold text-[11px] rounded">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-on-surface-variant dark:text-on-primary-container/80 text-label-md leading-relaxed">
                  We define system assets declaratively as code (IaC) to guarantee high uptime redundancy, zero-downtime hot-deployments, and secure server management.
                </p>
              </div>
            </div>
          </div>
        </section>



        {/* Final CTA */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
