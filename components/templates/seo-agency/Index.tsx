/**
 * [TEMPLATE]: SEO_AGENCY_ORCHESTRATOR v18.0.8 (RSC_ENFORCED)
 * [STRATEGY]: Named Import Synchronization | Schema Orchestration | Server-Side Rendering
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import JsonLd from "@/components/seo/JsonLd";
import { generateUniversalSchema } from "@/lib/schema";
import type { UniversalTemplateProps } from "@/types";

// --- 1. Modular Component Registry (SEO Lab Suite) ---
import { AuditHero } from "../sections/AuditHero";
import { AuditReportGenerator } from "../sections/AuditReportGenerator";
import { PerformanceTrajectory } from "../sections/PerformanceTrajectory";
import { StrategyBlueprint } from "../sections/StrategyBlueprint";
import { KeywordRegistry } from "../sections/KeywordRegistry";
import { ConversionPortal } from "../sections/ConversionPortal";

// --- 2. Shared Sections ---
import { DynamicFAQ } from "../sections/DynamicFAQ";
import { RegionalRoadmap } from "../sections/RegionalRoadmap";
import { LocalSuccessNode } from "../sections/LocalSuccessNode";
import { RegionalGallery } from "../sections/RegionalGallery";
import { LocalInsight } from "../sections/LocalInsight";
import { DirectTerminal } from "../sections/DirectTerminal";

/**
 * @component SeoAgencyTemplate
 * @description เทมเพลตสำหรับเอเจนซี่ SEO ยุคใหม่ เน้นความโปร่งใสของข้อมูลและการปิดการขายแบบเน้นผลลัพธ์
 */
const SeoAgencyTemplate = ({ data }: { data: UniversalTemplateProps }) => {
  // [LOGIC]: Direct Schema Generation for RSC Compliance
  const schema = generateUniversalSchema(data);

  return (
    <LayoutEngine spacing="none">
      {/* [SEO]: Injection ของ Structured Data เฉพาะ Node */}
      <JsonLd data={schema} id={`schema-seo-agency-${data.templateSlug}`} />

      <main
        id="seo-agency-context"
        className="bg-surface-main selection:bg-brand-primary/30 selection:text-brand-primary min-h-[100dvh] transition-colors duration-500"
      >
        {/* Phase 01: Hero Metrics Display */}
        <AuditHero
          title={data.title}
          description={data.description}
          banner={data.regionalVisuals?.banner}
        />

        {/* [NEW]: Lab Insight & Regional Context */}
        {data.province && (
          <LocalInsight
            insight={data.localContext?.marketInsight || ""}
            painPoints={(data.localContext?.painPoints as string[]) || []}
            marketSaturation={data.marketSaturation}
          />
        )}

        {/* [NEW]: Regional Promotions (Data-Driven Style) */}
        {data.promotions && data.promotions.length > 0 && (
          <section className="relative z-40 container mx-auto -mt-20 mb-20 px-4">
            <div className="rounded-card-lg shadow-glow border border-[var(--brand-primary)]/20 bg-black/80 p-8 backdrop-blur-xl md:p-12">
              <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[var(--brand-primary)]" />
                    <span className="font-mono text-[9px] font-black tracking-[0.4em] text-[var(--brand-primary)] uppercase">
                      SEO_Strategy_Promotion
                    </span>
                  </div>
                  <h3 className="text-3xl font-black tracking-tighter text-white uppercase italic md:text-5xl">
                    {data.promotions[0].title}
                  </h3>
                  <p className="max-w-xl text-base font-medium text-white/60">
                    {data.promotions[0].description}
                  </p>
                </div>
                {data.promotions[0].discount && (
                  <div className="rounded-2xl border-2 border-dashed border-[var(--brand-primary)]/40 bg-[var(--brand-primary)]/10 px-10 py-6 text-center shadow-inner">
                    <p className="mb-1 text-[10px] font-bold tracking-widest text-white/40 uppercase">
                      Audit_Bonus
                    </p>
                    <p className="text-4xl font-black text-[var(--brand-primary)] italic">
                      {data.promotions[0].discount}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

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

        {/* [NEW]: Regional Lab Gallery */}
        {data.regionalVisuals?.gallery && <RegionalGallery images={data.regionalVisuals.gallery} />}

        {/* Phase 05: Ranking Evidence */}
        <KeywordRegistry />

        {/* [NEW]: Regional Roadmap & Terminal */}
        {data.province && (
          <>
            <RegionalRoadmap province={data.province} steps={data.regionalRoadmap} />

            {/* [NEW]: Local Success Metrics */}
            {data.localSuccessStory && (
              <div className="-mt-12">
                <LocalSuccessNode
                  title={data.localSuccessStory.title}
                  result={data.localSuccessStory.result}
                  province={data.province}
                />
              </div>
            )}

            <div className="container mx-auto px-4 py-24 md:py-32">
              <div className="mx-auto max-w-2xl">
                <DirectTerminal
                  mode="health-check"
                  province={data.province}
                  latency={data.regionalLatency}
                />
              </div>
            </div>
          </>
        )}

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
            SEO_Lab_Engine.v18.0.8_RSC_DEPLOYED
          </p>
        </footer>
      </main>
    </LayoutEngine>
  );
};

export default SeoAgencyTemplate;
