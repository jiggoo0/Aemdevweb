/**
 * [SERVICE_NODE]: SURAT_THANI_INTEGRATED_HUB v18.0.1 (STRICT_SYNC)
 * [STRATEGY]: Integrated Hub | Smart Tourism & Agriculture | Dynamic Inheritance
 * [MARKET]: Municipalities, SAOs, and Smart Farmers in Surat Thani
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { AreaNode } from "@/types";
// [IMPORT]: นำเข้า Template หลักเพื่อดึงค่ากลาง (Local Authority Standard)
import { localAuthorityService } from "@/constants/services/local-authority";

export const suratThaniNode: AreaNode = {
  // --- Basic Identity ---
  slug: "surat-thani",
  province: "สุราษฎร์ธานี",
  templateSlug: "local-authority", // ยึดตาม Template หลักที่เน้นความน่าเชื่อถือและการบริการประชาชน

  title: "รับทำเว็บไซต์สุราษฎร์ธานี - ยกระดับท้องถิ่นสู่ Smart Tourism & Agriculture",
  description:
    "บริการออกแบบเว็บไซต์หน่วยงานราชการในสุราษฎร์ธานี รองรับปริมาณนักท่องเที่ยวหลักล้าน เชื่อมโยงเศรษฐกิจพืชเศรษฐกิจ (ยาง/ปาล์ม) และระบบจัดการสิ่งแวดล้อม",

  longDescription:
    "สุราษฎร์ธานี 'เมืองร้อยเกาะ' คือศูนย์กลางเศรษฐกิจและท่องเที่ยวที่สำคัญที่สุดของภาคใต้ตอนบน นายเอ็มซ่ามากส์ เข้าใจความหลากหลายของพื้นที่ " +
    "ตั้งแต่นครเกาะสมุยไปจนถึงพื้นที่เกษตรกรรมในพุนพินและไชยา เราจึงออกแบบเว็บไซต์ที่เน้นการบริหารจัดการข้อมูลขนาดใหญ่ " +
    "รองรับการใช้งานจากนักท่องเที่ยวทั่วโลกและประชาชนในพื้นที่ ด้วยสถาปัตยกรรม Next.js ที่โหลดไวและปลอดภัยสูงสุด เพื่อสร้างรากฐานดิจิทัลที่ยั่งยืนให้กับท้องถิ่น",

  // --- SEO Metadata ---
  seoTitle: "รับทำเว็บไซต์สุราษฎร์ธานี อบจ. เทศบาล - เอ็มซ่ามากส์ พัฒนาเว็บราชการมาตรฐาน ITA",
  seoDescription:
    "ทำเว็บไซต์ อบต. เทศบาล สุราษฎร์ธานี เกาะสมุย พะงัน ระบบ E-Service ชำระภาษีออนไลน์ และฐานข้อมูลเกษตรกร Smart Farmer มาตรฐานความปลอดภัยสูง รองรับ PDPA",

  // --- [DYNAMIC_INHERITANCE]: Theme & Pricing ---
  // บังคับใช้ค่าจาก localAuthorityService (Emerald/Civil Theme) เพื่อมาตรฐานเดียวกันทั้งระบบ
  theme: localAuthorityService.theme,
  price: localAuthorityService.price,
  priceValue: localAuthorityService.priceValue,
  currency: localAuthorityService.currency,
  unit: localAuthorityService.unit,

  // --- Visual (Local Specific) ---
  heroImage: "/images/areas/surat-ratchaprapha.webp",

  // --- Trust Signals ---
  clientTrust:
    "International Standard: รองรับมาตรฐานความปลอดภัยข้อมูล (PDPA) และเกณฑ์ ITA สำหรับเมืองท่องเที่ยวระดับสากล",

  // --- Localized Benefits ---
  benefits: [
    "High-Traffic Resilience: โครงสร้างระบบที่รองรับการเข้าใช้งานพร้อมกันจำนวนมากในช่วงฤดูกาลท่องเที่ยวโดยไม่ล่ม",
    "Smart Agriculture Sync: ระบบรายงานราคากลางพืชเศรษฐกิจ (ยาง/ปาล์ม) แบบรายวันเพื่อสนับสนุนกลุ่มเกษตรกรในพื้นที่",
    "Digital Service Integration: ระบบ E-Service ชำระภาษีและแจ้งเรื่องร้องเรียนออนไลน์ ช่วยอำนวยความสะดวกประชาชน 24 ชม.",
  ],

  // --- Core Features (Surat Thani Specific) ---
  coreFeatures: [
    {
      title: "Waste & GPS Tracking",
      description:
        "ระบบรับเรื่องร้องเรียนและแจ้งจุดเก็บขยะผ่านพิกัด GPS สำหรับพื้นที่เกาะและแหล่งท่องเที่ยวธรรมชาติ",
      icon: "Trash2",
    },
    {
      title: "Tourism Safety Gateway",
      description:
        "ศูนย์รวมข้อมูลความปลอดภัย จุดปฐมพยาบาล และเบอร์ฉุกเฉินหลายภาษาสำหรับนักท่องเที่ยวต่างชาติ",
      icon: "ShieldCheck",
    },
    {
      title: "Logistic Linkage",
      description:
        "ระบบแสดงข้อมูลเส้นทางเดินเรือ ตารางรถไฟ และเที่ยวบิน เชื่อมโยงการเดินทางฝั่งสู่เกาะแบบไร้รอยต่อ",
      icon: "Truck",
    },
  ],

  // --- Localized FAQs ---
  faqs: [
    {
      question: "ระบบจองคิวออนไลน์สามารถแยกประเภทงานบริการได้ไหม?",
      answer:
        "ได้ครับ ระบบสามารถจัดคิวแยกตามหน้างานทะเบียน งานโยธา หรือภาษี ทำให้เจ้าหน้าที่บริหารจัดการคิวได้อย่างมีประสิทธิภาพครับ",
    },
    {
      question: "เว็บไซต์รองรับภาษาอังกฤษและจีนเพื่อนักท่องเที่ยวไหม?",
      answer:
        "รองรับครับ เรามีโมดูล Multi-language ที่ออกแบบมาเพื่อรองรับนักท่องเที่ยวในเขตสมุย พะงัน และเขื่อนเชี่ยวหลานโดยเฉพาะครับ",
    },
    {
      question: "รองรับการประเมิน ITA ภาครัฐหรือไม่?",
      answer:
        "เราออกแบบโครงสร้างเว็บไซต์และจัดหมวดหมู่ข้อมูลตามเกณฑ์ OIT ของ ป.ป.ช. เพื่อให้หน่วยงานได้รับผลประเมินในระดับสูงครับ",
    },
    {
      question: "เกษตรกรสามารถเช็คราคากลางยางพาราได้จากที่ไหน?",
      answer:
        "เรามีระบบ Smart Farmer ที่ดึงข้อมูลราคากลางอัตโนมัติมาแสดงผลหน้าเว็บ ช่วยให้เกษตรกรตัดสินใจขายผลผลิตได้แม่นยำขึ้นครับ",
    },
    // [MERGE]: ดึงคำถามมาตรฐานจาก Template หลัก
    ...localAuthorityService.faqs.filter(
      (f) => f.question.includes("ความปลอดภัย") || f.question.includes("Google Maps"),
    ),
  ],

  // --- Context Data ---
  localContext: {
    marketInsight:
      "สุราษฎร์ธานีมีความหลากหลายสูง ตั้งแต่เมืองท่องเที่ยวระดับโลกไปจนถึงพื้นที่เกษตรกรรม แพลตฟอร์มจึงต้องรองรับความต้องการที่ต่างกันในแต่ละเขตพื้นที่",
    technicalApproach:
      "ใช้ Cloud Infrastructure พร้อมระบบ CDN เพื่อการเข้าถึงจากต่างประเทศที่รวดเร็ว และเน้นระบบ Security ป้องกันการโจมตีทางไซเบอร์",
    localStrength:
      "เข้าใจบริบทของเมืองท่องเที่ยวชายฝั่งและระบบนิเวศของเกษตรกรพืชเศรษฐกิจ ทำให้เราออกแบบฟังก์ชันที่ใช้งานได้จริงในทางปฏิบัติ",
    nicheIndustries: [
      "เทศบาลนครเกาะสมุยและเทศบาลเมืองในพื้นที่",
      "อบต. แหล่งท่องเที่ยว (พะงัน/เต่า/เชี่ยวหลาน)",
      "กลุ่มสหกรณ์ปาล์มน้ำมันและยางพารา",
      "วิสาหกิจชุมชนประมงและฟาร์มหอยนางรม",
    ],
    painPoints: [
      "การจัดการขยะในพื้นที่ท่องเที่ยวเกาะ",
      "ความซับซ้อนของการสื่อสารข้อมูลการเดินทางเชื่อมต่อ",
      "ช่องทางการสื่อสารกับนักท่องเที่ยวต่างชาติที่ยังไม่เป็นระบบ",
    ],
    competitorLevel: "high",
    socialProof: {
      rating: 4.9,
      reviewCount: 58,
      localClient: "โครงการ Digital Transformation ท้องถิ่น สุราษฎร์ธานี",
    },
    regionalPricing: {
      startPrice: `${localAuthorityService.price} บาท`, // Dynamic Reference
      timeline: "25-30 วัน",
    },
    localSuccessStory: {
      title: "Smart Island Governance",
      result:
        "ช่วยให้หน่วยงานลดปริมาณเรื่องร้องเรียนค้างคาได้ 50% ด้วยระบบ Tracking สถานะแบบเรียลไทม์ที่ประชาชนตรวจสอบได้",
    },
    hyperLocalKeywords: [
      "ทำเว็บไซต์สมุย",
      "ออกแบบเว็บ อบต.พุนพิน",
      "ระบบ E-Service สุราษฎร์ธานี",
      "จ้างทำเว็บราชการดอนสัก",
    ],
  },

  // --- System Metadata ---
  priority: 90,
  districts: [
    "เมืองสุราษฎร์ธานี",
    "เกาะสมุย",
    "เกาะพะงัน",
    "พุนพิน",
    "ดอนสัก",
    "กาญจนดิษฐ์",
    "ไชยา",
    "บ้านนาสาร",
    "เกาะเต่า",
  ],
  keywords: [
    "รับทำเว็บไซต์เกาะสมุย",
    "Web Design Surat Thani",
    "ระบบจัดการขยะออนไลน์",
    "Smart Farming สุราษฎร์",
    "ITA ภาครัฐ",
  ],
  coordinates: { lat: 9.1389, lng: 99.33 },
};
