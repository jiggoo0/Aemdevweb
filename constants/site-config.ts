/** @format */

import { SiteConfig } from "@/types"

/**
 * ศูนย์กลางการตั้งค่าเว็บไซต์ (Central Site Configuration)
 * ควบคุมพิกัดข้อมูล SEO, Branding และช่องทางการติดต่อทั้งหมดของ AEMDEVWEB
 */
export const siteConfig: SiteConfig = {
  // 1. ข้อมูลนิติบุคคลและหน่วยงาน (Corporate Identity)
  company: {
    name: "AEMDEVWEB",
    fullName: "AEMDEVWEB Co., Ltd.",
    email: "me@aemdevweb.com",
    address: "Technical SEO Lab, Thailand",
  },

  // 2. ข้อมูลโครงการและพิกัดตัวตนเว็บไซต์ (Search Engine Optimization)
  project: {
    name: "AEMDEVWEB",
    shortName: "AEM",
    nameTH: "เอ็ม-เดฟ-เว็บ",
    // SEO Strategy: ใช้ "รับทำ Landing Page" นำหน้าเพื่อดึง Traffic และตามด้วย "วางโครงสร้าง" เพื่อสร้างระดับแบรนด์
    title:
      "รับทำ Landing Page วางโครงสร้างความเร็วสูงเพื่อเพิ่มยอดขายสำหรับ SME",
    slogan: "โครงสร้างชัด โหลดไว มาตรฐาน Technical SEO ระดับสากล",
    description:
      "บริการรับทำ Landing Page และวางระบบโครงสร้างเว็บไซต์สำหรับ SME และกลุ่มโรงงานที่เน้นความเร็วสูงสุด (LCP < 0.8s) วางพิกัดงานเทคนิคโดย นายเอ็มซ่ามากส์ เพื่อเพิ่มประสิทธิภาพการปิดการขายและอันดับบน Google",
    url: "https://www.aemdevweb.com",
    ogImage: "https://www.aemdevweb.com/og-image.png",
  },

  // 3. ข้อมูลผู้เชี่ยวชาญ (Specialist Identity)
  expert: {
    name: "นายเอ็มซ่ามากส์",
    role: "Technical SEO Specialist & Lead Solution Architect",
  },

  // 4. ข้อมูลสถิติยืนยันผลงาน (Performance Statistics)
  stats: [
    { label: "ธุรกิจที่ไว้วางใจระบบ", value: "50+", suffix: "Project" },
    { label: "ความเร็วเฉลี่ย (LCP)", value: "< 0.8", suffix: "วินาที" },
    { label: "คะแนนประสิทธิภาพภาพรวม", value: "95-100", suffix: "Score" },
  ],

  // 5. ผลกระทบเชิงธุรกิจ (Business Value Proposition)
  businessImpact: {
    speed: "ลดอัตราการสูญเสียลูกค้า (Bounce Rate) ด้วยความเร็วระดับวินาที",
    seo: "โครงสร้างข้อมูลที่โปรแกรมค้นหาและ AI เข้าใจตัวตนธุรกิจได้แม่นยำ",
    conversion:
      "เปลี่ยนผู้เข้าชมเป็นรายชื่อผู้ติดต่อด้วยกลยุทธ์ Information Hierarchy",
  },

  // 6. พิกัดคำค้นหา (Keywords & Search Entities)
  keywords: {
    list: [
      "รับทำ Landing Page",
      "รับทำเว็บไซต์โรงงานอุตสาหกรรม",
      "วางโครงสร้าง Sales Page",
      "Technical SEO Consultant",
    ],
    all: "รับทำ Landing Page, รับทำเว็บไซต์, Technical SEO, Next.js, นายเอ็มซ่ามากส์, AEMDEVWEB",
    core: [
      "Performance Optimization",
      "Organic Search Visibility",
      "User Experience Engineering",
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    brand: [
      "AEMDEVWEB",
      "อลงกรณ์ ยมเกิด",
      "นายเอ็มซ่ามากส์",
      "Alongkorl Yomkerd",
    ],
  },

  // 7. พิกัดเชื่อมต่อโซเชียล (Social Integration - Legacy Support)
  links: {
    line: "https://lin.ee/6lgJox0",
    lineId: "@127cnthn",
    facebook: "https://facebook.com/aemdevweb",
    linkedin: "https://www.linkedin.com/in/alongkorl-aemdevweb",
    personal: "https://me.aemdevweb.com",
  },

  // 8. ระบบจัดการข้อมูลการติดต่อ (Primary Communication)
  contact: {
    email: "me@aemdevweb.com",
    line: "https://lin.ee/6lgJox0",
    lineId: "@127cnthn",
    facebook: "https://facebook.com/aemdevweb",
    linkedin: "https://www.linkedin.com/in/alongkorl-aemdevweb",
    personal: "https://me.aemdevweb.com",
    phone: "0xx-xxx-xxxx",
  },

  // 9. ข้อความเชิญชวน (Calls to Action)
  cta: {
    main: "วิเคราะห์โครงสร้างโปรเจกต์",
    secondary: "ชมผลงานทางเทคนิค",
    pricing: "แพ็กเกจบริการ",
  },

  // 10. มาตรฐานงานระบบที่ส่งมอบ (Engineering Standards)
  standards: {
    performance: 98,
    lcp: 0.8,
    security: "Enterprise-grade SSL & Data Privacy Layer",
    aiReadiness: "Advanced Schema Markup for Search AI 2026",
  },
}
