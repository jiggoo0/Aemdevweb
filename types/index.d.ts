/**
 * [SYSTEM CORE]: GLOBAL_TYPE_DEFINITIONS v17.9.98 (ULTIMATE_HARDENED)
 * [STRATEGY]: Strict Union Types | CMS Entity Normalization | Zero-Any Registry
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { ReactNode, CSSProperties } from "react";

// =========================================
// [01] INFRASTRUCTURE & NEXT.JS ADAPTERS
// =========================================

export interface ValidationResult {
  readonly isValid: boolean;
  readonly errors: readonly string[];
  readonly warnings: readonly string[];
}

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

/** [RE-EXPORT]: รองรับ Icon ทั้งหมดในระบบและขยายตัวได้ */
export type IconName =
  | "Menu"
  | "X"
  | "ChevronRight"
  | "ChevronDown"
  | "ArrowRight"
  | "ArrowUpRight"
  | "Check"
  | "CheckCircle"
  | "CheckCircle2"
  | "AlertTriangle"
  | "Search"
  | "SearchX"
  | "MoreHorizontal"
  | "ThumbsUp"
  | "MapPin"
  | "Zap"
  | "Target"
  | "Layers"
  | "Star"
  | "BarChart"
  | "ShieldCheck"
  | "Newspaper"
  | "Building2"
  | "FileText"
  | "FileDown"
  | "MousePointerClick"
  | "Smartphone"
  | "Camera"
  | "CalendarCheck"
  | "Globe"
  | "TrendingUp"
  | "Shield"
  | "Lock"
  | "Award"
  | "Truck"
  | "CreditCard"
  | "Landmark"
  | "Wallet"
  | "ShoppingBag"
  | "Send"
  | "Loader2"
  | "Timer"
  | "Activity"
  | (string & {});

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
// [02] THEME & BRANDING ENGINE (SSOT)
// =========================================

export interface ThemeConfig {
  readonly primary: string;
  readonly secondary?: string;
  readonly background?: string;
  readonly accent?: string;
  readonly gradient?: string;
  readonly token?: string; // [FIXED]: เพิ่มเพื่อรองรับ Color Token เช่น gold, emerald
}

export interface SiteExpert {
  readonly displayName: string;
  readonly legalName: string;
  readonly legalNameThai: string;
  readonly role: string;
  readonly jobTitle: string;
  readonly signature: string;
  readonly avatar: string;
  readonly email: string;
  readonly bioUrl: string;
  readonly bio: string;
  readonly twitterHandle: string;
  readonly googleMerchantId?: string;
}

export interface SiteConfig {
  readonly brandName: string;
  readonly siteUrl: string;
  readonly description: string;
  readonly logo: string;
  readonly ogImage: string;
  readonly locale: string;
  readonly themeColor: string;
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
  readonly expert: SiteExpert;
  readonly contact: {
    readonly email: string;
    readonly phone: string;
    readonly displayPhone: string;
    readonly address: string;
    readonly streetAddress: string;
    readonly postalCode: string;
    readonly workHours: string;
    readonly mapUrl: string;
  };
  readonly links: Record<string, string>;
  readonly business: {
    readonly location: string;
    readonly region: string;
    readonly industry: string;
    readonly roiFocus: boolean;
    readonly established: string;
    readonly status: string;
    readonly priceRange: string;
    readonly ids: Record<string, string>;
  };
  readonly verification: {
    readonly google: string;
    readonly facebook?: string;
  };
  readonly analytics?: {
    readonly gaId?: string;
    readonly pixelId?: string;
  };
}

// =========================================
// [03] DATA MODELS (Master Registry & CMS)
// =========================================

export type ServiceCategory = "landing" | "business" | "ecommerce" | "personal" | "area";

export interface ServiceFeature {
  readonly title: string;
  readonly description: string;
  readonly icon: IconName;
}

export interface ServiceFaq {
  readonly question: string;
  readonly answer: string;
}

export interface BlogPost {
  readonly slug: string;
  readonly title: string;
  readonly date: string;
  readonly excerpt: string;
  readonly coverImage: string;
  readonly thumbnail?: string;
  readonly category: string;
  readonly content?: string;
  readonly description?: string;
  readonly tags?: readonly string[];
  readonly readingTime?: string;
}

export interface CaseStudy {
  readonly slug: string;
  readonly title: string;
  readonly client: string;
  readonly result: string;
  readonly results?: readonly string[];
  readonly image: string;
  readonly thumbnail?: string;
  readonly content?: string;
  readonly description?: string;
  readonly date?: string;
}

export interface CatalogItem {
  readonly name: string;
  readonly description: string;
  readonly icon: IconName;
  readonly price?: string;
  readonly image?: string;
}

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
  readonly theme?: ThemeConfig;
  readonly benefits: readonly string[];
  readonly coreFeatures: readonly ServiceFeature[];
  readonly faqs: readonly ServiceFaq[];
  readonly keywords: readonly string[];
  readonly isPopular?: boolean;
  readonly isFeatured?: boolean;
  readonly clientTrust?: string;
  readonly items?: readonly CatalogItem[];
}

export interface ImageBlurMetadata {
  readonly blurDataURL: string;
  readonly width: number;
  readonly height: number;
}
export type ImageBlurRegistry = Record<string, ImageBlurMetadata>;

// =========================================
// [04] GEO & AREA NODES (Authority & Trust Engine)
// =========================================

export interface LocalContext {
  readonly marketInsight: string;
  readonly technicalApproach: string;
  readonly localStrength: string;
  readonly nicheIndustries: readonly string[];
  readonly painPoints: readonly string[];
  readonly competitorLevel: "low" | "medium" | "high";
  readonly socialProof?: { rating: number; reviewCount: number; localClient?: string };
  readonly regionalPricing?: { startPrice: string; timeline: string };
  readonly localSuccessStory?: { title: string; result: string };
  readonly hyperLocalKeywords?: readonly string[];
}

export interface AreaNode {
  readonly slug: string;
  readonly province: string;
  readonly name?: string;
  readonly title: string;
  readonly description: string;
  readonly longDescription: string;
  readonly seoTitle: string;
  readonly seoDescription: string;
  readonly priority: number;
  readonly templateSlug: TemplateSlug;
  readonly districts: readonly string[];
  readonly keywords: readonly string[];
  readonly heroImage: string;
  readonly coordinates: { lat: number; lng: number };
  readonly localContext: LocalContext;
  readonly theme?: ThemeConfig;
}

export * from "./template-props";
