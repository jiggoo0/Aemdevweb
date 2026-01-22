/** @format */

import type { Metadata } from "next"

/**
 * AEMDEVWEB Identity Configuration (2026 Edition)
 * Verified against Desktop PageSpeed Performance: 99/100
 * Identity Constraint: Specialist name "นายเอ็มซ่ามากส์" is strictly enforced.
 * Path: constants/site-config.ts
 */

export const siteConfig = {
  // Brand Identity
  name: "AEMDEVWEB",
  nameTH: "เอ็ม-เดฟ-เว็บ",
  shortName: "AEM",
  companyName: "AEMDEVWEB Co., Ltd.",
  expert: "นายเอ็มซ่ามากส์", // Enforced Specialist Identity
  role: "Technical SEO Consultant & Next.js Developer for SME",

  // USP & Positioning
  title: "AEMDEVWEB 2026: High-Performance Next.js & SEO Specialist",
  slogan: "Speed Launch & High Performance",
  description:
    "Specialized Next.js development with rank-first Technical SEO infrastructure by นายเอ็มซ่ามากส์. Verified Desktop LCP 0.6s and Green Score performance.",

  // URLs & Infrastructure
  url: "https://www.aemdevweb.com",
  ogImage: "https://www.aemdevweb.com/og-image.png",
  email: "me@aemdevweb.com",

  // CTA Settings
  cta: {
    main: "Consult Project",
    secondary: "View All Services",
    pricing: "Check Pricing Plans",
  },

  // Contact Infrastructure
  contact: {
    email: "me@aemdevweb.com",
    lineId: "@aemdevweb",
    facebook: "https://facebook.com/aemdevweb",
    linkedin: "https://www.linkedin.com/in/alongkorl-aemdevweb",
  },

  /**
   * Links Infrastructure
   * Standardized links to resolve TS2339 errors across components.
   */
  links: {
    line: "https://line.me/ti/p/@aemdevweb",
    lineId: "@aemdevweb",
    facebook: "https://facebook.com/aemdevweb",
    linkedin: "https://www.linkedin.com/in/alongkorl-aemdevweb",
  },

  // Technical Standards (Verified 2026 Production Results)
  standards: {
    performance: 99, // Verified Desktop Score from Report 217286.jpg
    lcp: 0.6, // Verified Largest Contentful Paint from Report 217286.jpg
    security: "Enterprise SSL (HTTPS)",
    aiReadiness: "Schema Markup & JSON-LD Embedded",
  },

  // SEO Strategy: Optimized Keyword Groups (Standardized for 2026)
  keywords: {
    list: [
      "รับทำ SEO SME",
      "รับทำเว็บไซต์ประสิทธิภาพสูง",
      "วางระบบ SEO มาตรฐานสากล",
      "รับทำเว็บไซต์ Next.js",
      "SME Business Speed Launch",
      "ที่ปรึกษา Technical SEO รายเดือน",
      "รับทำเว็บไซต์โรงงานอุตสาหกรรม",
      "รับทำเว็บไซต์ธุรกิจส่งออก",
      "นายเอ็มซ่ามากส์",
      "AEMDEVWEB",
    ],
    all: "รับทำ SEO SME, รับทำเว็บไซต์ประสิทธิภาพสูง, วางระบบ SEO มาตรฐานสากล, รับทำเว็บไซต์ Next.js, SME Business Speed Launch, AEMDEVWEB, ที่ปรึกษา Technical SEO รายเดือน, นายเอ็มซ่ามากส์",
    
    core: [
      "รับทำ SEO SME",
      "รับทำเว็บไซต์ประสิทธิภาพสูง",
      "วางระบบ SEO มาตรฐานสากล",
      "รับทำเว็บไซต์ Next.js",
    ],
    
    // Industry-specific clusters for Topical Authority
    segments: {
      industrial: ["เว็บไซต์โรงงานอุตสาหกรรม", "ระบบ E-Catalog สินค้า", "Industrial Web Architecture"],
      contractor: ["เว็บไซต์ธุรกิจรับเหมา", "มาตรฐานวิศวกรรมนิติบุคคล", "Engineering SEO Strategy"],
      export: ["เว็บไซต์ธุรกิจส่งออก", "Global SEO Infrastructure", "Export Business Web Strategy"],
      tourism: ["ระบบจองทัวร์มาตรฐานสูง", "Corporate Outing Website", "B2B Tourism SEO"],
      agriculture: ["Smart Agri-Tech Web Solution", "เว็บไซต์เกษตรกรรมส่งออก", "GAP Standard Digitalization"],
    },

    tech: [
      "SME Business Speed Launch",
      "Technical SEO Infrastructure",
      "Web Performance Optimization",
      "Google AI Search Optimization",
      "ที่ปรึกษา Technical SEO รายเดือน",
    ],
    brand: ["AEMDEVWEB", "เอ็มเดฟเว็บ", "นายเอ็มซ่ามากส์"],
  },
}

/**
 * Metadata Constructor
 * Generates dynamic metadata for Next.js App Router (SEO Optimized)
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
    other: {
      "fb:pages": "914706508399571",
    },
  }
}
