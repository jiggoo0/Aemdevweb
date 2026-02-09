/**
 * [DATA REGISTRY]: MASTER_SERVICE_REGISTRY v17.7.1 (REFACTORED_FINAL)
 * [STRATEGY]: Color Psychology | Business Alignment | Visual Hierarchy
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { TemplateMasterData } from "@/types";

/**
 * @description คลังข้อมูลบริการที่ปรับโทนเป็น "Strategic Partner" เน้นความคุ้มค่าเชิงธุรกิจและมาตรฐานวิศวกรรม
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

    // Commercial Specs
    price: "19,500",
    priceValue: 19500,
    currency: "THB",
    unit: "รายเดือน",

    // Theme: Growth & Technology (Emerald / Dark Mode)
    theme: {
      primary: "#10b981",
      secondary: "#064e3b",
      background: "bg-slate-950",
      gradient: "from-emerald-500/10 via-transparent to-transparent",
    },

    // Content Data
    benefits: [
      "Technical Audit: ตรวจสุขภาพเว็บและแก้ไขจุดบอดทางเทคนิคครบวงจร",
      "Keyword Strategy: วางแผนคำค้นหาที่เน้นยอดขาย (Commercial Intent) ไม่ใช่แค่ยอดวิว",
      "Organic Growth: สร้างฐานลูกค้าที่เข้ามาเองตามธรรมชาติอย่างยั่งยืน",
    ],
    coreFeatures: [
      {
        title: "Code Structure",
        description: "ปรับโครงสร้างหลังบ้านให้ Clean และถูกหลัก Google 100%",
        icon: "Code2",
      },
      {
        title: "Speed & Core Vitals",
        description: "ทำความเร็วเว็บให้ผ่านเกณฑ์มาตรฐาน เพื่ออันดับที่ดีกว่า",
        icon: "Zap",
      },
      {
        title: "Analytics",
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
      "หน้าเว็บไซต์สำหรับปิดการขายโดยเฉพาะ ออกแบบ UX/UI ให้กระชับ โหลดไว รองรับการทำโฆษณา (Ads Optimization)",
    image: "/images/service/salepage-node.webp",
    templateSlug: "salepage",
    category: "landing",

    // Commercial Specs
    price: "3,500",
    priceValue: 3500,
    currency: "THB",
    unit: "เริ่มต้น",

    // Theme: Urgency & Conversion (Rose Red / Clean White)
    theme: {
      primary: "#ef4444",
      secondary: "#7f1d1d",
      background: "bg-white",
      gradient: "from-rose-50 to-white",
    },

    // Content Data
    benefits: [
      "Performance: โหลดเร็วทันใจ ลดโอกาสลูกค้ากดปิดหนี (Bounce Rate)",
      "Ad-Ready: โครงสร้างพร้อมสำหรับการติด Pixel และ Conversion API",
      "User Friendly: ดีไซน์ปุ่มสั่งซื้อและติดต่อให้กดง่ายที่สุดบนมือถือ",
    ],
    coreFeatures: [
      {
        title: "Fast Loading",
        description: "เทคโนโลยี Server-Side Rendering (SSR) โหลดไวแม้เน็ตช้า",
        icon: "Smartphone",
      },
      {
        title: "Conversion Focus",
        description: "ตัดสิ่งรบกวน เน้นเนื้อหาที่โน้มน้าวใจลูกค้า",
        icon: "Target",
      },
      {
        title: "Easy Update",
        description: "ปรับเปลี่ยนโปรโมชั่นหรือรูปภาพได้รวดเร็ว",
        icon: "RefreshCw",
      },
    ],
    faqs: [
      {
        question: "ทำไมถึงคุ้มกว่าจ้างทั่วไป?",
        answer:
          "เพราะเราใช้โครงสร้างมาตรฐานเดียวกับบริษัทใหญ่ แต่ตัดทอนฟีเจอร์ที่ไม่จำเป็นออก เพื่อให้คุณได้ราคาที่คุ้มค่าที่สุดครับ",
      },
      {
        question: "เหมาะกับใคร?",
        answer:
          "เหมาะกับธุรกิจที่เน้นยิงโฆษณา หรือต้องการหน้าเว็บที่ส่งลิงก์แล้วปิดการขายได้เลยครับ",
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

    // Commercial Specs
    price: "9,900",
    priceValue: 9900,
    currency: "THB",
    unit: "โปรเจกต์",

    // Theme: Trust & Stability (Royal Blue / Professional Light)
    theme: {
      primary: "#2563eb",
      secondary: "#1e3a8a",
      background: "bg-slate-50",
      gradient: "from-blue-500/5 to-transparent",
    },

    // Content Data
    benefits: [
      "Professional Look: ออกแบบตามอัตลักษณ์แบรนด์ (CI) สร้างภาพจำที่ดี",
      "SEO Structure: วางโครงสร้างพื้นฐานให้ค้นหาเจอใน Google ได้ง่าย",
      "Scalability: รองรับการขยายเนื้อหาหรือเพิ่มหน้าใหม่ๆ ในอนาคต",
    ],
    coreFeatures: [
      {
        title: "Brand Identity",
        description: "สะท้อนความเป็นมืออาชีพ ผ่านงานดีไซน์ที่ลงตัว",
        icon: "ShieldCheck",
      },
      {
        title: "CMS System",
        description: "ระบบหลังบ้านให้คุณอัปเดตข่าวสารและผลงานได้เอง",
        icon: "Edit3",
      },
      {
        title: "Responsive",
        description: "แสดงผลสวยงามทุกหน้าจอ ทั้งมือถือ แท็บเล็ต และคอมพิวเตอร์",
        icon: "Monitor",
      },
    ],
    faqs: [
      {
        question: "ดูแลหลังการขายอย่างไร?",
        answer:
          "เราดูแลทางเทคนิคให้ตลอดอายุการใช้งานโฮสติ้งกับเราครับ หากมีปัญหาการแสดงผล แจ้งได้ทันที",
      },
    ],
    keywords: ["ทำเว็บองค์กร", "เว็บไซต์บริษัท", "ออกแบบเว็บธุรกิจ", "Web Design Corporate"],
    priority: 2,
    isFeatured: true,
  },

  // ===========================================================================
  // [03. E-CATALOG]: ความทันสมัยและการจัดการ (Modern & Logic)
  // ===========================================================================
  {
    id: "AEM-SVC-EC-05",
    title: "Smart E-Catalog System",
    description:
      "เปลี่ยนแค็ตตาล็อกเล่มหนาหรือไฟล์ PDF เป็นระบบค้นหาสินค้าออนไลน์ ช่วยฝ่ายขายทำงานง่าย ลูกค้าค้นหาเจอทันที",
    image: "/images/service/catalog-node.webp",
    templateSlug: "catalog",
    category: "ecommerce",

    // Commercial Specs
    price: "16,900",
    priceValue: 16900,
    currency: "THB",
    unit: "เริ่มต้น",

    // Theme: Innovation & Database (Violet / Modern Zinc)
    theme: {
      primary: "#8b5cf6",
      secondary: "#4c1d95",
      background: "bg-zinc-50",
      gradient: "from-violet-500/5 via-transparent to-transparent",
    },

    // Content Data
    benefits: [
      "Smart Search: ระบบค้นหาและตัวกรองสินค้า ช่วยให้ลูกค้าเจอสิ่งที่ต้องการไวขึ้น",
      "Unlimited Data: รองรับสินค้าจำนวนมาก จัดหมวดหมู่ได้เป็นระเบียบ",
      "Lead Generation: ปุ่มขอใบเสนอราคาอัตโนมัติ ช่วยเก็บรายชื่อลูกค้า",
    ],
    coreFeatures: [
      {
        title: "Product Database",
        description: "จัดการข้อมูลสินค้า สเปค และรูปภาพ ได้อย่างเป็นระบบ",
        icon: "Database",
      },
      {
        title: "Filter System",
        description: "ค้นหาจาก หมวดหมู่, ราคา, หรือคุณสมบัติ ได้ละเอียด",
        icon: "Filter",
      },
      {
        title: "Inquiry Flow",
        description: "เชื่อมต่อกับ Line/Email เพื่อปิดการขายได้รวดเร็ว",
        icon: "MessageSquare",
      },
    ],
    faqs: [
      {
        question: "ลงสินค้าเองยากไหม?",
        answer:
          "ไม่ยากครับ เราออกแบบระบบมาให้ใช้งานง่ายเหมือนโพสต์ Facebook พร้อมมีคู่มือสอนการใช้งาน",
      },
    ],
    keywords: ["เว็บแค็ตตาล็อก", "ระบบสินค้าออนไลน์", "E-Catalog", "โปรแกรมสต็อกสินค้า"],
    priority: 3,
  },

  // ===========================================================================
  // [04. LOCAL SEO]: พลังงานและการเข้าถึง (Energy & Friendly)
  // ===========================================================================
  {
    id: "AEM-SVC-LS-10",
    title: "Local SEO & Business Profile",
    description:
      "ทำให้ลูกค้าในพื้นที่ค้นหาร้านคุณเจอก่อนใคร เพิ่มโอกาสลูกค้า Walk-in ด้วยการปรับแต่งหมุดธุรกิจให้สมบูรณ์",
    image: "/images/service/local-node.webp",
    templateSlug: "local",
    category: "business",

    // Commercial Specs
    price: "6,900",
    priceValue: 6900,
    currency: "THB",
    unit: "พื้นที่",

    // Theme: Local Visibility (Amber / Warm Light)
    theme: {
      primary: "#f59e0b",
      secondary: "#78350f",
      background: "bg-white",
      gradient: "from-amber-50 to-transparent",
    },

    // Content Data
    benefits: [
      "Visibility: เพิ่มโอกาสการมองเห็นเมื่อมีการค้นหาในละแวกใกล้เคียง",
      "Trust: สร้างความน่าเชื่อถือด้วยข้อมูลที่ครบถ้วนและรีวิวที่จัดการอย่างดี",
      "Navigation: ลูกค้าเดินทางมาถูกร้าน ไม่หลงทาง ด้วยหมุดที่แม่นยำ",
    ],
    coreFeatures: [
      {
        title: "Map Optimization",
        description: "ปรับแต่งข้อมูล Google Business Profile ให้ถูกต้องและน่าสนใจ",
        icon: "MapPin",
      },
      {
        title: "Keyword Focus",
        description: "ใส่คำค้นหาที่คนท้องถิ่นใช้จริง เพื่อดักจับลูกค้า",
        icon: "Search",
      },
    ],
    faqs: [
      {
        question: "ทำแล้วยอดขายจะเพิ่มทันทีเลยไหม?",
        answer:
          "การมีตัวตนที่ชัดเจนจะเพิ่ม 'โอกาส' ให้ลูกค้าตัดสินใจง่ายขึ้นและเดินทางมาสะดวกขึ้นครับ",
      },
    ],
    keywords: ["รับปักหมุด", "Local SEO", "Google Maps ร้านค้า", "โปรโมทร้านอาหาร"],
    priority: 4,
  },

  // ===========================================================================
  // [05. PORTFOLIO]: ความทันสมัยและเอกลักษณ์ (Personal & Tech)
  // ===========================================================================
  {
    id: "AEM-SVC-PB-14",
    title: "Professional Portfolio & Bio Link",
    description:
      "พื้นที่นำเสนอตัวตนและผลงานแบบมืออาชีพ รวมทุกช่องทางติดต่อไว้ในลิงก์เดียว (One-Link Solution)",
    image: "/images/service/personal-node.webp",
    templateSlug: "bio",
    category: "personal",

    // Commercial Specs
    price: "4,900",
    priceValue: 4900,
    currency: "THB",
    unit: "โปรเจกต์",

    // Theme: Digital Identity (Cyan / Dark Mode)
    theme: {
      primary: "#06b6d4",
      secondary: "#164e63",
      background: "bg-zinc-950",
      gradient: "from-cyan-500/10 via-transparent to-transparent",
    },

    // Content Data
    benefits: [
      "Centralized: รวม Facebook, Line, TikTok และผลงานไว้ที่เดียว",
      "Professional: ดูดีกว่าการส่งไฟล์ทั่วไป สร้างความประทับใจแรกพบ",
      "Customizable: ปรับแต่งธีมให้เข้ากับบุคลิกหรือสายงานของคุณ",
    ],
    coreFeatures: [
      {
        title: "Portfolio Gallery",
        description: "จัดแสดงผลงานอย่างมีศิลปะ สวยงามน่าสนใจ",
        icon: "Grid",
      },
      {
        title: "Smart Contact",
        description: "ปุ่มติดต่อที่ออกแบบให้กดง่าย ส่งลูกค้าไปยังช่องทางหลักทันที",
        icon: "Link",
      },
    ],
    faqs: [
      {
        question: "เอาไปใช้ทำอะไรได้บ้าง?",
        answer:
          "ใช้เป็นลิงก์แนะนำตัว (Bio Link) ใน Social Media หรือใช้แนบสมัครงาน/เสนองานลูกค้าครับ",
      },
    ],
    keywords: ["ทำเว็บพอร์ตโฟลิโอ", "Bio Link", "เว็บส่วนตัว", "Digital Name Card"],
    priority: 5,
  },

  // ===========================================================================
  // [06. HOSPITALITY]: ความหรูหราและความพรีเมียม (Luxury & Elegance)
  // ===========================================================================
  {
    id: "AEM-SVC-HR-08",
    title: "Hotel & Resort Website",
    description:
      "เว็บไซต์โรงแรมที่เน้นประสบการณ์ผู้ใช้งาน (User Experience) ภาพสวย โหลดไว กระตุ้นให้อยากจองห้องพัก",
    image: "/images/service/hotel-resort-node.webp",
    templateSlug: "hotelresort",
    category: "business",

    // Commercial Specs
    price: "16,900",
    priceValue: 16900,
    currency: "THB",
    unit: "เริ่มต้น",

    // Theme: Premium & Experience (Gold / Deep Black)
    theme: {
      primary: "#c5a358",
      secondary: "#1a1a1a",
      background: "bg-[#0a0a0a]",
      gradient: "from-[#c5a358]/10 via-transparent to-transparent",
    },

    // Content Data
    benefits: [
      "Visual Impact: นำเสนอภาพบรรยากาศที่พักได้เต็มอารมณ์ แต่ยังโหลดเร็ว",
      "Direct Booking: เพิ่มช่องทางจองตรง ลดค่าคอมมิชชั่นจากแพลตฟอร์มอื่น",
      "International: รองรับระบบ 2 ภาษา (ไทย/อังกฤษ) เพื่อลูกค้าต่างชาติ",
    ],
    coreFeatures: [
      {
        title: "Mood & Tone",
        description: "ดีไซน์ที่ถ่ายทอดบรรยากาศการพักผ่อนได้อย่างลงตัว",
        icon: "Image",
      },
      {
        title: "Room Showcase",
        description: "หน้ารายละเอียดห้องพักที่ชัดเจน ครบถ้วน ตัดสินใจง่าย",
        icon: "Home",
      },
      {
        title: "Call-to-Action",
        description: "ปุ่มจองและช่องทางติดต่อที่เด่นชัดทุกหน้า",
        icon: "MousePointer",
      },
    ],
    faqs: [
      {
        question: "มีระบบจองให้ไหม?",
        answer: "เราสามารถเชื่อมต่อกับระบบจองที่คุณมีอยู่ หรือทำปุ่มจองผ่าน Line/Email ให้ได้ครับ",
      },
    ],
    keywords: ["ทำเว็บโรงแรม", "เว็บไซต์รีสอร์ท", "ออกแบบเว็บที่พัก", "Hotel Web Design"],
    priority: 6,
    isFeatured: true,
  },
] as const;

/**
 * @const FEATURED_SERVICES
 * @description คัดกรองบริการแนะนำ (Highlight) โดยเรียงตาม Priority
 */
export const FEATURED_SERVICES = [...MASTER_REGISTRY]
  .filter((svc: TemplateMasterData) => svc.isFeatured || svc.isPopular)
  .sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99));
