/** @format */

/* -------------------------------------------------------------------------- */
/* 1. พิกัดหมวดหมู่ระบบงาน (Template Category)                                   */
/* -------------------------------------------------------------------------- */

export type TemplateCategory =
  | "Digital"
  | "ReadyMade"
  | "Business"
  | "Hotel"
  | "Service"
  | "Marketing"
  | "Ecommerce"
  | "Platform"
  | "Rental"

/* -------------------------------------------------------------------------- */
/* 2. สัญญาข้อมูลการค้นหา (SEO Contract)                                          */
/* -------------------------------------------------------------------------- */

export interface SEOContract {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
  /**
   * ข้อมูลโครงสร้างเพื่อการค้นหาผ่านระบบ AI Search
   */
  structuredData?: Record<string, unknown>
}

/* -------------------------------------------------------------------------- */
/* 3. พิกัดข้อมูลพื้นฐาน (Template Metadata)                                    */
/* -------------------------------------------------------------------------- */

export interface TemplateMetadata {
  id: string
  slug: string
  name: string
  category: TemplateCategory
  thumbnail: string
  description?: string
  pricePrefix?: string
  /**
   * priceValue: พิกัดราคาตัวเลขสำหรับแผนงานจัดการคำนวณ (Number)
   */
  priceValue: number
  /**
   * priceLabel: พิกัดราคาสำหรับแสดงผลหน้าเว็บ (เช่น "1,990")
   */
  priceLabel: string
  isNew?: boolean
  /**
   * isFeatured: พิกัดสำหรับคัดเลือกหน่วยงานขึ้นหน้าแรก
   */
  isFeatured?: boolean
}

/* -------------------------------------------------------------------------- */
/* 4. พิกัดเนื้อหาเชิงลึก (Template Content)                                     */
/* -------------------------------------------------------------------------- */

export interface TemplateContent {
  title: string
  description: string
  body: string
  performance: {
    lcp: string
    seo: string
    stability: string
  }
  features?: string[]
}

/* -------------------------------------------------------------------------- */
/* 5. สัญญาข้อมูลรวมระบบ (Template Master Data)                                 */
/* -------------------------------------------------------------------------- */

export interface TemplateMasterData {
  seo: SEOContract
  metadata: TemplateMetadata
  content: TemplateContent
}
