/**
 * [DATA REGISTRY]: MASTER_SERVICE_REGISTRY v17.3.11 (STABILIZED_FINAL)
 * [STRATEGY]: Psychological Pricing | Pain Point Resolution | Brand Authority
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { TemplateMasterData } from "@/types";

/**
 * @description คลังข้อมูลบริการหลักที่ผ่านการ Audit เพื่อความเสถียรของแบรนด์และการทำอันดับ SEO
 * [RESOLVED]: เพิ่ม Property 'keywords' ครบทุก Node เพื่อแก้ไข Error TS2741
 */
export const MASTER_REGISTRY: readonly TemplateMasterData[] = [
  // --- [01. SALEPAGE: ระบบหน้าเว็บปิดการขาย (HERO PRODUCT)] ---
  {
    id: "AEM-SVC-SP-01",
    title: "Sale Page ปิดการขายอัตโนมัติ (Single Page)",
    description:
      "เปลี่ยนคนดูให้เป็นยอดโอน ด้วยหน้าเว็บหน้าเดียวที่ออกแบบมาเพื่อ 'ขายของ' โดยเฉพาะ รองรับการยิงแอด 100%",
    image: "/images/service/preview.webp",
    price: "2,900",
    currency: "THB",
    priceValue: 2900,
    unit: "เริ่มต้น",
    category: "landing",
    templateSlug: "salepage",
    theme: {
      primary: "#ef4444", // Action Red
      secondary: "#b91c1c",
    },
    benefits: [
      "โหลดไวใน 1 วินาที ลูกค้าไม่หนี ยอดขายไม่ตก",
      "ติดตั้ง Pixel/Conversion API แม่นยำ ยิงแอดได้คุ้มค่าทุกบาท",
      "ออกแบบปุ่มสั่งซื้อ (CTA) ในจุดที่ลูกค้ากดง่ายที่สุด",
    ],
    coreFeatures: [
      {
        title: "Conversion Focus",
        description: "ดีไซน์ที่ตัดสิ่งรบกวนออก เหลือแค่สิ่งที่ทำให้ลูกค้า 'อยากซื้อ'",
        icon: "Target",
      },
      {
        title: "Mobile Speed",
        description: "ปรับจูนให้เร็วสุดบนมือถือ เพราะลูกค้า 90% ซื้อผ่านมือถือ",
        icon: "Smartphone",
      },
      {
        title: "One-Click Chat",
        description: "ปุ่มทัก Line/Messenger ลอยตามนิ้ว กดปุ๊บเด้งแชทปั๊บ",
        icon: "MessageCircle",
      },
    ],
    faqs: [
      {
        question: "ทำเสร็จแล้วยิงแอดได้เลยไหม?",
        answer: "ได้ทันทีครับ เราติดตั้ง Facebook Pixel และ TikTok Pixel ให้พร้อมใช้งาน",
      },
    ],
    // [FIXED]: เพิ่ม Keywords ครบถ้วน
    keywords: ["รับทำ Sale Page", "ทำเซลเพจหน้าเดียว", "ทำหน้าขายของออนไลน์", "ออกแบบ Sale Page ราคาถูก"],
    priority: 1,
    isPopular: true,
  },

  // --- [02. CORPORATE: ระบบเว็บไซต์องค์กร (TRUST BUILDER)] ---
  {
    id: "AEM-SVC-CP-03",
    title: "Corporate Website เว็บไซต์บริษัทสร้างความน่าเชื่อถือ",
    description:
      "ยกระดับธุรกิจของคุณให้ดูเป็นมืออาชีพในสายตาลูกค้าและคู่ค้า ด้วยดีไซน์ที่ทันสมัยและระบบที่เสถียร",
    image: "/images/service/preview.webp",
    price: "9,900",
    currency: "THB",
    priceValue: 9900,
    unit: "โปรเจกต์",
    category: "business",
    templateSlug: "corporate",
    theme: {
      primary: "#3b82f6", // Trust Blue
      secondary: "#1e40af",
    },
    clientTrust: "มาตรฐานที่บริษัทชั้นนำเลือกใช้",
    benefits: [
      "สร้าง First Impression ที่ดีเยี่ยม ลูกค้าเห็นแล้วเชื่อมั่นทันที",
      "รองรับ SEO ระยะยาว ให้ลูกค้าค้นหาเจอชื่อบริษัทคุณเป็นอันดับแรก",
      "ระบบหลังบ้านจัดการง่าย เพิ่มข่าวสารหรือผลงานได้เองตลอด 24 ชม.",
    ],
    coreFeatures: [
      {
        title: "Premium Identity",
        description: "ออกแบบตาม CI แบรนด์ ไม่ซ้ำใคร ดูแพงและเป็นทางการ",
        icon: "ShieldCheck",
      },
      {
        title: "Google Ready",
        description: "วางโครงสร้าง SEO ถูกต้องตามหลัก Google 2026",
        icon: "Search",
      },
      {
        title: "Multi-Language",
        description: "รองรับการขยายระบบเป็น 2 ภาษา (ไทย/อังกฤษ) ในอนาคต",
        icon: "Globe",
      },
    ],
    faqs: [
      {
        question: "มีการดูแลหลังการขายไหม?",
        answer: "เราดูแลความปลอดภัยเว็บไซต์และ Backup ข้อมูลให้ฟรีตลอด 1 ปีเต็มครับ",
      },
    ],
    keywords: ["รับทำเว็บไซต์บริษัท", "ออกแบบเว็บไซต์ Corporate", "จ้างทำเว็บธุรกิจ", "Technical SEO Business"],
    priority: 2,
    isFeatured: true,
  },

  // --- [03. CATALOG: ระบบแค็ตตาล็อกออนไลน์ (PRODUCT SHOWCASE)] ---
  {
    id: "AEM-SVC-EC-05",
    title: "E-Catalog เว็บแค็ตตาล็อกสินค้าออนไลน์",
    description:
      "เลิกส่งไฟล์ PDF ให้ลูกค้า! เปลี่ยนมาใช้เว็บแค็ตตาล็อกที่ค้นหาง่าย อัปเดตสต็อกได้เอง ดูได้ทุกที่",
    image: "/images/service/preview.webp",
    price: "15,900",
    currency: "THB",
    priceValue: 15900,
    unit: "เริ่มต้น",
    category: "ecommerce",
    templateSlug: "catalog",
    theme: {
      primary: "#a855f7", // Creative Purple
      secondary: "#7e22ce",
    },
    benefits: [
      "ลูกค้าค้นหาสินค้าเจอง่าย แบ่งหมวดหมู่ชัดเจน ไม่ต้องไถหาในแชท",
      "ลดงานแอดมิน ลูกค้าดูรายละเอียดและสเปคสินค้าได้เองครบถ้วน",
      "แชร์ลิงก์สินค้าแต่ละตัวให้ลูกค้าได้ทันที ดูเป็นมืออาชีพกว่าส่งรูป",
    ],
    coreFeatures: [
      {
        title: "Smart Search",
        description: "ระบบค้นหาสินค้าที่แม่นยำ พิมพ์ชื่อปุ๊บเจอปั๊บ",
        icon: "Search",
      },
      {
        title: "Unlimited Products",
        description: "รองรับสินค้าได้ไม่จำกัด เพิ่มลดรายการได้เองง่ายๆ",
        icon: "Database",
      },
      {
        title: "Inquiry Button",
        description: "ปุ่ม 'ขอใบเสนอราคา' หรือ 'สอบถาม' ติดทุกหน้าสินค้า",
        icon: "FileText",
      },
    ],
    faqs: [
      {
        question: "ลงสินค้าให้ด้วยไหม?",
        answer: "เราลงข้อมูลเบื้องต้นให้ 20 รายการ พร้อมสอนวิธีลงสินค้าเพิ่มเองแบบจับมือทำครับ",
      },
    ],
    keywords: ["ทำเว็บแค็ตตาล็อก", "E-Catalog ออนไลน์", "ระบบโชว์สินค้า", "ทำเว็บแสดงสินค้าออนไลน์"],
    priority: 3,
  },

  // --- [04. LOCAL: บริการปักหมุดและ SEO ท้องถิ่น (LOCAL DOMINANCE)] ---
  {
    id: "AEM-SVC-LS-10",
    title: "Local SEO & Google Maps (ปักหมุดธุรกิจ)",
    description:
      "ดักจับลูกค้าในพื้นที่! ทำให้ร้านคุณขึ้นเป็นอันดับ 1 เมื่อคนแถวนั้นค้นหา",
    image: "/images/service/preview.webp",
    price: "6,900",
    currency: "THB",
    priceValue: 6900,
    unit: "พื้นที่",
    category: "business",
    templateSlug: "local",
    theme: {
      primary: "#f59e0b", // Amber
      secondary: "#b45309",
    },
    benefits: [
      "ลูกค้าหาร้านเจอ ขับรถมาถูก เพิ่มยอดขายหน้าร้านจริง",
      "แซงคู่แข่งในพื้นที่เดียวกัน ด้วยเทคนิคการปรับแต่งหมุด Google Maps",
      "เพิ่มความน่าเชื่อถือด้วยรีวิวและการให้ข้อมูลที่ถูกต้องครบถ้วน",
    ],
    coreFeatures: [
      {
        title: "Map Optimization",
        description: "ปรับแต่งหมุดธุรกิจให้ Google ดันขึ้นอันดับแรกๆ",
        icon: "MapPin",
      },
      {
        title: "Keyword Targeting",
        description: "วิเคราะห์คำค้นหาที่คนแถวนั้นใช้จริง เพื่อดึงลูกค้าตรงกลุ่ม",
        icon: "Crosshair",
      },
    ],
    faqs: [
      {
        question: "นานไหมกว่าจะเห็นผล?",
        answer: "โดยปกติจะเริ่มเห็นยอดการค้นหาและโทรเข้าเพิ่มขึ้นภายใน 30-60 วันครับ",
      },
    ],
    keywords: ["รับทำ Local SEO", "ปักหมุด Google Maps", "ทำ SEO ท้องถิ่น", "โปรโมทร้านค้าใกล้ฉัน"],
    priority: 4,
  },

  // --- [05. PERSONAL: เว็บส่วนตัว/Portfolio (PROFESSIONAL BRANDING)] ---
  {
    id: "AEM-SVC-PB-14",
    title: "Personal Portfolio เว็บโปรไฟล์ส่วนตัว",
    description:
      "สร้าง Personal Branding ให้ปัง! รวบรวมผลงานและช่องทางติดต่อไว้ในที่เดียว",
    image: "/images/service/preview.webp",
    price: "4,900",
    currency: "THB",
    priceValue: 4900,
    unit: "โปรเจกต์",
    category: "personal",
    templateSlug: "bio",
    theme: {
      primary: "#06b6d4", // Cyan
      secondary: "#0e7490",
    },
    benefits: [
      "ดูเป็นมืออาชีพกว่าการส่งไฟล์ PDF หรือลิงก์ Google Drive",
      "แชร์ง่าย ได้ใจความ จบในลิงก์เดียว (Bio Link)",
      "ปรับแต่งดีไซน์ให้สะท้อนตัวตนของคุณได้เต็มที่",
    ],
    coreFeatures: [
      {
        title: "Modern Portfolio",
        description: "แกลเลอรี่โชว์ผลงานที่สวยงาม จัดวางอย่างมีศิลปะ",
        icon: "Layout",
      },
      {
        title: "Contact Hub",
        description: "รวมปุ่ม Social, Email, Line ไว้ให้ติดต่อคุณง่ายที่สุด",
        icon: "Share2",
      },
    ],
    faqs: [
      {
        question: "เหมาะกับใครบ้าง?",
        answer: "เหมาะกับฟรีแลนซ์, ช่างภาพ, ดีไซเนอร์ หรือผู้บริหารที่ต้องการสร้างภาพลักษณ์ครับ",
      },
    ],
    keywords: ["ทำเว็บ Portfolio", "สร้าง Bio Link", "รับทำเว็บส่วนตัว", "Portfolio ออนไลน์"],
    priority: 5,
  },
] as const;

/**
 * @const FEATURED_SERVICES
 * @description รายการบริการยอดนิยม (Featured/Popular)
 */
export const FEATURED_SERVICES = [...MASTER_REGISTRY]
  .filter((svc) => svc.isFeatured || svc.isPopular)
  .sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99));
