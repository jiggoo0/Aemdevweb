/** @format */

import { CorporateProData } from "./schema"

/**
 * corporateProData - ข้อมูลพิกัดระบบเว็บธุรกิจรุ่นท็อป (Corporate Pro Edition)
 * แนวคิด: เน้นความน่าเชื่อถือที่จับต้องได้จริง วางโครงสร้างระบบงานที่แข็งแกร่ง และโหลดไวระดับปีศาจ
 * วางระบบโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export const corporateProData: CorporateProData = {
  seo: {
    title:
      "ชุดเว็บธุรกิจรุ่นโปร วางระบบงานมาตรฐานสูง โหลดไวระดับวินาที | AEMDEVWEB",
    description:
      "ยกระดับพิกัดธุรกิจของคุณด้วยเว็บไซต์ที่เนี้ยบและมีความมาตรฐาน วางโครงสร้างระบบงานแบบ SEO-First เพื่อพิกัดการค้นหาที่แม่นยำที่สุดในปี 2026",
    keywords: [
      "ทำเว็บบริษัท",
      "Corporate Website",
      "Next.js 16",
      "วางระบบ SEO",
      "รับทำเว็บไซต์",
      "นายเอ็มซ่ามากส์",
    ],
    ogImage: "/images/templates/project-01.webp",
  },
  navigation: {
    logo: "AEM.CORP-PRO",
    links: [
      { label: "หน้าแรก", href: "#" },
      { label: "รายการระบบงาน", href: "#services" },
      { label: "พิกัดผลงาน", href: "#showcase" },
      { label: "ติดต่อทีมงาน", href: "#contact" },
    ],
    cta: "เริ่มพิกัดงานกับนายเอ็ม",
  },
  hero: {
    badge: "Premium Business Edition 2026",
    title: "สร้างพิกัดธุรกิจใหม่",
    highlight: "เพื่อการเติบโตที่ยั่งยืน",
    description:
      "ไม่ใช่แค่หน้าเว็บที่สวย แต่คือระบบสร้างโอกาสทางธุรกิจที่ทรงพลังที่สุด วางพิกัดให้โหลดไวระดับเสี้ยววินาที เพื่อให้ลูกค้าเข้าถึงข้อมูลระบบงานได้ทันทีโดยไม่ต้องรอ",
    primaryCTA: "ดูรายละเอียดระบบงาน",
    secondaryCTA: "ปรึกษาแผนงานฟรี",
  },
  stats: [
    { label: "พิกัดความเร็วโหลด", value: "0.4", suffix: "s" },
    { label: "คะแนน SEO เต็ม", value: "100", suffix: "%" },
    { label: "ความเสถียรระบบงาน", value: "99.9", suffix: "%" },
  ],
  services: {
    title: "ยกระดับธุรกิจด้วยระบบงานที่เหนือกว่า",
    subtitle:
      "เราไม่ได้ทำแค่เว็บ แต่เราสร้างรากฐานที่มั่นคงให้กับบริษัทของคุณบนโลกออนไลน์",
    items: [
      {
        title: "Business Strategy",
        desc: "วางแผนพิกัดการเข้าถึงลูกค้าให้ตรงใจกลุ่มเป้าหมายที่สุด",
        icon: "Target",
      },
      {
        title: "Performance First",
        desc: "ระบบงานทำงานลื่นไหล ไม่มีสะดุด แม้มีพิกัดคนเข้าชมพร้อมกันจำนวนมาก",
        icon: "Zap",
      },
      {
        title: "Search Optimized",
        desc: "วางโครงสร้างให้ Google รักและหาพิกัดธุรกิจคุณเจอเป็นอันดับแรก",
        icon: "Search",
      },
      {
        title: "Data Security",
        desc: "ดูแลความปลอดภัยพิกัดข้อมูลด้วยมาตรฐานงานสากลที่วางใจได้จริง",
        icon: "Lock",
      },
    ],
  },
  showcase: {
    title: "พิกัดความภูมิใจและผลงาน",
    description:
      "ตัวอย่างบริษัทชั้นนำที่ไว้วางใจให้เราดูแลพิกัดธุรกิจบนโลกออนไลน์",
    items: [
      {
        title: "Industrial Leader",
        category: "Manufacturing",
        image: "/images/templates/project-01.webp",
      },
      {
        title: "Global Logistics",
        category: "Services",
        image: "/images/templates/project-01.webp",
      },
    ],
  },
}
