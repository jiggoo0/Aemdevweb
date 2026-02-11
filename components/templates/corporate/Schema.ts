/**
 * [TEMPLATE SCHEMA]: CORPORATE_SERVICE_STRUCTURE v17.9.0 (GRAPH_ENTERPRISE)
 * [STRATEGY]: Knowledge Graph Architecture | Entity Resolution | Specialist Trust
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import { absoluteUrl } from "@/lib/utils";
import type { TemplateMasterData } from "@/types";

export function generateCorporateSchema(data: TemplateMasterData) {
  const siteUrl = SITE_CONFIG.siteUrl;
  const canonicalUrl = absoluteUrl(`/services/${data.templateSlug}`);
  const cleanPrice = (data.priceValue || 0).toString();

  const IDS = {
    WEBPAGE: `${canonicalUrl}/#webpage`,
    SERVICE: `${canonicalUrl}/#service`,
    ORG: absoluteUrl("/#organization"),
    PERSON: absoluteUrl("/#person"),
    FAQ: `${canonicalUrl}/#faq`,
    BREADCRUMB: `${canonicalUrl}/#breadcrumb`,
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      // NODE 1: SERVICE (Enterprise Offering)
      {
        "@type": "Service",
        "@id": IDS.SERVICE,
        serviceType: "Enterprise Digital Infrastructure & SEO Specialist",
        name: data.title,
        description: data.description,
        image: data.image ? absoluteUrl(data.image) : undefined,
        provider: { "@id": IDS.ORG },
        // [ENTITY]: เชื่อมโยงกับบุคคล (นายเอ็มซ่ามากส์) เพื่อสร้าง Trust
        seller: { "@id": IDS.PERSON },
        areaServed: { "@type": "Country", name: "Thailand" },
        // [OFFER]: แสดงรายการบริการย่อย
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Enterprise Capability Matrix",
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
        offers: {
          "@type": "Offer",
          price: cleanPrice,
          priceCurrency: data.currency || "THB",
          availability: "https://schema.org/InStock",
          url: canonicalUrl,
        },
      },

      // NODE 2: WEB PAGE & BREADCRUMB
      {
        "@type": "WebPage",
        "@id": IDS.WEBPAGE,
        url: canonicalUrl,
        name: `${data.title} | ${SITE_CONFIG.brandName}`,
        description: data.description,
        isPartOf: { "@id": absoluteUrl("/#website") },
        mainEntity: { "@id": IDS.SERVICE },
        breadcrumb: { "@id": IDS.BREADCRUMB },
      },
      {
        "@type": "BreadcrumbList",
        "@id": IDS.BREADCRUMB,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "หน้าแรก", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "โซลูชันองค์กร",
            item: absoluteUrl("/services"),
          },
          { "@type": "ListItem", position: 3, name: data.title, item: canonicalUrl },
        ],
      },

      // NODE 3: FAQ SCHEMA
      {
        "@type": "FAQPage",
        "@id": IDS.FAQ,
        mainEntity: (data.faqs || []).map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}
