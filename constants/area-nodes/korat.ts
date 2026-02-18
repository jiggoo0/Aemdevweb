/**
 * [SERVICE_NODE]: KORAT_IDENTITY_NODE v18.0.8 (STABILIZED_FINAL)
 * [STRATEGY]: Industrial Monolith | Zero-Radius Geometry | B2B Authority
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */
import type { AreaNode } from "@/types";

export const koratNode: AreaNode = {
  // --- Basic Identity ---
  slug: "korat",
  province: "นครราชสีมา",
  templateSlug: "catalog", 

  title: "KORAT_INDUSTRIAL_HUB | รับทำเว็บไซต์โรงงาน โคราช ระบบ Catalog อะไหล่",
  description:
    "DEPLOYING: ระบบจัดการข้อมูลสินค้าเชิงวิศวกรรมสำหรับโรงงานและอุตสาหกรรมโคราช ทรงพลัง หนักแน่น และไร้ขีดจำกัด",

  longDescription:
    "ในจังหวัดนครราชสีมา ความแม่นยำคือหัวใจสำคัญ เราจึงตัดความโค้งมนทิ้งทั้งหมด เพื่อสร้าง UI ที่เฉียบคมเหมือนใบมีดอุตสาหกรรม ระบบนี้จะเปลี่ยนแค็ตตาล็อกของคุณให้เป็นฐานข้อมูลที่แข็งแกร่งที่สุดในภาคอีสาน",

  // --- SEO Metadata ---
  seoTitle: "รับทำเว็บไซต์ โคราช | ออกแบบเว็บโรงงานและแค็ตตาล็อกอุตสาหกรรม - เอ็มซ่ามากส์",
  seoDescription:
    "Web Engineering เฉพาะทางโคราช: ระบบ Dark Catalog ความละเอียดสูง ออกแบบมาเพื่อโรงงานและธุรกิจก่อสร้าง ติดหน้าแรก Google ในคีย์เวิร์ดอุตสาหกรรม",

  // --- Visual & Theme (Industrial Monolith) ---
  heroImage: "/images/areas/korat-monolith.webp",
  theme: {
    mode: "dark",
    primary: "#FFD700",   // Construction Gold
    secondary: "#334155", // Deep Steel Slate
    background: "#000000", // Absolute Black
    foreground: "#FFFFFF", // High-Contrast White
    accent: "#EAB308",
    gradient: "from-[#FFD700]/15 via-black to-black",

    // [INDUSTRIAL_SPEC]: การออกแบบที่ลดแรงต้านและเพิ่มความน่าเชื่อถือเชิงเทคนิค
    radius: "0px",           // Hard Edge
    borderWidth: "2px",      // Structural Blueprint
    fontFamily: "var(--font-mono)", // Technical Manual
  },

  // --- Pricing Strategy ---
  price: "24,500",
  priceValue: 24500,
  currency: "THB",
  unit: "เริ่มต้น / ระบบ",

  // --- Trust Signals ---
  clientTrust: "Heavy Duty Certified: ระบบที่ผ่านการทดสอบในโรงงานผลิตและไซต์ก่อสร้างจริงในโคราช",

  // --- Specialized Benefits ---
  benefits: [
    "STRUCTURED DATA: โครงสร้างแบบ Matrix รองรับการค้นหา Part Number หรือ Spec สินค้าแม่นยำ 100%",
    "ZERO-LATENCY: ระบบ Cache สินค้าที่โหลดข้อมูลหลักหมื่นรายการได้ในเสี้ยววินาที",
    "INDUSTRIAL UI: ดีไซน์ High-Contrast (ดำ-เหลือง) ชัดเจนแม้ในสภาพแสงจ้าของไซต์งาน",
  ],

  // --- Core Features ---
  coreFeatures: [
    {
      title: "Part Number Search Engine",
      description: "ระบบค้นหาอัจฉริยะที่เข้าใจรหัสสินค้า (SKU) และสเปกทางวิศวกรรม",
      icon: "Search", 
    },
    {
      title: "B2B RFQ System",
      description: "ระบบขอใบเสนอราคาแบบล็อกอินสำหรับคู่ค้า เพื่อดูราคาส่งและเช็กสต็อก Real-time",
      icon: "ShieldCheck",
    },
  ],

  // --- Conversion Engineering (FAQs) ---
  faqs: [
    {
      question: "ระบบรองรับการเชื่อมต่อ ERP ของโรงงานหรือไม่?",
      answer: "ทำได้ครับ เราสามารถเขียน API เชื่อมต่อกับ SAP, Oracle หรือ Express เพื่อดึงสต็อกและราคามาแสดงผลแบบ Real-time",
    },
    {
      question: "นัดคุยงานที่โรงงานในเขตอุตสาหกรรมได้ไหม?",
      answer: "ได้ครับ ทีมงานพร้อมเข้าไปดูหน้างานจริง เพื่อออกแบบระบบให้ตรงโจทย์การใช้งานวิศวกรรมที่สุด",
    },
  ],

  // --- [PATCHED]: Local Context (Type-Safe Compliance) ---
  localContext: {
    // [STRATEGY]: B2B Market Insight
    marketInsight: "ธุรกิจ B2B ในโคราชตัดสินใจด้วย 'ความเชื่อมั่นในโครงสร้าง' เว็บไซต์ที่ดูแข็งแกร่งช่วยดึงดูดโปรเจกต์ระดับ Enterprise",
    
    // [STRATEGY]: Technical Implementation [FIXED TS2739]
    technicalApproach: "Engineered Search: ระบบค้นหาที่แม่นยำระดับรหัสอะไหล่ และการเรนเดอร์ UI แบบ High-Contrast เพื่อการอ่านข้อมูลในไซต์งาน",
    
    // [STRATEGY]: Local Authority Signal [FIXED TS2739]
    localStrength: "สถาปัตยกรรมแบบ Monolith ที่สะท้อนถึงความยิ่งใหญ่ของประตูสู่อีสาน พร้อมรองรับการขัดแย้งของข้อมูลมหาศาล",
    
    // [STRATEGY]: Pain Point Resolution [FIXED TS2739]
    painPoints: [
      "ระบบเดิม 'เปราะบาง' เกินไปสำหรับสเกลข้อมูลอุตสาหกรรม",
      "ความสวยงามแบบทั่วไปไม่สามารถสร้างความเกรงขามให้กับคู่ค้า B2B ได้",
      "ขาดระบบจัดเก็บข้อมูลที่มีโครงสร้าง (Structured Data) ที่ชัดเจน"
    ],
    
    // [STRATEGY]: Competitive Landscape [FIXED TS2739]
    competitorLevel: "extreme", //

    // [STRATEGY]: Target Verticals
    nicheIndustries: [
      "Heavy Machinery & Spare Parts",
      "Steel Construction & Engineering",
      "Logistics Infrastructure",
    ],
    
    // [STRATEGY]: Social Proof Data
    socialProof: {
      rating: 5.0,
      reviewCount: 99,
      localClient: "KORAT_INDUSTRIAL_PARTNERSHIP",
    },
    
    // [STRATEGY]: Delivery & Investment
    regionalPricing: {
      startPrice: "24,500 บาท",
      timeline: "20-30 วัน",
    },
    
    // [STRATEGY]: Proven Results
    localSuccessStory: {
      title: "SYSTEM_DEPLOYMENT: โรงงานเหล็กสีคิ้ว",
      result: "สร้าง Digital Inventory ที่เข้าถึงได้ 24 ชม. เพิ่มโอกาสปิดงานโปรเจกต์ภาครัฐ 400%",
    },
  },

  // --- System Metadata ---
  priority: 99, 
  districts: ["เมืองนครราชสีมา", "ปากช่อง", "สีคิ้ว", "สูงเนิน", "ขามทะเลสอ"],
  keywords: [
    "KORAT INDUSTRIAL WEB",
    "รับทำเว็บไซต์ โคราช อุตสาหกรรม",
    "ระบบแค็ตตาล็อกโรงงาน นครราชสีมา",
    "Web Architect Korat",
  ],
  coordinates: { lat: 14.9759, lng: 102.1177 },
};
