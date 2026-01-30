/** @format */

/**
 * AEMDEVWEB | High-Performance Type System 2026
 * -------------------------------------------------------------------------
 * พิกัดข้อมูล: types/index.ts
 * หน้าที่: กำหนดรากฐาน Type สำหรับระบบงาน Web System & Technical SEO
 * มาตรฐาน: Ultra-Deep Level 7 | Type-Safe Architecture
 * ควบคุมโดย: นายเอ็มซ่ามากส์
 */

/* -------------------------------------------------------------------------- */
/* 0. Foundational & SEO Utility Types                                        */
/* -------------------------------------------------------------------------- */

/**
 * [STRATEGIC]: โครงสร้างข้อมูล JSON-LD สำหรับฉีดเข้าสู่ระบบ Knowledge Graph
 * เปลี่ยนจาก any เป็น unknown เพื่อความเสถียรสูงสุด
 */
export interface JsonLdData extends Record<string, unknown> {
  "@context"?: string;
  "@type"?: string;
  "@id"?: string;
  "@graph"?: Array<Record<string, unknown>>;
}

/* -------------------------------------------------------------------------- */
/* 1. พิกัดตัวตนและข้อมูลเว็บไซต์ (Site Identity Configuration)                   */
/* -------------------------------------------------------------------------- */

export interface SiteConfig {
  company: {
    name: string;
    fullName: string;
    email: string;
    address?: string;
  };
  project: {
    name: string;
    shortName: string;
    nameTH: string;
    title: string;
    slogan: string;
    description: string;
    url: string;
    ogImage: string;
    logo: string;
  };
  expert: {
    name: string;
    role: string;
    realName: string;
    bio: string;
  };
  stats: { label: string; value: string; suffix: string }[];
  businessImpact: { speed: string; seo: string; conversion: string };
  keywords: {
    list: string[];
    all: string;
    core: string[];
    tech: string[];
    brand: string[];
  };
  links: {
    line: string;
    lineId: string;
    facebook?: string;
    linkedin?: string;
    tiktok?: string;
    personal: string;
    x?: string;
    github?: string;
  };
  contact: {
    email: string;
    line?: string;
    lineId?: string;
    facebook?: string;
    linkedin?: string;
    tiktok?: string;
    personal?: string;
    phone?: string;
  };
  cta: { main: string; secondary: string; pricing: string };
  standards: {
    performance: number;
    lcp: number;
    security: string;
    guarantee: string;
  };
}

/* -------------------------------------------------------------------------- */
/* 2. พิกัดระบบงานและบริการ (Services & Icons)                                 */
/* -------------------------------------------------------------------------- */

export type ServiceCategory = "ReadyMade" | "Business" | "Digital";

export type ThemeColor =
  | "slate"
  | "emerald"
  | "brand" // เพิ่มพิกัดสีหลักของแบรนด์
  | "blue"
  | "indigo"
  | "amber"
  | "rose"
  | "orange"
  | "violet";

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
  | "UserCircle";

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  /** priceValue: พิกัดราคาเพียวสำหรับงานระบบ Schema Offer (Number) */
  priceValue: number;
  price?: string | number;
  priceDisplay?: string;
  renewalPrice?: string;
  category: ServiceCategory;
  iconName: ServiceIconName;
  features: string[];
  highlight?: boolean;
  themeColor?: ThemeColor;
  promotion?: string;
  /** relatedTemplateSlugs: พิกัดเชื่อมโยงเทมเพลตที่แนะนำในหน้าบริการ */
  relatedTemplateSlugs?: string[];
}

/* -------------------------------------------------------------------------- */
/* 3. พิกัดบทความและคลังความรู้ (Blog & Knowledge Base)                        */
/* -------------------------------------------------------------------------- */



export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  category: string;
  thumbnail: string;
  author: string;
  readingTime?: string;
  excerpt?: string;
  tags?: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  thumbnail: string;
  author: string;
  readingTime?: string;
  frontmatter: BlogFrontmatter;
  content: string;
}

/* -------------------------------------------------------------------------- */
/* 4. พิกัดผลงานความสำเร็จ (Case Studies)                                      */
/* -------------------------------------------------------------------------- */

export interface CaseStudyResult {
  label: string;
  value: string;
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  frontmatter: {
    title: string;
    client: string;
    industry: string;
    category: string;
    excerpt: string;
    thumbnail: string;
    date: string;
    results: (string | CaseStudyResult)[];
    keyFeatures: string[];
    service?: string;
    isFeatured?: boolean;
  };
  content: string;
}

/* -------------------------------------------------------------------------- */
/* 5. พิกัดคลังชุดระบบ (Marketplace Templates)                                */
/* -------------------------------------------------------------------------- */

export type TemplateCategory =
  | "Hotel"
  | "Service"
  | "Marketing"
  | "Ecommerce"
  | "Business"
  | "Platform"
  | "Rental"
  | "Digital"
  | "ReadyMade";

export interface TemplateMetadata {
  id: string;
  slug: string;
  name: string;
  category: TemplateCategory;
  thumbnail: string;
  description: string;
  pricePrefix?: string;
  /** priceValue: สำหรับระบบคํานวณและ Schema.org */
  priceValue: number;
  /** priceLabel: สำหรับการแสดงผล UI (เช่น "1,990") */
  priceLabel: string;
  isNew?: boolean;
  isFeatured?: boolean;
}
