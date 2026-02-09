/**
 * [TEMPLATE COMPONENT]: CATALOG_PAGE_SYSTEM v17.0.1 (LCP_TUNED)
 * [STRATEGY]: Strategic Registry | Atmospheric Depth | High-Trust Flow
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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

// --- LOGIC ---
import type { TemplateMasterData } from "@/types";
import { generateCatalogSchema } from "./Schema";

interface CatalogTemplateProps {
  readonly data: TemplateMasterData;
}

/**
 * @component CatalogTemplate
 * @description หน้าสำหรับรวบรวมรายการโซลูชัน/สินค้า (Catalog View)
 * จูนมาเพื่อลด Cognitive Load และช่วยให้ลูกค้าเปรียบเทียบตัวเลือกได้ง่ายขึ้น
 */
const CatalogTemplate = ({ data }: CatalogTemplateProps) => {
  const schema = generateCatalogSchema(data);
  
  // [DATA MAPPING]: ใช้ coreFeatures เป็นรายการสินค้าหลัก (ตามโครงสร้าง Registry)
  const catalogItems = data.coreFeatures || [];

  return (
    <LayoutEngine spacing="specialist">
      {/* 01. SEO SIGNAL: บอก Google ว่าหน้านี้คือ Collection */}
      <JsonLd data={schema} />

      {/* 02. HERO GATEWAY: เปิดตัว Catalog */}
      <HeroEngine
        title={data.title}
        subtitle={data.description}
        primaryActionLabel="ปรึกษาการเลือกแพ็กเกจ"
        secondaryActionLabel="ดูรายการทั้งหมด"
      />

      {/* 03. VISUAL SHOWCASE: ตัวอย่างการแสดงผล (LCP Optimized) */}
      <section className="relative z-30 container mx-auto -mt-24 px-4 md:-mt-48">
        <div className="group relative mx-auto max-w-7xl">
          {/* Neural Glow Physics: CSS Animation */}
          <div className="bg-brand-primary/10 absolute -inset-10 rounded-[5rem] opacity-0 blur-[120px] transition-all duration-1000 group-hover:opacity-100 will-change-opacity" />

          {/* [LCP FIX]: รูปภาพโหลดทันที ไม่รอ JS Animation */}
          <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-[#0A0A0A] shadow-2xl md:rounded-[4rem] md:p-4">
            
            {/* Status Bar Simulation */}
            <div className="absolute top-8 right-8 z-20 hidden items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-1.5 backdrop-blur-md md:flex">
              <div className="bg-brand-primary h-2 w-2 animate-pulse rounded-full" />
              <span className="text-brand-primary text-[10px] font-bold tracking-widest uppercase">
                Live Catalog
              </span>
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2.5rem] bg-gray-900 md:aspect-[21/9] md:rounded-[3.5rem]">
              <Image
                src={data.image || "/images/templates/preview.webp"}
                alt={`Catalog Preview: ${data.title}`}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Collection Count Badge: Animation แยกต่างหาก */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute right-10 -bottom-10 z-20 hidden items-center gap-6 rounded-[2.5rem] border border-white/10 bg-black/80 px-8 py-6 shadow-2xl backdrop-blur-xl md:flex"
          >
            <div className="bg-brand-primary/10 border-brand-primary/20 flex h-14 w-14 items-center justify-center rounded-2xl border">
              <IconRenderer name="Layers" className="text-brand-primary" size={28} />
            </div>
            <div className="space-y-1">
              <p className="text-text-muted font-mono text-[9px] font-black tracking-[0.4em] uppercase opacity-60">
                Total_Items
              </p>
              <p className="text-xl leading-none font-black tracking-tighter text-white uppercase italic">
                {catalogItems.length > 0 ? `${catalogItems.length} Units` : "System Ready"}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 04. RELIABILITY STRIP: ความน่าเชื่อถือของระบบจัดการข้อมูล */}
      <section className="py-24 md:pt-32">
        <div className="container mx-auto flex flex-col items-center gap-12 px-6">
          <div className="flex items-center gap-4 opacity-40">
            <div className="h-px w-12 bg-white/20" />
            <h3 className="font-mono text-[10px] font-black tracking-[0.5em] text-gray-400 uppercase italic">
              System_Integrity_Standards
            </h3>
            <div className="h-px w-12 bg-white/20" />
          </div>
          <div className="w-full max-w-5xl">
            <TrustBadge />
          </div>
        </div>
      </section>

      {/* 05. CATALOG GRID: รายการสินค้า/บริการ */}
      <FeatureGrid
        heading="Strategic Solution Catalog"
        subheading="รวบรวมรายการบริการที่คัดสรรมาเพื่อตอบโจทย์ธุรกิจของคุณโดยเฉพาะครับ"
        // [DATA MAPPING]: Map ข้อมูลจาก coreFeatures เข้า Grid
        items={catalogItems.map((item, idx) => ({
          title: item.title, // ใช้ title ตาม Registry
          description: item.description,
          icon: item.icon,
          category: `CATALOG_ID: 0${idx + 1}`,
          technicalDetail: "Specialist Verified",
        }))}
        columns={3}
      />

      {/* 06. CONVERSION HUB: ช่วยเลือกสิ่งที่ใช่ */}
      <ConversionCTA
        title="ยังไม่แน่ใจว่าจะเลือกโซลูชันไหนดีใช่ไหมครับ?"
        description="ผมพร้อมช่วยวิเคราะห์และคัดเลือกแพ็กเกจที่คุ้มค่าและตรงกับเป้าหมายทางธุรกิจของคุณที่สุด ทักมาคุยกันก่อนได้เลยครับ"
        buttonLabel="ให้ผมช่วยเลือกแพ็กเกจ"
        className="bg-surface-offset"
      />

      {/* 07. INTELLIGENCE FAQ */}
      <DynamicFAQ
        title="Catalog Intelligence"
        description="ข้อมูลสำคัญเกี่ยวกับการเลือกใช้บริการและระบบจัดการสินค้า"
        items={data.faqs}
      />
    </LayoutEngine>
  );
};

export default memo(CatalogTemplate);
