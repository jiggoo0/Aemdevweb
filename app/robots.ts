/** @format */

import { MetadataRoute } from "next"
import { siteConfig } from "@/constants/site-config"

/**
 * ระบบควบคุมการเก็บข้อมูลของ Google และบอทต่างๆ
 * แนวทางปี 2026: เน้นเปิดทางให้ Google Search เจอหน้าเว็บง่ายๆ แต่จำกัดสิทธิ์ AI ไม่ให้ดึงข้อมูลสำคัญ
 * ดูแลโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export default function robots(): MetadataRoute.Robots {
  const rawBaseUrl = siteConfig.project.url

  // จัดการที่อยู่ URL ให้สะอาด ไม่มีเครื่องหมาย / ต่อท้าย
  const baseUrl = rawBaseUrl.endsWith("/")
    ? rawBaseUrl.slice(0, -1)
    : rawBaseUrl

  return {
    rules: [
      {
        userAgent: "*",
        /**
         * 1. ส่วนที่อนุญาต (Allowed Paths)
         * เปิดทางให้บอทเก็บข้อมูลหน้าหลัก, บริการ และหน้ารวมแบบเว็บไซต์ เพื่อดันอันดับ SEO
         */
        allow: [
          "/",
          "/about",
          "/services",
          "/case-studies",
          "/blog",
          "/contact",
          "/templates",
          "/privacy",
          "/terms",
          "/images/showcase",
          "/images/templates",
        ],

        /**
         * 2. ส่วนที่จำกัดการเข้าถึง (Disallowed Paths)
         * ป้องกันบอทเข้าถึงไฟล์ระบบ, ส่วนประกอบของโค้ด และข้อมูลหลังบ้าน
         */
        disallow: [
          "/api/",
          "/_next/",
          "/config/",
          "/content/",
          "/lib/",
          "/types/",
          "/download/",
          "/*.json$",
          "/not-found",
        ],
      },
      {
        /**
         * 3. AI & LLM Protection (มาตรฐานปี 2026)
         * ป้องกัน AI นำผลงานหรือข้อมูลเทคนิคที่เป็นความลับของลูกค้าไปประมวลผลต่อ
         */
        userAgent: [
          "GPTBot",
          "CCBot",
          "ClaudeBot",
          "PerplexityBot",
          "Applebot-Extended",
        ],
        disallow: [
          "/config/",
          "/lib/",
          "/content/",
          "/case-studies/", // ล็อกข้อมูลผลงานแบบละเอียดเพื่อความเป็นส่วนตัวของลูกค้า
          "/templates/*/_parts/", // ป้องกันการเข้าถึงชิ้นส่วนประกอบภายในเทมเพลต
        ],
      },
    ],
    /**
     * แจ้งตำแหน่ง Sitemap เพื่อให้บอทเจอหน้า Landing Page ใหม่ๆ ได้ภายใน 24 ชม.
     */
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
