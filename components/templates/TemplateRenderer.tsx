/**
 * [COMPONENT]: UNIVERSAL_RENDERER v17.9.102 (TYPE_HARDENED)
 * [STRATEGY]: Case-Sensitive Import | Static Mapping | Visual Error Boundary
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import type { UniversalTemplateProps, BaseTemplateProps } from "@/types";

// --- 1. Template Registry (FileSystem Case-Sensitive Checked) ---
import SalePageTemplate from "./salepage/Index";
import CorporateTemplate from "./corporate/Index";
import CatalogTemplate from "./catalog/Index";
import BioTemplate from "./bio/Index";
import LocalAuthorityTemplate from "./local-authority/Index";
import HotelResortTemplate from "./hotelresort/Index";
import SEOAgencyTemplate from "./seo-agency/Index";

interface TemplateRendererProps {
  readonly data: UniversalTemplateProps;
  readonly renderMode?: "full" | "section-only";
}

// [OPTIMIZATION]: Define mapping logic cleanly with Strict Types
// ใช้ BaseTemplateProps แทน any เพื่อผ่านกฎ Linter
const TEMPLATE_REGISTRY: Record<string, React.ComponentType<BaseTemplateProps>> = {
  salepage: SalePageTemplate,
  corporate: CorporateTemplate,
  catalog: CatalogTemplate,
  bio: BioTemplate,
  "local-authority": LocalAuthorityTemplate,
  local: LocalAuthorityTemplate, // Legacy Alias
  hotelresort: HotelResortTemplate,
  "seo-agency": SEOAgencyTemplate,
};

export function TemplateRenderer({ data, renderMode = "full" }: TemplateRendererProps) {
  // [LOGIC]: Direct lookup (Fastest O(1))
  const ActiveTemplate = TEMPLATE_REGISTRY[data.templateSlug as string];

  /**
   * [GUARD_CLAUSE]: Visual Error Boundary for Missing Nodes
   */
  if (!ActiveTemplate) {
    return (
      <div className="relative flex min-h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-[2.5rem] border-2 border-dashed border-rose-500/20 bg-rose-500/5 p-8 text-center backdrop-blur-md md:rounded-[4rem] md:p-12">
        {/* Background Grid Pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#f43f5e 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Animated Icon */}
        <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-rose-500/10 shadow-[0_0_30px_-5px_rgba(244,63,94,0.3)] ring-1 ring-rose-500/20 transition-transform duration-700 hover:rotate-12">
          <span className="animate-pulse text-5xl font-black text-rose-600 select-none">!</span>
        </div>

        {/* Error Details */}
        <div className="relative z-10 max-w-md space-y-3">
          <h3 className="font-mono text-xl font-black tracking-tighter text-rose-700 uppercase italic md:text-2xl">
            404_TEMPLATE_NOT_FOUND
          </h3>
          <div className="rounded-lg border border-rose-200 bg-white/40 p-3 font-mono text-xs break-all text-rose-800">
            Slug: "{data.templateSlug}"
          </div>
          <p className="text-sm leading-relaxed font-medium text-rose-900/60">
            ระบบไม่พบ Template ที่ระบุใน Master Registry <br />
            กรุณาตรวจสอบการสะกดคำใน{" "}
            <span className="font-bold underline">constants/master-registry.ts</span>
          </p>
        </div>
      </div>
    );
  }

  // [EXECUTION]: Render with Props Injection
  return <ActiveTemplate data={data} suppressUI={renderMode === "section-only"} />;
}
