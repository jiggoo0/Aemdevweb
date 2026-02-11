/**
 * [SYSTEM CORE]: TEMPLATE_PROPS_ENGINE v17.9.1 (SYNCED_FINAL)
 * [STRATEGY]: Decoupled UI Logic | Universal Adapter Pattern | Type-Safe Bridge
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { ReactNode } from "react";
import type { IconName, ServiceFeature, ServiceFaq } from "./index";

// =========================================
// [01] UI ACTION SCHEMAS
// =========================================

/**
 * โครงสร้างมาตรฐานสำหรับปุ่ม Call to Action (CTA) และลิงก์ภายในระบบ
 */
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
 * [STRATEGIC]: Bridge Interface ระหว่าง ServiceData และ AreaNode
 * ออกแบบมาเพื่อทำ Data Normalization ก่อนส่งเข้าสู่ Template Components
 * ช่วยให้หนึ่ง Template สามารถรับข้อมูลได้จากหลายแหล่ง (Multi-Source)
 */
export interface UniversalTemplateProps {
  // --- Core Identity ---
  readonly id: string;
  readonly title: ReactNode | string; // รองรับทั้งข้อความดิบและ JSX (Rich Text)
  readonly description: string;
  readonly heroImage?: string;

  // --- Commercial & Metadata (Optional สำหรับหน้า Area) ---
  readonly price?: string;
  readonly priceValue?: number;
  readonly unit?: string;
  readonly currency?: string;

  // --- Data Clusters (Normalized) ---
  readonly benefits?: readonly string[];
  readonly features?: readonly ServiceFeature[]; // Mapped จาก coreFeatures
  readonly faqs?: readonly ServiceFaq[];
  readonly keywords?: readonly string[];

  // --- Strategic UI Elements ---
  readonly clientTrust?: string;
  readonly primaryAction?: TemplateAction;
  readonly secondaryAction?: TemplateAction;

  // --- Visual Metadata & Theming ---
  // สอดคล้องกับ LayoutEngine และ ThemeConfig
  readonly theme?: {
    readonly primary?: string;
    readonly secondary?: string;
    readonly background?: string; // Tailwind class หรือ Hex
    readonly gradient?: string; // Tailwind Gradient
  };
  readonly priority?: number;
}

// =========================================
// [03] SPECIFIC COMPONENT PROPS
// =========================================

/**
 * Base Props พื้นฐานสำหรับ Template ทุกประเภท
 */
export interface BaseTemplateProps {
  readonly data: UniversalTemplateProps;
  readonly className?: string;
}

/**
 * Specialized Props สำหรับ Catalog Template
 */
export interface CatalogTemplateProps extends BaseTemplateProps {
  readonly displayMode?: "grid" | "list";
  readonly showPrice?: boolean;
  readonly items?: readonly {
    readonly name: string;
    readonly description: string;
    readonly image?: string;
    readonly price?: string;
  }[];
}

/**
 * Specialized Props สำหรับ Bio / Personal Portfolio Template
 */
export interface BioTemplateProps extends BaseTemplateProps {
  readonly socialLinks?: readonly {
    readonly platform: string;
    readonly url: string;
    readonly icon: IconName;
  }[];
}

// =========================================
// [04] ADAPTER TYPE DEFINITIONS
// =========================================

/**
 * [ADAPTER TYPE]: ระบุแหล่งที่มาของข้อมูลเพื่อการจัดการ Logic ภายในที่แตกต่างกัน
 */
export type TemplateDataSource = "service" | "area" | "custom";
