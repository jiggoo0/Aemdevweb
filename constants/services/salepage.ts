/**
 * [SERVICE_NODE]: SALE_PAGE_CONVERSION_KING v17.9.88 (THEME_STABILIZED)
 * [STRATEGY]: High Contrast | Dark Aggressive | Hex Standard
 * [MAINTAINER]: AEMZA MACKS
 */

import type { TemplateMasterData } from "@/types";

export const salePageService: TemplateMasterData = {
  id: "AEM-SVC-SP-01",
  title: "High-Conversion Sale Page | ปิดการขายไว ยิงแอดแม่น ไม่โดนปิดกั้น",
  description:
    "หยุดตำน้ำพริกละลายแม่น้ำ! สร้าง Sale Page โครงสร้างคลีนที่โหลดไวระดับวินาที รองรับ Conversion API 100% ช่วยให้ AI แอดนำส่งแม่นขึ้น และเปลี่ยนคนดูให้เป็นยอดโอนทันที",
  image: "/images/service/salepage-node.webp",
  templateSlug: "salepage",
  category: "landing",
  price: "3,500",
  priceValue: 3500,
  currency: "THB",
  unit: "เริ่มต้น / หน้า",

  // [THEME_FIX]: ใช้ Hex Code ล้วน เพื่อให้รองรับ OKLCH Engine ได้สมบูรณ์
  theme: {
    mode: "dark",
    primary: "#fb7185", // Rose 400 (สีแดงสว่าง ตัดกับพื้นเข้ม)
    secondary: "#9f1239", // Rose 900 (สีแดงเลือดหมู)
    background: "#270308", // Dark Crimson (แดงเกือบดำ)
    foreground: "#fff1f2", // Rose 50 (ขาวอมชมพู)
    accent: "#e11d48", // Rose 600
    gradient: "from-[#e11d48]/20 via-transparent to-transparent",
  },

  clientTrust: "โครงสร้างเว็บไซต์ที่พิสูจน์แล้วว่าลด Cost-per-Purchase ได้จริง",

  benefits: [
    "Anti-Ban Structure: โครงสร้าง Code สะอาด (Clean Semantic) เป็นมิตรกับ Bot ของ Facebook/TikTok ลดโอกาสโดนปิดกั้น",
    "Neuromarketing Layout: วาง Flow การขายแบบสะกดจิต (Hook-Story-Offer) ไล่ระดับอารมณ์ให้ลูกค้า 'ต้องซื้อ' ก่อนกดออก",
    "Server-Side Tracking (CAPI): ติดตั้งระบบส่งค่า Conversion ผ่าน Server แก้ปัญหา iOS 14+ ปิดกั้นข้อมูล",
  ],

  coreFeatures: [
    {
      title: "Speed-First Architecture",
      description: "ทำคะแนน Google PageSpeed 95-100/100 เพื่อให้ลูกค้าไม่กดหนีระหว่างโหลด",
      icon: "Zap",
    },
    {
      title: "Sticky CTA & FOMO",
      description:
        "ปุ่มสั่งซื้อตามติดหน้าจอ (Sticky Footer) และระบบนับถอยหลัง (Countdown) กระตุ้นความกลัวที่จะพลาด",
      icon: "MousePointerClick",
    },
    {
      title: "Cross-Platform Ready",
      description:
        "แสดงผล Perfect Pixel ทั้งบน TikTok Browser, Line OA และ Facebook In-App Browser",
      icon: "Smartphone",
    },
  ],

  faqs: [
    {
      question: "Sale Page นี้ต่างจากสำเร็จรูปรายเดือนยังไง?",
      answer:
        "แบบรายเดือนคุณ 'เช่า' เขาใช้ ปรับแต่ง Code ลึกๆ ไม่ได้ แต่ของผมคือการสร้างบน Next.js ที่เป็นสินทรัพย์ของคุณ 100% เร็วกว่า ปรับแต่งได้อิสระ และเป็นเจ้าของตลอดชีพ",
    },
    {
      question: "ช่วยติดตั้ง Pixel และ Conversion API ให้ไหม?",
      answer:
        "ทำให้ครบจบเลยครับ! Setup Event มาตรฐาน (ViewContent, AddToCart, Purchase) ให้แม่นยำที่สุด เพื่อให้คุณไปยิงแอดต่อได้ทันที",
    },
  ],

  keywords: [
    "รับทำ Sale Page ยิงแอด",
    "ทำ Landing Page สายเทา/สายขาว",
    "Sale Page WordPress vs Next.js",
    "รับทำเว็บหน้าเดียว TikTok",
    "Conversion API Facebook Setup",
  ],

  priority: 1,
  isPopular: true,
  isFeatured: true,
};
