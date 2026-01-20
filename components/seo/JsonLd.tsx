/** @format */

import React from "react"

export interface JsonLdProps {
  type:
    | "Organization"
    | "WebSite"
    | "ProfessionalService"
    | "LocalBusiness"
    | "Article"
    | "Product"
    | "BreadcrumbList"
    | "CaseStudy"
    | "Service"
    | "AboutPage"
    | "ContactPage"
    | "WebPage"
    | "CollectionPage"
  data: Record<string, any>
}

export const JsonLd: React.FC<JsonLdProps> = ({ type, data }) => {
  if (!data || Object.keys(data).length === 0) return null

  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      key={`jsonld-${type.toLowerCase()}`}
    />
  )
}
