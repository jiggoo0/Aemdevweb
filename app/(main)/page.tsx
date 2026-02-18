/**
 * [CORE PAGE]: HOMEPAGE v18.0.5 (PRODUCTION_MAXIMIZED)
 * [STRATEGY]: Static-First Rendering | Hybrid Hydration | Schema Injection
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

// --- 1. Infrastructure & Constants ---
import { AREA_NODES } from "@/constants/area-nodes";
import { getFeaturedServices } from "@/constants/master-registry";
import { SITE_CONFIG } from "@/constants/site-config";
import { cn } from "@/lib/utils";

// --- 2. Data Fetching ---
import { getAllPosts, getAllCaseStudies } from "@/lib/cms";
import type { BlogPost, CaseStudy } from "@/types";

// --- 3. SEO & Schema ---
import { generateSchemaGraph } from "@/lib/schema";
import { constructMetadata } from "@/lib/seo-utils";
import JsonLd from "@/components/seo/JsonLd";
import IconRenderer from "@/components/ui/IconRenderer";

// --- 4. UI Components (Standard Import for SEO & Instant Render) ---
import HeroEngine from "@/components/templates/sections/HeroEngine";
import TrustBadge from "@/components/shared/TrustBadge";
import ImpactStats from "@/components/shared/ImpactStats";
import ServiceCard from "@/components/features/services/ServiceCard";
import CaseStudyCard from "@/components/features/case-studies/CaseStudyCard";
import BlogCard from "@/components/features/blog/BlogCard";
import AreaCard from "@/components/features/areas/AreaCard";

// [ISR]: อัปเดตข้อมูลทุก 1 ชั่วโมงโดยไม่ต้อง Rebuild ทั้งระบบ
export const revalidate = 3600;

// --- 5. Optimized Lazy Loading (Heavy Sections Only) ---
const LoadingSkeleton = ({
  height = "h-[400px]",
  className,
}: {
  height?: string;
  className?: string;
}) => (
  <div
    className={cn(
      "bg-surface-card/40 border-border/20 mx-auto w-full max-w-7xl animate-pulse rounded-[2.5rem] border",
      height,
      className,
    )}
  />
);

const WorkProcess = dynamic(() => import("@/components/features/landing/WorkProcess"), {
  loading: () => <LoadingSkeleton height="h-[500px]" />,
});

const PricingSection = dynamic(() => import("@/components/features/landing/PricingSection"), {
  loading: () => <LoadingSkeleton height="h-[650px]" />,
});

export async function generateMetadata(): Promise<Metadata> {
  return constructMetadata({
    title: `Technical SEO Specialist & Web Architect | ${SITE_CONFIG.expert.displayName}`,
    description: SITE_CONFIG.hero.description,
    path: "/",
    image: "/images/og-main.webp",
  });
}

export default async function HomePage() {
  /** [PERFORMANCE]: Parallel Data Execution (Zero-Blocking) */
  const [caseStudies, blogPosts] = await Promise.all([
    getAllCaseStudies().catch(() => [] as CaseStudy[]),
    getAllPosts().catch(() => [] as BlogPost[]),
  ]);

  const featuredServices = getFeaturedServices().slice(0, 3);
  const recentCases = caseStudies.slice(0, 2);
  const recentPosts = blogPosts.slice(0, 3);
  const featuredAreas = AREA_NODES.filter((n) => (n.priority ?? 0) >= 95).slice(0, 4);

  // [INSIGHT]: รวบรวมข้อมูล Schema สำหรับ Homepage เพื่อ Authority สูงสุด
  const homeSchema = generateSchemaGraph([
    {
      "@type": "WebSite",
      url: SITE_CONFIG.siteUrl,
      name: SITE_CONFIG.siteName,
      description: SITE_CONFIG.hero.description,
    },
    {
      "@type": "ProfessionalService",
      name: SITE_CONFIG.siteName,
      image: `${SITE_CONFIG.siteUrl}/images/og-main.webp`,
      address: { "@type": "PostalAddress", addressCountry: "TH" },
    },
  ]);

  return (
    <div className="bg-surface-main flex w-full flex-col overflow-hidden">
      <JsonLd data={homeSchema} />

      {/* --- 01. HERO GATEWAY (The LCP Element) --- */}
      <HeroEngine align="center" showIndicator={true} />

      {/* --- 02. AUTHORITY HUB --- */}
      <section className="relative z-20 -mt-16 px-4 md:-mt-24 lg:-mt-32">
        <div className="mx-auto max-w-7xl">
          <div className="glass-card shadow-pro-xl relative overflow-hidden rounded-[2.5rem] p-8 md:p-16">
            <div className="relative z-10 flex flex-col items-center gap-12 md:gap-16">
              <TrustBadge />
              <div className="via-border h-px w-full bg-gradient-to-r from-transparent to-transparent opacity-30" />
              <ImpactStats />
            </div>
            {/* Background Mesh Overlay */}
            <div className="bg-brand-primary/5 pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full blur-[100px]" />
          </div>
        </div>
      </section>

      {/* --- 03. CORE SOLUTIONS --- */}
      <section id="services" className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <header className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="space-y-2">
              <span className="text-brand-primary block font-mono text-[10px] font-black tracking-[0.4em] uppercase">
                Expertise_Framework
              </span>
              <h2 className="text-text-primary text-5xl font-black tracking-tighter uppercase italic md:text-7xl lg:text-8xl">
                Core <span className="text-brand-primary">Solutions.</span>
              </h2>
            </div>
            <Link
              href="/services"
              className="group border-brand-primary/20 bg-brand-primary/5 hover:bg-brand-primary text-text-primary hover:text-surface-main flex items-center gap-3 rounded-full border px-6 py-3 text-[10px] font-black tracking-widest uppercase transition-all"
            >
              All Services
              <IconRenderer name="ArrowRight" size={14} />
            </Link>
          </header>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, i) => (
              <ServiceCard key={service.id} data={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* --- 04. PROCESS ENGINE --- */}
      <section className="bg-surface-offset border-border/40 border-y py-24">
        <WorkProcess />
      </section>

      {/* --- 05. SUCCESS EVIDENCE --- */}
      <section id="success" className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <header className="mb-16">
            <h2 className="text-text-primary text-5xl font-black tracking-tighter uppercase italic md:text-6xl">
              Success <span className="text-text-secondary opacity-30">Nodes.</span>
            </h2>
          </header>
          <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2">
            {recentCases.map((item, i) => (
              <CaseStudyCard key={item.slug} data={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* --- 06. TECHNICAL INSIGHTS --- */}
      <section className="bg-surface-main border-border/40 border-t py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 flex items-center justify-between">
            <h2 className="text-text-primary text-4xl font-black tracking-tighter uppercase italic md:text-6xl">
              Technical <span className="text-brand-primary">Insights.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} priority={false} />
            ))}
          </div>
        </div>
      </section>

      {/* --- 07. INVESTMENT & GEO NODES --- */}
      <div className="bg-surface-offset">
        <section className="pb-24">
          <PricingSection />
        </section>

        <section className="border-border border-t py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-10 text-center">
              <span className="text-text-muted font-mono text-[9px] font-black tracking-[0.5em] uppercase opacity-50">
                Service_Geographic_Coverage
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
              {featuredAreas.map((area, i) => (
                <AreaCard key={area.slug} data={area} index={i} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
