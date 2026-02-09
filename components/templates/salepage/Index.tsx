/**
 * [TEMPLATE COMPONENT]: SALE_PAGE_SYSTEM v17.4.5 (STABILIZED_FINAL)
 * [STRATEGY]: Visual Impact | Theme-Aware Contrast | Zero-Any Architecture
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import Image from "next/image";

// --- INFRASTRUCTURE ---
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
import type { TemplateMasterData, IconName } from "@/types";
import { generateSalePageSchema } from "./Schema";

interface SalePageTemplateProps {
  readonly data: TemplateMasterData;
}

/**
 * @component SalePageTemplate
 * @description เทมเพลตสำหรับหน้าเว็บปิดการขาย (Landing Page)
 */
function SalePageTemplate({ data }: SalePageTemplateProps) {
  const schema = generateSalePageSchema(data);

  return (
    <LayoutEngine spacing="specialist" theme={data.theme}>
      <JsonLd data={schema} />

      {/* 01. HERO GATEWAY: [RESOLVED]: ปรับใช้ Flat Props ให้ตรงกับ HeroEngine Interface */}
      <HeroEngine
        title={data.title}
        subtitle={data.description}
        primaryActionLabel="เริ่มวางแผน Sale Page ทันที"
        primaryHref="/contact"
        secondaryActionLabel="ดูตัวอย่างระบบ"
        secondaryHref="#demo"
      />

      {/* 02. VISUAL SHOWCASE: Browser Simulation */}
      <section
        id="demo"
        className="relative z-30 container mx-auto -mt-16 px-4 transition-colors duration-500 md:-mt-24 lg:-mt-32"
      >
        <div className="group relative mx-auto max-w-5xl">
          <div className="bg-brand-primary/20 absolute -inset-1 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-[var(--ambient-opacity,0.5)]" />

          <div className="border-border bg-surface-card relative overflow-hidden rounded-[2rem] border shadow-2xl md:rounded-[3rem]">
            {/* Specialist Browser UI */}
            <div className="border-border bg-surface-offset flex items-center gap-2 border-b px-6 py-4 backdrop-blur-md">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/50" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                <div className="h-3 w-3 rounded-full bg-green-500/50" />
              </div>
              <div className="bg-surface-main/50 border-border mx-auto flex w-1/2 items-center justify-center rounded-full border py-1">
                <div className="bg-brand-primary shadow-glow mr-2 h-2 w-2 animate-pulse rounded-full" />
                <span className="text-text-muted text-[9px] font-black tracking-[0.2em] uppercase md:text-[10px]">
                  {data.id} // Secure_Node.v17
                </span>
              </div>
            </div>

            <div className="bg-surface-offset relative aspect-[16/10] w-full">
              <Image
                src={data.image || "/images/service/preview.webp"}
                alt={`ตัวอย่างหน้าเว็บปิดการขาย: ${data.title}`}
                fill
                priority
                className="object-cover object-top transition-transform duration-1000 group-hover:scale-[1.02]"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="bg-infrastructure-grid pointer-events-none absolute inset-0 opacity-[0.05]" />
              <div className="from-surface-card absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* 03. AUTHORITY & TRUST SIGNALS */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-16">
            <div className="space-y-6 text-center">
              <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase">
                <IconRenderer name="ShieldCheck" size={14} />
                Proven Performance
              </div>
              <h3 className="text-text-primary text-3xl font-black tracking-tighter uppercase italic md:text-5xl">
                Why Choose This System?
              </h3>
            </div>
            <ImpactStats />
            <div className="via-border h-px w-full max-w-xs bg-gradient-to-r from-transparent to-transparent" />
            <TrustBadge />
          </div>
        </div>
      </section>

      {/* 04. CORE BENEFITS GRID */}
      <FeatureGrid
        heading="สิ่งที่คุณจะได้รับจากระบบนี้"
        subheading="ไม่ใช่แค่หน้าเว็บธรรมดา แต่คือเครื่องมือทางการตลาดที่ออกแบบมาเพื่อปิดการขายโดยเฉพาะ"
        items={(data.benefits || []).map((benefit, index) => ({
          title: benefit,
          description: "Optimized for maximum conversion in Specialist infrastructure.",
          icon: index % 2 === 0 ? "Target" : "Zap",
          technicalDetail: "Key Advantage",
        }))}
        columns={3}
      />

      {/* 05. TECHNICAL CAPABILITIES: Deep Dive Section */}
      <section className="border-border bg-surface-offset/50 border-y py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 space-y-4 text-center">
            <h3 className="text-text-primary text-3xl font-black tracking-tighter uppercase italic md:text-5xl">
              Technical Capabilities
            </h3>
            <p className="text-text-secondary font-medium italic">
              ขุมพลังเบื้องหลังความสำเร็จของ Sale Page
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {(data.coreFeatures || []).map((feature, idx) => (
              <div
                key={idx}
                className="group border-border bg-surface-card hover:border-brand-primary/30 hover:bg-surface-offset hover:shadow-glow relative rounded-3xl border p-8 transition-all duration-500"
              >
                <div className="bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-surface-main mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all group-hover:rotate-6">
                  {/* [RESOLVED]: Type-Safe Icon Rendering */}
                  <IconRenderer name={feature.icon as IconName} size={24} />
                </div>
                <h4 className="text-text-primary mb-3 text-xl font-black tracking-tight uppercase italic">
                  {feature.title}
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed font-medium italic opacity-80">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. CONVERSION CTA */}
      <ConversionCTA
        title="พร้อมสร้างยอดขายด้วย Sale Page หรือยังครับ?"
        description="อย่าปล่อยให้ลูกค้าหลุดมือไปเพราะเว็บโหลดช้าหรือใช้งานยาก ปรึกษาผมเพื่อวางระบบที่ถูกต้องตั้งแต่วันนี้"
        buttonLabel="ขอคำปรึกษาและใบเสนอราคา"
      />

      {/* 07. INTELLIGENCE FAQ HUB */}
      <DynamicFAQ
        title="คำถามที่พบบ่อยเกี่ยวกับ Sale Page"
        description="คลายข้อสงสัยเพื่อให้คุณมั่นใจในการตัดสินใจลงทุน"
        items={data.faqs}
      />
    </LayoutEngine>
  );
}

export default memo(SalePageTemplate);
