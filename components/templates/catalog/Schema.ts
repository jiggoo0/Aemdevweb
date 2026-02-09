/**
 * [TEMPLATE SCHEMA]: CATALOG_DATA_STRUCTURE v17.0.3 (TYPE_SAFE_FIXED)
 * [STRATEGY]: Knowledge Graph Linking | ItemList Collection | Type Guard Implementation
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import type { TemplateMasterData, CatalogItem, ServiceFeature } from "@/types";

/**
 * @function generateCatalogSchema
 * สร้างชุดข้อมูล JSON-LD แบบ Graph เพื่อยืนยันโครงสร้าง "Collection"
 * เชื่อมโยงหน้าเว็บ (WebPage) เข้ากับ รายการสินค้า (ItemList) และ เส้นทาง (Breadcrumb)
 */
export function generateCatalogSchema(data: TemplateMasterData) {
  const siteUrl = SITE_CONFIG.siteUrl;
  const canonicalUrl = `${siteUrl}/services/${data.templateSlug}`;
  
  // [DATA MAPPING]: รองรับทั้ง items (CatalogItem[]) หรือ fallback ไปใช้ coreFeatures (ServiceFeature[])
  const catalogItems = data.items || data.coreFeatures || [];

  return {
    "@context": "https://schema.org",
    "@graph": [
      // --- NODE 1: WEB PAGE ---
      {
        "@type": "CollectionPage",
        "@id": `${canonicalUrl}/#webpage`,
        url: canonicalUrl,
        name: `${data.title} | ${SITE_CONFIG.brandName}`,
        description: data.description,
        image: {
          "@type": "ImageObject",
          url: `${siteUrl}${data.image || "/images/og-default.webp"}`,
          width: 1200,
          height: 630,
          caption: data.title,
        },
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        breadcrumb: {
          "@id": `${canonicalUrl}/#breadcrumb`,
        },
        mainEntity: {
          "@id": `${canonicalUrl}/#itemlist`,
        },
        publisher: {
          "@type": "Organization",
          name: SITE_CONFIG.brandName,
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/images/logo.webp`,
          },
        },
      },

      // --- NODE 2: ITEM LIST (รายการสินค้า/บริการในหน้านี้) ---
      {
        "@type": "ItemList",
        "@id": `${canonicalUrl}/#itemlist`,
        numberOfItems: catalogItems.length,
        itemListElement: catalogItems.map((item, index) => {
          // [FIX]: Type Guard Logic - แก้ไข Error TS2339
          // ตรวจสอบว่า item มี property 'name' หรือไม่ (CatalogItem มี name, ServiceFeature มี title)
          const itemName = "name" in item 
            ? (item as CatalogItem).name 
            : (item as ServiceFeature).title;

          return {
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Service",
              name: itemName,
              description: item.description,
              image: item.icon ? undefined : undefined,
              url: canonicalUrl,
              provider: {
                "@id": `${siteUrl}/#organization`,
              },
            },
          };
        }),
      },

      // --- NODE 3: BREADCRUMB ---
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "หน้าแรก",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "บริการทั้งหมด",
            item: `${siteUrl}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: data.title,
            item: canonicalUrl,
          },
        ],
      },

      // --- NODE 4: OFFER ---
      {
        "@type": "Offer",
        "@id": `${canonicalUrl}/#offer`,
        price: (data.priceValue || 0).toString(),
        priceCurrency: data.currency || "THB",
        availability: "https://schema.org/InStock",
        url: canonicalUrl,
        itemOffered: {
          "@id": `${canonicalUrl}/#webpage`,
        },
      },
    ],
  };
}
