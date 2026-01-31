/** @format */

import { TemplateMetadata, TemplateContent } from "@/types/template";

/**
 * AEMDEVWEB | คลังสถาปัตยกรรมชุดระบบหน้าเว็บ (Strategic Library 2026)
 * -------------------------------------------------------------------------
 * บริหารจัดการและควบคุมสมรรถนะโดย: นายเอ็มซ่ามากส์ (อลงกรณ์ ยมเกิด)
 * ยุทธศาสตร์: Entity Authority & Technical SEO Excellence
 */

/**
 * 1. TEMPLATE_METADATA - รายการดัชนีพิกัดชุดระบบหลัก
 * ปรับปรุงราคาและคำอธิบายเพื่อดึงดูดทั้งมือใหม่ (ซื้อง่าย) และมือเก่า (มั่นใจในระบบ)
 */
const TEMPLATE_METADATA: TemplateMetadata[] = [
  {
    id: "SALE-SINGLE-01",
    slug: "salepage_single",
    name: "Conversion Sales Engine",
    category: "ReadyMade",
    thumbnail: "/images/templates/project-01.webp",
    description:
      "หน้าขายของปิดการขาย โหลดไว 0.4 วินาที จูนสปีดมาเพื่อหยุดนิ้วสไลด์และเพิ่ม ROI สูงสุดโดย นายเอ็มซ่ามากส์",
    priceValue: 2500,
    priceLabel: "2,500",
    isNew: true,
    isFeatured: true,
  },
  {
    id: "WEB-RENT-01",
    slug: "webrental",
    name: "Managed Business Infrastructure",
    category: "Digital",
    thumbnail: "/images/templates/webrental/webrental.webp",
    description:
      "เช่าเว็บไซต์พรีเมียมพร้อมคนดูแล ไม่ต้องลงทุนก้อนใหญ่ ฟรีโฮสติ้งและ Support ตลอด 24 ชม. สไตล์ นายเอ็มซ่ามากส์",
    pricePrefix: "เริ่มต้นรายเดือน",
    priceValue: 1990,
    priceLabel: "1,990",
    isNew: true,
    isFeatured: true,
  },
  {
    id: "CORP-PRO-01",
    slug: "corporate_pro",
    name: "Enterprise Digital Architecture",
    category: "Business",
    thumbnail: "/images/templates/project-01.webp",
    description:
      "สถาปัตยกรรมเว็บไซต์องค์กรขนาดใหญ่ เน้นความปลอดภัยสูง รองรับระบบ Database และหลายภาษาโดย นายเอ็มซ่ามากส์",
    priceValue: 59000,
    priceLabel: "59,000",
    isNew: true,
    isFeatured: true,
  },
  {
    id: "SHOP-PRO-01",
    slug: "shopmasterpro",
    name: "E-Commerce Logistics Hub",
    category: "Business",
    thumbnail: "/images/templates/shopmasterpro/shopmasterpro.webp",
    description:
      "ระบบร้านค้าออนไลน์เต็มรูปแบบ จัดการสต็อกและพิกัดการขายได้ไร้รอยต่อ จูนระบบโดย นายเอ็มซ่ามากส์",
    priceValue: 29000,
    priceLabel: "29,000",
    isNew: false,
    isFeatured: true,
  },
  {
    id: "HTL-PREM-01",
    slug: "hotelresort",
    name: "Elite Hospitality Solution",
    category: "Business",
    thumbnail: "/images/templates/hotelresort/hotelresort.webp",
    description:
      "ระบบจองที่พักตรง ลดค่า GP OTA (อโกด้า) รับเงินเต็มๆ พร้อมระบบตัดบัตรเครดิตที่เนี้ยบที่สุด",
    priceValue: 35000,
    priceLabel: "35,000",
    isNew: false,
  },
  {
    id: "FB-MKT-01",
    slug: "facebookadsexpert",
    name: "Ad-Targeting Optimized Node",
    category: "ReadyMade",
    thumbnail: "/images/templates/facebookadsexpert/facebookadsexpert.webp",
    description:
      "Landing Page ขั้นเทพ ออกแบบโครงสร้างตามจิตวิทยาการขาย (Custom UI) เพื่อลดค่าแอดโดย นายเอ็มซ่ามากส์",
    priceValue: 12900,
    priceLabel: "12,900",
    isNew: false,
  },
  {
    id: "CLN-PRO-01",
    slug: "cleaningpro",
    name: "Operational Service Platform",
    category: "Business",
    thumbnail: "/images/templates/cleaningpro/cleaningpro.webp",
    description:
      "ระบบงานบริการ นัดหมาย และจัดการตารางเวลาที่แม่นยำ เหมาะสำหรับคลินิก สปา และงานบริการทุกรูปแบบ",
    priceValue: 15000,
    priceLabel: "15,000",
    isNew: false,
  },
  {
    id: "CORP-LITE-01",
    slug: "corporate_lite",
    name: "Strategic Business Identity",
    category: "Business",
    thumbnail: "/images/templates/project-01.webp",
    description:
      "สร้างความเชื่อมั่นให้บริษัทด้วยหน้าเว็บมาตรฐานสากล จูนความเร็วและรองรับ SEO โดย นายเอ็มซ่ามากส์",
    priceValue: 9900,
    priceLabel: "9,900",
    isNew: false,
  },
  {
    id: "START-LND-01",
    slug: "starter_landing",
    name: "Starter Business Sales Protocol",
    category: "ReadyMade",
    thumbnail: "/images/templates/project-01.webp",
    description:
      "มินิเว็บไซต์หน้าเดียวสำหรับเริ่มต้นธุรกิจ รวบรวมข้อมูลครบจบในที่เดียวในงบประมาณที่คุ้มค่าที่สุด",
    priceValue: 1990,
    priceLabel: "1,990",
    isNew: true,
  },
  {
    id: "REST-CAFE-01",
    slug: "restaurant_cafe",
    name: "Culinary Narrative Showcase",
    category: "Business",
    thumbnail: "/images/templates/project-01.webp",
    description:
      "นำเสนอเมนูและบรรยากาศร้านอาหารผ่านภาพลักษณ์ Visual-First เพื่อกระตุ้นความต้องการลูกค้า",
    priceValue: 15900,
    priceLabel: "15,900",
    isNew: false,
  },
  {
    id: "BIO-PREM-01",
    slug: "personal_bio",
    name: "Premium Profile Engine",
    category: "Digital",
    thumbnail: "/images/templates/project-01.webp",
    description:
      "นามบัตรดิจิทัลพรีเมียม รวมทุกโซเชียลไว้ในลิงก์เดียว โหลดไว 0.4s ยกระดับ Personal Brand ของคุณ",
    priceValue: 1290,
    priceLabel: "1,290",
    isNew: false,
  },
  {
    id: "LOCAL-SRV-01",
    slug: "local_service",
    name: "Local Specialist Hub",
    category: "Business",
    thumbnail: "/images/templates/project-01.webp",
    description:
      "เพิ่มโอกาสให้ธุรกิจท้องถิ่นด้วยระบบ Local SEO ปักหมุดแม่นยำ ให้คนในพื้นที่ค้นหาเจอเป็นเจ้าแรก",
    priceValue: 8900,
    priceLabel: "8,900",
    isNew: false,
  },
  {
    id: "MAINT-PAGE-01",
    slug: "maintenance_page",
    name: "Optimization Status Node",
    category: "Digital",
    thumbnail: "/images/templates/project-01.webp",
    description:
      "หน้าปิดปรับปรุงระบบที่ยังเก็บ Lead ลูกค้าได้ ดีไซน์สวยโปรไฟล์เนี้ยบมาตรฐาน นายเอ็มซ่ามากส์",
    priceValue: 990,
    priceLabel: "990",
    isNew: false,
  },
];

