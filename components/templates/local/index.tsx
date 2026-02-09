/**
 * [TEMPLATE COMPONENT]: LOCAL_AUTHORITY_ORCHESTRATOR v17.3.10 (STABILIZED)
 * [STRATEGY]: Geographic Personalization | Multi-Theme Logic | Local SEO Excellence
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import Image from "next/image";

// --- INFRASTRUCTURE (FIXED: ปรับ Path ให้ตรงตามตำแหน่งจริงใน /sections) ---
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import HeroEngine from "@/components/features/landing/Hero";
import FeatureGrid from "@/components/templates/sections/FeatureGrid";
import DynamicFAQ from "@/components/templates/sections/DynamicFAQ";

// --- SHARED COMPONENTS ---
import TrustBadge from "@/components/shared/TrustBadge";
import ConversionCTA from "@/components/shared/ConversionCTA";
import JsonLd from "@/components/seo/JsonLd";
import IconRenderer from "@/components/ui/IconRenderer";
import ImpactStats from "@/components/shared/ImpactStats";

// --- LOGIC ---
import type { AreaNode } from "@/types";
import { generateLocalBusinessSchema } from "@/lib/schema"; 

interface LocalTemplateProps {
  readonly data: AreaNode;
}

/**
 * @component LocalTemplate
 * @description หน้า Landing Page สำหรับพื้นที่ให้บริการ (Area Specific)
 * [STABILIZED]: ปรับจูนระบบ Visual Authority และความเสถียรของ Path
 */
