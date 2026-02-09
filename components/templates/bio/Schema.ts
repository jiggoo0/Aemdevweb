/**
 * [TEMPLATE SCHEMA]: BIO_DATA_STRUCTURE v17.3.9 (STABILIZED)
 * [STRATEGY]: Knowledge Graph Linking | Entity Resolution | Semantic Authority
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import type { TemplateMasterData } from "@/types";

/**
 * @function generateBioSchema
 * สร้างชุดข้อมูลโครงสร้าง (Graph JSON-LD) เพื่อยืนยันตัวตนผู้เชี่ยวชาญ
 */
export function generateBioSchema(data: TemplateMasterData) {
  const siteUrl = SITE_CONFIG.siteUrl;
  const canonicalUrl = `${siteUrl}/services/${data.templateSlug}`;
  const expertiseList = (data.coreFeatures || []).map((feat) => feat.title);

  return {
    "@context": "https://schema.org",
    "@graph": [
      // --- NODE 1: THE EXPERT (Entity Resolution) ---
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        "name": SITE_CONFIG.expert.displayName,
        "alternateName": [SITE_CONFIG.expert.jobTitle],
        "image": {
          "@type": "ImageObject",
          "url": `${siteUrl}${SITE_CONFIG.expert.avatar}`,
        },
        "description": SITE_CONFIG.expert.bio || "Technical SEO Specialist",
        "jobTitle": SITE_CONFIG.expert.jobTitle,
        "worksFor": { "@type": "Organization", "name": SITE_CONFIG.brandName },
        "sameAs": [
          SITE_CONFIG.links.facebook,
          SITE_CONFIG.links.github,
          SITE_CONFIG.links.line,
        ].filter(Boolean),
        "knowsAbout": expertiseList,
      },

      // --- NODE 2: THE SERVICE (Identity-Linked Offering) ---
      {
        "@type": "Service",
        "@id": `${canonicalUrl}/#service`,
        "url": canonicalUrl,
        "name": data.title,
        "description": data.description,
        "provider": { "@id": `${siteUrl}/#person` },
        "offers": {
          "@type": "Offer",
          "price": (data.priceValue || 0).toString(),
          "priceCurrency": data.currency || "THB",
          "availability": "https://schema.org/InStock",
          "seller": { "@id": `${siteUrl}/#person` },
        },
      },

      // --- NODE 3: WEB PAGE (Strategic Context) ---
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}/#webpage`,
        "url": canonicalUrl,
        "name": data.title,
        "isPartOf": { "@id": `${siteUrl}/#website` },
        "about": { "@id": `${siteUrl}/#person` },
        "mainEntity": { "@id": `${canonicalUrl}/#service` }
      }
    ],
  };
}
