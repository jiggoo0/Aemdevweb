/** @format */

import { MetadataRoute } from "next"
import { siteConfig } from "@/constants/site-config"

/**
 * 🤖 robots.ts — Specialist Search Crawler Control (2026 Edition)
 * ศูนย์ควบคุมสิทธิ์การเก็บข้อมูลของ Search Engine Bots สำหรับธุรกิจ SME & Industrial
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
          "/case-studies/", // รองรับ SEO Slugs ใหม่ที่คุณปรับปรุง
          "/blog/",
          "/contact",
          "/careers",
          // อนุญาตให้เข้าถึงรูปภาพเพื่อผลทาง Image SEO
          "/images/showcase/",
          "/images/templates/",
        ],

        // 🚫 DISALLOW: Technical & Private Infrastructure
        disallow: [
          "/api/",      // Next.js API Routes
          "/_next/",    // Internal System Files
          "/config/",   // [CRITICAL]: ป้องกัน AI Context & Tech Config
          "/content/",  // ป้องกันการดึงไฟล์ MDX โดยตรง
          "/lib/",      // Technical Logic Protection
          "/download/", // Restricted Client Files
          "/*.json$",   // Metadata & Schema Source Files
          "/not-found", // ป้องกันการ Index หน้า 404
        ],
      },
      {
        /**
         * 🛡️ AI & LLM Protection (Data Governance)
         * ป้องกัน LLM Bots จากการดึง Technical IP ไปใช้โดยไม่ได้รับอนุญาต
         */
        userAgent: ["GPTBot", "CCBot", "ClaudeBot", "PerplexityBot"],
        disallow: ["/config/", "/lib/", "/content/template/"],
      },
    ],

    // 🔗 เชื่อมต่อกับ Dynamic Sitemap ที่เราเพิ่งปรับปรุง
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
