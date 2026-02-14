/**
 * [SERVICE_NODE]: LUXURY_HOSPITALITY_ENGINE v17.9.130 (THEME_STABILIZED)
 * [STRATEGY]: OKLCH Hybrid Support | Hex Fallback | Unified Tokens
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { TemplateMasterData } from "@/types";

export const hotelResortService: TemplateMasterData = {
  id: "AEM-SVC-HR-08",
  title: "รับทำเว็บไซต์โรงแรม & รีสอร์ตหรู | เพิ่มยอดจองตรง ไม่ต้องแบ่งค่าคอมมิชชั่น",
  description:
    "เปลี่ยนเว็บไซต์ให้เป็นโชว์รูมห้องพักระดับ 5 ดาว ถ่ายทอดบรรยากาศให้น่าพักผ่อน พร้อมระบบที่ช่วยให้ลูกค้ากดจองตรงกับคุณได้ทันที โดย นายเอ็มซ่ามากส์",
  image: "/images/service/hotel-resort-node.webp",
  templateSlug: "hotelresort",
  category: "business",
  price: "16,900",
  priceValue: 16900,
  currency: "THB",
  unit: "เริ่มต้น",

  // [THEME_ADJUSTMENT]: ฉีดโหมดและสีพื้นหน้าเพื่อให้ระบบ Type-Check และ Render ทำงานได้สมบูรณ์
  theme: {
    mode: "dark", // [FIXED]: กำหนดโหมดมืดเพื่อให้เงาสีทอง (Gold Shadow) ดูลอยและแพง
    foreground: "#f8fafc", // [FIXED]: ใช้สีขาวนวล Slate-50 เพื่อความ Soft ในการอ่านเนื้อหา
    token: "gold",
    primary: "#D4AF37", // Gold Standard (Metallic Gold)
    secondary: "#1A1A1A", // Dark Contrast
    background: "#0a0a0a", // Deep Black (Night Mode)
    accent: "#B8860B", // Dark Goldenrod
    gradient: "from-[#D4AF37]/15 via-transparent to-transparent",
  },

  clientTrust: "ยกระดับภาพลักษณ์ที่พักสู่มาตรฐานสากล พร้อมระบบจองตรงที่ทรงพลัง",

  benefits: [
    "รับกำไรเต็มเม็ดเต็มหน่วย: เพิ่มยอดจองตรง (Direct Booking) ช่วยคุณประหยัดค่าคอมมิชชั่น OTA (Agoda/Booking) 15-20% ในทุกออเดอร์",
    "โชว์เสน่ห์ที่พักได้เต็มที่: ดีไซน์เล่าเรื่องด้วยภาพ High-Resolution ช่วยให้ลูกค้าสัมผัสบรรยากาศจริงได้ดีกว่าหน้าเว็บจองที่พักทั่วไป",
    "รองรับแขกจากทั่วโลก: วางรากฐาน Multi-language และ Global SEO เพื่อให้นักท่องเที่ยวต่างชาติค้นหาคุณเจอจากทุกที่",
  ],

  coreFeatures: [
    {
      title: "รูปสวยสะกดสายตา โหลดไวทันใจ",
      description:
        "ระบบ Image Optimization ขั้นสูง โชว์ภาพห้องพักคมชัดระดับสูงสุดโดยที่หน้าเว็บยังเปิดไวสายฟ้าแลบ",
      icon: "Camera",
    },
    {
      title: "Direct Booking Sync",
      description:
        "เชื่อมต่อกับ Booking Engine เดิมของคุณได้อย่างไร้รอยต่อ ให้ลูกค้าเช็กห้องว่างและจองได้ทันที 24 ชม.",
      icon: "CalendarCheck",
    },
    {
      title: "International SEO Hub",
      description:
        "โครงสร้าง Semantic HTML สำหรับธุรกิจโรงแรมโดยเฉพาะ ช่วยดันอันดับในคีย์เวิร์ดสายท่องเที่ยวระดับโลก",
      icon: "Globe",
    },
  ],

  faqs: [
    {
      question: "ทำไมต้องมีเว็บในเมื่อลง Agoda/Booking อยู่แล้ว?",
      answer:
        "การมีเว็บไซต์สร้าง 'ความน่าเชื่อถือ' และกำไร 100% โดยไม่โดนหักค่าคอมมิชชั่นครับ แถมยังใช้เล่าเรื่องราวแบรนด์ได้ดีกว่ามาก",
    },
    {
      question: "รองรับการเชื่อมต่อระบบจอง (Channel Manager) ไหม?",
      answer:
        "รองรับแน่นอนครับ เราออกแบบมาให้ทำงานร่วมกับระบบจองชั้นนำได้ทุกค่าย เพื่อให้สต็อกห้องพักของคุณตรงกันเสมอ",
    },
  ],

  keywords: [
    "รับทำเว็บไซต์โรงแรม",
    "ออกแบบเว็บไซต์รีสอร์ต",
    "ทำเว็บวิลล่าหรู",
    "ระบบจองที่พักออนไลน์",
    "จ้างทำเว็บไซต์โรงแรม ราคา",
    "Hotel Website Design Thailand",
  ],

  priority: 6,
  isFeatured: true,
};
