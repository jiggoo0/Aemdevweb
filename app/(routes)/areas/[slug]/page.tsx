/**
 * [PAGE]: AREA_DETAIL_ENGINE v17.9.9 (GEO_AUTHORITY_STABILIZED)
 * [STRATEGY]: Universal Template Renderer | Adapter Normalization | Linked Data Graph
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// --- Infrastructure & Models ---
import { AREA_NODES } from "@/constants/area-nodes";
import { SITE_CONFIG } from "@/constants/site-config";
import type { PageProps } from "@/types";

// --- Components & SEO Protocols ---
// [FIXED]: Import MetadataParams เพื่อใช้งานร่วมกับ constructMetadata ให้ครบวงจร
import { constructMetadata, type MetadataParams } from "@/lib/seo-utils";
import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateSchemaGraph,
} from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";

// --- Templates Engine (Strategic Bridge) ---
import TemplateRenderer from "@/components/templates/TemplateRenderer";

/**
 * [SSG]: สร้าง Static Path สำหรับทุกภูมิภาค เพื่อความเร็วสูงสุด (Zero TTFB)
 */
export async function generateStaticParams() {
  return AREA_NODES.map((area) => ({ slug: area.slug }));
}

/**
 * [SEO]: Metadata Generation (Async Param Hardening)
 */
export async function generateMetadata(props: PageProps<{ slug: string }>): Promise<Metadata> {
  const { slug } = await props.params;
  const area = AREA_NODES.find((a) => a.slug === slug);

  if (!area) return { title: "Area Node Not Found" };

  // [INJECTION]: ใช้งาน MetadataParams Interface เพื่อความ Strict ของข้อมูล SEO
  const seoConfig: MetadataParams = {
    title: area.seoTitle || area.title,
    description: area.seoDescription || area.description,
    path: `/areas/${slug}`,
    image: area.heroImage,
    keywords: area.keywords,
  };

  return constructMetadata(seoConfig);
}

/**
 * @page AreaDetailPage
 * @description เรนเดอร์หน้าพื้นที่ให้บริการด้วยระบบ Dynamic Rendering และ Local Entity Injection
 */
export default async function AreaDetailPage(props: PageProps<{ slug: string }>) {
  // [MANDATE]: Next.js 16 - Await params ก่อนการประมวลผล Logic
  const { slug } = await props.params;
  const area = AREA_NODES.find((a) => a.slug === slug);

  if (!area) notFound();

  // [SCHEMA]: LocalBusiness & Breadcrumb Graph (Semantic Linking)
  const fullSchema = generateSchemaGraph([
    generateBreadcrumbSchema([
      { name: "หน้าแรก", item: SITE_CONFIG.siteUrl },
      { name: "พื้นที่ให้บริการ", item: `${SITE_CONFIG.siteUrl}/areas` },
      { name: area.province, item: `${SITE_CONFIG.siteUrl}/areas/${slug}` },
    ]),
    generateLocalBusinessSchema(area),
  ]);

  return (
    <LayoutEngine spacing="none">
      {/* 01. SEO Infrastructure: JSON-LD Graph Injection */}
      <JsonLd data={fullSchema} />

      <main className="relative min-h-screen w-full">
        {/* 02. SYSTEM_BADGE: Geo-Identity Node Marker */}
        <div className="pointer-events-none flex justify-center pt-24 pb-4 select-none">
          <div className="border-border bg-surface-main/30 flex items-center gap-2 rounded-full border px-4 py-1 backdrop-blur-sm">
            <div className="bg-brand-primary h-1 w-1 animate-pulse rounded-full" />
            <span className="text-text-muted font-mono text-[9px] font-black tracking-[0.4em] uppercase opacity-40">
              Geo_Sync: {area.province.toUpperCase()} | Node_{area.slug.replace("-", "_")}
            </span>
          </div>
        </div>

        {/* 03. RENDER_ENGINE: Dynamic UI Projection */}
        <section className="relative w-full overflow-hidden">
          <TemplateRenderer _source="area" data={area} />
        </section>
      </main>
    </LayoutEngine>
  );
}
