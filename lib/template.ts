/** @format */

import { TemplateMetadata, TemplateContent } from "@/types/template"

/**
 * 1. คลังข้อมูลหลัก (Metadata Registry)
 * เก็บพิกัดข้อมูลพื้นฐานสำหรับแสดงผลในหน้าคลังโครงสร้าง (Marketplace)
 * เน้นการใช้คีย์เวิร์ดที่รองรับ Organic Search เพื่อให้ธุรกิจ SME ค้นหาได้ง่าย
 */
const TEMPLATE_METADATA: TemplateMetadata[] = [
  {
    id: "web-rental-001",
    slug: "webrental",
    name: "Business Web Rental",
    category: "platform",
    thumbnail: "/images/templates/webrental.webp",
    description:
      "ทางเลือกสำหรับธุรกิจที่อยากมีหน้าบ้านดิจิทัลแบบรายเดือน เริ่มต้นได้ทันทีโดยไม่ต้องแบกรับค่าใช้จ่ายก้อนใหญ่",
    pricePrefix: "เริ่มต้น",
    priceValue: "590",
    isNew: true,
  },
  {
    id: "shop-master-001",
    slug: "shop-master-pro",
    name: "Shop Master Pro",
    category: "ecommerce",
    thumbnail: "/images/templates/shopmasterpro.webp",
    description:
      "ระบบจัดวางรายการสินค้าที่ถูกออกแบบมาเพื่อความคล่องตัว จัดการข้อมูลจำนวนมากได้อย่างเป็นระเบียบ",
    priceValue: "25,000",
    isNew: false,
  },
  {
    id: "hotel-resort-001",
    slug: "hotel-resort",
    name: "Hotel & Resort Premium",
    category: "hotel",
    thumbnail: "/images/templates/hotelresort.webp",
    description:
      "เน้นการถ่ายทอดบรรยากาศธุรกิจด้วยงานภาพที่คมชัด โดยยังคงความรวดเร็วในการโหลดข้อมูลระดับมาตรฐานสากล",
    priceValue: "35,000",
    isNew: false,
  },
  {
    id: "cleaning-pro-001",
    slug: "cleaning-pro",
    name: "Cleaning Service Pro",
    category: "service",
    thumbnail: "/images/templates/cleaningpro.webp",
    description:
      "โครงสร้างการนำเสนอที่เน้นความน่าเชื่อถือ และช่วยให้ลูกค้าติดต่อรับบริการได้ง่ายและรวดเร็ว",
    priceValue: "15,000",
    isNew: false,
  },
  {
    id: "fb-ads-001",
    slug: "facebook-ads-expert",
    name: "Facebook Ads Specialist",
    category: "marketing",
    thumbnail: "/images/templates/facebookadsexpert.webp",
    description:
      "การจัดลำดับข้อมูลที่ช่วยเน้นตัวเลขผลลัพธ์ให้โดดเด่น สื่อถึงความเป็นมืออาชีพในการทำงานเชิงรุก",
    priceValue: "12,900",
    isNew: false,
  },
]

/**
 * 2. ข้อมูลเชิงลึก (Technical Content Registry)
 * รายละเอียดสำหรับการทำ Pre-selling ในหน้า Detail และการันตีประสิทธิภาพงานระบบ
 */
