/**
 * [PAGE]: SERVICE_DETAIL_DISPATCHER v17.9.9 (STABILIZED_FINAL)
 * [STRATEGY]: Universal Template Renderer | Async-Route Compliance | Entity-Graph
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// --- Infrastructure & Core Data ---
import { MASTER_REGISTRY } from "@/constants/master-registry";
import { SITE_CONFIG } from "@/constants/site-config";
import type { PageProps, AreaNode } from "@/types";

// --- SEO & Schema Protocols ---
// [FIXED]: Import MetadataParams เพื่อใช้งานร่วมกับ constructMetadata ให้ครบวงจร (Type Hardening)
import { constructMetadata, type MetadataParams } from "@/lib/seo-utils";
import { generateServiceSchema, generateBreadcrumbSchema, generateSchemaGraph } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";

// --- Templates Engine (Strategic Bridge) ---
import TemplateRenderer from "@/components/templates/TemplateRenderer";

/**
 * [SSG]: Pre-generate static paths เพื่อเพิ่มประสิทธิภาพในระดับ Production (Zero-Runtime Latency)
 */
export async function generateStaticParams() {
  return MASTER_REGISTRY.map((service) => ({
    slug: service.templateSlug,
  }));
}

/**
 * [SEO]: Metadata Generation ตามมาตรฐาน Next.js 15/16 (Async Params Hardening)
 */
export async function generateMetadata(props: PageProps<{ slug: string }>): Promise<Metadata> {
  const { slug } = await props.params;
  const service = MASTER_REGISTRY.find((s) => s.templateSlug === slug);

  if (!service) return { title: "Service Not Found" };

  // [INJECTION]: ใช้งาน MetadataParams Interface เพื่อความ Strict ของข้อมูล SEO หน้าบริการ
  const seoConfig: MetadataParams = {
    title: service.title,
    description: service.description,
    path: `/services/${slug}`,
    image: service.image,
    keywords: service.keywords,
  };

  return constructMetadata(seoConfig);
}

/**
 * @page ServiceDetailPage
 * @description หน่วยประมวลผลข้อมูลบริการที่ตัดสินใจเลือก UI ผ่าน TemplateRenderer
 */
export default async function ServiceDetailPage(props: PageProps<{ slug: string }>) {
  // [MANDATE]: Await params เพื่อรองรับ Next.js 15+ และ 16 (React Server Components)
  const { slug } = await props.params;
  const service = MASTER_REGISTRY.find((s) => s.templateSlug === slug);

  if (!service) notFound();

  // [SCHEMA]: เชื่อมต่อ Entity Graph (Semantic SEO Strategy)
  const fullSchema = generateSchemaGraph([
    generateBreadcrumbSchema([
      { name: "หน้าแรก", item: SITE_CONFIG.siteUrl },
      { name: "บริการทั้งหมด", item: `${SITE_CONFIG.siteUrl}/services` },
      { name: service.title, item: `${SITE_CONFIG.siteUrl}/services/${slug}` },
    ]),
    generateServiceSchema(service),
  ]);

  /**
   * [DATA_ADAPTER]: ทำการ Normalize ข้อมูลให้เข้ากับความต้องการของแต่ละ Template
   * โดยเฉพาะหน้า Local Authority ที่ต้องการโครงสร้างแบบ AreaNode
   */
  const getRenderData = () => {
    if (service.templateSlug === "local-authority") {
      const areaData: AreaNode = {
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
          marketInsight: "การวิเคราะห์โครงสร้างพื้นฐานระดับท้องถิ่นเพื่อรองรับ AI-Search",
          technicalApproach: "Technical SEO Infrastructure & Web Architecture Engineering",
          localStrength: "Specialist Engineering ทีมงานนายเอ็มซ่ามากส์",
        },
      };
      return areaData;
    }
    return service;
  };

  return (
    <>
      {/* 01. SEO Infrastructure */}
      <JsonLd data={fullSchema} />

      {/* 02. Identity Status Anchor */}
      <div className="pointer-events-none relative z-50 flex justify-center pt-24 pb-4">
        <div className="border-border bg-surface-main/50 flex items-center gap-2 rounded-full border px-4 py-1.5 backdrop-blur-md">
          <div className="bg-brand-primary h-1.5 w-1.5 animate-pulse rounded-full" />
          <span className="text-text-muted font-mono text-[9px] font-black tracking-[0.4em] uppercase opacity-50">
            Node_ID: {service.id} | v{SITE_CONFIG.project.version}
          </span>
        </div>
      </div>

      {/* 03. High-Fidelity Render Engine */}
      <section className="relative w-full overflow-hidden">
        <TemplateRenderer
          _source={service.templateSlug === "local-authority" ? "area" : "service"}
          data={getRenderData()}
        />
      </section>
    </>
  );
}
