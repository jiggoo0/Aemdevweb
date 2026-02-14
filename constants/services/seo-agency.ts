/**
 * [SERVICE_NODE]: SEO_AUTHORITY_ENGINE v17.9.85 (HARDENED)
 * [STRATEGY]: Technical Excellence | Content Authority | Sustainable ROI
 * [MAINTAINER]: AEMZA MACKS
 */

import type { TemplateMasterData } from "@/types";

export const seoAgencyService: TemplateMasterData = {
  id: "AEM-SVC-SEO-07",
  title: "ดันอันดับ Google & รับทำ SEO ครบวงจร | สร้างการเติบโตแบบยั่งยืน",
  description:
    "เปลี่ยนเว็บไซต์ให้เป็นเครื่องมือหาเงินระยะยาว ปรับแต่งให้ Google รัก ดันอันดับขึ้นหน้าแรกด้วยโครงสร้าง Technical SEO และ Content Authority โดย นายเอ็มซ่ามากส์",
  image: "/images/service/seo-agency-node.webp",
  templateSlug: "seo-agency",
  category: "business",
  price: "19,500",
  priceValue: 19500,
  currency: "THB",
  unit: "รายเดือน",

  // [HARDENED_THEME]: ใช้สี Emerald Green เพื่อสื่อถึงการเติบโต (Growth) และความมั่งคั่ง
  theme: {
    primary: "#10b981", // Emerald 500
    secondary: "#064e3b", // Emerald 900
    background: "bg-slate-950",
    accent: "#34d399",
    gradient: "from-emerald-500/15 via-transparent to-transparent",
  },

  // [TRUST_SIGNALS]: เน้นย้ำผลลัพธ์ที่วัดผลได้จริง (Data-Driven Trust)
  clientTrust: "พิสูจน์ผลลัพธ์ด้วยการดันคีย์เวิร์ดทำเงินขึ้นหน้าแรกมาแล้วกว่า 500+ โปรเจกต์",

  // [HUMAN_STORYTELLING]: เน้นการเลิกพึ่งพาค่าโฆษณา (Ad-Independence)
  benefits: [
    "Ad-Independence Strategy: เลิกเผางบโฆษณาทิ้งรายวัน สร้าง Organic Traffic ที่ไหลเข้าเว็บอย่างต่อเนื่องแม้นอนหลับ",
    "Technical Core Hardening: ปรับปรุงโครงสร้างเว็บระดับ Code-Level ให้สมบูรณ์แบบที่สุดตามหลัก Core Web Vitals 2026",
    "High-Intent Conversion: เราไม่ได้ดันแค่อันดับ แต่เราเลือกคีย์เวิร์ดที่ 'ปิดการขายได้จริง' เพื่อ ROI สูงสุดของธุรกิจคุณ",
  ],

  coreFeatures: [
    {
      title: "Technical SEO Audit",
      description:
        "รื้อโครงสร้างและจัดการ JavaScript/CSS ที่ไม่จำเป็น เพื่อให้เว็บโหลดไวและ Bot เก็บข้อมูลได้ 100%",
      icon: "Zap",
    },
    {
      title: "Semantic Content Authority",
      description:
        "วางแผนเนื้อหาแบบ Topic Cluster เพื่อสร้างความน่าเชื่อถือ (EEAT) ให้ Google ยอมรับว่าคุณคือเบอร์ 1",
      icon: "Search",
    },
    {
      title: "Real-time Data Dashboard",
      description:
        "ระบบรายงานผลที่เชื่อมต่อกับ Search Console และ GA4 สรุปยอด Conversion ให้เห็นแบบชัดๆ",
      icon: "BarChart",
    },
  ],

  faqs: [
    {
      question: "ทำ SEO นานไหมกว่าจะเห็นผล?",
      answer:
        "โดยปกติจะเริ่มเห็นการขยับของอันดับใน 2-3 เดือนแรกครับ แต่ผลลัพธ์ที่ชัดเจนและยั่งยืนจะอยู่ในช่วง 6 เดือนขึ้นไป ซึ่งจะเป็น Traffic คุณภาพที่อยู่กับคุณไปตลอด",
    },
    {
      question: "การันตีอันดับที่ 1 ไหม?",
      answer:
        "ในโลก SEO ไม่มีใครการันตีที่ 1 ได้ 100% ครับ แต่เราการันตี 'การเติบโตของ Traffic และ Conversion' ด้วยเทคนิคที่ถูกต้องตามกฎ Google (White Hat SEO)",
    },
  ],

  keywords: [
    "รับทำ SEO",
    "ดันอันดับ Google",
    "รับทำเว็บไซต์ SEO",
    "จ้างทำ SEO ราคาถูก",
    "ทำเว็บติดหน้าแรก",
    "SEO Agency Thailand",
  ],

  priority: 0,
  isFeatured: true,
};
