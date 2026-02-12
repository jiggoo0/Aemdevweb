/**
 * [SEO ENGINE]: JSON_LD_GRAPH_ORCHESTRATOR v17.9.9 (STABILIZED)
 * [STRATEGY]: Entity Interlinking | identity-First | Rich Snippet Guard
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import { absoluteUrl } from "@/lib/utils";
import type { AreaNode, ServiceData } from "@/types";

// --- [ROOT NODES: STATIC ENTITIES] ---

const websiteNode = {
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  url: SITE_CONFIG.siteUrl,
  name: SITE_CONFIG.brandName,
  publisher: { "@id": absoluteUrl("/#organization") },
  inLanguage: "th-TH",
};

const organizationNode = {
  "@type": "ProfessionalService",
  "@id": absoluteUrl("/#organization"),
  name: SITE_CONFIG.brandName,
  url: SITE_CONFIG.siteUrl,
  logo: {
    "@type": "ImageObject",
    "@id": absoluteUrl("/#logo"),
    url: absoluteUrl("/icon-192.png"),
  },
  image: absoluteUrl("/images/og-main.webp"),
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_CONFIG.contact.streetAddress,
    addressLocality: SITE_CONFIG.business.location,
    addressRegion: SITE_CONFIG.business.region,
    postalCode: SITE_CONFIG.contact.postalCode,
    addressCountry: "TH",
  },
};

const personNode = {
  "@type": "Person",
  "@id": absoluteUrl("/#expert"),
  name: SITE_CONFIG.expert.legalNameThai,
  jobTitle: SITE_CONFIG.expert.jobTitle,
  image: absoluteUrl(SITE_CONFIG.expert.avatar),
  url: absoluteUrl(SITE_CONFIG.expert.bioUrl),
  worksFor: { "@id": absoluteUrl("/#organization") },
};

// --- [GENERATORS: DYNAMIC ENTITIES] ---

/**
 * @function generatePersonSchema
 * @description กู้คืนฟังก์ชันสำหรับหน้า About เพื่อยืนยันตัวตนผู้เชี่ยวชาญ (E-E-A-T)
 * [RESOLVED]: แก้ไขปัญหา Error TS2305 ในหน้า About
 */
export function generatePersonSchema(): Record<string, unknown> {
  return personNode;
}

/**
 * @function generateSchemaGraph
 * @description รวมโหนดทั้งหมดเข้าเป็นก้อนเดียว (Normalized Graph)
 * [FIXED]: เปลี่ยนจาก any[] เป็น Record<string, unknown>[] เพื่อผ่าน Lint
 */
export const generateSchemaGraph = (schemas: Record<string, unknown>[]) => ({
  "@context": "https://schema.org",
  "@graph": [websiteNode, organizationNode, personNode, ...schemas],
});

export const generateServiceSchema = (service: ServiceData) => ({
  "@type": "Service",
  "@id": absoluteUrl(`/services/${service.templateSlug}/#service`),
  name: service.title,
  description: service.description,
  provider: { "@id": absoluteUrl("/#organization") },
  offers: {
    "@type": "Offer",
    price: service.priceValue || 0,
    priceCurrency: service.currency || "THB",
  },
});

export const generateLocalBusinessSchema = (area: AreaNode) => ({
  "@type": "LocalBusiness",
  "@id": absoluteUrl(`/areas/${area.slug}/#localbusiness`),
  name: `${SITE_CONFIG.brandName} - ${area.province}`,
  url: absoluteUrl(`/areas/${area.slug}`),
  address: {
    "@type": "PostalAddress",
    addressLocality: area.province,
    addressCountry: "TH",
  },
  parentOrganization: { "@id": absoluteUrl("/#organization") },
});

export const generateBreadcrumbSchema = (items: { name: string; item: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: it.name,
    item: absoluteUrl(it.item),
  })),
});
