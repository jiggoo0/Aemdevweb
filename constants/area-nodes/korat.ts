/**
 * [SERVICE_NODE]: KORAT_IDENTITY_NODE v18.0.0 (FULL_SYNC)
 * [STRATEGY]: Total Identity Shift | Zero-Radius Geometry | Industrial Monolith
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */
import type { AreaNode } from "@/types";

export const koratNode: AreaNode = {
  // --- Basic Identity ---
  slug: "korat",
  province: "นครราชสีมา",
  templateSlug: "catalog", // ใช้ Catalog Template สำหรับอุตสาหกรรม

  // [IDENTITY_COPY]: ปรับโทนคำพูดให้เป็นภาษาเครื่องจักรและการก่อสร้าง
  title: "KORAT_INDUSTRIAL_HUB | รับทำเว็บไซต์โรงงาน โคราช ระบบ Catalog อะไหล่",
  description:
    "DEPLOYING: ระบบจัดการข้อมูลสินค้าเชิงวิศวกรรมสำหรับโรงงานและอุตสาหกรรมโคราช ทรงพลัง หนักแน่น และไร้ขีดจำกัด โดย นายเอ็มซ่ามากส์",

  longDescription:
    "นี่คือสถาปัตยกรรมที่ออกแบบมาเพื่อธุรกิจที่ขับเคลื่อนด้วยเครื่องจักรและโครงสร้างครับ " +
    "ในจังหวัดนครราชสีมา ความอ่อนช้อยไม่ใช่คำตอบ แต่ความ 'ทนทาน' และ 'แม่นยำ' คือกุญแจสำคัญ " +
    "เราจึงตัดความโค้งมนทิ้งทั้งหมด เพื่อสร้าง UI ที่เฉียบคมเหมือนใบมีดอุตสาหกรรม " +
    "ระบบนี้จะเปลี่ยนแค็ตตาล็อกของคุณให้เป็นฐานข้อมูลที่แข็งแกร่งที่สุดในภาคอีสาน รองรับสินค้าหลักหมื่นรายการโดยไม่สะดุด",

  // --- SEO Metadata ---
  seoTitle: "รับทำเว็บไซต์ โคราช | ออกแบบเว็บโรงงานและแค็ตตาล็อกอุตสาหกรรม - เอ็มซ่ามากส์",
  seoDescription:
    "Web Engineering เฉพาะทางโคราช: ระบบ Dark Catalog ความละเอียดสูง ออกแบบมาเพื่อโรงงานและธุรกิจก่อสร้างโดยเฉพาะ ติดหน้าแรก Google ในคีย์เวิร์ดอุตสาหกรรม",

  // --- Visual & Theme (Industrial Monolith: Gold/Black) ---
  heroImage: "/images/areas/korat-monolith.webp",
  theme: {
    mode: "dark",
    primary: "#FFD700", // Construction Gold (สีเหลืองอำพันแบบป้ายเขตก่อสร้าง)
    secondary: "#334155", // Deep Steel Slate
    background: "#000000", // Absolute Black (ดำสนิทแบบน้ำมันเครื่อง)
    foreground: "#FFFFFF", // High-Contrast White
    accent: "#EAB308",
    gradient: "from-[#FFD700]/20 via-black to-black",

    // [EXTRA_ATTRIBUTES]: ค่ากำหนดพิเศษที่จะเปลี่ยน UI ทั้งหน้าให้เป็นเหลี่ยมคม
    radius: "0px", // ตัดความมนทิ้งทั้งหมด (Hard Edge)
    borderWidth: "2px", // เส้นขอบหนาและชัดเจนเหมือนแบบแปลน
    fontFamily: "var(--font-mono)", // ใช้ฟอนต์ Monospace ทั้งหมดเพื่อให้ดูเป็น Technical Manual
  },

  // --- Pricing Strategy (Industrial Grade) ---
  price: "24,500",
  priceValue: 24500,
  currency: "THB",
  unit: "เริ่มต้น / ระบบ",

  // --- Trust Signals ---
  clientTrust:
    "Heavy Duty Certified: ระบบที่ผ่านการทดสอบในโรงงานผลิตชิ้นส่วนยานยนต์และไซตฺ์ก่อสร้างจริงในโคราช",

  // --- Localized Benefits ---
  benefits: [
    "STRUCTURED DATA: โครงสร้างข้อมูลแบบ Matrix ที่รองรับการค้นหา Part Number หรือ Spec สินค้าได้แม่นยำ 100%",
    "ZERO-LATENCY: ระบบ Cache สินค้าที่โหลดข้อมูลหลักพันรายการได้ในเสี้ยววินาที เพื่อให้ฝ่ายจัดซื้อทำงานได้ไม่สะดุด",
    "INDUSTRIAL UI: ดีไซน์แบบ High-Contrast (ดำ-เหลือง) ที่มองเห็นชัดเจนแม้ในสภาพแสงจ้าของไซต์งานหรือโรงงาน",
  ],

  // --- Core Features ---
  coreFeatures: [
    {
      title: "Part Number Search",
      description: "Engine ค้นหาอัจฉริยะที่เข้าใจรหัสสินค้า (SKU) และสเปกทางวิศวกรรม",
      icon: "Search", // หรือ Code2
    },
    {
      title: "Technical Spec Sheet",
      description:
        "ระบบสร้างตารางสเปกสินค้า (PDF Generate) อัตโนมัติ เพื่อให้ลูกค้านำไปแนบใบเสนอราคาได้ทันที",
      icon: "FileText",
    },
    {
      title: "B2B Quote System",
      description:
        "ระบบขอใบเสนอราคา (RFQ) แบบล็อกอินสำหรับคู่ค้าประจำ เพื่อดูราคาส่งและสต็อกสินค้า",
      icon: "ShieldCheck",
    },
  ],

  // --- Localized FAQs ---
  faqs: [
    {
      question: "ระบบรองรับสินค้ากี่รายการ?",
      answer:
        "สถาปัตยกรรมของเราออกแบบมาให้รองรับได้ไม่จำกัด (Scalable) ครับ ทดสอบจริงกับฐานข้อมูลอะไหล่กว่า 50,000 รายการยังทำงานได้ลื่นไหลครับ",
    },
    {
      question: "เชื่อมต่อกับ ERP ของโรงงานได้ไหม?",
      answer:
        "ทำได้ครับ เราสามารถเขียน API เชื่อมต่อกับระบบ SAP, Oracle หรือ Express เพื่อดึงสต็อกและราคามาแสดงหน้าเว็บแบบ Real-time",
    },
    {
      question: "นัดคุยงานที่โรงงานในเขตสุรนารีได้ไหม?",
      answer:
        "ได้ครับ ทีมงานพร้อมใส่หมวกเซฟตี้เข้าไปดูหน้างานและกระบวนการผลิต เพื่อออกแบบระบบให้ตรงโจทย์การใช้งานจริงที่สุดครับ",
    },
    {
      question: "เว็บรองรับการเปิดบนแท็บเล็ตหน้างานไหม?",
      answer:
        "แน่นอนครับ UI ของเราเป็น Responsive แบบ Hard-Grid ที่แสดงผลชัดเจนบน Tablet และ Industrial Panel PC ทุกรุ่นครับ",
    },
    {
      question: "มีระบบ Dealer Login ไหม?",
      answer:
        "มีครับ เราสามารถทำระบบสมาชิกแยก Tier (Dealer/End User) เพื่อให้เห็นราคาและโปรโมชั่นที่ต่างกันได้ครับ",
    },
    {
      question: "ใช้เวลาพัฒนานานเท่าไหร่?",
      answer:
        "สำหรับระบบ Catalog มาตรฐานใช้เวลา 20-30 วันครับ แต่ถ้ามีการเชื่อมต่อ ERP อาจใช้เวลา 45-60 วันเพื่อความแม่นยำของข้อมูลครับ",
    },
    {
      question: "ออกใบกำกับภาษีได้ไหม?",
      answer:
        "ได้ครับ เราจดทะเบียนพาณิชย์ถูกต้อง สามารถออกเอกสารหัก ณ ที่จ่าย และใบกำกับภาษีเต็มรูปแบบสำหรับนิติบุคคลครับ",
    },
  ],

  // --- Context Data ---
  localContext: {
    marketInsight:
      "ธุรกิจ B2B ในโคราชไม่ได้ซื้อของด้วยอารมณ์ แต่ซื้อด้วย 'ความมั่นใจในโครงสร้าง' เว็บไซต์ที่ดูแข็งแกร่งจะช่วยดึงดูดโปรเจกต์ระดับพันล้าน",
    technicalApproach:
      "Engineered Search: ระบบค้นหาที่แม่นยำระดับรหัสอะไหล่ และการเรนเดอร์ UI แบบ High-Contrast เพื่อการอ่านข้อมูลในไซต์งาน",
    localStrength:
      "สถาปัตยกรรมแบบ Monolith ที่สะท้อนถึงความยิ่งใหญ่ของประตูสู่อีสาน พร้อมรองรับการขัดแย้งของข้อมูลมหาศาล",
    nicheIndustries: [
      "Heavy Machinery & Spare Parts",
      "Steel Construction & Engineering",
      "Logistics Infrastructure",
      "Industrial Real Estate",
    ],
    painPoints: [
      "ระบบเดิม 'เปราะบาง' เกินไปสำหรับสเกลข้อมูลอุตสาหกรรม",
      "ความสวยงามแบบทั่วไปไม่สามารถสร้างความเกรงขามให้กับคู่ค้า B2B ได้",
      "ขาดระบบจัดเก็บข้อมูลที่มีโครงสร้าง (Structured Data) ที่ชัดเจน",
    ],
    competitorLevel: "extreme",

    socialProof: {
      rating: 5.0,
      reviewCount: 99,
      localClient: "KORAT_INDUSTRIAL_PARTNERSHIP",
    },
    regionalPricing: {
      startPrice: "24,500 บาท",
      timeline: "20-30 วัน",
    },
    localSuccessStory: {
      title: "SYSTEM_DEPLOYMENT: โรงงานเหล็กโซนสีคิ้ว",
      result:
        "สร้าง Digital Inventory ที่ฝ่ายจัดซื้อทั่วประเทศเข้าถึงได้ 24 ชม. เพิ่มโอกาสปิดงานโปรเจกต์ภาครัฐ 400%",
    },
    hyperLocalKeywords: [
      "INDUSTRIAL WEB KORAT",
      "ENGINEERING CATALOG SYSTEM",
      "KORAT B2B SOLUTION",
      "รับทำเว็บโรงงาน ปากช่อง",
    ],
  },

  // --- System Metadata ---
  priority: 99, // สูงสุดในระดับยุทธศาสตร์
  districts: ["เมืองนครราชสีมา", "ปากช่อง", "สีคิ้ว", "สูงเนิน", "ขามทะเลสอ"],
  keywords: [
    "KORAT INDUSTRIAL WEB",
    "รับทำเว็บไซต์ โคราช อุตสาหกรรม",
    "ระบบแค็ตตาล็อกโรงงาน นครราชสีมา",
    "Web Architect Korat",
    "รับทำเว็บไซต์ โคราช",
  ],
  coordinates: { lat: 14.9759, lng: 102.1177 },
};
