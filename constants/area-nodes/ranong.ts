/**
 * [SERVICE_NODE]: RANONG_WELLNESS_HUB v18.0.1 (STRICT_SYNC)
 * [STRATEGY]: Andaman Gateway | Thermal-Hydro Therapy | Dynamic Inheritance
 * [MARKET]: Ranong Local Authorities, Border Trade & Wellness Tourism
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { AreaNode } from "@/types";
// [IMPORT]: นำเข้า Template หลักเพื่อดึงค่ากลาง (Local Authority Standard)
import { localAuthorityService } from "@/constants/services/local-authority";

export const ranongNode: AreaNode = {
  // --- Basic Identity ---
  slug: "ranong",
  province: "ระนอง",
  templateSlug: "local-authority", // ยึดตาม Template หลักที่เน้นความน่าเชื่อถือและการบริการประชาชน

  title: "รับทำเว็บไซต์ระนอง | สร้าง Digital Infrastructure สู่เมือง Smart Wellness",
  description:
    "ยกระดับแพลตฟอร์มดิจิทัลจังหวัดระนอง รองรับยุทธศาสตร์ 'Wellness City' เชื่อมโยงระบบบริการประชาชน (E-Service) และฐานข้อมูลการค้าชายแดนไทย-เมียนมา",

  longDescription:
    "ระนองคือเมืองแห่งสุขภาพและประตูการค้าชายแดนที่สำคัญ นายเอ็มซ่ามากส์ ออกแบบโครงสร้างเว็บไซต์ท้องถิ่นระนองยุคใหม่ " +
    "ที่รองรับการใช้งานแบบ Multi-language (ไทย/เมียนมา/อังกฤษ) เพื่อสนับสนุนเศรษฐกิจชายแดน และระบบจองคิวสุขภาพออนไลน์ " +
    "โดยเน้นความเสถียรสูงสุดด้วยเทคโนโลยี Static Site Generation (SSG) ที่ช่วยให้เว็บเข้าถึงได้รวดเร็วแม้ในช่วงฤดูมรสุมที่มีสัญญาณอินเทอร์เน็ตจำกัด",

  // --- SEO Metadata ---
  seoTitle: "รับทำเว็บไซต์ระนอง อบต. เทศบาล - Wellness City & Border Trade Hub",
  seoDescription:
    "บริการทำเว็บไซต์หน่วยงานราชการระนอง รองรับ 3 ภาษา (ไทย/อังกฤษ/เมียนมา) เชื่อมโยงการท่องเที่ยวเชิงสุขภาพและการค้าชายแดน มาตรฐาน ITA",

  // --- [DYNAMIC_INHERITANCE]: Theme & Pricing ---
  // บังคับใช้ค่าจาก localAuthorityService (Emerald/Civil Theme) เพื่อมาตรฐานเดียวกัน
  theme: localAuthorityService.theme,
  price: localAuthorityService.price,
  priceValue: localAuthorityService.priceValue,
  currency: localAuthorityService.currency,
  unit: localAuthorityService.unit,

  // --- Visual (Local Specific) ---
  heroImage: "/images/areas/ranong-hotspring.webp",

  // --- Trust Signals ---
  clientTrust:
    "Andaman Gateway Integrity: ผู้อยู่เบื้องหลังระบบดิจิทัลสนับสนุนนโยบายระเบียงเศรษฐกิจภาคใต้ (SEC) ในเขตระนอง",

  // --- Localized Benefits ---
  benefits: [
    "Cross-Border Multi-language: ระบบจัดการเนื้อหารองรับภาษาเมียนมา (Zawgyi/Unicode) เพื่อรองรับแรงงานและเศรษฐกิจชายแดน",
    "Rainy-Day Optimization: สถาปัตยกรรมที่ช่วยให้เว็บเปิดได้ทันทีแม้ในช่วงฝนตกหนักหรือสัญญาณอินเทอร์เน็ตไม่สม่ำเสมอ",
    "ITA AA-Compliant: โครงสร้างข้อมูลที่ถูกออกแบบมาเพื่อรองรับเกณฑ์การประเมินคุณธรรมและความโปร่งใสในระดับสูงสุด",
  ],

  // --- Core Features (Wellness & Border Trade Specific) ---
  coreFeatures: [
    {
      title: "Mineral Water Hub",
      description:
        "ระบบแสดงข้อมูลแหล่งน้ำแร่และการจองคิวบริการแช่น้ำแร่ร้อนแบบดิจิทัล ลดความแออัดหน้างาน",
      icon: "Thermometer",
    },
    {
      title: "Border Logistics Link",
      description: "ระบบข่าวสารจุดผ่านแดนและการเดินเรือขนส่งสินค้าข้ามเกาะแบบเรียลไทม์",
      icon: "Ship",
    },
    {
      title: "SEC One-Stop Service",
      description: "ระบบขอรับบริการออนไลน์ตามยุทธศาสตร์ระเบียงเศรษฐกิจภาคใต้ เชื่อมโยงทุกภาคส่วน",
      icon: "ShieldCheck",
    },
  ],

  // --- Localized FAQs ---
  faqs: [
    {
      question: "เว็บไซต์รองรับภาษาพม่าหรือไม่?",
      answer:
        "รองรับครับ เราติดตั้งระบบฟอนต์ที่แสดงผลได้ถูกต้องทั้งแบบ Unicode และ Zawgyi เพื่อสื่อสารกับกลุ่มคู่ค้าชายแดนและแรงงานในพื้นที่ครับ",
    },
    {
      question: "ช่วงหน้าฝนหรือพายุเข้า เว็บไซต์จะยังเข้าได้ปกติไหม?",
      answer:
        "เข้าได้รวดเร็วครับ เราใช้ระบบ SSG ที่ทำให้หน้าเว็บเป็นไฟล์เบาและกระจายอยู่บน CDN ทั่วโลก แม้เน็ตในพื้นที่ไม่เสถียรก็ยังโหลดขึ้นได้ไวครับ",
    },
    {
      question: "สามารถทำระบบจองบ่อน้ำแร่ร้อนพรรั้งหรือรักษะวารินได้ไหม?",
      answer:
        "ทำได้ครับ เรามีโมดูล Booking สำหรับจัดการคิวผู้เข้าใช้บริการ เพื่อให้เจ้าหน้าที่และนักท่องเที่ยววางแผนเวลาได้แม่นยำขึ้นครับ",
    },
    // [MERGE]: ดึงคำถามมาตรฐานจาก Template หลัก
    ...localAuthorityService.faqs.filter(
      (f) => f.question.includes("จัดซื้อจัดจ้าง") || f.question.includes("ความปลอดภัย"),
    ),
  ],

  // --- Context Data ---
  localContext: {
    marketInsight:
      "ระนองมีนักท่องเที่ยวกลุ่ม Wellness คุณภาพสูง เว็บไซต์ท้องถิ่นต้องทำหน้าที่เป็น 'Digital Concierge' ที่คอยแนะนำบริการสุขภาพและการเดินทางข้ามแดน",
    technicalApproach:
      "ใช้ Next.js 15+ ร่วมกับ Static Site Generation เพื่อลดภาระ Server ในช่วงภัยพิบัติหรือพายุเข้า ช่วยให้ประชาชนเข้าถึงข้อมูลฉุกเฉินได้เสถียรที่สุด",
    localStrength:
      "สัญลักษณ์ความมั่งคั่งใหม่ (Wellness Wealth) ของระนองคือ 'น้ำแร่ร้อน' ซึ่งเรานำเสนอผ่านดีไซน์ที่ดูพรีเมียมและน่าเชื่อถือ",
    nicheIndustries: [
      "สมาคมธุรกิจการท่องเที่ยวจังหวัดระนอง",
      "ด่านศุลกากรระนอง (Border Trade Hub)",
      "กลุ่มวิสาหกิจชุมชนน้ำแร่ร้อนพรรั้งและรักษะวาริน",
      "อุตสาหกรรมแปรรูปอาหารทะเลและท่าเทียบเรือ",
    ],
    painPoints: [
      "ข้อมูลท่องเที่ยวหน้าฝนไม่ชัดเจน (Rainy Season Gap)",
      "เว็บราชการเดิมไม่รองรับภาษาเพื่อนบ้านเพื่อการค้าชายแดน",
      "ระบบจองคิวบ่อน้ำแร่ยังเป็นระบบ Manual ที่จัดการยาก",
    ],
    competitorLevel: "low",
    socialProof: {
      rating: 4.9,
      reviewCount: 41,
      localClient: "โครงการขับเคลื่อนเศรษฐกิจชายแดนระนอง",
    },
    regionalPricing: {
      startPrice: `${localAuthorityService.price} บาท`, // Dynamic Reference
      timeline: "14-25 วัน",
    },
    localSuccessStory: {
      title: "Wellness City Digitalization",
      result: "ยกระดับการจองบริการสุขภาพออนไลน์และเพิ่มการเข้าถึงข้อมูลของคู่ค้าชายแดนขึ้น 50%",
    },
    hyperLocalKeywords: [
      "ทำเว็บไซต์ อบต.บางหริ้น",
      "ออกแบบเว็บเทศบาลเมืองระนอง",
      "เว็บราชการอำเภอกระบุรี",
      "ระบบจองบ่อน้ำแร่ร้อนระนอง",
    ],
  },

  // --- System Metadata ---
  priority: 92,
  districts: ["เมืองระนอง", "ละอุ่น", "กะเปอร์", "กระบุรี", "สุขสำราญ"],
  keywords: [
    "รับทำเว็บไซต์ระนอง",
    "Web Design Ranong",
    "Wellness Tourism Platform",
    "เว็บราชการภาษาพม่า",
    "ระบบจองคิวน้ำแร่",
  ],
  coordinates: { lat: 9.9528, lng: 98.6084 },
};
