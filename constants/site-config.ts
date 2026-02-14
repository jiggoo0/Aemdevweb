/**
 * [SYSTEM CORE]: GLOBAL_SITE_CONFIGURATION v17.9.98 (ULTIMATE_HARDENED)
 * [STRATEGY]: Dual-Language Identity | E-E-A-T Enforcement | Global Reach
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { SiteConfig } from "@/types";

const GOOGLE_MAPS_URL = "https://share.google/MMWnXPv3evv4Qd8aC";

export const SITE_CONFIG: SiteConfig = {
  brandName: "AEMDEVWEB",
  siteUrl: "https://aemdevweb.com",
  description:
    "AEMDEVWEB | Web Infrastructure & Technical SEO Specialist พัฒนาเว็บไซต์มาตรฐานสากลเพื่อการติดอันดับ Google อย่างยั่งยืนและมีประสิทธิภาพ",
  logo: "/images/logo-main.webp",

  // [INFRASTRUCTURE]: Social Graph & Identity Signals
  ogImage: "/images/og-main.webp",
  locale: "th_TH",
  themeColor: "#ef4444",

  hero: {
    title: "AEMDEVWEB HYPER-PERFORMANCE ARCHITECTURE",
    description:
      "โครงสร้างเว็บไซต์และกลยุทธ์ SEO ระดับ Specialist เพื่อการเติบโตของธุรกิจในยุค AI-Search 2026 โดย นายเอ็มซ่ามากส์ (Alongkorn Yomkerd)", // [UPDATED]: Dual Name in Hero
    primaryAction: "ปรึกษาวางแผนระบบฟรี",
    secondaryAction: "วิเคราะห์บริการทั้งหมด",
  },

  persona: {
    tone: "Strategic Partner, Technical Authority, Business-Centric",
    communicationStyle: "Result-oriented, Friendly Specialist, Transparent & Logical",
    antiConnotation: "No Fluff, No Robot-speak, Avoid Over-promising without Engineering Data",
  },

  keywords: [
    "รับทำเว็บไซต์",
    "รับทำ SEO สายขาว",
    "Technical SEO Specialist Thailand",
    "รับออกแบบเว็บไซต์ บริษัท",
    "รับทำ Sale Page ยิงแอด",
    "จ้างทำเว็บไซต์ ติดหน้าแรก Google",
    "รับทำเว็บไซต์ Next.js",
    "AEMDEVWEB",
    "นายเอ็มซ่ามากส์ AEMDEVWEB",
    "อลงกรณ์ ยมเกิด",
    "Alongkorn Yomkerd",
    "Web Infrastructure Specialist",
  ],

  project: {
    title: "AEMDEVWEB | High-End Web & SEO Expert Hub (นายเอ็มซ่ามากส์)", // [UPDATED]: Combined Title
    shortTitle: "AEMDEVWEB",
    version: "17.9.98", // [INCREMENTED]: Dual-Language Identity Patch
    framework: "Next.js 16.1.6 (App Router)",
    uiStack: "React 19 + Tailwind CSS 4",
  },

  expert: {
    displayName: "นายเอ็มซ่ามากส์ (Alongkorn Yomkerd)", // [UPDATED]: Combined for UI visibility
    legalName: "Alongkorn Yomkerd",
    legalNameThai: "อลงกรณ์ ยมเกิด",
    role: "Technical SEO Specialist",
    jobTitle: "Web Architect & Technical SEO Specialist",
    signature: "AEMDEVWEB Specialist",
    avatar: "/images/avatar.webp",
    email: "me@aemdevweb.com",
    bioUrl: "/services/bio",
    bio: "ผู้เชี่ยวชาญด้านวิศวกรรมเว็บไซต์และ Technical SEO (Alongkorn Yomkerd) ที่เน้นการสร้างผลลัพธ์ทางธุรกิจ (ROI) ผ่านโครงสร้างพื้นฐานดิจิทัลที่แข็งแกร่ง",
    googleMerchantId: "8653147979146207424",
    twitterHandle: "@aemdevweb",
  },

  contact: {
    email: "me@aemdevweb.com",
    phone: "099-032-2175",
    displayPhone: "099 032 2175 (สายด่วนปรึกษานายเอ็มซ่ามากส์)",
    address: "กำแพงเพชร, ประเทศไทย",
    streetAddress: "ตำบลในเมือง อำเภอเมืองกำแพงเพชร",
    postalCode: "62000",
    workHours: "จันทร์ - ศุกร์, 09:00 - 18:00 (Engineering Support 24/7)",
    mapUrl: GOOGLE_MAPS_URL,
  },

  links: {
    line: "https://lin.ee/kVRNkIy",
    lineId: "@127cnhtn",
    messenger: "https://m.me/aemdevweb",
    facebook: "https://www.facebook.com/share/18HFcziyn7/",
    github: "https://github.com/aemdevweb",
    twitter: "https://x.com/aemdevweb",
    youtube: "https://youtube.com/@aemdevweb",
    googleMaps: GOOGLE_MAPS_URL,
    googleReview: "https://search.google.com/local/writereview?placeid=ChIJ0S9uG79lHTERERERERERERE",
  },

  business: {
    location: "กำแพงเพชร",
    region: "Northern Thailand",
    industry: "Digital Infrastructure & SEO",
    roiFocus: true,
    established: "2024",
    status: "Stable",
    priceRange: "฿฿฿",
    ids: {
      businessProfileId: "17539943195708104348",
      storeCode: "01162024004001766449",
    },
  },

  analytics: {
    gaId: "G-XXXXXXXXXX",
  },

  verification: {
    google: "HmlcGbJ8eKWuc1QN_UUpBQ",
    facebook: "fb_domain_verification_id",
  },
} as const;
