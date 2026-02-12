/**
 * [CORE PAGE]: HOMEPAGE v17.9.9 (STABILIZED_FINAL)
 * [STRATEGY]: Symmetrical Rhythm | Parallel Data Fetching | Grid Projection
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

// --- 1. Infrastructure ---
import { AREA_NODES } from "@/constants/area-nodes";
import { MASTER_REGISTRY } from "@/constants/master-registry";
import { getAllPosts, getAllCaseStudies } from "@/lib/cms";
import { generateSchemaGraph } from "@/lib/schema";
import { constructMetadata } from "@/lib/seo-utils";
import { SITE_CONFIG } from "@/constants/site-config";
import JsonLd from "@/components/seo/JsonLd";

// --- 2. Feature Engines (Strategic Loading) ---
import Hero from "@/components/features/landing/Hero";

// [OPTIMIZATION]: Dynamic Imports เพื่อลด TBT (Total Blocking Time) และเพิ่มคะแนน LCP
const WorkProcess = dynamic(() => import("@/components/features/landing/WorkProcess"));
const PricingSection = dynamic(() => import("@/components/features/landing/PricingSection"));
const BlogCard = dynamic(() => import("@/components/features/blog/BlogCard"));
const CaseStudyCard = dynamic(() => import("@/components/features/case-studies/CaseStudyCard"));
const AreaCard = dynamic(() => import("@/components/features/areas/AreaCard"));
const ServiceCard = dynamic(() => import("@/components/features/services/ServiceCard"));
const TrustBadge = dynamic(() => import("@/components/shared/TrustBadge"));
const ImpactStats = dynamic(() => import("@/components/shared/ImpactStats"));

// --- 3. Types ---
import type { AreaNode, TemplateMasterData, BlogPost, CaseStudy } from "@/types";

export const metadata: Metadata = constructMetadata({
  title: `รับทำเว็บไซต์ & SEO คุณภาพสูง โดย ${SITE_CONFIG.expert.displayName}`,
  description: SITE_CONFIG.description,
  path: "/",
  image: "/images/og-main.webp",
});

export default async function HomePage() {
  /**
   * [PERFORMANCE]: Parallel Data Execution
   * ป้องกันปัญหา Waterfall ด้วยการดึงข้อมูล MDX พร้อมกัน
   */
  const [cases, posts] = await Promise.all([
    getAllCaseStudies().catch(() => [] as CaseStudy[]),
    getAllPosts().catch(() => [] as BlogPost[]),
  ]);

  const recentCases = cases.slice(0, 2);
  const recentPosts = posts.slice(0, 3);
  const featuredAreas = AREA_NODES.filter((n: AreaNode) => (n.priority ?? 0) >= 95).slice(0, 4);
  const featuredServices = MASTER_REGISTRY.slice(0, 3);

  return (
    <div className="flex flex-col">
      <JsonLd data={generateSchemaGraph([])} />

      {/* --- 01. HERO GATEWAY --- */}
      <Hero />

      {/* --- 02. AUTHORITY HUB --- */}
      <section className="relative z-30 -mt-24 px-4 md:-mt-48">
        <div className="mx-auto max-w-7xl">
          <div className="bg-surface-card/40 border-border shadow-pro-xl overflow-hidden rounded-[3rem] border p-8 backdrop-blur-3xl md:rounded-[4rem] md:p-20">
            <div className="flex flex-col items-center gap-16 md:gap-24">
              <TrustBadge />
              <div className="via-border/50 h-px w-full bg-gradient-to-r from-transparent to-transparent" />
              <ImpactStats />
            </div>
          </div>
        </div>
      </section>

      {/* --- 03. PROCESS ROADMAP --- */}
      <section className="py-24 md:py-40">
        <WorkProcess />
      </section>

      {/* --- 04. CORE SOLUTIONS --- */}
      <section id="services" className="bg-surface-offset/10 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <header className="mb-20 space-y-6">
            <h2 className="text-text-primary text-5xl font-black tracking-tighter uppercase italic md:text-8xl">
              Core <span className="text-brand-primary">Solutions.</span>
            </h2>
          </header>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {featuredServices.map((service: TemplateMasterData, i: number) => (
              <ServiceCard key={service.id} data={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* --- 05. SUCCESS EVIDENCE (Case Studies) --- */}
      <section id="success" className="py-24 md:py-40">
        <div className="container mx-auto px-4">
          <div className="border-border mb-16 flex flex-col justify-between gap-8 border-b pb-12 md:flex-row md:items-end">
            <h2 className="text-text-primary text-5xl font-black tracking-tighter uppercase italic md:text-7xl">
              Case Audits.
            </h2>
            <Link
              href="/case-studies"
              className="text-brand-primary font-mono text-xs font-black tracking-widest uppercase hover:underline"
            >
              Explore_All_Nodes →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {recentCases.map((item: CaseStudy, i: number) => (
              <CaseStudyCard key={item.slug} data={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* --- 06. KNOWLEDGE ENGINE (Blog/Posts) --- */}
      {/* [RESOLVED]: เรียกใช้งาน recentPosts และ BlogCard เพื่อแก้ปัญหา Lint Warning */}
      <section className="bg-surface-offset/5 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <header className="mb-16">
            <h2 className="text-text-primary text-4xl font-black tracking-tighter uppercase italic md:text-6xl">
              Recent_Insights.
            </h2>
          </header>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post: BlogPost, i: number) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* --- 07. PRICING & INVESTMENT --- */}
      <section className="py-24 md:py-32">
        <PricingSection />
      </section>

      {/* --- 08. GEOGRAPHIC NODES (Local SEO) --- */}
      <section className="border-border border-t py-24 md:py-32">
        <div className="container mx-auto px-4">
          <h3 className="text-text-muted mb-12 font-mono text-xs font-black tracking-[0.5em] uppercase italic opacity-60">
            Geographic_Expansion
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
            {featuredAreas.map((area: AreaNode, i: number) => (
              <AreaCard key={area.slug} data={area} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
