/**
 * [SEO INFRASTRUCTURE]: ROBOTS_PROTOCOL v17.0.5 (STABILIZED)
 * [STRATEGY]: AI Search Friendly | Crawl Path Defense
 */

import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants/site-config";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_CONFIG.siteUrl.endsWith("/")
    ? SITE_CONFIG.siteUrl.slice(0, -1)
    : SITE_CONFIG.siteUrl;

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/_next/static/images/", "/_next/image*"],
        disallow: ["/api/", "/_next/static/development/"],
      },
      {
        /* [STRATEGY]: เปิดให้ AI Bots เข้าถึงเพื่อสร้าง Visibility ใน AI Search Results */
        userAgent: ["GPTBot", "ChatGPT-User", "Claude-Bot", "PerplexityBot"],
        allow: ["/blog/", "/case-studies/", "/services/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
