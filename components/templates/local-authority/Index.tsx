/**
 * [TEMPLATE COMPONENT]: LOCAL_AUTHORITY_ORCHESTRATOR v17.9.106 (STABLE_RECOVERY)
 * [STRATEGY]: Universal Prop Sync | Prop Suppression Logic | Zero-Warning Build
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
import ConversionCTA from "@/components/shared/ConversionCTA";
import JsonLd from "@/components/seo/JsonLd";

// --- Logic ---
import type { UniversalTemplateProps } from "@/types";
import { type IconName } from "@/components/ui/IconRenderer";
import { generateLocalBusinessSchema } from "@/lib/schema";

interface LocalTemplateProps {
  readonly data: UniversalTemplateProps;
  readonly suppressUI?: boolean;
}

const LocalTemplate = ({ data, suppressUI = false }: LocalTemplateProps) => {
  // [LOGIC]: สกัดชื่อจังหวัดออกจาก Title เพื่อนำไปใช้ใน Dynamic Content
  const province = useMemo(() => data.title.replace("รับทำเว็บไซต์", "").trim(), [data.title]);

  // [SEO]: สร้าง Schema Markup เฉพาะพื้นที่
  const schema = useMemo(() => generateLocalBusinessSchema(data), [data]);

  // [CONTENT]: จัดการ FAQ ให้รองรับทั้งข้อมูลจาก Registry และ Default Fallback
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

  // [ASSETS]: ดึง Blur Metadata เพื่อประสิทธิภาพการโหลดระดับ Retina
  const imgKey = data.image as keyof typeof IMAGE_BLUR_DATA;
  const imgData = data.image && IMAGE_BLUR_DATA[imgKey] ? IMAGE_BLUR_DATA[imgKey] : null;

  return (
    <>
      <JsonLd data={schema} />

      {/* Wrapper หลักที่จัดการระบบ Dynamic Colors */}
      <LayoutEngine spacing="none">
        {/* 01. Hero Section: เน้นหัวข้อที่ทำ SEO ในพื้นที่นั้นๆ */}
        <HeroEngine
          title={
            <span className="block italic">
              รับทำเว็บไซต์และ SEO <br className="hidden md:block" />
              <strong className="font-black text-[var(--brand-primary)] uppercase">
                {province}
              </strong>
            </span>
          }
          subtitle={data.description}
          primaryActionLabel={`เริ่มโปรเจกต์ใน ${province}`}
          primaryHref="#contact"
          align="left"
        />

        {/* 02. Showcase Image: จัดวางแบบ Magazine Style */}
        <section className="relative z-30 container mx-auto -mt-16 px-4 md:-mt-24">
          <div className="group relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-[var(--foreground)]/10 bg-[var(--background)] shadow-2xl">
            <div
              className="relative w-full overflow-hidden"
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
              />
            </div>
          </div>
        </section>

        {/* 03. Feature Matrix: แสดงจุดแข็งทางวิศวกรรม */}
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

        {/* 04. FAQ Section */}
        <DynamicFAQ title={`คำถามที่พบบ่อยสำหรับบริการใน ${province}`} items={displayFaqs} />

        {/* 05. Conversion Section: ใช้งาน suppressUI เพื่อป้องกัน CTA ซ้อนกัน */}
        {!suppressUI && (
          <ConversionCTA
            title={`พร้อมยกระดับธุรกิจใน ${province} หรือยังครับ?`}
            description="ปรึกษาแนวทางการทำเว็บไซต์ให้ติดหน้าแรก Google กับผู้เชี่ยวชาญตัวจริง"
            buttonLabel="ปรึกษาวางแผนฟรี"
          />
        )}
      </LayoutEngine>
    </>
  );
};

export default memo(LocalTemplate);
