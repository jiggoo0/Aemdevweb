/**
 * [ROUTE PAGE]: SERVICES_HUB_SYSTEM v17.6.0 (PROCESS_INTEGRATED)
 * [STRATEGY]: Conversion Architecture | Anchor-Link Ready | Specialist Authority
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React, { Suspense } from "react";
import type { Metadata } from "next";

// --- 1. Infrastructure & UI ---
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import ServiceListingHub from "@/components/features/services/ServiceListingHub";
import WorkProcess from "@/components/features/landing/WorkProcess"; // [ADD]: Import WorkProcess
import SkeletonCard from "@/components/ui/SkeletonCard";
import IconRenderer from "@/components/ui/IconRenderer";
import { constructMetadata } from "@/lib/seo-utils";

// --- 2. Constants & Config ---
import { SITE_CONFIG } from "@/constants/site-config";
import { cn } from "@/lib/utils";
import type { IconName } from "@/components/ui/IconRenderer";

/* [A] SEO AUTHORITY PROTOCOL */
export const metadata: Metadata = constructMetadata({
  title: "บริการทำเว็บไซต์ & โซลูชันธุรกิจ | Services",
  description:
    "เลือกรูปแบบเว็บไซต์ที่ตอบโจทย์ธุรกิจคุณที่สุด ตั้งแต่ Sales Page ไปจนถึง Corporate Web เพื่อสร้างความได้เปรียบและเพิ่มกำไรในปี 2026 ด้วย Next.js",
  path: "/services",
  image: "/images/og-services.webp",
});

/**
 * @page ServicesPage
 * @description ศูนย์รวมโซลูชันที่ออกแบบมาเพื่อเปลี่ยนผู้เข้าชมให้กลายเป็นยอดโอนเงิน
 */
export default function ServicesPage() {
  return (
    <LayoutEngine spacing="none">
      <main className="relative min-h-screen pt-32 pb-24 transition-colors duration-500 md:pt-48 md:pb-32">
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          {/* 01. STRATEGIC HEADER */}
          <header className="mb-24 max-w-6xl space-y-10 md:mb-32">
            <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-4 rounded-full border px-6 py-2.5 font-mono text-[10px] font-black tracking-[0.4em] uppercase backdrop-blur-md">
              <div className="bg-brand-primary shadow-glow h-2 w-2 animate-pulse rounded-full" />
              <span>System_Service_Solutions_v{SITE_CONFIG.project.version}</span>
            </div>

            <h1 className="text-text-primary text-5xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl">
              Engineered <br /> <span className="text-brand-primary">for Your Success.</span>
            </h1>

            <div className="border-brand-primary border-l-4 pl-8 md:pl-14">
              <p className="text-text-secondary max-w-4xl text-xl leading-relaxed font-medium italic opacity-90 md:text-3xl">
                เราไม่ได้แค่รับทำเว็บไซต์ แต่เราตั้งใจสร้าง{" "}
                <span className="text-text-primary decoration-brand-primary font-black not-italic underline decoration-4 underline-offset-8">
                  "พนักงานขายที่เก่งที่สุด"
                </span>{" "}
                ที่ทำงานแทนคุณได้อย่างแม่นยำตลอด 24 ชั่วโมงครับ
              </p>
            </div>
          </header>

          {/* 02. HUB COMPONENT: Service Nodes */}
          <section id="service-nodes" className="min-h-[600px]">
            <Suspense fallback={<ServiceGridSkeleton />}>
              <ServiceListingHub className="gap-8 md:gap-14" />
            </Suspense>
          </section>

          {/* --- [ANCHOR POINT]: 03. WORK PROCESS INFRASTRUCTURE --- */}
          {/* [FIX]: กำหนด ID เพื่อให้ลิงก์ #process จาก Footer ทำงานได้ถูกต้อง */}
          <section id="process" className="mt-32 scroll-mt-32 md:mt-48">
            <div className="mb-16 space-y-6">
              <h2 className="text-text-primary text-4xl font-black tracking-tighter uppercase italic md:text-6xl">
                Our <span className="text-brand-primary">Specialist Process.</span>
              </h2>
              <p className="text-text-secondary max-w-2xl text-lg font-medium opacity-80">
                ขั้นตอนการทำงานที่ออกแบบมาเพื่อความแม่นยำ ลดความผิดพลาด
                และส่งมอบผลลัพธ์ที่ดีที่สุดให้ธุรกิจคุณ
              </p>
            </div>
            <WorkProcess />
          </section>

          {/* 04. TRUST INFRASTRUCTURE */}
          <div className="border-border mt-32 border-t pt-24 md:mt-48">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
              {[
                {
                  title: "Scalable Infrastructure",
                  desc: "วางโครงสร้างระบบให้ยืดหยุ่น รองรับการเพิ่มข้อมูลและขยายขีดความสามารถของธุรกิจได้ทันทีในอนาคต",
                  icon: "Server",
                },
                {
                  title: "Conversion-Led SEO",
                  desc: "ระบบหลังบ้านที่ Google รัก พร้อมปรับจูนเนื้อหาให้น่าเชื่อถือจนลูกค้าอยากเปลี่ยนเป็นยอดโอนเงิน",
                  icon: "TrendingUp",
                },
                {
                  title: "Military-Grade Stability",
                  desc: "เว็บไซต์โหลดไวระดับเสี้ยววินาทีเพื่อให้ลูกค้าไม่ต้องรอ พร้อมระบบความปลอดภัยระดับมาตรฐานสากล",
                  icon: "ShieldCheck",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className={cn(
                    "group border-border bg-surface-card relative overflow-hidden rounded-[3.5rem] border p-10 transition-all duration-700 md:p-14",
                    "hover:border-brand-primary/40 hover:shadow-pro-lg will-change-transform hover:-translate-y-2",
                  )}
                >
                  <div className="text-brand-primary group-hover:bg-brand-primary border-border bg-surface-offset group-hover:text-surface-main group-hover:shadow-glow mb-10 flex h-20 w-20 items-center justify-center rounded-[2rem] border transition-all duration-500 group-hover:rotate-6">
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

function ServiceGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(3)].map((_, i) => (
        <SkeletonCard key={i} aspectRatio="portrait" className="rounded-[3.5rem]" />
      ))}
    </div>
  );
}
