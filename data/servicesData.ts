/** @format */
// ----------------------------------------------------
// 🌐 AEMDEVWEB: Services Data Hub (Sales-Optimized)
// ----------------------------------------------------

import { ServiceItem, TargetGroup } from "@/types/services"
// ✅ ลบ LucideIcon ออกเนื่องจากไม่ได้ถูกเรียกใช้งาน
import { type IconKey } from "@/components/iconMap" // ✅ นำเข้า IconKey เพื่อความแม่นยำ

// 📦 ดึงข้อมูล Config ของแต่ละ Template
import { clinicConfig } from "@/app/(marketing)/[template_id]/_templates/clinic/config"
import { cafeConfig } from "@/app/(marketing)/[template_id]/_templates/cafe/config"
import { realEstateConfig } from "@/app/(marketing)/[template_id]/_templates/realestate/config"
import { constructionConfig } from "@/app/(marketing)/[template_id]/_templates/construction/config"
import { starterConfig } from "@/app/(marketing)/[template_id]/_templates/starter/config"
import { starterConfig as woodBusinessConfig } from "@/app/(marketing)/[template_id]/_templates/WoodBusiness/config"

/**
 * 🔧 Helper: แปลงข้อมูล Features ให้พร้อมใช้งาน
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
 * 🚀 Services Data: จัดลำดับแบบ "Sales Funnel"
 * ✅ ใช้ IconKey ให้ตรงกับ mapping ใน components/iconMap.ts
 */
export const servicesData: ServiceItem[] = [
  {
    id: "5",
    slug: "starter",
    title: starterConfig?.name ?? "FastTrack Landing Page",
    description:
      "เริ่มต้นธุรกิจออนไลน์ด้วยเว็บไซต์มาตรฐานสากล โหลดไว และออกแบบมาเพื่อปิดการขายโดยเฉพาะ",
    longDescription:
      "แพ็กเกจเริ่มต้นสำหรับ SME ที่ต้องการเว็บไซต์คุณภาพสูงในราคาที่คุ้มค่าที่สุด",
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
    title: woodBusinessConfig?.name ?? "Industrial Inventory & Catalog",
    description:
      "ยกระดับโรงไม้และวัสดุก่อสร้างสู่โลกออนไลน์ ด้วยระบบแคตตาล็อกสินค้าที่ดูแพงและน่าเชื่อถือ",
    longDescription:
      "เว็บไซต์ที่ออกแบบมาเพื่อธุรกิจค้าส่งและวัสดุก่อสร้าง เน้นการโชว์สินค้าและขอใบเสนอราคา",
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
    title: clinicConfig?.name ?? "Medical & Wellness Architecture",
    description:
      "ระบบนัดหมายและโชว์บริการทางการแพทย์ระดับพรีเมียม เสริมภาพลักษณ์ความสะอาดและทันสมัย",
    longDescription:
      "ระบบจัดการคลินิกและ Wellness Center ครบวงจร พร้อม Landing Page สำหรับนัดหมายแพทย์",
    price: "15,000 - 45,000",
    iconName: "MEDICAL" as IconKey,
    targetGroup: "หจก./บริษัท",
    features: normalizeFeatures(clinicConfig?.content?.services),
    status: "READY",
  },
  {
    id: "4",
    slug: "construction",
    title: constructionConfig?.name ?? "Titan Engineering Portfolio",
    description:
      "โชว์ผลงานก่อสร้างและโปรเจกต์ใหญ่ด้วยมาตรฐานวิศวกรรม เพื่อการประมูลและดึงดูดคู่ค้า",
    longDescription: "เว็บไซต์โชว์ผลงานก่อสร้างสำหรับหน่วยงานรัฐและเอกชน",
    price: "12,000 - 35,000",
    iconName: "CONSTRUCTION" as IconKey,
    targetGroup: "หจก./บริษัท",
    features: normalizeFeatures(constructionConfig?.content?.services),
    status: "READY",
  },
  {
    id: "3",
    slug: "realestate",
    title: realEstateConfig?.name ?? "Vault & Vest Property Hub",
    description:
      "Landing Page คัดสรรสุดยอดที่อยู่อาศัยเพื่อการลงทุน พร้อมระบบพิกัดและ Location Insight",
    longDescription: "เว็บไซต์สำหรับโครงการอสังหาริมทรัพย์และ Agency",
    price: "25,000 - 60,000",
    iconName: "PROPERTY" as IconKey,
    targetGroup: "หจก./บริษัท",
    features: normalizeFeatures(realEstateConfig?.content?.highlights),
    status: "READY",
  },
  {
    id: "2",
    slug: "cafe",
    title: cafeConfig?.name ?? "Specialty Cafe & Restaurant",
    description:
      "สร้างประสบการณ์แบรนด์ผ่านหน้าเว็บที่สวยงาม พร้อมระบบเมนูออนไลน์และสมาชิก",
    longDescription: "เว็บไซต์ร้านกาแฟพรีเมียม บรรยากาศ Industrial Modern",
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
