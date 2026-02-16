/**
 * [TEMPLATE]: CORPORATE_ORCHESTRATOR v18.0.39 (STABLE_EXECUTIVE)
 * [STRATEGY]: Strategic Intent | Decision-Support FAQ | Named Import Standard
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useMemo } from "react";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import JsonLd from "@/components/seo/JsonLd";
import { generateUniversalSchema } from "@/lib/schema";
import type { UniversalTemplateProps } from "@/types";

// --- 1. Modular Component Registry (Identity-Aware) ---
import { VisionPortal } from "./_components/VisionPortal";
import { CapabilityMatrix } from "./_components/CapabilityMatrix";
import { ValueBlueprint } from "./_components/ValueBlueprint";
import { TrustNetwork } from "./_components/TrustNetwork";
import { ConsultGateway } from "./_components/ConsultGateway";
import { SuccessTimeline } from "./_components/SuccessTimeline";

/** * [INJECT]: ดึงระบบ FAQ Engine ด้วย Named Import { DynamicFAQ }
 * [TECHNICAL_FIX]: ปรับปรุงเพื่อป้องกันค่า undefined ในขั้นตอน Prerendering ของ Next.js
 */
import { DynamicFAQ } from "../sections/DynamicFAQ";

/**
 * @component CorporateTemplate
 * @description เทมเพลตระดับบริหารที่เน้นการสร้าง Authority และการเล่าเรื่องเชิงกลยุทธ์
 */
const CorporateTemplate = ({ data }: { data: UniversalTemplateProps }) => {
  // [LOGIC]: จดจำค่า Schema เพื่อประสิทธิภาพการเรนเดอร์และความแม่นยำทางเทคนิค (E-E-A-T)
  const schema = useMemo(() => generateUniversalSchema(data), [data]);

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={schema} />

      <main className="min-h-[100dvh] bg-[var(--surface-main)] transition-colors duration-500 selection:bg-[var(--brand-primary)] selection:text-black">
        {/* --- Phase 01: Strategic Intent --- 
            แสดงวิสัยทัศน์และพันธกิจขององค์กรในรูปแบบพรีเมียม
        */}
        <VisionPortal title={data.title} subtitle={data.description} />

        {/* --- Phase 02: Evidence & Path --- 
            Blueprint ของคุณค่าองค์กรและเส้นทางแห่งความสำเร็จ (Success Timeline)
        */}
        <ValueBlueprint />
        <SuccessTimeline />

        {/* --- Phase 03: Solution Architecture --- 
            แสดงรายการขีดความสามารถ (Capabilities) ในรูปแบบ Matrix เชิงวิศวกรรม
        */}
        <CapabilityMatrix
          items={(data.coreFeatures || []).map((f) => ({
            title: f.title,
            description: f.description,
            icon: f.icon,
          }))}
        />

        {/* --- Phase 04: Social Proof --- 
            เครือข่ายความเชื่อมั่นและพาร์ทเนอร์เชิงกลยุทธ์ (Global Trust Signals)
        */}
        <TrustNetwork clientTrust={data.clientTrust || "Strategic Partnership Network"} />

        {/* --- Phase 05: Decision Intelligence (FAQ Activation) --- 
            [STRATEGY]: ตอบข้อสงสัยเชิงลึกเพื่อสนับสนุนการตัดสินใจระดับบริหาร
        */}
        <div className="border-y border-[var(--foreground)]/5 bg-[var(--surface-main)]/20">
          <DynamicFAQ
            items={data.faqs}
            title="Executive_FAQ"
            description="รวบรวมข้อมูลเชิงเทคนิคและมาตรฐานการดำเนินงานเพื่อความโปร่งใสสูงสุด"
            className="py-24"
          />
        </div>

        {/* --- Phase 06: Executive Conversion --- 
            จุดเปลี่ยนผ่านสู่กระบวนการนัดหมายปรึกษาหารือ (High-Value Conversion)
        */}
        <ConsultGateway />

        {/* --- SYSTEM FOOTER: Technical Stamp --- */}
        <footer className="border-t border-[var(--foreground)]/5 py-8 text-center opacity-10">
          <p className="font-mono text-[8px] tracking-[0.4em] uppercase">
            Corporate_Node_Protocol.v{schema ? "18.0.39" : "INIT"}
          </p>
        </footer>
      </main>
    </LayoutEngine>
  );
};

export default CorporateTemplate;
