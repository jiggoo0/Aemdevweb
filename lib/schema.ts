/**
 * [SEO ENGINE]: MASTER_SCHEMA_ORCHESTRATOR v17.9.107 (STABILIZED)
 * [STRATEGY]: Strict Schema Mapping | Intersection Types | Zero-Any Compliance
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { SITE_CONFIG } from "@/constants/site-config";
import { absoluteUrl } from "@/lib/utils";
import type { AreaNode, UniversalTemplateProps, TemplateMasterData } from "@/types";

// --- [INTERNAL TYPES]: Local Contracts ---
/**
 * [STRICT]: ขยายขอบเขต Schema Node เพื่อรองรับฟิลด์ที่ Google ต้องการ
 * โดยไม่ต้องทำลายกฎ Zero-Any Policy
 */
interface ExtendedSchemaNode extends Record<string, unknown> {
  telephone?: string;
  priceRange?: string;
}

// --- [INTERNAL: CORE NODES] ---

/**
 * [ENTITY]: sameAsLinks
 * รวบรวม Social Profiles เพื่อยืนยันตัวตนใน Knowledge Graph
 */
const sameAsLinks = [
  SITE_CONFIG.links.facebook,
  SITE_CONFIG.links.youtube,
  SITE_CONFIG.links.twitter,
  SITE_CONFIG.links.github,
  SITE_CONFIG.links.line,
  SITE_CONFIG.links.googleMaps,
].filter((link): link is string => !!link);

const websiteNode = {
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  url: SITE_CONFIG.siteUrl,
  name: SITE_CONFIG.brandName,
  publisher: { "@id": absoluteUrl("/#organization") },
  inLanguage: SITE_CONFIG.locale.replace("_", "-"),
} as const;

/**
 * [NODE]: organizationNode (ProfessionalService)
 * [UPDATE]: บรรจุ 'telephone' และ 'priceRange' เพื่อลบ Schema warnings
 */
const organizationNode = {
  "@type": "ProfessionalService",
  "@id": absoluteUrl("/#organization"),
  name: SITE_CONFIG.brandName,
  url: SITE_CONFIG.siteUrl,
  telephone: SITE_CONFIG.contact.phone,
  priceRange: SITE_CONFIG.business.priceRange,
  logo: {
    "@type": "ImageObject",
    "@id": absoluteUrl("/#logo"),
    url: absoluteUrl(SITE_CONFIG.logo),
    caption: SITE_CONFIG.brandName,
  },
  image: {
    "@type": "ImageObject",
    url: absoluteUrl(SITE_CONFIG.ogImage),
  },
  sameAs: sameAsLinks,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_CONFIG.contact.streetAddress,
    addressLocality: SITE_CONFIG.business.location,
    addressRegion: SITE_CONFIG.business.region,
    postalCode: SITE_CONFIG.contact.postalCode,
    addressCountry: "TH",
  },
} as const;

const personNode = {
  "@type": "Person",
  "@id": absoluteUrl("/#expert"),
  name: SITE_CONFIG.expert.legalNameThai,
  alternateName: SITE_CONFIG.expert.displayName,
  jobTitle: SITE_CONFIG.expert.jobTitle,
  image: absoluteUrl(SITE_CONFIG.expert.avatar),
  url: absoluteUrl(SITE_CONFIG.expert.bioUrl),
  worksFor: { "@id": absoluteUrl("/#organization") },
  description: SITE_CONFIG.expert.bio,
} as const;

// --- [EXPORTED GENERATORS] ---

export const generatePersonSchema = () => personNode;

/**
 * @function generateSchemaGraph
 * @description รวม Nodes เข้าเป็น Graph เพื่อเพิ่มน้ำหนัก SEO (Semantic interlinking)
 */
export const generateSchemaGraph = (schemas: Record<string, unknown>[]) => ({
  "@context": "https://schema.org",
  "@graph": [websiteNode, organizationNode, personNode, ...schemas],
});

/**
 * @function generateBreadcrumbSchema
 * @description สร้าง Breadcrumb เพื่อให้ Google แสดง Path ในหน้า Search
 */
export const generateBreadcrumbSchema = (items: { name: string; item: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: it.name,
    item: absoluteUrl(it.item),
  })),
});

