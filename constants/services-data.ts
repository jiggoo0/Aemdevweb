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
/* นิยามประเภทข้อมูล (Data Schema)                                              */
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
/* ข้อมูลหมวดหมู่ - เน้นแก้ปัญหาให้ SME และกลุ่มธุรกิจอุตสาหกรรม                          */
/* -------------------------------------------------------------------------- */

export const categoriesData: CategoryInfo[] = [
  {
    slug: "starter",
    name: "Sale Page เน้นปิดการขาย",
    themeColor: "slate",
    description:
      "เปลี่ยนผู้เข้าชมเป็นรายชื่อติดต่อ ด้วยหน้าเว็บที่โหลดไวและใช้งานง่ายที่สุด",
    icon: Layout,
  },
  {
    slug: "sme",
    name: "เว็บไซต์ธุรกิจ SME",
    themeColor: "emerald",
    description:
      "สร้างภาพลักษณ์ที่น่าเชื่อถือด้วยเว็บไซต์มาตรฐานสากล พร้อมรองรับการทำ Organic Search",
    icon: Store,
  },
  {
    slug: "corporate",
    name: "เว็บไซต์องค์กร (Corporate)",
    themeColor: "blue",
    description:
      "เน้นความน่าเชื่อถือระดับสากล ความปลอดภัยของข้อมูล และความลื่นไหลของระบบในระยะยาว",
    icon: Building2,
  },
  {
    slug: "industrial",
    name: "ระบบแคตตาล็อกสินค้าโรงงาน",
    themeColor: "indigo",
    description:
      "จัดการสินค้าจำนวนมากให้ค้นหาง่าย พร้อมระบบรองรับการขอใบเสนอราคาที่รวดเร็ว",
    icon: Factory,
  },
  {
    slug: "seo-technical",
    name: "ปรับแต่งโครงสร้าง SEO",
    themeColor: "amber",
    description:
      "แก้ไขจุดบอดหลังบ้านเพื่อให้ระบบค้นหาเจอธุรกิจของคุณได้แม่นยำและรวดเร็ว",
    icon: Settings2,
  },
  {
    slug: "seo-organic",
    name: "กลยุทธ์ Organic Search",
    themeColor: "rose",
    description:
      "เพิ่มจำนวนผู้เข้าชมจากกลุ่มเป้าหมายจริง ด้วยเนื้อหาที่ตอบโจทย์การค้นหาบน Google",
    icon: TrendingUp,
  },
]

/* -------------------------------------------------------------------------- */
/* รายละเอียดบริการ - เน้นการส่งมอบผลลัพธ์ที่ช่วยให้ธุรกิจเติบโต                          */
/* -------------------------------------------------------------------------- */

