/** @format */
import React from "react"
import { siteConfig } from "@/constants/site-config"

/**
 * 🧬 JsonLd Schema Types
 * รองรับประเภทข้อมูลที่จำเป็นสำหรับการทำ SEO SME 2026
 */
export type JsonLdType =
  | "Website"
  | "ProfessionalService"
  | "Article"
  | "FAQ"
  | "Breadcrumb"
  | "Product"
  | "CollectionPage"
  | "Organization"

export interface JsonLdProps {
  type?: JsonLdType
  /** * ✅ ใช้ Record<string, unknown> แทน any เพื่อความปลอดภัยของ Type 
   * ตามมาตรฐาน Modern TypeScript 
   */
  data?: Record<string, unknown>
  id?: string
}

/**
 * 🚀 JsonLd Component: The SEO Engine of AEMDEVWEB
 * ทำหน้าที่สร้าง Structured Data เพื่อให้ Google แสดงผลเป็น Rich Snippets (ดาว, ราคา, ข้อมูลบริษัท)
 * DNA: "กดปุ๊บ มาปั๊บ" - ทำงานแบบ Server-side Zero Runtime Effect
 */
export function JsonLd({ type = "Website", data, id }: JsonLdProps) {
  // Website type สามารถใช้ข้อมูลเริ่มต้นจาก siteConfig ได้เลย
  if (!data && type !== "Website" && type !== "ProfessionalService") return null

  const baseUrl = siteConfig.url
  const defaultImage = `${baseUrl}/og-image.png`

  // 🛠️ 1. Base Context Structure
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type,
    ...(id && { "@id": id }),
  }

  // 🛠️ 2. Default Metadata Mapping (จาก site-config.ts)
  let specificData: Record<string, unknown> = {}

  if (type === "Website" || type === "ProfessionalService" || type === "Organization") {
    specificData = {
      name: siteConfig.name,
      url: baseUrl,
      image: defaultImage,
      description: siteConfig.description,
      address: {
        "@type": "PostalAddress",
        addressCountry: "TH",
        streetAddress: siteConfig.contact?.address,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.contact?.tel,
        contactType: "customer service",
      },
      sameAs: [
        siteConfig.links?.facebook,
        siteConfig.links?.line,
        siteConfig.links?.github,
      ].filter(Boolean),
    }
  }

  // 🛠️ 3. Final Merge: นำข้อมูลที่ส่งมาทับข้อมูลเริ่มต้น
  const finalSchema = {
    ...baseSchema,
    ...specificData,
    ...data,
  }

  return (
    <script
      type="application/ld+json"
      /** * ป้องกันการเกิด Hydration Mismatch ใน Next.js 15 
       * ด้วยการส่งข้อมูลผ่าน dangerouslySetInnerHTML 
       */
      dangerouslySetInnerHTML={{ __html: JSON.stringify(finalSchema) }}
    />
  )
}
