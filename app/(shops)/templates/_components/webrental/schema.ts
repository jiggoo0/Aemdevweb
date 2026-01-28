/** @format */
import { SEOContract } from "../../_contracts/seo"

/**
 * WebRentalData - โครงสร้างชุดข้อมูลสำหรับแผนงานเช่าเว็บไซต์รายปี/รายเดือน
 * แนวคิด: เน้นความโปร่งใสของราคา ความคุ้มค่า และโชว์ประสิทธิภาพของระบบที่โหลดไวระดับปีศาจ
 * มาตรฐาน: Next.js 16 | LCP < 0.8s | SEO-First DNA
 */
export interface WebRentalData extends SEOContract {
  /** ส่วนเมนูและการนำทาง (Navigation): ออกแบบให้เข้าถึงง่ายและปิดการขายไว */
  navigation: {
    logo: string
    links: { label: string; href: string }[]
    /** ปุ่มดำเนินการหลักที่เน้นการปิดการขาย */
    cta: string
  }

  /** ส่วนหัวของหน้าเว็บ (Hero Section): พื้นที่มัดใจลูกค้าในเสี้ยววินาที */
  hero: {
    /** ข้อความกำกับขนาดเล็กเพื่อระบุกลุ่มเป้าหมายหรือสถานะโปรโมชัน */
    badge: string
    title: string
    highlight: string
    description: string
    /** ข้อความกำกับราคา (เช่น 'เริ่มต้นเพียง') */
    priceLabel: string
    /** ตัวเลขงบประมาณที่ลูกค้าต้องจ่ายจริง */
    priceValue: string
    bgImage: string
  }

  /** ส่วนทำความเข้าใจปัญหาและจุดที่ต้องการแก้ไข (Pain Points)
   * แสดงให้ลูกค้าเห็นว่าเราเข้าใจปัญหาของ SME ยุค 2026 อย่างแท้จริง
   */
  painPoints: {
    title: string
    items: {
      icon: string
      title: string
      desc: string
    }[]
  }

  /** รายการจุดเด่นและมาตรฐานของระบบงาน (Feature List)
   * เน้นย้ำสิ่งที่ลูกค้าจะได้รับ เช่น ความเร็วและการติดอันดับบน Google
   */
  features: {
    title: string
    list: {
      icon: string
      title: string
      desc: string
    }[]
  }

  /** ตัวอย่างแบบเว็บไซต์ที่พร้อมเปิดใช้งาน (Showcase) */
  showcase: {
    title: string
    description: string
    templates: {
      name: string
      category: string
      image: string
    }[]
  }

  /** รายละเอียดแพ็กเกจราคาและค่าบริการ (Pricing Tiers) */
  pricing: {
    title: string
    tiers: {
      name: string
      price: string
      /** กำหนดเป็นแพ็กเกจที่แนะนำเป็นพิเศษ */
      isPopular?: boolean
      features: string[]
      buttonText: string
    }[]
  }

  /** ข้อมูลสรุปส่วนท้ายและการติดต่อ (Footer) */
  footer: {
    brand: string
    tagline: string
    contact: {
      phone: string
      line: string
    }
  }
}
