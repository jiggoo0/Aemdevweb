/** @format */

import { SEOContract } from "../../_contracts/seo"

/**
 * StarterLandingData - โครงสร้างข้อมูลสำหรับหน้า Landing Page รุ่นเริ่มต้น
 * แนวคิด: เรียบง่าย ทรงพลัง เน้นการแสดงผลที่ไวที่สุดเพื่อปิดการขายทันที
 * มาตรฐาน: Next.js 16 & Performance First (LCP < 0.8s)
 */
export interface StarterLandingData extends SEOContract {
  /** ส่วนแถบนำทาง: ออกแบบให้ลูกค้าหาจุดสั่งซื้อหรือติดต่อได้ทันใจ */
  navigation: {
    /** ชื่อแบรนด์หรือโลโก้ทีมงาน */
    logo: string
    /** ปุ่มดำเนินการหลัก (เช่น 'เริ่มงานกับเรา' หรือ 'จองสิทธิ์ด่วน') */
    cta: string
  }

  /** ส่วนหัวเว็บไซต์ (Hero): พื้นที่หยุดสายตาด้วยข้อเสนอที่คุ้มค่าที่สุด */
  hero: {
    /** ข้อความกำกับขนาดเล็กเพื่อสร้างความน่าสนใจ */
    badge: string
    title: string
    /** คำสำคัญที่ต้องการเน้นให้เด่นเป็นพิเศษ */
    highlight: string
    description: string
  }

  /** รายการจุดเด่น (Highlights): อธิบายจุดขายหลักที่ลูกค้าจะได้รับ */
  highlights: {
    items: {
      /** ชื่อไอคอนจากชุด Lucide React */
      icon: string
      title: string
      desc: string
    }[]
  }

  /** ส่วนท้ายเว็บไซต์ (Footer): ข้อมูลสรุปและช่องทางเพิ่มเติม */
  footer: {
    /** ข้อความลิขสิทธิ์หรือสโลแกนปิดท้าย */
    copy: string
    /** ลิงก์ช่องทางติดต่อหรือข้อมูลสำคัญ */
    link: string
  }
}
