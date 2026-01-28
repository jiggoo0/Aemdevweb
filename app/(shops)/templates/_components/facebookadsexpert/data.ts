/** @format */

import { FacebookAdsData } from "./schema"

/**
 * facebookAdsData - พิกัดข้อมูลระบบหน้าเว็บสำหรับผู้เชี่ยวชาญด้านการยิงแอด
 * แนวคิด: เปลี่ยนหน้าเว็บให้เป็นพนักงานขายพิกัดแรงที่ทำงาน 24 ชม. เน้นยอดขายที่วัดผลได้จริง
 * วางระบบโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export const facebookAdsData: FacebookAdsData = {
  // 1. พิกัดงาน SEO (SEO Contract)
  seo: {
    title: "Facebook Ads Expert | จูนยอดขายให้พุ่งด้วยข้อมูลจริง | AEMDEVWEB",
    description:
      "เปลี่ยนงบโฆษณาให้เป็นกำไรที่เห็นผลชัดเจน ด้วยการวางระบบติดตามผลและแผนการขายพิกัดแรงบน Next.js 16",
    keywords: [
      "ยิงแอด Facebook",
      "เพิ่มยอดขายออนไลน์",
      "Conversion API",
      "ระบบหน้าเว็บเน้นผลลัพธ์",
    ],
    ogImage: "/images/templates/facebookadsexpert/facebookadsexpert-og.webp",
  },

  // 2. พิกัดแถบนำทาง (Navigation)
  navigation: {
    logo: "AEM Ads Specialist",
    cta: "เริ่มแผนงานวันนี้",
  },

  // 3. พิกัดส่วนหัวระบบ (Hero Section)
  hero: {
    badge: "Result-Oriented Marketing 2026",
    title: "ยกระดับยอดขายด้วย",
    highlight: "แผนงานพิกัดโปร", // [FIX]: เพิ่มพิกัดนี้เพื่อล้าง Error TS2741
    description:
      "หยุดงบโฆษณาที่ไหลทิ้ง เปลี่ยนมาใช้ข้อมูลจริงนำทางเพื่อกำไรที่ยั่งยืน ด้วยการเจาะกลุ่มเป้าหมายที่แม่นยำและระบบงานที่โหลดไวระดับปีศาจ",
    cta: "รับแผนงานเบื้องต้นฟรี",
  },

  // 4. พิกัดรายการจุดเด่น (Highlights)
  highlights: {
    items: [
      {
        icon: "Zap",
        title: "Load Speed 0.8s",
        desc: "ระบบหน้าเว็บที่ไวที่สุดเพื่อหยุดลูกค้าไม่ให้กดออกจากหน้าเว็บพิกัดยิงแอดของคุณ",
      },
      {
        icon: "Target",
        title: "Conversion API",
        desc: "ติดตั้งพิกัดการติดตามผลขั้นสูง เพื่อให้คุณรู้ทันทีว่ายอดขายมาจากโฆษณาตัวไหน",
      },
      {
        icon: "MessageSquare",
        title: "Direct Response",
        desc: "วางตำแหน่งพิกัดปุ่มทักและข้อมูลให้ปิดการขายได้ง่ายและกริบที่สุด",
      },
    ],
  },

  // 5. พิกัดสถิติผลลัพธ์ (Stats)
  stats: [
    {
      label: "ค่าตอบแทนโฆษณา (ROAS)",
      value: "8.5x",
      subValue: "จากผลลัพธ์จริงในกลุ่มสินค้าสุขภาพ",
    },
    {
      label: "งบประมาณที่ดูแล",
      value: "50M+",
      subValue: "ดูแลบัญชีธุรกิจรวมกว่า 100 ราย",
    },
    {
      label: "ยอดขายที่สร้างได้",
      value: "250M+",
      subValue: "สรุปยอดรวมภายในระยะเวลาเพียง 1 ปี",
    },
  ],

  // 6. พิกัดแผนการทำงาน (Strategy)
  strategy: [
    {
      step: "01",
      title: "ตรวจเช็กพิกัดข้อมูลเดิม",
      desc: "ค้นหาจุดที่ทำให้งบรั่วไหลจากโครงสร้างแคมเปญเก่าของคุณ",
    },
    {
      step: "02",
      title: "วางเส้นทางลูกค้า",
      desc: "ออกแบบลำดับการเห็นโฆษณา ตั้งแต่ลูกค้ารู้จักจนถึงการตัดสินใจซื้อซ้ำ",
    },
    {
      step: "03",
      title: "ขยายฐานยอดขาย",
      desc: "เพิ่มงบในส่วนที่ทำกำไรและขยายฐานลูกค้าใหม่ด้วยพิกัดกลุ่มเป้าหมายที่แม่นยำ",
    },
  ],

  // 7. พิกัดข้อมูลท้ายหน้าเว็บ (Footer)
  footer: {
    companyName: "AEMDEVWEB Specialist",
    contactLine: "@aemdev",
    phone: "0xx-xxx-xxxx",
    copy: "High-Performance Ads System",
    link: "https://line.me/ti/p/@aemdev",
  },
}
