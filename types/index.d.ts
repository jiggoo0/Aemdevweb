/**
 * [SYSTEM CORE]: GLOBAL_TYPE_DEFINITIONS v17.2.0 (ENHANCED_SCALABILITY)
 * [MANDATE]: Zero-Any Policy | Deep Immutability | Async Route Params
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { ReactNode, ComponentType, CSSProperties } from "react";

// --- [01. UTILITY INFRASTRUCTURE] ---

/**
 * [STABILIZED]: Standardized Props for Next.js 15+ Pages
 */
export interface PageProps<T = Record<string, string>> {
  readonly params: Promise<T>;
  readonly searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export interface LayoutProps<T = Record<string, string>> {
  readonly children: ReactNode;
  readonly params: Promise<T>;
}

export interface BaseComponentProps {
  readonly children?: ReactNode;
  readonly className?: string;
  readonly style?: CSSProperties; // เพิ่ม style prop เผื่อกรณีจำเป็น
}

// [ENHANCED]: Action Link Definition
// ใช้สำหรับปุ่มหรือลิงก์ทั้งหมดในระบบ เพื่อความเป็นระเบียบ
export interface ActionLink {
  readonly label: string;
  readonly href: string;
  readonly type?: "primary" | "secondary" | "outline" | "ghost";
  readonly isExternal?: boolean;
  readonly icon?: IconName;
}

export type IconName = string;

// --- [02. NAVIGATION & SITE CONFIG] ---

export interface NavItem {
  readonly label: string;
  readonly href: string;
  readonly icon?: IconName;
  readonly description?: string;
  readonly active?: boolean;
  readonly children?: readonly NavItem[]; // รองรับ Nested Menu ในอนาคต
}

export interface SiteConfig {
  readonly brandName: string;
  readonly siteUrl: string;
  readonly description: string;
  readonly hero: {
    readonly title: string;
    readonly description: string;
    readonly primaryAction: string;
    readonly secondaryAction: string;
  };
  readonly persona: {
    readonly tone: string;
    readonly communicationStyle: string;
    readonly antiConnotation: string;
  };
  readonly keywords: readonly string[];
  readonly project: {
    readonly title: string;
    readonly shortTitle: string;
    readonly version: string;
    readonly framework: string;
    readonly uiStack: string;
  };
  readonly expert: {
    readonly displayName: string;
    readonly legalName: string;
    readonly legalNameThai: string;
    readonly role: string;
    readonly jobTitle: string;
    readonly signature: string;
    readonly avatar: string;
    readonly email: string;
    readonly bioUrl: string;
    readonly bio?: string;
  };
  readonly contact: {
    readonly email: string;
    readonly phone: string;
    readonly displayPhone?: string;
    readonly streetAddress: string;
    readonly address: string;
    readonly postalCode: string;
    readonly workHours: string;
    readonly mapUrl?: string; // เพิ่มลิงก์ Google Maps
  };
  readonly links: {
    readonly line: string;
    readonly lineId: string;
    readonly messenger: string;
    readonly facebook: string;
    readonly github: string;
    readonly twitter?: string;
    readonly youtube?: string; // เผื่อมีช่อง YouTube
  };
  readonly business: {
    readonly location: string;
    readonly region: string;
    readonly industry: string;
    readonly roiFocus: boolean;
    readonly established: string;
  };
  readonly verification: {
    readonly google: string;
  };
}

// --- [03. DATA REGISTRY & SERVICES] ---

export type ServiceCategory = "landing" | "business" | "ecommerce" | "personal";

export interface CatalogItem {
  readonly name: string;
  readonly description: string;
  readonly icon: IconName;
  readonly title?: string;
  readonly price?: string; // เผื่อใส่ราคาสินค้าย่อย
  readonly image?: string; // เผื่อมีรูปสินค้า
}

export interface ExpertiseItem {
  readonly title: string;
  readonly description: string;
  readonly icon: IconName;
  readonly level?: number; // 1-100 สำหรับ Skill Bar
}

export interface ServiceFeature {
  readonly title: string;
  readonly description: string;
  readonly icon: IconName;
}

export interface ServiceFaq {
  readonly question: string;
  readonly answer: string;
}

/**
 * [ENHANCED]: Theme Configuration
 * รองรับการตั้งค่าสีที่ละเอียดขึ้น รวมถึง Gradient
 */
export interface ThemeConfig {
  readonly primary: string;    // สีหลัก (Brand Primary)
  readonly secondary?: string; // สีรอง
  readonly background?: string; // สีพื้นหลัง
  readonly accent?: string;    // สีเน้น (เช่น Badge, Highlight)
  readonly gradient?: string;  // CSS Gradient String
}

export interface TemplateMasterData {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly image?: string;
  readonly priceValue: number;
  readonly price: string;
  readonly currency: string;
  readonly unit: string;
  readonly category: ServiceCategory;
  readonly templateSlug: string;
  readonly priority: number;
  readonly isPopular?: boolean;
  readonly isFeatured?: boolean;

  // [THEME]: ใช้ Interface ใหม่ที่ยืดหยุ่นขึ้น
  readonly theme?: ThemeConfig;

  // Arrays
  readonly benefits: readonly string[];
  readonly coreFeatures: readonly ServiceFeature[];
  readonly faqs: readonly ServiceFaq[];

  // Optional/Specific Fields
  readonly clientTrust?: string;
  readonly items?: readonly CatalogItem[];
  readonly expertise?: readonly ExpertiseItem[];
}

export type ServiceData = TemplateMasterData;

// --- [04. CONTENT & MDX SCHEMAS] ---

/**
 * [ENHANCED]: SEO Specific Metadata
 * แยกออกมาเพื่อให้ Reuse ได้ง่าย
 */
export interface SEOMetadata {
  readonly title: string;
  readonly description: string;
  readonly ogImage?: string;
  readonly noIndex?: boolean; // กรณีไม่อยากให้ Index
  readonly keywords?: readonly string[];
}

export interface BaseContent extends SEOMetadata {
  readonly slug: string;
  readonly excerpt: string;
  readonly date: string;
  readonly thumbnail: string;
  readonly tags: readonly string[];
  readonly author: string;
  readonly content?: string;
  readonly Content?: ComponentType;
}

export interface BlogPost extends BaseContent {
  readonly category: string;
  readonly readingTime?: string;
  readonly relatedPosts?: readonly string[]; // Slug ของบทความที่เกี่ยวข้อง
}

export interface CaseStudy extends BaseContent {
  readonly client: string;
  readonly industry: string;
  readonly category: string;
  readonly results: readonly string[];
  readonly technicalStack: readonly string[];
  readonly beforeImage?: string; // รูปเปรียบเทียบ Before
  readonly afterImage?: string;  // รูปเปรียบเทียบ After
}

// --- [05. LOCAL SEO & AREA NODES] ---

export interface AreaNode {
  readonly slug: string;
  readonly province: string;
  readonly name?: string;
  readonly title: string;
  readonly description: string;
  readonly seoTitle: string;
  readonly seoDescription: string;
  readonly priority: number;
  readonly templateSlug: "corporate" | "salepage" | "local" | string;
  
  readonly districts: readonly string[];
  readonly keywords: readonly string[];
  
  readonly heroImage: string;
  readonly longDescription?: string;
  
  // [NEW]: Latitude/Longitude สำหรับ Schema Map
  readonly coordinates?: {
    readonly lat: number;
    readonly lng: number;
  };
}
