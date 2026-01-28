/** @format */

import { SEOContract } from "../../_contracts/seo"

/**
 * SalePageData - โครงสร้างข้อมูลสำหรับหน้าขายสินค้าหน้าเดียว (Landing Page)
 * แนวคิด: เน้นการปิดการขายที่รวดเร็ว ขยี้จุดเด่นให้ชัดเจน และโหลดไวระดับเสี้ยววินาที
 * มาตรฐาน: Next.js 16 & High-Conversion Flow
 */
export interface SalePageData extends SEOContract {
  /** ส่วนแถบเมนูและการนำทาง: ออกแบบให้ลูกค้าเห็นปุ่มสั่งซื้อชัดที่สุด */
  navigation: {
    /** ชื่อแบรนด์หรือโลโก้สินค้า */
    logo: string
    /** ปุ่มดำเนินการหลัก (เช่น 'สั่งซื้อเลย' หรือ 'รับสิทธิ์พิเศษ') */
    cta: string
  }

  /** ส่วนหัวเว็บไซต์ (Hero): พื้นที่หยุดสายตาเพื่อเปลี่ยนคนดูให้กลายเป็นลูกค้า */
  hero: {
    /** ข้อความกำกับขนาดเล็กด้านบนหัวข้อหลัก */
    badge: string
    title: string
    /** คำสำคัญที่ต้องการเน้นให้เด่นเป็นพิเศษ */
    highlight: string
    description: string
    /** รูปภาพสินค้าที่ต้องสวยสะดุดตา (แนะนำไฟล์ .webp) */
    image?: string
  }

  /** รายการจุดเด่นและประโยชน์: อธิบายว่าทำไมลูกค้าต้องเลือกสินค้าชิ้นนี้ */
  benefits: {
    title: string
    /** รายละเอียดของจุดเด่นแต่ละข้อ */
    items: {
      /** ชื่อไอคอนจากชุด Lucide React */
      icon: string
      title: string
      desc: string
    }[]
  }

  /** ส่วนปิดการขาย (CTA Section): กระตุ้นการตัดสินใจในขั้นตอนสุดท้าย */
  ctaSection: {
    title: string
    /** ข้อความบนปุ่มสั่งซื้อขนาดใหญ่ */
    buttonText: string
    /** คำอธิบายเพิ่มเติมใต้ปุ่ม (เช่น 'ส่งฟรี' หรือ 'มีจำนวนจำกัด') */
    subText?: string
  }
}
