/**
 * [ROUTE PAGE]: SERVICE_DETAIL_RENDERER v17.9.2 (ZERO_FLICKER_PATCHED)
 * [STRATEGY]: Data Adapter Pattern | Motion Conflict Resolution | Zero-Flicker
 * [MAINTAINER]: นายเอ็มซ่ามากส์ (AEMDEVWEB Specialist Team)
 */

import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// --- 1. Infrastructure & Core Data ---
import { MASTER_REGISTRY } from "@/constants/master-registry";
import { SITE_CONFIG } from "@/constants/site-config";
import type { PageProps, AreaNode } from "@/types";

// --- 2. SEO & Schema Protocols ---
import { constructMetadata } from "@/lib/seo-utils";
import { generateServiceSchema, generateBreadcrumbSchema, generateSchemaGraph } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";

// --- 3. Templates (The Strategic Nodes) ---
import CorporateTemplate from "@/components/templates/corporate/Index";
import SalePageTemplate from "@/components/templates/salepage/Index";
import CatalogTemplate from "@/components/templates/catalog/Index";
import BioTemplate from "@/components/templates/bio/Index";
import SeoAgencyTemplate from "@/components/templates/seo_agency/index";
import HotelTemplate from "@/components/templates/hotelresort/Index";
import LocalTemplate from "@/components/templates/local-authority/index";

/**
 * [SSG]: สร้างเส้นทางล่วงหน้าสำหรับทุกบริการใน Registry
 */
export async function generateStaticParams() {
  return MASTER_REGISTRY.map((service) => ({
    slug: service.templateSlug,
  }));
}

/**
 * [SEO]: Metadata เจาะจงแต่ละบริการพร้อมระบบ Fallback
 */
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
 * @page ServiceDetailPage
 * @description หน้าแสดงผลรายละเอียดบริการ โดยใช้ Adapter Pattern เพื่อเลือกใช้ Template ที่ถูกต้อง
 */
export default async function ServiceDetailPage(props: PageProps<{ slug: string }>) {
  const params = await props.params;
  const service = MASTER_REGISTRY.find((s) => s.templateSlug === params.slug);

  if (!service) notFound();

  // [SCHEMA]: Semantic Graph Connection
  const fullSchema = generateSchemaGraph([
    generateBreadcrumbSchema([
      { name: "หน้าแรก", item: SITE_CONFIG.siteUrl },
      { name: "บริการทั้งหมด", item: `${SITE_CONFIG.siteUrl}/services` },
      { name: service.title, item: `${SITE_CONFIG.siteUrl}/services/${params.slug}` },
    ]),
    generateServiceSchema(service),
  ]);

  /**
   * [ADAPTER]: เลือก Template ตามข้อมูล templateSlug ใน Registry
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
      case "seo_agency":
        return <SeoAgencyTemplate data={service} />;
      case "hotelresort":
        return <HotelTemplate data={service} />;

      case "local-authority": {
        const safeAreaData: AreaNode = {
          slug: service.templateSlug,
          province: "ประเทศไทย",
          title: service.title,
          description: service.description,
          seoTitle: service.title,
          seoDescription: service.description,
          priority: service.priority,
          templateSlug: "local-authority",
          districts: [],
          keywords: service.keywords || [],
          heroImage: service.image || "/images/service/local-node.webp",
          localContext: {
            marketInsight: "Market Insight",
            technicalApproach: "Technical SEO",
            localStrength: "Specialist",
          },
        };
        return <LocalTemplate data={safeAreaData} />;
      }

      default:
        return <CorporateTemplate data={service} />;
    }
  };

  return (
    <>
      <JsonLd data={fullSchema} />

      {/* [NODE SYSTEM BADGE]
        วางเป็น Element อิสระ (Relative) เพื่อไม่ให้กระทบ Flow ของ Template
        ใช้ pointer-events-none เพื่อให้คลิกทะลุได้หากไปทับปุ่มอื่น
      */}
      <div className="pointer-events-none relative z-50 flex justify-center pt-24 pb-4">
        <div className="border-border bg-surface-card/50 flex items-center gap-2 rounded-full border px-4 py-1.5 backdrop-blur-md">
          <div className="bg-brand-primary h-1 w-1 animate-pulse rounded-full" />
          <span className="text-text-muted font-mono text-[9px] font-black tracking-[0.4em] uppercase opacity-60">
            Service_Node: v{SITE_CONFIG.project.version}
          </span>
        </div>
      </div>

      {/* [TEMPLATE CONTENT]
        ปล่อยให้ Template (เช่น SalePageTemplate) จัดการ LayoutEngine และ Theme เอง 100%
        ป้องกันปัญหา Double Layout Injection ที่ทำให้จอกระพริบ
      */}
      {renderTemplate()}
    </>
  );
}
