/**
 * [TEMPLATE SCHEMA]: BIO_DATA_STRUCTURE v17.0.1 (GRAPH_OPTIMIZED)
 * [STRATEGY]: Knowledge Graph Linking | Entity Resolution | Invalid Nesting Fix
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import type { TemplateMasterData } from "@/types";

/**
 * @function generateBioSchema
 * สร้างชุดข้อมูลโครงสร้าง (Graph JSON-LD)
 * เชื่อมโยงความสัมพันธ์ระหว่าง:
 * 1. ผู้ให้บริการ (Person/Expert)
 * 2. บริการที่นำเสนอ (Service)
 * 3. ข้อมูลคำถามที่พบบ่อย (FAQPage)
 */
export function generateBioSchema(data: TemplateMasterData) {
  const siteUrl = SITE_CONFIG.siteUrl;
  const canonicalUrl = `${siteUrl}/services/${data.templateSlug}`;
  
  // Mapping Expertise จาก CoreFeatures
  const expertiseList = (data.coreFeatures || []).map((feat) => feat.title);

  return {
    "@context": "https://schema.org",
    "@graph": [
      // --- NODE 1: THE EXPERT (ผู้เชี่ยวชาญ/ผู้ให้บริการ) ---
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`, // Global ID เพื่อใช้อ้างอิงซ้ำ
        name: SITE_CONFIG.expert.displayName,
        alternateName: [SITE_CONFIG.expert.jobTitle, "นายเอ็มซ่ามากส์"],
        image: {
          "@type": "ImageObject",
          url: `${siteUrl}${SITE_CONFIG.expert.avatar}`,
          caption: SITE_CONFIG.expert.displayName,
        },
        description: SITE_CONFIG.expert.bio || "Technical SEO Specialist & Web System Architect",
        jobTitle: SITE_CONFIG.expert.jobTitle,
        worksFor: {
          "@type": "Organization",
          name: SITE_CONFIG.brandName,
          url: siteUrl,
        },
        sameAs: [
          SITE_CONFIG.links.facebook,
          SITE_CONFIG.links.github,
          SITE_CONFIG.links.line,
        ].filter(Boolean), // กรองค่าว่างออก
        knowsAbout: expertiseList,
      },

      // --- NODE 2: THE SERVICE (บริการทำเว็บ Portfolio ที่กำลังขาย) ---
      {
        "@type": "Service",
        "@id": `${canonicalUrl}/#service`,
        url: canonicalUrl,
        name: data.title,
        description: data.description,
        image: data.image ? `${siteUrl}${data.image}` : undefined,
        category: "Web Development",
        provider: {
          "@id": `${siteUrl}/#person`, // เชื่อมโยงกลับไปที่ Node 1
        },
        offers: {
          "@type": "Offer",
          price: (data.priceValue || 0).toString(),
          priceCurrency: data.currency || "THB",
          availability: "https://schema.org/InStock",
          url: canonicalUrl,
          seller: {
            "@id": `${siteUrl}/#person`,
          },
        },
      },

      // --- NODE 3: FAQ (คำถามที่พบบ่อยในหน้านี้) ---
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}/#faq`,
        mainEntity: (data.faqs || []).map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },

      // --- NODE 4: WEB PAGE (หน้านี้คืออะไร) ---
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}/#webpage`,
        url: canonicalUrl,
        name: data.title,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${canonicalUrl}/#service`, // หน้านี้เกี่ยวกับบริการ (Node 2)
        },
      },
    ],
  };
}
