/**
 * [CORE PAGE]: HOMEPAGE v18.1.5 (PRODUCTION_MAXIMIZED)
 * [STRATEGY]: Static-First Rendering | Zero-CLS Hydration | Advanced Schema Graph
 * [UPDATED]: 2026-02-19
 */

import React, { Suspense } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

// --- 1. Infrastructure & Core Constants ---
import { AREA_NODES } from "@/constants/area-nodes";
import { getFeaturedServices } from "@/constants/master-registry";
import { SITE_CONFIG } from "@/constants/site-config";
import { cn } from "@/lib/utils";

// --- 2. Data Access Layer ---
import { getAllPosts, getAllCaseStudies } from "@/lib/cms";
import type { BlogPost, CaseStudy } from "@/types";

// --- 3. SEO & Technical Schema ---
import { generateSchemaGraph } from "@/lib/schema";
import { constructMetadata } from "@/lib/seo-utils";
import JsonLd from "@/components/seo/JsonLd";
import IconRenderer from "@/components/ui/IconRenderer";

// --- 4. Critical UI (Synchronous for LCP) ---
import HeroEngine from "@/components/templates/sections/HeroEngine";
import TrustBadge from "@/components/shared/TrustBadge";
import ImpactStats from "@/components/shared/ImpactStats";
import ServiceCard from "@/components/features/services/ServiceCard";
import CaseStudyCard from "@/components/features/case-studies/CaseStudyCard";
import BlogCard from "@/components/features/blog/BlogCard";
import AreaCard from "@/components/features/areas/AreaCard";

// [ISR]: Optimal revalidation cycle for high-performance indexing
export const revalidate = 3600;

// --- 5. Deferred UI (Dynamic Imports for TBT Optimization) ---
const LoadingSkeleton = ({ height, className }: { height: string; className?: string }) => (
  <div className={cn("bg-surface-card/30 border-border/10 animate-pulse rounded-[2.5rem] border", height, className)} />
);

const WorkProcess = dynamic(() => import("@/components/features/landing/WorkProcess"), {
  loading: () => <LoadingSkeleton height="h-[500px]" className="mx-auto max-w-7xl" />,
  ssr: true, 
});

const PricingSection = dynamic(() => import("@/components/features/landing/PricingSection"), {
  loading: () => <LoadingSkeleton height="h-[650px]" className="mx-auto max-w-7xl" />,
  ssr: true,
});

export async function generateMetadata(): Promise<Metadata> {
  return constructMetadata({
    title: `Web Architect & Technical SEO Specialist | ${SITE_CONFIG.expert.displayName}`,
    description: SITE_CONFIG.hero.description,
    path: "/",
    image: SITE_CONFIG.ogImage,
  });
}

