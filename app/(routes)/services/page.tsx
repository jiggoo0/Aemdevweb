/**
 * [PAGE]: SERVICES_HUB_SYSTEM v17.9.2 (PRODUCTION_STABILIZED)
 * [STRATEGY]: Layout Stability | Core Web Vitals Protection | LCP Prioritization
 * [MAINTAINER]: AEMDEVWEB Specialist Team (นายเอ็มซ่ามากส์)
 */

import React, { Suspense } from "react";
import type { Metadata } from "next";

// --- UI Components & Layout ---
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import ServiceListingHub from "@/components/features/services/ServiceListingHub";
import WorkProcess from "@/components/features/landing/WorkProcess";
import IconRenderer from "@/components/ui/IconRenderer";
import { cn } from "@/lib/utils";
import { constructMetadata } from "@/lib/seo-utils";
import { SITE_CONFIG } from "@/constants/site-config";
import type { IconName } from "@/components/ui/IconRenderer";

/* [METADATA]: Strategic SEO Entry Point - วิศวกรรมคำค้นหาระดับแมโคร */
export const metadata: Metadata = constructMetadata({
  title: "บริการทำเว็บไซต์ & โซลูชันวิศวกรรมดิจิทัล | Services",
  description:
    "โซลูชันเว็บไซต์ที่ออกแบบมาเพื่อผลลัพธ์สูงสุด ตั้งแต่ Sales Page ยิงแอด ไปจนถึงระบบ Catalog อุตสาหกรรม พัฒนาด้วย Next.js และ Technical SEO ระดับ Specialist",
  path: "/services",
  image: "/images/service/corporate-node.webp",
});

/**
 * @page ServicesPage
 * @description ศูนย์รวมโซลูชันที่ออกแบบมาเพื่อเปลี่ยนผู้เข้าชมให้กลายเป็นยอดโอนเงิน
 */
export default function ServicesPage() {
  return (
    <LayoutEngine spacing="none">
      <main className="relative min-h-screen pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          {/* 01. STRATEGIC HEADER: Positioning & Authority */}

          <header className="mb-24 max-w-6xl space-y-10 md:mb-32">
            <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-4 rounded-full border px-6 py-2.5 font-mono text-[10px] font-black tracking-[0.4em] uppercase backdrop-blur-md">
              <div className="bg-brand-primary h-2 w-2 animate-pulse rounded-full shadow-[0_0_10px_rgba(var(--color-primary),0.8)]" />
              <span suppressHydrationWarning>Registry_Index: v{SITE_CONFIG.project.version}</span>
            </div>

            <h1 className="text-text-primary text-5xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl">
              Engineered <br /> <span className="text-brand-primary">for Your ROI.</span>
            </h1>

            <div className="border-brand-primary border-l-4 pl-8 md:pl-14">
              <p className="text-text-secondary max-w-4xl text-xl leading-relaxed font-medium italic opacity-90 md:text-3xl">
                เราไม่ได้สร้างแค่โค้ด แต่เราออกแบบ{" "}
                <span className="text-text-primary decoration-brand-primary font-black not-italic underline decoration-4 underline-offset-8">
                  "ระบบสร้างกำไร"
                </span>{" "}
                ที่ผ่านการพิสูจน์แล้วว่า Google รัก และลูกค้าไทยเชื่อถือครับ
              </p>
            </div>
          </header>

          {/* 02. HUB COMPONENT: Service Selection Nodes */}
          {/* [ZERO-CLS]: Min-height ล็อกพื้นที่ไว้ป้องกัน Layout กระโดดตอน Hydration */}
          <section id="service-nodes" className="min-h-[600px] w-full">
            <Suspense fallback={<ServiceGridSkeleton />}>
              <ServiceListingHub className="gap-8 md:gap-14" />
            </Suspense>
          </section>

          {/* 03. SPECIALIST PROCESS: Workflow Transparency */}

          <section id="process" className="mt-32 scroll-mt-32 md:mt-48">
            <div className="mb-16 space-y-6">
              <h2 className="text-text-primary text-4xl font-black tracking-tighter uppercase italic md:text-6xl">
                The <span className="text-brand-primary">Engineering Pipeline.</span>
              </h2>
              <p className="text-text-secondary max-w-2xl text-lg font-medium opacity-80">
                กระบวนการพัฒนาที่เข้มงวด (Rigid Workflow) เพื่อลดความเสี่ยง
                และส่งมอบสินค้าดิจิทัลคุณภาพสูงสุด
              </p>
            </div>
            <WorkProcess />
          </section>

          {/* 04. INFRASTRUCTURE PILLARS: Trust Metrics */}
          <div className="border-border mt-32 border-t pt-24 md:mt-48">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
              {[
                {
                  title: "Technical Authority",
                  desc: "โครงสร้างพื้นฐานระดับสูง แก้ไข Core Web Vitals ที่ต้นเหตุ เพื่อความลื่นไหลและคะแนน SEO ที่ยอดเยี่ยม",
                  icon: "Server",
                },
                {
                  title: "Conversion Logic",
                  desc: "ออกแบบ UI/UX ตามพฤติกรรมผู้บริโภคชาวไทย (Local Insight) เพื่อเปลี่ยน Traffic ให้เป็นรายได้จริง",
                  icon: "TrendingUp",
                },
                {
                  title: "Bulletproof Stability",
                  desc: "ระบบที่ไม่มีวันหลับไหล (99.9% Uptime) พร้อม Security Protocol ป้องกันข้อมูลองค์กรอย่างแน่นหนา",
                  icon: "ShieldCheck",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className={cn(
                    "group border-border bg-surface-card relative overflow-hidden rounded-[3.5rem] border p-10 transition-all duration-700 md:p-14",
                    "hover:border-brand-primary/40 will-change-transform hover:-translate-y-2 hover:shadow-2xl",
                  )}
                >
                  <div className="text-brand-primary border-border bg-surface-main group-hover:bg-brand-primary group-hover:text-surface-main mb-10 flex h-20 w-20 items-center justify-center rounded-[2rem] border transition-all duration-500 group-hover:rotate-6">
                    <IconRenderer name={feature.icon as IconName} size={36} />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-text-primary group-hover:text-brand-primary text-3xl font-black tracking-tighter uppercase italic transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-text-secondary text-lg leading-relaxed font-medium italic opacity-85">
                      {feature.desc}
                    </p>
                  </div>
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
 * [SKELETON]: Zero-CLS Loader for Service Grid
 * ออกแบบมาให้มีสัดส่วน (Aspect Ratio) ตรงกับ ServiceCard จริง
 */
function ServiceGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="bg-surface-card/20 border-border/50 aspect-[4/5] animate-pulse rounded-[3.5rem] border md:aspect-[3/4]"
        />
      ))}
    </div>
  );
}
