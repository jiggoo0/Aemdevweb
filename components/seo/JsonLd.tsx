/** @format */

import React from "react"

/**
 * AEMDEVWEB | Structured Data Engine 2026
 * -------------------------------------------------------------------------
 * ระบบฉีดข้อมูลโครงสร้าง (JSON-LD) เพื่อเชื่อมต่อพิกัดกับ Google Knowledge Graph
 * วางระบบและควบคุมสมรรถนะโดย: นายเอ็มซ่ามากส์ (อลงกรณ์ ยมเกิด)
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
    | "AboutPage"
    | "ContactPage"
    | "BlogPosting"
    | "CollectionPage"
    | "SoftwareApplication" // เพิ่มพิกัดสำหรับสาย Dev
    | "Graph"

  /** [STRATEGIC DATA]: โครงสร้างข้อมูลที่ยืดหยุ่นแต่ระบุ Type ชัดเจนสไตล์ Specialist */
  data: Record<string, unknown>
}

/**
 * JsonLd Component - เครื่องยนต์สร้าง Schema เพื่อดึงดูดบอท Google และ AI
 * จูนสมรรถนะโดย: นายเอ็มซ่ามากส์
 */
export const JsonLd: React.FC<JsonLdProps> = ({ type, data }) => {
  // ตรวจสอบพิกัดข้อมูลเบื้องต้นเพื่อความเนี้ยบของหน้าบ้าน
  if (!data || Object.keys(data).length === 0) {
    return null
  }

  /** * [LOGIC]: จัดการพิกัดโครงสร้างข้อมูลแบบ Graph ให้แม่นยำที่สุด
   * เพื่อให้ Search Engine เข้าใจความสัมพันธ์ของข้อมูล Node ต่างๆ
   */
  const schema =
    type === "Graph"
      ? {
          "@context": "https://schema.org",
          "@graph": Array.isArray(data["@graph"]) ? data["@graph"] : [data],
        }
      : {
          "@context": "https://schema.org",
          "@type": type,
          ...data,
        }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      // ป้องกันการ Render ซ้ำซ้อนด้วยพิกัด @id หรือ type
      key={`jsonld-${type.toLowerCase()}-${(data["@id"] as string) || "root"}`}
    />
  )
}
