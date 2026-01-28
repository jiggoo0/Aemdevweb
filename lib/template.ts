/** @format */

import { TemplateMetadata, TemplateContent } from "@/types/template"

/**
 * 1. รายการชุดเว็บไซต์พร้อมใช้งาน (Shops Metadata)
 * รวมข้อมูลพื้นฐานสำหรับแสดงผลในหน้า Marketplace
 * ยุทธศาสตร์: โชว์ความเนี้ยบ และราคาที่ SME จับต้องได้จริง
 */
const TEMPLATE_METADATA: TemplateMetadata[] = [
  {
    id: "WEB-RENT-01",
    slug: "webrental",
    name: "ชุดเว็บเช่าสำหรับธุรกิจ",
    category: "Digital",
    thumbnail: "/images/templates/webrental/webrental.webp",
    description:
      "ทางเลือกใหม่สำหรับคนเริ่มทำธุรกิจ จ่ายรายเดือนเบาๆ ไม่ต้องกำเงินก้อนใหญ่มาทำเว็บ",
    pricePrefix: "เริ่มเพียง",
    priceValue: "590",
    isNew: true,
  },
  {
    id: "SALE-SINGLE-01",
    slug: "salepage_single",
    name: "เซลเพจหน้าเดียวตัวแรง",
    category: "ReadyMade",
    thumbnail: "/images/templates/project-01.webp",
    description:
      "รวมข้อมูลทุกอย่างไว้ในหน้าเดียว ปิดการขายได้ไว เหมาะสำหรับสายยิงแอดโดยเฉพาะ",
    priceValue: "1,990",
    isNew: true,
  },
  {
    id: "CORP-PRO-01",
    slug: "corporate_pro",
    name: "ชุดเว็บธุรกิจรุ่นท็อป",
    category: "Business",
    thumbnail: "/images/templates/project-01.webp",
    description:
      "ยกระดับความน่าเชื่อถือให้บริษัทด้วยดีไซน์ระดับพรีเมียม และระบบที่รองรับข้อมูลชุดใหญ่",
    priceValue: "45,000",
    isNew: true,
  },
  {
    id: "SHOP-PRO-01",
    slug: "shopmasterpro",
    name: "ระบบร้านค้าออนไลน์จัดเต็ม",
    category: "Business",
    thumbnail: "/images/templates/shopmasterpro/shopmasterpro.webp",
    description:
      "จัดการสินค้าได้อยู่หมัด สวย สะอาดตา และเน้นให้ลูกค้ากดสั่งซื้อง่ายที่สุด",
    priceValue: "25,000",
    isNew: false,
  },
  {
    id: "HTL-PREM-01",
    slug: "hotelresort",
    name: "ชุดเว็บโรงแรมและที่พัก",
    category: "Business",
    thumbnail: "/images/templates/hotelresort/hotelresort.webp",
    description:
      "โชว์ภาพสวยๆ ของที่พักให้ดูแพง พร้อมระบบข้อมูลที่ลูกค้าดูแล้วอยากจองทันที",
    priceValue: "35,000",
    isNew: false,
  },
  {
    id: "SEO-AG-01",
    slug: "seo_agency",
    name: "ชุดเว็บเอเจนซี่การตลาด",
    category: "Digital",
    thumbnail: "/images/templates/project-01.webp",
    description:
      "เน้นโชว์ตัวเลขและผลลัพธ์ให้เด่นชัด สื่อถึงความเป็นมืออาชีพในการทำอันดับ",
    priceValue: "19,900",
    isNew: true,
  },
  {
    id: "CLN-PRO-01",
    slug: "cleaningpro",
    name: "ชุดเว็บงานบริการมืออาชีพ",
    category: "Business",
    thumbnail: "/images/templates/cleaningpro/cleaningpro.webp",
    description:
      "ออกแบบมาเพื่อคนทำธุรกิจบริการโดยเฉพาะ เน้นให้ลูกค้าติดต่อจองคิวงานได้ไวที่สุด",
    priceValue: "15,000",
    isNew: false,
  },
  {
    id: "FB-MKT-01",
    slug: "facebookadsexpert",
    name: "หน้าขายของสายยิงแอด",
    category: "ReadyMade",
    thumbnail: "/images/templates/facebookadsexpert/facebookadsexpert.webp",
    description:
      "เน้นเปลี่ยนคนดูให้เป็นลูกค้า รองรับแรงกระแทกจากโฆษณาได้ดีเยี่ยม",
    priceValue: "12,900",
    isNew: false,
  },
  {
    id: "CORP-LITE-01",
    slug: "corporate_lite",
    name: "เว็บนามบัตรบริษัท",
    category: "Business",
    thumbnail: "/images/templates/project-01.webp",
    description:
      "สร้างความน่าเชื่อถือให้บริษัทของคุณด้วยหน้าเว็บที่ดูดี โหลดไว และหาเจอใน Google ง่ายๆ",
    priceValue: "9,900",
    isNew: false,
  },
  {
    id: "START-LND-01",
    slug: "starter_landing",
    name: "ชุดเริ่มต้นสำหรับมือใหม่",
    category: "ReadyMade",
    thumbnail: "/images/templates/project-01.webp",
    description:
      "หน้าแรกของธุรกิจที่ซิ่งและเนี้ยบที่สุด ในราคาที่ใครก็เริ่มต้นได้",
    priceValue: "1,990",
    isNew: true,
  },
  {
    id: "REST-CAFE-01",
    slug: "restaurant_cafe",
    name: "ชุดเว็บร้านอาหารและคาเฟ่",
    category: "Business",
    thumbnail: "/images/templates/project-01.webp",
    description:
      "โชว์เมนูให้น่ากิน และระบุตำแหน่งร้านให้ลูกค้าตามไปเช็คอินได้ถูกต้อง",
    priceValue: "15,900",
    isNew: false,
  },
  {
    id: "EVT-MAG-01",
    slug: "event_magic",
    name: "ชุดเว็บงานอีเวนต์และงานแต่ง",
    category: "Business",
    thumbnail: "/images/templates/project-01.webp",
    description:
      "บันทึกความทรงจำสุดพิเศษไว้ในหน้าเว็บที่สวยงาม และแชร์ให้เพื่อนๆ ดูได้ทันที",
    priceValue: "12,000",
    isNew: false,
  },
  {
    id: "BIO-PREM-01",
    slug: "personal_bio",
    name: "ชุดเว็บแนะนำตัวพรีเมียม",
    category: "Digital",
    thumbnail: "/images/templates/project-01.webp",
    description:
      "รวมทุกช่องทางติดต่อและประวัติของคุณไว้ในลิงก์เดียว แบบเนี้ยบและซิ่งที่สุด",
    priceValue: "1,990",
    isNew: false,
  },
  {
    id: "LOCAL-SRV-01",
    slug: "local_service",
    name: "ชุดเว็บธุรกิจท้องถิ่น",
    category: "Business",
    thumbnail: "/images/templates/project-01.webp",
    description:
      "ทำให้คนในพื้นที่หาธุรกิจของคุณเจอง่ายขึ้น ด้วยหน้าเว็บที่เน้นการติดต่อด่วน",
    priceValue: "8,900",
    isNew: false,
  },
  {
    id: "MAINT-PAGE-01",
    slug: "maintenance_page",
    name: "หน้าแจ้งปรับปรุงระบบ",
    category: "Digital",
    thumbnail: "/images/templates/project-01.webp",
    description:
      "สำหรับแจ้งลูกค้าอย่างเป็นมืออาชีพว่าเรากำลังจูนเครื่อง เดี๋ยวกลับมาซิ่งต่อ",
    priceValue: "990",
    isNew: false,
  },
]

