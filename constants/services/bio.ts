/**
 * [SERVICE_NODE]: BIO_IDENTITY_ORCHESTRATOR v17.9.86 (THEME_STABILIZED)
 * [STRATEGY]: Personal Authority | Digital First Impression | Hex Standard
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { TemplateMasterData } from "@/types";

export const bioService: TemplateMasterData = {
  id: "AEM-SVC-PB-14",
  title: "รับทำเว็บไซต์ Portfolio & Personal Brand | ปั้นคุณให้เป็น 'ตัวจริง' ในสายตาคู่ค้า",
  description:
    "เปลี่ยนหน้าโปรไฟล์ธรรมดาให้กลายเป็นหน้าตาธุรกิจที่ดูแพง รวบรวมทุกผลงานและคอนแทคไว้ในที่เดียว เพื่อให้คุณปิดดีลใหญ่ได้ง่ายขึ้น โดย นายเอ็มซ่ามากส์",
  image: "/images/service/bio-node.webp",
  templateSlug: "bio",
  category: "personal",
  price: "4,900",
  priceValue: 4900,
  currency: "THB",
  unit: "โปรเจกต์",

  // [THEME_FIX]: ใช้ Hex Code ล้วนเพื่อรองรับ OKLCH Engine
  theme: {
    mode: "dark",
    primary: "#06b6d4", // Cyan 500
    secondary: "#164e63", // Cyan 900
    background: "#09090b", // Zinc 950 (เกือบดำ)
    foreground: "#fafafa", // Zinc 50 (ขาวนวล)
    accent: "#22d3ee", // Cyan 400
    gradient: "from-[#06b6d4]/15 via-transparent to-transparent",
  },

  clientTrust: "เปลี่ยนลิงก์ใน Bio ให้กลายเป็น 'สำนักงานดิจิทัล' ที่สร้างความเชื่อมั่นระดับสากล",

  benefits: [
    "Authority Hub: รวมทุกผลงานและประสบการณ์ไว้ในที่เดียว ไม่ต้องส่งไฟล์หนักๆ ช่วยให้คู่ค้าประทับใจตั้งแต่คลิกแรก",
    "Premium Positioning: ดีไซน์ที่คัดสรรมาเพื่อดึงดูดลูกค้าเกรดพรีเมียมที่พร้อมจ่ายให้กับความเชี่ยวชาญของคุณ",
    "Digital Real Estate: เว็บไซต์คือบ้านที่คุณเป็นเจ้าของเอง 100% ไม่ต้องเสี่ยงกับการโดนปิดกั้นการมองเห็น",
  ],

  coreFeatures: [
    {
      title: "Showcase Excellence",
      description: "ระบบจัดวางพอร์ตโฟลิโอที่เน้น Storytelling เพื่อโชว์ทักษะและผลลัพธ์การทำงาน",
      icon: "Award",
    },
    {
      title: "Omni-Channel Contact",
      description: "ปุ่มรวมช่องทางติดต่อ (Smart Links) ที่เชื่อมต่อ LINE, Messenger และเบอร์โทร",
      icon: "Link",
    },
    {
      title: "Personal SEO Setup",
      description: "วางโครงสร้างให้ Google ค้นหาชื่อ-นามสกุลของคุณเจอ พร้อมข้อมูลที่ถูกต้อง",
      icon: "UserCheck",
    },
  ],

  faqs: [
    {
      question: "ทำไมต้องมีเว็บ Bio แยกจากเพจ Facebook?",
      answer:
        "โซเชียลมีเดียมีไว้หา Traffic ครับ แต่เว็บไซต์มีไว้ 'ปิดการขาย' และ 'สร้างเครดิต' เวลาลูกค้าจะจ้างงานระดับสูง เขาจะมองหาความเป็นมืออาชีพที่โซเชียลให้ไม่ได้ครับ",
    },
    {
      question: "ใส่ผลงานได้เยอะแค่ไหน?",
      answer:
        "เราออกแบบให้รองรับผลงานได้ไม่จำกัดครับ โดยเน้นการจัดระเบียบให้ดูง่าย ไม่รกตา และโหลดไวแม้อยู่บนมือถือ",
    },
  ],

  keywords: [
    "รับทำเว็บไซต์ Portfolio",
    "จ้างทำ Bio Link ส่วนตัว",
    "รับทำเว็บพอร์ตโฟลิโอ",
    "ปั้นแบรนด์บุคคล",
    "Personal Branding Website",
  ],

  priority: 5,
  isPopular: true,
  isFeatured: false,
};
