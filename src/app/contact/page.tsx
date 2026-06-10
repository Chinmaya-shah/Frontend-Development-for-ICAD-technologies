"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Phone, Mail, Calendar, Check } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParallaxImage from "@/components/ui/ParallaxImage";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}



export default function ContactPage() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "Strategic Consulting",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      ".contact-header h1, .contact-header p",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }
    );

    tl.fromTo(
      ".contact-form-section, .contact-info-card",
      { opacity: 0, y: 45, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15 },
      "-=0.6"
    );

    gsap.fromTo(
      ".contact-cta-section",
      { opacity: 0, scale: 0.99 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-cta-section",
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: containerRef });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Corporate email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
 
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log("Contact Inquiry API Response:", result);
    } catch (error) {
      console.error("Contact Inquiry API Error:", error);
    } finally {
      setIsSubmitting(false);
    }
 
    sessionStorage.setItem("inquiryName", formData.name);
    sessionStorage.setItem("inquiryEmail", formData.email);
    sessionStorage.setItem("inquiryDept", formData.department);
 
    router.push("/thank-you");
  };

  return (
    <div ref={containerRef}>
      <title>Contact Our Solutions Architects | ICAD Technologies</title>
      <meta name="description" content="Reach out to ICAD Technologies' legal, talent acquisition, or technical departments. Speak to a solutions architect about cloud, security, or enterprise development." />
      <Navbar />
      <main className="pt-28 pb-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto space-y-xl">
        {/* Hero Section */}
        <header className="contact-header text-center md:text-left space-y-sm" data-cursor-guide="Contact Us - Connect with our specialized teams">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary dark:text-on-primary">
            Strategic Expertise. Seamless Collaboration.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-on-primary-container/85 max-w-2xl">
            Connect with our specialized teams to drive your technological transformation forward.
          </p>
        </header>

        {/* Bento Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
          {/* Contact Form (Premium) - Takes 7 columns */}
          <section className="contact-form-section lg:col-span-7 neumorphic-raised p-lg" data-cursor-guide="Inquiry Form - Share your project objectives">
            <h2 className="font-headline-lg text-headline-lg mb-lg text-primary dark:text-on-primary">
              Send a Strategic Inquiry
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="flex flex-col gap-xs">
                <label className="text-label-sm font-label-sm text-on-surface-variant dark:text-on-primary-container/75 px-xs">
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`bg-surface dark:bg-primary-container text-on-surface dark:text-on-primary border rounded-lg p-md outline-none focus:ring-1 focus:ring-secondary ${
                    errors.name ? "border-error" : "border-outline-variant dark:border-primary-fixed-dim/20"
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && <span className="text-error text-label-sm px-xs">{errors.name}</span>}
              </div>
              
              <div className="flex flex-col gap-xs">
                <label className="text-label-sm font-label-sm text-on-surface-variant dark:text-on-primary-container/75 px-xs">
                  Corporate Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`bg-surface dark:bg-primary-container text-on-surface dark:text-on-primary border rounded-lg p-md outline-none focus:ring-1 focus:ring-secondary ${
                    errors.email ? "border-error" : "border-outline-variant dark:border-primary-fixed-dim/20"
                  }`}
                  placeholder="john@company.com"
                />
                {errors.email && <span className="text-error text-label-sm px-xs">{errors.email}</span>}
              </div>

              <div className="flex flex-col gap-xs md:col-span-2">
                <label className="text-label-sm font-label-sm text-on-surface-variant dark:text-on-primary-container/75 px-xs">
                  Department of Interest
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className="bg-surface dark:bg-primary-container text-on-surface dark:text-on-primary border border-outline-variant dark:border-primary-fixed-dim/20 rounded-lg p-md outline-none focus:ring-1 focus:ring-secondary cursor-pointer"
                >
                  <option>Strategic Consulting</option>
                  <option>Cloud Infrastructure</option>
                  <option>AI &amp; Machine Learning</option>
                  <option>Cybersecurity Defense</option>
                </select>
              </div>

              <div className="flex flex-col gap-xs md:col-span-2">
                <label className="text-label-sm font-label-sm text-on-surface-variant dark:text-on-primary-container/75 px-xs">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className={`bg-surface dark:bg-primary-container text-on-surface dark:text-on-primary border rounded-lg p-md outline-none resize-none focus:ring-1 focus:ring-secondary ${
                    errors.message ? "border-error" : "border-outline-variant dark:border-primary-fixed-dim/20"
                  }`}
                  placeholder="Briefly describe your requirements..."
                />
                {errors.message && <span className="text-error text-label-sm px-xs">{errors.message}</span>}
              </div>

              <div className="md:col-span-2 pt-md">
                <Button
                  type="submit"
                  variant="secondary"
                  disabled={isSubmitting}
                  className="w-full md:w-auto shadow-md"
                >
                  {isSubmitting ? "Submitting Inquiry..." : "Submit Inquiry"}
                </Button>
              </div>
            </form>
          </section>

          {/* Quick Contact & Directory - Takes 5 columns */}
          <div className="contact-info-card lg:col-span-5 flex flex-col gap-md">
            {/* Direct Lines */}
            <div className="neumorphic-raised p-lg space-y-md">
              <h3 className="font-headline-md text-headline-md text-primary dark:text-on-primary">Direct Support</h3>
              <div className="space-y-md">
                <div className="flex items-center gap-md">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high dark:bg-primary flex items-center justify-center">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-label-sm font-label-sm text-on-surface-variant dark:text-on-primary-container/70">General Support</p>
                    <p className="text-body-lg font-bold text-primary dark:text-on-primary">info@icadtechnologies.com</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>



        {/* Calendar Integration Section */}
        <section className="contact-cta-section bg-primary text-on-primary p-lg rounded-xl flex flex-col md:flex-row items-center justify-between gap-lg" data-cursor-guide="Consultation Booking - Reserve a briefing session directly">
          <div className="max-w-xl space-y-sm">
            <h3 className="font-headline-lg text-headline-lg text-white">Book a Consultation</h3>
            <p className="font-body-md text-body-md text-white/80 leading-relaxed">
              Skip the email back-and-forth. Schedule a 30-minute introductory call directly with our solutions architects.
            </p>
          </div>
          
          <div className="flex flex-col gap-md w-full md:w-auto shrink-0">
            <div className="bg-white dark:bg-primary-container rounded-lg p-md text-on-surface dark:text-on-primary flex flex-col sm:flex-row items-center justify-between gap-md shadow-inner">
              <div className="flex items-center gap-sm">
                <Calendar className="w-5 h-5 text-primary dark:text-on-primary-container shrink-0" />
                <span className="font-label-md font-semibold">Next Available: Today (Afternoon)</span>
              </div>
              <Button variant="secondary" size="sm" className="w-full sm:w-auto">
                Select Time
              </Button>
            </div>
            
            <div className="flex items-center gap-sm justify-center md:justify-start">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center text-label-sm border-2 border-white dark:border-zinc-900 font-bold shrink-0 shadow-sm">
                  DS
                </div>
                <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center text-label-sm border-2 border-white dark:border-zinc-900 font-bold shrink-0 shadow-sm">
                  ENG
                </div>
                <div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center text-label-sm border-2 border-white dark:border-zinc-900 font-bold shrink-0 shadow-sm">
                  PM
                </div>
              </div>
              <span className="text-white/80 text-label-sm font-semibold">Solutions Architect Team</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
