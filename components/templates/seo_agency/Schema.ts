/**
 * [TEMPLATE SCHEMA]: SEO_AGENCY_STRUCTURE v17.4.5 (STABILIZED_FINAL)
 * [STRATEGY]: Service Entity Graphing | EEAT Validation | Knowledge Node
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import type { TemplateMasterData } from "@/types";

/**
 * @function generateSeoAgencySchema
 * @description สร้าง JSON-LD ระดับสูงเพื่อยืนยันความเป็นผู้เชี่ยวชาญด้าน SEO
 */
export function generateSeoAgencySchema(data: TemplateMasterData) {
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
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        name: data.title,
        serviceType: "Technical SEO Agency",
        provider: { "@id": `${SITE_CONFIG.siteUrl}/#organization` },
        description: data.description,
        offers: {
          "@type": "Offer",
          price: data.priceValue.toString(),
          priceCurrency: data.currency || "THB",
          availability: "https://schema.org/InStock",
          url: pageUrl,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "SEO Specialist Services",
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
