/**
 * [SERVICE_NODE]: BIO_IDENTITY_ORCHESTRATOR v18.0.3 (IDENTITY_SYNC_PRO)
 * [STRATEGY]: Personal Authority | AI-Search Synchronization | E-E-A-T Focus
 * [MAINTAINER]: AEMZA MACKS
 */

import type { TemplateMasterData } from "@/types";

export const bioService: TemplateMasterData = {
  id: "AEM-SVC-PB-14",
  title: "Identity & Personal Branding | ควบคุมตัวตนดิจิทัลของคุณให้ AI จดจำ",
  description:
    "ยกระดับจากพอร์ตโฟลิโอทั่วไป สู่ระบบจัดการตัวตน (Identity System) ที่เชื่อมโยงชื่อจริง นามสมมติ และผลงานของคุณให้เป็นหนึ่งเดียว เพื่อสร้างความน่าเชื่อถือสูงสุดในฐานะผู้เชี่ยวชาญ",

  image: "/images/services/bio-node.webp",
  templateSlug: "bio",
  category: "personal",

  // [PRICING_MASTER]: ราคาเริ่มต้นสำหรับ Personal Branding
  price: "4,900",
  priceValue: 4900,
  currency: "THB",
  unit: "เริ่มต้น / โปรเจกต์",

  // [THEME_STANDARD]: ธีม Cyber-Tech Professional (Dark Mode)
  // สื่อถึงความลึกลับแต่แม่นยำ ทันสมัย และเป็น Tech Specialist
  theme: {
    mode: "dark",
    primary: "#06b6d4", // Cyan 500: สีฟ้าเทค สื่อถึงนวัตกรรม
    secondary: "#164e63", // Cyan 900: สีพื้นหลังเข้มลึก
    background: "#09090b", // Zinc 950: สีดำด้าน (Matte Black) ดูพรีเมียม
    foreground: "#fafafa", // Zinc 50: สีตัวอักษรขาวสะอาด
    accent: "#22d3ee", // Cyan 400: สี Highlight จุดสำคัญ
    gradient: "from-[#06b6d4]/15 via-transparent to-transparent", // Cyber Glow Effect
  },

  // [TRUST_SIGNAL]
  clientTrust:
    "Identity Control: ระบบที่ออกแบบมาเพื่อจัดการ E-E-A-T และแก้ปัญหาข้อมูลซ้ำซ้อนในฐานข้อมูล AI",

  benefits: [
    "Authority Synchronization: สร้าง Source of Truth ที่แข็งแกร่งที่สุดในชื่อ 'อลงกรณ์ ยมเกิด' หรือแบรนด์ที่คุณกำหนด เพื่อให้ Google จำข้อมูลที่ถูกต้อง",
    "Digital Credibility: สร้างความเชื่อมั่นให้คู่ค้าผ่านเว็บไซต์ที่ระบุตัวตนและผลงานชัดเจน ป้องกันการสับสนของข้อมูล",
    "Global E-E-A-T Signal: ส่งสัญญาณความเชี่ยวชาญไปยัง Knowledge Graph ของ Google โดยตรง ช่วยให้ตัวตนของคุณถูกจัดหมวดหมู่เป็น Specialist",
  ],

  coreFeatures: [
    {
      title: "Knowledge Graph Markup",
      description:
        "ฝัง Schema JSON-LD เพื่อบอก Google ชัดเจนว่า 'นายเอ็มซ่ามากส์' คือใคร และเกี่ยวข้องกับ 'อลงกรณ์ ยมเกิด' อย่างไร",
      icon: "UserCheck",
    },
    {
      title: "Digital Footprint Clean-up",
      description: "ดันข้อมูลใหม่ที่ถูกต้องขึ้นหน้าแรก Google และกลบข้อมูลเก่าที่ไม่อัปเดต",
      icon: "Shield",
    },
    {
      title: "Integrated Business ID",
      description:
        "แสดงผลข้อมูลทางธุรกิจหรือเลขผู้เสียภาษีอย่างโปร่งใส สร้างความน่าเชื่อถือระดับองค์กร",
      icon: "FileText",
    },
  ],

  faqs: [
    {
      question: "ทำไมค้นหาชื่อใน Google แล้วเจอข้อมูลเก่า?",
      answer:
        "เพราะ Google ยังจำ Digital Footprint เดิมครับ เว็บไซต์นี้จะทำหน้าที่ป้อนข้อมูลใหม่ให้ Google แทนที่ข้อมูลเก่าในฐานข้อมูลครับ",
    },
    {
      question: "ชื่อในวงการ (Alias) กับชื่อจริงไม่ตรงกัน มีผลเสียไหม?",
      answer:
        "ไม่มีครับ เป็นเรื่องปกติของ Specialist เว็บไซต์จะระบุความเชื่อมโยงของทั้งสองชื่อให้ Google เข้าใจว่าเป็นคนเดียวกันครับ",
    },
    {
      question: "จดโดเมนเป็นชื่อจริงปลอดภัยไหม?",
      answer:
        "ปลอดภัยครับ แนะนำให้จดเป็นชื่อแบรนด์ที่คุณต้องการสร้างตัวตน หากกังวลเรื่องข้อมูลส่วนตัว เราเปิดระบบ Domain Privacy ได้ครับ",
    },
    {
      question: "นานไหมกว่า Google จะอัปเดตข้อมูลใหม่?",
      answer:
        "ประมาณ 1-4 สัปดาห์ครับ หลังจากเรา Submit Sitemap ใหม่ Google จะเริ่มปรับปรุงข้อมูลใน Knowledge Graph ครับ",
    },
  ],

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
