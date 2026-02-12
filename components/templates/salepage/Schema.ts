/**
 * [SEO PROTOCOL]: SALEPAGE_SCHEMA_GENERATOR v17.9.9 (STABILIZED)
 * [STRATEGY]: Product Authority | EEAT Optimization | JSON-LD Graph
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import type { TemplateMasterData } from "@/types";

/**
 * @function generateSalePageSchema
 * @description สร้าง Schema.org JSON-LD สำหรับ Product และ Offer เพื่อเพิ่ม CTR ใน Search Result
 * [FIXED]: เปลี่ยน SITE_CONFIG.url เป็น siteUrl และลบการอ้างถึง heroImage
 */
export const generateSalePageSchema = (data: TemplateMasterData) => {
  // [RESOLVED]: ใช้ siteUrl จาก Master Configuration
  const productUrl = `${SITE_CONFIG.siteUrl}/services/${data.templateSlug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${productUrl}#product`,
        name: data.title,
        // [RESOLVED]: MasterData ใช้ image เป็น Single Source of Truth
        image: data.image,
        description: data.description,
        brand: {
          "@type": "Brand",
          name: SITE_CONFIG.brandName,
        },
        offers: {
          "@type": "Offer",
          url: productUrl,
          priceCurrency: data.currency || "THB",
          // [RESOLVED]: ใช้ numeric value (priceValue) สำหรับ Schema Validation
          price: data.priceValue || 0,
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          priceValidUntil: "2026-12-31",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "หน้าแรก",
            item: SITE_CONFIG.siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: data.title,
            item: productUrl,
          },
        ],
      },
    ],
  };
};
