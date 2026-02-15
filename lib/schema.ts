/**
 * [SEO ENGINE]: MASTER_SCHEMA_ORCHESTRATOR v17.9.108 (HARDENED)
 * [STRATEGY]: Strict Schema Mapping | Semantic Graph | GSC Compliance
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
 * @description รวม Nodes เข้าเป็น Graph เพื่อเพิ่มน้ำหนัก SEO (Semantic Interlinking)
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
 * [STRATEGY]: เลือก Type ตามจุดประสงค์ของหน้า (Transactional vs Informational)
 */
export function generateUniversalSchema(data: UniversalTemplateProps | TemplateMasterData) {
  // [OPTIMIZED]: ตรวจสอบประเภท Node เพื่อสร้าง Canonical URL ที่แม่นยำ
  const isAreaNode = data.category === "area" || (data.id && data.id.startsWith("NODE-"));

  const canonicalUrl = absoluteUrl(
    isAreaNode
      ? `/areas/${data.id?.replace("NODE-", "").toLowerCase() || data.templateSlug}`
      : `/services/${data.templateSlug}`,
  );

  const social = (data as UniversalTemplateProps).socialProof;
  const pricing = (data as UniversalTemplateProps).regionalPricing;

  // [DECISION_ENGINE]: กำหนด Schema Type ตามพฤติกรรมเทมเพลต
  const mainType = ["salepage", "catalog"].includes(data.templateSlug)
    ? "Product"
    : "ProfessionalService";

  const baseNode: ExtendedSchemaNode = {
    "@type": mainType,
    "@id": `${canonicalUrl}/#main`,
    name: data.title,
    description: data.description,
    image: data.image ? absoluteUrl(data.image) : absoluteUrl(SITE_CONFIG.ogImage),
    url: canonicalUrl,
    brand: { "@id": absoluteUrl("/#organization") },
    provider: { "@id": absoluteUrl("/#organization") },
  };

  // [GSC_FIX]: บังคับฉีดข้อมูลติดต่อลงใน ProfessionalService Node เสมอ
  if (mainType === "ProfessionalService") {
    baseNode.telephone = SITE_CONFIG.contact.phone;
    baseNode.priceRange = SITE_CONFIG.business.priceRange;

    if (isAreaNode) {
      const province = data.title.replace("รับทำเว็บไซต์", "").trim();
      baseNode.address = {
        "@type": "PostalAddress",
        addressLocality: province,
        addressRegion: province,
        addressCountry: "TH",
      };
    } else {
      baseNode.address = organizationNode.address;
    }
  }

  // [SOCIAL_PROOF]: ระบบ Aggregate Rating
  if (social) {
    baseNode.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: social.rating,
      reviewCount: social.reviewCount,
      bestRating: "5",
      worstRating: "1",
    };
  }

  // [OFFER_LOGIC]: ป้องกันราคา 0 บาทแสดงใน Schema
  const numericPrice =
    data.priceValue ||
    (pricing?.startPrice ? parseInt(pricing.startPrice.replace(/[^0-9]/g, "")) : 0);

  if (numericPrice > 0) {
    baseNode.offers = {
      "@type": "Offer",
      price: numericPrice,
      priceCurrency: data.currency || "THB",
      availability: "https://schema.org/InStock",
      url: canonicalUrl,
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
        .toISOString()
        .split("T")[0],
    };
  }

  return baseNode;
}

/**
 * [SPECIALIST]: generateLocalBusinessSchema
 * @description เน้นข้อมูลพื้นที่เพื่อทำ Local SEO Map Pack
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
        : absoluteUrl(SITE_CONFIG.ogImage)
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
