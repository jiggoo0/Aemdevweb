/**
 * [SYSTEM CORE]: GLOBAL_TYPE_DEFINITIONS v18.1.0 (STABILIZED_EEAT)
 * [STRATEGY]: Strict Type Contract | E-E-A-T Knowledge Graph | Next.js 16 Sync
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 * [CHANGELOG]:
 * - Patched SiteConfig.expert to support linkedinUrl (Fix: TS2353).
 * - Refined SiteConfig.links from Record to Explicit Interface for better IntelliSense.
 */

import type { ReactNode } from "react";
import type { TemplateAction } from "./template-props";

// =========================================
// [01] INFRASTRUCTURE & ADAPTERS
// =========================================

/** [NEXTJS_PROTOCOL]: Supporting Next.js 15/16 Async Parameters */
export interface PageProps<T = Record<string, string>> {
  readonly params: Promise<T>;
  readonly searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export interface LayoutProps {
  readonly children: ReactNode;
}

/** [ICON_SYSTEM]: Registry of Validated Lucide Icons */
export type IconName =
  | "Menu" | "X" | "Check" | "CheckCircle" | "CheckCircle2" | "Star"
  | "ChevronRight" | "ChevronDown" | "ArrowRight" | "ArrowUpRight"
  | "Search" | "SearchX" | "Zap" | "Target" | "Layers" | "Shield"
  | "ShieldCheck" | "Newspaper" | "Building2" | "FileText" | "FileDown"
  | "MousePointerClick" | "Smartphone" | "Globe" | "TrendingUp"
  | "Award" | "MapPin" | "Activity" | "UserCheck" | "Quote" | "Settings"
  | "Disc" | "Wifi" | "Code2" | "Network" | "User" | "Camera"
  | "CloudSun" | "Wind" | "Droplets" | "Eye" | "Cloud" | "AlertCircle"
  | "Sparkles" | "Database" | "Map" | "CalendarCheck" | "Lock"
  | (string & {});

export type TemplateSlug =
  | "corporate" | "salepage" | "local" | "local-authority"
  | "catalog" | "bio" | "hotelresort" | "seo-agency";

export type ServiceCategory = "landing" | "business" | "ecommerce" | "personal" | "area";

// =========================================
// [02] THEME & SITE CONFIGURATION
// =========================================

export interface ThemeConfig {
  readonly primary: string;
  readonly background: string;
  readonly mode: "light" | "dark" | "system";
  readonly foreground: string;
  readonly secondary?: string;
  readonly accent?: string;
  readonly gradient?: string;
  readonly token?: string;
  readonly radius?: string;
  readonly fontFamily?: string;
  readonly borderWidth?: string;
}

export interface SiteConfig {
  readonly brandName: string;
  readonly siteUrl: string;
  readonly description: string;
  readonly logo: string;
  readonly ogImage: string;
  readonly locale: string;
  readonly themeColor: string;
  readonly keywords: readonly string[];
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
  readonly expert: {
    readonly displayName: string;
    readonly legalName: string;
    readonly legalNameThai: string;
    readonly role: string;
    readonly jobTitle: string;
    readonly signature: string;
    readonly avatar: string;
    readonly email: string;
    readonly bio: string;
    readonly bioUrl: string;
    readonly twitterHandle: string;
    readonly googleMerchantId?: string;
    /** [PATCH_v18.1.0]: LinkedIn Authority Link */
    readonly linkedinUrl?: string; 
  };
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
  readonly project: {
    readonly title: string;
    readonly shortTitle: string;
    readonly version: string;
    readonly framework: string;
    readonly uiStack: string;
  };
  readonly business: {
    readonly location: string;
    readonly region: string;
    readonly industry: string;
    readonly roiFocus: boolean;
    readonly priceRange: string;
    readonly established: string;
    readonly status: string;
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
  /** [REFINED]: Explicit Links for Authoritative Mapping */
  readonly links: {
    readonly line: string;
    readonly lineId: string;
    readonly messenger: string;
    readonly facebook: string;
    readonly github: string;
    readonly twitter: string;
    readonly youtube: string;
    readonly googleMaps: string;
    readonly googleReview: string;
    readonly linkedin?: string;
    readonly [key: string]: string | undefined; // Fallback for flexibility
  };
}

// =========================================
// [03] DATA MODELS (CMS & REGISTRY)
// =========================================

export interface ServiceFeature {
  readonly title: string;
  readonly description: string;
  readonly icon: IconName;
}

export interface ServiceFaq {
  readonly question: string;
  readonly answer: string;
}

export interface CatalogItem {
  readonly name: string;
  readonly description: string;
  readonly icon: IconName;
  readonly price?: string;
  readonly unit?: string;
  readonly image?: string;
  readonly technicalID?: string;
}

export interface BlogPost {
  readonly slug: string;
  readonly title: string;
  readonly date: string;
  readonly excerpt: string;
  readonly description?: string;
  readonly coverImage: string;
  readonly thumbnail?: string;
  readonly category: string;
  readonly tags?: readonly string[];
  readonly readingTime?: string;
  readonly content?: string;
}

export interface CaseStudy {
  readonly slug: string;
  readonly title: string;
  readonly client: string;
  readonly result: string;
  readonly results?: readonly string[];
  readonly description?: string;
  readonly date?: string;
  readonly image: string;
  readonly thumbnail?: string;
  readonly content?: string;
}

export interface ImageBlurMetadata {
  readonly blurDataURL: string;
  readonly width: number;
  readonly height: number;
}
export type ImageBlurRegistry = Record<string, ImageBlurMetadata>;

// =========================================
// [04] CONTEXT & UNIVERSAL TEMPLATES
// =========================================

export interface LocalContext {
  readonly marketInsight: string;
  readonly technicalApproach: string;
  readonly localStrength: string;
  readonly nicheIndustries: readonly string[];
  readonly painPoints: readonly string[];
  readonly competitorLevel: "low" | "medium" | "high" | "extreme";
  readonly socialProof?: {
    readonly rating: number;
    readonly reviewCount: number;
    readonly localClient?: string;
  };
  readonly regionalPricing?: { readonly startPrice: string; readonly timeline: string };
  readonly localSuccessStory?: { readonly title: string; readonly result: string };
  readonly hyperLocalKeywords?: readonly string[];
}

export interface UniversalTemplateProps {
  readonly id: string;
  readonly templateSlug: TemplateSlug;
  readonly category: string;
  readonly title: string;
  readonly description: string;
  readonly image?: string;
  readonly theme: ThemeConfig;
  readonly price: string;
  readonly priceValue: number;
  readonly currency: string;
  readonly unit: string;
  readonly priority: number;
  readonly benefits: readonly string[];
  readonly coreFeatures: readonly ServiceFeature[];
  readonly faqs: readonly ServiceFaq[];
  readonly keywords: readonly string[];
  readonly items?: readonly CatalogItem[];
  readonly clientTrust?: string;
  readonly isPopular?: boolean;
  readonly isFeatured?: boolean;
  readonly featuredProjects?: readonly any[];
  readonly localContext?: LocalContext;
  readonly province?: string;
  readonly districts?: readonly string[];
  readonly coordinates?: { readonly lat: number; readonly lng: number };
  readonly socialProof?: LocalContext["socialProof"];
  readonly regionalPricing?: LocalContext["regionalPricing"];
  readonly localSuccessStory?: LocalContext["localSuccessStory"];
  readonly primaryAction?: TemplateAction;
  readonly secondaryAction?: TemplateAction;
}

export interface BaseTemplateProps {
  readonly data: UniversalTemplateProps;
  readonly suppressUI?: boolean;
}

// =========================================
// [05] REGISTRY SCHEMAS
// =========================================

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
  readonly theme: ThemeConfig;
  readonly benefits: readonly string[];
  readonly coreFeatures: readonly ServiceFeature[];
  readonly faqs: readonly ServiceFaq[];
  readonly keywords: readonly string[];
  readonly primaryAction?: TemplateAction;
  readonly secondaryAction?: TemplateAction;
  readonly isPopular?: boolean;
  readonly isFeatured?: boolean;
  readonly clientTrust?: string;
  readonly items?: readonly CatalogItem[];
}

export interface AreaNode {
  readonly slug: string;
  readonly province: string;
  readonly title: string;
  readonly description: string;
  readonly longDescription?: string;
  readonly seoTitle: string;
  readonly seoDescription: string;
  readonly priority: number;
  readonly templateSlug: TemplateSlug;
  readonly districts: readonly string[];
  readonly keywords: readonly string[];
  readonly heroImage: string;
  readonly coordinates: { readonly lat: number; readonly lng: number };
  readonly localContext: LocalContext;
  readonly theme?: Partial<ThemeConfig> | ThemeConfig;
  readonly price?: string;
  readonly priceValue?: number;
  readonly currency?: string;
  readonly unit?: string;
  readonly clientTrust?: string;
  readonly benefits?: readonly string[];
  readonly coreFeatures?: readonly ServiceFeature[];
  readonly faqs?: readonly ServiceFaq[];
}

export * from "./template-props";
