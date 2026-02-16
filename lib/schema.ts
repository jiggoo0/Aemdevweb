/**
 * [SEO ENGINE]: MASTER_SCHEMA_ORCHESTRATOR v17.9.110 (TYPE_SAFE_GUARDED)
 * [STRATEGY]: Strict Schema Mapping | Semantic Graph | GSC Compliance
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { SITE_CONFIG } from "@/constants/site-config";
import { absoluteUrl } from "@/lib/utils";
import type { AreaNode, UniversalTemplateProps, TemplateMasterData } from "@/types";

// --- [INTERNAL TYPES] ---
interface ExtendedSchemaNode extends Record<string, unknown> {
  "@context"?: string;
  "@type": string;
  telephone?: string;
  priceRange?: string;
}

// --- [TYPE GUARDS]: For Runtime Safety ---
const isUniversalTemplate = (
  data: UniversalTemplateProps | TemplateMasterData | AreaNode
): data is UniversalTemplateProps => {
  return "regionalPricing" in data || "socialProof" in data;
};

const isAreaNode = (
  data: UniversalTemplateProps | TemplateMasterData | AreaNode
): data is AreaNode => {
  return "province" in data && "coordinates" in data;
};

// --- [INTERNAL: CORE NODES] ---

const sameAsLinks = Object.values(SITE_CONFIG.links).filter(
  (link): link is string => typeof link === "string" && link.length > 0
);

const websiteNode = {
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  url: SITE_CONFIG.siteUrl,
  name: SITE_CONFIG.brandName,
  publisher: { "@id": absoluteUrl("/#organization") },
  inLanguage: SITE_CONFIG.locale.replace("_", "-"),
} as const;

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
  // [ADD]: Opening Hours for Local SEO
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
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
  sameAs: [SITE_CONFIG.expert.twitterHandle],
} as const;

// --- [EXPORTED GENERATORS] ---

export const generatePersonSchema = () => personNode;

export const generateSchemaGraph = (schemas: Record<string, unknown>[]) => ({
  "@context": "https://schema.org",
  "@graph": [websiteNode, organizationNode, personNode, ...schemas],
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

/**
 * [MASTER]: generateUniversalSchema
 * [STRATEGY]: Auto-detect Context & Pricing Logic
 */
export function generateUniversalSchema(data: UniversalTemplateProps | TemplateMasterData) {
  // 1. Context Detection
  const isArea = (data.id && data.id.startsWith("NODE-")) || data.category === "area";
  
  // 2. Canonical Logic
  const slug = isArea && data.id 
    ? data.id.replace("NODE-", "").toLowerCase() 
    : data.templateSlug;
    
  const pathPrefix = isArea ? "/areas/" : "/services/";
  const canonicalUrl = absoluteUrl(`${pathPrefix}${slug}`);

  // 3. Pricing Logic (Safe Access)
  let numericPrice = 0;
  if ("priceValue" in data && typeof data.priceValue === "number") {
    numericPrice = data.priceValue;
  } else if (isUniversalTemplate(data) && data.regionalPricing?.startPrice) {
    numericPrice = parseInt(data.regionalPricing.startPrice.replace(/[^0-9]/g, "")) || 0;
  }

  // 4. Schema Construction
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

  // 5. ProfessionalService Enhancements
  if (mainType === "ProfessionalService") {
    baseNode.telephone = SITE_CONFIG.contact.phone;
    baseNode.priceRange = SITE_CONFIG.business.priceRange;

    // Dynamic Address for Area Pages
    if (isArea) {
      const province = data.title.replace("รับทำเว็บไซต์", "").trim();
      baseNode.address = {
        "@type": "PostalAddress",
        addressLocality: province,
        addressRegion: province,
        addressCountry: "TH",
      };
      baseNode.areaServed = {
        "@type": "City",
        name: province,
      };
    } else {
      baseNode.address = organizationNode.address;
    }
  }

  // 6. Aggregate Rating (Safe Access)
  if (isUniversalTemplate(data) && data.socialProof) {
    baseNode.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: data.socialProof.rating,
      reviewCount: data.socialProof.reviewCount,
      bestRating: "5",
      worstRating: "1",
    };
  }

  // 7. Offer Schema
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
 * @description รองรับ GeoCoordinates และ Map URL
 */
export function generateLocalBusinessSchema(data: UniversalTemplateProps | AreaNode) {
  // 1. Identify Data Source
  const isUniversal = isUniversalTemplate(data);
  const isArea = isAreaNode(data);

  // 2. Extract Data Safely
  const slug = isUniversal ? data.templateSlug : (data as AreaNode).slug;
  const province = isUniversal
    ? data.title.replace("รับทำเว็บไซต์", "").trim()
    : (data as AreaNode).province;

  const imageUrl = isUniversal
    ? data.image || SITE_CONFIG.ogImage
    : (data as AreaNode).heroImage;

  const pageUrl = absoluteUrl(`/areas/${slug}`);

  // 3. Construct Schema
  const schema: ExtendedSchemaNode = {
    "@type": "ProfessionalService",
    "@id": `${pageUrl}/#localbusiness`,
    name: isUniversal ? data.title : `${SITE_CONFIG.brandName} - ${province}`,
    url: pageUrl,
    telephone: SITE_CONFIG.contact.phone,
    priceRange: SITE_CONFIG.business.priceRange,
    image: absoluteUrl(imageUrl),
    address: {
      "@type": "PostalAddress",
      addressLocality: province,
      addressRegion: isUniversal ? province : SITE_CONFIG.business.region,
      addressCountry: "TH",
    },
    parentOrganization: { "@id": absoluteUrl("/#organization") },
    // [ADD]: Map Link
    hasMap: SITE_CONFIG.contact.mapUrl,
  };

  // 4. Inject GeoCoordinates (If available in AreaNode)
  if (isArea && (data as AreaNode).coordinates) {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: (data as AreaNode).coordinates.lat,
      longitude: (data as AreaNode).coordinates.lng,
    };
  }

  return schema;
}
