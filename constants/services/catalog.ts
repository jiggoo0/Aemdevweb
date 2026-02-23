/**
 * [SERVICE_NODE]: CATALOG_ENGINEERING_HUB v18.0.3 (INDUSTRIAL_MASTER)
 * [STRATEGY]: B2B Engineering | SKU Management | High-Trust Theme
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { TemplateMasterData } from "@/types";

export const catalogService: TemplateMasterData = {
  id: "AEM-SVC-CT-05",
  title: "Industrial Catalog Website | เปลี่ยนสมุดแคตตาล็อกเป็นฐานข้อมูลสินค้าออนไลน์",
  description:
    "โซลูชันเว็บไซต์สำหรับโรงงานและธุรกิจ B2B ที่ต้องการนำเสนอสินค้าจำนวนมาก (SKU) ให้ค้นหาง่าย พร้อมระบบขอใบเสนอราคา (RFQ) ที่ช่วยให้ฝ่ายจัดซื้อทำงานสะดวกขึ้น ลดภาระฝ่ายขายในการตอบคำถามสเปกสินค้าเดิมๆ",

  image: "/images/services/catalog-node.webp",
  templateSlug: "catalog",
  category: "business",

  // [PRICING_MASTER]: ราคากลางสำหรับระบบ Catalog (ซับซ้อนกว่าเว็บองค์กรปกติ)
  price: "24,900",
  priceValue: 24900,
  currency: "THB",
  unit: "เริ่มต้น / ระบบ",

  // [THEME_STANDARD]: ธีม Engineering Slate (Blue-Grey/Industrial Orange)
  // สื่อถึงความแม่นยำ (Precision) วิศวกรรม (Engineering) และความปลอดภัย (Safety)
  theme: {
    mode: "light", // เน้นความชัดเจนของข้อมูลสินค้า (High Legibility)
    primary: "#334155", // Slate 700: สีเทาเข้มแบบเครื่องจักร/โลหะ
    secondary: "#0f172a", // Slate 900: สีพื้นหลังส่วนหัว
    background: "#f8fafc", // Slate 50: พื้นหลังสะอาดตา อ่านสเปกง่าย
    foreground: "#1e293b", // Slate 800: สีตัวอักษร
    accent: "#f97316", // Orange 500: สี Safety/Action (ปุ่ม RFQ)
    gradient: "from-[#334155]/5 via-transparent to-transparent",
  },

  // [TRUST_SIGNAL]
  clientTrust:
    "Engineering Grade: โครงสร้างข้อมูลรองรับ Part Number และ Spec Sheet มาตรฐานอุตสาหกรรม",

  benefits: [
    "Digital Inventory: เปลี่ยนสินค้าในโกดังให้เป็นลิงก์ที่ส่งให้ลูกค้าได้ทันที ไม่ต้องถ่ายรูปส่งไลน์ทีละชิ้น",
    "Smart Search: ระบบค้นหาที่เข้าใจรหัสสินค้า (Part Number) และชื่อเรียกทางเทคนิค ช่วยให้ลูกค้าเจอของที่ต้องการไวขึ้น",
    "Lead Generation: เปลี่ยนคนดูสเปกให้เป็นคนขอใบเสนอราคา (RFQ) ด้วยระบบปุ่มติดต่อที่วางถูกตำแหน่ง",
  ],

  coreFeatures: [
    {
      title: "Advanced Filter",
      description: "ระบบกรองสินค้าตามสเปก (เช่น ขนาด, วัสดุ, กำลังไฟ) เพื่อความแม่นยำในการค้นหา",
      icon: "Search",
    },
    {
      title: "Spec Sheet Download",
      description: "ปุ่มดาวน์โหลด PDF Catalog หรือ Data Sheet สำหรับวิศวกรและฝ่ายจัดซื้อ",
      icon: "FileDown",
    },
    {
      title: "RFQ System",
      description: "ระบบตะกร้าขอใบเสนอราคา (ไม่ตัดบัตรเครดิต) เหมาะกับรูปแบบการซื้อขาย B2B",
      icon: "FileText",
    },
  ],

  // [CATALOG_DEMO]: รายการสินค้าตัวอย่างเพื่อแสดงศักยภาพระบบ
  items: [
    {
      name: "Industrial Pump Series-X",
      description: "ปั๊มน้ำอุตสาหกรรมแรงดันสูง สำหรับไลน์การผลิต",
      icon: "Settings",
      price: "Call",
    },
    {
      name: "Hydraulic Valve 200mm",
      description: "วาล์วไฮดรอลิกทนแรงดัน สเปกนำเข้า",
      icon: "Disc",
      price: "Call",
    },
    {
      name: "CNC Cutting Tool",
      description: "ดอกกัด CNC คาร์ไบด์ เกรดพิเศษ",
      icon: "Zap",
      price: "Call",
    },
    {
      name: "Safety Helmet Pro",
      description: "หมวกนิรภัยมาตรฐาน มอก. สำหรับวิศวกร",
      icon: "Shield",
      price: "Call",
    },
  ],

  faqs: [
    {
      question: "ลงสินค้าได้กี่รายการ?",
      answer:
        "ระบบรองรับได้ไม่จำกัดครับ แต่ในแพ็กเกจเริ่มต้นเราช่วยลงข้อมูลให้พร้อมตกแต่งภาพฟรี 50 รายการแรกครับ",
    },
    {
      question: "เชื่อมต่อกับ ERP หรือโปรแกรมสต็อกได้ไหม?",
      answer:
        "ทำได้ครับ (เป็นบริการ Add-on) เราสามารถเขียน API เชื่อมต่อกับระบบเดิมของคุณเพื่อให้สต็อกหน้าเว็บตรงกันครับ",
    },
    {
      question: "ลูกค้าต้องล็อกอินก่อนดูราคาไหม?",
      answer:
        "กำหนดได้ครับ จะเปิดราคาให้ทุกคนเห็น หรือต้องล็อกอิน (Member Price) ถึงจะเห็นราคาก็ทำได้ครับ",
    },
    {
      question: "ค้นหาด้วยรหัส Part Number ได้ไหม?",
      answer: "ได้แน่นอนครับ ระบบ Search ของเราถูกออกแบบมาให้จับคู่รหัสสินค้าได้แม่นยำ 100% ครับ",
    },
    {
      question: "ออกใบกำกับภาษีได้ไหม?",
      answer:
        "ได้ครับ เราจดทะเบียนนิติบุคคลถูกต้อง สามารถออกใบกำกับภาษีค่าทำเว็บไซต์ได้เต็มรูปแบบครับ",
    },
    {
      question: "ดูแลยากไหม ถ้าไม่มีฝ่ายไอที?",
      answer:
        "ไม่ยากครับ ระบบหลังบ้านใช้งานเหมือน Shopee/Lazada แค่กรอกข้อมูล ใส่รูป แล้วกดบันทึกครับ",
    },
    {
      question: "เว็บรองรับมือถือไหม?",
      answer: "รองรับ 100% ครับ วิศวกรหน้างานสามารถเปิดดูสเปกสินค้าผ่านมือถือได้สะดวกและชัดเจนครับ",
    },
  ],

  keywords: [
    "รับทำเว็บไซต์แคตตาล็อก",
    "ออกแบบเว็บโรงงาน",
    "ระบบ E-Catalog",
    "รับทำเว็บไซต์ B2B",
    "เว็บขายอะไหล่อุตสาหกรรม",
  ],

  priority: 4,
  isFeatured: true,
};
