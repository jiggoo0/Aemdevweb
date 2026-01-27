/** @format */

/**
 * 1. หมวดหมู่กลุ่มธุรกิจ (Template Categories)
 * รองรับทั้งกลุ่มบริการมาตรฐาน และโปรเจกต์งานระบบในกลุ่ม Platform / Rental
 */
export type TemplateCategory =
  | "hotel"
  | "service"
  | "marketing"
  | "ecommerce"
  | "business"
  | "platform" // สำหรับระบบ Web Rental Platform
  | "rental" // สำหรับธุรกิจเช่ารถ หรือเช่าอุปกรณ์

/**
 * 2. ข้อมูลพิกัด SEO (SEO Contract)
 * แยกออกมาเพื่อใช้ยืนยันพิกัดข้อมูลในหน้าพรีวิวเทมเพลต ป้องกัน Error TS18046
 */
export interface SEOContract {
  seo: {
    title: string
    description: string
    keywords: string[]
    ogImage: string
  }
}

/**
 * 3. ข้อมูลพื้นฐานสำหรับแสดงผล (Marketplace Card)
 */
export interface TemplateMetadata {
  id: string // ID อ้างอิงภายในระบบ
  slug: string // พิกัด URL สำหรับเข้าถึงหน้าเทมเพลต
  name: string // ชื่อเทมเพลตที่แสดงบนหน้าเว็บ
  category: TemplateCategory
  thumbnail: string // พิกัดที่เก็บรูปภาพตัวอย่าง
  description: string // รายละเอียดสรุปสั้นๆ เพื่อดึงดูดความสนใจ
  pricePrefix?: string // ข้อความนำหน้าตัวเลขราคา เช่น 'เริ่มต้น'
  priceValue?: string // มูลค่าระบบงาน เช่น '590'
  isNew?: boolean // ป้ายกำกับสำหรับงานที่เพิ่งเปิดตัว
}

/**
 * 4. ข้อมูลเนื้อหาเชิงลึก (Template Content)
 * เน้นการแสดงผลประสิทธิภาพที่เหนือกว่ามาตรฐานทั่วไป
 */
export interface TemplateContent {
  title: string
  description: string
  body: string
  // ตัวเลขชี้วัดประสิทธิภาพ (จุดขายสำคัญที่ลูกค้าจะได้รับ)
  performance: {
    lcp: string // ความเร็วในการโหลดข้อมูลหลัก (Largest Contentful Paint)
    seo: string // ระดับการปรับแต่งเพื่อการค้นหา
    stability: string // ความเสถียรของโครงสร้างหน้าเว็บ
  }
  features?: string[] // รายการสิทธิประโยชน์หรือฟีเจอร์เด่น
}
