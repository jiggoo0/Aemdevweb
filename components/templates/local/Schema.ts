/**
 * [TEMPLATE SCHEMA]: LOCAL_BUSINESS_STRUCTURE v17.0.2 (SAB_OPTIMIZED)
 * [STRATEGY]: Service Area Business (SAB) | Geo-Targeting | Risk Mitigation
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import type { AreaNode } from "@/types";

/**
 * @function generateLocalBusinessSchema
 * สร้าง JSON-LD แบบ Graph เพื่อระบุพื้นที่ให้บริการ (Service Area)
 * โดยเน้นความปลอดภัย (ไม่ระบุ Address ปลอม) แต่เน้น areaServed แทน
 */
export function generateLocalBusinessSchema(data: AreaNode) {
  const pageUrl = `${SITE_CONFIG.siteUrl}/areas/${data.slug}`;
  const provinceName = data.province;

  return {
    "@context": "https://schema.org",
    "@graph": [
      // --- NODE 1: WEB PAGE ---
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: `${data.title} | ${SITE_CONFIG.brandName}`,
        description: data.seoDescription || data.description,
        isPartOf: { "@id": `${SITE_CONFIG.siteUrl}/#website` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_CONFIG.siteUrl}${data.heroImage || "/images/og-default.webp"}`,
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "หน้าแรก", item: SITE_CONFIG.siteUrl },
            { "@type": "ListItem", position: 2, name: "พื้นที่ให้บริการ", item: `${SITE_CONFIG.siteUrl}/areas` },
            { "@type": "ListItem", position: 3, name: provinceName, item: pageUrl },
          ],
        },
      },

      // --- NODE 2: SERVICE (บริการเฉพาะพื้นที่) ---
      {
        "@type": "Service", // หรือ "WebSiteDesign" (Specific Type)
        "@id": `${pageUrl}/#service`,
        serviceType: "Local Web Design & SEO",
        name: `รับทำเว็บไซต์และ SEO ${provinceName}`,
        description: `บริการออกแบบเว็บไซต์และทำการตลาดออนไลน์สำหรับธุรกิจในจังหวัด${provinceName} และพื้นที่ใกล้เคียง`,
        provider: {
          "@id": `${SITE_CONFIG.siteUrl}/#organization`, // เชื่อมกลับไปที่สนง.ใหญ่
        },
        // [STRATEGY]: ระบุพื้นที่ให้บริการแบบละเอียด (City/AdministrativeArea)
        areaServed: [
          {
            "@type": "City", // หรือ AdministrativeArea
            name: provinceName,
            address: {
              "@type": "PostalAddress",
              addressRegion: provinceName,
              addressCountry: "TH",
            },
          },
          // เพิ่มอำเภอให้บริการ (Districts)
          ...(data.districts || []).map((district) => ({
            "@type": "City",
            name: `${district}, ${provinceName}`,
          })),
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `บริการแนะนำใน ${provinceName}`,
          itemListElement: (data.keywords || []).map((kw, index) => ({
            "@type": "Offer",
            position: index + 1,
            itemOffered: {
              "@type": "Service",
              name: kw,
            },
          })),
        },
      },

      // --- NODE 3: FAQ (Local Context) ---
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        mainEntity: (data.keywords || []).slice(0, 5).map((kw) => ({
          "@type": "Question",
          name: `รับทำเว็บไซต์ ${kw} ใน${provinceName} ราคาเท่าไหร่?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `ค่าบริการเริ่มต้นที่ ${SITE_CONFIG.brandName} สำหรับพื้นที่${provinceName} เริ่มต้นเพียงหลักพัน คุ้มค่าและประเมินตามความต้องการจริง พร้อมดูแลระบบหลังบ้านให้ตลอดอายุการใช้งานครับ`,
          },
        })),
      },
    ],
  };
}
