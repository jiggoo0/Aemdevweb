/**
 * [SERVICE_NODE]: KORAT_INDUSTRIAL_HUB v18.0.3 (PRODUCTION_FINAL)
 * [STRATEGY]: Industrial Authority | B2B Engineering | Dynamic Inheritance
 * [MARKET]: Nakhon Ratchasima (Korat), Sung Noen, Pak Chong
 */

import type { AreaNode } from "@/types";
// [IMPORT]: นำเข้า Template หลักเพื่อดึงค่ากลาง (Industrial Standard)
import { catalogService } from "@/constants/services/catalog";

export const koratNode: AreaNode = {
  // --- Basic Identity ---
  slug: "korat",
  province: "นครราชสีมา",
  templateSlug: "catalog", // เชื่อมโยงกับ Catalog Template

  title: "รับทำเว็บไซต์ โคราช | เว็บไซต์โรงงานและแคตตาล็อกสินค้าอุตสาหกรรม",
  description:
    "บริการรับทำเว็บไซต์โรงงานในโคราช เปลี่ยนแคตตาล็อกเล่มหนาเป็นระบบออนไลน์ ค้นหาง่ายด้วย Part Number รองรับงานจัดซื้อ B2B และนิคมอุตสาหกรรม",

  longDescription:
    "โคราชคือศูนย์กลางอุตสาหกรรมและประตูสู่อีสาน ธุรกิจที่นี่ต้องการความรวดเร็วและความแม่นยำ " +
    "นายเอ็มซ่ามากส์ ให้บริการออกแบบเว็บไซต์เชิงวิศวกรรม (Engineering Web Design) ที่เน้นการจัดระเบียบข้อมูลสินค้าจำนวนมาก (SKU) ให้ค้นหาง่าย " +
    "ลดความผิดพลาดในการสั่งซื้อ และช่วยให้ทีมขายของคุณปิดดีลกับฝ่ายจัดซื้อของโรงงานในนวนครและสุรนารีได้ง่ายขึ้น",

  // --- SEO Metadata ---
  seoTitle: "รับทำเว็บไซต์ โคราช ออกแบบเว็บโรงงาน แคตตาล็อกอะไหล่ - เอ็มซ่ามากส์",
  seoDescription:
    "จ้างทำเว็บไซต์โคราช สำหรับโรงงาน ร้านวัสดุก่อสร้าง และธุรกิจ B2B ระบบค้นหาอะไหล่แม่นยำ รองรับ SEO อุตสาหกรรม ติดหน้าแรก Google",

  // --- [DYNAMIC_INHERITANCE]: Theme & Pricing ---
  // รับค่าโดยตรงจาก catalogService เพื่อความเป็นมาตรฐาน Industrial Grade
  theme: catalogService.theme,
  price: catalogService.price,
  priceValue: catalogService.priceValue,
  currency: catalogService.currency,
  unit: catalogService.unit,

  // --- Visual (Local Specific) ---
  heroImage: "/images/areas/korat-monolith.webp",

  // --- Trust Signals ---
  clientTrust:
    "Heavy Duty Certified: ระบบที่ผ่านการใช้งานจริงในโรงงานผลิตและไซต์ก่อสร้างชั้นนำในโคราช",

  // --- Localized Benefits ---
  benefits: [
    "Structured Data: จัดระเบียบข้อมูลสินค้าแบบ Matrix รองรับการค้นหา Part Number หรือ Spec สินค้าได้แม่นยำ",
    "Zero-Latency Search: ระบบ Cache สินค้าที่ช่วยให้ฝ่ายจัดซื้อค้นหารายการสินค้าหลักหมื่นได้ในเสี้ยววินาที",
    "Site-Ready UI: ดีไซน์ที่เน้นความชัดเจน (High Legibility) อ่านสเปกง่ายแม้เปิดดูผ่านมือถือกลางไซต์งานก่อสร้าง",
  ],

  // --- Core Features (Industrial Specific) ---
  coreFeatures: [
    {
      title: "Part Number Search",
      description: "ระบบค้นหาอัจฉริยะที่เข้าใจรหัสสินค้า (SKU) และสเปกทางวิศวกรรม",
      icon: "Search",
    },
    {
      title: "B2B RFQ Portal",
      description: "ระบบสมาชิกสำหรับคู่ค้า (Dealer) เพื่อล็อกอินดูราคาส่งและเช็คสต็อก Real-time",
      icon: "ShieldCheck",
    },
    {
      title: "Spec Sheet Hub",
      description: "ศูนย์รวมไฟล์ PDF และ Data Sheet ให้ลูกค้าดาวน์โหลดได้เอง ลดงานส่งไฟล์ของเซลล์",
      icon: "FileDown",
    },
  ],

  // --- Localized FAQs ---
  faqs: [
    {
      question: "ระบบรองรับการเชื่อมต่อ ERP ของโรงงานหรือไม่?",
      answer:
        "ทำได้ครับ เราสามารถพัฒนา API เชื่อมต่อกับระบบบัญชีหรือ ERP (เช่น SAP, Express) เพื่อดึงสต็อกมาแสดงผลได้ครับ",
    },
    {
      question: "นัดคุยงานที่โรงงานในเขตอุตสาหกรรมได้ไหม?",
      answer:
        "ได้ครับ ผมพร้อมเข้าไปดูหน้างานจริงในเขตนวนคร, สุรนารี หรือสูงเนิน เพื่อออกแบบระบบให้ตรงโจทย์การใช้งานที่สุดครับ",
    },
    {
      question: "สินค้ามีสเปกซับซ้อน (ขนาด, สี, รุ่น) ทำได้ไหม?",
      answer:
        "ทำได้สบายมากครับ ระบบของเราออกแบบมาเพื่อจัดการ Product Variant ที่ซับซ้อนโดยเฉพาะครับ",
    },
    // [MERGE]: ดึงคำถามมาตรฐานจาก Template หลัก
    ...catalogService.faqs.filter(
      (f) => f.question.includes("ออกใบกำกับภาษี") || f.question.includes("ลงสินค้า"),
    ),
  ],

  // --- Context Data ---
  localContext: {
    marketInsight:
      "ธุรกิจ B2B ในโคราชตัดสินใจด้วย 'ความเชื่อมั่น' และ 'สเปกที่ถูกต้อง' เว็บไซต์ที่ข้อมูลชัดเจนจะช่วยลดเวลาการตอบคำถามลูกค้าได้มหาศาล",
    technicalApproach:
      "เน้นระบบ Search และ Filtering ที่แม่นยำ เพื่อให้ฝ่ายจัดซื้อหาสินค้าเจอเร็วที่สุด",
    localStrength:
      "เข้าใจศัพท์เทคนิคและกระบวนการทำงานของโรงงาน สามารถจัดหมวดหมู่สินค้าได้ถูกต้องตามหลักวิศวกรรม",
    nicheIndustries: [
      "อุตสาหกรรมผลิตชิ้นส่วน (Heavy Machinery)",
      "ร้านขายเหล็กและวัสดุก่อสร้าง (Construction Material)",
      "โลจิสติกส์และคลังสินค้า (Logistics)",
      "เครื่องมือช่างและฮาร์ดแวร์ (Hardware Tools)",
    ],
    painPoints: [
      "ลูกค้าโทรมาถามสเปกเดิมๆ ซ้ำๆ",
      "ส่งไฟล์แคตตาล็อก PDF ทางไลน์แล้วลูกค้าหาของไม่เจอ",
      "สต็อกหน้าเว็บไม่ตรงกับของจริง",
    ],
    competitorLevel: "high", // โคราชการแข่งขันสูง
    socialProof: {
      rating: 4.9,
      reviewCount: 99,
      localClient: "โรงงานเหล็กรายใหญ่ อ.สีคิ้ว",
    },
    regionalPricing: {
      startPrice: `${catalogService.price} บาท`, // Dynamic Reference
      timeline: "20-30 วัน",
    },
    localSuccessStory: {
      title: "Case Study: โรงงานเหล็กสีคิ้ว",
      result: "สร้าง Digital Catalog 2,000 รายการ ช่วยลดเวลาตอบคำถามลูกค้าทางไลน์ได้ 60%",
    },
    hyperLocalKeywords: [
      "รับทำเว็บไซต์ นวนคร โคราช",
      "ออกแบบเว็บ ปากช่อง",
      "ทำเว็บโรงงาน สูงเนิน",
      "รับทำ SEO โคราช",
    ],
  },

  // --- System Metadata ---
  priority: 99,
  districts: ["เมืองนครราชสีมา", "ปากช่อง", "สีคิ้ว", "สูงเนิน", "ขามทะเลสอ", "โชคชัย"],
  keywords: [
    "รับทำเว็บไซต์ โคราช",
    "ทำเว็บโรงงาน นครราชสีมา",
    "ระบบแคตตาล็อกออนไลน์",
    "รับทำเว็บไซต์ B2B",
    "Web Design Korat",
  ],
  coordinates: { lat: 14.9759, lng: 102.1177 },
};
