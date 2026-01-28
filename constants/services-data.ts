/** @format */

import { ServiceIconName } from "@/types"

/* -------------------------------------------------------------------------- */
/* 1. นิยามรูปแบบข้อมูล (Data Schema)                                              */
/* -------------------------------------------------------------------------- */

export type ServiceCategory =
  | "ReadyMade" // เว็บสำเร็จรูป
  | "Business" // ธุรกิจรายย่อยและเฉพาะทาง
  | "Digital" // บริการระบบงานต่อเนื่อง

export type ThemeColor =
  | "slate"
  | "emerald"
  | "blue"
  | "indigo"
  | "amber"
  | "rose"
  | "orange"
  | "violet"

export interface ServiceItem {
  id: string
  title: string
  slug: string
  description: string
  thumbnail: string // พิกัดภาพตัวอย่างบริการ
  price: string // สำหรับแสดงผล เช่น "1,990.-"
  priceValue: number // สำหรับคำนวณ
  renewalPrice?: string
  features: string[]
  promotion?: string
  themeColor: ThemeColor
  category: ServiceCategory
  highlight?: boolean
  iconName: ServiceIconName
}

export interface CategoryInfo {
  slug: string
  name: string
  themeColor: ThemeColor
  description: string
  iconName: ServiceIconName
}

/* -------------------------------------------------------------------------- */
/* 2. หมวดหมู่บริการ - จัดกลุ่มตามพิกัดงาน 2026                                   */
/* -------------------------------------------------------------------------- */

export const categoriesData: CategoryInfo[] = [
  {
    slug: "ready-made",
    name: "Web Ready: เว็บสำเร็จรูป",
    themeColor: "orange",
    description: "เลือกแบบที่ใช่ ลงข้อมูลพร้อมขาย ออนไลน์ได้ภายใน 24 ชม.",
    iconName: "Zap",
  },
  {
    slug: "business-niche",
    name: "Business & Niche: ธุรกิจเฉพาะทาง",
    themeColor: "blue",
    description: "เน้นระบบงานที่ตอบโจทย์ SME และบริการในพื้นที่",
    iconName: "Building2",
  },
  {
    slug: "digital-recurring",
    name: "Digital & Service: บริการต่อเนื่อง",
    themeColor: "violet",
    description: "การวางระบบ SEO และการดูแลพิกัดเว็บระยะยาว",
    iconName: "TrendingUp",
  },
]

/* -------------------------------------------------------------------------- */
/* 3. รายละเอียด 10 บริการหลัก (AEMDEVWEB Core Services)                          */
/* -------------------------------------------------------------------------- */

