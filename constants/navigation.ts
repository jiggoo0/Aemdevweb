/** @format */

import { siteConfig } from "./site-config"

/**
 * [TYPE DEFINITIONS]: กำหนดรูปแบบข้อมูลเมนูนำทาง
 */
export interface NavItem {
  name: string
  href: string
  description?: string
  badge?: string
  external?: boolean
  disabled?: boolean
}

export interface NavigationConfig {
  main: NavItem[]
  footer: {
    services: NavItem[]
    company: NavItem[]
    support: NavItem[]
    legal: NavItem[]
  }
}

/**
 * Navigation Strategy: เน้นความรวดเร็วและเข้าถึงข้อมูลได้ทันที
 * ดูแลโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export const navigation: NavigationConfig = {
  /* -------------------------- เมนูหลัก (Navbar) ---------------------------- */
  main: [
    {
      name: "หน้าแรก",
      href: "/",
      description: "จุดเริ่มต้นการยกระดับธุรกิจด้วยเว็บไซต์มาตรฐานใหม่",
    },
    {
      name: "บริการ",
      href: "/services",
      description: "เลือกแพ็กเกจทำเว็บไซต์ที่ตอบโจทย์ธุรกิจ SME",
    },
    {
      name: "เทมเพลต",
      href: "/templates",
      badge: "Ready",
      description: "เลือกแบบเว็บไซต์สวยๆ ที่พร้อมใช้งานได้ทันที",
    },
    {
      name: "ผลงาน",
      href: "/case-studies",
      description: "ดูตัวอย่างธุรกิจที่ประสบความสำเร็จจากการทำเว็บกับเรา",
    },
    {
      name: "บทความ",
      href: "/blog",
      description: "อัปเดตความรู้ SEO และเทคนิคการตลาดออนไลน์ปี 2026",
    },
    {
      name: "ติดต่อเรา",
      href: "/contact",
      description: "คุยรายละเอียดโปรเจกต์กับนายเอ็มซ่ามากส์โดยตรง",
    },
  ],

  /* --------------------------- เมนูท้ายเว็บ (Footer) --------------------------- */
  footer: {
    services: [
      {
        name: "เว็บหน้าเดียว (SalePage)",
        href: "/services/starter-landing",
        badge: "Hot",
        description: "เน้นปิดการขาย ยิงแอดแม่น โหลดไว",
      },
      {
        name: "เว็บธุรกิจ SME มาตรฐาน",
        href: "/services/sme-business",
        description: "สร้างความน่าเชื่อถือ พร้อมรองรับ SEO เต็มรูปแบบ",
      },
      {
        name: "เว็บแคตตาล็อกโรงงาน",
        href: "/services/catalog-industrial",
        description: "ระบบโชว์สินค้าโรงงาน ค้นหาง่าย รองรับสินค้าเยอะ",
      },
      {
        name: "บริการ SEO รายเดือน",
        href: "/services/seo-agency",
        description: "ดันอันดับเว็บไซต์ให้ติดหน้าแรก Google อย่างยั่งยืน",
      },
    ],

    company: [
      {
        name: "รู้จักนายเอ็มซ่ามากส์",
        href: "/about",
      },
      {
        name: "ตัวอย่างผลงานจริง",
        href: "/case-studies",
      },
      {
        name: "กรณีศึกษา Unlink-TH",
        href: "/blog/unlink-th-case-study",
        badge: "Top",
      },
      {
        name: "ร่วมงานกับเรา",
        href: "/careers",
        disabled: true,
      },
    ],

    support: [
      {
        name: "คุยผ่าน LINE (ตอบไว)",
        href: siteConfig.contact.line || "https://lin.ee/6lgJox0",
        external: true,
      },
      {
        name: "ประเมินราคาเบื้องต้น",
        href: "/services#pricing-estimator",
      },
      {
        name: "แจ้งปัญหาการใช้งาน",
        href: "/contact",
      },
    ],

    legal: [
      {
        name: "นโยบายความเป็นส่วนตัว",
        href: "/privacy",
      },
      {
        name: "ข้อตกลงการใช้บริการ",
        href: "/terms",
      },
    ],
  },
}

/* -------------------------------------------------------------------------- */
/* การส่งออกข้อมูล (Exports)                                                    */
/* -------------------------------------------------------------------------- */

export const mainNav = navigation.main
export const footerNavigation = navigation.footer

/** * [SEO KEYWORDS]: คำค้นหาหลักสำหรับระบบ (Keywords 2026)
 * ปรับให้ตรงกับกลุ่มเป้าหมายที่ต้องการ "ทำเว็บด่วน" และ "ติดหน้าแรก"
 */
export const siteKeywords: string[] = [
  "AEMDEVWEB",
  "นายเอ็มซ่ามากส์",
  "รับทำเว็บไซต์ด่วน",
  "เว็บไซต์สำเร็จรูป",
  "รับทำ SEO สายขาว",
  "Landing Page SME",
  "ทำเว็บติดหน้าแรก Google",
  "สอน SEO 2026",
]
