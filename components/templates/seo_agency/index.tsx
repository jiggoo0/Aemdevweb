/**
 * [TEMPLATE COMPONENT]: SEO_AUTHORITY_HUB v17.5.6 (STABILIZED)
 * [STRATEGY]: Technical Dominance | Semantic Excellence | Conversion-Led Content
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
import { generateSeoAgencySchema } from "./Schema";

interface SeoAgencyTemplateProps {
  readonly data: TemplateMasterData;
}

const SeoAgencyTemplate = ({ data }: SeoAgencyTemplateProps) => {
  const schema = generateSeoAgencySchema(data);

  return (
    <LayoutEngine spacing="none" theme={data.theme}>
      <JsonLd data={schema} />

      {/* 01. HERO GATEWAY: เน้นหัวข้อที่ Google รัก */}
      <HeroEngine
        title={
          <span className="block">
            Technical SEO <br className="hidden md:block" />
            <strong className="text-brand-primary italic">Agency Specialist</strong>
          </span>
        }
        subtitle={data.description}
        primaryActionLabel="วิเคราะห์เว็บไซต์ฟรี"
        primaryHref="/audit"
        secondaryActionLabel="ดูแผนงาน SEO"
        secondaryHref="#roadmap"
        align="left"
      />

      {/* 02. STRATEGIC METRICS: ยืนยันผลลัพธ์ด้วยตัวเลข */}
      <section className="relative z-30 container mx-auto -mt-24 px-4">
        <div className="bg-surface-card border-border shadow-pro-lg rounded-[3rem] border p-12 backdrop-blur-2xl md:p-20">
          <div className="flex flex-col items-center gap-16">
            <div className="space-y-4 text-center">
              <h3 className="text-brand-primary font-mono text-[10px] font-black tracking-[0.5em] uppercase">
                Specialist_Metrics
              </h3>
              <h2 className="text-text-primary text-3xl font-black uppercase italic md:text-5xl">
                Engineered for Growth.
              </h2>
            </div>
            <ImpactStats />
            <div className="via-border h-px w-full max-w-4xl bg-gradient-to-r from-transparent to-transparent" />
            <TrustBadge />
          </div>
        </div>
      </section>

      {/* 03. TECHNICAL CORE: เจาะลึกฟีเจอร์เชิงวิศวกรรม SEO */}
      <section id="strategy" className="py-24 md:py-32">
        <FeatureGrid
          heading="วางรากฐานเพื่อชัยชนะ"
          subheading="เราจัดการทุกรายละเอียดทางเทคนิค เพื่อให้เว็บไซต์ของคุณไต่อันดับได้อย่างมั่นคงและยั่งยืน"
          items={data.coreFeatures || []}
          columns={3}
        />
      </section>

      {/* 04. SEMANTIC BENEFITS: คุณค่าที่จะได้รับ */}
      <section className="bg-surface-offset/50 border-border border-y py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            {/* Semantic Narrative */}
            <div className="space-y-10">
              <h2 className="text-text-primary text-4xl leading-none font-black uppercase italic md:text-6xl">
                Semantic <br />
                <span className="text-brand-primary">Branding.</span>
              </h2>
              <p className="text-text-secondary text-xl leading-relaxed font-medium opacity-80">
                การทำ SEO ในยุค 2026 ไม่ใช่แค่การยัด Keyword แต่คือการทำให้ Google เข้าใจว่า
                "คุณคือใคร" และ "ทำไมคุณถึงดีที่สุด" ผ่านโครงสร้างข้อมูลที่แม่นยำ
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

            {/* Visual Engineering Node */}
            <div className="bg-surface-card border-border relative aspect-square overflow-hidden rounded-[3rem] border shadow-2xl">
              <div className="bg-brand-primary/10 absolute inset-0 flex items-center justify-center">
                <IconRenderer name="Code2" size={120} className="text-brand-primary opacity-20" />
              </div>

              {/* [DECORATION]: วิศวกรรมจำลอง */}
              <div className="text-brand-primary absolute inset-8 flex flex-col justify-between font-mono text-[10px] tracking-tighter uppercase opacity-40">
                <div className="flex justify-between">
                  <span>Struct_Check: pass</span>
                  <span>v17.4.5</span>
                </div>
                <div className="flex justify-between">
                  <span>Core_Web_Vitals: optimal</span>
                  <span>99ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. CONVERSION HUB */}
      <ConversionCTA
        title="หยุดเสียโอกาสจากการมองไม่เห็น"
        description="ให้เราช่วยวางโครงสร้างที่ถูกต้อง เพื่อให้ธุรกิจของคุณปรากฏต่อหน้าลูกค้าในเวลาที่ต้องการที่สุด"
        buttonLabel="เริ่มวางแผน SEO วันนี้"
      />
    </LayoutEngine>
  );
};

export default memo(SeoAgencyTemplate);
