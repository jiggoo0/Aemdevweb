/**
 * [ROUTE PAGE]: SERVICE_DETAIL_RENDERER v17.3.10 (STABILIZED)
 * [STRATEGY]: Outcome-Driven Architecture | Multi-Theme Logic | SSG Optimization
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// --- 1. Infrastructure & Data ---
import { MASTER_REGISTRY } from "@/constants/master-registry";
import { SITE_CONFIG } from "@/constants/site-config";
import type { PageProps } from "@/types";

// --- 2. SEO & Schema Protocols ---
import JsonLd from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/schema";

// --- 3. Templates (The Strategic Nodes) ---
// [FIXED]: ปรับ Path ของ LayoutEngine ให้ตรงกับตำแหน่งจริงในโฟลเดอร์ sections
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
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
  const { slug } = await params; // Next.js 16 Async API
  const service = MASTER_REGISTRY.find((s) => s.templateSlug === slug);

  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | ${SITE_CONFIG.brandName}`,
    description: service.description,
    alternates: { canonical: `${SITE_CONFIG.siteUrl}/services/${slug}` },
    openGraph: {
      title: service.title,
      description: service.description,
      images: [service.image || "/images/og-default.webp"],
      type: "website",
    },
    keywords: [...(service.keywords || [])],
  };
}

/**
 * @component ServiceDetailPage
 * @description หน้าแสดงรายละเอียดบริการที่ "ฉลาดเลือก" Template ตามยุทธศาสตร์การนำเสนอ
 */
export default async function ServiceDetailPage({ params }: PageProps<{ slug: string }>) {
  const { slug } = await params;

  // 1. Fetch Data (O(1) Memory Lookup)
  const service = MASTER_REGISTRY.find((s) => s.templateSlug === slug);
  if (!service) notFound();

  // 2. [SEO]: สร้าง Breadcrumb Graph เพื่อยืนยันสถาปัตยกรรมข้อมูล
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "หน้าแรก", item: SITE_CONFIG.siteUrl },
    { name: "บริการทั้งหมด", item: `${SITE_CONFIG.siteUrl}/services` },
    { name: service.title, item: `${SITE_CONFIG.siteUrl}/services/${slug}` },
  ]);

  // 3. [DETERMINISTIC STAMP]: ป้องกันปัญหา Hydration Mismatch
  const AUDIT_STAMP = SITE_CONFIG.project.version;

  /**
   * [TEMPLATE SWITCHER]: Strategy Pattern Implementation
   * เลือกเรนเดอร์ UI ตามประเภทของบริการที่กำหนดไว้ใน Registry
   */
  const renderTemplate = () => {
    const templateMap = {
      corporate: <CorporateTemplate data={service} />,
      salepage: <SalePageTemplate data={service} />,
      catalog: <CatalogTemplate data={service} />,
      bio: <BioTemplate data={service} />,
    };

    return templateMap[service.templateSlug as keyof typeof templateMap] || 
           <CorporateTemplate data={service} />;
  };

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={breadcrumbSchema} />

      {/* 01. ATMOSPHERIC INFRASTRUCTURE: เลเยอร์บรรยากาศแบบ Hybrid */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none" aria-hidden="true">
        <div className="bg-infrastructure-grid absolute inset-0 opacity-[0.05]" />
        {/* [v17.3.10]: เพิ่ม Default Fallback สำหรับ Ambient Opacity */}
        <div className="ambient-aura absolute top-0 left-1/2 h-[800px] w-full -translate-x-1/2 opacity-[var(--ambient-opacity,0.4)] blur-[100px]" />
      </div>

      {/* 02. CONTENT HUB: ศูนย์กลางการเรนเดอร์ยุทธศาสตร์ */}
      <main className="relative z-10 animate-in fade-in slide-in-from-bottom-2 duration-1000">
        <div className="flex justify-center pt-24 pb-4">
          <span className="text-text-muted font-mono text-[9px] font-black uppercase tracking-[0.4em] opacity-40">
            Node_Deployment: v{AUDIT_STAMP} // Specialist_Stable
          </span>
        </div>
        
        {/*  */}
        
        {renderTemplate()}
      </main>
    </LayoutEngine>
  );
}
