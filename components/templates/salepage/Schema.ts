/**
 * [TEMPLATE SCHEMA]: SALE_PAGE_STRUCTURE v16.7 (ENHANCED)
 * [STRATEGY]: Advanced Product SEO | Secure Pricing Logic | Strict Typing
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import type { TemplateMasterData } from "@/types";

/**
 * @function generateSalePageSchema
 * สร้าง JSON-LD ระดับสูงเพื่อส่งสัญญาณความน่าเชื่อถือให้กับ Search Engine (Product & Offer)
 */
export function generateSalePageSchema(data: TemplateMasterData) {
  // [CLEANER]: ระบบทำความสะอาดข้อมูลราคาเพื่อความปลอดภัยของ Schema
  const cleanPrice = (data.priceValue || 0).toString();

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${data.title} | ${SITE_CONFIG.brandName}`,
    description: data.description,
    image: `${SITE_CONFIG.siteUrl}${data.image || "/images/og-default.webp"}`,
    sku: `AEM-${data.id}-SP`,
    brand: {
      "@type": "Brand",
      name: SITE_CONFIG.brandName,
      logo: `${SITE_CONFIG.siteUrl}/images/logo.webp`,
    },
    offers: {
      "@type": "Offer",
      price: cleanPrice,
      priceCurrency: data.currency || "THB",
      availability: "https://schema.org/InStock",
      url: `${SITE_CONFIG.siteUrl}/services/${data.templateSlug}`,
      priceValidUntil: "2026-12-31",
      seller: {
        "@type": "Organization",
        name: SITE_CONFIG.brandName,
      },
    },
    // [ENHANCEMENT]: เพิ่ม FAQ Schema เข้าไปใน Product เพื่อโอกาสติด Rich Snippets
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
  };
}
