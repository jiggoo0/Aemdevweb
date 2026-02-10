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
import { constructMetadata } from "@/lib/seo-utils";

// --- 2. SEO & Schema Protocols ---
import JsonLd from "@/components/seo/JsonLd";
import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateSchemaGraph,
} from "@/lib/schema";

// --- 3. Specialist Templates & Layout Engine ---
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
 * ช่วยให้สามารถใช้เทมเพลตมาตรฐาน (Corporate/SalePage) ร่วมกับข้อมูลพิกัดได้
 */
const adaptAreaToTemplateData = (area: AreaNode): TemplateMasterData => {
  const generatedFaqs = (area.keywords || []).slice(0, 3).map((kw: string) => ({
    question: `บริการ ${kw} ในจังหวัด ${area.province} มีจุดเด่นอย่างไร?`,
    answer: `เราเน้นการทำ ${kw} ที่ออกแบบมาเพื่อพฤติกรรมลูกค้าใน ${area.province} โดยเฉพาะ พร้อมโครงสร้าง Technical SEO ที่ช่วยให้ธุรกิจของคุณแซงหน้าคู่แข่งได้ทันทีครับ`,
  }));

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
    coreFeatures: [
      { title: "Local SEO Optimized", description: `เจาะจงพื้นที่ ${area.province}`, icon: "MapPin" },
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
  const area = AREA_NODES.find((a) => a.slug === params.slug);
  if (!area) notFound();

  // Unified Schema Graph
  const fullSchema = generateSchemaGraph([
    generateBreadcrumbSchema([
      { name: "หน้าแรก", item: "/" },
      { name: "พื้นที่ให้บริการ", item: "/areas" },
      { name: area.province, item: `/areas/${params.slug}` },
    ]),
    generateLocalBusinessSchema(area),
  ]);

  const renderTemplate = () => {
    const templateData = adaptAreaToTemplateData(area);
    switch (area.templateSlug) {
      case "corporate": return <CorporateTemplate data={templateData} />;
      case "salepage": return <SalePageTemplate data={templateData} />;
      case "local":
      default: return <LocalTemplate data={area} />;
    }
  };

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={fullSchema} />
      <main className="animate-in fade-in slide-in-from-bottom-2 relative z-10 duration-1000">
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
