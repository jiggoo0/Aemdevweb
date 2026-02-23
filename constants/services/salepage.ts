/**
 * [SERVICE_NODE]: SALE_PAGE_CONVERSION_ENGINE v18.0.2 (ROAS_MAXIMIZED)
 * [STRATEGY]: Aggressive Conversion | Data-Driven Layout | Neon Rose Engine
 * [MAINTAINER]: AEMZA MACKS
 */

import type { TemplateMasterData } from "@/types";

export const salePageService: TemplateMasterData = {
  id: "AEM-SVC-SP-01",
  title: "Conversion Engine v18 | หน้าปิดการขายอัจฉริยะ (Fixed-Structure)",
  description:
    "เปลี่ยนการยิงแอดแบบสุ่ม เป็นการยิงแอดแบบแม่นยำด้วยโครงสร้าง Next.js ที่ทำความเร็วระดับ 0.5s (LCP) พร้อมระบบข้ามขีดจำกัด iOS 14+ ด้วย Server-Side CAPI ที่ส่ง Data ลูกค้าตัวจริงกลับไปเทรน AI ให้ฉลาดขึ้น 10 เท่า ระบบถูกล็อค Layout มาตรฐานที่ทำ Conversion ได้ดีที่สุด",

  image: "/images/services/salepage-node.webp",
  templateSlug: "salepage",
  category: "landing",

  // [PRICING_MASTER]: ราคานี้สำหรับระบบ Standard Framework (ความซับซ้อนต่ำ ประสิทธิภาพสูง)
  price: "3,500",
  priceValue: 3500,
  currency: "THB",
  unit: "เริ่มต้น / หน้า (Fixed-Layout)",

  theme: {
    mode: "dark", 
    primary: "#f43f5e", 
    secondary: "#881337", 
    background: "#0f0505", 
    foreground: "#fff1f2", 
    accent: "#fb7185", 
    gradient: "from-[#f43f5e]/20 via-transparent to-transparent", 
  },

  clientTrust:
    "Data-Driven Results: ช่วยธุรกิจกู้คืนข้อมูลการซื้อที่หายไปจาก Browser ได้ถึง 30-40% ด้วยระบบ CAPI",

  benefits: [
    "Instant Load Supremacy: โหลดเสร็จใน 0.5 วินาที ลดอัตรา Bounce Rate (ลูกค้ารอนานแล้วกดออก) ได้เกือบ 100% ซึ่งมีผลโดยตรงต่อคะแนนความเกี่ยวข้องของโฆษณา (Ad Relevance)",
    "Deduplication Strategy: ระบบส่ง Event ID ชุดเดียวกันจากทั้ง Browser และ Server เพื่อป้องกันการนับยอดซ้ำ (Event Overlap) ทำให้ AI โฆษณาได้ข้อมูลที่สะอาดที่สุดไปเรียนรู้",
    "Scientific Visual Hierarchy: การจัดวางตำแหน่งพาดหัว รูปภาพ และปุ่ม CTA ถูกล็อคไว้ในจุดที่กระตุ้นการตัดสินใจ (Impulse Buying) ตามหลักจิตวิทยาผู้บริโภคปี 2026",
  ],

  coreFeatures: [
    {
      title: "Secure CAPI Bridge",
      description: "ระบบเข้ารหัสข้อมูลลูกค้าแบบ SHA-256 ก่อนส่งตรงเข้า Server Facebook/TikTok โดยไม่ผ่าน Cookie (iOS 14+ Compatible)",
      icon: "Activity",
    },
    {
      title: "Real-time Line Signal",
      description: "แจ้งเตือนออเดอร์พร้อมข้อมูลวิเคราะห์เบื้องต้นเข้า LINE ทันที เพื่อการปิดการขายแบบ Zero-latency",
      icon: "MessageCircle",
    },
    {
      title: "Sticky Action Bar",
      description: "แถบปุ่มกดแบบ Always-on ที่คัดกรองมาแล้วว่าช่วยเพิ่ม CTR (Click-through Rate) ได้มากกว่าปกติ 2 เท่า",
      icon: "MousePointerClick",
    },
  ],

  faqs: [
    {
      question: "ทำไมถึงปรับเปลี่ยน Layout หลักไม่ได้?",
      answer:
        "เพราะนี่คือระบบที่ผ่านการทดสอบ (Split-Testing) มาแล้วว่าสร้าง Conversion ได้จริงครับ การขยับตำแหน่งที่ผิดหลักการอาจทำให้คะแนน Quality Score ของโฆษณาลดลงและค่าแอดแพงขึ้น เราจึงล็อคโครงสร้างที่ดีที่สุดไว้ให้คุณครับ",
    },
    {
      question: "CAPI ต่างจากพิกเซลทั่วไปอย่างไร?",
      answer:
        "พิกเซลทั่วไปโดนบล็อกได้ง่ายจาก Browser หรือ iOS ครับ แต่ CAPI คือการยิงข้อมูลจากเซิร์ฟเวอร์เราไปเซิร์ฟเวอร์แอดโดยตรง ข้อมูลไม่หาย แอดเลยแม่นกว่าคนอื่น 40% ครับ",
    },
    {
      question: "แก้ไขเนื้อหาเองได้ไหม?",
      answer:
        "หากต้องการแก้ไขเองบ่อยครั้ง แนะนำอัปเกรดเป็นแพ็กเกจที่มี Admin Panel ครับ สำหรับราคาเริ่มต้นนี้เราจะเซ็ตอัพข้อมูลชุดแรกให้สมบูรณ์พร้อมใช้งานทันทีครับ",
    },
    {
      question: "ใช้เวลาติดตั้งนานแค่ไหน?",
      answer: "หากข้อมูลครบถ้วน ระบบจะถูก Deploy และพร้อมรับออเดอร์ภายใน 24-48 ชั่วโมงครับ",
    },
    {
      question: "มีค่าบริการรายเดือน/รายปีไหม?",
      answer: "มีเพียงค่าเช่า Cloud Server ความเร็วสูงรายปีเพื่อรักษาประสิทธิภาพการโหลดมิลลิวินาทีไว้ตลอดเวลาครับ",
    },
  ],

  keywords: [
    "Sale Page Next.js ประสิทธิภาพสูง",
    "ติดตั้ง Conversion API Facebook 2026",
    "ทำหน้าแลนดิ้งเพจ ยิงแอด TikTok",
    "Sale Page โหลดไว 0.5s",
    "ระบบกู้ Data โฆษณาหาย",
  ],

  priority: 1,
  isFeatured: true,
};
