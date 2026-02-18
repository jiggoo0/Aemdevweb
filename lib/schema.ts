/**
 * [SEO ENGINE]: MASTER_SCHEMA_ORCHESTRATOR v18.1.5 (PROD_READY)
 * [STRATEGY]: Schema-DTS Strict | Zero-Any Compliance | Graph-Based Injection
 * [MANDATE]: Fix Missing "name", "telephone", "priceRange" for Rich Results
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { SITE_CONFIG } from "@/constants/site-config";
import type { AreaNode, UniversalTemplateProps, TemplateMasterData } from "@/types";
import type {
  Graph,
  Organization,
  Person,
  WebSite,
  ProfessionalService,
  Product,
  BreadcrumbList,
  PostalAddress,
  Thing,
  GeoCoordinates,
  Offer,
} from "schema-dts";

// =========================================
// [01] INFRASTRUCTURE HELPERS (SSOT)
// =========================================

/**
 * [HELPER]: absoluteUrl
 * @description แปลง Path ให้เป็น Absolute URL ตามมาตรฐาน Search Engine
 */
const absoluteUrl = (path: string | undefined): string => {
  if (!path) return `${SITE_CONFIG.siteUrl}/images/og-default.webp`;
  if (path.startsWith("http")) return path;
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${SITE_CONFIG.siteUrl}/${cleanPath}`;
};

// =========================================
// [02] CORE SHARED NODES (BLUEPRINT)
// =========================================

const sharedAddress: PostalAddress = {
  "@type": "PostalAddress",
  streetAddress: SITE_CONFIG.contact.streetAddress || SITE_CONFIG.contact.address,
  addressLocality: SITE_CONFIG.business.location,
  addressRegion: SITE_CONFIG.business.region,
  postalCode: SITE_CONFIG.contact.postalCode,
  addressCountry: "TH",
};

const organizationNode: Organization = {
  "@type": "Organization",
  "@id": absoluteUrl("/#organization"),
  name: SITE_CONFIG.brandName,
  url: SITE_CONFIG.siteUrl,
  logo: {
    "@type": "ImageObject",
    "@id": absoluteUrl("/#logo"),
    url: absoluteUrl(SITE_CONFIG.logo),
  },
  address: sharedAddress,
};

const personNode: Person = {
  "@type": "Person",
  "@id": absoluteUrl("/#expert"),
  name: SITE_CONFIG.expert.legalNameThai,
  jobTitle: SITE_CONFIG.expert.jobTitle,
  image: absoluteUrl(SITE_CONFIG.expert.avatar),
  url: absoluteUrl("/about"),
  worksFor: { "@id": absoluteUrl("/#organization") },
  description: SITE_CONFIG.expert.bio,
};

// =========================================
// [03] SCHEMA GENERATORS
// =========================================

/** [RESTORED]: generatePersonSchema */
export const generatePersonSchema = (): Person => personNode;

/** [RESTORED]: generateBreadcrumbSchema */
export const generateBreadcrumbSchema = (
  items: { name: string; item: string }[],
): BreadcrumbList => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: it.name,
    item: absoluteUrl(it.item),
  })),
});

/** * [MASTER]: generateSchemaGraph
 * @description รวบรวม Node ทั้งหมดเข้าสู่ระบบ Graph เพื่อให้ Google เข้าใจความสัมพันธ์ของข้อมูล
 */
export const generateSchemaGraph = (schemas: Thing[]): Graph => ({
  "@context": "https://schema.org",
  "@graph": [
    organizationNode as Thing,
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      url: SITE_CONFIG.siteUrl,
      name: SITE_CONFIG.brandName,
      publisher: { "@id": absoluteUrl("/#organization") },
    } as WebSite,
    personNode as Thing,
    ...schemas,
  ],
});

/** * [MASTER]: generateUniversalSchema
 * @description จัดการข้อมูล Schema สำหรับบริการหลัก (Master Services)
 */
export function generateUniversalSchema(
  data: UniversalTemplateProps | TemplateMasterData,
): ProfessionalService | Product {
  const isProduct = ["salepage", "catalog"].includes(data.templateSlug || "");
  const idValue = "id" in data ? (data.id as string) : "";
  const slug = data.templateSlug || idValue;
  const canonicalUrl = absoluteUrl(`/services/${slug}`);

  const base = {
    "@id": `${canonicalUrl}/#main`,
    name: data.title || SITE_CONFIG.brandName,
    description: data.description,
    image: absoluteUrl(data.image || SITE_CONFIG.ogImage),
    url: canonicalUrl,
    provider: { "@id": absoluteUrl("/#organization") },
  };

  if (isProduct) {
    const offer: Offer = {
      "@type": "Offer",
      priceCurrency: "THB",
      availability: "https://schema.org/InStock",
      seller: { "@id": absoluteUrl("/#organization") },
    };
    return { "@type": "Product", ...base, offers: offer } as Product;
  }

  return {
    "@type": "ProfessionalService",
    ...base,
    address: sharedAddress,
    telephone: SITE_CONFIG.contact.phone,
    priceRange: SITE_CONFIG.business.priceRange,
  } as ProfessionalService;
}

/** * [MASTER]: generateLocalBusinessSchema
 * @description ปรับปรุงฟิลด์บังคับเพื่อแก้ปัญหา Rich Results Test Error ในหน้า Area Node
 */
export function generateLocalBusinessSchema(data: AreaNode): ProfessionalService {
  const url = absoluteUrl(`/areas/${data.slug}`);

  return {
    "@type": "ProfessionalService",
    "@id": `${url}/#localbusiness`,

    /* [FIX]: บังคับฉีดฟิลด์ที่ Google ตรวจพบว่าขาดหาย */
    name: data.title, // ใช้ title จาก node เป็นชื่อบริการที่แสดงใน Search
    telephone: SITE_CONFIG.contact.phone, // ดึงค่าจาก 099-032-2175
    priceRange: SITE_CONFIG.business.priceRange, // ดึงค่า ฿฿฿ จากระบบ

    url: url,
    image: absoluteUrl(data.heroImage || SITE_CONFIG.ogImage),
    description: data.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: data.province,
      addressRegion: data.province,
      addressCountry: "TH",
      postalCode: SITE_CONFIG.contact.postalCode,
    } as PostalAddress,
    parentOrganization: { "@id": absoluteUrl("/#organization") },
    ...(data.coordinates && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: data.coordinates.lat,
        longitude: data.coordinates.lng,
      } as GeoCoordinates,
    }),
  } as ProfessionalService;
}
