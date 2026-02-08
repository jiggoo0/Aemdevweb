/**
 * [SYSTEM CORE]: SEO_SCHEMA_PROTOCOL v17.0.2 (EEAT_STABILIZED)
 * [MANDATE]: JSON-LD Automation | Specialist Authority | Search Engine Readiness
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { AreaNode, TemplateMasterData } from "@/types";
import { SITE_CONFIG } from "@/constants/site-config";

export const absoluteUrl = (path: string): string => {
  const root = SITE_CONFIG.siteUrl.endsWith("/")
    ? SITE_CONFIG.siteUrl.slice(0, -1)
    : SITE_CONFIG.siteUrl;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${root}${cleanPath}`;
};

/**
 * [PUBLIC]: Person Schema (EEAT CORE)
 */
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl("/#expert"),
    name: SITE_CONFIG.expert.legalName,
    alternateName: SITE_CONFIG.expert.displayName,
    image: absoluteUrl(SITE_CONFIG.expert.avatar),
    jobTitle: "Technical SEO Specialist & Web Infrastructure Strategist",
    description: SITE_CONFIG.expert.role,
    url: absoluteUrl(SITE_CONFIG.expert.bioUrl),
    sameAs: [
      SITE_CONFIG.links.facebook,
      SITE_CONFIG.links.github,
    ],
    worksFor: {
      "@id": absoluteUrl("/#organization"), // Link ไปยังองค์กร
    },
  };
}

/**
 * [PUBLIC]: Organization Schema
 * [RECTIFIED]: เพิ่ม streetAddress เพื่อแก้ปัญหาใน Google Search Console
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: SITE_CONFIG.brandName,
    url: SITE_CONFIG.siteUrl,
    logo: absoluteUrl("/images/logo.webp"),
    description: SITE_CONFIG.description,
    founder: { "@id": absoluteUrl("/#expert") },
    address: {
      "@type": "PostalAddress",
      "streetAddress": "จังหวัดกำแพงเพชร", // [FIX]: แนะนำให้อัปเดตข้อมูลจริงใน SITE_CONFIG
      "addressLocality": SITE_CONFIG.contact.address,
      "postalCode": SITE_CONFIG.contact.postalCode,
      "addressCountry": "TH",
    },
    contactPoint: {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": SITE_CONFIG.links.line,
    },
    sameAs: [SITE_CONFIG.links.facebook, SITE_CONFIG.links.github],
  };
}

/**
 * [PUBLIC]: Service Schema
 */
export function generateServiceSchema(service: TemplateMasterData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absoluteUrl(`/services/${service.templateSlug}/#service`),
    name: service.title,
    serviceType: "Technical SEO & Web Development",
    provider: { "@id": absoluteUrl("/#organization") },
    description: service.description,
    offers: {
      "@type": "Offer",
      "price": service.priceValue || 0,
      "priceCurrency": service.currency || "THB",
      "availability": "https://schema.org/InStock",
      "url": absoluteUrl(`/services/${service.templateSlug}`),
    },
  };
}

/**
 * [PUBLIC]: Local Business Schema
 */
export function generateLocalBusinessSchema(area: AreaNode) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": absoluteUrl(`/areas/${area.slug}/#localbusiness`),
    name: `${area.province} Web Infrastructure Specialist - ${SITE_CONFIG.brandName}`,
    description: area.seoDescription || area.description,
    url: absoluteUrl(`/areas/${area.slug}`),
    image: absoluteUrl(area.heroImage || "/images/og-default.webp"),
    address: {
      "@type": "PostalAddress",
      "streetAddress": area.province, // ใส่ชื่อจังหวัดเป็นที่อยู่เริ่มต้น
      "addressRegion": area.province,
      "postalCode": SITE_CONFIG.contact.postalCode,
      "addressCountry": "TH",
    },
    geo: {
      "@type": "GeoCoordinates",
      "latitude": "16.4828", // กำแพงเพชรเป็นจุดศูนย์กลาง Default
      "longitude": "99.5227",
    },
    areaServed: {
      "@type": "City",
      "name": area.province,
    },
    founder: { "@id": absoluteUrl("/#expert") },
  };
}

/**
 * [PUBLIC]: Breadcrumb Schema
 */
export function generateBreadcrumbSchema(items: readonly { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": absoluteUrl(item.item),
    })),
  };
}
