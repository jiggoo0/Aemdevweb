/**
 * [TEMPLATE]: HOTEL_RESORT_ORCHESTRATOR v18.0.40 (RSC_ENFORCED)
 * [STRATEGY]: Environmental Authority | Concierge FAQ | Server-Side Rendering
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import JsonLd from "@/components/seo/JsonLd";
import { generateUniversalSchema } from "@/lib/schema";
import type { UniversalTemplateProps } from "@/types";

// --- 1. Modular Component Registry (Experience Suite) ---
import { AtmosphereHeader } from "../sections/AtmosphereHeader";
import { WeatherTracker } from "../sections/WeatherTracker";
import { SuiteRegistry } from "../sections/SuiteRegistry";
import { ExperienceNodes } from "../sections/ExperienceNodes";
import { FacilityMatrix } from "../sections/FacilityMatrix";
import { ReservationPortal } from "../sections/ReservationPortal";
import { RegionalRoadmap } from "../sections/RegionalRoadmap";
import { LocalSuccessNode } from "../sections/LocalSuccessNode";
import { RegionalGallery } from "../sections/RegionalGallery";
import { LocalInsight } from "../sections/LocalInsight";
import { DirectTerminal } from "../sections/DirectTerminal";

/** * [INJECT]: ดึงระบบ FAQ Engine ด้วย Named Import { DynamicFAQ }
 * [TECHNICAL_FIX]: แก้ไขปัญหาความขัดแย้งของ Module เพื่อให้ Prerendering ทำงานได้ 100%
 */
import { DynamicFAQ } from "../sections/DynamicFAQ";

/**
 * @component HotelResortTemplate
 * @description เทมเพลตสำหรับที่พักระดับ Luxury เน้นการนำเสนอเชิงข้อมูลสภาพแวดล้อมและสเปกยูนิต
 */
const HotelResortTemplate = ({ data }: { data: UniversalTemplateProps }) => {
  // [LOGIC]: Direct Schema Generation for RSC Compliance
  const schema = generateUniversalSchema(data);
  const locationName = data.province || "Thailand";

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={schema} />

      <main className="min-h-[100dvh] bg-[var(--surface-main)] transition-colors duration-500 selection:bg-[var(--brand-primary)] selection:text-white">
        {/* --- Phase 01: Environmental Aura --- 
            แสดงภาพลักษณ์แบรนด์พร้อมข้อมูล Weather Node แบบ Real-time
        */}
        <AtmosphereHeader
          title={data.title}
          description={data.description}
          banner={data.regionalVisuals?.banner}
        />

        {/* [NEW]: Regional Insight & Competition Analysis */}
        {data.province && (
          <LocalInsight
            insight={data.localContext?.marketInsight || ""}
            painPoints={(data.localContext?.painPoints as string[]) || []}
            marketSaturation={data.marketSaturation}
          />
        )}

        {/* [NEW]: Regional Promotions Banner (Only if available) */}
        {data.promotions && data.promotions.length > 0 && (
          <section className="container mx-auto mt-12 px-4">
            <div className="rounded-[var(--radius)] border border-[var(--brand-primary)]/20 bg-[var(--brand-primary)]/5 p-8 backdrop-blur-md">
              <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--brand-primary)]" />
                    <span className="font-mono text-[10px] font-black tracking-widest text-[var(--brand-primary)] uppercase">
                      Local_Offer: Exclusive
                    </span>
                  </div>
                  <h3 className="text-2xl font-black tracking-tighter uppercase italic">
                    {data.promotions[0].title}
                  </h3>
                  <p className="max-w-xl text-sm font-medium opacity-70">
                    {data.promotions[0].description}
                  </p>
                </div>
                {data.promotions[0].discount && (
                  <div className="flex flex-col items-center gap-2 rounded-2xl border-2 border-dashed border-[var(--brand-primary)]/30 px-8 py-4">
                    <span className="text-sm font-bold tracking-widest uppercase opacity-40">
                      Discount
                    </span>
                    <span className="text-4xl font-black text-[var(--brand-primary)] italic">
                      {data.promotions[0].discount}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        <section className="relative z-20 container mx-auto -mt-12 px-4">
          <div className="ml-auto max-w-md">
            <WeatherTracker location={locationName} />
          </div>
        </section>

        {/* --- Phase 02: Unit Architecture --- 
            แสดงทะเบียนห้องพัก (Suites) พร้อมรายละเอียดเชิงลึกและราคาพรีเมียม
        */}
        <SuiteRegistry items={data.items || []} />

        {/* --- Phase 03: Storytelling Nodes --- 
            เล่าเรื่องประสบการณ์ผ่านกิจกรรมและไลฟ์สไตล์ (Identity-Driven Content)
        */}
        <ExperienceNodes isTourismHeavy={data.isTourismHeavy} />

        {/* [NEW]: Regional Roadmap for Hospitality Nodes */}
        {data.province && (
          <div className="bg-[var(--surface-main)]">
            <RegionalRoadmap province={data.province} steps={data.regionalRoadmap} />
          </div>
        )}

        {/* --- Phase 04: Service Infrastructure --- 
            โครงสร้างสิ่งอำนวยความสะดวกที่ครบวงจรในรูปแบบ Matrix Grid
        */}
        <FacilityMatrix
          items={(data.coreFeatures || []).map((f) => ({
            title: f.title,
            description: f.description,
            icon: f.icon,
          }))}
        />

        {/* [NEW]: Regional Gallery & Proof */}
        {data.regionalVisuals?.gallery && <RegionalGallery images={data.regionalVisuals.gallery} />}

        {/* [NEW]: Regional Success Story */}
        {data.localSuccessStory && (
          <LocalSuccessNode
            title={data.localSuccessStory.title}
            result={data.localSuccessStory.result}
            province={data.province || "Thailand"}
          />
        )}

        {/* --- Phase 05: Intelligence Hub (FAQ) --- 
            [STRATEGY]: ระบบตอบคำถามอัตโนมัติ (Concierge FAQ) เพื่อลดแรงต้านก่อนการจอง
        */}
        <div className="border-y border-[var(--foreground)]/5 bg-[var(--surface-main)]/30 py-12">
          <DynamicFAQ
            items={data.faqs}
            title="Essential_Intelligence"
            description={`ข้อมูลสำคัญสำหรับการเตรียมตัวเข้าพักที่ ${data.title} ณ ${locationName}`}
          />
        </div>

        {/* --- Phase 06: VIP Commitment --- 
            ด่านสุดท้ายสำหรับการทำ Conversion สู่ระบบการจองตรง (Direct Booking)
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
        <ReservationPortal />

        {/* --- SYSTEM FOOTER: Technical Stamp --- */}
        <footer className="border-t border-[var(--foreground)]/5 py-8 text-center opacity-10">
          <p className="font-mono text-[8px] tracking-[0.4em] uppercase">
            Hospitality_Node_Protocol.v18.0.40_RSC
          </p>
        </footer>
      </main>
    </LayoutEngine>
  );
};

export default HotelResortTemplate;
