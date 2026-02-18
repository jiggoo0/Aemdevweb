/**
 * [SERVICE_NODE]: CATALOG_COMMERCE_HUB v18.1.6 (STABILIZED_FINAL)
 * [STRATEGY]: Sales Enablement | B2B Authority | Hex Standard Implementation
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
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

  /**
   * [THEME_ADAPTER]: Violet 600 Core | Zinc-Infused UI
   * ออกแบบมาเพื่อสร้างความรู้สึกทันสมัยและเป็นมืออาชีพ (Clean Professionalism)
   * รองรับการสลับธีมแบบ Adaptive Contrast
   */
  theme: {
    mode: "light",
    primary: "#7c3aed",      // Violet 600 (Brand Identity)
    secondary: "#4c1d95",    // Violet 900 (Visual Depth)
    background: "#f5f3ff",   // Violet 50 (Clean Canvas)
    foreground: "#1e1b4b",   // Indigo 950 (High Legibility)
    accent: "#a78bfa",       // Violet 400 (Soft Highlights)
    gradient: "from-[#7c3aed]/15 via-transparent to-transparent",
  },

  clientTrust: "สถาปัตยกรรมจัดการข้อมูลสินค้าที่ลื่นไหลที่สุด สำหรับธุรกิจ B2B ยุคใหม่",

  benefits: [
    "Sales Team Empowerment: เซลส์ทำงานง่ายขึ้น ไม่ต้องพกแคตตาล็อกเล่มหนา แค่ส่งลิงก์เดียวลูกค้าดูสเปคได้ครบถ้วน",
    "Inquiry-First Logic: ระบบ 'ขอใบเสนอราคา' (RFQ) ที่ออกแบบมาเพื่อธุรกิจ B2B โดยเฉพาะ เพื่อการคัดกรองลูกค้าที่มีเจตนาซื้อจริง",
    "Scalable Data Management: โครงสร้างข้อมูลแบบ Matrix ที่รองรับสินค้าหลักหมื่น SKU พร้อมระบบค้นหาอัจฉริยะ (Zero-Latency)",
  ],

  coreFeatures: [
    {
      title: "Smart Filter & Search",
      description: "ระบบกรองสินค้าตามคุณสมบัติ (Size, Material, Type) ที่ละเอียดและแม่นยำระดับรหัสอะไหล่",
      icon: "Search",
    },
    {
      title: "Direct RFQ System",
      description: "ปุ่มขอใบเสนอราคาที่ทำงานร่วมกับระบบแจ้งเตือน ช่วยให้ฝ่ายขายไม่พลาดทุกโอกาสปิดดีล",
      icon: "FileText",
    },
    {
      title: "Automated Datasheets",
      description: "ระบบดึงข้อมูลสเปคสินค้าออกมาเป็นไฟล์ PDF ให้ลูกค้าดาวน์โหลดไปแนบใบเสนอราคาได้ทันที",
      icon: "FileDown",
    },
  ],

  // [CATALOG_ITEMS]: โครงสร้างรายการสินค้าตัวอย่าง (B2B Matrix)
  items: [
    {
      name: "Industrial Pump X-200",
      description: "ปั๊มน้ำอุตสาหกรรมแรงดันสูง",
      icon: "Settings",
      price: "Call",
    },
    { 
      name: "Heavy Duty Valve", 
      description: "วาล์วทองเหลืองเกรด A สำหรับงานอุตสาหกรรม", 
      icon: "Disc", 
      price: "Call" 
    },
    {
      name: "Conveyor Belt 5M",
      description: "สายพานลำเลียงทนความร้อนสูง",
      icon: "Activity",
      price: "Call",
    },
    {
      name: "Hydraulic Press",
      description: "เครื่องอัดไฮดรอลิก 50 ตัน มาตรฐานสากล",
      icon: "Cpu",
      price: "Call",
    },
    {
      name: "Safety Gear Set",
      description: "ชุดอุปกรณ์ป้องกันความปลอดภัยส่วนบุคคลในโรงงาน",
      icon: "Shield",
      price: "Call",
    },
    {
      name: "Smart Sensor IoT",
      description: "เซ็นเซอร์ตรวจจับพฤติกรรมการทำงานเครื่องจักรผ่านระบบ Cloud",
      icon: "Wifi",
      price: "Call",
    },
  ],

  faqs: [
    {
      question: "ต่างจากขายบน Shopee/Lazada อย่างไร?",
      answer:
        "ระบบของเราเน้น 'Brand Authority' และการสั่งซื้อล็อตใหญ่ (B2B) ครับ ไม่ใช่การขายปลีกแข่งราคา แต่เป็นการสร้างความเชื่อมั่นผ่านข้อมูลสเปกที่ชัดเจนและระบบขอใบเสนอราคาที่เป็นมืออาชีพ",
    },
    {
      question: "ถ้าข้อมูลสินค้ามีเป็นจำนวนมาก จะจัดการยากไหม?",
      answer:
        "ง่ายมากครับ เราวางระบบหลังบ้านให้คุณอัปเดตข้อมูลได้เองแบบ Bulk Upload ผ่าน Excel หรือแก้ไขรายชิ้นได้อย่างรวดเร็วผ่านหน้าจัดการที่ใช้งานง่ายเหมือนสมุดบันทึก",
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
