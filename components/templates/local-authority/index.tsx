/**
 * [TEMPLATE COMPONENT]: LOCAL_AUTHORITY_ORCHESTRATOR v17.8.8 (PRERENDER_SAFE)
 * [STRATEGY]: Contextual Injection | Zero-CLS Hardened | Null-Safe Mapping
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
import type { AreaNode } from "@/types";
import { generateLocalBusinessSchema } from "./Schema";

interface LocalTemplateProps {
  readonly data: AreaNode;
}

const LocalTemplate = ({ data }: LocalTemplateProps) => {
  const ctx = data.localContext;
  const schema = useMemo(() => generateLocalBusinessSchema(data), [data]);
  const imgData = IMAGE_BLUR_DATA[data.heroImage];

  // [RESOLVED]: Safe Districts Extraction
  const districts = useMemo(() => data.districts || [], [data.districts]);

  const localFaqs = useMemo(
    () => [
      {
        question: `กลยุทธ์การทำเว็บสำหรับจังหวัด ${data.province} ของนายเอ็มซ่ามากส์ เป็นอย่างไร?`,
        answer:
          ctx?.marketInsight ||
          `เน้นการสร้างตัวตนที่น่าเชื่อถือและเข้าถึงลูกค้าในจังหวัด ${data.province} ได้อย่างรวดเร็วและมีคุณภาพสูงสุด`,
      },
      {
        question: `เทคนิคเฉพาะทางที่ใช้ในพื้นที่ ${data.province} คืออะไร?`,
        answer:
          ctx?.technicalApproach ||
          `การใช้โครงสร้าง Technical SEO และ Local Entity Graph เพื่อยึดอันดับบน Google Maps ในพื้นที่ ${data.province}`,
      },
      ...(data.keywords || []).slice(0, 3).map((kw) => ({
        question: `บริการ ${kw} ใน ${data.province} เริ่มต้นอย่างไร?`,
        answer: `ทักแชทปรึกษาแผนงาน ${kw} สำหรับพื้นที่ ${data.province} กับนายเอ็มซ่ามากส์ ได้ทันทีครับ เรามี Specialist พร้อมวางโครงสร้างให้คุณ`,
      })),
    ],
    [data, ctx],
  );

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={schema} />

      <HeroEngine
        title={
          <span className="block">
            รับทำเว็บไซต์และ SEO <br className="hidden md:block" />
            <strong className="text-brand-primary">จังหวัด{data.province}</strong>
          </span>
        }
        subtitle={ctx?.marketInsight || data.description}
        primaryActionLabel="เริ่มโปรเจกต์กับนายเอ็มซ่ามากส์"
        primaryHref="/contact"
        secondaryActionLabel="Analyze Case Studies"
        secondaryHref="/case-studies"
        align="left"
      />

      {/* --- FEATURED IMAGE NODE --- */}
      <section className="relative z-30 container mx-auto -mt-16 px-4 md:-mt-24 lg:-mt-32">
        <div
          className="group border-border bg-surface-card relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border shadow-2xl md:rounded-[3rem]"
          style={{
            aspectRatio: imgData ? `${imgData.width}/${imgData.height}` : "21/9",
          }}
        >
          <Image
            src={data.heroImage}
            alt={`Web Infrastructure Specialist in ${data.province} - นายเอ็มซ่ามากส์`}
            fill
            priority
            placeholder="blur"
            blurDataURL={imgData?.blurDataURL}
            className="object-cover transition-transform duration-[1.5s] group-hover:scale-[1.02]"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="from-surface-card absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-80" />

          <div className="absolute bottom-6 left-6 flex items-center gap-3 md:bottom-10 md:left-10">
            <div className="border-border bg-surface-card/40 flex h-12 w-12 items-center justify-center rounded-xl border backdrop-blur-md">
              <IconRenderer name="MapPin" className="text-brand-primary" size={24} />
            </div>
            <div>
              <span className="text-brand-primary block text-[10px] font-black tracking-widest uppercase opacity-70">
                Deployment_Node
              </span>
              <h2 className="text-text-primary m-0 text-xl font-black uppercase">
                {data.province}
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* --- AUTHORITY DESCRIPTION --- */}
      <section className="border-border bg-surface-offset/30 border-y py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-brand-primary font-mono text-[10px] font-black tracking-[0.5em] uppercase">
                  Technical_Approach_v17
                </span>
                <h2 className="text-text-primary text-4xl leading-none font-black uppercase italic md:text-6xl">
                  Engineering <br /> <span className="text-brand-primary">Authority.</span>
                </h2>
              </div>
              <p className="text-text-secondary text-xl leading-relaxed font-medium italic opacity-90">
                “
                {ctx?.technicalApproach ||
                  "นายเอ็มซ่ามากส์ วางโครงสร้างระบบให้สอดรับกับอัลกอริทึมปี 2026 เพื่อความได้เปรียบทางธุรกิจที่ยั่งยืนของคุณ"}
                ”
              </p>
              <div className="border-brand-primary bg-brand-primary/10 border-l-4 p-8">
                <h4 className="text-text-primary mb-2 text-lg font-black uppercase italic">
                  Local Strength:
                </h4>
                <p className="text-text-secondary font-bold italic">
                  {ctx?.localStrength ||
                    `ความเข้าใจในบริบทธุรกิจจังหวัด ${data.province} อย่างลึกซึ้งโดย นายเอ็มซ่ามากส์`}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-12">
              <ImpactStats />
              <div className="from-border h-px w-full bg-gradient-to-r to-transparent" />
              <TrustBadge />
            </div>
          </div>
        </div>
      </section>

      {/* [SAFE_MAP]: DISTRICTS SECTION */}
      {districts.length > 0 && (
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 flex items-center gap-4 opacity-50">
              <IconRenderer name="Navigation" size={18} className="text-brand-primary" />
              <span className="text-text-primary text-xs font-black tracking-widest uppercase">
                ขอบเขตบริการใน {data.province}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {districts.map((d, i) => (
                <span
                  key={i}
                  className="border-border bg-surface-card text-text-secondary hover:border-brand-primary/50 hover:text-brand-primary rounded-full border px-5 py-2 text-xs font-bold transition-all"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <FeatureGrid
        heading="Local Core Engines"
        subheading={`ยกระดับธุรกิจใน ${data.province} ด้วยมาตรฐานวิศวกรรมของ นายเอ็มซ่ามากส์`}
        items={[
          {
            title: "Geo-Targeted SEO",
            description: `ดักจับกลุ่มลูกค้าใน ${data.province} ด้วยระบบ Local Schema ขั้นสูง`,
            icon: "Map",
            technicalDetail: "Metadata",
          },
          {
            title: "Performance Logic",
            description: "เว็บไซต์ที่โหลดไวระดับเสี้ยววินาที เพื่อคะแนน Core Web Vitals สูงสุด",
            icon: "Zap",
            technicalDetail: "Next.js 16",
          },
          {
            title: "Conversion Architecture",
            description: "ดีไซน์ที่เน้นผลลัพธ์ทางธุรกิจ เปลี่ยนผู้เข้าชมเป็นลูกค้าจริง",
            icon: "Target",
            technicalDetail: "ROI Focus",
          },
        ]}
      />

      <ConversionCTA
        title={`พร้อมครองตลาดใน ${data.province} หรือยังครับ?`}
        description={`ให้นายเอ็มซ่ามากส์ ช่วยวางระบบเว็บไซต์ที่ถูกต้องให้ธุรกิจของคุณใน${data.province} เพื่อการเติบโตที่วัดผลได้จริงครับ`}
        buttonLabel="คุยกับนายเอ็มซ่ามากส์"
      />

      <DynamicFAQ items={localFaqs} />
    </LayoutEngine>
  );
};

export default memo(LocalTemplate);
