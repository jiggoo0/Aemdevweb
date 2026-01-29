/** @format */

import { TemplateMetadata, TemplateContent } from "@/types/template"

/**
 * AEMDEVWEB | คลังสถาปัตยกรรมชุดระบบหน้าเว็บ (Strategic Library 2026)
 * -------------------------------------------------------------------------
 * บริหารจัดการและควบคุมสมรรถนะโดย: นายเอ็มซ่ามากส์ (อลงกรณ์ ยมเกิด)
 * ยุทธศาสตร์: Entity Authority & Technical SEO Excellence
 */

/**
 * 1. TEMPLATE_METADATA - รายการดัชนีพิกัดชุดระบบหลัก
 */
const TEMPLATE_METADATA: TemplateMetadata[] = [
  {
    id: "WEB-RENT-01",
    slug: "webrental",
    name: "Managed Business Infrastructure",
    category: "Digital",
    thumbnail: "/images/templates/webrental/webrental.webp",
    description:
      "โซลูชันบริหารงบประมาณอัจฉริยะสำหรับ SME ยุคใหม่ ด้วยระบบเช่าสมรรถนะสูงที่จูนโดย นายเอ็มซ่ามากส์",
    pricePrefix: "เริ่มต้นรายเดือน",
    priceValue: 1990,
    priceLabel: "1,990",
    isNew: true,
    isFeatured: true,
  },
  {
    id: "SALE-SINGLE-01",
    slug: "salepage_single",
    name: "Conversion Sales Engine",
    category: "ReadyMade",
    thumbnail: "/images/templates/project-01.webp",
    description:
      "พิกัดปิดการขายที่รวดเร็วที่สุด ด้วย Sales Interface ที่จูนสปีดมาเพื่อแคมเปญโฆษณาพิกัดแรงโดย นายเอ็มซ่ามากส์",
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
      "สถาปัตยกรรมองค์กรระดับพรีเมียม วางระบบโครงสร้างข้อมูลโดย นายเอ็มซ่ามากส์ เพื่อภาพลักษณ์ระดับสากล",
    priceValue: 45000,
    priceLabel: "45,000",
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
      "ระบบร้านค้าที่เน้น Operational Excellence จัดการสต็อกและพิกัดการขายได้ไร้รอยต่อสไตล์ นายเอ็มซ่ามากส์",
    priceValue: 25000,
    priceLabel: "25,000",
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
      "สะท้อนสุนทรียภาพแห่งที่พักระดับพรีเมียม ผ่านระบบจองพิกัดตรงที่ นายเอ็มซ่ามากส์ วางระบบไว้อย่างเนี้ยบ",
    priceValue: 35000,
    priceLabel: "35,000",
    isNew: false,
  },
  {
    id: "SEO-AG-01",
    slug: "seo_agency",
    name: "Search Authority Engine",
    category: "Digital",
    thumbnail: "/images/templates/project-01.webp",
    description:
      "ศูนย์บัญชาการดันอันดับ Google โดย นายเอ็มซ่ามากส์ ที่เน้นดัชนีชี้วัดเชิงสถิติและ Technical SEO ขั้นสูง",
    priceValue: 19900,
    priceLabel: "19,900",
    isNew: true,
  },
  {
    id: "CLN-PRO-01",
    slug: "cleaningpro",
    name: "Operational Service Platform",
    category: "Business",
    thumbnail: "/images/templates/cleaningpro/cleaningpro.webp",
    description:
      "ระบบงานบริการที่เน้นพิกัดความแม่นยำและการจัดการตารางเวลาที่เนี้ยบที่สุดโดย นายเอ็มซ่ามากส์",
    priceValue: 15000,
    priceLabel: "15,000",
    isNew: false,
  },
  {
    id: "FB-MKT-01",
    slug: "facebookadsexpert",
    name: "Ad-Targeting Optimized Node",
    category: "ReadyMade",
    thumbnail: "/images/templates/facebookadsexpert/facebookadsexpert.webp",
    description:
      "เปลี่ยนทราฟฟิกให้เป็นกำไรโดย นายเอ็มซ่ามากส์ ด้วยโครงสร้าง LCP Optimized และเสถียรภาพสูงสุดขณะยิงแอด",
    priceValue: 12900,
    priceLabel: "12,900",
    isNew: false,
  },
  {
    id: "CORP-LITE-01",
    slug: "corporate_lite",
    name: "Strategic Business Identity",
    category: "Business",
    thumbnail: "/images/templates/project-01.webp",
    description:
      "สร้างความเชื่อมั่นให้ SME ด้วยหน้าเว็บที่จูนความเร็วและรองรับมาตรฐาน SEO 2026 โดย นายเอ็มซ่ามากส์",
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
      "จุดเริ่มต้นพิกัดธุรกิจออนไลน์ที่ซิ่งและเนี้ยบสไตล์ นายเอ็มซ่ามากส์ ในงบประมาณที่คุ้มค่าที่สุด",
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
      "นำเสนอพิกัดความอร่อยผ่าน Interface ที่ นายเอ็มซ่ามากส์ จูนมาเพื่อกระตุ้นพิกัดความต้องการลูกค้า",
    priceValue: 15900,
    priceLabel: "15,900",
    isNew: false,
  },
  {
    id: "EVT-MAG-01",
    slug: "event_magic",
    name: "Specialized Event Protocol",
    category: "Business",
    thumbnail: "/images/templates/project-01.webp",
    description:
      "บันทึกพิกัดความทรงจำสำคัญ ผ่านสถาปัตยกรรมเว็บที่ นายเอ็มซ่ามากส์ ออกแบบมาให้ประณีตที่สุด",
    priceValue: 12000,
    priceLabel: "12,000",
    isNew: false,
  },
  {
    id: "BIO-PREM-01",
    slug: "personal_bio",
    name: "Premium Profile Engine",
    category: "Digital",
    thumbnail: "/images/templates/project-01.webp",
    description:
      "รวมพิกัดตัวตนดิจิทัลของคุณไว้ในลิงก์เดียวที่เนี้ยบและโหลดไวระดับวินาที (0.4s) โดย นายเอ็มซ่ามากส์",
    priceValue: 1990,
    priceLabel: "1,990",
    isNew: false,
  },
  {
    id: "LOCAL-SRV-01",
    slug: "local_service",
    name: "Local Specialist Hub",
    category: "Business",
    thumbnail: "/images/templates/project-01.webp",
    description:
      "เพิ่มโอกาสให้ธุรกิจท้องถิ่นด้วยระบบพิกัด Local SEO ที่แม่นยำ จูนระบบงานโดย นายเอ็มซ่ามากส์",
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
      "แจ้งพิกัดการปรับปรุงระบบโดย นายเอ็มซ่ามากส์ เพื่อการกลับมาออนไลน์ที่ซิ่งและแรงกว่าเดิม",
    priceValue: 990,
    priceLabel: "990",
    isNew: false,
  },
]

