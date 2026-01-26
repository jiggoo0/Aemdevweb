/** @format */

import {
  Layout,
  Store,
  Building2,
  Factory,
  Settings2,
  TrendingUp,
} from "lucide-react"

/* -------------------------------------------------------------------------- */
/* นิยามประเภทข้อมูล (Strict Mode)                                              */
/* -------------------------------------------------------------------------- */

export type ServiceCategory =
  | "Starter"
  | "SME"
  | "Corporate"
  | "Industrial"
  | "SEO_Technical"
  | "SEO_Organic"

export type ThemeColor =
  | "slate"
  | "emerald"
  | "blue"
  | "indigo"
  | "amber"
  | "rose"

export interface ServiceItem {
  id: string
  title: string
  description: string
  price: string
  priceValue: number
  features: string[]
  promotion?: string
  slug: string
  themeColor: ThemeColor
  category: ServiceCategory
  highlight?: boolean
}

export interface CategoryInfo {
  slug: string
  name: string
  themeColor: ThemeColor
  description: string
  icon: React.ElementType
}

/* -------------------------------------------------------------------------- */
/* ข้อมูลหมวดหมู่ - เน้นกลุ่ม SME และโรงงาน                                        */
/* -------------------------------------------------------------------------- */

export const categoriesData: CategoryInfo[] = [
  {
    slug: "starter",
    name: "Sale Page (หน้าเดียวจบ)",
    themeColor: "slate",
    description: "เน้นการปิดการขายและรองรับการยิงโฆษณาด้วยระบบที่โหลดไวที่สุด",
    icon: Layout,
  },
  {
    slug: "sme",
    name: "เว็บไซต์ธุรกิจ SME",
    themeColor: "emerald",
    description: "ยกระดับความน่าเชื่อถือด้วยเว็บไซต์มาตรฐานสากล พร้อมระบบ Technical SEO",
    icon: Store,
  },
  {
    slug: "corporate",
    name: "เว็บไซต์องค์กร (Corporate)",
    themeColor: "blue",
    description: "เน้นภาพลักษณ์ระดับ B2B ความปลอดภัยสูง และความเสถียรของระบบในระยะยาว",
    icon: Building2,
  },
  {
    slug: "industrial",
    name: "ระบบแคตตาล็อกโรงงาน",
    themeColor: "indigo",
    description: "จัดการข้อมูลสินค้าอุตสาหกรรมจำนวนมาก ค้นหาง่าย และรองรับการทำใบเสนอราคา",
    icon: Factory,
  },
  {
    slug: "seo-technical",
    name: "ปรับแต่ง Technical SEO",
    themeColor: "amber",
    description: "แก้ไขโครงสร้างหลังบ้านเพื่อให้ระบบค้นหาเจอและจัดอันดับได้ง่ายขึ้น",
    icon: Settings2,
  },
  {
    slug: "seo-organic",
    name: "วางกลยุทธ์ SEO รายเดือน",
    themeColor: "rose",
    description: "เพิ่มยอดเข้าชมจากธรรมชาติด้วยคีย์เวิร์ดที่สร้างรายได้จริงให้กับธุรกิจ",
    icon: TrendingUp,
  },
]

/* -------------------------------------------------------------------------- */
/* รายละเอียดบริการ - มุ่งเน้นประสิทธิภาพและผลลัพธ์ทางธุรกิจ                      */
/* -------------------------------------------------------------------------- */

