/** @format */

import type { Metadata } from "next"

/**
 * 🌐 Site Configuration – AEMDEVWEB (v.2026)
 * ศูนย์กลางข้อมูลตัวตนสำหรับ SME เจ้าของกิจการ บริษัท และโรงงานอุตสาหกรรม
 */

export const siteConfig = {
  /* 🏢 Brand Identity: นายเอ็มซ่ามากส์ */
  name: "นายเอ็มซ่ามากส์ (AEMDEVWEB)",
  companyName: "AEMDEVWEB Specialist Solutions",
  shortName: "นายเอ็มซ่ามากส์",
  email: "me@aemdevweb.com",

  // 🧬 DNA: ความไวที่สร้างแต้มต่อให้ธุรกิจ
  tagline: "สร้างเว็บที่เปิดไวทันใจ เพื่อให้ธุรกิจของคุณนำหน้าคู่แข่งในทุกคลิก",

  title:
    "นายเอ็มซ่ามากส์ | รับทำเว็บไซต์ SME เจ้าของกิจการ บริษัท และโรงงานอุตสาหกรรม",
  description:
    "บริการทำเว็บไซต์ที่เน้นความเร็วและการปิดการขาย สำหรับเจ้าของกิจการและโรงงาน โดยนายเอ็มซ่ามากส์ งานเนี๊ยบ ดูแลดี ไม่ทิ้งงาน พร้อมดันอันดับ Google ให้ธุรกิจของคุณ",

  /* 🌐 URLs & Assets */
  url: "https://www.aemdevweb.com",
  ogImage: "https://www.aemdevweb.com/og-image.png",

  /* 🔗 Social & Direct Links */
  links: {
    facebook: "https://www.facebook.com/share/186gv7BAsc/",
    messenger: "https://m.me/aemdevweb",
    line: "https://lin.ee/SVMBEJ8",
    lineId: "@127cnhtn",
    github: "https://github.com/jiggoo0",
  },

  /* 🚀 Call to Action */
  cta: {
    main: "ปรึกษา นายเอ็มซ่ามากส์",
    secondary: "ดูผลงานทั้งหมด",
    pricing: "ประเมินราคาโปรเจกต์",
  },

  /* 📞 Contact Channel */
  contact: {
    email: "me@aemdevweb.com",
    tel: "099-999-8989",
    telDisplay: "099-999-8989 (สายตรง นายเอ็มซ่ามากส์)",
    address: "Technical Office: Thailand / Service Online 24/7",
  },

  /* 📈 SEO Keywords (2026 Specialist Strategy) */
  keywords: [
    // --- Brand & Identity ---
    "นายเอ็มซ่ามากส์",
    "เอ็มซ่ามากส์",
    "AEMDEVWEB",

    // --- Core Services (SME & Corporate) ---
    "รับทำเว็บไซต์ SME",
    "รับทำเว็บไซต์บริษัท",
    "จ้างทำเว็บไซต์ หจก",
    "ทำเว็บ Sale Page ปิดการขาย",
    "รับทำ Landing Page ยิงแอด",
    "ออกแบบเว็บไซต์ธุรกิจ",

    // --- Industrial Focus ---
    "รับทำเว็บไซต์โรงงานอุตสาหกรรม",
    "ทำเว็บแคตตาล็อกสินค้าอุตสาหกรรม",
    "เว็บไซต์บริษัท B2B",

    // --- Performance & SEO Specialist ---
    "รับทำ SEO ดันอันดับ",
    "Technical SEO Specialist Thailand",
    "รับแก้เว็บไซต์ช้า",
    "เว็บไซต์โหลดไวที่สุด 2026",

    // --- Trust & Pain Points ---
    "คนทำเว็บไม่ทิ้งงาน",
    "รับทำเว็บไซต์ราคาคุ้มค่า",
    "คนทำเว็บคุยง่าย",
  ] as string[],

  /* 🎨 Visual Theme */
  themeColor: "#0F172A",
}

export type SiteConfig = typeof siteConfig

/* 🛠️ Metadata Helper: ตัวช่วยสร้างข้อมูล SEO รายหน้า */
export function constructMetadata({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
} = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.shortName}`
    : siteConfig.title

  return {
    title: pageTitle,
    description,
    keywords: siteConfig.keywords, // ใช้ Keywords ชุดใหญ่เป็นฐาน
    authors: [{ name: siteConfig.shortName }],
    creator: siteConfig.companyName,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: "website",
      locale: "th_TH",
      url: siteConfig.url,
      siteName: siteConfig.shortName,
      title: pageTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [image],
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}
