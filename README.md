---
domain: aemdevweb.com
status: strictly-enforced
last_audit: 2026-02-14 04:40:16
---

# SYSTEM ARCHITECTURE & DATA SCHEMAS

> [INFO] Config injection skipped by user.

---

## TECHNICAL DATA SCHEMAS (TYPES)

### MODULE: index.d.ts

```typescript
/**
 * [SYSTEM CORE]: GLOBAL_TYPE_DEFINITIONS v17.9.96 (ULTIMATE_HARDENED)
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
  readonly twitterHandle: string; // [FIXED]: ป้องกัน Error TS2339 ใน seo-utils
  readonly googleMerchantId?: string;
}

export interface SiteConfig {
  readonly brandName: string;
  readonly siteUrl: string;
  readonly description: string;
  readonly logo: string;
  readonly ogImage: string; // [FIXED]: ป้องกัน Metadata Error
  readonly locale: string; // [FIXED]: ป้องกัน Metadata Error
  readonly themeColor: string; // [FIXED]: ป้องกัน Metadata/Manifest Error
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
  readonly expert: SiteExpert; // [FIXED]: ใช้ Interface เพื่อความสม่ำเสมอ
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
    readonly ids: Record<string, string>;
  };
  readonly verification: {
    readonly google: string;
    readonly facebook?: string; // [FIXED]: รองรับ Facebook Domain Verification
  };
  readonly analytics?: {
    // [FIXED]: รองรับ GA/Pixel Tracking
    readonly gaId?: string;
    readonly pixelId?: string;
  };
}

// =========================================
// [03] DATA MODELS (Master Registry & CMS)
// =========================================

export type ServiceCategory = "landing" | "business" | "ecommerce" | "personal";

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

// [CRITICAL]: เชื่อมต่อ Contract ย่อยเข้ากับไฟล์หลัก
export * from "./template-props";
```

### MODULE: mdx.d.ts

```typescript
import type { BlogPost, CaseStudy } from "@/types";

export const mapToBlogPost = (slug: string, content: string, data: any): BlogPost => {
  return {
    ...data,
    slug,
    content,
    // [FIXED]: รับประกันว่ามี coverImage เสมอ
    coverImage: data.coverImage || data.thumbnail || "/images/blog/default-thumb.webp",
    thumbnail: data.thumbnail || data.coverImage,
    description: data.description || data.excerpt || "",
    category: data.category || "General",
    date: data.date || new Date().toISOString(),
  } as BlogPost;
};

export const mapToCaseStudy = (slug: string, content: string, data: any): CaseStudy => {
  return {
    ...data,
    slug,
    content,
    // [FIXED]: จัดการฟิลด์ result และ image ให้ตรงกับ Interface
    result: data.result || (Array.isArray(data.results) ? data.results[0] : "Success"),
    image: data.image || data.thumbnail || "/images/case-studies/default.webp",
    thumbnail: data.thumbnail || data.image,
    date: data.date || new Date().toISOString(),
  } as CaseStudy;
};
```

### MODULE: template-props.ts

