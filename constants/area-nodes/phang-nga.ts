/**
 * [SERVICE_NODE]: Phang Nga v1.1.5 (FINAL_STRICT_COMPLIANT)
 * [STRATEGY]: Premium Eco-Tourism & Marine Governance
 */
import type { AreaNode } from "@/types";

export const phangNgaNode: AreaNode = {
  slug: "phang-nga",
  province: "พังงา",
  templateSlug: "local-authority",
  title: "รับทำเว็บไซต์พังงา - Smart Marine Governance & Sustainable Tourism Hub",
  description:
    "ยกระดับดิจิทัลแพลตฟอร์มสำหรับ อบต. และเทศบาลในพังงา เน้นระบบความปลอดภัยทางทะเล (Marine Safety 4.0) และโครงสร้างพื้นฐานเพื่อการท่องเที่ยวเชิงนิเวศระดับพรีเมียม",

  seoTitle: "รับทำเว็บไซต์พังงา อบต. เทศบาล - ระบบ Smart City & ITA ยุคใหม่",
  seoDescription:
    "ออกแบบเว็บไซต์ราชการพังงา เขาหลัก เกาะยาว มาตรฐานความปลอดภัยสูง พร้อมระบบเชื่อมโยงข้อมูลท่องเที่ยวและเตือนภัยพิบัติทางทะเลแห่งแรกในอันดามัน",

  heroImage: "/images/areas/phang-nga.webp",
  theme: {
    mode: "light",
    primary: "#00695C",
    secondary: "#009688",
    background: "#F0F4F4",
    foreground: "#002E2C",
    accent: "#FF8F00",
    gradient: "bg-gradient-to-br from-[#00695C] to-[#009688]",
  },

  price: "17,900",
  priceValue: 17900,
  currency: "THB",
  unit: "Standard Package",

  benefits: [
    "Integrated Marine Weather API: แสดงสภาพอากาศชายฝั่งแบบ Real-time รายหาด",
    "Digital Green Certificate Support: รองรับระบบรับรองมาตรฐานสิ่งแวดล้อมสำหรับท้องถิ่น",
    "Multi-lingual Smart Portal: ระบบแปลภาษาอัตโนมัติรองรับนักท่องเที่ยว Scandinavian & European",
  ],

  localContext: {
    marketInsight:
      "GPP ของพังงาขับเคลื่อนด้วย Luxury Tourism 80% เว็บไซต์ต้องรองรับ High-Bandwidth Visuals แต่ต้องโหลดเร็วผ่านระบบ SSR เพื่อประสบการณ์ใช้งานระดับสากล",
    technicalApproach:
      "ใช้ระบบ Hybrid Static-Server Rendering (Next.js 15+) เพื่อให้หน้าจังหวัดพังงาติดอันดับ Top-of-Mind ของผู้บริหารท้องถิ่นที่ค้นหาผ่านมือถือ",

    localStrength:
      "ทรัพยากรธรรมชาติระดับ World-Class (สิมิลัน/สุรินทร์) และภาพลักษณ์ Luxury Quiet Destination",

    nicheIndustries: [
      "สมาคมธุรกิจการท่องเที่ยวจังหวัดพังงา",
      "ศูนย์อนุรักษ์พันธุ์เต่าทะเล (กองทัพเรือ)",
      "อุทยานแห่งชาติหมู่เกาะสิมิลัน/สุรินทร์",
      "วิสาหกิจชุมชนบ้านสามช่องเหนือ",
    ],

    painPoints: [
      "ระบบแจ้งเตือนภัยพิบัติยังไม่เข้าถึงนักท่องเที่ยวแบบ Real-time",
      "ขาดแพลตฟอร์มรวมข้อมูลท่องเที่ยวชุมชนที่อัปเดต",
      "เว็บราชการเดิมไม่รองรับการแสดงผลบนมือถือ",
    ],

    competitorLevel: "high", // Correct literal type

    hyperLocalKeywords: [
      "ทำเว็บไซต์เขาหลัก",
      "เว็บ อบต. คึกคัก",
      "เทศบาลตำบลเกาะยาวใหญ่",
      "ออกแบบเว็บไซต์ราชการท้ายเหมือง",
      "ระบบสารสนเทศเมืองพังงา",
    ],

    socialProof: {
      rating: 4.9,
      reviewCount: 42,
      localClient: "โครงการนำร่อง Smart Village Phang Nga",
    },
  },

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

  // [FIXED]: Added Missing Required Property
  keywords: [
    "รับทำเว็บไซต์พังงา",
    "Web Design Phang Nga",
    "ระบบเตือนภัยสึนามิ",
    "ท่องเที่ยวชุมชนพังงา",
    "เว็บ อบต. มาตรฐาน ITA",
  ],

  coordinates: { lat: 8.4501, lng: 98.5255 },
};
