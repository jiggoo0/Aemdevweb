/**
 * [ROUTE PAGE]: AREA_DETAIL_ENGINE v17.3.10 (STABILIZED)
 * [STRATEGY]: Local Authority Engine | Deterministic Static Audit | Adapter Pattern
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// --- 1. Infrastructure & Data ---
import { AREA_NODES } from "@/constants/area-nodes";
import { SITE_CONFIG } from "@/constants/site-config";
import type { AreaNode, TemplateMasterData, PageProps, ServiceCategory } from "@/types";

// --- 2. SEO & Schema Protocols ---
import JsonLd from "@/components/seo/JsonLd";
import { generateLocalBusinessSchema } from "@/lib/schema";

// --- 3. Specialist Templates & Engine ---
// [FIXED]: แก้ไข Case-Sensitivity (index ตัวเล็ก) และ Path ให้ตรงกับ File Tree จริง
import LocalTemplate from "@/components/templates/local/index"; 
import CorporateTemplate from "@/components/templates/corporate/Index";
import SalePageTemplate from "@/components/templates/salepage/Index";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";

/* [A] STATIC GENERATION PROTOCOL (SSG) */
export async function generateStaticParams() {
  return AREA_NODES.map((area) => ({
    slug: area.slug,
  }));
}

/* [B] SEO METADATA ENGINE */
export async function generateMetadata({ params }: PageProps<{ slug: string }>): Promise<Metadata> {
  const { slug } = await params;
  const area = AREA_NODES.find((a) => a.slug === slug);

  if (!area) return { title: "404 Not Found" };

  return {
    title: area.seoTitle || `${area.title} | ${SITE_CONFIG.brandName}`,
    description: area.seoDescription || area.description,
    alternates: { canonical: `${SITE_CONFIG.siteUrl}/areas/${slug}` },
    openGraph: {
      title: area.seoTitle,
      description: area.seoDescription,
      images: [{ url: area.heroImage || "/images/og-default.webp", alt: area.title }],
      locale: "th_TH",
      type: "website",
    },
    keywords: [...(area.keywords || [])],
  };
}

/**
 * [ADAPTER UTILITY]: แปลงข้อมูล AreaNode -> TemplateMasterData
 * [RESOLVED]: เพิ่ม Property 'keywords' เพื่อให้ผ่านเงื่อนไขของ TemplateMasterData
 */
const adaptAreaToMasterData = (
  baseArea: AreaNode,
  category: ServiceCategory,
): TemplateMasterData => {
  return {
    id: `NODE-${baseArea.slug.toUpperCase()}`,
    title: baseArea.title,
    description: baseArea.description,
    priceValue: 0,
    price: "ประเมินตามพื้นที่",
    currency: "THB",
    unit: "โปรเจกต์",
    category: category,
    templateSlug: baseArea.templateSlug,
    priority: baseArea.priority,
    image: baseArea.heroImage,
    // [FIXED]: ส่งผ่าน Keywords จาก AreaNode ไปยัง Template
    keywords: baseArea.keywords || [], 
    benefits: [
      ...(baseArea.keywords || []),
      `บริการมาตรฐาน Specialist ครอบคลุมพื้นที่ ${baseArea.province}`,
      `วิเคราะห์เจาะจงเขต ${baseArea.districts.slice(0, 3).join(", ")}`,
      "Technical SEO Optimized สำหรับตลาดท้องถิ่น 100%",
    ],
    coreFeatures: (baseArea.keywords || []).map((kw, idx) => ({
      title: kw,
      description: idx === 0 
        ? `ยุทธศาสตร์ ${kw} ที่ออกแบบมาเพื่อธุรกิจใน ${baseArea.province}` 
        : `ขับเคลื่อนด้วยเทคโนโลยี Next.js 16 (Specialist Infrastructure)`,
      icon: idx % 2 === 0 ? "MapPin" : "Zap",
    })),
    faqs: [
      {
        question: `ธุรกิจใน ${baseArea.province} สามารถเริ่มงานกับ AEMDEVWEB ได้อย่างไร?`,
        answer: `คุณสามารถติดต่อปรึกษาผ่านช่องทางออนไลน์ได้ทันทีครับ เรามีระบบ Remote Onboarding ที่ช่วยให้การวางแผนงานใน ${baseArea.province} เป็นไปอย่างรวดเร็วและแม่นยำครับ`,
      },
    ],
  };
};

/**
 * @component AreaDetailPage
 * @description หน้า Landing Page รายจังหวัดแบบ Dynamic Route (Deterministic Hub)
 */
export default async function AreaDetailPage({ params }: PageProps<{ slug: string }>) {
  const { slug } = await params;
  
  // 1. Fetch Area Data จาก Registry
  const area = AREA_NODES.find((a) => a.slug === slug);
  if (!area) notFound();

  // 2. [DETERMINISTIC INTEGRITY]: ดึงข้อมูลปีแบบปลอดภัย
  const AUDIT_STAMP = SITE_CONFIG.business.established?.split('-')[0] || "2026"; 

  // 3. Prepare Schema Graph
  const localSchema = generateLocalBusinessSchema(area);

  /**
   * [RENDER ORCHESTRATOR]: เลือก Template ตามกลยุทธ์พื้นที่ (Adaptive UI)
   */
  const renderTemplate = () => {
    switch (area.templateSlug) {
      case "corporate":
        return <CorporateTemplate data={adaptAreaToMasterData(area, "business")} />;
      case "salepage":
        return <SalePageTemplate data={adaptAreaToMasterData(area, "landing")} />;
      case "local":
      default:
        // LocalTemplate รับ AreaNode โดยตรง (ไม่ต้องผ่าน Adapter)
        return <LocalTemplate data={area} />;
    }
  };

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={localSchema} />

      {/* Atmospheric Physics Overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none" aria-hidden="true">
        <div className="ambient-aura absolute top-0 left-1/2 h-[800px] w-full -translate-x-1/2 opacity-[var(--ambient-opacity,0.4)] blur-[100px]" />
        <div className="bg-infrastructure-grid absolute inset-0 opacity-[0.05]" />
      </div>

      {/* Content Injection Hub */}
      <main className="relative z-10 animate-in fade-in slide-in-from-bottom-2 duration-1000">
        <div className="flex justify-center pt-24 pb-4">
          <span className="text-text-muted font-mono text-[9px] font-black uppercase tracking-[0.4em] opacity-40">
            Node_Sync_Ref: {AUDIT_STAMP} // Specialist_Stable
          </span>
        </div>
        {renderTemplate()}
      </main>
    </LayoutEngine>
  );
}
