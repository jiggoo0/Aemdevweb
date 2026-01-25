/** @format */

import type { Metadata } from "next"
import { siteConfig } from "@/constants/site-config"

/**
 * การตั้งค่าข้อมูลส่วนหัวเว็บไซต์หลัก — Specialist Edition
 * ออกแบบมาเพื่อประสิทธิภาพสูงสุดบน Google Search และ AI Crawlers สำหรับกลุ่ม B2B/SME
 */

export const defaultMetadata: Metadata = {
  // 1. โครงสร้างพื้นฐานหลัก (Base Infrastructure)
  metadataBase: new URL(siteConfig.url),

  // 2. โครงสร้างการจัดวางชื่อหัวข้อ (Title Structure)
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.shortName}`,
  },

  // 3. ข้อมูลคำอธิบายและคำค้นหาหลัก (Primary Metadata)
  description: siteConfig.description,
  keywords: siteConfig.keywords.list,
  category: "technology",

  // 4. ข้อมูลการระบุตัวตนและความน่าเชื่อถือ (Attribution & Authority)
  authors: [{ name: siteConfig.expert, url: siteConfig.links.linkedin }],
  creator: siteConfig.expert,
  publisher: siteConfig.companyName,

  // 5. ระบบการระบุพิกัดและภาษา (Canonical & Localization)
  alternates: {
    canonical: "/",
    languages: {
      "th-TH": "/th",
      "en-US": "/en",
    },
  },

  // 6. การแสดงผลบนสื่อสังคมออนไลน์ (Open Graph)
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.slogan}`,
      },
    ],
  },

  // 7. การแสดงผลบนแพลตฟอร์ม X / Twitter
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.expert,
  },

  // 8. ระบบไอคอนและรูปภาพสัญลักษณ์ (Comprehensive Icon Infrastructure)
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

  // 9. การควบคุมระบบจัดเก็บข้อมูลและ AI (Crawler & AI Control)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // 10. การยืนยันตัวตนกับเครื่องมือค้นหา (Search Console Verification)
  verification: {
    google: "google14e6cc676e76f49d",
  },

  // 11. การตั้งค่าสำหรับการใช้งานบนมือถือ (Mobile Web App)
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteConfig.shortName,
  },
}
