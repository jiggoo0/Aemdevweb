/** @format */

import { SEOContract } from "../../_contracts/seo"

/**
 * FacebookAdsData - โครงสร้างพิกัดข้อมูลสำหรับระบบหน้าเว็บสายยิงแอด
 * แนวคิด: เน้นการหยุดนิ้วลูกค้าและเปลี่ยนคนดูให้เป็นพิกัดยอดขายทันที
 * มาตรฐาน: Next.js 16 & Performance First
 */
export interface FacebookAdsData extends SEOContract {
  /** ส่วนแถบนำทาง (Navigation): พิกัดข้อมูลที่ใช้บนเมนูหน้าเว็บ */
  navigation: {
    logo: string
    cta: string
  }

  /** ส่วนหัวของระบบงาน (Hero): พิกัดแรกในการหยุดลูกค้า */
  hero: {
    badge: string
    title: string
    /** [FIX]: เพิ่มพิกัด highlight เพื่อล้าง Error TS2339 */
    highlight: string
    description: string
    /** ปุ่มดำเนินการในพิกัด Hero */
    cta: string
  }

  /** [FIX]: เพิ่มก้อน highlights เพื่อรองรับลูปการแสดงผลในหน้าเว็บจริง */
  highlights: {
    items: {
      icon: string
      title: string
      desc: string
    }[]
  }

  /** ส่วนแสดงพิกัดผลลัพธ์ (Stats): ขยี้ตัวเลขที่พิสูจน์ความแม่นยำของแผนงาน */
  stats: {
    label: string
    value: string
    subValue: string
  }[]

  /** แผนการทำงาน (Strategy): ลำดับพิกัดงานที่ทำให้ลูกค้ามั่นใจ */
  strategy: {
    step: string
    title: string
    desc: string
  }[]

  /** พิกัดข้อมูลการติดต่อ (Footer) */
  footer?: {
    companyName: string
    contactLine: string
    phone?: string
    copy: string
    link: string
  }
}
