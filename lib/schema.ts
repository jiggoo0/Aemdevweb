/**
 * [SEO ENGINE]: MASTER_SCHEMA_ORCHESTRATOR v18.1.5 (STABILIZED_FINAL)
 * [STRATEGY]: Schema-DTS Strict | Rich Results Patch | Zero-Any Compliance
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
  ImageObject,
} from "schema-dts";

// =========================================
// [01] INFRASTRUCTURE HELPERS (SSOT)
// =========================================

/**
 * [HELPER]: absoluteUrl
 * @description แปลง Path ให้เป็น Absolute URL ตามมาตรฐาน Search Engine เพื่อป้องกันความสับสนของ Bot
 */
const absoluteUrl = (path: string | undefined): string => {
  if (!path) return `${SITE_CONFIG.siteUrl}/images/og-main.webp`;
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
  } as ImageObject,
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
// [03] SCHEMA GENERATORS (FIXED_NODES)
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
 * @description รวบรวม Node ทั้งหมดเข้าสู่ระบบ Graph เพื่อสร้างความเชื่อมโยงของข้อมูลระดับ Enterprise
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
 * @description จัดการข้อมูล Schema สำหรับบริการหลัก แก้ไขปัญหา Missing Fields จากการ Audit
 */
export function generateUniversalSchema(
  data: UniversalTemplateProps | TemplateMasterData,
): ProfessionalService | Product {
  const isProduct = ["salepage", "catalog"].includes(data.templateSlug || "");
  const idValue = "id" in data ? (data.id as string) : "";
  const slug = data.templateSlug || idValue;
  const canonicalUrl = absoluteUrl(`/services/${slug}`);

  // [BASE_BLUEPRINT]: ฟิลด์พื้นฐานที่ทุก Node ต้องมี
  const base = {
    name: data.title || SITE_CONFIG.brandName, // [FIX]: ป้องกันชื่อว่าง
    description: data.description,
    image: absoluteUrl(data.image || SITE_CONFIG.ogImage),
    url: canonicalUrl,
  };

  if (isProduct) {
    const offer: Offer = {
      "@type": "Offer",
      price: data.priceValue?.toString(),
      priceCurrency: "THB",
      availability: "https://schema.org/InStock",
      seller: { "@id": absoluteUrl("/#organization") },
    };
    return {
      "@type": "Product",
      "@id": `${canonicalUrl}/#product`,
      ...base,
      offers: offer,
      brand: { "@id": absoluteUrl("/#organization") },
    } as Product;
  }

  return {
    "@type": "ProfessionalService",
    "@id": `${canonicalUrl}/#service`,
    ...base,
    address: sharedAddress,
    telephone: SITE_CONFIG.contact.phone, // [FIX]: ฉีดเบอร์โทรศัพท์ (099-032-2175)
    priceRange: SITE_CONFIG.business.priceRange, // [FIX]: ฉีดช่วงราคา (฿฿฿)
    provider: { "@id": absoluteUrl("/#organization") },
  } as ProfessionalService;
}

/** * [MASTER]: generateLocalBusinessSchema
 * @description ปรับปรุงฟิลด์บังคับเพื่อแก้ปัญหา Rich Results Test Error ในหน้า Local Area Node (จังหวัด)
 */
export function generateLocalBusinessSchema(data: AreaNode): ProfessionalService {
  const url = absoluteUrl(`/areas/${data.slug}`);

  return {
    "@type": "ProfessionalService",
    "@id": `${url}/#localbusiness`,

    /* [CRITICAL_FIX]: บังคับฉีดฟิลด์ที่ Google Rich Results ตรวจพบว่าขาดหาย */
    name: data.title || `${SITE_CONFIG.brandName} - ${data.province}`,
    telephone: SITE_CONFIG.contact.phone, // แก้ปัญหา Missing "telephone"
    priceRange: SITE_CONFIG.business.priceRange, // แก้ปัญหา Missing "priceRange"

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

    // [LOCAL_SIGNAL]: พิกัดภูมิศาสตร์เพื่อความแม่นยำบนแผนที่
    ...(data.coordinates && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: data.coordinates.lat,
        longitude: data.coordinates.lng,
      } as GeoCoordinates,
    }),
  } as ProfessionalService;
}
