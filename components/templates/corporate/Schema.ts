/**
 * [TEMPLATE SCHEMA]: CORPORATE_SERVICE_STRUCTURE v17.4.5 (GRAPH_ENTERPRISE)
 * [STRATEGY]: Knowledge Graph Architecture | Multi-Entity Linking | Service Authority
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import type { TemplateMasterData } from "@/types";

export function generateCorporateSchema(data: TemplateMasterData) {
  const siteUrl = SITE_CONFIG.siteUrl;
  const canonicalUrl = `${siteUrl}/services/${data.templateSlug}`;
  const cleanPrice = (data.priceValue || 0).toString();

  const IDS = {
    WEBPAGE: `${canonicalUrl}/#webpage`,
    SERVICE: `${canonicalUrl}/#service`,
    ORG: `${siteUrl}/#organization`,
    FAQ: `${canonicalUrl}/#faq`,
    BREADCRUMB: `${canonicalUrl}/#breadcrumb`,
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      // NODE 1: ORGANIZATION
      {
        "@type": "Organization",
        "@id": IDS.ORG,
        name: SITE_CONFIG.brandName,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/images/logo.webp`,
          width: 512,
          height: 512,
          caption: SITE_CONFIG.brandName,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: SITE_CONFIG.contact.phone,
          contactType: "customer service",
          areaServed: "TH",
          availableLanguage: ["Thai", "English"],
        },
        sameAs: [
          SITE_CONFIG.links.facebook,
          SITE_CONFIG.links.github,
          SITE_CONFIG.links.line,
        ].filter(Boolean),
      },

      // NODE 2: SERVICE
      {
        "@type": "Service",
        "@id": IDS.SERVICE,
        serviceType: "Enterprise Digital Infrastructure",
        name: data.title,
        description: data.description,
        image: data.image ? `${siteUrl}${data.image}` : undefined,
        provider: { "@id": IDS.ORG },
        areaServed: { "@type": "Country", name: "Thailand" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Enterprise Capabilities",
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
          seller: { "@id": IDS.ORG },
        },
      },

      // NODE 3: FAQ PAGE
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

      // NODE 4: WEB PAGE
      {
        "@type": "WebPage",
        "@id": IDS.WEBPAGE,
        url: canonicalUrl,
        name: `${data.title} | ${SITE_CONFIG.brandName}`,
        description: data.description,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": IDS.SERVICE },
        breadcrumb: { "@id": IDS.BREADCRUMB },
        mainEntity: { "@id": IDS.SERVICE },
      },

      // NODE 5: BREADCRUMB
      {
        "@type": "BreadcrumbList",
        "@id": IDS.BREADCRUMB,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "หน้าแรก", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "โซลูชันองค์กร", item: `${siteUrl}/services` },
          { "@type": "ListItem", position: 3, name: data.title, item: canonicalUrl },
        ],
      },
    ],
  };
}
