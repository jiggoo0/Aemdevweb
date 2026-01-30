// @format
// พิกัดข้อมูล: app/(seo)/seo/_registry.tsx
// หน้าที่: ลงทะเบียนและควบคุมการดึงพิกัดคอมโพเนนต์บริการ SEO แบบ Dynamic
// มาตรฐาน: Next.js 16 | Tailwind 4 (OKLCH) | Ultra-Deep Level 7
// ควบคุมระบบโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)

import dynamic from "next/dynamic"
import { ComponentType } from "react"
import { SeoServiceItem } from "@/types/seo"

/**
 * [INTERFACE]: รูปแบบ Props สำหรับคอมโพเนนต์ลูกในพิกัด SEO
 * หน้าที่: บังคับใช้ Strict Typing เพื่อความเสถียรของโหนดข้อมูล
 */
interface SeoComponentProps {
  data: SeoServiceItem
}

/**
 * [DYNAMIC IMPORTS]: Code Splitting Protocol
 * โหลดคอมโพเนนต์เฉพาะเมื่อมีการเรียกใช้ (On-demand)
 * เพื่อลดขนาด Bundle Size และเพิ่มความเร็วการแสดงผลครั้งแรก
 */
const TechnicalAudit = dynamic(
  () => import("./_components/technical-structure-audit")
)
const SpeedVitals = dynamic(() => import("./_components/core-web-vitals-speed"))
const EntityAuth = dynamic(() => import("./_components/entity-local-authority"))
const AdvancedSchema = dynamic(
  () => import("./_components/advanced-schema-markup")
)
const EcommerceSeo = dynamic(
  () => import("./_components/ecommerce-conversion-seo")
)

/**
 * [FALLBACK COMPONENT]: ระบบแสดงผลกรณีพิกัดเชื่อมต่อขัดข้อง
 */
const NotFoundComponent = ({ data }: SeoComponentProps) => (
  <div className="flex min-h-[500px] flex-col items-center justify-center rounded-[3rem] border-2 border-dashed border-[oklch(0.9_0.02_260)] bg-[oklch(0.99_0.005_260)] p-12 text-center dark:border-[oklch(0.25_0.02_260)] dark:bg-[oklch(0.14_0.01_260)]">
    <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[oklch(0.95_0.02_260)] text-[oklch(0.6_0.2_20)] shadow-inner dark:bg-[oklch(0.2_0.02_260)]">
      <span className="text-4xl font-black italic">!</span>
    </div>
    <h2 className="text-3xl font-black tracking-tighter text-[oklch(0.2_0.02_260)] uppercase italic dark:text-white">
      Registry Node <span className="text-[oklch(0.6_0.2_20)]">Offline.</span>
    </h2>
    <p className="mx-auto mt-4 max-w-md leading-relaxed font-bold text-[oklch(0.45_0.02_260)]">
      ไม่พบพิกัดคอมโพเนนต์ที่ลงทะเบียนไว้สำหรับบริการ: <br />
      <span className="font-mono tracking-widest text-[oklch(0.6_0.2_20)] uppercase">
        {data.slug}
      </span>
    </p>
  </div>
)

/**
 * [REGISTRY MAPPING]: ทะเบียนพิกัดบริการหลัก (Central Dispatcher)
 * หน้าที่: ผูกพิกัด Slug จาก Master Data เข้ากับโมดูลการแสดงผล
 */
export const SE_SERVICE_REGISTRY: Record<
  string,
  ComponentType<SeoComponentProps>
> = {
  "technical-structure-audit": TechnicalAudit,
  "core-web-vitals-speed": SpeedVitals,
  "entity-local-authority": EntityAuth,
  "advanced-schema-markup": AdvancedSchema,
  "ecommerce-conversion-seo": EcommerceSeo,
}

/**
 * getSeoComponent: ฟังก์ชันสำหรับดึงพิกัดคอมโพเนนต์ตาม Slug
 * @param slug - กุญแจหลักจาก URL เพื่อใช้ค้นหาในทะเบียน
 */
export function getSeoComponent(slug: string) {
  const component = SE_SERVICE_REGISTRY[slug]

  if (!component) {
    console.error(`[AEM-REGISTRY]: Missing mapping for slug -> ${slug}`)
    return NotFoundComponent
  }

  return component
}
