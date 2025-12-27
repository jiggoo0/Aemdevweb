/** @format */
import * as LucideIcons from "lucide-react"
import { IconKey } from "@/components/iconMap" // ✅ นำเข้า Type ที่เราสร้างไว้เพื่อใช้ร่วมกัน

/**
 * 🎯 กำหนดประเภทของกลุ่มลูกค้าเป้าหมาย
 */
export type TargetGroup =
  | "SME"
  | "ร้านอาหาร"
  | "หจก./บริษัท"
  | "ร้านค้าออนไลน์"
  | "ทั่วไป"

/**
 * 🛠️ Interface สำหรับรายการฟีเจอร์ย่อย
 */
export interface ServiceFeature {
  text: string
  isHighlight?: boolean
}

/**
 * 🏛️ Interface หลักสำหรับข้อมูลบริการ (Service Item)
 */
export interface ServiceItem {
  id: string
  slug: string
  title: string
  description: string
  longDescription?: string

  /** * ✅ แก้ไข: รองรับทั้ง IconKey (Custom Map) และชื่อไอคอนมาตรฐานของ Lucide
   * ช่วยให้ Error TS2322 ใน servicesData.ts หายไปทันที
   */
  iconName: IconKey | keyof typeof LucideIcons

  targetGroup: TargetGroup | string // ปรับให้ยืดหยุ่นขึ้นหากมีการดึงข้อมูลจาก Config ภายนอก
  features: string[]

  // 💰 Pricing Model
  price?: string
  promoPrice?: string
  priceSuffix?: string // เช่น "/เดือน" หรือ "/โปรเจกต์"

  // 🏷️ Badge & Status
  isPopular?: boolean
  status: "READY" | "DRAFT" | "ARCHIVED"

  // 🖼️ Media & SEO
  imageUrl?: string
  metadata?: {
    title?: string
    description?: string
  }
}

/**
 * 📟 Interface สำหรับสรุปภาพรวมบริการ
 */
export interface ServiceSummary {
  totalServices: number
  lastUpdated: string
  activeCategories: TargetGroup[]
}
