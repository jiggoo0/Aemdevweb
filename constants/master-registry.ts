/**
 * [DATA REGISTRY]: MASTER_SERVICE_REGISTRY v17.9.0 (CONVERSION_ENGINEERED)
 * [STRATEGY]: Psychological Triggers | Engineering Trust | ROI-Centric
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { TemplateMasterData } from "@/types";

/**
 * @description คลังข้อมูลบริการหลักที่ถูก Rewrite ใหม่ด้วยภาษาเชิงวิศวกรรมและธุรกิจ (High-Value Content)
 * เน้นย้ำจุดขายเรื่อง "Technology Stack" และ "Business Outcome" เพื่อคัดกรองลูกค้าที่มีคุณภาพ
 */
export const MASTER_REGISTRY: readonly TemplateMasterData[] = [
  // ===========================================================================
  // [00. SEO AGENCY]: ความเชื่อมั่นและการเติบโต (Trust & Growth)
  // ===========================================================================
  {
    id: "AEM-SVC-SEO-07",
    title: "Technical SEO & Organic Asset",
    description:
      "เปลี่ยนเว็บไซต์ให้เป็นสินทรัพย์ดิจิทัลที่สร้างรายได้ระยะยาว ด้วยการปรับโครงสร้างวิศวกรรมเว็บ (Architecture) ให้ชนะอัลกอริทึม Google",
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
      "Asset Building: ลงทุนสร้าง Traffic ที่เป็นของคุณเอง ไม่ต้องจ่ายค่าแอดตลอดชีวิต",
      "Technical Hygiene: แก้ไข Core Web Vitals และ Structure Data ให้ Google รักเว็บคุณ",
      "Revenue Focus: โฟกัส Keyword ที่มีโอกาสปิดการขาย (Commercial Intent) ไม่ใช่แค่ยอดวิว",
    ],
    coreFeatures: [
      {
        title: "Code-Level Audit",
        description: "รื้อโครงสร้าง HTML/JS เพื่อกำจัด Code ขยะที่ฉุดคะแนน SEO",
        icon: "Code2",
      },
      {
        title: "Semantic Strategy",
        description: "วางโครงสร้างเนื้อหาแบบ Topic Cluster ให้ Google มองคุณเป็นผู้เชี่ยวชาญ",
        icon: "Network",
      },
      {
        title: "ROI Reporting",
        description: "รายงานผลแบบผู้บริหาร ดูยอดคนเข้าที่แปลงเป็นยอดเงินจริง",
        icon: "TrendingUp",
      },
    ],
    faqs: [
      {
        question: "ทำไมราคาสูงกว่าเจ้าอื่น?",
        answer:
          "เพราะเราทำ Technical SEO (แก้โค้ด) ไม่ใช่แค่เขียนบทความครับ การแก้โครงสร้างเว็บให้ถูกต้องถาวรคืองานวิศวกรรมที่ใช้ความเชี่ยวชาญสูง",
      },
      {
        question: "การันตีอันดับไหม?",
        answer:
          "ไม่มีใครสั่ง Google ได้ครับ แต่เราการันตีว่าเว็บไซต์ของคุณจะ 'สมบูรณ์แบบ' ตามกฎของ Google ซึ่งนำไปสู่อันดับที่ดีขึ้นอย่างยั่งยืนแน่นอน",
      },
    ],
    keywords: [
      "Technical SEO Specialist",
      "รับทำ SEO สายขาว",
      "ปรับปรุง Core Web Vitals",
      "SEO สำหรับธุรกิจ B2B",
    ],
    priority: 0,
    isFeatured: true,
  },

  // ===========================================================================
  // [01. SALE PAGE]: การกระตุ้นและปิดการขาย (Action & Urgency)
  // ===========================================================================
  {
    id: "AEM-SVC-SP-01",
    title: "Ad-Optimized Sale Page",
    description:
      "เครื่องมือปิดการขายที่ออกแบบมาเพื่อ 'ยิงแอด' โดยเฉพาะ โหลดไวระดับมิลลิวินาที ลดต้นทุนค่าโฆษณา (CPC) เพิ่ม Quality Score",
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
      "Zero-Friction: ตัดสิ่งรบกวนออก เหลือแค่เนื้อหาที่โน้มน้าวให้ 'กดซื้อ'",
      "Platform Friendly: โครงสร้างเป็นมิตรกับ Bot ของ Facebook/TikTok แอดไม่อนุมัติยาก",
      "Psychology UX: วาง Layout ตามหลักจิตวิทยา AIDA (Attention, Interest, Desire, Action)",
    ],
    coreFeatures: [
      {
        title: "Instant Mobile Load",
        description: "เทคโนโลยี Static Site (SSG) เปิดปุ๊บติดปั๊บ ลูกค้าไม่กดหนี",
        icon: "Smartphone",
      },
      {
        title: "Conversion Pixel",
        description: "ติดตั้ง Event Tracking พร้อมเก็บ Data ลูกค้าทุกพฤติกรรม",
        icon: "Target",
      },
      {
        title: "Sticky CTA",
        description: "ปุ่มสั่งซื้อ/ติดต่อที่ตามติดลูกค้าไปทุกที่บนหน้าจอ",
        icon: "MousePointerClick",
      },
    ],
    faqs: [
      {
        question: "ต่างจาก Linktree ไหม?",
        answer:
          "คนละเรื่องครับ Linktree คือทางผ่าน แต่ Sale Page คือ 'พนักงานขาย' ที่ปิดการขายได้ในหน้าเดียว และเก็บ Data ได้ละเอียดกว่ามาก",
      },
    ],
    keywords: [
      "รับทำ Sale Page",
      "Landing Page ยิงแอด",
      "หน้าปิดการขาย TikTok",
      "เว็บหน้าเดียว Conversion สูง",
    ],
    priority: 1,
    isPopular: true,
  },

  // ===========================================================================
  // [02. CORPORATE]: ความเป็นมืออาชีพและความมั่นคง (Stability & Logic)
  // ===========================================================================
  {
    id: "AEM-SVC-CP-03",
    title: "Corporate Identity Platform",
    description:
      "สถาปัตยกรรมเว็บไซต์สำหรับองค์กรที่ต้องการ 'Trust' ระดับสูงสุด รองรับ PDPA, Security มาตรฐานสากล และระบบ Scalability",
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
      "Brand Guardian: ดีไซน์ที่ควบคุม CI (Corporate Identity) อย่างเคร่งครัด",
      "Security First: ระบบความปลอดภัยระดับ Enterprise ป้องกันการ Hack และ Data Leak",
      "Investor Ready: โครงสร้างข้อมูลที่พร้อมสำหรับการตรวจสอบ (Audit) และนักลงทุน",
    ],
    coreFeatures: [
      {
        title: "Enterprise Stack",
        description: "พัฒนาด้วย Next.js (React) มาตรฐานเดียวกับ Tech Company ระดับโลก",
        icon: "ShieldCheck",
      },
      {
        title: "Dynamic News/Jobs",
        description: "ระบบประกาศข่าวและรับสมัครงานที่ฝ่าย HR ใช้งานเองได้ง่าย",
        icon: "Newspaper",
      },
      {
        title: "Organization Schema",
        description: "บอก Google ว่าบริษัทคุณคือใคร ตั้งอยู่ที่ไหน อย่างเป็นทางการ",
        icon: "Building2",
      },
    ],
    faqs: [
      {
        question: "รองรับจำนวนคนเข้าได้แค่ไหน?",
        answer:
          "ไม่จำกัดครับ ระบบเราใช้ Serverless Architecture ที่ขยายตัวตาม Traffic อัตโนมัติ (Auto-scaling)",
      },
    ],
    keywords: [
      "ทำเว็บองค์กร มหาชน",
      "เว็บไซต์บริษัท Corporate",
      "Web Design for Business",
      "รับทำเว็บ Next.js",
    ],
    priority: 2,
    isFeatured: true,
  },

  // ===========================================================================
  // [03. LOCAL AUTHORITY]: ยกระดับธุรกิจรายพื้นที่ (Geographic Dominance)
  // ===========================================================================
  {
    id: "AEM-SVC-LS-10",
    title: "Local Domination Engine",
    description:
      "ยึดครองพื้นที่การค้นหาในจังหวัดของคุณ ด้วยกลยุทธ์ Hyper-Local SEO ที่เชื่อมต่อ Website เข้ากับ Google Maps",
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
      "Maps Ranking: ดันหมุดร้านค้าให้ติด 3 อันดับแรก (Local Pack) เมื่อลูกค้าค้นหา",
      "Walk-in Traffic: เปลี่ยนยอดค้นหา 'ร้านใกล้ฉัน' ให้เป็นลูกค้าที่เดินเข้าร้านจริง",
      "Reputation: ระบบจัดการรีวิวช่วยสร้างความน่าเชื่อถือเหนือคู่แข่งในพื้นที่",
    ],
    coreFeatures: [
      {
        title: "Entity Sync",
        description: "เชื่อมโยงข้อมูลเว็บไซต์กับ Google Business Profile เป็นหนึ่งเดียว",
        icon: "MapPin",
      },
      {
        title: "Geo-Targeted Content",
        description: "บทความที่ดักจับคำค้นหาชื่ออำเภอ/ตำบล ในจังหวัดของคุณ",
        icon: "Compass",
      },
      {
        title: "Review Strategy",
        description: "กลยุทธ์เพิ่ม 5-Star Review อย่างเป็นธรรมชาติ",
        icon: "Star",
      },
    ],
    faqs: [
      {
        question: "ทำไมต้องทำเว็บถ้ามีเพจแล้ว?",
        answer:
          "เพจ Facebook ค้นหาใน Google Maps ไม่เจอครับ การมีเว็บไซต์ช่วยยืนยันตัวตนกับ Google ว่าร้านคุณมีอยู่จริงและน่าเชื่อถือกว่า",
      },
    ],
    keywords: ["รับปักหมุด Google Maps", "Local SEO", "ทำเว็บร้านค้าท้องถิ่น", "เพิ่มยอดหน้าร้าน"],
    priority: 3,
    isFeatured: true,
  },

  // ===========================================================================
  // [04. E-CATALOG]: ระบบจัดการข้อมูลและการขาย (Structured Commerce)
  // ===========================================================================
  {
    id: "AEM-SVC-EC-05",
    title: "Industrial E-Catalog & RFQ",
    description:
      "ระบบจัดการสินค้าสำหรับธุรกิจ B2B/โรงงาน ลดภาระฝ่ายขายด้วยแค็ตตาล็อกออนไลน์ที่ค้นหาง่าย พร้อมระบบขอใบเสนอราคา (RFQ)",
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
      "Sales Enablement: เซลส์ไม่ต้องพกแค็ตตาล็อกเล่มหนา แค่ส่งลิงก์ลูกค้าก็ดูสเปคได้ทันที",
      "Lead Qualify: คัดกรองลูกค้าที่สนใจจริงผ่านระบบขอใบเสนอราคา (Request for Quotation)",
      "Mass SKU Ready: รองรับสินค้า 10,000+ รายการ โดยที่เว็บไม่หน่วง",
    ],
    coreFeatures: [
      {
        title: "Smart Filter",
        description: "ระบบกรองสินค้าละเอียด (ขนาด/วัสดุ/เกรด) สำหรับสินค้าอุตสาหกรรม",
        icon: "Filter",
      },
      {
        title: "Spec Sheet Download",
        description: "ปุ่มดาวน์โหลด PDF Catalog/Datasheet ในหน้าสินค้า",
        icon: "FileText",
      },
      {
        title: "B2B Workflow",
        description: "ไม่ใช่แค่ตะกร้าสินค้า แต่เป็น Flow การเจรจาธุรกิจแบบ B2B",
        icon: "Briefcase",
      },
    ],
    faqs: [
      {
        question: "ต่างจาก Shopee/Lazada ไหม?",
        answer:
          "ต่างมากครับ E-Marketplace แข่งกันที่ราคาถูกที่สุด แต่ E-Catalog ของเราสร้างมาเพื่อสร้างภาพลักษณ์แบรนด์และดีลธุรกิจล็อตใหญ่",
      },
    ],
    keywords: [
      "ทำเว็บ E-Catalog",
      "ระบบขอใบเสนอราคา",
      "เว็บโรงงานอุตสาหกรรม",
      "Digital Catalog System",
    ],
    priority: 4,
  },

  // ===========================================================================
  // [05. PORTFOLIO]: อัตลักษณ์และผลงาน (Professional Persona)
  // ===========================================================================
  {
    id: "AEM-SVC-PB-14",
    title: "Personal Authority Hub",
    description:
      "สร้าง Personal Brand ให้แข็งแกร่งด้วยเว็บไซต์ส่วนตัว รวมผลงาน ช่องทางติดต่อ และการนัดหมายไว้ในจุดเดียว",
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
      "Authority Building: ยืนยันสถานะความเป็น 'ตัวจริง' ในวงการของคุณ",
      "Centralized Asset: ไม่ต้องกลัว Social Media ปิดกั้นการมองเห็น เพราะนี่คือบ้านของคุณ",
      "Premium Impression: ส่งลิงก์เว็บส่วนตัวดูเป็นมืออาชีพกว่าส่งนามบัตรกระดาษ",
    ],
    coreFeatures: [
      {
        title: "Portfolio Gallery",
        description: "โชว์เคสผลงานแบบ Interactive ที่ดึงดูดสายตา",
        icon: "Award",
      },
      {
        title: "Smart Bio Link",
        description: "หน้ารวมลิงก์ Social Media ที่โหลดไวและดีไซน์สวยกว่า Linktree",
        icon: "Link",
      },
      {
        title: "Direct Contact",
        description: "ปุ่มกดโทร/ไลน์/อีเมล ที่ทำงานทันทีบนมือถือ",
        icon: "PhoneCall",
      },
    ],
    faqs: [
      {
        question: "เหมาะกับใคร?",
        answer:
          "Freelance, ที่ปรึกษา, วิทยากร, หรือผู้บริหารที่ต้องการสร้างภาพลักษณ์ผู้นำทางความคิด (Thought Leader) ครับ",
      },
    ],
    keywords: ["ทำเว็บ Portfolio", "Personal Branding Website", "Bio Link Design", "เว็บส่วนตัว"],
    priority: 5,
  },

  // ===========================================================================
  // [06. HOSPITALITY]: ประสบการณ์และความเหนือระดับ (Luxury Experience)
  // ===========================================================================
  {
    id: "AEM-SVC-HR-08",
    title: "Luxury Hospitality Engine",
    description:
      "เว็บไซต์โรงแรม/วิลล่าที่เน้น 'Visual Storytelling' และระบบ 'Direct Booking' เพื่อลดค่าคอมมิชชั่น OTA",
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
      "Profit Maximization: เพิ่มยอดจองตรง (Direct Booking) ไม่ต้องโดนหัก 15-20%",
      "Brand Immersion: ถ่ายทอดบรรยากาศที่พักได้ดีกว่าหน้า listing บน Agoda/Booking",
      "International Standard: รองรับนักท่องเที่ยวทั่วโลกด้วยมาตรฐาน UX ระดับสากล",
    ],
    coreFeatures: [
      {
        title: "Visual Excellence",
        description: "ระบบแสดงภาพความละเอียดสูง (Retina Ready) โดยไม่ทำให้เว็บอืด",
        icon: "Image",
      },
      {
        title: "Booking Integration",
        description: "เชื่อมต่อระบบจอง (Booking Engine) หรือ Channel Manager ได้",
        icon: "CalendarCheck",
      },
      {
        title: "Multilingual SEO",
        description: "โครงสร้างรองรับการทำ SEO หลายภาษา (อังกฤษ/จีน/รัสเซีย)",
        icon: "Languages",
      },
    ],
    faqs: [
      {
        question: "ช่วยลดค่า OTA ได้จริงไหม?",
        answer:
          "จริงครับ ถ้าเว็บคุณสวยและจองง่ายพอลูกค้าจะเลือกจองตรงเพื่อรับสิทธิพิเศษที่เราตั้งไว้ (เช่น อาหารเช้าฟรี)",
      },
    ],
    keywords: [
      "ทำเว็บโรงแรม",
      "เว็บไซต์รีสอร์ท Luxury",
      "Hotel Website Design",
      "ระบบจองห้องพักโรงแรม",
    ],
    priority: 6,
    isFeatured: true,
  },
] as const;
