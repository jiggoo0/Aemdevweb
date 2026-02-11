/**
 * [SEO ENGINE]: JSON_LD_GENERATOR v17.7.5 (GRAPH_HARDENED)
 * [STRATEGY]: Entity Graph Interlinking | Identity Validation | Doorway Defense
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import { absoluteUrl } from "@/lib/utils";
import type { AreaNode, TemplateMasterData } from "@/types";

// =========================================
// [01] ROOT ENTITIES: Website & Organization
// =========================================

/**
 * @function generateWebsiteSchema
 * @description สร้างโหนดหลักของ Website เพื่อใช้เป็นที่อยู่อาศัยของหน้าย่อย (isPartOf)
 */
export function generateWebsiteSchema(): Record<string, unknown> {
  return {
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: SITE_CONFIG.siteUrl,
    name: SITE_CONFIG.brandName,
    description: SITE_CONFIG.description,
    publisher: { "@id": absoluteUrl("/#organization") },
    inLanguage: "th-TH",
  };
}

/**
 * @function generateOrganizationSchema
 * @description จุดศูนย์กลางของกราฟข้อมูล (Centralized Node)
 */
export function generateOrganizationSchema(): Record<string, unknown> {
  return {
    "@type": "ProfessionalService",
    "@id": absoluteUrl("/#organization"),
    name: SITE_CONFIG.brandName,
    url: SITE_CONFIG.siteUrl,
    logo: {
      "@type": "ImageObject",
      "@id": absoluteUrl("/#logo"),
      url: absoluteUrl("/icon-192.png"),
      width: "192",
      height: "192",
      caption: SITE_CONFIG.brandName,
    },
    image: absoluteUrl("/images/og-main.png"),
    priceRange: "฿฿ - ฿฿฿",
    foundingDate: SITE_CONFIG.business.established,
    founder: { "@id": absoluteUrl("/#expert") },
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.contact.streetAddress,
      addressLocality: SITE_CONFIG.business.location,
      addressRegion: SITE_CONFIG.business.location,
      postalCode: SITE_CONFIG.contact.postalCode,
      addressCountry: "TH",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_CONFIG.contact.phone,
      contactType: "customer service",
      areaServed: "TH",
      availableLanguage: ["Thai", "English"],
    },
    sameAs: [
      SITE_CONFIG.links.googleMaps,
      SITE_CONFIG.links.facebook,
      SITE_CONFIG.links.line,
      SITE_CONFIG.links.github,
    ].filter(Boolean),
  };
}

export function generatePersonSchema(): Record<string, unknown> {
  return {
    "@type": "Person",
    "@id": absoluteUrl("/#expert"),
    name: `${SITE_CONFIG.expert.legalNameThai} (${SITE_CONFIG.expert.legalName})`,
    alternateName: SITE_CONFIG.expert.displayName,
    jobTitle: SITE_CONFIG.expert.jobTitle,
    image: absoluteUrl(SITE_CONFIG.expert.avatar),
    url: absoluteUrl(SITE_CONFIG.expert.bioUrl),
    worksFor: { "@id": absoluteUrl("/#organization") },
    sameAs: [SITE_CONFIG.links.facebook, SITE_CONFIG.links.github].filter(Boolean),
  };
}

// =========================================
// [02] DYNAMIC ENTITIES: Service & Area
// =========================================

export function generateServiceSchema(data: TemplateMasterData): Record<string, unknown> {
  return {
    "@type": "Service",
    "@id": absoluteUrl(`/services/${data.templateSlug}/#service`),
    name: data.title,
    description: data.description,
    provider: { "@id": absoluteUrl("/#organization") }, // Link to Central Node
    isPartOf: { "@id": absoluteUrl("/#website") }, // Link to Website Node
    areaServed: "TH",
    offers: {
      "@type": "Offer",
      price: data.priceValue?.toString() || "0",
      priceCurrency: data.currency || "THB",
      url: absoluteUrl(`/services/${data.templateSlug}`),
      availability: "https://schema.org/InStock",
    },
  };
}

/**
 * @function generateLocalBusinessSchema
 * @description เชื่อมโยงหน้าจังหวัดย่อยเข้ากับกิจการหลัก เพื่อป้องกันการโดนมองว่าเป็น Spam
 */
export function generateLocalBusinessSchema(data: AreaNode): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    "@type": "ProfessionalService",
    "@id": absoluteUrl(`/areas/${data.slug}/#localbusiness`),
    name: `${SITE_CONFIG.brandName} ${data.province}`,
    description: data.seoDescription || data.description,
    image: absoluteUrl(data.heroImage || `/images/areas/${data.slug}-node.webp`),
    url: absoluteUrl(`/areas/${data.slug}`),
    telephone: SITE_CONFIG.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: data.province,
      addressRegion: data.province,
      addressCountry: "TH",
    },
    // [HARDENED]: เชื่อมโยง ID สำคัญ
    isPartOf: { "@id": absoluteUrl("/#website") }, // ยืนยันว่าเป็นส่วนหนึ่งของเว็บหลัก
    provider: { "@id": absoluteUrl("/#organization") }, // ยืนยันผู้ให้บริการหลัก
    parentOrganization: { "@id": absoluteUrl("/#organization") },
    areaServed: {
      "@type": "City",
      name: data.province,
    },
  };

  if (data.coordinates) {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: data.coordinates.lat,
      longitude: data.coordinates.lng,
    };
  }

  return schema;
}

export function generateBreadcrumbSchema(
  items: readonly { name: string; item: string }[],
): Record<string, unknown> {
  return {
    "@type": "BreadcrumbList",
    "@id": absoluteUrl("/#breadcrumb"),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.item),
    })),
  };
}

// =========================================
// [03] ORCHESTRATOR
// =========================================

/**
 * @function generateSchemaGraph
 * @description รวมทุกโหนดเข้าด้วยกันเป็นก้อนเดียว (Entity Graph) เพื่อให้ Google เข้าใจบริบททั้งหมด
 */
export function generateSchemaGraph(schemas: readonly object[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": [
      generateWebsiteSchema(), // Root Node 1
      generateOrganizationSchema(), // Root Node 2
      generatePersonSchema(), // Root Node 3
      ...schemas, // Page Specific Nodes
    ],
  };
}
