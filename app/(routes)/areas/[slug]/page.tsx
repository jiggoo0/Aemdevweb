/**
 * [ROUTE PAGE]: AREA_DETAIL_ENGINE v17.1.0 (FINAL_STABILIZED)
 * [STRATEGY]: Local Authority Engine | Dynamic Template Orchestration | Adapter Pattern
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// --- 1. Infrastructure & Data ---
// [DATA SOURCE]: ตรวจสอบ Path ให้ตรงกับที่เก็บไฟล์จริง (เช่น @/data/area-nodes)
import { AREA_NODES } from "@/constants/area-nodes"; 
import { SITE_CONFIG } from "@/constants/site-config";
import type { AreaNode, TemplateMasterData, PageProps, ServiceCategory } from "@/types";

// --- 2. SEO & Schema Protocols ---
import JsonLd from "@/components/seo/JsonLd";
// Import Function สร้าง Schema สำหรับ Local Business
import { generateLocalBusinessSchema } from "@/components/templates/local/Schema";

// --- 3. Specialist Templates ---
import LocalTemplate from "@/components/templates/local/Index";
import CorporateTemplate from "@/components/templates/corporate/Index";
import SalePageTemplate from "@/components/templates/salepage/Index";

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
      images: [
        {
          url: area.heroImage || "/images/og-default.webp",
          alt: area.title,
        },
      ],
      locale: "th_TH",
      type: "website",
    },
    // [FIX]: Spread Readonly Array -> Mutable Array for Next.js Metadata Type
    keywords: [...(area.keywords || [])],
  };
}

/**
 * [ADAPTER UTILITY]: แปลงข้อมูลจาก AreaNode -> TemplateMasterData
 * ใช้ Logic นี้เพื่อ Inject ความเป็น "Nationwide Service" เข้าไปในเนื้อหา
 * เพื่อให้สามารถนำข้อมูลจังหวัดไปแสดงผลใน Template แบบ Corporate หรือ SalePage ได้
 */
const adaptAreaToMasterData = (
  baseArea: AreaNode,
  category: ServiceCategory,
): TemplateMasterData => {
  return {
    id: `AREA-${baseArea.slug.toUpperCase()}`,
    title: baseArea.title,
    description: baseArea.description,
    priceValue: 0,
    price: "ประเมินตามจริง",
    currency: "THB",
    unit: "โปรเจกต์",
    category: category,
    templateSlug: baseArea.templateSlug,
    priority: baseArea.priority,
    image: baseArea.heroImage,
    
    // [LOGIC]: ผสม Keywords เข้ากับจุดเด่นพื้นที่
    benefits: [
      ...baseArea.keywords,
      `บริการมาตรฐาน AEMDEVWEB ครอบคลุมพื้นที่ ${baseArea.province}`,
      `รองรับเขต ${baseArea.districts.slice(0, 3).join(", ")} และพื้นที่ใกล้เคียง`,
      "ทีมงาน Technical SEO ดูแลระบบหลังบ้าน 100%",
    ],

    // [LOGIC]: สร้าง Features จาก Keywords
    coreFeatures: baseArea.keywords.map((kw, idx) => ({
      title: kw,
      description:
        idx === 0
          ? `โซลูชัน ${kw} ที่ปรับจูนมาเพื่อธุรกิจใน ${baseArea.province} โดยเฉพาะ`
          : `ยกระดับขีดความสามารถการแข่งขันด้วยเทคโนโลยี Next.js`,
      icon: idx % 2 === 0 ? "MapPin" : "Zap", // สลับไอคอนเพื่อความสวยงาม
    })),

    // [LOGIC]: สร้าง FAQ เฉพาะพื้นที่
    faqs: [
      {
        question: `อยู่ ${baseArea.province} ใช้บริการ AEMDEVWEB ได้ไหม?`,
        answer: `ได้แน่นอนครับ เราให้บริการทั่วประเทศ (Nationwide Service) ด้วยระบบการทำงานแบบ Remote Professional พร้อมประชุมผ่าน Zoom/Google Meet ได้ทันทีครับ`,
      },
      {
        question: `ราคาทำเว็บไซต์สำหรับธุรกิจใน ${baseArea.province} เริ่มต้นเท่าไหร่?`,
        answer: `เราประเมินราคาตามสเกลงานจริงเพื่อให้คุ้มค่าที่สุดสำหรับธุรกิจของคุณ เริ่มต้นวางแผนระบบให้ฟรีครับ`,
      },
    ],
  };
};

/**
 * @component AreaDetailPage
 * @description หน้า Landing Page รายจังหวัด (Dynamic Route)
 */
export default async function AreaDetailPage({ params }: PageProps<{ slug: string }>) {
  // [NEXT.js 15]: Await params
  const { slug } = await params;
  
  // 1. Fetch Area Data
  const area = AREA_NODES.find((a) => a.slug === slug);

  // 2. 404 Guard
  if (!area) notFound();

  // 3. Prepare Schema
  const localSchema = generateLocalBusinessSchema(area);

  /**
   * [RENDER ORCHESTRATOR]: เลือก Template ตาม Strategy ของแต่ละพื้นที่
   */
  const renderTemplate = () => {
    switch (area.templateSlug) {
      case "corporate": {
        // แปลงข้อมูลจังหวัด เป็นข้อมูลองค์กร แล้วใช้ Corporate Template
        const corporateData = adaptAreaToMasterData(area, "business");
        return <CorporateTemplate data={corporateData} />;
      }

      case "salepage": {
        // แปลงข้อมูลจังหวัด เป็นข้อมูล SalePage แล้วใช้ SalePage Template
        const salePageData = adaptAreaToMasterData(area, "landing");
        return <SalePageTemplate data={salePageData} />;
      }

      case "local":
      default: {
        // ใช้ Local Template โดยตรง (ออกแบบมาเพื่อรับ AreaNode อยู่แล้ว)
        return <LocalTemplate data={area} />;
      }
    }
  };

  return (
    <div className="bg-surface-main relative min-h-screen overflow-hidden">
      

      {/* [ATMOSPHERIC INFRASTRUCTURE] */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.05] select-none"
        aria-hidden="true"
      >
        <div className="ambient-aura absolute top-0 left-1/2 h-[800px] w-full -translate-x-1/2 opacity-[0.12] blur-[100px]" />
        <div className="bg-infrastructure-grid absolute inset-0" />
      </div>

      {/* SEO Injection */}
      <JsonLd data={localSchema} />

      {/* Content Injection */}
      <main className="animate-in fade-in relative z-10 duration-1000">
        {renderTemplate()}
      </main>
    </div>
  );
}
