/** @format */

import type { Metadata } from "next"
import { siteConfig } from "@/constants/site-config"

/**
 * 🧬 Global Metadata Configuration — Specialist Edition
 * Optimized for SME, Corporate, and Industrial Search Performance.
 * * * * Objectives:
 * 1. Brand Integrity: ใช้ MetadataBase เพื่อให้ Social Share ลิงก์รูปภาพถูกต้องเสมอ
 * 2. Search AI Ready: ปรับแต่ง Robots Meta Tags ให้สอดคล้องกับพฤติกรรม AI Crawlers 2026
 * 3. Canonical Excellence: ป้องกันปัญหาหน้าซ้ำ (SEO Duplicate Content)
 */

export const defaultMetadata: Metadata = {
  // 🔗 Base Configuration
  metadataBase: new URL(siteConfig.url),

  // 🏷️ Title Configuration
  title: {
    // ✅ [FIXED]: ใช้ siteConfig.title ที่เราเพิ่มกลับเข้าไป
    default: siteConfig.title,
    // ✅ [FIXED]: ใช้ siteConfig.shortName เพื่อแก้ TS2339
    template: `%s | ${siteConfig.shortName}`,
  },

  // 📝 Primary Metadata
  description: siteConfig.description,
  // ✅ [FIXED]: keywords ต้องเป็น string[] หรือ string เท่านั้น (ใช้ .list จาก config ใหม่)
  keywords: siteConfig.keywords.list,
  category: "technology",

  // 👤 Attribution
  authors: [{ name: siteConfig.expert, url: siteConfig.links.linkedin }],
  creator: siteConfig.companyName,
  publisher: siteConfig.companyName,

  // 🗺️ Search Indexing & Canonical
  alternates: {
    canonical: "/",
    languages: {
      "th-TH": "/th",
      "en-US": "/en",
    },
  },

  // 🌐 Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: siteConfig.url,
    siteName: siteConfig.name,
    // ✅ [FIXED]: ใช้ siteConfig.title
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Expert Web Development for SME`,
      },
    ],
  },

  // 🐦 Twitter / X
  twitter: {
    card: "summary_large_image",
    // ✅ [FIXED]: ใช้ siteConfig.title
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },

  // 🖼️ Favicons & PWA Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: ["/favicon-16x16.png"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#020617",
      },
    ],
  },

  // 🤖 Crawler & AI Control
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // 🔍 Verification Tools
  verification: {
    google: "your-google-verification-id", // แทนที่ด้วย ID จริงจาก Search Console
  },

  // 📱 Mobile App Linkage (Optional)
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    // ✅ [FIXED]: ใช้ siteConfig.shortName
    title: siteConfig.shortName,
  },
}
