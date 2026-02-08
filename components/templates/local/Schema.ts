/**
 * [TEMPLATE SCHEMA]: LOCAL_BUSINESS_STRUCTURE v16.7 (GEO_OPTIMIZED)
 * [STRATEGY]: Geographic Rich Snippets | Local Authority Data | Strict Typing
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import type { AreaNode } from "@/types";

/**
 * @function generateLocalBusinessSchema
 * สร้าง JSON-LD เพื่อส่งสัญญาณความเชี่ยวชาญระดับพื้นที่ให้แก่ระบบค้นหา (Local Pack Optimized)
 */
export function generateLocalBusinessSchema(data: AreaNode) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService", // เปลี่ยนจาก Service เป็น ProfessionalService เพื่อความน่าเชื่อถือ
    name: `${SITE_CONFIG.brandName} - สาขา${data.province}`,
    description: data.seoDescription || data.description,
    image: `${SITE_CONFIG.siteUrl}${data.heroImage || "/images/og-default.webp"}`,
    url: `${SITE_CONFIG.siteUrl}/areas/${data.slug}`,
    telephone: SITE_CONFIG.contact.phone,
    priceRange: "฿฿",
    address: {
      "@type": "PostalAddress",
      addressLocality: data.province,
      addressRegion: "Thailand",
      addressCountry: "TH",
    },
    areaServed: [
      {
        "@type": "City",
        name: data.province,
      },
      // เพิ่มอำเภอให้บริการ (Districts) เข้าไปใน Schema เพื่อครอบคลุมพื้นที่ย่อย
      ...(data.districts || []).map((district) => ({
        "@type": "City",
        name: district,
      })),
    ],
    // [ENHANCEMENT]: ระบุพิกัด (GeoCoordinates) เพื่อปักหมุดใน Google Maps (ตัวอย่าง)
    geo: {
      "@type": "GeoCoordinates",
      latitude: "13.7563", // ควรดึงค่าจริงจาก Database ในอนาคต
      longitude: "100.5018",
    },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: (data.keywords || []).map((kw) => ({
        "@type": "Question",
        name: `รับทำเว็บไซต์ ${kw} ใน${data.province} ราคาเท่าไหร่?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `ค่าบริการเริ่มต้นที่ ${SITE_CONFIG.brandName} สำหรับพื้นที่${data.province} คุ้มค่าและประเมินตามความต้องการจริง พร้อมดูแลระบบหลังบ้านให้ตลอดอายุการใช้งานครับ`,
        },
      })),
    },
  };
}
