/** @format */

import React from "react"

/**
 * JsonLdProps - กำหนดระนาบประเภทข้อมูลมาตรฐาน Schema.org
 * [FIXED]: เพิ่มประเภทข้อมูลเพื่อให้ครอบคลุมทุกพิกัดหน้าเว็บ และล้างปัญหา Type Error
 */
export interface JsonLdProps {
  type:
    | "Organization"
    | "WebSite"
    | "ProfessionalService"
    | "LocalBusiness"
    | "Article"
    | "Product"
    | "BreadcrumbList"
    | "Service"
    | "WebPage"
    | "Person"
    | "FAQPage"
    | "AboutPage" // พิกัดข้อมูลหน้าเกี่ยวกับเรา
    | "BlogPosting" // พิกัดข้อมูลหน้าบทความเชิงลึก
    | "CollectionPage" // พิกัดข้อมูลหน้ารวมบทความหรือเทมเพลต

  /** * [FIXED]: ปรับพิกัดข้อมูลเป็น Record<string, unknown>
   * เพื่อความปลอดภัยในระนาบการประมวลผลข้อมูลที่หลากหลาย
   */
  data: Record<string, unknown>
}

/**
 * JsonLd Component - ส่วนจัดการการฉีดโครงสร้างข้อมูล (Schema Markup)
 * ยุทธศาสตร์: ช่วยให้ระบบค้นหาจัดลำดับพิกัดธุรกิจได้อย่างแม่นยำตั้งแต่ครั้งแรกที่เข้าตรวจสอบ
 * Identity: นายเอ็มซ่ามากส์ (Alongkorl Yomkerd)
 */
export const JsonLd: React.FC<JsonLdProps> = ({ type, data }) => {
  // พิกัดตรวจสอบความปลอดภัย: หากชุดข้อมูลว่างเปล่า ระบบจะหยุดการทำงานทันทีเพื่อรักษาความเบา
  if (!data || Object.keys(data).length === 0) {
    return null
  }

  // จัดระเบียบระนาบข้อมูลตามมาตรฐานสากล (JSON-LD Structure)
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  }

  return (
    <script
      type="application/ld+json"
      /**
       * ฉีดชุดข้อมูลเข้าสู่ระนาบ DOM (Structural Injection)
       * ช่วยให้ AI Crawler เข้าถึงรายละเอียดเชิงลึกของแผนงานธุรกิจได้ทันที
       */
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      // ระบุพิกัดกุญแจเพื่อให้ React จัดการระนาบหน่วยความจำได้อย่างรวดเร็ว
      key={`jsonld-${type.toLowerCase()}`}
    />
  )
}
