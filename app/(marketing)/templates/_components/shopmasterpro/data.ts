/** @format */

import { ShopMasterData } from "./schema"

/**
 * shopMasterData: ข้อมูลพิกัดหลักสำหรับเทมเพลต ShopMasterPro
 * ยุทธศาสตร์: เน้นการใช้คีย์เวิร์ด "เทมเพลตสำเร็จรูป พร้อมใช้งาน" เพื่อดึงดูด Organic Search
 * ผู้ดูแลระบบ: นายเอ็มซ่ามากส์ (อลงกรณ์ ยมเกิด)
 */
export const shopMasterData: ShopMasterData = {
  // --- 1. พิกัด Technical SEO (วางหมากเพื่อให้ Google เก็บข้อมูลได้แม่นยำ) ---
  seo: {
    title:
      "เทมเพลตสำเร็จรูป พร้อมใช้งาน Shop Master Pro | แรง ติดหน้าแรก Google โดย AEMDEVWEB",
    description:
      "เทมเพลตสำเร็จรูป พร้อมใช้งาน สำหรับร้านค้าออนไลน์ที่เน้นความเร็วและผลลัพธ์ Organic Search ออกแบบโดย นายเอ็มซ่ามากส์ เพื่อให้ธุรกิจของคุณนำหน้าคู่แข่งด้วยโครงสร้างเว็บไซต์ที่ถูกต้อง",
    keywords: [
      "เทมเพลตสำเร็จรูป พร้อมใช้งาน",
      "รับทำเว็บขายของออนไลน์",
      "AEMDEVWEB",
      "นายเอ็มซ่ามากส์",
      "เว็บขายของติดหน้าแรก Google",
      "Nextjs Ecommerce Template",
    ],
    ogImage: "/images/templates/shopmasterpro-og.webp",
  },

  // --- 2. พิกัดการนำทาง (Navigation Hub) ---
  navigation: {
    logo: "AEM.SHOP",
    links: [
      { label: "สินค้าทั้งหมด", href: "#products" },
      { label: "จุดเด่นของระบบ", href: "#benefits" },
      { label: "สอบถามข้อมูล", href: "#contact" },
    ],
    cartCount: 2,
  },

  // --- 3. ส่วนหัวเว็บไซต์ (Hero) - เน้นความรวดเร็วในการเริ่มงาน ---
  hero: {
    title: "เทมเพลตสำเร็จรูป พร้อมใช้งาน เพื่อยอดขายที่โตแบบต่อเนื่อง",
    description:
      "หยุดเสียเวลากับระบบที่โหลดช้า นี่คือเทมเพลตสำเร็จรูป พร้อมใช้งาน ที่ปรับจูนมาเพื่อการปิดการขายโดยเฉพาะ โหลดขึ้นทันทีใน 0.7 วินาที พร้อมลุยตลาดออนไลน์ได้ทันที",
    cta: "ดูรายการสินค้าพร้อมขาย",
    image: "/images/templates/shopmasterpro.webp",
  },

  // --- 4. พิกัดหมวดหมู่สินค้า (Category Grid) ---
  categories: [
    {
      name: "Electronics",
      image: "/images/showcase/placeholder.webp",
      count: "120 รายการ",
    },
    {
      name: "Lifestyle",
      image: "/images/showcase/placeholder.webp",
      count: "85 รายการ",
    },
    {
      name: "Gadgets",
      image: "/images/showcase/placeholder.webp",
      count: "45 รายการ",
    },
  ],

  // --- 5. รายการสินค้าเด่นในระบบ (Product Registry) ---
  products: [
    {
      name: "Smart Watch Series X",
      price: "2,900.-",
      originalPrice: "3,500.-",
      tag: "Best Seller",
      image: "/images/showcase/placeholder.webp",
      rating: 5,
    },
    {
      name: "Wireless Headphones Pro",
      price: "4,500.-",
      tag: "New Arrival",
      image: "/images/showcase/placeholder.webp",
      rating: 4,
    },
    {
      name: "Minimalist Desk Lamp",
      price: "1,200.-",
      image: "/images/showcase/placeholder.webp",
      rating: 5,
    },
    {
      name: "Portable Power Bank",
      price: "990.-",
      originalPrice: "1,290.-",
      image: "/images/showcase/placeholder.webp",
      rating: 4,
    },
  ],

  // --- 6. จุดเด่นของเทมเพลต (System Benefits) ---
  benefits: [
    {
      title: "ระบบพร้อมใช้งานทันที",
      desc: "ลดระยะเวลาการทำงาน ไม่ต้องเริ่มจากศูนย์ แค่เปลี่ยนข้อมูลก็พร้อมเปิดร้านได้ทันที",
    },
    {
      title: "โครงสร้างคะแนนเต็ม 100",
      desc: "ผ่านการทดสอบความเร็วและระบบความปลอดภัยตามเกณฑ์ที่ Google ต้องการ เพื่อผลลัพธ์ SEO ที่ดีเยี่ยม",
    },
    {
      title: "รองรับการแสดงผลทุกหน้าจอ",
      desc: "ไม่ว่าลูกค้าจะเข้าผ่านมือถือหรือคอมพิวเตอร์ ระบบจะปรับสัดส่วนให้อัตโนมัติและสวยงามเสมอ",
    },
  ],

  // --- 7. ส่วนท้ายหน้าและพิกัดธุรกิจ (Footer) ---
  footer: {
    description:
      "AEMDEVWEB โดย นายเอ็มซ่ามากส์ มุ่งมั่นที่จะมอบเทมเพลตสำเร็จรูป พร้อมใช้งาน ที่มีคุณภาพสูงและเน้นการใช้งานจริง เพื่อช่วยให้ธุรกิจไทยเติบโตอย่างยั่งยืนในโลกออนไลน์",
    contact: {
      phone: "09X-XXX-XXXX",
      line: "@AEMDEVWEB",
      email: "contact@aemdevweb.com",
    },
    payments: ["Visa", "Mastercard", "PromptPay", "Rabbit LINE Pay"],
  },
}
