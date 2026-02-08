/**
 * [SYSTEM CORE]: GLOBAL_SITE_CONFIGURATION v17.0.4 (NATIONWIDE_OPTIMIZED)
 * [MANDATE]: Single Source of Truth | EEAT Alignment | Strategic Branding
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { SiteConfig } from "@/types";

export const SITE_CONFIG: SiteConfig = {
  // [01. BRAND IDENTITY]: ข้อมูลระบุตัวตนพื้นฐาน
  brandName: "AEMDEVWEB",
  siteUrl: "https://aemdevweb.com",
  description:
    "AEMDEVWEB | รับทำเว็บไซต์และ SEO เน้นยอดขาย ติดหน้าแรก Google ด้วย NextJS มาตรฐานสากล",

  // [02. HERO_REGISTRY]: ศูนย์กลางควบคุมเนื้อหาหน้าแรก
  hero: {
    title: "AEMDEVWEB: Strategic Web Design for High-Conversion",
    description:
      "AEMDEVWEB ไม่ได้ทำแค่เว็บที่สวยงาม แต่เราวางโครงสร้างระบบให้เสถียร โหลดไวระดับเสี้ยววินาที เพื่อเปลี่ยนทุกการเข้าชมให้กลายเป็นยอดขายจริงสำหรับธุรกิจคุณ",
    primaryAction: "ปรึกษาวางแผนระบบฟรี",
    secondaryAction: "ดูบริการทั้งหมด",
  },

  // [03. PERSONA ANCHOR]: โทนและการสื่อสาร (Humanized Specialist)
  persona: {
    tone: "Professional Partner, Expert Authoritative, Trustworthy",
    communicationStyle: "Result-oriented, Friendly Expert, Direct & Clear",
    antiConnotation: "Avoid Robot-speak, No Over-complicated Jargon, Human-to-Human Focus",
  },

  // [04. SEO AUTHORITY]: ชุดคำค้นหาสำคัญเพื่อการทำอันดับ (Strategic Keyword Clusters)
  keywords: [
    // --- Commercial Intent (เน้นปิดการขายระดับประเทศ) ---
    "รับทำเว็บไซต์",
    "รับออกแบบเว็บไซต์",
    "จ้างทำเว็บไซต์ บริษัท",
    "รับทำ Salepage",
    "รับทำเว็บขายของออนไลน์",

    // --- Technical & Performance (เน้นกลุ่มลูกค้าพรีเมียม) ---
    "รับทำเว็บไซต์ Next.js",
    "ทำเว็บไซต์ SEO",
    "ทำเว็บโหลดเร็ว",
    "ทำเว็บ E-commerce",

    // --- Local & Branding (ยึดพื้นที่และตัวตน) ---
    "รับทำเว็บไซต์ กำแพงเพชร", // ยังคงไว้เพื่อยึดฐานที่มั่นเดิม
    "ทำเว็บติดหน้าแรก Google",
    "นาย อลงกรณ์ ยมเกิด",
    "นายเอ็มซ่ามากส์",
    "AEMDEVWEB",
  ],

  // [05. TECHNICAL_STACK]: ข้อมูลทางเทคนิคของระบบ
  project: {
    title: "Premium Web Design & SEO Expert Hub",
    shortTitle: "AEMDEVWEB",
    version: "17.0.4", // Incremented for Expanded Focus Update
    framework: "Next.js 16.1 (Latest Stable)",
    uiStack: "Tailwind CSS + React 19",
  },

  // [06. EXPERT NODE]: ข้อมูลผู้เชี่ยวชาญ (EEAT Standard)
  expert: {
    displayName: "นายเอ็มซ่ามากส์",
    legalName: "Alongkorn Yomkerd",
    legalNameThai: "อลงกรณ์ ยมเกิด",
    role: "ผู้เชี่ยวชาญด้านเทคนิคและผู้วางกลยุทธ์ SEO (Technical SEO Specialist)",
    jobTitle: "Technical SEO Specialist",
    signature: "นายเอ็มซ่ามากส์",
    avatar: "/images/avatar.webp",
    email: "me@aemdevweb.com",
    bioUrl: "/about",
  },

  // [07. CONTACT & ACCESS]: ช่องทางการติดต่อ
  contact: {
    email: "me@aemdevweb.com",
    phone: "099-032-2175",
    displayPhone: "ทักแชทผ่าน Line Account เพื่อการตอบกลับที่รวดเร็วที่สุดครับ",
    // [RETAINED]: คงไว้เพื่อ Google Search Console Verification (EEAT)
    streetAddress: "ตำบลในเมือง อำเภอเมืองกำแพงเพชร",
    // [EXPANDED]: ปรับข้อความแสดงผลให้กว้างขึ้น
    address: "ประเทศไทย (ให้บริการทุกจังหวัดทั่วประเทศ)",
    postalCode: "62000",
    workHours: "จันทร์ - ศุกร์, 09:00 - 18:00 (พร้อมให้คำปรึกษาแผนงาน)",
  },

  // [08. STRATEGIC LINKS]: ลิงก์ช่องทางโซเชียล
  links: {
    line: "https://lin.ee/kVRNkIy",
    lineId: "@127cnhtn",
    messenger: "https://m.me/aemdevweb",
    facebook: "https://facebook.com/aemdevweb",
    github: "https://github.com/private",
  },

  // [09. BUSINESS METRICS]: ข้อมูลพื้นที่บริการ (Expanded Focus)
  business: {
    location: "Thailand", // [CHANGED]: จาก Kamphaeng Phet เป็น Thailand
    region: "ASEAN", // [CHANGED]: ขยายขอบเขตภูมิภาค
    industry: "Web Infrastructure & Technical SEO",
    roiFocus: true,
    established: "2026",
  },

  // [10. ENGINE VERIFICATION]: การยืนยันสิทธิ์ระบบ
  verification: {
    google: "HmlcGbJ8eKWuc1QN_UUpBQ",
  },
} as const;

export type GlobalConfig = typeof SITE_CONFIG;
