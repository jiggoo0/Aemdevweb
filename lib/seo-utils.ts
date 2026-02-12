/**
 * [SEO UTILITY]: METADATA_CORE v17.9.9
 * [RESPONSIBILITY]: Next.js Metadata API Orchestration
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import { absoluteUrl } from "@/lib/utils";
import type { Metadata } from "next";

/**
 * [INTERFACE]: MetadataParams
 * [STRATEGY]: Strict Typing with Immutability Support
 * [FIXED]: ใช้ readonly string[] เพื่อรองรับข้อมูลจาก CMS และ Constants (TS4104)
 */
export interface MetadataParams {
  readonly title: string;
  readonly description: string;
  readonly path: string;
  readonly image?: string;
  readonly keywords?: readonly string[]; // Support for readonly arrays
  readonly noIndex?: boolean;
}

/**
 * @function constructMetadata
 * @description สร้าง Metadata สำหรับ Next.js App Router แบบ Zero-Defect
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
    // [LOGIC]: ผสาน Keywords แบบ Immutable-Safe
    keywords: [...keywords, ...SITE_CONFIG.keywords],
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
          url: image || "/images/og-main.webp",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "th_TH",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image || "/images/og-main.webp"],
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
