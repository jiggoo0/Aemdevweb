/** @format */

import { ShopMasterData } from "./schema"

/**
 * shopMasterData: ข้อมูลพิกัดหลักสำหรับเทมเพลต ShopMasterPro
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: เน้นการใช้คีย์เวิร์ด "เทมเพลตสำเร็จรูป พร้อมใช้งาน" เพื่อดึงดูด Organic Search
 * วางระบบและจูนสมรรถนะโดย: นายเอ็มซ่ามากส์ (อลงกรณ์ ยมเกิด)
 */
export const shopMasterData: ShopMasterData = {
  // [1. SEO STRATEGY]: พิกัดวางหมากเพื่อให้ Google เก็บข้อมูลได้แม่นยำที่สุด
  seo: {
    title:
      "เทมเพลตสำเร็จรูป พร้อมใช้งาน Shop Master Pro โดย นายเอ็มซ่ามากส์ | แรง ติดหน้าแรก | AEMDEVWEB",
    description:
      "เทมเพลตสำเร็จรูป พร้อมใช้งาน สำหรับร้านค้าออนไลน์ที่เน้นความแรงและผลลัพธ์ Organic Search วางโครงสร้างโดย นายเอ็มซ่ามากส์ เพื่อให้ธุรกิจของคุณนำหน้าคู่แข่งด้วยระบบที่เนี้ยบที่สุด",
    keywords: [
      "นายเอ็มซ่ามากส์",
      "เทมเพลตสำเร็จรูป พร้อมใช้งาน",
      "รับทำเว็บขายของออนไลน์พิกัดแรง",
      "AEMDEVWEB",
      "เว็บขายของติดหน้าแรก Google",
      "Nextjs Ecommerce Template โดยนายเอ็ม",
    ],
    ogImage: "/images/templates/shopmasterpro/shopmasterpro-og.webp",
  },

  // [2. NAVIGATION HUB]: ระบบนำทางพิกัดร้านค้าที่เข้าถึงง่าย
  navigation: {
    logo: "AEM.SHOP-MASTER",
    links: [
      { label: "สินค้าทั้งหมด", href: "#products" },
      { label: "พิกัดจุดเด่นระบบ", href: "#benefits" },
      { label: "ปรึกษานายเอ็ม", href: "#contact" },
    ],
    cartCount: 2,
  },

  // [3. HERO ENGINE]: ส่วนหัวเว็บไซต์ที่เน้นความรวดเร็วและความพร้อมใช้
  hero: {
    title: "เทมเพลตสำเร็จรูป พร้อมใช้งาน เพื่อยอดขายที่โตแบบพิกัดแรง",
    description:
      "หยุดเสียเวลากับระบบที่โหลดช้า นี่คือเทมเพลตสำเร็จรูป พร้อมใช้งาน ที่จูนโดย นายเอ็มซ่ามากส์ เพื่อการปิดการขายโดยเฉพาะ โหลดขึ้นทันใจใน 0.7 วินาที พร้อมลุยตลาดออนไลน์ได้ทันที",
    cta: "ดูพิกัดสินค้าพร้อมขาย",
    image: "/images/templates/shopmasterpro/shopmasterpro.webp",
  },

  // [4. CATEGORY NODES]: พิกัดหมวดหมู่สินค้าที่จัดระเบียบมาอย่างดี
  categories: [
    {
      name: "Electronics Specialist",
      image: "/images/templates/shopmasterpro/placeholder.webp",
      count: "120 รายการ",
    },
    {
      name: "Lifestyle Protocol",
      image: "/images/templates/shopmasterpro/placeholder.webp",
      count: "85 รายการ",
    },
    {
      name: "Gadgets Authority",
      image: "/images/templates/shopmasterpro/placeholder.webp",
      count: "45 รายการ",
    },
  ],

  // [5. PRODUCT REGISTRY]: รายการสินค้าเด่นที่ผ่านการจูนความน่าสนใจ
  products: [
    {
      name: "Smart Watch Series X",
      price: "2,900.-",
      originalPrice: "3,500.-",
      tag: "พิกัดขายดี",
      image: "/images/templates/shopmasterpro/placeholder.webp",
      rating: 5,
    },
    {
      name: "Wireless Headphones Pro",
      price: "4,500.-",
      tag: "มาใหม่พิกัดแรง",
      image: "/images/templates/shopmasterpro/placeholder.webp",
      rating: 4,
    },
    {
      name: "Minimalist Desk Lamp",
      price: "1,200.-",
      image: "/images/templates/shopmasterpro/placeholder.webp",
      rating: 5,
    },
    {
      name: "Portable Power Bank",
      price: "990.-",
      originalPrice: "1,290.-",
      image: "/images/templates/shopmasterpro/placeholder.webp",
      rating: 4,
    },
  ],

  // [6. SYSTEM BENEFITS]: ดัชนีความเหนือระดับของเทมเพลตสไตล์นายเอ็ม
  benefits: [
    {
      title: "Operational Ready Protocol",
      desc: "เทมเพลตสำเร็จรูป พร้อมใช้งาน ที่ลดระยะเวลาการทำงาน แค่เปลี่ยนข้อมูลพิกัดธุรกิจก็พร้อมเปิดร้านได้ทันที",
    },
    {
      title: "SEO Integrity Score 100",
      desc: "วางโครงสร้างโดย นายเอ็มซ่ามากส์ ผ่านเกณฑ์ความเร็วและความปลอดภัยของ Google เพื่ออันดับการค้นหาที่ดีเยี่ยม",
    },
    {
      title: "Responsive Connectivity",
      desc: "ไม่ว่าลูกค้าจะเข้าผ่านพิกัดหน้าจอไหน ระบบจะปรับสัดส่วนให้อัตโนมัติด้วยความเนี้ยบระดับพรีเมียมเสมอ",
    },
  ],

  // [7. STRATEGIC FOOTER]: ส่วนท้ายหน้าเว็บที่ยืนยันตัวตนผู้เชี่ยวชาญ
  footer: {
    description:
      "AEMDEVWEB โดย นายเอ็มซ่ามากส์ (อลงกรณ์ ยมเกิด) มุ่งมั่นที่จะส่งมอบเทมเพลตสำเร็จรูป พร้อมใช้งาน ที่มีสมรรถนะสูงที่สุด เพื่อให้ธุรกิจไทยเติบโตอย่างยั่งยืนในโลกออนไลน์ปี 2026",
    contact: {
      phone: "09X-XXX-XXXX",
      line: "@AEMDEVWEB",
      email: "contact@aemdevweb.com",
    },
    payments: ["Visa", "Mastercard", "PromptPay", "Rabbit LINE Pay"],
  },
}
