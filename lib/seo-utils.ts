/**
 * [SEO UTILITY]: SEO_CORE_INFRASTRUCTURE v17.4.0 (STABILIZED_FINAL)
 * [STRATEGY]: Shared Logic for Metadata & Structural Data | Zero-Any Policy
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import { absoluteUrl } from "@/lib/utils"; // Import from central utility
import type { Metadata } from "next";

/**
 * [INTERFACE]: MetadataParams
 */
export interface MetadataParams {
  readonly title: string;
  readonly description: string;
  readonly path: string;
  readonly image?: string;
  readonly keywords?: readonly string[];
  readonly noIndex?: boolean;
}

/**
 * [FUNCTION]: constructMetadata
 * หน่วยประมวลผลกลางสำหรับสร้าง Next.js Metadata API
 */
export function constructMetadata({
  title,
  description,
  path,
  image,
  keywords = [],
  noIndex = false,
}: MetadataParams): Metadata {
  const url = absoluteUrl(path);

  return {
    title: {
      default: `${title} | ${SITE_CONFIG.brandName}`,
      template: `%s | ${SITE_CONFIG.brandName}`,
    },
    description,
    keywords: [...keywords, ...SITE_CONFIG.keywords],
    authors: [{ name: SITE_CONFIG.expert.displayName, url: SITE_CONFIG.expert.bioUrl }],
    creator: SITE_CONFIG.expert.legalName,
    metadataBase: new URL(SITE_CONFIG.siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.brandName,
      images: [{ url: image || "/images/og-main.png", width: 1200, height: 630 }],
      locale: "th_TH",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image || "/images/og-main.png"],
      creator: SITE_CONFIG.links.twitter || "@aemdevweb",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
