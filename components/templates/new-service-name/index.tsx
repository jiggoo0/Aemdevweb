/**
 * [TEMPLATE COMPONENT]: LOCAL_AUTHORITY_ORCHESTRATOR v17.5.7 (LCP_FIXED)
 * [STRATEGY]: Geographic Personalization | Multi-Theme Logic | Local SEO Excellence
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo, useMemo } from "react";
import Image from "next/image";

// --- 1. Infrastructure & UI ---
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
  // [SEO]: สร้างชุดข้อมูลโครงสร้าง (JSON-LD)
  const schema = useMemo(() => generateLocalBusinessSchema(data), [data]);

  // [LOGIC]: เตรียมคำถาม FAQ รายพื้นที่ (Memoized เพื่อลด INP)
  const localFaqs = useMemo(
    () =>
      (data.keywords || []).slice(0, 5).map((kw) => ({
        question: `บริการ ${kw} ในพื้นที่ ${data.province} ราคาเริ่มต้นเท่าไหร่?`,
        answer: `สำหรับบริการ ${kw} ทางเรามีแพ็กเกจที่ยืดหยุ่น เริ่มต้นในราคาที่คุ้มค่าสำหรับธุรกิจใน${data.province} พร้อมระบบที่รองรับการขยายตัวในอนาคตครับ`,
      })),
    [data.keywords, data.province],
  );

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={schema} />

      {/* 01. HERO SECTION: Text LCP Element (ปรับปรุงความเร็วการโหลด) */}
      <HeroEngine
        title={
          <span className="block">
            รับทำเว็บไซต์และ SEO <br className="hidden md:block" />
            <strong className="text-brand-primary">จังหวัด{data.province}</strong>
          </span>
        }
        subtitle={data.longDescription || data.description}
        primaryActionLabel={`ปรึกษาแผนงานใน ${data.province}`}
        primaryHref="/contact"
        secondaryActionLabel="ดูผลงานที่ผ่านมา"
        secondaryHref="/case-studies"
        align="left"
        showIndicator={true}
      />

      {/* 02. VISUAL AUTHORITY: โชว์เคสภาพลักษณ์รายพื้นที่ */}
      <section className="relative z-30 container mx-auto -mt-16 px-4 md:-mt-24 lg:-mt-32">
        <div className="group relative mx-auto max-w-6xl">
          <div className="bg-brand-primary/20 absolute -inset-4 rounded-[3rem] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-40" />

          <div className="border-border bg-surface-card relative overflow-hidden rounded-[2rem] border shadow-2xl md:rounded-[3rem] md:p-2">
            <div className="bg-surface-offset relative aspect-[21/9] w-full overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem]">
              <Image
                src={data.heroImage || "/images/templates/preview.webp"}
                alt={`ผู้เชี่ยวชาญการทำเว็บไซต์และ SEO ในจังหวัด ${data.province}`}
                fill
                // [LCP OPTIMIZATION]: ใช้ priority=true เพื่อ Preload รูปภาพนี้ทันที
                // เพราะเป็นภาพใหญ่ที่ User เห็นเป็นอันดับแรก (Above the fold)
                priority={true}
                className="transform-gpu object-cover object-center transition-transform duration-1000 group-hover:scale-[1.02]"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="from-surface-card absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 flex items-center gap-3 md:bottom-10 md:left-10">
                <div className="border-border bg-surface-card/40 flex h-12 w-12 items-center justify-center rounded-xl border backdrop-blur-md">
                  <IconRenderer name="MapPin" className="text-brand-primary" size={24} />
                </div>
                <div>
                  <span className="text-brand-primary block text-[10px] font-black tracking-widest uppercase opacity-70">
                    Service Area
                  </span>
                  <h2 className="text-text-primary m-0 text-xl font-black tracking-tighter uppercase">
                    {data.province}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. LOCAL TRUST HUB: ยืนยันความน่าเชื่อถือระดับพื้นที่ */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12 space-y-4">
            <h3 className="text-brand-primary text-[10px] font-black tracking-[0.5em] uppercase">
              National Standard, Local Care
            </h3>
            <h2 className="text-text-primary text-4xl leading-none font-black uppercase italic md:text-6xl">
              มาตรฐานสากล <br />
              <span className="from-text-secondary to-text-primary bg-gradient-to-r bg-clip-text text-transparent">
                เพื่อธุรกิจใน {data.province}
              </span>
            </h2>
          </div>
          <ImpactStats />
          <div className="via-border mx-auto my-12 h-px w-full max-w-4xl bg-gradient-to-r from-transparent to-transparent" />
          <TrustBadge />
        </div>
      </section>

      {/* 04. DISTRICT NODES: ระบุขอบเขตการให้บริการเจาะลึกรายอำเภอ */}
      <section className="border-border bg-surface-offset/50 border-y py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center gap-4 opacity-80">
            <IconRenderer name="Navigation" size={20} className="text-brand-primary" />
            <h3 className="text-text-primary text-lg font-black tracking-widest uppercase italic">
              พื้นที่ให้บริการใน {data.province}
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {(data.districts || []).map((district, idx) => (
              <span
                key={idx}
                className="hover:border-brand-primary/50 hover:text-brand-primary border-border bg-surface-card text-text-secondary hover:shadow-glow inline-flex transform-gpu items-center rounded-full border px-6 py-2 text-sm font-bold transition-all"
              >
                {district}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 05. CORE ENGINES: ฟีเจอร์หลักและคำถามพบบ่อย */}
      <FeatureGrid
        heading={`ยกระดับธุรกิจใน ${data.province}`}
        subheading={`เราเข้าใจบริบทตลาด ${data.province} พร้อมส่งมอบเทคโนโลยีที่ช่วยให้คุณแซงหน้าคู่แข่งได้ทันที`}
        items={[
          {
            title: "Local SEO Dominance",
            description: `ดันธุรกิจของคุณให้ติดอันดับแรกใน Google Maps สำหรับพื้นที่ ${data.province}`,
            icon: "Map",
            technicalDetail: "Local SEO",
          },
          {
            title: "Performance Engine",
            description: "เว็บไซต์ Next.js ความเร็วสูง โหลดไวภายใต้ 1 วินาที ตามมาตรฐานสากล",
            icon: "Zap",
            technicalDetail: "Speed",
          },
          {
            title: "Conversion Architecture",
            description: "ดีไซน์ที่เน้นปิดการขาย เปลี่ยนผู้เข้าชมรายพื้นที่ให้เป็นลูกค้าตัวจริง",
            icon: "Target",
            technicalDetail: "Marketing",
          },
        ]}
      />

      <ConversionCTA
        title={`พร้อมขยายฐานลูกค้าใน ${data.province} หรือยังครับ?`}
        description={`ปรึกษาแนวทางการวางระบบให้ธุรกิจของคุณเป็นเบอร์ 1 ในจังหวัด ${data.province} วันนี้เลยครับ`}
        buttonLabel="ขอรับคำปรึกษาฟรี"
      />

      <DynamicFAQ items={localFaqs} />
    </LayoutEngine>
  );
};

export default memo(LocalTemplate);
