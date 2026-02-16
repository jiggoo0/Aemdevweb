/**
 * [SEO ENGINE]: MASTER_SCHEMA_ORCHESTRATOR v18.0.8 (BUILD_FIXED)
 * [STRATEGY]: Schema-DTS Integration | Export Restoration | Zero-TSC-Error
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { SITE_CONFIG } from "@/constants/site-config";
import { absoluteUrl } from "@/lib/utils";
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
  Offer
} from "schema-dts";

// --- [TYPE DEFINITIONS] ---
type SchemaInput = UniversalTemplateProps | TemplateMasterData | AreaNode;

// --- [CORE CONSTANTS] ---
const sharedAddress: PostalAddress = {
  "@type": "PostalAddress",
  streetAddress: SITE_CONFIG.contact.streetAddress,
  addressLocality: SITE_CONFIG.business.location,
  addressRegion: SITE_CONFIG.business.region,
  postalCode: SITE_CONFIG.contact.postalCode,
  addressCountry: "TH",
};

// --- [TYPE GUARDS] ---
const isUniversalTemplate = (data: SchemaInput): data is UniversalTemplateProps => 
  "regionalPricing" in data || "socialProof" in data;

const isAreaNode = (data: SchemaInput): data is AreaNode => 
  "province" in data && "coordinates" in data;

// --- [CORE NODES] ---
const sameAsLinks = Object.values(SITE_CONFIG.links).filter(
  (link): link is string => typeof link === "string" && link.length > 0
);

const organizationNode: Organization = {
  "@type": "Organization",
  "@id": absoluteUrl("/#organization"),
  name: SITE_CONFIG.brandName,
  url: SITE_CONFIG.siteUrl,
  logo: {
    "@type": "ImageObject",
    "@id": absoluteUrl("/#logo"),
    url: absoluteUrl(SITE_CONFIG.logo),
    width: "512px", 
    height: "512px"
  },
  sameAs: sameAsLinks,
  address: sharedAddress,
};

const personNode: Person = {
  "@type": "Person",
  "@id": absoluteUrl("/#expert"),
  name: SITE_CONFIG.expert.legalNameThai,
  alternateName: SITE_CONFIG.expert.displayName,
  jobTitle: SITE_CONFIG.expert.jobTitle,
  image: absoluteUrl(SITE_CONFIG.expert.avatar),
  url: absoluteUrl(SITE_CONFIG.expert.bioUrl),
  worksFor: { "@id": absoluteUrl("/#organization") },
  description: SITE_CONFIG.expert.bio,
  sameAs: [
    SITE_CONFIG.links.facebook,
    SITE_CONFIG.links.github,
    SITE_CONFIG.links.youtube,
    `https://x.com/${SITE_CONFIG.expert.twitterHandle.replace("@", "")}`
  ].filter(Boolean),
};

const websiteNode: WebSite = {
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  url: SITE_CONFIG.siteUrl,
  name: SITE_CONFIG.brandName,
  publisher: { "@id": absoluteUrl("/#organization") },
  inLanguage: SITE_CONFIG.locale.replace("_", "-"),
};

// --- [EXPORTED GENERATORS] ---

/**
 * [NEWLY_RESTORED]: generatePersonSchema
 * @description คืนค่า Person Node สำหรับหน้า About หรือ Bio
 */
export const generatePersonSchema = (): Person => personNode;

/** [MASTER]: generateSchemaGraph */
export const generateSchemaGraph = (schemas: Thing[]): Graph => ({
  "@context": "https://schema.org",
  "@graph": [
    organizationNode as Thing, 
    websiteNode as Thing, 
    personNode as Thing, 
    ...schemas
  ],
});

/** [MASTER]: generateBreadcrumbSchema */
export const generateBreadcrumbSchema = (items: { name: string; item: string }[]): BreadcrumbList => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: it.name,
    item: absoluteUrl(it.item),
  })),
});

/** [MASTER]: generateUniversalSchema */
export function generateUniversalSchema(data: UniversalTemplateProps | TemplateMasterData): ProfessionalService | Product {
  const isProduct = ["salepage", "catalog"].includes(data.templateSlug);
  const templateId = "id" in data ? (data.id as string) : "";
  const slug = data.templateSlug || templateId.replace("NODE-", "").toLowerCase();
  const canonicalUrl = absoluteUrl(`/services/${slug}`);

  let numericPrice = 0;
  if ("priceValue" in data && typeof data.priceValue === "number") {
    numericPrice = data.priceValue;
  } else if (isUniversalTemplate(data) && data.regionalPricing?.startPrice) {
    numericPrice = parseInt(data.regionalPricing.startPrice.replace(/\D/g, "")) || 0;
  }

  const schemaBase = {
    "@id": `${canonicalUrl}/#main`,
    name: data.title,
    description: data.description,
    image: absoluteUrl(data.image || SITE_CONFIG.ogImage),
    url: canonicalUrl,
    provider: { "@id": absoluteUrl("/#organization") },
    brand: { "@id": absoluteUrl("/#organization") },
  };

  if (isProduct) {
    const productSchema: Product = {
      "@type": "Product",
      ...schemaBase,
      ...(numericPrice > 0 && {
        offers: {
          "@type": "Offer",
          price: numericPrice,
          priceCurrency: "THB",
          itemCondition: "https://schema.org/NewCondition",
          availability: "https://schema.org/InStock",
          url: canonicalUrl,
          seller: { "@id": absoluteUrl("/#organization") }
        } as Offer
      })
    };
    return productSchema;
  }

  const serviceSchema: ProfessionalService = {
    "@type": "ProfessionalService",
    ...schemaBase,
    priceRange: SITE_CONFIG.business.priceRange,
    telephone: SITE_CONFIG.contact.phone,
    address: sharedAddress,
  };

  return serviceSchema;
}

/** [RESTORED]: generateLocalBusinessSchema */
export function generateLocalBusinessSchema(data: AreaNode | UniversalTemplateProps): ProfessionalService {
  const isArea = isAreaNode(data);
  const slug = isArea ? data.slug : data.templateSlug;
  const url = absoluteUrl(`/areas/${slug}`);

  const schema: ProfessionalService = {
    "@type": "ProfessionalService",
    "@id": `${url}/#localbusiness`,
    name: isArea ? `${SITE_CONFIG.brandName} ${data.province}` : data.title,
    url: url,
    telephone: SITE_CONFIG.contact.phone,
    priceRange: SITE_CONFIG.business.priceRange,
    image: absoluteUrl((isArea ? data.heroImage : data.image) || SITE_CONFIG.ogImage),
    address: {
      "@type": "PostalAddress",
      addressLocality: isArea ? data.province : SITE_CONFIG.business.location,
      addressRegion: isArea ? data.province : SITE_CONFIG.business.region,
      addressCountry: "TH",
    } as PostalAddress,
    parentOrganization: { "@id": absoluteUrl("/#organization") } as Organization,
  };

  if (isArea && data.coordinates) {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: data.coordinates.lat,
      longitude: data.coordinates.lng
    } as GeoCoordinates;
  }

  return schema;
}
