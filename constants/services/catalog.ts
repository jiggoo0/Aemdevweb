/**
 * [SERVICE_NODE]: CATALOG_ENGINEERING_HUB v18.0.3 (INDUSTRIAL_MASTER)
 * [STRATEGY]: B2B Engineering | SKU Management | High-Trust Theme
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { TemplateMasterData } from "@/types";

export const catalogService: TemplateMasterData = {
  id: "AEM-SVC-CT-05",
  title: "Industrial E-Catalog System | ระบบฐานข้อมูลสินค้าออนไลน์สถาปัตยกรรมปิด",
  description:
    "โซลูชัน Catalog บนสถาปัตยกรรม Next.js ที่ออกแบบโครงสร้างข้อมูล (Data Schema) มาเพื่อธุรกิจ B2B โดยเฉพาะ เน้นความแม่นยำของข้อมูลเทคนิคและรหัสสินค้า (SKU) ระบบถูกตั้งค่าเป็น Standard Framework เพื่อความเสถียรสูงสุดในการค้นหาและจัดทำใบเสนอราคา (RFQ)",

  image: "/images/services/catalog-node.webp",
  templateSlug: "catalog",
  category: "business",

  // [PRICING_MASTER]: ราคากลางสำหรับระบบ Standard Module
  price: "24,900",
  priceValue: 24900,
  currency: "THB",
  unit: "เริ่มต้น / ระบบสแตนด์อโลน",

  theme: {
    mode: "light", 
    primary: "#334155", 
    secondary: "#0f172a",
    background: "#f8fafc",
    foreground: "#1e293b",
    accent: "#f97316", 
    gradient: "from-[#334155]/5 via-transparent to-transparent",
  },

  clientTrust:
    "Standardized Engine: โครงสร้างข้อมูลแบบ Fixed-Schema ป้องกันความผิดพลาดในการจัดเก็บ Part Number",

  benefits: [
    "Master Template Entry: รูปแบบการนำเสนอสินค้าเป็นระบบระเบียบตามมาตรฐานอุตสาหกรรม (Fixed-Layout) ช่วยให้แบรนด์ดูน่าเชื่อถือและฝ่ายจัดซื้อเปรียบเทียบสเปกได้ง่าย",
    "Static Index Search: ระบบค้นหาผ่านรหัส Part Number ที่ถูกทำดัชนีไว้ล่วงหน้า ช่วยให้ค้นหาเจอแม่นยำ 100% แม้มีสินค้าจำนวนมาก",
    "Lead Control: เปลี่ยนคนดูสเปกเป็นยอดขายด้วยระบบ RFQ (Request for Quote) ที่ส่งข้อมูลเข้า LINE/Email ทันที โดยไม่ต้องผ่านขั้นตอนการคำนวณราคาที่ซับซ้อน",
  ],

  coreFeatures: [
    {
      title: "Category Filter Module",
      description: "ระบบกรองสินค้ามาตรฐานตามหมวดหมู่และแบรนด์หลัก เพื่อความเสถียรและความเร็วสูงสุดในการแสดงผล",
      icon: "Search",
    },
    {
      title: "PDF Data Sheet Link",
      description: "ระบบฝังลิงก์ดาวน์โหลด Spec Sheet มาตรฐาน ช่วยให้วิศวกรเข้าถึงข้อมูลเชิงลึกได้ทันที",
      icon: "FileDown",
    },
    {
      title: "Direct RFQ Gateway",
      description: "ระบบตะกร้าส่งรายการขอใบเสนอราคาเข้าหลังบ้านโดยตรง (Standalone) ไม่มีการคำนวณส่วนลดซับซ้อนหน้าเว็บ",
      icon: "FileText",
    },
  ],

  faqs: [
    {
      question: "ลงสินค้าได้กี่รายการ?",
      answer:
        "ระบบรองรับข้อมูลได้ไม่จำกัดครับ แต่ในแพ็กเกจนี้เราจะจัดทำข้อมูลสินค้าตัวอย่าง (Master SKU) และตกแต่งภาพมาตรฐานให้ 50 รายการแรก เพื่อเป็นต้นแบบให้ลูกค้าลงข้อมูลเพิ่มเองได้ง่ายผ่านระบบจัดการหลังบ้านครับ",
    },
    {
      question: "แก้ไขดีไซน์หน้าตาได้แค่ไหน?",
      answer:
        "ระบบถูกสร้างบน Industrial UI Framework ที่ผ่านการทดสอบ UX สำหรับงานวิศวกรรมมาแล้ว เราจึงจำกัดการปรับเปลี่ยนโครงสร้างหลักเพื่อรักษาความเร็วและการแสดงผลที่แม่นยำในทุกอุปกรณ์ครับ",
    },
    {
      question: "เชื่อมต่อกับโปรแกรมสต็อกเดิมของบริษัทได้ไหม?",
      answer:
        "แพ็กเกจนี้เป็นระบบ Standalone พร้อมใช้งานครับ สำหรับการเชื่อมต่อ API เข้ากับระบบภายนอก (ERP/SAP) จะเป็นบริการส่วนเสริม (Add-on) ซึ่งจะมีค่าดำเนินการตามความซับซ้อนของระบบเดิมครับ",
    },
    {
      question: "ค้นหาด้วยรหัสสินค้า (Part Number) ได้แม่นยำไหม?",
      answer: "แม่นยำ 100% ครับ ระบบถูกตั้งค่ามาเพื่อจับคู่รหัสสินค้าเป็นลำดับแรก (Priority Search) เหมาะกับพฤติกรรมการค้นหาของฝ่ายจัดซื้อและช่างหน้างานครับ",
    },
    {
      question: "การดูแลหลังการขายครอบคลุมอะไรบ้าง?",
      answer:
        "เราดูแลความเสถียรของระบบเซิร์ฟเวอร์และการเชื่อมต่อ API พื้นฐานให้ฟรี 1 ปีครับ สำหรับการลงข้อมูลสินค้าใหม่หรือแก้ไขสเปกสินค้า ลูกค้าสามารถดำเนินการเองได้ทันทีผ่านคู่มือจัดการที่เราเตรียมไว้ให้ครับ",
    },
  ],

  keywords: [
    "ระบบ E-Catalog อุตสาหกรรม",
    "เว็บไซต์แคตตาล็อก B2B",
    "ทำเว็บโรงงาน มาตรฐานวิศวกรรม",
    "ระบบ RFQ ออนไลน์",
    "ฐานข้อมูลสินค้า SKU เยอะ",
  ],

  priority: 4,
  isFeatured: true,
};
