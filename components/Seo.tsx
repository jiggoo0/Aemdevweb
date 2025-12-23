"use client"

import React from "react"
import { siteConfig } from "@/config/siteConfig"

interface SeoProps {
  title?: string
  description?: string
  ogImage?: string
  ogType?: "website" | "article"
  canonicalUrl?: string
}

export default function Seo({
  title,
  description,
  ogImage,
  ogType = "website",
  canonicalUrl,
}: SeoProps) {
  // รวมชื่อเว็บเข้ากับ Title ถ้ามีการส่งค่ามา
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title

  const metaDescription = description || siteConfig.description
  const image = ogImage || siteConfig.ogImage
  const url = canonicalUrl || siteConfig.url

  return (
    <>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />

      {/* Additional Tags for Business Trust */}
      <meta name="author" content={siteConfig.name} />
      <meta name="robots" content="index, follow" />
    </>
  )
}
