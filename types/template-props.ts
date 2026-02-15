/**
 * [SYSTEM CORE]: TEMPLATE_PROPS_ENGINE v17.9.135 (ULTIMATE_STABLE)
 * [STRATEGY]: Universal Adapter Pattern | P-SEO Trust Injection | Type Sync
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type {
  IconName,
  ServiceFeature,
  ServiceFaq,
  ThemeConfig,
  CatalogItem,
  LocalContext,
  TemplateSlug,
} from "./index";

// =========================================
// [01] UI ACTION SCHEMAS
// =========================================

/** * [STRICT]: มาตรฐานปุ่มกดและการนำทางทั่วทั้งระบบ
 * รองรับการฉีด Variant เพื่อกำหนดสไตล์ (Button Variants)
 */
export interface TemplateAction {
  readonly label: string;
  readonly href: string;
  readonly icon?: IconName;
  readonly variant?: "default" | "outline" | "ghost" | "link" | "brand";
}

// =========================================
// [02] UNIVERSAL TEMPLATE CONTRACT (THE BRIDGE)
// =========================================

/**
 * [STRATEGIC]: Bridge Interface สำหรับ Data Normalization
 * ทำหน้าที่รวม Master Data และ Area Nodes ให้เป็นก้อนเดียวที่ TemplateRenderer เข้าใจ
 */
export interface UniversalTemplateProps {
  // --- Core Identity ---
  readonly id: string;
  readonly templateSlug: TemplateSlug;
  readonly category: string;
  readonly title: string;
  readonly description: string;
  readonly image?: string;
  readonly priority: number;

  // --- Commercial & Metadata ---
  readonly price: string;
  readonly priceValue: number;
  readonly unit: string;
  readonly currency: string;

  // --- Data Clusters (Normalized) ---
  readonly benefits: readonly string[];
  readonly coreFeatures: readonly ServiceFeature[];
  readonly faqs: readonly ServiceFaq[];
  readonly keywords: readonly string[];

  /** [STABLE]: รายการสินค้า/บริการย่อยสำหรับ Catalog หรือหน้ารวมบริการ */
  readonly items?: readonly CatalogItem[];

  // --- [TRUST_SIGNAL_INJECTION]: ข้อมูลถูกฉีด Dynamic จาก Data Merger ---
  readonly clientTrust?: string;
  readonly socialProof?: LocalContext["socialProof"];
  readonly regionalPricing?: LocalContext["regionalPricing"];

  /** [FIXED]: ปิด Error TS2339 ใน HotelResort และ Corporate Templates */
  readonly localSuccessStory?: LocalContext["localSuccessStory"];

  /** [FIXED]: ข้อมูลบริบทพื้นที่เต็มรูปแบบสำหรับ Area Node */
  readonly localContext?: LocalContext;

  // --- Strategic UI Elements ---
  readonly primaryAction: TemplateAction;
  readonly secondaryAction?: TemplateAction;

  // --- Visual Metadata (SSOT Theme) ---
  readonly theme: ThemeConfig; // [STRICT]: บังคับมีค่าหลังจากการ Merge ข้อมูล
}

// =========================================
// [03] COMPONENT PROPS (STRICT TYPING)
// =========================================

/** [CORE]: อินเทอร์เฟซพื้นฐานสำหรับทุก Template Component */
export interface BaseTemplateProps {
  readonly data: UniversalTemplateProps;
  readonly suppressUI?: boolean;
}

/** * [CLEANUP_NOTICE]: 
 * ส่วนประกอบย่อย (Aliases & Atomic Props) ถูกนำออกชั่วคราวตาม Zero-Unused Policy
 * เพื่อลด Bundle Size และป้องกัน Linter Warning ในระบบ Mobile-Dev
 * * [RECOVERY_PATH]:
 * หากต้องการเพิ่มหน้าใหม่ (New Template) สามารถประกาศเฉพาะจุดที่ใช้งานจริง
 * ในไฟล์ Component นั้นๆ หรือเพิ่มกลับมาที่นี่หากมีการใช้ซ้ำ (Reuse) มากกว่า 2 จุด
 */
