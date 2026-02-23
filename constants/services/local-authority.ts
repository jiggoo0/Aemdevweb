/**
 * [SERVICE_NODE]: LOCAL_AUTHORITY_ENGINE v18.0.2 (COMPLIANCE_ENFORCED)
 * [STRATEGY]: Civic Trust | Fixed-Architecture | ITA-Ready | Procedural Green Theme
 * [MAINTAINER]: AEMZA MACKS
 */

import type { TemplateMasterData } from "@/types";

export const localAuthorityService: TemplateMasterData = {
  id: "AEM-SVC-LS-10",
  title: "Civic Engagement Platform | ระบบสารสนเทศท้องถิ่นมาตรฐาน ITA/OIT",
  description:
    "โซลูชันระบบเว็บไซต์บนสถาปัตยกรรม Next.js ที่ออกแบบตามคู่มือมาตรฐานเว็บไซต์ภาครัฐ (Government Website Standard) เน้นโครงสร้างที่โปร่งใส ตรวจสอบง่าย และรองรับการประเมิน ITA อย่างเต็มรูปแบบ ระบบถูกล็อคโครงสร้างแบบ Fixed-Grid เพื่อรักษาความเสถียรของข้อมูลราชการ",
  image: "/images/services/local-node.webp",
  templateSlug: "local-authority",
  category: "business",

  // [PRICING_MASTER]: ราคากลางสำหรับ Standard Civic Module
  price: "12,900",
  priceValue: 12900,
  currency: "THB",
  unit: "เริ่มต้น / ระบบมาตรฐาน",

  theme: {
    mode: "light", 
    primary: "#047857", // Emerald 700: สีเขียวข้าราชการมาตรฐาน
    secondary: "#064e3b", 
    background: "#fafafa", 
    foreground: "#09090b", 
    accent: "#d97706", 
    gradient: "from-[#047857]/5 via-transparent to-transparent",
  },

  // [TRUST_SIGNAL]
  clientTrust:
    "Procedural Integrity: โครงสร้างรองรับหมวดหมู่จัดซื้อจัดจ้าง และการเปิดเผยข้อมูลสาธารณะตามระเบียบพัสดุ",

  benefits: [
    "Compliance Excellence: ระบบถูกวางโครงสร้างตามเกณฑ์การประเมิน ITA (Integrity and Transparency Assessment) ช่วยให้หน่วยงานได้คะแนนการประเมินในระดับสูงโดยไม่ต้องปรับแก้โค้ดใหม่",
    "Civic accessibility: การออกแบบตามหลัก Universal Design ที่ประชาชนทุกช่วงวัยเข้าถึงข้อมูลข่าวสารได้ง่าย รวดเร็ว และรองรับการแสดงผลบนสมาร์ทโฟน 100%",
    "Information Sovereignty: ระบบจัดการเนื้อหาแบบแยกส่วน (Modular CMS) ที่ช่วยให้เจ้าหน้าที่อัปเดตประกาศจัดซื้อจัดจ้างหรือข่าวประชาสัมพันธ์ได้ทันที โดยไม่กระทบโครงสร้างหลัก",
  ],

  coreFeatures: [
    {
      title: "Standard E-Service Hub",
      description: "ระบบรับเรื่องร้องเรียนและแบบฟอร์มติดต่อราชการมาตรฐาน (3 รูปแบบหลัก) เพื่อลดขั้นตอนการเดินทางของประชาชน",
      icon: "ShieldCheck",
    },
    {
      title: "Local SEO Core",
      description: "ระบบ Indexing ข้อมูลสถานที่สำคัญและจุดบริการประชาชน เพื่อการแสดงผลอันดับ 1 บน Google Maps ในพื้นที่",
      icon: "MapPin",
    },
    {
      title: "Transparency Archive",
      description: "ระบบจัดเก็บเอกสารและประกาศภาครัฐที่แยกหมวดหมู่ชัดเจน ค้นหาง่าย และรองรับไฟล์มาตรฐานทุกรูปแบบ",
      icon: "FileText",
    },
  ],

  faqs: [
    {
      question: "รองรับมาตรฐาน ITA/OIT แค่ไหน?",
      answer:
        "เราวางเมนูและโครงสร้างพื้นฐานตามตัวชี้วัดของ ITA ครบถ้วนครับ หน่วยงานสามารถนำไปเติมข้อมูลตามหัวข้อที่กำหนดเพื่อรับการประเมินได้ทันทีครับ",
    },
    {
      question: "ทำไมถึงไม่ควรเปลี่ยน Layout หน้าเว็บ?",
      answer:
        "เนื่องจากโครงสร้างนี้ถูกออกแบบตาม CX (Citizen Experience) สำหรับประชาชนและเกณฑ์มาตรฐานภาครัฐ การคง Layout เดิมไว้จะช่วยรักษาความเร็วในการโหลดข้อมูลและความปลอดภัยของระบบสารสนเทศครับ",
    },
    {
      question: "จัดทำแบบฟอร์ม E-Service เพิ่มเติมได้ไหม?",
      answer:
        "ในแพ็กเกจมาตรฐานเราจัดเตรียมแบบฟอร์มหลักให้ 3 ชุดครับ หากต้องการระบบบริการประชาชนที่ซับซ้อนกว่าปกติ (เช่น ระบบชำระภาษี) สามารถแจ้งเพื่อประเมินเป็นโมดูลเสริม (Add-on) ได้ครับ",
    },
    {
      question: "ดำเนินการจัดซื้อจัดจ้างในนามนิติบุคคลได้ไหม?",
      answer:
        "ได้แน่นอนครับ เราเตรียมใบเสนอราคา ใบวางบิล และเอกสารประกอบการตรวจรับงานตามระเบียบพัสดุไว้อย่างครบถ้วนเพื่อความสะดวกของเจ้าหน้าที่ครับ",
    },
    {
      question: "มีค่าดูแลรายปีสูงไหม?",
      answer:
        "ค่าดูแลระบบรายปีอยู่ในระดับประหยัด ซึ่งครอบคลุมค่าเซิร์ฟเวอร์ความเร็วสูง โดเมนเนมราชการ (.go.th) และการดูแลความปลอดภัยให้พร้อมใช้งานตลอด 24 ชั่วโมงครับ",
    },
  ],

  keywords: [
    "รับทำเว็บไซต์ อบต เทศบาล มาตรฐาน ITA",
    "ทำเว็บราชการ Next.js",
    "ระบบ E-Service ท้องถิ่น",
    "รับทำ Local SEO ธุรกิจในพื้นที่",
    "จ้างทำเว็บไซต์ อปท",
  ],

  priority: 3,
  isFeatured: true,
};
