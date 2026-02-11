/**
 * [DATA REGISTRY]: MASTER_SERVICE_REGISTRY v17.8.5 (STRATEGIC_READY)
 * [STRATEGY]: Color Psychology | ROI Focus | Zero-CLS Preflight
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { TemplateMasterData } from "@/types";

/**
 * @description คลังข้อมูลบริการหลักที่ถูกปรับจูนเพื่อการแปลงผู้เข้าชมเป็นลูกค้า (High-Conversion)
 * จัดกลุ่มตามความต้องการทางธุรกิจและระดับการลงทุน
 */
export const MASTER_REGISTRY: readonly TemplateMasterData[] = [
  // ===========================================================================
  // [00. SEO AGENCY]: ความเชื่อมั่นและการเติบโต (Trust & Growth)
  // ===========================================================================
  {
    id: "AEM-SVC-SEO-07",
    title: "Technical SEO & Growth Strategy",
    description:
      "สร้างสินทรัพย์ดิจิทัลระยะยาว ปรับโครงสร้างเว็บให้ Google เข้าใจง่าย เพื่อลดต้นทุนค่าโฆษณาในอนาคต",
    image: "/images/service/seo-agency-node.webp",
    templateSlug: "seo_agency",
    category: "business",
    price: "19,500",
    priceValue: 19500,
    currency: "THB",
    unit: "รายเดือน",
    theme: {
      primary: "#10b981",
      secondary: "#064e3b",
      background: "bg-slate-950",
      gradient: "from-emerald-500/10 via-transparent to-transparent",
    },
    benefits: [
      "Technical Audit: ตรวจสุขภาพเว็บและแก้ไขจุดบอดทางเทคนิคครบวงจร",
      "Keyword Strategy: วางแผนคำค้นหาที่เน้นยอดขาย (Commercial Intent)",
      "Organic Growth: สร้างฐานลูกค้าที่เข้ามาเองตามธรรมชาติอย่างยั่งยืน",
    ],
    coreFeatures: [
      {
        title: "Architecture Logic",
        description: "ปรับโครงสร้างหลังบ้านให้ Clean และถูกหลัก Google 100%",
        icon: "Code2",
      },
      {
        title: "LCP & Speed Tuning",
        description: "ทำความเร็วเว็บให้ผ่านเกณฑ์มาตรฐาน เพื่ออันดับที่ดีกว่า",
        icon: "Zap",
      },
      {
        title: "Conversion Tracking",
        description: "วัดผลด้วยข้อมูลจริง ปรับแผนตามพฤติกรรมลูกค้า",
        icon: "TrendingUp",
      },
    ],
    faqs: [
      {
        question: "จำเป็นต้องทำต่อเนื่องไหม?",
        answer:
          "SEO คือการแข่งกับคู่แข่งและอัลกอริทึมที่เปลี่ยนตลอดครับ การดูแลต่อเนื่องช่วยรักษาอันดับและขยายฐานลูกค้าใหม่ๆ",
      },
      {
        question: "ต่างจากการยิงแอดอย่างไร?",
        answer:
          "การยิงแอดคือการเช่าพื้นที่ (หยุดจ่ายจบ) แต่ SEO คือการสร้างบ้านของตัวเอง (ติดอันดับแล้วอยู่ยาว) ครับ",
      },
    ],
    keywords: ["ที่ปรึกษา SEO", "รับทำ SEO สายขาว", "ปรับโครงสร้างเว็บไซต์", "เพิ่มยอดเข้าชมเว็บ"],
    priority: 0,
    isFeatured: true,
  },

  // ===========================================================================
  // [01. SALE PAGE]: การกระตุ้นและปิดการขาย (Action & Urgency)
  // ===========================================================================
  {
    id: "AEM-SVC-SP-01",
    title: "High-Conversion Sale Page",
    description:
      "หน้าเว็บไซต์สำหรับปิดการขายโดยเฉพาะ ออกแบบ UX/UI ให้กระชับ โหลดไว รองรับการทำโฆษณาเต็มรูปแบบ",
    image: "/images/service/salepage-node.webp",
    templateSlug: "salepage",
    category: "landing",
    price: "3,500",
    priceValue: 3500,
    currency: "THB",
    unit: "เริ่มต้น",
    theme: {
      primary: "#ef4444",
      secondary: "#7f1d1d",
      background: "bg-white",
      gradient: "from-rose-50 to-white",
    },
    benefits: [
      "Ultra Performance: โหลดเร็วทันใจ ลดโอกาสลูกค้ากดปิดหนี (Bounce Rate)",
      "Ads-Ready: โครงสร้างพร้อมสำหรับการติด Pixel และ Conversion API",
      "Action Focused: ดีไซน์ปุ่มสั่งซื้อและติดต่อให้กดง่ายที่สุดบนมือถือ",
    ],
    coreFeatures: [
      {
        title: "Instant Loading",
        description: "เทคโนโลยี SSR โหลดไวแม้ในพื้นที่สัญญาณอินเทอร์เน็ตต่ำ",
        icon: "Smartphone",
      },
      {
        title: "Conversion UI",
        description: "จัดเรียงเนื้อหาตามหลักจิตวิทยาการขาย (AIDA Model)",
        icon: "Target",
      },
      {
        title: "Direct Connect",
        description: "เชื่อมต่อ Line, Facebook Messenger และปุ่มโทรออกทันที",
        icon: "MessageSquare",
      },
    ],
    faqs: [
      {
        question: "ทำไมถึงคุ้มกว่าจ้างทั่วไป?",
        answer:
          "เพราะเราใช้โครงสร้างเดียวกับเว็บระดับสูง แต่ปรับให้กระชับเพื่อปิดการขายหน้าเดียว ทำให้ได้ประสิทธิภาพสูงในราคา SME ครับ",
      },
    ],
    keywords: ["รับทำ Sale Page", "Landing Page ยิงแอด", "เว็บหน้าเดียว", "หน้าปิดการขาย"],
    priority: 1,
    isPopular: true,
  },

  // ===========================================================================
  // [02. CORPORATE]: ความเป็นมืออาชีพและความมั่นคง (Stability & Logic)
  // ===========================================================================
  {
    id: "AEM-SVC-CP-03",
    title: "Corporate Standard Website",
    description:
      "ยกระดับความน่าเชื่อถือให้ธุรกิจ ด้วยเว็บไซต์มาตรฐานองค์กร ดีไซน์ทันสมัย และระบบจัดการข้อมูลที่ใช้งานง่าย",
    image: "/images/service/corporate-node.webp",
    templateSlug: "corporate",
    category: "business",
    price: "9,900",
    priceValue: 9900,
    currency: "THB",
    unit: "โปรเจกต์",
    theme: {
      primary: "#2563eb",
      secondary: "#1e3a8a",
      background: "bg-slate-50",
      gradient: "from-blue-500/5 to-transparent",
    },
    benefits: [
      "Brand Authority: ออกแบบตาม CI สร้างภาพลักษณ์องค์กรที่มั่นคง",
      "Future Proof: รองรับการขยายตัวและเพิ่มฟังก์ชันใหม่ในอนาคต",
      "Trust Signals: วางโครงสร้างข้อมูลที่เน้นความโปร่งใสและน่าเชื่อถือ",
    ],
    coreFeatures: [
      {
        title: "Enterprise Design",
        description: "สะท้อนวิสัยทัศน์องค์กร ผ่านงานดีไซน์ระดับ Specialist",
        icon: "ShieldCheck",
      },
      {
        title: "Dynamic CMS",
        description: "ระบบหลังบ้านให้คุณอัปเดตผลงานและข่าวสารได้แบบ Real-time",
        icon: "Database",
      },
      {
        title: "Responsive Matrix",
        description: "แสดงผลสมบูรณ์แบบในทุกอุปกรณ์ (Desktop/Tablet/Mobile)",
        icon: "Monitor",
      },
    ],
    faqs: [
      {
        question: "ดูแลง่ายไหม?",
        answer: "เราใช้ระบบที่คนทั่วไปใช้งานได้ครับ พร้อมมีวิดีโอสอนการใช้งานระบบหลังบ้านให้ฟรี",
      },
    ],
    keywords: ["ทำเว็บองค์กร", "เว็บไซต์บริษัท", "ออกแบบเว็บธุรกิจ", "Web Design Corporate"],
    priority: 2,
    isFeatured: true,
  },

  // ===========================================================================
  // [03. LOCAL AUTHORITY]: ยกระดับธุรกิจรายพื้นที่ (Geographic Dominance)
  // ===========================================================================
  {
    id: "AEM-SVC-LS-10",
    title: "Local Authority Engine",
    description:
      "ครองความเป็นเบอร์ 1 ในพื้นที่ ด้วยระบบเว็บไซต์ที่ออกแบบมาเพื่อกวาดลูกค้าในจังหวัดโดยเฉพาะ",
    image: "/images/service/local-node.webp",
    templateSlug: "local-authority",
    category: "business",
    price: "6,900",
    priceValue: 6900,
    currency: "THB",
    unit: "พื้นที่",
    theme: {
      primary: "#f59e0b",
      secondary: "#78350f",
      background: "bg-white",
      gradient: "from-amber-50 to-transparent",
    },
    benefits: [
      "Geo-Dominance: ติดอันดับต้นๆ เมื่อมีการค้นหาบริการในพื้นที่ของคุณ",
      "Maps Integration: เชื่อมต่อข้อมูลพิกัดร้านค้าให้ Google เข้าใจง่าย",
      "Hyper-Local SEO: ดึงดูดลูกค้าที่อยู่ใกล้คุณที่สุดให้ตัดสินใจซื้อ",
    ],
    coreFeatures: [
      {
        title: "Entity Graphing",
        description: "สร้างโครงสร้างข้อมูลให้ Google Maps จดจำร้านค้าของคุณ",
        icon: "MapPin",
      },
      {
        title: "Localized Content",
        description: "วางกลยุทธ์เนื้อหาที่สอดรับกับพฤติกรรมลูกค้าในพื้นที่",
        icon: "Search",
      },
      {
        title: "Local Authority",
        description: "ยกระดับความน่าเชื่อถือรายจังหวัดด้วย Local Schema",
        icon: "Navigation",
      },
    ],
    faqs: [
      {
        question: "ทำไมต้องเจาะพื้นที่?",
        answer:
          "การทำเจาะจงพื้นที่ช่วยลดคู่แข่งในระดับประเทศ และเข้าถึงลูกค้าที่มีโอกาสซื้อจริงในพื้นที่ของคุณได้เร็วกว่าครับ",
      },
    ],
    keywords: ["รับปักหมุด", "Local SEO", "Google Maps ร้านค้า", "ทำเว็บรายจังหวัด"],
    priority: 3,
    isFeatured: true,
  },

  // ===========================================================================
  // [04. E-CATALOG]: ระบบจัดการข้อมูลและการขาย (Structured Commerce)
  // ===========================================================================
  {
    id: "AEM-SVC-EC-05",
    title: "Smart E-Catalog System",
    description:
      "เปลี่ยนแค็ตตาล็อกเล่มหนาเป็นระบบค้นหาสินค้าออนไลน์ ช่วยฝ่ายขายทำงานง่าย ลูกค้าปิดการขายไว",
    image: "/images/service/catalog-node.webp",
    templateSlug: "catalog",
    category: "ecommerce",
    price: "16,900",
    priceValue: 16900,
    currency: "THB",
    unit: "เริ่มต้น",
    theme: {
      primary: "#8b5cf6",
      secondary: "#4c1d95",
      background: "bg-zinc-50",
      gradient: "from-violet-500/5 via-transparent to-transparent",
    },
    benefits: [
      "Sales Support: ช่วยให้ฝ่ายขายส่งข้อมูลสินค้าให้ลูกค้าได้ทันทีผ่านลิงก์",
      "Mass Data: รองรับสินค้าจำนวนมาก จัดหมวดหมู่ได้เป็นระเบียบชัดเจน",
      "Lead Generation: ระบบขอใบเสนอราคาที่ช่วยเก็บข้อมูลผู้สนใจซื้อ",
    ],
    coreFeatures: [
      {
        title: "Advanced Database",
        description: "จัดการสเปคสินค้า รูปภาพ และไฟล์ PDF ได้ในที่เดียว",
        icon: "Database",
      },
      {
        title: "Multi-Filter",
        description: "ระบบกรองสินค้าอัจฉริยะ ค้นหาเจอง่ายในไม่กี่วินาที",
        icon: "Filter",
      },
      {
        title: "Inquiry Flow",
        description: "ระบบรับคำขอใบเสนอราคาผ่าน Line OA อัตโนมัติ",
        icon: "Send",
      },
    ],
    faqs: [
      {
        question: "ใส่สินค้าได้เยอะแค่ไหน?",
        answer: "รองรับได้ไม่จำกัดครับ ระบบออกแบบมาเพื่อจัดการข้อมูลขนาดใหญ่โดยเฉพาะ",
      },
    ],
    keywords: ["เว็บแค็ตตาล็อก", "ระบบสินค้าออนไลน์", "E-Catalog", "โปรแกรมสต็อกสินค้า"],
    priority: 4,
  },

  // ===========================================================================
  // [05. PORTFOLIO]: อัตลักษณ์และผลงาน (Professional Persona)
  // ===========================================================================
  {
    id: "AEM-SVC-PB-14",
    title: "Professional Bio & Portfolio",
    description: "พื้นที่นำเสนอตัวตนและผลงานแบบมืออาชีพ รวมทุกช่องทางติดต่อไว้ในโหนดเดียว",
    image: "/images/service/personal-node.webp",
    templateSlug: "bio",
    category: "personal",
    price: "4,900",
    priceValue: 4900,
    currency: "THB",
    unit: "โปรเจกต์",
    theme: {
      primary: "#06b6d4",
      secondary: "#164e63",
      background: "bg-zinc-950",
      gradient: "from-cyan-500/10 via-transparent to-transparent",
    },
    benefits: [
      "Centralized Hub: รวมโซเชียลมีเดียและผลงานเด่นไว้ในที่เดียว",
      "High Authority: สร้างความประทับใจแรกเห็นด้วยดีไซน์ระดับโปร",
      "Speed Connectivity: ลูกค้าเข้าถึงช่องทางติดต่อได้ใน 1 คลิก",
    ],
    coreFeatures: [
      {
        title: "Expert Showcase",
        description: "จัดแสดงทักษะและผลงานอย่างมีชั้นเชิงและน่าสนใจ",
        icon: "Award",
      },
      {
        title: "Digital Bio",
        description: "นามบัตรดิจิทัลที่เข้าถึงได้จากทั่วโลกตลอด 24 ชม.",
        icon: "Fingerprint",
      },
      {
        title: "Link Optimization",
        description: "จัดการทราฟฟิกไปยัง Social Media ต่างๆ ได้อย่างเป็นระบบ",
        icon: "Share2",
      },
    ],
    faqs: [
      {
        question: "ใช้แทน LinkedIn ได้ไหม?",
        answer: "ใช้เสริมกันได้ดีมากครับ เพื่อให้พอร์ตโฟลิโอของคุณดูมีเอกลักษณ์โดดเด่นกว่าใคร",
      },
    ],
    keywords: ["ทำเว็บพอร์ตโฟลิโอ", "Bio Link", "เว็บส่วนตัว", "Digital Name Card"],
    priority: 5,
  },

  // ===========================================================================
  // [06. HOSPITALITY]: ประสบการณ์และความเหนือระดับ (Luxury Experience)
  // ===========================================================================
  {
    id: "AEM-SVC-HR-08",
    title: "Hotel & Resort Website",
    description:
      "เว็บไซต์โรงแรมที่เน้นประสบการณ์ผู้ใช้งาน (UX) ภาพสวย โหลดไว เพื่อยอดจองห้องพักที่เพิ่มขึ้น",
    image: "/images/service/hotel-resort-node.webp",
    templateSlug: "hotelresort",
    category: "business",
    price: "16,900",
    priceValue: 16900,
    currency: "THB",
    unit: "เริ่มต้น",
    theme: {
      primary: "#c5a358",
      secondary: "#1a1a1a",
      background: "bg-[#0a0a0a]",
      gradient: "from-[#c5a358]/10 via-transparent to-transparent",
    },
    benefits: [
      "Visual Immersion: ถ่ายทอดบรรยากาศที่พักผ่านหน้าเว็บที่โหลดไวระดับ Retina",
      "Direct Booking ROI: ลดการจ่ายค่าคอมมิชชั่นให้ OTA ด้วยระบบจองตรง",
      "Guest Trust: สร้างความมั่นใจให้แขกผู้เข้าพักด้วยมาตรฐานความปลอดภัยสูง",
    ],
    coreFeatures: [
      {
        title: "Experience Design",
        description: "ดีไซน์ที่เปลี่ยนผู้เข้าชมเว็บให้กลายเป็นแขกผู้เข้าพัก",
        icon: "Home",
      },
      {
        title: "Booking Gateway",
        description: "รองรับการเชื่อมต่อกับ Channel Manager และ Payment Engine",
        icon: "CreditCard",
      },
      {
        title: "Facility Showcase",
        description: "นำเสนอสิ่งอำนวยความสะดวกด้วย Gallery ความละเอียดสูง",
        icon: "Camera",
      },
    ],
    faqs: [
      {
        question: "รองรับหลายภาษาไหม?",
        answer: "รองรับครับ เพื่อดึงดูดนักท่องเที่ยวจากทั่วทุกมุมโลก",
      },
    ],
    keywords: ["ทำเว็บโรงแรม", "เว็บไซต์รีสอร์ท", "ออกแบบเว็บที่พัก", "Hotel Web Design"],
    priority: 6,
    isFeatured: true,
  },
] as const;
