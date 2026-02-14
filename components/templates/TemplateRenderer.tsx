/**
 * [COMPONENT]: UNIVERSAL_RENDERER v17.9.111 (STABLE_RECOVERY)
 * [STRATEGY]: Blueprint Orchestration | Named Export Migration | Zero-Jank Bridge
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo } from "react";
import type { UniversalTemplateProps, BaseTemplateProps } from "@/types";

// --- 1. Infrastructure (The Guard) ---
import DynamicThemeWrapper from "./DynamicThemeWrapper";

// --- 2. Template Registry (Case-Sensitive Import) ---
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

/**
 * [MAPPING]: สถาปัตยกรรมจับคู่ Slug กับ Component
 * รองรับ Alias เพื่อความยืดหยุ่นในการทำ SEO และ Legacy Data
 */
const TEMPLATE_REGISTRY: Record<string, React.ComponentType<BaseTemplateProps>> = {
  salepage: SalePageTemplate,
  corporate: CorporateTemplate,
  catalog: CatalogTemplate,
  bio: BioTemplate,
  "local-authority": LocalAuthorityTemplate,
  local: LocalAuthorityTemplate,
  hotelresort: HotelResortTemplate,
  "seo-agency": SEOAgencyTemplate,
};

/**
 * [RENDERER]: หัวใจหลักในการเลือกแสดงผลเทมเพลต
 * [KNIP_FIX]: เปลี่ยนเป็น Named Export เพื่อแก้ปัญหา Unused Default Export
 */
export const TemplateRenderer = memo(({ data, renderMode = "full" }: TemplateRendererProps) => {
  // [LOOKUP]: ดึงเทมเพลตที่ต้องการแบบ O(1)
  const ActiveTemplate = TEMPLATE_REGISTRY[data.templateSlug];

  // [GUARD]: กรณีข้อมูล Slug ใน Database ไม่ตรงกับ Registry
  if (!ActiveTemplate) {
    return <TemplateNotFound data={data} />;
  }

  return (
    <DynamicThemeWrapper theme={data.theme}>
      <ActiveTemplate data={data} suppressUI={renderMode === "section-only"} />
    </DynamicThemeWrapper>
  );
});

// กำหนด DisplayName เพื่อให้ง่ายต่อการ Debug ใน React DevTools
TemplateRenderer.displayName = "TemplateRenderer";

/**
 * [SUB-COMPONENT]: TemplateNotFound
 * @description ระบบแจ้งเตือนเมื่อระบบหาเทมเพลตไม่เจอ (Lead Architect Debugger)
 */
const TemplateNotFound = ({ data }: { data: UniversalTemplateProps }) => (
  <div className="relative flex min-h-[60vh] w-full flex-col items-center justify-center overflow-hidden rounded-[3rem] border-2 border-dashed border-rose-500/20 bg-rose-500/5 p-12 text-center backdrop-blur-xl">
    {/* Visual Status Indicator */}
    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-rose-500/10 shadow-2xl ring-1 ring-rose-500/20">
      <span className="animate-pulse text-5xl font-black text-rose-600 select-none">!</span>
    </div>

    {/* Error Context Cluster */}
    <div className="max-w-md space-y-4">
      <h3 className="font-mono text-2xl font-black tracking-tighter text-rose-700 uppercase italic">
        404_TEMPLATE_NOT_FOUND
      </h3>
      <div className="rounded-xl border border-rose-200 bg-white/50 p-4 font-mono text-xs break-all text-rose-800 shadow-sm">
        Target_Slug: <span className="font-bold underline">"{data.templateSlug}"</span>
      </div>
      <p className="text-sm leading-relaxed font-medium text-rose-900/60 italic">
        "ระบบตรวจพบความผิดปกติ: ไม่พบสถาปัตยกรรมที่เรียกใช้ใน Registry" <br />
        กรุณาตรวจสอบการตั้งค่าใน{" "}
        <code className="bg-rose-100 px-1 font-bold text-rose-700">
          constants/master-registry.ts
        </code>
      </p>
    </div>
  </div>
);
