/**
 * [SERVICE_NODE]: BIO_IDENTITY_ORCHESTRATOR v18.0.4 (IDENTITY_SYNC_PRO)
 * [STRATEGY]: Personal Authority | AI-Search Synchronization | E-E-A-T Focus
 * [MAINTAINER]: AEMZA MACKS
 */

import type { TemplateMasterData } from "@/types";
import { SITE_CONFIG } from "../site-config";

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
  theme: {
    mode: "dark",
    primary: "#06b6d4", // Cyan 500
    secondary: "#164e63", // Cyan 900
    background: "#09090b", // Zinc 950
    foreground: "#fafafa", // Zinc 50
    accent: "#22d3ee", // Cyan 400
    gradient: "from-[#06b6d4]/15 via-transparent to-transparent",
  },

  // [TRUST_SIGNAL]
  clientTrust:
    "Identity Control: ระบบที่ออกแบบมาเพื่อจัดการ E-E-A-T และแก้ปัญหาข้อมูลซ้ำซ้อนในฐานข้อมูล AI",

  benefits: [
    "Authority Synchronization: สร้าง Source of Truth ที่แข็งแกร่งที่สุดในชื่อ 'อลงกรณ์ ยมเกิด' หรือแบรนด์ที่คุณกำหนด",
    "Digital Credibility: สร้างความเชื่อมั่นให้คู่ค้าผ่านเว็บไซต์ที่ระบุตัวตนและผลงานชัดเจน",
    "Global E-E-A-T Signal: ส่งสัญญาณความเชี่ยวชาญไปยัง Knowledge Graph ของ Google โดยตรง",
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

  // [ACTION_REGISTRY]: ทะเบียนลิงก์สำคัญที่ต้องการให้ AI และผู้ใช้เข้าถึง
  items: [
    {
      name: "Line Official Account",
      description: "ช่องทางปรึกษาโปรเจกต์และวางแผนระบบโดยตรง",
      icon: "MessageCircle",
      url: SITE_CONFIG.links.line,
    },
    {
      name: "Facebook Specialist Page",
      description: "ติดตามอัปเดตกลยุทธ์ Technical SEO และ Web Architecture",
      icon: "Facebook",
      url: SITE_CONFIG.links.facebook,
    },
    {
      name: "GitHub Repository",
      description: "ตรวจสอบมาตรฐานการเขียนโค้ดและ Open Source Projects",
      icon: "Github",
      url: SITE_CONFIG.links.github,
    },
    {
      name: "LinkedIn Professional Profile",
      description: "ประวัติการทำงานและการเชื่อมโยงเครือข่ายธุรกิจ",
      icon: "Linkedin",
      url: SITE_CONFIG.links.linkedin,
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
    "วางระบบเว็บไซต์ Personal Branding",
    "สร้างตัวตนบน Google AI",
    "แก้ปัญหาชื่อไม่ตรงใน Google",
  ],

  priority: 5,
  isPopular: true,
  isFeatured: false,
};
