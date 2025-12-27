/** @format */
import React from "react"

interface JsonLdProps {
  type: string
  data: Record<string, any>
}

/**
 * ✅ JsonLd Component (App Router Optimized)
 * ใช้สำหรับฉีด Structured Data (JSON-LD) เพื่อให้ Google เข้าใจเนื้อหาเว็บได้ดีขึ้น
 * * วิธีใช้ในหน้า Page:
 * <JsonLd type="LocalBusiness" data={{ name: "Aemdevweb", ... }} />
 */
const JsonLd = ({ type, data }: JsonLdProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default JsonLd
