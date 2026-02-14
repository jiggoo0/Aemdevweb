/**
 * [TEMPLATE COMPONENT]: HOTEL_LUXURY_ORCHESTRATOR v17.9.105 (THEME_INJECTED)
 * [STRATEGY]: Experience-First Design | Dynamic Pricing | Zero-Any Policy
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import type { CSSProperties } from "react";
import React, { memo, useMemo } from "react";
import Image from "next/image";

// --- Infrastructure ---
import { IMAGE_BLUR_DATA } from "@/constants/image-blur-data";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import HeroEngine from "@/components/templates/sections/HeroEngine";
import FeatureGrid from "@/components/templates/sections/FeatureGrid";

// --- Shared Components ---
import TrustBadge from "@/components/shared/TrustBadge";
import ConversionCTA from "@/components/shared/ConversionCTA";
import JsonLd from "@/components/seo/JsonLd";
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer";
import ImpactStats from "@/components/shared/ImpactStats";

// --- Logic & Types ---
import type { UniversalTemplateProps } from "@/types";
import { generateUniversalSchema } from "@/lib/schema";

interface HotelTemplateProps {
  readonly data: UniversalTemplateProps;
  readonly suppressUI?: boolean;
}

const HotelTemplate = ({ data, suppressUI: _suppressUI = false }: HotelTemplateProps) => {
  // [SEO]: Schema Graph
  const schema = useMemo(() => generateUniversalSchema(data), [data]);

  // [THEME_ENGINE]: Default to Dark/Gold Luxury Theme if missing
  const themeStyles = useMemo(() => {
    return {
      "--primary": data.theme?.primary || "#D4AF37", // Gold
      "--background": data.theme?.background || "#0f172a", // Dark Navy
      "--foreground": data.theme?.foreground || "#f8fafc", // White
      "--accent": data.theme?.accent || "#B8860B",
    } as CSSProperties;
  }, [data.theme]);

  const imgKey = data.image as keyof typeof IMAGE_BLUR_DATA;
  const imgData = data.image && IMAGE_BLUR_DATA[imgKey] ? IMAGE_BLUR_DATA[imgKey] : null;
  const pricing = data.regionalPricing;

  return (
    // [ROOT_WRAPPER]: Dark Luxury Vibe
    <main
      className="min-h-screen w-full bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300"
      style={themeStyles}
    >
      <LayoutEngine spacing="none">
        <JsonLd data={schema} />

        {/* 01. Hero Section */}
        <HeroEngine
          title={
            <span className="block font-black tracking-tighter uppercase italic">
              {data.title.includes("|") ? data.title.split("|")[0] : "Luxury Hospitality"}
            </span>
          }
          subtitle={data.description}
          primaryActionLabel="ยกระดับระบบการจอง"
          primaryHref="#contact"
          secondaryActionLabel="Explore Architecture"
          secondaryHref="#design-showcase"
          align="center"
        />

        {/* 02. Trust Matrix Card */}
        <section className="relative z-30 container mx-auto -mt-24 px-4">
          <div className="rounded-[3rem] border border-[var(--foreground)]/10 bg-[var(--background)]/80 p-12 shadow-2xl backdrop-blur-3xl md:p-20">
            <div className="flex flex-col items-center gap-16">
              <div className="space-y-4 text-center">
                <span className="font-mono text-[10px] font-black tracking-[0.5em] text-[var(--primary)] uppercase">
                  Premier_Audit_Node
                </span>
                <h2 className="text-3xl font-black uppercase italic md:text-5xl">
                  The Art of Direct Booking.
                </h2>
              </div>

              <ImpactStats />

              <div className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-[var(--foreground)]/20 to-transparent" />

              <div className="flex flex-col items-center gap-6">
                <TrustBadge />

                {/* [DYNAMIC_PRICING]: แสดงราคาตามจังหวัด */}
                {(pricing || data.price) && (
                  <div className="font-mono text-[10px] font-bold tracking-widest uppercase opacity-60">
                    Price_Start: {pricing?.startPrice || data.price}{" "}
                    {pricing?.timeline && (
                      <span className="mx-2 text-[var(--primary)]">
                        | Timeline: {pricing.timeline}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 03. Feature Grid */}
        <section className="py-24 md:py-32">
          <FeatureGrid
            heading="Hospitality Core Engines"
            subheading="เปลี่ยนเว็บไซต์ที่พักให้เป็นพนักงานขายมืออาชีพที่ทำงานอย่างไร้ที่ติ 24/7"
            items={(data.coreFeatures || []).map((f, idx) => ({
              title: f.title,
              description: f.description,
              icon: f.icon as IconName,
              technicalDetail: `HOTEL_MODULE_0${idx + 1}`,
            }))}
            columns={3}
          />
        </section>

        {/* 04. Showcase Section */}
        <section
          id="design-showcase"
          className="border-y border-[var(--foreground)]/10 bg-[var(--primary)]/5 py-32"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-center">
              {/* Image Node */}
              <div className="relative w-full">
                <div
                  className="relative w-full overflow-hidden rounded-[3rem] border border-[var(--foreground)]/10 shadow-2xl"
                  style={{ aspectRatio: imgData ? `${imgData.width}/${imgData.height}` : "4/5" }}
                >
                  <Image
                    src={data.image || "/images/templates/preview.webp"}
                    alt={`Hospitality UI/UX: ${data.title}`}
                    fill
                    priority
                    placeholder={imgData ? "blur" : "empty"}
                    blurDataURL={imgData?.blurDataURL}
                    className="object-cover transition-transform duration-[2s] hover:scale-105"
                  />
                </div>
                {/* ROI Overlay */}
                <div className="pointer-events-none absolute inset-0 flex flex-col justify-end p-8">
                  <div className="pointer-events-auto rounded-2xl border border-[var(--primary)]/20 bg-[var(--background)]/90 p-8 backdrop-blur-md">
                    <span className="mb-2 block font-mono text-[10px] font-black tracking-widest text-[var(--primary)] uppercase">
                      Direct_Growth_ROI
                    </span>
                    <p className="text-xl leading-relaxed font-bold italic">
                      {data.localSuccessStory?.result ||
                        "ลดค่าคอมมิชชั่น OTA ด้วยสถาปัตยกรรมที่เข้าใจพฤติกรรมผู้เข้าพักจริง"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content Node */}
              <div className="space-y-12">
                <div className="space-y-4">
                  <h2 className="text-4xl leading-none font-black uppercase italic md:text-7xl">
                    Boutique <br />
                    <span className="text-[var(--primary)]">Elegance.</span>
                  </h2>
                  <div className="h-1.5 w-24 rounded-full bg-[var(--primary)]" />
                </div>
                <p className="text-xl leading-relaxed font-medium italic opacity-80">
                  {data.localContext?.marketInsight ||
                    "นายเอ็มซ่ามากส์ สร้าง Digital Assets ที่โหลดไวระดับ Retina และรองรับ Global SEO"}
                </p>
                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {(data.benefits || []).map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--primary)]/20 bg-[var(--primary)]/10 text-[var(--primary)]">
                        <IconRenderer name="Check" size={18} strokeWidth={4} />
                      </div>
                      <span className="text-sm font-black tracking-tight uppercase italic">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 05. CTA */}
        <ConversionCTA
          title="พร้อมยกระดับยอดจองตรงให้โรงแรมของคุณหรือยังครับ?"
          description="ปรึกษาแนวทางการทำ Digital Transformation สำหรับธุรกิจ Hospitality"
          buttonLabel="เริ่มวางแผนโปรเจกต์"
        />
      </LayoutEngine>
    </main>
  );
};

export default memo(HotelTemplate);
