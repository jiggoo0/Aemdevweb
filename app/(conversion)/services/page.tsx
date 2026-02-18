/**
 * [PAGE]: SERVICES_HUB_SYSTEM v18.0.5 (STABILIZED)
 * [STRATEGY]: Emotional Hook | Benefit-Driven Architecture | ROI Focus
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React, { Suspense } from "react";
import type { Metadata, Viewport } from "next";

// --- UI Components & Layout ---
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import ServiceListingHub from "@/components/features/services/ServiceListingHub";
import WorkProcess from "@/components/features/landing/WorkProcess"; // [RESOLVED]: Now in active use
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer";
import SkeletonGrid from "@/components/ui/SkeletonGrid";
import { constructMetadata } from "@/lib/seo-utils";
import { SITE_CONFIG } from "@/constants/site-config";
import JsonLd from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateSchemaGraph } from "@/lib/schema";

export const viewport: Viewport = {
  themeColor: SITE_CONFIG.themeColor,
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = constructMetadata({
  title: "บริการรับทำเว็บไซต์ครบวงจร | ออกแบบระบบเพื่อกำไรสูงสุด",
  description:
    "โซลูชันเว็บไซต์ที่ออกแบบมาเพื่อธุรกิจยุคใหม่ เน้นโหลดไว ติดหน้าแรก Google และปิดการขายได้จริง โดยทีมวิศวกรซอฟต์แวร์และผู้เชี่ยวชาญ SEO",
  path: "/services",
  image: "/images/services/corporate-node.webp",
});

export default function ServicesPage() {
  const fullSchema = generateSchemaGraph([
    generateBreadcrumbSchema([
      { name: "หน้าแรก", item: "/" },
      { name: "บริการ", item: "/services" },
    ]),
  ]);

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={fullSchema} id="schema-services-hub" />

      <main className="relative min-h-screen pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          {/* 01. STRATEGIC HEADER */}
          <header className="mb-24 max-w-6xl space-y-10 md:mb-32">
            <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-4 rounded-full border px-6 py-2.5 font-mono text-[10px] font-black tracking-[0.4em] uppercase backdrop-blur-md">
              <div className="bg-brand-primary h-2 w-2 animate-pulse rounded-full shadow-[0_0_12px_var(--brand-primary)]" />
              <span suppressHydrationWarning>Service_Registry.v{SITE_CONFIG.project.version}</span>
            </div>

            <h1 className="text-text-primary text-5xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl">
              Built for <br /> <span className="text-brand-primary">Your Business.</span>
            </h1>

            <div className="border-brand-primary border-l-4 pl-8 md:pl-14">
              <p className="text-text-secondary max-w-4xl text-xl leading-relaxed font-medium italic opacity-90 md:text-3xl">
                เราไม่ได้แค่เขียนโค้ด แต่เราออกแบบ{" "}
                <span className="text-text-primary decoration-brand-primary font-black not-italic underline decoration-4 underline-offset-8">
                  ระบบสร้างยอดขาย
                </span>{" "}
                ที่ทำให้ Google และลูกค้าตัวจริงยอมรับในแบรนด์ของคุณ
              </p>
            </div>
          </header>

          {/* 02. SERVICE GRID */}
          <section id="service-nodes" className="min-h-[600px] w-full">
            <Suspense fallback={<SkeletonGrid count={6} aspectRatio="video" />}>
              <ServiceListingHub className="gap-8 md:gap-14" />
            </Suspense>
          </section>

          {/* 03. WORK PROCESS: Integrated for Conversion Domination */}
          {/* [INJECTED]: แสดงขั้นตอนการทำงานเพื่อสร้างความมั่นใจก่อนปิดการขาย */}
          <WorkProcess />

          {/* 04. TRUST PILLARS (E-E-A-T) */}
          <div className="border-border mt-32 border-t pt-24 md:mt-48">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
              {[
                {
                  title: "Expertise That Matters",
                  desc: "ใช้เทคโนโลยี Next.js 16 ระดับสากล ปรับแต่งให้รองรับพฤติกรรมผู้ใช้ในไทยโดยเฉพาะ",
                  icon: "ShieldCheck" as IconName,
                },
                {
                  title: "Sales-First Design",
                  desc: "โครงสร้างทุกพิกเซลถูกคำนวณตามจิตวิทยาการซื้อ เพื่อผลตอบแทน ROI ที่วัดผลได้จริง",
                  icon: "TrendingUp" as IconName,
                },
                {
                  title: "High-Performance Core",
                  desc: "ระบบเสถียรและโหลดไวกว่ามาตรฐานทั่วไป พร้อมโครงสร้าง Semantic HTML เพื่อ SEO",
                  icon: "Zap" as IconName,
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="group border-border bg-surface-card hover:border-brand-primary/40 relative overflow-hidden rounded-[3.5rem] border p-10 transition-all duration-700 hover:-translate-y-2 md:p-14"
                >
                  <div className="text-brand-primary border-border bg-surface-main group-hover:bg-brand-primary group-hover:text-surface-main mb-10 flex h-20 w-20 items-center justify-center rounded-[2rem] border transition-all duration-500 group-hover:rotate-6">
                    <IconRenderer name={feature.icon} size={36} />
                  </div>
                  <h3 className="text-text-primary group-hover:text-brand-primary text-3xl font-black tracking-tighter uppercase italic transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary mt-6 text-lg leading-relaxed font-medium italic opacity-85">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </LayoutEngine>
  );
}
