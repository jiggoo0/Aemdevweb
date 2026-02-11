/**
 * [TEMPLATE COMPONENT]: SALE_PAGE_SYSTEM v17.8.5 (ZERO_CLS_HARDENED)
 * [STRATEGY]: Visual Impact | Metadata Slot Reservation | Persona Hardening
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
import type { TemplateMasterData, IconName } from "@/types";
import { generateSalePageSchema } from "./Schema";

interface SalePageTemplateProps {
  readonly data: TemplateMasterData;
}

function SalePageTemplate({ data }: SalePageTemplateProps) {
  const schema = useMemo(() => generateSalePageSchema(data), [data]);
  const imgData = data.image ? IMAGE_BLUR_DATA[data.image] : null;

  return (
    <LayoutEngine spacing="specialist" theme={data.theme}>
      <JsonLd data={schema} />

      {/* 01. HERO GATEWAY: Persona-Driven Action */}
      <HeroEngine
        title={data.title}
        subtitle={data.description}
        primaryActionLabel="เริ่มวางแผนระบบกับนายเอ็มซ่ามากส์"
        primaryHref="/contact"
        secondaryActionLabel="Analyze Demo"
        secondaryHref="#demo"
        align="center"
      />

      {/* 02. VISUAL SHOWCASE: Zero-CLS Browser Simulation */}
      <section
        id="demo"
        className="relative z-30 container mx-auto -mt-16 px-4 md:-mt-24 lg:-mt-32"
      >
        <div className="group relative mx-auto max-w-5xl">
          <div className="bg-brand-primary/20 absolute -inset-1 opacity-0 blur-2xl transition-opacity duration-1000 group-hover:opacity-40" />

          <div className="border-border bg-surface-card relative overflow-hidden rounded-[2rem] border shadow-2xl md:rounded-[3rem]">
            {/* Specialist Browser Interface */}
            <div className="border-border bg-surface-offset flex items-center gap-2 border-b px-6 py-4 backdrop-blur-md">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/40" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/40" />
                <div className="h-3 w-3 rounded-full bg-green-500/40" />
              </div>
              <div className="bg-surface-main/50 border-border mx-auto flex w-1/2 items-center justify-center rounded-full border py-1.5">
                <div className="bg-brand-primary shadow-glow mr-2 h-1.5 w-1.5 animate-pulse rounded-full" />
                <span className="text-text-muted font-mono text-[9px] font-black tracking-widest uppercase">
                  NODE_UUID: {data.id} // SECURE_ARCHITECTURE
                </span>
              </div>
            </div>

            {/* Image Container with Metadata-based Aspect Ratio */}
            <div
              className="bg-surface-offset relative w-full overflow-hidden"
              style={{ aspectRatio: imgData ? `${imgData.width}/${imgData.height}` : "16/10" }}
            >
              <Image
                src={data.image || "/images/service/preview.webp"}
                alt={`Strategic Sale Page Design: ${data.title}`}
                fill
                priority
                placeholder="blur"
                blurDataURL={imgData?.blurDataURL}
                className="object-cover object-top transition-transform duration-[2s] group-hover:scale-[1.02]"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="bg-infrastructure-grid pointer-events-none absolute inset-0 opacity-[0.05]" />
              <div className="from-surface-card absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* 03. AUTHORITY & CONVERSION LOGIC */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-16 text-center">
            <div className="space-y-6">
              <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-2 rounded-full border px-5 py-2 text-[10px] font-black tracking-widest uppercase">
                <IconRenderer name="Target" size={14} />
                Conversion_Architecture_v17
              </div>
              <h3 className="text-text-primary text-4xl font-black tracking-tighter uppercase italic md:text-6xl">
                High-Impact Results.
              </h3>
            </div>
            <ImpactStats />
            <div className="via-border h-px w-full max-w-4xl bg-gradient-to-r from-transparent to-transparent" />
            <TrustBadge />
          </div>
        </div>
      </section>

      {/* 04. CORE BENEFITS: Specialized Features */}
      <FeatureGrid
        heading="Value Proposition Matrix"
        subheading="ทุกโหนดของ Sale Page ถูกออกแบบมาเพื่อเปลี่ยนกระแสการเข้าชมให้เป็นยอดโอนเงิน (ROI) ที่จับต้องได้จริง"
        items={(data.benefits || []).map((benefit, idx) => ({
          title: benefit,
          description:
            "สถาปัตยกรรมที่ผ่านการปรับจูนโดย นายเอ็มซ่ามากส์ เพื่อความเร็วและ Conversion สูงสุด",
          icon: idx % 2 === 0 ? "Target" : "Zap",
          technicalDetail: "Business_Node",
        }))}
        columns={3}
      />

      {/* 05. TECHNICAL CAPABILITIES: The Engine Room */}
      <section className="border-border bg-surface-offset/30 border-y py-32">
        <div className="container mx-auto px-4">
          <div className="mb-20 space-y-4 text-center">
            <span className="text-brand-primary font-mono text-xs font-black tracking-[0.4em] uppercase">
              Protocol_Stack
            </span>
            <h3 className="text-text-primary text-4xl font-black uppercase italic md:text-6xl">
              Technical Engines.
            </h3>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {(data.coreFeatures || []).map((feature, idx) => (
              <div
                key={idx}
                className="group border-border bg-surface-card hover:border-brand-primary/30 hover:shadow-glow relative rounded-[2.5rem] border p-10 transition-all duration-500"
              >
                <div className="bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-surface-main mb-8 flex h-14 w-14 items-center justify-center rounded-2xl transition-all group-hover:-rotate-6">
                  <IconRenderer name={feature.icon as IconName} size={28} />
                </div>
                <h4 className="text-text-primary mb-4 text-2xl leading-none font-black tracking-tighter uppercase italic">
                  {feature.title}
                </h4>
                <p className="text-text-secondary text-base leading-relaxed font-medium italic opacity-80">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. CONVERSION CTA: Persona Focused */}
      <ConversionCTA
        title="พร้อมสร้างระบบปิดการขายอัตโนมัติหรือยังครับ?"
        description="นายเอ็มซ่ามากส์ พร้อมช่วยคุณวางโครงสร้าง Sale Page ที่ไม่เพียงแต่สวยงาม แต่ยังโหลดไวและยิงแอดได้แม่นยำที่สุดครับ"
        buttonLabel="ปรึกษาแผนงานกับนายเอ็ม"
      />

      {/* 07. INTELLIGENCE FAQ */}
      <DynamicFAQ
        title="Sale Page Intelligence FAQ"
        description="เจาะลึกกระบวนการทำงานและเทคโนโลยีเบื้องหลังการปิดการขาย"
        items={data.faqs}
      />
    </LayoutEngine>
  );
}

export default memo(SalePageTemplate);
