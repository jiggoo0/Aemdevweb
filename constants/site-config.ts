/** @format */

import type { Metadata } from "next"

/**
 * 🛠️ AEMDEVWEB Identity Configuration (2026 Edition)
 * ข้อมูลอัตลักษณ์แบรนด์ กลยุทธ์ SEO และมาตรฐานทางเทคนิค
 *
 * @path src/constants/site-config.ts
 */

export const siteConfig = {
  // 🆔 Brand Identity
  name: "AEMDEVWEB",
  nameTH: "เอ็ม-เดฟ-เว็บ",
  shortName: "AEM",
  companyName: "AEMDEVWEB Co., Ltd.",
  expert: "นายเอ็มซ่ามากส์ (Alongkorl)",
  role: "ที่ปรึกษา Technical SEO และผู้พัฒนาเว็บไซต์ Next.js สำหรับ SME",

  // 🎯 USP & Positioning
  title: "AEMDEVWEB 2026: รับทำเว็บไซต์ Next.js & SEO สายแรง",
  slogan: "Speed Launch & High Performance",
  description:
    "บริการรับทำเว็บไซต์ Next.js โหลดเร็วอันดับ 1 และรับวางโครงสร้าง Technical SEO รองรับ Google AI Search (SGE) สำหรับ SME โดยเฉพาะ",

  // 🌐 URLs & Contact Infrastructure
  url: "https://www.aemdevweb.com",
  ogImage: "https://www.aemdevweb.com/og-image.png",
  email: "me@aemdevweb.com",

  // 🖱️ CTA Settings (สำหรับไฟล์ Hero/CTASection)
  cta: {
    main: "ทักมาคุยโปรเจกต์กับผม",
    secondary: "ดูแพ็กเกจบริการทั้งหมด",
    pricing: "ดูราคาแต่ละแพ็กเกจ",
  },

  // 🔗 Legacy Links (Backward Compatibility)
  links: {
    line: "https://line.me/ti/p/@aemdevweb",
    lineId: "@aemdevweb",
    facebook: "https://facebook.com/aemdevweb",
    linkedin:
      "https://www.linkedin.com/in/alongkorl-aemdevweb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },

  // ℹ️ ข้อมูลการติดต่อ (New Structure)
  contact: {
    email: "me@aemdevweb.com",
    lineId: "@aemdevweb",
    facebook: "https://facebook.com/aemdevweb",
    linkedin:
      "https://www.linkedin.com/in/alongkorl-aemdevweb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },

  // 📊 The 2026 Standard (Technical Guarantees)
  standards: {
    performance: 100, // Google PageSpeed Insights Goal
    lcp: 1.2, // Largest Contentful Paint (Seconds)
    security: "Enterprise SSL (HTTPS)",
    aiReadiness: "Schema Markup & JSON-LD Embedded",
  },

  // 🎯 SEO Strategy: Keyword Groups
  keywords: {
    // สำหรับ Metadata Constructor (Array)
    list: [
      "รับทำ SEO SME",
      "จ้างทำเว็บไซต์ราคาประหยัด",
      "บริษัทรับทำ SEO สายขาว",
      "รับทำเว็บไซต์ Next.js",
      "SME Speed Launch",
      "AEMDEVWEB",
      "นายเอ็มซ่ามากส์",
    ],
    // สำหรับ Legacy metadata.ts (String)
    all: "รับทำ SEO SME, จ้างทำเว็บไซต์ราคาประหยัด, บริษัทรับทำ SEO สายขาว, รับทำเว็บไซต์ Next.js, SME Speed Launch, AEMDEVWEB, นายเอ็มซ่ามากส์",
    core: [
      "รับทำ SEO SME",
      "จ้างทำเว็บไซต์ราคาประหยัด",
      "บริษัทรับทำ SEO สายขาว",
      "รับทำเว็บไซต์ Next.js",
    ],
    tech: [
      "SME Speed Launch",
      "บริการวางระบบ SEO Technical",
      "Web Performance Optimization",
      "Google AI Search Optimization",
    ],
    brand: ["AEMDEVWEB", "เอ็มเดฟเว็บ", "นายเอ็มซ่ามากส์"],
  },
}

/**
 * ⚙️ Metadata Constructor
 * ฟังก์ชันสร้าง Metadata อัตโนมัติสำหรับ Next.js App Router
 * รองรับ OpenGraph และ Twitter Cards แบบ Dynamic
 */
export function constructMetadata({
  title = siteConfig.title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title: {
      default: `${title} | ${siteConfig.slogan}`,
      template: `%s | ${siteConfig.shortName}`,
    },
    description,
    authors: [{ name: siteConfig.expert, url: siteConfig.contact.linkedin }],
    creator: siteConfig.expert,
    publisher: siteConfig.companyName,
    keywords: siteConfig.keywords.list,
    openGraph: {
      type: "website",
      locale: "th_TH",
      url: siteConfig.url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${siteConfig.slogan}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: siteConfig.expert,
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
    // 🔌 Connect Facebook Page ID: 914706508399571 (Verified from Screenshot)
    other: {
      "fb:pages": "914706508399571",
    },
  }
}
