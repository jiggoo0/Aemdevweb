/** @format */
import React from "react"

interface JsonLdProps {
  // รองรับประเภทธุรกิจตามเทมเพลตของ aemdevweb
  type?:
    | "LocalBusiness" // ทั่วไป
    | "MedicalBusiness" // คลินิก
    | "Restaurant" // คาเฟ่/ร้านอาหาร
    | "RealEstateAgent" // อสังหาริมทรัพย์
    | "ProfessionalService" // รับเหมาก่อสร้าง / บริการวิชาชีพ
  data: {
    name: string
    description: string
    url: string
    phone?: string
    address?: string
    image?: string
    priceRange?: string
    socialLinks?: string[] // เพิ่มเพื่อสร้างความน่าเชื่อถือ (SameAs)
  }
}

/**
 * 🛠️ JsonLd Component (Industrial Sharp SEO)
 * ส่วนประกอบสำคัญในการทำให้ Google เข้าใจประเภทธุรกิจของลูกค้า SME
 * ช่วยให้แสดงผลบน Google Maps และ Search Results ได้โดดเด่นขึ้น
 */
const JsonLd: React.FC<JsonLdProps> = ({ type = "LocalBusiness", data }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    name: data.name,
    description: data.description,
    url: data.url,
    telephone: data.phone || "",
    image: data.image || "https://www.aemdevweb.com/og-image.png",
    priceRange: data.priceRange || "฿฿", // เปลี่ยนเป็นสัญลักษณ์เงินบาทให้เข้ากับบริบทไทย
    address: data.address
      ? {
          "@type": "PostalAddress",
          streetAddress: data.address,
          addressLocality: "Bangkok", // สามารถปรับ Dynamic ได้ในอนาคต
          addressCountry: "TH",
        }
      : undefined,
    // ช่วยให้ Google เชื่อมโยงเว็บไซต์กับ Social Media ของแบรนด์
    sameAs: data.socialLinks || [
      "https://www.facebook.com/aemdevweb",
      "https://lin.ee/XwdZGsn",
    ],
  }

  return (
    <script
      type="application/ld+json"
      // ป้องกันการ Render ผิดพลาดด้วยการเช็คโครงสร้าง Schema
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default JsonLd
