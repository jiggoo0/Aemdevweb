/** @format */

import { SiteConfig } from "@/types"

/**
 * ศูนย์กลางการตั้งค่าเว็บไซต์ (Central Site Configuration)
 * ควบคุมพิกัดข้อมูลภาพลักษณ์ และระบบการติดต่อทั้งหมดของ AEMDEVWEB
 * ผู้ดูแลระบบ: นายเอ็มซ่ามากส์ (Alongkorl Yomkerd)
 * แนวทาง: เน้นภาษาที่เป็นกันเอง เข้าใจง่าย และแสดงผลลัพธ์ที่ชัดเจน
 */
export const siteConfig: SiteConfig = {
  // 1. ข้อมูลภาพลักษณ์องค์กร (Professional Identity)
  company: {
    name: "AEMDEVWEB",
    fullName: "AEMDEVWEB Co., Ltd.",
    email: "me@aemdevweb.com",
    address: "Bangkok, Thailand",
  },

  // 2. พิกัดตัวตนบนโลกออนไลน์ (Digital Presence & Content Strategy)
  project: {
    name: "AEMDEVWEB",
    shortName: "AEM",
    nameTH: "เอ็ม-เดฟ-เว็บ",
    // ยุทธศาสตร์: เน้นผลงาน Landing Page SME และความเร็วที่เป็นจุดขายหลัก
    title: "บริการทำเว็บไซต์สำหรับธุรกิจ และ Landing Page SME คุณภาพสูง",
    slogan: "โครงสร้างชัด โหลดไว พร้อมรองรับการเติบโตของคุณ",
    description:
      "บริการออกแบบและวางโครงสร้างเว็บไซต์สำหรับธุรกิจ โดยเฉพาะกลุ่ม SME และ B2B ที่เน้นความเร็วเป็นพิเศษ (LCP < 0.8s) พัฒนาโดย นายเอ็มซ่ามากส์ เพื่อช่วยให้ธุรกิจเดินหน้าได้อย่างต่อเนื่อง พร้อมรองรับการทำ technical SEO เพื่อติดอันดับบนหน้าแรกของ Google ผ่านระบบ Organic Search",
    url: "https://www.aemdevweb.com",
    ogImage: "https://www.aemdevweb.com/og-image.png",
  },

  // 3. ข้อมูลผู้เชี่ยวชาญ (Specialist Profile)
  expert: {
    name: "นายเอ็มซ่ามากส์",
    realName: "อลงกรณ์ ยมเกิด",
    role: "Digital Marketing Strategy & Lead Web Consultant",
  },

  // 4. สถิติที่พิสูจน์ผลลัพธ์ได้จริง (Proven Results)
  stats: [
    { label: "ธุรกิจที่ไว้วางใจ", value: "50+", suffix: "โครงการ" },
    { label: "ความเร็วเฉลี่ยในการเปิดเว็บ", value: "< 0.8", suffix: "วินาที" },
    { label: "คะแนนประสิทธิภาพระบบ", value: "95-100", suffix: "คะแนน" },
  ],

  // 5. คุณค่าที่ส่งมอบให้ธุรกิจ (Business Value Proposition)
  businessImpact: {
    speed: "ลดโอกาสการเสียลูกค้าด้วยความเร็วที่เหนือกว่ามาตรฐานทั่วไป",
    seo: "วางโครงสร้างเว็บไซต์ให้ Google และ AI เข้าใจธุรกิจของคุณได้ชัดเจนที่สุด",
    conversion:
      "เปลี่ยนผู้เข้าชมให้เป็นลูกค้าด้วยลำดับการนำเสนอที่เป็นระบบและน่าเชื่อถือ",
  },

  // 6. พิกัดคำที่ลูกค้าใช้ค้นหา (Search Intent Keywords)
  keywords: {
    list: [
      "บริการทำเว็บไซต์สำหรับธุรกิจ",
      "Landing Page SME",
      "technical SEO",
      "โครงสร้างเว็บไซต์",
      "Organic Search",
    ],
    all: "รับทำ Landing Page, รับทำเว็บไซต์, การตลาดออนไลน์, Next.js, นายเอ็มซ่ามากส์, อลงกรณ์ ยมเกิด, AEMDEVWEB, Unlink-th",
    core: [
      "Performance Optimization",
      "Search Visibility",
      "User Experience Strategy",
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    brand: [
      "AEMDEVWEB",
      "นายเอ็มซ่ามากส์",
      "อลงกรณ์ ยมเกิด",
      "Alongkorl Yomkerd",
      "Unlink-th",
    ],
  },

  // 7. ช่องทางเชื่อมต่อโซเชียล (Social Integration)
  links: {
    line: "https://lin.ee/6lgJox0",
    lineId: "@127cnthn",
    facebook: "https://facebook.com/aemdevweb",
    linkedin: "https://www.linkedin.com/in/alongkorl-aemdevweb",
    personal: "https://me.aemdevweb.com",
  },

  // 8. พิกัดการติดต่อสื่อสาร (Contact Hub)
  contact: {
    email: "me@aemdevweb.com",
    line: "https://lin.ee/6lgJox0",
    lineId: "@127cnthn",
    facebook: "https://facebook.com/aemdevweb",
    linkedin: "https://www.linkedin.com/in/alongkorl-aemdevweb",
    personal: "https://me.aemdevweb.com",
    phone: "0xx-xxx-xxxx",
  },

  // 9. ข้อความนำทางเพื่อปิดการขาย (Conversion Drivers)
  cta: {
    main: "ประเมินโครงการของคุณ",
    secondary: "เปิดชมผลงานตัวอย่าง",
    pricing: "เลือกรูปแบบที่เหมาะสม",
  },

  // 10. มาตรฐานงานที่ส่งมอบ (Service Standards)
  standards: {
    performance: 98,
    lcp: 0.8,
    security: "ระบบรักษาความปลอดภัยข้อมูลระดับมาตรฐานสากล",
    aiReadiness: "รองรับการประมวลผลของ Search AI และ Organic Search ปี 2026",
  },
}
