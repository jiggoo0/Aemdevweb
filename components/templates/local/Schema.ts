/**
 * [TEMPLATE SCHEMA]: LOCAL_BUSINESS_STRUCTURE v17.3.9 (STABILIZED)
 * [STRATEGY]: Service Area Business (SAB) | Geo-Targeting | Entity Graphing
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import type { AreaNode } from "@/types";

/**
 * @function generateLocalBusinessSchema
 * สร้าง JSON-LD แบบ Graph เพื่อระบุพื้นที่ให้บริการ (Service Area) 
 * [STABILIZED]: เชื่อมโยงความสัมพันธ์ระหว่างบทความและพิกัดภูมิศาสตร์
 */
export function generateLocalBusinessSchema(data: AreaNode) {
  const pageUrl = `${SITE_CONFIG.siteUrl}/areas/${data.slug}`;
  const provinceName = data.province;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        "url": pageUrl,
        "name": `${data.title} | ${SITE_CONFIG.brandName}`,
        "description": data.seoDescription || data.description,
        "isPartOf": { "@id": `${SITE_CONFIG.siteUrl}/#website` },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "หน้าแรก", "item": SITE_CONFIG.siteUrl },
            { "@type": "ListItem", "position": 2, "name": "พื้นที่ให้บริการ", "item": `${SITE_CONFIG.siteUrl}/areas` },
            { "@type": "ListItem", "position": 3, "name": provinceName, "item": pageUrl },
          ],
        },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        "serviceType": "Technical SEO & Web Development",
        "name": `รับทำเว็บไซต์และ SEO ${provinceName}`,
        "provider": { "@id": `${SITE_CONFIG.siteUrl}/#organization` },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": provinceName,
            "address": {
              "@type": "PostalAddress",
              "addressRegion": provinceName,
              "addressCountry": "TH",
            },
          },
          ...(data.districts || []).map((district: string) => ({
            "@type": "AdministrativeArea",
            "name": `${district}, ${provinceName}`,
          })),
        ],
      }
    ],
  };
}
