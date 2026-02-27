/**
 * [TEMPLATE]: SEO_AGENCY_ORCHESTRATOR v18.5.0 (LAB_HARDENED)
 * [STRATEGY]: Sequence-First Layout | Data Visualization | Identity Guard
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import LayoutEngine from "@/components/templates/LayoutEngine";
import JsonLd from "@/components/seo/JsonLd";
import { generateUniversalSchema } from "@/lib/schema";
import type { UniversalTemplateProps } from "@/types";

// --- 1. Modular Component Registry ---
import UniversalHero from "@/components/templates/sections/UniversalHero";
import UniversalRegistry from "@/components/templates/sections/UniversalRegistry";
import { AuditReportGenerator } from "../sections/AuditReportGenerator";
import { PerformanceTrajectory } from "../sections/PerformanceTrajectory";
import UniversalPortal from "@/components/templates/sections/UniversalPortal";
import RevenueLeakageCalculator from "../sections/RevenueLeakageCalculator";
import { DynamicFAQ } from "../sections/DynamicFAQ";
import { RegionalRoadmap } from "../sections/RegionalRoadmap";
import { LocalSuccessNode } from "../sections/LocalSuccessNode";
import { RegionalGallery } from "../sections/RegionalGallery";
import { LocalInsight } from "../sections/LocalInsight";
import { DirectTerminal } from "../sections/DirectTerminal";

const SeoAgencyTemplate = ({ data }: { data: UniversalTemplateProps }) => {
  const schema = generateUniversalSchema(data);
  const { theme } = data;

  return (
    <LayoutEngine spacing="none" theme={theme}>
      <JsonLd data={schema} id={`schema-seo-agency-${data.templateSlug}`} />

      <main className="relative flex flex-col antialiased">
        <h2 className="sr-only">SEO Strategy & Intelligence Lab</h2>

        {/* [SEQUENCE_00]: CORE HERO (Surface Main) */}
        <section className="bg-surface-main">
          <UniversalHero data={data} />
        </section>

        {/* [SEQUENCE_01]: LAB INSIGHT (Surface Main) */}
        {data.province && (
          <section className="bg-surface-main py-24 md:py-32">
            <LocalInsight
              insight={data.localContext?.marketInsight || ""}
              painPoints={(data.localContext?.painPoints as string[]) || []}
              marketSaturation={data.marketSaturation}
            />
          </section>
        )}

        {/* [SEQUENCE_02]: PERFORMANCE PROMOTION (Surface Offset) */}
        {data.promotions && data.promotions.length > 0 && (
          <section className="bg-surface-offset border-border/40 border-y py-24">
            <div className="container mx-auto px-4">
              <div className="shadow-pro-xl rounded-section border-border/50 bg-surface-card relative overflow-hidden p-10 backdrop-blur-3xl transition-all md:p-20">
                <div className="relative z-10 flex flex-col items-center justify-between gap-12 md:flex-row">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="bg-brand-primary shadow-glow-sm h-2 w-2 animate-pulse rounded-full" />
                      <span className="font-mono text-[10px] font-black tracking-[0.4em] text-[var(--brand-primary)] uppercase">
                        SEO_Strategy_Bonus
                      </span>
                    </div>
                    <h3 className="text-text-primary text-3xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-6xl">
                      {data.promotions[0].title}
                    </h3>
                    <p className="text-text-secondary max-w-2xl text-lg font-medium italic opacity-80">
                      “{data.promotions[0].description}”
                    </p>
                  </div>
                  {data.promotions[0].discount && (
                    <div className="rounded-3xl border-2 border-dashed border-[var(--brand-primary)]/30 bg-[var(--brand-primary)]/5 px-12 py-8 text-center shadow-inner">
                      <p className="text-text-muted mb-2 text-[10px] font-bold tracking-widest uppercase opacity-40">
                        Audit_Bonus
                      </p>
                      <p className="text-brand-primary text-5xl font-black italic">
                        {data.promotions[0].discount}
                      </p>
                    </div>
                  )}
                </div>
                <div className="bg-brand-primary/5 absolute inset-0 -z-0" />
              </div>
            </div>
          </section>
        )}

        {/* [SEQUENCE_03]: NEURAL AUDIT ENGINE (Surface Main) */}
        <section className="bg-surface-main py-24 md:py-32">
          <AuditReportGenerator />
        </section>

        {/* [SEQUENCE_04]: REVENUE MATRIX (Surface Offset) */}
        <section className="bg-surface-offset border-border/40 border-y py-24 md:py-32">
          <RevenueLeakageCalculator data={data} />
        </section>

        {/* [SEQUENCE_05]: TRAJECTORY & BLUEPRINT (Surface Main) */}
        <section className="bg-surface-main space-y-40 py-24 md:py-40">
          <PerformanceTrajectory />
          <UniversalRegistry data={data} />
        </section>

        {/* [SEQUENCE_06]: LAB VISUALS & ROADMAP (Surface Offset) */}
        <section className="bg-surface-offset border-border/40 space-y-32 border-y py-24 md:py-32">
          {data.regionalVisuals?.gallery && (
            <RegionalGallery images={data.regionalVisuals.gallery} />
          )}
          {data.province && (
            <div className="space-y-32">
              <RegionalRoadmap province={data.province} steps={data.regionalRoadmap} />
              <div className="container mx-auto px-4">
                <div className="mx-auto max-w-2xl">
                  <DirectTerminal
                    mode="health-check"
                    province={data.province}
                    latency={data.regionalLatency}
                  />
                </div>
              </div>
            </div>
          )}
        </section>

        {/* [SEQUENCE_07]: SUCCESS PROOF (Surface Main) */}
        {data.localSuccessStory && data.province && (
          <section className="bg-surface-main py-24 md:py-32">
            <LocalSuccessNode
              title={data.localSuccessStory.title}
              result={data.localSuccessStory.result}
              province={data.province}
            />
          </section>
        )}

        {/* [SEQUENCE_08]: INTELLIGENCE FAQ (Surface Offset) */}
        <section className="bg-surface-offset border-border/40 border-t">
          <DynamicFAQ
            items={data.faqs}
            title="SEO_Intelligence_FAQ"
            description="ตอบทุกข้อสงสัยด้านเทคนิคและการทำอันดับเพื่อความโปร่งใสสูงสุดในการทำงาน"
            className="py-24"
          />
        </section>

        {/* [SEQUENCE_09]: LAB PORTAL (Surface Main) */}
        <section className="bg-surface-main">
          <UniversalPortal data={data} />
        </section>

        <footer className="bg-surface-main border-border/5 border-t py-12 text-center opacity-10">
          <p className="font-mono text-[8px] tracking-[0.4em] uppercase">
            SEO_Lab_Protocol.v18.5.0_FINAL
          </p>
        </footer>
      </main>
    </LayoutEngine>
  );
};

export default SeoAgencyTemplate;