/**
 * [MASTER]: generateUniversalSchema
 * [FIXED]: ปรับปรุงการฉีดข้อมูลด้วย ExtendedSchemaNode เพื่อความปลอดภัยสูงสุด
 */
export function generateUniversalSchema(data: UniversalTemplateProps | TemplateMasterData) {
  const canonicalUrl = absoluteUrl(
    data.category === "business"
      ? `/services/${data.templateSlug}`
      : `/areas/${data.id?.replace("NODE-", "").toLowerCase() || data.templateSlug}`,
  );

  const social = (data as UniversalTemplateProps).socialProof;
  const pricing = (data as UniversalTemplateProps).regionalPricing;

  const mainType = ["salepage", "catalog"].includes(data.templateSlug)
    ? "Product"
    : "ProfessionalService";

  const baseNode: ExtendedSchemaNode = {
    "@type": mainType,
    "@id": `${canonicalUrl}/#main`,
    name: data.title,
    description: data.description,
    image: data.image ? absoluteUrl(data.image) : undefined,
    url: canonicalUrl,
    brand: { "@id": absoluteUrl("/#organization") },
    provider: { "@id": absoluteUrl("/#organization") },
  };

  if (mainType === "ProfessionalService") {
    const isAreaPage = data.category === "area" || (data.id && data.id.startsWith("NODE-"));
    if (isAreaPage) {
      const province = data.title.replace("รับทำเว็บไซต์", "").trim();
      baseNode.address = {
        "@type": "PostalAddress",
        addressLocality: province,
        addressRegion: province,
        addressCountry: "TH",
      };
      // [FIXED]: ฉีดข้อมูลติดต่อลงในหน้าพื้นที่เพื่อลบ Warnings
      baseNode.telephone = organizationNode.telephone;
      baseNode.priceRange = organizationNode.priceRange;
    } else {
      baseNode.address = organizationNode.address;
      baseNode.telephone = organizationNode.telephone;
      baseNode.priceRange = organizationNode.priceRange;
    }
  }

  if (social) {
    baseNode.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: social.rating,
      reviewCount: social.reviewCount,
      bestRating: "5",
      worstRating: "1",
    };
  }

  if (data.priceValue || pricing) {
    baseNode.offers = {
      "@type": "Offer",
      price:
        data.priceValue ||
        (pricing?.startPrice ? parseInt(pricing.startPrice.replace(/[^0-9]/g, "")) : 0),
      priceCurrency: data.currency || "THB",
      availability: "https://schema.org/InStock",
      priceValidUntil:
        data.templateSlug === "salepage"
          ? new Date(Date.now() + 7776000000).toISOString().split("T")[0]
          : undefined,
    };
  }

  return baseNode;
}

/**
 * [SPECIALIST]: generateLocalBusinessSchema
 */
export function generateLocalBusinessSchema(data: UniversalTemplateProps | AreaNode) {
  const isUniversal = "templateSlug" in data;
  const slug = isUniversal
    ? (data as UniversalTemplateProps).templateSlug
    : (data as AreaNode).slug;
  const province = isUniversal
    ? (data as UniversalTemplateProps).title.replace("รับทำเว็บไซต์", "").trim()
    : (data as AreaNode).province;

  const pageUrl = absoluteUrl(`/areas/${slug}`);

  return {
    "@type": "ProfessionalService",
    "@id": `${pageUrl}/#localbusiness`,
    name: isUniversal
      ? (data as UniversalTemplateProps).title
      : `${SITE_CONFIG.brandName} - ${province}`,
    url: pageUrl,
    telephone: SITE_CONFIG.contact.phone,
    priceRange: SITE_CONFIG.business.priceRange,
    image: isUniversal
      ? (data as UniversalTemplateProps).image
        ? absoluteUrl((data as UniversalTemplateProps).image!)
        : undefined
      : absoluteUrl((data as AreaNode).heroImage),
    address: {
      "@type": "PostalAddress",
      addressLocality: province,
      addressRegion: isUniversal ? province : SITE_CONFIG.business.region,
      addressCountry: "TH",
    },
    parentOrganization: { "@id": absoluteUrl("/#organization") },
  };
}
