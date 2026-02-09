/**
 * [TEMPLATE SCHEMA]: SALE_PAGE_STRUCTURE v17.0.2 (GRAPH_CONVERSION)
 * [STRATEGY]: Multi-Rich Snippet (Product + FAQ) | Graph Architecture | Strict Typing
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import type { TemplateMasterData } from "@/types";

/**
 * @function generateSalePageSchema
 * สร้างชุดข้อมูล JSON-LD แบบ Graph เพื่อดึงดูดการคลิก (CTR) ด้วยราคาและคำถามที่พบบ่อย
 * เชื่อมโยง: Product (สินค้า) + FAQPage (คำถาม) + WebPage (หน้าเว็บ)
 */
export function generateSalePageSchema(data: TemplateMasterData) {
  const siteUrl = SITE_CONFIG.siteUrl;
  const canonicalUrl = `${siteUrl}/services/${data.templateSlug}`;
  const cleanPrice = (data.priceValue || 0).toString();

  // [SYSTEM]: สร้าง ID กลางเพื่อการเชื่อมโยงที่แม่นยำ
  const IDS = {
    WEBPAGE: `${canonicalUrl}/#webpage`,
    PRODUCT: `${canonicalUrl}/#product`,
    FAQ: `${canonicalUrl}/#faq`,
    ORG: `${siteUrl}/#organization`,
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      // --- NODE 1: PRODUCT (สิ่งที่เสนอขาย: Sale Page Service) ---
      {
        "@type": "Product", // ใช้ Product เพื่อให้โชว์ราคาใน Search Result
        "@id": IDS.PRODUCT,
        name: `${data.title} | ${SITE_CONFIG.brandName}`,
        description: data.description,
        image: `${siteUrl}${data.image || "/images/og-default.webp"}`,
        sku: `AEM-${data.id || "SP"}-SYS`,
        brand: {
          "@type": "Brand",
          name: SITE_CONFIG.brandName,
          logo: `${siteUrl}/images/logo.webp`,
        },
        offers: {
          "@type": "Offer",
          price: cleanPrice,
          priceCurrency: data.currency || "THB",
          availability: "https://schema.org/InStock",
          url: canonicalUrl,
          priceValidUntil: "2026-12-31", // [VALIDITY]: กำหนดอายุราคาเพื่อความน่าเชื่อถือ
          seller: {
            "@id": IDS.ORG,
          },
        },
      },

      // --- NODE 2: FAQ PAGE (คำถามที่พบบ่อย) ---
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

      // --- NODE 3: ORGANIZATION (ผู้ขาย) ---
      {
        "@type": "Organization",
        "@id": IDS.ORG,
        name: SITE_CONFIG.brandName,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/images/logo.webp`,
        },
      },

      // --- NODE 4: WEB PAGE (หน้ารวม) ---
      {
        "@type": "WebPage",
        "@id": IDS.WEBPAGE,
        url: canonicalUrl,
        name: data.title,
        description: data.description,
        isPartOf: { "@id": `${siteUrl}/#website` },
        mainEntity: { "@id": IDS.PRODUCT }, // เนื้อหาหลักของหน้านี้คือ Product
        about: { "@id": IDS.PRODUCT },
        // [LINKING]: บอกว่าหน้านี้มี FAQ อยู่ด้วย
        hasPart: { "@id": IDS.FAQ }, 
      },
    ],
  };
}
