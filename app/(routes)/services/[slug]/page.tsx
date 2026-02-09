/**
 * [ROUTE PAGE]: SERVICE_DETAIL_RENDERER v17.5.1 (LINT_FIXED)
 * [STRATEGY]: Outcome-Driven Architecture | Graph-Based SEO | Lean Performance
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// --- 1. Infrastructure & Core Data ---
import { MASTER_REGISTRY } from "@/constants/master-registry";
import { SITE_CONFIG } from "@/constants/site-config";
import type { PageProps, AreaNode, TemplateMasterData } from "@/types";
import { constructMetadata } from "@/lib/seo-utils";

// --- 2. SEO & Schema Protocols ---
import JsonLd from "@/components/seo/JsonLd";
import { generateServiceSchema, generateBreadcrumbSchema, generateSchemaGraph } from "@/lib/schema";

// --- 3. Templates (The Strategic Nodes) ---
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import CorporateTemplate from "@/components/templates/corporate/Index";
import SalePageTemplate from "@/components/templates/salepage/Index";
import CatalogTemplate from "@/components/templates/catalog/Index";
import BioTemplate from "@/components/templates/bio/Index";
import LocalTemplate from "@/components/templates/local_service/index";
import SeoAgencyTemplate from "@/components/templates/seo_agency/index";
import HotelTemplate from "@/components/templates/hotelresort/Index";

/* [A] STATIC GENERATION ENGINE (SSG) */
export async function generateStaticParams() {
  return MASTER_REGISTRY.map((service) => ({
    slug: service.templateSlug,
  }));
}

/* [B] SEO METADATA ENGINE */
export async function generateMetadata(props: PageProps<{ slug: string }>): Promise<Metadata> {
  const params = await props.params;
  const service = MASTER_REGISTRY.find((s) => s.templateSlug === params.slug);

  if (!service) return { title: "Service Not Found" };

  return constructMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${params.slug}`,
    image: service.image,
    keywords: service.keywords,
  });
}

/**
 * @component ServiceDetailPage
 * @description หน้าควบคุมการแสดงผลรายละเอียดบริการที่ใช้ระบบ Template Switcher
 */
export default async function ServiceDetailPage(props: PageProps<{ slug: string }>) {
  const params = await props.params;

  // [FIX 1]: Explicitly type the variable to use the imported interface
  const service: TemplateMasterData | undefined = MASTER_REGISTRY.find(
    (s) => s.templateSlug === params.slug,
  );

  if (!service) notFound();

  // 2. [SEO]: สร้าง Schema Graph
  const breadcrumbData = [
    { name: "หน้าแรก", item: SITE_CONFIG.siteUrl },
    { name: "บริการทั้งหมด", item: `${SITE_CONFIG.siteUrl}/services` },
    { name: service.title, item: `${SITE_CONFIG.siteUrl}/services/${params.slug}` },
  ];

  const fullSchema = generateSchemaGraph([
    generateBreadcrumbSchema(breadcrumbData),
    generateServiceSchema(service),
  ]);

  const DEPLOY_REF = SITE_CONFIG.project.version;

  /**
   * [TEMPLATE SWITCHER]: Strategy Pattern
   * ระบบเลือกการแสดงผลตามประเภทของบริการที่กำหนดใน Master Registry
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
        // [FIX 2]: Use safe type assertion instead of 'any'
        // We assume LocalTemplate handles the data mapping or that TemplateMasterData
        // overlaps sufficiently with AreaNode for this specific view.
        return <LocalTemplate data={service as unknown as AreaNode} />;
      case "seo_agency":
        return <SeoAgencyTemplate data={service} />;
      case "hotelresort":
        return <HotelTemplate data={service} />;
      default:
        return <CorporateTemplate data={service} />;
    }
  };

  return (
    // [THEME INJECTION]: ส่งค่า Theme เข้าสู่ LayoutEngine เพื่อเปลี่ยนสีทั้งหน้า
    <LayoutEngine spacing="none" theme={service.theme}>
      <JsonLd data={fullSchema} />

      <main className="animate-in fade-in slide-in-from-bottom-2 relative z-10 duration-1000">
        <div className="flex justify-center pt-24 pb-4">
          <span className="text-text-muted font-mono text-[9px] font-black tracking-[0.4em] uppercase opacity-40">
            Node_Deployment: v{DEPLOY_REF} // Specialist_Stable
          </span>
        </div>

        {renderTemplate()}
      </main>
    </LayoutEngine>
  );
}
