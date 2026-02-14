/**
 * [SERVICE_NODE]: LOCAL_DOMINATION_ENGINE v17.9.106 (REBRANDED)
 * [STRATEGY]: Hyper-Local SEO | Google Maps Marketing | Emerald Trust Theme
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { TemplateMasterData } from "@/types";

export const localAuthorityService: TemplateMasterData = {
  id: "AEM-SVC-LS-10",
  title: "Local SEO & Google Maps Marketing | ครองตลาดท้องถิ่นด้วยหมุดธุรกิจ",
  description:
    "อย่าปล่อยให้ลูกค้าหลุดมือไปหาคู่แข่ง! ยึดพื้นที่บน Google Maps และหน้าค้นหาด้วยกลยุทธ์ Local SEO ที่แม่นยำ เปลี่ยนยอดค้นหาใกล้ตัวให้เป็นยอดขายหน้าร้านทันที",
  image: "/images/service/local-node.webp",
  templateSlug: "local-authority",
  category: "business",
  price: "6,900",
  priceValue: 6900,
  currency: "THB",
  unit: "พื้นที่ / สาขา",

  // [GLOBAL_STANDARD_THEME]: "Emerald Geo-Trust"
  // สีเขียวมรกต (Emerald) สื่อถึง: แผนที่ (Maps), การเติบโต (Growth), และความน่าเชื่อถือ (Trust)
  theme: {
    primary: "#059669", // Emerald 600: สีหลักที่ดูเป็นมืออาชีพและสบายตา (มาตรฐาน SaaS ทั่วโลก)
    secondary: "#064e3b", // Emerald 900: สีเขียวเข้มเกือบดำ สำหรับ Text หรือ Header ให้ดูหนักแน่น
    background: "bg-white", // Clean White: พื้นหลังขาวสะอาด เพื่อให้แผนที่และรูปภาพโดดเด่น
    accent: "#34d399", // Emerald 400: สีเขียวสว่างสำหรับปุ่ม Call-to-Action (Clickable)
    gradient: "from-emerald-600/10 via-transparent to-transparent", // Gradient แบบ Subtle ไม่รกตา
  },

  clientTrust: "โซลูชันที่ช่วยให้ธุรกิจท้องถิ่นกว่า 500+ แห่ง เติบโตอย่างยั่งยืนบน Google Maps",

  benefits: [
    "Dominate Local Search: ยึดครองพื้นที่ 'Map Pack' (3 อันดับแรกบนแผนที่) เมื่อลูกค้าค้นหาบริการในเขตของคุณ",
    "Trust & Reputation: สร้างความน่าเชื่อถือด้วยเว็บไซต์ที่เชื่อมโยงกับหมุดปักอย่างสมบูรณ์ ลูกค้าเห็นปุ๊บ กล้าโทรหาทันที",
    "Zero-Ad Dependency: สร้างยอดขายออร์แกนิคระยะยาว โดยไม่ต้องพึ่งพาการยิงแอด Facebook ที่แพงขึ้นทุกวัน",
  ],

  coreFeatures: [
    {
      title: "Google Business Profile Audit",
      description:
        "ปรับแต่งโปรไฟล์ธุรกิจให้ครบถ้วนตามกฎ Google 100% (รูปภาพ, เวลาทำการ, หมวดหมู่) เพื่อคะแนน Quality Score สูงสุด",
      icon: "MapPin", // สื่อถึงจุดพิกัดร้านค้า
    },
    {
      title: "Hyper-Local Content Strategy",
      description:
        "ทำ SEO เจาะจงชื่อย่าน/อำเภอ/จังหวัด ในเว็บไซต์ เพื่อดักจับลูกค้าที่ค้นหาด้วยคำว่า 'ใกล้ฉัน' (Near Me)",
      icon: "Globe", // สื่อถึงเครือข่ายพื้นที่และการค้นหา
    },
    {
      title: "Review Management System",
      description:
        "วางระบบและสคริปต์ช่วยตอบรีวิว เพื่อสร้าง Engagement และรักษาเรตติ้ง 5 ดาว ให้ลูกค้าใหม่มั่นใจ",
      icon: "Star", // สื่อถึงคุณภาพและรีวิว
    },
  ],

  faqs: [
    {
      question: "ทำไมต้องทำ Local SEO ทั้งที่มีเพจ Facebook?",
      answer:
        "พฤติกรรมลูกค้าเปลี่ยนไปครับ เวลาคนต้องการสินค้า 'ด่วน' หรือ 'ใกล้ตัว' เขาจะค้นหาบน Google Maps ไม่ใช่ Facebook การทำ Local SEO คือการดักลูกค้าระดับ High Intent ที่พร้อมควักเงินจ่ายทันทีครับ",
    },
    {
      question: "นานแค่ไหนกว่าหมุดจะขึ้นอันดับแรก?",
      answer:
        "ขึ้นอยู่กับการแข่งขันในพื้นที่ครับ แต่ด้วยโครงสร้างที่เราวางให้ (Standard Optimization) โดยปกติจะเริ่มเห็นผลการเปลี่ยนแปลง Impression และการโทรหาภายใน 30-60 วันครับ",
    },
  ],

  keywords: [
    "รับทำ Local SEO",
    "รับปักหมุด Google Maps",
    "ดูแล Google Business Profile",
    "ทำการตลาดร้านอาหาร",
    "เพิ่มยอดขายหน้าร้าน",
    "ทำเว็บร้านค้าชุมชน",
  ],

  priority: 3,
  isFeatured: true,
};