```typescript
/**
 * [SYSTEM CORE]: TEMPLATE_PROPS_ENGINE v17.9.91 (ULTIMATE_HARDENED)
 * [STRATEGY]: Universal Adapter Pattern | P-SEO Trust Injection | Zero-Jank Bridge
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { IconName, ServiceFeature, ServiceFaq, ThemeConfig, CatalogItem } from "./index";

// =========================================
// [01] UI ACTION SCHEMAS
// =========================================

/** [STRICT]: มาตรฐานปุ่มกดและการนำทางทั่วทั้งเทมเพลต */
export interface TemplateAction {
  readonly label: string;
  readonly href: string;
  readonly icon?: IconName;
  readonly variant?: "default" | "outline" | "ghost" | "link" | "brand";
}

// =========================================
// [02] UNIVERSAL TEMPLATE CONTRACT (THE BRIDGE)
// =========================================

/**
 * [STRATEGIC]: Bridge Interface สำหรับ Data Normalization
 * ทำหน้าที่แปลงข้อมูลจาก Master Registry และ Area Nodes ให้เป็นรูปแบบเดียวกัน
 */
export interface UniversalTemplateProps {
  // --- Core Identity ---
  readonly id: string;
  readonly templateSlug: string;
  readonly category: string;
  readonly title: string;
  readonly description: string;
  readonly image?: string;
  readonly priority?: number;

  // --- Commercial & Metadata ---
  readonly price?: string;
  readonly priceValue?: number;
  readonly unit?: string;
  readonly currency?: string;

  // --- Data Clusters (Normalized) ---
  readonly benefits?: readonly string[];
  readonly coreFeatures?: readonly ServiceFeature[];
  readonly faqs?: readonly ServiceFaq[];
  readonly keywords?: readonly string[];

  /** [V17.9.90_INJECTION]: รายการสินค้า/บริการย่อยสำหรับ Catalog */
  readonly items?: readonly CatalogItem[];

  // --- [TRUST_SIGNAL_INJECTION]: ข้อมูลส่วนนี้จะถูกฉีดเข้ามาแบบ Dynamic ---
  readonly clientTrust?: string;
  readonly socialProof?: {
    readonly rating: number; // e.g., 4.9
    readonly reviewCount: number; // e.g., 124
    readonly localClient?: string; // ชื่อลูกค้าอ้างอิงในพื้นที่
  };
  readonly regionalPricing?: {
    readonly startPrice: string;
    readonly timeline: string;
  };
  readonly localSuccessStory?: {
    readonly title: string;
    readonly result: string;
  };

  // --- Strategic UI Elements ---
  readonly primaryAction?: TemplateAction;
  readonly secondaryAction?: TemplateAction;

  // --- Visual Metadata (SSOT Theme) ---
  readonly theme?: ThemeConfig;
}

// =========================================
// [03] COMPONENT PROPS (STRICT TYPING)
// =========================================

/** [CORE]: พื้นฐานสำหรับทุก Template Component */
export interface BaseTemplateProps {
  readonly data: UniversalTemplateProps;
  readonly suppressUI?: boolean; // true เมื่อต้องการเรนเดอร์เฉพาะ Section (เช่นในหน้า Area)
}

/** [STABILIZED]: Template Aliases เพื่อความชัดเจนในการสื่อสารภายในโค้ด */
export type SalePageTemplateProps = BaseTemplateProps;
export type BioTemplateProps = BaseTemplateProps;
export type CorporateTemplateProps = BaseTemplateProps;
export type LocalTemplateProps = BaseTemplateProps;

/** [SPECIFIC]: สำหรับ Catalog ที่ต้องการการจัดการรายการแบบ Strict */
export interface CatalogTemplateProps extends BaseTemplateProps {
  readonly items?: readonly CatalogItem[];
}

// =========================================
// [04] ATOMIC COMPONENT PROPS
// =========================================

export interface SaleHeroProps {
  readonly title: string;
  readonly description: string;
  readonly image?: string;
  readonly accentColor?: string;
}

export interface StickyBuyButtonProps {
  readonly href: string;
  readonly label?: string;
  readonly price?: number | string;
  readonly color?: string;
}

export interface FeatureComparisonProps {
  readonly features: readonly ServiceFeature[];
  readonly accentColor?: string;
}

export interface DirectOrderFormProps {
  readonly price?: string;
  readonly unit?: string;
  readonly accentColor?: string;
}
```

---

## CONSTANTS REGISTRY

### CONFIG: image-blur-data.ts

```typescript
/**
 * [SYSTEM GENERATED]: IMAGE_BLUR_REGISTRY v2026-02-13T19:33:12.237Z
 * [MANDATE]: Strictly Auto-Generated. Do not modify.
 */
import type { ImageBlurRegistry } from "@/types";

export const IMAGE_BLUR_DATA: ImageBlurRegistry = {
  "/images/areas/bangkok-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/areas/chiang-mai-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/areas/chon-buri-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/areas/kamphaeng-phet-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/areas/khon-kaen-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/areas/korat-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/areas/nakhon-sawan-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/areas/phichit-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/areas/phitsanulok-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/areas/phuket-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/areas/preview.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/areas/sukhothai-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/areas/tak-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/areas/uttaradit-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/avatar.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoKAAoABUB8JYgCw7ELX8pfUAAA/u3f+dBkd0jL+/Z/RkpYE1XeQ5dhrMuqAu2RR2agAAAA",
    width: 554,
    height: 554,
  },
  "/images/blog/advanced-schema-markup.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO62XxaCgAA=",
    width: 1024,
    height: 768,
  },
  "/images/blog/copywriting-specialist.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO62XxaCgAA=",
    width: 1024,
    height: 768,
  },
  "/images/blog/core-web-vitals-speed.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO62XxaCgAA=",
    width: 1024,
    height: 768,
  },
  "/images/blog/default-thumb.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO62XxaCgAA=",
    width: 1024,
    height: 768,
  },
  "/images/blog/ecommerce-seo.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO62XxaCgAA=",
    width: 1024,
    height: 768,
  },
  "/images/blog/facebook-ads-vs-website.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADwAQCdASoKAAcABUB8JZgCdADdKOSPv0gA/tBoIlOWILsosq9XmVWHJfD4AA==",
    width: 696,
    height: 495,
  },
  "/images/blog/seo-google-love.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADwAQCdASoKAAcABUB8JYwCdH8AFx7S4QAA/u46rN37K4uMFz8bDUlvGpzjD+XFgO+I5FKehiDgAA==",
    width: 640,
    height: 479,
  },
  "/images/blog/technical-audit-visual.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADwAQCdASoKAAcABUB8JYwCdH8AFx7S4QAA/u46rN37K4uMFz8bDUlvGpzjD+XFgO+I5FKehiDgAA==",
    width: 640,
    height: 479,
  },
  "/images/case-studies/industrial-catalog.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/case-studies/preview.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/case-studies/unlink-reputation.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADwAQCdASoKAAcABUB8JZgCdADdKOSPv0gA/tBoIlOWILsosq9XmVWHJfD4AA==",
    width: 696,
    height: 495,
  },
  "/images/experts/profile-hero.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/logo-main.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADQAQCdASoKAAgABUB8JYwCdADc9U44QAD+5a3vLwE2CvtSvGyaza+hIrPt9vL8MAA=",
    width: 1024,
    height: 768,
  },
  "/images/og-default.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/og-main.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADQAQCdASoKAAgABUB8JYwCdADc9U44QAD+5a3vLwE2CvtSvGyaza+hIrPt9vL8MAA=",
    width: 1024,
    height: 768,
  },
  "/images/seo/advanced-schema-markup.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO62XxaCgAA=",
    width: 1024,
    height: 768,
  },
  "/images/seo/core-web-vitals-speed.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO62XxaCgAA=",
    width: 1024,
    height: 768,
  },
  "/images/seo/ecommerce-seo.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO62XxaCgAA=",
    width: 1024,
    height: 768,
  },
  "/images/seo/seo.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO62XxaCgAA=",
    width: 1024,
    height: 768,
  },
  "/images/service/bio-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADQAQCdASoKAAgABUB8JYwCdADc9U44QAD+5a3vLwE2CvtSvGyaza+hIrPt9vL8MAA=",
    width: 1024,
    height: 768,
  },
  "/images/service/catalog-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/service/corporate-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/service/default.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADQAQCdASoKAAgABUB8JYwCdADc9U44QAD+5a3vLwE2CvtSvGyaza+hIrPt9vL8MAA=",
    width: 1024,
    height: 768,
  },
  "/images/service/hotel-resort-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/service/local-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/service/personal-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO62XxaCgAA=",
    width: 1024,
    height: 768,
  },
  "/images/service/salepage-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO62XxaCgAA=",
    width: 1024,
    height: 768,
  },
  "/images/service/seo-agency-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/shared/placeholder.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADwAQCdASoKAAcABUB8JZgCdADdKOSPv0gA/tBoIlOWILsosq9XmVWHJfD4AA==",
    width: 696,
    height: 495,
  },
  "/images/shared/preview.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
} as const;
```

