/**
 * [TEMPLATE COMPONENT]: SEO_AUTHORITY_HUB v17.9.0 (STABILIZED)
 * [STRATEGY]: Technical Dominance | Semantic Excellence | Zero-CLS Architecture
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
import DynamicFAQ from "@/components/templates/sections/DynamicFAQ";

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
  const schema = useMemo(() => generateSeoAgencySchema(data), [data]);
  const imgData = data.image ? IMAGE_BLUR_DATA[data.image] : null;

  return (
    <LayoutEngine spacing="none" theme={data.theme}>
      <JsonLd data={schema} />

      {/* 01. HERO GATEWAY: เน้นหัวข้อที่ Google รักและ Authority ของนายเอ็ม */}
      <HeroEngine
        title={
          <span className="block">
            Technical SEO <br className="hidden md:block" />
            <strong className="text-brand-primary italic">Architecture by นายเอ็ม.</strong>
          </span>
        }
        subtitle={data.description}
        primaryActionLabel="วิเคราะห์ระบบกับนายเอ็มซ่ามากส์"
        primaryHref="/audit"
        secondaryActionLabel="Analyze Roadmap"
        secondaryHref="#strategy"
        align="left"
      />

      {/* 02. STRATEGIC METRICS: ยืนยันผลลัพธ์ด้วยตัวเลขจริง */}
      <section className="relative z-30 container mx-auto -mt-24 px-4">
        <div className="bg-surface-card border-border shadow-pro-lg rounded-[3rem] border p-12 backdrop-blur-2xl md:p-20">
          <div className="flex flex-col items-center gap-16">
            <div className="space-y-4 text-center">
              <span className="text-brand-primary font-mono text-[10px] font-black tracking-[0.5em] uppercase">
                Specialist_Audit_Node
              </span>
              <h2 className="text-text-primary text-3xl font-black uppercase italic md:text-5xl">
                Engineered for Organic Growth.
              </h2>
            </div>
            <ImpactStats />
            <div className="via-border h-px w-full max-w-4xl bg-gradient-to-r from-transparent to-transparent" />
            <TrustBadge />
          </div>
        </div>
      </section>

      {/* 03. TECHNICAL CORE: ฟีเจอร์เชิงวิศวกรรม SEO */}
      <section id="strategy" className="py-24 md:py-32">
        <FeatureGrid
          heading="Core Growth Infrastructure"
          subheading={`นายเอ็มซ่ามากส์ จัดการทุกรายละเอียดทางเทคนิค เพื่อให้เว็บไซต์ของคุณไต่อันดับได้อย่างมั่นคงและยั่งยืน`}
          items={(data.coreFeatures || []).map((f, idx) => ({
            ...f,
            technicalDetail: `SEO_NODE_0${idx + 1}`,
          }))}
          columns={3}
        />
      </section>

      {/* 04. SEMANTIC BENEFITS: การสร้าง Semantic Branding */}
      <section className="bg-surface-offset/50 border-border border-y py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-center">
            {/* Semantic Narrative */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-text-primary text-4xl leading-none font-black uppercase italic md:text-7xl">
                  Semantic <br />
                  <span className="text-brand-primary">Dominance.</span>
                </h2>
                <div className="bg-brand-primary h-1.5 w-24 rounded-full" />
              </div>

              <p className="text-text-secondary text-xl leading-relaxed font-medium italic opacity-85">
                การทำ SEO ในยุค AI 2026 ไม่ใช่แค่การยัด Keyword แต่คือการทำให้ Search Engine เข้าใจ
                "Entity ตัวตน" ของแบรนด์คุณผ่านสถาปัตยกรรมข้อมูลที่ นายเอ็มซ่ามากส์ ปรับจูนมาอย่างดี
              </p>

              <ul className="space-y-8">
                {(data.benefits || []).map((benefit, idx) => (
                  <li key={idx} className="group flex items-center gap-6">
                    <div className="bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-surface-main border-brand-primary/20 flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 group-hover:rotate-12">
                      <IconRenderer name="Check" size={18} strokeWidth={4} />
                    </div>
                    <span className="text-text-primary text-lg font-black tracking-tight uppercase italic">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Engineering Node */}
            <div className="bg-surface-card border-border relative overflow-hidden rounded-[3rem] border shadow-2xl">
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: imgData ? `${imgData.width}/${imgData.height}` : "1/1" }}
              >
                {data.image ? (
                  <Image
                    src={data.image}
                    alt={`SEO Engineering Visual by นายเอ็มซ่ามากส์`}
                    fill
                    placeholder="blur"
                    blurDataURL={imgData?.blurDataURL}
                    className="object-cover transition-transform duration-[2s] hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="bg-brand-primary/10 absolute inset-0 flex items-center justify-center">
                    <IconRenderer
                      name="Code2"
                      size={120}
                      className="text-brand-primary opacity-10"
                    />
                  </div>
                )}
              </div>

              {/* Specialist HUD Decoration */}
              <div className="text-brand-primary pointer-events-none absolute inset-10 flex flex-col justify-between font-mono text-[9px] font-black tracking-widest uppercase opacity-60">
                <div className="border-brand-primary/20 flex justify-between border-b pb-2">
                  <span>Entity_ID: VALIDATED</span>
                  <span>v17.9.0</span>
                </div>
                <div className="border-brand-primary/20 flex justify-between border-t pt-2">
                  <span>Knowledge_Graph: MAPPED</span>
                  <span>LATENCY: 99ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. CONVERSION HUB */}
      <ConversionCTA
        title="หยุดเสียโอกาสจากการมองไม่เห็นบนหน้าแรก Google ได้แล้วครับ"
        description={`ให้นายเอ็มซ่ามากส์ ช่วยวางรากฐาน Technical SEO ที่ถูกต้อง เพื่อให้ธุรกิจของคุณเติบโตอย่างยั่งยืนในโลกดิจิทัลวันนี้`}
        buttonLabel="เริ่มวางแผนกลยุทธ์กับนายเอ็ม"
      />

      {/* 06. INTELLIGENCE FAQ */}
      <DynamicFAQ
        title="SEO Strategy FAQ"
        description="เจาะลึกกระบวนการทำงานและเทคโนโลยีเบื้องหลังการดันอันดับ"
        items={data.faqs}
      />
    </LayoutEngine>
  );
};

export default memo(SeoAgencyTemplate);
