/**
 * [SERVICE_NODE]: CORPORATE_IDENTITY_HUB v18.0.1 (ENTERPRISE_STANDARD)
 * [STRATEGY]: B2B Trust | Hardened Architecture | Zero-Fancy | Universal Theme
 * [MAINTAINER]: AEMZA MACKS
 */

import type { TemplateMasterData } from "@/types";

export const corporateService: TemplateMasterData = {
  id: "AEM-SVC-CP-03",
  title: "Corporate Standard Hub | ระบบเว็บไซต์องค์กรสถาปัตยกรรมปิด (Fixed-Layout)",
  description:
    "เว็บไซต์ระดับ Enterprise มาตรฐาน Next.js ที่ถูกออกแบบโครงสร้างแบบ Hardened Architecture เน้นความปลอดภัยสูงสุดและดีไซน์ที่ยึดตามหลักสากล (Global UX Standards) เพื่อสร้างความน่าเชื่อถือระดับผู้นำ โดยจำกัดการปรับแต่งโครงสร้างเพื่อรักษาประสิทธิภาพความเร็วและความเสถียรของระบบ",
  image: "/images/services/corporate-node.webp",
  templateSlug: "corporate",
  category: "business",

  // [PRICING_MASTER]: ราคากลางสำหรับโปรเจกต์มาตรฐาน (Non-Custom Layout)
  price: "19,500",
  priceValue: 19500,
  currency: "THB",
  unit: "เริ่มต้น / ระบบมาตรฐาน",

  theme: {
    mode: "system", 
    primary: "#0f172a", 
    secondary: "#334155", 
    background: "#ffffff", 
    foreground: "#0f172a", 
    accent: "#2563eb", 
    gradient: "none", 
  },

  // [TRUST_SIGNAL]
  clientTrust: "Security Protocol: โครงสร้างข้อมูลระดับ ISO/IEC 27001 Ready Design และ PDPA Compliance",

  benefits: [
    "Standardized Identity: ระบบจัดวาง Layout ตามอัตลักษณ์องค์กรโดยใช้โครงสร้างมาตรฐานธุรกิจสากล (Grid-Based System) เพื่อความมั่นคงและภาพลักษณ์ที่เป็นมืออาชีพ",
    "Hardened Security: โครงสร้าง Next.js (App Router) ที่แยกส่วนการแสดงผลและข้อมูลออกจากกัน ป้องกันการโจมตีแบบ Code Injection ได้ดีกว่าระบบ CMS ทั่วไป 10 เท่า",
    "Managed CMS Interface: ระบบจัดการเนื้อหาหลังบ้านที่ถูกจำกัดสิทธิ์การแก้ไขโครงสร้างหลัก เพื่อป้องกันพนักงานทำหน้าเว็บพัง (Layout Break) แต่ยังอัปเดตข่าวสารได้สะดวก",
  ],

  coreFeatures: [
    {
      title: "Fixed-Structure Architecture",
      description: "โครงสร้างหน้าเว็บมาตรฐาน 5-7 หมวดหมู่หลักที่ถูกคำนวณระยะจัดวาง (Spacing) มาอย่างแม่นยำ",
      icon: "ShieldCheck",
    },
    {
      title: "Corporate Data Module",
      description: "ระบบข่าวสารองค์กรและประกาศรับสมัครงานที่รองรับการแสดงผลแบบ High-Performance",
      icon: "Building2",
    },
    {
      title: "Semantic SEO Protocol",
      description: "การจัดลำดับข้อมูลตามโครงสร้าง Semantic HTML เพื่อให้ Google มองเห็นความเป็นผู้นำในอุตสาหกรรม",
      icon: "Globe",
    },
  ],

  faqs: [
    {
      question: "ทำไมถึงมีการจำกัดการแก้ไข Layout?",
      answer:
        "เพราะเราขาย 'ความน่าเชื่อถือ' ครับ โครงสร้างที่เราจัดวางคือสถาปัตยกรรมที่ผ่านการทดสอบมาแล้วว่าเหมาะสมกับภาพลักษณ์องค์กรระดับสากล การขยับ Layout นอกเหนือจากเทมเพลตมาตรฐานอาจส่งผลต่อความเร็ว (Core Web Vitals) และความเสถียรของระบบครับ",
    },
    {
      question: "แก้ไขสีและฟอนต์ตามแบรนด์ได้หรือไม่?",
      answer: "ได้ 100% ครับ ระบบรองรับการปรับแต่ง Design System (สีหลัก, สีรอง, ฟอนต์) ให้ตรงกับคู่มือแบรนด์ (CI Manual) ของลูกค้า เพื่อรักษาภาพลักษณ์องค์กรครับ",
    },
    {
      question: "หากต้องการเพิ่มหน้าหรือฟีเจอร์พิเศษทำได้หรือไม่?",
      answer: "ทำได้ครับ ระบบถูกออกแบบมาให้เป็น Module-Based หากต้องการฟีเจอร์นอกเหนือจากโครงสร้างมาตรฐาน สามารถแจ้งเพื่อประเมินเป็นส่วนเสริม (Add-on) ได้ตามความต้องการครับ",
    },
    {
      question: "ระบบนี้ปลอดภัยกว่า WordPress อย่างไร?",
      answer: "เราใช้ Next.js ซึ่งเป็นระบบ Static Site Generation (SSG) ไม่มีฐานข้อมูลเชื่อมต่อโดยตรงหน้าบ้าน ทำให้ Hacker ไม่สามารถเจาะผ่านช่องโหว่ Plugin เหมือนที่มักเกิดกับ WordPress ครับ",
    },
    {
      question: "ออกใบกำกับภาษีและทำสัญญานิติบุคคลได้หรือไม่?",
      answer:
        "ได้ครับ เราดำเนินการในรูปแบบบริษัท พร้อมทำสัญญาจ้างและ TOR ที่ระบุขอบเขตงานชัดเจน เพื่อความสบายใจของลูกค้าองค์กรครับ",
    },
  ],

  keywords: [
    "รับทำเว็บไซต์บริษัทมาตรฐาน Enterprise",
    "เว็บไซต์องค์กร Next.js",
    "ออกแบบเว็บไซต์ B2B",
    "เว็บ Corporate ปลอดภัยสูง",
  ],

  priority: 2,
  isFeatured: true,
};
