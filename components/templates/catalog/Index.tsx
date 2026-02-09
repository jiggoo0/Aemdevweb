/**
 * [TEMPLATE COMPONENT]: CATALOG_PAGE_SYSTEM v17.3.10 (STABILIZED)
 * [STRATEGY]: Strategic Registry | Multi-Theme Depth | LCP Performance
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// --- INFRASTRUCTURE (FIXED: ปรับ Path ให้ตรงตามตำแหน่งจริงในระบบ) ---
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import HeroEngine from "@/components/features/landing/Hero";
import FeatureGrid from "@/components/templates/sections/FeatureGrid";
import DynamicFAQ from "@/components/templates/sections/DynamicFAQ";

// --- SHARED COMPONENTS ---
import TrustBadge from "@/components/shared/TrustBadge";
import ConversionCTA from "@/components/shared/ConversionCTA";
import JsonLd from "@/components/seo/JsonLd";
import IconRenderer from "@/components/ui/IconRenderer";

// --- LOGIC ---
import type { TemplateMasterData } from "@/types";
import { generateCatalogSchema } from "./Schema";

interface CatalogTemplateProps {
  readonly data: TemplateMasterData;
}

/**
 * @component CatalogTemplate
 * @description หน้าสำหรับรวบรวมรายการโซลูชันแบบ Catalog View
 */
const CatalogTemplate = ({ data }: CatalogTemplateProps) => {
  const schema = generateCatalogSchema(data);
  const catalogItems = data.coreFeatures || [];

  return (
    <LayoutEngine spacing="specialist" theme={data.theme}>
      <JsonLd data={schema} />

      {/* 01. HERO GATEWAY: [RESOLVED]: ปรับใช้ Prop ชื่อ subtitle และ actionText */}
      <HeroEngine
        title={data.title}
        subtitle={data.description}
        primaryActionText="ปรึกษาการเลือกแพ็กเกจ"
        secondaryActionText="ดูรายการทั้งหมด"
      />

      {/* 02. VISUAL SHOWCASE: Browser Simulation Interface */}
      <section className="relative z-30 container mx-auto -mt-24 px-4 md:-mt-48 transition-colors duration-500">
        <div className="group relative mx-auto max-w-7xl">
          {/* Neural Glow: ปรับตาม --ambient-opacity ของธีม */}
          <div className="bg-brand-primary/10 absolute -inset-10 rounded-[5rem] opacity-0 blur-[120px] transition-all duration-1000 group-hover:opacity-[var(--ambient-opacity,0.4)]" />

          <div className="relative overflow-hidden rounded-[3rem] border border-border bg-surface-card shadow-2xl md:rounded-[4rem] md:p-4">
            
            {/* Status Bar Indicator */}
            <div className="absolute top-8 right-8 z-20 hidden items-center gap-2 rounded-full border border-border bg-surface-main/40 px-4 py-1.5 backdrop-blur-md md:flex">
              <div className="bg-brand-primary h-2 w-2 animate-pulse rounded-full shadow-glow" />
              <span className="text-brand-primary text-[10px] font-black tracking-widest uppercase">
                Live Catalog.v17
              </span>
            </div>

            {/* [LCP]: Optimized Main Preview */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2.5rem] bg-surface-offset md:aspect-[21/9] md:rounded-[3.5rem]">
              <Image
                src={data.image || "/images/templates/preview.webp"}
                alt={`Catalog Preview: ${data.title}`}
                fill
                priority
                className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="bg-infrastructure-grid absolute inset-0 opacity-[0.05] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Collection Metadata Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-10 -bottom-10 z-20 hidden items-center gap-6 rounded-[2.5rem] border border-border bg-surface-card/80 px-8 py-6 shadow-glow backdrop-blur-xl md:flex"
          >
            <div className="bg-brand-primary/10 border-brand-primary/20 flex h-14 w-14 items-center justify-center rounded-2xl border">
              <IconRenderer name="Layers" className="text-brand-primary" size={28} />
            </div>
            <div className="space-y-1">
              <p className="text-text-muted font-mono text-[9px] font-black tracking-[0.4em] uppercase opacity-60">Total_Units</p>
              <p className="text-text-primary text-2xl leading-none font-black tracking-tighter uppercase italic">
                {catalogItems.length > 0 ? `${catalogItems.length} Units` : "System Ready"}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 03. RELIABILITY STANDARDS */}
      <section className="py-24 md:pt-32">
        <div className="container mx-auto flex flex-col items-center gap-12 px-6">
          <div className="flex items-center gap-4 opacity-40">
            <div className="h-px w-12 bg-border" />
            <h3 className="text-text-muted font-mono text-[10px] font-black tracking-[0.5em] uppercase italic">System_Integrity_Standards</h3>
            <div className="h-px w-12 bg-border" />
          </div>
          <div className="w-full max-w-5xl"><TrustBadge /></div>
        </div>
      </section>

      {/* 04. CATALOG GRID: รายการเชิงยุทธศาสตร์ */}
      <FeatureGrid
        heading="Strategic Solution Catalog"
        subheading="รวบรวมรายการบริการที่คัดสรรมาเพื่อตอบโจทย์ธุรกิจของคุณโดยเฉพาะครับ"
        items={catalogItems.map((item, idx) => ({
          title: item.title,
          description: item.description,
          icon: item.icon,
          category: `CATALOG_NODE: 0${idx + 1}`,
        }))}
        columns={3}
      />

      {/* 05. CONVERSION HUB & FAQ */}
      <ConversionCTA 
        title="ยังไม่แน่ใจว่าจะเลือกโซลูชันไหนดีใช่ไหมครับ?" 
        description="ผมพร้อมช่วยวิเคราะห์และคัดเลือกแพ็กเกจที่คุ้มค่าและตรงกับเป้าหมายทางธุรกิจของคุณที่สุด ทักมาคุยกันก่อนได้เลยครับ" 
        buttonLabel="ให้ผมช่วยเลือกแพ็กเกจ" 
      />

      <DynamicFAQ title="Catalog Intelligence" description="ข้อมูลสำคัญเกี่ยวกับการเลือกใช้บริการและระบบจัดการสินค้า" items={data.faqs} />
    </LayoutEngine>
  );
};

export default memo(CatalogTemplate);
