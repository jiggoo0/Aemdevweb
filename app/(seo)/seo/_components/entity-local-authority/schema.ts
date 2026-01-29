/** @format */

import { siteConfig } from "@/constants/site-config"
import { entityLocalAuthorityData } from "./data"

/**
 * Entity & Local Authority Schema Setup 2026
 * วางระบบรหัสเพื่อยืนยันพิกัดและตัวตนกับระบบ AI Search
 */
export const getEntityLocalSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.project.url}/seo/${entityLocalAuthorityData.slug}/#service`,
    "name": entityLocalAuthorityData.title,
    "description": entityLocalAuthorityData.description,
    "provider": {
      "@type": "Organization",
      "@id": `${siteConfig.project.url}/#organization`,
      "name": siteConfig.company.name,
      "url": siteConfig.project.url,
      "logo": siteConfig.project.logo
    },
    "serviceType": "Technical Local SEO & Entity Alignment",
    "areaServed": {
      "@type": "Country",
      "name": "Thailand"
    },
    "offers": {
      "@type": "Offer",
      "price": entityLocalAuthorityData.pricing.price,
      "priceCurrency": "THB",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Person",
        "name": siteConfig.expert.realName
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Local Authority Services Catalog",
      "itemListElement": entityLocalAuthorityData.features.map((feature, index) => ({
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
