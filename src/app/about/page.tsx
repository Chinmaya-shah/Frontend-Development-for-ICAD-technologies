"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ShieldCheck, Target, Award, Compass, Heart, MapPin, Building, Globe } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import Button from "@/components/ui/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParallaxImage from "@/components/ui/ParallaxImage";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const values = [
  {
    title: "Integrity",
    desc: "Upholding the highest ethical standards in every engagement and technical solution.",
    icon: ShieldCheck
  },
  {
    title: "Precision",
    desc: "Meticulous attention to detail that ensures high-performance and resilient results.",
    icon: Award
  },
  {
    title: "Innovation",
    desc: "Pioneering new methodologies to solve problems that others deem unsolvable.",
    icon: Compass
  },
  {
    title: "Unity",
    desc: "Collaborating as a single unified team to leverage our collective expertise.",
    icon: Heart
  }
];

const operationalPillars = [
  {
    title: "Strategic Advisory",
    role: "Governance & Enterprise Risk",
    desc: "Guiding enterprise digital infrastructure, policy framework alignment, and tech stack compliance models.",
    image: "/images/it_consulting.png"
  },
  {
    title: "Advanced Engineering",
    role: "AI Integration & Cloud Architecture",
    desc: "Deploying high-performance computing clusters, autonomous data pipelines, and distributed cloud configurations.",
    image: "/images/ai_solutions.png"
  },
  {
    title: "Operational Logistics",
    role: "DevOps & Continuous Orchestration",
    desc: "Automating software release cycles, standardized CI/CD pipelines, and high-availability systems scaling.",
    image: "/images/devops.png"
  }
];

