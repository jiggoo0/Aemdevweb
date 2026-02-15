/**
 * [PAGE]: SERVICE_DETAIL_ENGINE v17.9.112 (STABLE_PRODUCTION)
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
import { TemplateRenderer } from "@/components/templates/TemplateRenderer";

/** [SSG]: ประสิทธิภาพระดับสูงสุดด้วย Static Site Generation */
export async function generateStaticParams() {
  return MASTER_REGISTRY.map((service) => ({
    slug: service.templateSlug,
  }));
}

/** [VIEWPORT]: Dynamic Theme Color Support */
export async function generateViewport(): Promise<Viewport> {
  return {
    themeColor: SITE_CONFIG.themeColor,
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    viewportFit: "cover",
  };
}

/** [SEO]: Dynamic Metadata Orchestration */
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const service = getServiceBySlug(params.slug as string);

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
  // [CORE]: Await Async Params (Next.js 15 Protocol)
  const { slug } = await props.params;
  const service = getServiceBySlug(slug as string);

  if (!service) notFound();

  // [THEME_RESOLVER]: รับประกันค่าธีมเริ่มต้น
  const activeTheme = service.theme || {
    primary: SITE_CONFIG.themeColor,
    background: "#ffffff",
    mode: "light",
    foreground: "#0f172a",
  };

  // [SCHEMA]: Build 100/100 SEO Knowledge Graph
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

      {/* [STRUCTURE]: CSS Variable Injection สำหรับ OKLCH & Tailwind 4 */}
      <main
        className="bg-surface-main relative min-h-screen w-full overflow-hidden transition-colors duration-500"
        style={injectThemeVariables(activeTheme)}
      >
        {/* [HUD]: Node Status Indicator (Specialist Layer) */}
        <div className="pointer-events-none relative z-50 flex justify-center pt-24 mix-blend-difference select-none md:pt-28">
          <div className="border-border/10 flex items-center gap-3 rounded-full border bg-black/20 px-4 py-1.5 backdrop-blur-md">
            <div
              className="h-1.5 w-1.5 animate-pulse rounded-full shadow-[0_0_8px_var(--brand-primary)]"
              style={{ backgroundColor: "var(--brand-primary)" }}
            />
            <span className="font-mono text-[9px] font-bold tracking-[0.3em] text-white/70 uppercase">
              Service_Node: {service.templateSlug.replace(/-/g, "_")}
            </span>
          </div>
        </div>

        {/* [RENDERER]: ฉีดข้อมูลที่ Normalized เข้าสู่ Template Engine */}
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
