/** @format */

/**
 * นิยามข้อมูลหมวดหมู่ธุรกิจ (Template Categories)
 * จำกัดค่าเพื่อให้รองรับการทำ Filter และป้องกันการสะกดผิด
 */
export type TemplateCategory =
  | "hotel"
  | "service"
  | "marketing"
  | "ecommerce"
  | "all"

/**
 * ข้อมูลพื้นฐานของเทมเพลต (Template Metadata)
 * ใช้สำหรับแสดงผลในการ์ด (Card) และการทำระบบค้นหาในหน้า Marketplace
 */
export interface TemplateMetadata {
  /** ไอดีอ้างอิง (ID) ต้องตรงกับชื่อโฟลเดอร์ใน _components และ slug ใน URL */
  id: string

  /** ชื่อของเทมเพลตธุรกิจที่แสดงให้ลูกค้าเห็น */
  name: string

  /** หมวดหมู่ของธุรกิจเพื่อใช้ในการจัดกลุ่ม */
  category: TemplateCategory

  /** ที่อยู่รูปภาพตัวอย่าง (Thumbnail) แนะนำขนาดสัดส่วน 4:3 */
  thumbnail: string

  /** คำอธิบายสั้นๆ เกี่ยวกับจุดเด่นของโครงสร้างนี้ */
  description: string

  /** รายการคุณสมบัติเด่น (เลือกใส่ได้) เช่น 'Fast Load', 'SEO Ready' */
  features?: string[]

  /** สถานะของเทมเพลต เช่น 'new', 'popular' */
  badge?: string
}

/**
 * ข้อมูลเชิงลึกภายในเทมเพลต (Template Data Structure)
 * ใช้สำหรับส่งข้อมูล (Props) เข้าไปที่ Component ของแต่ละเทมเพลตโดยเฉพาะ
 */
export interface TemplateDataStructure {
  hero: {
    title: string
    subtitle?: string
    description?: string
    cta?: string
    bgImage?: string
  }
  // ข้อมูลส่วนอื่นๆ สามารถขยายต่อได้ตามความซับซ้อนของแต่ละธุรกิจ
  [key: string]: any
}
