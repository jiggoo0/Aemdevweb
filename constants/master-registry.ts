/**
 * [DATA REGISTRY]: MASTER_SERVICE_REGISTRY v17.7.2 (IDENTITY_LOCKED)
 * [STRATEGY]: Color Psychology | Business Alignment | PSI Optimization
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
  // [03. LOCAL EXPERTISE]: ยกระดับธุรกิจรายพื้นที่ (Geographic Authority)
  // ===========================================================================
  {
    id: "AEM-SVC-LS-10",
    title: "Local Authority Engine",
    description:
      "ดันธุรกิจของคุณให้เป็นเบอร์ 1 ในพื้นที่ ด้วยระบบเว็บไซต์ที่ออกแบบมาเพื่อกวาดลูกค้าในจังหวัดโดยเฉพาะ",
    image: "/images/service/local-node.webp",
    // [FIXED]: แมปตรงกับโฟลเดอร์คอมโพเนนต์ใหม่ และ Redirect ใน vercel.json
    templateSlug: "new-service-name",
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
      "Local Dominance: ติดอันดับต้นๆ เมื่อมีการค้นหาบริการในพื้นที่ของคุณ",
      "Trust & Entity: สร้างความน่าเชื่อถือด้วยข้อมูลพิกัดที่ชัดเจน",
      "Conversion Optimized: เปลี่ยนผู้เข้าชมในพื้นที่ให้เป็นลูกค้าตัวจริง",
    ],
    coreFeatures: [
      {
        title: "Map & Geo SEO",
        description: "ปรับจูนโครงสร้าง Schema LocalBusiness ให้ Google เข้าใจพิกัดร้าน",
        icon: "MapPin",
      },
      {
        title: "Localized Content",
        description: "วางกลยุทธ์เนื้อหาที่เจาะจงพฤติกรรมคนในพื้นที่นั้นๆ",
        icon: "Search",
      },
    ],
    faqs: [
      {
        question: "ทำไมต้องแยกเป็นรายพื้นที่?",
        answer:
          "การทำเจาะจงพื้นที่ช่วยให้ Google จัดอันดับคุณได้ง่ายขึ้น และลูกค้าจะรู้สึกใกล้ชิดมากกว่าครับ",
      },
    ],
    keywords: ["รับปักหมุด", "Local SEO", "Google Maps ร้านค้า", "ทำเว็บรายจังหวัด"],
    priority: 3,
    isFeatured: true,
  },

  // ===========================================================================
  // [04. E-CATALOG]: ความทันสมัยและการจัดการ (Modern & Logic)
  // ===========================================================================
  {
    id: "AEM-SVC-EC-05",
    title: "Smart E-Catalog System",
    description:
      "เปลี่ยนแค็ตตาล็อกเล่มหนาเป็นระบบค้นหาสินค้าออนไลน์ ช่วยฝ่ายขายทำงานง่าย ลูกค้าค้นหาเจอทันที",
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
      "Smart Search: ระบบค้นหาและตัวกรองสินค้าที่แม่นยำ",
      "Unlimited Data: รองรับสินค้าจำนวนมาก จัดหมวดหมู่ได้เป็นระเบียบ",
      "Lead Generation: ปุ่มขอใบเสนอราคาอัตโนมัติ เพื่อปิดการขาย",
    ],
    coreFeatures: [
      {
        title: "Product Database",
        description: "จัดการข้อมูลสินค้า สเปค และรูปภาพ ได้อย่างเป็นระบบ",
        icon: "Database",
      },
      {
        title: "Filter System",
        description: "ค้นหาจาก หมวดหมู่ หรือราคา ได้ละเอียด",
        icon: "Filter",
      },
    ],
    faqs: [
      {
        question: "ลงสินค้าเองยากไหม?",
        answer: "ไม่ยากครับ เรามีระบบจัดการที่ง่ายเหมือนการเล่นโซเชียลมีเดียทั่วไป",
      },
    ],
    keywords: ["เว็บแค็ตตาล็อก", "ระบบสินค้าออนไลน์", "E-Catalog", "โปรแกรมสต็อกสินค้า"],
    priority: 4,
  },

  // ===========================================================================
  // [05. PORTFOLIO]: ความทันสมัยและเอกลักษณ์ (Personal & Tech)
  // ===========================================================================
  {
    id: "AEM-SVC-PB-14",
    title: "Professional Bio & Portfolio",
    description: "พื้นที่นำเสนอตัวตนและผลงานแบบมืออาชีพ รวมทุกช่องทางติดต่อไว้ในลิงก์เดียว",
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
      "Centralized: รวมทุก Social Media และผลงานไว้ที่เดียว",
      "Professional: สร้างความประทับใจแรกด้วยดีไซน์ระดับ Specialist",
    ],
    coreFeatures: [
      {
        title: "Portfolio Gallery",
        description: "จัดแสดงผลงานอย่างมีศิลปะ สวยงามน่าสนใจ",
        icon: "Grid",
      },
      {
        title: "Smart Contact",
        description: "ปุ่มติดต่อที่ออกแบบให้กดง่ายที่สุด",
        icon: "Link",
      },
    ],
    faqs: [
      {
        question: "เอาไปใช้ทำอะไรได้บ้าง?",
        answer: "ใช้เป็น Bio Link ในโปรไฟล์ หรือใช้แนบสมัครงานและเสนองานลูกค้าครับ",
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
      "เว็บไซต์โรงแรมที่เน้นประสบการณ์ผู้ใช้งาน (UX) ภาพสวย โหลดไว กระตุ้นให้อยากจองห้องพัก",
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
      "Visual Impact: นำเสนอภาพบรรยากาศที่พักได้เต็มอารมณ์ แต่ยังโหลดเร็ว",
      "Direct Booking: เพิ่มช่องทางจองตรง ลดค่าคอมมิชชั่น",
    ],
    coreFeatures: [
      {
        title: "Mood & Tone",
        description: "ดีไซน์ที่ถ่ายทอดบรรยากาศการพักผ่อนได้อย่างลงตัว",
        icon: "Image",
      },
      {
        title: "Room Showcase",
        description: "หน้ารายละเอียดห้องพักที่ชัดเจน ตัดสินใจง่าย",
        icon: "Home",
      },
    ],
    faqs: [
      {
        question: "มีระบบจองให้ไหม?",
        answer: "เราสามารถเชื่อมต่อกับระบบจองที่คุณมีอยู่เดิมได้ทันทีครับ",
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
  .filter((svc) => svc.isFeatured || svc.isPopular)
  .sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99));
