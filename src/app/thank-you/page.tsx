"use client";

import React, { useEffect, useState } from "react";
import {
  CheckCircle,
  MailCheck,
  Wrench,
  Calendar,
  ArrowRight,
  Download,
  Share2,
  Users,
  Globe,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Link from "next/link";
import ParallaxImage from "@/components/ui/ParallaxImage";

export default function ThankYouPage() {
  const [inquiryDetails, setInquiryDetails] = useState<{
    name: string;
    email: string;
    department: string;
    estimate: string | null;
  } | null>(null);

  useEffect(() => {
    const name = sessionStorage.getItem("inquiryName");
    const email = sessionStorage.getItem("inquiryEmail");
    const department = sessionStorage.getItem("inquiryDept");
    const estimate = sessionStorage.getItem("estimateAmount");

    if (name || email || department || estimate) {
      const handle = setTimeout(() => {
        setInquiryDetails({
          name: name || "Valued Client",
          email: email || "",
          department: department || "General Consulting",
          estimate: estimate || null,
        });
      }, 0);
      return () => clearTimeout(handle);
    }
  }, []);

  return (
    <>
      <title>Inquiry Received | Thank You | ICAD Technologies</title>
      <meta name="description" content="Thank you for your inquiry. An ICAD Technologies solutions architect will be in touch shortly to review your enterprise scale requirements." />
      <meta name="robots" content="noindex, nofollow" />
      <Navbar />
      <main className="pt-32 pb-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto space-y-xl">
        
        {/* Hero Confirmation Section */}
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex flex-col md:flex-row items-center gap-lg">
            <div className="flex-1 text-center md:text-left space-y-md">
              <div className="inline-flex items-center gap-xs text-secondary dark:text-secondary-fixed">
                <CheckCircle className="w-5 h-5 text-secondary dark:text-secondary-fixed fill-current" />
                <span className="text-label-md font-label-md tracking-wider uppercase font-bold">
                  Inquiry Received
                </span>
              </div>
              <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-primary dark:text-on-primary leading-tight">
                Engineering the Future, Together.
              </h1>
              <p className="text-body-lg text-on-surface-variant dark:text-on-primary-container/85 max-w-2xl leading-relaxed">
                Thank you for reaching out to ICAD Technologies. A Solutions Architect will be in touch shortly to discuss your specific technical requirements and enterprise scale strategy.
              </p>
              
              {inquiryDetails && (
                <div className="p-md bg-surface-container dark:bg-primary-container/30 rounded-xl border border-outline-variant dark:border-primary-fixed-dim/20 max-w-xl text-left space-y-xs">
                  <p className="text-label-sm uppercase font-bold text-outline dark:text-on-primary-container/60">
                    Submission Details
                  </p>
                  <p className="text-body-md text-on-surface dark:text-on-primary">
                    <strong className="text-primary dark:text-on-primary">Name:</strong> {inquiryDetails.name}
                  </p>
                  {inquiryDetails.email && (
                    <p className="text-body-md text-on-surface dark:text-on-primary">
                      <strong className="text-primary dark:text-on-primary">Email:</strong> {inquiryDetails.email}
                    </p>
                  )}
                  <p className="text-body-md text-on-surface dark:text-on-primary">
                    <strong className="text-primary dark:text-on-primary">Interest:</strong> {inquiryDetails.department}
                  </p>
                  {inquiryDetails.estimate && (
                    <p className="text-body-md text-on-surface dark:text-on-primary">
                      <strong className="text-primary dark:text-on-primary">Estimate:</strong> ${inquiryDetails.estimate}
                    </p>
                  )}
                </div>
              )}
            </div>

            <div className="relative w-full md:w-1/3 aspect-square rounded-xl overflow-hidden shadow-xl shrink-0">
              <ParallaxImage
                src="/images/about_mission.png"
                alt="Success Confirmation"
                className="w-full h-full"
                imgClassName="hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* Bento Grid for Post-Conversion Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
          
          {/* Next Steps Checklist */}
          <div className="lg:col-span-4 bg-surface-container-low dark:bg-primary-container/20 p-lg rounded-xl border border-outline-variant/30 dark:border-primary-fixed-dim/20 space-y-md">
            <h3 className="text-headline-md font-headline-md text-primary dark:text-on-primary">
              What Happens Next
            </h3>
            <div className="space-y-md">
              <div className="flex gap-md items-start">
                <div className="bg-primary-fixed p-sm rounded-full flex items-center justify-center text-primary dark:bg-primary-container dark:text-on-primary">
                  <MailCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-label-md font-label-md text-primary dark:text-on-primary">Confirmation Email</p>
                  <p className="text-body-md text-on-surface-variant dark:text-on-primary-container/80">Check your inbox for a summary of your inquiry details.</p>
                </div>
              </div>
              
              <div className="flex gap-md items-start">
                <div className="bg-primary-fixed p-sm rounded-full flex items-center justify-center text-primary dark:bg-primary-container dark:text-on-primary">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-label-md font-label-md text-primary dark:text-on-primary">Architect Review</p>
                  <p className="text-body-md text-on-surface-variant dark:text-on-primary-container/80">Our team reviews your technical specifications and industry vertical.</p>
                </div>
              </div>
              
              <div className="flex gap-md items-start">
                <div className="bg-primary-fixed p-sm rounded-full flex items-center justify-center text-primary dark:bg-primary-container dark:text-on-primary">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-label-md font-label-md text-primary dark:text-on-primary">Consultation Call</p>
                  <p className="text-body-md text-on-surface-variant dark:text-on-primary-container/80">Expect a call within 24 business hours to schedule a deep dive.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Case Studies */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-md">
            
            {/* Case 1 */}
            <div className="group relative bg-primary text-on-primary rounded-xl overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg dark:bg-primary-container/40 dark:border dark:border-primary-fixed-dim/20">
              <div className="h-44 overflow-hidden relative w-full">
                <ParallaxImage
                  src="/images/cloud_architecture.png"
                  alt="Case Study Cloud"
                  className="w-full h-full"
                  imgClassName="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10 pointer-events-none"></div>
              </div>
              <div className="p-md flex flex-col flex-grow justify-between space-y-md">
                <div>
                  <span className="text-label-sm font-label-sm uppercase tracking-widest text-on-primary-container opacity-80">
                    Cloud Architecture
                  </span>
                  <h4 className="text-headline-md font-headline-md text-white mt-1">
                    Scaling Enterprise Finance Systems
                  </h4>
                </div>
                <div className="flex items-center gap-xs text-white/90 font-bold">
                  <span className="text-label-md">View Case Study</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="group relative bg-surface-container-highest text-on-surface rounded-xl overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg dark:bg-primary-container/20 dark:border dark:border-primary-fixed-dim/10">
              <div className="h-44 overflow-hidden relative w-full">
                <ParallaxImage
                  src="/images/ai_solutions.png"
                  alt="Case Study AI"
                  className="w-full h-full"
                  imgClassName="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest/80 to-transparent dark:from-primary-container/80 z-10 pointer-events-none"></div>
              </div>
              <div className="p-md flex flex-col flex-grow justify-between space-y-md">
                <div>
                  <span className="text-label-sm font-label-sm uppercase tracking-widest text-primary dark:text-on-primary-container opacity-85">
                    AI Solutions
                  </span>
                  <h4 className="text-headline-md font-headline-md text-primary dark:text-on-primary mt-1">
                    Predictive Maintenance in Manufacturing
                  </h4>
                </div>
                <div className="flex items-center gap-xs text-secondary dark:text-secondary-fixed font-bold">
                  <span className="text-label-md">View Case Study</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>

          </div>

          {/* Whitepapers & Resources */}
          <div className="lg:col-span-8 bg-surface-container dark:bg-primary-container/30 rounded-xl p-lg flex flex-col md:flex-row items-center gap-lg border border-outline-variant/20 dark:border-primary-fixed-dim/10">
            <div className="flex-grow space-y-md">
              <h3 className="text-headline-lg font-headline-lg text-primary dark:text-on-primary">
                Expert Insights for the Modern CTO
              </h3>
              <p className="text-body-md text-on-surface-variant dark:text-on-primary-container/85 max-w-xl">
                Download our latest research on Cybersecurity Resilience and the ROI of Private Cloud Infrastructure.
              </p>
              <div className="flex flex-wrap gap-md">
                <button className="flex items-center gap-xs text-primary dark:text-on-primary font-label-md hover:text-secondary dark:hover:text-secondary-fixed transition-colors cursor-pointer">
                  <Download className="w-4 h-4" /> Whitepaper: Cyber 2026
                </button>
                <button className="flex items-center gap-xs text-primary dark:text-on-primary font-label-md hover:text-secondary dark:hover:text-secondary-fixed transition-colors cursor-pointer">
                  <Download className="w-4 h-4" /> Report: AI Scalability
                </button>
              </div>
            </div>
            
            <div className="flex gap-sm shrink-0">
              <div className="w-24 h-32 bg-primary/10 rounded-lg border border-primary/20 flex flex-col items-center justify-center p-sm text-center">
                <span className="text-[10px] font-bold text-primary dark:text-on-primary">ANNUAL REPORT</span>
              </div>
              <div className="w-24 h-32 bg-secondary/10 rounded-lg border border-secondary/20 flex flex-col items-center justify-center p-sm text-center">
                <span className="text-[10px] font-bold text-secondary dark:text-secondary-fixed">TECH TRENDS</span>
              </div>
            </div>
          </div>

          {/* Social Follow & Quick Connect */}
          <div className="lg:col-span-4 bg-primary text-on-primary p-lg rounded-xl flex flex-col justify-between min-h-[220px] dark:bg-primary-container dark:border dark:border-primary-fixed-dim/20">
            <div>
              <h3 className="text-headline-md font-headline-md mb-md">Stay Ahead of the Curve</h3>
              <p className="text-body-md opacity-90 mb-lg max-w-md">
                Follow our executive team for daily insights on digital transformation and emerging tech.
              </p>
            </div>
            
            <div className="flex gap-md">
              <a
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300"
                href="#"
              >
                <Share2 className="w-5 h-5" />
              </a>
              <a
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300"
                href="#"
              >
                <Users className="w-5 h-5" />
              </a>
              <a
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300"
                href="#"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
