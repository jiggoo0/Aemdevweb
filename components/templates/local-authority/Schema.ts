/**
 * [TEMPLATE SCHEMA]: LOCAL_BUSINESS_STRUCTURE v17.8.8 (NULL_SAFE)
 * [FIX]: Removed unused 'ctx' variable to satisfy ESLint.
 */

import { SITE_CONFIG } from "@/constants/site-config";
import { absoluteUrl } from "@/lib/utils";
import type { AreaNode } from "@/types";

export function generateLocalBusinessSchema(data: AreaNode) {
  const pageUrl = absoluteUrl(`/areas/${data.slug}`);
  const provinceName = data.province;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${pageUrl}/#localbusiness`,
        name: `รับทำเว็บไซต์และ SEO ${provinceName} | ${SITE_CONFIG.brandName}`,
        description: data.seoDescription || data.description,
        url: pageUrl,
        image: absoluteUrl(data.heroImage),
        address: {
          "@type": "PostalAddress",
          addressLocality: provinceName,
          addressRegion: provinceName,
          addressCountry: "TH",
        },
        isPartOf: { "@id": absoluteUrl("/#website") },
        provider: { "@id": absoluteUrl("/#organization") },
        offeredBy: { "@id": absoluteUrl("/#person") },
        areaServed: [
          { "@type": "City", name: provinceName },
          // [RESOLVED]: Safe Mapping for Districts in Schema
          ...(data.districts || []).map((d) => ({
            "@type": "AdministrativeArea",
            name: `${d}, ${provinceName}`,
          })),
        ],
      },
    ],
  };
}
