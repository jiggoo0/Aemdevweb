/** @format */

/**
 * SEOContract - ข้อกำหนดพื้นฐานด้านการค้นหาสำหรับหน้าเว็บ
 * วางพิกัดเพื่อให้ระบบค้นหาและ AI เก็บข้อมูลธุรกิจได้แม่นยำที่สุด
 */
export interface SEOContract {
  seo: {
    /** หัวข้อหน้าเว็บ (Title) */
    title: string

    /** คำอธิบายเนื้อหา (Description) */
    description: string

    /** ชุดคำค้นหา (Keywords) */
    keywords?: string[]

    /** รูปภาพสำหรับการแชร์ (Open Graph Image) */
    ogImage?: string

    /** ลิงก์มาตรฐาน (Canonical URL) */
    canonical?: string

    /**
     * ข้อมูลโครงสร้าง (Structured Data)
     * [FIX]: เปลี่ยนจาก any เป็น unknown เพื่อความปลอดภัยของระบบงาน
     */
    structuredData?: Record<string, unknown>
  }
}

/**
 * TemplateMasterData - สัญญาข้อมูลรวมสำหรับเทมเพลต
 */
export interface TemplateMasterData extends SEOContract {
  metadata: {
    id: string
    slug: string
    name: string
    category: string
    thumbnail: string
    isNew?: boolean
  }
}
