// @format
// พิกัดข้อมูล: app/(seo)/seo/[slug]/page.tsx
// หน้าที่: ส่วนควบคุมการแสดงผลบริการ SEO เชิงเทคนิครายพิกัด (Individual Service Page)
// มาตรฐาน: Next.js 16 (App Router) | Ultra-Deep Level 7 (Strict Typing)
// ควบคุมระบบโดย: นายเอ็มซ่ามากส์

import React from "react"
import { notFound } from "next/navigation"
import { Metadata } from "next"

// [DATA SOURCE]: อ้างอิงพิกัดข้อมูลจาก Master Data และระบบตัวจัดการส่วนแสดงผล
import { seoServicesData } from "@/constants/seo-services"
import { getSeoComponent } from "../_registry"
import { siteConfig } from "@/constants/site-config"

/**
 * [INTERFACE]: กำหนดรูปแบบพิกัดข้อมูลสำหรับ Page Props
 * มาตรฐาน Next.js 15/16: params ต้องเป็น Promise
 */
interface PageProps {
  params: Promise<{ slug: string }>
}

/**
 * 1. [STATIC GENERATION PROTOCOL]
 * เตรียมหน้าเว็บล่วงหน้าเพื่อความเร็ว LCP < 0.8s
 */
export async function generateStaticParams() {
  return seoServicesData.map((service) => ({
    slug: service.slug,
  }))
}

/**
 * 2. [DYNAMIC METADATA SYSTEM]
 * ปรับแต่งพิกัด SEO Metadata รายหน้าแบบ Absolute URL
 */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = seoServicesData.find((item) => item.slug === slug)

  if (!service) return { title: "Service Not Found" }

  const pageUrl = `${siteConfig.project.url}/seo/${slug}`
  // พิกัดรูปภาพอ้างอิง: /public/images/seo/${slug}.webp
  const imageUrl = `${siteConfig.project.url}/images/seo/${slug}.webp`

  return {
    title: `${service.title} | ${siteConfig.project.nameTH}`,
    description: service.description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: `${service.title} - ${siteConfig.expert.name}`,
      description: service.description,
      url: pageUrl,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: service.title }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.description,
      images: [imageUrl],
    },
  }
}

/**
 * 3. [SYSTEM PAGE RENDERER]
 * Render Node หลักสำหรับบริการ Technical SEO
 */
export default async function SeoServicePage({ params }: PageProps) {
  const { slug } = await params
  const serviceData = seoServicesData.find((item) => item.slug === slug)

  if (!serviceData) notFound()

  const ServiceComponent = getSeoComponent(slug)

  /**
   * [JSON-LD ENTITY DATA]: รหัสโครงสร้างเพื่อยืนยันพิกัดบริการและคำถามที่พบบ่อย
   * ผสานรวม Service Schema และ FAQPage Schema เข้าด้วยกัน
   */
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceData.title,
    description: serviceData.description,
    provider: {
      "@type": "Person",
      name: siteConfig.expert.name,
      url: siteConfig.project.url,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Technical SEO Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: serviceData.title,
          },
          price: serviceData.pricing.price,
          priceCurrency: serviceData.pricing.currency,
        },
      ],
    },
  }

  const faqSchema = serviceData.faq && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: serviceData.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <>
      {/* 1. Component Rendering Node */}
      <ServiceComponent data={serviceData} />

      {/* 2. Structured Data Injections (Entity Confirmation) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  )
}
