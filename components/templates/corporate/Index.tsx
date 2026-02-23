/**
 * [TEMPLATE]: CORPORATE_ORCHESTRATOR v18.0.40 (STABLE_EXECUTIVE)
 * [STRATEGY]: Strategic Intent | Decision-Support FAQ | Named Import Standard
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import JsonLd from "@/components/seo/JsonLd";
import { generateUniversalSchema } from "@/lib/schema";
import type { UniversalTemplateProps } from "@/types";

// --- 1. Modular Component Registry (Identity-Aware) ---
import { VisionPortal } from "../sections/VisionPortal";
import { CapabilityMatrix } from "../sections/CapabilityMatrix";
import { ValueBlueprint } from "../sections/ValueBlueprint";
import { TrustNetwork } from "../sections/TrustNetwork";
import { ConsultGateway } from "../sections/ConsultGateway";
import { SuccessTimeline } from "../sections/SuccessTimeline";
import { RegionalRoadmap } from "../sections/RegionalRoadmap";
import { LocalSuccessNode } from "../sections/LocalSuccessNode";
import { RegionalGallery } from "../sections/RegionalGallery";
import { LocalInsight } from "../sections/LocalInsight";
import { DirectTerminal } from "../sections/DirectTerminal";

/** * [INJECT]: ดึงระบบ FAQ Engine ด้วย Named Import { DynamicFAQ }
 * [TECHNICAL_FIX]: ปรับปรุงเพื่อป้องกันค่า undefined ในขั้นตอน Prerendering ของ Next.js
 */
import { DynamicFAQ } from "../sections/DynamicFAQ";

/**
 * @component CorporateTemplate
 * @description เทมเพลตระดับบริหารที่เน้นการสร้าง Authority และการเล่าเรื่องเชิงกลยุทธ์
 */
const CorporateTemplate = ({ data }: { data: UniversalTemplateProps }) => {
  // [LOGIC]: Direct Schema Generation for RSC Compliance
  const schema = generateUniversalSchema(data);

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={schema} />

      <main className="min-h-[100dvh] bg-[var(--surface-main)] transition-colors duration-500 selection:bg-[var(--brand-primary)] selection:text-black">
        {/* --- Phase 01: Strategic Intent --- 
            แสดงวิสัยทัศน์และพันธกิจขององค์กรในรูปแบบพรีเมียม
        */}
        <VisionPortal
          title={data.title}
          subtitle={data.description}
          banner={data.regionalVisuals?.banner}
        />

        {/* [NEW]: Regional Market Insight */}
        {data.province && (
          <LocalInsight
            insight={data.localContext?.marketInsight || ""}
            painPoints={(data.localContext?.painPoints as string[]) || []}
            marketSaturation={data.marketSaturation}
          />
        )}

        {/* [NEW]: Regional Promotions (Corporate Style) */}
        {data.promotions && data.promotions.length > 0 && (
          <section className="container mx-auto mt-12 px-4">
            <div className="shadow-pro hover:shadow-glow-sm rounded-[var(--radius)] border-l-4 border-[var(--brand-primary)] bg-[var(--surface-card)] p-10 transition-all md:p-16">
              <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] font-black tracking-[0.4em] text-[var(--brand-primary)] uppercase">
                      Strategic_Partnership_Benefit
                    </span>
                  </div>
                  <h3 className="text-3xl font-black tracking-tighter uppercase italic md:text-5xl">
                    {data.promotions[0].title}
                  </h3>
                  <p className="max-w-2xl text-lg font-medium opacity-60">
                    {data.promotions[0].description}
                  </p>
                </div>
                {data.promotions[0].discount && (
                  <div className="rounded-2xl border-[var(--border-width)] border-[var(--brand-primary)]/20 bg-[var(--brand-primary)]/5 px-10 py-6 text-center">
                    <p className="text-[10px] font-bold tracking-widest uppercase opacity-40">
                      Incentive
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

        {/* --- Phase 02: Evidence & Path --- 
            Blueprint ของคุณค่าองค์กรและเส้นทางแห่งความสำเร็จ (Success Timeline)
        */}
        <ValueBlueprint />
        <SuccessTimeline />

        {/* [NEW]: Regional Technical Roadmap */}
        {data.province && <RegionalRoadmap province={data.province} steps={data.regionalRoadmap} />}

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

        {/* [NEW]: Regional Corporate Facilities/Gallery */}
        {data.regionalVisuals?.gallery && <RegionalGallery images={data.regionalVisuals.gallery} />}

        {/* --- Phase 04: Social Proof --- 
            เครือข่ายความเชื่อมั่นและพาร์ทเนอร์เชิงกลยุทธ์ (Global Trust Signals)
        */}
        <TrustNetwork clientTrust={data.clientTrust || "Strategic Partnership Network"} />

        {/* [NEW]: Regional Case Study Result */}
        {data.localSuccessStory && data.province && (
          <LocalSuccessNode
            title={data.localSuccessStory.title}
            result={data.localSuccessStory.result}
            province={data.province}
          />
        )}

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

        {/* Phase 06: Executive Conversion --- 
            จุดเปลี่ยนผ่านสู่กระบวนการนัดหมายปรึกษาหารือ (High-Value Conversion)
        */}
        {data.province && (
          <div className="container mx-auto px-4 py-24">
            <div className="mx-auto max-w-2xl">
              <DirectTerminal
                mode="health-check"
                province={data.province}
                latency={data.regionalLatency}
              />
            </div>
          </div>
        )}
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
