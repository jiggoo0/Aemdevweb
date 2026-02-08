/**
 * [ROUTE PAGE]: SERVICES_HUB_SYSTEM v17.0.2 (STABILIZED)
 * [STRATEGY]: Professional Service Registry | Search Result Mapping | Value Proposition
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React, { Suspense } from "react";
import type { Metadata } from "next";

// --- 1. Infrastructure & UI ---
import ServiceListingHub from "@/components/features/services/ServiceListingHub";
import SkeletonCard from "@/components/ui/SkeletonCard";
import IconRenderer from "@/components/ui/IconRenderer";

// --- 2. Constants & Config ---
import { SITE_CONFIG } from "@/constants/site-config";
import { cn } from "@/lib/utils";

/* [A] SEO AUTHORITY PROTOCOL */
export const metadata: Metadata = {
  title: `Service Solutions & Strategic Architecture | ${SITE_CONFIG.brandName}`,
  description:
    "เลือกรูปแบบเว็บไซต์ที่ตอบโจทย์ธุรกิจคุณที่สุด ตั้งแต่ Sales Page ไปจนถึง Corporate Web เพื่อสร้างความได้เปรียบและเพิ่มกำไรในปี 2026",
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/services` },
  openGraph: {
    title: `โซลูชันเว็บไซต์ที่เน้นผลลัพธ์ทางธุรกิจ | ${SITE_CONFIG.brandName}`,
    description:
      "เปลี่ยนเว็บไซต์ของคุณให้เป็นเครื่องมือทำเงินที่มีประสิทธิภาพ ด้วยมาตรฐานจากผู้เชี่ยวชาญ",
    images: ["/images/og-services.webp"],
  },
};

/**
 * @page ServicesPage
 * @description หน้าศูนย์รวมโซลูชันธุรกิจที่ออกแบบมาเพื่อเปลี่ยนผู้เข้าชมให้กลายเป็นยอดขาย
 */
export default function ServicesPage() {
  return (
    <main className="bg-surface-main relative min-h-screen overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32">
      {/* 01. ATMOSPHERIC INFRASTRUCTURE: เลเยอร์บรรยากาศเบื้องหลัง */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.05] select-none"
        aria-hidden="true"
      >
        <div className="bg-infrastructure-grid absolute inset-0" />
        <div className="ambient-aura absolute top-0 right-0 h-[600px] w-[600px] translate-x-1/2 -translate-y-1/2 opacity-[0.1] blur-[140px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* 02. STRATEGIC HEADER: การนำเสนอคุณค่า (Value Proposition) */}
        <header className="mb-24 max-w-4xl space-y-10 md:mb-32">
          <div className="border-brand-primary/20 bg-brand-primary/10 text-brand-primary inline-flex items-center gap-4 rounded-full border px-5 py-2 font-mono text-[10px] font-black tracking-[0.4em] uppercase">
            <IconRenderer name="Layers" size={14} />
            <span>System_Service_Solutions_v17</span>
          </div>

          <h1 className="text-5xl leading-[0.9] font-black tracking-tighter text-white uppercase italic md:text-8xl lg:text-9xl">
            Engineered <br /> for Your Success.
          </h1>

          <div className="border-brand-primary border-l-4 pl-8 md:pl-14">
            <p className="max-w-3xl text-xl leading-relaxed font-medium text-gray-400 italic opacity-90 md:text-2xl">
              เราไม่ได้แค่รับทำเว็บไซต์ แต่เราตั้งใจสร้าง{" "}
              <span className="text-brand-primary font-black not-italic">
                "พนักงานขายที่เก่งที่สุด"
              </span>{" "}
              ที่ทำงานแทนคุณได้อย่างแม่นยำ และช่วยเปลี่ยนผู้เข้าชมให้เป็นยอดขายได้ตลอด 24
              ชั่วโมงครับ
            </p>
          </div>
        </header>

        {/* 03. HUB COMPONENT: รายการบริการที่ผ่านการคัดสรรเชิงกลยุทธ์ */}
        <section id="service-nodes" className="min-h-[600px]">
          <Suspense fallback={<ServiceGridSkeleton />}>
            <ServiceListingHub className="gap-8 md:gap-14" />
          </Suspense>
        </section>

        {/* 04. QA LAYER: Trust Infrastructure (การันตีมาตรฐาน Specialist) */}
        <div className="mt-32 border-t border-white/5 pt-20 md:mt-48">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
            {[
              {
                title: "Scalable Infrastructure",
                desc: "เราวางโครงสร้างเว็บให้ยืดหยุ่น รองรับการเพิ่มข้อมูลและขยายขีดความสามารถของธุรกิจได้ทันทีในอนาคต",
                icon: "Server",
              },
              {
                title: "Conversion-Led SEO",
                desc: "วางระบบหลังบ้านให้ Google หาเว็บคุณเจอได้ง่าย พร้อมปรับจูนเนื้อหาให้น่าเชื่อถือจนลูกค้าอยากโอนเงิน",
                icon: "TrendingUp",
              },
              {
                title: "Military-Grade Stability",
                desc: "เว็บไซต์โหลดไวระดับเสี้ยววินาทีเพื่อให้ลูกค้าไม่ต้องรอ พร้อมระบบรักษาความปลอดภัยที่ได้มาตรฐานสากล",
                icon: "ShieldCheck",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className={cn(
                  "group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 transition-all duration-700 md:p-12",
                  "hover:border-brand-primary/30 hover:-translate-y-2 hover:shadow-2xl",
                )}
              >
                <div className="text-brand-primary group-hover:bg-brand-primary mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 group-hover:rotate-6 group-hover:text-black group-hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                  <IconRenderer name={feature.icon} size={32} />
                </div>
                <div className="space-y-4">
                  <h3 className="group-hover:text-brand-primary text-2xl font-black tracking-tighter text-white uppercase italic transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-base leading-relaxed font-medium text-gray-500 italic opacity-80 md:text-lg">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

/**
 * [SKELETON]: ตัวอย่างการแสดงผลระหว่างโหลดข้อมูล (UX Stability)
 */
function ServiceGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(3)].map((_, i) => (
        <SkeletonCard key={i} className="h-[500px] rounded-[3.5rem]" />
      ))}
    </div>
  );
}
