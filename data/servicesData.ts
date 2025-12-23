/** @format */

import { ServiceCategory } from "@/app/landing/[template-id]/types"
import { ServiceIconKey } from "@/components/iconMap"
import {
  Rocket,
  Stethoscope,
  HardHat,
  Building2,
  Coffee,
  Truck,
  Briefcase,
  Store,
  Cpu,
  LucideIcon,
} from "lucide-react"

export interface ServiceItem {
  id: string
  slug: string
  title: string
  description: string
  icon: ServiceIconKey
  features: string[]
  targetGroup: string
  priceTag: string
  isHot?: boolean
  categoryRef: ServiceCategory
}

/**
 * 🛠️ ฟังก์ชันสำหรับดึง Icon ตาม Key
 * Mapping ให้ครบตาม ServiceIconKey เพื่อรองรับ Type Safety 100%
 */
export const getServiceIcon = (iconKey: ServiceIconKey): LucideIcon => {
  const iconMap: Record<ServiceIconKey, LucideIcon> = {
    starter: Rocket,
    clinic: Stethoscope,
    construction: HardHat,
    realEstate: Building2,
    cafe: Coffee,
    logistics: Truck,
    corporate: Briefcase,
    retail: Store,
    custom: Cpu,
  }

  return iconMap[iconKey] || Rocket
}

export const servicesData: ServiceItem[] = [
  {
    id: "service-starter",
    slug: "starter-landing-01",
    title: "Aemdev Starter Kit",
    description:
      "หน้า Landing Page สำหรับธุรกิจเริ่มต้น ออกแบบมาเพื่อ Conversion สูงสุด",
    icon: "starter",
    targetGroup: "ธุรกิจเริ่มต้น / SME / Online Seller",
    priceTag: "โปรโมชั่น 3,900.-",
    isHot: true,
    categoryRef: "starter",
    features: [
      "Industrial Sharp Design รองรับมือถือ 100%",
      "Next.js Architecture โหลดเร็วระดับ Enterprise",
      "Tracking (GA4 / Pixel) พร้อมใช้งาน",
      "ฟรี Domain + Hosting + SSL 1 ปี",
    ],
  },
  {
    id: "service-clinic",
    slug: "clinic-solution-01",
    title: "Care Clinic Solution",
    description: "เว็บไซต์คลินิกที่ออกแบบมาเพื่อสร้าง Trust และเพิ่มการจองคิว",
    icon: "clinic",
    targetGroup: "คลินิก / สถานพยาบาล / ความงาม",
    priceTag: "เริ่มต้น 7,900.-",
    categoryRef: "clinic",
    features: [
      "Before–After รีวิวแบบ High Impact",
      "ระบบจองคิว เชื่อม Line OA",
      "โครงสร้างรองรับ PDPA",
      "SEO Ready สำหรับธุรกิจพื้นที่",
    ],
  },
  {
    id: "service-construction",
    slug: "construction-industrial-01",
    title: "Steel & Construction Hub",
    description:
      "เว็บไซต์สำหรับบริษัทรับเหมาและอุตสาหกรรม โชว์ผลงานอย่างเป็นระบบ",
    icon: "construction",
    targetGroup: "บริษัทรับเหมา / โรงงาน / วิศวกรรม",
    priceTag: "เริ่มต้น 4,900.-",
    categoryRef: "construction",
    features: [
      "Project Gallery แยกหมวดหมู่",
      "Workflow การทำงานแบบ Engineering",
      "ดาวน์โหลด Company Profile",
      "Blueprint / Industrial Design",
    ],
  },
  {
    id: "service-real-estate",
    slug: "real-estate-premium-01",
    title: "The Prime Real Estate",
    description: "นำเสนอโครงการอสังหาริมทรัพย์ด้วยภาพขนาดใหญ่ และข้อมูลทำเล",
    icon: "realEstate",
    targetGroup: "โครงการอสังหาฯ / เอเจนซี่ / นายหน้า",
    priceTag: "เริ่มต้น 5,900.-",
    categoryRef: "real-estate",
    features: [
      "Location Insight วิเคราะห์ทำเล",
      "Lead Capture Form",
      "Cinematic Gallery",
      "รองรับ 2 ภาษา",
    ],
  },
  {
    id: "service-cafe",
    slug: "aem-cafe-industrial",
    title: "Urban Cafe & Artisan",
    description:
      "หน้าเว็บสำหรับร้านอาหารและคาเฟ่ โชว์บรรยากาศและเมนูอย่างมืออาชีพ",
    icon: "cafe",
    targetGroup: "คาเฟ่ / ร้านอาหาร / Craft Bar",
    priceTag: "เริ่มต้น 3,900.-",
    categoryRef: "cafe",
    features: [
      "Digital Menu อัปเดตง่าย",
      "Google Maps นำทาง",
      "ปุ่มจองโต๊ะ / ติดต่อ",
      "Minimal Industrial Design",
    ],
  },
]
