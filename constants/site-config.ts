/**
 * [SYSTEM CORE]: GLOBAL_SITE_CONFIGURATION v17.8.1 (REFINED)
 * [STRATEGY]: Single Source of Truth | Dead Type Elimination | Encapsulation
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { SiteConfig } from "@/types";

/**
 * [CORE_IDENTITY]: แหล่งข้อมูลอ้างอิงหลักของระบบ (Single Source of Truth)
 * ห้ามทำการ Hardcode ข้อมูลเหล่านี้ลงใน Component โดยเด็ดขาด
 */
export const SITE_CONFIG: SiteConfig = {
  // =========================================
  // [01] BRAND IDENTITY & CORE MISSION
  // =========================================
  brandName: "AEMDEVWEB",
  siteUrl: "https://aemdevweb.com",
  description:
    "AEMDEVWEB | Web Infrastructure & Technical SEO Specialist พัฒนาเว็บไซต์มาตรฐานสากลเพื่อการติดอันดับ Google อย่างยั่งยืนและมีประสิทธิภาพ",

  // =========================================
  // [02] STRATEGIC HERO REGISTRY
  // =========================================
  hero: {
    title: "AEMDEVWEB HYPER-PERFORMANCE ARCHITECTURE",
    description:
      "วิศวกรรมโครงสร้างเว็บไซต์และกลยุทธ์ SEO ระดับ Specialist เพื่อการเติบโตของธุรกิจในยุค AI-Search 2026 โดย นายเอ็มซ่ามากส์ (Alongkorn Yomkerd)",
    primaryAction: "ปรึกษาวางแผนระบบฟรี",
    secondaryAction: "วิเคราะห์บริการทั้งหมด",
  },

  // =========================================
  // [03] PERSONA & COMMUNICATION ANCHOR
  // =========================================
  persona: {
    tone: "Strategic Partner, Technical Authority, Business-Centric",
    communicationStyle: "Result-oriented, Friendly Specialist, Transparent & Logical",
    antiConnotation: "No Fluff, No Robot-speak, Avoid Over-promising without Engineering Data",
  },

  // =========================================
  // [04] SEO & ENTITY AUTHORITY (EEAT)
  // =========================================
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

  // =========================================
  // [05] TECHNICAL STACK REVISIT
  // =========================================
  project: {
    title: "AEMDEVWEB | High-End Web & SEO Expert Hub",
    shortTitle: "AEMDEVWEB",
    version: "17.8.1",
    framework: "Next.js 16.1.6 (App Router)",
    uiStack: "React 19 + Tailwind CSS 4",
  },

  // =========================================
  // [06] EXPERT NODE (EEAT CORE)
  // =========================================
  expert: {
    displayName: "นายเอ็มซ่ามากส์ (AemSaMak)",
    legalName: "Alongkorn Yomkerd",
    legalNameThai: "อลงกรณ์ ยมเกิด",
    role: "Technical SEO Specialist",
    jobTitle: "Web Architect & Technical SEO Specialist",
    signature: "AEMDEVWEB Specialist",
    avatar: "/images/avatar.webp",
    email: "me@aemdevweb.com",
    bioUrl: "/services/bio",
    bio: "ผู้เชี่ยวชาญด้านวิศวกรรมเว็บไซต์และ Technical SEO ที่เน้นการสร้างผลลัพธ์ทางธุรกิจ (ROI) ผ่านโครงสร้างพื้นฐานดิจิทัลที่แข็งแกร่ง",
    googleMerchantId: "8653147979146207424",
  },

  // =========================================
  // [07] CONTACT & GEOGRAPHIC ACCESS
  // =========================================
  contact: {
    email: "me@aemdevweb.com",
    phone: "099-032-2175",
    displayPhone: "099 032 2175 (สายด่วนปรึกษานายเอ็มซ่ามากส์)",
    address: "กำแพงเพชร, ประเทศไทย",
    streetAddress: "ตำบลในเมือง อำเภอเมืองกำแพงเพชร",
    postalCode: "62000",
    workHours: "จันทร์ - ศุกร์, 09:00 - 18:00 (Engineering Support 24/7)",
    mapUrl: "https://share.google/MMWnXPv3evv4Qd8aC",
  },

  // =========================================
  // [08] STRATEGIC CONNECTIVITY
  // =========================================
  links: {
    line: "https://lin.ee/kVRNkIy",
    lineId: "@127cnhtn",
    messenger: "https://m.me/aemdevweb",
    facebook: "https://facebook.com/aemdevweb",
    github: "https://github.com/aemdevweb",
    googleMaps: "https://share.google/MMWnXPv3evv4Qd8aC",
    googleReview: "https://search.google.com/local/writereview?placeid=ChIJ0S9uG79lHTERERERERERERE",
  },

  // =========================================
  // [09] BUSINESS & TRUST METRICS
  // =========================================
  business: {
    location: "กำแพงเพชร",
    region: "Northern Thailand",
    industry: "Digital Infrastructure & SEO",
    roiFocus: true,
    established: "2026",
    status: "Stable",
    ids: {
      businessProfileId: "17539943195708104348",
      storeCode: "01162024004001766449",
    },
  },

  // =========================================
  // [10] SECURITY & VERIFICATION
  // =========================================
  verification: {
    google: "HmlcGbJ8eKWuc1QN_UUpBQ",
  },
} as const;
