/**
 * [CORE COMPONENT]: TEMPLATE_RENDERER v17.9.9 (STABILIZED)
 * [STRATEGY]: Dynamic Strategy Mapping | Bundle Optimization | Type-Safe Intersection
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import SkeletonGrid from "@/components/ui/SkeletonGrid";
import type { TemplateMasterData, AreaNode } from "@/types";

// --- [DYNAMIC IMPORT ENGINE]: โหลด Template เฉพาะเมื่อมีการเรียกใช้งานจริง ---
const SalePage = dynamic(() => import("./salepage/Index"), { loading: () => <SkeletonGrid /> });
const CatalogPage = dynamic(() => import("./catalog/Index"), { loading: () => <SkeletonGrid /> });
const CorporatePage = dynamic(() => import("./corporate/Index"), {
  loading: () => <SkeletonGrid />,
});
const BioLinkPage = dynamic(() => import("./bio/Index"), { loading: () => <SkeletonGrid /> });
const LocalAuthorityPage = dynamic(() => import("./local-authority/Index"), {
  loading: () => <SkeletonGrid />,
});
const HotelResortPage = dynamic(() => import("./hotelresort/Index"), {
  loading: () => <SkeletonGrid />,
});
const SeoAgencyPage = dynamic(() => import("./seo-agency/index"), {
  loading: () => <SkeletonGrid />,
});

/**
 * [INTERFACE_HARDENING]
 * [FIXED]: ปรับปรุง Interface ให้มีความเป็นระเบียบและรองรับ Readonly Props
 */
interface TemplateRendererProps {
  readonly data: TemplateMasterData | AreaNode;
  readonly _source?: "service" | "area";
}

/**
 * @component TemplateRenderer
 * @description หน่วยประมวลผลกลางที่ตัดสินใจเลือก UI Engine ตามค่า templateSlug แบบ Type-Safe
 */
const TemplateRenderer = ({ data, _source = "service" }: TemplateRendererProps) => {
  // [LOGIC]: Mapping Slug เข้ากับ Component ผ่าน useMemo เพื่อรักษา Rendering Performance
  const ActiveTemplate = useMemo(() => {
    const slug = data.templateSlug;

    switch (slug) {
      case "salepage":
        return SalePage;
      case "catalog":
        return CatalogPage;
      case "corporate":
        return CorporatePage;
      case "bio":
        return BioLinkPage;
      case "local-authority":
        return LocalAuthorityPage;
      case "seo-agency":
        return SeoAgencyPage;
      case "hotelresort":
        return HotelResortPage;
      case "local":
        return LocalAuthorityPage;
      default:
        console.warn(
          `[SYSTEM_ALERT]: Template slug "${slug}" not found. Falling back to Corporate.`,
        );
        return CorporatePage;
    }
  }, [data.templateSlug]);

  /**
   * [CLEAN_UP]:
   * [FIXED]: เปลี่ยนจาก data as any เป็นการระบุ Intersection Type (TemplateMasterData & AreaNode)
   * เพื่อความปลอดภัยของข้อมูล (Type Safety) และผ่านกฎ @typescript-eslint/no-explicit-any
   */
  return <ActiveTemplate data={data as TemplateMasterData & AreaNode} />;
};

export default TemplateRenderer;
