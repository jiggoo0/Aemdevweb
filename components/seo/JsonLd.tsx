/** @format */

import React from "react"

/**
 * กำหนดประเภทข้อมูลมาตรฐานของ Schema.org ที่ระบบรองรับ
 * หากต้องการเพิ่มประเภทอื่น ให้มาเพิ่มที่ Union Type นี้เป็นที่แรก
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
  data: Record<string, any>
}

export const JsonLd: React.FC<JsonLdProps> = ({ type, data }) => {
  // จุดเช็คความชัวร์ (ทักตรงๆ): ถ้าไม่มี data ไม่ต้องเสียเวลา Render script tag ออกไป
  if (!data || Object.keys(data).length === 0) return null

  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  }

  return (
    <script
      type="application/ld+json"
      // ใช้ dangerouslySetInnerHTML เพื่อฉีด JSON เข้าไปในก้อนข้อมูลของบราวเซอร์โดยตรง
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      // ล็อค Key ด้วย type เพื่อป้องกันการ Re-render ซ้ำซ้อน
      key={`jsonld-${type.toLowerCase()}`}
    />
  )
}
