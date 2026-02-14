/**
 * [TEMPLATE COMPONENT]: SEO_AUTHORITY_HUB v17.9.100 (STABILIZED)
 * [STRATEGY]: Technical Dominance | Semantic Excellence | Zero-Any Compliance
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
import DynamicFAQ from "@/components/templates/sections/DynamicFAQ";

// --- 2. Shared Components ---
import TrustBadge from "@/components/shared/TrustBadge";
import ConversionCTA from "@/components/shared/ConversionCTA";
import JsonLd from "@/components/seo/JsonLd";
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer";
import ImpactStats from "@/components/shared/ImpactStats";

// --- 3. Logic & Types ---
import type { UniversalTemplateProps } from "@/types";
import { generateUniversalSchema } from "@/lib/schema";

interface SEOAgencyTemplateProps {
  readonly data: UniversalTemplateProps;
  readonly suppressUI?: boolean;
}

const SEOAgencyTemplate = ({ data, suppressUI: _suppressUI = false }: SEOAgencyTemplateProps) => {
  // [SEO_SCHEMA]: ปลอดภัยด้วย Universal Generator (Entity Interlinking Ready)
  const schema = useMemo(() => generateUniversalSchema(data), [data]);

  // [SAFETY]: การตรวจสอบ Image Blur Data แบบ Type-Safe
  const imgKey = data.image as keyof typeof IMAGE_BLUR_DATA;
  const imgData = data.image && IMAGE_BLUR_DATA[imgKey] ? IMAGE_BLUR_DATA[imgKey] : null;

  // [DATA_ADAPTER]: เข้าถึงข้อมูล Trust และ Pricing ผ่าน Interface โดยตรง
  const social = data.socialProof;
  const pricing = data.regionalPricing;

  return (
    <LayoutEngine spacing="none" theme={data.theme}>
      {/* 01. SEO Layer */}
      <JsonLd data={schema} />

      {/* 02. Hero Section - [FIXED]: ใช้ Legacy Safe Mode Props */}
      <HeroEngine
        title={
          <span className="block font-black tracking-tighter uppercase italic">
            Technical SEO <br className="hidden md:block" />
            <strong className="text-brand-primary">Architecture.</strong>
          </span>
        }
        subtitle={data.description}
        primaryActionLabel="ขอรับการวิเคราะห์เว็บไซต์"
        primaryHref="#contact"
        secondaryActionLabel="Growth Roadmap"
        secondaryHref="#strategy"
        align="left"
      />

      {/* 03. Specialist Trust Matrix (The Value Card) */}
      <section className="relative z-30 container mx-auto -mt-24 px-4">
        <div className="bg-surface-card border-border rounded-[3rem] border p-12 shadow-2xl backdrop-blur-3xl md:p-20">
          <div className="flex flex-col items-center gap-16">
            <div className="space-y-4 text-center">
              <span className="text-brand-primary font-mono text-[10px] font-black tracking-[0.5em] uppercase">
                {pricing ? `Plan_Starts: ${pricing.startPrice}` : "Algorithm_Optimized_v18"}
              </span>
              <h2 className="text-text-primary text-3xl font-black uppercase italic md:text-5xl">
                Engineered for Organic ROI.
              </h2>
            </div>

            <ImpactStats />

            <div className="via-border h-px w-full max-w-4xl bg-gradient-to-r from-transparent to-transparent" />

            <div className="flex flex-col items-center gap-6">
              <TrustBadge />
              {social && (
                <div className="bg-brand-primary/10 border-brand-primary/20 flex items-center gap-2 rounded-full border px-4 py-1">
                  <div className="text-brand-primary flex">
                    {[...Array(5)].map((_, i) => (
                      <IconRenderer key={i} name="Star" size={10} className="fill-current" />
                    ))}
                  </div>
                  <span className="text-brand-primary text-[10px] font-black tracking-widest uppercase">
                    {social.rating}/5 Authority Score ({social.reviewCount} Reviews)
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 04. Growth Infrastructure (Feature Grid) */}
      <section id="strategy" className="py-24 md:py-32">
        <FeatureGrid
          heading="Growth Infrastructure"
          subheading="นายเอ็มซ่ามากส์ จัดการทุก Layer ของ Technical SEO เพื่อให้อันดับของคุณยั่งยืนและไร้คู่แข่ง"
          items={(data.coreFeatures || []).map((f, idx) => ({
            title: f.title,
            description: f.description,
            icon: f.icon as IconName, // [FIXED]: Explicit Cast for TS Safety
            technicalDetail: `NODE_MODULE_0${idx + 1}`,
          }))}
          columns={3}
        />
      </section>

      {/* 05. Semantic Narrative Section (Expertise Proof) */}
      <section className="bg-surface-offset/50 border-border border-y py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-text-primary text-4xl leading-none font-black uppercase italic md:text-7xl">
                  Semantic <br />
                  <span className="text-brand-primary">Dominance.</span>
                </h2>
                <div className="bg-brand-primary h-1.5 w-24 rounded-full" />
              </div>

              <p className="text-text-secondary text-xl leading-relaxed font-medium italic opacity-85">
                ในยุค 2026, Google ไม่ได้มองแค่ Keyword แต่เขามองหา &quot;Expert Entity&quot;
                ผมจึงใช้โครงสร้าง Knowledge Graph เพื่อฉีดความเป็นตัวจริงให้เว็บไซต์ของคุณ
              </p>

              <ul className="space-y-8">
                {(data.benefits || []).map((benefit, idx) => (
                  <li key={idx} className="group flex items-center gap-6">
                    <div className="bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary border-brand-primary/20 flex h-10 w-10 items-center justify-center rounded-xl border shadow-md transition-all duration-300 group-hover:rotate-12 group-hover:text-white">
                      <IconRenderer name="Check" size={18} strokeWidth={4} />
                    </div>
                    <span className="text-text-primary text-lg font-black tracking-tight uppercase italic">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Visual Node with Blur Loading */}
            <div className="bg-surface-card border-border shadow-glow relative overflow-hidden rounded-[3rem] border">
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: imgData ? `${imgData.width}/${imgData.height}` : "1/1" }}
              >
                <Image
                  src={data.image || "/images/service/seo-agency-node.webp"}
                  alt="SEO Engineering by นายเอ็มซ่ามากส์"
                  fill
                  priority
                  placeholder={imgData ? "blur" : "empty"}
                  blurDataURL={imgData?.blurDataURL}
                  className="object-cover transition-transform duration-[2s] hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06. Global Conversion CTA */}
      <ConversionCTA
        title="พร้อมสร้างการเติบโตแบบยั่งยืนด้วย Organic Traffic หรือยังครับ?"
        description="ให้นายเอ็มซ่ามากส์ ช่วยสร้าง Digital Asset ที่ถูกต้อง เพื่อให้ธุรกิจของคุณครองหน้าแรก Google ได้อย่างมั่นคง"
        buttonLabel="จองคิววิเคราะห์โปรไฟล์"
      />

      {/* 07. Specialist Technical FAQ */}
      <DynamicFAQ
        title="Technical SEO FAQ"
        description="เจาะลึกรายละเอียดเกี่ยวกับกระบวนการทำงานและมาตรฐานความปลอดภัยของข้อมูล"
        items={data.faqs || []}
      />
    </LayoutEngine>
  );
};

export default memo(SEOAgencyTemplate);
