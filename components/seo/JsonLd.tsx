/** @format */
import { siteConfig } from "@/config/siteConfig"

interface JsonLdProps {
  type?: "Organization" | "LocalBusiness" | "WebSite"
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
          height: 60, // ✅ Fixed: เปลี่ยนจาก ; เป็น , เรียบร้อยแล้ว
        },
        description: siteConfig.description,
        sameAs: [
          siteConfig.links.facebook,
          siteConfig.links.instagram,
          siteConfig.links.github,
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.title,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
        inLanguage: "th-TH",
      },
    ],
  }

  // 2. ถ้ามีการส่ง type เป็น LocalBusiness (เช่น จากหน้า Contact) ให้เพิ่ม Schema เข้าไปใน Graph
  if (type === "LocalBusiness" && data) {
    baseSchema["@graph"].push({
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/contact/#localbusiness`,
      name: data.name || siteConfig.name,
      description: data.description || siteConfig.description,
      telephone: data.telephone || siteConfig.contact.tel,
      url: data.url || `${siteConfig.url}/contact`,
      address: data.address || {
        "@type": "PostalAddress",
        addressLocality: "Bangkok",
        addressCountry: "TH",
      },
      image: data.image || `${siteConfig.url}${siteConfig.ogImage}`,
    })
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
    />
  )
}
