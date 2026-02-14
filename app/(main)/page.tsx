/**
 * [CORE PAGE]: HOMEPAGE v17.9.110 (GLOBAL_STANDARD)
 * [STRATEGY]: Parallel Execution | Zero-CLS Lazy Loading | Optical Balanced Layout
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
import { cn } from "@/lib/utils"; // Import utility for cleaner classes

// --- 2. Data Fetching ---
import { getAllPosts, getAllCaseStudies } from "@/lib/cms";
import type { BlogPost, CaseStudy } from "@/types";

// --- 3. SEO & Schema ---
import { generateSchemaGraph } from "@/lib/schema";
import { constructMetadata } from "@/lib/seo-utils";
import JsonLd from "@/components/seo/JsonLd";
import IconRenderer from "@/components/ui/IconRenderer";

// --- 4. Critical UI (LCP Priority) ---
import Hero from "@/components/features/landing/Hero";
import TrustBadge from "@/components/shared/TrustBadge";
import ImpactStats from "@/components/shared/ImpactStats";

// --- 5. Lazy UI (Stability Guard with Skeleton) ---
const LoadingSkeleton = ({ height = "h-[400px]" }: { height?: string }) => (
  <div
    className={cn(
      "bg-surface-card/40 border-border/20 mx-auto w-full max-w-7xl animate-pulse rounded-[2rem] border",
      height,
    )}
  />
);

const WorkProcess = dynamic(() => import("@/components/features/landing/WorkProcess"), {
  loading: () => <LoadingSkeleton height="h-[500px]" />,
});

const PricingSection = dynamic(() => import("@/components/features/landing/PricingSection"), {
  loading: () => <LoadingSkeleton height="h-[700px]" />,
});

const ServiceCard = dynamic(() => import("@/components/features/services/ServiceCard"));
const CaseStudyCard = dynamic(() => import("@/components/features/case-studies/CaseStudyCard"));
const BlogCard = dynamic(() => import("@/components/features/blog/BlogCard"));
const AreaCard = dynamic(() => import("@/components/features/areas/AreaCard"));

export const metadata: Metadata = constructMetadata({
  title: `Technical SEO Specialist & Web Architect | ${SITE_CONFIG.expert.displayName}`,
  description: SITE_CONFIG.description,
  path: "/",
  image: "/images/og-main.webp",
});

export default async function HomePage() {
  /** [PERFORMANCE]: Parallel Data Execution */
  const [caseStudies, blogPosts] = await Promise.all([
    getAllCaseStudies().catch(() => [] as CaseStudy[]),
    getAllPosts().catch(() => [] as BlogPost[]),
  ]);

  const featuredServices = getFeaturedServices().slice(0, 3);
  const recentCases = caseStudies.slice(0, 2);
  const recentPosts = blogPosts.slice(0, 3);
  const featuredAreas = AREA_NODES.filter((n) => (n.priority ?? 0) >= 95).slice(0, 4);

  return (
    <div className="bg-surface-main flex w-full flex-col overflow-hidden">
      <JsonLd data={generateSchemaGraph([])} />

      {/* --- 01. HERO GATEWAY (LCP Layer) --- 
          Hero ควรจัดการเรื่อง padding-top ภายในตัวเอง หรือปล่อยให้ Layout จัดการ
      */}
      <Hero />

      {/* --- 02. AUTHORITY HUB (Overlap Strategy) --- 
          - z-10: ลอยเหนือ Hero Background
          - relative: เพื่อให้ negative margin ทำงานถูกต้อง
      */}
      <section className="pointer-events-none relative z-10 -mt-12 px-4 md:-mt-24 lg:-mt-32">
        <div className="pointer-events-auto mx-auto max-w-7xl">
          <div className="glass-card shadow-pro-xl relative overflow-hidden rounded-[2.5rem] p-8 md:p-16">
            {/* Grid Pattern Background */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{ backgroundImage: `url("/grid-pattern.svg")`, backgroundSize: "40px 40px" }}
            />

            <div className="relative z-10 flex flex-col items-center gap-12 md:gap-16">
              <TrustBadge />
              <div className="via-border h-px w-full bg-gradient-to-r from-transparent to-transparent opacity-50" />
              <ImpactStats />
            </div>
          </div>
        </div>
      </section>

      {/* --- 03. CORE SOLUTIONS --- */}
      <section id="services" className="relative py-24 md:py-32">
        <div className="container mx-auto">
          <header className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-brand-primary mb-4 block font-mono text-xs font-bold tracking-widest uppercase">
                Our Expertise
              </span>
              <h2 className="text-text-primary text-4xl font-black tracking-tighter uppercase italic md:text-6xl lg:text-7xl">
                Core{" "}
                <span className="from-brand-primary to-brand-secondary bg-gradient-to-r bg-clip-text text-transparent">
                  Solutions.
                </span>
              </h2>
            </div>
            <Link
              href="/services"
              className="group hover:text-brand-primary flex items-center gap-2 text-sm font-bold tracking-widest uppercase transition-colors"
            >
              ดูบริการทั้งหมด
              <IconRenderer
                name="ArrowRight"
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </header>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {featuredServices.map((service, i) => (
              <ServiceCard key={service.id} data={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* --- 04. PROCESS (Lazy) --- */}
      <section className="bg-surface-offset border-border/50 border-y py-24">
        <WorkProcess />
      </section>

      {/* --- 05. SUCCESS EVIDENCE --- */}
      <section id="success" className="py-24 md:py-32">
        <div className="container mx-auto">
          <header className="mb-16">
            <h2 className="text-text-primary text-4xl font-black tracking-tighter uppercase italic md:text-6xl">
              Case <span className="text-text-secondary">Audits.</span>
            </h2>
          </header>

          <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2">
            {recentCases.map((item, i) => (
              <CaseStudyCard key={item.slug} data={item} index={i} className="min-h-[400px]" />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/case-studies"
              className="border-border hover:border-brand-primary hover:text-brand-primary inline-flex items-center justify-center gap-2 rounded-full border px-8 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300"
            >
              Explore All Cases
            </Link>
          </div>
        </div>
      </section>

      {/* --- 06. INSIGHTS --- */}
      <section className="border-border/40 border-t py-24">
        <div className="container mx-auto">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-black tracking-tighter uppercase italic md:text-5xl">
              Recent <span className="text-brand-primary">Insights.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* --- 07. INVESTMENT --- */}
      <section className="pb-24">
        <PricingSection />
      </section>

      {/* --- 08. GEO NODES --- */}
      <section className="bg-surface-main border-border border-t py-16">
        <div className="container mx-auto">
          <div className="mb-8 flex items-center gap-3 opacity-70">
            <div className="bg-brand-primary h-1.5 w-1.5 animate-pulse rounded-full" />
            <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase">
              Geographic_Expansion
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {featuredAreas.map((area, i) => (
              <AreaCard key={area.slug} data={area} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