function LocalTemplate({ data }: LocalTemplateProps) {
  // [SEO]: สร้างชุดข้อมูลโครงสร้าง (JSON-LD) สำหรับ Local Business
  const schema = generateLocalBusinessSchema(data);

  // [LOGIC]: เตรียมคำถาม FAQ รายพื้นที่ (Local Context Injection)
  const localFaqs = (data.keywords || []).slice(0, 5).map((kw) => ({
    question: `บริการ ${kw} ในพื้นที่ ${data.province} ราคาเริ่มต้นเท่าไหร่?`,
    answer: `สำหรับบริการ ${kw} ทางเรามีแพ็กเกจที่ยืดหยุ่น เริ่มต้นในราคาที่คุ้มค่าสำหรับธุรกิจใน${data.province} พร้อมระบบที่รองรับการขยายตัวในอนาคตครับ`,
  }));

  return (
    <LayoutEngine spacing="specialist">
      <JsonLd data={schema} />

      {/* 01. HERO SECTION: [RESOLVED]: ปรับใช้ Prop ให้ตรงกับ HeroProps Interface */}
      <HeroEngine
        title={
          <span className="block">
            รับทำเว็บไซต์และ SEO <br className="hidden md:block" />
            <strong className="text-brand-primary">จังหวัด{data.province}</strong>
          </span>
        }
        subtitle={data.longDescription || data.description}
        primaryActionText={`ปรึกษาแผนงานใน ${data.province}`}
        secondaryActionText="ดูผลงานที่ผ่านมา"
      />

      {/* 02. VISUAL AUTHORITY: LCP Optimized Showcase */}
      <section className="relative z-30 container mx-auto -mt-16 px-4 md:-mt-24 lg:-mt-32 transition-colors duration-500">
        <div className="group relative mx-auto max-w-6xl">
          {/* Ambient Glow: ปรับตาม --ambient-opacity ของธีม */}
          <div className="bg-brand-primary/20 absolute -inset-4 rounded-[3rem] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-[var(--ambient-opacity,0.4)]" />

          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface-card shadow-2xl md:rounded-[3rem] md:p-2">
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] bg-surface-offset">
              <Image
                src={data.heroImage || "/images/templates/preview.webp"}
                alt={`ผู้เชี่ยวชาญการทำเว็บไซต์และ SEO ในจังหวัด ${data.province}`}
                fill
                priority
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-[1.02]"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent opacity-80" />

              {/* Location Indicator: ป้ายระบุพิกัด Specialist */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3 md:bottom-10 md:left-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface-card/40 backdrop-blur-md">
                  <IconRenderer name="MapPin" className="text-brand-primary" size={24} />
                </div>
                <div>
                  <span className="text-brand-primary block text-[10px] font-black tracking-widest uppercase opacity-70">Service Area</span>
                  <h2 className="m-0 text-xl font-black tracking-tighter text-text-primary uppercase">{data.province}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. LOCAL TRUST HUB: ยืนยันความภูมิฐาน */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-12 text-center">
            <div className="space-y-4">
              <h3 className="text-brand-primary text-[10px] font-black tracking-[0.5em] uppercase">National Standard, Local Care</h3>
              <h2 className="text-text-primary text-4xl font-black uppercase md:text-5xl leading-none">
                มาตรฐานสากล <br />
                <span className="bg-gradient-to-r from-text-secondary to-text-primary bg-clip-text text-transparent italic">เพื่อธุรกิจใน {data.province}</span>
              </h2>
            </div>
            <ImpactStats />
            <div className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-border to-transparent" />
            <TrustBadge />
          </div>
        </div>
      </section>

      {/* 04. DISTRICT COVERAGE: การระบุขอบเขตการให้บริการ */}
      <section className="border-y border-border bg-surface-offset/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center gap-4 opacity-80">
            <IconRenderer name="Navigation" size={20} className="text-brand-primary" />
            <h3 className="text-text-primary text-lg font-black tracking-widest uppercase italic">พื้นที่ให้บริการใน {data.province}</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {(data.districts || []).map((district, idx) => (
              <span key={idx} className="hover:border-brand-primary/50 hover:text-brand-primary inline-flex cursor-default items-center rounded-full border border-border bg-surface-card px-6 py-2 text-sm font-bold text-text-secondary transition-all hover:shadow-glow">
                {district}
              </span>
            ))}
            <span className="inline-flex items-center rounded-full border border-dashed border-border px-6 py-2 text-sm text-text-muted italic">และพื้นที่ใกล้เคียง</span>
          </div>
        </div>
      </section>

      {/* 05. FEATURE ENGINE & FAQ */}
      <FeatureGrid
        heading={`ยกระดับธุรกิจใน ${data.province}`}
        subheading={`เราเข้าใจบริบทตลาด ${data.province} พร้อมส่งมอบเครื่องมือที่จะช่วยให้คุณแซงหน้าคู่แข่งได้ทันที`}
        items={[
          { title: "Local SEO Dominance", description: `ดันธุรกิจของคุณให้ติดอันดับแรกใน Google Maps สำหรับพื้นที่ ${data.province}`, icon: "Map", category: "Local SEO" },
          { title: "Performance Experience", description: "เว็บไซต์ความเร็วสูง โหลดไวภายใต้ 1 วินาที ตามมาตรฐาน Core Web Vitals", icon: "Zap", category: "Speed" },
          { title: "Conversion Logic", description: "ดีไซน์ที่เน้นปิดการขาย เปลี่ยนผู้เข้าชมในจังหวัดให้เป็นลูกค้าตัวจริง", icon: "Target", category: "Marketing" },
        ]}
        columns={3}
      />

      <ConversionCTA 
        title={`พร้อมขยายฐานลูกค้าใน ${data.province} หรือยังครับ?`} 
        description={`ปรึกษาแนวทางการวางระบบให้ธุรกิจของคุณเป็นเบอร์ 1 ในพื้นที่ ${data.province} วันนี้เลยครับ`} 
        buttonLabel="ขอรับคำปรึกษาฟรี" 
      />
      
      <DynamicFAQ 
        title={`คำถามที่พบบ่อยสำหรับธุรกิจใน ${data.province}`} 
        description="เจาะลึกข้อมูลสำคัญที่ช่วยให้คุณตัดสินใจได้ง่ายขึ้น" 
        items={localFaqs} 
      />
    </LayoutEngine>
  );
}

export default memo(LocalTemplate);
