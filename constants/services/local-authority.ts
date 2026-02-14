/**
 * [SERVICE_NODE]: LOCAL_DOMINATION_ENGINE v17.9.110 (TOTAL_WHITE_REMOVAL)
 * [STRATEGY]: Zero-Glare UI | Absolute Readability | Emerald-Slate Hardening
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { TemplateMasterData } from "@/types";

export const localAuthorityService: TemplateMasterData = {
  id: "AEM-SVC-LS-10",
  title: "Local SEO & Google Maps Marketing | ครองตลาดท้องถิ่นด้วยหมุดธุรกิจ",
  description:
    "อย่าปล่อยให้ลูกค้าหลุดมือไปหาคู่แข่ง! ยึดพื้นที่บน Google Maps และหน้าค้นหาด้วยกลยุทธ์ Local SEO ที่แม่นยำ",
  image: "/images/service/local-node.webp",
  templateSlug: "local-authority",
  category: "business",
  price: "6,900",
  priceValue: 6900,
  currency: "THB",
  unit: "พื้นที่ / สาขา",

  // [THEME_PURGE]: ถอดสีขาวทิ้ง 100% ตามคำสั่ง (Strict Enforcement)
  theme: {
    primary: "#059669",
    // [FIXED]: ใช้สีเขียวเข้มจัด (Nearly Black-Green) เพื่อให้อ่านออก 100% บนพื้นหลังใหม่
    secondary: "#022c22",

    // [TRANSFORM]: จาก bg-white -> bg-slate-100 (สีเทาอ่อนแบบ Matte ลดแสงสะท้อน)
    background: "bg-slate-100",

    accent: "#059669",

    // [GRADIENT_REWORK]: ใช้ Gradient เพื่อสร้างขอบเขตเนื้อหาแทนการใช้กล่องสีขาว
    gradient: "from-slate-200 via-slate-100 to-emerald-50/20",
  },

  clientTrust: "โซลูชันที่ช่วยให้ธุรกิจท้องถิ่นกว่า 500+ แห่ง เติบโตอย่างยั่งยืนบน Google Maps",
  benefits: [
    "Dominate Local Search: ยึดครองพื้นที่ 'Map Pack' อันดับ 1-3",
    "Trust & Reputation: สร้างความน่าเชื่อถือผ่านระบบ Entity Linking",
    "Zero-Ad Dependency: เน้นยอดขายจาก Organic Traffic 100%",
  ],
  coreFeatures: [
    {
      title: "Google Business Profile Audit",
      description: "ปรับแต่งโปรไฟล์ธุรกิจให้ครบถ้วนตามกฎ Google 100% เพื่อคุณภาพสูงสุด",
      icon: "MapPin",
    },
    {
      title: "Hyper-Local Content Strategy",
      description: "ทำ SEO เจาะจงพื้นที่ เพื่อดักจับลูกค้าที่ค้นหาด้วยคำว่า 'ใกล้ฉัน'",
      icon: "Globe",
    },
  ],
  faqs: [
    {
      question: "ทำไมต้องทำ Local SEO ทั้งที่มีเพจ Facebook?",
      answer: "ลูกค้าใน Google Maps คือกลุ่มที่มี Intent พร้อมจ่ายเงินทันที (High Conversion Rate)",
    },
  ],
  keywords: ["รับทำ Local SEO", "รับปักหมุด Google Maps"],
  priority: 3,
  isFeatured: true,
};
