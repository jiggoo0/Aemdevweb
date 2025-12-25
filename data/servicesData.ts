/** @format */
// ----------------------------------------------------
// 🏗️ AEMDEVWEB: Services Data Hub (Production Version)
// Role: Normalization Layer for Marketing Templates
// Fix: Resolve "Cannot read properties of undefined" with strict null checks
// ----------------------------------------------------

import { ServiceItem, TargetGroup } from "@/types/services"

// 📦 Imports Configs with Safe Defaults
import { clinicConfig } from "@/app/(marketing)/[template_id]/_templates/clinic/config"
import { cafeConfig } from "@/app/(marketing)/[template_id]/_templates/cafe/config"
import { realEstateConfig } from "@/app/(marketing)/[template_id]/_templates/realestate/config"
import { constructionConfig } from "@/app/(marketing)/[template_id]/_templates/construction/config"
import { starterConfig } from "@/app/(marketing)/[template_id]/_templates/starter/config"

/**
 * 🔧 Normalize heterogeneous feature sources
 * ทำหน้าที่แปลงข้อมูล Features จากหลากหลายรูปแบบให้เป็น string[] อย่างปลอดภัย
 */
type FeatureSource =
  | string
  | { title?: string }
  | { label?: string }
  | { text?: string }
  | { detail?: string }

const normalizeFeatures = (source?: FeatureSource[]): string[] => {
  if (!source || !Array.isArray(source)) return []

  return source
    .map((item) => {
      if (!item) return undefined
      if (typeof item === "string") return item

      // การเช็คเชิงลึกเพื่อให้แน่ใจว่าได้ค่า string กลับไป
      const val =
        ("title" in item ? item.title : undefined) ||
        ("label" in item ? item.label : undefined) ||
        ("text" in item ? item.text : undefined) ||
        ("detail" in item ? item.detail : undefined)

      return typeof val === "string" ? val : undefined
    })
    .filter((v): v is string => Boolean(v))
    .slice(0, 3)
}

/**
 * 🚀 MAIN SERVICE DATA
 * ใช้ Optional Chaining (?.) และ Nullish Coalescing (??) เพื่อป้องกัน Runtime Crash
 */
export const servicesData: ServiceItem[] = [
  {
    id: "1",
    slug: "clinic",
    title: clinicConfig?.name ?? "Aura Wellness Center",
    description:
      clinicConfig?.content?.heroSubtitle ??
      "นวัตกรรมการดูแลสุขภาพเชิงป้องกันระดับพรีเมียม",
    longDescription:
      "บริการออกแบบระบบจัดการคลินิกและ Wellness Center ครบวงจร พร้อมหน้า Landing Page สำหรับนัดหมายแพทย์",
    price: "15,000 - 45,000 THB",
    iconName: "MEDICAL",
    targetGroup: "หจก./บริษัท",
    features: normalizeFeatures(clinicConfig?.content?.services),
    status: "READY",
  },
  {
    id: "2",
    slug: "cafe",
    title: cafeConfig?.name ?? "The Source Roasters",
    description:
      cafeConfig?.content?.heroSubtitle ??
      "ประสบการณ์กาแฟระดับ Specialty ในบรรยากาศ Industrial Modern",
    longDescription:
      "เทมเพลตร้านกาแฟระดับพรีเมียม พร้อมระบบเมนูสินค้าและระบบสมาชิก",
    price: "8,500 - 18,000 THB",
    iconName: "CAFE",
    targetGroup: "ร้านอาหาร",
    features: normalizeFeatures(cafeConfig?.content?.features),
    status: "READY",
  },
  {
    id: "3",
    slug: "realestate",
    title: realEstateConfig?.name ?? "Vault & Vest Property",
    description:
      realEstateConfig?.content?.heroSubtitle ??
      "คัดสรรสุดยอดที่อยู่อาศัยเพื่อการลงทุนและคุณภาพชีวิต",
    longDescription:
      "Landing Page สำหรับโครงการอสังหาริมทรัพย์และ Agency เน้นข้อมูล Location Insight",
    price: "25,000 - 60,000 THB",
    iconName: "PROPERTY",
    targetGroup: "หจก./บริษัท",
    features: normalizeFeatures(realEstateConfig?.content?.highlights),
    status: "READY",
  },
  {
    id: "4",
    slug: "construction",
    title: constructionConfig?.name ?? "Titan Structures & Engineering",
    description:
      constructionConfig?.content?.heroSubtitle ??
      "ออกแบบและก่อสร้างโครงสร้างพื้นฐานด้วยมาตรฐานวิศวกรรม",
    longDescription: "ระบบโชว์พอร์ตโฟลิโอก่อสร้างสำหรับหน่วยงานรัฐและเอกชน",
    price: "12,000 - 35,000 THB",
    iconName: "CONSTRUCTION",
    targetGroup: "หจก./บริษัท",
    features: normalizeFeatures(constructionConfig?.content?.services),
    status: "READY",
  },
  {
    id: "5",
    slug: "starter",
    title: starterConfig?.name ?? "FastTrack Digital",
    description:
      starterConfig?.content?.heroSubtitle ??
      "เริ่มต้นธุรกิจออนไลน์ด้วยเว็บไซต์มาตรฐานสากล",
    longDescription:
      "แพ็คเกจเริ่มต้นสำหรับ SME ที่ต้องการความไวและ Conversion สูง",
    price: "7,500 THB",
    promoPrice: "3,900 THB",
    iconName: "STARTER",
    targetGroup: "SME",
    features: normalizeFeatures(starterConfig?.content?.features),
    status: "READY",
    isPopular: true,
  },
]

/**
 * 🔍 Helper: Get service by slug
 */
export const getServiceBySlug = (
  slug: string | string[] | undefined
): ServiceItem | undefined => {
  if (!slug) return undefined
  const targetSlug = Array.isArray(slug) ? slug[0] : slug
  return servicesData.find(
    (service) => service.slug.toLowerCase() === targetSlug.toLowerCase()
  )
}

/**
 * 🏷️ Helper: Filter services by target group
 */
export const getServicesByTarget = (target: TargetGroup): ServiceItem[] => {
  return servicesData.filter((service) => service.targetGroup === target)
}
