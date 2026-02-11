/**
 * [ROUTE PAGE]: AREA_DETAIL_ENGINE v17.5.5 (STABILIZED)
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

// --- 2. SEO & Schema Protocols ---
import { constructMetadata } from "@/lib/seo-utils";
import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateSchemaGraph,
} from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";

// --- 3. Templates ---
import CorporateTemplate from "@/components/templates/corporate/Index";
import SalePageTemplate from "@/components/templates/salepage/Index";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";

// [REFACTOR]: Changed from 'new-service-name' to 'local-authority'
import LocalTemplate from "@/components/templates/local-authority/index";

/* [A] STATIC GENERATION ENGINE (SSG) */
export async function generateStaticParams() {
  return AREA_NODES.map((area) => ({
    slug: area.slug,
  }));
}

/* [B] SEO METADATA ENGINE */
export async function generateMetadata(props: PageProps<{ slug: string }>): Promise<Metadata> {
  const params = await props.params;
  const area: AreaNode | undefined = AREA_NODES.find((a) => a.slug === params.slug);

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
    answer: `เราเน้นการทำ ${kw} ที่ออกแบบมาเพื่อพฤติกรรมลูกค้าใน ${area.province} โดยเฉพาะ พร้อมโครงสร้าง Technical SEO ที่ช่วยให้ธุรกิจของคุณแซงหน้าคู่แข่งได้ทันทีครับ`,
  }));

  return {
    id: `NODE-${area.slug.toUpperCase()}`,
    templateSlug: area.templateSlug || "local-authority",
    title: area.title,
    description: area.description,
    image: area.heroImage,
    price: "ประเมินตามพื้นที่",
    priceValue: 0,
    currency: "THB",
    unit: "โปรเจกต์",
    faqs: generatedFaqs,
    coreFeatures: [
      {
        title: "Local SEO Optimized",
        description: `เจาะจงพื้นที่ ${area.province}`,
        icon: "MapPin",
      },
      { title: "High Performance", description: "โหลดไวตามมาตรฐาน Web Vitals", icon: "Zap" },
      { title: "Conversion Ready", description: "ปิดการขายลูกค้าท้องถิ่น", icon: "Target" },
    ],
    benefits: [
      ...(area.keywords || []),
      `มาตรฐานวิศวกรรมในพื้นที่ ${area.province}`,
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

export default async function AreaDetailPage(props: PageProps<{ slug: string }>) {
  const params = await props.params;
  const area: AreaNode | undefined = AREA_NODES.find((a) => a.slug === params.slug);

  if (!area) notFound();

  const fullSchema = generateSchemaGraph([
    generateBreadcrumbSchema([
      { name: "หน้าแรก", item: "/" },
      { name: "พื้นที่ให้บริการ", item: "/areas" },
      { name: area.province, item: `/areas/${params.slug}` },
    ]),
    generateLocalBusinessSchema(area),
  ]);

  const renderTemplate = () => {
    // [STRICT_TYPING]: บังคับใช้ TemplateMasterData เพื่อยืนยันการใช้งาน Type ต่อ ESLint
    const templateData: TemplateMasterData = adaptAreaToTemplateData(area);

    switch (area.templateSlug) {
      case "corporate":
        return <CorporateTemplate data={templateData} />;
      case "salepage":
        return <SalePageTemplate data={templateData} />;
      case "local":
      case "local-authority": // [FIXED]: Updated case name
        return <LocalTemplate data={area} />;
      default:
        return <LocalTemplate data={area} />;
    }
  };

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={fullSchema} />
      <main className="animate-in fade-in slide-in-from-bottom-2 relative z-10 duration-1000">
        {/* Node Status Indicator */}
        <div className="flex justify-center pt-24 pb-4">
          <span className="text-text-muted font-mono text-[9px] font-black tracking-[0.4em] uppercase opacity-40">
            Area_Node_Sync: v{SITE_CONFIG.project.version}
          </span>
        </div>
        {renderTemplate()}
      </main>
    </LayoutEngine>
  );
}