### CONFIG: master-registry.ts

```typescript
/**
 * [MASTER REGISTRY]: MASTER_SERVICE_INDEX v17.9.106 (LEAN_RELEASE)
 * [STRATEGY]: Centralized Data Aggregation | Type-Safe Helper Export | SSG Core
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { TemplateMasterData } from "@/types";

// --- 1. Infrastructure: Import Individual Service Nodes ---
import { seoAgencyService } from "./services/seo-agency";
import { salePageService } from "./services/salepage";
import { corporateService } from "./services/corporate";
import { catalogService } from "./services/catalog";
import { hotelResortService } from "./services/hotel-resort";
import { bioService } from "./services/bio";
import { localAuthorityService } from "./services/local-authority";

/**
 * [REGISTRY]: คลังข้อมูลบริการหลัก (Master Database)
 * ทำหน้าที่เป็นหัวใจการเรนเดอร์สำหรับหน้า Hub และการสร้าง Static Paths
 * [LOGIC]: เรียงลำดับตาม Priority (0 = สูงสุด)
 */
export const MASTER_REGISTRY: readonly TemplateMasterData[] = [
  seoAgencyService,
  salePageService,
  corporateService,
  catalogService,
  hotelResortService,
  bioService,
  localAuthorityService,
].sort((a, b) => a.priority - b.priority);

/**
 * [HELPER]: getServiceBySlug
 * @description ค้นหาข้อมูลบริการจาก URL Slug แบบ Type-Safe
 */
export const getServiceBySlug = (slug: string): TemplateMasterData | undefined => {
  return MASTER_REGISTRY.find((service) => service.templateSlug === slug);
};

/**
 * [HELPER]: getFeaturedServices
 * @description ดึงรายการบริการที่ระบุเป็น 'Featured' (isFeatured: true)
 * ใช้สำหรับแสดงผลในหน้าแรก (Main Landing Page)
 */
export const getFeaturedServices = (): TemplateMasterData[] => {
  return MASTER_REGISTRY.filter((service) => service.isFeatured);
};

// [REMOVED]: getServicesByCategory (Deleted to satisfy Knip unused-export check)
// หากต้องการใช้งานในอนาคต สามารถเพิ่มกลับมาได้เมื่อมีหน้า Component ที่เรียกใช้จริง
```

### CONFIG: navigation.ts

