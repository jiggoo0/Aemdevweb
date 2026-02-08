/**
 * [TEMPLATE SCHEMA]: CATALOG_STRUCTURE v16.7 (COLLECTION_SPEC)
 * [STRATEGY]: Advanced ItemList Logic | Search Engine Authority | Strict Typing
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import type { TemplateMasterData } from "@/types";

/**
 * @function generateCatalogSchema
 * สร้างชุดข้อมูล JSON-LD (CollectionPage) เพื่อยืนยัน "Service Authority"
 * และบอก Google ว่าหน้านี้คือหน้ารวมรายการสินค้า/บริการ (Collection)
 */
export function generateCatalogSchema(data: TemplateMasterData) {
  const serviceUrl = `${SITE_CONFIG.siteUrl}/services/${data.templateSlug}`;

  // แปลง items จาก CatalogItem หรือ Benefits มาเป็น ItemList
  const catalogItems = data.items || [];

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${data.title} | ${SITE_CONFIG.brandName}`,
    description: data.description,
    url: serviceUrl,
    image: `${SITE_CONFIG.siteUrl}${data.image || "/images/og-default.webp"}`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.siteUrl}/images/logo.webp`,
      },
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: catalogItems.length,
      itemListElement: catalogItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        description: item.description,
        url: serviceUrl, // หากมีหน้าย่อยให้ใส่ URL หน้าสินค้านั้นๆ แทน
      })),
    },
    breadcrumb: {
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
          name: "บริการทั้งหมด",
          item: `${SITE_CONFIG.siteUrl}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: data.title,
          item: serviceUrl,
        },
      ],
    },
    offers: {
      "@type": "Offer",
      price: (data.priceValue || 0).toString(),
      priceCurrency: data.currency || "THB",
      availability: "https://schema.org/InStock",
      url: serviceUrl,
    },
  };
}
