/**
 * [TEMPLATE COMPONENT]: CATALOG_PAGE_SYSTEM v17.9.106 (SEARCH_ENABLED)
 * [STRATEGY]: Strategic Registry | Client-Side Search | Trust-Signal Synergy
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo, useMemo, useState } from "react";
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
import type { UniversalTemplateProps } from "@/types";
import { generateUniversalSchema } from "@/lib/schema";

interface CatalogTemplateProps {
  readonly data: UniversalTemplateProps;
  readonly suppressUI?: boolean;
}

const CatalogTemplate = ({ data, suppressUI = false }: CatalogTemplateProps) => {
  const schema = useMemo(() => generateUniversalSchema(data), [data]);

  // [SEARCH_LOGIC]: State สำหรับเก็บคำค้นหา
  const [searchTerm, setSearchTerm] = useState("");

  // [DATA_ADAPTER]: รวม Items และ CoreFeatures เข้าด้วยกันเพื่อแสดงผล
  const allItems = useMemo(() => {
    const items = (data.items || []).map((i) => ({ ...i, type: "product" }));
    const features = (data.coreFeatures || []).map((f) => ({
      name: f.title,
      description: f.description,
      icon: f.icon,
      type: "feature",
    }));
    return [...items, ...features];
  }, [data.items, data.coreFeatures]);

  // [FILTER_LOGIC]: กรองรายการตามคำค้นหา
  const filteredItems = useMemo(() => {
    if (!searchTerm) return allItems;
    const lowerTerm = searchTerm.toLowerCase();
    return allItems.filter(
      (item) =>
        item.name.toLowerCase().includes(lowerTerm) ||
        item.description.toLowerCase().includes(lowerTerm),
    );
  }, [allItems, searchTerm]);

  const imgKey = data.image as keyof typeof IMAGE_BLUR_DATA;
  const imgData = data.image && IMAGE_BLUR_DATA[imgKey] ? IMAGE_BLUR_DATA[imgKey] : null;
  const pricing = data.regionalPricing;

  return (
    <>
      <JsonLd data={schema} />

      {/* Wrapper จัดการสีให้แล้ว */}
      <LayoutEngine spacing="specialist">
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

        {/* Visual Showcase */}
        <section className="relative z-30 container mx-auto -mt-24 px-4 md:-mt-48">
          <div className="group relative mx-auto max-w-7xl">
            <div className="absolute -inset-10 rounded-[5rem] bg-[var(--brand-primary)] opacity-0 blur-[120px] transition-all duration-1000 group-hover:opacity-20" />

            <div className="relative overflow-hidden rounded-[3rem] border border-[var(--foreground)]/10 bg-[var(--background)] shadow-2xl md:rounded-[4rem] md:p-4">
              {/* Product Image */}
              <div
                className="relative w-full overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem]"
                style={{ aspectRatio: imgData ? `${imgData.width}/${imgData.height}` : "21/9" }}
              >
                <Image
                  src={data.image || "/images/service/catalog-node.webp"}
                  alt={`Catalog Solution: ${data.title}`}
                  fill
                  priority
                  placeholder={imgData ? "blur" : "empty"}
                  blurDataURL={imgData?.blurDataURL}
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-60" />
              </div>
            </div>

            {/* Stats Floater */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute -right-6 -bottom-6 z-20 hidden items-center gap-6 rounded-[2.5rem] border border-[var(--foreground)]/10 bg-[var(--background)]/95 px-10 py-8 shadow-2xl backdrop-blur-xl md:flex"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--brand-primary)]/20 bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]">
                <IconRenderer name="Layers" size={28} />
              </div>
              <div className="space-y-1">
                <p className="font-mono text-[9px] font-black tracking-[0.4em] uppercase opacity-60">
                  {pricing ? `Starting: ${pricing.startPrice}` : "Active_Registry"}
                </p>
                <p className="text-2xl leading-none font-black tracking-tighter uppercase italic">
                  {allItems.length} Solution_Nodes
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-32 text-center">
          <ImpactStats />
          <div className="mx-auto my-16 h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-[var(--foreground)]/10 to-transparent" />
          <TrustBadge />
        </section>

        {/* [SEARCH_BAR]: Quick Item Finder */}
        <section id="catalog-grid" className="container mx-auto px-4 pb-12">
          <div className="mx-auto mb-16 max-w-xl">
            <div className="relative">
              <input
                type="text"
                placeholder="ค้นหารายการสินค้าหรือรหัสอะไหล่..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-2xl border border-[var(--foreground)]/10 bg-[var(--background)] px-6 py-4 pl-14 text-lg shadow-sm transition-all outline-none placeholder:opacity-40 focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary)]/20"
              />
              <div className="absolute top-1/2 left-5 -translate-y-1/2 text-[var(--foreground)] opacity-40">
                <IconRenderer name="Search" size={24} />
              </div>
            </div>
          </div>

          {/* Grid Display */}
          <FeatureGrid
            heading={searchTerm ? `ผลการค้นหา: "${searchTerm}"` : "Solution Catalog"}
            subheading="รายการโซลูชันวิศวกรรมสถาปัตยกรรมเว็บไซต์เพื่อธุรกิจยุคปี 2026"
            items={filteredItems.map((item, idx) => ({
              title: item.name,
              description: item.description,
              icon: item.icon as IconName,
              technicalDetail: `NODE_0x${(idx + 1).toString(16).toUpperCase().padStart(2, "0")}`,
            }))}
            columns={3}
          />

          {filteredItems.length === 0 && (
            <div className="py-20 text-center opacity-50">
              <IconRenderer name="SearchX" size={48} className="mx-auto mb-4" />
              <p>ไม่พบรายการที่ค้นหา</p>
            </div>
          )}
        </section>

        {/* Wisdom Quote */}
        <section className="py-32 text-center">
          <div className="mx-auto max-w-4xl space-y-10">
            <IconRenderer
              name="Search"
              size={56}
              className="mx-auto text-[var(--brand-primary)] opacity-15"
            />
            <h3 className="text-3xl leading-[1.1] font-black italic md:text-5xl">
              "ความท้าทายของ Catalog ไม่ใช่การมีสินค้าเยอะ <br />
              แต่คือการทำให้ลูกค้า{" "}
              <span className="text-[var(--brand-primary)] underline decoration-[var(--brand-primary)]/30 decoration-4 underline-offset-8">
                หาของที่อยากซื้อเจอ
              </span>{" "}
              ในเวลาที่สั้นที่สุด"
            </h3>
            <p className="font-mono text-sm font-black tracking-widest text-[var(--brand-primary)] uppercase">
              — นายเอ็มซ่ามากส์ (System Architect)
            </p>
          </div>
        </section>

        <ConversionCTA
          title="ต้องการแคตตาล็อกที่รองรับระบบขอใบเสนอราคา (RFQ) ไหมครับ?"
          description="เราพร้อมปรับแต่งระบบหลังบ้านให้เข้ากับ Workflow การขายของคุณโดยเฉพาะ"
          buttonLabel="ปรึกษาวางแผนโครงการ"
        />

        <DynamicFAQ
          title="Catalog Technical FAQ"
          description="เจาะลึกรายละเอียดเกี่ยวกับการจัดการระบบข้อมูล"
          items={data.faqs || []}
        />
      </LayoutEngine>
    </>
  );
};

export default memo(CatalogTemplate);
