/**
 * [TEMPLATE COMPONENT]: LOCAL_AUTHORITY_ORCHESTRATOR v17.9.102 (STABLE_RELEASE)
 * [STRATEGY]: Universal Prop Sync | Zero-Any Compliance | Background Fixed
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
import ConversionCTA from "@/components/shared/ConversionCTA";
import JsonLd from "@/components/seo/JsonLd";

// --- 2. Types & Logic ---
import type { UniversalTemplateProps } from "@/types";
import { type IconName } from "@/components/ui/IconRenderer";
import { generateLocalBusinessSchema } from "@/lib/schema";

interface LocalTemplateProps {
  readonly data: UniversalTemplateProps;
  readonly suppressUI?: boolean;
}

const LocalTemplate = ({ data, suppressUI: _suppressUI = false }: LocalTemplateProps) => {
  // [DATA_MAPPING]: ดึงชื่อจังหวัดมาใช้ใน UI (ตัดคำนำหน้า 'รับทำเว็บไซต์' ออกเพื่อความ Clean)
  const province = useMemo(() => data.title.replace("รับทำเว็บไซต์", "").trim(), [data.title]);

  // [SEO_SCHEMA]: สร้าง Schema สำหรับ Local Business (JSON-LD) เพื่อ Geographic Authority
  const schema = useMemo(() => generateLocalBusinessSchema(data), [data]);

  // [FAQ_LOGIC]: ระบบสร้างคำถามเฉพาะพื้นที่อัตโนมัติ (Zero-Empty Policy)
  const displayFaqs = useMemo(() => {
    if (data.faqs && data.faqs.length > 0) return data.faqs;
    return [
      {
        question: `รับทำเว็บไซต์ในพื้นที่ ${province} ใช้เวลานานเท่าไหร่?`,
        answer: `สำหรับโปรเจกต์ใน ${province} ปกติจะใช้เวลา 7-14 วันทำการ ขึ้นอยู่กับระดับความซับซ้อนของโครงสร้างระบบครับ`,
      },
      {
        question: `มีบริการดูแลหลังการขายสำหรับลูกค้า ${province} ไหม?`,
        answer: `แน่นอนครับ เรามีทีมซัพพอร์ตที่พร้อมดูแลและแก้ไขปัญหาให้คุณตลอดอายุการใช้งาน`,
      },
    ];
  }, [data.faqs, province]);

  // [IMAGE_LOGIC]: ตรวจสอบ Image Registry แบบ Type-Safe (ป้องกัน CLS)
  const imgKey = data.image as keyof typeof IMAGE_BLUR_DATA;
  const imgData = data.image && IMAGE_BLUR_DATA[imgKey] ? IMAGE_BLUR_DATA[imgKey] : null;

  return (
    // [CRITICAL FIX]: Root Wrapper บังคับเต็มจอและฉีดสี Background โดยตรง (Anti-White-Flash)
    <main
      className="relative flex min-h-screen w-full flex-col overflow-x-hidden"
      style={{
        backgroundColor: data.theme?.background || "#ffffff",
      }}
    >
      <LayoutEngine spacing="none" theme={data.theme}>
        {/* 01. SEO Infrastructure */}
        <JsonLd data={schema} />

        {/* 02. Hero Section: Persona-Driven Content */}
        <HeroEngine
          title={
            <span className="block italic">
              รับทำเว็บไซต์และ SEO <br className="hidden md:block" />
              <strong className="text-brand-primary font-black uppercase">{province}</strong>
            </span>
          }
          subtitle={data.description}
          primaryActionLabel={`เริ่มโปรเจกต์ใน ${province}`}
          primaryHref="#contact"
          align="left"
        />

        {/* 03. Showcase Image Section with Blur Effect (LCP Optimized) */}
        <section className="relative z-30 container mx-auto -mt-16 px-4 md:-mt-24">
          <div className="group border-border bg-surface-card relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border shadow-2xl">
            <div
              className="bg-surface-offset relative w-full overflow-hidden"
              style={{
                aspectRatio: imgData ? `${imgData.width}/${imgData.height}` : "21/9",
              }}
            >
              <Image
                src={data.image || "/images/shared/placeholder.webp"}
                alt={data.title}
                fill
                priority
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                placeholder={imgData ? "blur" : "empty"}
                blurDataURL={imgData?.blurDataURL}
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          </div>
        </section>

        {/* 04. Feature Matrix: Authority Signaling */}
        <div className="py-20">
          <FeatureGrid
            heading="Area Domination Engine"
            subheading={`ยกระดับธุรกิจของคุณใน ${province} ด้วยมาตรฐานวิศวกรรมสูงสุด`}
            items={[
              {
                title: "Local Intent SEO",
                description: `ดักจับกลุ่มลูกค้าในพื้นที่ด้วยระบบ Local Schema ขั้นสูง`,
                icon: "MapPin" as IconName,
                technicalDetail: "Geo-Metadata",
              },
              {
                title: "Performance Nodes",
                description: "ความเร็วที่เหนือกว่า เพื่อประสบการณ์ใช้งานที่ดีที่สุด",
                icon: "Zap" as IconName,
                technicalDetail: "v17_Core",
              },
              ...(data.coreFeatures?.slice(0, 1).map((feat) => ({
                title: feat.title,
                description: feat.description,
                icon: feat.icon as IconName,
                technicalDetail: "Custom_Module",
              })) || []),
              {
                title: "Business Scalability",
                description: "โครงสร้างรองรับการเติบโตของธุรกิจในอนาคต",
                icon: "TrendingUp" as IconName,
                technicalDetail: "Scale_Ready",
              },
            ].slice(0, 3)}
            columns={3}
          />
        </div>

        {/* 05. Localized FAQ: E-E-A-T Injection */}
        <DynamicFAQ title={`คำถามที่พบบ่อยสำหรับบริการใน ${province}`} items={displayFaqs} />

        {/* 06. Regional Conversion CTA: Business Growth Anchor */}
        <ConversionCTA
          title={`พร้อมยกระดับธุรกิจใน ${province} หรือยังครับ?`}
          description="ปรึกษาแนวทางการทำเว็บไซต์ให้ติดหน้าแรก Google กับผู้เชี่ยวชาญตัวจริง"
          buttonLabel="ปรึกษาวางแผนฟรี"
        />
      </LayoutEngine>
    </main>
  );
};

export default memo(LocalTemplate);
