/** @format */

// --- 🏷️ INTERFACES ---
export interface NavItem {
  name: string
  href: string
  disabled?: boolean // ปุ่มจาง กดไม่ได้
  external?: boolean // เปิดแท็บใหม่
  badge?: "New" | "Hot" | "Sale" // ป้ายกำกับ
  description?: string // คำอธิบายสั้นๆ (สำหรับ Mega Menu)
}

export interface FooterNavigation {
  services: NavItem[]
  company: NavItem[]
  support: NavItem[]
  legal: NavItem[] // ส่วนกฎหมาย
}

export interface NavigationConfig {
  main: NavItem[]
  footer: FooterNavigation
}

/**
 * 🧭 ระบบ Navigation ฉบับ AemDevWeb (Updated 2026)
 * จัดการลิงก์ทั้งหมดให้ตรงกับ Folder Structure ใน app/(main)/ และ app/(marketing)/
 */
export const navigation: NavigationConfig = {
  // 🌟 เมนูหลัก (Header / Mobile Menu)
  main: [
    {
      name: "หน้าแรก",
      href: "/",
    },
    {
      name: "บริการ",
      href: "/services",
    },
    {
      name: "เทมเพลต",
      href: "/sale-page", // ชี้ไปที่ Category แรกของ Marketing Route
      badge: "New",
    },
    {
      name: "ผลงาน",
      href: "/case-studies", // ✅ อ้างอิงตาม Folder: app/(main)/case-studies/
    },
    {
      name: "บทความ",
      href: "/blog",
    },
    {
      name: "ติดต่อเรา",
      href: "/contact",
    },
  ],

  // 🦶 เมนูท้ายเว็บ (Footer)
  footer: {
    // 🛠️ หมวดหมู่บริการหลัก
    services: [
      {
        name: "Sale Page ปิดการขาย",
        href: "/services/sale-page",
        badge: "Hot",
      },
      { name: "เว็บไซต์บริษัท SME", href: "/services/corporate" },
      { name: "ระบบจัดการสต็อก", href: "/services/internal-system" },
      { name: "ปรับความเร็ว & SEO", href: "/services/speed-seo" },
    ],

    // 🏢 หมวดหมู่บริษัท
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

    // 💬 ส่วนสนับสนุนและช่องทางติดต่อ
    support: [
      {
        name: "ปรึกษาผ่าน Line",
        href: "https://lin.ee/SVMBEJ8", // ✅ ตรวจสอบ ID กับ site-config
        external: true,
      },
      { name: "เช็คราคาประเมิน", href: "/#pricing" },
      { name: "แจ้งชำระเงิน", href: "/contact" },
    ],

    // ⚖️ กฎหมายและนโยบาย
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

// --- 🚀 NAMED EXPORTS ---
// แยก export เพื่อให้เรียกใช้งานได้เบาเครื่องขึ้น (Tree-shaking)
export const mainNav = navigation.main as NavItem[]
export const footerNav = navigation.footer as FooterNavigation

/**
 * ✅ Keywords Cast Fix
 * ใช้สำหรับ Metadata ในไฟล์ที่เรียกใช้ siteConfig เพื่อป้องกัน TS Error 'readonly'
 * หมายเหตุ: ปกติจะทำที่ site-config.ts แต่ถ้าเรียกใช้ตรงนี้ให้ทำดังนี้:
 */
export const siteKeywords = [
  "นายเอ็มซ่ามากส์",
  "เอ็มซ่ามากส์รับทำเว็บ",
  "รับทำเว็บไซต์ SME",
  "รับทำ Sale Page",
  "เว็บหน้าเดียวปิดการขาย",
  "AEMDEVWEB",
  "ทำเว็บทักไลน์",
  "รับทำเว็บ Next.js",
] as string[]