export default async function HomePage() {
  /** [PERFORMANCE]: Parallel Prefetching with Fail-Safe Fallbacks */
  const [caseStudies, blogPosts] = await Promise.all([
    getAllCaseStudies().catch((err) => {
      console.error("Critical: CaseStudies Fetch Failed", err);
      return [] as CaseStudy[];
    }),
    getAllPosts().catch((err) => {
      console.error("Critical: BlogPosts Fetch Failed", err);
      return [] as BlogPost[];
    }),
  ]);

  const featuredServices = getFeaturedServices().slice(0, 3);
  const recentCases = caseStudies.slice(0, 2);
  const recentPosts = blogPosts.slice(0, 3);
  const featuredAreas = AREA_NODES.filter((n) => (n.priority ?? 0) >= 95).slice(0, 4);

  /** [SEO]: Deep Schema Integration for Knowledge Graph */
  const homeSchema = generateSchemaGraph([
    {
      "@type": "WebSite",
      "@id": `${SITE_CONFIG.siteUrl}/#website`,
      url: SITE_CONFIG.siteUrl,
      name: SITE_CONFIG.brandName,
      publisher: { "@id": `${SITE_CONFIG.siteUrl}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_CONFIG.siteUrl}/#organization`,
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.siteUrl,
      logo: { "@type": "ImageObject", url: `${SITE_CONFIG.siteUrl}${SITE_CONFIG.logo}` },
      sameAs: [
        SITE_CONFIG.links.facebook,
        SITE_CONFIG.links.github,
        SITE_CONFIG.links.linkedin,
        SITE_CONFIG.links.youtube,
      ].filter(Boolean) as string[],
    },
    {
      "@type": "ItemList",
      "itemListElement": featuredServices.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": s.title,
        "url": `${SITE_CONFIG.siteUrl}/services/${s.slug}`,
      })),
    },
  ]);

  return (
    <main className="bg-surface-main flex w-full flex-col overflow-hidden">
      <JsonLd data={homeSchema} />

      {/* 01. HERO GATEWAY: Pure Performance LCP */}
      <HeroEngine align="center" showIndicator={true} priority={true} />

      {/* 02. AUTHORITY HUB: Micro-interaction ready */}
      <section className="relative z-20 -mt-16 px-4 md:-mt-24 lg:-mt-32">
        <div className="mx-auto max-w-7xl">
          <div className="glass-card shadow-pro-xl relative overflow-hidden rounded-[2.5rem] border border-white/5 p-8 md:p-16">
            <div className="relative z-10 flex flex-col items-center gap-12 md:gap-16">
              <TrustBadge />
              <div className="via-border h-px w-full bg-gradient-to-r from-transparent to-transparent opacity-30" />
              <ImpactStats />
            </div>
            <div className="bg-brand-primary/10 pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-[120px]" />
          </div>
        </div>
      </section>

      {/* 03. SOLUTIONS: Content First Rendering */}
      <section id="services" className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <header className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="space-y-2">
              <span className="text-brand-primary block font-mono text-[10px] font-black tracking-[0.4em] uppercase">
                Expertise_Architecture
              </span>
              <h2 className="text-text-primary text-5xl font-black tracking-tighter uppercase italic md:text-7xl lg:text-8xl">
                Core <span className="text-brand-primary">Solutions.</span>
              </h2>
            </div>
            <Link
              href="/services"
              className="group border-brand-primary/20 bg-brand-primary/5 hover:bg-brand-primary text-text-primary hover:text-surface-main flex items-center gap-3 rounded-full border px-6 py-4 text-[10px] font-black tracking-widest uppercase transition-all duration-500"
            >
              Master Services Registry
              <IconRenderer name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </header>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, i) => (
              <ServiceCard key={service.id} data={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 04. PROCESS: Dynamic Hydration Section */}
      <section className="bg-surface-offset border-border/40 border-y py-24">
        <Suspense fallback={<LoadingSkeleton height="h-[500px]" className="mx-auto max-w-7xl" />}>
          <WorkProcess />
        </Suspense>
      </section>

      {/* 05. SUCCESS EVIDENCE: High Authority Evidence */}
      <section id="success" className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <header className="mb-16">
            <h2 className="text-text-primary text-5xl font-black tracking-tighter uppercase italic md:text-6xl">
              Success <span className="text-text-secondary/30">Nodes.</span>
            </h2>
          </header>
          <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2">
            {recentCases.map((item, i) => (
              <CaseStudyCard key={item.slug} data={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 06. TECHNICAL INSIGHTS: SEO Context Injection */}
      <section className="bg-surface-main border-border/40 border-t py-24 md:py-32">
        <div className="container mx-auto px-4">
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

      {/* 07. CONVERSION & GEOGRAPHIC DISTANCE */}
      <div className="bg-surface-offset">
        <section className="pb-24">
          <Suspense fallback={<LoadingSkeleton height="h-[650px]" className="mx-auto max-w-7xl" />}>
            <PricingSection />
          </Suspense>
        </section>

        <section className="border-border/60 border-t py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <span className="text-text-muted font-mono text-[9px] font-black tracking-[0.5em] uppercase opacity-50">
                Network_Coverage_Index
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
    </main>
  );
}
