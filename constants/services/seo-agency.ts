/**
 * [SERVICE_NODE]: SEO_AUTHORITY_ENGINE v17.9.86 (HARDENED_REFACTOR)
 * [STRATEGY]: Technical Excellence | Design Token Integration | Entity-based SEO
 * [MAINTAINER]: AEMZA MACKS
 */

import type { TemplateMasterData } from "@/types";

export const seoAgencyService: TemplateMasterData = {
  id: "AEM-SVC-SEO-07",
  title: "Technical SEO & Content Authority | วิศวกรรมการขยาย Traffic ระดับสูง",
  description:
    "ยกระดับเว็บไซต์สู่การเป็น Authority Node ในอุตสาหกรรมของคุณ ด้วยการจูนโครงสร้างระดับ Code-Level และการวาง Semantic Content เพื่อ ROI ที่วัดผลได้จริง",
  image: "/images/service/seo-agency-node.webp",
  templateSlug: "seo-agency",
  category: "business",
  price: "19,500",
  priceValue: 19500,
  currency: "THB",
  unit: "รายเดือน",

  // [REFACTORED_THEME]: ใช้ Semantic Mapping แทน Hardcoded Hex
  // ค่าเหล่านี้จะถูกแมพเข้ากับ CSS Variables ใน globals.css ทันที
  theme: {
    token: "emerald", // สื่อถึง Growth & Sustainability
    primary: "var(--brand-primary)",
    secondary: "var(--brand-secondary)",
    background: "bg-slate-950",
    accent: "var(--brand-accent)",
    // ใช้ GPU-Accelerated Gradient
    gradient: "from-brand-primary/15 via-transparent to-transparent",
  },

  clientTrust: "Proven Authority: ดัน High-Intent Keywords ขึ้นหน้าแรกสำเร็จกว่า 500+ คีย์เวิร์ด",

  benefits: [
    "Zero-Ad Dependency: สร้างกระแส Traffic คุณภาพที่ไหลเข้าสู่ระบบอย่างยั่งยืนโดยไม่ต้องพึ่งพางบโฆษณา (PPC) ในระยะยาว",
    "Technical Core Hardening: ปรับจูนโครงสร้างเว็บไซต์ผ่านหลัก Core Web Vitals 2026 เพื่อประสิทธิภาพการเก็บข้อมูลของ Googlebot ที่สูงสุด",
    "Conversion-Centric Strategy: โฟกัสการทำอันดับบนคีย์เวิร์ดที่มีแรงจูงใจในการซื้อสูง (High-Commercial Intent) เพื่อเปลี่ยน Traffic เป็นรายได้",
  ],

  coreFeatures: [
    {
      title: "Deep Technical Audit",
      description:
        "วิเคราะห์ระบบ Rendering, JavaScript Payload และ DOM Structure เพื่อขจัดคอขวดที่ขัดขวางการจัดอันดับ",
      icon: "Code2", // เปลี่ยน Icon ให้ดู Technical ขึ้น
    },
    {
      title: "Topic Cluster Architecture",
      description:
        "วางโครงสร้างเนื้อหาแบบ Semantic Network เพื่อสร้าง Content Authority ที่ Google ไว้วางใจ",
      icon: "Network",
    },
    {
      title: "Data Observability",
      description:
        "Dashboard รายงานผลแบบ Real-time วิเคราะห์เจาะลึกทั้ง Search Intent และ Conversion Tracking",
      icon: "Activity",
    },
  ],

  faqs: [
    {
      question: "ทำไมต้องเน้น Technical SEO มากกว่าการแค่เขียนบทความ?",
      answer:
        "เพราะโครงสร้างพื้นฐานที่แย่จะทำให้เนื้อหาที่ดีที่สุดถูกมองข้ามครับ การทำ Technical SEO เปรียบเสมือนการสร้างถนนที่ราบรื่นเพื่อให้ Googlebot เข้าถึงเนื้อหาของคุณได้ง่ายและไวที่สุด",
    },
    {
      question: "กลยุทธ์ Content Authority ต่างจากการเขียนบทความทั่วไปอย่างไร?",
      answer:
        "เราไม่ได้เขียนเพื่อเอาปริมาณครับ แต่เราวางระบบ Entity Linking และ Topic Clusters เพื่อบอก Google ว่าเว็บไซต์ของคุณคือแหล่งข้อมูลที่น่าเชื่อถือที่สุดในหัวข้อนั้นๆ",
    },
  ],

  keywords: [
    "Technical SEO Specialist",
    "รับทำ SEO สายขาว",
    "ดันอันดับ Google หน้าแรก",
    "Content Authority Strategy",
    "SEO Agency Thailand",
    "ปรับแต่ง Core Web Vitals",
  ],

  priority: 1, // ปรับ Priority ให้สูงขึ้นสำหรับหน้า Feature
  isFeatured: true,
};
