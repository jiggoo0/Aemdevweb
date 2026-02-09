/**
 * [SYSTEM CORE]: GLOBAL_SITE_CONFIGURATION v17.5.2 (AUTHENTICATED)
 * [MANDATE]: Single Source of Truth | EEAT Alignment | Strategic Branding
 * [UPDATE]: ผสานข้อมูล Google Business Profile IDs เพื่อการยืนยันตัวตนระดับสูง
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { SiteConfig } from "@/types";

export const SITE_CONFIG: SiteConfig = {
  // [01. BRAND IDENTITY]: ข้อมูลระบุตัวตนพื้นฐาน
  brandName: "AEMDEVWEB",
  siteUrl: "https://aemdevweb.com",
  description:
    "AEMDEVWEB | Web Development & SEO Solutions พัฒนาเว็บไซต์มาตรฐานสากล เพื่อการติดอันดับหน้าแรก Google อย่างมีประสิทธิภาพและยั่งยืน",

  // [02. HERO_REGISTRY]: ศูนย์กลางควบคุมเนื้อหาหน้าแรก
  hero: {
    title: "AEMDEVWEB HYPER PERFORMANCE ARCHITECTURE",
    description:
      "Development & SEO Solutions พัฒนาเว็บไซต์มาตรฐานสากล เพื่อการติดอันดับ Google อย่างมีประสิทธิภาพธุรกิจคุณ By นายเอ็มซ่ามากส์",
    primaryAction: "ปรึกษาวางแผนระบบฟรี",
    secondaryAction: "ดูบริการทั้งหมด",
  },

  // [03. PERSONA ANCHOR]: โทนและการสื่อสาร
  persona: {
    tone: "Strategic Partner, Expert Authority, Business-Centric",
    communicationStyle: "Result-oriented, Friendly Specialist, Clear & Honest",
    antiConnotation: "No Fluff, No Robot-speak, Avoid Over-promising without Logic",
  },

  // [SYSTEM: PROTECTED_DATA_START]
  // [04. SEO AUTHORITY]: ชุดคำค้นหาเชิงยุทธศาสตร์ (High Intent Keywords 2026)
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
  // [SYSTEM: PROTECTED_DATA_END]

  // [05. TECHNICAL_STACK]: ข้อมูลทางเทคนิคของระบบ
  project: {
    title: "AEMDEVWEB | Web Design & SEO Expert Hub",
    shortTitle: "AEMDEVWEB",
    version: "17.5.2",
    framework: "Next.js 16.1 (Latest Stable)",
    uiStack: "Tailwind CSS + React 19",
  },

  // [06. EXPERT NODE]: ข้อมูลผู้เชี่ยวชาญ (EEAT) และ Google Identity
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
    // [VERIFIED]: รหัส Business Manager (om-8653...)
    googleMerchantId: "8653147979146207424",
  },

  // [07. CONTACT & ACCESS]: ช่องทางการเข้าถึงแบบ Official
  contact: {
    email: "me@aemdevweb.com",
    phone: "099-032-2175",
    displayPhone: "099 032 2175 (สายด่วนปรึกษาช่างเอ็ม)",
    address: "ประเทศไทย (ให้บริการทุกจังหวัดทั่วประเทศ)",
    streetAddress: "ตำบลในเมือง อำเภอเมืองกำแพงเพชร",
    postalCode: "62000",
    workHours: "จันทร์ - ศุกร์, 09:00 - 18:00 (ตอบแชทไวตลอดวัน)",
  },

  // [08. STRATEGIC LINKS]: โหนดเชื่อมโยงเครือข่ายดิจิทัล
  links: {
    line: "https://lin.ee/kVRNkIy",
    lineId: "@127cnhtn",
    messenger: "https://m.me/aemdevweb",
    facebook: "https://facebook.com/aemdevweb",
    github: "https://github.com/aemdevweb",
    // [UPDATE]: ลิงก์แผนที่จริง
    googleMaps: "https://share.google/MMWnXPv3evv4Qd8aC",
    // [TODO]: รอการอัปเดต Place ID จริงแทนที่ ChIJ... เพื่อให้ลิงก์รีวิวทำงานสมบูรณ์
    googleReview: "https://search.google.com/local/writereview?placeid=ChIJ0S9uG79lHTERERERERERERE",
  },

  // [09. BUSINESS METRICS]: ข้อมูลเชิงสถิติ & IDs
  business: {
    location: "Thailand",
    region: "ASEAN",
    industry: "Web Infrastructure & Technical SEO",
    roiFocus: true,
    established: "2026",
    // [NEW]: ชุดรหัสยืนยันตัวตนจาก Google Business Profile Setting
    ids: {
      businessProfileId: "17539943195708104348", // รหัสโปรไฟล์หลัก
      storeCode: "01162024004001766449",       // รหัสร้านค้า (ใช้สำหรับ Google Ads/Merchant)
    },
  },

  // [10. ENGINE VERIFICATION]: การยืนยันสิทธิ์
  verification: {
    google: "HmlcGbJ8eKWuc1QN_UUpBQ",
  },
} as const;

export type GlobalConfig = typeof SITE_CONFIG;
