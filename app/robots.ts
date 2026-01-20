/** @format */

import { MetadataRoute } from "next"
import { siteConfig } from "@/constants/site-config"

/**
 * 🤖 robots.ts — Specialist Search Crawler Control (2026 Edition)
 * ศูนย์ควบคุมสิทธิ์การเก็บข้อมูลของ Search Engine Bots สำหรับธุรกิจ SME & Industrial
 * * * Strategy:
 * - Content Accessibility: เปิดให้ Google/Bing เข้าถึง Conversion Pages (Services/Templates)
 * - AI Data Governance: ป้องกัน LLM Bots จากการดึง AI Context (Technical IP)
 * - SEO Efficiency: จัดการ Crawl Path ให้กระชับเพื่อคะแนน Indexing ที่ดีขึ้น
 */

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url

  return {
    rules: [
      {
        userAgent: "*",

        // ✅ ALLOW: Public Assets & Revenue Layers
        allow: [
          "/",
          "/about",
          "/services/",
          "/case-studies/",
          "/blog/",
          "/contact",
          "/careers",
          // อนุญาตให้เข้าถึงรูปภาพใน showcase และ templates สำหรับ Google Images
          "/images/showcase/",
          "/images/templates/",
        ],

        // 🚫 DISALLOW: Technical & Private Infrastructure
        disallow: [
          "/api/", // Next.js API Routes
          "/admin/", // Management Dashboard
          "/_next/", // Internal System Files
          "/private/", // Internal Documents
          "/config/", // AI Context & Tech Config (Technical IP Protection)
          "/download/", // Restricted Client Files
          "/*.json$", // Metadata & Schema Source Files
          "/not-found", // 404 Page indexing
        ],
      },
      {
        /**
         * 🤖 AI & LLM Protection
         * ป้องกันการดึงข้อมูล AI Context และโครงสร้าง Tech Stack
         * ไปใช้ในการ Train Model โดยไม่ได้รับอนุญาต (Technical IP Protection)
         */
        userAgent: ["GPTBot", "CCBot", "ClaudeBot", "PerplexityBot"],
        disallow: ["/config/", "/lib/", "/content/template/"],
      },
    ],

    // 🔗 Sitemap Linkage
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
