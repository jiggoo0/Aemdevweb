/**
 * [TEMPLATE]: LOCAL_AUTHORITY_ORCHESTRATOR v18.1.3 (RSC_ENFORCED)
 * [STRATEGY]: Hyper-Local Authority | Server-Side Rendering | Named Import Standard
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import JsonLd from "@/components/seo/JsonLd";
import { generateUniversalSchema } from "@/lib/schema";
import type { UniversalTemplateProps } from "@/types";

// --- Modular Component Registry ---
import { GeoNodeHeader } from "../sections/GeoNodeHeader";
import { DistrictHero } from "../sections/DistrictHero";
import { LocalMapNode } from "../sections/LocalMapNode";
import { LocalInsight } from "../sections/LocalInsight";
import { MarketIntelligence } from "../sections/MarketIntelligence";
import { DistrictRegistry } from "../sections/DistrictRegistry";
import { RegionalAction } from "../sections/RegionalAction";
import { RegionalRoadmap } from "../sections/RegionalRoadmap";
import { LocalSuccessNode } from "../sections/LocalSuccessNode";
import { DirectTerminal } from "../sections/DirectTerminal";

// --- Dynamic Sections ---
import { DynamicFAQ } from "../sections/DynamicFAQ";

const LocalAuthorityTemplate = ({ data }: { data: UniversalTemplateProps }) => {
  // [SEO_ENGINE]: ประมวลผล Semantic Schema สำหรับ Google
  const schema = generateUniversalSchema(data);
  const provinceName = data.province || "THAILAND";

  // [DATA_GUARD]: แผนสำรองข้อมูลบริบทท้องถิ่น ป้องกัน Runtime Error
  const context = data.localContext || {
    marketInsight: `บริการรับทำเว็บไซต์และตลาดยุคใหม่สำหรับพื้นที่ ${provinceName} โดยผู้เชี่ยวชาญเฉพาะทาง`,
    painPoints: [],
    competitorLevel: "medium",
    nicheIndustries: [],
  };

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={schema} />

      <main className="min-h-[100dvh] bg-[var(--surface-main)] transition-colors duration-500 selection:bg-[var(--brand-primary)] selection:text-black">
        {/* --- Phase 01: Identification --- */}
        <GeoNodeHeader
          province={provinceName}
          nodeId={data.id?.replace("NODE-", "") || "BASE_NODE"}
          lat={data.coordinates?.lat}
          lng={data.coordinates?.lng}
          banner={data.regionalVisuals?.banner}
        />

        {/* [NEW]: Regional Promotions (Local Style) */}
        {data.promotions && data.promotions.length > 0 && (
          <section className="container mx-auto mt-12 px-4">
            <div className="rounded-[var(--radius)] border border-dashed border-[var(--brand-primary)]/40 bg-[var(--brand-primary)]/5 p-8 backdrop-blur-xl transition-all hover:bg-[var(--brand-primary)]/10">
              <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[var(--brand-primary)]" />
                    <span className="font-mono text-[9px] font-black tracking-[0.4em] text-[var(--brand-primary)] uppercase">
                      Local_Opportunity: {provinceName}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black tracking-tighter uppercase italic md:text-5xl">
                    {data.promotions[0].title}
                  </h3>
                  <p className="max-w-xl text-base font-medium opacity-60">
                    {data.promotions[0].description}
                  </p>
                </div>
                {data.promotions[0].discount && (
                  <div className="flex flex-col items-center gap-2 rounded-2xl bg-black/5 px-8 py-4 dark:bg-white/5">
                    <p className="text-[10px] font-bold tracking-widest uppercase opacity-40">
                      Benefit
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

        {/* --- Phase 01.5: Local Hook Experience --- 
            [STRATEGY]: Personalization ผ่านระบบ Shuffle ชื่ออำเภอ
            [CHECK]: บังคับส่ง Array อย่างน้อย 1 ค่าเสมอเพื่อความเสถียรของเครื่องยนต์เรนเดอร์ (Hydration Safe)
        */}
        <DistrictHero
          districts={
            data.districts && data.districts.length > 0 ? (data.districts as string[]) : ["เมือง"]
          }
          province={provinceName}
        />

        {/* --- Phase 02: Geographical Proof --- */}
        <LocalMapNode
          lat={data.coordinates?.lat || 13.7563}
          lng={data.coordinates?.lng || 100.5018}
          province={provinceName}
        />

        {/* --- Phase 03: Market Analysis --- */}
        <div className="space-y-0">
          <LocalInsight
            insight={context.marketInsight}
            painPoints={(context.painPoints as string[]) || []}
            marketSaturation={data.marketSaturation}
          />

          <MarketIntelligence
            level={context.competitorLevel || "medium"}
            industries={(context.nicheIndustries as string[]) || []}
          />

          <RegionalRoadmap province={provinceName} steps={data.regionalRoadmap} />

          <div className="container mx-auto px-4 py-24 md:py-32">
            <div className="mx-auto max-w-2xl">
              <DirectTerminal
                mode="health-check"
                province={provinceName}
                latency={data.regionalLatency}
              />
            </div>
          </div>

          <DistrictRegistry districts={(data.districts as string[]) || []} />
        </div>

        {/* [NEW]: Local Proof & Success Story */}
        {data.localSuccessStory && (
          <LocalSuccessNode
            title={data.localSuccessStory.title}
            result={data.localSuccessStory.result}
            province={provinceName}
          />
        )}

        {/* --- Phase 04: Regional Intelligence (FAQ) --- */}
        <div className="border-t border-[var(--foreground)]/5 bg-[var(--surface-main)]/10">
          <DynamicFAQ
            items={data.faqs || []}
            title={`Regional_FAQ: ${provinceName}`}
            description={`ข้อมูลทางเทคนิคและการให้บริการที่ปรับแต่งเพื่อความต้องการของชาว ${provinceName} โดยเฉพาะ`}
          />
        </div>

        {/* --- Phase 05: Local Conversion --- */}
        <RegionalAction province={provinceName} />

        {/* --- SYSTEM FOOTER --- */}
        <footer className="py-8 text-center opacity-10">
          <p className="font-mono text-[8px] tracking-[0.4em] uppercase">
            PSEO_Node_Active.v18.1.3_{provinceName.toUpperCase()}
          </p>
        </footer>
      </main>
    </LayoutEngine>
  );
};

export default LocalAuthorityTemplate;
