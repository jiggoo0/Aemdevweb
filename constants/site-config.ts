/** @format */

import type { SiteConfig } from "@/types"

export const siteConfig: SiteConfig = {
  // ข้อมูลนิติบุคคล/เจ้าของระบบ
  company: {
    name: "AEMDEVWEB",
    fullName: "AEMDEVWEB Co., Ltd.",
    email: "me@aemdevweb.com",
  },

  // ข้อมูลโครงการและพิกัดตัวตนเว็บไซต์
  project: {
    name: "AEMDEVWEB",
    shortName: "AEM",
    nameTH: "เอ็ม-เดฟ-เว็บ",
    title: "รับทำเว็บไซต์ Landing Page เน้นปิดการขาย",
    slogan: "โครงสร้างชัด โหลดไว พร้อมรองรับการเติบโตของธุรกิจ",
    description:
      "บริการวางโครงสร้างระบบ Landing Page สำหรับ SME ที่เน้นประสิทธิภาพความเร็วสูงสุด วางพิกัดงานเทคนิค SEO ตั้งแต่เลเยอร์แรกโดย นายเอ็มซ่ามากส์ เพื่อเพิ่มโอกาสการเข้าถึงและอัตราการปิดยอดขาย การันตี LCP 0.6s",
    url: "https://www.aemdevweb.com",
    ogImage: "https://www.aemdevweb.com/og-image.png",
  },

  // ข้อมูลตัวบุคคล (Direct Specialist)
  expert: {
    name: "นายเอ็มซ่ามากส์",
    role: "Technical SEO Consultant & Next.js Structure Specialist",
  },

  // คลังคำค้นหาสำหรับการจัดลำดับ
  keywords: {
    list: [
      "รับทำเว็บไซต์ Landing Page",
      "รับทำ SEO SME",
      "เว็บไซต์เน้นปิดการขาย",
      "ที่ปรึกษา Technical SEO",
    ],
    all: "รับทำเว็บไซต์ Landing Page, เน้นปิดการขาย, รับทำ SEO SME, นายเอ็มซ่ามากส์, AEMDEVWEB",
    core: [
      "Technical SEO Optimization",
      "Organic Search Strategy",
      "Conversion Rate Optimization",
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    brand: ["AEMDEVWEB", "นายเอ็มซ่ามากส์", "Alongkorl Yomkerd"],
  },

  // ระบบเชื่อมต่อภายนอก
  links: {
    line: "https://lin.ee/6lgJox0",
    lineId: "@127cnthn",
    facebook: "https://facebook.com/aemdevweb",
    linkedin: "https://www.linkedin.com/in/alongkorl-aemdevweb",
    personal: "https://me.aemdevweb.com",
  },

  contact: {
    email: "me@aemdevweb.com",
    lineId: "@127cnthn",
    facebook: "https://facebook.com/aemdevweb",
  },

  // ข้อความเชิญชวนดำเนินการ
  cta: {
    main: "ปรึกษาแนวทางโปรเจกต์",
    secondary: "ดูแนวทางการทำงาน",
    pricing: "ดูแพ็กเกจบริการ",
  },

  // มาตรฐานเทคนิคที่ล็อคไว้
  standards: {
    performance: 100,
    lcp: 0.6,
    security: "Enterprise-Grade SSL (HSTS Enabled)",
    aiReadiness: "Advanced Schema Markup & JSON-LD Injection",
  },
}
