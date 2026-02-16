/**
 * [SERVICE_NODE]: Phang Nga v1.0.0 (Synced)
 * [STRATEGY]: Premium Eco-Tourism & Safety - ยกระดับมาตรฐานความปลอดภัยท่องเที่ยวและสิ่งแวดล้อม รองรับนักท่องเที่ยวคุณภาพสูง
 * [MARKET]: อบต./เทศบาล แหล่งท่องเที่ยว (เขาหลัก, เกาะยาว), อุทยานแห่งชาติ และชุมชนท่องเที่ยวเชิงนิเวศ
 */
import type { AreaNode } from "@/types";

export const phangNgaNode: AreaNode = {
  // --- Basic Identity ---
  slug: "web-design-phang-nga-local-authority",
  province: "พังงา",
  templateSlug: "local-authority",
  title: "รับทำเว็บไซต์พังงา - ยกระดับท้องถิ่นสู่ Smart Tourism & Green City",
  description:
    "ออกแบบเว็บไซต์หน่วยงานราชการพังงา มาตรฐานสากล รองรับนักท่องเที่ยว High-end เชื่อมโยงระบบความปลอดภัยทางทะเล และการจัดการสิ่งแวดล้อมที่ยั่งยืน",

  // --- SEO Metadata ---
  seoTitle: "รับทำเว็บไซต์พังงา อบต. เทศบาล - AEMDEVWEB บริการเว็บราชการเมืองท่องเที่ยว",
  seoDescription:
    "ทำเว็บไซต์ อบต. เทศบาล พังงา เขาหลัก ตะกั่วป่า ระบบ ITA โปร่งใส พร้อมฟังก์ชันแจ้งเตือนภัยสึนามิและพยากรณ์อากาศทางทะเล",

  // --- Visual & Theme ---
  heroImage: "/images/areas/phang-nga.webp",
  theme: {
    mode: "light",
    primary: "#00695C", // Deep Teal (สีน้ำทะเลลึกและป่าโกงกาง)
    secondary: "#4DB6AC", // Turquoise (น้ำทะเลชายฝั่ง/เกาะสิมิลัน)
    background: "#F1F8E9",
    foreground: "#1B5E20",
    accent: "#FFAB00", // Sunset Gold
    gradient: "bg-gradient-to-br from-teal-50 to-green-50",
  },

  // --- Pricing Strategy ---
  price: "17,900",
  priceValue: 17900,
  currency: "THB",
  unit: "เริ่มต้น",

  // --- Trust Signals ---
  clientTrust: "มาตรฐานความปลอดภัยข้อมูลสูงสุด รองรับนักท่องเที่ยวระดับ Premium",

  // --- Localized Benefits ---
  benefits: [
    "ระบบแจ้งเตือนภัยพิบัติและสึนามิ (Tsunami Alert Integration) เชื่อมต่อข้อมูลส่วนกลาง",
    "ฟังก์ชันส่งเสริมการท่องเที่ยวชุมชน (CBT) กระจายรายได้สู่ฐานราก",
    "ระบบร้องเรียนออนไลน์ Multi-language รองรับนักท่องเที่ยวต่างชาติ",
  ],

  // --- Core Features ---
  coreFeatures: [
    {
      title: "Marine Safety",
      description: "ข้อมูลธงแดง/เขียว และสภาพอากาศทางทะเลแบบ Real-time",
      icon: "LifebuoyIcon",
    },
    {
      title: "Eco-Conscious",
      description: "ระบบรณรงค์และแจ้งจุดทิ้งขยะอันตราย รักษาภาพลักษณ์เมืองสีเขียว",
      icon: "GlobeAmericasIcon",
    },
    {
      title: "Local Heritage",
      description: "Digital Museum นำเสนอประวัติศาสตร์เหมืองแร่และวัฒนธรรมบาบ๋า",
      icon: "LibraryIcon",
    },
  ],

  // --- Localized FAQs ---
  faqs: [
    {
      question: "เว็บไซต์สามารถเชื่อมต่อกับกล้อง CCTV เพื่อดูสภาพการจราจร/น้ำท่วมได้ไหม?",
      answer:
        "สามารถทำได้ครับ เรามีระบบ Widget เชื่อมต่อ IP Camera สาธารณะ เพื่อแสดงผลบนหน้าเว็บไซต์ให้ประชาชนวางแผนการเดินทางได้",
    },
    {
      question: "รองรับการแสดงผลบน Tablet/iPad ได้ดีแค่ไหน?",
      answer:
        "ดีเยี่ยมครับ เพราะนักท่องเที่ยวส่วนใหญ่พกพา Tablet เราออกแบบ Responsive Design ให้ปรับขนาดอัตโนมัติทุกหน้าจอ",
    },
  ],

  // --- Context Data ---
  localContext: {
    marketInsight:
      "พังงามี GPP สูงแต่รายได้กระจุกตัว เว็บไซต์ท้องถิ่นต้องเป็นเครื่องมือกระจายโอกาส โดยเฉพาะการโปรโมท 'เมืองสวยในหุบเขา' และวิถีชุมชนชาวเล เพื่อดึงนักท่องเที่ยวจากชายหาดเข้าสู่ชุมชน",
    technicalApproach:
      "เน้นความเร็วและความเสถียร (Performance Optimization) เพราะนักท่องเที่ยวคาดหวังประสบการณ์ใช้งานระดับสากล",
    localStrength:
      "ทรัพยากรธรรมชาติระดับโลกและความสงบ (Luxury Quiet) เป็นจุดขายที่แตกต่างจากภูเก็ต",
    nicheIndustries: [
      "เทศบาลตำบลคึกคัก",
      "อบต.เกาะยาว",
      "เทศบาลเมืองตะกั่วป่า",
      "กลุ่มท่องเที่ยวชุมชนบ้านสามช่องเหนือ",
    ],
    painPoints: [
      "การสื่อสารข้อมูลภัยพิบัติให้ทันท่วงที",
      "การจัดการขยะในแหล่งท่องเที่ยว",
      "ขาดช่องทางจำหน่ายสินค้าชุมชนออนไลน์",
    ],
    competitorLevel: "medium",

    socialProof: {
      rating: 4.8,
      reviewCount: 39,
      localClient: "เทศบาลตำบลในย่านเขาหลัก",
    },
    regionalPricing: {
      startPrice: "17,900 บาท",
      timeline: "ส่งมอบงานภายใน 20-25 วัน",
    },
    localSuccessStory: {
      title: "Safety First Tourism",
      result:
        "ระบบแจ้งเตือนธงแดงชายหาดผ่านเว็บไซต์ ช่วยลดอุบัติเหตุทางน้ำในพื้นที่รับผิดชอบได้จริง",
    },
    hyperLocalKeywords: [
      "ทำเว็บไซต์พังงา",
      "อบต.ท้ายเหมือง",
      "เทศบาลเมืองพังงา",
      "เว็บราชการตะกั่วทุ่ง",
      "ออกแบบเว็บไซต์คุระบุรี",
      "ระบบสารสนเทศทับปุด",
    ],
  },

  // --- System Metadata ---
  priority: 88,
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
    "รับทำเว็บไซต์เขาหลัก",
    "Web Design Phang Nga",
    "Smart Tourism พังงา",
    "ระบบเตือนภัยสึนามิ",
    "ท่องเที่ยวชุมชนพังงา",
  ],
  coordinates: { lat: 8.4501, lng: 98.5255 },
};
