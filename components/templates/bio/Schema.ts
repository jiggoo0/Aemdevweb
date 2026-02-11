/**
 * [TEMPLATE SCHEMA]: BIO_DATA_STRUCTURE v17.9.0 (STABILIZED)
 * [STRATEGY]: Knowledge Graph Linking | Entity Resolution | Semantic Authority
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import { absoluteUrl } from "@/lib/utils";
import type { TemplateMasterData } from "@/types";

export function generateBioSchema(data: TemplateMasterData) {
  const canonicalUrl = absoluteUrl(`/services/${data.templateSlug}`);

  // [SAFETY]: ป้องกัน Error กรณีข้อมูล Array เป็น undefined
  const expertiseList = (data.coreFeatures || []).map((feat) => feat.title);
  const price = (data.priceValue || 0).toString();

  return {
    "@context": "https://schema.org",
    "@graph": [
      // NODE 1: THE EXPERT (Person Entity)
      {
        "@type": "Person",
        "@id": absoluteUrl("/#person"),
        name: SITE_CONFIG.expert.displayName,
        alternateName: [SITE_CONFIG.expert.jobTitle, SITE_CONFIG.expert.legalNameThai],
        image: {
          "@type": "ImageObject",
          "@id": absoluteUrl("/#avatar"),
          url: absoluteUrl(SITE_CONFIG.expert.avatar),
        },
        description: SITE_CONFIG.expert.bio || "Technical SEO Specialist",
        jobTitle: SITE_CONFIG.expert.jobTitle,
        worksFor: { "@id": absoluteUrl("/#organization") },
        url: absoluteUrl(SITE_CONFIG.expert.bioUrl),
        sameAs: [
          SITE_CONFIG.links.facebook,
          SITE_CONFIG.links.github,
          SITE_CONFIG.links.line,
        ].filter(Boolean),
        knowsAbout: expertiseList,
      },

      // NODE 2: THE SERVICE (Offering)
      {
        "@type": "Service",
        "@id": `${canonicalUrl}/#service`,
        name: data.title,
        description: data.description,
        provider: { "@id": absoluteUrl("/#person") },
        offers: {
          "@type": "Offer",
          price: price,
          priceCurrency: data.currency || "THB",
          availability: "https://schema.org/InStock",
          url: canonicalUrl,
          seller: { "@id": absoluteUrl("/#person") },
        },
      },

      // NODE 3: WEB PAGE
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}/#webpage`,
        url: canonicalUrl,
        name: data.title,
        description: data.description,
        isPartOf: { "@id": absoluteUrl("/#website") },
        about: { "@id": absoluteUrl("/#person") },
        mainEntity: { "@id": `${canonicalUrl}/#service` },
      },
    ],
  };
}
