// @format
// พิกัดข้อมูล: constants/navigation.ts
// หน้าที่: กำหนดพิกัดทางเดินข้อมูล (Routing) และระบบเมนูสำหรับ www.aemdevweb.com
// ควบคุมมาตรฐานระดับ 7 โดย: นายเอ็มซ่ามากส์

import { siteConfig } from "./site-config";

/**
 * [TYPE DEFINITIONS]
 * โครงสร้างข้อมูลสำหรับระบบเมนูนำทาง (Navigation Structure)
 * ปรับปรุงเพื่อรองรับมาตรฐาน Next.js 16 App Router
 */
export interface NavItem {
  name: string;
  href: string;
  description?: string;
  badge?: string;
  external?: boolean;
  disabled?: boolean;
}

export interface NavigationConfig {
  main: NavItem[];
  footer: {
    services: NavItem[];
    company: NavItem[];
    support: NavItem[];
    legal: NavItem[];
  };
}

/**
 * Navigation Strategy 2026: "Authority & Conversion"
 * วางพิกัดเส้นทางผู้ใช้งานเพื่อส่งพลัง SEO และเพิ่มโอกาสการปิดการขาย
 */
export const navigation: NavigationConfig = {
  /* -------------------------- เมนูหลัก (Main Navbar) ---------------------------- */
  main: [
    {
      name: "หน้าแรก",
      href: "/",
      description: "ภาพรวมโครงสร้างระบบและจุดเด่นของบริการเพื่อการเติบโต",
    },
    {
      name: "บริการ",
      href: "/services",
      description: "รายละเอียดแผนการลงทุนและสเปกการทำงานระดับสากล",
    },
    {
      name: "Technical SEO",
      href: "/seo",
      badge: "Pro",
      description: "ปรับโครงสร้างระบบเว็บให้ Google รักและดันอันดับหน้าแรก",
    },
    {
      name: "เทมเพลต",
      href: "/templates",
      description: "คลังโครงสร้างเว็บไซต์ที่ผ่านการเพิ่มประสิทธิภาพพร้อมใช้งาน",
    },
    {
      name: "ผลงาน",
      href: "/case-studies",
      description: "กรณีศึกษาความสำเร็จและตัวอย่างเว็บไซต์มาตรฐานสากล",
    },
    {
      name: "ติดต่อเรา",
      href: "/contact",
      description: "ช่องทางการติดต่อเพื่อปรึกษาผู้เชี่ยวชาญโดยตรง",
    },
  ],

  /* --------------------------- เมนูท้ายเว็บ (Footer) --------------------------- */
  footer: {
    services: [
      {
        name: "High-Performance Sale Page",
        href: "/services/salepage_single",
        badge: "Popular",
        description: "เน้นอัตรา Conversion และความเร็วในการโหลดที่เป็นเลิศ",
      },
      {
        name: "Technical SEO Audit",
        href: "/seo/technical-audit",
        description: "เอกซเรย์โครงสร้างระบบเพื่อหาจุดบกพร่องด้านเทคนิค",
      },
      {
        name: "Web Speed Optimization",
        href: "/seo/speed-optimization",
        badge: "Hot",
        description: "จูนความเร็วหน้าเว็บให้โหลดไวระดับสูงสุด LCP < 0.8s",
      },
      {
        name: "Ranking Performance Care",
        href: "/services/seo_agency",
        description: "การจัดการอันดับและเสถียรภาพของระบบในระยะยาว",
      },
    ],

    company: [
      {
        name: "เกี่ยวกับ AEMDEVWEB",
        href: "/about",
      },
      {
        name: "พอร์ตโฟลิโอและผลงาน",
        href: "/case-studies",
      },
      {
        name: "กรณีศึกษา Unlink-TH",
        href: "/case-studies/unlink-reputation-management-success",
        badge: "Case Study",
      },
    ],

    support: [
      {
        name: "ปรึกษาผ่าน LINE",
        href: siteConfig.links.line || "https://lin.ee/6lgJox0",
        external: true,
      },
      {
        name: "รายละเอียดราคา",
        href: "/services#pricing",
      },
      {
        name: "บทความและเทคนิค",
        href: "/blog",
      },
    ],

    legal: [
      {
        name: "นโยบายความเป็นส่วนตัว",
        href: "/privacy",
      },
      {
        name: "เงื่อนไขการใช้บริการ",
        href: "/terms",
      },
    ],
  },
};

export const mainNav = navigation.main;
export const footerNavigation = navigation.footer;

/**
 * [SEO KEYWORDS 2026]
 * พิกัดคำค้นหาหลักสำหรับใช้ใน Metadata และระบบค้นหา
 */
export const siteKeywords: string[] = [
  "AEMDEVWEB",
  "บริการวางระบบเว็บไซต์",
  "ออกแบบเว็บไซต์ธุรกิจระดับพรีเมียม",
  "Next.js High-Performance Website",
  "High-Performance Sale Page",
  "Technical SEO Specialist",
  "โครงสร้างระบบเว็บระดับสากล",
  "นายเอ็มซ่ามากส์",
];
