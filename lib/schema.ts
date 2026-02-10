/**
 * [SEO ENGINE]: JSON_LD_GENERATOR v17.5.7 (FIXED_MISSING_EXPORT)
 * [RESPONSIBILITY]: Handle Google Structured Data (JSON-LD) Only
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import { absoluteUrl } from "@/lib/utils";
import type { AreaNode, TemplateMasterData } from "@/types";

// =========================================
// [CORE]: Organization & Person
// =========================================

export function generateOrganizationSchema(): Record<string, unknown> {
  return {
    "@type": "ProfessionalService",
    "@id": absoluteUrl("/#organization"),
    name: SITE_CONFIG.brandName,
    url: SITE_CONFIG.siteUrl,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/icon-192.png"),
      width: "192",
      height: "192",
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
// [DYNAMIC]: Service & Area
// =========================================

export function generateServiceSchema(data: TemplateMasterData): Record<string, unknown> {
  return {
    "@type": "Service",
    "@id": absoluteUrl(`/services/${data.templateSlug}/#service`),
    name: data.title,
    description: data.description,
    provider: { "@id": absoluteUrl("/#organization") },
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

// [FIX]: นำฟังก์ชันนี้กลับมา เพื่อให้หน้า Page ต่างๆ เรียกใช้ได้
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
// [ORCHESTRATOR]
// =========================================

export function generateSchemaGraph(schemas: readonly object[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": [generateOrganizationSchema(), generatePersonSchema(), ...schemas],
  };
}
