/**
 * [TEMPLATE COMPONENT]: SALE_PAGE_SYSTEM v17.0.1 (LCP_TUNED)
 * [STRATEGY]: Visual Impact | Trust Signals | Seamless Flow
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import Image from "next/image";

// --- INFRASTRUCTURE ---
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import HeroEngine from "@/components/templates/sections/HeroEngine";
import FeatureGrid from "@/components/templates/sections/FeatureGrid";
import DynamicFAQ from "@/components/templates/sections/DynamicFAQ";

// --- SHARED COMPONENTS ---
import TrustBadge from "@/components/shared/TrustBadge";
import ConversionCTA from "@/components/shared/ConversionCTA";
import JsonLd from "@/components/seo/JsonLd";
import IconRenderer from "@/components/ui/IconRenderer";
import ImpactStats from "@/components/shared/ImpactStats";

// --- LOGIC ---
import type { TemplateMasterData } from "@/types";
import { generateSalePageSchema } from "./Schema";

interface SalePageTemplateProps {
  readonly data: TemplateMasterData;
}

/**
 * @component SalePageTemplate
 * @description หน้าปิดการขายที่เน้นเปลี่ยนผู้เข้าชมให้เป็นลูกค้า (High Conversion Rate)
 */
function SalePageTemplate({ data }: SalePageTemplateProps) {
  const schema = generateSalePageSchema(data);

  return (
    <LayoutEngine spacing="specialist">
      {/* 01. SEO INJECTION */}
      <JsonLd data={schema} />

      {/* 02. HERO GATEWAY: เปิดตัวด้วยความน่าเชื่อถือ */}
      <HeroEngine
        title={data.title}
        subtitle={data.description}
        primaryActionLabel="เริ่มวางแผน Sale Page ทันที"
        secondaryActionLabel="ดูตัวอย่างระบบ"
      />

      {/* 03. VISUAL SHOWCASE: โชว์ภาพลักษณ์ความมืออาชีพ */}
      <section className="relative z-30 container mx-auto -mt-16 px-4 md:-mt-24 lg:-mt-32">
        <div className="group relative mx-auto max-w-5xl">
          {/* Ambient Glow: CSS Animation */}
          <div className="bg-brand-primary/20 absolute -inset-1 opacity-50 blur-2xl transition-opacity duration-500 group-hover:opacity-75 will-change-opacity" />

          {/* [LCP FIX]: รูปภาพโหลดทันที */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0A0A0A] shadow-2xl md:rounded-[3rem]">
            {/* Browser Header Simulation */}
            <div className="flex items-center gap-2 border-b border-white/5 bg-white/5 px-6 py-4 backdrop-blur-md">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto flex w-1/2 items-center justify-center rounded-full bg-black/20 py-1">
                <div className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-500" />
                <span className="text-[10px] font-medium text-white/40">
                  {data.id} - Secure Connection
                </span>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative aspect-[16/10] w-full bg-gray-900">
              <Image
                src={data.image || "/images/service/preview.webp"}
                alt={`ตัวอย่างหน้าเว็บปิดการขาย: ${data.title}`}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
              {/* Overlay Grid */}
              <div className="pointer-events-none absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* 04. AUTHORITY & STATS: ยืนยันผลลัพธ์ */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-16">
            <div className="space-y-6 text-center">
              <span className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase">
                <IconRenderer name="ShieldCheck" size={14} />
                Proven Performance
              </span>
              <h3 className="text-3xl font-black tracking-tighter text-white uppercase italic md:text-5xl">
                Why Choose This System?
              </h3>
            </div>
            <ImpactStats />
            <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <TrustBadge />
          </div>
        </div>
      </section>

      {/* 05. CORE BENEFITS: ทำไมต้องระบบนี้ */}
      <FeatureGrid
        heading="สิ่งที่คุณจะได้รับจากระบบนี้"
        subheading="ไม่ใช่แค่หน้าเว็บธรรมดา แต่คือเครื่องมือทางการตลาดที่ออกแบบมาเพื่อปิดการขายโดยเฉพาะ"
        // [DATA MAPPING]: แปลง benefits เป็น Feature Item
        items={(data.benefits || []).map((benefit, index) => ({
          title: benefit,
          description: "Optimized for maximum conversion.",
          icon: index % 2 === 0 ? "Target" : "Zap", // Fallback Icon
          category: "Key Advantage",
          technicalDetail: "High-Performance Logic",
        }))}
        columns={3}
      />

      {/* 06. FEATURES DEEP DIVE: เจาะลึกฟีเจอร์ */}
      <section className="border-y border-white/5 bg-white/[0.02] py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h3 className="text-2xl font-bold text-white md:text-4xl">Technical Capabilities</h3>
            <p className="mt-4 text-gray-400">ขุมพลังเบื้องหลังความสำเร็จของ Sale Page</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {(data.coreFeatures || []).map((feature, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10"
              >
                <div className="bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors group-hover:text-black">
                  <IconRenderer name={feature.icon} size={24} />
                </div>
                <h4 className="mb-3 text-xl font-bold text-white">{feature.title}</h4>
                <p className="text-sm leading-relaxed text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07. CALL TO ACTION */}
      <ConversionCTA
        title="พร้อมสร้างยอดขายด้วย Sale Page หรือยังครับ?"
        description="อย่าปล่อยให้ลูกค้าหลุดมือไปเพราะเว็บโหลดช้าหรือใช้งานยาก ปรึกษาผมเพื่อวางระบบที่ถูกต้องตั้งแต่วันนี้"
        buttonLabel="ขอคำปรึกษาและใบเสนอราคา"
      />

      {/* 08. FAQ */}
      <DynamicFAQ
        title="คำถามที่พบบ่อยเกี่ยวกับ Sale Page"
        description="คลายข้อสงสัยเพื่อให้คุณมั่นใจในการตัดสินใจลงทุน"
        items={data.faqs}
      />
    </LayoutEngine>
  );
}

export default memo(SalePageTemplate);
