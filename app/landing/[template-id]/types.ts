/** @format */

/**
 * 🌐 Shared Types
 */
export interface MultiLangText {
  th: string
  en: string
}

/**
 * 🧱 Base Props สำหรับทุก Template
 * ออกแบบมาให้รองรับทั้งข้อมูลดิบ (Raw) และข้อมูลที่ผ่านการ Normalize
 */
export interface BaseTemplateProps {
  id: string
  variant: string
  name: MultiLangText | string
  description?: MultiLangText | string
  phone?: string
  lineId?: string
  address?: string // ✅ เพิ่มเพื่อให้ตรงกับ Footer
  primaryColor?: string
  defaultLanguage?: "th" | "en"
  hero?: {
    title: MultiLangText | string
    subtitle: MultiLangText | string
    image?: string
  }
  socials?: {
    // ✅ เพิ่มเพื่อให้ตรงกับ Footer
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
 * 📦 LandingData: Type หลักที่ใช้ใน Normalize และ Fetcher
 * ✅ เปลี่ยนเป็น Type Alias เพื่อป้องกัน ESLint Error: @typescript-eslint/no-empty-object-type
 */
export type LandingData = BaseTemplateProps

/**
 * 🟢 Template Variants
 */
export interface StarterTemplateProps extends BaseTemplateProps {
  variant: "starter"
  form?: any
}

export interface CafeTemplateProps extends BaseTemplateProps {
  variant: "cafe"
  menu?: any[]
  openingHours?: any[]
  googleMapUrl?: string
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
 * 🏷️ Categories & Utilities
 */
export type ServiceCategory =
  | "starter"
  | "cafe"
  | "clinic"
  | "construction"
  | "real-estate"

/**
 * 🛠️ Helper สำหรับเช็คว่าเป็น MultiLang หรือไม่
 */
export const isMultiLang = (text: any): text is MultiLangText => {
  return text && typeof text === "object" && "th" in text
}
