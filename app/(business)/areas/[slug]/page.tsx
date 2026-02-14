/**
 * [PAGE]: AREA_DETAIL_ENGINE v17.9.106 (ULTIMATE_HARDENED)
 * [STRATEGY]: Next.js 15 Async Params | Theme Inheritance | Geo-Schema Injection
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

// --- 2. SEO & Schema Protocols ---
import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateSchemaGraph,
} from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";

// --- 3. UI Render Engine ---
import { TemplateRenderer } from "@/components/templates/TemplateRenderer";

/** * [SSG]: สร้าง Static Paths สำหรับ Programmatic SEO
 * ประกันผล build เป็น ● (SSG) 100%
 */
export async function generateStaticParams() {
  return AREA_NODES.map((area) => ({ slug: area.slug }));
}

/** * [VIEWPORT]: มาตรฐานควบคุม UI บนเบราว์เซอร์มือถือ
 */
export async function generateViewport(): Promise<Viewport> {
  return {
    themeColor: SITE_CONFIG.themeColor,
    width: "device-width",
    initialScale: 1,
  };
}

/** * [SEO]: Metadata Generation แบบ Dynamic สำหรับรายจังหวัด
 */
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
  // [NEXT15_CORE]: await params เสมอ
  const params = await props.params;
  const area = AREA_NODES.find((a) => a.slug === params.slug);

  if (!area) notFound();

  // [THEME_INHERITANCE]: ระบบสืบทอดสีอัจฉริยะ (Area > Parent > Default)
  const parentService = getServiceBySlug(area.templateSlug);
  const activeTheme = area.theme ||
    parentService?.theme || {
      primary: SITE_CONFIG.themeColor,
      background: "#ffffff",
    };

  // [SCHEMA]: สร้าง Knowledge Graph สำหรับ Local SEO
  const fullSchema = generateSchemaGraph([
    generateBreadcrumbSchema([
      { name: "หน้าแรก", item: "/" },
      { name: "พื้นที่ให้บริการ", item: "/areas" },
      { name: area.province, item: `/areas/${area.slug}` },
    ]),
    generateLocalBusinessSchema(area),
  ]);

  // [DATA_ADAPTER]: แปลง Local Context เป็น Universal Props สำหรับ Template
  const templateData: UniversalTemplateProps = {
    ...area,
    id: `NODE-${area.slug.toUpperCase()}`,
    category: "area",
    theme: activeTheme,
    // Inject Dynamic Features จากอุตสาหกรรมในท้องถิ่น
    coreFeatures:
      area.localContext?.nicheIndustries?.map((industry, idx) => ({
        title: `ธุรกิจ ${industry}`,
        description: `ยกระดับเว็บไซต์ธุรกิจ ${industry} ในพื้นที่ ${area.province} ด้วยมาตรฐานสากล`,
        icon: idx === 0 ? "Target" : idx === 1 ? "TrendingUp" : "Shield",
      })) || [],
  };

  return (
    <>
      <JsonLd data={fullSchema} />

      {/* [ROOT_CONTAINER]: ฉีดตัวแปรสีเข้าสู่ CSS Variables 
          เพื่อให้ Component ภายในใช้สีตามธีมของพื้นที่นั้นๆ ได้ทันที
      */}
      <main
        className="bg-surface-main relative min-h-screen w-full overflow-hidden"
        style={injectThemeVariables(activeTheme)}
      >
        {/* HUD Layer: Visual Geographic Status Indicator */}
        <div className="pointer-events-none relative z-50 flex justify-center pt-24 select-none md:pt-32">
          <div className="border-border bg-surface-card/50 flex items-center gap-3 rounded-full border px-5 py-2 shadow-sm backdrop-blur-xl">
            <div
              className="shadow-glow h-2 w-2 animate-pulse rounded-full"
              style={{ backgroundColor: activeTheme.primary }}
            />
            <span className="text-text-muted font-mono text-[9px] font-black tracking-[0.4em] uppercase">
              Geo_Sync: {area.province} | Node_{area.slug.replace(/-/g, "_")}
            </span>
          </div>
        </div>

        {/* Template Render Layer: ใช้ 'section-only' เพื่อให้ Business Layout คุม padding เอง */}
        <div className="relative -mt-16 w-full">
          <TemplateRenderer data={templateData} renderMode="section-only" />
        </div>
      </main>
    </>
  );
}
