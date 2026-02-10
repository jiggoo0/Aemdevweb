/**
 * [TEMPLATE COMPONENT]: HOTEL_LUXURY_ORCHESTRATOR v17.5.6 (STABILIZED)
 * [STRATEGY]: Experience-First Design | Visual Immersion | Conversion Focus
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";

// --- 1. Infrastructure & UI ---
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
// [FIX]: Use Shared HeroEngine
import HeroEngine from "@/components/templates/sections/HeroEngine";
import FeatureGrid from "@/components/templates/sections/FeatureGrid";

// --- 2. Shared Component Nodes ---
import TrustBadge from "@/components/shared/TrustBadge";
import ConversionCTA from "@/components/shared/ConversionCTA";
import JsonLd from "@/components/seo/JsonLd";
import IconRenderer from "@/components/ui/IconRenderer";
import ImpactStats from "@/components/shared/ImpactStats";

// --- 3. Logic & Types ---
import type { TemplateMasterData } from "@/types";
import { generateHotelSchema } from "./Schema";

interface HotelTemplateProps {
  readonly data: TemplateMasterData;
}

const HotelTemplate = ({ data }: HotelTemplateProps) => {
  const schema = generateHotelSchema(data);

  return (
    <LayoutEngine spacing="none" theme={data.theme}>
      <JsonLd data={schema} />

      {/* 01. AMBIENT HERO */}
      <HeroEngine
        title={
          <span className="block">
            Elevating <br className="hidden md:block" />
            <strong className="text-brand-primary italic">Hospitality Tech</strong>
          </span>
        }
        subtitle={data.description}
        primaryActionLabel="ปรึกษาการวางระบบจอง"
        primaryHref="/contact"
        secondaryActionLabel="ชมตัวอย่างดีไซน์"
        secondaryHref="#design-showcase"
        className="relative overflow-hidden"
        align="center" // [STYLE]: Hotel looks best centered
      />

      {/* 02. LUXURY METRICS */}
      <section className="relative z-30 container mx-auto -mt-24 px-4">
        <div className="bg-surface-card border-border shadow-pro-lg rounded-[3rem] border p-12 backdrop-blur-2xl md:p-20">
          <div className="flex flex-col items-center gap-16">
            <div className="space-y-4 text-center">
              <h3 className="text-brand-primary font-mono text-[10px] font-black tracking-[0.5em] uppercase">
                Experience_Audit
              </h3>
              <h2 className="text-text-primary text-3xl font-black uppercase italic md:text-5xl">
                Where Luxury Meets Logic.
              </h2>
            </div>
            <ImpactStats />
            <div className="via-border h-px w-full max-w-4xl bg-gradient-to-r from-transparent to-transparent" />
            <TrustBadge />
          </div>
        </div>
      </section>

      {/* 03. AMENITIES & TECH */}
      <section className="py-24 md:py-32">
        <FeatureGrid
          heading="ระบบที่ออกแบบมาเพื่อโรงแรม"
          subheading="เปลี่ยนหน้าเว็บให้เป็นพนักงานต้อนรับที่ทำงานอย่างไร้ที่ติ ตลอด 24 ชั่วโมง"
          items={(data.coreFeatures || []).map((f) => ({
            ...f,
            technicalDetail: "Hotel System Module",
          }))}
          columns={3}
        />
      </section>

      {/* 04. EXPERIENCE SHOWCASE */}
      <section id="design-showcase" className="bg-surface-offset/50 border-border border-y py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            {/* Visual Node */}
            <div className="bg-surface-card border-border relative aspect-[4/5] overflow-hidden rounded-[3rem] border shadow-2xl">
              <div className="bg-brand-primary/10 absolute inset-0 flex items-center justify-center">
                <IconRenderer name="Image" size={120} className="text-brand-primary opacity-20" />
              </div>
              <div className="absolute inset-8 flex flex-col justify-end">
                <div className="bg-surface-main/80 border-border rounded-2xl border p-6 backdrop-blur-md">
                  <p className="text-text-primary text-lg font-bold italic">
                    "เพิ่มยอดจองตรง (Direct Booking) ได้มากกว่า 40% ด้วยการจัดวาง Layout
                    ที่เข้าใจพฤติกรรมนักท่องเที่ยว"
                  </p>
                </div>
              </div>
            </div>

            {/* Narrative Node */}
            <div className="space-y-10">
              <h2 className="text-text-primary text-4xl leading-none font-black uppercase italic md:text-6xl">
                Direct <br />
                <span className="text-brand-primary">Growth.</span>
              </h2>
              <p className="text-text-secondary text-xl leading-relaxed font-medium opacity-80">
                เราช่วยลดการพึ่งพา OTA ด้วยการสร้างช่องทางที่แข็งแกร่งเป็นของตัวเอง โหลดไว
                ใช้งานง่าย และรองรับการทำ SEO ระดับสากล
              </p>
              <ul className="space-y-6">
                {(data.benefits || []).map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="bg-brand-primary/10 text-brand-primary flex h-8 w-8 items-center justify-center rounded-full">
                      <IconRenderer name="Check" size={16} strokeWidth={4} />
                    </div>
                    <span className="text-text-primary font-bold">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 05. CONVERSION HUB */}
      <ConversionCTA
        title="พร้อมเปลี่ยนเว็บไซต์ให้เป็นช่องทางการขายหลักหรือยัง?"
        description="ปรึกษาแนวทางการทำ Digital Transformation สำหรับธุรกิจโรงแรมและที่พักของคุณได้ฟรีวันนี้"
        buttonLabel="คุยกับ Specialist ของเรา"
      />
    </LayoutEngine>
  );
};

export default memo(HotelTemplate);
