/**
 * [TEMPLATE]: SEO_AGENCY_ORCHESTRATOR v18.0.39 (STABLE_SPECIALIST)
 * [STRATEGY]: Data-Driven Authority | Intelligence FAQ | Named Import Standard
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useMemo } from "react";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import JsonLd from "@/components/seo/JsonLd";
import { generateUniversalSchema } from "@/lib/schema";
import type { UniversalTemplateProps } from "@/types";

// --- 1. Modular Component Registry (SEO Lab Suite) ---
import { AuditHero } from "./_components/AuditHero";
import { AuditReportGenerator } from "./_components/AuditReportGenerator";
import { PerformanceTrajectory } from "./_components/PerformanceTrajectory";
import { StrategyBlueprint } from "./_components/StrategyBlueprint";
import { KeywordRegistry } from "./_components/KeywordRegistry";
import { ConversionPortal } from "./_components/ConversionPortal";

/** * [INJECT]: ดึงระบบ FAQ Engine ด้วย Named Import { DynamicFAQ }
 * [TECHNICAL_FIX]: ปรับปรุงเพื่อกำจัด Error 'undefined' ในขั้นตอน Build และเพิ่มคะแนน E-E-A-T
 */
import { DynamicFAQ } from "../sections/DynamicFAQ";

/**
 * @component SeoAgencyTemplate
 * @description เทมเพลตสำหรับเอเจนซี่ SEO ยุคใหม่ เน้นการพิสูจน์ผลลัพธ์ด้วยข้อมูลและระบบ Interactive
 */
const SeoAgencyTemplate = ({ data }: { data: UniversalTemplateProps }) => {
  // [LOGIC]: ประมวลผล Schema สำหรับความแม่นยำทางเทคนิค (Search Engine Ready)
  const schema = useMemo(() => generateUniversalSchema(data), [data]);

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={schema} />

      <main className="min-h-[100dvh] bg-[var(--surface-main)] selection:bg-[var(--brand-primary)] selection:text-black transition-colors duration-500">
        
        {/* --- Phase 01: Authority Entry --- 
            Hero Section ที่แสดงความมั่นใจด้วยข้อมูล Performance เบื้องต้น
        */}
        <AuditHero title={data.title} description={data.description} />

        {/* --- Phase 02: Interactive Proof (Lead Magnet) --- 
            จุดยุทธศาสตร์: ระบบจำลองการแสกนเว็บไซต์ (Audit Simulation)
        */}
        
        <AuditReportGenerator />

        {/* --- Phase 03: Growth Visualization --- 
            Data Visualization แสดงวิถีการเติบโตของ Traffic (Trajectory Node)
        */}
        
        <PerformanceTrajectory />

        {/* --- Phase 04: Solution Architecture --- 
            อธิบายกลยุทธ์แบบ 360 องศา ผ่าน Identity-Aware Icons
        */}
        <StrategyBlueprint
          items={(data.coreFeatures || []).map((f) => ({
            title: f.title,
            description: f.description,
            icon: f.icon,
          }))}
        />

        {/* --- Phase 05: Hard Evidence --- 
            ตารางอันดับ Keyword จริง เพื่อสร้าง Social Proof ในระดับ Technical
        */}
        <KeywordRegistry />

        {/* --- Phase 06: Intelligence Hub (Activated FAQ) --- 
            [STRATEGY]: เคลียร์ทุกข้อสงสัยเชิงเทคนิคเพื่อปิดการขาย (Objection Buster)
        */}
        <div className="border-t border-[var(--foreground)]/5 bg-[var(--surface-main)]/10">
          <DynamicFAQ
            items={data.faqs}
            title="SEO_Intelligence_FAQ"
            description="ตอบข้อสงสัยด้านเทคนิคและการทำอันดับเพื่อความโปร่งใสสูงสุดในการทำงาน"
          />
        </div>

        {/* --- Phase 07: Conversion Gateway --- 
            ช่องทางการติดต่อเพื่อขอรับการวิเคราะห์ความเป็นไปได้ (Feasibility Study)
        */}
        <ConversionPortal />

        {/* --- SYSTEM FOOTER: Technical Stamp --- */}
        <footer className="py-8 text-center border-t border-[var(--foreground)]/5 opacity-10">
          <p className="font-mono text-[8px] tracking-[0.4em] uppercase">
            SEO_Lab_Engine.v18.0.39_STABLE
          </p>
        </footer>
      </main>
    </LayoutEngine>
  );
};

export default SeoAgencyTemplate;
