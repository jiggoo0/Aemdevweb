/**
 * [PAGE]: SERVICE_DETAIL_ENGINE v17.9.111 (STABLE_RECOVERY)
 * [STRATEGY]: Next.js 15 Async Params | Named Import Sync | SSG Core
 * [MAINTAINER]: AEMZA MACKS (Lead Systems Architect)
 */

import { notFound } from "next/navigation";
import type { Metadata, Viewport } from "next";

// --- 1. Infrastructure & Core Data (SSOT) ---
import { MASTER_REGISTRY, getServiceBySlug } from "@/constants/master-registry";
import { SITE_CONFIG } from "@/constants/site-config";
import type { PageProps, UniversalTemplateProps } from "@/types";
import { absoluteUrl, injectThemeVariables } from "@/lib/utils";

// --- 2. SEO & Schema Protocols ---
import {
  generateUniversalSchema,
  generateBreadcrumbSchema,
  generateSchemaGraph,
} from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";

// --- 3. UI Render Engine ---
// [FIXED]: เปลี่ยนเป็น Named Import เพื่อแก้ Knip Warning (Unused default export)
import { TemplateRenderer } from "@/components/templates/TemplateRenderer";

/** [SSG]: สร้าง Static Paths สำหรับทุกบริการหลัก เพื่อความเร็วสูงสุด (Time-to-First-Byte) */
export async function generateStaticParams() {
  return MASTER_REGISTRY.map((service) => ({
    slug: service.templateSlug,
  }));
}

/** [VIEWPORT]: Mobile-First Optimization & Dynamic Theme Color */
export async function generateViewport(): Promise<Viewport> {
  return {
    themeColor: SITE_CONFIG.themeColor,
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    viewportFit: "cover",
  };
}

/** [SEO]: Metadata Generation (Async Params Support) */
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const service = getServiceBySlug(params.slug);

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
      type: "article", // เปลี่ยนเป็น Article สำหรับหน้า Service เพื่อ Rich Snippet ที่ดีขึ้น
      locale: SITE_CONFIG.locale || "th_TH",
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.description,
      images: [ogImage],
    },
  };
}

export default async function ServicePage(props: PageProps) {
  // [NEXT15_CORE]: Await Async Params ตามมาตรฐานใหม่
  const params = await props.params;
  const service = getServiceBySlug(params.slug);

  if (!service) notFound();

  // [THEME_RESOLVER]: รับประกันว่าจะมีธีมใช้งานเสมอ (Fallback to Brand Color)
  const activeTheme = service.theme || {
    primary: SITE_CONFIG.themeColor,
    background: "#ffffff",
    mode: "light",
    foreground: "#0f172a",
  };

  // [SCHEMA]: Construct Knowledge Graph เพื่อคะแนน SEO 100/100
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
      <JsonLd data={jsonLd} />

      {/* [ROOT_CONTAINER]: CSS Variable Injection สำหรับ Tailwind 4 / OKLCH Support */}
      <main
        className="bg-surface-main relative min-h-screen w-full overflow-hidden"
        style={injectThemeVariables(activeTheme)}
      >
        {/* [HUD]: Node Status Indicator (Specialist UI) */}
        <div className="pointer-events-none relative z-50 flex justify-center pt-24 mix-blend-difference select-none md:pt-28">
          <div className="border-border/10 flex items-center gap-3 rounded-full border bg-black/20 px-4 py-1.5 backdrop-blur-md">
            <div
              className="shadow-glow h-1.5 w-1.5 animate-pulse rounded-full"
              style={{ backgroundColor: activeTheme.primary }}
            />
            <span className="font-mono text-[9px] font-bold tracking-[0.3em] text-white/70 uppercase">
              Service_Node: {service.templateSlug.replace(/-/g, "_")}
            </span>
          </div>
        </div>

        {/* [RENDERER]: หัวใจการแสดงผล - ข้อมูลถูก Normalized ผ่าน UniversalTemplateProps */}
        <div className="relative -mt-16 w-full">
          <TemplateRenderer
            data={{ ...service, theme: activeTheme } as UniversalTemplateProps}
            renderMode="full"
          />
        </div>
      </main>
    </>
  );
}
