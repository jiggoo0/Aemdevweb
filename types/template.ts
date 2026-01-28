/** @format */

/* -------------------------------------------------------------------------- */
/* 1. พิกัดหมวดหมู่ธุรกิจ (Template Category)                                   */
/* -------------------------------------------------------------------------- */

export type TemplateCategory =
  | "hotel"
  | "Hotel"
  | "service"
  | "Service"
  | "marketing"
  | "Marketing"
  | "ecommerce"
  | "Ecommerce"
  | "business"
  | "Business"
  | "platform"
  | "Platform"
  | "rental"
  | "Rental"
  | "digital"
  | "Digital"
  | "readymade"
  | "ReadyMade"

/* -------------------------------------------------------------------------- */
/* 2. สัญญาข้อมูล SEO (SEO Contract)                                          */
/* -------------------------------------------------------------------------- */

export interface SEOContract {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
  /**
   * [FIX]: เปลี่ยนจาก any เป็น unknown เพื่อความปลอดภัยของระบบงาน
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
  priceValue?: string
  isNew?: boolean
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
/* 5. สัญญาข้อมูลรวม (Template Master Data)                                    */
/* -------------------------------------------------------------------------- */

export interface TemplateMasterData {
  seo: SEOContract
  metadata: TemplateMetadata
  content: TemplateContent
}
