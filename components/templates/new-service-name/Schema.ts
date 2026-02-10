/**
 * [TEMPLATE SCHEMA]: LOCAL_BUSINESS_STRUCTURE v17.5.5 (STABILIZED_FINAL)
 * [STRATEGY]: Service Area Business (SAB) | Entity Graphing | FAQ Snippet Integration
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";
import type { AreaNode } from "@/types";

export function generateLocalBusinessSchema(data: AreaNode) {
  const pageUrl = `${SITE_CONFIG.siteUrl}/areas/${data.slug}`;
  const provinceName = data.province;

  // [LOGIC]: สร้าง FAQ Schema อัตโนมัติจาก Keywords เพื่อเพิ่ม CTR บน Google Search
  // [FIX]: ลบตัวแปร 'index' ที่ไม่ได้ใช้ออกเพื่อแก้คำเตือน unused-vars
  const faqList = (data.keywords || []).slice(0, 3).map((kw) => ({
    "@type": "Question",
    name: `บริการ ${kw} ในพื้นที่ ${provinceName} ราคาเริ่มต้นเท่าไหร่?`,
    acceptedAnswer: {
      "@type": "Answer",
      text: `สำหรับบริการ ${kw} ใน${provinceName} ทาง AEMDEVWEB มีแพ็กเกจที่ยืดหยุ่น เริ่มต้นในราคาที่คุ้มค่า พร้อมระบบรองรับการขยายตัวในอนาคตครับ`,
    },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: `${data.title} | ${SITE_CONFIG.brandName}`,
        description: data.seoDescription || data.description,
        isPartOf: { "@id": `${SITE_CONFIG.siteUrl}/#website` },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "หน้าแรก", item: SITE_CONFIG.siteUrl },
            {
              "@type": "ListItem",
              position: 2,
              name: "พื้นที่ให้บริการ",
              item: `${SITE_CONFIG.siteUrl}/areas`,
            },
            { "@type": "ListItem", position: 3, name: provinceName, item: pageUrl },
          ],
        },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        serviceType: "Technical SEO & Web Infrastructure Specialist",
        name: `รับทำเว็บไซต์และ SEO ${provinceName}`,
        provider: { "@id": `${SITE_CONFIG.siteUrl}/#organization` },
        description: data.description,
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: provinceName,
            address: {
              "@type": "PostalAddress",
              addressRegion: provinceName,
              addressCountry: "TH",
            },
          },
          ...(data.districts || []).map((district: string) => ({
            "@type": "AdministrativeArea",
            name: `${district}, ${provinceName}`,
          })),
        ],
      },
      // [NEW]: FAQPage Schema เพื่อดึงดูดสายตาบนหน้าผลการค้นหา (Rich Results)
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        mainEntity: faqList,
      },
    ],
  };
}
