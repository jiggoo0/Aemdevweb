/**
 * [TEMPLATE SCHEMA]: HOTEL_RESORT_STRUCTURE v17.9.0 (STABILIZED)
 * [STRATEGY]: LodgingBusiness Entity | Geo-Data Integration | Specialist Linking
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import { absoluteUrl } from "@/lib/utils";
import type { TemplateMasterData } from "@/types";

export function generateHotelSchema(data: TemplateMasterData) {
  const canonicalUrl = absoluteUrl(`/services/${data.templateSlug}`);
  const siteUrl = SITE_CONFIG.siteUrl;

  return {
    "@context": "https://schema.org",
    "@graph": [
      // NODE 1: WEB PAGE
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}/#webpage`,
        url: canonicalUrl,
        name: `${data.title} | ${SITE_CONFIG.brandName}`,
        description: data.description,
        isPartOf: { "@id": absoluteUrl("/#website") },
        breadcrumb: { "@id": `${canonicalUrl}/#breadcrumb` },
      },

      // NODE 2: LODGING BUSINESS (Industry Specific)
      {
        "@type": "LodgingBusiness",
        "@id": `${canonicalUrl}/#hotel`,
        name: data.title,
        description: data.description,
        image: data.image ? absoluteUrl(data.image) : undefined,
        priceRange: "฿฿฿", // [CONFIG]: ปรับตามระดับราคาจริงถ้ามีข้อมูล
        provider: { "@id": absoluteUrl("/#organization") },
        offeredBy: { "@id": absoluteUrl("/#person") }, // โดย นายเอ็มซ่ามากส์
        amenityFeature: (data.benefits || []).map((benefit) => ({
          "@type": "LocationFeatureSpecification",
          name: benefit,
          value: "Yes",
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Hospitality Digital Infrastructure",
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

      // NODE 3: BREADCRUMB
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}/#breadcrumb`,
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
    ],
  };
}
