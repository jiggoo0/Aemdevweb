/**
 * [SERVICE_NODE]: LOCAL_DOMINATION_ENGINE v18.0.5 (STABILIZED_HYBRID)
 * [STRATEGY]: Hyper-Local Targeting | Adaptive Theme | Zero-Emoji
 * [MAINTAINER]: AEMZA MACKS
 */

import type { TemplateMasterData } from "@/types";

export const localAuthorityService: TemplateMasterData = {
  id: "AEM-SVC-LS-10",
  title: "Local SEO & Google Maps Dominance | ยึดอันดับ 1 บนแผนที่ เปลี่ยนหมุดธุรกิจเป็นแม่เหล็กดูดเงิน",
  description:
    "กลยุทธ์การยึดพื้นที่ Map Pack 1-3 ที่ออกแบบมาเพื่อ SMEs โดยเฉพาะ ดันธุรกิจให้ติดอันดับสูงสุดในพื้นที่ให้บริการ เพื่อให้ลูกค้าที่พร้อมจ่ายเจอคุณก่อนคู่แข่งเสมอ",

  image: "/images/services/local-node.webp",
  templateSlug: "local-authority",
  category: "business",

  price: "6,900",
  priceValue: 6900,
  currency: "THB",
  unit: "เริ่มต้น / สาขา",

  /**
   * [THEME_ADAPTER]: ออกแบบให้รองรับการสลับธีมแบบไร้รอยต่อ
   * Light: Zinc 50 Base | Emerald 600 Core
   * Dark: Zinc 950 Base | Emerald 400 Core (Adaptive Contrast)
   */
  theme: {
    mode: "light", // รองรับระบบ Dynamic Toggle ในอนาคต
    primary: "#059669", // Emerald 600
    secondary: "#064e3b", // Emerald 900
    background: "#fafafa", // Zinc 50
    foreground: "#09090b", // Zinc 950
    accent: "#10b981",    // Emerald 500
    gradient: "from-emerald-600/10 via-zinc-50/50 to-zinc-50",
  },

  clientTrust:
    "Local Domination Success: ช่วยธุรกิจ SMEs เพิ่มอัตราการขอเส้นทาง (Directions) และโทรออก (Calls) เฉลี่ย 315% ภายในไตรมาสแรก",

  benefits: [
    "High-Intent Traffic: เข้าถึงลูกค้าที่ค้นหาด้วยเจตนาที่จะซื้อ (Ready-to-Buy) ซึ่งมีอัตราการปิดการขายสูงกว่าโซเชียลมีเดียหลายเท่า",
    "Reputation Armor: สร้างความน่าเชื่อถือผ่านระบบ Review Strategy ที่ถูกออกแบบมาเพื่อกระตุ้น Algorithm ของ Google โดยตรง",
    "Zero Ad Cost: สร้างแหล่งลูกค้าถาวร (Organic Asset) ที่จะทำงานให้คุณตลอด 24 ชั่วโมง โดยไม่ต้องพึ่งพางบโฆษณาที่ผันผวน",
  ],

  coreFeatures: [
    {
      title: "GMB Deep Optimization",
      description: "ปรับโครงสร้าง Google Business Profile ทุกมิติ (Semantic Keywords & Metadata) เพื่อให้ Googlebot ระบุตัวตนธุรกิจได้แม่นยำที่สุด",
      icon: "MapPin",
    },
    {
      title: "Citations Ecosystem",
      description: "สร้างความสอดคล้องของข้อมูล NAP (Name-Address-Phone) ทั่วโลกอินเทอร์เน็ต เพื่อสร้าง Authority Signal ระดับสูงสุด",
      icon: "Globe",
    },
    {
      title: "Review Intelligence",
      description: "กลยุทธ์การจัดการรีวิวที่ผสมผสาน Keyword เพื่อเพิ่มความแข็งแกร่งให้อันดับ และสร้างภาพลักษณ์ผู้เชี่ยวชาญ",
      icon: "Star",
    },
  ],

  faqs: [
    {
      question: "ต้องใช้เวลาเท่าไหร่ถึงจะเห็นผล?",
      answer: "โดยปกติจะเริ่มเห็นการขยับของอันดับภายใน 30-45 วัน และจะเริ่มคงที่ในอันดับ Top 3 ภายใน 90-120 วัน ขึ้นอยู่กับการแข่งขันในพื้นที่ครับ",
    },
    {
      question: "ถ้าไม่มีหน้าร้านจริงๆ จะปักหมุดได้ไหม?",
      answer: "ทำได้ครับ เราจะตั้งค่าเป็น Service Area Business (SAB) ซึ่งเป็นรูปแบบที่ Google อนุญาตสำหรับธุรกิจบริการที่ไปหาลูกค้าถึงบ้าน เช่น ช่างซ่อม หรือทนายความ",
    },
    {
      question: "รับทำทั่วประเทศไหม หรือเฉพาะบางจังหวัด?",
      answer: "เรารับทำทุกพื้นที่ทั่วประเทศไทยครับ เพราะระบบ Local SEO ของเราทำงานบนฐานข้อมูล Digital Signal ไม่จำเป็นต้องลงพื้นที่จริงก็สามารถดันอันดับได้แม่นยำครับ",
    },
    {
      question: "ทำไมราคานี้ถึงคุ้มค่ากว่าการยิงแอด?",
      answer: "การยิงแอดคือการ 'เช่า' ลูกค้า ถ้าหยุดจ่ายยอดก็หาย แต่ Local SEO คือการ 'สร้าง' ทรัพย์สิน เมื่อติดอันดับแล้ว คุณจะได้ลูกค้าฟรีต่อเนื่องในระยะยาวครับ",
    }
  ],

  keywords: [
    "รับทำ Local SEO",
    "รับปักหมุด Google Maps",
    "เพิ่มยอดขายหน้าร้าน",
    "ทำ SEO ร้านอาหาร",
    "Google Business Profile Service",
    "รับแก้หมุด Google Maps"
  ],

  priority: 1,
  isFeatured: true,
};
