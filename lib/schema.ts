/**
 * [SYSTEM CORE]: SEO_SCHEMA_PROTOCOL v16.3 (EEAT_OPTIMIZED)
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
 * สร้างตัวตนผู้เชี่ยวชาญเพื่อให้ Bot จับคู่กับความเชี่ยวชาญระดับสากล
 */
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl("/#expert"),
    name: SITE_CONFIG.expert.legalName,
    alternateName: SITE_CONFIG.expert.displayName,
    image: absoluteUrl(SITE_CONFIG.expert.avatar),
    // [STRATEGY]: ระบุ JobTitle เป็นภาษาอังกฤษเพื่อให้ Bot จัดหมวดหมู่ได้ทันที
    jobTitle: "Technical SEO Specialist & Web Infrastructure Strategist",
    description: SITE_CONFIG.expert.role,
    url: absoluteUrl(SITE_CONFIG.expert.bioUrl),
    sameAs: [
      SITE_CONFIG.links.facebook,
      SITE_CONFIG.links.github,
      // ใส่ Social อื่นๆ ถ้ามีเพื่อให้ Bot ตรวจสอบประวัติการทำงาน (Trust)
    ],
    worksFor: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
    },
  };
}

/**
 * [PUBLIC]: Organization Schema
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
    founder: { "@id": absoluteUrl("/#expert") }, // เชื่อมโยงไปยัง Person Schema
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_CONFIG.contact.address,
      postalCode: SITE_CONFIG.contact.postalCode,
      addressCountry: "TH",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: SITE_CONFIG.links.line,
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
    name: service.title,
    serviceType: "Technical SEO & Web Development", // ระบุประเภทหลักให้ชัดเจน
    provider: { "@id": absoluteUrl("/#organization") },
    description: service.description,
    offers: {
      "@type": "Offer",
      price: service.priceValue,
      priceCurrency: service.currency || "THB",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(`/services/${service.templateSlug}`),
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
    name: `${area.province} Web Infrastructure Specialist - ${SITE_CONFIG.brandName}`,
    description: area.seoDescription || area.description,
    url: absoluteUrl(`/areas/${area.slug}`),
    image: absoluteUrl(area.heroImage || "/images/og-default.webp"),
    address: {
      "@type": "PostalAddress",
      addressRegion: area.province,
      addressCountry: "TH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "16.4828",
      longitude: "99.5227",
    },
    areaServed: {
      "@type": "City",
      name: area.province,
    },
    founder: { "@id": absoluteUrl("/#expert") }, // ยืนยันว่าใครเป็นผู้ดูแลพื้นที่นี้
  };
}

/**
 * [PUBLIC]: Breadcrumb Schema
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
