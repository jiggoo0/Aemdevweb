/**
 * [SERVICE_NODE]: LOCAL_DOMINATION_ENGINE v17.9.111 (HEX_NORMALIZED)
 * [STRATEGY]: Zero-Glare UI | Absolute Readability | Hex Standard
 * [MAINTAINER]: AEMZA MACKS
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

  // [THEME_FIX]: ใช้ Hex Code ล้วน รองรับ OKLCH Engine
  theme: {
    mode: "light", // ธีมสว่าง สะอาดตา (ทางการ)
    primary: "#059669", // Emerald 600 (สีเขียวราชการ/ท้องถิ่น)
    secondary: "#022c22", // Emerald 950 (เขียวเข้มเกือบดำ)
    background: "#f1f5f9", // Slate 100 (เทาอ่อน ไม่ใช่ขาวล้วน ลดแสงสะท้อน)
    foreground: "#0f172a", // Slate 900 (ตัวหนังสือสีเข้ม อ่านง่าย)
    accent: "#34d399", // Emerald 400
    gradient: "from-[#059669]/10 via-transparent to-transparent",
  },

  clientTrust: "โซลูชันที่ช่วยให้ธุรกิจท้องถิ่นกว่า 500+ แห่ง เติบโตอย่างยั่งยืนบน Google Maps",
  benefits: [
    "Dominate Local Search: ยึดครองพื้นที่ 'Map Pack' อันดับ 1-3 บนหน้า Google",
    "Trust & Reputation: สร้างความน่าเชื่อถือผ่านระบบ Entity Linking และการจัดการรีวิว",
    "Zero-Ad Dependency: เน้นยอดขายจาก Organic Traffic 100% ไม่ต้องพึ่งพาแอดตลอดไป",
  ],
  coreFeatures: [
    {
      title: "Google Business Audit",
      description: "ปรับแต่งโปรไฟล์ธุรกิจให้ครบถ้วนตามกฎ Google 100% เพื่อคะแนนคุณภาพสูงสุด",
      icon: "MapPin",
    },
    {
      title: "Hyper-Local Content",
      description:
        "ทำ SEO เจาะจงพื้นที่ เพื่อดักจับลูกค้าที่ค้นหาด้วยคำว่า 'ใกล้ฉัน' หรือชื่ออำเภอ",
      icon: "Globe",
    },
    {
      title: "Review Management",
      description: "ระบบจัดการและตอบกลับรีวิว เพื่อสร้างภาพลักษณ์ที่ดีและกระตุ้นการตัดสินใจซื้อ",
      icon: "Star",
    },
  ],
  faqs: [
    {
      question: "ทำไมต้องทำ Local SEO ทั้งที่มีเพจ Facebook?",
      answer:
        "ลูกค้าใน Google Maps คือกลุ่มที่มี Intent พร้อมจ่ายเงินทันที (High Conversion Rate) สูงกว่าคนเล่น Facebook ครับ",
    },
    {
      question: "นานแค่ไหนถึงจะเห็นผล?",
      answer:
        "โดยปกติจะเริ่มเห็น Traffic เพิ่มขึ้นใน 30-45 วันครับ ขึ้นอยู่กับการแข่งขันในพื้นที่นั้นๆ ด้วย",
    },
  ],
  keywords: ["รับทำ Local SEO", "รับปักหมุด Google Maps", "ทำเว็บ อบต.", "เว็บไซต์หน่วยงานราชการ"],
  priority: 3,
  isFeatured: true,
};
