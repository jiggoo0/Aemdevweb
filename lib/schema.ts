/**
 * [SYSTEM CORE]: SEO_SCHEMA_PROTOCOL v17.0.4 (EEAT_STABILIZED_TH)
 * [MANDATE]: JSON-LD Automation | Specialist Authority | Search Engine Readiness
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
// ตรวจสอบ path ของ types ให้ตรงกับโปรเจกต์จริงของคุณ
import type { AreaNode, TemplateMasterData } from "@/types";

// Helper สำหรับจัดการ URL ให้เป็น Absolute Path ป้องกัน Double Slash
export const absoluteUrl = (path: string): string => {
  const root = SITE_CONFIG.siteUrl.endsWith("/")
    ? SITE_CONFIG.siteUrl.slice(0, -1)
    : SITE_CONFIG.siteUrl;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${root}${cleanPath}`;
};

/**
 * [PUBLIC]: Person Schema (EEAT CORE)
 * ใช้สำหรับหน้า About หรือหน้าแรก เพื่อยืนยันตัวตนผู้เชี่ยวชาญ
 */
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl("/#expert"),
    name: SITE_CONFIG.expert.legalName,
    alternateName: [
      SITE_CONFIG.expert.legalNameThai,
      SITE_CONFIG.expert.displayName
    ],
    givenName: SITE_CONFIG.expert.legalNameThai,
    familyName: "Yomkert", // ตามข้อมูลเดิม (หรือจะแก้เป็น Yomkerd ให้ตรงกับ legalName ก็ได้ครับ)
    image: absoluteUrl(SITE_CONFIG.expert.avatar),
    jobTitle: SITE_CONFIG.expert.jobTitle,
    description: SITE_CONFIG.expert.role,
    url: absoluteUrl(SITE_CONFIG.expert.bioUrl),
    email: SITE_CONFIG.contact.email,
    sameAs: [
      SITE_CONFIG.links.facebook,
      SITE_CONFIG.links.github,
      SITE_CONFIG.links.line
    ],
    worksFor: {
      "@id": absoluteUrl("/#organization"),
    },
    knowsAbout: [
      "Technical SEO",
      "Next.js Development",
      "Web Performance Optimization",
      "Software Architecture"
    ]
  };
}

/**
 * [PUBLIC]: Organization Schema
 * ใช้สำหรับ Footer หรือหน้า Contact
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
    // แก้ไข employee ให้เป็น Array หรือ Object ตาม Schema Standard
    employee: [{ "@id": absoluteUrl("/#expert") }],
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.contact.streetAddress,
      addressLocality: SITE_CONFIG.contact.address,
      postalCode: SITE_CONFIG.contact.postalCode,
      addressCountry: "TH",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: SITE_CONFIG.contact.phone,
      url: SITE_CONFIG.links.line,
      areaServed: "TH",
      availableLanguage: ["Thai", "English"]
    },
    sameAs: [
      SITE_CONFIG.links.facebook,
      SITE_CONFIG.links.github
    ],
  };
}

/**
 * [PUBLIC]: Service Schema
 * ใช้สำหรับหน้า Service Detail
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
      // ตรวจสอบค่า Null ก่อนใช้งาน
      price: service.priceValue ? service.priceValue : 0,
      priceCurrency: service.currency || "THB",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(`/services/${service.templateSlug}`),
    },
  };
}

/**
 * [PUBLIC]: Local Business Schema
 * ใช้สำหรับหน้า Landing Page รายจังหวัด
 */
export function generateLocalBusinessSchema(area: AreaNode) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": absoluteUrl(`/areas/${area.slug}/#localbusiness`),
    name: `${SITE_CONFIG.brandName} ${area.province}`,
    description: area.seoDescription || area.description,
    url: absoluteUrl(`/areas/${area.slug}`),
    image: absoluteUrl(area.heroImage || "/images/og-default.webp"),
    priceRange: "฿฿-฿฿฿",
    address: {
      "@type": "PostalAddress",
      streetAddress: area.province, // ปรับให้ดึงที่อยู่จริงของสาขานั้นๆ ถ้ามี
      addressRegion: area.province,
      postalCode: SITE_CONFIG.contact.postalCode, // ควรปรับให้เป็นรหัสปณ.ของจังหวัดนั้นๆ
      addressCountry: "TH",
    },
    geo: {
      "@type": "GeoCoordinates",
      // ค่า default พิกัดกำแพงเพชร
      latitude: "16.4828",
      longitude: "99.5227",
    },
    areaServed: {
      "@type": "City",
      name: area.province,
    },
    founder: { "@id": absoluteUrl("/#expert") },
    parentOrganization: { "@id": absoluteUrl("/#organization") }
  };
}

/**
 * [PUBLIC]: Breadcrumb Schema
 * ใช้สำหรับทุกหน้าที่มี Breadcrumb Navigation
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
