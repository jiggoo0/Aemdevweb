/** @format */

/**
 * กำหนดประเภทของกลุ่มลูกค้าเป้าหมาย
 * เพื่อให้ง่ายต่อการ Filter และการแสดงผล Badge
 */
export type TargetGroup =
  | "SME"
  | "ร้านอาหาร"
  | "หจก./บริษัท"
  | "ร้านค้าออนไลน์"
  | "ทั่วไป"

/**
 * Interface สำหรับรายการฟีเจอร์ย่อยในแต่ละบริการ
 */
export interface ServiceFeature {
  text: string
  isHighlight?: boolean // สำหรับเน้นข้อความในลิสต์
}

/**
 * Interface หลักสำหรับข้อมูลบริการ (Service Item)
 */
export interface ServiceItem {
  id: string
  slug: string // สำหรับ URL เช่น /services/restaurant-package
  title: string
  description: string
  longDescription?: string // สำหรับหน้า Service Detail (ถ้ามี)
  iconName: string // ชื่อไอคอนจาก Lucide React (เช่น "Utensils", "Building2")
  targetGroup: TargetGroup
  features: string[] // รายการสิ่งที่จะได้รับ
  price?: string // ราคาเริ่มต้น (ถ้าต้องการแสดง)
  promoPrice?: string // ราคาโปรโมชั่น (ถ้ามี)
  isPopular?: boolean // สำหรับติดป้าย "แนะนำ" หรือ "ยอดฮิต"
  status?: "READY" | "DRAFT" | "ARCHIVED" // สถานะการแสดงผล
}

/**
 * Interface สำหรับสรุปภาพรวมบริการ
 */
export interface ServiceSummary {
  totalServices: number
  lastUpdated: string
}
