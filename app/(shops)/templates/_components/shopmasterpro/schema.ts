/** @format */

import { SEOContract } from "../../_contracts/seo"

/**
 * ShopMasterData: ชุดพิกัดข้อมูลสำหรับระบบ ShopMasterPro
 * ทำหน้าที่ควบคุมเนื้อหาทั้งหมดภายในเทมเพลต ตั้งแต่ส่วนนำทางจนถึงส่วนท้าย
 * แนวทาง: จัดลำดับข้อมูลให้เป็นระเบียบ เพื่อให้ระบบเรนเดอร์ทำงานได้ลื่นไหล
 */
export interface ShopMasterData extends SEOContract {
  // 1. พิกัดส่วนนำทาง (Navigation Hub)
  navigation: {
    logo: string
    links: { label: string; href: string }[]
    cartCount: number
  }

  // 2. พิกัดส่วนหัวเว็บไซต์ (Hero Section)
  hero: {
    title: string
    description: string
    cta: string
    image: string
  }

  // 3. พิกัดหมวดหมู่สินค้า (Category Grid)
  categories: {
    name: string
    image: string
    count: string
  }[]

  // 4. พิกัดข้อมูลสินค้าหลัก (Product Registry)
  products: {
    name: string
    price: string
    originalPrice?: string
    tag?: string
    image: string
    rating: number
  }[]

  // 5. พิกัดจุดเด่นและบริการ (Business Benefits)
  benefits: {
    title: string
    desc: string
  }[]

  // 6. พิกัดส่วนท้ายและช่องทางการติดต่อ (Footer & Contact)
  footer: {
    description: string
    contact: {
      phone: string
      line: string
      email: string
    }
    payments: string[]
  }
}
