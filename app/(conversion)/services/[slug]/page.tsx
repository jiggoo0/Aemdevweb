/**
 * [PAGE]: SERVICE_DETAIL_ENGINE v18.0.1 (LAYOUT_INTEGRATED)
 * [STRATEGY]: Next.js 16 Async Params | Unified Identity Shell | SSG
 * [MAINTAINER]: AEMZA MACKS (Lead Systems Architect)
 */

import { notFound } from "next/navigation";
import type { Metadata, Viewport } from "next";

// --- 1. Infrastructure & Core Data (SSOT) ---
import { MASTER_REGISTRY, getServiceBySlug } from "@/constants/master-registry";
import { SITE_CONFIG } from "@/constants/site-config";
import type { PageProps, UniversalTemplateProps } from "@/types";
import { absoluteUrl } from "@/lib/utils";

// --- 2. SEO & Schema Protocols ---
import {
  generateUniversalSchema,
  generateBreadcrumbSchema,
  generateSchemaGraph,
} from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";

// --- 3. UI Render Engine ---
import { TemplateRenderer } from "@/components/templates/TemplateRenderer";

/** [SSG]: สร้างหน้า Static ล่วงหน้าสำหรับทุกบริการ */
export async function generateStaticParams() {
  return MASTER_REGISTRY.map((service) => ({
    slug: service.templateSlug,
  }));
}

/** [VIEWPORT]: ปรับสี Browser UI ตามแบรนด์ของโหนดนั้นๆ */
export async function generateViewport(props: PageProps): Promise<Viewport> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug as string);

  return {
    themeColor: service?.theme?.primary || SITE_CONFIG.themeColor,
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
  };
}

/** [SEO]: จัดการ Metadata แบบ Dynamic */
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug as string);

  if (!service) {
    return {
      title: `Service Not Found | ${SITE_CONFIG.brandName}`,
      robots: { index: false, follow: false },
    };
  }

  const canonicalUrl = absoluteUrl(`/services/${service.templateSlug}`);
  const ogImage = absoluteUrl(service.image || SITE_CONFIG.ogImage);

  return {
    title: `${service.title} | ${SITE_CONFIG.brandName}`,
    description: service.description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: service.title,
      description: service.description,
      url: canonicalUrl,
      images: [{ url: ogImage, width: 1200, height: 630, alt: service.title }],
      type: "article",
    },
  };
}

export default async function ServicePage(props: PageProps) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug as string);

  if (!service) notFound();

  // รับประกันค่าธีมที่ผ่านการประมวลผลแล้ว
  const activeTheme = service.theme || {
    primary: SITE_CONFIG.themeColor,
    background: "#ffffff",
    mode: "light",
    foreground: "#0f172a",
  };

  // [SCHEMA]: สร้าง Knowledge Graph
  const jsonLd = generateSchemaGraph([
    generateBreadcrumbSchema([
      { name: "หน้าแรก", item: "/" },
      { name: "บริการ", item: "/services" },
      { name: service.title, item: `/services/${service.templateSlug}` },
    ]),
    generateUniversalSchema(service as UniversalTemplateProps),
  ]);

  return (
    <>
      <JsonLd data={jsonLd} id={`schema-service-${service.templateSlug}`} />

      {/* [ORCHESTRATION]: เราส่งต่อหน้าที่การจัดการ Visual Shell (CSS Variables, HUD, Spacing)
        ให้ TemplateRenderer เป็นผู้ดูแล เพื่อให้เกิดความสอดคล้องระหว่างหน้า Service และหน้า Area
      */}
      <TemplateRenderer
        data={{ ...service, theme: activeTheme } as UniversalTemplateProps}
        renderMode="full"
      />

      {/* [HUD]: ย้ายมาอยู่ระดับล่างสุดของ DOM และใช้ Fixed Position 
        เพื่อให้แสดงผลทับทุกส่วนของเทมเพลตได้อย่างแม่นยำ 
      */}
      <div className="pointer-events-none fixed top-24 left-0 z-[100] flex w-full justify-center select-none md:top-28">
        <div className="flex items-center gap-3 rounded-full border border-[var(--brand-primary)]/10 bg-[var(--surface-main)]/40 px-4 py-1.5 shadow-sm backdrop-blur-md">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--brand-primary)] shadow-[0_0_8px_var(--brand-primary)]" />
          <span className="font-mono text-[9px] font-black tracking-[0.3em] text-[var(--text-primary)] uppercase opacity-70">
            Service_Node: {service.templateSlug.replace(/-/g, "_")}
          </span>
        </div>
      </div>
    </>
  );
}
