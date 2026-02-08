/**
 * [CORE PAGE]: HOMEPAGE v17.0.12 (SERVICE_CARD_IMPORTED)
 * [STRATEGY]: Seamless Layering | Conversion Physics | Neural Flow | Authority Mapping
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

// --- 1. DATA & INFRASTRUCTURE ---
import { SITE_CONFIG } from "@/constants/site-config";
import { AREA_NODES } from "@/constants/area-nodes";
import { MASTER_REGISTRY } from "@/constants/master-registry";
import { getAllPosts, getAllCaseStudies } from "@/lib/cms";
import { cn } from "@/lib/utils";
import { generateOrganizationSchema, generatePersonSchema } from "@/lib/schema";

// --- 2. FEATURE MODULES ---
import Hero from "@/components/features/landing/Hero";
import WorkProcess from "@/components/features/landing/WorkProcess";
import PricingSection from "@/components/features/landing/PricingSection";

// --- 3. COMPONENT NODES ---
import BlogCard from "@/components/features/blog/BlogCard";
import CaseStudyCard from "@/components/features/case-studies/CaseStudyCard";
import AreaCard from "@/components/features/areas/AreaCard";
import TrustBadge from "@/components/shared/TrustBadge";
import ImpactStats from "@/components/shared/ImpactStats";
import JsonLd from "@/components/seo/JsonLd";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/button";

// [ADDED]: Import ServiceCard เพื่อป้องกัน Error ใน Service Section
// (ตรวจสอบ Path ให้ตรงกับที่คุณเก็บไฟล์ ServiceCard.tsx)
import ServiceCard from "@/components/features/services/ServiceCard";

export const metadata: Metadata = {
  title: `รับทำเว็บไซต์และ SEO เชิงยุทธศาสตร์ | ${SITE_CONFIG.brandName}`,
  description: SITE_CONFIG.description,
  keywords: [...SITE_CONFIG.keywords],
};

export default async function HomePage() {
  // [DATA FETCHING]: Parallel Request Pattern
  const [casesData, postsData] = await Promise.all([
    getAllCaseStudies().catch(() => []),
    getAllPosts().catch(() => []),
  ]);

  const recentCases = (casesData || []).slice(0, 2);
  const recentPosts = (postsData || []).slice(0, 3);

  // กรองเฉพาะพื้นที่ Priority สูง (Score 95+)
  const featuredAreas = AREA_NODES.filter((node) => node.priority >= 95).slice(0, 4);

  // ดึง 3 บริการแรกตามลำดับความสำคัญ (1=สำคัญสุด)
  const featuredServices = [...MASTER_REGISTRY]
    .sort((a, b) => (a.priority || 99) - (b.priority || 99))
    .slice(0, 3);

  /**
   * [SEO STRATEGY]: EEAT Authority Injection
   */
  const combinedSchema = [generateOrganizationSchema(), generatePersonSchema()];

  return (
    <main className="bg-surface-main relative flex min-h-screen flex-col overflow-x-hidden">
      {/* 00. SEARCH ENGINE INTELLIGENCE */}
      <JsonLd data={combinedSchema} />

      {/* SECTION 01: HERO GATEWAY */}
      <section id="hero" className="relative z-30 pt-20 pb-12 lg:pt-28">
        <Hero />
      </section>

      {/* SECTION 02: AUTHORITY HUB */}
      <section className="relative z-40 -mt-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div
            className={cn(
              "relative p-8 md:p-12 lg:p-16",
              "rounded-[2.5rem] border border-white/10 bg-[#0A0A0A]/80 shadow-2xl backdrop-blur-xl",
              "hover:border-brand-primary/20 transition-all duration-700 hover:shadow-[0_0_50px_rgba(34,197,94,0.05)]",
            )}
          >
            <div className="absolute inset-0 -z-10 bg-[url('/grid-pattern.svg')] opacity-[0.05]" />
            <div className="flex flex-col items-center gap-10 md:gap-16">
              <TrustBadge />
              <div className="relative w-full max-w-4xl opacity-50">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 bg-black/50 px-4 py-1 backdrop-blur-md">
                  <span className="text-brand-primary font-mono text-[9px] font-black tracking-[0.4em] uppercase">
                    System_Metrics.Live
                  </span>
                </div>
              </div>
              <ImpactStats />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: PROCESS ROADMAP */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <WorkProcess />
        </div>
      </section>

      {/* SECTION 04: SERVICE BLUEPRINT (Direct Mapping) */}
      <section id="services" className="relative overflow-hidden bg-[#050505] py-24 md:py-32">
        <div className="from-brand-primary/5 absolute top-0 left-0 h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] via-transparent to-transparent opacity-40" />

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <header className="mb-20 flex flex-col justify-between gap-10 border-b border-white/10 pb-12 lg:flex-row lg:items-end">
            <div className="space-y-6">
              <div className="border-brand-primary/20 bg-brand-primary/10 text-brand-primary inline-flex items-center gap-3 rounded-full border px-4 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="bg-brand-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                  <span className="bg-brand-primary relative inline-flex h-2 w-2 rounded-full"></span>
                </span>
                <span className="font-mono text-[10px] font-bold tracking-widest uppercase">
                  System.v17.0
                </span>
              </div>
              <h2 className="text-5xl font-black tracking-tighter text-white uppercase italic md:text-7xl lg:text-8xl">
                Strategic <br />
                <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
                  Services.
                </span>
              </h2>
            </div>
            <div className="border-brand-primary max-w-md border-l-4 pl-8 text-lg leading-relaxed font-medium text-gray-400 italic">
              "เราไม่ได้แค่ทำเว็บ แต่เราออกแบบเครื่องจักรทางธุรกิจที่ทำงานแทนคุณ 24 ชั่วโมง"
            </div>
          </header>

          <div className="grid gap-8 md:grid-cols-3">
            {featuredServices.map((service, index) => (
              // [UPDATED]: ใช้ ServiceCard แทน Link ธรรมดา เพื่อให้ได้ Design ที่สวยงามและ Interactive
              <ServiceCard
                key={service.id || index}
                data={service}
                index={index}
                isPopular={service.isPopular}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05: PRICING & INVESTMENT */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <PricingSection />
        </div>
      </section>

      {/* SECTION 06: SUCCESS EVIDENCE */}
      <section id="success" className="border-y border-white/5 bg-white/[0.02] py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
            <div className="space-y-4">
              <span className="text-brand-primary font-mono text-xs font-bold tracking-[0.3em] uppercase">
                Portfolio_Archive
              </span>
              <h2 className="text-4xl font-black tracking-tighter text-white uppercase italic md:text-6xl">
                Success Evidence
              </h2>
            </div>
            <Button
              asChild
              variant="outline"
              className="hover:bg-brand-primary h-12 rounded-full border-white/10 bg-white/5 px-8 text-xs font-bold tracking-widest text-white uppercase hover:border-transparent hover:text-black"
            >
              <Link href="/case-studies" className="flex items-center gap-3">
                ดูผลงานทั้งหมด
                <IconRenderer name="ArrowRight" size={16} />
              </Link>
            </Button>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {recentCases.length > 0 ? (
              recentCases.map((item, index) => (
                <CaseStudyCard key={item.slug} data={item} index={index} />
              ))
            ) : (
              <div className="col-span-full rounded-3xl border border-dashed border-white/10 py-20 text-center">
                <p className="text-gray-500">กำลังอัปเดตผลงานล่าสุด...</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 07: KNOWLEDGE HUB */}
      <section id="knowledge" className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <header className="mb-16 space-y-4">
            <span className="text-brand-primary font-mono text-xs font-bold tracking-[0.3em] uppercase">
              Intelligence.Archive
            </span>
            <h2 className="text-4xl font-black tracking-tighter text-white uppercase italic md:text-6xl">
              Knowledge Hub
            </h2>
          </header>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {recentPosts.length > 0 ? (
              recentPosts.map((post, index) => (
                <BlogCard key={post.slug} data={post} index={index} />
              ))
            ) : (
              <div className="col-span-full rounded-3xl border border-dashed border-white/10 py-20 text-center">
                <p className="text-gray-500">บทความกำลังมาเร็วๆ นี้...</p>
              </div>
            )}
          </div>

          <div className="mt-20 flex justify-center">
            <Link
              href="/blog"
              className={cn(
                "group relative inline-flex items-center px-8 py-4 font-mono text-sm text-white",
                "hover:text-brand-primary transition-all",
              )}
            >
              <span className="mr-4 font-bold tracking-widest uppercase">Explore All Articles</span>
              <IconRenderer
                name="ArrowRight"
                size={18}
                className="transition-transform group-hover:translate-x-2"
              />
              <span className="group-hover:via-brand-primary absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 08: LOCAL NODES (Nationwide Strategy) */}
      <section id="areas" className="border-t border-white/5 bg-[#050505] py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 flex items-center justify-between opacity-70">
            <div className="flex items-center gap-4">
              <IconRenderer name="MapPin" size={24} className="text-brand-primary" />
              <h3 className="text-xl font-bold tracking-widest text-white uppercase">
                Nationwide Coverage
              </h3>
            </div>
            <Link
              href="/areas"
              className="text-brand-primary font-mono text-xs uppercase hover:underline"
            >
              View All Areas →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredAreas.map((area, index) => (
              <AreaCard key={area.slug} data={area} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
