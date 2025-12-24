/** @format */

/**
 * 🌐 Shared Types
 */
export interface MultiLangText {
  th: string
  en: string
}

/**
 * 🏷️ Service Categories
 * แก้ปัญหา: Module '"..."' has no exported member 'ServiceCategory'
 */
export type ServiceCategory =
  | "starter"
  | "cafe"
  | "clinic"
  | "construction"
  | "real-estate"

/**
 * 🟢 AEM Infrastructure Type
 * แก้ปัญหา: standardFeatures does not exist in type 'AEMServicePackage'
 */
export interface AEMServicePackage {
  supportLevel: string
  infrastructure: {
    framework: string
    hosting: string
  }
  // ✅ เพิ่มเพื่อรองรับข้อมูลใน Mock
  standardFeatures?: any[]
}

/**
 * 🧱 Base Props สำหรับทุก Template
 * ออกแบบมาเป็นรากฐาน (Source of Truth) ของทุก Variant
 */
export interface BaseTemplateProps {
  id: string
  variant: ServiceCategory
  name: MultiLangText | string
  description?: MultiLangText | string
  phone?: string
  lineId?: string
  address?: string
  primaryColor?: string
  defaultLanguage?: "th" | "en"
  googleMapUrl?: string
  // ✅ แก้ปัญหา Property 'aemService' does not exist
  aemService?: AEMServicePackage
  hero?: {
    title: MultiLangText | string
    subtitle: MultiLangText | string
    image?: string
  }
  socials?: {
    facebook?: string
    instagram?: string
  }
  socialProof?: any[]
  theme?: {
    primary?: string
    secondary?: string
    accent?: string
  }
  services?: any[]
  features?: any[]
  testimonials?: any[]
  gallery?: any[]
  faqs?: any[]
}

/**
 * 🟢 Template Variants
 * แยก Interface เพื่อความชัดเจนของแต่ละธุรกิจ
 */

export interface StarterTemplateProps extends BaseTemplateProps {
  variant: "starter"
  // ✅ แก้ปัญหา 'badges' does not exist in type 'StarterTemplateProps'
  badges?: any[]
  form?: any
}

export interface CafeTemplateProps extends BaseTemplateProps {
  variant: "cafe"
  // ✅ แก้ปัญหา Property 'map' does not exist on type '{ categories: any[]; }'
  menu?: any[] | { categories: any[] }
  openingHours?: any[]
}

export interface ClinicTemplateProps extends BaseTemplateProps {
  variant: "clinic"
  doctors?: any[]
  beforeAfter?: any[]
}

export interface ConstructionTemplateProps extends BaseTemplateProps {
  variant: "construction"
  projects?: any[]
  steps?: any[]
}

export interface RealEstateTemplateProps extends BaseTemplateProps {
  variant: "real-estate"
  roomTypes?: any[]
  locationInsight?: any
}

/**
 * 📦 LandingData: Discriminated Union Type
 * ช่วยแก้ปัญหา Never Intersection ใน page.tsx
 */
export type LandingData =
  | StarterTemplateProps
  | CafeTemplateProps
  | ClinicTemplateProps
  | ConstructionTemplateProps
  | RealEstateTemplateProps

/**
 * 📰 Blog & Content Types
 */
export interface BlogPost {
  id: string
  slug: string
  title: MultiLangText | string
  excerpt: MultiLangText | string
  description?: string
  date: string
  image: string
  category: string
  readTime: string
  content: string
  author: {
    name: string
    avatar: string
    role: string
  }
}

/**
 * 🛠️ Helpers
 */
export const isMultiLang = (text: any): text is MultiLangText => {
  return text && typeof text === "object" && "th" in text
}
