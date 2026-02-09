/**
 * [SEO UTILITY]: SCHEMA_ENGINE v17.5.3 (STABILIZED)
 * [STRATEGY]: Graph-Based Entity Resolution | Local Search Dominance | Linked Data
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import { absoluteUrl } from "@/lib/utils";
import type { AreaNode, TemplateMasterData } from "@/types";

// --- [01. CORE ENTITIES: THE FOUNDATION] ---

/**
 * @description สร้างข้อมูลโครงสร้างระดับแบรนด์ (Organization / ProfessionalService)
 * [UPDATE]: เชื่อมโยง Google Merchant ID, Store Code และ Business Profile ID
 */
export function generateOrganizationSchema() {
  const identifiers = [
    {
      "@type": "PropertyValue",
      propertyID: "google_merchant_id",
      value: SITE_CONFIG.expert.googleMerchantId,
    },
    {
      "@type": "PropertyValue",
      propertyID: "google_store_code",
      value: SITE_CONFIG.business.ids?.storeCode,
    },
    {
      "@type": "PropertyValue",
      propertyID: "google_business_profile_id",
      value: SITE_CONFIG.business.ids?.businessProfileId,
    },
  ].filter((item) => item.value); // [SAFETY]: กรองเฉพาะตัวที่มีค่าจริงเท่านั้น

  return {
    "@type": "ProfessionalService", // ระบุประเภทธุรกิจให้ชัดเจนเพื่อ Google Local Algorithm
    "@id": absoluteUrl("/#organization"),
    name: SITE_CONFIG.brandName,
    url: SITE_CONFIG.siteUrl,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/icon-192.png"),
      width: "192",
      height: "192",
    },
    // [STRATEGY]: ใช้ PropertyValue เพื่อระบุ ID หลายประเภทพร้อมกัน (Cross-Platform Validation)
    identifier: identifiers,
    // [OPTIMIZATION]: ปรับ Price Range เป็นเงินบาทเพื่อให้ Google เข้าใจบริบท Local
    priceRange: "฿฿ - ฿฿฿",
    image: absoluteUrl("/images/og-main.png"),
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.contact.streetAddress,
      addressLocality: SITE_CONFIG.business.location,
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
    // [UPDATE]: รวม Google Maps Link เข้ากับ Social Profiles เพื่อสร้าง Web of Trust
    sameAs: [
      SITE_CONFIG.links.googleMaps,
      SITE_CONFIG.links.facebook,
      SITE_CONFIG.links.line,
      SITE_CONFIG.links.github,
    ].filter(Boolean) as string[],
  };
}

/**
 * @description สร้าง Expert Node (Person) เพื่อยืนยันตัวตนผู้เชี่ยวชาญ (EEAT Alignment)
 */
export function generatePersonSchema() {
  return {
    "@type": "Person",
    "@id": absoluteUrl("/#expert"),
    name: SITE_CONFIG.expert.legalName,
    alternateName: SITE_CONFIG.expert.displayName,
    jobTitle: SITE_CONFIG.expert.jobTitle,
    image: absoluteUrl(SITE_CONFIG.expert.avatar),
    url: absoluteUrl(SITE_CONFIG.expert.bioUrl),
    worksFor: { "@id": absoluteUrl("/#organization") },
    knowsAbout: [
      "Technical SEO",
      "Next.js Development",
      "Web Architecture",
      "Core Web Vitals",
      "Conversion Rate Optimization",
    ],
  };
}

// --- [02. DYNAMIC GENERATORS: TARGETED CONTENT] ---

/**
 * @description สร้างโครงสร้างข้อมูลสำหรับหน้าบริการ (Service & Offer)
 */
export function generateServiceSchema(data: TemplateMasterData) {
  return {
    "@type": "Service",
    "@id": absoluteUrl(`/services/${data.templateSlug}/#service`),
    name: data.title,
    description: data.description,
    provider: { "@id": absoluteUrl("/#organization") },
    areaServed: "TH",
    offers: {
      "@type": "Offer",
      price: data.priceValue.toString(),
      priceCurrency: data.currency || "THB",
      url: absoluteUrl(`/services/${data.templateSlug}`),
      availability: "https://schema.org/InStock",
    },
  };
}

/**
 * @description สร้าง Local Business Node สำหรับ Area Pages เพื่อดึงอันดับใน Local Search
 */
export function generateLocalBusinessSchema(data: AreaNode) {
  return {
    "@type": "ProfessionalService",
    "@id": absoluteUrl(`/areas/${data.slug}/#localbusiness`),
    name: `${SITE_CONFIG.brandName} ${data.province}`,
    description: data.seoDescription || data.description,
    image: absoluteUrl(
      data.heroImage || `/images/areas/${data.slug}-node.webp`
    ),
    url: absoluteUrl(`/areas/${data.slug}`),
    telephone: SITE_CONFIG.contact.phone,
    // [OPTIMIZATION]: Consistency กับ Organization หลัก
    priceRange: "฿฿ - ฿฿฿",
    address: {
      "@type": "PostalAddress",
      addressLocality: data.province,
      addressRegion: data.province,
      addressCountry: "TH",
    },
    // [CRITICAL]: เชื่อมโยงสาขาย่อยกลับไปยังองค์กรหลัก (Central Authority)
    parentOrganization: { "@id": absoluteUrl("/#organization") },
    areaServed: {
      "@type": "City",
      name: data.province,
    },
  };
}

/**
 * @description Breadcrumb List เพื่อช่วยให้ Crawler เข้าใจลำดับชั้นและแสดง Rich Snippets
 */
export function generateBreadcrumbSchema(
  items: readonly { name: string; item: string }[]
) {
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

// --- [03. MASTER ORCHESTRATOR] ---

/**
 * @function generateSchemaGraph
 * @description รวบรวม Schema ทั้งหมดเข้าด้วยกันภายใต้ Graph เดียว
 * [STRATEGY]: การใช้ @graph ทำให้ Google เข้าใจความสัมพันธ์ของข้อมูลทั้งหมดในครั้งเดียว
 */
export function generateSchemaGraph(schemas: readonly object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      generateOrganizationSchema(),
      generatePersonSchema(),
      ...schemas,
    ],
  };
}

// ALIASES
export const generateBusinessSchema = generateOrganizationSchema;
