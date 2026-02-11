/**
 * [TEMPLATE COMPONENT]: HOTEL_LUXURY_ORCHESTRATOR v17.8.5 (ZERO_CLS)
 * [STRATEGY]: Experience-First Design | Visual Stability | Specialist ROI Logic
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo, useMemo } from "react";
import Image from "next/image";

// --- 1. Infrastructure & UI ---
import { IMAGE_BLUR_DATA } from "@/constants/image-blur-data";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
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
  const schema = useMemo(() => generateHotelSchema(data), [data]);
  const imgData = data.image ? IMAGE_BLUR_DATA[data.image] : null;

  return (
    <LayoutEngine spacing="none" theme={data.theme}>
      <JsonLd data={schema} />

      {/* 01. AMBIENT HERO: High-Authority Lead */}
      <HeroEngine
        title={
          <span className="block">
            Elevating <br className="hidden md:block" />
            <strong className="text-brand-primary italic">Hospitality Tech.</strong>
          </span>
        }
        subtitle={data.description}
        primaryActionLabel="ปรึกษาการวางระบบกับนายเอ็มซ่ามากส์"
        primaryHref="/contact"
        secondaryActionLabel="Analyze Showcase"
        secondaryHref="#design-showcase"
        align="center"
      />

      {/* 02. PERFORMANCE METRICS: Trust Injection */}
      <section className="relative z-30 container mx-auto -mt-24 px-4">
        <div className="bg-surface-card border-border shadow-pro-lg rounded-[3rem] border p-12 backdrop-blur-2xl md:p-20">
          <div className="flex flex-col items-center gap-16">
            <div className="space-y-4 text-center">
              <span className="text-brand-primary font-mono text-[10px] font-black tracking-[0.5em] uppercase">
                Specialist_Audit_Node
              </span>
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

      {/* 03. SYSTEM MODULES: Feature Matrix */}
      <section className="py-24 md:py-32">
        <FeatureGrid
          heading="Hospitality Core Engines"
          subheading="เปลี่ยนเว็บไซต์ที่พักให้เป็นพนักงานขายที่ทำงานอย่างไร้ที่ติ ตลอด 24 ชั่วโมง ตามมาตรฐาน นายเอ็มซ่ามากส์"
          items={(data.coreFeatures || []).map((f, idx) => ({
            ...f,
            technicalDetail: `HOTEL_MODULE_0${idx + 1}`,
          }))}
          columns={3}
        />
      </section>

      {/* 04. EXPERIENCE SHOWCASE: Zero-CLS Architecture */}
      <section id="design-showcase" className="bg-surface-offset/50 border-border border-y py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-center">
            {/* Visual Node (Slot Reserved) */}
            <div
              className="bg-surface-card border-border relative overflow-hidden rounded-[3rem] border shadow-2xl"
              style={{ aspectRatio: imgData ? `${imgData.width}/${imgData.height}` : "4/5" }}
            >
              {data.image ? (
                <Image
                  src={data.image}
                  alt={`Hospitality UI/UX Excellence: ${data.title}`}
                  fill
                  placeholder="blur"
                  blurDataURL={imgData?.blurDataURL}
                  className="object-cover transition-transform duration-[2s] hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="bg-brand-primary/10 absolute inset-0 flex items-center justify-center">
                  <IconRenderer name="Image" size={120} className="text-brand-primary opacity-20" />
                </div>
              )}

              <div className="absolute inset-8 flex flex-col justify-end">
                <div className="bg-surface-main/80 border-border rounded-2xl border p-8 backdrop-blur-md">
                  <span className="text-brand-primary mb-2 block font-mono text-[10px] font-black tracking-widest uppercase">
                    Direct_Booking_ROI
                  </span>
                  <p className="text-text-primary text-xl leading-relaxed font-bold italic">
                    "เพิ่มยอดจองตรงได้มากกว่า 40% ด้วยสถาปัตยกรรมที่เข้าใจพฤติกรรม Guest Journey"
                  </p>
                </div>
              </div>
            </div>

            {/* Narrative Node */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-text-primary text-4xl leading-none font-black uppercase italic md:text-7xl">
                  Direct <br />
                  <span className="text-brand-primary">Growth.</span>
                </h2>
                <div className="bg-brand-primary h-1.5 w-24 rounded-full" />
              </div>

              <p className="text-text-secondary text-xl leading-relaxed font-medium italic opacity-80">
                นายเอ็มซ่ามากส์ ช่วยคุณลดการพึ่งพา OTA ด้วยการสร้าง Digital Asset ที่แข็งแกร่ง
                โหลดไวระดับ Retina และรองรับ International SEO เพื่อดึงดูดแขกจากทั่วโลก
              </p>

              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {(data.benefits || []).map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="bg-brand-primary/10 text-brand-primary border-brand-primary/20 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border">
                      <IconRenderer name="Check" size={18} strokeWidth={4} />
                    </div>
                    <span className="text-text-primary text-sm font-black tracking-tight uppercase italic">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 05. CONVERSION HUB */}
      <ConversionCTA
        title="พร้อมเปลี่ยนเว็บไซต์ให้เป็นช่องทางการขายหลักหรือยังครับ?"
        description="ปรึกษาแนวทางการทำ Digital Transformation สำหรับโรงแรมและที่พักกับ นายเอ็มซ่ามากส์ ได้โดยตรงวันนี้ครับ"
        buttonLabel="เริ่มวางแผนโปรเจกต์"
      />
    </LayoutEngine>
  );
};

export default memo(HotelTemplate);
