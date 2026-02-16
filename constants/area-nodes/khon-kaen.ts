/**
 * [SERVICE_NODE]: KHON_KAEN_CONVERSION_HUB v18.0.1 (ACCESSIBILITY_PATCHED)
 * [STRATEGY]: Localized Conversion | Clinic & SME Expert | Hex Standard
 */
import type { AreaNode } from "@/types";

export const khonKaenNode: AreaNode = {
  slug: "khon-kaen",
  province: "ขอนแก่น",
  templateSlug: "salepage",
  title: "รับทำเว็บไซต์ ขอนแก่น | Sale Page คลินิกและ SME ปิดการขายไว ทักแชทแตก",
  description:
    "บริการรับทำ Sale Page ในขอนแก่น เน้นดีไซน์ที่ 'คนอีสานยุคใหม่' ชอบ โหลดไวบนมือถือ รองรับยิงแอด TikTok/FB",
  longDescription:
    "ขอนแก่นคือ Smart City เราเชี่ยวชาญการทำ Sale Page ที่ออกแบบมาเพื่อปิดการขายโดยเฉพาะ",
  seoTitle: "รับทำเว็บไซต์ ขอนแก่น Sale Page ปิดการขาย ติดหน้าแรก Google - เอ็มซ่ามากส์",
  seoDescription:
    "รับทำเว็บไซต์ขอนแก่น ออกแบบ Sale Page สำหรับคลินิกความงามและร้านค้า นัดคุยงานในเมืองขอนแก่นได้",
  heroImage: "/images/areas/khon-kaen-node.webp",
  theme: {
    mode: "light",
    primary: "#4f46e5",
    secondary: "#4338ca",
    background: "#ffffff",
    foreground: "#1e1b4b",
    accent: "#818cf8",
    gradient: "from-[#4f46e5]/10 via-transparent to-transparent",
  },
  price: "8,900",
  priceValue: 8900,
  currency: "THB",
  unit: "เริ่มต้น / โปรเจกต์",
  clientTrust: "Trusted by Local: เบื้องหลังความสำเร็จของ 15+ คลินิกและร้านดังในขอนแก่น",
  benefits: [
    "เข้าใจจริตคนขอนแก่น: ออกแบบ UX/UI ให้เข้ากับพฤติกรรมคนในพื้นที่",
    "นัดคุยงานได้จริง: ผมอยู่ในพื้นที่พร้อมนัดประชุมวางแผนกลยุทธ์ย่านกังสดาลหรือในเมือง",
    "ระบบหลังบ้านแน่นปึ้ก: ติดตั้ง Conversion API ให้ครบ",
  ],
  coreFeatures: [
    {
      title: "KKC Speed Architecture",
      description: "ปรับจูนเซิร์ฟเวอร์ให้โหลดแรงสุดๆ รองรับการใช้งานผ่าน 5G/WiFi",
      icon: "Zap",
    },
    {
      title: "Line OA & Map Integration",
      description: "ปุ่ม 'แอดไลน์' และ 'นำทาง' แบบ Sticky ที่กดง่าย",
      icon: "MapPin",
    },
    {
      title: "Clean Design for Clinics",
      description: "เทมเพลตคลีนๆ ที่ออกแบบมาเพื่อคลินิกความงามโดยเฉพาะ",
      icon: "Sparkles",
    },
  ],
  faqs: [
    {
      question: "ออฟฟิศอยู่ที่ไหน นัดเจอได้ไหม?",
      answer: "ผมเบสอยู่ในตัวเมืองขอนแก่นครับ สามารถนัดคุยงานได้ย่านกังสดาลครับ",
    },
    { question: "ใช้เวลาทำนานไหม?", answer: "โดยปกติใช้เวลา 5-7 วันครับ" },
  ],
  localContext: {
    marketInsight: "คนขอนแก่นตัดสินใจซื้อเร็วถ้าเห็นรีวิวชัดเจนและช่องทางติดต่อสะดวก",
    technicalApproach: "เน้น Speed และ Mobile Experience เป็นหลัก",
    localStrength: "เข้าใจภาษาถิ่นและวัฒนธรรม ช่วยเขียน Copywriting ที่เข้าถึงใจลูกค้า",
    nicheIndustries: ["คลินิกความงาม", "ร้านอาหารและคาเฟ่", "อสังหาริมทรัพย์"],
    painPoints: ["ยิงแอดไปแล้วลูกค้าไม่ทัก เพราะเว็บโหลดช้า", "เว็บไม่สวย ดูไม่น่าเชื่อถือ"],
    competitorLevel: "high",
    socialProof: { rating: 4.9, reviewCount: 96, localClient: "คลินิกความงาม ย่านกังสดาล" },
    regionalPricing: { startPrice: "8,900 บาท", timeline: "5-7 วัน" },
    localSuccessStory: {
      title: "Case Study: คลินิกดังหลังมอ",
      result: "ยอดจองคิวเพิ่มขึ้น 300% ภายใน 1 เดือน",
    },
    hyperLocalKeywords: ["รับทำ Sale Page ขอนแก่น", "จ้างทำเว็บ กังสดาล"],
  },
  priority: 95,
  districts: ["เมืองขอนแก่น", "กังสดาล", "หลังมอ (มข.)", "บ้านไผ่"],
  keywords: ["รับทำเว็บไซต์ ขอนแก่น", "ออกแบบ Sale Page ขอนแก่น"],
  coordinates: { lat: 16.4322, lng: 102.8236 },
};
