/** @format */

import { siteConfig } from "@/constants/site-config";
import { technicalAuditData } from "./data";

/**
 * Technical Audit Schema Setup 2026
 * ยืนยันพิกัดข้อมูลบริการกับ Google และ AI Search ระบบใหม่
 */
export const getTechnicalAuditSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.project.url}/seo/${technicalAuditData.slug}/#service`,
    name: technicalAuditData.title,
    description: technicalAuditData.description,
    provider: {
      "@type": "Organization",
      "@id": `${siteConfig.project.url}/#organization`,
      name: siteConfig.company.name,
      url: siteConfig.project.url,
      logo: siteConfig.project.logo,
    },
    serviceType: "Technical SEO Infrastructure Audit",
    areaServed: {
      "@type": "Country",
      name: "Thailand",
    },
    offers: {
      "@type": "Offer",
      price: technicalAuditData.pricing.price,
      priceCurrency: "THB",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Person",
        name: siteConfig.expert.realName,
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Technical SEO Services Catalog",
      itemListElement: technicalAuditData.features.map((feature, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feature,
        },
        position: index + 1,
      })),
    },
  };
};
