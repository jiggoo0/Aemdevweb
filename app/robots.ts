/**
 * [SEO INFRASTRUCTURE]: ROBOTS_GENERATOR v17.5.5 (STABILIZED)
 * [STRATEGY]: Optimized for Rendering | AI Agent Access | High-Fidelity SEO
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants/site-config";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_CONFIG.siteUrl.replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/about",
          "/services/",
          "/case-studies/",
          "/areas/",
          "/blog/",
          "/_next/static/", // [CRITICAL]: ให้ Bot อ่าน CSS/JS ได้
          "/_next/image", // [CRITICAL]: ให้ Bot อ่านรูปที่ Optimize แล้วได้
          "/images/", // เปิดให้เข้าถึง Folder Assets
        ],
        disallow: [
          "/api/",
          "/_next/data/",
          "/admin/",
          "/status/",
          "/*?fbclid=", // ป้องกัน Duplicate จาก Facebook Parameter
          "/*?utm_", // ป้องกัน Duplicate จาก Marketing Parameter
        ],
      },
      {
        /** [AI BOT PROTOCOL]: อนุญาตให้ AI ช่วยดึงข้อมูลไปตอบใน SGE/ChatGPT */
        userAgent: ["GPTBot", "ChatGPT-User", "Google-Extended"],
        allow: ["/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
