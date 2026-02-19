/**
 * [SERVICE_NODE]: KHON_KAEN_CONVERSION_HUB v18.0.2 (DYNAMIC_LINKED)
 * [STRATEGY]: Localized Conversion | Clinic & SME Expert | Dynamic Inheritance
 * [MARKET]: Khon Kaen Smart City & University Zone
 */

import type { AreaNode } from "@/types";
// [IMPORT]: นำเข้า Template หลักเพื่อดึงค่ากลาง
import { salePageService } from "@/constants/services/salepage";

export const khonKaenNode: AreaNode = {
  // --- Basic Identity ---
  slug: "khon-kaen",
  province: "ขอนแก่น",
  templateSlug: "salepage", // เชื่อมโยง Logic การ Render

  title: "รับทำเว็บไซต์ ขอนแก่น | Sale Page คลินิกและ SME ปิดการขายไว ทักแชทแตก",
  description:
    "บริการรับทำ Sale Page ในขอนแก่น เน้นดีไซน์ที่ 'คนอีสานยุคใหม่' ชอบ โหลดไวบนมือถือ รองรับยิงแอด TikTok/FB พร้อมระบบหลังบ้านที่ใช้งานง่าย",

  longDescription:
    "ขอนแก่นคือ Smart City ที่มีการแข่งขันสูง โดยเฉพาะธุรกิจคลินิกความงามและร้านอาหาร " +
    "เราเชี่ยวชาญการทำ Sale Page ที่ออกแบบ UX/UI มาเพื่อคนขอนแก่นโดยเฉพาะ เน้นความจริงใจ ข้อมูลชัด และปุ่มติดต่อที่กดง่าย " +
    "ช่วยเปลี่ยนคนดูให้กลายเป็นลูกค้าทักแชท หรือกดแผนที่มาร้านทันที",

  // --- SEO Metadata ---
  seoTitle: "รับทำเว็บไซต์ ขอนแก่น Sale Page ปิดการขาย ติดหน้าแรก Google - เอ็มซ่ามากส์",
  seoDescription:
    "รับทำเว็บไซต์ขอนแก่น ออกแบบ Sale Page สำหรับคลินิกความงามและร้านค้า นัดคุยงานในเมืองขอนแก่นได้ รองรับ Conversion API",

  // --- [DYNAMIC_INHERITANCE]: Theme & Pricing ---
  // รับค่าโดยตรงจาก salePageService เพื่อความเป็นมาตรฐานเดียวกัน
  theme: salePageService.theme,
  price: salePageService.price,
  priceValue: salePageService.priceValue,
  currency: salePageService.currency,
  unit: salePageService.unit,

  // --- Visual (Local Specific) ---
  heroImage: "/images/areas/khon-kaen-node.webp",

  // --- Trust Signals ---
  clientTrust: "Trusted by Local: เบื้องหลังความสำเร็จของ 15+ คลินิกและร้านดังย่านกังสดาลและหลังมอ",

  // --- Localized Benefits ---
  benefits: [
    "Local Behavior UX: ออกแบบโดยเข้าใจพฤติกรรมคนขอนแก่น เน้นความเร็วและข้อมูลที่ 'เนื้อๆ เน้นๆ' ไม่เยิ่นเย้อ",
    "On-Site Meeting: ผมเบสอยู่ในตัวเมืองขอนแก่น สามารถนัดประชุมวางแผนกลยุทธ์ได้จริง (โซนกังสดาล/มข.)",
    "Full-Stack Conversion: ติดตั้งระบบวัดผล (Pixel/CAPI) ให้ครบชุด พร้อมยิงแอดได้ทันที",
  ],

  // --- Core Features (Local Specific) ---
  coreFeatures: [
    {
      title: "KKC Speed Architecture",
      description: "ปรับจูน Server ให้โหลดแรงสุดๆ รองรับการใช้งานหนักๆ ช่วงพีคไทม์",
      icon: "Zap",
    },
    {
      title: "Line OA & Map Integration",
      description: "ปุ่ม 'แอดไลน์' และ 'นำทาง' แบบ Sticky ที่กดง่ายบนมือถือ",
      icon: "MapPin",
    },
    {
      title: "Clean Design for Clinics",
      description: "เทมเพลตคลีนๆ ที่ออกแบบมาเพื่อคลินิกความงามโดยเฉพาะ ดูน่าเชื่อถือ สะอาดตา",
      icon: "Sparkles",
    },
  ],

  // --- Localized FAQs ---
  faqs: [
    {
      question: "ออฟฟิศอยู่ที่ไหน นัดเจอได้ไหม?",
      answer:
        "ผมทำงานอิสระแต่เบสอยู่ในตัวเมืองขอนแก่นครับ สะดวกนัดคุยงานย่านกังสดาล หรือร้านกาแฟในเมืองได้ครับ",
    },
    {
      question: "ใช้เวลาทำนานไหม?",
      answer: "Sale Page หน้าเดียวใช้เวลาประมาณ 3-5 วันครับ ถ้าข้อมูลพร้อม เริ่มงานได้ทันที",
    },
    {
      question: "มีบริการถ่ายรูปสินค้า/คลินิกไหม?",
      answer: "ผมมีทีมช่างภาพฟรีแลนซ์ในขอนแก่นแนะนำให้ได้ครับ เพื่อให้ได้รูปที่สวยและดูโปรที่สุด",
    },
    // [MERGE]: ดึงคำถามมาตรฐานเรื่อง CAPI/Next.js จาก Template หลัก
    ...salePageService.faqs.filter(
      (f) => f.question.includes("Next.js") || f.question.includes("Conversion API"),
    ),
  ],

  // --- Context Data ---
  localContext: {
    marketInsight:
      "คนขอนแก่นตัดสินใจซื้อเร็วถ้าเห็นรีวิวชัดเจนและช่องทางติดต่อสะดวก (โดยเฉพาะ Line)",
    technicalApproach: "เน้น Mobile-First Speed เพราะคนส่วนใหญ่ไถฟีดผ่านมือถือ",
    localStrength:
      "เข้าใจภาษาถิ่นและวัฒนธรรมอีสาน ช่วยปรับคำโฆษณา (Copywriting) ให้เข้าถึงใจลูกค้า",
    nicheIndustries: [
      "คลินิกความงามและศัลยกรรม",
      "ร้านอาหารและคาเฟ่",
      "อสังหาริมทรัพย์ (หอพัก/คอนโด)",
      "ร้านขายส่งเสื้อผ้า",
    ],
    painPoints: [
      "ยิงแอดไปแล้วลูกค้าไม่ทัก",
      "เว็บเดิมโหลดช้า ลูกค้าหนี",
      "เว็บไม่สวย ดูไม่น่าเชื่อถือเทียบกับคู่แข่งในกรุงเทพ",
    ],
    competitorLevel: "high",
    socialProof: {
      rating: 4.9,
      reviewCount: 96,
      localClient: "คลินิกความงามชื่อดัง ย่านกังสดาล",
    },
    regionalPricing: {
      startPrice: `${salePageService.price} บาท`, // Dynamic Reference
      timeline: "3-5 วัน",
    },
    localSuccessStory: {
      title: "Case Study: คลินิกหลังมอ",
      result: "ปรับหน้าเว็บใหม่ ยอดจองคิวผ่านไลน์เพิ่มขึ้น 300% ภายใน 1 เดือน",
    },
    hyperLocalKeywords: [
      "รับทำ Sale Page ขอนแก่น",
      "จ้างทำเว็บ กังสดาล",
      "ทำเว็บคลินิก ขอนแก่น",
      "ยิงแอด ขอนแก่น",
    ],
  },

  // --- System Metadata ---
  priority: 95,
  districts: ["เมืองขอนแก่น", "กังสดาล", "หลังมอ (มข.)", "บ้านไผ่", "ชุมแพ"],
  keywords: [
    "รับทำเว็บไซต์ ขอนแก่น",
    "ออกแบบ Sale Page ขอนแก่น",
    "รับทำเว็บคลินิก",
    "บริษัทรับทำเว็บไซต์ ภาคอีสาน",
  ],
  coordinates: { lat: 16.4322, lng: 102.8236 },
};