const TEMPLATE_CONTENT_MAP: Record<string, TemplateContent> = {
  webrental: {
    title: "Web Rental Platform Structure",
    description:
      "การจัดพิกัดระบบเช่าเว็บไซต์รายเดือนที่เน้นความคุ้มค่าและพร้อมใช้งานทันที",
    body: "ใช้โครงสร้างที่เบาและยืดหยุ่น เพื่อให้เจ้าของธุรกิจสามารถจัดการเนื้อหาได้เองโดยไม่ต้องมีพื้นฐานเชิงเทคนิคที่ซับซ้อน",
    performance: { lcp: "< 0.5s", seo: "100/100", stability: "Excellent" },
    features: [
      "ระบบจัดการหลังบ้านง่าย",
      "รองรับมือถือ 100%",
      "ติดตั้งไวใน 24 ชม.",
    ],
  },
  "shop-master-pro": {
    title: "E-Commerce Structure",
    description:
      "การจัดการข้อมูลสินค้าให้ดูสะอาดตาและเข้าถึงพิกัดที่ต้องการได้ทันที",
    body: "วางรากฐานการแสดงผลที่เสถียร ลดการขยับของหน้าจอขณะโหลด เพื่อให้ลูกค้าใช้งานได้อย่างต่อเนื่องไม่มีสะดุด",
    performance: { lcp: "< 0.9s", seo: "100/100", stability: "Verified" },
    features: ["ระบบตะกร้าสินค้า", "จัดการสต็อกง่าย", "รองรับการชำระเงิน"],
  },
  "hotel-resort": {
    title: "Hotel & Resort Structure",
    description:
      "การจัดลำดับภาพและเนื้อหาเพื่อเปลี่ยนผู้เข้าชมให้เป็นผู้เข้าพัก",
    body: "ใช้เทคนิคการจัดการรูปภาพเฉพาะจุดสำคัญเพื่อไม่ให้เป็นภาระต่อระบบ และการคุมระนาบตัวอักษรให้อ่านง่ายในทุกหน้าจอ",
    performance: { lcp: "< 0.8s", seo: "100/100", stability: "Verified" },
    features: [
      "แสดงห้องพักแบบ Gallery",
      "ปุ่มจองห้องพักเด่น",
      "รองรับหลายภาษา",
    ],
  },
  "cleaning-pro": {
    title: "Service Business Structure",
    description: "เส้นทางการนำเสนอที่เน้นความโปร่งใสและการติดต่อที่รวดเร็ว",
    body: "เน้นการจัดวางปุ่มติดต่อตามพฤติกรรมการใช้งานจริง พร้อมการเคลียร์โค้ดส่วนเกินเพื่อให้การเข้าถึงข้อมูลลื่นไหลที่สุด",
    performance: { lcp: "< 0.6s", seo: "100/100", stability: "Stable" },
    features: ["ตารางจองคิวบริการ", "รีวิวจากลูกค้าจริง", "แผนที่ตั้งบริษัท"],
  },
  "facebook-ads-expert": {
    title: "Marketing Expert Structure",
    description:
      "เน้นการแสดงผลข้อมูลสถิติที่ชัดเจนเพื่อสร้างความมั่นใจให้กลุ่มลูกค้าธุรกิจ",
    body: "ใช้โครงสร้างที่ส่งเสริมให้ตัวเลขสำคัญดูเด่นชัด และการจัดการไฟล์ที่เบาเป็นพิเศษเพื่อให้เปิดใช้งานจากมือถือได้ทันที",
    performance: { lcp: "< 0.7s", seo: "100/100", stability: "Excellent" },
    features: [
      "เน้นปุ่มทักแชท / Line",
      "แสดงผลลัพธ์ Case Study",
      "โหลดไวประหยัดงบโฆษณา",
    ],
  },
}

/**
 * 3. พิกัดฟังก์ชันสำหรับดึงข้อมูลไปใช้งานในระบบ
 */

/** ดึงรายชื่อ Slug ทั้งหมดสำหรับระบบ Static Generation */
export function getAllTemplates(): string[] {
  return TEMPLATE_METADATA.map((t) => t.slug)
}

/** ดึง Metadata ทั้งหมดสำหรับแสดงผลในหน้าคลังโครงสร้าง (Catalog) */
export function getAllTemplatesMetadata(): TemplateMetadata[] {
  return [...TEMPLATE_METADATA]
}

/** ดึงเนื้อหาเชิงลึกตามพิกัด Slug */
export async function getTemplateDataBySlug(
  slug: string
): Promise<TemplateContent | null> {
  const data = TEMPLATE_CONTENT_MAP[slug]
  return data ? { ...data } : null
}

/**
 * ดึงรายการแนะนำ (Featured Units)
 * กลยุทธ์: ดึง Web Rental ขึ้นพิกัดแรก ตามด้วยตัวอื่นๆ อีก 3 รายการ
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
