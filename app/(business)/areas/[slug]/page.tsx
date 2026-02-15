/**
 * [PAGE]: AREA_DETAIL_ENGINE v17.9.110 (STABLE_FINAL)
 * [STRATEGY]: Blueprint Inheritance | P-SEO Data Merging | Zero-CLS Execution
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
import { mergeServiceData } from "@/lib/data-merger"; // ระบบรวมร่างข้อมูลอัจฉริยะ

// --- 2. SEO & Schema Protocols ---
import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateSchemaGraph,
} from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";

// --- 3. UI Render Engine ---
import { TemplateRenderer } from "@/components/templates/TemplateRenderer";

/** [SSG]: ประกันผล Build เป็น Static 100% สำหรับการทำ Local SEO ระดับจังหวัด */
export async function generateStaticParams() {
  return AREA_NODES.map((area) => ({ slug: area.slug }));
}

/** [VIEWPORT]: Mobile-First Optimization & Theme Consistency */
export async function generateViewport(): Promise<Viewport> {
  return {
    themeColor: SITE_CONFIG.themeColor,
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
  };
}

/** [SEO]: Dynamic Metadata Generation สำหรับเจาะคีย์เวิร์ดรายพื้นที่ */
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const area = AREA_NODES.find((a) => a.slug === params.slug);

  if (!area) return { title: `ไม่พบข้อมูลพื้นที่ | ${SITE_CONFIG.brandName}` };

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
      images: [{ url: ogImage, width: 1200, height: 630, alt: area.title }],
      type: "website",
      locale: SITE_CONFIG.locale || "th_TH",
    },
    twitter: {
      card: "summary_large_image",
      title: area.seoTitle,
      description: area.seoDescription,
      images: [ogImage],
    },
  };
}

export default async function AreaPage(props: PageProps) {
  // [NEXT15_CORE]: Await Async Params
  const params = await props.params;
  const area = AREA_NODES.find((a) => a.slug === params.slug);

  if (!area) notFound();

  // [DATA_ORCHESTRATION]: ดึงแม่แบบบริการหลักมาเพื่อทำการ Inheritance
  const masterService = getServiceBySlug(area.templateSlug);
  if (!masterService) {
    console.error(`Architecture Mismatch: Missing master service for ${area.templateSlug}`);
    notFound();
  }

  /** * [MERGER]: ผสมข้อมูล Master + Area Node
   * ผลลัพธ์ที่ได้จะเป็น UniversalTemplateProps ที่สมบูรณ์ (มี Theme, Features, FAQs ครบ)
   */
  const templateData = mergeServiceData(masterService, area) as UniversalTemplateProps;

  // [SCHEMA]: Construct Knowledge Graph สำหรับ Local SEO
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
        className="bg-surface-main relative min-h-screen w-full overflow-hidden"
        style={injectThemeVariables(templateData.theme)}
      >
        {/* HUD Layer: Visual Geographic Status Indicator (Specialist UI) */}
        <div className="pointer-events-none relative z-50 flex justify-center pt-24 select-none md:pt-32">
          <div className="border-border bg-surface-card/50 flex items-center gap-3 rounded-full border px-5 py-2 shadow-sm backdrop-blur-xl">
            <div
              className="shadow-glow h-2 w-2 animate-pulse rounded-full"
              style={{ backgroundColor: templateData.theme.primary }}
            />
            <span className="text-text-muted font-mono text-[9px] font-black tracking-[0.4em] uppercase">
              Geo_Sync: {area.province} | Node_{area.slug.replace(/-/g, "_")}
            </span>
          </div>
        </div>

        {/* [RENDERER]: renderMode="section-only" 
            เพื่อให้แสดงผลเฉพาะเนื้อหาหลัก โดยไม่เรนเดอร์ Navbar/Footer ซ้ำซ้อน 
        */}
        <div className="relative -mt-16 w-full">
          <TemplateRenderer data={templateData} renderMode="section-only" />
        </div>
      </main>
    </>
  );
}
