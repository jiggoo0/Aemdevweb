/**
 * [SYSTEM CORE]: SEO_SCHEMA_ENGINE v17.0.6 (NATIONWIDE_STABILIZED)
 * [STRATEGY]: JSON-LD Automation | Nationwide Authority | Reference ID Logic
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import type { AreaNode, TemplateMasterData } from "@/types";

/**
 * [HELPER]: จัดการ URL ให้เป็น Absolute Path
 */
export const absoluteUrl = (path: string): string => {
  const root = SITE_CONFIG.siteUrl.endsWith("/")
    ? SITE_CONFIG.siteUrl.slice(0, -1)
    : SITE_CONFIG.siteUrl;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${root}${cleanPath}`;
};

/**
 * [GENERATOR]: PERSON_SCHEMA (Expert Node)
 */
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl("/#expert"),
    name: SITE_CONFIG.expert.legalName,
    alternateName: [
      SITE_CONFIG.expert.legalNameThai,
      SITE_CONFIG.expert.displayName,
    ],
    givenName: SITE_CONFIG.expert.legalNameThai,
    familyName: "Yomkerd",
    jobTitle: SITE_CONFIG.expert.jobTitle,
    description: SITE_CONFIG.expert.role,
    image: absoluteUrl(SITE_CONFIG.expert.avatar),
    url: absoluteUrl(SITE_CONFIG.expert.bioUrl),
    email: SITE_CONFIG.contact.email,
    sameAs: [
      SITE_CONFIG.links.facebook,
      SITE_CONFIG.links.github,
      SITE_CONFIG.links.line,
    ],
    worksFor: { "@id": absoluteUrl("/#organization") },
    knowsAbout: [
      "Technical SEO",
      "Next.js Development",
      "Web Performance Optimization",
      "Software Architecture",
      "Digital Strategy",
    ],
  };
}

/**
 * [GENERATOR]: ORGANIZATION_SCHEMA (Brand Authority)
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
    email: SITE_CONFIG.contact.email,
    
    founder: { "@id": absoluteUrl("/#expert") },
    employee: [{ "@id": absoluteUrl("/#expert") }],
    
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.contact.streetAddress,
      addressLocality: "จังหวัดกำแพงเพชร",
      addressRegion: "ภาคเหนือ",
      postalCode: SITE_CONFIG.contact.postalCode,
      addressCountry: "TH",
    },

    areaServed: [
      { "@type": "Country", "name": "Thailand", "alternateName": "TH" },
      { "@type": "AdministrativeArea", "name": "Bangkok", "alternateName": "กรุงเทพมหานคร" },
      { "@type": "AdministrativeArea", "name": "Chiang Mai", "alternateName": "เชียงใหม่" }
    ],

    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: SITE_CONFIG.contact.phone,
      url: SITE_CONFIG.links.line,
      areaServed: "TH",
      availableLanguage: ["Thai", "English"]
    },
    sameAs: [SITE_CONFIG.links.facebook, SITE_CONFIG.links.github],
  };
}

/**
 * [GENERATOR]: SERVICE_SCHEMA
 */
export function generateServiceSchema(data: TemplateMasterData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absoluteUrl(`/services/${data.templateSlug}/#service`),
    serviceType: "Technical SEO & Web Development",
    name: data.title,
    description: data.description,
    provider: { "@id": absoluteUrl("/#organization") },
    offers: {
      "@type": "Offer",
      price: (data.priceValue || 0).toString(),
      priceCurrency: data.currency || "THB",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(`/services/${data.templateSlug}`),
    },
  };
}

/**
 * [GENERATOR]: LOCAL_BUSINESS_SCHEMA
 */
export function generateLocalBusinessSchema(data: AreaNode) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": absoluteUrl(`/areas/${data.slug}/#localbusiness`),
    name: `${SITE_CONFIG.brandName} ${data.province}`,
    description: data.seoDescription || data.description,
    image: absoluteUrl(data.heroImage || "/images/og-default.webp"),
    url: absoluteUrl(`/areas/${data.slug}`),
    telephone: SITE_CONFIG.contact.phone,
    priceRange: "฿฿-฿฿฿",
    address: {
      "@type": "PostalAddress",
      streetAddress: data.province,
      addressRegion: data.province,
      addressCountry: "TH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "16.4828", 
      longitude: "99.5227",
    },
    areaServed: {
      "@type": "City",
      name: data.province,
    },
    parentOrganization: { "@id": absoluteUrl("/#organization") },
    founder: { "@id": absoluteUrl("/#expert") },
  };
}

/**
 * [GENERATOR]: BREADCRUMB_SCHEMA
 */
export function generateBreadcrumbSchema(items: readonly { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.item),
    })),
  };
}
