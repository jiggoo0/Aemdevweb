/**
 * [SERVICE_NODE]: CATALOG_COMMERCE_HUB v17.9.85 (HARDENED)
 * [STRATEGY]: Sales Enablement | B2B Authority | High-CTR SEO
 * [MAINTAINER]: AEMZA MACKS
 */

import type { TemplateMasterData } from "@/types";

export const catalogService: TemplateMasterData = {
  id: "AEM-SVC-EC-05",
  title: "รับทำเว็บแคตตาล็อกสินค้าออนไลน์ | โชว์รูม 24 ชม. ปิดดีลใหญ่ได้ไวกว่าเดิม",
  description:
    "เปลี่ยนสินค้าหลักพันชิ้นให้เป็นโชว์รูมออนไลน์ที่ดูง่าย เซลส์แฮปปี้ ลูกค้ากดขอใบเสนอราคาสบาย ไม่ต้องส่งไฟล์ PDF ให้หนักเครื่องอีกต่อไป โดย นายเอ็มซ่ามากส์",
  image: "/images/service/catalog-node.webp",
  templateSlug: "catalog",
  category: "ecommerce",
  price: "16,900",
  priceValue: 16900,
  currency: "THB",
  unit: "เริ่มต้น",

  // [HARDENED_THEME]: ใช้โทนสี Indigo-Violet ที่สื่อถึงความทันสมัยของระบบ E-commerce แต่ยังมีความเป็นมืออาชีพสูง
  theme: {
    primary: "#7c3aed", // Violet 600
    secondary: "#4c1d95", // Violet 900
    background: "bg-zinc-50",
    accent: "#a78bfa",
    gradient: "from-violet-600/10 via-transparent to-transparent",
  },

  // [TRUST_SIGNALS]: เน้นย้ำความเป็นมืออาชีพและการจัดการข้อมูลระดับสูง
  clientTrust: "สถาปัตยกรรมจัดการข้อมูลสินค้าที่ลื่นไหลที่สุด สำหรับธุรกิจ B2B ยุคใหม่",

  // [HUMAN_STORYTELLING]: เน้นแก้ปัญหาหน้างานจริง (Sales Empowerment)
  benefits: [
    "Sales Team Empowerment: เซลส์ทำงานง่ายขึ้น ไม่ต้องพกแคตตาล็อกเล่มหนา แค่ส่งลิงก์เดียวลูกค้าดูสเปคได้ครบถ้วน พร้อมปิดการขายได้ทุกที่",
    "Inquiry-First Logic: ระบบ 'ขอใบเสนอราคา' (RFQ) ที่ออกแบบมาเพื่อธุรกิจ B2B โดยเฉพาะ ช่วยคัดกรองลูกค้าที่มีความต้องการซื้อจริง (Qualified Leads)",
    "Scalable Data Management: รองรับสินค้าหลักหมื่น SKU ได้อย่างไร้กังวล ระบบค้นหาอัจฉริยะช่วยให้ลูกค้าเจอสิ่งที่ต้องการในไม่กี่วินาที",
  ],

  coreFeatures: [
    {
      title: "Smart Filter & Search",
      description:
        "ระบบกรองสินค้าตามคุณสมบัติ (Size, Material, Type) ที่ละเอียดแม่นยำ เหมาะสำหรับสินค้าอุตสาหกรรมที่มีสเปคซับซ้อน",
      icon: "Search",
    },
    {
      title: "Direct RFQ System",
      description:
        "ปุ่มขอใบเสนอราคาที่ทำงานร่วมกับระบบแจ้งเตือน ช่วยให้ฝ่ายขายของคุณไม่พลาดทุกโอกาสในการปิดดีลใหญ่",
      icon: "FileText",
    },
    {
      title: "Automated Datasheets",
      description:
        "ระบบดึงข้อมูลสเปคสินค้าออกมาเป็นไฟล์ PDF หรือ Datasheet ให้ลูกค้าดาวน์โหลดได้ทันทีจากหน้าเว็บ",
      icon: "FileDown",
    },
  ],

  faqs: [
    {
      question: "ต่างจากขายบน Marketplace อย่าง Shopee/Lazada อย่างไร?",
      answer:
        "แคตตาล็อกออนไลน์ของเราเน้น 'Brand Authority' และ 'B2B Workflow' ครับ เราสร้างมาเพื่อรองรับการสั่งซื้อล็อตใหญ่และการสร้างความเชื่อถือองค์กร ไม่ใช่แค่การขายปลีกแข่งราคา",
    },
    {
      question: "ถ้าข้อมูลสินค้ามีการเปลี่ยนแปลงบ่อย จัดการยากไหม?",
      answer:
        "ง่ายมากครับ เราวางระบบหลังบ้านให้คุณอัปเดตข้อมูลได้เองแบบ Bulk Upload หรือแก้ไขรายชิ้นได้อย่างรวดเร็ว ไม่ต้องรอโปรแกรมเมอร์",
    },
  ],

  keywords: [
    "รับทำเว็บแคตตาล็อกสินค้า",
    "จ้างทำเว็บไซต์บริษัท",
    "ระบบขอใบเสนอราคาออนไลน์",
    "ทำเว็บโรงงานอุตสาหกรรม",
    "แคตตาล็อกออนไลน์ B2B",
    "Digital Product Catalog",
  ],

  priority: 4,
  isFeatured: true,
};
