/**
 * [TEMPLATE SCHEMA]: SEO_AGENCY_STRUCTURE v17.8.5 (STABILIZED)
 * [STRATEGY]: Service Entity Graphing | EEAT Validation | Specialist Linking
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import { absoluteUrl } from "@/lib/utils";
import type { TemplateMasterData } from "@/types";

export function generateSeoAgencySchema(data: TemplateMasterData) {
  const siteUrl = SITE_CONFIG.siteUrl;
  const canonicalUrl = absoluteUrl(`/services/${data.templateSlug}`);
  const price = (data.priceValue || 0).toString();

  const IDS = {
    WEBPAGE: `${canonicalUrl}/#webpage`,
    SERVICE: `${canonicalUrl}/#service`,
    ORG: absoluteUrl("/#organization"),
    PERSON: absoluteUrl("/#person"), // เชื่อมโยง นายเอ็มซ่ามากส์
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      // NODE 1: WEB PAGE
      {
        "@type": "WebPage",
        "@id": IDS.WEBPAGE,
        url: canonicalUrl,
        name: `${data.title} | ${SITE_CONFIG.brandName}`,
        description: data.description,
        isPartOf: { "@id": absoluteUrl("/#website") },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "หน้าแรก", item: siteUrl },
            {
              "@type": "ListItem",
              position: 2,
              name: "บริการทั้งหมด",
              item: absoluteUrl("/services"),
            },
            { "@type": "ListItem", position: 3, name: data.title, item: canonicalUrl },
          ],
        },
      },

      // NODE 2: SEO SERVICE ENTITY
      {
        "@type": "Service",
        "@id": IDS.SERVICE,
        name: data.title,
        serviceType: "Technical SEO & Growth Architecture",
        provider: { "@id": IDS.ORG },
        offeredBy: { "@id": IDS.PERSON }, // Specialist Validation
        description: data.description,
        areaServed: { "@type": "Country", name: "Thailand" },
        offers: {
          "@type": "Offer",
          price: price,
          priceCurrency: data.currency || "THB",
          availability: "https://schema.org/InStock",
          url: canonicalUrl,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "SEO Specialist Protocol",
          itemListElement: (data.coreFeatures || []).map((feat, index) => ({
            "@type": "Offer",
            position: index + 1,
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
