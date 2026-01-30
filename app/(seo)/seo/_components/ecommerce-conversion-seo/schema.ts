/** @format */

import { siteConfig } from "@/constants/site-config"
import { ecommerceConversionData } from "./data"

/**
 * E-commerce Conversion SEO Schema Setup 2026
 * วางระบบรหัสเพื่อยืนยันพิกัดร้านค้าและสินค้ากับระบบ AI Search
 */
export const getEcommerceSeoSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.project.url}/seo/${ecommerceConversionData.slug}/#service`,
    name: ecommerceConversionData.title,
    description: ecommerceConversionData.description,
    provider: {
      "@type": "Organization",
      "@id": `${siteConfig.project.url}/#organization`,
      name: siteConfig.company.name,
      url: siteConfig.project.url,
      logo: siteConfig.project.logo,
    },
    serviceType: "Technical E-commerce SEO Optimization",
    areaServed: {
      "@type": "Country",
      name: "Thailand",
    },
    offers: {
      "@type": "Offer",
      price: ecommerceConversionData.pricing.price,
      priceCurrency: "THB",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Person",
        name: siteConfig.expert.realName,
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "E-commerce Optimization Catalog",
      itemListElement: ecommerceConversionData.features.map(
        (feature, index) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: feature,
          },
          position: index + 1,
        })
      ),
    },
  }
}
