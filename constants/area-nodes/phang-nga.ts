/**
 * [SERVICE_NODE]: PHANG_NGA_MARINE_HUB v18.0.1 (STRICT_SYNC)
 * [STRATEGY]: Premium Eco-Tourism | Marine Governance | Dynamic Inheritance
 * [MARKET]: Phang Nga Local Authorities, Khao Lak, Koh Yao
 */

import type { AreaNode } from "@/types";
// [IMPORT]: นำเข้า Template หลักเพื่อดึงค่ากลาง (Local Authority Standard)
import { localAuthorityService } from "@/constants/services/local-authority";

export const phangNgaNode: AreaNode = {
  // --- Basic Identity ---
  slug: "phang-nga",
  province: "พังงา",
  templateSlug: "local-authority", // ยึดตาม Template หลัก

  title: "รับทำเว็บไซต์พังงา | Smart Marine Governance & Sustainable Tourism Hub",
  description:
    "ยกระดับดิจิทัลแพลตฟอร์มสำหรับ อบต. และเทศบาลในพังงา เน้นระบบความปลอดภัยทางทะเล (Marine Safety) และโครงสร้างพื้นฐานเพื่อการท่องเที่ยวเชิงนิเวศระดับพรีเมียม",

  longDescription:
    "พังงาคือจุดหมายปลายทางระดับ Luxury Quiet Destination ของโลก นายเอ็มซ่ามากส์ ออกแบบโครงสร้างเว็บไซต์ราชการและท้องถิ่นพังงายคใหม่ " +
    "ที่ไม่ได้เป็นแค่หน้าเว็บประชาสัมพันธ์ แต่คือศูนย์กลางข้อมูลความปลอดภัยทางทะเล (Marine Safety 4.0) และการเชื่อมโยงการท่องเที่ยวเชิงนิเวศ " +
    "เพื่อให้สอดคล้องกับภาพลักษณ์การท่องเที่ยวระดับสูง และรองรับการประเมิน ITA ในระดับสูงสุดอย่างยั่งยืน",

  // --- SEO Metadata ---
  seoTitle: "รับทำเว็บไซต์พังงา อบต. เทศบาล - ระบบ Smart City & ITA ยุคใหม่",
  seoDescription:
    "ออกแบบเว็บไซต์ราชการพังงา เขาหลัก เกาะยาว มาตรฐานความปลอดภัยสูง พร้อมระบบเชื่อมโยงข้อมูลท่องเที่ยวและเตือนภัยพิบัติทางทะเลแห่งแรกในอันดามัน",

  // --- [DYNAMIC_INHERITANCE]: Theme & Pricing ---
  // บังคับใช้ค่าจาก localAuthorityService (Emerald/Civil Theme) เพื่อมาตรฐานเดียวกัน
  theme: localAuthorityService.theme,
  price: localAuthorityService.price,
  priceValue: localAuthorityService.priceValue,
  currency: localAuthorityService.currency,
  unit: localAuthorityService.unit,

  // --- Visual (Local Specific) ---
  heroImage: "/images/areas/phang-nga.webp",

  // --- Trust Signals ---
  clientTrust:
    "Governance Integrity: ผู้อยู่เบื้องหลังโครงสร้างพื้นฐานดิจิทัลสำหรับโครงการนำร่อง Smart Village ในเขตอันดามัน",

  // --- Localized Benefits ---
  benefits: [
    "Marine Weather Integration: ระบบแสดงสภาพอากาศชายฝั่งแบบ Real-time เพื่อความปลอดภัยของนักท่องเที่ยวและชาวประมง",
    "Luxury User Experience: ดีไซน์ที่เน้นความเรียบหรูและโหลดเร็ว (SSR) เพื่อรองรับการเข้าถึงจากนักท่องเที่ยวทั่วโลก",
    "ITA & Transparency Hub: ระบบจัดหมวดหมู่ข้อมูลตามเกณฑ์การประเมินคุณธรรมและความโปร่งใสของภาครัฐครบถ้วน",
  ],

  // --- Core Features (Phang Nga Specific) ---
  coreFeatures: [
    {
      title: "Marine Safety Gateway",
      description:
        "ระบบแจ้งเตือนภัยพิบัติทางทะเลและพยากรณ์คลื่นลมที่เชื่อมต่อกับสถานีตรวจวัดโดยตรง",
      icon: "ShieldCheck",
    },
    {
      title: "Eco-Tourism Portal",
      description: "ระบบประชาสัมพันธ์แหล่งท่องเที่ยวเชิงนิเวศและวิสาหกิจชุมชนที่เน้นความยั่งยืน",
      icon: "Map",
    },
    {
      title: "Multi-lingual Smart Portal",
      description: "ระบบรองรับหลายภาษาเพื่อต้อนรับกลุ่มนักท่องเที่ยวคุณภาพจากยุโรปและสแกนดิเนเวีย",
      icon: "Globe",
    },
  ],

  // --- Localized FAQs ---
  faqs: [
    {
      question: "เว็บไซต์รองรับการแจ้งเตือนภัยสึนามิหรือไม่?",
      answer:
        "เราสามารถเชื่อมต่อ API แจ้งเตือนภัยจากศูนย์เตือนภัยพิบัติแห่งชาติเพื่อแสดงผลบนหน้าเว็บไซต์แบบ Real-time ได้ครับ",
    },
    {
      question: "นัดคุยงานที่เขาหลักหรือเกาะยาวได้ไหม?",
      answer:
        "ได้ครับ ผมสามารถเดินทางไปรับโจทย์และสำรวจหน้างานในเขตตะกั่วป่า ท้ายเหมือง หรือนัดคุยผ่านวิดีโอคอลได้ตามความสะดวกครับ",
    },
    {
      question: "ระบบ E-Service รองรับการจองพื้นที่สาธารณะไหม?",
      answer:
        "รองรับครับ เรามีระบบจองคิวออนไลน์และระบบขออนุญาตต่างๆ เพื่อลดขั้นตอนราชการและอำนวยความสะดวกประชาชนครับ",
    },
    // [MERGE]: ดึงคำถามมาตรฐานจาก Template หลัก
    ...localAuthorityService.faqs.filter(
      (f) => f.question.includes("จัดซื้อจัดจ้าง") || f.question.includes("ดูแลหลังการขาย"),
    ),
  ],

  // --- Context Data ---
  localContext: {
    marketInsight:
      "GPP ของพังงาขับเคลื่อนด้วย Luxury Tourism เป็นหลัก เว็บไซต์ราชการจึงต้องสะท้อนภาพลักษณ์ความเป็นมืออาชีพและเข้าถึงง่ายระดับสากล",
    technicalApproach:
      "ใช้ระบบ Hybrid Static-Server Rendering (Next.js 15+) เพื่อให้หน้าเว็บไซต์ติดอันดับการค้นหา (SEO) ได้รวดเร็วและรองรับผู้ใช้จำนวนมาก",
    localStrength:
      "ทรัพยากรธรรมชาติระดับ World-Class และภาพลักษณ์ Luxury Quiet Destination คือจุดแข็งที่ต้องนำเสนอผ่านสื่อคุณภาพสูงบนเว็บ",
    nicheIndustries: [
      "องค์การบริหารส่วนตำบลและเทศบาลในเขตท่องเที่ยว",
      "สมาคมธุรกิจการท่องเที่ยวจังหวัดพังงา",
      "อุทยานแห่งชาติหมู่เกาะสิมิลันและสุรินทร์",
      "วิสาหกิจชุมชนด้านการท่องเที่ยวเชิงนิเวศ",
    ],
    painPoints: [
      "ระบบแจ้งเตือนภัยพิบัติยังไม่เข้าถึงมือถือนักท่องเที่ยวโดยตรง",
      "ขาดแพลตฟอร์มรวมข้อมูลท่องเที่ยวชุมชนที่ดูทันสมัย",
      "เว็บไซต์เดิมไม่รองรับการแสดงผลบนสมาร์ทโฟนของผู้ใช้งาน",
    ],
    competitorLevel: "high",
    socialProof: {
      rating: 4.9,
      reviewCount: 42,
      localClient: "โครงการนำร่อง Smart Village Phang Nga",
    },
    regionalPricing: {
      startPrice: `${localAuthorityService.price} บาท`, // Dynamic Reference
      timeline: "14-25 วัน",
    },
    localSuccessStory: {
      title: "Smart Village Deployment",
      result:
        "ยกระดับการจัดการข้อมูลท้องถิ่นและเพิ่มประสิทธิภาพการสื่อสารกับนักท่องเที่ยวต่างชาติขึ้น 60%",
    },
    hyperLocalKeywords: [
      "ทำเว็บไซต์เขาหลัก",
      "เว็บ อบต. คึกคัก",
      "เทศบาลตำบลเกาะยาวใหญ่",
      "ออกแบบเว็บไซต์ราชการท้ายเหมือง",
      "ระบบสารสนเทศเมืองพังงา",
    ],
  },

  // --- System Metadata ---
  priority: 95,
  districts: [
    "เมืองพังงา",
    "ตะกั่วป่า",
    "ท้ายเหมือง",
    "ตะกั่วทุ่ง",
    "คุระบุรี",
    "กะปง",
    "ทับปุด",
    "เกาะยาว",
  ],
  keywords: [
    "รับทำเว็บไซต์พังงา",
    "Web Design Phang Nga",
    "ระบบเตือนภัยสึนามิ",
    "ท่องเที่ยวชุมชนพังงา",
    "เว็บ อบต. มาตรฐาน ITA",
  ],
  coordinates: { lat: 8.4501, lng: 98.5255 },
};
