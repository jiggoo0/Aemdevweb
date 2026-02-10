/**
 * [SEO UTILITY]: METADATA_CORE v17.5.6 (STRICT_TYPED)
 * [RESPONSIBILITY]: Handle Next.js Metadata API Only
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import { absoluteUrl } from "@/lib/utils";
import type { Metadata } from "next";

export interface MetadataParams {
  readonly title: string;
  readonly description: string;
  readonly path: string;
  readonly image?: string;
  readonly keywords?: readonly string[];
  readonly noIndex?: boolean;
}

/**
 * [METADATA CONSTRUCTOR]
 * ฟังก์ชันนี้ใช้สำหรับ generateMetadata() ใน page.tsx เท่านั้น
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
      images: [
        {
          url: image || "/images/og-main.png",
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
      images: [image || "/images/og-main.png"],
      creator: SITE_CONFIG.links.twitter || "@aemdevweb",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      nocache: noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        noimageindex: noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/icon-192.png",
    },
  };
}
