/**
 * [SERVICE_NODE]: CHUMPHON_SMART_GATEWAY v18.0.1 (STRICT_SYNC)
 * [STRATEGY]: Smart Gateway | Government Trust | Dynamic Inheritance
 * [MARKET]: Chumphon Local Authorities (PAO/SAO) & Agriculture
 */

import type { AreaNode } from "@/types";
// [IMPORT]: นำเข้า Template หลักเพื่อดึงค่ากลาง (Local Authority Standard)
import { localAuthorityService } from "@/constants/services/local-authority";

export const chumphonNode: AreaNode = {
  // --- Basic Identity ---
  slug: "chumphon",
  province: "ชุมพร",
  templateSlug: "local-authority", // ยึดตาม Template หลัก

  title: "รับทำเว็บไซต์หน่วยงานราชการ ชุมพร - ยกระดับบริการภาครัฐสู่ Smart City",
  description:
    "พัฒนาระบบเว็บไซต์ อบต. และเทศบาลในจังหวัดชุมพร รองรับยุทธศาสตร์ประตูสู่ภาคใต้ เชื่อมโยง E-Service และส่งเสริมการท่องเที่ยวชุมชนอย่างยั่งยืน",

  longDescription:
    "ชุมพรคือ 'ประตูสู่ภาคใต้' ที่มีศักยภาพสูงทั้งด้านโลจิสติกส์และการเกษตร นายเอ็มซ่ามากส์ ออกแบบโครงสร้างเว็บราชการยุคใหม่ " +
    "ที่เปลี่ยนจากเมืองผ่านให้เป็นเมืองพักผ่อน (Stay-over City) ด้วยระบบ E-Service ที่ลดขั้นตอนเอกสาร และโมดูลประชาสัมพันธ์สินค้าเกษตรพรีเมียม " +
    "เพื่อให้ท้องถิ่นก้าวสู่การเป็น Smart City ที่แท้จริง พร้อมรองรับการประเมิน ITA ในระดับสูงสุด",

  // --- SEO Metadata ---
  seoTitle: "รับทำเว็บไซต์ชุมพร อบต. เทศบาล ราชการ - เอ็มซ่ามากส์ มาตรฐานภาครัฐ ITA",
  seoDescription:
    "บริการจัดทำเว็บไซต์หน่วยงานราชการในจังหวัดชุมพร รองรับมาตรฐาน ITA และ WCAG ครบถ้วน พร้อมระบบจัดการเรื่องร้องเรียนออนไลน์ และประชาสัมพันธ์แหล่งท่องเที่ยว Unseen ชุมพร",

  // --- [DYNAMIC_INHERITANCE]: Theme & Pricing ---
  // บังคับใช้ค่าจาก localAuthorityService (Emerald/Civil Theme) เพื่อมาตรฐานเดียวกัน
  theme: localAuthorityService.theme,
  price: localAuthorityService.price,
  priceValue: localAuthorityService.priceValue,
  currency: localAuthorityService.currency,
  unit: localAuthorityService.unit,

  // --- Visual (Local Specific) ---
  heroImage: "/images/areas/chumphon-gateway.webp",

  // --- Trust Signals ---
  clientTrust:
    "Government Standard: ได้รับความไว้วางใจในการพัฒนาระบบดิจิทัลสำหรับ อปท. ในเขตภาคใต้ตอนบน",

  // --- Localized Benefits ---
  benefits: [
    "ITA 100% Compliance: โครงสร้างเว็บไซต์ที่ออกแบบตามเกณฑ์การประเมินคุณธรรมและความโปร่งใส (OIT) ครบทุกหัวข้อ",
    "Digital Service Gateway: ระบบรับเรื่องร้องเรียนและคำร้องออนไลน์ ช่วยลดภาระงานหน้าเคาน์เตอร์และอำนวยความสะดวกประชาชน",
    "Agro-Tourism Link: โมดูลพิเศษเชื่อมโยงฐานข้อมูลเกษตรกรและจุดเช็คอินท่องเที่ยว เพื่อกระจายรายได้สู่ชุมชน",
  ],

  // --- Core Features (Gov & Agri Specific) ---
  coreFeatures: [
    {
      title: "Smart Public Service",
      description:
        "ระบบบริการประชาชนออนไลน์ ชำระค่าน้ำ ค่าขยะ และยื่นขอใบอนุญาตผ่านหน้าเว็บ 24 ชม.",
      icon: "Users",
    },
    {
      title: "Tourism & OTOP Showcase",
      description:
        "ระบบ Interactive Map แนะนำแหล่งท่องเที่ยวและ Marketplace สำหรับสินค้าวิสาหกิจชุมชน",
      icon: "Map",
    },
    {
      title: "Disaster Alert System",
      description:
        "ระบบแจ้งเตือนภัยพิบัติและระดับน้ำแบบเรียลไทม์ เพื่อความปลอดภัยของประชาชนในพื้นที่เสี่ยง",
      icon: "Bell",
    },
  ],

  // --- Localized FAQs ---
  faqs: [
    {
      question: "เว็บไซต์รองรับมาตรฐาน WCAG สำหรับผู้พิการหรือไม่?",
      answer:
        "รองรับครับ เราออกแบบโครงสร้างให้โปรแกรมอ่านหน้าจอ (Screen Reader) เข้าถึงได้ และปรับขนาดตัวอักษรได้ตามมาตรฐานสากลครับ",
    },
    {
      question: "สามารถทำระบบแผนที่ภาษีและทะเบียนทรัพย์สินเชื่อมต่อได้ไหม?",
      answer:
        "ทำได้ครับ เราสามารถพัฒนาโมดูลเชื่อมโยงข้อมูลแผนที่เพื่อสนับสนุนการจัดเก็บรายได้ของท้องถิ่นให้แม่นยำขึ้นครับ",
    },
    {
      question: "มีระบบจัดการข้อมูลผู้สูงอายุและคนพิการในพื้นที่ไหม?",
      answer:
        "เรามีระบบฐานข้อมูลสวัสดิการชุมชนที่เจ้าหน้าที่สามารถบริหารจัดการข้อมูลเบี้ยยังชีพผ่านระบบหลังบ้านได้โดยตรงครับ",
    },
    // [MERGE]: ดึงคำถามมาตรฐานจาก Template หลัก
    ...localAuthorityService.faqs.filter(
      (f) => f.question.includes("จัดซื้อจัดจ้าง") || f.question.includes("Google Maps"),
    ),
  ],

  // --- Context Data ---
  localContext: {
    marketInsight:
      "ในฐานะเมืองผ่านที่กำลังกลายเป็นเมืองพักผ่อน เว็บไซต์ราชการชุมพรต้องทำหน้าที่เป็น 'Virtual Concierge' ที่ดึงเอกลักษณ์การเกษตรและการท่องเที่ยวออกมาให้เด่นชัด",
    technicalApproach:
      "เน้น Mobile-First และสถาปัตยกรรมแบบ Lightweight เพื่อให้โหลดได้รวดเร็วแม้ในพื้นที่อำเภอห่างไกลที่สัญญาณมือถือไม่สม่ำเสมอ",
    localStrength:
      "ฐานข้อมูลเครือข่ายสหกรณ์การเกษตรที่เข้มแข็ง (ทุเรียน/ปาล์ม/กาแฟ) คือหัวใจหลักที่ต้องนำมาเป็น Content ประชาสัมพันธ์บนเว็บ",
    nicheIndustries: [
      "องค์การบริหารส่วนตำบลและเทศบาล",
      "สหกรณ์การเกษตรในเขตหลังสวนและท่าแซะ",
      "กลุ่มวิสาหกิจชุมชนแปรรูปผลไม้",
      "ธุรกิจท่องเที่ยวเชิงนิเวศปะทิว",
    ],
    painPoints: [
      "ระบบรับเรื่องร้องเรียนเดิมใช้งานยาก",
      "ขาดช่องทางดิจิทัลในการสนับสนุนสินค้าเกษตร",
      "เว็บไซต์เดิมไม่รองรับการแสดงผลบนสมาร์ทโฟน",
    ],
    competitorLevel: "medium",
    socialProof: {
      rating: 4.8,
      reviewCount: 42,
      localClient: "อปท. ชั้นนำในเขตอำเภอหลังสวนและละแม",
    },
    regionalPricing: {
      startPrice: `${localAuthorityService.price} บาท`, // Dynamic Reference
      timeline: "14-21 วัน",
    },
    localSuccessStory: {
      title: "Digital Transformation for SAO",
      result:
        "ช่วยให้ อบต. สามารถประมวลผลเรื่องร้องเรียนได้เร็วขึ้น 50% และผ่านเกณฑ์ประเมิน ITA ระดับ A",
    },
    hyperLocalKeywords: [
      "ทำเว็บไซต์ชุมพร",
      "ระบบ E-Service ท้องถิ่น",
      "ออกแบบเว็บราชการหลังสวน",
      "รับทำเว็บไซต์ อบต.ท่าแซะ",
    ],
  },

  // --- System Metadata ---
  priority: 85,
  districts: ["เมืองชุมพร", "ท่าแซะ", "ปะทิว", "หลังสวน", "ละแม", "พะโต๊ะ", "สวี", "ทุ่งตะโก"],
  keywords: [
    "รับทำเว็บไซต์ อบต",
    "ทำเว็บไซต์เทศบาล",
    "Web Design Chumphon",
    "ระบบ E-Service ท้องถิ่น",
    "Smart City ชุมพร",
  ],
  coordinates: { lat: 10.493, lng: 99.18 },
};
