/** @format */

/**
 * ระบบจัดการการนำทาง - AEMDEVWEB Professional Edition
 * มุ่งเน้น: การเติบโตของธุรกิจ, ความน่าเชื่อถือ และโครงสร้างที่ใช้งานง่าย
 * ปรับจูนสำหรับกลุ่มเจ้าของธุรกิจ SME และกลุ่มอุตสาหกรรม
 */

/* -------------------------------------------------------------------------- */
/* นิยามประเภทข้อมูล (Strict Mode)                                              */
/* -------------------------------------------------------------------------- */

export interface NavItem {
  name: string
  href: string
  description?: string
  badge?: "New" | "Hot" | "Sale" | "Special" | "Beta" | string
  external?: boolean
  disabled?: boolean
}

export interface FooterNavigation {
  services: NavItem[]
  company: NavItem[]
  support: NavItem[]
  legal: NavItem[]
}

export interface NavigationConfig {
  main: NavItem[]
  footer: FooterNavigation
}

/* -------------------------------------------------------------------------- */
/* คลังข้อมูลการนำทาง (Navigation Repository)                                    */
/* -------------------------------------------------------------------------- */

export const navigation: NavigationConfig = {
  /* -------------------------- เมนูแถบนำทางหลัก ---------------------------- */
  main: [
    {
      name: "หน้าแรก",
      href: "/",
      description: "สร้างรากฐานเว็บไซต์ที่เน้นความไวและเพิ่มโอกาสปิดการขาย",
    },
    {
      name: "บริการและราคา",
      href: "/services",
      description: "เลือกแพ็กเกจที่เหมาะกับธุรกิจ SME และโรงงานอุตสาหกรรม",
    },
    {
      name: "เทมเพลตเว็บไซต์",
      href: "/templates",
      badge: "New",
      description: "โครงสร้างเว็บไซต์กึ่งสำเร็จรูปที่ปรับจูนความเร็วมาเพื่อคุณ",
    },
    {
      name: "ผลงานของเรา",
      href: "/case-studies",
      description: "พิสูจน์ผลลัพธ์จากธุรกิจที่ประสบความสำเร็จจริง",
    },
    {
      name: "ความรู้ธุรกิจ",
      href: "/blog",
      description:
        "เทคนิคการทำเว็บและ SEO เพื่อสร้างความได้เปรียบทางการแข่งขัน",
    },
    {
      name: "ปรึกษาโปรเจกต์",
      href: "/contact",
      description: "พูดคุยกับผู้เชี่ยวชาญโดยตรงเพื่อวางแผนระบบของคุณ",
    },
  ],

  /* --------------------------- ส่วนเมนูท้ายหน้า --------------------------- */
  footer: {
    services: [
      {
        name: "Sale Page Strategy",
        href: "/services/starter-one-page",
        badge: "Hot",
        description: "เน้นปิดการขายไวด้วยระบบที่โหลดเร็วที่สุด",
      },
      {
        name: "SME & Business Pro",
        href: "/services/sme-speed-launch",
        description: "ยกระดับความน่าเชื่อถือด้วยเว็บไซต์มาตรฐานสากล",
      },
      {
        name: "Industrial E-Catalog",
        href: "/services/industrial-catalog",
        description: "ระบบจัดการสินค้าอุตสาหกรรมที่ค้นหาง่ายและครบถ้วน",
      },
      {
        name: "Technical SEO System",
        href: "/services/seo-technical",
        description: "ปรับโครงสร้างหลังบ้านให้ระบบค้นหาเจอคุณได้ง่ายขึ้น",
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
        href: "https://lin.ee/SVMBEJ8",
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
/* การส่งออกข้อมูลสำหรับใช้งาน (Helpers Export)                                 */
/* -------------------------------------------------------------------------- */

export const mainNav = navigation.main
export const {
  services: footerServicesNav,
  company: footerCompanyNav,
  support: footerSupportNav,
  legal: footerLegalNav,
} = navigation.footer

/* -------------------------------------------------------------------------- */
/* ชุดคำค้นหาที่ผ่านการปรับแต่งสำหรับกลยุทธ์ปี 2026                              */
/* -------------------------------------------------------------------------- */

export const siteKeywords: string[] = [
  "AEMDEVWEB",
  "Technical SEO Specialist Thailand",
  "รับทำเว็บไซต์โรงงานอุตสาหกรรม",
  "รับทำเว็บไซต์ SME คุณภาพสูง",
  "โครงสร้างเว็บไซต์ความเร็วสูง",
  "เว็บ E-Catalog โรงงาน",
  "ที่ปรึกษาด้านการเพิ่มประสิทธิภาพเว็บไซต์",
]
