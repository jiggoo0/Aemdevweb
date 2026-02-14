/**
 * [TEMPLATE COMPONENT]: HOTEL_LUXURY_ORCHESTRATOR v17.9.100 (STABILIZED)
 * [STRATEGY]: Experience-First Design | Trust-Signal Synergy | Zero-Any Policy
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo, useMemo } from "react";
import Image from "next/image";

// --- 1. Infrastructure ---
import { IMAGE_BLUR_DATA } from "@/constants/image-blur-data";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import HeroEngine from "@/components/templates/sections/HeroEngine";
import FeatureGrid from "@/components/templates/sections/FeatureGrid";

// --- 2. Shared Components ---
import TrustBadge from "@/components/shared/TrustBadge";
import ConversionCTA from "@/components/shared/ConversionCTA";
import JsonLd from "@/components/seo/JsonLd";
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer";
import ImpactStats from "@/components/shared/ImpactStats";

// --- 3. Logic & Types ---
import type { UniversalTemplateProps } from "@/types";
import { generateUniversalSchema } from "@/lib/schema";

interface HotelTemplateProps {
  readonly data: UniversalTemplateProps;
  readonly suppressUI?: boolean;
}

const HotelTemplate = ({ data, suppressUI: _suppressUI = false }: HotelTemplateProps) => {
  // [SEO_SCHEMA]: ใช้ Universal Generator สำหรับโครงสร้าง Schema ระดับสากล
  const schema = useMemo(() => generateUniversalSchema(data), [data]);

  // [SAFETY]: การตรวจสอบ Image Registry แบบ Type-Safe เพื่อป้องกัน Runtime Error
  const imgKey = data.image as keyof typeof IMAGE_BLUR_DATA;
  const imgData = data.image && IMAGE_BLUR_DATA[imgKey] ? IMAGE_BLUR_DATA[imgKey] : null;

  // [DATA_ACCESS]: เข้าถึงข้อมูลราคาเชิงพื้นที่ (Regional Pricing)
  const pricing = data.regionalPricing;

  return (
    <LayoutEngine spacing="none" theme={data.theme}>
      {/* 01. SEO Infrastructure */}
      <JsonLd data={schema} />

      {/* 02. Hero Section - [FIXED]: ใช้ Legacy Safe Mode Props */}
      <HeroEngine
        title={
          <span className="block font-black tracking-tighter uppercase italic">
            Luxury <br className="hidden md:block" />
            <strong className="text-brand-primary">Hospitality.</strong>
          </span>
        }
        subtitle={data.description}
        primaryActionLabel="ยกระดับระบบการจองกับนายเอ็มซ่ามากส์"
        primaryHref="#contact"
        secondaryActionLabel="Explore Architecture"
        secondaryHref="#design-showcase"
        align="center"
      />

      {/* 03. Node: Trust Matrix Card */}
      <section className="relative z-30 container mx-auto -mt-24 px-4">
        <div className="bg-surface-card/80 border-border rounded-[3rem] border p-12 shadow-2xl backdrop-blur-3xl md:p-20">
          <div className="flex flex-col items-center gap-16">
            <div className="space-y-4 text-center">
              <span className="text-brand-primary font-mono text-[10px] font-black tracking-[0.5em] uppercase">
                Premier_Audit_Node
              </span>
              <h2 className="text-text-primary text-3xl font-black uppercase italic md:text-5xl">
                The Art of Direct Booking.
              </h2>
            </div>

            <ImpactStats />

            <div className="via-border h-px w-full max-w-4xl bg-gradient-to-r from-transparent to-transparent" />

            <div className="flex flex-col items-center gap-6">
              <TrustBadge />
              {/* [UI_POLISH]: ข้อมูลราคาและ Timeline เฉพาะพื้นที่ */}
              {pricing && (
                <div className="text-text-muted font-mono text-[10px] font-bold tracking-widest uppercase opacity-60">
                  Regional_Start: {pricing.startPrice}{" "}
                  <span className="text-brand-primary mx-2">|</span> Timeline: {pricing.timeline}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 04. Node: Feature Matrix Grid */}
      <section className="py-24 md:py-32">
        <FeatureGrid
          heading="Hospitality Core Engines"
          subheading="เปลี่ยนเว็บไซต์ที่พักให้เป็นพนักงานขายมืออาชีพที่ทำงานอย่างไร้ที่ติ 24/7"
          items={(data.coreFeatures || []).map((f, idx) => ({
            title: f.title,
            description: f.description,
            icon: f.icon as IconName, // Explicit cast เพื่อความปลอดภัยของ Registry
            technicalDetail: `HOTEL_MODULE_0${idx + 1}`,
          }))}
          columns={3}
        />
      </section>

      {/* 05. Node: Showcase Article (Experience-First Design) */}
      <section id="design-showcase" className="bg-surface-offset/50 border-border border-y py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-center">
            {/* Image Visual Node */}
            <div className="relative w-full">
              <div
                className="bg-surface-card border-border gpu-layer relative w-full overflow-hidden rounded-[3rem] border shadow-2xl"
                style={{
                  aspectRatio: imgData ? `${imgData.width}/${imgData.height}` : "4/5",
                }}
              >
                <Image
                  src={data.image || "/images/templates/preview.webp"}
                  alt={`Hospitality UI/UX Excellence: ${data.title}`}
                  fill
                  priority
                  placeholder={imgData ? "blur" : "empty"}
                  blurDataURL={imgData?.blurDataURL}
                  className="object-cover transition-transform duration-[2s] hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating ROI Overlay */}
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-end p-8">
                <div className="border-brand-primary/20 bg-surface-main/90 pointer-events-auto rounded-2xl border p-8 backdrop-blur-md">
                  <span className="text-brand-primary mb-2 block font-mono text-[10px] font-black tracking-widest uppercase">
                    Direct_Growth_ROI
                  </span>
                  <p className="text-text-primary text-xl leading-relaxed font-bold italic">
                    "ลดค่าคอมมิชชั่น OTA ด้วยสถาปัตยกรรมที่เข้าใจพฤติกรรมผู้เข้าพักจริง"
                  </p>
                </div>
              </div>
            </div>

            {/* Content Narrative Node */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-text-primary text-4xl leading-none font-black uppercase italic md:text-7xl">
                  Boutique <br />
                  <span className="text-brand-primary">Elegance.</span>
                </h2>
                <div className="bg-brand-primary h-1.5 w-24 rounded-full" />
              </div>

              <p className="text-text-secondary text-xl leading-relaxed font-medium italic opacity-80">
                นายเอ็มซ่ามากส์ สร้าง Digital Assets ที่โหลดไวระดับ Retina และรองรับ Global SEO
                เพื่อให้แบรนด์ที่พักของคุณเป็นเจ้าของฐานข้อมูลลูกค้าเอง 100%
              </p>

              {/* Benefits List */}
              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {(data.benefits || []).map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="border-brand-primary/20 bg-brand-primary/10 text-brand-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border">
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

      {/* 06. Conversion Layer */}
      <ConversionCTA
        title="พร้อมยกระดับยอดจองตรงให้โรงแรมของคุณหรือยังครับ?"
        description="ปรึกษาแนวทางการทำ Digital Transformation สำหรับธุรกิจ Hospitality กับนายเอ็มซ่ามากส์ ได้โดยตรง"
        buttonLabel="เริ่มวางแผนโปรเจกต์"
      />
    </LayoutEngine>
  );
};

export default memo(HotelTemplate);
