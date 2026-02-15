/**
 * [COMPONENT]: UNIVERSAL_RENDERER v18.0.1 (STABILIZED)
 * [STRATEGY]: Blueprint Orchestration | Default Import Alignment | Zero-Jank
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo } from "react";
import type { UniversalTemplateProps, BaseTemplateProps } from "@/types";

// --- 1. Infrastructure ---
import DynamicThemeWrapper from "./DynamicThemeWrapper";

// --- 2. Template Registry (Default Import Alignment) ---
/** * [FIX]: ลบปีกกา { } ออกจากการ Import ทั้งหมด 
 * เพราะไฟล์ Index ในแต่ละโฟลเดอร์ใช้ 'export default'
 */
import SalePageTemplate from "./salepage/Index";
import CorporateTemplate from "./corporate/Index";
import CatalogTemplate from "./catalog/Index";
import BioTemplate from "./bio/Index";
import LocalAuthorityTemplate from "./local-authority/Index";
import HotelResortTemplate from "./hotelresort/Index";
import SeoAgencyTemplate from "./seo-agency/Index";

interface TemplateRendererProps {
  readonly data: UniversalTemplateProps;
  readonly renderMode?: "full" | "section-only";
}

/**
 * [MAPPING]: สถาปัตยกรรมจับคู่ Slug กับ Component
 */
const TEMPLATE_REGISTRY: Record<string, React.ComponentType<BaseTemplateProps>> = {
  salepage: SalePageTemplate,
  corporate: CorporateTemplate,
  catalog: CatalogTemplate,
  bio: BioTemplate,
  "local-authority": LocalAuthorityTemplate,
  local: LocalAuthorityTemplate,
  hotelresort: HotelResortTemplate,
  "seo-agency": SeoAgencyTemplate,
};



/**
 * [RENDERER]: หัวใจหลักในการเลือกแสดงผลเทมเพลตตามข้อมูลจาก Registry
 */
export const TemplateRenderer = memo(({ data, renderMode = "full" }: TemplateRendererProps) => {
  const ActiveTemplate = TEMPLATE_REGISTRY[data.templateSlug];

  if (!ActiveTemplate) {
    return <TemplateNotFound data={data} />;
  }

  return (
    <DynamicThemeWrapper theme={data.theme}>
      <ActiveTemplate data={data} suppressUI={renderMode === "section-only"} />
    </DynamicThemeWrapper>
  );
});

TemplateRenderer.displayName = "TemplateRenderer";

/** [SUB-COMPONENT]: TemplateNotFound - Debugger View */
const TemplateNotFound = ({ data }: { data: UniversalTemplateProps }) => (
  <div className="relative flex min-h-[60vh] w-full flex-col items-center justify-center overflow-hidden rounded-[3rem] border-2 border-dashed border-rose-500/20 bg-rose-500/5 p-12 text-center backdrop-blur-xl">
    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-rose-500/10 shadow-2xl ring-1 ring-rose-500/20">
      <span className="animate-pulse text-5xl font-black text-rose-600">!</span>
    </div>

    <div className="max-w-md space-y-4">
      <h3 className="font-mono text-2xl font-black tracking-tighter text-rose-700 uppercase italic">
        404_TEMPLATE_NOT_FOUND
      </h3>
      <div className="rounded-xl border border-rose-200 bg-white/50 p-4 font-mono text-xs break-all text-rose-800 shadow-sm">
        Target_Slug: <span className="font-bold underline">"{data.templateSlug}"</span>
      </div>
      <p className="text-sm leading-relaxed font-medium text-rose-900/60 italic">
        "ตรวจสอบโครงสร้างข้อมูลใน constants/master-registry.ts"
      </p>
    </div>
  </div>
);
