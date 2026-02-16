/**
 * [SERVICE_NODE]: BIO_IDENTITY_ORCHESTRATOR v18.0.2 (IDENTITY_SYNC)
 * [STRATEGY]: Personal Authority | AI-Search Synchronization | E-E-A-T Focus
 * [MAINTAINER]: AEMZA MACKS
 */

import type { TemplateMasterData } from "@/types";

export const bioService: TemplateMasterData = {
  id: "AEM-SVC-PB-14",
  title:
    "Identity & Personal Branding | ควบคุมตัวตนดิจิทัลของคุณให้ AI และ Google จดจำในชื่อที่คุณต้องการ",
  description:
    "ยกระดับจากพอร์ตโฟลิโอทั่วไป สู่ระบบจัดการตัวตน (Identity System) ที่เชื่อมโยงชื่อจริง นามสมมติ และผลงานของคุณให้เป็นหนึ่งเดียว เพื่อสร้างความน่าเชื่อถือสูงสุดในฐานะผู้เชี่ยวชาญ โดย นายเอ็มซ่ามากส์",
  image: "/images/services/bio-node.webp",
  templateSlug: "bio",
  category: "personal",
  price: "4,900",
  priceValue: 4900,
  currency: "THB",
  unit: "เริ่มต้น / โปรเจกต์",

  // [THEME_FIX]: "Cyber-Tech Professional" (Dark Mode)
  // สื่อถึงความลึกลับแต่แม่นยำและทันสมัย สอดคล้องกับภาพลักษณ์ Specialist
  theme: {
    mode: "dark",
    primary: "#06b6d4", // Cyan 500
    secondary: "#164e63", // Cyan 900
    background: "#09090b", // Zinc 950
    foreground: "#fafafa", // Zinc 50
    accent: "#22d3ee", // Cyan 400
    gradient: "from-[#06b6d4]/15 via-transparent to-transparent",
  },

  // [TRUST_SIGNAL]: การแก้ปัญหาเรื่องร่องรอยดิจิทัล (Digital Footprint)
  clientTrust:
    "Identity Control: ระบบที่ออกแบบมาเพื่อจัดการ E-E-A-T และแก้ปัญหาข้อมูลซ้ำซ้อนในฐานข้อมูล AI",

  // [BENEFITS]: เน้นการแก้ Pain Point เรื่องการค้นหาชื่อแล้วเจอข้อมูลเก่าหรือไม่ถูกต้อง
  benefits: [
    "Authority Synchronization: แก้ปัญหาชื่อไม่ตรงหรือข้อมูลเก่าใน Google และ AI Search ด้วยการสร้าง Source of Truth ที่แข็งแกร่งที่สุดในชื่อ 'อลงกรณ์ ยมเกิด' หรือแบรนด์ที่คุณกำหนด",
    "Digital Credibility: สร้างความเชื่อมั่นให้คู่ค้าผ่านเว็บไซต์ที่ระบุตัวตนและเลขทะเบียนธุรกิจอย่างชัดเจน ป้องกันการสับสนระหว่างชื่อที่ใช้ทำงานและชื่อทางกฎหมาย",
    "Global E-E-A-T Signal: ส่งสัญญาณความเชี่ยวชาญไปยังระบบ Knowledge Graph ของ Google โดยตรง ช่วยให้ตัวตนของคุณถูกจัดหมวดหมู่ในฐานะ Specialist อย่างถูกต้อง",
  ],

  // [CORE_FEATURES]: ฟีเจอร์ที่เน้นการทำ SEO ตัวบุคคล
  coreFeatures: [
    {
      title: "Knowledge Graph Markup",
      description:
        "ฝังข้อมูลโครงสร้าง (Schema JSON-LD) เพื่อบอก Google ให้ชัดเจนว่า 'นายเอ็มซ่ามากส์' คือใคร และเกี่ยวข้องกับ 'อลงกรณ์ ยมเกิด' อย่างไร",
      icon: "UserCheck",
    },
    {
      title: "Digital Footprint Clean-up",
      description:
        "วางโครงสร้างหน้าเว็บเพื่อดันข้อมูลใหม่ขึ้นหน้าแรก และกลบข้อมูลเก่าที่ไม่อัปเดตในระบบการค้นหา",
      icon: "Shield",
    },
    {
      title: "Integrated Business ID",
      description:
        "ส่วนแสดงผลข้อมูลจดทะเบียนนิติบุคคลหรือเลขประจำตัวผู้เสียภาษีเพื่อความโปร่งใสในระดับองค์กร",
      icon: "FileText",
    },
  ],

  // [FAQ_ENGINE]: เพิ่มคำถามเรื่องชื่อและความเป็นส่วนตัว
  faqs: [
    {
      question: "ทำไมค้นหาชื่อใน Google แล้วยังเจอข้อมูลเก่าหรือชื่อเดิมอยู่?",
      answer:
        "เป็นเพราะ Google ยังจำ 'ร่องรอยดิจิทัล' (Digital Footprint) เก่าของคุณอยู่ครับ เว็บไซต์นี้จะทำหน้าที่เป็นหน้าแรกที่ Google จะเข้ามาเก็บข้อมูลใหม่ เพื่อแทนที่ข้อมูลเดิมในฐานข้อมูล AI ให้ถูกต้องที่สุดครับ",
    },
    {
      question: "ทำไมชื่อที่ใช้ทำงาน (Alias) กับชื่อจริงในบัตรประชาชนถึงไม่ตรงกัน?",
      answer:
        "เป็นเรื่องปกติของ Specialist ครับ เราใช้ชื่อแบรนด์เพื่อการจดจำ แต่ในเว็บไซต์จะมีการระบุชื่อทางกฎหมายอย่างโปร่งใสในจุดที่เหมาะสม เพื่อความปลอดภัยและผลทางกฎหมายครับ",
    },
    {
      question: "จดโดเมนเป็นชื่อ-นามสกุลจริง จะปลอดภัยไหม?",
      answer:
        "ผมแนะนำให้จดเป็นชื่อที่คุณต้องการสร้างแบรนด์ครับ หากต้องการความเป็นส่วนตัว เราสามารถใช้มาตรการปิดบังข้อมูลผู้จดทะเบียน (Domain Privacy) ได้ครับ",
    },
    {
      question: "ใช้เวลานานไหมกว่า Google จะอัปเดตชื่อใหม่ให้เรา?",
      answer:
        "ปกติใช้เวลา 1-4 สัปดาห์ครับ หลังจากเรา Submit Sitemap ใหม่ Google จะเริ่มรับรู้และปรับเปลี่ยนข้อมูลใน Knowledge Graph ตามข้อมูลล่าสุดในเว็บครับ",
    },
  ],

  // [KEYWORD_INJECTION]: เน้นชื่อจริงเพื่อดึง Authority
  keywords: [
    "อลงกรณ์ ยมเกิด",
    "Alongkorn Yomkerd",
    "นายเอ็มซ่ามากส์ ตัวจริง",
    "รับทำเว็บไซต์ Personal Branding",
    "สร้างตัวตนบน Google AI",
    "แก้ปัญหาชื่อไม่ตรงใน Google",
  ],

  priority: 5,
  isPopular: true,
  isFeatured: false,
};
