/** @format */
import { siteConfig } from "@/constants/site-config";
import { entityLocalAuthorityData } from "./data";

export const getEntityLocalSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.project.url}/seo/${entityLocalAuthorityData.slug}/#service`,
    name: entityLocalAuthorityData.title,
    description: entityLocalAuthorityData.description,
    provider: {
      "@type": "Organization",
      "@id": `${siteConfig.project.url}/#organization`,
      name: siteConfig.company.name,
      url: siteConfig.project.url,
      logo: siteConfig.project.logo,
    },
    serviceType: "Technical Local SEO & Entity Alignment",
    areaServed: { "@type": "Country", name: "Thailand" },
    offers: {
      "@type": "Offer",
      price: entityLocalAuthorityData.pricing.price,
      priceCurrency: entityLocalAuthorityData.pricing.currency,
      availability: "https://schema.org/InStock",
      seller: { "@type": "Person", name: siteConfig.expert.name },
    },
  };
};
