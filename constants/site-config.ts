/** @format */
import { Metadata } from "next"

export const siteConfig = {
  // 🏢 1. Brand Information (Identity)
  name: "นายเอ็มซ่ามากส์",
  companyName: "นายเอ็มซ่ามากส์ DevWeb Solutions",
  shortName: "เอ็มซ่ามากส์",
  tagline: "ทำเว็บซ่าๆ ปิดการขายไวมากส์ สำหรับ SME ไทย",

  // 🏷️ SEO Defaults
  title: "นายเอ็มซ่ามากส์ - รับทำเว็บซ่าๆ ปิดการขายไวมากส์ สำหรับ SME ไทย",
  description:
    "รับทำเว็บไซต์หน้าเดียวปิดการขายฉบับ นายเอ็มซ่ามากส์ - คุยง่าย งานไว ไม่เรื่องเยอะ เน้นกดลิงก์ทักไลน์แล้วจบงานได้เลย ด้วยเทคโนโลยี Next.js 15",

  // 🌐 2. Canonical URLs & Assets
  url: "https://www.aemdevweb.com",
  ogImage: "https://www.aemdevweb.com/og-image.png",

  // 🔗 3. Social Media & Direct Links (The Sales Engine 🚀)
  links: {
    facebook: "https://www.facebook.com/share/186gv7BAsc/",
    messenger: "https://m.me/aemdevweb",
    line: "https://lin.ee/SVMBEJ8", // Link สำหรับกด Add Friend
    lineId: "@127cnhtn", // Display ID
    github: "https://github.com/aemdevweb", // Optional
  },

  // 📞 4. Contact Details
  contact: {
    email: "aemdevweb@gmail.com",
    tel: "099-999-8989",
    telDisplay: "099-999-8989",
    address: "Bangkok, Thailand",
  },

  // 📣 5. Call to Action (Wording)
  cta: {
    main: "ทักไลน์ ปรึกษาเอ็มเลย",
    secondary: "ดูผลงานที่ผ่านมา",
    consult: "จองคิวทำเว็บ",
    pricing: "เช็คราคาประเมิน",
  },

  // 📈 6. Keywords Strategy
  keywords: [
    "นายเอ็มซ่ามากส์",
    "เอ็มซ่ามากส์รับทำเว็บ",
    "รับทำเว็บไซต์ SME",
    "รับทำ Sale Page",
    "เว็บหน้าเดียวปิดการขาย",
    "AEMDEVWEB",
    "ทำเว็บทักไลน์",
    "รับทำเว็บ Next.js",
    "จ้างทำเว็บราคาถูก",
  ],

  // 🎨 7. Theme Identity
  themeColor: "#059669", // Emerald-600 (AEM Green)
} as const

export type SiteConfig = typeof siteConfig

/**
 * 🛠️ Metadata Generator Helper
 * ฟังก์ชันช่วยสร้าง SEO Tags ให้แต่ละหน้าอัตโนมัติ (Next.js 15 Standard)
 */
export function constructMetadata({
  title,
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
      default: title ? `${title} | ${siteConfig.shortName}` : siteConfig.title,
      template: `%s | ${siteConfig.shortName}`,
    },
    description,
    // ✅ Fix: Cast as string[] to resolve 'readonly' incompatibility with Metadata type
    keywords: siteConfig.keywords as unknown as string[],
    authors: [
      {
        name: siteConfig.name,
        url: siteConfig.url,
      },
    ],
    creator: siteConfig.companyName,
    openGraph: {
      title: title ? `${title} | ${siteConfig.shortName}` : siteConfig.title,
      description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
      type: "website",
      locale: "th_TH",
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteConfig.shortName}` : siteConfig.title,
      description,
      images: [image],
      creator: "@aemdevweb",
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}
