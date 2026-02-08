/**
 * [ROUTE PAGE]: SERVICE_DETAIL_RENDERER v17.0.2 (STABILIZED)
 * [STRATEGY]: Outcome-Driven Architecture | Adapter Pattern | SEO Authority
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// --- 1. Infrastructure & Data ---
import { MASTER_REGISTRY } from "@/constants/master-registry";
import { SITE_CONFIG } from "@/constants/site-config";
import type { PageProps, AreaNode, TemplateMasterData } from "@/types";

// --- 2. SEO & Schema Protocols ---
import JsonLd from "@/components/seo/JsonLd";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/seo";

// --- 3. Templates ---
import CorporateTemplate from "@/components/templates/corporate/Index";
import SalePageTemplate from "@/components/templates/salepage/Index";
import CatalogTemplate from "@/components/templates/catalog/Index";
import LocalTemplate from "@/components/templates/local/Index";
import BioTemplate from "@/components/templates/bio/Index";

/* [A] STATIC GENERATION ENGINE */
export async function generateStaticParams() {
  return MASTER_REGISTRY.map((service) => ({
    slug: service.templateSlug,
  }));
}

/* [B] SEO METADATA ENGINE */
export async function generateMetadata({ params }: PageProps<{ slug: string }>): Promise<Metadata> {
  const { slug } = await params;
  const service = MASTER_REGISTRY.find((s) => s.templateSlug === slug);

  if (!service) return { title: "404 Not Found" };

  return {
    title: `${service.title} | แผนงานเว็บไซต์เชิงกลยุทธ์ | ${SITE_CONFIG.brandName}`,
    description: `ยกระดับธุรกิจของคุณด้วย ${service.title}: ${service.description} วางระบบโครงสร้างให้แข็งแกร่งและติดอันดับการค้นหาในปี 2026`,
    alternates: { canonical: `${SITE_CONFIG.siteUrl}/services/${slug}` },
    openGraph: {
      title: service.title,
      description: service.description,
      images: [service.image || "/images/og-default.webp"],
    },
  };
}

/**
 * @component ServiceDetailPage
 * @description หน้าแสดงรายละเอียดบริการที่ปรับเปลี่ยน Template ตามความเหมาะสมของประเภทโซลูชัน
 */
export default async function ServiceDetailPage({ params }: PageProps<{ slug: string }>) {
  const { slug } = await params;
  const service = MASTER_REGISTRY.find((s) => s.templateSlug === slug);

  if (!service) notFound();

  // [SEO SCHEMAS]: ยืนยันตัวตนบริการในสายตา Google
  const serviceSchema = generateServiceSchema(service);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "บริการทั้งหมด", item: `${SITE_CONFIG.siteUrl}/services` },
    { name: service.title, item: `${SITE_CONFIG.siteUrl}/services/${slug}` },
  ]);

  /**
   * [ADAPTER]: แปลง TemplateMasterData -> AreaNode
   * สำหรับกรณีใช้ LocalTemplate กับข้อมูลบริการทั่วไป
   */
  const adaptToAreaNode = (data: TemplateMasterData): AreaNode => {
    return {
      slug: data.templateSlug,
      province: "ทั่วประเทศ (Nationwide)",
      title: data.title,
      description: data.description,
      seoTitle: data.title,
      seoDescription: data.description,
      priority: data.priority,
      templateSlug: "local",
      districts: ["รองรับทุกพื้นที่", "Google Maps Optimized"],
      keywords: data.benefits,
      heroImage: data.image || "/images/templates/preview.webp",
      longDescription:
        "บริการนี้ออกแบบมาเพื่อธุรกิจที่ต้องการเจาะกลุ่มลูกค้าในพื้นที่เฉพาะเจาะจง (Local SEO) เพื่อเพิ่มยอดขายและสร้างฐานลูกค้าที่มั่นคง",
    };
  };

  /**
   * [ORCHESTRATION]: เลือก Template ที่เหมาะสมกับโมเดลธุรกิจ
   * ส่ง Data เข้าไปตรงๆ ได้เลยเพราะเราแก้ Type ใน Template ให้รองรับ TemplateMasterData แล้ว
   */
  const renderTemplate = () => {
    switch (service.templateSlug) {
      case "corporate":
        return <CorporateTemplate data={service} />;

      case "salepage":
        return <SalePageTemplate data={service} />;

      case "catalog":
        return <CatalogTemplate data={service} />;

      case "bio":
        return <BioTemplate data={service} />;

      case "local":
        // LocalTemplate ยังต้องการ AreaNode อยู่ จึงต้องใช้ Adapter
        return <LocalTemplate data={adaptToAreaNode(service)} />;

      default:
        // Fallback เป็น Corporate หากไม่ตรงเงื่อนไข
        return <CorporateTemplate data={service} />;
    }
  };

  return (
    <div className="bg-surface-main relative min-h-screen overflow-hidden">
      {/* [ATMOSPHERIC INFRASTRUCTURE]: สร้างมิติทางสายตาด้วยระบบแสง Aura */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.05] select-none"
        aria-hidden="true"
      >
        <div className="ambient-aura absolute top-0 left-1/2 h-[800px] w-full -translate-x-1/2 opacity-[0.12] blur-[100px]" />
        <div className="bg-infrastructure-grid absolute inset-0" />
      </div>

      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />

      <main className="animate-in fade-in slide-in-from-bottom-4 relative z-10 duration-700">
        {renderTemplate()}
      </main>
    </div>
  );
}
