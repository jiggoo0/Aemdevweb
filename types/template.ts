/** @format */

// 1. กำหนดหมวดหมู่ธุรกิจ (เพิ่มกลุ่ม Web Rental และ Car Rental เพื่อรองรับโปรเจกต์ใหม่)
export type TemplateCategory =
  | "hotel"
  | "service"
  | "marketing"
  | "ecommerce"
  | "business"
  | "platform" // สำหรับ Web Rental Platform
  | "rental" // สำหรับธุรกิจเช่ารถ หรือเช่าอุปกรณ์

// 2. ข้อมูลพื้นฐานสำหรับแสดงผลในหน้ารายการ (Marketplace Card)
export interface TemplateMetadata {
  id: string // Slug สำหรับเข้าถึงหน้าเทมเพลต (เช่น 'shop-master-pro')
  name: string // ชื่อเทมเพลตที่โชว์ให้ลูกค้าเห็น
  category: TemplateCategory
  thumbnail: string // พิกัดรูปภาพตัวอย่าง
  description: string // คำอธิบายสั้นๆ เพื่อปิดการขาย
  pricePrefix?: string // เช่น 'เริ่มต้น'
  priceValue?: string // เช่น '590'
  isNew?: boolean // ป้ายกำกับสินค้าใหม่
}

// 3. ข้อมูลเนื้อหาเชิงลึก (สำหรับหน้า Preview หรือ Detail)
export interface TemplateContent {
  title: string
  description: string
  body: string
  // พิกัดคะแนนประสิทธิภาพ (จุดขายหลักที่ชนะ Wix)
  performance: {
    lcp: string // Largest Contentful Paint (ความเร็ว)
    seo: string // คะแนน SEO
    stability: string // Core Web Vitals
  }
  features?: string[] // จุดเด่นที่ลูกค้าจะได้รับ
}
