/** @format */

import dynamic from "next/dynamic"
import { ComponentType } from "react"

/**
 * โครงสร้างพื้นฐานที่เทมเพลตต้องรองรับ
 * จัดการผ่านค่า Props เพื่อส่งข้อมูลจากไฟล์ data.ts เข้าสู่คอมโพเนนต์
 */
interface TemplateProps {
  // จุดเสี่ยง: การใช้ any อาจทำให้ Type Safety หลุด
  // แต่จำเป็นสำหรับก้อนข้อมูลเทมเพลตที่มีโครงสร้างต่างกันอย่างสิ้นเชิง
  data: any
}

/**
 * 1. ทะเบียนรายชื่อเทมเพลตทั้งหมดในระบบ
 * ใช้การโหลดแบบ Dynamic เพื่อทำ Code Splitting แยกไฟล์ JavaScript ตามหน้า
 * ช่วยรักษาค่า LCP ให้ต่ำกว่า 1 วินาที ลดภาระการโหลดข้อมูลที่ไม่จำเป็น
 */
export const TemplateRegistry: Record<string, ComponentType<TemplateProps>> = {
  // เทมเพลตกลุ่มโรงแรมและรีสอร์ท
  hotelresort: dynamic(() =>
    import("@/app/(marketing)/templates/_components/hotelresort").then(
      (mod) => mod.HotelResortTemplate
    )
  ),

  // เทมเพลตกลุ่มงานบริการทำความสะอาด
  cleaningpro: dynamic(() =>
    import("@/app/(marketing)/templates/_components/cleaningpro").then(
      (mod) => mod.CleaningProTemplate
    )
  ),

  // เทมเพลตกลุ่มผู้เชี่ยวชาญโฆษณา Facebook
  facebookadsexpert: dynamic(() =>
    import("@/app/(marketing)/templates/_components/facebookadsexpert").then(
      (mod) => mod.FacebookAdsTemplate
    )
  ),

  // เทมเพลตกลุ่มระบบจัดการร้านค้าออนไลน์
  shopmasterpro: dynamic(() =>
    import("@/app/(marketing)/templates/_components/shopmasterpro").then(
      (mod) => mod.ShopMasterTemplate
    )
  ),
}

/**
 * 2. ฟังก์ชันดึงชุดแสดงผลไปใช้งาน
 * ใช้ในระดับ page.tsx เพื่อความปลอดภัยในการดึงข้อมูลและจัดการสถานะไม่พบข้อมูล (not-found)
 */
export const getTemplateComponent = (id: string) => {
  return TemplateRegistry[id] || null
}
