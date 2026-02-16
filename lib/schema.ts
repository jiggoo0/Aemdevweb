/**
 * [SEO ENGINE]: MASTER_SCHEMA_ORCHESTRATOR v18.1.3 (FULL_EXPORT_RESTORED)
 * [STRATEGY]: Schema-DTS Strict | Zero-Any | All Generators Restored
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

// --- [HELPERS] ---
const absoluteUrl = (path: string | undefined): string => {
  if (!path) return `${SITE_CONFIG.siteUrl}/images/og-default.webp`;
  if (path.startsWith("http")) return path;
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${SITE_CONFIG.siteUrl}/${cleanPath}`;
};

// --- [CORE CONSTANTS] ---
const sharedAddress: PostalAddress = {
  "@type": "PostalAddress",
  streetAddress: SITE_CONFIG.contact.address || SITE_CONFIG.contact.streetAddress,
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

// --- [GENERATORS] ---

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

/** [MASTER]: generateSchemaGraph */
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

/** [MASTER]: generateUniversalSchema */
export function generateUniversalSchema(
  data: UniversalTemplateProps | TemplateMasterData,
): ProfessionalService | Product {
  const isProduct = ["salepage", "catalog"].includes(data.templateSlug || "");
  const idValue = "id" in data ? (data.id as string) : "";
  const slug = data.templateSlug || idValue;
  const canonicalUrl = absoluteUrl(`/services/${slug}`);

  const base = {
    "@id": `${canonicalUrl}/#main`,
    name: data.title,
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
    priceRange: "฿฿-฿฿฿",
  } as ProfessionalService;
}

/** [MASTER]: generateLocalBusinessSchema */
export function generateLocalBusinessSchema(data: AreaNode): ProfessionalService {
  const url = absoluteUrl(`/areas/${data.slug}`);
  return {
    "@type": "ProfessionalService",
    "@id": `${url}/#localbusiness`,
    name: `รับทำเว็บไซต์ ${data.province} - ${SITE_CONFIG.expert.displayName}`,
    url: url,
    image: absoluteUrl(data.heroImage || SITE_CONFIG.ogImage),
    address: {
      "@type": "PostalAddress",
      addressLocality: data.province,
      addressRegion: data.province,
      addressCountry: "TH",
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
