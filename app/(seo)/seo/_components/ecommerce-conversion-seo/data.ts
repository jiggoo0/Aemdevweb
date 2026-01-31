/** @format */
// พิกัด: app/(seo)/seo/_components/ecommerce-conversion-seo/data.ts

import { SeoServiceItem } from "@/types/seo";

/**
 * [SEO SERVICE NODE]: E-commerce Conversion SEO
 * พิกัดการจูนเครื่องยนต์ร้านค้าออนไลน์ ดันอันดับสินค้าและเพิ่มอัตราการปิดการขาย
 * ควบคุมมาตรฐานโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB 2026)
 */
export const ecommerceConversionData: SeoServiceItem = {
  id: "seo-ecom-005",
  slug: "ecommerce-conversion-seo",
  title: "E-commerce Conversion SEO",
  subtitle: "จูนระบบร้านค้าออนไลน์ ดันสินค้าขึ้นหน้าแรก และเพิ่มยอดขาย Organic",
  description:
    "วางโครงสร้างพิกัดหมวดหมู่ (Taxonomy) และหน้ารายละเอียดสินค้าให้ Google รัก พร้อมเปลี่ยนผู้เข้าชมให้เป็นผู้ซื้ออย่างเป็นระบบ ด้วยสถาปัตยกรรมที่จูนโดย นายเอ็มซ่ามากส์",
  iconName: "BarChart3",
  painPoints: [
    "ลงสินค้าจำนวนมากแต่อันดับการค้นหาไม่ขยับ และไม่มีคนค้นหาเจอ",
    "โครงสร้างหมวดหมู่สินค้ามั่ว (Taxonomy Error) จนบอทเก็บข้อมูลไม่ครบ",
    "พิกัดข้อมูลสินค้าไม่ไปปรากฏบน Google Shopping Tab อย่างที่ควรเป็น",
    "คนเข้าเว็บเยอะแต่ปิดการขายไม่ได้ เพราะโครงสร้างหน้าสินค้าไม่ดึงดูดใจ AI และมนุษย์",
  ],
  features: [
    "Product Taxonomy Design: จัดผังหมวดหมู่สินค้าให้ Google เข้าใจง่ายและค้นหาเจอไว",
    "Advanced Product Schema: ฝังรหัสราคา สต็อก และรีวิวแบบละเอียดให้แสดงผลบนหน้าแรก",
    "Category Authority Tuning: ดันหน้าหมวดหมู่ให้ติดอันดับคีย์เวิร์ดกว้าง (Short-tail Keywords)",
    "Conversion Rate Optimization (SEO-Focus): ปรับแต่งหน้าสินค้าเพื่อกระตุ้นการสั่งซื้อทันที",
  ],
  benefits: [
    {
      title: "Organic Sales Impact",
      desc: "เพิ่มยอดขายจากลูกค้าที่ค้นหาผ่าน Google โดยตรง ช่วยลดการพึ่งพาค่าแอดรายวัน",
    },
    {
      title: "Merchant Trust & Authority",
      desc: "สร้างตัวตนร้านค้าให้เป็นที่ยอมรับในระบบ Google Merchant Center ระดับสากล",
    },
  ],
  pricing: {
    price: 35000,
    label: "35,000",
    currency: "THB",
    suffix: "/ โปรเจกต์",
    isPopular: false,
  },
  faq: [
    {
      question: "ระบบนี้รองรับสินค้าหลักหมื่นชิ้นได้ไหม?",
      answer:
        "ได้แน่นอนครับ นายเอ็มซ่ามากส์ออกแบบระบบให้รองรับข้อมูลขนาดใหญ่ (Scalable Architecture) จัดการได้เสถียรและแม่นยำทุกพิกัดครับ",
    },
    {
      question: "ต้องทำ SEO รายเดือนควบคู่ไปด้วยไหม?",
      answer:
        "โครงสร้างนี้คือการวางฐานรากที่แข็งแกร่งที่สุดครับ หากต้องการรักษาอันดับในระยะยาวสำหรับสินค้าที่มีการแข่งขันสูง แนะนำให้ทำบริการ SEO รายเดือนควบคู่กันครับ",
    },
  ],
};
