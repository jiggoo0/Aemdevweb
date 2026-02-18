/**
 * [SERVICE_NODE]: SALE_PAGE_CONVERSION_KING v18.0.5 (STABILIZED_AGGRESSIVE)
 * [STRATEGY]: Aggressive Trust | Conversion API Mastery | Obsidian Rose Theme
 * [MAINTAINER]: AEMZA MACKS
 */

import type { TemplateMasterData } from "@/types";

export const salePageService: TemplateMasterData = {
  id: "AEM-SVC-SP-01",
  title: "Next-Gen Sale Page | สถาปัตยกรรมปิดการขายระดับปีศาจ ยอดโอนพุ่ง แอดแม่นยำ",
  description:
    "เปลี่ยนเว็บไซต์หน้าเดียวให้กลายเป็นเครื่องจักรพิมพ์เงิน ด้วยโครงสร้าง Next.js 16 ที่โหลดไวระดับมิลลิวินาที พร้อมวางระบบ Conversion API (CAPI) แบบ Deep Integration เพื่อป้อนข้อมูลลูกค้าตัวจริงให้ AI ของ Facebook และ TikTok ฉลาดขึ้น 10 เท่า",

  image: "/images/services/salepage-node.webp",
  templateSlug: "salepage",
  category: "landing",

  price: "3,500",
  priceValue: 3500,
  currency: "THB",
  unit: "เริ่มต้น / หน้า",

  /**
   * [THEME_ADAPTER]: Obsidian & Cyber Rose
   * ออกแบบมาเพื่อลด Friction ในการตัดสินใจ แต่ยังคงความตื่นเต้น (Urgency)
   */
  theme: {
    mode: "dark",
    primary: "#f43f5e",   // Rose 500 (Vibrant & Urgent)
    secondary: "#4c0519", // Rose 950 (Depth)
    background: "#0a0102", // Deep Obsidian (Pure Premium Dark)
    foreground: "#fff1f2", // Rose 50 (Readability)
    accent: "#fb7185",    // Rose 400 (Cyber Glow)
    gradient: "from-[#f43f5e]/15 via-transparent to-transparent",
  },

  clientTrust:
    "ROAS Optimizer: พิสูจน์แล้วจากผู้ใช้งานจริง ช่วยลดต้นทุนต่อผลลัพธ์ (CPA) ลงได้เฉลี่ย 42% ภายใน 14 วันหลังติดตั้งระบบ CAPI",

  benefits: [
    "Bot-Friendly Architecture: โครงสร้าง Clean Code ที่ถูกออกแบบมาเพื่อผ่านการตรวจจับของ AI Platform ช่วยให้คะแนนความเชื่อถือ (Trust Score) ของโฆษณาคุณสูงขึ้น",
    "Psychological UI Mapping: การวาง Layout ตามหลักลำดับความสำคัญของสายตา (F-Pattern) ที่บังคับให้ผู้อ่านซึมซับ Value Proposition ก่อนจะจบด้วยปุ่มโอนเงิน",
    "Smart Data Feeding: ระบบ Server-Side Tracking ที่ส่งข้อมูลพฤติกรรมลูกค้ากลับไปยังแม่ข่ายโฆษณาโดยตรง แม้ลูกค้าจะบล็อกคุกกี้หรือใช้ iOS 14+",
  ],

  coreFeatures: [
    {
      title: "Hyper-Speed Loading",
      description: "ทำคะแนน Google PageSpeed เกือบเต็ม 100% เพื่อลดอัตราการกดออก (Bounce Rate) และเพิ่มคะแนนคุณภาพโฆษณา (Quality Score)",
      icon: "Zap",
    },
    {
      title: "Unified CAPI Setup",
      description: "ติดตั้ง Facebook & TikTok Conversion API ผ่าน Server-Side เพื่อให้ AI นำส่งโฆษณาหาคนที่ 'พร้อมซื้อ' จริงๆ ไม่ใช่แค่ 'คนชอบกดไลก์'",
      icon: "Activity",
    },
    {
      title: "LINE Messaging v2",
      description: "ระบบแจ้งเตือนออเดอร์เข้า LINE OA แบบ Real-time ผ่าน Messaging API มาตรฐานใหม่ มั่นใจได้ว่าข้อมูลไม่ตกหล่นและแจ้งเตือนเด้ง 100%",
      icon: "MessageCircle",
    },
  ],

  faqs: [
    {
      question: "ทำไมต้องใช้ Next.js ทำ Sale Page แทนที่จะใช้เจ้าตลาดรายเดือน?",
      answer: "เพราะ 'ความเร็ว' และ 'ความเป็นเจ้าของ' ครับ Next.js คือเทคโนโลยีเดียวกับที่แอปชั้นนำระดับโลกใช้ ทำให้เว็บคุณโหลดเสร็จในพริบตา และที่สำคัญคือจ่ายครั้งเดียวจบ ไม่มีการเก็บค่าเช่ารายเดือนให้เป็นภาระต้นทุนธุรกิจครับ",
    },
    {
      question: "ระบบ Conversion API สำคัญยังไงกับการยิงแอด?",
      answer: "ปัจจุบันการเก็บข้อมูลผ่านเบราว์เซอร์ (Pixel) ถูกปิดกั้นเยอะมากครับ CAPI จะทำหน้าที่ส่งข้อมูลจาก 'เซิร์ฟเวอร์ถึงเซิร์ฟเวอร์' ทำให้ AI เห็นพฤติกรรมการซื้อที่แท้จริง ผลที่ได้คือแอดคุณจะ 'ฉลาด' ขึ้นและ 'แม่น' ขึ้นเรื่อยๆ ครับ",
    },
    {
      question: "การแจ้งเตือนออเดอร์ผ่าน LINE ทำงานอย่างไร?",
      answer: "เมื่อลูกค้ากดสั่งซื้อ ข้อมูลจะถูกบันทึกลง Google Sheets และส่งข้อความสรุปยอดพร้อมรายละเอียดลูกค้าเข้า LINE OA ของคุณทันทีผ่านระบบ API ใหม่ ซึ่งเสถียรกว่าระบบ Notify แบบเดิมมากครับ",
    },
    {
      question: "ถ้าไม่มี Domain และ Hosting ต้องทำอย่างไร?",
      answer: "ผมดูแลให้ครบวงจรครับ! มีบริการจดชื่อโดเมนและเช่าเซิร์ฟเวอร์ความเร็วสูง (Cloud VPS) ในราคาต้นทุน พร้อมติดตั้ง SSL (กุญแจล็อค) ให้ฟรี เพื่อความปลอดภัยระดับสูงสุดของเว็บไซต์",
    }
  ],

  keywords: [
    "รับทำ Sale Page ยิงแอด",
    "ทำ Landing Page TikTok",
    "ติดตั้ง Conversion API",
    "Sale Page Next.js",
    "ระบบแจ้งเตือนออเดอร์ LINE",
    "ทำเว็บหน้าเดียว ยิงแอด"
  ],

  priority: 1,
  isFeatured: true,
};
