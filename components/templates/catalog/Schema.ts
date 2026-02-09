/**
 * [TEMPLATE SCHEMA]: CATALOG_DATA_STRUCTURE v17.3.9 (STABILIZED)
 * [STRATEGY]: Knowledge Graph Linking | ItemList Collection | Type-Safe Registry
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import type { TemplateMasterData, CatalogItem, ServiceFeature } from "@/types";

/**
 * @function generateCatalogSchema
 * สร้างชุดข้อมูล JSON-LD แบบ Graph เพื่อยืนยันโครงสร้าง "Collection" 
 * [STABILIZED]: เชื่อมโยง ItemList เข้ากับสถาปัตยกรรม WebPage อย่างเป็นระบบ
 */
export function generateCatalogSchema(data: TemplateMasterData) {
  const siteUrl = SITE_CONFIG.siteUrl;
  const canonicalUrl = `${siteUrl}/services/${data.templateSlug}`;
  
  // [DATA MAPPING]: ระบบตรวจจับความหลากหลายของ Data Source
  const catalogItems = data.items || data.coreFeatures || [];

  return {
    "@context": "https://schema.org",
    "@graph": [
      // --- NODE 1: COLLECTION PAGE (The Archive Authority) ---
      {
        "@type": "CollectionPage",
        "@id": `${canonicalUrl}/#webpage`,
        "url": canonicalUrl,
        "name": `${data.title} | ${SITE_CONFIG.brandName}`,
        "description": data.description,
        "image": {
          "@type": "ImageObject",
          "url": `${siteUrl}${data.image || "/images/og-default.webp"}`,
        },
        "isPartOf": { "@id": `${siteUrl}/#website` },
        "breadcrumb": { "@id": `${canonicalUrl}/#breadcrumb` },
        "mainEntity": { "@id": `${canonicalUrl}/#itemlist` },
      },

      // --- NODE 2: ITEM LIST (Structured Collection Data) ---
      {
        "@type": "ItemList",
        "@id": `${canonicalUrl}/#itemlist`,
        "numberOfItems": catalogItems.length,
        "itemListElement": catalogItems.map((item, index) => {
          const itemName = "name" in item 
            ? (item as CatalogItem).name 
            : (item as ServiceFeature).title;

          return {
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "Service",
              "name": itemName,
              "description": item.description,
              "url": canonicalUrl,
              "provider": { "@id": `${siteUrl}/#organization` },
            },
          };
        }),
      },

      // --- NODE 3: BREADCRUMB LIST ---
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}/#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "หน้าแรก", "item": siteUrl },
          { "@type": "ListItem", "position": 2, "name": "บริการทั้งหมด", "item": `${siteUrl}/services` },
          { "@type": "ListItem", "position": 3, "name": data.title, "item": canonicalUrl },
        ],
      }
    ],
  };
}
