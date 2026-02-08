/**
 * [TEMPLATE SCHEMA]: CORPORATE_SERVICE_STRUCTURE v16.7 (ENTERPRISE_SPEC)
 * [STRATEGY]: Organizational Authority | Advanced Rich Snippets | Strict Typing
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import type { TemplateMasterData } from "@/types";

/**
 * @function generateCorporateSchema
 * สร้างชุดข้อมูลโครงสร้างระดับสูง (Enterprise JSON-LD) เพื่อยืนยันสถานะความเป็นผู้เชี่ยวชาญ
 */
export function generateCorporateSchema(data: TemplateMasterData) {
  const features = data?.coreFeatures || [];
  const cleanPrice = (data.priceValue || 0).toString();

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Corporate Digital Infrastructure",
    name: `${data.title} | ${SITE_CONFIG.brandName}`,
    description: data.description,
    image: `${SITE_CONFIG.siteUrl}${data.image || "/images/og-default.webp"}`,
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.siteUrl,
      logo: `${SITE_CONFIG.siteUrl}/images/logo.webp`,
      sameAs: [SITE_CONFIG.links.facebook, SITE_CONFIG.links.github],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: SITE_CONFIG.contact.phone,
        contactType: "customer service",
        areaServed: "TH",
        availableLanguage: ["Thai", "English"],
      },
    },
    areaServed: {
      "@type": "Country",
      name: "Thailand",
    },
    offers: {
      "@type": "Offer",
      price: cleanPrice,
      priceCurrency: data.currency || "THB",
      availability: "https://schema.org/InStock",
      url: `${SITE_CONFIG.siteUrl}/services/${data.templateSlug}`,
      seller: {
        "@type": "Organization",
        name: SITE_CONFIG.brandName,
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Enterprise Capabilities",
      itemListElement: features.map((feat, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: feat?.title || "Enterprise Feature",
          description: feat?.description || "",
        },
      })),
    },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: (data?.faqs || []).map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  };
}
