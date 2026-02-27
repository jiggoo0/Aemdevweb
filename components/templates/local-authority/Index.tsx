/**
 * [TEMPLATE]: LOCAL_AUTHORITY_ORCHESTRATOR v18.5.0 (SEO_HARDENED)
 * [STRATEGY]: Sequence-First Layout | Hyper-Local Authority | Identity Guard
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import JsonLd from "@/components/seo/JsonLd";
import { generateUniversalSchema } from "@/lib/schema";
import type { UniversalTemplateProps } from "@/types";

// --- 1. Modular Component Registry ---
import UniversalHero from "@/components/templates/sections/UniversalHero";
import { LocalMapNode } from "../sections/LocalMapNode";
import { LocalInsight } from "../sections/LocalInsight";
import { MarketIntelligence } from "../sections/MarketIntelligence";
import UniversalPortal from "@/components/templates/sections/UniversalPortal";
import { RegionalRoadmap } from "../sections/RegionalRoadmap";
import { LocalSuccessNode } from "../sections/LocalSuccessNode";
import { DirectTerminal } from "../sections/DirectTerminal";
import { DynamicFAQ } from "../sections/DynamicFAQ";

const LocalAuthorityTemplate = ({ data }: { data: UniversalTemplateProps }) => {
  const schema = generateUniversalSchema(data);
  const { theme } = data;
  const provinceName = data.province || "THAILAND";

  const context = data.localContext || {
    marketInsight: `บริการรับทำเว็บไซต์และตลาดยุคใหม่สำหรับพื้นที่ ${provinceName} โดยผู้เชี่ยวชาญเฉพาะทาง`,
    painPoints: [],
    competitorLevel: "medium",
    nicheIndustries: [],
  };

  return (
    <LayoutEngine spacing="none" theme={theme}>
      <JsonLd data={schema} />

      <main className="relative flex flex-col antialiased">
        <h2 className="sr-only">Hyper-Local Authority & Provincial SEO Hub</h2>

        {/* [SEQUENCE_00]: CORE HERO (Surface Main) */}
        <section className="bg-surface-main">
          <UniversalHero data={data} />
        </section>

        {/* [SEQUENCE_01]: GEOGRAPHICAL PROOF (Surface Main) */}
        <section className="bg-surface-main py-12">
          <LocalMapNode
            lat={data.coordinates?.lat || 13.7563}
            lng={data.coordinates?.lng || 100.5018}
            province={provinceName}
          />
        </section>

        {/* [SEQUENCE_02]: MARKET ANALYSIS (Surface Offset) */}
        <section className="bg-surface-offset border-border/40 border-y py-24 md:py-40">
          <LocalInsight
            insight={context.marketInsight}
            painPoints={(context.painPoints as string[]) || []}
            marketSaturation={data.marketSaturation}
          />
        </section>

        {/* [SEQUENCE_03]: INTELLIGENCE MATRIX (Surface Main) */}
        <section className="bg-surface-main space-y-40 py-24 md:py-40">
          <MarketIntelligence
            level={context.competitorLevel || "medium"}
            industries={(context.nicheIndustries as string[]) || []}
          />
          <RegionalRoadmap province={provinceName} steps={data.regionalRoadmap} />
        </section>

        {/* [SEQUENCE_04]: REGIONAL TERMINAL (Surface Offset) */}
        <section className="bg-surface-offset border-border/40 border-y py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl">
              <DirectTerminal
                mode="health-check"
                province={provinceName}
                latency={data.regionalLatency}
              />
            </div>
          </div>
        </section>

        {/* [SEQUENCE_05]: LOCAL PROOF (Surface Main) */}
        {data.localSuccessStory && (
          <section className="bg-surface-main py-24 md:py-32">
            <LocalSuccessNode
              title={data.localSuccessStory.title}
              result={data.localSuccessStory.result}
              province={provinceName}
            />
          </section>
        )}

        {/* [SEQUENCE_06]: REGIONAL FAQ (Surface Offset) */}
        <section className="bg-surface-offset border-border/40 border-t py-24">
          <DynamicFAQ
            items={data.faqs || []}
            title={`Regional_FAQ: ${provinceName}`}
            description={`ข้อมูลทางเทคนิคและการให้บริการที่ปรับแต่งเพื่อความต้องการของชาว ${provinceName} โดยเฉพาะ`}
          />
        </section>

        {/* [SEQUENCE_07]: LOCAL PORTAL (Surface Main) */}
        <section className="bg-surface-main">
          <UniversalPortal data={data} />
        </section>

        <footer className="bg-surface-main border-border/5 border-t py-8 text-center opacity-10">
          <p className="font-mono text-[8px] tracking-[0.4em] uppercase">
            PSEO_Node_Protocol.v18.5.0_{provinceName.toUpperCase()}
          </p>
        </footer>
      </main>
    </LayoutEngine>
  );
};

export default LocalAuthorityTemplate;
