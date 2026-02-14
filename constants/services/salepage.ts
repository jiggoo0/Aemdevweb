/**
 * [SERVICE_NODE]: SALE_PAGE_CONVERSION_KING v17.9.87 (READABILITY_FIX)
 * [STRATEGY]: High Contrast | Dark Aggressive | White Text Friendly
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

  // [THEME_FIX]: ปรับเป็น Dark Mode (แดง-ดำ) เพื่อให้ Text สีขาวอ่านง่ายที่สุด
  theme: {
    primary: "#fb7185", // Rose 400: แดงสว่าง (Light Red) ให้ตัดกับพื้นหลังเข้ม
    secondary: "#f43f5e", // Rose 500: แดงมาตรฐาน
    background: "bg-[#270308]", // Dark Crimson: พื้นหลังสีแดงเลือดหมูเกือบดำ (อ่าน Text ขาวสบายตา)
    accent: "#e11d48", // Rose 600: สีแดงเข้มสำหรับปุ่มหรือกรอบ
    gradient: "from-rose-900/50 via-[#270308] to-[#270308]", // ไล่เฉดให้ดูมีมิติ
  },

  // [TRUST_SIGNALS]: เน้นเรื่อง "ผลลัพธ์ทางตัวเลข" (ROI)
  clientTrust: "โครงสร้างเว็บไซต์ที่พิสูจน์แล้วว่าลด Cost-per-Purchase ได้จริง",

  benefits: [
    "Anti-Ban Structure: โครงสร้าง Code สะอาด (Clean Semantic) เป็นมิตรกับ Bot ของ Facebook/TikTok ลดโอกาสโดนปิดกั้นการมองเห็น",
    "Neuromarketing Layout: วาง Flow การขายแบบสะกดจิต (Hook-Story-Offer) ไล่ระดับอารมณ์ให้ลูกค้า 'ต้องซื้อ' ก่อนกดออก",
    "Server-Side Tracking (CAPI): ติดตั้งระบบส่งค่า Conversion ผ่าน Server (ไม่ใช่แค่ Browser Pixel) แก้ปัญหา iOS 14+ ปิดกั้นข้อมูล",
  ],

  coreFeatures: [
    {
      title: "Speed-First Architecture",
      description:
        "ทำคะแนน Google PageSpeed 95-100/100 เพื่อให้ลูกค้าไม่กดหนีระหว่างโหลด (ทุก 1 วินาทีที่ช้า ยอดขายหายไป 20%)",
      icon: "Zap",
    },
    {
      title: "Sticky CTA & FOMO",
      description:
        "ปุ่มสั่งซื้อตามติดหน้าจอ (Sticky Footer) และระบบนับถอยหลัง (Countdown) กระตุ้นความกลัวที่จะพลาดของดี",
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
        "แบบรายเดือนคุณ 'เช่า' เขาใช้ ปรับแต่ง Code ลึกๆ ไม่ได้ และถ้า Server กลางล่ม ธุรกิจคุณก็หยุดชะงักครับ แต่ของผมคือการสร้างบน Next.js ที่เป็นสินทรัพย์ของคุณ 100% เร็วกว่า ปรับแต่งได้อิสระ และเป็นเจ้าของตลอดชีพ",
    },
    {
      question: "ช่วยติดตั้ง Pixel และ Conversion API ให้ไหม?",
      answer:
        "ทำให้ครบจบเลยครับ! ผมจะ Setup Event มาตรฐาน (ViewContent, AddToCart, Purchase) ให้แม่นยำที่สุด เพื่อให้คุณไปยิงแอดต่อได้ทันทีโดยไม่ต้องจ้างโปรแกรมเมอร์เพิ่ม",
    },
  ],

  keywords: [
    "รับทำ Sale Page ยิงแอด",
    "ทำ Landing Page สายเทา/สายขาว",
    "Sale Page WordPress vs Next.js",
    "รับทำเว็บหน้าเดียว TikTok",
    "Conversion API Facebook Setup",
    "ออกแบบเซลเพจปิดการขาย",
  ],

  priority: 1,
  isPopular: true,
  isFeatured: true,
};