```typescript
/**
 * [DATA REGISTRY]: NAVIGATION_INFRASTRUCTURE v17.9.20 (RECOVERY_FIX)
 * [STRATEGY]: Explicit Exports | Proper Type Mapping
 */

import { SITE_CONFIG } from "./site-config";

// [NOTE]: บังคับ Export ให้ชัดเจนเพื่อให้ Navbar เรียกใช้ได้ไม่พลาด
export const MAIN_NAV = [
  { label: "หน้าแรก", href: "/" },
  { label: "บริการ & ราคา", href: "/services" },
  { label: "ผลงานลูกค้า", href: "/case-studies" },
  { label: "พื้นที่ให้บริการ", href: "/areas" },
  { label: "บันทึกเทคนิค", href: "/blog" },
  { label: "Status", href: "/status" },
] as const;

// ข้อมูลบริการ (ใช้ภายใน Footer และอาจใช้ใน Mega Menu)
const SERVICE_SOLUTIONS = [
  { label: "Sale Page ปิดการขาย", href: "/services/salepage" },
  { label: "เว็บไซต์บริษัท (Corporate)", href: "/services/corporate" },
  { label: "Technical SEO Specialist", href: "/services/seo-agency" },
  { label: "E-Catalog & RFQ System", href: "/services/catalog" },
  { label: "Local SEO (ปักหมุดธุรกิจ)", href: "/services/local" },
  { label: "ระบบจองโรงแรม & ที่พัก", href: "/services/hotelresort" },
] as const;

export const FOOTER_MAP = {
  services: [...SERVICE_SOLUTIONS.slice(0, 4), { label: "ดูบริการทั้งหมด", href: "/services" }],
  company: [
    { label: "เกี่ยวกับ AEMDEVWEB", href: "/about" },
    { label: "ขั้นตอนการทำงาน", href: "/services#process" },
    { label: "รวมผลงาน Portfolio", href: "/case-studies" },
    { label: "พื้นที่ให้บริการ", href: "/areas" },
  ],
  connect: [
    { label: "แอดไลน์ปรึกษาฟรี", href: SITE_CONFIG.links.line },
    { label: "Facebook Page", href: SITE_CONFIG.links.facebook },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "System Status", href: "/status" },
    { label: "Sitemap", href: "/sitemap.xml" },
  ],
} as const;
```

### CONFIG: site-config.ts

```typescript
/**
 * [SYSTEM CORE]: GLOBAL_SITE_CONFIGURATION v17.9.95 (ULTIMATE_HARDENED)
 * [STRATEGY]: Infrastructure-Synced | E-E-A-T Enforcement | Social Identity
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { SiteConfig } from "@/types";

const GOOGLE_MAPS_URL = "https://share.google/MMWnXPv3evv4Qd8aC";

export const SITE_CONFIG: SiteConfig = {
  brandName: "AEMDEVWEB",
  siteUrl: "https://aemdevweb.com",
  description:
    "AEMDEVWEB | Web Infrastructure & Technical SEO Specialist พัฒนาเว็บไซต์มาตรฐานสากลเพื่อการติดอันดับ Google อย่างยั่งยืนและมีประสิทธิภาพ",
  logo: "/images/logo-main.webp",

  // [NEW]: Infrastructure Signals
  ogImage: "/images/og-main.webp", // ขนาด 1200x630 สำหรับ Social Graph
  locale: "th_TH",
  themeColor: "#ef4444", // สี Brand สำหรับ Mobile Browser Address Bar

  hero: {
    title: "AEMDEVWEB HYPER-PERFORMANCE ARCHITECTURE",
    description:
      "วิศวกรรมโครงสร้างเว็บไซต์และกลยุทธ์ SEO ระดับ Specialist เพื่อการเติบโตของธุรกิจในยุค AI-Search 2026 โดย นายเอ็มซ่ามากส์ (Alongkorn Yomkerd)",
    primaryAction: "ปรึกษาวางแผนระบบฟรี",
    secondaryAction: "วิเคราะห์บริการทั้งหมด",
  },

  persona: {
    tone: "Strategic Partner, Technical Authority, Business-Centric",
    communicationStyle: "Result-oriented, Friendly Specialist, Transparent & Logical",
    antiConnotation: "No Fluff, No Robot-speak, Avoid Over-promising without Engineering Data",
  },

  keywords: [
    "รับทำเว็บไซต์",
    "รับทำ SEO สายขาว",
    "Technical SEO Specialist Thailand",
    "รับออกแบบเว็บไซต์ บริษัท",
    "รับทำ Sale Page ยิงแอด",
    "จ้างทำเว็บไซต์ ติดหน้าแรก Google",
    "รับทำเว็บไซต์ Next.js",
    "AEMDEVWEB",
    "นายเอ็มซ่ามากส์ AEMDEVWEB",
    "อลงกรณ์ ยมเกิด",
    "Alongkorn Yomkerd",
    "Web Infrastructure Specialist",
  ],

  project: {
    title: "AEMDEVWEB | High-End Web & SEO Expert Hub",
    shortTitle: "AEMDEVWEB",
    version: "17.9.95",
    framework: "Next.js 15.1.6 (App Router)",
    uiStack: "React 19 + Tailwind CSS 4",
  },

  expert: {
    displayName: "นายเอ็มซ่ามากส์ (AemSaMak)",
    legalName: "Alongkorn Yomkerd",
    legalNameThai: "อลงกรณ์ ยมเกิด",
    role: "Technical SEO Specialist",
    jobTitle: "Web Architect & Technical SEO Specialist",
    signature: "AEMDEVWEB Specialist",
    avatar: "/images/avatar.webp",
    email: "me@aemdevweb.com",
    bioUrl: "/services/bio",
    bio: "ผู้เชี่ยวชาญด้านวิศวกรรมเว็บไซต์และ Technical SEO ที่เน้นการสร้างผลลัพธ์ทางธุรกิจ (ROI) ผ่านโครงสร้างพื้นฐานดิจิทัลที่แข็งแกร่ง",
    googleMerchantId: "8653147979146207424",
    twitterHandle: "@aemdevweb", // [NEW]: สำหรับ Twitter Cards
  },

  contact: {
    email: "me@aemdevweb.com",
    phone: "099-032-2175",
    displayPhone: "099 032 2175 (สายด่วนปรึกษานายเอ็มซ่ามากส์)",
    address: "กำแพงเพชร, ประเทศไทย",
    streetAddress: "ตำบลในเมือง อำเภอเมืองกำแพงเพชร",
    postalCode: "62000",
    workHours: "จันทร์ - ศุกร์, 09:00 - 18:00 (Engineering Support 24/7)",
    mapUrl: GOOGLE_MAPS_URL,
  },

  links: {
    line: "https://lin.ee/kVRNkIy",
    lineId: "@127cnhtn",
    messenger: "https://m.me/aemdevweb",
    facebook: "https://facebook.com/aemdevweb",
    github: "https://github.com/aemdevweb",
    twitter: "https://x.com/aemdevweb",
    youtube: "https://youtube.com/@aemdevweb",
    googleMaps: GOOGLE_MAPS_URL,
    googleReview: "https://search.google.com/local/writereview?placeid=ChIJ0S9uG79lHTERERERERERERE",
  },

  business: {
    location: "กำแพงเพชร",
    region: "Northern Thailand",
    industry: "Digital Infrastructure & SEO",
    roiFocus: true,
    established: "2024",
    status: "Stable",
    ids: {
      businessProfileId: "17539943195708104348",
      storeCode: "01162024004001766449",
    },
  },

  // [NEW]: Tracking & Verification Matrix
  analytics: {
    gaId: "G-XXXXXXXXXX",
  },

  verification: {
    google: "HmlcGbJ8eKWuc1QN_UUpBQ",
    facebook: "fb_domain_verification_id",
  },
} as const;
```

