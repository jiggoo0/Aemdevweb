// @format
// พิกัดข้อมูล: app/(seo)/seo/_registry.tsx
// หน้าที่: ลงทะเบียนและควบคุมการดึงพิกัดคอมโพเนนต์บริการ SEO แบบ Dynamic
// มาตรฐาน: Next.js 16 (App Router) | Ultra-Deep Level 7 (Strict Typing)
// ควบคุมระบบโดย: นายเอ็มซ่ามากส์

import dynamic from "next/dynamic";
import { ComponentType } from "react";
import { SeoServiceItem } from "@/types/seo";

/**
 * [INTERFACE]: กำหนดรูปแบบ Props สำหรับคอมโพเนนต์ในระบบ SEO
 * หน้าที่: กำจัดจุด Warning 'any' เพื่อให้ระบบ Type Check ทำงานสมบูรณ์ 100%
 */
interface SeoComponentProps {
  data: SeoServiceItem;
}

// [DYNAMIC IMPORTS]: โหลดพิกัดข้อมูลเฉพาะเมื่อมีการเรียกใช้งานเพื่อรีดประสิทธิภาพสูงสุด
const TechnicalAudit = dynamic(() => import("./_components/technical-structure-audit"));
const SpeedVitals = dynamic(() => import("./_components/core-web-vitals-speed"));
const EntityAuth = dynamic(() => import("./_components/entity-local-authority"));
const AdvancedSchema = dynamic(() => import("./_components/advanced-schema-markup"));
const EcommerceSeo = dynamic(() => import("./_components/ecommerce-conversion-seo"));

/**
 * [FALLBACK]: ระบบแสดงผลกรณีไม่พบพิกัดพาร์ทเนอร์บริการที่ระบุ
 */
const NotFoundComponent = ({ data }: SeoComponentProps) => (
  <div className="flex min-h-[400px] flex-col items-center justify-center py-20 text-center">
    <h2 className="text-2xl font-black text-[oklch(0.2_0.02_260)] italic uppercase dark:text-[oklch(0.95_0.01_260)]">
      Registry Point Missing.
    </h2>
    <p className="mt-2 text-[oklch(0.45_0.02_260)]">
      ไม่พบพิกัดคอมโพเนนต์สำหรับพิกัด Slug: {data.slug}
    </p>
  </div>
);

/**
 * [REGISTRY]: ตัวควบคุมพิกัดบริการหลัก (Main Controller)
 * หน้าที่: จับคู่ Slug จาก URL เข้ากับคอมโพเนนต์ที่ลงทะเบียนไว้
 */
export const SE_SERVICE_REGISTRY: Record<string, ComponentType<SeoComponentProps>> = {
  "technical-structure-audit": TechnicalAudit,
  "core-web-vitals-speed": SpeedVitals,
  "entity-local-authority": EntityAuth,
  "advanced-schema-markup": AdvancedSchema,
  "ecommerce-conversion-seo": EcommerceSeo,
};

/**
 * [DISPATCHER]: ฟังก์ชันดึงพิกัดคอมโพเนนต์
 */
export function getSeoComponent(slug: string) {
  return SE_SERVICE_REGISTRY[slug] || NotFoundComponent;
}
