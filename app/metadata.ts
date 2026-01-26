/** @format */

import type { Metadata } from "next"
import { siteConfig } from "@/constants/site-config"

/**
 * ระบบจัดการข้อมูลส่วนหัวเว็บไซต์ (Metadata Engine)
 * จัดการพิกัด SEO และ Social Share ให้ตรงตามโครงสร้างข้อมูลใหม่
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
  const fullTitle = `${title} | ${siteConfig.project.slogan}`

  return {
    title: {
      default: fullTitle,
      template: `%s | ${siteConfig.project.shortName}`,
    },
    description,
    keywords: siteConfig.keywords.all,

    // 1. Root Level Authors: กำหนดตัวตนผู้จัดทำในระดับโครงสร้างหลัก
    authors: [
      {
        name: siteConfig.expert.name,
        url: siteConfig.project.url,
      },
    ],
    creator: siteConfig.expert.name,

    // กำหนด URL พื้นฐานเพื่อให้ระบบคำนวณ Path รูปภาพและ Link ต่างๆ ได้แม่นยำ
    metadataBase: new URL(siteConfig.project.url),

    openGraph: {
      title: fullTitle,
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
          alt: fullTitle,
        },
      ],
      // [FIXED]: ลบ authors ออกจากส่วนนี้เมื่อเป็น type: "website"
      // เพื่อป้องกัน Error TS2353 (Property 'authors' does not exist in type 'OpenGraphWebsite')
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@aemdevweb",
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
