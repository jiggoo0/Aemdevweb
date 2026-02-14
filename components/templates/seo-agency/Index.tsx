/**
 * [TEMPLATE COMPONENT]: SEO_AUTHORITY_HUB v17.9.105 (THEME_INJECTED)
 * [STRATEGY]: Technical Dominance | CSS Variable Synergy | Zero-Any Policy
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo, useMemo } from "react";
import Image from "next/image";

// --- Infrastructure ---
import { IMAGE_BLUR_DATA } from "@/constants/image-blur-data";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import HeroEngine from "@/components/templates/sections/HeroEngine";
import FeatureGrid from "@/components/templates/sections/FeatureGrid";
import DynamicFAQ from "@/components/templates/sections/DynamicFAQ";

// --- Components ---
import TrustBadge from "@/components/shared/TrustBadge";
import ConversionCTA from "@/components/shared/ConversionCTA";
import JsonLd from "@/components/seo/JsonLd";
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer";
import ImpactStats from "@/components/shared/ImpactStats";

// --- Logic ---
import type { UniversalTemplateProps } from "@/types";
import { generateUniversalSchema } from "@/lib/schema";

interface SEOAgencyTemplateProps {
  readonly data: UniversalTemplateProps;
  readonly suppressUI?: boolean;
}

const SEOAgencyTemplate = ({ data, suppressUI: _suppressUI = false }: SEOAgencyTemplateProps) => {
  const schema = useMemo(() => generateUniversalSchema(data), [data]);

  const imgKey = data.image as keyof typeof IMAGE_BLUR_DATA;
  const imgData = data.image && IMAGE_BLUR_DATA[imgKey] ? IMAGE_BLUR_DATA[imgKey] : null;

  const social = data.socialProof;
  const pricing = data.regionalPricing;

  return (
    <>
      <JsonLd data={schema} />

      {/* Wrapper จัดการสีให้แล้ว */}
      <LayoutEngine spacing="none">
        {/* 01. Hero Section */}
        <HeroEngine
          title={
            <span className="block font-black tracking-tighter uppercase italic">
              Technical SEO <br className="hidden md:block" />
              <strong className="text-[var(--brand-primary)]">Architecture.</strong>
            </span>
          }
          subtitle={data.description}
          primaryActionLabel="ขอรับการวิเคราะห์เว็บไซต์"
          primaryHref="#contact"
          secondaryActionLabel="Growth Roadmap"
          secondaryHref="#strategy"
          align="left"
        />

        {/* 02. Trust Matrix */}
        <section className="relative z-30 container mx-auto -mt-24 px-4">
          <div className="relative rounded-[3rem] border border-[var(--foreground)]/10 bg-[var(--background)]/80 p-12 shadow-2xl backdrop-blur-3xl md:p-20">
            <div className="flex flex-col items-center gap-16">
              <div className="space-y-4 text-center">
                <span className="font-mono text-[10px] font-black tracking-[0.5em] text-[var(--brand-primary)] uppercase">
                  {pricing ? `Plan_Starts: ${pricing.startPrice}` : "Algorithm_Optimized_v18"}
                </span>
                <h2 className="text-3xl font-black uppercase italic md:text-5xl">
                  Engineered for Organic ROI.
                </h2>
              </div>

              <ImpactStats />

              <div className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-[var(--foreground)]/10 to-transparent" />

              <div className="flex flex-col items-center gap-6">
                <TrustBadge />
                {social && (
                  <div className="flex items-center gap-2 rounded-full border border-[var(--brand-primary)]/20 bg-[var(--brand-primary)]/10 px-4 py-1">
                    <div className="flex text-[var(--brand-primary)]">
                      {[...Array(5)].map((_, i) => (
                        <IconRenderer key={i} name="Star" size={10} className="fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] font-black tracking-widest text-[var(--brand-primary)] uppercase">
                      {social.rating}/5 Authority Score ({social.reviewCount} Reviews)
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 03. Feature Grid */}
        <section id="strategy" className="py-24 md:py-32">
          <FeatureGrid
            heading="Growth Infrastructure"
            subheading="นายเอ็มซ่ามากส์ จัดการทุก Layer ของ Technical SEO เพื่อให้อันดับของคุณยั่งยืนและไร้คู่แข่ง"
            items={(data.coreFeatures || []).map((f, idx) => ({
              title: f.title,
              description: f.description,
              icon: f.icon as IconName,
              technicalDetail: `NODE_MODULE_0${idx + 1}`,
            }))}
            columns={3}
          />
        </section>

        {/* 04. Semantic Narrative */}
        <section className="border-y border-[var(--foreground)]/10 bg-[var(--foreground)]/5 py-32">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-center">
              <div className="space-y-12">
                <div className="space-y-4">
                  <h2 className="text-4xl leading-none font-black uppercase italic md:text-7xl">
                    Semantic <br />
                    <span className="text-[var(--brand-primary)]">Dominance.</span>
                  </h2>
                  <div className="h-1.5 w-24 rounded-full bg-[var(--brand-primary)]" />
                </div>

                <p className="text-xl leading-relaxed font-medium italic opacity-85">
                  ในยุค 2026, Google ไม่ได้มองแค่ Keyword แต่เขามองหา &quot;Expert Entity&quot;
                  ผมจึงใช้โครงสร้าง Knowledge Graph เพื่อฉีดความเป็นตัวจริงให้เว็บไซต์ของคุณ
                </p>

                <ul className="space-y-8">
                  {(data.benefits || []).map((benefit, idx) => (
                    <li key={idx} className="group flex items-center gap-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--brand-primary)]/20 bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] shadow-md transition-all duration-300 group-hover:rotate-12 group-hover:bg-[var(--brand-primary)] group-hover:text-white">
                        <IconRenderer name="Check" size={18} strokeWidth={4} />
                      </div>
                      <span className="text-lg font-black tracking-tight uppercase italic">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Node */}
              <div className="relative overflow-hidden rounded-[3rem] border border-[var(--foreground)]/10 bg-[var(--background)] shadow-2xl">
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
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05. CTA & FAQ */}
        <ConversionCTA
          title="พร้อมสร้างการเติบโตแบบยั่งยืนด้วย Organic Traffic หรือยังครับ?"
          description="ให้นายเอ็มซ่ามากส์ ช่วยสร้าง Digital Asset ที่ถูกต้อง เพื่อให้ธุรกิจของคุณครองหน้าแรก Google ได้อย่างมั่นคง"
          buttonLabel="จองคิววิเคราะห์โปรไฟล์"
        />

        <DynamicFAQ
          title="Technical SEO FAQ"
          description="เจาะลึกรายละเอียดเกี่ยวกับกระบวนการทำงาน"
          items={data.faqs || []}
        />
      </LayoutEngine>
    </>
  );
};

export default memo(SEOAgencyTemplate);
