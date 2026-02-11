/**
 * [TEMPLATE SCHEMA]: CATALOG_DATA_STRUCTURE v17.9.0 (STABILIZED)
 * [STRATEGY]: Knowledge Graph Linking | ItemList Collection | Semantic Hierarchy
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import { absoluteUrl } from "@/lib/utils";
import type { TemplateMasterData, CatalogItem, ServiceFeature } from "@/types";

export function generateCatalogSchema(data: TemplateMasterData) {
  const siteUrl = SITE_CONFIG.siteUrl;
  const canonicalUrl = absoluteUrl(`/services/${data.templateSlug}`);

  // [DATA MAPPING]: รวมรายการ Node เพื่อสร้าง ItemList
  // ให้ความสำคัญกับ items (CatalogItem) ก่อน ถ้าไม่มีให้ใช้ coreFeatures (ServiceFeature)
  const catalogItems = data.items && data.items.length > 0 ? data.items : data.coreFeatures || [];

  return {
    "@context": "https://schema.org",
    "@graph": [
      // NODE 1: COLLECTION PAGE
      {
        "@type": "CollectionPage",
        "@id": `${canonicalUrl}/#webpage`,
        url: canonicalUrl,
        name: `${data.title} | ${SITE_CONFIG.brandName}`,
        description: data.description,
        image: {
          "@type": "ImageObject",
          url: absoluteUrl(data.image || "/images/og-default.webp"),
        },
        isPartOf: { "@id": absoluteUrl("/#website") },
        breadcrumb: { "@id": `${canonicalUrl}/#breadcrumb` },
        mainEntity: { "@id": `${canonicalUrl}/#itemlist` },
      },

      // NODE 2: ITEM LIST (SEO Deep Scan)
      {
        "@type": "ItemList",
        "@id": `${canonicalUrl}/#itemlist`,
        numberOfItems: catalogItems.length,
        itemListElement: catalogItems.map((item, index) => {
          // [TYPE GUARD]: ตรวจสอบว่า item มี property 'name' หรือไม่
          const itemName =
            "name" in item ? (item as CatalogItem).name : (item as ServiceFeature).title;

          return {
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Service",
              name: itemName,
              description: item.description,
              url: canonicalUrl,
              provider: { "@id": absoluteUrl("/#organization") },
              offeredBy: { "@id": absoluteUrl("/#person") },
            },
          };
        }),
      },

      // NODE 3: BREADCRUMB
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "หน้าแรก", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "บริการทั้งหมด",
            item: absoluteUrl("/services"),
          },
          { "@type": "ListItem", position: 3, name: data.title, item: canonicalUrl },
        ],
      },
    ],
  };
}
