/** @format */

import React from "react"

/**
 * กำหนดประเภทข้อมูลมาตรฐานของ Schema.org ที่ระบบรองรับ
 * [FIXED]: เพิ่ม AboutPage, BlogPosting, CollectionPage เพื่อแก้ปัญหา Type Error 9 จุดล่าสุด
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
    | "BlogPosting" // พิกัดข้อมูลหน้าบทความ
    | "CollectionPage" // พิกัดข้อมูลหน้ารวม (Marketplace/Blog List)
  /** * [FIXED]: ใช้ Record<string, unknown> เพื่อความปลอดภัยของข้อมูลตามมาตรฐาน ESLint
   */
  data: Record<string, unknown>
}

/**
 * JsonLd Component - เครื่องจักรฉีดโครงสร้างข้อมูล (Schema Markup)
 * ทำหน้าที่ส่งข้อมูลเชิงลึกให้ Search Engine และ AI Crawler เข้าใจเนื้อหาหน้าเว็บได้ทันที
 */
export const JsonLd: React.FC<JsonLdProps> = ({ type, data }) => {
  // จุดเช็คความปลอดภัย (Technical Guard): ถ้าไม่มีข้อมูลจะไม่เรนเดอร์สคริปต์ออกมาให้รกระบบ
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
       * ช่วยให้บอทเข้าถึงข้อมูลได้ทันทีตั้งแต่วินาทีแรกที่โหลดหน้าจอ
       */
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      // ล็อค Key ด้วยพิกัดประเภทเพื่อช่วย React จัดการ Virtual DOM ได้รวดเร็วขึ้น
      key={`jsonld-${type.toLowerCase()}`}
    />
  )
}
