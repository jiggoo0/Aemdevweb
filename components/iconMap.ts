/** @format */
import {
  Stethoscope,
  Coffee,
  Home,
  HardHat,
  Rocket,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

/**
 * 🗺️ Central Icon Map
 * ใช้ 'as const' เพื่อให้ TypeScript จดจำค่า Key ที่แน่นอน
 */
export const iconMap = {
  MEDICAL: Stethoscope,
  CAFE: Coffee,
  PROPERTY: Home,
  CONSTRUCTION: HardHat,
  STARTER: Rocket,
  ARROW_RIGHT: ArrowRight,
  CHECK: CheckCircle2,
} as const

/**
 * ✅ Export IconKey Type
 * แก้ไข Error: Module '"@/components/iconMap"' has no exported member 'IconKey'
 * สิ่งนี้จะช่วยให้หน้า Services.tsx รู้ว่าต้องรับค่าเฉพาะ "MEDICAL" | "CAFE" | ... เท่านั้น
 */
export type IconKey = keyof typeof iconMap