/**
 * 2. TEMPLATE_CONTENT_MAP - ข้อมูลสมรรถนะเชิงลึก (Strategic Content Node)
 */
const TEMPLATE_CONTENT_MAP: Record<string, TemplateContent> = {
  webrental: {
    title: "สถาปัตยกรรมเว็บเช่าเพื่อธุรกิจยุค 2026",
    description:
      "ยกระดับธุรกิจสู่พิกัดออนไลน์ภายใน 24 ชม. ด้วย Managed Infrastructure โดย นายเอ็มซ่ามากส์",
    body: "สัมผัสประสบการณ์การจัดการที่เน้นความเร็วและความเสถียรสูงสุด จูนระบบมาเพื่อรองรับการเติบโตของ SME ในพิกัดที่เนี้ยบที่สุด",
    performance: {
      lcp: "< 0.5 วินาที",
      seo: "Technical SEO 100%",
      stability: "Managed Excellence",
    },
    features: [
      "ระบบจัดการข้อมูล CMS พิกัดแรง",
      "Responsive Connectivity ทุกหน้าจอ",
      "การสนับสนุนระดับ Specialist โดย นายเอ็มซ่ามากส์",
    ],
  },
  salepage_single: {
    title: "Sale Page พิกัดแรงเพื่อยอดขายระดับสูงสุด",
    description: "หยุดการสูญเสียลูกค้าด้วยความเร็วการตอบสนองระดับวินาที (0.4s) โดย นายเอ็มซ่ามากส์",
    body: "โครงสร้าง Conversion Sales Engine ที่จูนมาตามหลักจิตวิทยาการขาย พร้อมรองรับทราฟฟิกมหาศาลจากการยิงแอดพิกัดแรง",
    performance: {
      lcp: "< 0.4 วินาที",
      seo: "Sales Velocity 100",
      stability: "High Concurrency Support",
    },
    features: [
      "Strategic CTA Placement",
      "Seamless Lead Generation",
      "ระบบงานเนี้ยบมาตรฐาน นายเอ็มซ่ามากส์",
    ],
  },
  maintenance_page: {
    title: "ระบบแจ้งสถานะการเพิ่มสมรรถนะชั่วคราว",
    description:
      "สื่อสารความน่าเชื่อถือโดย นายเอ็มซ่ามากส์ ระหว่างการยกระดับสถาปัตยกรรมระบบงาน",
    body: "พื้นที่สำหรับแจ้งพิกัดความเคลื่อนไหว เพื่อการกลับมาออนไลน์ที่เนี้ยบและซิ่งกว่าเดิมในมาตรฐานปี 2026",
    performance: {
      lcp: "< 0.3 วินาที",
      seo: "Robots-Friendly Structure",
      stability: "Lightweight Infrastructure",
    },
    features: [
      "Strategic Countdown Protocol",
      "Emergency Support Hub โดย นายเอ็มซ่ามากส์",
      "คงอัตลักษณ์แบรนด์พิกัดชัดเจน",
    ],
  },
}

/**
 * 3. ระบบจัดการข้อมูล (Data Handlers)
 * -------------------------------------------------------------------------
 */

export function getAllTemplates(): string[] {
  return TEMPLATE_METADATA.map((t) => t.slug)
}

export function getAllTemplatesMetadata(): TemplateMetadata[] {
  return [...TEMPLATE_METADATA]
}

export async function getTemplateDataBySlug(
  slug: string
): Promise<TemplateContent | null> {
  const data = TEMPLATE_CONTENT_MAP[slug]
  return data ? { ...data } : null
}

export function getTemplatesBySlugs(slugs: string[]): TemplateMetadata[] {
  if (!slugs || slugs.length === 0) return []
  return TEMPLATE_METADATA.filter((template) => slugs.includes(template.slug))
}

export function getTemplatesMetadata(): TemplateMetadata[] {
  const featured = TEMPLATE_METADATA.filter((t) => t.isFeatured)
  if (featured.length < 4) {
    const others = TEMPLATE_METADATA.filter((t) => !t.isFeatured)
    return [...featured, ...others].slice(0, 4)
  }
  return featured.slice(0, 4)
}
