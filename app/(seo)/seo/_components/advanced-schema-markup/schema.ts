/** @format */

import { siteConfig } from "@/constants/site-config"
import { advancedSchemaData } from "./data"

/**
 * Advanced Schema Markup Setup 2026
 * วางระบบรหัส JSON-LD เพื่อยืนยันตัวตนธุรกิจกับระบบ AI Search
 */
export const getAdvancedSchemaMarkup = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.project.url}/seo/${advancedSchemaData.slug}/#service`,
    "name": advancedSchemaData.title,
    "description": advancedSchemaData.description,
    "provider": {
      "@type": "Organization",
      "@id": `${siteConfig.project.url}/#organization`,
      "name": siteConfig.company.name,
      "url": siteConfig.project.url,
      "logo": siteConfig.project.logo
    },
    "serviceType": "Technical Schema Markup Implementation",
    "areaServed": {
      "@type": "Country",
      "name": "Thailand"
    },
    "offers": {
      "@type": "Offer",
      "price": advancedSchemaData.pricing.price,
      "priceCurrency": "THB",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Person",
        "name": siteConfig.expert.realName
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Schema Implementation Catalog",
      "itemListElement": advancedSchemaData.features.map((feature, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature
        },
        "position": index + 1
      }))
    }
  }
}
