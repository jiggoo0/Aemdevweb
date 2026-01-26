/** @format */

import { NavigationConfig } from "@/types"

/**
 * ระบบจัดการการนำทาง - สำหรับธุรกิจ SME และอุตสาหกรรม
 * มุ่งเน้น: ความน่าเชื่อถือ และโครงสร้างที่เข้าถึงข้อมูลได้รวดเร็ว
 * * * แก้ไข: ลบ NavItem และ FooterNavigation ออกจากการนำเข้าเนื่องจากไม่ได้เรียกใช้โดยตรง
 * * เพื่อแก้ปัญหา ESLint Error: 'NavItem/FooterNavigation' is defined but never used
 */

/* -------------------------------------------------------------------------- */
/* ชุดข้อมูลการนำทาง (Navigation Repository)                                    */
/* -------------------------------------------------------------------------- */

export const navigation: NavigationConfig = {
  /* -------------------------- เมนูแถบนำทางหลัก ---------------------------- */
  main: [
    {
      name: "หน้าแรก",
      href: "/",
      description: "เน้นความไวและเพิ่มโอกาสปิดการขาย",
    },
    {
      name: "บริการและราคา",
      href: "/services",
      description: "แพ็กเกจที่เหมาะกับธุรกิจ SME และโรงงานอุตสาหกรรม",
    },
    {
      name: "เทมเพลตเว็บไซต์",
      href: "/templates",
      badge: "New",
      description: "จัดวางข้อมูลที่ถูกต้องและประมวลผลรวดเร็ว",
    },
    {
      name: "ผลงานของเรา",
      href: "/case-studies",
      description: "ตัวอย่างธุรกิจที่ใช้งานจริง",
    },
    {
      name: "ความรู้ธุรกิจ",
      href: "/blog",
      description: "เทคนิคการจัดการระบบเพื่อให้ลูกค้าหาคุณเจอได้ง่ายขึ้น",
    },
    {
      name: "ปรึกษาโปรเจกต์",
      href: "/contact",
      description: "พูดคุยกับผู้เชี่ยวชาญโดยตรงเพื่อวางแผนงาน",
    },
  ],

  /* --------------------------- ส่วนเมนูท้ายหน้า --------------------------- */
  footer: {
    services: [
      {
        name: "Sale Page Strategy",
        href: "/services/starter-one-page",
        badge: "Hot",
        description: "เน้นปิดการขายไวด้วยการเข้าถึงข้อมูลที่รวดเร็ว",
      },
      {
        name: "SME & Business Pro",
        href: "/services/sme-speed-launch",
        description: "ยกระดับความน่าเชื่อถือด้วยมาตรฐานสากล",
      },
      {
        name: "Industrial E-Catalog",
        href: "/services/industrial-catalog",
        description: "ระบบจัดการรายการสินค้าที่ค้นหาง่ายและครบถ้วน",
      },
      {
        name: "Technical SEO System",
        href: "/services/seo-technical",
        description: "ปรับจูนให้ระบบค้นหาเจอธุรกิจของคุณได้แม่นยำ",
      },
    ],

    company: [
      {
        name: "เกี่ยวกับ AEMDEVWEB",
        href: "/about",
      },
      {
        name: "ผลงานและความสำเร็จ",
        href: "/case-studies",
      },
      {
        name: "กรณีศึกษา Unlink-TH",
        href: "/blog/unlink-th-case-study",
        badge: "Special",
      },
      {
        name: "ร่วมงานกับเรา",
        href: "/careers",
        disabled: true,
      },
    ],

    support: [
      {
        name: "LINE Official Account",
        href: "https://lin.ee/6lgJox0",
        external: true,
      },
      {
        name: "ประเมินงบประมาณ",
        href: "/services#pricing",
      },
      {
        name: "ติดต่อสอบถาม",
        href: "/contact",
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

/* -------------------------------------------------------------------------- */
/* การส่งออกข้อมูลสำหรับใช้งาน (Exports)                                         */
/* -------------------------------------------------------------------------- */

// รักษาการ Export ชื่อเดิมไว้เพื่อให้ Navbar/Footer นำไปใช้ได้โดยไม่พัง
export const mainNav = navigation.main
export const footerNavigation = navigation.footer

/** * คีย์เวิร์ดหลักของเว็บไซต์
 */
export const siteKeywords: string[] = [
  "AEMDEVWEB",
  "Technical SEO Specialist Thailand",
  "รับทำเว็บไซต์โรงงานอุตสาหกรรม",
  "รับทำเว็บไซต์ SME คุณภาพสูง",
  "เว็บ E-Catalog โรงงาน",
  "ที่ปรึกษาด้านการเพิ่มประสิทธิภาพเว็บไซต์",
]
