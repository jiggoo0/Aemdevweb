/**
 * [SEO UTILITY]: METADATA_CORE v17.9.97 (CLEAN_STABLE)
 * [STRATEGY]: Next.js Metadata API Orchestration | SSOT Sync | Viewport Decoupled
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { SITE_CONFIG } from "@/constants/site-config";
import { absoluteUrl } from "@/lib/utils";
import type { Metadata } from "next";

interface MetadataParams {
  readonly title: string;
  readonly description: string;
  readonly path: string;
  readonly image?: string;
  readonly keywords?: readonly string[];
  readonly noIndex?: boolean;
}

/**
 * @function constructMetadata
 * @description สร้าง Next.js Metadata Object แบบ Zero-Defect (v15 Compliant)
 * [CHANGES]: แยก themeColor ออกไปไว้ใน Viewport API เพื่อลดคำเตือนระบบ Build
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

  // [STRATEGY]: ผสาน Keywords หน้าเว็บเข้ากับ Brand Keywords (SSOT)
  const mergedKeywords = [...keywords, ...SITE_CONFIG.keywords];

  return {
    title: {
      default: `${title} | ${SITE_CONFIG.brandName}`,
      template: `%s | ${SITE_CONFIG.brandName}`,
    },
    description,
    keywords: mergedKeywords,
    metadataBase: new URL(SITE_CONFIG.siteUrl),

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.brandName,
      images: [
        {
          url: image || SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: SITE_CONFIG.locale,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image || SITE_CONFIG.ogImage],
      creator: SITE_CONFIG.expert.twitterHandle,
      site: SITE_CONFIG.expert.twitterHandle,
    },

    verification: {
      google: SITE_CONFIG.verification.google,
      // [FIXED]: การใช้ 'other' สำหรับ Facebook Domain Verification เพื่อผ่าน TSC
      other: {
        "facebook-domain-verification": [SITE_CONFIG.verification.facebook || ""],
      },
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

    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/android-chrome-192x192.png",
    },
  };
}