export const services: ServiceItem[] = [
  {
    id: "starter-one-page",
    title: "Sale Page: ออกแบบเพื่อปิดการขาย",
    slug: "starter-one-page",
    category: "Starter",
    description:
      "หน้าเว็บหน้าเดียวที่จัดเรียงข้อมูลตามพฤติกรรมลูกค้า โหลดไวในเสี้ยววินาทีเพื่อรักษาโอกาสในการขาย",
    price: "เริ่มต้น 5,900.-",
    priceValue: 5900,
    features: [
      "Ultra Fast Loading: ความเร็วระดับสูงเพื่อรักษาความสนใจของผู้เข้าชม",
      "Mobile Optimized: ใช้งานลื่นไหลบนมือถือทุกรุ่นที่เป็นพิกัดหลักของลูกค้า",
      "Direct Action Buttons: วางตำแหน่งปุ่มติดต่อให้ชัดเจนและกดง่ายที่สุด",
      "Standard Security: ระบบป้องกันความปลอดภัยตามเกณฑ์มาตรฐานสากล",
    ],
    themeColor: "slate",
  },
  {
    id: "sme-speed-launch",
    title: "SME Pro: เว็บไซต์มาตรฐานธุรกิจครบวงจร",
    slug: "sme-speed-launch",
    category: "SME",
    description:
      "เว็บไซต์ 5-8 หน้า ที่จัดระเบียบเนื้อหาให้เป็นมืออาชีพ วางโครงสร้างชัดเจนเพื่อให้ Google เข้าใจธุรกิจของคุณ",
    price: "เริ่มต้น 12,900.-",
    priceValue: 12900,
    highlight: true,
    features: [
      "PageSpeed Excellence: การันตีความเร็วในการแสดงผลทุกหน้าย่อย",
      "Custom UI Design: ดีไซน์ที่สะท้อนตัวตนแบรนด์ ไม่ใช้เทมเพลตซ้ำตลาดทั่วไป",
      "Search Engine Ready: โครงสร้างหลังบ้านพร้อมสำหรับการไต่อันดับ Organic Search",
      "Easy Management: ระบบจัดการเนื้อหาที่เจ้าของธุรกิจดูแลเองได้ทันที",
    ],
    themeColor: "emerald",
  },
  {
    id: "corporate-trust",
    title: "Corporate Identity: เว็บไซต์ภาพลักษณ์องค์กร",
    slug: "corporate-trust",
    category: "Corporate",
    description:
      "สร้างความเชื่อมั่นให้คู่ค้าและนักลงทุนด้วยระบบที่ยั่งยืน ปลอดภัย และสะท้อนความเป็นมืออาชีพ",
    price: "เริ่มต้น 25,900.-",
    priceValue: 25900,
    features: [
      "Advanced Data Protection: มาตรฐานความปลอดภัยข้อมูลในระดับสูง",
      "Multi-Language Support: รองรับการขยายฐานธุรกิจสู่ระดับสากล",
      "Brand Authority: วางพิกัดข้อมูลสำคัญขององค์กรให้โดดเด่นและโปร่งใส",
      "System Maintenance: บริการตรวจสอบประสิทธิภาพระบบอย่างต่อเนื่องรายปี",
    ],
    themeColor: "blue",
  },
  {
    id: "industrial-catalog",
    title: "Industrial E-Catalog: ระบบจัดการสินค้าอุตสาหกรรม",
    slug: "industrial-catalog",
    category: "Industrial",
    description:
      "เปลี่ยนเล่มแคตตาล็อกเป็นระบบออนไลน์ ค้นหาสเปกสินค้าได้ละเอียด พร้อมระบบขอใบเสนอราคาที่รวดเร็ว",
    price: "เริ่มต้น 39,900.-",
    priceValue: 39900,
    features: [
      "High Capacity Support: รองรับฐานข้อมูลสินค้าจำนวนมากได้อย่างลื่นไหล",
      "Advanced Filtering: ระบบกรองสินค้าตามคุณสมบัติเทคนิคที่แม่นยำ",
      "Fast RFQ System: ระบบขอใบเสนอราคาเบื้องต้นส่งตรงถึงฝ่ายขายทันที",
      "Scalable Structure: รากฐานระบบที่รองรับการเพิ่มรายการสินค้าในอนาคต",
    ],
    themeColor: "indigo",
  },
  {
    id: "seo-technical-audit",
    title: "Technical SEO Tuning: ปรับโครงสร้างหลังบ้าน",
    slug: "seo-technical",
    category: "SEO_Technical",
    description:
      "ตรวจสอบและปรับจูนพิกัดหลังบ้านเพื่อให้ระบบค้นหาจัดลำดับหน้าเว็บของคุณได้อย่างถูกต้อง",
    price: "เริ่มต้น 4,900.-",
    priceValue: 4900,
    features: [
      "Schema Markup: ระบุประเภทธุรกิจให้โปรแกรมค้นหาเข้าใจได้ลึกที่สุด",
      "Core Web Vitals Tuning: ปรับจูนความเร็วหน้าเว็บให้ผ่านเกณฑ์คะแนนเต็ม",
      "Index Management: แก้ไขปัญหาหน้าเว็บไม่ปรากฏบนผลการค้นหา",
      "Analytics Integration: เชื่อมต่อระบบติดตามสถิติเพื่อการวัดผลที่แม่นยำ",
    ],
    promotion: "รับส่วนลด 50% เมื่อใช้บริการร่วมกับการพัฒนาโครงสร้างเว็บใหม่",
    themeColor: "amber",
  },
  {
    id: "seo-organic-growth",
    title: "Organic Growth: วางแผนการเติบโตระยะยาว",
    slug: "seo-organic",
    category: "SEO_Organic",
    description:
      "สร้างช่องทางรับลูกค้าจาก Google ในระยะยาวด้วยคำค้นหาที่เปลี่ยนเป็นยอดขายได้จริง",
    price: "เริ่มต้น 8,900.- / เดือน",
    priceValue: 8900,
    features: [
      "Search Intent Keywords: คัดเลือกคำค้นหาที่ตรงใจกลุ่มเป้าหมายที่สุด",
      "High Quality Content: พัฒนาเนื้อหาที่เป็นประโยชน์เพื่อสร้าง Authority",
      "Continuous Optimization: ปรับแต่งหน้าเว็บให้สอดคล้องกับระบบค้นหาเสมอ",
      "Performance Reporting: รายงานผลสถิติและอันดับที่วัดผลได้ชัดเจน",
    ],
    promotion:
      "แนะนำการดูแลต่อเนื่องอย่างน้อย 3 เดือน เพื่อผลลัพธ์ที่ชัดเจนที่สุด",
    themeColor: "rose",
  },
]
