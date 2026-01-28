/** @format */

import { SEOContract } from "../../_contracts/seo"

/**
 * LocalServiceData - โครงสร้างข้อมูลสำหรับแบบเว็บไซต์ธุรกิจท้องถิ่น
 * แนวคิด: เน้นความไวในการติดต่อ โชว์จุดเด่นงานบริการ และเข้าถึงง่ายในพื้นที่
 * มาตรฐาน: Next.js 16 & SEO-First Content
 */
export interface LocalServiceData extends SEOContract {
  /** ส่วนเมนูและการนำทาง: ออกแบบให้ลูกค้าหาปุ่มติดต่อได้ง่ายที่สุด */
  navigation: {
    /** ชื่อร้านหรือชื่อธุรกิจของคุณ */
    logo: string
    /** รายการลิงก์ภายในหน้าเว็บ */
    links: { label: string; href: string }[]
    /** ปุ่มดำเนินการหลัก เช่น 'โทรเลย' หรือ 'ทักแชท' */
    cta: string
  }

  /** ส่วนหัวเว็บไซต์ (Hero): ดึงดูดสายตาด้วยข้อเสนอและรูปภาพงานบริการจริง */
  hero: {
    /** ข้อความกำกับขนาดเล็กเพื่อสร้างความมั่นใจ */
    badge: string
    title: string
    /** คำสำคัญที่ต้องการเน้นเป็นพิเศษ */
    highlight: string
    description: string
    /** รูปภาพประกอบงานบริการที่ดูเป็นกันเองและเป็นมืออาชีพ */
    image: string
  }

  /** รายการงานบริการ: อธิบายสิ่งที่คุณทำให้ลูกค้าอย่างชัดเจน */
  services: {
    title: string
    /** รายละเอียดงานแต่ละด้าน */
    items: {
      title: string
      desc: string
      /** ชื่อไอคอนที่ใช้สื่อความหมาย (อ้างอิงชุด Lucide React) */
      icon: string
    }[]
  }

  /** ส่วนข้อมูลการติดต่อ: หัวใจสำคัญของธุรกิจท้องถิ่นเพื่อให้ลูกค้ามาหาถูก */
  contact: {
    title: string
    /** ที่ตั้งร้านหรือพื้นที่ให้บริการ */
    address: string
    phone: string
    email: string
    /** ลิงก์แผนที่ Google Maps เพื่อให้นำทางได้ทันที */
    mapUrl: string
    /** ช่องทางออนไลน์ที่ลูกค้าถนัด (Line / Facebook) */
    socials?: {
      line?: string
      facebook?: string
    }
  }
}
