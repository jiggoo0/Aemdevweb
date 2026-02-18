/**
 * [SERVICE_NODE]: LOCAL_DOMINATION_ENGINE v18.0.6 (HARDENED)
 * [STRATEGY]: Hyper-Local Targeting | Adaptive Theme | Professional Authority
 * [MAINTAINER]: AEMZA MACKS
 */

import type { TemplateMasterData } from "@/types";

export const localAuthorityService: TemplateMasterData = {
  id: "AEM-SVC-LS-10",
  title: "Local SEO & Google Maps Dominance | ยึดอันดับ 1 บนแผนที่ สร้างความเชื่อถือระดับสูงสุดในพื้นที่",
  description: "กลยุทธ์ยึดพื้นที่ Google Map Pack 1-3 ที่ออกแบบมาเพื่อยกระดับความน่าเชื่อถือของธุรกิจท้องถิ่น ดันอันดับเหนือคู่แข่งด้วยโครงสร้างข้อมูลที่ถูกต้องแม่นยำตามมาตรฐาน Google Search AI",
  image: "/images/services/local-node.webp",
  templateSlug: "local-authority",
  category: "business",
  price: "6,900",
  priceValue: 6900,
  currency: "THB",
  unit: "เริ่มต้น / สาขา",

  /**
   * [THEME_ADAPTER]: ออกแบบให้เน้นความน่าเชื่อถือ (Trust-Centric)
   * ปรับจาก Emerald 600 เป็น Emerald 700 เพื่อความสุขุม
   */
  theme: {
    mode: "light",
    primary: "#047857",     // Emerald 700
    secondary: "#064e3b",   // Emerald 900
    background: "#fafafa",  // Zinc 50 (สะอาด ตาไม่ล้า)
    foreground: "#09090b",  // Zinc 950
    accent: "#059669",      // Emerald 600
    gradient: "from-emerald-700/10 via-zinc-50/50 to-zinc-50",
  },

  clientTrust: "Success Metric: ช่วยธุรกิจเพิ่มอัตราการขอเส้นทาง (Directions) และโทรออก (Calls) เฉลี่ย 315% ผ่านการปรับปรุงคุณภาพหมุดในระดับเทคนิค",

  benefits: [
    "High-Intent Conversion: เข้าถึงกลุ่มเป้าหมายที่มีความต้องการซื้อจริง (Ready-to-Buy) ซึ่งมีประสิทธิภาพการปิดการขายสูงกว่าแพลตฟอร์มโซเชียลมีเดีย",
    "Reputation Infrastructure: วางโครงสร้างความน่าเชื่อถือผ่านระบบ Review Management ที่ออกแบบมาเพื่อสร้างภาพลักษณ์ผู้เชี่ยวชาญในสายตาลูกค้า",
    "Sustainable Organic Asset: สร้างสินทรัพย์ดิจิทัลถาวรที่ทำงานต่อเนื่อง 24 ชั่วโมง ช่วยลดภาระงบประมาณโฆษณาที่ผันผวนตามตลาด",
  ],

  coreFeatures: [
    {
      title: "GMB Deep Optimization",
      description: "ปรับปรุงโครงสร้าง Google Business Profile ทุกมิติ (Semantic Metadata) เพื่อความแม่นยำในการระบุตัวตนธุรกิจ",
      icon: "MapPin",
    },
    {
      title: "Citations Consistency",
      description: "ตรวจสอบความสอดคล้องของข้อมูล NAP (Name-Address-Phone) ทั่วโลกดิจิทัล เพื่อสร้าง Authority Signal ระดับสูง",
      icon: "Globe",
    },
    {
      title: "Review Intelligence",
      description: "กลยุทธ์การบริหารจัดการความคิดเห็นที่ผสมผสานคีย์เวิร์ดเชิงกลยุทธ์ เพื่อเพิ่มความแข็งแกร่งให้อันดับการค้นหา",
      icon: "Star",
    },
  ],
  // ... (FAQs และ Keywords คงเดิมตามโครงสร้างมาตรฐาน)
  faqs: [
    {
      question: "ต้องใช้เวลาเท่าไหร่ถึงจะเห็นผล?",
      answer: "โดยปกติจะเริ่มเห็นการเปลี่ยนแปลงของอันดับภายใน 30-45 วัน และจะเริ่มคงที่ในตำแหน่งยุทธศาสตร์ (Top 3) ภายใน 90-120 วัน ขึ้นอยู่กับการแข่งขันครับ",
    },
  ],
  keywords: ["รับทำ Local SEO", "ปักหมุด Google Maps", "Local SEO Thailand"],
  priority: 1,
  isFeatured: true,
};
