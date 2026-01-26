/** @format */

import React from "react"

/**
 * กำหนดประเภทข้อมูลมาตรฐานของ Schema.org ที่ระบบรองรับ
 * เพิ่มพิกัดประเภทที่จำเป็นสำหรับการทำ Technical SEO Specialist 2026
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
  /** * [FIXED]: เปลี่ยนจาก any เป็น Record<string, unknown>
   * เพื่อความปลอดภัยของพิกัดข้อมูลและผ่านการตรวจ ESLint
   */
  data: Record<string, unknown>
}

/**
 * JsonLd Component - เครื่องจักรฉีดโครงสร้างข้อมูล (Schema Markup)
 * ทำหน้าที่ส่งพิกัดข้อมูลเชิงลึกให้ Search Engine และ AI Crawler เข้าใจบริบทหน้าเว็บ 100%
 */
export const JsonLd: React.FC<JsonLdProps> = ({ type, data }) => {
  // จุดเช็คความปลอดภัย (Technical Guard): ป้องกันการเรนเดอร์สคริปต์ที่ไม่มีข้อมูล
  if (!data || Object.keys(data).length === 0) return null

  // ประกอบก้อนข้อมูลตามมาตรฐาน Schema.org (Structured Data Engine)
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  }

  return (
    <script
      type="application/ld+json"
      /**
       * ฉีด JSON เข้าสู่ DOM (Data Injection)
       * ช่วยให้บอทเข้าถึงข้อมูลได้ทันที (Early Execution) โดยไม่ต้องรอเรนเดอร์ UI
       */
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      // ล็อค Key ด้วยพิกัดประเภทเพื่อประสิทธิภาพในการจัดการ Virtual DOM ของ React
      key={`jsonld-${type.toLowerCase()}`}
    />
  )
}
