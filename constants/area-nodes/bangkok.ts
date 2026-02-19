/**
 * [SERVICE_NODE]: BANGKOK_ENTERPRISE_HUB v18.0.1 (DYNAMIC_LINKED)
 * [STRATEGY]: Enterprise Branding | CBD Competitive SEO | Dynamic Inheritance
 * [MARKET]: Bangkok CBD, Public Companies & High-End SMEs
 */

import type { AreaNode } from "@/types";
// [IMPORT]: นำเข้า Template หลักเพื่อดึงค่ากลาง (Corporate Standard)
import { corporateService } from "@/constants/services/corporate";

export const bangkokNode: AreaNode = {
  // --- Basic Identity ---
  slug: "bangkok",
  province: "กรุงเทพมหานคร",
  templateSlug: "corporate", // เชื่อมโยงกับ Corporate Template

  title: "รับทำเว็บไซต์ กรุงเทพฯ | ออกแบบเว็บองค์กรและบริษัท ติดหน้าแรก Google",
  description:
    "บริการรับทำเว็บไซต์มาตรฐาน Enterprise ในกรุงเทพฯ เน้นความปลอดภัยข้อมูล (PDPA) ความเร็วสูงสุด และดีไซน์ที่สะท้อนภาพลักษณ์ผู้นำธุรกิจในย่าน CBD",

  longDescription:
    "ในสนามแข่งขันทางธุรกิจของกรุงเทพฯ เว็บไซต์ไม่ใช่แค่โบรชัวร์ออนไลน์ แต่คือ 'สำนักงานใหญ่ดิจิทัล' ที่เปิดต้อนรับนักลงทุนและคู่ค้าตลอด 24 ชั่วโมง " +
    "ผมให้บริการออกแบบและพัฒนาเว็บไซต์สำหรับองค์กรที่ต้องการความสมบูรณ์แบบ ทั้งในด้านดีไซน์ที่สะท้อนวิสัยทัศน์ และโครงสร้างเทคนิคที่รองรับการขยายตัวในอนาคต",

  // --- SEO Metadata ---
  seoTitle: "บริษัทรับทำเว็บไซต์ กรุงเทพฯ รับทำ SEO และออกแบบเว็บองค์กรครบวงจร - เอ็มซ่ามากส์",
  seoDescription:
    "จ้างทำเว็บไซต์กรุงเทพฯ เน้นเว็บองค์กร บริษัทมหาชน และ SME ที่ต้องการความน่าเชื่อถือ รองรับ SEO ติดหน้าแรก Google พร้อมระบบความปลอดภัยขั้นสูง",

  // --- [DYNAMIC_INHERITANCE]: Theme & Pricing ---
  // รับค่าโดยตรงจาก corporateService เพื่อความเป็นมาตรฐาน Enterprise เดียวกัน
  theme: corporateService.theme,
  price: corporateService.price,
  priceValue: corporateService.priceValue,
  currency: corporateService.currency,
  unit: corporateService.unit,

  // --- Visual (Local Specific) ---
  heroImage: "/images/areas/bangkok-node.webp",

  // --- Trust Signals ---
  clientTrust:
    "Professional Trust: ได้รับความไว้วางใจจาก 50+ บริษัทชั้นนำและ SME ในย่านสาทร-สุขุมวิท",

  // --- Localized Benefits ---
  benefits: [
    "Enterprise Standard: มาตรฐานการออกแบบและการเขียนโค้ดระดับสากล รองรับ Traffic มหาศาลและการ Audit จากฝ่ายไอที",
    "Competitive SEO: วางโครงสร้างเพื่อชิงพื้นที่หน้าแรก Google ในสมรภูมิคีย์เวิร์ดที่มีการแข่งขันสูงที่สุดในประเทศ",
    "Data Security & PDPA: ระบบความปลอดภัยข้อมูลที่รัดกุม พร้อม Cookie Consent ที่ถูกต้องตามกฎหมาย เพื่อปกป้องชื่อเสียงองค์กร",
  ],

  // --- Core Features (Corporate Specific) ---
  coreFeatures: [
    {
      title: "High-Performance Tech",
      description: "ใช้ Tech Stack ล่าสุด (Next.js) รับประกันความเร็วและการรองรับผู้ใช้งานจำนวนมาก",
      icon: "Zap",
    },
    {
      title: "Scalable Architecture",
      description: "โครงสร้างระบบที่พร้อมขยายตัว รองรับการเพิ่มข้อมูลสินค้าหรือข่าวสารได้ไม่จำกัด",
      icon: "Database",
    },
    {
      title: "Corporate Identity",
      description: "ดีไซน์ที่ถอดรหัสมาจากอัตลักษณ์องค์กร (CI) เพื่อความโดดเด่นและเป็นที่จดจำ",
      icon: "Building2",
    },
  ],

  // --- Localized FAQs ---
  faqs: [
    {
      question: "บริษัทอยู่ที่ไหน นัดประชุมได้ไหม?",
      answer:
        "ผมทำงานในรูปแบบ Remote เป็นหลักเพื่อให้ได้งานที่รวดเร็ว แต่สามารถนัดประชุม On-site ได้ในเขตธุรกิจ (CBD) กรณีโปรเจกต์มีความซับซ้อนครับ",
    },
    {
      question: "ออกใบกำกับภาษีได้ไหม?",
      answer:
        "ได้ครับ ผมดำเนินงานในรูปแบบนิติบุคคล สามารถออกใบเสนอราคาและใบกำกับภาษีเต็มรูปแบบเพื่อหักค่าใช้จ่ายได้ครับ",
    },
    {
      question: "รองรับมาตรฐานความปลอดภัยขั้นสูงไหม?",
      answer:
        "รองรับครับ เว็บไซต์ทุกเว็บได้รับ SSL Certificate และมีการทำ Hardening Server เพื่อป้องกันการโจมตีพื้นฐานครับ",
    },
    // [MERGE]: ดึงคำถามมาตรฐานจาก Template หลัก
    ...corporateService.faqs.filter(
      (f) => f.question.includes("PDPA") || f.question.includes("บริการหลังการขาย"),
    ),
  ],

  // --- Context Data ---
  localContext: {
    marketInsight:
      "ในกรุงเทพฯ ความเร็วและความน่าเชื่อถือคือสิ่งสำคัญที่สุด เว็บไซต์ที่ดูเป็นมืออาชีพช่วยให้ปิดดีล B2B และสร้างความเชื่อมั่นให้นักลงทุนได้ง่ายขึ้น",
    technicalApproach:
      "เน้น Security และ Performance สูงสุด (Core Web Vitals) เพื่อรองรับมาตรฐานขององค์กรขนาดใหญ่",
    localStrength:
      "ทำงานเป็นระบบ มีเอกสารชัดเจน (SOW/Timeline) และเข้าใจกระบวนการทำงานขององค์กรใหญ่",
    nicheIndustries: [
      "อสังหาริมทรัพย์และคอนโดมิเนียม",
      "สถาบันการเงินและการลงทุน",
      "โรงพยาบาลและคลินิกเฉพาะทาง",
      "บริษัทกฎหมายและที่ปรึกษา",
    ],
    painPoints: [
      "เว็บเก่าไม่ปลอดภัย โดนแฮกบ่อย",
      "เว็บโหลดช้า ลูกค้าหนีไปหาคู่แข่ง",
      "ค้นหาใน Google ไม่เจอ แม้จะเปิดมานาน",
    ],
    competitorLevel: "high",
    socialProof: {
      rating: 5.0,
      reviewCount: 128,
      localClient: "บริษัทอสังหาฯ ชั้นนำ ย่านสาทร",
    },
    regionalPricing: {
      startPrice: `${corporateService.price} บาท`, // Dynamic Reference
      timeline: "14-21 วัน",
    },
    localSuccessStory: {
      title: "Case Study: โครงการคอนโดสุขุมวิท",
      result: "ปรับปรุงโครงสร้าง SEO และ UX ดันยอด Traffic จากกลุ่ม Expat เพิ่มขึ้น 200%",
    },
    hyperLocalKeywords: [
      "รับทำเว็บไซต์ สาทร",
      "ออกแบบเว็บไซต์ สีลม",
      "จ้างทำ SEO สุขุมวิท",
      "ทำเว็บองค์กร พระราม 9",
    ],
  },

  // --- System Metadata ---
  priority: 100,
  districts: ["สาทร", "สีลม", "สุขุมวิท", "พระราม 9", "ทองหล่อ", "อโศก", "ปทุมวัน"],
  keywords: [
    "รับทำเว็บไซต์ กรุงเทพ",
    "บริษัทรับทำเว็บไซต์",
    "จ้างทำเว็บไซต์ ราคา",
    "ทำเว็บองค์กร มหาชน",
  ],
  coordinates: { lat: 13.7563, lng: 100.5018 },
};
