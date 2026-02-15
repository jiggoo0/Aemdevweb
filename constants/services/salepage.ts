/**
 * [SERVICE_NODE]: SALE_PAGE_CONVERSION_KING v18.0.1 (LINE_API_UPDATED)
 * [STRATEGY]: High Contrast | Dark Aggressive | Hex Standard
 * [MAINTAINER]: AEMZA MACKS
 */

import type { TemplateMasterData } from "@/types";

export const salePageService: TemplateMasterData = {
  id: "AEM-SVC-SP-01",
  title: "High-Conversion Sale Page | ปิดการขายไว ยิงแอดแม่น ไม่โดนปิดกั้น",
  description:
    "หยุดตำน้ำพริกละลายแม่น้ำกับค่าแอดที่แพงหูฉี่ เปลี่ยนงบโฆษณาให้เป็นยอดโอนด้วย Sale Page โครงสร้างคลีนที่โหลดไวระดับปีศาจ รองรับ Conversion API 100% ช่วยให้ AI ของ Facebook และ TikTok นำส่งแม่นยำขึ้น และเปลี่ยนคนดูขาจรให้กลายเป็นลูกค้าทันที",
  image: "/images/service/salepage-node.webp",
  templateSlug: "salepage",
  category: "landing",
  price: "3,500",
  priceValue: 3500,
  currency: "THB",
  unit: "เริ่มต้น / หน้า",

  // [THEME_FIX]: ใช้ Hex Code ล้วน (Rose/Crimson Theme) สื่อถึงความเร่งด่วนและพลังงาน
  theme: {
    mode: "dark",
    primary: "#fb7185", // Rose 400
    secondary: "#9f1239", // Rose 900
    background: "#270308", // Dark Crimson
    foreground: "#fff1f2", // Rose 50
    accent: "#e11d48", // Rose 600
    gradient: "from-[#e11d48]/20 via-transparent to-transparent",
  },

  // [TRUST_SIGNAL]: เน้นเรื่องความคุ้มค่าของค่าแอด (ROAS)
  clientTrust:
    "Performance Proven: พิสูจน์แล้วว่าช่วยลดต้นทุนต่อการซื้อ (Cost-per-Purchase) ได้จริงกว่า 40%",

  // [BENEFITS]: เน้นแก้ Pain Point เรื่องแอดแพงและการโดนปิดกั้น
  benefits: [
    "เลิกเสี่ยงโดนปิดกั้น: เราเขียนโค้ดด้วยโครงสร้าง Clean Semantic ที่ Bot ของ Facebook และ TikTok รัก ช่วยลดโอกาสที่ AI จะเข้าใจผิดว่าเป็นเว็บสแปมหรือสายเทา",
    "สะกดจิตให้กดโอน: วางเลย์เอาต์ตามหลักจิตวิทยา Neuromarketing ไล่ระดับอารมณ์จาก 'สงสัย' เป็น 'อยากได้' และจบที่ 'กลัวพลาด' จนต้องกดสั่งซื้อทันที",
    "ป้อนข้อมูลให้ AI ฉลาดขึ้น: ไม่ใช่แค่ติด Pixel ธรรมดา แต่เราวางระบบ Server-Side API (CAPI) ส่งค่ากลับไปบอก Facebook ว่าใครคือลูกค้าตัวจริง ช่วยให้แอดวิ่งหาคนแม่นขึ้นเรื่อยๆ",
  ],

  // [CORE_FEATURES]: ฟีเจอร์ที่เน้นความเร็วและการกระตุ้น
  coreFeatures: [
    {
      title: "Speed-First Architecture",
      description:
        "ทำคะแนน Google PageSpeed 95-100 เพื่อให้เว็บโหลดเสร็จก่อนที่ลูกค้าจะเปลี่ยนใจกดออก (ทุก 1 วินาทีที่ช้า คือเงินที่หายไป)",
      icon: "Zap",
    },
    {
      title: "Sticky CTA & FOMO Engine",
      description:
        "ปุ่มสั่งซื้อที่ตามติดหน้าจอตลอดเวลา พร้อมระบบนับถอยหลังและแจ้งเตือนการซื้อล่าสุด เพื่อกระตุ้นความกลัวที่จะพลาดของมีจำนวนจำกัด",
      icon: "MousePointerClick",
    },
    {
      title: "Cross-Platform Perfect",
      description:
        "แสดงผลสวยคมกริบทุกพิกเซล ไม่ว่าจะเปิดผ่าน TikTok Browser, Line OA หรือ Facebook In-App Browser ไม่มีการแสดงผลเพี้ยนให้เสียอารมณ์",
      icon: "Smartphone",
    },
  ],

  // [FAQ_ENGINE]: 7 ข้อโต้แย้งหลักสำหรับคนยิงแอด (Platform, Price, Tech)
  faqs: [
    {
      question: "Sale Page นี้ต่างจากเว็บสำเร็จรูปรายเดือนยังไง?",
      answer:
        "แบบรายเดือนคุณคือ 'คนเช่า' ครับ ปรับแต่งโค้ดลึกๆ ไม่ได้ และถ้าหยุดจ่ายเว็บก็ปลิว แต่ของผมคือการสร้างบน Next.js ที่เป็น 'สินทรัพย์' ของคุณ 100% เร็วกว่า ปรับแต่งได้อิสระ ไม่ต้องจ่ายรายเดือน และเป็นเจ้าของตลอดชีพครับ",
    },
    {
      question: "ช่วยติดตั้ง Pixel และ Conversion API ให้ไหม?",
      answer:
        "ทำให้ครบจบเลยครับ! นี่คือหัวใจสำคัญ ผมจะ Setup Event มาตรฐาน (ViewContent, AddToCart, Purchase) ให้แม่นยำที่สุด และทดสอบให้ดูว่าค่าส่งกลับไปที่ตัวจัดการโฆษณาจริง เพื่อให้คุณไปยิงแอดต่อได้ทันทีโดยไม่ต้องปวดหัว",
    },
    {
      question: "แก้ไขข้อมูลเองภายหลังได้ไหม?",
      answer:
        "ได้ครับ สำหรับการแก้ไขพื้นฐาน (รูปภาพ/ข้อความ) ผมสามารถเชื่อมต่อระบบหลังบ้านให้ได้ แต่โดยปกติ Sale Page แบบ High-Performance มักจะนิ่งหลังจากการเทสต์ ผมแนะนำให้แก้ไขผ่านผมเพื่อรักษาโครงสร้างความเร็วและความสวยงามจะดีที่สุดครับ",
    },
    {
      question: "ต้องเตรียมอะไรบ้างก่อนเริ่มงาน?",
      answer:
        "เตรียมแค่ 3 อย่างครับ: 1. รูปภาพสินค้าและรีวิว 2. รายละเอียดโปรโมชั่น/ราคา 3. บัญชี Facebook Pixel/TikTok Pixel ID ที่เหลือผมจัดการร้อยเรียงเรื่องราวและวางโครงสร้างให้ทั้งหมดครับ",
    },
    {
      question: "รองรับการเก็บเงินปลายทาง (COD) ไหม?",
      answer:
        "รองรับแน่นอนครับ ฟอร์มสั่งซื้อของเราออกแบบมาให้กรอกง่ายที่สุดเพื่อลดการกดออก เลือกได้ทั้งโอนเงินหรือปลายทาง ข้อมูลจะถูกบันทึกลง Google Sheets และแจ้งเตือนเข้า LINE OA (Messaging API) ของคุณแบบ Real-time ทันทีครับ (เราใช้ระบบ API มาตรฐานใหม่ ทดแทน LINE Notify ที่ปิดตัวลง หมดกังวลเรื่องการแจ้งเตือนไม่เด้งครับ)",
    },
    {
      question: "ใช้เวลากี่วันเสร็จ รีบใช้ยิงแอด?",
      answer:
        "เข้าใจคนยิงแอดครับว่าเวลามีค่า ปกติใช้เวลา 2-3 วันหลังจากได้ข้อมูลครบ แต่ถ้ารีบมากๆ สามารถแจ้งได้ครับ ผมมีแพ็กเกจ Express เร่งด่วน 24 ชั่วโมงสำหรับคนใจร้อนอยากเทสต์แอดไวๆ",
    },
    {
      question: "สายเทาทำได้ไหม?",
      answer:
        "โดยพื้นฐานผมรับสายขาวเป็นหลักครับ แต่ถ้าสินค้ามีความสุ่มเสี่ยง (เช่น อาหารเสริมบางชนิด) ผมสามารถช่วยปรับคำและโครงสร้างให้ดูน่าเชื่อถือและปลอดภัยต่อ AI ตรวจจับได้ แต่ไม่รับประกันเรื่องการโดนแบนบัญชีโฆษณานะครับ เพราะปัจจัยหลักอยู่ที่ตัวบัญชีและคอนเทนต์โฆษณาด้วยครับ",
    },
  ],

  // [KEYWORD_INJECTION]: คีย์เวิร์ดสำหรับสายยิงแอดและพ่อค้าแม่ค้าออนไลน์
  keywords: [
    "รับทำ Sale Page ยิงแอด",
    "ทำ Landing Page TikTok",
    "Sale Page สายขาว",
    "รับทำเว็บหน้าเดียว ราคาถูก",
    "Conversion API Facebook Setup",
    "จ้างทำ Sale Page Next.js",
    "Sale Page โหลดเร็ว",
  ],

  priority: 1,
  isPopular: true,
  isFeatured: true,
};
