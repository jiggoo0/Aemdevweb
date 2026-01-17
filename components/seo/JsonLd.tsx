/** @format */

import React from "react"
import { siteConfig } from "@/constants/site-config"

// ✅ 1. Type Definitions: Strong Typing for SEO Data
export interface FAQItem {
  question: string
  answer: string
}

export interface BreadcrumbItem {
  name: string
  path: string
}

export interface JsonLdData {
  slug?: string
  name?: string // ✅ รองรับชื่อองค์กรหรือชื่อหน้า
  title?: string // ✅ รองรับ Title ของหน้า
  description?: string
  excerpt?: string
  image?: string
  url?: string
  coverImage?: string
  date?: string
  updatedAt?: string
  faqs?: FAQItem[]
  items?: BreadcrumbItem[]
}

export interface JsonLdProps {
  // ✅ กำหนด Type ให้ชัดเจนเพื่อป้องกันการส่งค่าผิด (TS2820 Fixed)
  type?: "Website" | "ProfessionalService" | "Article" | "FAQ" | "Breadcrumb"
  data?: JsonLdData
}

/**
 * 🚀 JsonLd Component
 * DNA: High-Conversion SEO Engine
 * เครื่องมือสร้าง Structured Data (Schema.org) เพื่อดันอันดับ SEO ในปี 2026
 */
export const JsonLd = ({ type = "Website", data }: JsonLdProps) => {
  if (!data && type !== "Website") return null

  const baseUrl = siteConfig.url
  const currentUrl = data?.url || baseUrl
  const defaultImage = `${baseUrl}/images/og-image.png`

  // 🏢 1. Schema: Website & Professional Service (Home & Landing)
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": type === "Website" ? "WebSite" : "ProfessionalService",
    name: data?.name || data?.title || siteConfig.name,
    alternateName: "AemDevWeb",
    description: data?.description || siteConfig.description,
    url: currentUrl,
    image: data?.image ? [data.image] : [defaultImage],
    "@id": `${baseUrl}/#organization`,
    // Specific for ProfessionalService
    ...(type === "ProfessionalService" && {
      priceRange: "฿2,900 - ฿15,000",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Online Service",
        addressLocality: "Bangkok",
        addressRegion: "Bangkok",
        postalCode: "10000",
        addressCountry: "TH",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "22:00",
      },
    }),
    brand: {
      "@type": "Brand",
      name: "AemDevWeb",
    },
    sameAs: [
      siteConfig.links?.line || "",
      "https://facebook.com/aemdevweb",
      "https://github.com/aemdevweb",
    ].filter(Boolean), // Filter out empty strings
  }

  // 📝 2. Schema: Article (Blog Post)
  const articleSchema =
    type === "Article" && data
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: data.title,
          description: data.description || data.excerpt,
          image: data.coverImage
            ? data.coverImage.startsWith("http")
              ? data.coverImage
              : `${baseUrl}${data.coverImage}`
            : defaultImage,
          datePublished: data.date,
          dateModified: data.updatedAt || data.date,
          author: {
            "@type": "Person",
            name: "AemDevWeb",
            url: baseUrl,
          },
          publisher: {
            "@type": "Organization",
            name: "AemDevWeb",
            logo: {
              "@type": "ImageObject",
              url: `${baseUrl}/icon.png`,
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": currentUrl,
          },
        }
      : null

  // ❓ 3. Schema: FAQ (Service & Support)
  const faqSchema =
    type === "FAQ" && data?.faqs
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: data.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null

  // 🍞 4. Schema: Breadcrumb (Navigation)
  const breadcrumbSchema =
    type === "Breadcrumb" && data?.items
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: data.items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.path.startsWith("http")
              ? item.path
              : `${baseUrl}${item.path}`,
          })),
        }
      : null

  // 🎯 Selector Logic
  const getSelectedSchema = () => {
    switch (type) {
      case "Article":
        return articleSchema
      case "FAQ":
        return faqSchema
      case "Breadcrumb":
        return breadcrumbSchema
      case "ProfessionalService":
      case "Website":
      default:
        return websiteSchema
    }
  }

  const finalSchema = getSelectedSchema()

  if (!finalSchema) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(finalSchema) }}
    />
  )
}
