/** @format */

import { WebRentalData } from "./schema"

/**
 * webRentalData - ข้อมูลพิกัดระบบเช่าเว็บไซต์รายเดือน (Managed Infrastructure)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: เน้นความโปร่งใส ความคุ้มค่า และมาตรฐานงานระดับ Specialist ที่ SME ไว้วางใจ
 * วางระบบและดูแลสมรรถนะโดย: นายเอ็มซ่ามากส์ (อลงกรณ์ ยมเกิด)
 */
export const webRentalData: WebRentalData = {
  // [1. SEO STRATEGY]: พิกัดตัวตนเพื่อการทำอันดับและความน่าเชื่อถือ
  seo: {
    title: "เช่าเว็บไซต์รายเดือน โดย นายเอ็มซ่ามากส์ | วางระบบไว โหลดซิ่งระดับวินาที | AEMDEVWEB",
    description:
      "บริการเช่าเว็บไซต์ที่เน้นมาตรฐานเทคนิกระดับ Specialist โดย นายเอ็มซ่ามากส์ ด้วยเทคโนโลยี Next.js 16 เร็วแรงและปลอดภัย วางระบบให้ครบวงจรเพื่อธุรกิจยุค 2026",
    keywords: [
      "นายเอ็มซ่ามากส์",
      "เช่าเว็บไซต์รายเดือน",
      "รับทำเว็บ SME พิกัดแรง",
      "Next.js 16 Specialist",
      "เอ็มเดฟเว็บ",
      "Managed Web Solution",
    ],
    ogImage: "/images/templates/webrental/webrental-og.webp",
  },

  // [2. NAVIGATION HUB]: ระบบนำทางพิกัดบริการที่ชัดเจน
  navigation: {
    logo: "AEM.RENTAL-PRO",
    links: [
      { label: "มาตรฐานงานระบบ", href: "#features" },
      { label: "พิกัดรูปแบบเว็บ", href: "#showcase" },
      { label: "งบประมาณโครงการ", href: "#pricing" },
    ],
    cta: "ปรึกษาพิกัดงานกับนายเอ็ม",
  },

  // [3. HERO ENGINE]: ส่วนแสดงผลหลักเพื่อดึงดูดพาร์ทเนอร์ธุรกิจ
  hero: {
    badge: "Professional Partner 2026 by AEM",
    title: "ขยายโอกาสธุรกิจด้วยเว็บไซต์ที่",
    highlight: "เนี้ยบและทรงพลังสไตล์นายเอ็ม",
    description:
      "เปลี่ยนความยุ่งยากของระบบเดิม มาเป็นแผนงานเว็บไซต์เช่าที่ดูแลโดย นายเอ็มซ่ามากส์ ผมจัดการงานเทคนิคหลังบ้านให้ทั้งหมดเพื่อให้คุณมีเวลาโฟกัสการเติบโตของธุรกิจได้อย่างเต็มพิกัด",
    priceLabel: "งบประมาณเริ่มต้นรายเดือน",
    priceValue: "1,990",
    bgImage: "/images/templates/webrental.webp",
  },

  // [4. PAIN POINT ANALYSIS]: วิเคราะห์จุดบกพร่องที่ต้องได้รับการแก้ไข
  painPoints: {
    title: "ปัญหาที่ทำให้พิกัดธุรกิจของคุณหยุดนิ่ง",
    items: [
      {
        icon: "Clock",
        title: "Latency Issues",
        desc: "สูญเสียโอกาสสำคัญเพราะลูกค้าเข้าถึงพิกัดข้อมูลได้ช้า ไม่ทันใจเหมือนระบบของนายเอ็ม",
      },
      {
        icon: "ShieldAlert",
        title: "ขาดการ Maintenance",
        desc: "เสี่ยงกับปัญหาระบบขัดข้องโดยไม่มี Specialist คอยซัพพอร์ตงานโครงสร้างหลังบ้าน",
      },
      {
        icon: "BarChart",
        title: "งบประมาณที่ไม่นิ่ง",
        desc: "ภาระค่าใช้จ่ายแฝงจากระบบที่ควบคุมยาก แตกต่างจากระบบเช่าที่เบ็ดเสร็จโดย AEMDEVWEB",
      },
    ],
  },

  // [5. STRATEGIC FEATURES]: ความคุ้มค่าที่จูนมาเพื่อ SME
  features: {
    title: "ความคุ้มค่าที่พิกัดธุรกิจคุณจะได้รับจาก นายเอ็มซ่ามากส์",
    list: [
      {
        icon: "Zap",
        title: "High-Speed Performance",
        desc: "หน้าเว็บประมวลผลฉับไว จูนโดยนายเอ็มซ่ามากส์ เพื่อพิกัดอันดับ Google ที่ดีขึ้นชัดเจน",
      },
      {
        icon: "Search",
        title: "SEO Foundations Integrity",
        desc: "วางพื้นฐาน Semantic HTML ให้ครบถ้วนตามมาตรฐานการค้นหาที่ นายเอ็มซ่ามากส์ กำหนด",
      },
      {
        icon: "Server",
        title: "Managed Cloud Infrastructure",
        desc: "ดูแลพื้นที่จัดเก็บข้อมูลบนเซิร์ฟเวอร์ที่เสถียรและซิ่งไวระดับ Specialist",
      },
      {
        icon: "ShieldCheck",
        title: "24/7 Security & Support",
        desc: "ดูแลความปลอดภัยและระบบงานให้พร้อมรันต่อได้ตลอดเวลาโดยทีมงานของนายเอ็ม",
      },
    ],
  },

  // [6. TEMPLATE SHOWCASE]: โครงสร้างที่ผ่านการคัดสรรมาอย่างเนี้ยบ
  showcase: {
    title: "รูปแบบเว็บไซต์ที่ นายเอ็มซ่ามากส์ พร้อมวางระบบ",
    description:
      "ทุกโครงสร้างถูกปรับจูนให้เข้ากับพฤติกรรมผู้ใช้งานจริง เพื่อผลลัพธ์ที่ลื่นไหลและเนี้ยบที่สุด",
    templates: [
      {
        name: "Service Elite",
        category: "พิกัดงานบริการ",
        image: "/images/showcase/service.webp",
      },
      {
        name: "Commerce Pro",
        category: "พิกัดร้านค้าออนไลน์",
        image: "/images/showcase/shop.webp",
      },
      {
        name: "Corporate Hub",
        category: "พิกัดองค์กรธุรกิจ",
        image: "/images/showcase/hotel.webp",
      },
    ],
  },

  // [7. PRICING ARCHITECTURE]: แผนการลงทุนที่โปร่งใสสไตล์ Specialist
  pricing: {
    title: "แผนงบประมาณที่ชัดเจนและโปร่งใสโดย นายเอ็มซ่ามากส์",
    tiers: [
      {
        name: "Starter Protocol",
        price: "590",
        features: [
          "หน้าเว็บ Landing Page 1 พิกัด",
          "ดูแลงานเทคนิคโดยนายเอ็มฟรี",
          "Responsive รองรับทุกอุปกรณ์",
          "SSL Security มาตรฐานสากล",
        ],
        buttonText: "เริ่มแผนงาน Starter",
      },
      {
        name: "Business Strategy",
        price: "990",
        isPopular: true,
        features: [
          "หน้าเว็บระบบงาน 5 พิกัด",
          "ฟรีพิกัดโดเมนเนม .com",
          "วางโครงสร้าง Technical SEO",
          "ช่องทางติดต่อจูนโดยนายเอ็ม",
        ],
        buttonText: "เลือกแผนงานแนะนำ",
      },
      {
        name: "Professional Infrastructure",
        price: "1,590",
        features: [
          "ระบบจัดการพิกัดสินค้า",
          "วางโครงสร้าง Ecommerce เต็มรูปแบบ",
          "ระบบ Analytics ติดตามผล",
          "Support เทคนิคระดับ Specialist",
        ],
        buttonText: "คุยกับนายเอ็มซ่ามากส์",
      },
    ],
  },

  // [8. FINAL AUTHENTICATION]: ส่วนท้ายหน้าเว็บที่ยืนยันมาตรฐาน
  footer: {
    brand: "AEM.RENTAL-SYSTEM",
    tagline: "มาตรฐานงานเช่าเว็บไซต์ระดับ Specialist โดย นายเอ็มซ่ามากส์",
    contact: { phone: "09X-XXX-XXXX", line: "@127cnthn" },
  },
}
