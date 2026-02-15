/**
 * [PAGE]: AREA_DETAIL_ENGINE v17.9.112 (ULTIMATE_STABILIZED)
 * [STRATEGY]: Blueprint Inheritance | Image SEO Protocol | Next.js 15 Async
 * [MAINTAINER]: AEMZA MACKS (Lead Systems Architect)
 */

import { notFound } from "next/navigation";
import type { Metadata, Viewport } from "next";

// --- 1. Infrastructure & Core Data (SSOT) ---
import { AREA_NODES } from "@/constants/area-nodes";
import { getServiceBySlug } from "@/constants/master-registry";
import { SITE_CONFIG } from "@/constants/site-config";
import type { PageProps, UniversalTemplateProps } from "@/types";
import { absoluteUrl, injectThemeVariables } from "@/lib/utils";
import { mergeServiceData } from "@/lib/data-merger";

// --- 2. SEO & Schema Protocols ---
import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateSchemaGraph,
} from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";

// --- 3. UI Render Engine ---
import { TemplateRenderer } from "@/components/templates/TemplateRenderer";

/** [SSG]: รับประกันผล Build เป็น Static 100% สำหรับการทำ Local SEO ระดับจังหวัด */
export async function generateStaticParams() {
  return AREA_NODES.map((area) => ({ slug: area.slug }));
}

/** [VIEWPORT]: Mobile-First Optimization & Dynamic Theme Color */
export async function generateViewport(): Promise<Viewport> {
  return {
    themeColor: SITE_CONFIG.themeColor,
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
  };
}

/** * [SEO_ENGINE]: AREA_METADATA_PROTOCOLS
 * @description จัดการข้อมูล Metadata และ Image SEO เพื่อเจาะกลุ่มผู้ใช้ในพื้นที่
 */
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const area = AREA_NODES.find((a) => a.slug === slug);

  if (!area) {
    return {
      title: `ไม่พบข้อมูลพื้นที่ | ${SITE_CONFIG.brandName}`,
      robots: { index: false, follow: false },
    };
  }

  const canonicalUrl = absoluteUrl(`/areas/${area.slug}`);
  const ogImage = absoluteUrl(area.heroImage || SITE_CONFIG.ogImage);

  return {
    title: area.seoTitle,
    description: area.seoDescription,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: area.seoTitle,
      description: area.seoDescription,
      url: canonicalUrl,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `บริการ${area.title} ณ ${area.province} โดย ${SITE_CONFIG.brandName}`,
        },
      ],
      type: "website",
      locale: SITE_CONFIG.locale || "th_TH",
    },
    twitter: {
      card: "summary_large_image",
      title: area.seoTitle,
      description: area.seoDescription,
      images: [ogImage],
    },
    // [EXTRA_SEO]: มอบบริบทให้ภาพ (Image SEO) เพื่ออันดับที่ดีขึ้นในหน้าค้นหารูปภาพ
    other: {
      "image:alt": area.seoTitle,
      "image:caption": area.seoDescription,
      "og:image:secure_url": ogImage,
    },
  };
}

export default async function AreaPage(props: PageProps) {
  // [NEXT15_CORE]: Await Async Params ตามมาตรฐานใหม่
  const { slug } = await props.params;
  const area = AREA_NODES.find((a) => a.slug === slug);

  if (!area) notFound();

  // [DATA_ORCHESTRATION]: ดึงแม่แบบบริการหลักมาทำ Inheritance
  const masterService = getServiceBySlug(area.templateSlug);

  if (!masterService) {
    console.error(`Architecture Mismatch: Missing master service for ${area.templateSlug}`);
    notFound();
  }

  // [MERGER]: รวมร่าง Master Blueprint + Area Context
  const templateData = mergeServiceData(masterService, area) as UniversalTemplateProps;

  // [SCHEMA]: สร้าง Knowledge Graph สำหรับ Local SEO 100/100
  const fullSchema = generateSchemaGraph([
    generateBreadcrumbSchema([
      { name: "หน้าแรก", item: "/" },
      { name: "พื้นที่ให้บริการ", item: "/areas" },
      { name: area.province, item: `/areas/${area.slug}` },
    ]),
    generateLocalBusinessSchema(area),
  ]);

  return (
    <>
      <JsonLd data={fullSchema} />

      <main
        className="bg-surface-main relative min-h-screen w-full overflow-hidden transition-colors duration-500"
        style={injectThemeVariables(templateData.theme)}
      >
        {/* HUD Layer: Visual Geographic Status Indicator (Specialist UI) */}
        <div className="pointer-events-none relative z-50 flex justify-center pt-24 select-none md:pt-32">
          <div className="border-border bg-surface-card/50 flex items-center gap-3 rounded-full border px-5 py-2 shadow-sm backdrop-blur-xl">
            <div
              className="h-2 w-2 animate-pulse rounded-full shadow-[0_0_8px_var(--brand-primary)]"
              style={{ backgroundColor: "var(--brand-primary)" }}
            />
            <span className="text-text-muted font-mono text-[9px] font-black tracking-[0.4em] uppercase">
              Geo_Sync: {area.province} | Node_{area.slug.replace(/-/g, "_")}
            </span>
          </div>
        </div>

        {/* [RENDERER]: ฉีดข้อมูลลงใน Template Engine ในโหมด Section-Only */}
        <div className="relative -mt-16 w-full">
          <TemplateRenderer data={templateData} renderMode="section-only" />
        </div>
      </main>
    </>
  );
}
