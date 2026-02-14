/**
 * [TEMPLATE COMPONENT]: CATALOG_PAGE_SYSTEM v17.9.102 (ULTIMATE_HARDENED)
 * [STRATEGY]: Strategic Registry | Anti-White-Flash | Trust-Signal Synergy
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// --- 1. Infrastructure ---
import { IMAGE_BLUR_DATA } from "@/constants/image-blur-data";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import HeroEngine from "@/components/templates/sections/HeroEngine";
import FeatureGrid from "@/components/templates/sections/FeatureGrid";
import DynamicFAQ from "@/components/templates/sections/DynamicFAQ";

// --- 2. Shared Components ---
import TrustBadge from "@/components/shared/TrustBadge";
import ConversionCTA from "@/components/shared/ConversionCTA";
import JsonLd from "@/components/seo/JsonLd";
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer";
import ImpactStats from "@/components/shared/ImpactStats";

// --- 3. Logic & Types ---
import type { UniversalTemplateProps, CatalogItem, ServiceFeature } from "@/types";
import { generateUniversalSchema } from "@/lib/schema";

interface CatalogTemplateProps {
  readonly data: UniversalTemplateProps;
  readonly suppressUI?: boolean;
}

const CatalogTemplate = ({ data, suppressUI = false }: CatalogTemplateProps) => {
  // [MEMOIZATION]: สร้าง Schema สำหรับ SEO
  const schema = useMemo(() => generateUniversalSchema(data), [data]);

  // [DATA_ADAPTER]: จัดการข้อมูลรายการแบบ Type-Safe (ป้องกัน Error จาก Registry)
  const displayItems = useMemo(() => {
    if (data.items && Array.isArray(data.items) && data.items.length > 0) {
      return data.items;
    }
    return data.coreFeatures || [];
  }, [data.items, data.coreFeatures]);

  // [IMAGE_REGISTRY]: จัดการ Blur Placeholder
  const imgKey = data.image as keyof typeof IMAGE_BLUR_DATA;
  const imgData = data.image && IMAGE_BLUR_DATA[imgKey] ? IMAGE_BLUR_DATA[imgKey] : null;

  const social = data.socialProof;
  const pricing = data.regionalPricing;

  return (
    // [CRITICAL FIX]: Root Wrapper ป้องกันแสงขาวรอด และล็อคสีพื้นหลัง (Next 16 Compliant)
    <main
      className="relative flex min-h-screen w-full flex-col overflow-x-hidden"
      style={{
        backgroundColor: data.theme?.background || "#ffffff",
      }}
    >
      <LayoutEngine spacing="specialist" theme={data.theme}>
        {/* 01. SEO Layer */}
        <JsonLd data={schema} />

        {/* 02. Hero Section: Persona-Driven Hub */}
        {!suppressUI && (
          <HeroEngine
            title={data.title}
            subtitle={data.description}
            primaryActionLabel="ขอใบเสนอราคาโครงการ"
            primaryHref="#contact"
            secondaryActionLabel="Explore Catalog"
            secondaryHref="#catalog-grid"
            align="center"
          />
        )}

        {/* 03. Showcase Visual Container */}
        <section className="relative z-30 container mx-auto -mt-24 px-4 transition-colors duration-500 md:-mt-48">
          <div className="group relative mx-auto max-w-7xl">
            {/* Ambient Glow */}
            <div className="bg-brand-primary/10 absolute -inset-10 rounded-[5rem] opacity-0 blur-[120px] transition-all duration-1000 group-hover:opacity-40" />

            {/* Main Visual Frame */}
            <div className="border-border bg-surface-card relative overflow-hidden rounded-[3rem] border shadow-2xl md:rounded-[4rem] md:p-4">
              {/* System Badge */}
              <div className="border-border bg-surface-main/60 absolute top-8 right-8 z-20 hidden items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-md md:flex">
                <div className="bg-brand-primary shadow-glow h-2 w-2 animate-pulse rounded-full" />
                <span className="text-brand-primary font-mono text-[9px] font-black tracking-widest uppercase italic">
                  Strategic_Catalog_v18
                </span>
              </div>

              <div
                className="bg-surface-offset relative w-full overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem]"
                style={{
                  aspectRatio: imgData ? `${imgData.width}/${imgData.height}` : "21/9",
                }}
              >
                <Image
                  src={data.image || "/images/service/catalog-node.webp"}
                  alt={`Catalog Solution: ${data.title}`}
                  fill
                  priority
                  placeholder={imgData ? "blur" : "empty"}
                  blurDataURL={imgData?.blurDataURL}
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
                <div className="from-surface-card absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60" />
              </div>
            </div>

            {/* Floating Specialist HUD */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-border bg-surface-card/95 shadow-glow-sm absolute -right-6 -bottom-6 z-20 hidden items-center gap-6 rounded-[2.5rem] border px-10 py-8 backdrop-blur-xl md:flex"
            >
              <div className="bg-brand-primary/10 border-brand-primary/20 text-brand-primary flex h-14 w-14 items-center justify-center rounded-2xl border">
                <IconRenderer name="Layers" size={28} />
              </div>
              <div className="space-y-1">
                <p className="text-text-muted font-mono text-[9px] font-black tracking-[0.4em] uppercase opacity-60">
                  {pricing ? `Starting: ${pricing.startPrice}` : "Active_Registry"}
                </p>
                <p className="text-text-primary text-2xl leading-none font-black tracking-tighter uppercase italic">
                  {displayItems.length} Solution_Nodes
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 04. Trust & Authority Matrix */}
        <section className="py-32">
          <div className="container mx-auto flex flex-col items-center gap-16 px-6">
            <ImpactStats />

            {social && (
              <div className="flex flex-col items-center gap-3">
                <div className="flex gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <IconRenderer key={i} name="Star" size={18} className="fill-current" />
                  ))}
                </div>
                <span className="text-text-muted font-mono text-[10px] font-black tracking-widest uppercase opacity-70">
                  Reliability: {social.rating}/5 ({social.reviewCount} Verified Reviews)
                </span>
              </div>
            )}

            <div className="via-border h-px w-full max-w-4xl bg-gradient-to-r from-transparent to-transparent opacity-50" />
            <TrustBadge />
          </div>
        </section>

        {/* 05. CATALOG_GRID: Specialist Node Execution */}
        <div id="catalog-grid" className="bg-surface-offset/20 border-border border-y py-12">
          <FeatureGrid
            heading="Solution Catalog"
            subheading={`รายการโซลูชันวิศวกรรมสถาปัตยกรรมเว็บไซต์เพื่อธุรกิจยุคปี 2026`}
            items={displayItems.map((item, idx) => {
              const title =
                "name" in item ? (item as CatalogItem).name : (item as ServiceFeature).title;

              return {
                title: title,
                description: item.description,
                icon: item.icon as IconName,
                technicalDetail: `NODE_0x${(idx + 1).toString(16).toUpperCase().padStart(2, "0")}`,
              };
            })}
            columns={3}
          />
        </div>

        {/* 06. Professional Wisdom Section */}
        <section className="py-32">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-4xl space-y-10">
              <IconRenderer
                name="Search"
                size={56}
                className="text-brand-primary mx-auto opacity-15"
              />
              <h3 className="text-text-primary text-3xl leading-[1.1] font-black italic md:text-5xl">
                "ความท้าทายของ Catalog ไม่ใช่การมีสินค้าเยอะ <br />
                แต่คือการทำให้ลูกค้า{" "}
                <span className="text-brand-primary decoration-brand-primary/30 underline decoration-4 underline-offset-8">
                  หาของที่อยากซื้อเจอ
                </span>{" "}
                ในเวลาที่สั้นที่สุด"
              </h3>
              <p className="text-brand-primary font-mono text-sm font-black tracking-widest uppercase">
                — นายเอ็มซ่ามากส์ (System Architect)
              </p>
            </div>
          </div>
        </section>

        {/* 07. Conversion Anchor */}
        <ConversionCTA
          title="ต้องการแคตตาล็อกที่รองรับระบบขอใบเสนอราคา (RFQ) ไหมครับ?"
          description="เราพร้อมปรับแต่งระบบหลังบ้านให้เข้ากับ Workflow การขายของคุณโดยเฉพาะ เพื่อ ROI ที่ชัดเจนที่สุด"
          buttonLabel="ปรึกษาวางแผนโครงการ"
        />

        {/* 08. FAQ Infrastructure */}
        <DynamicFAQ
          title="Catalog Technical FAQ"
          description="เจาะลึกรายละเอียดเกี่ยวกับการจัดการระบบข้อมูลและความปลอดภัยของ Node"
          items={data.faqs || []}
        />
      </LayoutEngine>
    </main>
  );
};

export default memo(CatalogTemplate);
