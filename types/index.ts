/** @format */

/* -------------------------------------------------------------------------- */
/* 1. ข้อมูลเว็บไซต์และการนำทาง (Site & Navigation)                                     */
/* -------------------------------------------------------------------------- */

export interface NavItem {
  name: string
  href: string
  title?: string
  disabled?: boolean
  external?: boolean
  badge?: string // เช่น "New", "Hot"
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
    github?: string
    messenger?: string
    personal: string
  }
  contact: {
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
  standards: {
    performance: number
    lcp: number
    security: string
    aiReadiness: string
  }
}

/* -------------------------------------------------------------------------- */
/* 2. ระบบจัดการเนื้อหาและบทความ (Blog & Content)                                     */
/* -------------------------------------------------------------------------- */

export interface BlogFrontmatter {
  title: string
  description: string
  date: string
  category: string
  thumbnail: string // พิกัดรูปภาพปกบทความ
  author: string
  excerpt?: string
  tags?: string[]
}

export interface BlogPost {
  id: string
  slug: string
  frontmatter: BlogFrontmatter
  content: string // รองรับ MDX Source
}

/* -------------------------------------------------------------------------- */
/* 3. การจัดการบริการและระบบงาน (Services)                                          */
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
  priceValue: number // สำหรับระบบคำนวณราคา
  priceDisplay?: string // สำหรับการแสดงผลหน้าเว็บ
  category: "Starter" | "SME" | "Corporate" | "Industrial" | string
  icon: ServiceIconName
  features: string[]
  highlight?: boolean
  themeColor?: string
}

/* -------------------------------------------------------------------------- */
/* 4. ข้อมูลผลงานและตัวอย่างความสำเร็จ (Case Studies)                                 */
/* -------------------------------------------------------------------------- */

export interface ShowcaseStats {
  label: string
  value: string
}

export interface CaseStudyFrontmatter {
  title: string
  client: string
  industry: string
  category: string
  excerpt: string
  thumbnail: string
  date: string
  results: string[] | ShowcaseStats[]
  keyFeatures: string[]
  service?: string
  isFeatured?: boolean
}

export interface CaseStudyItem {
  id: string
  slug: string
  frontmatter: CaseStudyFrontmatter
  content: string
}

/* -------------------------------------------------------------------------- */
/* 5. ระบบจัดการรูปแบบเว็บไซต์ (Template Engine)                                       */
/* -------------------------------------------------------------------------- */

export interface TemplateItem {
  id: string
  slug: string
  title: string
  description: string
  category: string
  image: string
  features: string[]
  price: number
  salePrice?: number
  isPopular?: boolean
  isNew?: boolean
  demoUrl?: string
}

/* -------------------------------------------------------------------------- */
/* 6. การจัดการเป้าหมายและข้อมูลผู้ติดต่อ (Leads & Social Proof)                       */
/* -------------------------------------------------------------------------- */

export interface LeadFormSubmission {
  name: string
  lineId: string
  businessType: string
  budget?: string
  requirement: string
  timestamp: string
}

export interface TestimonialItem {
  id: string | number
  content: string
  author: string
  role: string
  company?: string
  rating: number
  image?: string
}
