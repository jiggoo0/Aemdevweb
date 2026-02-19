/**
 * [SERVICE_NODE]: KAMPHAENG_PHET_GOV_HUB v18.0.6 (DYNAMIC_LINKED)
 * [STRATEGY]: Local Authority | Government Trust | Dynamic Inheritance
 * [MARKET]: Kamphaeng Phet Government & Local Business
 */

import type { AreaNode } from "@/types";
// [IMPORT]: นำเข้า Template หลักเพื่อดึงค่ากลาง
import { localAuthorityService } from "@/constants/services/local-authority";

export const kamphaengPhetNode: AreaNode = {
  // --- Basic Identity ---
  slug: "kamphaeng-phet",
  province: "กำแพงเพชร",
  templateSlug: "local-authority", // เชื่อมโยง Logic การ Render

  title: "รับทำเว็บไซต์ กำแพงเพชร | ออกแบบระบบเว็บไซต์หน่วยงานราชการ และธุรกิจท้องถิ่น",
  description:
    "บริการยกระดับโครงสร้างพื้นฐานดิจิทัลสำหรับหน่วยงานราชการและธุรกิจในกำแพงเพชร เน้นความปลอดภัยข้อมูล มาตรฐาน ITA และการเข้าถึงประชาชนอย่างมีประสิทธิภาพ",

  longDescription:
    "การพัฒนาเว็บไซต์สำหรับหน่วยงานท้องถิ่นในกำแพงเพชร ต้องอาศัยความเข้าใจในระเบียบราชการและพฤติกรรมการใช้งานของประชาชน เว็บไซต์ที่ดีต้องเป็น 'ศาลากลางดิจิทัล' ที่ทำงานได้ตลอด 24 ชั่วโมง " +
    "นายเอ็มซ่ามากส์ พร้อมให้บริการออกแบบและพัฒนาเว็บไซต์ที่ถูกต้องตามระเบียบภาครัฐ และช่วยธุรกิจท้องถิ่นให้เติบโตด้วย Local SEO",

  // --- SEO Metadata ---
  seoTitle: "รับทำเว็บไซต์ กำแพงเพชร ออกแบบเว็บ อบต. เทศบาล และธุรกิจท้องถิ่น - เอ็มซ่ามากส์",
  seoDescription:
    "จ้างทำเว็บไซต์กำแพงเพชร สำหรับหน่วยงานราชการ อบต. เทศบาล และธุรกิจ SME รองรับมาตรฐานความปลอดภัยระดับสูง ระบบ e-Service และ ITA",

  // --- [DYNAMIC_INHERITANCE]: Theme & Pricing ---
  // รับค่าโดยตรงจาก localAuthorityService เพื่อความเป็นมาตรฐานเดียวกัน
  theme: localAuthorityService.theme,
  price: localAuthorityService.price,
  priceValue: localAuthorityService.priceValue,
  currency: localAuthorityService.currency,
  unit: localAuthorityService.unit,

  // --- Visual (Local Specific) ---
  heroImage: "/images/areas/kamphaeng-phet-node.webp",

  // --- Trust Signals ---
  clientTrust:
    "Government Integrity: มาตรฐานเว็บไซต์ที่ได้รับการยอมรับจากหน่วยงานท้องถิ่นและวิสาหกิจชุมชนในกำแพงเพชร",

  // --- Localized Benefits ---
  benefits: [
    "Public Accessibility: ออกแบบโครงสร้างตามหลักสากล (WCAG) เพื่อให้ประชาชนทุกช่วงวัยใช้งานได้ง่าย",
    "Compliance Verified: รองรับมาตรฐานการประเมิน ITA และระเบียบการเปิดเผยข้อมูลภาครัฐ (OIT) ครบถ้วน",
    "Local Growth: ช่วยธุรกิจท้องถิ่นและวิสาหกิจชุมชนให้ค้นหาเจอใน Google Maps เพิ่มโอกาสการขาย",
  ],

  // --- Core Features (Gov & Local Specific) ---
  coreFeatures: [
    {
      title: "Transparency Hub",
      description: "ระบบจัดหมวดหมู่ข้อมูลสาธารณะ (OIT) ที่ถูกต้องตามเกณฑ์ประเมินความโปร่งใส",
      icon: "FileText",
    },
    {
      title: "E-Service Gateway",
      description: "ช่องทางรับเรื่องร้องเรียนและบริการออนไลน์เพื่อลดขั้นตอนการทำงานของเจ้าหน้าที่",
      icon: "ShieldCheck",
    },
    {
      title: "Local SEO Booster",
      description: "ปรับปรุงหมุด Google Maps ให้ธุรกิจ/สถานที่ราชการค้นหาเจอง่ายและน่าเชื่อถือ",
      icon: "MapPin",
    },
  ],

  // --- Localized FAQs ---
  faqs: [
    {
      question: "การเบิกจ่ายงบประมาณราชการทำอย่างไร?",
      answer:
        "ผมสามารถจัดทำใบเสนอราคา เปรียบเทียบราคา และส่งมอบงานตามงวดงานราชการได้ถูกต้องตามระเบียบพัสดุครับ",
    },
    {
      question: "สอนเจ้าหน้าที่ใช้งานไหม?",
      answer: "มีอบรมการใช้งานระบบหลังบ้าน (CMS) ให้เจ้าหน้าที่ฟรี จนกว่าจะลงข้อมูลเองได้คล่องครับ",
    },
    {
      question: "เว็บไซต์รองรับคนพิการ/ผู้สูงอายุไหม?",
      answer:
        "รองรับครับ เราออกแบบตัวอักษรให้อ่านง่ายและเมนูไม่ซับซ้อน ตามหลัก Universal Design ครับ",
    },
    // [MERGE]: ดึงคำถามมาตรฐานจาก Template หลัก
    ...localAuthorityService.faqs.filter(
      (f) => f.question.includes("Google Maps") || f.question.includes("ดูแลหลังการขาย"),
    ),
  ],

  // --- Context Data ---
  localContext: {
    marketInsight:
      "ประชาชนในพื้นที่ต้องการความสะดวกในการเข้าถึงข้อมูล เว็บไซต์ที่รวดเร็วและเป็นระเบียบจะสร้างภาพลักษณ์ที่ดีให้องค์กร",
    technicalApproach:
      "เน้นการใช้ Open-source Stack ที่มีความเสถียร ปลอดภัย และไม่มีค่าใช้จ่ายลิขสิทธิ์รายเดือนที่เป็นภาระผูกพัน",
    localStrength: "เข้าใจวัฒนธรรมท้องถิ่นกำแพงเพชร ทำงานรวดเร็ว มีเอกสารประกอบการดำเนินงานครบถ้วน",
    nicheIndustries: [
      "หน่วยงานราชการท้องถิ่น (อบต./เทศบาล)",
      "วิสาหกิจชุมชนและสินค้า OTOP",
      "โรงเรียนและสถานศึกษา",
      "ร้านวัสดุก่อสร้างและเกษตรภัณฑ์",
    ],
    painPoints: [
      "เว็บไซต์เดิมข้อมูลไม่อัปเดต/เข้าไม่ได้",
      "ระบบใช้งานยากสำหรับชาวบ้าน",
      "ไม่มีความปลอดภัยข้อมูล (โดนแฮกบ่อย)",
    ],
    competitorLevel: "low",
    socialProof: {
      rating: 4.8,
      reviewCount: 42,
      localClient: "วิสาหกิจชุมชนแปรรูปกล้วยไข่",
    },
    regionalPricing: {
      startPrice: `${localAuthorityService.price} บาท`, // Dynamic Reference
      timeline: "20-30 วัน",
    },
    localSuccessStory: {
      title: "Case Study: อบต. ยุคใหม่",
      result: "ยกระดับการให้บริการประชาชนผ่านช่องทางออนไลน์ ลดเวลารับเรื่องร้องเรียนลง 50%",
    },
    hyperLocalKeywords: [
      "ทำเว็บ อบต กำแพงเพชร",
      "รับทำเว็บไซต์ เทศบาล กำแพงเพชร",
      "จ้างทำเว็บ คลองขลุง",
      "ออกแบบเว็บ พรานกระต่าย",
    ],
  },

  // --- System Metadata ---
  priority: 96,
  districts: ["เมืองกำแพงเพชร", "คลองขลุง", "ขาณุวรลักษบุรี", "พรานกระต่าย", "ไทรงาม", "ลานกระบือ"],
  keywords: [
    "รับทำเว็บไซต์ กำแพงเพชร",
    "ทำเว็บไซต์ อบต กำแพงเพชร",
    "รับทำเว็บราชการ",
    "บริษัทรับทำเว็บไซต์",
  ],
  coordinates: { lat: 16.4828, lng: 99.5227 },
};
