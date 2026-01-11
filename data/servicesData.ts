/** @format */
// ----------------------------------------------------
// 🌐 AEMDEVWEB: Services Data Hub (Sales-Optimized)
// ----------------------------------------------------

import { ServiceItem, TargetGroup } from "@/types/services"
import { type IconKey } from "@/components/iconMap"

// 📦 ดึงข้อมูล Config ของแต่ละ Template
import { clinicConfig } from "@/app/(marketing)/[template_id]/_templates/clinic/config"
import { cafeConfig } from "@/app/(marketing)/[template_id]/_templates/cafe/config"
import { realEstateConfig } from "@/app/(marketing)/[template_id]/_templates/realestate/config"
import { constructionConfig } from "@/app/(marketing)/[template_id]/_templates/construction/config"
import { starterConfig } from "@/app/(marketing)/[template_id]/_templates/starter/config"
import { starterConfig as woodBusinessConfig } from "@/app/(marketing)/[template_id]/_templates/WoodBusiness/config"

/**
 * 🔧 Helper: แปลงข้อมูล Features ให้พร้อมใช้งาน (จำกัด 3 ข้อ เพื่อความสบายตา)
 */
const normalizeFeatures = (source?: any[]): string[] => {
  if (!source || !Array.isArray(source)) return []

  return source
    .map((item) => {
      if (!item) return undefined
      if (typeof item === "string") return item
      return item.title || item.label || item.text || item.detail
    })
    .filter((v): v is string => Boolean(v))
    .slice(0, 3)
}

/**
 * 🚀 Services Data: ปรับปรุงชื่อและคำบรรยายให้เข้าถึงคนไทยทุกระดับ
 */
export const servicesData: ServiceItem[] = [
  {
    id: "5",
    slug: "starter",
    title: "FastTrack Landing Page (รุ่นเริ่มต้น)",
    description:
      "สร้างตัวตนบนโลกออนไลน์ใน 3-7 วัน ด้วยเว็บหน้าเดียวที่ออกแบบมาเพื่อปิดการขายโดยเฉพาะ",
    longDescription:
      "เหมาะสำหรับพ่อค้าแม่ค้าออนไลน์ และ SME เริ่มต้น ที่ต้องการเว็บสวย โหลดไว และใช้งานได้จริงในราคาที่คุ้มค่าที่สุด",
    price: "7,500",
    promoPrice: "3,900",
    iconName: "STARTER" as IconKey,
    targetGroup: "SME",
    features: normalizeFeatures(starterConfig?.content?.features),
    status: "READY",
  },
  {
    id: "6",
    slug: "wood-business",
    title: "Industrial & Catalog (รุ่นบริษัท/โรงงาน)",
    description:
      "ยกระดับความน่าเชื่อถือให้โรงงานและร้านค้าวัสดุ ด้วยระบบแคตตาล็อกสินค้าออนไลน์ที่ดูโปรและทันสมัย",
    longDescription:
      "เน้นการโชว์ภาพลักษณ์บริษัทและรายการสินค้า เพื่อให้ลูกค้าส่งคำขอใบเสนอราคาได้ง่ายขึ้น",
    price: "9,500 - 25,000",
    iconName: "CONSTRUCTION" as IconKey,
    targetGroup: "หจก./บริษัท",
    features: normalizeFeatures(woodBusinessConfig?.content?.features),
    status: "READY",
    isPopular: true,
  },
  {
    id: "1",
    slug: "clinic",
    title: "Medical & Wellness (รุ่นคลินิก/สุขภาพ)",
    description:
      "ระบบนัดหมายออนไลน์และโชว์บริการทางการแพทย์ เสริมภาพลักษณ์ความสะอาด มั่นใจ และน่าเชื่อถือ",
    longDescription:
      "รวมระบบแสดงผลบริการที่ชัดเจนและช่องทางติดต่อคุณหมอ เหมาะสำหรับคลินิกความงามและศูนย์สุขภาพ",
    price: "15,000 - 45,000",
    iconName: "MEDICAL" as IconKey,
    targetGroup: "หจก./บริษัท",
    features: normalizeFeatures(clinicConfig?.content?.services),
    status: "READY",
  },
  {
    id: "4",
    slug: "construction",
    title: "Engineering Portfolio (รุ่นรับเหมา/ก่อสร้าง)",
    description:
      "โชว์ผลงานการก่อสร้างระดับมืออาชีพ เพื่อใช้ประมูลงานและดึงดูดคู่ค้าจากหน่วยงานรัฐและเอกชน",
    longDescription:
      "เน้นโชว์ความสำเร็จของโปรเจกต์ (Project Showcase) และมาตรฐานวิศวกรรมที่บริษัทมี",
    price: "12,000 - 35,000",
    iconName: "CONSTRUCTION" as IconKey,
    targetGroup: "หจก./บริษัท",
    features: normalizeFeatures(constructionConfig?.content?.services),
    status: "READY",
  },
  {
    id: "3",
    slug: "realestate",
    title: "Property & Real Estate (รุ่นอสังหาริมทรัพย์)",
    description:
      "เว็บไซต์โครงการบ้านและคอนโด พร้อมระบบแผนที่และข้อมูลทำเล เพื่อการตัดสินใจจองที่ง่ายขึ้น",
    longDescription:
      "ออกแบบมาเพื่อ Agency และโครงการอสังหาฯ โดยเฉพาะ เน้นรูปภาพขนาดใหญ่และข้อมูลที่ครบถ้วน",
    price: "25,000 - 60,000",
    iconName: "PROPERTY" as IconKey,
    targetGroup: "หจก./บริษัท",
    features: normalizeFeatures(realEstateConfig?.content?.highlights),
    status: "READY",
  },
  {
    id: "2",
    slug: "cafe",
    title: "Premium Cafe & Restaurant (รุ่นร้านอาหาร)",
    description:
      "ดึงดูดลูกค้าด้วยบรรยากาศร้านบนหน้าเว็บ พร้อมระบบเมนูออนไลน์ที่สวยงามและใช้งานง่าย",
    longDescription:
      "สร้างประสบการณ์แบรนด์ให้น่าจดจำ เหมาะสำหรับร้านกาแฟ Specialty และร้านอาหารพรีเมียม",
    price: "8,500 - 18,000",
    iconName: "CAFE" as IconKey,
    targetGroup: "ร้านอาหาร",
    features: normalizeFeatures(cafeConfig?.content?.features),
    status: "READY",
  },
]

/**
 * 🔍 ตัวช่วยค้นหา (Helper Functions)
 */
export const getServiceBySlug = (
  slug: string | string[] | undefined
): ServiceItem | undefined => {
  if (!slug) return undefined
  const targetSlug = Array.isArray(slug) ? slug[0] : slug
  return servicesData.find(
    (s) => s.slug.toLowerCase() === targetSlug.toLowerCase()
  )
}

export const getServicesByTarget = (target: TargetGroup): ServiceItem[] => {
  return servicesData.filter((s) => s.targetGroup === target)
}
