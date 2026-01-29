// @format
// พิกัดข้อมูล: lib/seo.ts
// หน้าที่: จัดการพิกัดข้อมูลบริการ SEO และระบุประเภทข้อมูลที่แม่นยำ (Strict Typing)
// ควบคุมระบบโดย: นายเอ็มซ่ามากส์

import { seoServicesData } from "@/constants/seo-services";
import { SeoServiceItem } from "@/types/seo";

/**
 * [TYPE-SAFETY FIX]: ค้นหาข้อมูลบริการ SEO ผ่านพิกัด Slug
 * หน้าที่: กำจัดจุด Warning 'any' โดยการระบุประเภทข้อมูล SeoServiceItem อย่างชัดเจน
 */
export function getSeoServiceBySlug(slug: string): SeoServiceItem | undefined {
  if (!slug) return undefined;
  // ใช้การเปรียบเทียบพิกัด Slug เพื่อดึงชุดข้อมูลที่ถูกต้อง
  return seoServicesData.find((service) => service.slug === slug);
}

/**
 * [GENERATOR]: ดึงรายการพิกัด Slug ทั้งหมด
 * หน้าที่: ใช้สำหรับระบบเตรียมหน้าเว็บล่วงหน้า (SSG) ในพิกัด generateStaticParams
 * รองรับมาตรฐาน Next.js 16 (App Router)
 */
export function getAllSeoSlugs(): string[] {
  return seoServicesData.map((service) => service.slug);
}

/**
 * [MAPPING]: ระบบจัดการพิกัดรูปภาพอัตโนมัติ
 * หน้าที่: ระบุตำแหน่งไฟล์ภาพสื่อสารแบรนด์ใน public/images/seo/[slug].webp
 */
export function getSeoImagePath(slug: string): string {
  // ตรวจสอบความถูกต้องของพิกัดไฟล์ภาพเพื่อให้สอดคล้องกับโครงสร้างระบบระดับ 7
  return `/images/seo/${slug}.webp`;
}

/**
 * [VALIDATOR]: ตรวจสอบสถานะความมีอยู่ของพิกัดบริการ
 */
export function isSeoServiceExist(slug: string): boolean {
  return seoServicesData.some((service) => service.slug === slug);
}

/**
 * [FILTER]: ดึงรายการบริการยอดนิยม (Recommended Services)
 * หน้าที่: กรองข้อมูลเฉพาะบริการที่ นายเอ็มซ่ามากส์ กำหนดเป็นพิกัดยอดนิยม
 */
export function getPopularSeoServices(): SeoServiceItem[] {
  return seoServicesData.filter((service) => service.pricing.isPopular);
}
