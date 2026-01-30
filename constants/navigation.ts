// @format
// พิกัดข้อมูล: constants/navigation.ts
// หน้าที่: กำหนดพิกัดทางเดินข้อมูล (Routing) และระบบเมนูสำหรับ www.aemdevweb.com
// มาตรฐาน: Next.js 16 | Ultra-Deep Level 7 | Strategic Authority 2026
// ควบคุมระบบโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)

import { siteConfig } from "./site-config"

/**
 * [TYPE DEFINITIONS]
 */
export interface NavItem {
  readonly name: string
  readonly href: string
  readonly description?: string
  readonly badge?: string
  readonly external?: boolean
  readonly disabled?: boolean
}

export interface NavigationConfig {
  readonly main: readonly NavItem[]
  readonly footer: {
    readonly services: readonly NavItem[]
    readonly company: readonly NavItem[]
    readonly support: readonly NavItem[]
    readonly legal: readonly NavItem[]
  }
}

/**
 * Navigation Strategy 2026: "Authority & Conversion"
 * ยุทธศาสตร์: เชื่อมโยง Blog เข้าสู่แกนกลางเพื่อส่งพลังให้พิกัด SEO
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
      name: "บล็อก",
      href: "/blog",
      badge: "New",
      description: "คลังข้อมูลเทคนิคและกลยุทธ์การทำเว็บไซต์ระดับ Specialist",
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
      },
      {
        name: "Technical SEO Audit",
        href: "/seo/technical-structure-audit",
      },
      {
        name: "Web Speed Optimization",
        href: "/seo/core-web-vitals-speed",
        badge: "Hot",
      },
      {
        name: "Ecommerce Conversion",
        href: "/seo/ecommerce-conversion-seo",
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
        href: siteConfig.links.line,
        external: true,
      },
      {
        name: "บทความและเทคนิค",
        href: "/blog",
      },
      {
        name: "รายละเอียดราคา",
        href: "/services#pricing",
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
}

export const mainNav = navigation.main
export const footerNavigation = navigation.footer

/**
 * [SEO KEYWORDS 2026]
 */
export const siteKeywords: readonly string[] = [
  ...siteConfig.keywords.list,
  "บล็อกสอนทำเว็บ 2026",
  "Technical SEO Specialist Thailand",
  "Next.js 16 Web Development",
  "นายเอ็มซ่ามากส์",
]
