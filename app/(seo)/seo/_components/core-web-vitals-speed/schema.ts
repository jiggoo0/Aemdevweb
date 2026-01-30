/** @format */
import { siteConfig } from "@/constants/site-config"
import { coreWebVitalsSpeedData } from "./data"

export const getCoreWebVitalsSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.project.url}/seo/${coreWebVitalsSpeedData.slug}/#service`,
    name: coreWebVitalsSpeedData.title,
    description: coreWebVitalsSpeedData.description,
    provider: {
      "@type": "Organization",
      "@id": `${siteConfig.project.url}/#organization`,
      name: siteConfig.company.name,
      url: siteConfig.project.url,
    },
    serviceType: "High Performance Web Optimization",
    offers: {
      "@type": "Offer",
      price: coreWebVitalsSpeedData.pricing.price,
      priceCurrency: coreWebVitalsSpeedData.pricing.currency,
      availability: "https://schema.org/InStock",
      seller: { "@type": "Person", name: siteConfig.expert.name },
    },
  }
}
