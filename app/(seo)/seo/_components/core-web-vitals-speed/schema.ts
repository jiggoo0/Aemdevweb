/** @format */

import { siteConfig } from "@/constants/site-config"
import { coreWebVitalsSpeedData } from "./data"

/**
 * Core Web Vitals Speed Schema Setup 2026
 * ยืนยันพิกัดข้อมูลบริการด้านความเร็วกับระบบ AI Search
 */
export const getCoreWebVitalsSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.project.url}/seo/${coreWebVitalsSpeedData.slug}/#service`,
    "name": coreWebVitalsSpeedData.title,
    "description": coreWebVitalsSpeedData.description,
    "provider": {
      "@type": "Organization",
      "@id": `${siteConfig.project.url}/#organization`,
      "name": siteConfig.company.name,
      "url": siteConfig.project.url,
      "logo": siteConfig.project.logo
    },
    "serviceType": "Web Performance Optimization",
    "areaServed": {
      "@type": "Country",
      "name": "Thailand"
    },
    "offers": {
      "@type": "Offer",
      "price": coreWebVitalsSpeedData.pricing.price,
      "priceCurrency": "THB",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Person",
        "name": siteConfig.expert.realName
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Performance Services Catalog",
      "itemListElement": coreWebVitalsSpeedData.features.map((feature, index) => ({
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
