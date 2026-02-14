/**
 * [PAGE]: SERVICES_HUB_SYSTEM v17.9.102 (STABILIZED)
 * [STRATEGY]: Emotional Hook | Benefit-Driven Architecture | ROI Focus
 * [MAINTAINER]: AEMZA MACKS (คุณเอ็ม)
 */

import React, { Suspense } from "react";
import type { Metadata } from "next";

// --- UI Components & Layout ---
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import ServiceListingHub from "@/components/features/services/ServiceListingHub";
import WorkProcess from "@/components/features/landing/WorkProcess";
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer";
import { constructMetadata } from "@/lib/seo-utils";
import { SITE_CONFIG } from "@/constants/site-config";

/* [METADATA]: Buyer Intent Optimized - ดักจับคำค้นหาสำคัญเพื่อทำ SEO */
export const metadata: Metadata = constructMetadata({
  title: "บริการรับทำเว็บไซต์ครบวงจร | เปลี่ยนเว็บไซต์ให้เป็นเครื่องมือผลิตกำไร",
  description:
    "รวมโซลูชันเว็บไซต์ที่ออกแบบมาเพื่อธุรกิจยุคใหม่ ตั้งแต่ Sale Page ไปจนถึงเว็บองค์กรมาตรฐานสากล เน้นโหลดไว ติดหน้าแรก Google และปิดการขายได้จริง โดย นายเอ็มซ่ามากส์",
  path: "/services",
  image: "/images/service/corporate-node.webp",
});

export default function ServicesPage() {
  return (
    <LayoutEngine spacing="none">
      <main className="relative min-h-screen pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          {/* 01. STRATEGIC HEADER: การสื่อสารคุณค่าผ่าน Visual Hierarchy */}
          <header className="mb-24 max-w-6xl space-y-10 md:mb-32">
            {/* System Version Badge */}
            <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-4 rounded-full border px-6 py-2.5 font-mono text-[10px] font-black tracking-[0.4em] uppercase backdrop-blur-md">
              <div className="bg-brand-primary shadow-glow h-2 w-2 animate-pulse rounded-full" />
              <span suppressHydrationWarning>Service_Registry.v{SITE_CONFIG.project.version}</span>
            </div>

            <h1 className="text-text-primary text-5xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl">
              Built for <br /> <span className="text-brand-primary">Your Business.</span>
            </h1>

            <div className="border-brand-primary border-l-4 pl-8 md:pl-14">
              <p className="text-text-secondary max-w-4xl text-xl leading-relaxed font-medium italic opacity-90 md:text-3xl">
                เราไม่ได้แค่เขียนโค้ด แต่เราออกแบบ{" "}
                <span className="text-text-primary decoration-brand-primary font-black not-italic underline decoration-4 underline-offset-8">
                  "ระบบสร้างยอดขาย"
                </span>{" "}
                ที่ทำให้ Google และลูกค้าตัวจริงหันมามองคุณ
              </p>
            </div>
          </header>

          {/* 02. SERVICE GRID: ส่วนแสดงผล Node บริการทั้งหมด (Dynamic Data) */}
          <section id="service-nodes" className="min-h-[600px] w-full">
            <Suspense fallback={<ServiceGridSkeleton />}>
              <ServiceListingHub className="gap-8 md:gap-14" />
            </Suspense>
          </section>

          {/* 03. PARTNERSHIP PROCESS: ขั้นตอนการทำงานระดับ Specialist */}
          <section id="process" className="mt-32 scroll-mt-32 md:mt-48">
            <div className="mb-16 space-y-6">
              <span className="text-brand-primary font-mono text-xs font-black tracking-widest uppercase">
                Workflow_Architecture
              </span>
              <h2 className="text-text-primary text-4xl font-black tracking-tighter uppercase italic md:text-6xl">
                How We <span className="text-brand-primary">Grow Together.</span>
              </h2>
            </div>
            <WorkProcess />
          </section>

          {/* 04. TRUST PILLARS: เสาหลักความเชื่อมั่น (E-E-A-T Strategy) */}
          <div className="border-border mt-32 border-t pt-24 md:mt-48">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
              {[
                {
                  title: "Expertise That Matters",
                  desc: "ใช้เทคโนโลยีระดับสากลมาปรับให้เข้ากับธุรกิจไทย เพื่อให้เว็บไซต์แรงและติดอันดับจริง",
                  icon: "ShieldCheck" as IconName,
                },
                {
                  title: "Sales-First Design",
                  desc: "ทุกพิกเซลถูกคิดมาเพื่อ 'ปิดการขาย' วางโครงสร้างตามจิตวิทยาการซื้อเพื่อ ROI สูงสุด",
                  icon: "TrendingUp" as IconName,
                },
                {
                  title: "Always by Your Side",
                  desc: "ระบบเสถียร 99.9% พร้อมทีมงานดูแลใกล้ชิด เพราะความสำเร็จของคุณคือเป้าหมายหลักของเรา",
                  icon: "UserCheck" as IconName,
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

                  <div className="bg-brand-primary/5 absolute -right-10 -bottom-10 h-32 w-32 rounded-full blur-3xl transition-opacity group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </LayoutEngine>
  );
}

/**
 * [HELPER]: ServiceGridSkeleton
 * ป้องกัน Layout Shift ระหว่างโหลดข้อมูล (Zero CLS Strategy)
 */
function ServiceGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="bg-surface-card/20 border-border/50 aspect-[3/4] animate-pulse rounded-[3.5rem] border"
        />
      ))}
    </div>
  );
}
