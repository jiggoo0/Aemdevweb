/** @format */

/**
 * 🧭 ระบบ Navigation ฉบับ AemDevWeb (v.2026)
 * แหล่งรวมลิงก์ทั้งหมดของเว็บไซต์ เพื่อให้ง่ายต่อการจัดการ SEO และ Route
 * ✅ รองรับ Tooltip Description สำหรับ User-Friendly Navbar
 */

// --- 🏷️ INTERFACES ---

export interface NavItem {
  name: string
  href: string
  disabled?: boolean
  external?: boolean
  badge?: "New" | "Hot" | "Sale" | string
  description?: string // สำหรับแสดงใน Tooltip เพื่อเพิ่ม User Experience
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

// --- 🧭 CORE NAVIGATION CONFIGURATION ---

export const navigation: NavigationConfig = {
  /**
   * 🌟 Main Menu: แสดงผลที่ Header, Mobile Menu และ Navbar Tooltips
   */
  main: [
    {
      name: "หน้าแรก",
      href: "/",
      description: "กลับสู่หน้าหลักและภาพรวมบริการทั้งหมด",
    },
    {
      name: "บริการ",
      href: "/services",
      description: "แพ็กเกจทำเว็บไซต์ Sale Page และระบบภายในองค์กร",
    },
    {
      name: "เทมเพลต",
      href: "/templates", // ชี้ไปยัง app/(marketing)/
      badge: "New",
      description: "เลือกชมโครงสร้างเว็บไซต์สำเร็จรูปที่พร้อมใช้งานทันที",
    },
    {
      name: "ผลงาน",
      href: "/case-studies",
      description: "รวมเคสความสำเร็จและรีวิวจากลูกค้าที่ใช้งานจริง",
    },
    {
      name: "บทความ",
      href: "/blog",
      description: "เคล็ดลับการทำเว็บ SEO และเทคนิคเพิ่มยอดขายออนไลน์",
    },
    {
      name: "ติดต่อเรา",
      href: "/contact",
      description: "สอบถามข้อมูลเพิ่มเติมหรือขอคำปรึกษาฟรีกับพี่เอ็ม",
    },
  ],

  /**
   * 🦶 Footer Menu: จัดกลุ่มตามโครงสร้างธุรกิจ
   */
  footer: {
    services: [
      {
        name: "Sale Page ปิดการขาย",
        href: "/services/sale-page",
        badge: "Hot",
        description: "เน้น Conversion สำหรับสายยิงแอด",
      },
      { 
        name: "เว็บไซต์บริษัท SME", 
        href: "/services/corporate",
        description: "สร้างความน่าเชื่อถือให้ธุรกิจระดับสากล"
      },
      { 
        name: "ระบบจัดการสต็อก", 
        href: "/services/internal-system",
        description: "หลังบ้านอัจฉริยะเพื่อการจัดการที่ง่ายขึ้น" 
      },
      { 
        name: "ปรับความเร็ว & SEO", 
        href: "/services/speed-seo",
        description: "จูนเว็บให้แรง โหลดไว Google รัก"
      },
    ],
    company: [
      { name: "เกี่ยวกับนายเอ็ม", href: "/about" },
      { name: "ผลงานที่ผ่านมา", href: "/case-studies" },
      {
        name: "Unlink-TH Case Study",
        href: "/case-studies/unlink-th",
        badge: "Hot",
      },
      { name: "ร่วมงานกับเรา", href: "/careers", disabled: true },
    ],
    support: [
      {
        name: "ปรึกษาผ่าน Line",
        href: "https://lin.ee/SVMBEJ8",
        external: true,
      },
      { name: "เช็คราคาประเมิน", href: "/#pricing" },
      { name: "แจ้งชำระเงิน", href: "/contact" },
    ],
    legal: [
      {
        name: "นโยบายความเป็นส่วนตัว",
        href: "/privacy-policy",
        disabled: true,
      },
      {
        name: "เงื่อนไขการให้บริการ",
        href: "/terms-of-service",
        disabled: true,
      },
    ],
  },
}

// --- 🚀 HELPER EXPORTS ---
// เพื่อการเรียกใช้งานที่เจาะจงและประหยัดทรัพยากร (Tree-shaking)

export const mainNav = navigation.main
export const footerServicesNav = navigation.footer.services
export const footerCompanyNav = navigation.footer.company
export const footerSupportNav = navigation.footer.support
export const footerLegalNav = navigation.footer.legal

/**
 * 📝 Site Keywords: สำหรับใช้ใน Metadata (layout.tsx)
 */
export const siteKeywords: string[] = [
  "นายเอ็มซ่ามากส์",
  "เอ็มซ่ามากส์รับทำเว็บ",
  "รับทำเว็บไซต์ SME",
  "รับทำ Sale Page",
  "เว็บหน้าเดียวปิดการขาย",
  "AEMDEVWEB",
  "ทำเว็บทักไลน์",
  "รับทำเว็บ Next.js 15",
  "Next.js 15.1 Thailand",
  "ทำเว็บโหลดไว PageSpeed 100",
]
