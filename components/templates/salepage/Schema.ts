/**
 * [TEMPLATE SCHEMA]: SALE_PAGE_STRUCTURE v17.3.9 (GRAPH_CONVERSION)
 * [STRATEGY]: Multi-Rich Snippet (Product + FAQ) | Graph Architecture | Strict Typing
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import type { TemplateMasterData } from "@/types";

/**
 * @function generateSalePageSchema
 * สร้างชุดข้อมูล JSON-LD แบบ Graph เพื่อดึงจุดเด่นด้านราคาและคำถามที่พบบ่อยสู่ Search Result
 */
export function generateSalePageSchema(data: TemplateMasterData) {
  const siteUrl = SITE_CONFIG.siteUrl;
  const canonicalUrl = `${siteUrl}/services/${data.templateSlug}`;
  const cleanPrice = (data.priceValue || 0).toString();

  // [SYSTEM]: Centralized ID Management เพื่อการเชื่อมโยงข้อมูลที่สมบูรณ์
  const IDS = {
    WEBPAGE: `${canonicalUrl}/#webpage`,
    PRODUCT: `${canonicalUrl}/#product`,
    FAQ: `${canonicalUrl}/#faq`,
    ORG: `${siteUrl}/#organization`,
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product", 
        "@id": IDS.PRODUCT,
        "name": `${data.title} | ${SITE_CONFIG.brandName}`,
        "description": data.description,
        "image": `${siteUrl}${data.image || "/images/og-default.webp"}`,
        "sku": `AEM-${data.id || "SP"}-SYS`,
        "brand": {
          "@type": "Brand",
          "name": SITE_CONFIG.brandName
        },
        "offers": {
          "@type": "Offer",
          "price": cleanPrice,
          "priceCurrency": data.currency || "THB",
          "availability": "https://schema.org/InStock",
          "url": canonicalUrl,
          "priceValidUntil": "2026-12-31",
          "seller": { "@id": IDS.ORG }
        }
      },
      {
        "@type": "FAQPage",
        "@id": IDS.FAQ,
        "mainEntity": (data.faqs || []).map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      },
      {
        "@type": "Organization",
        "@id": IDS.ORG,
        "name": SITE_CONFIG.brandName,
        "url": siteUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteUrl}/images/logo.webp`
        }
      },
      {
        "@type": "WebPage",
        "@id": IDS.WEBPAGE,
        "url": canonicalUrl,
        "name": data.title,
        "description": data.description,
        "isPartOf": { "@id": `${siteUrl}/#website` },
        "mainEntity": { "@id": IDS.PRODUCT },
        "hasPart": { "@id": IDS.FAQ }
      }
    ]
  };
}
