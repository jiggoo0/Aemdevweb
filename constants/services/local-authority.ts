/**
 * [SERVICE_NODE]: LOCAL_AUTHORITY_ENGINE v18.0.1 (GOV_BUSINESS_HYBRID)
 * [STRATEGY]: Hyper-Local Trust | Government Standard | SME Growth
 * [MAINTAINER]: AEMZA MACKS
 */

import type { TemplateMasterData } from "@/types";

export const localAuthorityService: TemplateMasterData = {
  id: "AEM-SVC-LS-10",
  title: "Local Authority & Business Solutions | ยกระดับความน่าเชื่อถือท้องถิ่นสู่สากล",
  description:
    "โซลูชันเว็บไซต์และการตลาดท้องถิ่นสำหรับหน่วยงานราชการ (อบต./เทศบาล) และธุรกิจ SME ที่ต้องการสร้างความเชื่อถือสูงสุดในพื้นที่ ยึดครองอันดับค้นหาบน Google Maps และให้บริการประชาชนด้วยมาตรฐานดิจิทัลภาครัฐ",
  image: "/images/services/local-node.webp",
  templateSlug: "local-authority",
  category: "business",

  // [PRICING_MASTER]: ราคากลางสำหรับบริการท้องถิ่น/ราชการ (พื้นที่อื่นจะดึงค่านี้ไปใช้)
  price: "12,900", // ปรับราคาให้ครอบคลุมงานราชการที่มีเอกสารซับซ้อนกว่า SME ปกติ
  priceValue: 12900,
  currency: "THB",
  unit: "เริ่มต้น / โครงการ",

  // [THEME_STANDARD]: ธีม Civil Emerald (Green/Amber)
  // สื่อถึงการพัฒนา ความมั่นคง และความใกล้ชิดชุมชน
  theme: {
    mode: "light", // เน้นธีมสว่างเพื่อความโปร่งใส (Transparency)
    primary: "#047857", // Emerald 700: สีเขียวข้าราชการ/ความมั่นคง
    secondary: "#064e3b", // Emerald 900: สีเขียวเข้ม
    background: "#fafafa", // Zinc 50: พื้นหลังสะอาดตา อ่านง่าย
    foreground: "#09090b", // Zinc 950: ตัวอักษรสีเข้มชัดเจน
    accent: "#d97706", // Amber 600: สีส้มอิฐ/ดินเผา (ตัดกันเพื่อความโดดเด่นแต่สุภาพ)
    gradient: "from-[#047857]/5 via-transparent to-transparent",
  },

  // [TRUST_SIGNAL]
  clientTrust:
    "Government & Local Standard: มาตรฐานความปลอดภัยข้อมูลและ ITA ที่ยอมรับโดยหน่วยงานท้องถิ่น",

  benefits: [
    "Public Trust: สร้างภาพลักษณ์องค์กรที่ทันสมัย โปร่งใส และเข้าถึงง่ายสำหรับประชาชนทุกช่วงวัย",
    "Local Dominance: ยึดพื้นที่การค้นหาบน Google Maps (SEO) เหนือคู่แข่งในพื้นที่เดียวกัน",
    "Compliance Ready: โครงสร้างเว็บรองรับมาตรฐาน ITA/OIT และระเบียบราชการอย่างครบถ้วน",
  ],

  coreFeatures: [
    {
      title: "E-Service Gateway",
      description: "ระบบบริการออนไลน์รับเรื่องร้องเรียนหรือติดต่อราชการ ลดขั้นตอนเอกสาร",
      icon: "ShieldCheck",
    },
    {
      title: "Local SEO Structure",
      description: "โครงสร้างดันอันดับค้นหาท้องถิ่น (Local SEO) ให้ติดหน้าแรกเมื่อคนในพื้นที่ค้นหา",
      icon: "MapPin",
    },
    {
      title: "Smart CMS",
      description: "ระบบจัดการเนื้อหาที่เจ้าหน้าที่ใช้งานง่าย อัปเดตข่าวสาร/จัดซื้อจัดจ้างได้เอง",
      icon: "FileText",
    },
  ],

  faqs: [
    {
      question: "เหมาะกับหน่วยงานราชการไหม?",
      answer:
        "เหมาะมากครับ เราออกแบบตามมาตรฐานเว็บภาครัฐ (Government Website Standard) รองรับการประเมิน ITA และ OIT ครบถ้วน",
    },
    {
      question: "ดำเนินการตามระเบียบจัดซื้อจัดจ้างได้ไหม?",
      answer:
        "ได้ครับ ผมเข้าใจระเบียบพัสดุ สามารถจัดเตรียมเอกสารใบเสนอราคา/TOR และตรวจรับงานตามงวดงานราชการได้ครับ",
    },
    {
      question: "ช่วยทำ Google Maps ด้วยไหม?",
      answer:
        "รวมอยู่ในบริการครับ ผมจะปรับปรุงหมุดปัก (GMB) ให้ถูกต้องและดันอันดับให้คนในพื้นที่ค้นหาเจอเป็นที่แรกครับ",
    },
    {
      question: "ดูแลหลังการขายยังไง?",
      answer:
        "มีประกันดูแลระบบฟรี 1 ปี พร้อมสอนเจ้าหน้าที่ใช้งานจนคล่อง และมีบริการต่อสัญญา MA รายปีครับ",
    },
    {
      question: "ธุรกิจทั่วไปใช้แพ็กเกจนี้ได้ไหม?",
      answer:
        "ได้ครับ เหมาะกับธุรกิจที่มีหน้าร้านหรือให้บริการในท้องถิ่น เช่น คลินิก, ร้านวัสดุก่อสร้าง, โรงเรียนกวดวิชา ที่ต้องการความน่าเชื่อถือสูง",
    },
    {
      question: "รองรับการเปิดบนมือถือไหม?",
      answer:
        "100% ครับ ประชาชนส่วนใหญ่เข้าถึงผ่านมือถือ เราออกแบบ Mobile-First ให้ใช้งานง่ายที่สุด",
    },
    {
      question: "มีค่าใช้จ่ายรายปีไหม?",
      answer:
        "ปีแรกฟรีครับ ปีถัดไปมีค่าต่ออายุโดเมน/โฮสติ้งและดูแลระบบ (Maintenance) ในราคาประหยัดครับ",
    },
  ],

  keywords: [
    "รับทำเว็บไซต์ อบต",
    "ทำเว็บเทศบาล",
    "รับทำ Local SEO",
    "ออกแบบเว็บไซต์ราชการ",
    "จ้างทำเว็บธุรกิจท้องถิ่น",
  ],

  priority: 3, // Priority รองจาก Corporate/Hotel แต่สำคัญสำหรับตลาดต่างจังหวัด
  isFeatured: true,
};
