/**
 * [SYSTEM CORE]: GLOBAL_SITE_CONFIGURATION v17.5.5 (EEAT_STABILIZED)
 * [MANDATE]: Single Source of Truth | EEAT Alignment | Strategic Branding
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { SiteConfig } from "@/types";

export const SITE_CONFIG: SiteConfig = {
  // [01. BRAND IDENTITY]
  brandName: "AEMDEVWEB",
  siteUrl: "https://aemdevweb.com",
  description:
    "AEMDEVWEB | Web Development & SEO Solutions พัฒนาเว็บไซต์มาตรฐานสากล เพื่อการติดอันดับหน้าแรก Google อย่างมีประสิทธิภาพและยั่งยืน",

  // [02. HERO_REGISTRY]
  hero: {
    title: "AEMDEVWEB HYPER PERFORMANCE ARCHITECTURE",
    description:
      "Development & SEO Solutions พัฒนาเว็บไซต์มาตรฐานสากล เพื่อการติดอันดับ Google อย่างมีประสิทธิภาพธุรกิจคุณ By นายเอ็มซ่ามากส์",
    primaryAction: "ปรึกษาวางแผนระบบฟรี",
    secondaryAction: "ดูบริการทั้งหมด",
  },

  // [03. PERSONA ANCHOR]
  persona: {
    tone: "Strategic Partner, Expert Authority, Business-Centric",
    communicationStyle: "Result-oriented, Friendly Specialist, Clear & Honest",
    antiConnotation: "No Fluff, No Robot-speak, Avoid Over-promising without Logic",
  },

  // [04. SEO AUTHORITY]
  keywords: [
    "รับทำเว็บไซต์",
    "รับทำ SEO สายขาว",
    "รับออกแบบเว็บไซต์ บริษัท",
    "รับทำ Sale Page ยิงแอด",
    "จ้างทำเว็บไซต์ ติดหน้าแรก Google",
    "รับทำเว็บ E-commerce",
    "รับทำเว็บไซต์ Next.js",
    "ที่ปรึกษา SEO",
    "AEMDEVWEB",
    "นายเอ็มซ่ามากส์",
    "นาย อลงกรณ์ ยมเกิด",
    "Technical SEO Specialist Thailand",
  ],

  // [05. TECHNICAL_STACK]
  project: {
    title: "AEMDEVWEB | Web Design & SEO Expert Hub",
    shortTitle: "AEMDEVWEB",
    version: "17.5.5", // Sync with types
    framework: "Next.js 16.1 (Latest Stable)",
    uiStack: "Tailwind CSS + React 19",
  },

  // [06. EXPERT NODE]
  expert: {
    displayName: "นายเอ็มซ่ามากส์",
    legalName: "Alongkorn Yomkerd",
    legalNameThai: "อลงกรณ์ ยมเกิด",
    role: "Technical SEO Specialist",
    jobTitle: "Technical SEO Specialist & Web Architect",
    signature: "นายเอ็มซ่ามากส์",
    avatar: "/images/avatar.webp",
    email: "me@aemdevweb.com",
    bioUrl: "/about",
    googleMerchantId: "8653147979146207424",
  },

  // [07. CONTACT & ACCESS]
  contact: {
    email: "me@aemdevweb.com",
    phone: "099-032-2175",
    displayPhone: "099 032 2175 (สายด่วนปรึกษาช่างเอ็ม)",
    address: "กำแพงเพชร, ประเทศไทย (ให้บริการทั่วประเทศ)",
    streetAddress: "ตำบลในเมือง อำเภอเมืองกำแพงเพชร",
    postalCode: "62000",
    workHours: "จันทร์ - ศุกร์, 09:00 - 18:00 (ตอบแชทไวตลอดวัน)",
  },

  // [08. STRATEGIC LINKS]
  links: {
    line: "https://lin.ee/kVRNkIy",
    lineId: "@127cnhtn",
    messenger: "https://m.me/aemdevweb",
    facebook: "https://facebook.com/aemdevweb",
    github: "https://github.com/aemdevweb",
    googleMaps: "https://share.google/MMWnXPv3evv4Qd8aC",
    googleReview: "https://search.google.com/local/writereview?placeid=ChIJ0S9uG79lHTERERERERERERE",
  },

  // [09. BUSINESS METRICS]
  business: {
    location: "กำแพงเพชร",
    region: "Northern Thailand (ภาคเหนือ)",
    industry: "Web Infrastructure & Technical SEO",
    roiFocus: true,
    established: "2026",
    // [UPDATE]: เพิ่มสถานะโหนดเพื่อให้ LayoutEngine แสดงผลถูกต้อง
    status: "Stable",
    ids: {
      businessProfileId: "17539943195708104348",
      storeCode: "01162024004001766449",
    },
  },

  // [10. ENGINE VERIFICATION]
  verification: {
    google: "HmlcGbJ8eKWuc1QN_UUpBQ",
  },
} as const;

export type GlobalConfig = typeof SITE_CONFIG;
