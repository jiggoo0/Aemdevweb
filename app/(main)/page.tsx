/**
 * [CORE PAGE]: HOMEPAGE v18.2.0 (OPTIMIZED_REFACTOR)
 * [STRATEGY]: Static-First | Zero-CLS | Schema-Synchronized
 */

import React, { Suspense } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

// --- Infrastructure ---
import { AREA_NODES } from "@/constants/area-nodes";
import { getFeaturedServices } from "@/constants/master-registry";
import { SITE_CONFIG } from "@/constants/site-config";
import { cn } from "@/lib/utils";
import { getAllPosts, getAllCaseStudies } from "@/lib/cms";
import { generateSchemaGraph } from "@/lib/schema";
import { constructMetadata } from "@/lib/seo-utils";

// --- UI Components ---
import JsonLd from "@/components/seo/JsonLd";
import IconRenderer from "@/components/ui/IconRenderer";
import HeroEngine from "@/components/templates/sections/HeroEngine";
import TrustBadge from "@/components/shared/TrustBadge";
import ImpactStats from "@/components/shared/ImpactStats";
import ServiceCard from "@/components/features/services/ServiceCard";
import CaseStudyCard from "@/components/features/case-studies/CaseStudyCard";
import BlogCard from "@/components/features/blog/BlogCard";
import AreaCard from "@/components/features/areas/AreaCard";

// --- Deferred UI (Hydration Optimization) ---
const Skeleton = ({ className }: { className?: string }) => (
  <div className={cn("bg-surface-card/30 border-border/10 animate-pulse rounded-[2.5rem] border overflow-hidden", className)} />
);

const WorkProcess = dynamic(() => import("@/components/features/landing/WorkProcess"), {
  loading: () => <Skeleton className="mx-auto max-w-7xl h-[500px]" />,
  ssr: true, 
});

const PricingSection = dynamic(() => import("@/components/features/landing/PricingSection"), {
  loading: () => <Skeleton className="mx-auto max-w-7xl h-[650px]" />,
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
  // 1. Parallel Data Fetching with Integrated Slicing (ลดการประมวลผลซ้ำใน UI)
  const [caseStudies, blogPosts] = await Promise.all([
    getAllCaseStudies().then(res => res.slice(0, 2)).catch(() => []),
    getAllPosts().then(res => res.slice(0, 3)).catch(() => []),
  ]);

  const featuredServices = getFeaturedServices().slice(0, 3);
  const featuredAreas = AREA_NODES.filter((n) => (n.priority ?? 0) >= 95).slice(0, 4);

  // 2. Specialized Schema Graph Generation
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
      sameAs: Object.values(SITE_CONFIG.links).filter(Boolean) as string[],
    },
    {
      "@type": "ItemList",
      "name": "Featured Core Services",
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

      <HeroEngine align="center" showIndicator priority />

      {/* AUTHORITY HUB */}
      <section className="relative z-20 -mt-16 px-4 md:-mt-24 lg:-mt-32">
        <div className="mx-auto max-w-7xl">
          <div className="glass-card shadow-pro-xl relative overflow-hidden rounded-[2.5rem] border border-white/5 p-8 md:p-16">
            <div className="relative z-10 flex flex-col items-center gap-12 md:gap-16 text-center">
              <TrustBadge />
              <div className="h-px w-full bg-gradient-to-r from-transparent via-border/30 to-transparent" />
              <ImpactStats />
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
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
              <ServiceCard key={service.id || i} data={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* DYNAMIC SECTIONS */}
      <section className="bg-surface-offset border-border/40 border-y py-24">
        <Suspense fallback={<Skeleton className="mx-auto max-w-7xl h-[500px]" />}>
          <WorkProcess />
        </Suspense>
      </section>

      {/* SUCCESS EVIDENCE */}
      <section id="success" className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-text-primary mb-16 text-5xl font-black tracking-tighter uppercase italic md:text-6xl">
            Success <span className="text-text-secondary/30">Nodes.</span>
          </h2>
          <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2">
            {caseStudies.map((item, i) => (
              <CaseStudyCard key={item.slug} data={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL INSIGHTS */}
      <section className="bg-surface-main border-border/40 border-t py-24 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-text-primary mb-16 text-4xl font-black tracking-tighter uppercase italic md:text-6xl">
            Technical <span className="text-brand-primary">Insights.</span>
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} priority={false} />
            ))}
          </div>
        </div>
      </section>

      {/* GEOGRAPHIC & CONVERSION */}
      <div className="bg-surface-offset">
        <Suspense fallback={<Skeleton className="mx-auto max-w-7xl h-[650px]" />}>
          <PricingSection />
        </Suspense>

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
