/** @format */
// ----------------------------------------------------
// 🏗️ JP-VISOUL: Services Data Hub (Production Version)
// Role: รวมศูนย์ข้อมูลบริการจากทุกลูกค้า (Sync กับ Marketing Config)
// ----------------------------------------------------

import { clinicConfig } from "@/app/(marketing)/[template_id]/_templates/clinic/config"
import { cafeConfig } from "@/app/(marketing)/[template_id]/_templates/cafe/config"
import { realEstateConfig } from "@/app/(marketing)/[template_id]/_templates/realestate/config"
import { constructionConfig } from "@/app/(marketing)/[template_id]/_templates/construction/config"
import { starterConfig } from "@/app/(marketing)/[template_id]/_templates/starter/config"

export interface ServiceItem {
  id: string
  slug: string
  title: string
  description: string
  detail: string
  price: string
  promoPrice?: string
  image: string
  category: "MEDICAL" | "CAFE" | "PROPERTY" | "CONSTRUCTION" | "STARTER"
  status: "READY" | "PLANNING"
}

export const servicesData: ServiceItem[] = [
  {
    id: "1",
    slug: "clinic",
    title: clinicConfig?.name ?? "Wellness & Clinic",
    description:
      clinicConfig?.content?.heroSubtitle ??
      "ระบบจัดการคลินิกและ Wellness Center ครบวงจร",
    detail:
      "บริการออกแบบระบบจัดการคลินิกและ Wellness Center ครบวงจร พร้อมหน้า Landing Page สำหรับนัดหมายแพทย์ มาตรฐานความปลอดภัยข้อมูลระดับสูง",
    price: "15,000 - 45,000 THB",
    image: "/images/projects/clinic-bg.jpg", // ใช้ static path เพื่อความชัวร์ หรือใช้ config?.metadata?.ogImage
    category: "MEDICAL",
    status: "READY",
  },
  {
    id: "2",
    slug: "cafe",
    title: cafeConfig?.name ?? "Cafe & Matrix Menu",
    description:
      cafeConfig?.content?.heroSubtitle ??
      "เทมเพลตร้านกาแฟระดับพรีเมียม พร้อมระบบเมนูสินค้า",
    detail:
      "เทมเพลตร้านกาแฟระดับพรีเมียม แรงบันดาลใจจาก Starbucks พร้อมระบบเมนูสินค้าแบบตาราง (Matrix) และหน้าระบบสมาชิกสะสมแต้ม",
    price: "8,500 - 18,000 THB",
    image: "/images/projects/cafe-bg.jpg",
    category: "CAFE",
    status: "READY",
  },
  {
    id: "3",
    slug: "realestate",
    title: realEstateConfig?.name ?? "Luxury Real Estate",
    description:
      realEstateConfig?.content?.heroSubtitle ??
      "Landing Page สำหรับโครงการอสังหาริมทรัพย์และ Agency",
    detail:
      "Landing Page สำหรับโครงการอสังหาริมทรัพย์และ Agency จัดหาที่พัก เน้นความ Luxury โชว์ภาพโครงการแบบ High-Resolution เพื่อปิดการขาย",
    price: "25,000 - 60,000 THB",
    image: "/images/projects/real-estate-bg.jpg",
    category: "PROPERTY",
    status: "READY",
  },
  {
    id: "4",
    slug: "construction",
    title: constructionConfig?.name ?? "Construction & Engineering",
    // 🛡️ แก้ไขจุดที่เป็น Error: ดึงจาก content.heroSubtitle แทน metadata.description
    description:
      constructionConfig?.content?.heroSubtitle ??
      "ระบบโชว์พอร์ตโฟลิโอก่อสร้างและวิศวกรรมโยธา",
    detail:
      "ระบบโชว์พอร์ตโฟลิโอก่อสร้างและวิศวกรรมโยธา สำหรับหน่วยงานรัฐและเอกชน มาตรฐาน Business Professional พร้อมตาราง Track Record",
    price: "12,000 - 35,000 THB",
    image: "/images/projects/construction-bg.jpg",
    category: "CONSTRUCTION",
    status: "READY",
  },
  {
    id: "5",
    slug: "starter",
    title: starterConfig?.name ?? "SME Starter Pack",
    description:
      starterConfig?.content?.heroSubtitle ??
      "แพ็คเกจเริ่มต้นสำหรับ SME ที่ต้องการความไวสูงสุด",
    detail:
      "แพ็คเกจเริ่มต้นสำหรับ SME ที่ต้องการความไวสูงสุด มาพร้อมระบบ Loading Speed Optimization และหน้า Conversion Landing Page",
    price: "7,500 THB",
    promoPrice: "3,900 THB", // ราคาโปรโมชั่น 3,900 ตามสั่ง
    image: "/images/projects/starter-bg.jpg",
    category: "STARTER",
    status: "READY",
  },
]

/**
 * 🔍 Helper: ดึงข้อมูลบริการด้วย Slug
 */
export const getServiceBySlug = (slug: string): ServiceItem | undefined => {
  if (!slug) return undefined
  return servicesData.find(
    (service) => service.slug.toLowerCase() === slug.toLowerCase()
  )
}
