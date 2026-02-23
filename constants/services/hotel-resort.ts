/**
 * [SERVICE_NODE]: LUXURY_HOSPITALITY_ENGINE v18.0.1 (HUMAN_OPTIMIZED)
 * [STRATEGY]: Direct Booking Focus | High-End Imagery | Zero-Emoji | Lanna Gold Theme
 * [MAINTAINER]: AEMZA MACKS
 */

import type { TemplateMasterData } from "@/types";

export const hotelResortService: TemplateMasterData = {
  id: "AEM-SVC-HR-08",
  title: "Luxury Hotel & Resort Website | เปลี่ยนยอดวิวเป็นยอดจองตรง",
  description:
    "หยุดจ่ายค่าคอมมิชชั่น OTA โดยไม่จำเป็น สร้างอาณาจักรดิจิทัลของคุณเองด้วยเว็บไซต์โรงแรมระดับ High-End ที่ถ่ายทอดประสบการณ์การพักผ่อนเหนือระดับ และเปลี่ยนผู้ชมให้กลายเป็นแขกที่กดจองตรงกับคุณทันที",
  image: "/images/services/hotel-resort-node.webp",
  templateSlug: "hotelresort",
  category: "business",

  // [PRICING_MASTER]: ราคากลางสำหรับบริการโรงแรม (พื้นที่อื่นจะดึงค่านี้ไปใช้)
  price: "16,900",
  priceValue: 16900,
  currency: "THB",
  unit: "เริ่มต้น / โปรเจกต์",

  // [THEME_STANDARD]: ธีม Lanna Luxury (Gold/Dark Stone)
  // สื่อถึงความหรูหรา วัฒนธรรม และความเงียบสงบ
  theme: {
    mode: "dark", // เน้น Dark Mode เพื่อขับให้รูปห้องพักดูเด่น
    primary: "#c5a358", // Chiang Mai Gold: สีทองคำเปลว (ด้าน) ดูแพงไม่ลิเก
    secondary: "#453a1f", // Dark Gold Brown: สีน้ำตาลไหม้ทอง
    background: "#1c1917", // Stone 900: สีถ่านหิน (Warm Black) ดูอบอุ่นกว่าดำสนิท
    foreground: "#fafaf9", // Stone 50: สีขาวครีม อ่านสบายตา
    accent: "#eab308", // Yellow 500: สีทองสว่างสำหรับปุ่มจอง (Call to Action)
    gradient: "from-[#c5a358]/10 via-transparent to-transparent", // Gradient บางๆ สร้างมิติ
  },

  // [TRUST_SIGNAL]
  clientTrust:
    "Luxury Standard: ยกระดับภาพลักษณ์ที่พักให้ดูแพงสมราคา สร้างความมั่นใจให้นักท่องเที่ยวทั่วโลก",

  benefits: [
    "Maximize Profit: ลดการพึ่งพา OTA และประหยัดค่าคอมมิชชั่น 15-20% ด้วยระบบจองตรง",
    "Visual Storytelling: ดีไซน์ที่ให้รูปภาพและวิดีโอทำงานหนักเพื่อขายประสบการณ์การพักผ่อน",
    "Data Ownership: เก็บฐานข้อมูลลูกค้า (Email/Tel) เพื่อทำ CRM และส่งโปรโมชั่นได้เองในอนาคต",
  ],

  coreFeatures: [
    {
      title: "Immersive Gallery",
      description: "ระบบแกลเลอรี่ห้องพักความละเอียดสูงที่โหลดไว เพื่อสร้างความประทับใจแรกพบ",
      icon: "Camera",
    },
    {
      title: "Direct Booking",
      description: "ปุ่มจองที่เด่นชัดและเชื่อมต่อระบบเช็คห้องว่างแบบ Real-time",
      icon: "CalendarCheck",
    },
    {
      title: "Multi-Language SEO",
      description: "โครงสร้างรองรับภาษาอังกฤษ/จีน/รัสเซีย เพื่อดักจับนักท่องเที่ยวทั่วโลก",
      icon: "Globe",
    },
  ],

  faqs: [
    {
      question: "ทำไมต้องมีเว็บ ในเมื่อมี Agoda แล้ว?",
      answer:
        "OTA คือช่องทางหารู้จัก แต่เว็บไซต์คือช่องทางทำกำไรครับ ลูกค้าจำนวนมากชอบมาเช็คราคาจองตรงที่หน้าเว็บ ถ้าคุณไม่มีเว็บรองรับ คุณกำลังทิ้งกำไรก้อนโต",
    },
    {
      question: "เชื่อมต่อ Channel Manager ได้ไหม?",
      answer:
        "ได้ครับ รองรับการเชื่อมต่อกับระบบชั้นนำเช่น SiteMinder หรือ Cloudbeds เพื่อให้สต็อกห้องพักตัดตรงกัน",
    },
    {
      question: "ไม่มีรูปสวยๆ ทีมงานช่วยถ่ายให้ไหม?",
      answer: "มีพาร์ทเนอร์ช่างภาพสายโรงแรมมืออาชีพแนะนำครับ รูปภาพคือหัวใจสำคัญของการขายห้องพัก",
    },
    {
      question: "รองรับหลายภาษาไหม?",
      answer:
        "ทำได้ครับ โครงสร้างรองรับ Multi-language เต็มรูปแบบเพื่อเจาะกลุ่มนักท่องเที่ยวเฉพาะชาติ",
    },
    {
      question: "อัปเดตราคาเองยากไหม?",
      answer:
        "ง่ายครับ เรามีระบบหลังบ้านให้ฝ่าย Reservation ปรับราคาหรือเปลี่ยนแบนเนอร์โปรโมชั่นได้เองทันที",
    },
    {
      question: "รองรับการตัดบัตรเครดิตไหม?",
      answer:
        "รองรับครับ เชื่อมต่อ Payment Gateway (เช่น Stripe, 2C2P) ให้ลูกค้าต่างชาติรูดจองได้เลย",
    },
    {
      question: "คุ้มค่าการลงทุนไหม?",
      answer:
        "แค่ลูกค้าจองตรงไม่กี่คืนก็คืนทุนค่าทำเว็บแล้วครับ ที่เหลือคือกำไรระยะยาวจากการไม่ต้องเสียค่าคอม OTA",
    },
  ],

  keywords: [
    "รับทำเว็บไซต์โรงแรม",
    "ออกแบบเว็บไซต์รีสอร์ตหรู",
    "ทำเว็บวิลล่า พูลวิลล่า",
    "ระบบจองที่พักออนไลน์",
    "Hotel Website Design",
  ],

  priority: 6,
  isFeatured: true,
};
