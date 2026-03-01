/**
 * [SYSTEM ENGINE]: UNIVERSAL_RENDERER v20.5.0 (IDENTITY_SYNC_CORE)
 * [STRATEGY]: Provincial DNA Injection | Theme Morphing | Centralized Theme Engine
 * [MAINTAINER]: AEMZA MACKS (Lead Systems Architect)
 */

import React from "react";
import { cn, injectThemeVariables } from "@/lib/utils";
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
  readonly contextMode?: "area" | "service";
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
 * [CENTRALIZED_CONTROL]: ใช้ injectThemeVariables เพื่อความสอดคล้องของระบบสีทั่วทั้งโปรเจกต์
 */
export const TemplateRenderer = ({ data, contextMode = "service" }: TemplateRendererProps) => {
  if (!data || !data.templateSlug) {
    console.error("[RENDERER_ERROR]: Data or TemplateSlug is missing");
    return null;
  }

  const { theme } = data;
  const isDarkMode = theme?.mode === "dark";

  // [CENTRALIZED_THEME_ENGINE]: เรียกใช้เครื่องยนต์ฉีดสีกลางจาก lib/utils
  const semanticStyles = injectThemeVariables(theme);

  // [DYNAMIC_AURA_OVERRIDE]: จัดการ Aura เฉพาะสำหรับระดับ Renderer
  const auraStyles = {
    "--context-aura-opacity": contextMode === "service" ? (isDarkMode ? "0.4" : "0.2") : "0.1",
    "--context-aura-blur": contextMode === "service" ? "160px" : "80px",
  } as React.CSSProperties;

  const finalStyles = { ...semanticStyles, ...auraStyles } as React.CSSProperties;

  const SpecificTemplate = TEMPLATE_MAP[data.templateSlug];

  return (
    <div
      style={finalStyles}
      className={cn(
        "contents-dna-container relative w-full overflow-hidden transition-all duration-1000",
        isDarkMode ? "dark" : "light",
        "min-h-screen bg-[var(--surface-main)] text-[var(--text-primary)]",
        "selection:bg-[var(--color-brand-primary)]/30",
        `template-${data.templateSlug}`,
      )}
    >
      {/* [DYNAMIC_ATMOSPHERE]: Adaptive Background Layers */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          className="absolute -top-[10%] -right-[10%] h-[1000px] w-[1000px] rounded-full opacity-[var(--context-aura-opacity)] blur-[var(--context-aura-blur)] transition-all duration-1000"
          style={{ backgroundColor: "var(--color-brand-primary)" }}
        />
        <div
          className="absolute -bottom-[10%] -left-[10%] h-[800px] w-[800px] rounded-full opacity-[calc(var(--context-aura-opacity)*0.5)] blur-[var(--context-aura-blur)] transition-all duration-1000"
          style={{ backgroundColor: "var(--color-brand-secondary)" }}
        />
      </div>

      {/* บังคับการแสดงผล Content ให้อยู่ภายใต้ Semantic Layer */}
      <main className="relative z-10 w-full text-[var(--text-primary)] antialiased">
        {SpecificTemplate ? (
          <SpecificTemplate data={data} />
        ) : (
          <LayoutEngine data={data} sectionOrder={data.layoutOrder} />
        )}
      </main>
    </div>
  );
};

TemplateRenderer.displayName = "TemplateRenderer";