/**
 * 2. TEMPLATE_CONTENT_MAP - ข้อมูลสมรรถนะเชิงลึก (Strategic Content Node)
 */
const TEMPLATE_CONTENT_MAP: Record<string, TemplateContent> = {
  webrental: {
    title: "Managed Web Infrastructure (Web Rental)",
    description:
      "เว็บไซต์เช่าพร้อมการดูแลระดับ VIP โดย นายเอ็มซ่ามากส์ ไม่ต้องกังวลเรื่องระบบล่มหรือโฮสติ้ง",
    body: "โซลูชันที่ช่วยให้ SME มีเว็บไซต์คุณภาพสูงในราคาที่จับต้องได้ จ่ายรายเดือนเบาๆ แต่ได้ประสิทธิภาพเครื่องยนต์ระดับ Enterprise",
    performance: {
      lcp: "< 0.5 วินาที",
      seo: "Technical SEO 100%",
      stability: "24/7 Managed Excellence",
    },
    features: [
      "ระบบจัดการเนื้อหา (CMS) ที่ใช้งานง่ายที่สุด",
      "ฟรีค่าธรรมเนียม Hosting & SSL ตลอดอายุสัญญา",
      "อัปเดตระบบความปลอดภัยอัตโนมัติโดย นายเอ็มซ่ามากส์",
    ],
  },
  salepage_single: {
    title: "Conversion Sales Engine (Sale Page 0.4s)",
    description:
      "อาวุธหนักสำหรับสายยิงแอดที่ต้องการผลลัพธ์ทันที จูนสปีดโดย นายเอ็มซ่ามากส์",
    body: "เพราะทุกวินาทีที่ช้าคือยอดขายที่หายไป โครงสร้างนี้จึงถูกจูนให้โหลดไวที่สุดในไทย เพื่อเปลี่ยนผู้ชมให้เป็นผู้ซื้อในทันที",
    performance: {
      lcp: "< 0.4 วินาที",
      seo: "Sales Velocity Optimized",
      stability: "High Traffic Ready",
    },
    features: [
      "รองรับการติด Facebook Pixel & TikTok Events",
      "โครงสร้าง UX/UI ที่ผ่านการทดสอบมาเพื่อการปิดการขาย",
      "จูนสปีดระดับสูงสุด (Google PageSpeed Green Score)",
    ],
  },
  corporate_pro: {
    title: "Enterprise Digital Architecture (ระบบองค์กร)",
    description:
      "สะท้อนความน่าเชื่อถือระดับสากล ผ่านสถาปัตยกรรมเว็บที่เนี้ยบที่สุด",
    body: "ยกระดับภาพลักษณ์ธุรกิจสู่ระดับสากลด้วยเว็บไซต์ที่เน้นความมั่นคง ปลอดภัย และการใช้งานที่ลื่นไหลสำหรับพาร์ทเนอร์และลูกค้าของคุณ",
    performance: {
      lcp: "< 0.8 วินาที",
      seo: "Authority Structure",
      stability: "Bank-Grade Security",
    },
    features: [
      "รองรับระบบหลายภาษา (Multi-language Support)",
      "สถาปัตยกรรมที่รองรับการขยายตัว (Scalable Structure)",
      "ระบบรักษาความปลอดภัยข้อมูลขั้นสูง",
    ],
  },
};

/**
 * 3. ระบบจัดการข้อมูล (Data Handlers)
 * -------------------------------------------------------------------------
 */

export function getAllTemplates(): string[] {
  return TEMPLATE_METADATA.map((t) => t.slug);
}

export function getAllTemplatesMetadata(): TemplateMetadata[] {
  return [...TEMPLATE_METADATA];
}

export async function getTemplateDataBySlug(
  slug: string,
): Promise<TemplateContent | null> {
  const data = TEMPLATE_CONTENT_MAP[slug];
  return data ? { ...data } : null;
}

export function getTemplatesBySlugs(slugs: string[]): TemplateMetadata[] {
  if (!slugs || slugs.length === 0) return [];
  return TEMPLATE_METADATA.filter((template) => slugs.includes(template.slug));
}

export function getTemplatesMetadata(): TemplateMetadata[] {
  const featured = TEMPLATE_METADATA.filter((t) => t.isFeatured);
  if (featured.length < 4) {
    const others = TEMPLATE_METADATA.filter((t) => !t.isFeatured);
    return [...featured, ...others].slice(0, 4);
  }
  return featured.slice(0, 4);
}
