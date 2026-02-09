/**
 * [SYSTEM CORE]: TEMPLATE_PROPS_ENGINE v17.5.0 (TYPE_SAFE)
 * [STRATEGY]: Decoupled UI Logic | Universal Adapter Pattern
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { ReactNode } from "react";
import type { IconName, ServiceFeature, ServiceFaq } from "./index";

// =========================================
// [01] UI ACTION SCHEMAS
// =========================================

/**
 * Standard Call to Action structure for Buttons/Links
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
 * [STRATEGIC]: Bridge Interface between ServiceData/AreaNode and UI
 * Designed for "Dumb Components" rendering to ensure consistency.
 */
export interface UniversalTemplateProps {
  // --- Core Identity ---
  readonly id: string;
  readonly title: ReactNode | string; // Support Rich Text Titles
  readonly description: string;
  readonly heroImage?: string;

  // --- Commercial Specs (Optional for Area pages) ---
  readonly price?: string;
  readonly priceValue?: number; // Added for Schema/Calculation
  readonly unit?: string;
  readonly currency?: string;

  // --- Data Clusters ---
  readonly benefits?: readonly string[];
  readonly features?: readonly ServiceFeature[]; // Mapped from coreFeatures
  readonly faqs?: readonly ServiceFaq[];
  readonly keywords?: readonly string[];

  // --- Strategic UI Elements ---
  readonly clientTrust?: string;
  readonly primaryAction?: TemplateAction;
  readonly secondaryAction?: TemplateAction;

  // --- Visual Metadata & Theming ---
  // [UPDATED]: Align with LayoutEngine & ThemeConfig
  readonly theme?: {
    readonly primary?: string;
    readonly secondary?: string;
    readonly background?: string; // Hex or Tailwind Class
    readonly gradient?: string; // Tailwind Gradient
  };
  readonly priority?: number;
}

// =========================================
// [03] SPECIFIC COMPONENT PROPS
// =========================================

/**
 * Base Props for all Template Components
 */
export interface BaseTemplateProps {
  readonly data: UniversalTemplateProps;
  readonly className?: string;
}

/**
 * Specialized Props for Catalog Template
 */
export interface CatalogTemplateProps extends BaseTemplateProps {
  readonly displayMode?: "grid" | "list";
  readonly showPrice?: boolean;
  readonly items?: readonly {
    name: string;
    description: string;
    image?: string;
    price?: string;
  }[];
}

/**
 * Specialized Props for Bio/Portfolio Template
 */
export interface BioTemplateProps extends BaseTemplateProps {
  readonly socialLinks?: readonly {
    readonly platform: string;
    readonly url: string;
    readonly icon: IconName;
  }[];
}

/**
 * [ADAPTER TYPE]: Data Source Validation Helper
 */
export type TemplateDataSource = "service" | "area" | "custom";
