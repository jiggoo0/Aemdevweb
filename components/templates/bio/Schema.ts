/**
 * [TEMPLATE SCHEMA]: BIO_DATA_STRUCTURE v16.7 (AUTHORITY_SPEC)
 * [STRATEGY]: Person Entity Authority | Identity Linking | Strict Typing
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import type { TemplateMasterData } from "@/types";

/**
 * @function generateBioSchema
 * สร้างชุดข้อมูลโครงสร้าง (Person JSON-LD) ระดับสูง
 * เพื่อส่งสัญญาณความน่าเชื่อถือและความเชี่ยวชาญส่วนบุคคลสู่ Google Knowledge Graph
 */
export function generateBioSchema(data: TemplateMasterData) {
  // Mapping Expertise จาก CoreFeatures
  const expertiseList = (data.coreFeatures || []).map((feat) => feat.title);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.expert.displayName, // ใช้ชื่อจริงจาก Config เพื่อความแม่นยำ
    alternateName: data.title,
    jobTitle: SITE_CONFIG.expert.jobTitle,
    description: data.description,
    image: `${SITE_CONFIG.siteUrl}${SITE_CONFIG.expert.avatar}`,
    url: `${SITE_CONFIG.siteUrl}/services/${data.templateSlug}`,
    sameAs: [SITE_CONFIG.links.facebook, SITE_CONFIG.links.github, SITE_CONFIG.links.line],
    worksFor: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.siteUrl,
    },
    knowsAbout: expertiseList,
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: (data.faqs || []).map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    offers: {
      "@type": "Offer",
      price: (data.priceValue || 0).toString(),
      priceCurrency: data.currency || "THB",
      availability: "https://schema.org/InStock",
      url: `${SITE_CONFIG.siteUrl}/services/${data.templateSlug}`,
    },
  };
}
