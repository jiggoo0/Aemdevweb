/**
 * [SERVICE_NODE]: LUXURY_HOSPITALITY_ENGINE v17.9.87 (THEME_HARDENED)
 * [STRATEGY]: OKLCH Dynamic Gold | P3 Color Logic | Unified Tokens
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

  // [REFACTORED_THEME]: อัปเกรดสู่ระบบ OKLCH Engine เพื่อความหรูหราขั้นสูงสุด
  theme: {
    token: "gold",
    primary: "oklch(var(--brand-primary-raw))", // Luxury Gold Authority
    secondary: "oklch(var(--brand-secondary-raw))",
    background: "bg-slate-950", // พื้นหลังเข้มจัดเพื่อขับเน้นสีทอง
    accent: "oklch(var(--brand-accent-raw))",
    gradient: "from-brand-primary/15 via-transparent to-transparent",
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
