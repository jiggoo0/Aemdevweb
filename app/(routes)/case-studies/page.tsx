/**
 * [ROUTE PAGE]: CASE_STUDIES_LISTING v17.3.10 (STABILIZED)
 * [STRATEGY]: Evidence-Based Trust | Multi-Theme Resilience | CMS Orchestration
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

// --- 1. Core Components & Data ---
import CaseStudyCard from "@/components/features/case-studies/CaseStudyCard";
import { getAllCaseStudies } from "@/lib/cms";
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/button";

// [FIXED]: ปรับ Path ของ LayoutEngine ให้ตรงกับตำแหน่งจริง (@/components/templates/sections/)
import LayoutEngine from "@/components/templates/sections/LayoutEngine";

/* [A] SEO AUTHORITY PROTOCOL */
export const metadata: Metadata = {
  title: `Success Stories & Evidence-Based Results | ${SITE_CONFIG.brandName}`,
  description: "พิสูจน์ผลลัพธ์จริงผ่านเคสความสำเร็จที่เราช่วยวางรากฐานระบบเว็บไซต์และกลยุทธ์ SEO จนสร้างการเติบโตที่วัดผลเป็นตัวเลขได้จริง",
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/case-studies` },
  keywords: ["ผลงานทำเว็บไซต์", "Case Study SEO", "ตัวอย่างเว็บ Next.js", "Web Performance Results"],
};

/**
 * @component CaseStudiesPage
 * @description หน้าแสดงรายการผลงานที่เน้นการสร้าง Trust ผ่านหลักฐานเชิงประจักษ์
 */
export default async function CaseStudiesPage() {
  // Fetch เคสความสำเร็จผ่านระบบ CMS Registry (Async Data Node)
  const cases = await getAllCaseStudies().catch(() => []);

  return (
    <LayoutEngine spacing="none">
      <main className="relative min-h-screen overflow-hidden pt-32 pb-24 transition-colors duration-500 md:pt-48 md:pb-32">
        
        {/* 01. ATMOSPHERIC INFRASTRUCTURE: เลเยอร์บรรยากาศเบื้องหลัง */}
        <div className="pointer-events-none absolute inset-0 z-0 select-none" aria-hidden="true">
          <div className="bg-infrastructure-grid absolute inset-0 opacity-[0.05]" />
          {/* [v17.3.10]: เพิ่ม Default Fallback สำหรับ Ambient Opacity เพื่อความเสถียรของ UI */}
          <div className="ambient-aura absolute -top-20 left-1/2 h-[800px] w-full -translate-x-1/2 opacity-[var(--ambient-opacity,0.4)] blur-[140px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          
          {/* 02. STRATEGIC HEADER: การนำเสนอ Identity Authority */}
          <header className="mb-24 max-w-5xl space-y-10 md:mb-32">
            <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-4 rounded-full border px-5 py-2 font-mono text-[10px] font-black tracking-[0.4em] uppercase backdrop-blur-md">
              <IconRenderer name="CheckCircle2" size={14} />
              <span>Evidence_Archives.v{SITE_CONFIG.project.version}</span>
            </div>

            <h1 className="text-text-primary text-5xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl">
              Evidence of <br /> <span className="text-brand-primary">Excellence.</span>
            </h1>

            <div className="border-brand-primary border-l-4 pl-8 md:pl-14">
              <p className="text-text-secondary max-w-3xl text-xl leading-relaxed font-medium italic opacity-90 md:text-2xl">
                เราไม่ได้แค่พูดถึงความเป็นไปได้ แต่เราทำให้เห็นผลลัพธ์จริงที่เกิดขึ้นผ่าน <span className="text-text-primary font-black not-italic">"ระบบวิศวกรรมเว็บไซต์"</span> ที่ออกแบบมาเพื่อเปลี่ยนยอดเข้าชมให้เป็นกำไรครับ
              </p>
            </div>
          </header>

          

          {/* 03. CASE STUDIES GRID: การจัดวางโหนดผลงาน (Evidence Nodes) */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-12 md:gap-y-32 lg:gap-y-40">
            {cases.map((item, index) => (
              <CaseStudyCard key={item.slug} data={item} index={index} />
            ))}
          </div>

          {/* 04. ANALYSIS FALLBACK: Node สำรองกรณีข้อมูลกำลังประมวลผล */}
          {cases.length === 0 && (
            <div className="border-border bg-surface-card/50 relative mt-20 overflow-hidden rounded-[3rem] border border-dashed py-32 text-center md:py-48">
              <div className="mx-auto max-w-lg space-y-8 px-6">
                <div className="border-brand-primary/20 bg-brand-primary/10 text-brand-primary mx-auto inline-flex h-20 w-20 items-center justify-center rounded-3xl border backdrop-blur-md shadow-glow">
                  <div className="bg-brand-primary h-2.5 w-2.5 animate-ping rounded-full" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-text-primary text-3xl leading-none font-black tracking-tighter uppercase italic md:text-5xl">Analyzing_Success.</h3>
                  <p className="text-text-muted text-lg font-medium italic opacity-80">
                    เรากำลังเรียบเรียงเคสความสำเร็จชุดใหม่เพื่อสรุปเป็นแนวทางธุรกิจให้คุณ <br className="hidden md:block" />
                    อดใจรอการอัปเดตข้อมูลชุดใหม่ได้ที่นี่เร็ว ๆ นี้ครับ
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 05. CONVERSION ANCHOR: จุดตัดสินใจระดับยุทธศาสตร์ */}
          <footer className="border-border mt-32 border-t pt-20 text-center md:mt-48 md:pt-24">
            <div className="mx-auto max-w-4xl space-y-12">
              <h2 className="text-text-primary text-3xl leading-tight font-black tracking-tighter uppercase italic md:text-6xl">
                อยากสร้าง <span className="text-brand-primary">Impact</span> <br /> แบบนี้ให้ธุรกิจคุณไหมครับ?
              </h2>

              <div className="flex justify-center">
                <Button
                  asChild
                  className="group bg-text-primary text-surface-main hover:bg-brand-primary shadow-glow relative h-20 w-full overflow-hidden rounded-[2rem] px-12 transition-all duration-500 hover:scale-105 active:scale-95 sm:w-auto"
                >
                  <Link href={SITE_CONFIG.links.line} target="_blank">
                    <span className="relative z-10 flex items-center gap-4">
                      <IconRenderer name="MessageCircle" size={24} className="text-surface-main" />
                      <span className="text-[11px] font-black tracking-[0.3em] uppercase">เริ่มปรึกษาโปรเจกต์ของคุณ</span>
                    </span>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-surface-main/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                  </Link>
                </Button>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </LayoutEngine>
  );
}
