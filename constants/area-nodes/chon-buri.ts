/**
 * [SERVICE_NODE]: CHON_BURI_INDUSTRIAL_HUB v18.0.2 (DYNAMIC_LINKED)
 * [STRATEGY]: Industrial Authority | EEC B2B Conversion | Dynamic Inheritance
 * [MARKET]: Chon Buri, Sriracha, Laem Chabang, Amata Nakorn (EEC Zone)
 */

import type { AreaNode } from "@/types";
// [IMPORT]: นำเข้า Template หลักเพื่อดึงค่ากลาง (Corporate Standard)
import { corporateService } from "@/constants/services/corporate";

export const chonBuriNode: AreaNode = {
  // --- Basic Identity ---
  slug: "chon-buri",
  province: "ชลบุรี",
  templateSlug: "corporate", // เชื่อมโยงกับ Corporate Template

  title: "รับทำเว็บไซต์ ชลบุรี | บริษัทรับทำเว็บไซต์โรงงานและธุรกิจ EEC ติดอันดับ Google",
  description:
    "บริการรับทำเว็บไซต์โรงงานในชลบุรีและพัทยา ยกระดับภาพลักษณ์ธุรกิจสู่สากล รองรับ 3 ภาษา (TH/EN/JP) เพื่อเจาะกลุ่มทุนญี่ปุ่นและคู่ค้าต่างชาติ",

  longDescription:
    "ในเขตเศรษฐกิจพิเศษ EEC เว็บไซต์เปรียบเสมือน 'หน้าตา' ของโรงงาน หากเว็บไซต์ดูเก่า โหลดช้า หรือไม่มีภาษาอังกฤษ คู่ค้าต่างชาติจะมองข้ามทันที " +
    "นายเอ็มซ่ามากส์ เชี่ยวชาญการออกแบบ Industrial Web Design ที่เน้นความน่าเชื่อถือ แสดงมาตรฐาน ISO ชัดเจน " +
    "พร้อมวางระบบ SEO ให้ฝ่ายจัดซื้อทั่วโลกค้นหาคุณเจอเป็นอันดับแรกในคีย์เวิร์ดอุตสาหกรรม",

  // --- SEO Metadata ---
  seoTitle: "รับทำเว็บไซต์ ชลบุรี ออกแบบเว็บโรงงาน นิคมอมตะ พัทยา ศรีราชา - เอ็มซ่ามากส์",
  seoDescription:
    "บริษัทรับทำเว็บไซต์ชลบุรี รับทำ SEO โรงงาน โลจิสติกส์ และธุรกิจใน EEC เว็บไซต์มาตรฐานสากล รองรับมือถือและหลายภาษา เพิ่มยอดขอใบเสนอราคา (RFQ)",

  // --- [DYNAMIC_INHERITANCE]: Theme & Pricing ---
  // รับค่าโดยตรงจาก corporateService เพื่อความเป็นมาตรฐาน Enterprise เดียวกัน
  theme: corporateService.theme,
  price: corporateService.price,
  priceValue: corporateService.priceValue,
  currency: corporateService.currency,
  unit: corporateService.unit,

  // --- Visual (Local Specific) ---
  heroImage: "/images/areas/chon-buri-node.webp",

  // --- Trust Signals ---
  clientTrust:
    "Industrial Standard: ผู้อยู่เบื้องหลังเว็บไซต์โรงงานและโลจิสติกส์กว่า 30 แห่งในนิคมอมตะและแหลมฉบัง",

  // --- Localized Benefits ---
  benefits: [
    "International Image: ออกแบบ CI ให้ดูทันสมัยและเป็นสากล สร้างความมั่นใจให้นักลงทุนและคู่ค้าต่างชาติ",
    "Multi-Language Support: รองรับ 3 ภาษา (TH/EN/JP) เพื่อเจาะตลาดกลุ่มทุนญี่ปุ่นและลูกค้าต่างชาติใน EEC โดยเฉพาะ",
    "Industrial SEO: ดันเว็บไซต์ติดหน้าแรก Google ในคีย์เวิร์ดเฉพาะทาง เช่น 'CNC ชลบุรี', 'โกดังให้เช่า', 'แม่พิมพ์โลหะ'",
  ],

  // --- Core Features (Industrial Specific) ---
  coreFeatures: [
    {
      title: "Product Catalog System",
      description: "ระบบแคตตาล็อกสินค้าอุตสาหกรรม ค้นหาง่าย รองรับสินค้าหลักพันรายการโดยไม่หน่วง",
      icon: "Database",
    },
    {
      title: "RFQ Generator",
      description: "ระบบขอใบเสนอราคา (Request for Quotation) ที่ส่งตรงเข้าอีเมลฝ่ายขายทันที",
      icon: "FileText",
    },
    {
      title: "Compliance Page",
      description:
        "หน้าแสดงใบรับรองมาตรฐาน (ISO/HACCP/BOI) ที่ออกแบบมาให้ตรวจสอบได้ง่ายและน่าเชื่อถือ",
      icon: "ShieldCheck",
    },
  ],

  // --- Localized FAQs ---
  faqs: [
    {
      question: "ออฟฟิศอยู่ที่ไหน นัดเจอที่โรงงานได้ไหม?",
      answer:
        "ผมสามารถเดินทางไปพรีเซนต์งานที่นิคมอุตสาหกรรมในชลบุรี (อมตะ, เหมราช, ปิ่นทอง) ได้ครับ เพื่อรับโจทย์และดูหน้างานจริง",
    },
    {
      question: "ทำเว็บ 2 ภาษา (ไทย-อังกฤษ) เพิ่มเท่าไหร่?",
      answer:
        "แพ็กเกจเริ่มต้นรองรับ 1 ภาษาครับ หากต้องการเพิ่มภาษาที่ 2 หรือ 3 (ญี่ปุ่น) มีค่าบริการเพิ่มตามปริมาณเนื้อหาครับ",
    },
    {
      question: "มีบริการถ่ายภาพโรงงาน/เครื่องจักรไหม?",
      answer:
        "มีครับ ผมมีทีมช่างภาพสาย Industrial ที่เชี่ยวชาญการถ่ายไลน์ผลิตและเครื่องจักร เพื่อให้ภาพออกมาดูเป็นมืออาชีพครับ",
    },
    // [MERGE]: ดึงคำถามมาตรฐานจาก Template หลัก (Corporate)
    ...corporateService.faqs.filter(
      (f) => f.question.includes("ใบกำกับภาษี") || f.question.includes("PDPA"),
    ),
  ],

  // --- Context Data ---
  localContext: {
    marketInsight:
      "คู่ค้าใน EEC ให้ความสำคัญกับ 'มาตรฐาน' และ 'ความชัดเจน' เว็บไซต์ที่ข้อมูลครบ (Spec Sheet, Certificate) และดูโปร จะปิดดีล B2B ได้ง่ายกว่า",
    technicalApproach:
      "เน้นโครงสร้าง Clean Code เพื่อความปลอดภัยข้อมูลสูงสุด และรองรับการทำ SEO ในตลาด B2B ที่การแข่งขันสูง",
    localStrength:
      "เข้าใจกระบวนการจัดซื้อของโรงงานและนิคมอุตสาหกรรม สามารถออกแบบ Flow เว็บให้สอดคล้องกับการทำงานจริง",
    nicheIndustries: [
      "โรงงานผลิตชิ้นส่วนยานยนต์ (Automotive)",
      "โลจิสติกส์และคลังสินค้า (Logistics)",
      "รับเหมาก่อสร้างโรงงาน (Industrial Construction)",
      "นำเข้า-ส่งออกเครื่องจักร (Machinery)",
    ],
    painPoints: [
      "เว็บเก่าไม่รองรับมือถือ ดูล้าสมัย",
      "ลูกค้าต่างชาติค้นหาชื่อบริษัทไม่เจอ",
      "ไม่มีข้อมูลสินค้า/สเปกเครื่องจักรบนเว็บ",
    ],
    competitorLevel: "high",
    socialProof: {
      rating: 5.0,
      reviewCount: 184,
      localClient: "บริษัทโลจิสติกส์รายใหญ่ ในนิคมฯ แหลมฉบัง",
    },
    regionalPricing: {
      startPrice: `${corporateService.price} บาท`, // Dynamic Reference
      timeline: "14-30 วัน",
    },
    localSuccessStory: {
      title: "Case Study: โรงงานชิ้นส่วน CNC",
      result:
        "ปรับปรุงเว็บไซต์และทำ SEO ภาษาอังกฤษ ยอด RFQ จากลูกค้าโซนยุโรปและญี่ปุ่นเพิ่มขึ้น 250%",
    },
    hyperLocalKeywords: [
      "รับทำเว็บไซต์ ศรีราชา",
      "ออกแบบเว็บไซต์ แหลมฉบัง",
      "จ้างทำ SEO พัทยา",
      "ทำเว็บโรงงาน อมตะนคร",
    ],
  },

  // --- System Metadata ---
  priority: 99,
  districts: [
    "เมืองพัทยา",
    "ศรีราชา",
    "แหลมฉบัง",
    "นิคมอมตะนคร",
    "บางแสน",
    "บ่อวิน",
    "นิคมเหมราช",
    "บ้านบึง",
  ],
  keywords: [
    "รับทำเว็บไซต์ ชลบุรี",
    "บริษัทรับทำเว็บไซต์",
    "ทำเว็บโรงงาน ชลบุรี",
    "รับทำ SEO ชลบุรี",
    "ออกแบบเว็บไซต์ พัทยา",
  ],
  coordinates: { lat: 13.3611, lng: 100.9847 },
};