/**
 * 2. รายละเอียดชุดเว็บไซต์ (Technical Content Map)
 * การันตีประสิทธิภาพ และข้อมูลประกอบการตัดสินใจ
 */
const TEMPLATE_CONTENT_MAP: Record<string, TemplateContent> = {
  webrental: {
    title: "ระบบเว็บเช่าเพื่อธุรกิจยุคใหม่",
    description:
      "รวมทุกอย่างที่จำเป็นไว้ให้แล้ว จ่ายรายเดือนสบายๆ พร้อมออนไลน์ได้ใน 24 ชม.",
    body: "เราเตรียมระบบหลังบ้านที่ใช้งานง่ายสุดๆ ไว้ให้คุณ เจ้าของธุรกิจจัดการข้อมูลเองได้เลย ไม่ต้องรอโปรแกรมเมอร์ให้เสียเวลา",
    performance: {
      lcp: "< 0.5 วินาที",
      seo: "คะแนนเต็ม 100",
      stability: "เสถียรสูงสุด",
    },
    features: [
      "จัดการข้อมูลเองได้ง่าย",
      "เปิดในมือถือสวยเป๊ะ",
      "ทีมงานดูแลตลอดการใช้งาน",
    ],
  },
  salepage_single: {
    title: "เซลเพจหน้าเดียว ปิดยอดไว",
    description: "หน้าขายของที่เน้นการตัดสินใจซื้อในทันที",
    body: "จัดลำดับเนื้อหาให้คนอ่านแล้วอยากซื้อทันที โหลดไวมากแม้จะเข้าจากลิงก์ใน Facebook หรือ LINE ช่วยให้คุณไม่เสียโอกาสทางการขาย",
    performance: {
      lcp: "< 0.4 วินาที",
      seo: "คะแนนเต็ม 100",
      stability: "ซิ่งสุดๆ",
    },
    features: [
      "เนื้อหากระชับปิดการขาย",
      "เชื่อมต่อ LINE ทันที",
      "รองรับแรงกระแทกจากโฆษณา",
    ],
  },
  corporate_pro: {
    title: "เว็บธุรกิจรุ่นท็อปสเปกจัดเต็ม",
    description: "มาตรฐานใหม่ของเว็บไซต์บริษัทที่ต้องการความเป็นที่สุด",
    body: "ออกแบบโครงสร้างมาเพื่อรองรับข้อมูลจำนวนมากแต่ยังคงความเร็วไว้ได้เนี้ยบที่สุด เหมาะสำหรับบริษัทที่ต้องการความน่าเชื่อถือระดับสากล",
    performance: {
      lcp: "< 0.8 วินาที",
      seo: "คะแนนเต็ม 100",
      stability: "รองรับคนเข้าชมมหาศาล",
    },
    features: [
      "ดีไซน์ระดับพรีเมียม",
      "โครงสร้าง Google รัก",
      "ระบบความปลอดภัยสูง",
    ],
  },
  // หมายเหตุ: รายละเอียดตัวอื่นๆ สามารถทยอยเติมให้ครบตามรูปแบบข้างต้นได้เลยครับพี่เอ็ม
}

/**
 * 3. ระบบจัดการข้อมูล (Data Handlers)
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

/** * ดึงสินค้าแนะนำขึ้นหน้าแรก
 * กลยุทธ์: ดึง 'เว็บเช่า' ขึ้นก่อน ตามด้วยตัวแรงอีก 3 รายการ
 */
export function getTemplatesMetadata(): TemplateMetadata[] {
  const promoSlug = "webrental"
  const promoItem = TEMPLATE_METADATA.find((t) => t.slug === promoSlug)
  const others = TEMPLATE_METADATA.filter((t) => t.slug !== promoSlug).slice(
    0,
    3
  )

  return promoItem ? [promoItem, ...others] : TEMPLATE_METADATA.slice(0, 4)
}
