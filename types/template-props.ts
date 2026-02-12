/**
 * [SYSTEM CORE]: TEMPLATE_PROPS_ENGINE v17.9.9 (STABILIZED_FINAL)
 * [STRATEGY]: Decoupled UI Logic | Universal Adapter Pattern | Type-Safe Bridge
 */

import type { IconName, ServiceFeature, ServiceFaq } from "./index";

// =========================================
// [01] UI ACTION SCHEMAS
// =========================================

export interface TemplateAction {
  readonly label: string;
  readonly href: string;
  readonly icon?: IconName;
  readonly variant?: "default" | "outline" | "ghost" | "link" | "brand";
}

// =========================================
// [02] UNIVERSAL TEMPLATE CONTRACT
// =========================================

/**
 * [STRATEGIC]: Bridge Interface สำหรับ Data Normalization
 * [FIXED]: เพิ่ม templateSlug และ category เพื่อให้รองรับ Schema Engine (TS2345)
 */
export interface UniversalTemplateProps {
  // --- Core Identity ---
  readonly id: string;
  readonly templateSlug: string; // [REQUIRED]: สำหรับการทำ SEO & Routing
  readonly category: string; // [REQUIRED]: สำหรับ Schema categorization
  readonly title: string; // เปลี่ยนเป็น string เพื่อความเสถียรใน Metadata
  readonly description: string;
  readonly image?: string; // [SYNC]: ใช้ image แทน heroImage เพื่อความเป็นเอกภาพ

  // --- Commercial & Metadata ---
  readonly price?: string;
  readonly priceValue?: number;
  readonly unit?: string;
  readonly currency?: string;

  // --- Data Clusters (Normalized) ---
  readonly benefits?: readonly string[];
  readonly coreFeatures?: readonly ServiceFeature[]; // [SYNC]: ชื่อเดียวกับ TemplateMasterData
  readonly faqs?: readonly ServiceFaq[];
  readonly keywords?: readonly string[];

  // --- Strategic UI Elements ---
  readonly clientTrust?: string;
  readonly primaryAction?: TemplateAction;
  readonly secondaryAction?: TemplateAction;

  // --- Visual Metadata ---
  readonly theme?: {
    readonly primary?: string;
    readonly secondary?: string;
    readonly background?: string;
    readonly gradient?: string;
  };
}

// =========================================
// [03] COMPONENT PROPS (STRICT TYPING)
// =========================================

export interface BaseTemplateProps {
  readonly data: UniversalTemplateProps;
  readonly className?: string;
}

/**
 * [FIXED]: เพิ่ม StickyBuyButtonProps เพื่อแก้ปัญหา TS2322 ใน SalePage
 */
export interface StickyBuyButtonProps {
  readonly href: string;
  readonly label?: string;
}

export interface CatalogTemplateProps extends BaseTemplateProps {
  readonly displayMode?: "grid" | "list";
  readonly items?: readonly {
    readonly name: string;
    readonly description: string;
    readonly image?: string;
    readonly price?: string;
  }[];
}

export interface BioTemplateProps extends BaseTemplateProps {
  readonly socialLinks?: readonly {
    readonly platform: string;
    readonly url: string;
    readonly icon: IconName;
  }[];
}
