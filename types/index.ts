/** @format */

// พิกัดข้อมูล: types/index.ts
// หน้าที่: รากฐาน Type สำหรับระบบงาน Web System & Technical SEO
// มาตรฐาน: Ultra-Deep Level 7 | Type-Safe Barrel File
// ควบคุมโดย: นายเอ็มซ่ามากส์

/* -------------------------------------------------------------------------- */
/* 0. Foundational & SEO Utility Types                                        */
/* -------------------------------------------------------------------------- */

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
  readonly company: {
    readonly name: string;
    readonly fullName: string;
    readonly email: string;
    readonly address?: string;
  };
  readonly project: {
    readonly name: string;
    readonly shortName: string;
    readonly nameTH: string;
    readonly title: string;
    readonly slogan: string;
    readonly description: string;
    readonly url: string;
    readonly ogImage: string;
    readonly logo: string;
  };
  readonly expert: {
    readonly name: string;
    readonly role: string;
    readonly realName: string;
    readonly bio: string;
  };
  readonly stats: readonly { label: string; value: string; suffix: string }[];
  readonly businessImpact: {
    readonly speed: string;
    readonly seo: string;
    readonly conversion: string;
  };
  readonly keywords: {
    readonly list: readonly string[];
    readonly all: string;
    readonly core: readonly string[];
    readonly tech: readonly string[];
    readonly brand: readonly string[];
  };
  readonly links: {
    readonly line: string;
    readonly lineId: string;
    readonly facebook?: string;
    readonly linkedin?: string;
    readonly tiktok?: string;
    readonly personal: string;
    readonly x?: string;
    readonly github?: string;
  };
  readonly contact: {
    readonly email: string;
    readonly line?: string;
    readonly lineId?: string;
    readonly facebook?: string;
    readonly linkedin?: string;
    readonly tiktok?: string;
    readonly personal?: string;
    readonly phone?: string;
  };
  readonly cta: {
    readonly main: string;
    readonly secondary: string;
    readonly pricing: string;
  };
  readonly standards: {
    readonly performance: number;
    readonly lcp: number;
    readonly security: string;
    readonly guarantee: string;
  };
}

/* -------------------------------------------------------------------------- */
/* 2. พิกัดระบบงานและบริการ (Services & Icons)                                 */
/* -------------------------------------------------------------------------- */

export type ServiceCategory = "ReadyMade" | "Business" | "Digital";

export type ThemeColor =
  | "slate"
  | "emerald"
  | "brand"
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
  readonly id: string;
  readonly title: string;
  readonly slug: string;
  readonly description: string;
  readonly thumbnail: string;
  readonly priceValue: number;
  readonly price?: string | number;
  readonly priceDisplay?: string;
  readonly renewalPrice?: string;
  readonly category: ServiceCategory;
  readonly iconName: ServiceIconName;
  readonly features: readonly string[];
  readonly highlight?: boolean;
  readonly themeColor?: ThemeColor;
  readonly promotion?: string;
  readonly relatedTemplateSlugs?: readonly string[];
}

/* -------------------------------------------------------------------------- */
/* 3. พิกัดบทความและคลังความรู้ (Blog & Knowledge Base)                        */
/* -------------------------------------------------------------------------- */

export interface BlogFrontmatter {
  readonly title: string;
  readonly description: string;
  readonly date: string;
  readonly category: string;
  readonly thumbnail: string;
  readonly author: string;
  readonly readingTime?: string;
  readonly excerpt?: string;
  readonly tags?: readonly string[];
}

export interface BlogPost {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly date: string;
  readonly category: string;
  readonly thumbnail: string;
  readonly author: string;
  readonly readingTime?: string;
  readonly frontmatter: BlogFrontmatter;
  readonly content: string;
}

/* -------------------------------------------------------------------------- */
/* 4. พิกัดผลงานความสำเร็จ (Case Studies)                                      */
/* -------------------------------------------------------------------------- */

export interface CaseStudyResult {
  readonly label: string;
  readonly value: string;
}

export interface CaseStudyItem {
  readonly id: string;
  readonly slug: string;
  readonly frontmatter: {
    readonly title: string;
    readonly client: string;
    readonly industry: string;
    readonly category: string;
    readonly excerpt: string;
    readonly thumbnail: string;
    readonly date: string;
    readonly results: readonly (string | CaseStudyResult)[];
    readonly keyFeatures: readonly string[];
    readonly service?: string;
    readonly isFeatured?: boolean;
  };
  readonly content: string;
}

// Re-export สัญญาข้อมูลจากไฟล์ย่อยเพื่อทำหน้าที่เป็น Master Barrel
export * from "./template";
export * from "./seo";
