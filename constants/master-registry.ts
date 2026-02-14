/**
 * [MASTER REGISTRY]: MASTER_SERVICE_INDEX v17.9.107 (STABLE_RELEASE)
 * [STRATEGY]: Centralized Data Aggregation | Type-Safe Helper Export | SSG Core
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { TemplateMasterData } from "@/types";

// --- 1. Infrastructure: Import Individual Service Nodes ---
import { seoAgencyService } from "./services/seo-agency";
import { salePageService } from "./services/salepage";
import { corporateService } from "./services/corporate";
import { catalogService } from "./services/catalog";
import { hotelResortService } from "./services/hotel-resort";
import { bioService } from "./services/bio";
import { localAuthorityService } from "./services/local-authority";

/**
 * [REGISTRY]: คลังข้อมูลบริการหลัก (Master Database)
 * ทำหน้าที่เป็นหัวใจการเรนเดอร์สำหรับหน้า Hub และการสร้าง Static Paths
 * [LOGIC]: เรียงลำดับตาม Priority (0 = สูงสุด) เพื่อการแสดงผลที่กำหนดได้
 */
export const MASTER_REGISTRY: readonly TemplateMasterData[] = [
  seoAgencyService,
  salePageService,
  corporateService,
  catalogService,
  hotelResortService,
  bioService,
  localAuthorityService,
].sort((a, b) => a.priority - b.priority);

/**
 * [HELPER]: getServiceBySlug
 * @description ค้นหาข้อมูลบริการจาก URL Slug แบบ Type-Safe 
 * ใช้ในหน้า app/(sales)/services/[slug]/page.tsx
 */
export const getServiceBySlug = (slug: string): TemplateMasterData | undefined => {
  return MASTER_REGISTRY.find((service) => service.templateSlug === slug);
};

/**
 * [HELPER]: getFeaturedServices
 * @description ดึงรายการบริการที่ระบุเป็น 'Featured' (isFeatured: true)
 * ใช้สำหรับแสดงผลใน Section บริการหน้าแรก (Main Landing Page)
 */
export const getFeaturedServices = (): TemplateMasterData[] => {
  return MASTER_REGISTRY.filter((service) => service.isFeatured);
};

// [KNIP_HYGIENE]: getServicesByCategory ถูกถอดออกชั่วคราวเพื่อลด Unused Exports
// จะถูกเพิ่มกลับมาเมื่อมีการสร้างระบบ Filter ในหน้า Directory บริการ
