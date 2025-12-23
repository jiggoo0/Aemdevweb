/** @format */
import React from "react"

interface JsonLdProps {
  type?: "LocalBusiness" | "MedicalBusiness" | "Restaurant" | "RealEstateAgent"
  data: {
    name: string
    description: string
    url: string
    phone?: string
    address?: string
    image?: string
    priceRange?: string
  }
}

/**
 * JsonLd Component
 * ใช้สร้าง Structured Data สำหรับ SEO
 * รับข้อมูลเป็น string หรือ primitive types เท่านั้น
 */
const JsonLd: React.FC<JsonLdProps> = ({ type = "LocalBusiness", data }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    name: data.name,
    description: data.description,
    url: data.url,
    telephone: data.phone || "",
    address: data.address
      ? {
          "@type": "PostalAddress",
          streetAddress: data.address,
          addressLocality: "Bangkok",
          addressCountry: "TH",
        }
      : undefined,
    image: data.image || "https://aemdevweb.com/og-image.jpg",
    priceRange: data.priceRange || "$$",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default JsonLd
