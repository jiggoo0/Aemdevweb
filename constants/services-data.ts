/** @format */

// 📦 Define Icon Names Type
// ต้องตรงกับ Keys ใน iconMap ของไฟล์ components/shared/ServiceCard.tsx
export type ServiceIconName =
  | "Rocket"
  | "ShieldCheck"
  | "Code2"
  | "Gauge"
  | "Zap"

export interface ServiceItem {
  id: string
  slug: string
  title: string
  description: string
  longDescription?: string
  // ✅ เก็บชื่อ Icon เป็น String เพื่อความไหลลื่นของ Server/Client Components
  iconName: ServiceIconName
  priceStart: number
  priceDisplay: string
  features: string[]
  isFeatured?: boolean
  mockups: {
    mobile: string
    desktop: string
  }
}

/**
 * 🛠️ รายการบริการ AemDevWeb (Updated SME 2026 Strategy)
 * ปรับราคาและเนื้อหาเพื่อเน้นความคุ้มค่าและความเร็วระดับปีศาจ
 */
export const servicesData: ServiceItem[] = [
  {
    id: "svc_01",
    slug: "sale-page",
    title: "Sale Page ปิดการขาย (AI-Driven)",
    description:
      "หน้าเดียวจบ ปิดดีลไว! ออกแบบเพื่อยิง Ads Facebook/TikTok โดยเฉพาะ",
    longDescription:
      "เปลี่ยนคนดูให้กลายเป็นลูกค้าด้วยโครงสร้าง Sale Page ระดับสากล ผสานการเขียนคำขายด้วย AI Copywriting ช่วยกระตุ้นการตัดสินใจ โหลดไวระดับ 0.8 วินาที เพื่อไม่ให้คุณเสียโอกาสแม้แต่วินาทีเดียว",
    iconName: "Rocket",
    priceStart: 2590,
    priceDisplay: "2,590.-",
    features: [
      "ฟรี Domain & Hosting (.com) 1 ปีแรก",
      "AI Copywriting ช่วยร่างคำขายปิดดีล",
      "ติดตั้ง Facebook CAPI & TikTok Pixel",
      "ระบบแจ้งเตือนออเดอร์เข้า Line OA ทันที",
    ],
    isFeatured: true,
    mockups: {
      mobile: "/images/templates/project-01.webp",
      desktop: "/images/templates/project-01.webp",
    },
  },
  {
    id: "svc_02",
    slug: "corporate",
    title: "SME Corporate Standard",
    description:
      "สร้างความน่าเชื่อถือระดับบริษัทจดทะเบียน รองรับ SEO ติดหน้าแรก Google",
    longDescription:
      "เว็บไซต์กึ่งทางการที่เน้นสร้าง Brand Authority ให้กับ หจก. และบริษัทเปิดใหม่ จัดโครงสร้างถูกต้องตามหลัก SEO On-Page 100% เพื่อให้ธุรกิจของคุณดูเป็นมืออาชีพและค้นหาง่ายบนโลกออนไลน์",
    iconName: "ShieldCheck",
    priceStart: 6900,
    priceDisplay: "6,900.-",
    features: [
      "ระบบหลังบ้าน (CMS) แก้ไขข้อมูลเองได้",
      "โครงสร้างรองรับ SEO 100% (On-Page)",
      "SSL Certificate มาตรฐานความปลอดภัยสูง",
      "รองรับ Responsive แสดงผลคมชัดทุกหน้าจอ",
    ],
    isFeatured: true,
    mockups: {
      mobile: "/images/templates/project-01.webp",
      desktop: "/images/templates/project-01.webp",
    },
  },
  {
    id: "svc_03",
    slug: "internal-system",
    title: "Custom Business Logic (Web App)",
    description:
      "เปลี่ยนงาน Excel ที่ยุ่งยาก เป็นระบบอัตโนมัติที่ออกแบบตามการทำงานจริง",
    longDescription:
      "เลิกปวดหัวกับข้อมูลกระจัดกระจาย ด้วยระบบ Web Application ที่ออกแบบมาเพื่อธุรกิจคุณโดยเฉพาะ ไม่ว่าจะเป็นระบบสต็อก, ระบบจัดการสมาชิก หรือ Dashboard สรุปยอดขายแบบ Real-time",
    iconName: "Code2",
    priceStart: 12900,
    priceDisplay: "12,900.-",
    features: [
      "Dashboard สรุปภาพรวมแบบ Real-time",
      "ระบบฐานข้อมูล (Database) ความปลอดภัยสูง",
      "Custom Workflow ตามหน้างานจริง",
      "Database Backup อัตโนมัติ ป้องกันข้อมูลสูญหาย",
    ],
    isFeatured: false,
    mockups: {
      mobile: "/images/templates/project-01.webp",
      desktop: "/images/templates/project-01.webp",
    },
  },
  {
    id: "svc_04",
    slug: "speed-seo",
    title: "Web Surgery (Speed & SEO)",
    description:
      "ผ่าตัดเว็บเก่าให้แรงติดจรวด ปรับจูนคะแนน Google ให้เขียวทั้งกระดาน",
    longDescription:
      "บริการ Technical Optimization สำหรับเจ้าของเว็บที่มีปัญหาเว็บอืด โหลดช้า หรืออันดับตก เราจะเข้าไปผ่าตัดโครงสร้างโค้ด ปรับจูน Core Web Vitals ให้ผ่านเกณฑ์ Google เพื่อประสบการณ์ใช้งานที่ดีที่สุด",
    iconName: "Gauge",
    priceStart: 1900,
    priceDisplay: "1,900.-",
    features: [
      "การันตี Google PageSpeed (Mobile > 90)",
      "แก้ไข Core Web Vitals (LCP, CLS, INP)",
      "Image Optimization ลดขนาดรูปไม่ลดความชัด",
      "ตั้งค่า Search Console & Analytics 4",
    ],
    isFeatured: false,
    mockups: {
      mobile: "/images/templates/project-01.webp",
      desktop: "/images/templates/project-01.webp",
    },
  },
]

/**
 * 🛠️ Helpers Functionality
 */

// 🔍 ดึงข้อมูลบริการตาม Slug
export const getServiceBySlug = (slug: string): ServiceItem | undefined =>
  servicesData.find((s) => s.slug === slug)

// 🔍 ดึงเฉพาะบริการแนะนำ (Featured)
export const getFeaturedServices = (): ServiceItem[] =>
  servicesData.filter((s) => s.isFeatured)

// 🔍 ดึงบริการอื่นๆ ที่ไม่ใช่ตัวปัจจุบัน (สำหรับ Cross-sell)
export const getOtherServices = (currentSlug: string): ServiceItem[] =>
  servicesData.filter((s) => s.slug !== currentSlug)
