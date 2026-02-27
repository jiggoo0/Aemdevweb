/**
 * [CORE PAGE]: HOMEPAGE v18.1.6 (INTERACTIVE_MAXIMIZED)
 * [STRATEGY]: Static-First Rendering | Narrative Conversion | Interactive Lead Magnets
 * [UPDATED]: 2026-02-24
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
import { AEMSpecialistHero } from "@/components/features/landing/AEMSpecialistHero";
import ServiceCard from "@/components/features/services/ServiceCard";
import CaseStudyCard from "@/components/features/case-studies/CaseStudyCard";
import BlogCard from "@/components/features/blog/BlogCard";
import AreaCard from "@/components/features/areas/AreaCard";

// --- 5. Deferred UI (Dynamic Imports for TBT Optimization) ---
const LeadScoringHUD = dynamic(
  () => import("@/components/templates/sections/LeadScoringHUD").then((mod) => mod.LeadScoringHUD),
  { ssr: true },
);

const TrustEquation = dynamic(
  () => import("@/components/templates/sections/TrustEquation").then((mod) => mod.TrustEquation),
  { ssr: true },
);

const LoadingSkeleton = ({ height, className }: { height: string; className?: string }) => (
  <div
    className={cn(
      "bg-surface-card/30 border-border/10 rounded-section animate-pulse border",
      height,
      className,
    )}
  />
);

const TrustBadge = dynamic(() => import("@/components/shared/TrustBadge"), {
  ssr: true,
});

const ImpactStats = dynamic(() => import("@/components/shared/ImpactStats"), {
  ssr: true,
});

const WorkProcess = dynamic(() => import("@/components/features/landing/WorkProcess"), {
  loading: () => <LoadingSkeleton height="h-[500px]" className="mx-auto max-w-7xl" />,
  ssr: true,
});

const PricingSection = dynamic(() => import("@/components/features/landing/PricingSection"), {
  loading: () => <LoadingSkeleton height="h-[650px]" className="mx-auto max-w-7xl" />,
  ssr: true,
});

const AuditReportGenerator = dynamic(
  () =>
    import("@/components/templates/sections/AuditReportGenerator").then(
      (mod) => mod.AuditReportGenerator,
    ),
  {
    loading: () => <LoadingSkeleton height="h-[400px]" className="mx-auto max-w-7xl" />,
    ssr: true,
  },
);

const DirectTerminal = dynamic(
  () => import("@/components/templates/sections/DirectTerminal").then((mod) => mod.DirectTerminal),
  {
    ssr: true,
  },
);

// [ISR]: Optimal revalidation cycle for high-performance indexing
export const revalidate = 3600;

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
      itemListElement: featuredServices.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.title,
        url: `${SITE_CONFIG.siteUrl}/services/${s.slug}`,
      })),
    },
  ]);

  return (
    <main className="bg-surface-main flex w-full flex-col overflow-hidden">
      <JsonLd data={homeSchema} id="schema-homepage" />

      {/* --- 01. INTRODUCTORY SEQUENCE --- */}
      <header className="relative w-full">
        {/* HERO GATEWAY: Specialist Dedicated Design */}
        <AEMSpecialistHero />

        {/* AUTHORITY HUB: Micro-interaction ready */}
        <section
          className="relative z-20 -mt-20 px-4 md:-mt-28 lg:-mt-36"
          aria-label="Authority Metrics"
        >
          <div className="mx-auto max-w-7xl">
            <div className="glass-card shadow-pro-xl rounded-section border-border/50 bg-surface-card/80 relative overflow-hidden border p-10 backdrop-blur-3xl md:p-20">
              <div className="relative z-10 flex flex-col items-center gap-16 md:gap-24">
                <Suspense
                  fallback={
                    <div className="bg-surface-card/10 h-20 w-full animate-pulse rounded-full" />
                  }
                >
                  <TrustBadge />
                </Suspense>

                <div className="bg-border/20 h-px w-full" />

                <Suspense
                  fallback={
                    <div className="rounded-section bg-surface-card/10 h-64 w-full animate-pulse" />
                  }
                >
                  <ImpactStats />
                </Suspense>
              </div>
              <div className="bg-brand-primary/5 pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full blur-[120px]" />
            </div>
          </div>
        </section>
      </header>

      {/* --- 02. CORE EXPERTISE --- */}
      <section id="services" className="py-24 md:py-32" aria-labelledby="services-heading">
        <div className="container mx-auto px-4 md:px-8">
          <header className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="space-y-2">
              <span className="text-brand-primary block font-mono text-[10px] font-black tracking-[0.4em] uppercase">
                Expertise_Architecture
              </span>
              <h2
                id="services-heading"
                className="text-text-primary text-5xl font-black tracking-tighter uppercase italic md:text-7xl lg:text-8xl"
              >
                Core <span className="text-brand-primary">Solutions.</span>
              </h2>
            </div>
            <Link
              href="/services"
              className="group border-brand-primary/20 bg-brand-primary/5 hover:bg-brand-primary text-text-primary hover:text-surface-main flex items-center gap-3 rounded-full border px-6 py-4 text-[10px] font-black tracking-widest uppercase transition-all duration-500"
            >
              Master Services Registry
              <IconRenderer
                name="ArrowRight"
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </header>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, i) => (
              <ServiceCard key={service.id} data={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* --- 03. DIAGNOSTIC LABORATORY --- */}
      <section
        className="bg-surface-offset border-border/40 border-y py-24 md:py-32"
        aria-labelledby="audit-heading"
      >
        <div className="container mx-auto px-4 md:px-8">
          <header className="mb-16 text-center">
            <span className="text-brand-primary font-mono text-[10px] font-black tracking-[0.4em] uppercase">
              Technical_Diagnosis_Engine
            </span>
            <h2
              id="audit-heading"
              className="text-text-primary mt-4 text-4xl font-black tracking-tighter uppercase italic md:text-6xl"
            >
              Audit <br /> <span className="text-brand-primary">Laboratory.</span>
            </h2>
          </header>

          <div className="space-y-24">
            <Suspense
              fallback={<LoadingSkeleton height="h-[400px]" className="mx-auto max-w-5xl" />}
            >
              <AuditReportGenerator />
            </Suspense>

            {/* Neural Authority Layer */}
            <div className="mx-auto max-w-5xl">
              <Suspense fallback={<LoadingSkeleton height="h-[300px]" />}>
                <LeadScoringHUD />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* --- 04. AUTHORITY EQUATION --- */}
      <section className="bg-black py-24">
        <Suspense fallback={<LoadingSkeleton height="h-[500px]" />}>
          <TrustEquation />
        </Suspense>
      </section>

      {/* --- 05. EXECUTION FRAMEWORK --- */}
      <section className="bg-surface-main py-24" aria-label="Working Process">
        <Suspense fallback={<LoadingSkeleton height="h-[500px]" className="mx-auto max-w-7xl" />}>
          <WorkProcess />
        </Suspense>
      </section>

      {/* --- 05. EVIDENCE & INSIGHTS --- */}
      <div className="bg-surface-offset border-border/40 border-y">
        {/* Success Evidence */}
        <section id="success" className="py-24 md:py-32" aria-labelledby="success-heading">
          <div className="container mx-auto px-4 md:px-8">
            <header className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="space-y-2">
                <span className="text-text-muted block font-mono text-[10px] font-black tracking-[0.4em] uppercase opacity-50">
                  Performance_Verified
                </span>
                <h2
                  id="success-heading"
                  className="text-text-primary text-5xl font-black tracking-tighter uppercase italic md:text-7xl"
                >
                  Success <span className="text-text-secondary/30">Nodes.</span>
                </h2>
              </div>
              <Link
                href="/case-studies"
                className="group border-border bg-surface-card text-text-primary hover:border-brand-primary/40 hover:text-brand-primary flex items-center gap-3 rounded-full border px-6 py-4 text-[10px] font-black tracking-widest uppercase transition-all duration-500"
              >
                View All Success Logs
                <IconRenderer
                  name="ArrowRight"
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </header>
            <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2">
              {recentCases.map((item, i) => (
                <CaseStudyCard key={item.slug} data={item} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Technical Insights */}
        <section
          className="border-border/40 border-t py-24 md:py-32"
          aria-labelledby="insights-heading"
        >
          <div className="container mx-auto px-4 md:px-8">
            <header className="mb-16 flex items-center justify-between">
              <h2
                id="insights-heading"
                className="text-text-primary text-4xl font-black tracking-tighter uppercase italic md:text-6xl"
              >
                Technical <span className="text-brand-primary">Insights.</span>
              </h2>
            </header>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} priority={false} />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* --- 06. CONVERSION & REGIONAL COVERAGE --- */}
      <div className="bg-surface-main">
        {/* Pricing Strategy */}
        <section className="pb-24">
          <Suspense fallback={<LoadingSkeleton height="h-[650px]" className="mx-auto max-w-7xl" />}>
            <PricingSection />
          </Suspense>
        </section>

        {/* Geographic Terminal */}
        <section
          className="bg-surface-offset border-border/60 border-t py-24"
          aria-labelledby="coverage-heading"
        >
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-20 flex flex-col items-center justify-center gap-12">
              <div className="text-center">
                <span className="text-text-muted font-mono text-[9px] font-black tracking-[0.5em] uppercase opacity-50">
                  Network_Coverage_Index
                </span>
                <h2
                  id="coverage-heading"
                  className="text-text-primary mt-4 text-4xl font-black tracking-tighter uppercase italic md:text-5xl"
                >
                  Regional <span className="text-brand-primary">Stability.</span>
                </h2>
              </div>

              <div className="w-full max-w-2xl">
                <Suspense
                  fallback={<div className="h-48 w-full animate-pulse rounded-2xl bg-black/20" />}
                >
                  <DirectTerminal mode="health-check" province="Thailand" />
                </Suspense>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {featuredAreas.map((area, i) => (
                <AreaCard key={area.slug} data={area} index={i} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/areas"
                className="text-text-muted hover:text-brand-primary inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] uppercase transition-colors"
              >
                Explore All Regional Nodes
                <IconRenderer name="ArrowRight" size={14} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
