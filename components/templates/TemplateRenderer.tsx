/**
 * [SYSTEM ENGINE]: UNIVERSAL_RENDERER v19.1.0 (PRO-DIVERSITY)
 * [STRATEGY]: Template Mapping | Fallback to Strategy | Next.js 16 Optimized
 * [MAINTAINER]: AEMZA MACKS (Lead Systems Architect)
 */

import React from "react";
import type { UniversalTemplateProps } from "@/types";
import LayoutEngine from "./LayoutEngine";

// --- Specialized Templates ---
import CorporateTemplate from "./corporate/Index";
import SalePageTemplate from "./salepage/Index";
import CatalogTemplate from "./catalog/Index";
import BioTemplate from "./bio/Index";
import HotelResortTemplate from "./hotelresort/Index";
import LocalAuthorityTemplate from "./local-authority/Index";
import SeoAgencyTemplate from "./seo-agency/Index";

interface TemplateRendererProps {
  readonly data: UniversalTemplateProps;
  readonly renderMode?: "full" | "section-only";
}

const TEMPLATE_MAP: Record<string, React.ComponentType<{ data: UniversalTemplateProps }>> = {
  corporate: CorporateTemplate,
  salepage: SalePageTemplate,
  catalog: CatalogTemplate,
  bio: BioTemplate,
  hotelresort: HotelResortTemplate,
  "local-authority": LocalAuthorityTemplate,
  "seo-agency": SeoAgencyTemplate,
};

/**
 * @component TemplateRenderer
 * @description ด่านหน้าในการเลือกเทมเพลตที่เหมาะสมที่สุดตาม templateSlug
 * โดยจะเลือกใช้เทมเพลตเฉพาะทาง (Index.tsx) ก่อน หากไม่มีจึงจะถอยกลับไปใช้ LayoutEngine (Strategy)
 */
export const TemplateRenderer = ({ data }: TemplateRendererProps) => {
  if (!data || !data.templateSlug) {
    console.error("[RENDERER_ERROR]: Data or TemplateSlug is missing");
    return null;
  }

  const SpecificTemplate = TEMPLATE_MAP[data.templateSlug];

  if (SpecificTemplate) {
    return <SpecificTemplate data={data} />;
  }

  // [FALLBACK]: ถอยกลับไปใช้ระบบ Dynamic Sections หากไม่มีเทมเพลตเฉพาะทาง
  return <LayoutEngine data={data} sectionOrder={data.layoutOrder} />;
};

TemplateRenderer.displayName = "TemplateRenderer";