const milestones = [
  {
    year: "2003",
    title: "Foundation",
    desc: "ICAD established to provide specialized structural engineering for the finance sector.",
    label: "SINCE START"
  },
  {
    year: "2009",
    title: "Digital Pivot",
    desc: "Successfully executed first national-scale digital infrastructure project.",
    label: "EXPANSION"
  },
  {
    year: "2026",
    title: "Enterprise Scale",
    desc: "Inauguration of technical centers and a presence spanning 45 countries.",
    label: "PRESENT DAY"
  }
];

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Story Bento Items
    gsap.fromTo(
      ".story-card",
      { opacity: 0, y: 40, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".story-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Mission & Vision columns
    gsap.fromTo(
      ".mission-column",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".mission-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ".vision-column",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".mission-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Core Values Card Grid
    gsap.fromTo(
      ".value-card",
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".values-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Enterprise Scale Text & Image
    gsap.fromTo(
      ".scale-text",
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".scale-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ".scale-image",
      { opacity: 0, scale: 0.95, x: 40 },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1.0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".scale-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Leaders grid
    gsap.fromTo(
      ".leader-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".leaders-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Pinned Horizontal Timeline Scroll
    const timelineSection = pageRef.current?.querySelector(".evolution-section");
    const horizontalTrack = pageRef.current?.querySelector(".timeline-horizontal-track");
    
    if (timelineSection && horizontalTrack) {
      const scrollAmount = horizontalTrack.scrollWidth - window.innerWidth;
      
      if (scrollAmount > 0) {
        gsap.to(horizontalTrack, {
          x: -scrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: timelineSection,
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

    // Careers CTA
    gsap.fromTo(
      ".careers-cta",
      { opacity: 0, scale: 0.96 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".careers-cta-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: pageRef });

  return (
    <div ref={pageRef}>
      <title>About Us | ICAD Technologies</title>
      <meta name="description" content="Discover ICAD Technologies' legacy, architectural methodologies, core engineering pillars, and global operational presence spanning 45 countries." />
      <Navbar />
      <main className="flex-1 mt-20">
        {/* Hero Section */}
        <HeroSection
          title="Engineering the Future of Enterprise Technology."
          tagline="Enterprise Innovation"
          description="For over three decades, ICAD Technologies has been the silent engine behind complex infrastructure, digital transformation, and sovereign security solutions across four continents."
          heroImage="/images/about_office.png"
          heroImageAlt="Futuristic office buildings against twilight skies."
          primaryBtnText="Download Fact Sheet"
          primaryBtnLink="#"
          isDark={true}
          minHeightClass="min-h-[819px]"
        />

        {/* Our Story (Bento Style) */}
        <section className="story-section py-xl px-margin-mobile md:px-margin-desktop bg-surface" data-cursor-guide="Our Story - Two decades of enterprise technical excellence">
          <div className="max-w-7xl mx-auto space-y-lg">
            <div className="border-b border-outline-variant/30 pb-xs">
              <h2 className="text-headline-lg font-headline-lg text-primary">Our Story</h2>
              <div className="h-1 w-24 bg-secondary mt-2"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
              <div className="story-card lg:col-span-8 p-lg bg-surface-container-low rounded-xl border border-outline-variant flex flex-col justify-center space-y-md dark:bg-primary-container dark:border-primary-fixed-dim/20">
                <p className="text-primary font-body-lg text-body-lg italic leading-relaxed dark:text-on-primary">
                  &ldquo;Innovation is not just about what we build; it&apos;s about the resilience we provide to the systems that run modern enterprise.&rdquo;
                </p>
                <p className="text-on-surface-variant dark:text-on-primary-container/90 text-body-md leading-relaxed">
                  Founded in 2003 as a specialized engineering firm, ICAD Technologies has evolved into a premier powerhouse in technology consulting. We bridge the gap between legacy systems and the autonomous future, delivering precision at scale for governments and enterprise corporations.
                </p>
              </div>

              <div className="story-card lg:col-span-4 bg-primary rounded-xl p-lg flex flex-col justify-between text-on-primary min-h-[200px]">
                <div className="text-display-lg font-display-lg text-secondary">20+</div>
                <div className="text-label-md font-label-md uppercase tracking-widest opacity-85">
                  Years of Excellence
                </div>
              </div>

              <div className="story-card lg:col-span-12 h-64 rounded-xl overflow-hidden relative group">
                <ParallaxImage
                  src="/images/about_mission.png"
                  alt="High-tech mission control center dashboard"
                  className="w-full h-full"
                  imgClassName="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/10 transition-colors z-20 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mission-section py-xl px-margin-mobile md:px-margin-desktop bg-primary text-on-primary overflow-hidden relative" data-cursor-guide="Mission & Vision - Safeguarding tomorrow's tech infrastructure">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-secondary opacity-10 rounded-full blur-3xl"></div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-xl relative z-10">
            <div className="mission-column space-y-md">
              <h2 className="text-secondary dark:text-secondary-fixed font-headline-lg text-headline-lg flex items-center gap-sm">
                <Target className="w-8 h-8 text-secondary dark:text-secondary-fixed" />
                Our Mission
              </h2>
              <p className="font-body-lg text-body-lg leading-relaxed opacity-95">
                To architect and safeguard the critical technological infrastructure of tomorrow, enabling our clients to navigate complexity with absolute certainty and strategic advantage.
              </p>
            </div>
            <div className="vision-column space-y-md">
              <h2 className="text-secondary dark:text-secondary-fixed font-headline-lg text-headline-lg flex items-center gap-sm">
                <Compass className="w-8 h-8 text-secondary dark:text-secondary-fixed" />
                Our Vision
              </h2>
              <p className="font-body-lg text-body-lg leading-relaxed opacity-95">
                To be the premier gold standard for technical excellence, where human ingenuity and advanced technology converge to solve the most demanding challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="values-section py-xl px-margin-mobile md:px-margin-desktop bg-surface" data-cursor-guide="Driven by Core Values - Relentless pursuit of engineering perfection">
          <div className="max-w-7xl mx-auto space-y-lg">
            <div className="text-center max-w-2xl mx-auto space-y-sm">
              <h2 className="text-primary font-headline-lg text-headline-lg">Driven by Core Values</h2>
              <p className="text-on-surface-variant text-body-md leading-relaxed">
                Our culture is defined by a relentless pursuit of perfection and an unwavering commitment to our clients&apos; success.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter max-w-7xl mx-auto">
              {values.map((v, idx) => {
                const Icon = v.icon;
                return (
                  <div
                    key={idx}
                    className="value-card p-lg bg-surface shadow-sm border border-outline-variant hover:border-secondary transition-all group rounded-xl dark:bg-primary-container dark:border-primary-fixed-dim/20"
                  >
                    <Icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors mb-md dark:text-on-primary" />
                    <h4 className="text-primary dark:text-on-primary font-headline-md text-headline-md mb-sm">
                      {v.title}
                    </h4>
                    <p className="text-on-surface-variant dark:text-on-primary-container/85 text-body-md leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Scale */}
        <section className="scale-section py-xl bg-surface-container-low px-margin-mobile md:px-margin-desktop overflow-hidden" data-cursor-guide="Strategic Scale - Distributing expertise across global centers">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-xl items-center">
            <div className="scale-text lg:w-1/2 space-y-md">
              <h2 className="text-primary dark:text-on-primary font-headline-lg text-headline-lg">
                Enterprise Scale, Strategic Expertise
              </h2>
              <p className="text-on-surface-variant dark:text-on-primary-container/85 text-body-lg">
                Our distributed network of technology centers ensures continuous operational support for our enterprise partners.
              </p>
              <div className="space-y-md pt-sm">
                <div className="flex items-start gap-md">
                  <MapPin className="w-6 h-6 text-secondary dark:text-secondary-fixed shrink-0 mt-1" />
                  <div>
                    <p className="font-headline-md text-headline-md text-primary dark:text-on-primary">Corporate Office</p>
                    <p className="text-on-surface-variant dark:text-on-primary-container/80 text-body-md">
                      Central Technology Park, Technology Sector
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-md">
                  <Building className="w-6 h-6 text-secondary dark:text-secondary-fixed shrink-0 mt-1" />
                  <div>
                    <p className="font-headline-md text-headline-md text-primary dark:text-on-primary">Research & Development</p>
                    <p className="text-on-surface-variant dark:text-on-primary-container/80 text-body-md">
                      Research Sector, Technology Park Block
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="scale-image lg:w-1/2 w-full h-[400px] rounded-2xl overflow-hidden shadow-xl relative">
              <ParallaxImage
                src="/images/about_office.png"
                alt="Technology centers network connection nodes"
                className="w-full h-full"
                imgClassName="hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* Operational Pillars */}
        <section className="leaders-section py-xl px-margin-mobile md:px-margin-desktop bg-surface" data-cursor-guide="Operational Pillars - Core functional groups at ICAD">
          <div className="max-w-7xl mx-auto space-y-lg">
            <div className="text-center max-w-2xl mx-auto space-y-xs">
              <h2 className="text-primary font-headline-lg text-headline-lg">Operational Pillars</h2>
              <p className="text-on-surface-variant text-body-md leading-relaxed">
                A multi-disciplinary ecosystem committed to engineering excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-xl max-w-6xl mx-auto">
              {operationalPillars.map((pillar, idx) => (
                <div key={idx} className="leader-card group space-y-md">
                  <div className="aspect-[4/5] bg-surface-container-highest mb-md overflow-hidden rounded-lg relative shadow-sm">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                      src={pillar.image}
                      alt={pillar.title}
                    />
                  </div>
                  <h4 className="text-primary dark:text-on-primary font-headline-md text-headline-md">{pillar.title}</h4>
                  <p className="text-secondary dark:text-secondary-fixed font-label-md text-label-md uppercase">
                    {pillar.role}
                  </p>
                  <p className="text-on-surface-variant dark:text-on-primary-container/85 text-label-sm font-label-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* History Evolution Timeline */}
        <section className="evolution-section py-xl bg-surface-container-lowest overflow-hidden min-h-screen flex flex-col justify-center" data-cursor-guide="Our Evolution - Key milestones in our global trajectory">
          <div className="container mx-auto px-margin-mobile md:px-margin-desktop mb-md">
            <h2 className="text-primary font-headline-lg text-headline-lg text-center dark:text-on-primary">
              Our Evolution
            </h2>
          </div>
          <div className="timeline-horizontal-wrapper relative w-full flex items-center">
            <div className="timeline-horizontal-track flex gap-xl pl-[20%] pr-[20%] py-md relative">
              {/* Horizontal Connector Line */}
              <div className="absolute top-[64px] left-0 right-0 h-[2px] bg-outline-variant/60 z-0"></div>
              
              {milestones.map((ms, idx) => (
                <div key={idx} className="timeline-horizontal-card w-[350px] shrink-0 flex flex-col items-center text-center relative z-10">
                  {/* Timeline Dot/Year */}
                  <div className="bg-secondary text-on-secondary w-20 h-20 shrink-0 rounded-full flex items-center justify-center font-bold text-headline-md border-4 border-surface shadow-sm mb-md dark:bg-secondary-fixed dark:text-on-secondary-fixed">
                    {ms.year}
                  </div>
                  {/* Text Details */}
                  <div className="bg-surface p-lg rounded-xl border border-outline-variant shadow-sm w-full dark:bg-primary-container">
                    <span className="text-secondary dark:text-secondary-fixed text-label-sm font-bold uppercase tracking-wider block mb-xs">
                      {ms.label}
                    </span>
                    <h4 className="text-primary dark:text-on-primary font-headline-md text-headline-md mb-sm">
                      {ms.title}
                    </h4>
                    <p className="text-on-surface-variant dark:text-on-primary-container/85 text-body-md leading-relaxed">
                      {ms.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Careers CTA */}
        <section className="careers-cta-section py-xl px-margin-mobile md:px-margin-desktop" data-cursor-guide="Build the Future - Explore open engineering roles at ICAD">
          <div className="careers-cta max-w-7xl mx-auto bg-primary rounded-3xl overflow-hidden relative group">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <img
                className="w-full h-full object-cover"
                src="/images/about_office.png"
                alt="Open-plan Scandinavian office visual"
              />
            </div>
            <div className="relative z-10 p-lg md:p-xl flex flex-col items-center text-center space-y-md">
              <h2 className="text-on-primary font-display-lg text-display-lg-mobile md:text-display-lg leading-tight">
                Build the Future with Us
              </h2>
              <p className="text-on-primary/75 max-w-2xl font-body-lg text-body-lg">
                We are looking for elite engineers, visionary consultants, and daring problem solvers to join our global mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-md pt-md">
                <Link href="/careers">
                  <Button variant="secondary" size="lg">Explore Global Careers</Button>
                </Link>
                <Link href="/careers#life">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    Life at ICAD
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
