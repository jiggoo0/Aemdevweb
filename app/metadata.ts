/** @format */

import type { Metadata } from "next"
import { siteConfig } from "@/constants/site-config"

/**
 * ระบบจัดการข้อมูลส่วนหัวเว็บไซต์ (Metadata Engine)
 * จัดการพิกัด SEO และ Social Share ให้ตรงตามโครงสร้างข้อมูล
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
  
  // ปรับพิกัดชื่อหน้าเพื่อป้องกันข้อความซ้อนทับกันเกินความจำเป็น
  // หากเป็นหน้าแรกจะใช้ Title | Slogan หากเป็นหน้าย่อยจะใช้ Title | ShortName
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

    // กำหนดตัวตนผู้จัดทำในระดับโครงสร้างหลัก
    authors: [
      {
        name: siteConfig.expert.name,
        url: siteConfig.project.url,
      },
    ],
    creator: siteConfig.expert.name,

    // ล็อคพิกัด URL พื้นฐานเพื่อป้องกันปัญหา Link และรูปภาพ OG ไม่แสดงผล
    metadataBase: new URL(siteConfig.project.url),

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

    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description,
      images: [image],
      creator: siteConfig.links.lineId, // ดึงพิกัดจากระบบจัดการลิงก์โดยตรง
    },

    icons: {
      icon: icons,
      shortcut: icons,
      apple: "/apple-touch-icon.png",
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

    alternates: {
      canonical,
    },
  }
}
