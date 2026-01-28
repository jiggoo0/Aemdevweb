/** @format */

import { SEOContract } from "../../_contracts/seo"

/**
 * CorporateProData - โครงสร้างข้อมูลสำหรับแบบเว็บไซต์ธุรกิจรุ่นท็อป (Pro Edition)
 * แนวคิด: เน้นความภูมิฐานสูงสุด โชว์ผลลัพธ์ที่จับต้องได้จริง และโหลดไวระดับปีศาจ
 * มาตรฐาน: Next.js 16 & High-Conversion Architecture
 */
export interface CorporateProData extends SEOContract {
  /** ส่วนแถบเมนู: ออกแบบให้เรียบง่ายแต่นำทางลูกค้าไปยังจุดสำคัญได้แม่นยำ */
  navigation: {
    logo: string
    links: { label: string; href: string }[]
    /** ปุ่มปิดการขายที่ต้องโดดเด่นที่สุดในหน้าเว็บ */
    cta: string
  }

  /** ส่วนหัวเว็บไซต์ (Hero): พื้นที่หยุดสายตาเพื่อเปลี่ยนคนดูให้กลายเป็นคู่ค้า */
  hero: {
    /** ข้อความกำกับขนาดเล็กด้านบนหัวข้อหลัก */
    badge: string
    title: string
    /** คำสั้นๆ ที่ต้องการเน้นให้เด่นเป็นพิเศษ */
    highlight: string
    description: string
    /** ปุ่มดำเนินการหลัก (Primary Action) */
    primaryCTA: string
    /** ปุ่มข้อมูลเพิ่มเติม (Secondary Action) */
    secondaryCTA: string
  }

  /** ส่วนตัวเลขความสำเร็จ: โชว์สถิติที่พิสูจน์ความเชี่ยวชาญของธุรกิจ */
  stats: {
    label: string
    value: string
    /** หน่วยนับ เช่น +, %, หรือ ราย */
    suffix: string
  }[]

  /** รายการบริการ: อธิบายสิ่งที่ธุรกิจมอบให้ลูกค้าอย่างมืออาชีพและเข้าใจง่าย */
  services: {
    title: string
    subtitle: string
    /** รายละเอียดของงานแต่ละด้าน */
    items: {
      title: string
      desc: string
      /** ชื่อไอคอนจากชุด Lucide React (เช่น 'Zap', 'Target') */
      icon: string
    }[]
  }

  /** ส่วนจัดแสดงโครงการ (Showcase): พิสูจน์ด้วยผลงานจริงที่ทำสำเร็จมาแล้ว */
  showcase: {
    title: string
    description: string
    /** รายการตัวอย่างงานหรือลูกค้าที่ผ่านมา */
    items: {
      title: string
      category: string
      image: string
    }[]
  }
}
