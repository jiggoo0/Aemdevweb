/** @format */
import { siteConfig } from "@/constants/site-config";
import { advancedSchemaData } from "./data";

export const getAdvancedSchemaMarkup = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.project.url}/seo/${advancedSchemaData.slug}/#service`,
    name: advancedSchemaData.title,
    description: advancedSchemaData.description,
    provider: {
      "@type": "Organization",
      "@id": `${siteConfig.project.url}/#organization`,
      name: siteConfig.company.name,
      url: siteConfig.project.url,
      logo: siteConfig.project.logo,
    },
    serviceType: "Technical Schema Markup Implementation",
    areaServed: { "@type": "Country", name: "Thailand" },
    offers: {
      "@type": "Offer",
      price: advancedSchemaData.pricing.price,
      priceCurrency: advancedSchemaData.pricing.currency,
      availability: "https://schema.org/InStock",
      seller: { "@type": "Person", name: siteConfig.expert.name },
    },
  };
};
