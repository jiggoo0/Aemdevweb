/**
 * [SEO UTILITY]: SCHEMA_ENGINE v17.5.5 (IDENTITY_LOCKED)
 * [STRATEGY]: High-Fidelity Identity Mapping | EEAT Dominance | Entity Linking
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import { absoluteUrl } from "@/lib/utils";
import type { AreaNode, TemplateMasterData } from "@/types";

// --- [01. CORE ENTITIES: THE FOUNDATION] ---

/**
 * @description สร้างข้อมูลโครงสร้างระดับแบรนด์ (Organization)
 * [UPDATE]: เชื่อมโยง Founder และปรับปรุงที่ตั้งเพื่อผลลัพธ์ Local Search 
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
  ].filter((item) => item.value);

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

    // [EEAT_LINKING]: ยืนยันตัวตนเจ้าของธุรกิจ (ทำให้ชื่อ อลงกรณ์ ยมเกิด ปรากฏในโหนดบริษัท)
    founder: { "@id": absoluteUrl("/#expert") },
    member: { "@id": absoluteUrl("/#expert") },
    employee: { "@id": absoluteUrl("/#expert") },
    
    // [STRATEGY]: Cross-Platform Verification IDs
    identifier: identifiers,

    // [LOCAL_SEO_FIX]: ปรับแต่งที่ตั้งให้แม่นยำ (Target: Kamphaeng Phet Hub)
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.contact.streetAddress, 
      addressLocality: "อำเภอเมืองกำแพงเพชร", 
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
    ].filter(Boolean) as string[],
  };
}

/**
 * @description สร้าง Expert Node (Person) - นายอลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์)
 * [UPDATE]: ใส่ทั้งชื่อไทย-อังกฤษ และฉายา เพื่อเจาะจงตัวตน (Entity Locking)
 */
export function generatePersonSchema() {
  return {
    "@type": "Person",
    "@id": absoluteUrl("/#expert"),
    // [NAME_STRATEGY]: แสดงชื่อจริงทั้ง 2 ภาษา เพื่อให้ Google AI เชื่อมโยงได้แม่นยำ
    name: `${SITE_CONFIG.expert.legalNameThai} (${SITE_CONFIG.expert.legalName})`,
    alternateName: SITE_CONFIG.expert.displayName, // นายเอ็มซ่ามากส์
    givenName: "อลงกรณ์",
    familyName: "ยมเกิด",
    jobTitle: SITE_CONFIG.expert.jobTitle,
    image: absoluteUrl(SITE_CONFIG.expert.avatar),
    url: absoluteUrl(SITE_CONFIG.expert.bioUrl),
    
    // [REVERSE_LINK]: ยืนยันความสัมพันธ์กับองค์กร
    worksFor: { "@id": absoluteUrl("/#organization") },
    
    // [EEAT_SIGNALS]: ความเชี่ยวชาญเฉพาะทาง
    knowsAbout: [
      "Technical SEO",
      "Next.js Development",
      "Web Architecture",
      "Core Web Vitals",
      "Google Business Profile Strategy",
    ],
    // [IDENTIFICATION]: ลิงก์โซเชียลส่วนตัวเพื่อสร้าง Web of Trust
    sameAs: [
      SITE_CONFIG.links.facebook,
      SITE_CONFIG.links.github,
    ].filter(Boolean) as string[],
  };
}

// --- [02. DYNAMIC GENERATORS: TARGETED CONTENT] ---

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

export function generateLocalBusinessSchema(data: AreaNode) {
  return {
    "@type": "ProfessionalService",
    "@id": absoluteUrl(`/areas/${data.slug}/#localbusiness`),
    name: `${SITE_CONFIG.brandName} ${data.province}`,
    description: data.seoDescription || data.description,
    image: absoluteUrl(data.heroImage || `/images/areas/${data.slug}-node.webp`),
    url: absoluteUrl(`/areas/${data.slug}`),
    telephone: SITE_CONFIG.contact.phone,
    priceRange: "฿฿ - ฿฿฿",
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
}

export function generateBreadcrumbSchema(items: readonly { name: string; item: string }[]) {
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
 * @description รวบรวม Schema ทั้งหมดภายใต้ Graph เดียวเพื่อให้ Bot เข้าใจความสัมพันธ์ทั้งหมดในครั้งเดียว
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
