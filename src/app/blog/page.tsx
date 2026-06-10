import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogFilterGrid from "@/components/features/BlogFilterGrid";
import Button from "@/components/ui/Button";
import { blogArticles } from "@/data/blog";

export default function BlogPage() {
  const featured = blogArticles["the-future-of-ai-in-enterprise-infrastructure"];

  return (
    <>
      <title>Enterprise Technology Blog & Insights | ICAD Technologies</title>
      <meta name="description" content="Explore in-depth technical guides, strategic research, and expert insights on cloud architecture, cybersecurity, machine learning, and devops." />
      <Navbar />
      <main className="flex-1 mt-20">
        {/* Featured Article Hero Banner */}
        <section 
          className="px-margin-mobile md:px-margin-desktop py-xl"
          data-cursor-guide="Featured Article - Industry-leading insights"
        >
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
            {/* Featured Post Card */}
            {featured && (
              <div className="lg:col-span-7 relative group overflow-hidden rounded-xl h-[500px] shadow-sm">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                  src={featured.coverImage}
                  alt={featured.coverImageAlt}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 to-transparent flex flex-col justify-end p-lg space-y-sm">
                  <span className="inline-block bg-secondary text-on-secondary text-label-sm px-3 py-1 rounded-full w-fit mb-sm uppercase font-bold">
                    {featured.tagline}
                  </span>
                  <Link href={`/blog/${featured.slug}`} className="hover:underline">
                    <h1 className="text-white font-display-lg text-display-lg-mobile md:text-display-lg leading-tight">
                      {featured.title}
                    </h1>
                  </Link>
                  <p className="text-surface-variant font-body-lg text-body-lg max-w-xl line-clamp-2">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-sm text-surface-variant font-label-md">
                    <span>Featured Article</span>
                    <span>•</span>
                    <span>{featured.date}</span>
                    <span>•</span>
                    <span>{featured.readTime}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Side Callout & Newsletter signup */}
            <div className="lg:col-span-5 flex flex-col gap-gutter">
              <div className="bg-primary-container p-lg rounded-xl flex flex-col justify-center h-full space-y-sm dark:bg-primary-container/40">
                <h2 className="text-on-primary-container font-headline-lg text-headline-lg">
                  Stay Informed
                </h2>
                <p className="text-on-primary-container/80 font-body-md">
                  Join 25,000+ industry leaders who receive our bi-weekly insights on technology and market leadership.
                </p>

              </div>
              <div className="bg-surface-container flex-grow p-lg rounded-xl border border-outline-variant flex items-center gap-md dark:bg-primary-container/20 dark:border-primary-fixed-dim/20">
                <div className="bg-secondary p-md rounded-full text-white dark:bg-secondary-fixed dark:text-on-secondary-fixed shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-primary dark:text-on-primary font-label-sm uppercase tracking-wider mb-xs font-bold">
                    Trending Now
                  </p>
                  <h3 className="text-on-surface dark:text-on-primary font-headline-md leading-snug">
                    Cybersecurity Resilience in 2025
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter grid component */}
        <BlogFilterGrid />
      </main>
      <Footer />
    </>
  );
}
