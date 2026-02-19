/**
 * [PAGE_ENGINE]: AREA_DETAIL_SYSTEM v18.1.1 (IDENTITY_INTEGRATED)
 * [STRATEGY]: Blueprint Inheritance | Unified Identity Shell | Local SEO
 * [MAINTAINER]: AEMZA MACKS (Lead Systems Architect)
 */

import { notFound } from "next/navigation";
import type { Metadata, Viewport } from "next";

// --- 1. Infrastructure & Core Data (SSOT) ---
import { AREA_NODES } from "@/constants/area-nodes";
import { getServiceBySlug } from "@/constants/master-registry";
import { SITE_CONFIG } from "@/constants/site-config";
import type { PageProps, UniversalTemplateProps } from "@/types";
import { absoluteUrl } from "@/lib/utils";
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

/** [SSG]: รับประกันผล Build เป็น Static 100% ทั่วไทย */
export async function generateStaticParams() {
  return AREA_NODES.map((area) => ({ slug: area.slug }));
}

/** [VIEWPORT]: ปรับสี Browser ตามอัตลักษณ์พื้นที่ */
export async function generateViewport(props: PageProps): Promise<Viewport> {
  const { slug } = await props.params;
  const area = AREA_NODES.find((a) => a.slug === slug);

  return {
    themeColor: area?.theme?.primary || SITE_CONFIG.themeColor,
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
  };
}

/** [SEO_ENGINE]: Metadata Generation */
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
      images: [{ url: ogImage, width: 1200, height: 630 }],
      type: "website",
      locale: "th_TH",
    },
  };
}

export default async function AreaPage(props: PageProps) {
  const { slug } = await props.params;
  const area = AREA_NODES.find((a) => a.slug === slug);

  if (!area) notFound();

  const masterService = getServiceBySlug(area.templateSlug);
  if (!masterService) notFound();

  /* [MERGER]: ผสาน Master Blueprint กับ Area Context (ราคา, ธีม, เนื้อหา) */
  const templateData = mergeServiceData(masterService, area) as UniversalTemplateProps;

  /* [SCHEMA]: 100/100 Knowledge Graph */
  const fullSchema = generateSchemaGraph([
    generateBreadcrumbSchema([
      { name: "หน้าแรก", item: "/" },
      { name: "พื้นที่ให้บริการ", item: "/areas" },
      { name: area.province, item: `/areas/${area.slug}` },
    ]),
    generateLocalBusinessSchema({
      ...area,
      name: area.title,
      telephone: SITE_CONFIG.contact.phone,
      priceRange: area.price ? `THB ${area.price}` : SITE_CONFIG.business.priceRange,
    }),
  ]);

  return (
    <>
      <JsonLd data={fullSchema} id={`schema-graph-${area.slug}`} />

      {/* [RENDER_LAYER]: ปล่อยให้ TemplateRenderer จัดการ Visual Shell ทั้งหมด 
          เพื่อให้สีแบรนด์และ Spacing ของแต่ละจังหวัดทำงานได้ลื่นไหลที่สุด
      */}
      <TemplateRenderer data={templateData} renderMode="full" />

      {/* HUD Layer: Visual Geographic Status Indicator (Fixed Position) */}
      <div className="pointer-events-none fixed top-24 left-0 z-[100] flex w-full justify-center select-none md:top-28">
        <div className="flex items-center gap-3 rounded-full border border-[var(--brand-primary)]/10 bg-[var(--surface-main)]/40 px-5 py-2 shadow-sm backdrop-blur-md">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--brand-primary)] shadow-[0_0_8px_var(--brand-primary)]" />
          <span className="font-mono text-[9px] font-black tracking-[0.4em] text-[var(--text-primary)] uppercase opacity-70">
            Geo_Sync: {area.province} | Node_{area.slug.replace(/-/g, "_")}
          </span>
        </div>
      </div>
    </>
  );
}
