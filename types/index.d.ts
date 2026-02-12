/**
 * [SYSTEM CORE]: GLOBAL_TYPE_DEFINITIONS v17.9.9 (STABILIZED_FINAL)
 * [STRATEGY]: Strict Union Types | Centralized Definitions | Template Bridge
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { ReactNode, ComponentType, CSSProperties } from "react";

// =========================================
// [01] UTILITY & NEXT.JS 16 ADAPTERS
// =========================================

/** [ADAPTER]: รองรับ Next.js 15/16 ที่ Params ต้องเป็น Promise */
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
  readonly style?: CSSProperties;
}

export interface SkeletonCardProps extends BaseComponentProps {
  readonly aspectRatio?: "portrait" | "video" | "square";
}

/** [STRICT]: ไอคอนต้องตรงกับ Registry ใน IconRenderer เท่านั้น */
export type IconName = string;

/**
 * [STRICT]: Centralized Template Slugs
 * กำหนดค่าที่อนุญาตเพื่อให้ระบบ Routing และ Template Mapping ทำงานได้แม่นยำ
 */
export type TemplateSlug =
  | "corporate"
  | "salepage"
  | "local"
  | "local-authority"
  | "catalog"
  | "bio"
  | "hotelresort"
  | "seo-agency";

// =========================================
// [02] SITE CONFIGURATION & NAVIGATION
// =========================================

export interface NavItem {
  readonly label: string;
  readonly href: string;
  readonly icon?: IconName;
  readonly description?: string;
  readonly active?: boolean;
  readonly children?: readonly NavItem[];
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
    readonly googleMerchantId?: string;
  };
  readonly contact: {
    readonly email: string;
    readonly phone: string;
    readonly displayPhone?: string;
    readonly streetAddress: string;
    readonly address: string;
    readonly postalCode: string;
    readonly workHours: string;
    readonly mapUrl?: string;
  };
  readonly links: {
    readonly line: string;
    readonly lineId: string;
    readonly messenger: string;
    readonly facebook: string;
    readonly github: string;
    readonly twitter?: string;
    readonly youtube?: string;
    readonly googleMaps?: string;
    readonly googleReview?: string;
  };
  readonly business: {
    readonly location: string;
    readonly region: string;
    readonly industry: string;
    readonly roiFocus: boolean;
    readonly established: string;
    readonly status?: string;
    readonly ids?: {
      readonly businessProfileId: string;
      readonly storeCode: string;
    };
  };
  readonly verification: {
    readonly google: string;
  };
}

// =========================================
// [03] SERVICE REGISTRY & TEMPLATE DATA
// =========================================

export type ServiceCategory = "landing" | "business" | "ecommerce" | "personal";

export interface ServiceFaq {
  readonly question: string;
  readonly answer: string;
}

export interface ServiceFeature {
  readonly title: string;
  readonly description: string;
  readonly icon: IconName;
}

export interface CatalogItem {
  readonly name: string;
  readonly description: string;
  readonly icon: IconName;
  readonly title?: string;
  readonly price?: string;
  readonly image?: string;
}

export interface ExpertiseItem {
  readonly title: string;
  readonly description: string;
  readonly icon: IconName;
  readonly level?: number;
}

export interface ThemeConfig {
  readonly primary: string;
  readonly secondary?: string;
  readonly background?: string;
  readonly accent?: string;
  readonly gradient?: string;
}

/**
 * [CORE_MODEL]: TemplateMasterData
 * เป็น Single Source of Truth สำหรับข้อมูลบริการและ P-SEO ทั้งหมด
 */
export interface TemplateMasterData {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly image?: string;
  readonly templateSlug: TemplateSlug;
  readonly category: ServiceCategory;
  readonly priceValue: number;
  readonly price: string;
  readonly currency: string;
  readonly unit: string;
  readonly priority: number;
  readonly isPopular?: boolean;
  readonly isFeatured?: boolean;
  readonly theme?: ThemeConfig;
  readonly benefits: readonly string[];
  readonly coreFeatures: readonly ServiceFeature[];
  readonly faqs: readonly ServiceFaq[];
  readonly keywords: readonly string[];
  readonly clientTrust?: string;
  readonly items?: readonly CatalogItem[];
  readonly expertise?: readonly ExpertiseItem[];
}

export type ServiceData = TemplateMasterData;

// =========================================
// [04] CONTENT MODELS (MDX)
// =========================================

export interface SEOMetadata {
  readonly title: string;
  readonly description: string;
  readonly ogImage?: string;
  readonly noIndex?: boolean;
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
  readonly relatedPosts?: readonly string[];
}

export interface CaseStudy extends BaseContent {
  readonly client: string;
  readonly industry: string;
  readonly category: string;
  readonly results: readonly string[];
  readonly technicalStack: readonly string[];
  readonly beforeImage?: string;
  readonly afterImage?: string;
}

// =========================================
// [05] GEO & AREA NODES (Programmatic SEO)
// =========================================

export interface LocalContext {
  readonly marketInsight: string;
  readonly technicalApproach: string;
  readonly localStrength: string;
}

export interface AreaNode {
  readonly slug: string;
  readonly province: string;
  readonly name?: string;
  readonly title: string;
  readonly description: string;
  readonly seoTitle: string;
  readonly seoDescription: string;
  readonly priority: number;
  readonly templateSlug: TemplateSlug;
  readonly districts: readonly string[];
  readonly keywords: readonly string[];
  readonly heroImage: string;
  readonly longDescription?: string;
  readonly coordinates?: {
    readonly lat: number;
    readonly lng: number;
  };
  readonly localContext?: LocalContext;
}

// =========================================
// [06] ASSET & MEDIA INFRASTRUCTURE
// =========================================

export interface ImageBlurNode {
  readonly blurDataURL: string;
  readonly width: number;
  readonly height: number;
}

export type ImageBlurRegistry = Record<string, ImageBlurNode>;

// =========================================
// [07] TEMPLATE BRIDGE (RE-EXPORTS)
// =========================================

/** * [STRATEGIC]: เชื่อมโยง Interface จากไฟล์เฉพาะทาง
 * เพื่อแก้ปัญหา TS2305 และทำให้การ Import สั้นลงทั่วทั้งโปรเจกต์
 */
export * from "./template-props";

/** * [ALIAS]: เพื่อความสะดวกในการเรียกใช้งานในส่วนหน้าบ้าน (Templates)
 */
export type {
  UniversalTemplateProps,
  BaseTemplateProps,
  StickyBuyButtonProps,
} from "./template-props";
