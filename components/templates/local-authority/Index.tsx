/**
 * [TEMPLATE]: LOCAL_AUTHORITY_ORCHESTRATOR v18.0.39 (STABLE_PSEO)
 * [STRATEGY]: Hyper-Local Authority | Identity-Aware FAQ | Named Import Standard
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useMemo } from "react";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import JsonLd from "@/components/seo/JsonLd";
import { generateUniversalSchema } from "@/lib/schema";
import type { UniversalTemplateProps } from "@/types";

// --- 1. Modular Component Registry (Identity-Aware) ---
import { GeoNodeHeader } from "./_components/GeoNodeHeader";
import { LocalMapNode } from "./_components/LocalMapNode";
import { LocalInsight } from "./_components/LocalInsight";
import { MarketIntelligence } from "./_components/MarketIntelligence";
import { DistrictRegistry } from "./_components/DistrictRegistry";
import { RegionalAction } from "./_components/RegionalAction";

/** * [INJECT]: ดึงระบบ FAQ Engine ด้วย Named Import { DynamicFAQ }
 * [TECHNICAL_FIX]: ปรับปรุงเพื่อแก้ปัญหา 'undefined' ระหว่างการทำ Static Site Generation (SSG) 
 * ซึ่งเป็นสาเหตุหลักที่ทำให้หน้า /areas/kamphaeng-phet พังในช่วง Build
 */
import { DynamicFAQ } from "../sections/DynamicFAQ";

/**
 * @component LocalAuthorityTemplate
 * @description เทมเพลตสำหรับหน้า P-SEO รายพื้นที่ เน้นการสร้าง Authority ผ่านข้อมูลพิกัดและบริบทท้องถิ่น
 */
const LocalAuthorityTemplate = ({ data }: { data: UniversalTemplateProps }) => {
  // [LOGIC]: ประมวลผล Schema สำหรับ SEO ประจำท้องถิ่น (LocalBusiness / Place) 
  // เพื่อยืนยันตัวตนระดับ Geographic Entity ต่อ Google Search
  const schema = useMemo(() => generateUniversalSchema(data), [data]);
  const context = data.localContext;
  const provinceName = data.province || "THAILAND";

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={schema} />

      <main className="min-h-[100dvh] bg-[var(--surface-main)] selection:bg-[var(--brand-primary)] selection:text-black transition-colors duration-500">
        
        {/* --- Phase 01: Identification --- 
            ระบุชื่อจังหวัดและสถานะของ Digital Node ในเครือข่ายวิศวกรรม
        */}
        <GeoNodeHeader
          province={provinceName}
          nodeId={data.id?.replace("NODE-", "") || "BASE_NODE"}
          lat={data.coordinates?.lat}
          lng={data.coordinates?.lng}
        />

        {/* --- Phase 02: Geographical Proof --- 
            แสดงพิกัดบน Blueprint Map เพื่อสร้างความเชื่อมั่นเชิงพื้นที่ (Geographic Trust)
        */}
        <LocalMapNode
          lat={data.coordinates?.lat || 13.7563}
          lng={data.coordinates?.lng || 100.5018}
          province={provinceName}
        />

        {/* --- Phase 03: Market Analysis --- 
            วิเคราะห์ตลาด พฤติกรรมผู้บริโภค และกลุ่มอุตสาหกรรมเป้าหมาย (Niche Industries)
        */}
        {context && (
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
        )}

        {/* --- Phase 04: Regional Intelligence (FAQ) --- 
            [STRATEGY]: สร้างความลึกของเนื้อหา (Content Depth) ประจำพื้นที่จังหวัด {provinceName}
            เพื่อเพิ่มคะแนน E-E-A-T และกำจัด Unused Files ในระบบ Build
        */}
        <div className="border-t border-[var(--foreground)]/5 bg-[var(--surface-main)]/10">
          <DynamicFAQ
            items={data.faqs}
            title={`Regional_FAQ: ${provinceName}`}
            description={`ข้อมูลทางเทคนิคและการให้บริการที่ปรับแต่งเพื่อความต้องการของชาว ${provinceName} โดยเฉพาะ`}
          />
        </div>

        {/* --- Phase 05: Local Conversion --- 
            Area-Specific CTA สำหรับการปิดการขายในระดับภูมิภาค
        */}
        <RegionalAction province={provinceName} />

        {/* --- SYSTEM FOOTER: Technical Node Status --- */}
        <footer className="py-8 text-center opacity-10">
          <p className="font-mono text-[8px] tracking-[0.4em] uppercase">
            PSEO_Node_Active.v18.0.39_{provinceName.toUpperCase()}
          </p>
        </footer>
      </main>
    </LayoutEngine>
  );
};

export default LocalAuthorityTemplate;
