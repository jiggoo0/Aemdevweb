/**
 * [SERVICE_NODE]: BANGKOK_ENTERPRISE_HUB v18.0.0 (FULL_SYNC)
 * [STRATEGY]: Enterprise Branding | CBD Competitive SEO | Hex Standard
 * [MARKET]: Bangkok CBD (Sathorn, Silom, Sukhumvit)
 */
import type { AreaNode } from "@/types";

export const bangkokNode: AreaNode = {
  // --- Basic Identity ---
  slug: "bangkok",
  province: "กรุงเทพมหานคร",
  templateSlug: "corporate", // เชื่อมต่อกับ CorporateTemplate
  title: "รับทำเว็บไซต์ กรุงเทพฯ | ออกแบบเว็บองค์กรและบริษัท ติดหน้าแรก Google",
  description:
    "บริการรับทำเว็บไซต์บริษัทในกรุงเทพฯ มาตรฐาน Enterprise โหลดไว ปลอดภัย รองรับ PDPA ออกแบบโดยมืออาชีพเพื่อภาพลักษณ์ธุรกิจที่เหนือกว่าคู่แข่งในย่าน CBD",

  // --- SEO Metadata ---
  seoTitle: "บริษัทรับทำเว็บไซต์ กรุงเทพฯ รับทำ SEO และออกแบบเว็บองค์กรครบวงจร - เอ็มซ่ามากส์",
  seoDescription:
    "จ้างทำเว็บไซต์กรุงเทพฯ เน้นเว็บองค์กร บริษัทมหาชน และ SME ที่ต้องการความน่าเชื่อถือ รองรับ SEO ติดหน้าแรก Google พร้อมระบบความปลอดภัยขั้นสูง",

  // --- Visual & Theme (Corporate Blue: Trust/Tech) ---
  heroImage: "/images/areas/bangkok-node.webp",
  theme: {
    mode: "dark", // Dark Mode Override เพื่อความ Premium
    primary: "#2563eb", // Royal Blue 600
    secondary: "#1e3a8a", // Royal Blue 900
    background: "#020617", // Slate 950 (Dark Navy)
    foreground: "#f8fafc", // Slate 50
    accent: "#60a5fa", // Blue 400
    gradient: "from-[#2563eb]/10 via-transparent to-transparent",
  },

  // --- Pricing Strategy (Premium Market) ---
  price: "15,900",
  priceValue: 15900,
  currency: "THB",
  unit: "เริ่มต้น / โปรเจกต์",

  // --- Trust Signals ---
  clientTrust:
    "Professional Trust: ได้รับความไว้วางใจจาก 50+ บริษัทชั้นนำและ SME ในย่านสาทร-สุขุมวิท",

  // --- Localized Benefits ---
  benefits: [
    "มาตรฐานระดับสากล: เว็บไซต์ที่ออกแบบมาเพื่อการแข่งขันในตลาดทุนกรุงเทพฯ รองรับ Traffic มหาศาลและมีความปลอดภัยข้อมูลสูงสุด (Data Security)",
    "SEO ครองตลาด: วางโครงสร้างเพื่อแย่งชิงพื้นที่หน้าแรก Google ในคีย์เวิร์ดที่มีการแข่งขันสูงที่สุด (High Competition Keywords)",
    "ภาพลักษณ์ผู้นำ: ดีไซน์ CI (Corporate Identity) ที่เฉียบคม สะท้อนวิสัยทัศน์องค์กร เพื่อสร้างความเชื่อมั่นให้นักลงทุนและคู่ค้า",
  ],

  // --- Core Features ---
  coreFeatures: [
    {
      title: "Enterprise Performance",
      description: "ใช้ Tech Stack ล่าสุด (Next.js) รับประกันความเร็ว 99/100 แม้จะมีข้อมูลมหาศาล",
      icon: "Zap",
    },
    {
      title: "PDPA Compliance",
      description:
        "ติดตั้งระบบ Cookie Consent และ Privacy Policy ถูกต้องตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล",
      icon: "ShieldCheck",
    },
    {
      title: "Scalable CMS",
      description: "ระบบจัดการเนื้อหาที่รองรับการขยายตัวขององค์กร เพิ่มข่าวสาร/สินค้าได้ไม่จำกัด",
      icon: "Database",
    },
  ],

  // --- Localized FAQs ---
  faqs: [
    {
      question: "บริษัทอยู่ที่ไหน นัดประชุมได้ไหม?",
      answer:
        "ผมเป็น Freelance Specialist ที่ทำงานแบบ Remote แต่สามารถนัดประชุม On-site ได้ในเขต CBD (สาทร, สีลม, สุขุมวิท) เพื่อรับโจทย์และนำเสนองานครับ",
    },
    {
      question: "ออกใบกำกับภาษีได้ไหม?",
      answer:
        "สามารถออกใบเสนอราคาและใบแจ้งหนี้/ใบเสร็จรับเงินที่ถูกต้องตามกฎหมายได้ครับ เพื่อให้ฝ่ายบัญชีของคุณดำเนินการได้สะดวก",
    },
    {
      question: "ทำไมราคาสูงกว่าเจ้าอื่น?",
      answer:
        "เพราะผมไม่ได้ทำเว็บสำเร็จรูปครับ ผมเขียนโค้ดขึ้นใหม่ (Custom Code) เพื่อประสิทธิภาพและความปลอดภัยสูงสุด ซึ่งคุ้มค่ากว่าในระยะยาวสำหรับองค์กรครับ",
    },
    {
      question: "รองรับการเชื่อมต่อ CRM/ERP ไหม?",
      answer:
        "ทำได้ครับ ผมสามารถเขียน API เชื่อมต่อกับระบบภายในของบริษัท (เช่น Salesforce, Hubspot) เพื่อให้ข้อมูลลูกค้าไหลเข้าสู่ระบบอัตโนมัติ",
    },
    {
      question: "มีบริการดูแลรายปี (MA) ไหม?",
      answer:
        "มีครับ บริการดูแลความปลอดภัย อัปเดตระบบ และสำรองข้อมูลรายวัน เพื่อให้เว็บไซต์องค์กรของคุณทำงานราบรื่น 24 ชั่วโมงครับ",
    },
    {
      question: "ใช้เวลาทำนานเท่าไหร่?",
      answer:
        "โปรเจกต์ระดับ Corporate ปกติใช้เวลา 2-4 สัปดาห์ครับ ขึ้นอยู่กับความซับซ้อนของระบบและขั้นตอนการอนุมัติแบบ (Approval) ของลูกค้าครับ",
    },
    {
      question: "รับงานราชการหรือรัฐวิสาหกิจไหม?",
      answer: "รับครับ ผมมีประสบการณ์ทำงานตาม TOR และเข้าใจกระบวนการเบิกจ่ายของหน่วยงานราชการครับ",
    },
  ],

  // --- Context Data ---
  localContext: {
    marketInsight:
      "ในกรุงเทพฯ ความเร็วและความน่าเชื่อถือคือพระเจ้า เว็บไซต์ที่ดูเป็นมืออาชีพช่วยให้ปิดดีล B2B ได้ง่ายขึ้น",
    technicalApproach:
      "เน้น Security และ Performance สูงสุด เพื่อรองรับการ Audit จากฝ่ายไอทีขององค์กรลูกค้า",
    localStrength: "พร้อมเข้าพบเพื่อนำเสนองานในรูปแบบมืออาชีพ และเข้าใจกระบวนการทำงานขององค์กรใหญ่",
    nicheIndustries: [
      "อสังหาริมทรัพย์ (Real Estate)",
      "การเงินและการลงทุน (Finance)",
      "คลินิกและโรงพยาบาล (Healthcare)",
      "บริษัทกฎหมายและที่ปรึกษา",
    ],
    painPoints: [
      "เว็บเก่าโดนแฮกบ่อย ไม่ปลอดภัย",
      "เว็บโหลดช้า ลูกค้าบ่น",
      "ค้นหาใน Google ไม่เจอ โดนคู่แข่งแซง",
    ],
    competitorLevel: "high", // กรุงเทพฯ แข่งขันสูงมาก

    socialProof: {
      rating: 5.0,
      reviewCount: 128,
      localClient: "บริษัทอสังหาฯ ชั้นนำ ย่านสาทร",
    },
    regionalPricing: {
      startPrice: "15,900 บาท",
      timeline: "14-21 วัน",
    },
    localSuccessStory: {
      title: "Case Study: โครงการคอนโดสุขุมวิท",
      result:
        "ทำ SEO เจาะกลุ่ม Expat ดันยอด Traffic จากต่างชาติเพิ่มขึ้น 200% และปิดการขายห้องชุดได้ผ่านหน้าเว็บ",
    },
    hyperLocalKeywords: [
      "รับทำเว็บไซต์ สาทร",
      "ออกแบบเว็บไซต์ สีลม",
      "จ้างทำ SEO สุขุมวิท",
      "ทำเว็บหน้าเดียว พระราม 9",
    ],
  },

  // --- System Metadata ---
  priority: 100,
  districts: ["สาทร", "สีลม", "สุขุมวิท", "พระราม 9", "ทองหล่อ", "อโศก", "ปทุมวัน", "บางนา"],
  keywords: [
    "รับทำเว็บไซต์ กรุงเทพ",
    "บริษัทรับทำเว็บไซต์",
    "จ้างทำเว็บไซต์ ราคา",
    "รับทำ SEO",
    "ออกแบบเว็บไซต์บริษัท",
  ],
  coordinates: { lat: 13.7563, lng: 100.5018 },
};
