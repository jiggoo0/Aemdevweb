/**
 * [PAGE]: SERVICE_DETAIL_ENGINE v17.9.108 (LINT_FREE)
 * [STRATEGY]: Strict Typing | SSG optimization | Visual Hierarchy
 * [MAINTAINER]: AEMZA MACKS (Lead Systems Architect)
 */

import { notFound } from "next/navigation";
import type { Metadata, Viewport } from "next";

// --- Infrastructure ---
import { MASTER_REGISTRY, getServiceBySlug } from "@/constants/master-registry";
import { SITE_CONFIG } from "@/constants/site-config";
import type { UniversalTemplateProps } from "@/types";
import { absoluteUrl } from "@/lib/utils";

// --- SEO ---
import {
  generateUniversalSchema,
  generateBreadcrumbSchema,
  generateSchemaGraph,
} from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";

// --- UI ---
import { TemplateRenderer } from "@/components/templates/TemplateRenderer";

// [TYPE_DEFINITION]: Next.js 15 Page Props Strict Mode
interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

/** * [SSG]: Static Path Generation */
export async function generateStaticParams() {
  return MASTER_REGISTRY.map((service) => ({
    slug: service.templateSlug,
  }));
}

export async function generateViewport(): Promise<Viewport> {
  return {
    themeColor: SITE_CONFIG.themeColor,
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  };
}

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
  const ogImage = service.image ? absoluteUrl(service.image) : absoluteUrl(SITE_CONFIG.ogImage);

  return {
    title: `${service.title} | ${SITE_CONFIG.brandName}`,
    description: service.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: service.title,
      description: service.description,
      url: canonicalUrl,
      images: [{ url: ogImage, width: 1200, height: 630, alt: service.title }],
      type: "website",
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
  const params = await props.params;
  const service = getServiceBySlug(params.slug);

  if (!service) notFound();

  // [THEME]: Theme Resolver with Safe Fallback
  const activeTheme = service.theme || {
    primary: SITE_CONFIG.themeColor,
    secondary: "#000000",
    background: "#ffffff",
    accent: SITE_CONFIG.themeColor,
  };

  // [CSS_VARS]: แปลงค่า Theme เป็น CSS Variables โดยไม่ต้อง Cast as any
  const themeStyles = {
    "--primary": activeTheme.primary,
    "--bg-main": activeTheme.background,
    ...(activeTheme.secondary && { "--secondary": activeTheme.secondary }),
  } as React.CSSProperties;

  // [SCHEMA]: Construct Graph
  const jsonLd = generateSchemaGraph([
    generateBreadcrumbSchema([
      { name: "หน้าแรก", item: absoluteUrl("/") },
      { name: "บริการ", item: absoluteUrl("/services") },
      { name: service.title, item: absoluteUrl(`/services/${service.templateSlug}`) },
    ]),
    generateUniversalSchema(service as UniversalTemplateProps),
  ]);

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* [ROOT]: Main Container */}
      <main
        className="bg-surface-main selection:bg-brand-primary/30 relative min-h-screen w-full overflow-x-hidden"
        style={themeStyles}
      >
        {/* [HUD]: Developer/Status Indicator */}
        <div className="pointer-events-none relative z-50 flex justify-center pt-24 mix-blend-difference select-none md:pt-28">
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/20 px-4 py-1.5 backdrop-blur-md">
            <div
              className="h-1.5 w-1.5 animate-pulse rounded-full shadow-[0_0_10px_currentColor]"
              style={{ color: activeTheme.primary, backgroundColor: activeTheme.primary }}
            />
            <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-white/80 uppercase">
              NODE: {service.templateSlug}
            </span>
          </div>
        </div>

        {/* [RENDERER]: Template Injection */}
        <div className="relative w-full">
          <TemplateRenderer data={{ ...service, theme: activeTheme }} renderMode="full" />
        </div>
      </main>
    </>
  );
}
