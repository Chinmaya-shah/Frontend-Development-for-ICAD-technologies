"use client";

import React, { useState, useRef } from "react";
import { Award, Globe, Heart, BookOpen, Send, Terminal, Brain } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CareersFilterGrid from "@/components/features/CareersFilterGrid";
import Button from "@/components/ui/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParallaxImage from "@/components/ui/ParallaxImage";
import Magnetic from "@/components/ui/Magnetic";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CareersPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [talentPoolEmail, setTalentPoolEmail] = useState("");
  const [talentPoolSubmitted, setTalentPoolSubmitted] = useState(false);

  useGSAP(() => {
    // Hero Entrance
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      ".careers-hero-tag, .careers-hero-title, .careers-hero-desc, .careers-hero-buttons",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }
    );

    // Life at ICAD Bento Reveal
    gsap.fromTo(
      ".gallery-card",
      { opacity: 0, y: 40, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".gallery-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Testimonials
    gsap.fromTo(
      ".testimonial-card",
      { opacity: 0, y: 40, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Benefits section
    const benefitsTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".benefits-section",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
    benefitsTl.fromTo(
      ".benefits-text h2, .benefits-text p",
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }
    );
    benefitsTl.fromTo(
      ".benefit-item",
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: "power3.out" },
      "-=0.3"
    );
    benefitsTl.fromTo(
      ".benefits-image",
      { opacity: 0, scale: 0.95, x: 30 },
      { opacity: 1, scale: 1, x: 0, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    );
  }, { scope: containerRef });

  const handleTalentPoolSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!talentPoolEmail.trim()) return;
 
    try {
      const response = await fetch("/api/talent-pool", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: talentPoolEmail }),
      });
      const result = await response.json();
      console.log("Talent Pool API Response:", result);
      setTalentPoolSubmitted(true);
      setTalentPoolEmail("");
    } catch (error) {
      console.error("Talent Pool API Error:", error);
      setTalentPoolSubmitted(true);
      setTalentPoolEmail("");
    }
  };

  return (
    <div ref={containerRef}>
      <title>Careers | Join Our Engineering Team | ICAD Technologies</title>
      <meta name="description" content="Explore opportunities in software engineering, cloud architecture, cybersecurity, and data analytics. Build high-performance solutions with ICAD Technologies." />
      <Navbar />
      <main className="flex-1 mt-20">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center overflow-hidden bg-primary text-on-primary">
          <div className="absolute inset-0 opacity-20 pointer-events-none w-full h-full">
            <ParallaxImage
              src="/images/ai_solutions.png"
              alt="High-ceilinged modern office interior"
              className="w-full h-full"
              imgClassName="hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10"></div>
          
          <div className="relative w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop z-10 py-xl space-y-md">
            <span className="careers-hero-tag inline-block px-md py-1 bg-secondary text-on-secondary font-label-sm text-label-sm rounded-full font-bold uppercase">
              Careers at ICAD
            </span>
            <h1 className="careers-hero-title text-display-lg-mobile md:text-display-lg font-display-lg leading-tight max-w-3xl">
              Engineer the future of enterprise technology.
            </h1>
            <p className="careers-hero-desc text-primary-fixed max-w-2xl opacity-90 leading-relaxed">
              Join a team of elite architects, data scientists, and strategists solving the most complex technical challenges. Your expertise, amplified by our strategic reach.
            </p>
            <div className="careers-hero-buttons flex flex-wrap gap-md pt-md">
              <a href="#jobs">
                <Button variant="secondary" size="lg">View Openings</Button>
              </a>
              <a href="#life">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">Life at ICAD</Button>
              </a>
            </div>
          </div>
        </section>

        {/* Life at ICAD Gallery (Bento Layout) */}
        <section className="gallery-section py-xl px-margin-mobile md:px-margin-desktop bg-surface" id="life">
          <div className="max-w-[1280px] mx-auto space-y-lg">
            <div className="mb-lg">
              <h2 className="text-headline-lg font-headline-lg text-primary dark:text-on-primary">
                Life at ICAD Technologies
              </h2>
              <p className="text-body-md text-on-surface-variant dark:text-on-primary-container/85 max-w-2xl mt-sm">
                A culture built on radical transparency, technical mastery, and the pursuit of excellence. We don&apos;t just build software; we architect the backbone of industries.
              </p>
            </div>
            
            {/* Bento Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-md md:grid-rows-2">
              <div className="gallery-card md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl shadow-sm aspect-[4/3] md:aspect-auto min-h-[300px] w-full h-full">
                <ParallaxImage
                  src="/images/about_mission.png"
                  alt="Senior engineers collaborating in high-tech war room"
                  className="w-full h-full"
                  imgClassName="group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent z-20 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 p-md w-full z-30">
                  <h4 className="text-on-primary font-headline-md">Collaborative Mastery</h4>
                </div>
              </div>
              
              <div className="gallery-card relative group overflow-hidden rounded-xl shadow-sm h-[200px] md:h-auto w-full">
                <ParallaxImage
                  src="/images/cloud_architecture.png"
                  alt="High-end computer hardware and screens showing code"
                  className="w-full h-full"
                  imgClassName="group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent z-20 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 p-md w-full z-30">
                  <span className="text-on-primary font-label-md font-bold">Cutting-edge Stack</span>
                </div>
              </div>
              
              <div className="gallery-card relative group overflow-hidden rounded-xl shadow-sm h-[200px] md:h-auto w-full">
                <ParallaxImage
                  src="/images/enterprise_erp.png"
                  alt="Meeting in a glass-walled conference room"
                  className="w-full h-full"
                  imgClassName="group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent z-20 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 p-md w-full z-30">
                  <span className="text-on-primary font-label-md font-bold">Strategic Solutions</span>
                </div>
              </div>
              
              <div className="gallery-card md:col-span-2 relative group overflow-hidden rounded-xl shadow-sm h-[200px] md:h-auto w-full">
                <ParallaxImage
                  src="/images/about_office.png"
                  alt="Modern Scandinavian office cafeteria and lounge area"
                  className="w-full h-full"
                  imgClassName="group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent z-20 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 p-md w-full z-30">
                  <span className="text-on-primary font-label-md font-bold">Excellence in Workspace</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials-section py-xl bg-surface-container-low px-margin-mobile md:px-margin-desktop overflow-hidden">
          <div className="max-w-[1280px] mx-auto space-y-xl">
            <div className="text-center">
              <h2 className="text-headline-lg font-headline-lg text-primary dark:text-on-primary">
                Voices of the Team
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              <div className="testimonial-card p-lg neumorphic-raised rounded-2xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex flex-col justify-between space-y-md">
                <p className="text-body-lg italic text-on-surface dark:text-on-primary-container/90 leading-relaxed">
                  &ldquo;At ICAD, the scale of the problems we solve is unparalleled. You&apos;re not just writing code; you&apos;re designing systems that power modern enterprises.&rdquo;
                </p>
                <div className="flex items-center gap-md pt-md">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high dark:bg-primary flex items-center justify-center shrink-0 border border-outline-variant">
                    <Terminal className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-bold text-primary dark:text-on-primary">Enterprise Engineering Division</p>
                    <p className="text-label-sm text-on-surface-variant dark:text-on-primary-container/70">Principal Solutions Architect Team</p>
                  </div>
                </div>
              </div>
              
              <div className="testimonial-card p-lg neumorphic-raised rounded-2xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex flex-col justify-between space-y-md">
                <p className="text-body-lg italic text-on-surface dark:text-on-primary-container/90 leading-relaxed">
                  &ldquo;The culture of precision here pushes you to be your best. The mentorship from industry titans has accelerated my career growth immensely.&rdquo;
                </p>
                <div className="flex items-center gap-md pt-md">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high dark:bg-primary flex items-center justify-center shrink-0 border border-outline-variant">
                    <Brain className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-bold text-primary dark:text-on-primary">AI & Data Systems Lab</p>
                    <p className="text-label-sm text-on-surface-variant dark:text-on-primary-container/70">Lead Analytics Group</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits List */}
        <section className="benefits-section py-xl px-margin-mobile md:px-margin-desktop bg-surface">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
            <div className="benefits-text space-y-md">
              <h2 className="text-headline-lg font-headline-lg text-primary dark:text-on-primary">
                World-Class Benefits for World-Class Talent
              </h2>
              <p className="text-body-md text-on-surface-variant dark:text-on-primary-container/85 max-w-xl">
                We invest in our people so they can focus on what they do best: innovating. Our benefits are designed to support a high-performance life.
              </p>
              
              <div className="space-y-sm pt-sm">
                <div className="benefit-item flex items-start gap-md p-md border-b border-outline-variant/30">
                  <Award className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary dark:text-on-primary">Competitive Compensation</h4>
                    <p className="text-label-sm text-on-surface-variant dark:text-on-primary-container/75">Top-tier salary packages and performance-linked equity options.</p>
                  </div>
                </div>
                
                <div className="benefit-item flex items-start gap-md p-md border-b border-outline-variant/30">
                  <Globe className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary dark:text-on-primary">Flexible Collaboration</h4>
                    <p className="text-label-sm text-on-surface-variant dark:text-on-primary-container/75">Opportunities to collaborate across our distributed tech sectors.</p>
                  </div>
                </div>
                
                <div className="benefit-item flex items-start gap-md p-md border-b border-outline-variant/30">
                  <Heart className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary dark:text-on-primary">Comprehensive Wellness</h4>
                    <p className="text-label-sm text-on-surface-variant dark:text-on-primary-container/75">Premium healthcare, mental health support, and fitness stipends.</p>
                  </div>
                </div>
                
                <div className="benefit-item flex items-start gap-md p-md">
                  <BookOpen className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary dark:text-on-primary">Continuous Learning</h4>
                    <p className="text-label-sm text-on-surface-variant dark:text-on-primary-container/75">Unlimited learning budget and annual education grants.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="benefits-image rounded-xl overflow-hidden shadow-lg h-[500px] relative w-full">
              <ParallaxImage
                src="/images/growth_metrics.png"
                alt="Modern skyscraper reflecting sky"
                className="w-full h-full"
                imgClassName="hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* Dynamic Job List Filter Grid */}
        <CareersFilterGrid />

        {/* Talent Pool Signup */}
        <section className="py-xl px-margin-mobile md:px-margin-desktop bg-primary text-on-primary text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none w-full h-full">
            <ParallaxImage
              src="/images/about_office.png"
              alt="Open-plan modern office background"
              className="w-full h-full"
              imgClassName="hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/80 to-primary z-10"></div>

          <div className="max-w-2xl mx-auto space-y-md relative z-10">
            <h2 className="text-headline-lg font-headline-lg">Don&apos;t see the right fit?</h2>
            <p className="text-body-md text-on-primary/75 max-w-xl mx-auto">
              Join our Talent Pool. We&apos;re always looking for exceptional engineers and strategists. Be the first to hear about new roles that match your expertise.
            </p>
            
            {talentPoolSubmitted ? (
              <div className="p-md bg-white/10 rounded-xl border border-white/20 text-white max-w-md mx-auto animate-bounce">
                <p className="font-bold text-headline-sm">Welcome aboard!</p>
                <p className="text-body-sm mt-xs opacity-90">
                  You have successfully joined the ICAD Technologies Talent Pool. We will keep you updated.
                </p>
              </div>
            ) : (
              <form onSubmit={handleTalentPoolSubmit} className="flex flex-col sm:flex-row gap-sm max-w-xl mx-auto">
                <input
                  className="flex-1 px-md h-10 py-0 rounded-full bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-400 dark:border-zinc-600 focus:outline-none focus:border-secondary outline-none placeholder:text-zinc-500 dark:placeholder:text-zinc-300"
                  placeholder="Email Address"
                  type="email"
                  required
                  value={talentPoolEmail}
                  onChange={(e) => setTalentPoolEmail(e.target.value)}
                />
                <Button type="submit" variant="secondary" className="h-10 px-lg whitespace-nowrap flex items-center justify-center gap-xs">
                  Join Talent Pool <Send className="w-4 h-4" />
                </Button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
