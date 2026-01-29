/** @format */

import { ServiceIconName, ServiceItem, ThemeColor } from "@/types"

/**
 * AEMDEVWEB | คลังข้อมูลระบบงานและบริการ (Strategic Service Node 2026)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: High-Performance Infrastructure & Specialist Growth
 * วางระบบและควบคุมสมรรถนะโดย: นายเอ็มซ่ามากส์ (อลงกรณ์ ยมเกิด)
 */

export interface CategoryInfo {
  slug: string
  name: string
  themeColor: ThemeColor
  description: string
  iconName: ServiceIconName
}

/* 1. หมวดหมู่ระบบงาน (Strategic Category Mapping) */
export const categoriesData: CategoryInfo[] = [
  {
    slug: "ready-made",
    name: "Strategic Ready-to-Use",
    themeColor: "orange",
    description:
      "พิกัดเว็บสำเร็จรูปที่ นายเอ็มซ่ามากส์ จูนมาเพื่อความรวดเร็วและผลลัพธ์สูงสุด",
    iconName: "Zap",
  },
  {
    slug: "business-niche",
    name: "Enterprise & Niche Solutions",
    themeColor: "blue",
    description: "สถาปัตยกรรมเว็บไซต์ที่ตอบโจทย์โครงสร้างธุรกิจเฉพาะทางอย่างแม่นยำ",
    iconName: "Building2",
  },
  {
    slug: "digital-recurring",
    name: "Performance & Growth Care",
    themeColor: "violet",
    description:
      "การจัดการเสถียรภาพพิกัดระบบและผลักดันอันดับ Google อย่างยั่งยืน",
    iconName: "ShieldCheck",
  },
]

