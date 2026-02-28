/**
 * [TEMPLATE]: CORPORATE_ORCHESTRATOR v18.5.0 (EXECUTIVE_HARDENED)
 * [STRATEGY]: Sequence-First Layout | Professional Authority | Identity Guard
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
import { ValueBlueprint } from "../sections/ValueBlueprint";
import UniversalLogoCloud from "@/components/templates/sections/UniversalLogoCloud";
import UniversalPortal from "@/components/templates/sections/UniversalPortal";
import { SuccessTimeline } from "../sections/SuccessTimeline";
import { RegionalRoadmap } from "../sections/RegionalRoadmap";
import { LocalSuccessNode } from "../sections/LocalSuccessNode";
import { RegionalGallery } from "../sections/RegionalGallery";
import { LocalInsight } from "../sections/LocalInsight";
import { DynamicFAQ } from "../sections/DynamicFAQ";
import RegionalNodeHub from "../sections/RegionalNodeHub";

const CorporateTemplate = ({ data }: { data: UniversalTemplateProps }) => {
  const schema = generateUniversalSchema(data);
  const { theme } = data;

  return (
    <LayoutEngine spacing="none" theme={theme}>
      <JsonLd data={schema} />

      <main className="relative flex flex-col antialiased">
        <h2 className="sr-only">Executive Strategy & Capability Architecture</h2>

        {/* [SEQUENCE_00]: CORE HERO (Surface Main) */}
        <section className="bg-surface-main">
          <UniversalHero data={data} />
        </section>

        {/* [SEQUENCE_01]: REGIONAL INSIGHT (Surface Main) */}
        {data.province && (
          <section className="bg-surface-main py-24 md:py-32">
            <LocalInsight
              insight={data.localContext?.marketInsight || ""}
              painPoints={(data.localContext?.painPoints as string[]) || []}
              marketSaturation={data.marketSaturation}
            />
          </section>
        )}

        {/* [SEQUENCE_02]: CORPORATE BENEFIT (Surface Offset) */}
        {data.promotions && data.promotions.length > 0 && (
          <section className="bg-surface-offset border-border/40 border-y py-24">
            <div className="container mx-auto px-4">
              <div className="shadow-pro-xl rounded-section bg-surface-card border-l-[6px] border-[var(--brand-primary)] p-10 backdrop-blur-3xl transition-all md:p-20">
                <div className="relative z-10 flex flex-col items-start justify-between gap-12 md:flex-row md:items-center">
                  <div className="space-y-6">
                    <span className="font-mono text-[10px] font-black tracking-[0.4em] text-[var(--brand-primary)] uppercase opacity-60">
                      Strategic_Partnership_Incentive
                    </span>
                    <h3 className="text-text-primary text-3xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-6xl">
                      {data.promotions[0].title}
                    </h3>
                    <p className="text-text-secondary max-w-2xl text-lg font-medium italic opacity-80">
                      “{data.promotions[0].description}”
                    </p>
                  </div>
                  {data.promotions[0].discount && (
                    <div className="border-border/50 bg-surface-offset rounded-3xl border px-12 py-8 text-center shadow-inner">
                      <p className="text-text-muted mb-2 text-[10px] font-bold tracking-widest uppercase opacity-40">
                        Benefit_Node
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

        {/* [SEQUENCE_03]: VALUE BLUEPRINT & TIMELINE (Surface Main) */}
        <section className="bg-surface-main space-y-32 py-24 md:py-40">
          <ValueBlueprint />
          <SuccessTimeline />
        </section>

        {/* [SEQUENCE_04]: REGIONAL ROADMAP (Surface Offset) */}
        {data.province && (
          <section className="bg-surface-offset border-border/40 border-y py-24 md:py-32">
            <RegionalRoadmap province={data.province} steps={data.regionalRoadmap} />
          </section>
        )}

        {/* [SEQUENCE_05]: SOLUTION ARCHITECTURE (Surface Main) */}
        <section className="bg-surface-main py-24 md:py-32">
          <UniversalRegistry data={data} />
        </section>

        {/* [SEQUENCE_06]: REGIONAL VISUALS (Surface Offset) */}
        {data.regionalVisuals?.gallery && (
          <section className="bg-surface-offset border-border/40 border-y py-24 md:py-32">
            <RegionalGallery images={data.regionalVisuals.gallery} />
          </section>
        )}

        {/* [SEQUENCE_07]: TRUST NETWORK (Surface Main) */}
        <section className="bg-surface-main py-24 md:py-32">
          <UniversalLogoCloud
            title={data.clientTrust || "Strategic Partnership Network"}
            theme="full_section"
          />
          {data.localSuccessStory && data.province && (
            <div className="mt-24">
              <LocalSuccessNode
                title={data.localSuccessStory.title}
                result={data.localSuccessStory.result}
                province={data.province}
              />
            </div>
          )}
        </section>

        {/* [SEQUENCE_08]: REGIONAL HUB (Internal Linking) */}
        <RegionalNodeHub data={data} />

        {/* [SEQUENCE_09]: DECISION INTELLIGENCE (Surface Offset) */}
        <section className="bg-surface-offset border-border/40 border-t">
          <DynamicFAQ
            items={data.faqs}
            title="Executive_FAQ"
            description="รวบรวมข้อมูลเชิงเทคนิคและมาตรฐานการดำเนินงานเพื่อความโปร่งใสสูงสุด"
            className="py-24"
          />
        </section>

        {/* [SEQUENCE_10]: EXECUTIVE PORTAL (Surface Main) */}
        <section className="bg-surface-main">
          <UniversalPortal data={data} />
        </section>

        <footer className="bg-surface-main border-border/5 border-t py-12 text-center opacity-10">
          <p className="font-mono text-[8px] tracking-[0.4em] uppercase">
            Corporate_Node_Protocol.v18.5.0_FINAL
          </p>
        </footer>
      </main>
    </LayoutEngine>
  );
};

export default CorporateTemplate;
