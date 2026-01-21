/** @format */

/**
 * 🧬 Core System Types – AEMDEVWEB (v.2026)
 * ศูนย์รวม Interface และ Types สำหรับระบบสถาปัตยกรรมเว็บไซต์
 * ออกแบบมาเพื่อความเสถียรของระบบ (Type Safety) และรองรับการทำ SEO Specialist
 * Update: รองรับโครงสร้าง Keywords แบบ Complex Object และ Facebook ID
 */

/* -------------------------------------------------------------------------- */
/* 🌐 SITE & NAVIGATION                                                       */
/* -------------------------------------------------------------------------- */

export interface NavItem {
  name: string // ชื่อที่แสดงผล
  href: string // ลิงก์ปลายทาง
  title?: string // รองรับกรณีใช้ title แทน name
  disabled?: boolean
  external?: boolean
  badge?: "New" | "Hot" | "Sale" | "Special" | string
  description?: string
}

export interface FooterNavigation {
  services: NavItem[]
  company: NavItem[]
  support: NavItem[]
  legal: NavItem[]
}

export interface SiteConfig {
  name: string
  shortName: string
  nameTH: string
  companyName: string
  title: string
  slogan: string
  expert: string
  role: string
  description: string
  url: string
  ogImage: string
  email: string
  
  // 🛠️ Updated Keywords Structure: รองรับการทำ Metadata แบบเจาะจง
  keywords: {
    list: string[]      // สำหรับ Metadata Array
    all: string         // สำหรับ Legacy String
    core: string[]
    tech: string[]
    brand: string[]
  }

  links: {
    line: string
    lineId: string
    facebook?: string
    linkedin?: string
    github?: string
    messenger?: string
  }
  
  contact: {            // ✅ Semantic Contact สำหรับ SEO และเครื่องมือติดต่อ
    email: string
    lineId: string
    facebook?: string
    linkedin?: string
    phone?: string
  }

  cta: {
    main: string
    secondary: string
    pricing: string
  }

  standards: {          // ✅ Technical Standards ประจำปี 2026
    performance: number
    lcp: number
    security: string
    aiReadiness: string
  }
}

/* -------------------------------------------------------------------------- */
/* 📄 BLOG & CONTENT (MDX Engine)                                             */
/* -------------------------------------------------------------------------- */

export interface BlogMetadata {
  title: string
  description: string
  date: string
  category: string
  coverImage: string
  author: string
  excerpt?: string
  readingTime?: string
  tags?: string[]
}

export interface BlogPost extends BlogMetadata {
  slug: string
  content?: string | unknown
}

/* -------------------------------------------------------------------------- */
/* 💼 SERVICES & SOLUTIONS                                                   */
/* -------------------------------------------------------------------------- */

export type ServiceIconName =
  | "Rocket"
  | "ShieldCheck"
  | "Code2"
  | "Gauge"
  | "Zap"
  | "Layout"
  | "TrendingUp"

export interface ServiceItem {
  id: string
  title: string
  slug: string
  description: string
  longDescription?: string
  icon: ServiceIconName
  features: string[]
  priceDisplay?: string
  priceRange?: string
  badge?: string
  mockups?: {
    desktop: string
    mobile: string
  }
}

/* -------------------------------------------------------------------------- */
/* 🏆 CASE STUDIES & SHOWCASE                                                */
/* -------------------------------------------------------------------------- */

export interface ShowcaseStats {
  label: string
  value: string
}

export interface CaseStudyItem {
  id: string
  slug: string
  title: string
  client: string
  industry: string
  category: string
  description: string
  thumbnail: string
  results: ShowcaseStats[]
  keyFeatures?: string[]
  clientQuote?: {
    text: string
    author: string
    role?: string
  }
}

/* -------------------------------------------------------------------------- */
/* 🎨 TEMPLATE ENGINE                                                        */
/* -------------------------------------------------------------------------- */

export type TemplateCategory =
  | "SalePage"
  | "Corporate"
  | "ECommerce"
  | "Service"
  | "Industrial"
  | string

export interface TemplateItem {
  id: string
  slug: string
  title: string
  description: string
  category: TemplateCategory
  image: string
  features: string[]
  demoUrl?: string
  price?: number
  salePrice?: number
  isPopular?: boolean
  isNew?: boolean
  themeColor?: string
  salesData?: {
    soldCount: number
    rating: number
  }
  mockups?: {
    desktop?: string
    mobile?: string
  }
}

/* -------------------------------------------------------------------------- */
/* 📩 LEAD & CONVERSION                                                      */
/* -------------------------------------------------------------------------- */

export interface LeadFormSubmission {
  name: string
  lineId: string
  businessType: string
  budget: string
  message?: string
  source?: string
  timestamp: string
}

/* -------------------------------------------------------------------------- */
/* ⭐ SOCIAL PROOF                                                           */
/* -------------------------------------------------------------------------- */

export interface TestimonialItem {
  id: string | number
  content: string
  author: string
  role: string
  company?: string
  rating: number
  image?: string
}
