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
