/** @format */

import { LocalServiceData } from "./schema"

/**
 * localServiceData - ข้อมูลแบบเว็บไซต์สำหรับธุรกิจบริการท้องถิ่น
 * แนวคิด: เน้นความไวในการติดต่อ เข้าถึงง่าย และดูเป็นมืออาชีพที่ไว้ใจได้
 * โดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export const localServiceData: LocalServiceData = {
  seo: {
    title:
      "บริการช่างมือโปรใกล้บ้านคุณ | จองคิวงานไว เว็บซิ่งโหลดแรง | AEMDEVWEB",
    description:
      "รวมงานบริการคุณภาพสูงที่ดูแลคุณถึงหน้าบ้าน จบงานไวทันใจด้วยทีมงานที่จูนสเปกการทำงานมาอย่างดี พร้อมออนไลน์ให้ธุรกิจคุณหาเจอง่ายบน Google",
    keywords: [
      "บริการช่าง",
      "ช่างซ่อมบ้าน",
      "บริการใกล้บ้าน",
      "เว็บโหลดไว",
      "SME 2026",
    ],
    ogImage: "/images/templates/project-01.webp",
  },
  navigation: {
    logo: "LOCAL.PRO",
    links: [
      { label: "หน้าแรก", href: "#" },
      { label: "งานที่ถนัด", href: "#services" },
      { label: "ติดต่อช่าง", href: "#contact" },
    ],
    cta: "จองคิวงานด่วนกับนายเอ็ม",
  },
  hero: {
    badge: "Fast-Path Service 2026",
    title: "งานบริการคุณภาพที่",
    highlight: "พร้อมดูแลคุณถึงหน้าบ้าน",
    description:
      "ไม่ต้องรอข้ามวัน ทีมงานของเราพร้อมเข้าจัดการปัญหาให้คุณถึงที่ ด้วยเครื่องมือที่เนี้ยบที่สุดและการันตีความพอใจแบบติดสปีด ให้ธุรกิจคุณรันต่อได้ไม่มีสะดุดครับ",
    image: "/images/templates/project-01.webp",
  },
  services: {
    title: "งานที่เราเชี่ยวชาญเป็นพิเศษ",
    items: [
      {
        title: "ซ่อมบำรุงด่วน",
        desc: "เข้าจัดการปัญหาหน้างานทันทีภายใน 2 ชม. ไม่ต้องรอนาน",
        icon: "Wrench",
      },
      {
        title: "วางระบบงานระบบ",
        desc: "ติดตั้งและดูแลงานส่วนต่าง ๆ ให้ใช้งานได้ดีและปลอดภัยที่สุด",
        icon: "ShieldCheck",
      },
      {
        title: "ดูแลต่อเนื่อง",
        desc: "บริการหลังการขายที่พร้อมสแตนด์บายดูแลคุณตลอดเวลา",
        icon: "Clock",
      },
    ],
  },
  contact: {
    title: "พร้อมให้เราดูแลหรือยังครับ?",
    address: "เลขที่ 123 ถนนเพชรเกษม กรุงเทพมหานคร (ครอบคลุมพื้นที่ใกล้เคียง)",
    phone: "08x-xxx-xxxx",
    email: "contact@aemdevweb.com",
    mapUrl: "https://maps.google.com",
    socials: {
      line: "@aemdevweb",
      facebook: "aemdevweb.official",
    },
  },
}
