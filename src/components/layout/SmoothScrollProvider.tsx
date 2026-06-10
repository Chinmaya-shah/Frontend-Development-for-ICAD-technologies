"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing for premium feel
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Synchronize Lenis scrolling with ScrollTrigger
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    // Intercept anchor hash link click events for smooth Lenis scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href.startsWith("#")) {
          if (href === "#") {
            e.preventDefault();
            lenis.scrollTo(0, { duration: 1.2 });
            return;
          }
          
          const targetElement = document.querySelector(href);
          if (targetElement) {
            e.preventDefault();
            lenis.scrollTo(targetElement as HTMLElement, {
              offset: -100, // Account for fixed height navbar header (~80px + padding)
              duration: 1.2,
            });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Integrate Lenis RAF loop with GSAP ticker
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(update);

    // Disable lag smoothing for instant response
    gsap.ticker.lagSmoothing(0);

    // Watch for size changes on the document body to update Lenis and ScrollTrigger
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    });
    
    if (document.body) {
      resizeObserver.observe(document.body);
    }

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      resizeObserver.disconnect();
      lenis.destroy();
      gsap.ticker.remove(update);
    };
  }, []);

  // Handle scrolling to URL hash on initial load and route changes
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Small timeout to allow Next.js route transition and DOM layouts to settle
      const timer = setTimeout(() => {
        const targetElement = document.querySelector(hash);
        if (targetElement && lenisRef.current) {
          lenisRef.current.scrollTo(targetElement as HTMLElement, {
            offset: -100, // Account for fixed navbar height
            duration: 1.2,
            immediate: false,
          });
        }
      }, 250);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return <>{children}</>;
}
