/**
 * [ROUTE PAGE]: SERVICE_DETAIL_RENDERER v17.1.2 (FINAL_CLEAN)
 * [STRATEGY]: Outcome-Driven Architecture | SSG Optimization | Strict Typing
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// --- 1. Infrastructure & Data ---
// [FIX]: Import จาก constants ตามโครงสร้างไฟล์จริง
import { MASTER_REGISTRY } from "@/constants/master-registry";
import { SITE_CONFIG } from "@/constants/site-config";
import type { PageProps } from "@/types";

// --- 2. SEO & Schema Protocols ---
import JsonLd from "@/components/seo/JsonLd";

// --- 3. Templates (The Strategies) ---
import CorporateTemplate from "@/components/templates/corporate/Index";
import SalePageTemplate from "@/components/templates/salepage/Index";
import CatalogTemplate from "@/components/templates/catalog/Index";
import BioTemplate from "@/components/templates/bio/Index";

/* [A] STATIC GENERATION ENGINE (SSG) */
export async function generateStaticParams() {
  return MASTER_REGISTRY.map((service) => ({
    slug: service.templateSlug,
  }));
}

/* [B] SEO METADATA ENGINE */
export async function generateMetadata({ params }: PageProps<{ slug: string }>): Promise<Metadata> {
  // [NEXT.js 15]: Await params before access
  const { slug } = await params;
  const service = MASTER_REGISTRY.find((s) => s.templateSlug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "ขออภัย ไม่พบข้อมูลบริการที่คุณต้องการ",
    };
  }

  return {
    title: `${service.title} | ${SITE_CONFIG.brandName}`,
    description: service.description,
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
 * @description หน้าแสดงรายละเอียดบริการที่ "ฉลาดเลือก" Template ตามประเภทข้อมูล (Strategy Pattern)
 */
export default async function ServiceDetailPage({ params }: PageProps<{ slug: string }>) {
  // [NEXT.js 15]: Await params
  const { slug } = await params;

  // 1. Fetch Data
  const service = MASTER_REGISTRY.find((s) => s.templateSlug === slug);

  // 2. 404 Guard
  if (!service) notFound();

  // 3. Prepare SEO Schema (Simple Breadcrumb)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_CONFIG.siteUrl}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${SITE_CONFIG.siteUrl}/services/${slug}`,
      },
    ],
  };

  /**
   * [TEMPLATE SWITCHER]: หัวใจสำคัญของการเลือก UI
   */
  const renderTemplate = () => {
    // ใช้ category หรือ templateSlug ในการตัดสินใจเลือก Template
    switch (service.templateSlug) {
      case "corporate":
        return <CorporateTemplate data={service} />;

      case "salepage":
        return <SalePageTemplate data={service} />;

      case "catalog":
        return <CatalogTemplate data={service} />;

      case "bio":
        return <BioTemplate data={service} />;

      default:
        // Fallback Strategy: ใช้ Corporate Template เป็นค่าเริ่มต้น
        return <CorporateTemplate data={service} />;
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
      <JsonLd data={breadcrumbSchema} />

      <main className="animate-in fade-in slide-in-from-bottom-4 relative z-10 duration-700">
        {renderTemplate()}
      </main>
    </div>
  );
}
