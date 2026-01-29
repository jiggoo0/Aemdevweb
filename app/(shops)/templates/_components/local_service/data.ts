/** @format */

import { LocalServiceData } from "./schema"

/**
 * localServiceData - โครงสร้างสถาปัตยกรรมดิจิทัลสำหรับธุรกิจบริการนอกสถานที่
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: การส่งมอบความเชื่อมั่นผ่านระบบการเข้าถึงบริการที่รวดเร็วและแม่นยำ
 * ออกแบบและวางระบบโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export const localServiceData: LocalServiceData = {
  // 1. กลยุทธ์การจัดการข้อมูล SEO (Technical SEO Strategy)
  seo: {
    title:
      "บริการเทคนิคระดับมืออาชีพ โดย นายเอ็มซ่ามากส์ | จองคิวงานไว โหลดแรง | AEMDEVWEB",
    description:
      "โซลูชันบริการเชิงเทคนิคถึงพื้นที่ วางระบบโดย นายเอ็มซ่ามากส์ เน้นมาตรฐานความปลอดภัยและผลลัพธ์ที่รวดเร็ว บนโครงสร้าง Next.js 16 เพื่อให้ธุรกิจคุณหาเจอง่ายบน Google",
    keywords: [
      "นายเอ็มซ่ามากส์",
      "Professional On-Site Service",
      "ช่างมือโปรใกล้บ้าน",
      "ระบบจองบริการทางเทคนิค",
      "เอ็มเดฟเว็บ",
      "SME Strategic Interface 2026",
    ],
    ogImage: "/images/templates/project-01.webp",
  },

  // 2. ระบบการนำทางเชิงกลยุทธ์ (Strategic Navigation)
  navigation: {
    logo: "AEM.LOCAL-PRO",
    links: [
      { label: "หน้าแรก", href: "#" },
      { label: "พิกัดบริการ", href: "#services" },
      { label: "ติดต่อทีมงาน", href: "#contact" },
    ],
    cta: "จองพิกัดงานกับนายเอ็มซ่ามากส์",
  },

  // 3. ส่วนนำเสนอคุณค่าหลัก (Strategic Hero Node)
  hero: {
    badge: "Operational Efficiency 2026 by AEM",
    title: "โซลูชันการบริการทางเทคนิคที่",
    highlight: "พร้อมดูแลคุณถึงหน้าบ้านสไตล์นายเอ็ม",
    description:
      "ยกระดับการจัดการปัญหาเชิงเทคนิคด้วยทีมงานมือโปร ดำเนินงานผ่านระบบที่จูนโดย นายเอ็มซ่ามากส์ เพื่อความรวดเร็วการตอบสนองสูงสุด ให้ธุรกิจของคุณรันต่อได้ไม่มีสะดุด",
    image: "/images/templates/project-01.webp",
  },

  // 4. รายการความเชี่ยวชาญเฉพาะทาง (Specialized Services)
  services: {
    title: "ขอบเขตการให้บริการที่ นายเอ็มซ่ามากส์ คัดสรร",
    items: [
      {
        title: "Rapid Response Maintenance",
        desc: "ระบบบริหารจัดการงานซ่อมด่วน เข้าจัดการพิกัดหน้างานทันทีภายในระยะเวลาที่กำหนด",
        icon: "Wrench",
      },
      {
        title: "Structural System Integration",
        desc: "ติดตั้งและดูแลงานระบบพื้นฐานให้เนี้ยบ ปลอดภัย และมีประสิทธิภาพสูงสุดโดยนายเอ็ม",
        icon: "ShieldCheck",
      },
      {
        title: "Dedicated Support Protocol",
        desc: "มาตรฐานการดูแลหลังการบริการที่ นายเอ็มซ่ามากส์ พร้อมสแตนด์บายสนับสนุนคุณ",
        icon: "Clock",
      },
    ],
  },

  // 5. ระบบการติดต่อและประสานงานโครงการ (Communication Hub)
  contact: {
    title: "เริ่มต้นปรึกษาพิกัดงานกับนายเอ็มซ่ามากส์",
    address: "เลขที่ 123 ถนนเพชรเกษม กรุงเทพมหานคร (ครอบคลุมพื้นที่โดยรอบ วางระบบโดย AEMDEVWEB)",
    phone: "08x-xxx-xxxx",
    email: "technical-support@aemdevweb.com",
    mapUrl: "https://maps.google.com",
    socials: {
      line: "@aemdevweb",
      facebook: "aemdevweb.official",
    },
  },
}