export const servicesData: ServiceItem[] = [
  // --- [กลุ่มที่ 1]: เว็บไซต์สำเร็จรูป (Ready-Made) ---
  {
    id: "svc-salepage",
    title: "1-Hour SalePage Pro",
    slug: "salepage_single",
    category: "ReadyMade",
    themeColor: "orange",
    description:
      "Landing Page หน้าเดียว วางพิกัดมาเพื่อสายยิงแอดโดยเฉพาะ โหลดไวหยุดลูกค้าได้ทันที",
    thumbnail: "/images/templates/project-01.webp",
    price: "1,990.-",
    priceValue: 1990,
    renewalPrice: "990.- / ปี",
    features: [
      "ระบบโหลดไวระดับปีศาจ ลูกค้าไม่กดหนี",
      "วางปุ่มทักไลน์ในพิกัดที่กดง่ายที่สุด",
      "รองรับการฝังพิกัด Facebook/TikTok Pixel",
      "ใช้ชื่อโดเมนระบบได้ทันทีไม่ต้องรอ",
    ],
    highlight: true,
    iconName: "Zap",
  },
  {
    id: "svc-express",
    title: "Express Web (เว็บนามบัตร)",
    slug: "corporate_lite",
    category: "ReadyMade",
    themeColor: "blue",
    description:
      "วางพิกัดข้อมูลธุรกิจแบบหน้าเดียว ครบถ้วน เนี้ยบ และดูน่าเชื่อถือ",
    thumbnail: "/images/templates/project-01.webp",
    price: "2,900.-",
    priceValue: 2900,
    renewalPrice: "1,500.- / ปี",
    features: [
      "มีพิกัดข้อมูลครบทั้ง บริการ และส่วนติดต่อ",
      "ออนไลน์ระบบได้ภายใน 24 ชม. หลังส่งงาน",
      "วางโครงสร้างพื้นฐานรองรับงาน SEO",
    ],
    promotion: "ฟรีพิกัดโดเมน .com ในปีแรก",
    iconName: "Clock",
  },
  {
    id: "svc-budget",
    title: "Budget Saver (เว็บเริ่มต้น)",
    slug: "starter_landing",
    category: "ReadyMade",
    themeColor: "slate",
    description:
      "พิกัดราคาประหยัดสำหรับผู้เริ่มต้น ลงข้อมูลพื้นฐานครบพร้อมใช้งาน",
    thumbnail: "/images/templates/project-01.webp",
    price: "990.-",
    priceValue: 990,
    renewalPrice: "590.- / ปี",
    features: [
      "ราคาเข้าถึงง่ายที่สุดสำหรับร้านเล็กๆ",
      "เลือกพิกัดเทมเพลตมาตรฐานแล้วลงงานได้เลย",
      "ใช้งานผ่านชื่อโดเมนของระบบ",
    ],
    iconName: "Wallet",
  },

  // --- [กลุ่มที่ 2]: เว็บไซต์ธุรกิจ & เฉพาะทาง (Business & Niche) ---
  {
    id: "svc-biz-pro",
    title: "Biz Fast Track (SME Pro)",
    slug: "corporate_pro",
    category: "Business",
    themeColor: "indigo",
    description:
      "วางระบบเว็บธุรกิจ 3-5 หน้า เพิ่มพิกัดความน่าเชื่อถือและรองรับข้อมูลจำนวนมาก",
    thumbnail: "/images/templates/project-01.webp",
    price: "4,900.-",
    priceValue: 4900,
    renewalPrice: "2,500.- / ปี",
    features: [
      "พิกัดหน้า Home, About, Service, Portfolio, Contact",
      "วางระบบบทความเพื่อดึงพิกัดลูกค้าจาก Google",
      "ระบบงานรองรับการขยายตัวได้ดี",
    ],
    highlight: true,
    iconName: "Building2",
  },
  {
    id: "svc-local",
    title: "Local Biz (ธุรกิจท้องถิ่น)",
    slug: "local_service",
    category: "Business",
    themeColor: "emerald",
    description:
      "เน้นงาน Local SEO สำหรับธุรกิจที่มีหน้าร้าน คลินิก หรืออู่ซ่อมรถ",
    thumbnail: "/images/templates/project-01.webp",
    price: "3,900.-",
    priceValue: 3900,
    renewalPrice: "1,500.- / ปี",
    features: [
      "วางคีย์เวิร์ดเน้นพื้นที่เพื่อให้คนในพื้นที่ค้นหาเจอ",
      "ปุ่มโทรและพิกัดแผนที่ชัดเจนที่สุด",
      "รองรับการใช้งานผ่านมือถือแบบกริบๆ",
    ],
    iconName: "MapPin",
  },
  {
    id: "svc-cafe",
    title: "Cafe & Menu (ร้านอาหาร)",
    slug: "restaurant_cafe",
    category: "Business",
    themeColor: "amber",
    description: "ระบบโชว์เมนูออนไลน์ที่เจ้าของร้านจัดการพิกัดราคาได้เอง",
    thumbnail: "/images/templates/project-01.webp",
    price: "3,500.-",
    priceValue: 3500,
    renewalPrice: "1,500.- / ปี",
    features: [
      "แก้พิกัดราคาและเมนูได้เองผ่านระบบจัดการง่ายๆ",
      "เน้นภาพลักษณ์เมนูให้น่าสนใจ",
      "พร้อมพิกัด QR Code สำหรับตั้งที่ร้าน",
    ],
    iconName: "Coffee",
  },
  {
    id: "svc-event",
    title: "Event & Magic (อีเวนต์/สายมู)",
    slug: "event_magic",
    category: "Business",
    themeColor: "rose",
    description:
      "ระบบการ์ดเชิญงานแต่ง หรือพิกัดจองคิวออนไลน์ พร้อมตัวนับเวลาถอยหลัง",
    thumbnail: "/images/templates/project-01.webp",
    price: "1,500.-",
    priceValue: 1500,
    features: [
      "มีพิกัดธีมงานแต่งและงานมงคลให้เลือก",
      "ระบบตอบรับและฟอร์มเก็บพิกัดข้อมูลลูกค้า",
      "ตั้งพิกัดนับถอยหลังสู่วันสำคัญได้",
    ],
    promotion: "จบงานแล้วต่ออายุพิกัดละ 500.- ต่อปี",
    iconName: "Heart",
  },

  // --- [กลุ่มที่ 3]: บริการ Digital & Recurring (Digital) ---
  {
    id: "svc-profile",
    title: "My Profile (นามบัตรดิจิทัล)",
    slug: "personal_bio",
    category: "Digital",
    themeColor: "violet",
    description:
      "หน้าเว็บรวมลิงก์ (Link-in-bio) พรีเมียม สร้างตัวตนให้น่าพึ่งพา",
    thumbnail: "/images/templates/project-01.webp",
    price: "990.- / ปี",
    priceValue: 990,
    features: [
      "รวมพิกัดโซเชียลทั้งหมดไว้ในลิงก์เดียว",
      "ดีไซน์เนี้ยบ สร้างพิกัดความน่าเชื่อถือส่วนบุคคล",
      "ช่วยให้ชื่อของคุณถูกค้นหาเจอในพิกัด Google",
    ],
    iconName: "UserCircle",
  },
  {
    id: "svc-seo",
    title: "SEO Ranking (รายเดือน)",
    slug: "seo_agency",
    category: "Digital",
    themeColor: "emerald",
    description:
      "วางระบบดันอันดับหน้าแรก ปรับโครงสร้างเว็บให้กริบตามมาตรฐาน 2026",
    thumbnail: "/images/templates/project-01.webp",
    price: "12,900.- / เดือน",
    priceValue: 12900,
    features: [
      "ตรวจสอบพิกัดโครงสร้างระบบงานอย่างละเอียด",
      "วางแผนเนื้อหาคุณภาพพิกัดละ 4 บทต่อเดือน",
      "สร้างความน่าเชื่อถือจากภายนอกเข้าสู่พิกัดเว็บ",
    ],
    promotion: "วางระบบขั้นต่ำ 3 เดือน เพื่อพิกัดผลลัพธ์ที่ชัดเจน",
    iconName: "TrendingUp",
  },
  {
    id: "svc-maintenance",
    title: "Web Care (ดูแล/ซ่อม)",
    slug: "maintenance_page",
    category: "Digital",
    themeColor: "slate",
    description: "รับจัดการพิกัดเว็บพัง แก้ระบบล่ม หรือกำจัดสิ่งแปลกปลอม",
    thumbnail: "/images/templates/project-01.webp",
    price: "เริ่มต้น 2,500.-",
    priceValue: 2500,
    features: [
      "จัดการพิกัดฉุกเฉิน กู้คืนระบบงานด่วน",
      "ย้ายพิกัดโฮสต์มายังระบบที่ซิ่งกว่าเดิม",
      "ตรวจสอบพิกัดความปลอดภัยของระบบงาน",
    ],
    iconName: "ShieldCheck",
  },
]
