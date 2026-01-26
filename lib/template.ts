/** @format */

import { TemplateMetadata, TemplateContent } from "@/types/template"

/**
 * 1. คลังข้อมูลหลัก (Metadata)
 * เน้นข้อมูลที่ใช้ในการตัดสินใจเลือกในหน้า Marketplace
 */
const TEMPLATE_METADATA: TemplateMetadata[] = [
  {
    id: "hotel-resort",
    name: "Hotel & Resort Premium",
    category: "hotel",
    thumbnail: "/images/templates/hotelresort.webp",
    description:
      "โครงสร้างเน้นการโชว์ภาพบรรยากาศขนาดใหญ่ โดยไม่เสียคะแนนความเร็ว พร้อมระบบจองที่ใช้งานง่าย",
  },
  {
    id: "cleaning-pro",
    name: "Cleaning Service Pro",
    category: "service",
    thumbnail: "/images/templates/cleaningpro.webp",
    description:
      "ระบบจัดวางเนื้อหาที่เน้นการสร้างความมั่นใจ (Trust Flow) และกระตุ้นการติดต่อใน 3 คลิก",
  },
  {
    id: "facebook-ads-expert",
    name: "Facebook Ads Specialist",
    category: "marketing",
    thumbnail: "/images/templates/facebookadsexpert.webp",
    description:
      "การจัดวางข้อมูลสถิติที่เน้นความโดดเด่น สื่อถึงความเป็นมืออาชีพและการวัดผลที่แม่นยำ",
  },
  {
    id: "shop-master-pro",
    name: "Shop Master Pro",
    category: "ecommerce",
    thumbnail: "/images/templates/shopmasterpro.webp",
    description:
      "โครงสร้างการแสดงผลสินค้าที่รีดความเร็วในการโหลด แม้จะมีจำนวนสินค้ามากก็ตาม",
  },
]

/**
 * 2. ข้อมูลเชิงลึกสำหรับส่วนพรีวิว (Content Map)
 * เน้นบทวิเคราะห์เชิงเทคนิค (Technical Report) เพื่อยืนยันคุณภาพงาน
 */
const TEMPLATE_CONTENT_MAP: Record<string, TemplateContent> = {
  "hotel-resort": {
    title: "Hotel & Resort Structure",
    description:
      "การวางโครงสร้างเพื่อเปลี่ยนผู้เข้าชมให้เป็นผู้เข้าพัก ด้วยการเล่าเรื่องผ่านภาพและข้อมูลที่ครบถ้วน",
    body: "ใช้เทคนิคการโหลดภาพแบบ Priority เฉพาะจุดสำคัญเพื่อลดค่า LCP ให้ต่ำกว่า 0.8 วินาที และการจัดการ Font ที่ไม่ทำให้หน้าเว็บกระตุกขณะโหลด",
    performance: { lcp: "< 0.8s", seo: "100/100", stability: "Verified" },
  },
  "cleaning-pro": {
    title: "Cleaning Service Structure",
    description:
      "การออกแบบเส้นทางการตัดสินใจที่เน้นความน่าเชื่อถือและการจองบริการที่รวดเร็ว",
    body: "เน้นการวางจุดติดต่อ (CTA) แบบกระจายตัวตามพฤติกรรมการอ่าน และการลดรหัสส่วนเกินในส่วนของแบบฟอร์มเพื่อความลื่นไหลสูงสุด",
    performance: { lcp: "< 0.6s", seo: "100/100", stability: "Stable" },
  },
  "facebook-ads-expert": {
    title: "Marketing Expert Structure",
    description:
      "วิเคราะห์การจัดวางข้อมูลสถิติและการดึงดูดกลุ่มเป้าหมายเชิงธุรกิจ",
    body: "ใช้โครงสร้างสีแบบ High-Contrast เพื่อเน้นตัวเลขสถิติให้โดดเด่น และการจัดการระบบ Asset ที่เบาหวิวเพื่อการเข้าถึงจากมือถือได้ทันที",
    performance: { lcp: "< 0.7s", seo: "100/100", stability: "Excellent" },
  },
  "shop-master-pro": {
    title: "E-Commerce Structure",
    description: "การจัดระเบียบข้อมูลสินค้าจำนวนมากให้แสดงผลได้ไวและค้นหาง่าย",
    body: "จัดการโครงสร้าง Grid System ที่มีความเสถียรสูง ลดค่า CLS ให้เป็นศูนย์ เพื่อไม่ให้เลย์เอาต์ขยับขณะลูกค้ากำลังเลือกดูสินค้า",
    performance: { lcp: "< 0.9s", seo: "100/100", stability: "Verified" },
  },
}

/**
 * ดึงรายการ ID ทั้งหมด (Static Params)
 */
export function getAllTemplates(): string[] {
  return TEMPLATE_METADATA.map((t) => t.id)
}

/**
 * ดึงข้อมูลสรุปทั้งหมด (Catalog Grid)
 */
export function getAllTemplatesMetadata(): TemplateMetadata[] {
  return TEMPLATE_METADATA
}

/**
 * ดึงข้อมูลวิเคราะห์รายธุรกิจ (Technical Details)
 */
export async function getTemplateDataBySlug(
  slug: string
): Promise<TemplateContent | null> {
  // รองรับการทำงานแบบ Async เพื่อเตรียมพร้อมสำหรับการขยายฐานข้อมูลในอนาคต
  return TEMPLATE_CONTENT_MAP[slug] || null
}
