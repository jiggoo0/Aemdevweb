/** @format */
import { siteConfig } from "@/config/siteConfig"

interface JsonLdProps {
  // ✅ เพิ่ม BlogPosting และ CollectionPage เพื่อแก้ TypeScript Error
  type?:
    | "Organization"
    | "LocalBusiness"
    | "WebSite"
    | "BlogPosting"
    | "CollectionPage"
  data?: any
}

export default function JsonLd({ type = "Organization", data }: JsonLdProps) {
  // 1. สร้างโครงสร้างพื้นฐาน (Base Schema)
  const baseSchema: any = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/logo.png`,
          width: 600,
          height: 60,
        },
        description: siteConfig.description,
        sameAs: [
          siteConfig.links.facebook,
          siteConfig.links.instagram,
          siteConfig.links.github,
          siteConfig.links.line,
        ].filter(Boolean),
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
        inLanguage: "th-TH",
      },
    ],
  }

  // 2. Logic สำหรับเพิ่ม Schema ตามประเภทที่ระบุ
  if (type === "LocalBusiness") {
    const localData = data || {}
    baseSchema["@graph"].push({
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#localbusiness`,
      ...localData, // ใช้ข้อมูลที่ส่งมา overwrite หรือเพิ่มเข้าไป
    })
  }

  // ✅ เพิ่มรองรับ BlogPosting (สำหรับหน้าบทความเดี่ยว)
  if (type === "BlogPosting" && data) {
    baseSchema["@graph"].push({
      "@type": "BlogPosting",
      ...data,
      publisher: { "@id": `${siteConfig.url}/#organization` },
      isPartOf: { "@id": `${siteConfig.url}/#website` },
    })
  }

  // ✅ เพิ่มรองรับ CollectionPage (สำหรับหน้า Catalog หรือ Blog List)
  if (type === "CollectionPage" && data) {
    baseSchema["@graph"].push({
      "@type": "CollectionPage",
      ...data,
      isPartOf: { "@id": `${siteConfig.url}/#website` },
    })
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
    />
  )
}
