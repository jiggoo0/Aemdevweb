/** @format */

// พิกัดข้อมูล: types/template.ts
// หน้าที่: กำหนดโครงสร้างคลังชุดระบบ (Marketplace Templates)
// มาตรฐาน: Ultra-Deep Level 7 | Immutable Node

import { JsonLdData } from "./index";

/**
 * 1. TemplateCategory: พิกัดหมวดหมู่ระบบงาน
 */
export type TemplateCategory =
  | "Digital"
  | "ReadyMade"
  | "Business"
  | "Hotel"
  | "Service"
  | "Marketing"
  | "Ecommerce"
  | "Platform"
  | "Rental";

/**
 * 2. SEOContract: สัญญาข้อมูลการค้นหา (Strategic Search Contract)
 */
export interface SEOContract {
  readonly title: string;
  readonly description: string;
  readonly keywords?: readonly string[];
  readonly ogImage?: string;
  readonly canonical?: string;
  /**
   * structuredData: ข้อมูลโครงสร้างเพื่อการค้นหาผ่านระบบ AI Search
   * [FIXED]: เปลี่ยนจาก Record<string, unknown> เป็น JsonLdData เพื่อความแม่นยำ
   */
  readonly structuredData?: JsonLdData;
}

/**
 * 3. TemplateMetadata: พิกัดข้อมูลพื้นฐานสำหรับการแสดงผลและการ์ด
 */
export interface TemplateMetadata {
  readonly id: string;
  readonly slug: string;
  readonly name: string;
  readonly category: TemplateCategory;
  readonly thumbnail: string;
  readonly description?: string;
  readonly pricePrefix?: string;
  /** priceValue: พิกัดราคาตัวเลขสำหรับแผนงานจัดการคำนวณ (Number) */
  readonly priceValue: number;
  /** priceLabel: พิกัดราคาสำหรับแสดงผลหน้าเว็บ (เช่น "1,990") */
  readonly priceLabel: string;
  readonly isNew?: boolean;
  /** isFeatured: พิกัดสำหรับคัดเลือกหน่วยงานขึ้นหน้าแรก */
  readonly isFeatured?: boolean;
}

/**
 * 4. TemplateContent: พิกัดเนื้อหาเชิงลึกระดับประสิทธิภาพ
 */
export interface TemplateContent {
  readonly title: string;
  readonly description: string;
  readonly body: string;
  readonly performance: {
    readonly lcp: string;
    readonly seo: string;
    readonly stability: string;
  };
  readonly features?: readonly string[];
}

/**
 * 5. TemplateMasterData: สัญญาข้อมูลรวมระบบ (Root Node)
 */
export interface TemplateMasterData {
  readonly seo: SEOContract;
  readonly metadata: TemplateMetadata;
  readonly content: TemplateContent;
}
