/**
 * [TEMPLATE COMPONENT]: CATALOG_PAGE_SYSTEM v17.9.0 (FINAL_HARDENED)
 * [STRATEGY]: Strategic Registry | Aspect-Ratio Locking | Zero-Any Policy
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// --- 1. Infrastructure & UI Components ---
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
import type { TemplateMasterData, CatalogItem, ServiceFeature, IconName } from "@/types";
import { generateCatalogSchema } from "./Schema";

interface CatalogTemplateProps {
  readonly data: TemplateMasterData;
}

const CatalogTemplate = ({ data }: CatalogTemplateProps) => {
  // [MEMO]: ป้องกันการคำนวณ Schema ใหม่หาก Data ไม่เปลี่ยน
  const schema = useMemo(() => generateCatalogSchema(data), [data]);

  // [RESOLVE]: ลำดับความสำคัญของข้อมูล (Items > CoreFeatures)
  const displayItems = useMemo(
    () => (data.items && data.items.length > 0 ? data.items : data.coreFeatures || []),
    [data.items, data.coreFeatures],
  );

  // [IMAGE_STRATEGY]: ดึง Metadata เพื่อล็อก Aspect Ratio ป้องกัน Layout Shift (CLS)
  const imgData = data.image ? IMAGE_BLUR_DATA[data.image] : null;

  return (
    <LayoutEngine spacing="specialist" theme={data.theme}>
      <JsonLd data={schema} />

      {/* 01. HERO GATEWAY: Persona-Driven Context */}
      <HeroEngine
        title={data.title}
        subtitle={data.description}
        primaryActionLabel="ปรึกษาแผนงานกับนายเอ็มซ่ามากส์"
        primaryHref="/contact"
        secondaryActionLabel="Analyze Catalog"
        secondaryHref="#catalog-grid"
        align="center"
      />

      {/* 02. VISUAL SHOWCASE: Locked Aspect Ratio for PSI 100 */}
      <section className="relative z-30 container mx-auto -mt-24 px-4 transition-colors duration-500 md:-mt-48">
        <div className="group relative mx-auto max-w-7xl">
          <div className="bg-brand-primary/10 absolute -inset-10 rounded-[5rem] opacity-0 blur-[120px] transition-all duration-1000 group-hover:opacity-40" />

          <div className="border-border bg-surface-card relative overflow-hidden rounded-[3rem] border shadow-2xl md:rounded-[4rem] md:p-4">
            {/* System Status Overlay */}
            <div className="border-border bg-surface-main/40 absolute top-8 right-8 z-20 hidden items-center gap-2 rounded-full border px-4 py-1.5 backdrop-blur-md md:flex">
              <div className="bg-brand-primary shadow-glow h-2 w-2 animate-pulse rounded-full" />
              <span className="text-brand-primary text-[10px] font-black tracking-widest uppercase">
                Architecture_Node.v17.9
              </span>
            </div>

            {/* Container ที่จองพื้นที่ไว้ก่อนรูปโหลดเสร็จ */}
            <div
              className="bg-surface-offset relative w-full overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem]"
              style={{ aspectRatio: imgData ? `${imgData.width}/${imgData.height}` : "21/9" }}
            >
              <Image
                src={data.image || "/images/templates/preview.webp"}
                alt={`Strategic Catalog Hub: ${data.title}`}
                fill
                priority
                placeholder={imgData ? "blur" : "empty"}
                blurDataURL={imgData?.blurDataURL}
                className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="bg-infrastructure-grid pointer-events-none absolute inset-0 opacity-[0.05]" />
              <div className="from-surface-card absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Unit Counter Badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-border bg-surface-card/90 shadow-glow absolute -right-6 -bottom-6 z-20 hidden items-center gap-6 rounded-[2.5rem] border px-10 py-8 backdrop-blur-xl md:flex"
          >
            <div className="bg-brand-primary/10 border-brand-primary/20 flex h-14 w-14 items-center justify-center rounded-2xl border">
              <IconRenderer name="Layers" className="text-brand-primary" size={28} />
            </div>
            <div className="space-y-1">
              <p className="text-text-muted font-mono text-[9px] font-black tracking-[0.4em] uppercase opacity-60">
                System_Deployment
              </p>
              <p className="text-text-primary text-2xl leading-none font-black tracking-tighter uppercase italic">
                {displayItems.length} Nodes_Active
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 03. TRUST LAYER */}
      <section className="py-32">
        <div className="container mx-auto flex flex-col items-center gap-16 px-6">
          <ImpactStats />
          <div className="via-border h-px w-full max-w-4xl bg-gradient-to-r from-transparent to-transparent" />
          <TrustBadge />
        </div>
      </section>

      {/* 04. CATALOG GRID: Type-Safe Rendering */}
      <div id="catalog-grid" className="bg-surface-offset/20 border-border border-y py-10">
        <FeatureGrid
          heading="Specialist Solution Catalog"
          subheading={`รายการโซลูชันที่ นายเอ็มซ่ามากส์ คัดสรรมาเพื่อขับเคลื่อนธุรกิจของคุณสู่มาตรฐานปี 2026`}
          items={displayItems.map((item, idx) => {
            // [TYPE-GUARD]: คัดแยกคุณสมบัติระหว่าง CatalogItem และ ServiceFeature อย่างปลอดภัย
            const title =
              "name" in item ? (item as CatalogItem).name : (item as ServiceFeature).title;
            const icon = item.icon as IconName;

            return {
              title: title,
              description: item.description,
              icon: icon,
              technicalDetail: `NODE_UUID: 0x${(idx + 1).toString(16).toUpperCase().padStart(2, "0")}`,
            };
          })}
          columns={3}
        />
      </div>

      {/* 05. PERSONAL QUOTE */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-3xl space-y-8">
            <IconRenderer name="Zap" size={48} className="text-brand-primary mx-auto opacity-20" />
            <h3 className="text-text-primary text-2xl font-black italic md:text-4xl">
              "ทุกรายการในแค็ตตาล็อกนี้ ถูกออกแบบภายใต้โครงสร้างที่รองรับการขยายตัว{" "}
              <span className="text-brand-primary">(Scalability)</span>{" "}
              <br className="hidden md:block" /> ไม่ใช่แค่ทำให้จบ แต่ทำให้เติบโตครับ"
            </h3>
            <p className="text-brand-primary font-mono text-sm font-black tracking-widest uppercase">
              — นายเอ็มซ่ามากส์ (Alongkorn Yomkerd)
            </p>
          </div>
        </div>
      </section>

      {/* 06. CONVERSION & FAQ */}
      <ConversionCTA
        title="ต้องการโซลูชันที่ปรับแต่งเฉพาะ (Tailor-made) ไหมครับ?"
        description="หากรายการข้างต้นยังไม่ตอบโจทย์ 100% นายเอ็มซ่ามากส์ พร้อมช่วยออกแบบสถาปัตยกรรมใหม่ที่เหมาะกับธุรกิจคุณโดยเฉพาะครับ"
        buttonLabel="คุยรายละเอียดกับนายเอ็ม"
      />

      <DynamicFAQ
        title="Catalog Technical FAQ"
        description="เจาะลึกรายละเอียดทางเทคนิคและการเลือกใช้งาน Catalog Nodes"
        items={data.faqs}
      />
    </LayoutEngine>
  );
};

export default memo(CatalogTemplate);
