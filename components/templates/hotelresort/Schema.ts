/**
 * [TEMPLATE SCHEMA]: HOTEL_RESORT_STRUCTURE v17.4.5 (STABILIZED_FINAL)
 * [STRATEGY]: LodgingBusiness Entity | Geo-Data Integration | Trust Graph
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import type { TemplateMasterData } from "@/types";

/**
 * @function generateHotelSchema
 * @description สร้าง JSON-LD สำหรับธุรกิจโรงแรมและที่พัก เพื่อเพิ่มโอกาสการแสดงผลใน Google Travel
 */
export function generateHotelSchema(data: TemplateMasterData) {
  const pageUrl = `${SITE_CONFIG.siteUrl}/services/${data.templateSlug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: `${data.title} | ${SITE_CONFIG.brandName}`,
        description: data.description,
        isPartOf: { "@id": `${SITE_CONFIG.siteUrl}/#website` },
      },
      {
        "@type": "LodgingBusiness",
        "@id": `${pageUrl}/#hotel`,
        name: data.title,
        description: data.description,
        image: data.image,
        priceRange: `THB ${data.priceValue}+`,
        provider: { "@id": `${SITE_CONFIG.siteUrl}/#organization` },
        amenityFeature: (data.benefits || []).map((benefit) => ({
          "@type": "LocationFeatureSpecification",
          name: benefit,
          value: "Yes",
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Hospitality Web Solutions",
          // [FIX]: Changed unused 'idx' to '_' to satisfy Linter
          itemListElement: (data.coreFeatures || []).map((feat, _) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: feat.title,
              description: feat.description,
            },
          })),
        },
      },
    ],
  };
}