---

## DIRECTORY INFRASTRUCTURE

```text
[3.4K 2026-02-14 04:03]  .
├── [9.7K 2026-02-14 01:32]  AEMDEVWEB-STRUCTURE.txt
├── [1.5K 2026-02-14 04:04]  MASTER_AUDIT_REPORT.md
├── [ 33K 2026-02-14 04:40]  README.md
├── [3.4K 2026-02-13 07:18]  app
│   ├── [3.4K 2026-02-12 22:06]  (business)
│   │   ├── [3.4K 2026-02-12 21:47]  areas
│   │   │   ├── [3.4K 2026-02-12 14:19]  [slug]
│   │   │   │   └── [5.6K 2026-02-14 04:04]  page.tsx
│   │   │   └── [6.4K 2026-02-14 04:09]  page.tsx
│   │   ├── [3.4K 2026-02-12 22:04]  blog
│   │   │   ├── [3.4K 2026-02-12 22:04]  [slug]
│   │   │   │   └── [3.0K 2026-02-13 00:38]  page.tsx
│   │   │   └── [2.9K 2026-02-13 00:38]  page.tsx
│   │   ├── [3.4K 2026-02-12 22:04]  case-studies
│   │   │   ├── [3.4K 2026-02-12 22:04]  [slug]
│   │   │   │   └── [2.8K 2026-02-13 03:27]  page.tsx
│   │   │   └── [3.7K 2026-02-13 00:38]  page.tsx
│   │   └── [2.9K 2026-02-14 04:04]  layout.tsx
│   ├── [3.4K 2026-02-12 22:08]  (main)
│   │   ├── [3.4K 2026-02-12 21:35]  about
│   │   │   └── [ 12K 2026-02-13 16:56]  page.tsx
│   │   ├── [2.5K 2026-02-14 04:04]  layout.tsx
│   │   ├── [8.8K 2026-02-14 04:04]  page.tsx
│   │   ├── [3.4K 2026-02-12 21:35]  privacy
│   │   │   └── [ 12K 2026-02-13 02:16]  page.tsx
│   │   ├── [3.4K 2026-02-12 21:35]  status
│   │   │   └── [ 12K 2026-02-12 21:35]  page.tsx
│   │   └── [3.4K 2026-02-12 21:36]  terms
│   │       └── [ 12K 2026-02-13 02:16]  page.tsx
│   ├── [3.4K 2026-02-12 22:04]  (sales)
│   │   ├── [1.8K 2026-02-14 04:04]  layout.tsx
│   │   └── [3.4K 2026-02-12 22:04]  services
│   │       ├── [3.4K 2026-02-12 22:04]  [slug]
│   │       │   └── [5.0K 2026-02-14 03:21]  page.tsx
│   │       └── [7.7K 2026-02-14 04:04]  page.tsx
│   ├── [4.3K 2026-02-14 04:04]  globals.css
│   ├── [3.3K 2026-02-14 04:04]  layout.tsx
│   ├── [4.2K 2026-02-14 04:04]  loading.tsx
│   ├── [3.0K 2026-02-13 22:37]  manifest.ts
│   ├── [6.2K 2026-02-12 16:19]  not-found.tsx
│   ├── [2.3K 2026-02-12 16:54]  robots.ts
│   ├── [4.2K 2026-02-14 01:12]  sitemap.ts
│   └── [1.6K 2026-02-14 04:04]  template.tsx
├── [3.4K 2026-02-12 00:53]  components
│   ├── [3.4K 2026-02-12 00:53]  features
│   │   ├── [3.4K 2026-02-12 14:19]  areas
│   │   │   └── [6.7K 2026-02-14 04:04]  AreaCard.tsx
│   │   ├── [3.4K 2026-02-12 14:19]  blog
│   │   │   └── [5.0K 2026-02-13 16:57]  BlogCard.tsx
│   │   ├── [3.4K 2026-02-12 14:19]  case-studies
│   │   │   └── [5.9K 2026-02-13 16:50]  CaseStudyCard.tsx
│   │   ├── [3.4K 2026-02-12 16:34]  landing
│   │   │   ├── [5.4K 2026-02-14 04:10]  Hero.tsx
│   │   │   ├── [ 10K 2026-02-12 16:54]  PricingSection.tsx
│   │   │   └── [ 10K 2026-02-13 02:08]  WorkProcess.tsx
│   │   └── [3.4K 2026-02-12 14:19]  services
│   │       ├── [6.8K 2026-02-14 04:04]  ServiceCard.tsx
│   │       └── [3.9K 2026-02-14 04:04]  ServiceListingHub.tsx
│   ├── [3.4K 2026-02-12 16:34]  layout
│   │   ├── [ 10K 2026-02-14 04:04]  Footer.tsx
│   │   ├── [7.0K 2026-02-14 04:04]  Navbar.tsx
│   │   ├── [2.4K 2026-02-14 04:04]  PageTransition.tsx
│   │   └── [2.3K 2026-02-14 03:11]  TopLoader.tsx
│   ├── [3.4K 2026-02-12 14:19]  providers
│   │   └── [1.1K 2026-02-14 04:04]  ThemeProvider.tsx
│   ├── [3.4K 2026-02-12 14:19]  seo
│   │   └── [1.9K 2026-02-13 22:06]  JsonLd.tsx
│   ├── [3.4K 2026-02-12 16:34]  shared
│   │   ├── [7.2K 2026-02-14 04:10]  ConversionCTA.tsx
│   │   ├── [3.1K 2026-02-14 04:04]  FloatingContainer.tsx
│   │   ├── [6.2K 2026-02-14 04:04]  ImpactStats.tsx
│   │   ├── [4.7K 2026-02-13 16:50]  LineStickyButton.tsx
│   │   └── [5.7K 2026-02-14 03:43]  TrustBadge.tsx
│   ├── [3.4K 2026-02-12 14:19]  templates
│   │   ├── [3.8K 2026-02-14 04:04]  TemplateRenderer.tsx
│   │   ├── [3.4K 2026-02-14 00:38]  bio
│   │   │   └── [ 10K 2026-02-14 02:33]  Index.tsx
│   │   ├── [3.4K 2026-02-14 00:38]  catalog
│   │   │   └── [ 10K 2026-02-14 04:04]  Index.tsx
│   │   ├── [3.4K 2026-02-14 00:38]  corporate
│   │   │   └── [ 11K 2026-02-14 04:04]  Index.tsx
│   │   ├── [3.4K 2026-02-14 00:38]  hotelresort
│   │   │   └── [9.2K 2026-02-14 02:33]  Index.tsx
│   │   ├── [3.4K 2026-02-14 00:35]  local-authority
│   │   │   └── [7.6K 2026-02-14 04:04]  Index.tsx
│   │   ├── [3.4K 2026-02-14 00:38]  salepage
│   │   │   ├── [7.7K 2026-02-14 02:33]  Index.tsx
│   │   │   └── [3.4K 2026-02-12 23:19]  _components
│   │   │       ├── [8.4K 2026-02-14 01:12]  DirectOrderForm.tsx
│   │   │       ├── [3.1K 2026-02-14 02:33]  FeatureComparison.tsx
│   │   │       ├── [4.9K 2026-02-14 01:12]  FlashSaleTimer.tsx
│   │   │       ├── [2.0K 2026-02-14 00:23]  SaleFooter.tsx
│   │   │       ├── [6.2K 2026-02-14 01:12]  SaleHero.tsx
│   │   │       ├── [1.5K 2026-02-14 01:12]  SaleNavbar.tsx
│   │   │       ├── [2.9K 2026-02-14 01:12]  StickyBuyButton.tsx
│   │   │       └── [5.4K 2026-02-14 02:33]  ThaiTrustBadge.tsx
│   │   ├── [3.4K 2026-02-12 16:34]  sections
│   │   │   ├── [5.5K 2026-02-14 04:04]  DynamicFAQ.tsx
│   │   │   ├── [6.2K 2026-02-14 04:04]  FeatureGrid.tsx
│   │   │   ├── [7.0K 2026-02-14 04:11]  HeroEngine.tsx
│   │   │   └── [3.6K 2026-02-14 04:09]  LayoutEngine.tsx
│   │   └── [3.4K 2026-02-14 00:38]  seo-agency
│   │       └── [9.0K 2026-02-14 02:06]  index.tsx
│   └── [3.4K 2026-02-12 14:19]  ui
│       ├── [2.7K 2026-02-12 14:19]  Accordion.tsx
│       ├── [2.3K 2026-02-14 04:04]  AmbientBackground.tsx
│       ├── [3.2K 2026-02-14 04:04]  Button.tsx
│       ├── [1.5K 2026-02-12 14:19]  Callout.tsx
│       ├── [5.0K 2026-02-14 02:33]  IconRenderer.tsx
│       ├── [ 931 2026-02-12 14:19]  Skeleton.tsx
│       ├── [2.7K 2026-02-12 15:22]  SkeletonCard.tsx
│       ├── [1.5K 2026-02-12 14:19]  SkeletonGrid.tsx
│       ├── [2.9K 2026-02-12 14:19]  Sonner.tsx
│       └── [2.9K 2026-02-13 07:00]  ThemeToggle.tsx
├── [ 425 2026-02-12 00:53]  components.json
├── [3.4K 2026-02-14 02:57]  config
│   ├── [4.5K 2026-02-13 06:22]  00-SYSTEM-MANDATE.md
│   └── [5.8K 2026-02-14 02:57]  01-SYSTEM-PROMPT-EXTENSION.md
├── [3.4K 2026-02-13 05:43]  constants
│   ├── [3.4K 2026-02-13 18:52]  area-nodes
│   │   ├── [6.6K 2026-02-14 01:42]  bangkok.ts
│   │   ├── [6.9K 2026-02-13 19:21]  chiang-mai.ts
│   │   ├── [7.2K 2026-02-13 19:21]  chon-buri.ts
│   │   ├── [1.5K 2026-02-13 18:59]  index.ts
│   │   ├── [7.1K 2026-02-14 04:11]  kamphaeng-phet.ts
│   │   ├── [7.0K 2026-02-13 19:21]  khon-kaen.ts
│   │   ├── [7.7K 2026-02-13 19:21]  korat.ts
│   │   ├── [7.4K 2026-02-13 19:21]  nakhon-sawan.ts
│   │   ├── [7.6K 2026-02-13 19:21]  phichit.ts
│   │   ├── [8.1K 2026-02-13 19:21]  phitsanulok.ts
│   │   ├── [7.7K 2026-02-13 19:21]  phuket.ts
│   │   ├── [7.9K 2026-02-13 19:21]  sukhothai.ts
│   │   ├── [5.4K 2026-02-13 19:21]  tak.ts
│   │   └── [7.9K 2026-02-13 19:21]  uttaradit.ts
│   ├── [9.6K 2026-02-14 02:33]  image-blur-data.ts
│   ├── [2.3K 2026-02-14 02:33]  master-registry.ts
│   ├── [2.3K 2026-02-13 17:17]  navigation.ts
│   ├── [3.4K 2026-02-13 17:11]  services
│   │   ├── [5.3K 2026-02-13 19:21]  bio.ts
│   │   ├── [5.7K 2026-02-13 19:21]  catalog.ts
│   │   ├── [5.1K 2026-02-14 01:42]  corporate.ts
│   │   ├── [5.4K 2026-02-13 19:21]  hotel-resort.ts
│   │   ├── [5.3K 2026-02-14 04:04]  local-authority.ts
│   │   ├── [5.0K 2026-02-13 19:21]  salepage.ts
│   │   └── [4.9K 2026-02-13 19:21]  seo-agency.ts
│   └── [4.9K 2026-02-13 22:06]  site-config.ts
├── [3.4K 2026-02-12 00:53]  content
│   ├── [3.4K 2026-02-12 00:53]  blog
│   │   ├── [ 12K 2026-02-13 19:21]  5-points-killing-sales.mdx
│   │   ├── [ 11K 2026-02-13 19:21]  advanced-schema-markup.mdx
│   │   ├── [ 10K 2026-02-13 19:21]  case-study-unlink-th.mdx
│   │   ├── [9.9K 2026-02-13 19:21]  copywriting-secrets.mdx
│   │   ├── [ 12K 2026-02-13 19:21]  core-web-vitals-speed.mdx
│   │   ├── [9.9K 2026-02-13 19:21]  ecommerce-conversion-seo.mdx
│   │   ├── [ 11K 2026-02-13 19:21]  facebook-ads-vs-website.mdx
│   │   ├── [ 12K 2026-02-13 19:21]  lower-north-digital-transformation.mdx
│   │   ├── [ 15K 2026-02-13 19:21]  seo-2026-strategy.mdx
│   │   └── [ 11K 2026-02-13 19:21]  technical-audit-protocol.mdx
│   └── [3.4K 2026-02-12 00:53]  case-studies
│       ├── [ 11K 2026-02-13 19:21]  case-study-industrial-catalog.mdx
│       └── [ 11K 2026-02-13 19:21]  unlink-reputation-management-success.mdx
├── [3.4K 2026-02-13 18:03]  docs
│   ├── [ 24K 2026-02-12 22:35]  Dev.md
│   └── [1.5K 2026-02-13 17:19]  MASTER_AUDIT_REPORT.md
├── [2.1K 2026-02-12 00:53]  eslint.config.mjs
├── [ 476 2026-02-12 15:18]  knip.json
├── [3.4K 2026-02-13 22:31]  lib
│   ├── [5.4K 2026-02-13 22:06]  cms.ts
│   ├── [5.1K 2026-02-13 02:12]  schema-validator.ts
│   ├── [7.3K 2026-02-14 02:33]  schema.ts
│   ├── [2.6K 2026-02-13 22:46]  seo-utils.ts
│   └── [2.4K 2026-02-14 04:04]  utils.ts
├── [3.8K 2026-02-12 17:17]  mdx-components.tsx
├── [ 247 2026-02-14 04:14]  next-env.d.ts
├── [2.8K 2026-02-13 22:49]  next.config.ts
├── [2.7K 2026-02-12 20:41]  package.json
├── [234K 2026-02-14 04:04]  pnpm-lock.yaml
├── [  51 2026-02-12 00:53]  pnpm-workspace.yaml
├── [1.1K 2026-02-12 00:53]  postcss.config.mjs
├── [3.4K 2026-02-13 07:06]  public
│   └── [3.4K 2026-02-13 03:00]  images
│       ├── [3.4K 2026-02-13 22:39]  areas
│       ├── [3.4K 2026-02-12 00:53]  blog
│       ├── [3.4K 2026-02-12 00:53]  case-studies
│       ├── [3.4K 2026-02-12 05:24]  experts
│       ├── [3.4K 2026-02-12 00:53]  seo
│       ├── [3.4K 2026-02-13 23:43]  service
│       ├── [3.4K 2026-02-12 00:53]  shared
│       └── [3.4K 2026-02-12 00:53]  templates
│           └── [3.4K 2026-02-12 00:53]  local-service
├── [3.4K 2026-02-13 18:19]  scripts
│   ├── [2.7K 2026-02-14 01:18]  audit-system.sh
│   ├── [1.8K 2026-02-13 18:20]  check-types-usage.sh
│   ├── [2.1K 2026-02-12 15:22]  clean-project.sh
│   ├── [2.0K 2026-02-12 00:53]  cleanup-images.sh
│   ├── [4.0K 2026-02-13 02:08]  gen-blur-data.mjs
│   ├── [3.0K 2026-02-12 01:03]  generate_docs.sh
│   ├── [7.7K 2026-02-13 03:02]  master_audit.sh
│   └── [3.4K 2026-02-14 01:12]  test-schema.ts
├── [ 51K 2026-02-14 02:33]  system_audit_result.md
├── [ 863 2026-02-13 02:08]  tsconfig.json
├── [180K 2026-02-14 04:12]  tsconfig.tsbuildinfo
├── [3.4K 2026-02-13 22:31]  types
│   ├── [7.9K 2026-02-13 22:37]  index.d.ts
│   ├── [1.1K 2026-02-13 21:33]  mdx.d.ts
│   └── [4.4K 2026-02-14 03:24]  template-props.ts
├── [ 10K 2026-02-14 01:12]  types_usage_report.md
└── [2.8K 2026-02-13 22:49]  vercel.json

61 directories, 148 files
```

---

## BUILD ARTIFACT ANALYSIS (.next/static)

```text
2.3M	.next/static
196K	.next/static/chunks/92766bc8-d7271867088c7ae4.js
188K	.next/static/chunks/1966-7874a697c3ff9e79.js
180K	.next/static/chunks/framework-473b702606f6b0d3.js
132K	.next/static/chunks/main-29eea1bfa6c64bd5.js
124K	.next/static/chunks/1409-f3a64b314a20b8ed.js
120K	.next/static/css/70cf629fd83e39b3.css
112K	.next/static/chunks/polyfills-42372ed130431b0a.js
84K	.next/static/media/8e9860b6e62d6359-s.woff2
72K	.next/static/chunks/6755-50eb1c6e6fe566d1.js
48K	.next/static/media/e4af272ccee01ff0-s.p.woff2
```
