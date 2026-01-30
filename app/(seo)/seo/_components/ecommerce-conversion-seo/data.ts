/** @format */
// พิกัด: app/(seo)/seo/_components/ecommerce-conversion-seo/data.ts

import { SeoServiceItem } from "@/types/seo"

export const ecommerceConversionData: SeoServiceItem = {
  id: "seo-ecom-005",
  slug: "ecommerce-conversion-seo",
  title: "E-commerce Conversion SEO",
  subtitle:
    "ปรับแต่งระบบร้านค้าเพื่อเพิ่มยอดขายและการจัดอันดับสินค้าเชิงพาณิชย์",
  description:
    "วางโครงสร้างหมวดหมู่และหน้ารายละเอียดสินค้าให้รองรับทั้งระบบการค้นหาและเปลี่ยนผู้เข้าชมให้เป็นลูกค้าด้วยข้อมูลที่แม่นยำ",
  iconName: "BarChart3",
  painPoints: [
    "รายการสินค้าจำนวนมากแต่ไม่ปรากฏในผลการค้นหาของระบบสากล",
    "โครงสร้างหมวดหมู่สินค้าซับซ้อนจนผู้ใช้งานและบอทสับสน",
    "พิกัดข้อมูลสินค้าไม่แสดงผลบนระบบ Google Shopping",
    "อัตราการปิดการขายต่ำแม้จะมีผู้เข้าชมระบบเว็บไซต์จำนวนมาก",
  ],
  features: [
    "จัดลำดับความสำคัญพิกัดหมวดหมู่สินค้า (Product Taxonomy)",
    "วางระบบรหัส Product Structured Data ระดับเทคนิคขั้นสูง",
    "ปรับจูนหน้าแสดงผลสินค้าเพื่อเพิ่มอัตราการตัดสินใจซื้อ",
    "เชื่อมโยงข้อมูลคลังสินค้าและราคาเข้ากับระบบการค้นหาสากล",
  ],
  benefits: [
    {
      title: "Sales Growth Efficiency",
      desc: "เพิ่มโอกาสการปิดการขายด้วยการนำเสนอพิกัดข้อมูลที่ชัดเจนและค้นหาง่าย",
    },
    {
      title: "Merchant Center Authority",
      desc: "สร้างตัวตนร้านค้าให้เป็นที่ยอมรับในระบบการตรวจสอบข้อมูลสินค้าสากล",
    },
  ],
  pricing: {
    price: 35000,
    label: "35,000",
    currency: "THB", // [STRICT-TYPE]: ยืนยันพิกัดสกุลเงิน
    suffix: "/ โปรเจกต์",
    isPopular: false,
  },
  faq: [
    {
      question: "ระบบนี้รองรับสินค้าจำนวนมากขนาดไหน?",
      answer:
        "รองรับได้ไม่จำกัดจำนวนรายการครับ ระบบถูกออกแบบมาให้จัดการข้อมูลขนาดใหญ่ได้อย่างเสถียรและแม่นยำ",
    },
  ],
}
