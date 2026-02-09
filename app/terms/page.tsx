/**
 * [ROUTE PAGE]: TERMS_OF_SERVICE v17.3.10 (STABILIZED)
 * [STRATEGY]: Professional Partnership | Multi-Theme Resilience | Legal Clarity
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import type { Metadata } from "next";

// --- 1. Infrastructure & UI Components ---
// [FIXED]: ปรับ Path ให้ตรงตามโครงสร้าง File Tree จริง (ย้ายไปที่ sections)
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import HeroEngine from "@/components/features/landing/Hero";
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer from "@/components/ui/IconRenderer";

/**
 * [METADATA]: สื่อสารความโปร่งใสและ Authority
 */
export const metadata: Metadata = {
  title: `ข้อตกลงการใช้บริการและมาตรฐานการทำงาน | ${SITE_CONFIG.brandName}`,
  description: "ทำความเข้าใจแนวทางการทำงานร่วมกัน เพื่อความแม่นยำและผลลัพธ์ที่ดีที่สุดสำหรับธุรกิจคุณ",
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/terms` },
};

/**
 * @page TermsPage
 * @description หน้าชี้แจงกติกาการทำงานเพื่อรักษามาตรฐานคุณภาพและผลประโยชน์ของพาร์ทเนอร์
 */
export default function TermsPage() {
  // [DETERMINISTIC]: ล็อควันที่แก้ไขล่าสุดให้สอดคล้องกับระบบ Audit
  const lastUpdated = "9 กุมภาพันธ์ 2569";

  return (
    <LayoutEngine spacing="none">
      {/* 01. HERO LAYER: [RESOLVED]: ใช้ subtitle prop ที่ได้รับการอัปเดต Interface แล้ว */}
      <HeroEngine
        title="ข้อตกลงการทำงาน เพื่อความสำเร็จที่ยั่งยืน"
        subtitle="เรายึดเอาความสำเร็จของคุณเป็นที่ตั้งครับ เงื่อนไขเหล่านี้ออกแบบมาเพื่อให้เราเข้าใจตรงกัน และช่วยให้การส่งมอบระบบคุณภาพสูงเป็นไปอย่างราบรื่นที่สุด"
        primaryActionText="ปรึกษาการเริ่มต้นโปรเจกต์"
      />

      {/* 02. ATMOSPHERIC DECOR: เลเยอร์บรรยากาศ */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none" aria-hidden="true">
        <div className="bg-infrastructure-grid absolute inset-0 opacity-[0.05]" />
        <div className="ambient-aura absolute top-1/4 left-0 h-[600px] w-[600px] opacity-[var(--ambient-opacity,0.4)] blur-[120px]" />
      </div>

      {/* 03. CONTENT LAYER: รายละเอียดแนวทางดำเนินงาน */}
      <section className="relative z-10 container mx-auto px-4 py-24 transition-colors duration-500">
        <div className="mx-auto max-w-3xl space-y-20">
          
          {/* Diagnostic Header */}
          <div className="border-border flex flex-col gap-4 border-b pb-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-brand-primary h-2 w-2 animate-ping rounded-full shadow-glow" />
              <span className="text-text-primary font-mono text-[10px] font-black tracking-[0.3em] uppercase">
                Service_Standard.v{SITE_CONFIG.project.version}
              </span>
            </div>
            <span className="text-text-muted font-mono text-[9px] font-bold tracking-widest uppercase italic">
              Last_Modified: {lastUpdated}
            </span>
          </div>

          {/* Section 01: Engineering Scope */}
          <article className="space-y-6 group">
            <div className="flex items-center gap-4">
              <span className="text-brand-primary font-mono text-lg font-black opacity-40 group-hover:opacity-100 transition-opacity">01.</span>
              <h2 className="text-text-primary text-2xl font-black tracking-tighter uppercase italic md:text-3xl">
                วิศวกรรมดิจิทัลและมาตรฐานงาน
              </h2>
            </div>
            <p className="text-text-secondary leading-relaxed font-medium md:text-lg italic">
              ที่ {SITE_CONFIG.brandName} เราเน้นสร้างเว็บไซต์ที่ใช้งานได้จริงและช่วยทำเงินให้ธุรกิจครับ 
              ขอบเขตงานจะครอบคลุมการเขียนรหัสหลังบ้านที่สะอาด (Clean Code), การปรับจูน Technical SEO, 
              และระบบความปลอดภัยตามที่ตกลงกันไว้ใน Proposal เพื่อให้คุณได้ระบบที่สมบูรณ์แบบที่สุดครับ
            </p>
          </article>

          {/* Section 02: Cooperation Protocol */}
          <article className="space-y-6 group">
            <div className="flex items-center gap-4">
              <span className="text-brand-primary font-mono text-lg font-black opacity-40 group-hover:opacity-100 transition-opacity">02.</span>
              <h2 className="text-text-primary text-2xl font-black tracking-tighter uppercase italic md:text-3xl">
                พันธสัญญาความร่วมมือ
              </h2>
            </div>
            <p className="text-text-secondary leading-relaxed font-medium md:text-lg italic">
              เพื่อให้งานออกมาดีที่สุด ผมรบกวนให้พาร์ทเนอร์ช่วยเตรียมข้อมูลธุรกิจตามกรอบเวลาที่คุยกันครับ 
              ส่วนในด้านเทคนิค ผมจะรายงานความคืบหน้า (System Trace) ให้คุณทราบอย่างโปร่งใสในทุกขั้นตอน 
              เพื่อให้คุณมั่นใจว่าระบบกำลังถูกสร้างขึ้นอย่างประณีตระดับ Specialist ครับ
            </p>
          </article>

          {/* Section 03: Ownership & Investment */}
          <article className="space-y-6 group">
            <div className="flex items-center gap-4">
              <span className="text-brand-primary font-mono text-lg font-black opacity-40 group-hover:opacity-100 transition-opacity">03.</span>
              <h2 className="text-text-primary text-2xl font-black tracking-tighter uppercase italic md:text-3xl">
                ลิขสิทธิ์และการเป็นเจ้าของ
              </h2>
            </div>
            <p className="text-text-secondary leading-relaxed font-medium md:text-lg italic">
              เมื่อส่งมอบงานและชำระเงินครบถ้วนแล้ว <span className="text-text-primary font-black">เว็บไซต์และข้อมูลทั้งหมดจะเป็นกรรมสิทธิ์ของคุณ 100%</span> 
              โดยผมจะทำหน้าที่เป็นพาร์ทเนอร์ที่ปรึกษาด้านเทคนิค คอยดูแลความเรียบร้อยของระบบให้ในระยะยาวครับ
            </p>
          </article>

          {/* Section 04: Maintenance Logic */}
          <article className="space-y-8 group">
            <div className="flex items-center gap-4">
              <span className="text-brand-primary font-mono text-lg font-black opacity-40 group-hover:opacity-100 transition-opacity">04.</span>
              <h2 className="text-text-primary text-2xl font-black tracking-tighter uppercase italic md:text-3xl">
                การดูแลและความเสถียร
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-text-secondary leading-relaxed font-medium md:text-lg italic">
                ผมมีการดูแลหลังการขายเพื่อให้เว็บทำงานได้ลื่นไหล หากพบปัญหาที่เกิดจากรหัสหลังบ้าน (Internal Logic) 
                ผมยินดีรีบแก้ไขให้ทันทีเพื่อให้ธุรกิจของคุณเดินหน้าต่อได้ไม่สะดุดครับ
              </p>
              
              <blockquote className="border-brand-primary bg-surface-card shadow-glow text-text-secondary rounded-[2rem] border-l-[12px] p-8 md:p-12 transition-all duration-500 hover:bg-surface-offset">
                <div className="flex items-center gap-3 mb-4">
                    <IconRenderer name="ShieldAlert" size={20} className="text-brand-primary" />
                    <span className="text-brand-primary font-black tracking-widest uppercase text-xs">
                        System_Mandate:
                    </span>
                </div>
                <p className="text-sm md:text-base leading-relaxed font-medium italic">
                    เพื่อให้ระบบมีความเสถียรสูงสุด การรับประกันจะไม่ครอบคลุมกรณีที่มีการแก้ไขรหัสหลังบ้าน
                    หรือฐานข้อมูลโดยบุคคลภายนอกที่ไม่ได้ผ่านการตรวจสอบจากทีมงานของเราก่อนนะครับ
                </p>
              </blockquote>
            </div>
          </article>

          {/* บทสรุปท้ายหน้า: Partner Synergy */}
          <div className="border-border space-y-6 border-t pt-20 text-center">
            <p className="text-text-primary text-xl font-black tracking-tight italic uppercase md:text-2xl">
              "Understanding is the foundation of <span className="text-brand-primary">Success.</span>"
            </p>
            <p className="text-text-muted mx-auto max-w-lg text-sm leading-relaxed font-medium italic">
              หากคุณมีข้อสงสัยหรืออยากปรับแต่งเงื่อนไขให้เข้ากับรูปแบบธุรกิจของคุณ ทักมาคุยกันได้เลยนะครับ 
              ผมยินดีหาแนวทางที่ลงตัวที่สุดสำหรับเราทั้งคู่ครับ
            </p>
          </div>
        </div>
      </section>
    </LayoutEngine>
  );
}
