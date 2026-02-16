/**
 * [SEO UTILITY]: METADATA_CORE v18.0.0 (SYNCHRONIZED)
 * [STRATEGY]: Next.js Metadata API | WWW-Enforced | Deduplicated Keywords
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

export function constructMetadata({
  title,
  description,
  path,
  image,
  keywords = [],
  noIndex = false,
}: MetadataParams): Metadata {
  // [CLEAN_URL]: มั่นใจว่า path ไม่สร้าง url ซ้ำซ้อน
  const url = absoluteUrl(path);

  // [STRATEGY]: Deduplicate Keywords เพื่อลดขนาด HTML Payload
  const mergedKeywords = Array.from(new Set([...keywords, ...SITE_CONFIG.keywords]));

  return {
    title: {
      default: `${title} | ${SITE_CONFIG.brandName}`,
      template: `%s | ${SITE_CONFIG.brandName}`,
    },
    description,
    keywords: mergedKeywords.join(", "), // แปลงเป็น String เพื่อความเป๊ะของ Meta Tag
    metadataBase: new URL(SITE_CONFIG.siteUrl),

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: `${title} | ${SITE_CONFIG.brandName}`,
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
      title: `${title} | ${SITE_CONFIG.brandName}`,
      description,
      images: [image || SITE_CONFIG.ogImage],
      // [FIX]: มั่นใจว่า Handle มี @ นำหน้าตามมาตรฐาน Twitter
      creator: SITE_CONFIG.expert.twitterHandle.startsWith("@") 
        ? SITE_CONFIG.expert.twitterHandle 
        : `@${SITE_CONFIG.expert.twitterHandle}`,
    },

    verification: {
      google: SITE_CONFIG.verification.google,
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
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
  };
}
