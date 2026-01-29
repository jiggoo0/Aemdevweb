/** @format */

import { siteConfig } from "./site-config"

/**
 * [TYPE DEFINITIONS]
 * โครงสร้างข้อมูลสำหรับระบบเมนูนำทาง
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
 * Navigation Strategy 2026: "Direct & Conversion-Focused"
 * ออกแบบเส้นทางผู้ใช้งานเพื่อให้เข้าถึงโซลูชันและข้อมูลสำคัญได้อย่างรวดเร็ว
 * เน้นการลดขั้นตอนการเข้าถึงข้อมูลเพื่อประสิทธิภาพสูงสุด
 */
export const navigation: NavigationConfig = {
  /* -------------------------- เมนูหลัก (Main Navbar) ---------------------------- */
  main: [
    {
      name: "หน้าแรก",
      href: "/",
      description: "ภาพรวมระบบและจุดเด่นของบริการเพื่อการเติบโตของธุรกิจ",
    },
    {
      name: "บริการ",
      href: "/services",
      description: "รายละเอียดแผนการลงทุนและสเปกการทำงานระดับพรีเมียม",
    },
    {
      name: "เทมเพลต",
      href: "/templates",
      badge: "New",
      description: "คลังรูปแบบเว็บไซต์ที่ผ่านการเพิ่มประสิทธิภาพพร้อมใช้งาน",
    },
    {
      name: "ผลงาน",
      href: "/case-studies",
      description: "กรณีศึกษาความสำเร็จและตัวอย่างเว็บไซต์มาตรฐานสากล",
    },
    {
      name: "บทความ",
      href: "/blog",
      description: "คลังความรู้ด้านกลยุทธ์ SEO และเทคโนโลยีเว็บไซต์ยุคใหม่",
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
        name: "Corporate Growth Solution",
        href: "/services/corporate_pro",
        description: "ยกระดับความน่าเชื่อถือและภาพลักษณ์องค์กรระดับสากล",
      },
      {
        name: "Local SEO Strategy",
        href: "/services/local_service",
        description: "เข้าถึงกลุ่มเป้าหมายในพื้นที่อย่างแม่นยำผ่านแผนที่",
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
        name: "กรณีศึกษาความสำเร็จ Unlink-TH",
        href: "/case-studies/unlink-reputation-management-success",
        badge: "Case Study",
      },
      {
        name: "ร่วมงานกับเรา",
        href: "#careers",
        disabled: true,
      },
    ],

    support: [
      {
        name: "ปรึกษาผ่านช่องทาง LINE",
        href: siteConfig.links.line || "https://lin.ee/6lgJox0",
        external: true,
      },
      {
        name: "รายละเอียดราคาและข้อเสนอ",
        href: "/services#pricing",
      },
      {
        name: "ศูนย์การสนับสนุนทางเทคนิค",
        href: siteConfig.links.line,
        external: true,
      },
    ],

    legal: [
      {
        name: "นโยบายความเป็นส่วนตัว",
        href: "/privacy",
      },
      {
        name: "เงื่อนไขและข้อตกลงการใช้บริการ",
        href: "/terms",
      },
    ],
  },
}

/* -------------------------------------------------------------------------- */
/* Exports & Keywords Strategy                                                */
/* -------------------------------------------------------------------------- */

export const mainNav = navigation.main
export const footerNavigation = navigation.footer

/**
 * [SEO KEYWORDS 2026]
 * ชุดคำค้นหาหลักที่เน้นกลุ่มเป้าหมายคุณภาพสูง
 * มุ่งเน้นการดึงดูดลูกค้าที่ให้ความสำคัญกับมาตรฐานและผลลัพธ์เชิงธุรกิจ
 */
export const siteKeywords: string[] = [
  "AEMDEVWEB",
  "บริการพัฒนาเว็บไซต์ SEO",
  "ออกแบบเว็บไซต์ธุรกิจระดับพรีเมียม",
  "ระบบเว็บไซต์ Next.js ประสิทธิภาพสูง",
  "High-Performance Sale Page",
  "กลยุทธ์ Technical SEO",
  "รูปแบบเว็บไซต์มาตรฐานสากล",
  "นายเอ็มซ่ามากส์",
]
