/** @format */
import { SeoServiceItem } from "@/types/seo";

/**
 * [SEO SERVICE NODE]: Core Web Vitals Speed
 * พิกัดการจูนเครื่องยนต์เว็บไซต์ให้โหลดไวทะลุไมล์ การันตีผลลัพธ์ระดับ Green Zone
 * ควบคุมมาตรฐานโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB 2026)
 */
export const coreWebVitalsSpeedData: SeoServiceItem = {
  id: "seo-speed-002",
  slug: "core-web-vitals-speed",
  title: "Core Web Vitals Speed",
  subtitle: "จูนความเร็วระบบระดับ LCP < 0.8 วินาที การันตีคะแนนสีเขียว",
  description:
    "ยกระดับสมรรถนะเว็บไซต์ให้โหลดไวที่สุดในพิกัด 0.4 - 0.8 วินาที ผ่านเกณฑ์มาตรฐาน Google Core Web Vitals ทุกมิติ เพื่อประสบการณ์ผู้ใช้งานที่ดีเยี่ยมและอันดับการค้นหาที่เหนือกว่า",
  iconName: "Zap",
  painPoints: [
    "ผู้ใช้งานกดออกจากเว็บทันที (Bounce Rate พุ่ง) เพราะโหลดข้อมูลช้าเกินไป",
    "คะแนนประสิทธิภาพใน Google PageSpeed เป็นสีแดงหรือเหลือง ไม่ผ่านเกณฑ์สากล",
    "หน้าเว็บขยับ (Layout Shift) ขณะโหลดบนมือถือ ทำให้ลูกค้ากดผิดและเสียความรู้สึก",
    "อันดับ SEO ร่วงลงอย่างต่อเนื่องเนื่องจากระบบความเร็วไม่ผ่านเกณฑ์การจัดอันดับปี 2026",
  ],
  features: [
    "LCP Optimization: จูนการแสดงผล Largest Contentful Paint ให้ต่ำกว่า 0.8 วินาที",
    "CLS Zero Mastery: กำจัดปัญหาเนื้อหาขยับ (Layout Shift) ให้กลายเป็นศูนย์ถาวร",
    "Next-Gen Image Processing: ระบบรีไซส์และบีบอัดภาพเป็น WebP/Avif อัตโนมัติ",
    "Script Strategic Loading: คัดกรองและจัดลำดับการโหลด JS/CSS ที่จำเป็นเท่านั้น",
  ],
  benefits: [
    {
      title: "User Retention Surge",
      desc: "รักษาลูกค้าให้อยู่กับเว็บนานขึ้นด้วยความเร็วที่ตอบสนองฉับไวระดับเสี้ยววินาที",
    },
    {
      title: "Search Ranking Dominance",
      desc: "สร้างแต้มต่อเหนือคู่แข่งด้วยคะแนน Ranking Signal สีเขียว (Pass All Metrics)",
    },
  ],
  pricing: {
    price: 25000,
    label: "25,000",
    currency: "THB",
    suffix: "/ ระบบ",
    isPopular: true,
  },
  faq: [
    {
      question: "การันตีคะแนนสีเขียว (90+) จริงไหม?",
      answer:
        "จริงครับ นายเอ็มซ่ามากส์จะจูนจนกว่าคะแนนจะขึ้นโซนเขียวทั้ง Mobile และ Desktop ภายใต้โครงสร้างเดิมของเว็บไซต์ครับ",
    },
    {
      question: "ต้องเปลี่ยนโฮสติ้งใหม่ไหม?",
      answer:
        "เบื้องต้นเราจะจูนที่ระดับรหัสก่อนครับ แต่หากโฮสติ้งเดิมมีสมรรถนะต่ำเกินไป เราจะให้คำแนะนำในการขยับพิกัดเพื่อผลลัพธ์ที่ดีที่สุดครับ",
    },
  ],
};
