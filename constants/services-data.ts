/** @format */
// พิกัดข้อมูล: constants/services-data.ts
// หน้าที่: คลังข้อมูลระบบงานและบริการ (Strategic Service Node 2026)
// มาตรฐาน: Ultra-Deep Level 7 | Specialist Optimization 
// นโยบาย: No backend • No form submission • LINE-only communication
// ควบคุมระบบโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)

import { ServiceIconName, ServiceItem, ThemeColor } from "@/types";

export interface CategoryInfo {
  readonly slug: string;
  readonly name: string;
  readonly themeColor: ThemeColor;
  readonly description: string;
  readonly iconName: ServiceIconName;
}

/* [1. STRATEGIC CATEGORY MAPPING]: การแบ่งหมวดหมู่เชิงยุทธศาสตร์ */
export const categoriesData: readonly CategoryInfo[] = [
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
    name: "Enterprise & Niche Systems",
    themeColor: "blue",
    description: "โครงสร้างเว็บไซต์ที่ตอบโจทย์รูปแบบธุรกิจเฉพาะทางอย่างแม่นยำ",
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
];

/* [2. CORE PROFESSIONAL SERVICES]: บริการหลักระดับ Specialist */
export const servicesData: readonly ServiceItem[] = [
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
      "ติดตั้งพิกัดติดตามผล (Pixel/CAPI) ครบวงจร",
      "โครงสร้างน้ำหนักเบาเพื่อประสิทธิภาพสูงสุดมาตรฐาน AEMDEVWEB",
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
      "โครงสร้างที่รองรับมาตรฐานการค้นหา Google 2026",
    ],
    promotion: "สิทธิพิเศษโดเมนเนมระดับสากลจูนโดย AEMDEVWEB",
    iconName: "Clock",
    relatedTemplateSlugs: ["corporate_lite", "starter_landing", "personal_bio"],
  },
  {
    id: "svc-biz-pro",
    title: "Enterprise Scalability Pack",
    slug: "corporate_pro",
    category: "Business",
    themeColor: "indigo",
    description:
      "โครงสร้างระบบที่ นายเอ็มซ่ามากส์ วางแผนงานเพื่อรองรับการขยายตัวและข้อมูลมหาศาล",
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
    id: "svc-seo-agency",
    title: "SEO Ranking Performance",
    slug: "seo_agency",
    category: "Digital",
    themeColor: "emerald",
    description:
      "ปฏิบัติการดันพิกัดธุรกิจสู่หน้าแรก Google โดย นายเอ็มซ่ามากส์",
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
];
