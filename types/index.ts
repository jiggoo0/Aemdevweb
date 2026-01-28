/** @format */

/* -------------------------------------------------------------------------- */
/* 1. พิกัดตัวตนและข้อมูลเว็บไซต์ (Site Identity Configuration)                   */
/* -------------------------------------------------------------------------- */

export interface SiteConfig {
  // ข้อมูลภาพลักษณ์องค์กร (แก้พิกัด Error ใน Footer และ site-config.ts)
  company: {
    name: string
    fullName: string
    email: string
    address?: string
  }
  project: {
    name: string
    shortName: string
    nameTH: string
    title: string
    slogan: string
    description: string
    url: string
    ogImage: string
  }
  expert: {
    name: string
    role: string
    realName: string
  }
  stats: { label: string; value: string; suffix: string }[]
  businessImpact: { speed: string; seo: string; conversion: string }
  keywords: {
    list: string[]
    all: string
    core: string[]
    tech: string[]
    brand: string[]
  }
  links: {
    line: string
    lineId: string
    facebook?: string
    linkedin?: string
    tiktok?: string
    personal: string
  }
  contact: {
    email: string
    line: string
    lineId: string
    facebook?: string
    linkedin?: string
    tiktok?: string
    personal?: string // เพิ่มพิกัดนี้เพื่อรองรับ site-config.ts
    phone?: string
  }
  cta: { main: string; secondary: string; pricing: string }
  standards: {
    performance: number
    lcp: number
    security: string
    guarantee: string
  }
}

/* -------------------------------------------------------------------------- */
/* 2. พิกัดระบบงานและบริการ (Services & Icons)                                 */
/* -------------------------------------------------------------------------- */

// [FIX]: ส่งออก ServiceIconName เพื่อให้ไฟล์เรียกใช้งานได้จากทั่วโปรเจกต์
export type ServiceIconName =
  | "Rocket"
  | "ShieldCheck"
  | "Code2"
  | "Gauge"
  | "Zap"
  | "Layout"
  | "TrendingUp"
  | "BarChart3"
  | "CheckCircle2"
  | "LayoutTemplate"
  | "Clock"
  | "Wallet"
  | "Building2"
  | "MapPin"
  | "Coffee"
  | "Heart"
  | "UserCircle"

export interface ServiceItem {
  id: string
  title: string
  slug: string
  description: string // พิกัดรายละเอียดงาน
  thumbnail: string // พิกัดภาพประกอบ (ใช้แทน image)
  priceValue: number
  priceDisplay?: string
  renewalPrice?: string
  category: string
  iconName: ServiceIconName
  features: string[]
  highlight?: boolean
  themeColor?: string
  promotion?: string
}

/* -------------------------------------------------------------------------- */
/* 3. พิกัดบทความและคลังความรู้ (Blog & Knowledge Base)                        */
/* -------------------------------------------------------------------------- */

export interface BlogFrontmatter {
  title: string
  description: string
  date: string
  category: string
  thumbnail: string
  author: string
  readingTime?: string
  excerpt?: string
  tags?: string[]
}

/**
 * แก้พิกัด Error TS2339: ดึง Property สำคัญออกมาไว้ระดับ Root
 * เพื่อให้ระบบจัดลำดับ (Sort) และหน้า Card ดึงข้อมูลไปโชว์ได้ทันที
 */
export interface BlogPost {
  id: string
  slug: string
  title: string
  description: string
  date: string
  category: string
  thumbnail: string
  author: string
  readingTime?: string
  frontmatter: BlogFrontmatter // รองรับการเรียกแบบซ้อนเพื่อความปลอดภัยของข้อมูล
  content: string
}

/* -------------------------------------------------------------------------- */
/* 4. พิกัดผลงานความสำเร็จ (Case Studies)                                      */
/* -------------------------------------------------------------------------- */

export interface CaseStudyItem {
  id: string
  slug: string
  // [FIX]: หน้า Page เรียกใช้ผ่านพิกัด frontmatter ต้องหุ้มข้อมูลให้ตรงกัน
  frontmatter: {
    title: string
    client: string
    industry: string
    category: string
    excerpt: string
    thumbnail: string
    date: string
    results: (string | { label: string; value: string })[]
    keyFeatures: string[]
    service?: string
    isFeatured?: boolean
  }
  content: string
}

/* -------------------------------------------------------------------------- */
/* 5. พิกัดคลังเทมเพลต (Marketplace Templates)                                */
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

export interface TemplateMetadata {
  id: string
  slug: string
  name: string
  category: TemplateCategory
  thumbnail: string
  description: string
  pricePrefix?: string
  priceValue?: string
  isNew?: boolean
}
