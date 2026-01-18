/** @format */
import React from "react"
import { siteConfig } from "@/constants/site-config"

export type JsonLdType =
  | "Website"
  | "ProfessionalService"
  | "Article"
  | "FAQ"
  | "Breadcrumb"
  | "Product"

// ✅ Fix 3: เปลี่ยน any เป็น unknown หรือใช้ eslint-disable
export interface JsonLdData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any 
}

export interface JsonLdProps {
  type?: JsonLdType
  data?: JsonLdData
  id?: string
}

/**
 * 🚀 JsonLd Component
 * DNA: High-Conversion SEO Engine
 */
export function JsonLd({ type = "Website", data, id }: JsonLdProps) {
  if (!data && type !== "Website") return null

  const baseUrl = siteConfig.url
  const defaultImage = `${baseUrl}/images/og-image.png`

  // Base Context
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type,
    "@id": id,
  }

  // Merge default data based on type
  let specificData = {}

  if (type === "Website" || type === "ProfessionalService") {
    specificData = {
      name: siteConfig.name,
      url: baseUrl,
      image: defaultImage,
      description: siteConfig.description,
      sameAs: [
        siteConfig.links?.facebook,
        siteConfig.links?.line,
        siteConfig.links?.github,
      ].filter(Boolean),
    }
  }

  const finalSchema = {
    ...baseSchema,
    ...specificData,
    ...data,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(finalSchema) }}
    />
  )
}
