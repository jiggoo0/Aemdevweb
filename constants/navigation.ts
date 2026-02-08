/**
 * [DATA REGISTRY]: NAVIGATION_INFRASTRUCTURE v17.0.0 (CLEAN_CORE)
 * [STRATEGY]: Single Source of Truth | Conversion-Driven | Anti-Shops Logic
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "./site-config";

/**
 * 01. MAIN_NAV: เมนูนำทางหลัก (Header)
 * [NOTE]: ใช้เป็น Single Source สำหรับ Navbar และ Mobile Menu
 */
export const MAIN_NAV = [
  { label: "หน้าแรก", href: "/" },
  { label: "บริการของเรา", href: "/services" },
  { label: "ผลงานที่ผ่านมา", href: "/case-studies" },
  { label: "พื้นที่ให้บริการ", href: "/areas" },
  { label: "บทความและเทคนิค", href: "/blog" },
] as const;

/**
 * 02. SERVICE_SOLUTIONS: บริการเฉพาะทาง (Service Modules)
 * [NOTE]: ใช้สำหรับ Dropdown หรือรายการใน Footer
 */
export const SERVICE_SOLUTIONS = [
  { label: "เว็บไซต์องค์กร (Corporate)", href: "/services/corporate" },
  { label: "หน้าปิดการขาย (Sale Page)", href: "/services/salepage" },
  { label: "ระบบแค็ตตาล็อกสินค้า", href: "/services/catalog" },
  { label: "ปักหมุดธุรกิจท้องถิ่น (Local SEO)", href: "/services/local" },
  { label: "ลิงก์โปรไฟล์ (Digital Bio)", href: "/services/bio" },
] as const;

/**
 * 03. FOOTER_MAP: โครงสร้างข้อมูลส่วนท้าย (Footer)
 * [STRATEGY]: รวม Service Solutions เข้ากับลิงก์บริษัทและกฎหมาย
 */
export const FOOTER_MAP = {
  services: [...SERVICE_SOLUTIONS, { label: "ดูบริการทั้งหมด", href: "/services" }],
  company: [
    { label: "เกี่ยวกับเรา", href: "/about" },
    { label: "พื้นที่บริการ", href: "/areas" },
    { label: "แผนผังเว็บไซต์ (Sitemap)", href: "/sitemap.xml" },
  ],
  legal: [
    { label: "นโยบายความเป็นส่วนตัว", href: "/privacy" },
    { label: "ข้อกำหนดและเงื่อนไข", href: "/terms" },
  ],
  connect: [
    { label: "ปรึกษาฟรี (Line OA)", href: SITE_CONFIG.links.line },
    { label: "สถานะระบบ (Status)", href: "/status" },
  ],
} as const;

/**
 * 04. CONVERSION_ACTIONS: ปุ่มดำเนินการสำคัญ (CTAs)
 * [NOTE]: ใช้สำหรับปุ่มที่ต้องการกระตุ้นการตัดสินใจ
 */
export const CONVERSION_ACTIONS = {
  primary: {
    label: "เริ่มปรึกษาฟรี",
    href: SITE_CONFIG.links.line,
    icon: "MessageCircle",
  },
  secondary: {
    label: "ดูเคสความสำเร็จ",
    href: "/case-studies",
    icon: "BarChart3",
  },
} as const;

/* TYPE DEFINITIONS: สำหรับใช้ใน Component */
export type NavItem = (typeof MAIN_NAV)[number];
export type ServiceItem = (typeof SERVICE_SOLUTIONS)[number];
