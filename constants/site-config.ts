/** @format */

import { SiteConfig } from "@/types"

/**
 * AEMDEVWEB Site Configuration (Core System)
 * ศูนย์กลางการตั้งค่าระบบงานและตัวตนของแบรนด์
 */
export const siteConfig: SiteConfig = {
  company: {
    name: "AEMDEVWEB",
    fullName: "บริษัท เอ็มเดฟเว็บ จำกัด",
    email: "me@aemdevweb.com",
    address: "กรุงเทพมหานคร, ประเทศไทย",
  },
  project: {
    name: "AEMDEVWEB | นายเอ็มซ่ามากส์ SEO",
    shortName: "AEM",
    nameTH: "เอ็ม-เดฟ-เว็บ",
    title:
      "AEMDEVWEB | รับทำเว็บไซต์ SEO ครบวงจร เริ่มต้น 1,990.- โดย นายเอ็มซ่ามากส์",
    slogan:
      "เว็บไว ไฟแรง! ระบบพร้อมใช้งานใน 1 ชม. วางโครงสร้างให้แรงตั้งแต่ออกตัว",
    description:
      "บริการรับทำเว็บไซต์ SEO ครบวงจร เริ่มต้นเพียง 1,990 บาท พัฒนาด้วย Next.js โหลดเร็วระดับปีศาจ (LCP < 0.8s) โครงสร้างแม่นยำ เหมาะสำหรับธุรกิจที่ต้องการยอดขายจริง",
    url: "https://www.aemdevweb.com",
    ogImage: "https://www.aemdevweb.com/og-image-seo-2026.png",
  },
  expert: {
    name: "นายเอ็มซ่ามากส์",
    realName: "อลงกรณ์ ยมเกิด",
    role: "ผู้เชี่ยวชาญด้านการวางระบบเว็บและ SEO (เน้นงานไว วิ่งหน้าแรก)",
  },
  stats: [
    { label: "ติดตั้งระบบไวใน", value: "60", suffix: "นาที" },
    { label: "ความเร็วโหลด (LCP)", value: "< 0.8", suffix: "วินาที" },
    { label: "คะแนน Google", value: "100", suffix: "คะแนนเต็ม" },
  ],
  businessImpact: {
    speed: "ออนไลน์ทันใจ: เลือกแบบที่ใช่ ระบบหลังบ้านพร้อมใช้งานทันที",
    seo: "โครงสร้างแห่งอนาคต: วางระบบเว็บให้ถูกหลักการค้นหาของ Google ปี 2026",
    conversion:
      "เน้นยอดขาย: ออกแบบปุ่มติดต่อให้ลูกค้ากดสะดวกและปิดการขายง่ายที่สุด",
  },
  keywords: {
    list: [
      "เว็บไซต์สำเร็จรูป",
      "รับทำเว็บไซต์ด่วน",
      "ทำเว็บ SEO ครบวงจร",
      "จ้างทำเว็บราคาถูก",
    ],
    all: "เว็บไซต์สำเร็จรูป, นายเอ็มซ่ามากส์, AEMDEVWEB, รับทำ SalePage, ทำเว็บติดหน้าแรก",
    core: ["บริการทำเว็บด่วน", "รับทำ SEO คุณภาพสูง", "วางระบบเว็บเพื่อยอดขาย"],
    tech: ["Next.js 16", "React 19", "Tailwind CSS 4", "TypeScript"],
    brand: ["AEMDEVWEB", "นายเอ็มซ่ามากส์ SEO", "Alongkorl Yomkerd"],
  },
  links: {
    line: "https://lin.ee/6lgJox0",
    lineId: "@127cnthn",
    facebook: "https://facebook.com/aemdevweb",
    linkedin: "https://www.linkedin.com/in/alongkorl-aemdevweb",
    personal: "https://me.aemdevweb.com",
    tiktok: "https://tiktok.com/@aemdevweb",
  },
  contact: {
    email: "me@aemdevweb.com",
    line: "https://lin.ee/6lgJox0",
    lineId: "@127cnthn",
    facebook: "https://facebook.com/aemdevweb",
    linkedin: "https://www.linkedin.com/in/alongkorl-aemdevweb", // แก้พิกัด Error
    tiktok: "https://tiktok.com/@aemdevweb", // แก้พิกัด Error
    personal: "https://me.aemdevweb.com", // แก้พิกัด Error
    phone: "0xx-xxx-xxxx",
  },
  cta: {
    main: "เลือกแบบเว็บพร้อมใช้",
    secondary: "ปรึกษาฟรี (ทักเลย)",
    pricing: "ดูราคาโปรโมชั่น",
  },
  standards: {
    performance: 100,
    lcp: 0.8,
    security: "ระบบความปลอดภัยมาตรฐานสากล",
    guarantee: "ดูแลโดย นายเอ็มซ่ามากส์ ตัวจริง (การันตีโครงสร้าง SEO 100%)",
  },
}
