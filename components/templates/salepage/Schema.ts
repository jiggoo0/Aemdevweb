import { SITE_CONFIG } from "@/constants/site-config";
import { absoluteUrl } from "@/lib/utils";
import type { TemplateMasterData } from "@/types";

export function generateSalePageSchema(data: TemplateMasterData) {
  const canonicalUrl = absoluteUrl(`/services/${data.templateSlug}`);
  const cleanPrice = (data.priceValue || 0).toString();

  const IDS = {
    WEBPAGE: `${canonicalUrl}/#webpage`,
    PRODUCT: `${canonicalUrl}/#product`,
    FAQ: `${canonicalUrl}/#faq`,
    ORG: absoluteUrl("/#organization"),
    PERSON: absoluteUrl("/#person"),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": IDS.PRODUCT,
        name: `${data.title} | ${SITE_CONFIG.brandName}`,
        description: data.description,
        image: data.image ? absoluteUrl(data.image) : undefined,
        sku: `AEM-${data.id || "SP"}-NODE`,
        brand: { "@type": "Brand", name: SITE_CONFIG.brandName },
        offers: {
          "@type": "Offer",
          price: cleanPrice,
          priceCurrency: data.currency || "THB",
          availability: "https://schema.org/InStock",
          url: canonicalUrl,
          priceValidUntil: "2026-12-31",
          seller: { "@id": IDS.ORG },
          offeredBy: { "@id": IDS.PERSON },
        },
      },
      {
        "@type": "WebPage",
        "@id": IDS.WEBPAGE,
        url: canonicalUrl,
        name: data.title,
        description: data.description,
        isPartOf: { "@id": absoluteUrl("/#website") },
        mainEntity: { "@id": IDS.PRODUCT },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "หน้าแรก", item: SITE_CONFIG.siteUrl },
            {
              "@type": "ListItem",
              position: 2,
              name: "บริการทั้งหมด",
              item: absoluteUrl("/services"),
            },
            { "@type": "ListItem", position: 3, name: data.title, item: canonicalUrl },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": IDS.FAQ,
        mainEntity: (data.faqs || []).map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
}
