/**
 * [ROUTE PAGE]: AREA_DETAIL_ENGINE v17.5.5 (PATH_FIXED)
 * [STRATEGY]: Local Authority Engine | Linked Data Graph | Deterministic Rendering
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// --- 1. Infrastructure & Core Data ---
import { AREA_NODES } from "@/constants/area-nodes";
import { SITE_CONFIG } from "@/constants/site-config";
import type { PageProps, AreaNode, TemplateMasterData } from "@/types";
import { constructMetadata } from "@/lib/seo-utils";

// --- 2. SEO & Schema Protocols ---
import JsonLd from "@/components/seo/JsonLd";
import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateSchemaGraph,
} from "@/lib/schema";

// --- 3. Specialist Templates & Layout Engine ---
// [FIX]: ปรับ Import Path ให้ตรงกับชื่อโฟลเดอร์จริง (new-service-name)
import LocalTemplate from "@/components/templates/new-service-name/index";
import CorporateTemplate from "@/components/templates/corporate/Index";
import SalePageTemplate from "@/components/templates/salepage/Index";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";

/* [A] STATIC GENERATION ENGINE (SSG) */
export async function generateStaticParams() {
  return AREA_NODES.map((area) => ({
    slug: area.slug,
  }));
}

/* [B] SEO METADATA ENGINE */
export async function generateMetadata(props: PageProps<{ slug: string }>): Promise<Metadata> {
  const params = await props.params;
  const area = AREA_NODES.find((a) => a.slug === params.slug);

  if (!area) return { title: "404 Not Found" };

  return constructMetadata({
    title: area.seoTitle || area.title,
    description: area.seoDescription || area.description,
    path: `/areas/${params.slug}`,
    image: area.heroImage,
    keywords: area.keywords,
  });
}

/**
 * [DETERMINISTIC ADAPTER]: แปลงข้อมูล AreaNode ให้รองรับโครงสร้าง TemplateMasterData
 */
const adaptAreaToTemplateData = (area: AreaNode): TemplateMasterData => {
  const generatedFaqs = (area.keywords || []).slice(0, 3).map((kw: string) => ({
    question: `บริการ ${kw} ในจังหวัด ${area.province} มีจุดเด่นอย่างไร?`,
    answer: `เราเน้นการทำ ${kw} ที่ออกแบบมาเพื่อพฤติกรรมลูกค้าใน ${area.province} โดยเฉพาะ พร้อมโครงสร้าง Technical SEO ที่ช่วยให้ธุรกิจของคุณแซงหน้าคู่แข่งในพื้นที่ได้ทันทีครับ`,
  }));

  const generatedFeatures = [
    {
      title: "Local SEO Optimized",
      description: `ปรับแต่งโครงสร้างให้ติดอันดับการค้นหาใน ${area.province}`,
      icon: "MapPin",
    },
    { title: "High Performance", description: "โหลดไว รองรับพฤติกรรมลูกค้าในพื้นที่", icon: "Zap" },
    {
      title: "Conversion Ready",
      description: "ออกแบบมาเพื่อปิดการขายลูกค้าท้องถิ่นโดยเฉพาะ",
      icon: "Target",
    },
  ];

  return {
    id: `NODE-${area.slug.toUpperCase()}`,
    templateSlug: area.templateSlug || "local",
    title: area.title,
    description: area.description,
    image: area.heroImage,
    price: "ประเมินตามพื้นที่",
    priceValue: 0,
    currency: "THB",
    unit: "โปรเจกต์",
    faqs: generatedFaqs,
    coreFeatures: generatedFeatures,
    benefits: [
      ...(area.keywords || []),
      `มาตรฐานวิศวกรรมจาก Specialist ในพื้นที่ ${area.province}`,
      "Technical SEO Optimized 100%",
    ],
    theme: { primary: "#2563eb", secondary: "#1e40af" },
    category: "business",
    priority: 99,
    keywords: area.keywords || [],
    isFeatured: false,
    isPopular: false,
  };
};

/**
 * @component AreaDetailPage
 * @description หน้าแสดงข้อมูลรายจังหวัดที่เน้นความน่าเชื่อถือและการทำอันดับ Local Search 2026
 */
export default async function AreaDetailPage(props: PageProps<{ slug: string }>) {
  const params = await props.params;

  // 1. Data Retrieval
  const area = AREA_NODES.find((a) => a.slug === params.slug);
  if (!area) notFound();

  // 2. [SEO]: Unified Schema Graph
  const breadcrumbData = [
    { name: "หน้าแรก", item: "/" },
    { name: "พื้นที่ให้บริการ", item: "/areas" },
    { name: area.province, item: `/areas/${params.slug}` },
  ];

  const fullSchema = generateSchemaGraph([
    generateBreadcrumbSchema(breadcrumbData),
    generateLocalBusinessSchema(area),
  ]);

  const AUDIT_STAMP = SITE_CONFIG.project.version;

  /**
   * [TEMPLATE SWITCHER]: เลือกเรนเดอร์ UI ตามยุทธศาสตร์ของพื้นที่
   */
  const renderTemplate = () => {
    // Adapter สำหรับ Template อื่นๆ ที่ไม่ใช่ Local
    const templateData = adaptAreaToTemplateData(area);

    switch (area.templateSlug) {
      case "corporate":
        return <CorporateTemplate data={templateData} />;
      case "salepage":
        return <SalePageTemplate data={templateData} />;
      case "local":
      default:
        // LocalTemplate รองรับ AreaNode โดยตรง
        return <LocalTemplate data={area} />;
    }
  };

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={fullSchema} />

      <main className="animate-in fade-in slide-in-from-bottom-2 relative z-10 duration-1000">
        <div className="flex justify-center pt-24 pb-4">
          <span className="text-text-muted font-mono text-[9px] font-black tracking-[0.4em] uppercase opacity-40">
            Area_Node_Sync: v{AUDIT_STAMP} // Specialist_Stable
          </span>
        </div>

        {renderTemplate()}
      </main>
    </LayoutEngine>
  );
}
