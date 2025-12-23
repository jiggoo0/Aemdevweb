/** @format */
import { Metadata } from "next"
import { siteConfig } from "@/config/siteConfig"

// Export metadata สำหรับ Next.js App Router
export const metadata: Metadata = {
  title: `บริการและราคา | ${siteConfig.name}`,
  description:
    "รับทำเว็บไซต์สำหรับ SME เริ่มต้น 3,900.- ครบทั้งคลินิก ร้านอาหาร และอสังหาฯ โหลดไวด้วย Next.js 15 ดีไซน์ Industrial Sharp ดูแลหลังการขายแบบพาร์ทเนอร์",
}

// Export client component แยกไฟล์
export { default } from "./ServicesPageClient"
