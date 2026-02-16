/**
 * [SERVICE_NODE]: CATALOG_COMMERCE_HUB v17.9.86 (THEME_STABILIZED)
 * [STRATEGY]: Sales Enablement | B2B Authority | Hex Standard
 * [MAINTAINER]: AEMZA MACKS
 */

import type { TemplateMasterData } from "@/types";

export const catalogService: TemplateMasterData = {
  id: "AEM-SVC-EC-05",
  title: "รับทำเว็บแคตตาล็อกสินค้าออนไลน์ | โชว์รูม 24 ชม. ปิดดีลใหญ่ได้ไวกว่าเดิม",
  description:
    "เปลี่ยนสินค้าหลักพันชิ้นให้เป็นโชว์รูมออนไลน์ที่ดูง่าย เซลส์แฮปปี้ ลูกค้ากดขอใบเสนอราคาสบาย ไม่ต้องส่งไฟล์ PDF ให้หนักเครื่องอีกต่อไป โดย นายเอ็มซ่ามากส์",
  image: "/images/services/catalog-node.webp",
  templateSlug: "catalog",
  category: "ecommerce",
  price: "16,900",
  priceValue: 16900,
  currency: "THB",
  unit: "เริ่มต้น",

  // [THEME_FIX]: ใช้ Hex Code เพื่อรองรับ OKLCH Engine
  theme: {
    mode: "light",
    primary: "#7c3aed", // Violet 600
    secondary: "#4c1d95", // Violet 900
    background: "#f5f3ff", // Violet 50 (Very light purple for clean look)
    foreground: "#1e1b4b", // Indigo 950 (Dark text)
    accent: "#a78bfa", // Violet 400
    gradient: "from-[#7c3aed]/15 via-transparent to-transparent",
  },

  clientTrust: "สถาปัตยกรรมจัดการข้อมูลสินค้าที่ลื่นไหลที่สุด สำหรับธุรกิจ B2B ยุคใหม่",

  benefits: [
    "Sales Team Empowerment: เซลส์ทำงานง่ายขึ้น ไม่ต้องพกแคตตาล็อกเล่มหนา แค่ส่งลิงก์เดียวลูกค้าดูสเปคได้ครบถ้วน",
    "Inquiry-First Logic: ระบบ 'ขอใบเสนอราคา' (RFQ) ที่ออกแบบมาเพื่อธุรกิจ B2B โดยเฉพาะ คัดกรองลูกค้าตัวจริง",
    "Scalable Data Management: รองรับสินค้าหลักหมื่น SKU ได้อย่างไร้กังวล พร้อมระบบค้นหาอัจฉริยะ",
  ],

  coreFeatures: [
    {
      title: "Smart Filter & Search",
      description: "ระบบกรองสินค้าตามคุณสมบัติ (Size, Material, Type) ที่ละเอียดแม่นยำ",
      icon: "Search",
    },
    {
      title: "Direct RFQ System",
      description: "ปุ่มขอใบเสนอราคาที่ทำงานร่วมกับระบบแจ้งเตือน ช่วยให้ฝ่ายขายไม่พลาดทุกโอกาส",
      icon: "FileText",
    },
    {
      title: "Automated Datasheets",
      description: "ระบบดึงข้อมูลสเปคสินค้าออกมาเป็นไฟล์ PDF ให้ลูกค้าดาวน์โหลดได้ทันที",
      icon: "FileDown",
    },
  ],

  // [CATALOG_ITEMS]: ตัวอย่างรายการสินค้า (Mockup)
  items: [
    {
      name: "Industrial Pump X-200",
      description: "ปั๊มน้ำอุตสาหกรรมแรงดันสูง",
      icon: "Settings",
      price: "Call",
    },
    { name: "Heavy Duty Valve", description: "วาล์วทองเหลืองเกรด A", icon: "Disc", price: "Call" },
    {
      name: "Conveyor Belt 5M",
      description: "สายพานลำเลียงทนความร้อน",
      icon: "Activity",
      price: "Call",
    },
    {
      name: "Hydraulic Press",
      description: "เครื่องอัดไฮดรอลิก 50 ตัน",
      icon: "Cpu",
      price: "Call",
    },
    {
      name: "Safety Gear Set",
      description: "ชุดป้องกันความปลอดภัยโรงงาน",
      icon: "Shield",
      price: "Call",
    },
    {
      name: "Smart Sensor IoT",
      description: "เซ็นเซอร์ตรวจจับการทำงานเครื่องจักร",
      icon: "Wifi",
      price: "Call",
    },
  ],

  faqs: [
    {
      question: "ต่างจากขายบน Shopee/Lazada อย่างไร?",
      answer:
        "เน้น 'Brand Authority' และการสั่งซื้อล็อตใหญ่ (B2B) ครับ ไม่ใช่การขายปลีกแข่งราคาแบบ Marketplace",
    },
    {
      question: "ถ้าข้อมูลสินค้าเยอะ จัดการยากไหม?",
      answer:
        "ง่ายมากครับ เราวางระบบหลังบ้านให้คุณอัปเดตข้อมูลได้เองแบบ Bulk Upload หรือแก้ไขรายชิ้นได้อย่างรวดเร็ว",
    },
  ],

  keywords: [
    "รับทำเว็บแคตตาล็อกสินค้า",
    "จ้างทำเว็บไซต์บริษัท",
    "ระบบขอใบเสนอราคาออนไลน์",
    "ทำเว็บโรงงานอุตสาหกรรม",
    "Digital Product Catalog",
  ],

  priority: 4,
  isFeatured: true,
};
