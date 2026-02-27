/**
 * [TEMPLATE]: HOTEL_RESORT_ORCHESTRATOR v18.5.0 (HOSPITALITY_HARDENED)
 * [STRATEGY]: Sequence-First Layout | Environmental Aura | Identity Guard
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import JsonLd from "@/components/seo/JsonLd";
import { generateUniversalSchema } from "@/lib/schema";
import type { UniversalTemplateProps } from "@/types";

// --- 1. Modular Component Registry ---
import UniversalHero from "@/components/templates/sections/UniversalHero";
import UniversalRegistry from "@/components/templates/sections/UniversalRegistry";
import { WeatherTracker } from "../sections/WeatherTracker";
import { ExperienceNodes } from "../sections/ExperienceNodes";
import UniversalPortal from "@/components/templates/sections/UniversalPortal";
import { RegionalRoadmap } from "../sections/RegionalRoadmap";
import { LocalSuccessNode } from "../sections/LocalSuccessNode";
import { RegionalGallery } from "../sections/RegionalGallery";
import { LocalInsight } from "../sections/LocalInsight";
import { DynamicFAQ } from "../sections/DynamicFAQ";

const HotelResortTemplate = ({ data }: { data: UniversalTemplateProps }) => {
  const schema = generateUniversalSchema(data);
  const { theme } = data;
  const locationName = data.province || "Thailand";

  return (
    <LayoutEngine spacing="none" theme={theme}>
      <JsonLd data={schema} />

      <main className="relative flex flex-col antialiased">
        <h2 className="sr-only">Hospitality Experience & Facility Architecture</h2>

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

        {/* [SEQUENCE_02]: HOSPITALITY DEAL (Surface Offset) */}
        {data.promotions && data.promotions.length > 0 && (
          <section className="bg-surface-offset border-border/40 border-y py-24">
            <div className="container mx-auto px-4">
              <div className="shadow-pro-xl rounded-section border-border/50 bg-surface-card relative overflow-hidden p-10 backdrop-blur-3xl transition-all md:p-20">
                <div className="relative z-10 flex flex-col items-center justify-between gap-12 md:flex-row">
                  <div className="space-y-6 text-center md:text-left">
                    <div className="flex items-center justify-center gap-3 md:justify-start">
                      <div className="bg-brand-primary h-2 w-2 animate-pulse rounded-full" />
                      <span className="font-mono text-[10px] font-black tracking-[0.4em] text-[var(--brand-primary)] uppercase">
                        Exclusive_Hospitality_Offer
                      </span>
                    </div>
                    <h3 className="text-text-primary text-3xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-6xl">
                      {data.promotions[0].title}
                    </h3>
                    <p className="text-text-secondary max-w-xl text-lg font-medium italic opacity-80">
                      “{data.promotions[0].description}”
                    </p>
                  </div>
                  {data.promotions[0].discount && (
                    <div className="rounded-3xl border-2 border-dashed border-[var(--brand-primary)]/30 bg-[var(--brand-primary)]/5 px-12 py-8 text-center shadow-inner">
                      <p className="text-text-muted mb-2 text-[10px] font-bold tracking-widest uppercase opacity-40">
                        Save_Rate
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

        {/* [SEQUENCE_03]: WEATHER & FACILITIES (Surface Main) */}
        <section className="bg-surface-main space-y-24 py-24 md:py-40">
          <div className="container mx-auto px-4">
            <div className="ml-auto max-w-md">
              <WeatherTracker location={locationName} />
            </div>
          </div>
          <UniversalRegistry data={data} />
        </section>

        {/* [SEQUENCE_04]: EXPERIENCE NODES (Surface Offset) */}
        <section className="bg-surface-offset border-border/40 border-y py-24 md:py-40">
          <ExperienceNodes isTourismHeavy={data.isTourismHeavy} />
        </section>

        {/* [SEQUENCE_05]: REGIONAL ROADMAP & VISUALS (Surface Main) */}
        <section className="bg-surface-main space-y-32 py-24 md:py-32">
          {data.province && (
            <RegionalRoadmap province={data.province} steps={data.regionalRoadmap} />
          )}
          {data.regionalVisuals?.gallery && (
            <RegionalGallery images={data.regionalVisuals.gallery} />
          )}
        </section>

        {/* [SEQUENCE_06]: SUCCESS STORY (Surface Offset) */}
        {data.localSuccessStory && (
          <section className="bg-surface-offset border-border/40 border-y py-24 md:py-32">
            <LocalSuccessNode
              title={data.localSuccessStory.title}
              result={data.localSuccessStory.result}
              province={data.province || "Thailand"}
            />
          </section>
        )}

        {/* [SEQUENCE_07]: HOSPITALITY FAQ (Surface Main) */}
        <section className="bg-surface-main py-24">
          <DynamicFAQ
            items={data.faqs}
            title="Essential_Intelligence"
            description={`ข้อมูลสำคัญสำหรับการเตรียมตัวเข้าพักที่ ${data.title} ณ ${locationName}`}
          />
        </section>

        {/* [SEQUENCE_08]: HOSPITALITY PORTAL (Surface Main) */}
        <section className="bg-surface-main">
          <UniversalPortal data={data} />
        </section>

        <footer className="bg-surface-main border-border/5 border-t py-12 text-center opacity-10">
          <p className="font-mono text-[8px] tracking-[0.4em] uppercase">
            Hospitality_Node_Protocol.v18.5.0_FINAL
          </p>
        </footer>
      </main>
    </LayoutEngine>
  );
};

export default HotelResortTemplate;
