/** @format */
import dynamic from "next/dynamic"

// ✅ ใช้ Dynamic Import (Optional) หรือ Direct Import สำหรับ Production
// เพื่อลด Bundle Size และป้องกันปัญหาการโหลดที่ผิดพลาด
import StarterVariant from "./variants/starter/StarterVariant"
import CafeVariant from "./variants/cafe/CafeVariant"
import ClinicVariant from "./variants/clinic/ClinicVariant"
import ConstructionVariant from "./variants/construction/ConstructionVariant"
import RealEstateVariant from "./variants/real-estate/RealEstateVariant"

/**
 * 🎯 Template Registry
 * ศูนย์รวม Variant ทั้งหมดของระบบ Landing Page
 */
export const registry = {
  starter: StarterVariant,
  cafe: CafeVariant,
  clinic: ClinicVariant,
  construction: ConstructionVariant,
  "real-estate": RealEstateVariant,
} as const

export type VariantType = keyof typeof registry
