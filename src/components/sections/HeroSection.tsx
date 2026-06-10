"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";
import Button from "../ui/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ParallaxImage from "../ui/ParallaxImage";
import MetricCounter from "../ui/MetricCounter";
import ScrollReveal from "../ui/ScrollReveal";
import RotatingBadge from "../ui/RotatingBadge";
import Magnetic from "../ui/Magnetic";

interface HeroSectionProps {
  title: React.ReactNode;
  tagline?: string;
  description: string;
  heroImage?: string;
  heroImageAlt?: string;
  primaryBtnText?: string;
  primaryBtnLink?: string;
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
  isDark?: boolean;
  metrics?: { value: string; label: string }[];
  minHeightClass?: string;
}

export default function HeroSection({
  title,
  tagline,
  description,
  heroImage,
  heroImageAlt,
  primaryBtnText,
  primaryBtnLink = "/contact",
  secondaryBtnText,
  secondaryBtnLink = "#",
  isDark = false,
  metrics,
  minHeightClass = "min-h-[870px]",
}: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(
      ".hero-tagline",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
    );

    tl.fromTo(
      ".hero-title",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2 },
      "-=0.6"
    );

    tl.fromTo(
      ".hero-description",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.0 },
      "-=0.8"
    );

    tl.fromTo(
      ".hero-buttons",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.6"
    );

    if (containerRef.current?.querySelector(".hero-metric")) {
      tl.fromTo(
        ".hero-metric",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.2 },
        "-=0.4"
      );
    }

    if (containerRef.current?.querySelector(".hero-image-wrapper")) {
      gsap.fromTo(
        ".hero-image-wrapper",
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out", delay: 0.3 }
      );
    }
  }, { scope: containerRef });

  if (isDark) {
    return (
      <section 
        ref={containerRef}
        className={`hero-gradient relative py-xl flex items-center overflow-hidden ${minHeightClass}`}
        data-cursor-guide="Welcome to ICAD Technologies - Let's build your enterprise future"
      >
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="max-w-[1440px] w-full mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-xl relative z-10 items-center">
          <div className="flex flex-col justify-center space-y-md">
            {tagline && (
              <span className="hero-tagline text-secondary font-bold tracking-widest text-label-sm uppercase dark:text-secondary-fixed">
                {tagline}
              </span>
            )}
            <h1 className="hero-title text-white font-display-lg text-display-lg-mobile md:text-display-lg leading-tight mb-md">
              {typeof title === "string" ? (
                <ScrollReveal animation="reveal-words">{title}</ScrollReveal>
              ) : (
                title
              )}
            </h1>
            <p className="hero-description text-zinc-300 font-body-lg text-body-lg max-w-xl">
              {description}
            </p>
            <div className="hero-buttons flex flex-wrap gap-md pt-4">
              {primaryBtnText && (
                <Magnetic>
                  <Link href={primaryBtnLink}>
                    <Button variant="neumorphic-orange" size="lg">
                      {primaryBtnText}
                    </Button>
                  </Link>
                </Magnetic>
              )}
              {secondaryBtnText && (
                <Magnetic>
                  <Link href={secondaryBtnLink}>
                    <Button variant="neumorphic-dark" size="lg">
                      {secondaryBtnText}
                    </Button>
                  </Link>
                </Magnetic>
              )}
            </div>
            {metrics && metrics.length > 0 && (
              <div className="flex gap-lg pt-md">
                {metrics.map((m, idx) => (
                  <div key={idx} className="hero-metric border-l-2 border-secondary pl-sm">
                    <div className="text-2xl md:text-3xl font-bold text-white">
                      <MetricCounter value={m.value} />
                    </div>
                    <div className="text-label-sm text-zinc-400 uppercase">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {heroImage && (
            <div className="hero-image-wrapper hidden lg:block relative h-[450px] w-full">
              <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-3xl"></div>
              <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-level-2 border border-white/10">
                <ParallaxImage
                  src={heroImage}
                  alt={heroImageAlt || (typeof title === "string" ? title : "Hero Image")}
                  className="w-full h-full rounded-2xl"
                  imgClassName="hover:scale-105"
                />
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={containerRef}
      className={`relative flex items-center overflow-hidden px-margin-mobile md:px-margin-desktop py-xl bg-surface ${minHeightClass}`}
      data-cursor-guide="Welcome to ICAD Technologies - Let's build your enterprise future"
    >
      <div className="absolute inset-0 hero-pattern pointer-events-none"></div>

      <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-lg items-center relative z-10">
        <div className="space-y-md max-w-xl">
          {tagline && (
            <div className="hero-tagline inline-flex items-center gap-2 bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-label-sm font-bold uppercase">
              <Globe className="w-4 h-4 text-primary" />
              {tagline}
            </div>
          )}
          <h1 className="hero-title text-display-lg-mobile md:text-display-lg font-display-lg text-primary leading-tight">
            {typeof title === "string" ? (
              <ScrollReveal animation="reveal-words">{title}</ScrollReveal>
            ) : (
              title
            )}
          </h1>
          <p className="hero-description text-body-lg text-on-surface-variant leading-relaxed">
            {description}
          </p>
          <div className="hero-buttons flex flex-wrap gap-4 pt-4">
            {primaryBtnText && (
              <Magnetic>
                <Link href={primaryBtnLink}>
                  <Button
                    variant="neumorphic-orange"
                    size="lg"
                    className="group flex items-center gap-2"
                  >
                    {primaryBtnText}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Magnetic>
            )}
            {secondaryBtnText && (
              <Magnetic>
                <Link href={secondaryBtnLink}>
                  <Button variant="neumorphic" size="lg">
                    {secondaryBtnText}
                  </Button>
                </Link>
              </Magnetic>
            )}
          </div>
          {metrics && metrics.length > 0 && (
            <div className="flex gap-lg pt-md">
              {metrics.map((m, idx) => (
                <div key={idx} className="hero-metric border-l-2 border-secondary pl-sm">
                  <div className="text-2xl md:text-3xl font-bold text-primary">
                    <MetricCounter value={m.value} />
                  </div>
                  <div className="text-label-sm text-on-surface-variant uppercase">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {heroImage && (
          <div className="hero-image-wrapper relative hidden lg:block w-full h-[450px]">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary-fixed opacity-20 rounded-full blur-3xl text-secondary"></div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary-fixed opacity-30 rounded-full blur-3xl text-primary"></div>
            <div className="rounded-2xl overflow-hidden shadow-level-2 border border-outline-variant w-full h-full relative">
              <ParallaxImage
                src={heroImage}
                alt={heroImageAlt || (typeof title === "string" ? title : "Hero Image")}
                className="w-full h-full rounded-2xl"
                imgClassName="hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 z-20 bg-white dark:bg-primary-container p-2 rounded-full border border-outline-variant shadow-level-2">
              <RotatingBadge
                text="• ENTERPRISE TECH EXCELLENCE • STRATEGIC DIGITIZATION "
                centerText="ICAD"
                size={120}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
