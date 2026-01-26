/** @format */
import { SEOContract } from "../../_contracts/seo"

export interface WebRentalData extends SEOContract {
  navigation: {
    logo: string
    links: { label: string; href: string }[]
    cta: string // ปุ่มติดต่อเรา/สมัคร
  }
  hero: {
    badge: string // เช่น "BEST FOR SME"
    title: string
    highlight: string
    description: string
    priceLabel: string // "เริ่มต้นเพียง"
    priceValue: string // "590"
    bgImage: string
  }
  painPoints: {
    // เปรียบเทียบให้เห็นภาพ
    title: string
    items: { icon: string; title: string; desc: string }[]
  }
  features: {
    // สิ่งที่ลูกค้าจะได้ (ความคุ้มค่า)
    title: string
    list: { icon: string; title: string; desc: string }[]
  }
  showcase: {
    // ตัวอย่างเทมเพลตที่มีให้เลือก
    title: string
    description: string
    templates: { name: string; category: string; image: string }[]
  }
  pricing: {
    // แพ็กเกจรายเดือน
    title: string
    tiers: {
      name: string
      price: string
      isPopular?: boolean
      features: string[]
      buttonText: string
    }[]
  }
  footer: {
    brand: string
    tagline: string
    contact: { phone: string; line: string }
  }
}