export const services: ServiceItem[] = [
  {
    id: "starter-one-page",
    title: "Sale Page: เน้นการปิดการขาย (High Conversion)",
    slug: "starter-one-page",
    category: "Starter",
    description: "หน้าขายของที่ออกแบบตามหลักจิตวิทยาการขาย โหลดไวใน 1 วินาทีเพื่อไม่ให้พลาดโอกาส",
    price: "เริ่มต้น 5,900.-",
    priceValue: 5900,
    features: [
      "Ultra Fast Loading: ความเร็วสูงพิเศษเพื่อลดอัตราการกดออก",
      "Mobile Optimized: แสดงผลสมบูรณ์แบบบนสมาร์ทโฟนทุกรุ่น",
      "Direct Call-to-Action: จัดวางปุ่มติดต่อให้ใช้งานง่ายที่สุด",
      "Standard SSL: ระบบความปลอดภัยขั้นพื้นฐานตามมาตรฐานสากล",
    ],
    themeColor: "slate",
  },
  {
    id: "sme-speed-launch",
    title: "SME Pro: เว็บไซต์ธุรกิจครบวงจร",
    slug: "sme-speed-launch",
    category: "SME",
    description: "เว็บไซต์มาตรฐานธุรกิจ 5-8 หน้า ที่โครงสร้างถูกออกแบบมาเพื่อ Google โดยเฉพาะ",
    price: "เริ่มต้น 12,900.-",
    priceValue: 12900,
    highlight: true,
    features: [
      "PageSpeed 100/100: การันตีคะแนนความเร็วในระดับสูงสุด",
      "Unique UI Design: งานดีไซน์เฉพาะตัว ไม่ใช้เทมเพลตซ้ำใคร",
      "Search Engine Ready: โครงสร้างรองรับระบบค้นหาในปัจจุบัน",
      "Easy CMS: ระบบจัดการหลังบ้านที่เจ้าของธุรกิจใช้งานเองได้ทันที",
    ],
    themeColor: "emerald",
  },
  {
    id: "corporate-trust",
    title: "Corporate Identity: เว็บไซต์องค์กรมาตรฐานสากล",
    slug: "corporate-trust",
    category: "Corporate",
    description: "สร้างความเชื่อมั่นให้คู่ค้าด้วยระบบที่นิ่งและปลอดภัย รองรับการขยายตัวขององค์กร",
    price: "เริ่มต้น 25,900.-",
    priceValue: 25900,
    features: [
      "Advanced Security: ระบบป้องกันข้อมูลและความปลอดภัยระดับสูง",
      "Multi-Language Support: รองรับการใช้งานหลายภาษาอย่างสมบูรณ์",
      "Investor Relations: พื้นที่เฉพาะสำหรับข่าวสารและข้อมูลองค์กร",
      "Professional Maintenance: บริการดูแลทางเทคนิคต่อเนื่องรายปี",
    ],
    themeColor: "blue",
  },
  {
    id: "industrial-catalog",
    title: "Industrial E-Catalog: ระบบจัดการสินค้าอุตสาหกรรม",
    slug: "industrial-catalog",
    category: "Industrial",
    description: "เปลี่ยนคลังสินค้าให้เป็นออนไลน์ ค้นหาสเปกได้ละเอียด และขอใบเสนอราคาได้รวดเร็ว",
    price: "เริ่มต้น 39,900.-",
    priceValue: 39900,
    features: [
      "Massive Item Support: รองรับสินค้าได้มากกว่า 10,000 รายการ",
      "Technical Filters: ระบบกรองสินค้าเชิงลึกตามคุณสมบัติเฉพาะ",
      "RFQ System: ระบบขอใบเสนอราคาอัตโนมัติส่งตรงถึงฝ่ายขาย",
      "Scalable Foundation: รากฐานระบบที่รองรับการใช้งานหนัก",
    ],
    themeColor: "indigo",
  },
  {
    id: "seo-technical-audit",
    title: "Technical SEO System & Audit",
    slug: "seo-technical",
    category: "SEO_Technical",
    description: "ตรวจสุขภาพและแก้ไขจุดบอดหลังบ้านที่ขัดขวางไม่ให้เว็บของคุณติดอันดับแรก",
    price: "เริ่มต้น 4,900.-",
    priceValue: 4900,
    features: [
      "Schema Markup: ติดตั้งชุดคำสั่งระบุประเภทธุรกิจให้ระบบอ่านง่าย",
      "Core Web Vitals Fix: ปรับจูนความเร็วให้ผ่านเกณฑ์ระดับสูงสุด",
      "Index Optimization: แก้ปัญหาหน้าเว็บไม่ปรากฏบนผลการค้นหา",
      "Tracking Setup: ตั้งค่าการติดตามข้อมูลเชิงลึกแบบมืออาชีพ",
    ],
    promotion: "ส่วนลดพิเศษ 50% เมื่อทำพร้อมการจ้างพัฒนาเว็บไซต์ใหม่",
    themeColor: "amber",
  },
  {
    id: "seo-organic-growth",
    title: "Monthly SEO: วางกลยุทธ์เติบโตระยะยาว",
    slug: "seo-organic",
    category: "SEO_Organic",
    description: "สร้างฐานลูกค้าจาก Google โดยไม่ต้องพึ่งพาค่าโฆษณาด้วยคีย์เวิร์ดที่ทำเงิน",
    price: "เริ่มต้น 8,900.- / เดือน",
    priceValue: 8900,
    features: [
      "Commercial Keyword Focus: คัดเลือกคำที่สร้างยอดขายได้จริง",
      "Authority Content: ผลิตเนื้อหาคุณภาพเพื่อสร้างความน่าเชื่อถือ",
      "Continuous Optimization: ปรับจูนหน้าเว็บตามกลไกการค้นหาทุกเดือน",
      "Performance Report: รายงานสถิติและอันดับที่วัดผลได้ชัดเจน",
    ],
    promotion: "แนะนำทำต่อเนื่องอย่างน้อย 3 เดือน เพื่อผลลัพธ์ที่ยั่งยืน",
    themeColor: "rose",
  },
]
