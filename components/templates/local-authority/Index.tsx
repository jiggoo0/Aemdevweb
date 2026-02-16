/**
 * [TEMPLATE]: LOCAL_AUTHORITY_ORCHESTRATOR v18.1.2 (STRICT_ARRAY_SAFETY)
 * [STRATEGY]: Hyper-Local Authority | Defensive Rendering | Named Import Standard
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useMemo } from "react";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import JsonLd from "@/components/seo/JsonLd";
import { generateUniversalSchema } from "@/lib/schema";
import type { UniversalTemplateProps } from "@/types";

// --- Modular Component Registry ---
import { GeoNodeHeader } from "./_components/GeoNodeHeader";
import { DistrictHero } from "./_components/DistrictHero"; 
import { LocalMapNode } from "./_components/LocalMapNode";
import { LocalInsight } from "./_components/LocalInsight";
import { MarketIntelligence } from "./_components/MarketIntelligence";
import { DistrictRegistry } from "./_components/DistrictRegistry";
import { RegionalAction } from "./_components/RegionalAction";

// --- Dynamic Sections ---
import { DynamicFAQ } from "../sections/DynamicFAQ";

const LocalAuthorityTemplate = ({ data }: { data: UniversalTemplateProps }) => {
  // [SEO_ENGINE]: ประมวลผล Semantic Schema สำหรับ Google
  const schema = useMemo(() => generateUniversalSchema(data), [data]);
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
        />

        {/* --- Phase 01.5: Local Hook Experience --- 
            [STRATEGY]: Personalization ผ่านระบบ Shuffle ชื่ออำเภอ
            [CHECK]: บังคับส่ง Array อย่างน้อย 1 ค่าเสมอเพื่อความเสถียรของเครื่องยนต์เรนเดอร์ (Hydration Safe)
        */}
        <DistrictHero 
          districts={data.districts && data.districts.length > 0 ? data.districts : ["เมือง"]} 
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
            painPoints={context.painPoints || []} 
          />

          <MarketIntelligence
            level={context.competitorLevel || "medium"}
            industries={context.nicheIndustries || []}
          />

          <DistrictRegistry districts={data.districts || []} />
        </div>

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
            PSEO_Node_Active.v18.1.2_{provinceName.toUpperCase()}
          </p>
        </footer>
      </main>
    </LayoutEngine>
  );
};

export default LocalAuthorityTemplate;
