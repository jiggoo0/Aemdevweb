/**
 * [SYSTEM CORE]: SEO_GENERATOR_ENGINE v17.0.2 (STABILIZED)
 * [STRATEGY]: Automated JSON-LD Injection | Schema Graphing | Type-Safe Logic
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import type { AreaNode, TemplateMasterData } from "@/types";

// --- TYPES ---
interface BreadcrumbItem {
  readonly name: string;
  readonly item: string;
}

/**
 * [GENERATOR]: PERSON_SCHEMA (สำหรับหน้า About / Bio)
 * สร้างข้อมูลโครงสร้างระบุตัวตนผู้เชี่ยวชาญ (Expert Authority)
 */
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.expert.displayName,
    alternateName: SITE_CONFIG.expert.legalNameThai,
    jobTitle: SITE_CONFIG.expert.jobTitle,
    description: `ผู้เชี่ยวชาญด้าน Technical SEO และ Web Architecture ประสบการณ์กว่า 10 ปี ผู้อยู่เบื้องหลังความสำเร็จของธุรกิจ SME ไทยด้วยกลยุทธ์ ${SITE_CONFIG.brandName}`,
    image: `${SITE_CONFIG.siteUrl}${SITE_CONFIG.expert.avatar}`,
    url: `${SITE_CONFIG.siteUrl}/about`,
    sameAs: [SITE_CONFIG.links.facebook, SITE_CONFIG.links.github, SITE_CONFIG.links.line],
    worksFor: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.siteUrl,
    },
    alumniOf: {
      "@type": "Organization",
      name: "Computer Engineering", // สามารถปรับเป็นสถาบันจริงได้
    },
    knowsAbout: [
      "Technical SEO",
      "Web Architecture",
      "Next.js Development",
      "Conversion Rate Optimization",
      "Digital Strategy",
    ],
  };
}

/**
 * [GENERATOR]: BREADCRUMB_SCHEMA (สำหรับทุกหน้าย่อย)
 * สร้างเส้นทางนำทางเพื่อให้ Google เข้าใจโครงสร้างเว็บไซต์
 */
export function generateBreadcrumbSchema(items: readonly BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

/**
 * [GENERATOR]: SERVICE_SCHEMA (สำหรับหน้า Service Detail)
 * สร้างข้อมูลบริการระดับ Professional Service
 */
export function generateServiceSchema(data: TemplateMasterData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: data.title,
    name: `${data.title} | ${SITE_CONFIG.brandName}`,
    description: data.description,
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.siteUrl,
      logo: `${SITE_CONFIG.siteUrl}/images/logo.webp`,
    },
    areaServed: {
      "@type": "Country",
      name: "Thailand",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Service Features",
      itemListElement: (data.coreFeatures || []).map((feature, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: feature.title,
          description: feature.description,
        },
      })),
    },
    offers: {
      "@type": "Offer",
      price: (data.priceValue || 0).toString(),
      priceCurrency: data.currency || "THB",
      availability: "https://schema.org/InStock",
      url: `${SITE_CONFIG.siteUrl}/services/${data.templateSlug}`,
    },
  };
}

/**
 * [GENERATOR]: LOCAL_BUSINESS_SCHEMA (สำหรับหน้า Area Detail)
 * สร้างข้อมูลธุรกิจท้องถิ่นเพื่อดันอันดับ Local SEO
 */
export function generateLocalBusinessSchema(data: AreaNode) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${SITE_CONFIG.brandName} - พื้นที่ให้บริการ ${data.province}`,
    description: data.seoDescription || data.description,
    image: `${SITE_CONFIG.siteUrl}${data.heroImage || "/images/og-default.webp"}`,
    url: `${SITE_CONFIG.siteUrl}/areas/${data.slug}`,
    telephone: SITE_CONFIG.contact.phone,
    priceRange: "฿฿",
    address: {
      "@type": "PostalAddress",
      addressLocality: data.province,
      addressRegion: "Thailand",
      addressCountry: "TH",
    },
    areaServed: [
      {
        "@type": "City",
        name: data.province,
      },
      ...(data.districts || []).map((district) => ({
        "@type": "City",
        name: district,
      })),
    ],
    brand: {
      "@type": "Brand",
      name: SITE_CONFIG.brandName,
    },
  };
}
