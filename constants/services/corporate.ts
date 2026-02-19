/**
 * [SERVICE_NODE]: CORPORATE_IDENTITY_HUB v18.0.1 (ENTERPRISE_STANDARD)
 * [STRATEGY]: B2B Trust | High-End Corporate | Zero-Fancy | Universal Theme
 * [MAINTAINER]: AEMZA MACKS
 */

import type { TemplateMasterData } from "@/types";

export const corporateService: TemplateMasterData = {
  id: "AEM-SVC-CP-03",
  title: "Corporate Identity Website | ยกระดับภาพลักษณ์องค์กรสู่สากล",
  description:
    "เว็บไซต์มาตรฐาน Enterprise ที่เน้นความปลอดภัย ความน่าเชื่อถือ และดีไซน์ที่สะท้อนความเป็นผู้นำ รองรับการเติบโตของธุรกิจและสร้างความประทับใจให้นักลงทุน",
  image: "/images/services/corporate-node.webp",
  templateSlug: "corporate",
  category: "business",

  // [PRICING_MASTER]: ราคากลางสำหรับบริการนี้ (พื้นที่อื่นจะดึงค่านี้ไปใช้)
  price: "19,500", // ปรับราคาให้ตรงกับมาตรฐาน B2B (จากเดิม 9,900 อาจดูต่ำไปสำหรับ Corporate)
  priceValue: 19500,
  currency: "THB",
  unit: "เริ่มต้น / โปรเจกต์",

  // [THEME_STANDARD]: ธีมมาตรฐานองค์กร (Royal Slate)
  // ไม่ฉูดฉาด รองรับสายตาได้ดีทั้งกลางวันและกลางคืน
  theme: {
    mode: "system", // รองรับการสลับธีมอัตโนมัติตามอุปกรณ์
    primary: "#0f172a", // Slate 900: สีหลักเข้มขรึม (ใช้แทนสีดำสนิท)
    secondary: "#334155", // Slate 700: สีรองสำหรับหัวข้อ
    background: "#ffffff", // White: พื้นหลังมาตรฐาน (Frontend จะสลับเป็น Dark เองถ้าจำเป็น)
    foreground: "#0f172a", // Slate 900: สีตัวอักษรหลัก
    accent: "#2563eb", // Blue 600: สี Action/Button (สีมาตรฐานธุรกิจ)
    gradient: "none", // [ZERO_FANCY]: ปิด Gradient เพื่อความเรียบง่ายและเป็นทางการสูงสุด
  },

  // [TRUST_SIGNAL]
  clientTrust: "Corporate Standard: มาตรฐานความปลอดภัย ISO/IEC 27001 Ready Design",

  benefits: [
    "Professional CI: ออกแบบตามอัตลักษณ์องค์กรที่ดูมั่นคงและเป็นมืออาชีพ",
    "High Security: โครงสร้างความปลอดภัยระดับ Enterprise ป้องกันการโจมตีทางไซเบอร์",
    "Easy Maintenance: ระบบ CMS ที่ฝ่าย HR หรือ PR ใช้งานได้ทันทีโดยไม่ต้องเขียนโค้ด",
  ],

  coreFeatures: [
    {
      title: "Scalable Architecture",
      description: "โครงสร้างรองรับการขยายตัวและ Traffic มหาศาล",
      icon: "ShieldCheck",
    },
    {
      title: "Investor Portal",
      description: "ระบบข่าวสารนักลงทุนสัมพันธ์และสมัครงานที่ทันสมัย",
      icon: "Building2",
    },
    {
      title: "Enterprise SEO",
      description: "โครงสร้าง Semantic HTML เพื่อการจัดอันดับระดับผู้นำ",
      icon: "Globe",
    },
  ],

  faqs: [
    {
      question: "ทำไมราคาสูงกว่าฟรีแลนซ์?",
      answer:
        "เราขาย 'ความเสถียร' และ 'ภาพลักษณ์' ครับ โครงสร้างเรารองรับมาตรฐานความปลอดภัย PDPA และออกแบบเพื่อสร้าง Trust ให้กับคู่ค้าระดับองค์กร",
    },
    {
      question: "รองรับ PDPA หรือไม่?",
      answer: "รองรับ 100% พร้อมระบบ Cookie Consent และหน้า Privacy Policy มาตรฐาน",
    },
    {
      question: "ออกใบกำกับภาษีได้หรือไม่?",
      answer: "ได้ครับ เราดำเนินการในรูปแบบบริษัท ออกใบกำกับภาษีเต็มรูปแบบได้ทันที",
    },
    {
      question: "ใช้เวลาจัดทำนานเท่าไหร่?",
      answer: "ประมาณ 14-21 วันทำการ ขึ้นอยู่กับความรวดเร็วในการอนุมัติแบบครับ",
    },
    {
      question: "มีบริการหลังการขายหรือไม่?",
      answer:
        "รับประกันดูแลฟรี 3 เดือน พร้อมข้อเสนอ MA (Maintenance Agreement) รายปีเพื่อดูแลความปลอดภัยต่อเนื่องครับ",
    },
    {
      question: "พนักงานอัปเดตเองได้ไหม?",
      answer: "ได้ครับ เรามีระบบหลังบ้าน (CMS) ที่ใช้งานง่ายพร้อมคู่มือสอนการใช้งาน",
    },
    {
      question: "เทคโนโลยีที่ใช้คืออะไร?",
      answer:
        "Next.js ครับ เป็นมาตรฐานเดียวกับเว็บระดับโลกอย่าง Netflix/TikTok เร็วและปลอดภัยกว่า WordPress",
    },
  ],

  keywords: [
    "รับทำเว็บไซต์บริษัท",
    "ออกแบบเว็บไซต์องค์กร",
    "ทำเว็บ Corporate Identity",
    "บริษัทรับทำเว็บไซต์มืออาชีพ",
    "รับทำเว็บ Next.js",
  ],

  priority: 2,
  isFeatured: true,
};
