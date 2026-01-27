/** @format */

import { NavigationConfig } from "@/types"

/**
 * ระบบจัดการพิกัดการนำทาง (Navigation Structure)
 * ยุทธศาสตร์: เข้าถึงข้อมูลง่าย สื่อสารตรงประเด็น และช่วยให้ลูกค้าตัดสินใจได้รวดเร็ว
 * Identity: นายเอ็มซ่ามากส์ (Alongkorl Yomkerd)
 */
export const navigation: NavigationConfig = {
  /* -------------------------- เมนูหลักประจำ Navbar ---------------------------- */
  main: [
    {
      name: "หน้าแรก",
      href: "/",
      description: "จุดเริ่มต้นการยกระดับธุรกิจของคุณ",
    },
    {
      name: "บริการและราคา",
      href: "/services",
      description: "ทางเลือกที่ตอบโจทย์สำหรับ SME และกลุ่มธุรกิจ",
    },
    {
      name: "คลังเทมเพลต",
      href: "/templates",
      badge: "New",
      description: "ชุดโครงสร้างเว็บไซต์สำเร็จรูปที่พร้อมใช้งานทันที",
    },
    {
      name: "ผลงานที่ผ่านมา",
      href: "/case-studies",
      description: "บทพิสูจน์ผลลัพธ์จากธุรกิจที่ใช้งานจริง",
    },
    {
      name: "บทความน่ารู้",
      href: "/blog",
      description: "เทคนิคการทำเว็บและ Organic Search ที่จับต้องได้",
    },
    {
      name: "ปรึกษาโปรเจกต์",
      href: "/contact",
      description: "พูดคุยรายละเอียดเพื่อวางแผนงานร่วมกัน",
    },
  ],

  /* --------------------------- ส่วนเมนูท้ายหน้า (Footer) --------------------------- */
  footer: {
    services: [
      {
        name: "Sale Page เน้นปิดการขาย",
        href: "/services/starter-one-page",
        badge: "Hot",
        description: "เน้นความเร็วและการแสดงข้อมูลที่สำคัญที่สุด",
      },
      {
        name: "SME & Corporate Pro",
        href: "/services/sme-speed-launch",
        description: "ยกระดับภาพลักษณ์ธุรกิจด้วยมาตรฐานสากล",
      },
      {
        name: "Industrial E-Catalog",
        href: "/services/industrial-catalog",
        description: "ระบบจัดการรายการสินค้าให้ค้นหาง่ายและเป็นระเบียบ",
      },
      {
        name: "Technical SEO Tuning",
        href: "/services/seo-technical",
        description: "ปรับโครงสร้างเว็บไซต์ให้ระบบค้นหาเจอได้แม่นยำขึ้น",
      },
    ],

    company: [
      {
        name: "รู้จัก AEMDEVWEB",
        href: "/about",
      },
      {
        name: "ความสำเร็จของลูกค้า",
        href: "/case-studies",
      },
      {
        name: "กรณีศึกษา Unlink-TH",
        href: "/blog/unlink-th-case-study",
        badge: "Focus",
      },
      {
        name: "ร่วมงานกับเรา",
        href: "/careers",
        disabled: true,
      },
    ],

    support: [
      {
        name: "คุยผ่าน LINE OA",
        href: "https://lin.ee/6lgJox0",
        external: true,
      },
      {
        name: "ประเมินค่าใช้จ่าย",
        href: "/services#pricing",
      },
      {
        name: "ติดต่อสอบถามด่วน",
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
/* พิกัดการส่งออกข้อมูล (Direct Exports)                                         */
/* -------------------------------------------------------------------------- */

export const mainNav = navigation.main
export const footerNavigation = navigation.footer

/** * คีย์เวิร์ดสำคัญสำหรับการทำ Organic Search (Strategic Keywords)
 */
export const siteKeywords: string[] = [
  "AEMDEVWEB",
  "นายเอ็มซ่ามากส์",
  "Alongkorl Yomkerd",
  "Unlink-th",
  "บริการทำเว็บไซต์สำหรับธุรกิจ",
  "Landing Page SME",
  "technical SEO",
  "โครงสร้างเว็บไซต์",
  "Organic Search",
]
