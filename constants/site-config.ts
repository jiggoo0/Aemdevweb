/**
 * [SYSTEM CORE]: GLOBAL_SITE_CONFIGURATION v17.0.1 (STABILIZED)
 * [MANDATE]: Single Source of Truth | EEAT Alignment | Strategic Branding
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { SiteConfig } from "@/types";

export const SITE_CONFIG: SiteConfig = {
  // [01. BRAND IDENTITY]: ข้อมูลระบุตัวตนพื้นฐาน
  brandName: "AEMDEVWEB",
  siteUrl: "https://aemdevweb.com",
  description:
    "รับทำเว็บไซต์และ SEO สายพันธุ์ใหม่ เน้นผลลัพธ์ทางธุรกิจ เปลี่ยนผู้เข้าชมให้เป็นลูกค้าด้วยดีไซน์เชิงกลยุทธ์และเทคโนโลยีความเร็วสูงจาก AEMDEVWEB",

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

  // [04. SEO AUTHORITY]: ชุดคำค้นหาสำคัญเพื่อการทำอันดับ (Optimized for Thai Trends)
  keywords: [
    "รับทำเว็บไซต์", // Mass Keyword
    "รับออกแบบเว็บไซต์", // Secondary Mass Keyword
    "รับทำเว็บไซต์ กำแพงเพชร", // Local SEO
    "ทำเว็บติดหน้าแรก Google", // Search Intent
    "รับทำเว็บไซต์ Next.js", // Niche Tech Stack
    "รับทำเว็บขายของออนไลน์", // E-commerce Focus
    "จ้างทำเว็บไซต์ บริษัท", // Corporate Trust
    "ทำเว็บไซต์ SEO", // Marketing Focus
  ],

  // [05. TECHNICAL_STACK]: ข้อมูลทางเทคนิคของระบบ
  project: {
    title: "Premium Web Design & SEO Expert Hub",
    shortTitle: "AEMDEVWEB",
    version: "16.3.0",
    framework: "Next.js 16.1 (Latest Stable)",
    uiStack: "Tailwind CSS + React 19",
  },

  // [06. EXPERT NODE]: ข้อมูลผู้เชี่ยวชาญ (EEAT Standard)
  expert: {
    displayName: "นายเอ็มซ่ามากส์",
    legalName: "Alongkorl Yomkert",
    legalNameThai: "อลงกรณ์ ยมเกิด",
    // สำหรับแสดงผลบนหน้าเว็บ (Human Readable)
    role: "ผู้เชี่ยวชาญด้านเทคนิคและผู้วางกลยุทธ์ SEO (Technical SEO Specialist)",
    // สำหรับ Schema.org (Bot Optimized)
    jobTitle: "Technical SEO Specialist",
    signature: "นายเอ็มซ่ามากส์",
    avatar: "/images/avatar.webp",
    email: "contact@aemdevweb.com",
    bioUrl: "/about",
  },

  // [07. CONTACT & ACCESS]: ช่องทางการติดต่อ
  contact: {
    email: "contact@aemdevweb.com",
    phone: "099-032-2175",
    displayPhone: "ทักแชทผ่าน Line Account เพื่อการตอบกลับที่รวดเร็วที่สุดครับ",
    address: "จังหวัดกำแพงเพชร ประเทศไทย",
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

  // [09. BUSINESS METRICS]: ข้อมูลพื้นที่บริการ (Local SEO Focus)
  business: {
    // [STRATEGY]: ระบุ "จังหวัด" ชัดเจนเพื่อเป็นฐานทัพหลัก (HQ Node) สำหรับ Local SEO
    location: "Kamphaeng Phet",

    // [STRATEGY]: ระบุ Scope กว้างระดับประเทศ เพื่อไม่ให้ Google จำกัดการแสดงผลแค่ในจังหวัด
    region: "Thailand",

    // [STRATEGY]: ใช้คำศัพท์ Technical เพื่อดึงดูดลูกค้าเกรด Premium
    industry: "Web Infrastructure & Technical SEO",

    roiFocus: true,
    established: "2026",
  },

  // [10. ENGINE VERIFICATION]: การยืนยันสิทธิ์ระบบ
  verification: {
    google: "google-site-verification-id", // อย่าลืมใส่ค่าจริงเมื่อได้จาก GSC
  },
} as const;

/* TYPE EXPORT */
export type GlobalConfig = typeof SITE_CONFIG;
