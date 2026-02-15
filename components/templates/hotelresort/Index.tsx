/**
 * [TEMPLATE]: HOTEL_RESORT_ORCHESTRATOR v18.0.39 (STABLE_LUXURY)
 * [STRATEGY]: Environmental Authority | Concierge FAQ | Named Import Standard
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useMemo } from "react";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import JsonLd from "@/components/seo/JsonLd";
import { generateUniversalSchema } from "@/lib/schema";
import type { UniversalTemplateProps } from "@/types";

// --- 1. Modular Component Registry (Experience Suite) ---
import { AtmosphereHeader } from "./_components/AtmosphereHeader";
import { WeatherTracker } from "./_components/WeatherTracker";
import { SuiteRegistry } from "./_components/SuiteRegistry";
import { ExperienceNodes } from "./_components/ExperienceNodes";
import { FacilityMatrix } from "./_components/FacilityMatrix";
import { ReservationPortal } from "./_components/ReservationPortal";

/** * [INJECT]: ดึงระบบ FAQ Engine ด้วย Named Import { DynamicFAQ }
 * [TECHNICAL_FIX]: แก้ไขปัญหาความขัดแย้งของ Module เพื่อให้ Prerendering ทำงานได้ 100%
 */
import { DynamicFAQ } from "../sections/DynamicFAQ";

/**
 * @component HotelResortTemplate
 * @description เทมเพลตสำหรับที่พักระดับ Luxury เน้นการนำเสนอเชิงข้อมูลสภาพแวดล้อมและสเปกยูนิต
 */
const HotelResortTemplate = ({ data }: { data: UniversalTemplateProps }) => {
  // [LOGIC]: ประมวลผล Schema สำหรับ Local Business และ Lodging Service (E-E-A-T Enforcement)
  const schema = useMemo(() => generateUniversalSchema(data), [data]);
  const locationName = data.province || "Thailand";

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={schema} />

      <main className="min-h-[100dvh] bg-[var(--surface-main)] selection:bg-[var(--brand-primary)] selection:text-white transition-colors duration-500">
        {/* --- Phase 01: Environmental Aura --- 
            แสดงภาพลักษณ์แบรนด์พร้อมข้อมูล Weather Node แบบ Real-time
        */}
        <AtmosphereHeader title={data.title} description={data.description} />

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
        <ExperienceNodes />

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
        <ReservationPortal />

        {/* --- SYSTEM FOOTER: Technical Stamp --- */}
        <footer className="py-8 text-center border-t border-[var(--foreground)]/5 opacity-10">
          <p className="font-mono text-[8px] tracking-[0.4em] uppercase">
            Hospitality_Node_Protocol.v18.0.39
          </p>
        </footer>
      </main>
    </LayoutEngine>
  );
};

export default HotelResortTemplate;
