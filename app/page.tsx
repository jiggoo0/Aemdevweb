/**
 * [CORE PAGE]: HOMEPAGE v17.5.5 (IDENTITY_LOCKED)
 * [STRATEGY]: Symmetrical Rhythm | High-Mass Balance | Conversion Flow
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import Link from "next/link";

// --- 1. Infrastructure & CMS Engine ---
import { AREA_NODES } from "@/constants/area-nodes";
import { MASTER_REGISTRY } from "@/constants/master-registry";
import { getAllPosts, getAllCaseStudies } from "@/lib/cms";
import { generateSchemaGraph } from "@/lib/schema"; 
import { constructMetadata } from "@/lib/seo-utils";
import { SITE_CONFIG } from "@/constants/site-config";

// --- 2. Feature & Section Engines ---
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import Hero from "@/components/features/landing/Hero";
import WorkProcess from "@/components/features/landing/WorkProcess";
import PricingSection from "@/components/features/landing/PricingSection";

// --- 3. Component Nodes ---
import BlogCard from "@/components/features/blog/BlogCard";
import CaseStudyCard from "@/components/features/case-studies/CaseStudyCard";
import AreaCard from "@/components/features/areas/AreaCard";
import ServiceCard from "@/components/features/services/ServiceCard";
import TrustBadge from "@/components/shared/TrustBadge";
import ImpactStats from "@/components/shared/ImpactStats";
import JsonLd from "@/components/seo/JsonLd";

// --- 4. Types ---
import type { AreaNode, TemplateMasterData, BlogPost, CaseStudy } from "@/types";

/* [A] SEO AUTHORITY PROTOCOL: Metadata เชิงยุทธศาสตร์ */
export const metadata = constructMetadata({
  title: "รับทำเว็บไซต์และ SEO เชิงยุทธศาสตร์ | Web Infrastructure Specialist",
  description: SITE_CONFIG.description,
  path: "/",
  image: "/images/og-main.png",
});

export default async function HomePage() {
  // 01. PARALLEL DATA FETCHING: ดึงข้อมูลแบบคู่ขนานเพื่อลด Latency
  const [cases, posts] = await Promise.all([
    getAllCaseStudies().catch(() => [] as CaseStudy[]),
    getAllPosts().catch(() => [] as BlogPost[]),
  ]);

  // Strategic Data Slicing: กัดกรองโหนดสำคัญตาม Priority
  const recentCases = cases.slice(0, 2);
  const recentPosts = posts.slice(0, 3);
  const featuredAreas = AREA_NODES.filter((n: AreaNode) => (n.priority ?? 0) >= 95).slice(0, 4);
  const featuredServices = MASTER_REGISTRY.slice(0, 3);

  return (
    <LayoutEngine spacing="none">
      {/* [SEO_GRAPH_INJECTION]: เชื่อมโยงตัวตน อลงกรณ์ ยมเกิด เข้ากับแบรนด์โดยตรง */}
      <JsonLd data={generateSchemaGraph([])} />

      {/* --- SECTION 01: HERO GATEWAY --- */}
      <Hero />

      {/* --- SECTION 02: AUTHORITY HUB (Trust & Metrics) --- */}
      <section className="relative z-30 -mt-24 px-4 md:-mt-48 lg:-mt-56">
        <div className="mx-auto max-w-7xl">
          <div className="bg-surface-card/40 border-border shadow-pro-xl relative overflow-hidden rounded-[4rem] border p-12 backdrop-blur-3xl md:p-24">
            <div className="bg-infrastructure-grid absolute inset-0 -z-10 opacity-[0.05]" aria-hidden="true" />
            <div className="flex flex-col items-center gap-24">
              <TrustBadge />
              <div className="via-border/50 h-px w-full max-w-5xl bg-gradient-to-r from-transparent to-transparent" aria-hidden="true" />
              <ImpactStats />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 03: PROCESS ROADMAP --- */}
      <section className="py-32 md:py-56 lg:py-64">
        <WorkProcess />
      </section>

      {/* --- SECTION 04: CORE SOLUTIONS --- */}
      <section id="services" className="bg-surface-offset/20 py-32 md:py-48">
        <div className="container mx-auto px-4">
          <header className="mb-24 space-y-8">
            <h2 className="text-text-primary text-6xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-9xl">
              Core <br /> <span className="text-brand-primary">Solutions.</span>
            </h2>
            <div className="bg-brand-primary h-2 w-32 rounded-full" />
          </header>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
            {featuredServices.map((service: TemplateMasterData, i: number) => (
              <ServiceCard key={service.id || i} data={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 05: SUCCESS EVIDENCE (Case Studies) --- */}
      <section id="success" className="py-32 md:py-56">
        <div className="container mx-auto px-4">
          <div className="border-border mb-24 flex flex-col justify-between gap-12 border-b pb-12 md:flex-row md:items-end">
            <h2 className="text-text-primary text-5xl font-black tracking-tighter uppercase italic md:text-8xl">
              Case <br /> Audits.
            </h2>
            <Link
              href="/case-studies"
              className="group text-brand-primary flex items-center gap-4 font-mono text-xs font-black tracking-widest uppercase transition-all"
            >
              <span>Explore_All_Successful_Nodes</span>
              <div className="bg-brand-primary h-px w-12 transition-all group-hover:w-24" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
            {recentCases.map((item: CaseStudy, i: number) => (
              <CaseStudyCard key={item.slug || i} data={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 06: PRICING & INVESTMENT --- */}
      <section className="bg-surface-main relative overflow-hidden py-32 md:py-48">
        <div className="bg-brand-primary/5 absolute top-0 left-0 h-full w-full skew-y-3 transform" aria-hidden="true" />
        <PricingSection />
      </section>

      {/* --- SECTION 07: KNOWLEDGE HUB (Insights) --- */}
      <section id="knowledge" className="py-32 md:py-56">
        <div className="container mx-auto px-4">
          <header className="mb-24">
            <h2 className="text-text-primary text-5xl font-black tracking-tighter uppercase italic md:text-8xl">
              Insights.
            </h2>
          </header>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-12">
            {recentPosts.map((post: BlogPost, i: number) => (
              <BlogCard key={post.slug || i} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 08: GEOGRAPHIC EXPANSION --- */}
      <section className="border-border border-t py-32 md:py-48">
        <div className="container mx-auto px-4">
          <div className="mb-20 flex items-center gap-6">
            <div className="bg-brand-primary shadow-glow h-12 w-1.5" />
            <h3 className="text-text-primary text-2xl font-black tracking-widest uppercase italic">
              Geographic_Expansion
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 lg:gap-10">
            {featuredAreas.map((area: AreaNode, i: number) => (
              <AreaCard key={area.slug || i} data={area} index={i} />
            ))}
          </div>
        </div>
      </section>
    </LayoutEngine>
  );
}
