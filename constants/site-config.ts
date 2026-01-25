/** @format */

import type { Metadata } from "next"
import type { SiteConfig } from "@/types"

export const siteConfig: SiteConfig = {
  name: "AEMDEVWEB",
  shortName: "AEM",
  nameTH: "เอ็ม-เดฟ-เว็บ",
  companyName: "AEMDEVWEB Co., Ltd.",
  title:
    "รับทำเว็บไซต์ Landing Page เน้นปิดการขาย - AEMDEVWEB (นายเอ็มซ่ามากส์)",
  slogan: "เว็บโหลดไว อันดับพุ่ง ยอดขายมาจริง",
  expert: "นายเอ็มซ่ามากส์",
  role: "Technical SEO Consultant & Next.js Structure Specialist",
  description:
    "บริการวางโครงสร้างระบบ Landing Page สำหรับ SME ที่เน้นประสิทธิภาพความเร็วสูงสุด วางพิกัดงานเทคนิค SEO ตั้งแต่เลเยอร์แรกโดย นายเอ็มซ่ามากส์ เพื่อเพิ่มโอกาสการเข้าถึงและอัตราการปิดยอดขาย การันตี LCP 0.6s พร้อมการดูแลชุดระบบระยะยาว",
  url: "https://www.aemdevweb.com",
  ogImage: "https://www.aemdevweb.com/og-image.png",
  email: "me@aemdevweb.com",

  keywords: {
    list: [
      "รับทำเว็บไซต์ Landing Page",
      "รับทำ SEO SME",
      "เว็บไซต์เน้นปิดการขาย",
      "ที่ปรึกษา Technical SEO",
      "นายเอ็มซ่ามากส์",
      "AEMDEVWEB",
    ],
    all: "รับทำเว็บไซต์ Landing Page, เน้นปิดการขาย, รับทำ SEO SME, ดูแลเว็บไซต์รายเดือน, นายเอ็มซ่ามากส์, AEMDEVWEB",
    core: [
      "Technical SEO Optimization",
      "Organic Search Strategy",
      "Conversion Rate Optimization",
    ],
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "System Structure",
    ],
    brand: [
      "AEMDEVWEB",
      "นายเอ็มซ่ามากส์",
      "Alongkorl Yomkerd",
      "Unlink-th Provider",
    ],
  },

  links: {
    line: "https://lin.ee/6lgJox0",
    lineId: "@127cnthn",
    facebook: "https://facebook.com/aemdevweb",
    linkedin: "https://www.linkedin.com/in/alongkorl-aemdevweb",
    personal: "https://me.aemdevweb.com",
  },

  contact: {
    email: "me@aemdevweb.com",
    lineId: "@127cnthn",
    facebook: "https://facebook.com/aemdevweb",
    linkedin: "https://www.linkedin.com/in/alongkorl-aemdevweb",
  },

  cta: {
    main: "Consult Project",
    secondary: "View All Services",
    pricing: "Check Pricing Plans",
  },

  standards: {
    performance: 100,
    lcp: 0.6,
    security: "Enterprise-Grade SSL (HSTS Enabled)",
    aiReadiness: "Advanced Schema Markup & JSON-LD Injection",
  },
}

export function constructMetadata({
  title = siteConfig.title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = "/favicon.ico",
  canonical = siteConfig.url,
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  canonical?: string
  noIndex?: boolean
} = {}): Metadata {
  const fullTitle = `${title} | ${siteConfig.slogan}`

  return {
    title: {
      default: fullTitle,
      template: `%s | ${siteConfig.shortName}`,
    },
    description,
    keywords: siteConfig.keywords.all,
    authors: [{ name: siteConfig.expert, url: siteConfig.url }],
    creator: siteConfig.expert,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      title: fullTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
      siteName: siteConfig.name,
      locale: "th_TH",
      type: "website",
      url: canonical,
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
