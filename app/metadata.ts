/** @format */

import type { Metadata } from "next"
import { siteConfig } from "@/constants/site-config"

/**
 * ระบบจัดการข้อมูลส่วนหัวเว็บไซต์ (Metadata Engine)
 * จัดการพิกัด SEO และ Social Share ให้ตรงตามโครงสร้างข้อมูล
 * * Update: รองรับการดึงข้อมูลจากโครงสร้าง SiteConfig ที่มีความสมดุลล่าสุด
 */
export function constructMetadata({
  title = siteConfig.project.title,
  description = siteConfig.project.description,
  image = siteConfig.project.ogImage,
  icons = "/favicon.ico",
  canonical = siteConfig.project.url,
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  canonical?: string
  noIndex?: boolean
} = {}): Metadata {
  // 1. จัดพิกัดชื่อหน้า (Dynamic Title Strategy)
  // หากเป็นหน้าแรก: Title | Slogan
  // หากเป็นหน้าย่อย: Title | ShortName (ผ่าน template ของ Next.js)
  const isHomePage = title === siteConfig.project.title
  const displayTitle = isHomePage
    ? `${title} | ${siteConfig.project.slogan}`
    : title

  return {
    title: {
      default: displayTitle,
      template: `%s | ${siteConfig.project.shortName}`,
    },
    description,
    keywords: siteConfig.keywords.all,

    // 2. กำหนดตัวตนผู้จัดทำ (Entity Attribution)
    authors: [
      {
        name: siteConfig.expert.name,
        url: siteConfig.project.url,
      },
    ],
    creator: siteConfig.expert.name,

    // 3. พิกัด URL พื้นฐาน (Base URL)
    // จำเป็นมากสำหรับพิกัดรูปภาพ OG และ Canonical URL
    metadataBase: new URL(siteConfig.project.url),

    // 4. โครงสร้างการแสดงผลบน Social Media (Open Graph)
    openGraph: {
      title: displayTitle,
      description,
      siteName: siteConfig.project.name,
      locale: "th_TH",
      type: "website",
      url: canonical,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: displayTitle,
        },
      ],
    },

    // 5. พิกัดการแสดงผลบน X/Twitter
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description,
      images: [image],
      // ดึงพิกัดจากระบบจัดการการติดต่อโดยตรง
      creator: siteConfig.contact.lineId,
    },

    // 6. พิกัดไอคอนระบบ (App Icons)
    icons: {
      icon: icons,
      shortcut: icons,
      apple: "/apple-touch-icon.png",
    },

    // 7. พิกัดการเข้าถึงของ Crawler (Robot Control)
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

    // 8. พิกัดลิงก์ถาวร (Canonical Reference)
    alternates: {
      canonical,
    },
  }
}
