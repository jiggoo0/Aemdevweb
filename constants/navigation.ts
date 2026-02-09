/**
 * [DATA REGISTRY]: NAVIGATION_INFRASTRUCTURE v17.5.3 (UTILITY_EXPANDED)
 * [STRATEGY]: Information Architecture | SEO Relevancy | System Transparency
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "./site-config";

export const MAIN_NAV = [
  { label: "หน้าแรก", href: "/" },
  { label: "บริการ & ราคา", href: "/services" },
  { label: "ผลงานลูกค้า", href: "/case-studies" },
  { label: "พื้นที่ให้บริการ", href: "/areas" },
  { label: "บันทึกเทคนิค", href: "/blog" },
  { label: "Status", href: "/status" }, // [ADD]: เพิ่มเมนูสถานะระบบ
] as const;

export const SERVICE_SOLUTIONS = [
  { label: "Sale Page ปิดการขาย", href: "/services/salepage" },
  { label: "เว็บไซต์บริษัท (Corporate)", href: "/services/corporate" },
  { label: "Technical SEO Specialist", href: "/services/seo_agency" },
  { label: "E-Catalog & RFQ System", href: "/services/catalog" },
  { label: "Local SEO (ปักหมุดธุรกิจ)", href: "/services/local" },
  { label: "ระบบจองโรงแรม & ที่พัก", href: "/services/hotelresort" },
] as const;

export const FOOTER_MAP = {
  services: [...SERVICE_SOLUTIONS.slice(0, 4), { label: "ดูบริการทั้งหมด", href: "/services" }],
  company: [
    { label: "เกี่ยวกับ AEMDEVWEB", href: "/about" },
    { label: "ขั้นตอนการทำงาน", href: "/services#process" },
    { label: "รวมผลงาน Portfolio", href: "/case-studies" },
    { label: "พื้นที่ให้บริการ", href: "/areas" },
  ],
  connect: [
    { label: "แอดไลน์ปรึกษาฟรี", href: SITE_CONFIG.links.line },
    { label: "Facebook Page", href: SITE_CONFIG.links.facebook },
  ],
  /**
   * [LEGAL_&_SYSTEM]: จัดกลุ่มนโยบายและเส้นทางระบบ
   * [ADDED]: /status และ /sitemap.xml
   */
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "System Status", href: "/status" },
    { label: "Sitemap", href: "/sitemap.xml" },
  ],
} as const;

/* TYPE DEFINITIONS */
export type NavItem = (typeof MAIN_NAV)[number];
export type ServiceItem = (typeof SERVICE_SOLUTIONS)[number];