/* 2. รายละเอียดบริการหลัก (Core Professional Services by Nai Aem) */
export const servicesData: ServiceItem[] = [
  // --- [หมวดที่ 1]: Strategic Ready-to-Use ---
  {
    id: "svc-salepage",
    title: "High-Performance Sale Page",
    slug: "salepage_single",
    category: "ReadyMade",
    themeColor: "orange",
    description:
      "หน้าขายของพิกัดแรงที่ นายเอ็มซ่ามากส์ จูนมาเพื่อกระตุ้นการตัดสินใจซื้อในทันที",
    thumbnail: "/images/templates/webrental.webp",
    price: "1,990",
    priceValue: 1990,
    renewalPrice: "990 ต่อปี",
    features: [
      "ระบบโหลดไวเป็นพิเศษ LCP ต่ำกว่า 0.8 วินาที จูนโดยนายเอ็ม",
      "การจัดวาง Interface เชิงจิตวิทยาเพื่อพิกัดยอดขายสูงสุด",
      "ติดตั้งพิกัดติดตามผล (Pixel/CAPI) และวิเคราะห์ข้อมูลครบวงจร",
      "ระบบจัดการเนื้อหาอัจฉริยะที่ นายเอ็มซ่ามากส์ วางโครงสร้างไว้ให้",
    ],
    highlight: true,
    iconName: "Zap",
    relatedTemplateSlugs: ["salepage_single", "facebookadsexpert", "webrental"],
  },
  {
    id: "svc-express",
    title: "Business Identity Page",
    slug: "corporate_lite",
    category: "ReadyMade",
    themeColor: "blue",
    description:
      "สะท้อนความเนี้ยบขององค์กรผ่านหน้าเว็บที่ นายเอ็มซ่ามากส์ ออกแบบมาอย่างประณีต",
    thumbnail: "/images/templates/cleaningpro.webp",
    price: "2,900",
    priceValue: 2900,
    renewalPrice: "1,500 ต่อปี",
    features: [
      "รวบรวมพิกัดบริการและภาพลักษณ์แบรนด์อย่างเป็นระบบ",
      "Responsive Connectivity สมบูรณ์แบบทุกพิกัดหน้าจอ",
      "โครงสร้างที่รองรับมาตรฐานการค้นหาของ Google ระดับสากล",
    ],
    promotion: "สิทธิพิเศษโดเมนเนมระดับสากลจูนโดย AEMDEVWEB",
    iconName: "Clock",
    relatedTemplateSlugs: ["corporate_lite", "starter_landing", "personal_bio"],
  },
  {
    id: "svc-starter",
    title: "Starter Business Hub",
    slug: "starter_landing",
    category: "ReadyMade",
    themeColor: "slate",
    description:
      "จุดเริ่มต้นความสำเร็จในงบประมาณที่เนี้ยบและคุ้มค่าที่สุดสไตล์นายเอ็ม",
    thumbnail: "/images/templates/project-01.webp",
    price: "990",
    priceValue: 990,
    renewalPrice: "590 ต่อปี",
    features: [
      "โซลูชันที่คุ้มค่าสำหรับการเปิดพิกัดธุรกิจใหม่",
      "จัดวางข้อมูลพื้นฐานครบถ้วนพร้อมออนไลน์ใน 24 ชม.",
      "เสถียรภาพการเข้าใช้งานผ่านระบบโครงสร้างความเร็วสูง",
    ],
    iconName: "Wallet",
    relatedTemplateSlugs: [
      "starter_landing",
      "salepage_single",
      "maintenance_page",
    ],
  },

  // --- [หมวดที่ 2]: Enterprise & Niche Solutions ---
  {
    id: "svc-biz-pro",
    title: "Enterprise Scalability Pack",
    slug: "corporate_pro",
    category: "Business",
    themeColor: "indigo",
    description:
      "สถาปัตยกรรมที่ นายเอ็มซ่ามากส์ วางระบบเพื่อรองรับการขยายตัวและข้อมูลมหาศาล",
    thumbnail: "/images/templates/shopmasterpro.webp",
    price: "4,900",
    priceValue: 4900,
    renewalPrice: "2,500 ต่อปี",
    features: [
      "การจัดลำดับเนื้อหาและหมวดหมู่บริการที่เนี้ยบและชัดเจน",
      "วางระบบเพื่อให้เกิดแรงดึงดูดลูกค้าแบบ Organic Authority",
      "โครงสร้างที่ยืดหยุ่นต่อการเพิ่มพิกัดฟังก์ชันในอนาคต",
    ],
    highlight: true,
    iconName: "Building2",
    relatedTemplateSlugs: ["corporate_pro", "shopmasterpro", "hotelresort"],
  },
  {
    id: "svc-hotel",
    title: "Hospitality Showcase Solutions",
    slug: "hotelresort",
    category: "Business",
    themeColor: "blue",
    description:
      "ยกระดับที่พักด้วยดีไซน์ที่เน้นการจองพิกัดตรงอย่างมีประสิทธิภาพโดยนายเอ็ม",
    thumbnail: "/images/templates/hotelresort/hotelresort.webp",
    price: "5,900",
    priceValue: 5900,
    renewalPrice: "2,500 ต่อปี",
    features: [
      "ระบบนำเสนอรายละเอียดพิกัดห้องพักแบบ High-Definition",
      "แบบฟอร์มรับข้อมูลจองที่ นายเอ็มซ่ามากส์ จูนมาเพื่อความง่าย",
      "ภาพลักษณ์พรีเมียมที่สร้างความได้เปรียบทางการแข่งขัน",
    ],
    iconName: "LayoutTemplate",
    relatedTemplateSlugs: ["hotelresort", "corporate_pro", "restaurant_cafe"],
  },

  // --- [หมวดที่ 3]: Performance & Growth Care ---
  {
    id: "svc-seo-agency",
    title: "SEO Ranking Performance",
    slug: "seo_agency",
    category: "Digital",
    themeColor: "emerald",
    description: "ปฏิบัติการดันพิกัดธุรกิจสู่หน้าแรก Google โดย นายเอ็มซ่ามากส์",
    thumbnail: "/images/blog/seo-google-love.webp",
    price: "12,900 ต่อเดือน",
    priceValue: 12900,
    features: [
      "วิเคราะห์และตรวจสอบพิกัดระบบรายเดือนโดย Specialist",
      "กลยุทธ์การสร้าง Content คุณภาพเพื่อดึงดูดกลุ่มเป้าหมาย",
      "สร้าง Authority ผ่านการเชื่อมโยงข้อมูลมาตรฐานสากล",
    ],
    promotion: "จูนระบบต่อเนื่องเพื่อผลลัพธ์ที่ยั่งยืนที่สุด",
    iconName: "TrendingUp",
    relatedTemplateSlugs: ["seo_agency", "corporate_pro", "local_service"],
  },
  {
    id: "svc-maintenance",
    title: "System Stability & Security",
    slug: "maintenance_page",
    category: "Digital",
    themeColor: "slate",
    description:
      "การดูแลเสถียรภาพโดย นายเอ็มซ่ามากส์ เพื่อความปลอดภัยสูงสุดของระบบงาน",
    thumbnail: "/images/showcase/service.webp",
    price: "เริ่มต้น 2,500",
    priceValue: 2500,
    features: [
      "ระบบสำรองและกู้คืนพิกัดข้อมูลฉุกเฉินระดับมืออาชีพ",
      "ย้ายพิกัดข้อมูลไปยัง Infrastructure ที่เสถียรและซิ่งกว่าเดิม",
      "ตรวจสอบและปิดจุดเสี่ยงด้านความปลอดภัยโดยนายเอ็ม",
    ],
    iconName: "ShieldCheck",
    relatedTemplateSlugs: [
      "maintenance_page",
      "starter_landing",
      "personal_bio",
    ],
  },
]
