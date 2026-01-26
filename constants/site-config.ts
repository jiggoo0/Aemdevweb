/** @format */

import type { SiteConfig } from "@/types"

export const siteConfig: SiteConfig = {
  // 1. ข้อมูลนิติบุคคล/เจ้าของระบบ
  company: {
    name: "AEMDEVWEB",
    fullName: "AEMDEVWEB Co., Ltd.",
    email: "me@aemdevweb.com",
  },

  // 2. ข้อมูลโครงการและพิกัดตัวตนเว็บไซต์ (SEO)
  project: {
    name: "AEMDEVWEB",
    shortName: "AEM",
    nameTH: "เอ็ม-เดฟ-เว็บ",
    title: "รับวางโครงสร้าง Landing Page ความเร็วสูงเพื่อเพิ่มยอดขายสำหรับ SME",
    slogan: "โครงสร้างชัด โหลดไว พร้อมรองรับการเติบโตของธุรกิจ",
    description:
      "บริการวางระบบ Landing Page สำหรับ SME และกลุ่มโรงงานที่เน้นความเร็วสูงสุด วางพิกัดงานเทคนิค SEO ตั้งแต่ชั้นฐานข้อมูลโดย นายเอ็มซ่ามากส์ เพื่อลดอัตราการหนีของลูกค้าและเพิ่มยอดทักจริง การันตีค่าความเร็ว LCP 0.6 วินาที",
    url: "https://www.aemdevweb.com",
    ogImage: "https://www.aemdevweb.com/og-image.png",
  },

  // 3. ข้อมูลตัวบุคคล (Direct Specialist)
  expert: {
    name: "นายเอ็มซ่ามากส์",
    role: "Technical SEO Consultant & Next.js Structure Specialist",
  },

  // 4. ข้อมูลสถิติยืนยันผลงาน (สำหรับใช้ในการ์ดตัวเลข)
  stats: [
    { label: "ธุรกิจที่วางระบบไปแล้ว", value: "50+", suffix: "กิจการ" },
    { label: "ความเร็วการโหลดเฉลี่ย", value: "0.6", suffix: "วินาที" },
    { label: "คะแนนประสิทธิภาพภาพรวม", value: "100", suffix: "เต็ม" },
  ],

  // 5. ผลลัพธ์เชิงธุรกิจ (สำหรับส่วน ValueProp)
  businessImpact: {
    speed: "เปิดไวขึ้น 3 เท่า ลดโอกาสเสียลูกค้าได้มากกว่า 40%",
    seo: "วางพิกัดข้อมูลให้ AI และระบบค้นหาดึงไปแสดงผลได้แม่นยำที่สุด",
    conversion: "เน้นการจัดวางลำดับข้อมูลที่กระตุ้นให้เกิดการติดต่อสอบถามจริง",
  },

  // 6. พิกัดคำค้นหา (Keywords)
  keywords: {
    list: [
      "รับทำเว็บไซต์โรงงานอุตสาหกรรม",
      "วางระบบ Landing Page SME",
      "ปรับแต่งความเร็วเว็บไซต์",
      "ที่ปรึกษา Technical SEO",
    ],
    all: "รับทำเว็บไซต์ Landing Page, ปิดการขาย, SEO SME, นายเอ็มซ่ามากส์, AEMDEVWEB",
    core: [
      "Technical SEO Optimization",
      "Organic Search Strategy",
      "Conversion Rate Optimization",
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    brand: ["AEMDEVWEB", "นายเอ็มซ่ามากส์", "Alongkorl Yomkerd"],
  },

  // 7. พิกัดเชื่อมต่อภายนอก (ชุดเดิมสำหรับรองรับโค้ดเก่า)
  links: {
    line: "https://lin.ee/6lgJox0",
    lineId: "@127cnthn",
    facebook: "https://facebook.com/aemdevweb",
    linkedin: "https://www.linkedin.com/in/alongkorl-aemdevweb",
    personal: "https://me.aemdevweb.com",
  },

  // 8. ระบบจัดการข้อมูลการติดต่อ (ชุดใหม่สำหรับฟอร์มและปุ่มกด)
  contact: {
    email: "me@aemdevweb.com",
    line: "https://lin.ee/6lgJox0",
    lineId: "@127cnthn",
    facebook: "https://facebook.com/aemdevweb",
    linkedin: "https://www.linkedin.com/in/alongkorl-aemdevweb",
    personal: "https://me.aemdevweb.com",
  },

  // 9. ข้อความเชิญชวน (CTA)
  cta: {
    main: "ปรึกษาแนวทางโปรเจกต์",
    secondary: "ดูแนวทางการทำงาน",
    pricing: "ดูแพ็กเกจบริการ",
  },

  // 10. มาตรฐานเทคนิคที่ส่งมอบ
  standards: {
    performance: 100,
    lcp: 0.6,
    security: "Enterprise SSL พร้อมระบบป้องกันพิกัดข้อมูล",
    aiReadiness: "โครงสร้างข้อมูลระดับสูงรองรับ Search AI 2026",
  },
}
