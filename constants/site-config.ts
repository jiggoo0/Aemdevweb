/** @format */
// พิกัดข้อมูล: constants/site-config.ts
// หน้าที่: กำหนดค่าพื้นฐานของระบบและพิกัดข้อมูลตัวตน (Core Config Node)
// มาตรฐาน: Ultra-Deep Level 7 | Specialist Optimization 2026
// ควบคุมสมรรถนะโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)

import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  // [1. CORPORATE IDENTITY]: อัตลักษณ์การทำงานและการยืนยันตัวตน
  company: {
    name: "AEMDEVWEB",
    fullName: "เอ็มเดฟเว็บ (AEMDEVWEB) โดย นายเอ็มซ่ามากส์",
    email: "me@aemdevweb.com",
    address: "กรุงเทพมหานคร, ประเทศไทย (Strategic Online Support)",
  },

  // [2. PROJECT & SEO METADATA]: พิกัดข้อมูลสำหรับการจัดอันดับสูงสุด
  project: {
    name: "AEMDEVWEB | Professional Technical SEO Specialist",
    shortName: "AEM",
    nameTH: "เอ็มเดฟเว็บ",
    title: "AEMDEVWEB | วางระบบเว็บไซต์และ Technical SEO โดย นายเอ็มซ่ามากส์",
    slogan:
      "High-Performance System: รากฐานระบบที่เปี่ยมสมรรถนะ พร้อมขับเคลื่อนธุรกิจใน 24 ชม.",
    description:
      "ผู้เชี่ยวชาญการวางรากฐานระบบเว็บไซต์ด้วย Next.js 16 มุ่งเน้นความเร็วระดับสูงสุด LCP ต่ำกว่า 0.8 วินาที เพื่อการจัดอันดับและยอดขายที่ยั่งยืนภายใต้การดูแลของ นายเอ็มซ่ามากส์",
    url: "https://www.aemdevweb.com",
    logo: "/images/logo-circuit.png",
    // พิกัดภาพ Open Graph สำหรับการแชร์ลง Social Media
    ogImage: "https://www.aemdevweb.com/og-image-seo-2026.png",
  },

  // [3. AUTHORITY EXPERT]: การยืนยันตัวตนระดับสูง (E-E-A-T Strategy)
  expert: {
    name: "นายเอ็มซ่ามากส์",
    realName: "นาย อลงกรณ์ ยมเกิด", // Specialist Verified Name
    role: "Technical SEO Consultant & Web Infrastructure Lead",
    bio: "ที่ปรึกษาการวางรากฐานระบบดิจิทัลด้วย Next.js และการวางระบบ Technical SEO มาตรฐานสากล มุ่งเน้นความเสถียรสูงสุดและการเก็บพิกัดข้อมูลที่แม่นยำที่สุด",
  },

  // [4. PERFORMANCE BENCHMARKS]: ตัวเลขชี้วัดสมรรถนะระบบจริง
  stats: [
    { label: "ระยะเวลาส่งมอบระบบ", value: "60", suffix: "นาที" },
    { label: "ความเร็ว LCP Optimized", value: "< 0.8", suffix: "วินาที" },
    { label: "Web Vitals Score", value: "100", suffix: "คะแนนเต็ม" },
  ],

  // [5. STRATEGIC VALUE]: คุณค่าเชิงยุทธศาสตร์ที่ส่งมอบให้ธุรกิจ
  businessImpact: {
    speed:
      "Operational Velocity: เลือกระบบที่ตอบโจทย์ พร้อมจัดการข้อมูลหลังบ้านได้ทันทีโดย นายเอ็มซ่ามากส์",
    seo: "Data Connectivity: วางพิกัดโครงสร้างระบบให้สอดคล้องกับการค้นหาและระบบ AI ในปี 2026",
    conversion:
      "Conversion Strategy: ออกแบบจุดตอบโจทย์ลูกค้า เพื่อเพิ่มโอกาสการปิดการขายสูงสุด",
  },

  // [6. STRATEGIC KEYWORDS]: พิกัดคำค้นหาสำคัญเพื่อการทำอันดับ
  keywords: {
    list: [
      "รับทำเว็บไซต์ SEO",
      "เว็บไซต์สำเร็จรูป 2026",
      "High-Performance Sale Page",
      "นาย อลงกรณ์ ยมเกิด",
      "นายเอ็มซ่ามากส์",
    ],
    all: "เว็บไซต์สำเร็จรูป, นายเอ็มซ่ามากส์, AEMDEVWEB, บริการทำ Sale Page, ระบบเว็บติดหน้าแรก, Next.js 16, Tailwind CSS 4, นายอลงกรณ์ ยมเกิด, เอ็มเดฟเว็บ",
    core: [
      "บริการพัฒนาเว็บไซต์ด่วน โดย นายเอ็มซ่ามากส์",
      "Technical SEO คุณภาพสูง",
      "วางระบบเว็บไซต์เชิงพาณิชย์",
    ],
    tech: ["Next.js 16", "React 19", "Tailwind CSS 4", "TypeScript"],
    brand: [
      "AEMDEVWEB",
      "นายเอ็มซ่ามากส์ SEO",
      "Alongkorl Yomkerd Specialist",
    ],
  },

  // [7. CONNECTIVITY HUB]: พิกัดการเชื่อมโยงข้อมูลแบรนด์ (LINE-Only Policy)
  links: {
    line: "https://lin.ee/6lgJox0",
    lineId: "@127cnthn",
    facebook: "https://facebook.com/aemdevweb",
    linkedin: "https://www.linkedin.com/in/alongkorl-aemdevweb",
    personal: "https://me.aemdevweb.com",
    tiktok: "https://tiktok.com/@aemdevweb",
    x: "https://x.com/xemwep91696",
    github: "https://github.com/aemdevweb",
  },

  // [8. CONTACT PROTOCOL]: ช่องทางสื่อสารทางการ
  contact: {
    email: "me@aemdevweb.com",
    phone: "0xx-xxx-xxxx",
  },

  // [9. CALL-TO-ACTION NODES]: จุดกระตุ้นการตัดสินใจ
  cta: {
    main: "เลือกรูปแบบระบบงานที่ นายเอ็มซ่ามากส์ คัดสรร",
    secondary: "ปรึกษาแผนงานโครงการฟรี",
    pricing: "ตรวจสอบรายละเอียดและระดับการลงทุน",
  },

  // [10. QUALITY ASSURANCE]: มาตรฐานการควบคุมคุณภาพระดับสูงสุด
  standards: {
    performance: 100,
    lcp: 0.8,
    security: "SSL Standard v26",
    guarantee:
      "ควบคุมคุณภาพโดย นายเอ็มซ่ามากส์ (นายอลงกรณ์ ยมเกิด) พร้อมดูแลระบบให้สมบูรณ์แบบ 100%",
  },
};
