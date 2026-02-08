/**
 * [ROUTE PAGE]: AREA_DETAIL_ENGINE v17.0.2 (STABILIZED)
 * [STRATEGY]: Local Authority Engine | Dynamic Template Orchestration | Adapter Pattern
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// --- 1. Infrastructure & Data ---
import { AREA_NODES } from "@/constants/area-nodes";
import { SITE_CONFIG } from "@/constants/site-config";
import type { AreaNode, TemplateMasterData, PageProps } from "@/types";

// --- 2. SEO & Schema Protocols ---
import JsonLd from "@/components/seo/JsonLd";
import { generateLocalBusinessSchema } from "@/lib/seo";

// --- 3. Specialist Templates ---
import LocalTemplate from "@/components/templates/local/Index";
import CorporateTemplate from "@/components/templates/corporate/Index";
import SalePageTemplate from "@/components/templates/salepage/Index";

/* [A] STATIC GENERATION PROTOCOL */
export async function generateStaticParams() {
  return AREA_NODES.map((area) => ({ slug: area.slug }));
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
    // [FIX]: Spread Readonly Array to Mutable Array for Next.js Metadata Type Compatibility
    keywords: [...(area.keywords || [])],
  };
}

/**
 * @component AreaDetailPage
 * @description หน้าเจาะลึกพื้นที่ให้บริการที่ปรับเปลี่ยน Template ตามความเหมาะสมของธุรกิจในพื้นที่นั้น
 * ใช้ Adapter Pattern เพื่อแปลงข้อมูลจาก AreaNode เป็น TemplateMasterData สำหรับ Template ที่แตกต่างกัน
 */
export default async function AreaDetailPage({ params }: PageProps<{ slug: string }>) {
  const { slug } = await params;
  const area = AREA_NODES.find((a) => a.slug === slug);

  if (!area) notFound();

  // [SCHEMA]: สร้าง Local Business Schema เพื่อเพิ่มความน่าเชื่อถือในสายตา Google
  const localSchema = generateLocalBusinessSchema(area);

  /**
   * [ADAPTER ENGINE]: แปลงข้อมูลจาก AreaNode -> TemplateMasterData
   * สำหรับ Corporate และ SalePage Template ที่ต้องการโครงสร้างข้อมูลแบบ Enterprise
   */
  const transformToMasterData = (
    baseArea: AreaNode,
    category: TemplateMasterData["category"],
  ): TemplateMasterData => {
    return {
      id: baseArea.slug,
      title: baseArea.title,
      description: baseArea.description,
      priceValue: 0, // Dynamic Pricing or Consult Base
      price: "ประเมินตามจริง",
      currency: "THB",
      unit: "โปรเจกต์",
      category: category,
      templateSlug: baseArea.templateSlug,
      priority: baseArea.priority,
      image: baseArea.heroImage,
      benefits: [
        ...baseArea.keywords,
        `รองรับลูกค้าในพื้นที่ ${baseArea.province} และ ${baseArea.districts.slice(0, 2).join(", ")}`,
        "ระบบเว็บไซต์ความเร็วสูง (High-Performance)",
      ],
      coreFeatures: baseArea.keywords.map((kw, idx) => ({
        title: kw,
        description:
          idx === 0
            ? `บริการ ${kw} ที่ออกแบบมาเพื่อคน ${baseArea.province} โดยเฉพาะ`
            : `ยกระดับมาตรฐานธุรกิจด้วยระบบ ${kw} ระดับมืออาชีพ`,
        icon: idx % 2 === 0 ? "MapPin" : "Zap",
      })),
      faqs: [
        {
          question: `บริการทำเว็บไซต์ใน ${baseArea.province} ราคาเริ่มต้นเท่าไหร่?`,
          answer: `สำหรับพื้นที่ ${baseArea.province} ทางเรามีแพ็กเกจเริ่มต้นที่คุ้มค่า โดยประเมินจากฟังก์ชันที่ธุรกิจคุณต้องใช้จริง เพื่อให้ได้ผลลัพธ์ที่ดีที่สุดครับ`,
        },
        {
          question: `ทีมงานดูแลครอบคลุมถึงอำเภอไหนบ้างใน ${baseArea.province}?`,
          answer: `เราให้บริการครอบคลุมทั้ง ${baseArea.districts.join(", ")} และพื้นที่ใกล้เคียงครับ สามารถนัด Online Meeting เพื่อคุยรายละเอียดได้ทันที`,
        },
      ],
    };
  };

  /**
   * [RENDER ORCHESTRATOR]: เลือก Template และ Inject Data ที่ผ่านการแปลงแล้ว
   */
  const renderTemplate = () => {
    switch (area.templateSlug) {
      case "corporate": {
        // Corporate Template ต้องการ TemplateMasterData
        const corporateData = transformToMasterData(area, "business");
        return <CorporateTemplate data={corporateData} />;
      }

      case "salepage": {
        // SalePage Template ต้องการ TemplateMasterData
        const salePageData = transformToMasterData(area, "landing");
        return <SalePageTemplate data={salePageData} />;
      }

      case "local":
      default: {
        // Local Template ออกแบบมาเพื่อรับ AreaNode โดยตรง (Best Fit)
        return <LocalTemplate data={area} />;
      }
    }
  };

  return (
    <div className="bg-surface-main relative min-h-screen overflow-hidden">
      {/* [VISUAL INFRASTRUCTURE]: เลเยอร์บรรยากาศเพื่อยกระดับความพรีเมียม */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.05] select-none"
        aria-hidden="true"
      >
        <div className="ambient-aura absolute top-0 left-1/2 h-[800px] w-full -translate-x-1/2 opacity-[0.12] blur-[100px]" />
        <div className="bg-infrastructure-grid absolute inset-0" />
      </div>

      <JsonLd data={localSchema} />

      <main className="animate-in fade-in relative z-10 duration-1000">{renderTemplate()}</main>
    </div>
  );
}
