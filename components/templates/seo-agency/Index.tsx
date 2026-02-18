/**
 * [TEMPLATE]: SEO_AGENCY_ORCHESTRATOR v18.0.7 (STABILIZED_FINAL)
 * [STRATEGY]: Named Import Synchronization | Schema Orchestration | Build-Safe
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useMemo, memo } from "react";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import JsonLd from "@/components/seo/JsonLd";
import { generateUniversalSchema } from "@/lib/schema";
import type { UniversalTemplateProps } from "@/types";

// --- 1. Modular Component Registry (SEO Lab Suite) ---
/** * [FIXED]: ปรับปรุงการ Import เป็น Named Imports ทั้งหมด (มีปีกกาครอบ)
 * เพื่อให้สอดคล้องกับไฟล์ปลายทางที่ถูก Hardened เป็น Named Export (export const ...)
 */
import { AuditHero } from "./_components/AuditHero";
import { AuditReportGenerator } from "./_components/AuditReportGenerator";
import { PerformanceTrajectory } from "./_components/PerformanceTrajectory";
import { StrategyBlueprint } from "./_components/StrategyBlueprint";
import { KeywordRegistry } from "./_components/KeywordRegistry";
import { ConversionPortal } from "./_components/ConversionPortal";

// --- 2. Shared Sections ---
import { DynamicFAQ } from "../sections/DynamicFAQ";

/**
 * @component SeoAgencyTemplate
 * @description เทมเพลตสำหรับเอเจนซี่ SEO ยุคใหม่ เน้นความโปร่งใสของข้อมูลและการปิดการขายแบบเน้นผลลัพธ์
 */
const SeoAgencyTemplate = ({ data }: { data: UniversalTemplateProps }) => {
  // [LOGIC]: ประมวลผล Schema สำหรับ Knowledge Graph (React 19 Memoized)
  const schema = useMemo(() => generateUniversalSchema(data), [data]);

  return (
    <LayoutEngine spacing="none">
      {/* [SEO]: Injection ของ Structured Data เฉพาะ Node */}
      <JsonLd data={schema} id={`schema-seo-agency-${data.templateSlug}`} />

      <main
        id="seo-agency-context"
        className="bg-surface-main selection:bg-brand-primary/30 selection:text-brand-primary min-h-[100dvh] transition-colors duration-500"
      >
        {/* Phase 01: Hero Metrics Display */}
        <AuditHero title={data.title} description={data.description} />

        {/* Phase 02: Interactive Lead Magnet */}
        <AuditReportGenerator />

        {/* Phase 03: Data Visualization */}
        <PerformanceTrajectory />

        {/* Phase 04: Tactical Blueprint */}
        <StrategyBlueprint
          items={(data.coreFeatures || []).map((f) => ({
            title: f.title,
            description: f.description,
            icon: f.icon,
          }))}
        />

        {/* Phase 05: Ranking Evidence */}
        <KeywordRegistry />

        {/* Phase 06: Intelligence Hub (FAQ) */}
        <div className="border-border/10 bg-surface-main/10 border-t">
          <DynamicFAQ
            items={data.faqs}
            title="SEO_Intelligence_FAQ"
            description="ตอบข้อสงสัยด้านเทคนิคและการทำอันดับเพื่อความโปร่งใสสูงสุดในการทำงาน"
          />
        </div>

        {/* Phase 07: Conversion Gateway */}
        <ConversionPortal />

        {/* SYSTEM FOOTER */}
        <footer className="border-border/5 border-t py-12 text-center opacity-20">
          <p className="font-mono text-[8px] font-bold tracking-[0.4em] uppercase">
            SEO_Lab_Engine.v18.0.7_STABLE_BUILD
          </p>
        </footer>
      </main>
    </LayoutEngine>
  );
};

SeoAgencyTemplate.displayName = "SeoAgencyTemplate";

/**
 * [CRITICAL]: ต้องคง 'export default' ไว้ที่นี่ 
 * เพื่อให้ TemplateRenderer (Dynamic Registry) โหลด Component นี้ได้ถูกต้อง
 */
export default memo(SeoAgencyTemplate);
