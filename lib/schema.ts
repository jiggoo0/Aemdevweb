/**
 * [SEO UTILITY]: SCHEMA_ENGINE v17.2.5 (STABILIZED_AUTHORITY)
 * [STRATEGY]: Linked Data Orchestration | Entity Resolution | EEAT Compliance
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config"; //
import type { AreaNode, TemplateMasterData } from "@/types"; //

// --- [01. UTILITY INFRASTRUCTURE] ---

/**
 * @function absoluteUrl
 * @description จัดการ URL ให้เป็น Absolute Path 100% เพื่อป้องกันปัญหา URL Discovery ใน Search Console
 */
export const absoluteUrl = (path: string): string => {
  const root = SITE_CONFIG.siteUrl.endsWith("/")
    ? SITE_CONFIG.siteUrl.slice(0, -1)
    : SITE_CONFIG.siteUrl;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${root}${cleanPath}`;
};

// --- [02. CORE ENTITY GENERATORS] ---

/**
 * @function generateOrganizationSchema
 * @description [STABILIZED]: สร้างข้อมูลโครงสร้างระดับแบรนด์ (Organization)
 * ทำหน้าที่เป็นศูนย์กลางอำนาจของ Domain ในระดับสากล
 * (ใช้แทน generateBusinessSchema เพื่อความสอดคล้องกับระบบ Routing)
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: SITE_CONFIG.brandName,
    url: SITE_CONFIG.siteUrl,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/icon-192.png"),
      width: "192",
      height: "192"
    },
    description: SITE_CONFIG.description,
    founder: { "@id": absoluteUrl("/#expert") },
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.contact.streetAddress,
      addressLocality: "Kamphaeng Phet",
      postalCode: SITE_CONFIG.contact.postalCode,
      addressCountry: "TH",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_CONFIG.contact.phone,
      contactType: "customer service",
      availableLanguage: ["Thai", "English"],
    },
    sameAs: [
      SITE_CONFIG.links.facebook,
      SITE_CONFIG.links.line
    ].filter(Boolean) as string[],
  };
}

/**
 * @function generatePersonSchema
 * @description สร้าง Expert Node (Person) เพื่อระบุตัวตน Alongkorn Yomkerd 
 * และเชื่อมโยงความสัมพันธ์กับแบรนด์ (WorksFor) เพื่อคะแนน EEAT
 */
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl("/#expert"),
    name: SITE_CONFIG.expert.legalName,
    givenName: "Alongkorn",
    familyName: "Yomkerd",
    alternateName: [
      SITE_CONFIG.expert.legalNameThai,
      SITE_CONFIG.expert.displayName,
      "นายเอ็มซ่ามากส์"
    ],
    jobTitle: SITE_CONFIG.expert.jobTitle,
    description: SITE_CONFIG.expert.role,
    image: absoluteUrl(SITE_CONFIG.expert.avatar),
    url: absoluteUrl(SITE_CONFIG.expert.bioUrl),
    worksFor: { "@id": absoluteUrl("/#organization") },
    knowsAbout: [
      "Technical SEO",
      "Next.js Development",
      "Web Performance Optimization",
      "Software Architecture"
    ],
  };
}

// --- [03. TARGETED CONTENT GENERATORS] ---

/**
 * @function generateServiceSchema
 * @description สร้างโครงสร้างข้อมูลสำหรับหน้าบริการ (Service & Offer)
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
 * @function generateLocalBusinessSchema
 * @description สร้าง Local Business Node สำหรับ Area Pages 
 * เพื่อช่วยดึงอันดับใน Google Maps และพื้นที่เฉพาะจุด
 */
export function generateLocalBusinessSchema(data: AreaNode) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": absoluteUrl(`/areas/${data.slug}/#localbusiness`),
    name: `${SITE_CONFIG.brandName} ${data.province}`,
    description: data.seoDescription || data.description,
    image: absoluteUrl(data.heroImage),
    url: absoluteUrl(`/areas/${data.slug}`),
    telephone: SITE_CONFIG.contact.phone,
    priceRange: "฿฿-฿฿฿",
    address: {
      "@type": "PostalAddress",
      streetAddress: `ให้บริการในพื้นที่ ${data.province}`,
      addressLocality: data.province,
      addressRegion: data.province,
      addressCountry: "TH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: data.coordinates?.lat.toString() || "16.4828",
      longitude: data.coordinates?.lng.toString() || "99.5227",
    },
    parentOrganization: { "@id": absoluteUrl("/#organization") },
  };
}

/**
 * @function generateBreadcrumbSchema
 * @description สร้าง Breadcrumb List เพื่อช่วยให้ Crawler เข้าใจโครงสร้างลำดับชั้น
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

// [ALIAS FIX]: รักษาระดับการเข้าถึงสำหรับ Layout ที่ต้องการชื่อฟังก์ชันแบบเจาะจง
export const generateBusinessSchema = generateOrganizationSchema;
