/** @format */

import { MetadataRoute } from "next"
import { siteConfig } from "@/constants/site-config"

/**
 * ระบบควบคุมการเก็บข้อมูลของโปรแกรมค้นหา (Search Engine Crawler Control)
 * จัดการพิกัดการเข้าถึงข้อมูลเพื่อให้บอทเก็บข้อมูลเฉพาะส่วนที่ต้องการเปิดเผย
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.project.url

  return {
    rules: [
      {
        userAgent: "*",
        // 1. ส่วนที่อนุญาตให้เก็บข้อมูลเพื่อประโยชน์ด้านการค้นหา (SEO)
        // เปิดทางให้บอทเข้าถึงส่วนงานบริการและเทมเพลตใหม่ๆ ได้เต็มที่
        allow: [
          "/",
          "/about",
          "/services/",
          "/case-studies/",
          "/blog/",
          "/contact",
          "/templates/", // เพิ่มพิกัดเทมเพลตเพื่อรองรับการค้นหา "รับทำ Landing Page"
          "/images/showcase/",
          "/images/templates/",
        ],

        // 2. ส่วนที่ห้ามเข้าถึงเพื่อความปลอดภัยและป้องกันการรั่วไหลของตรรกะระบบ
        disallow: [
          "/api/",
          "/_next/",
          "/config/",
          "/content/",
          "/lib/",
          "/types/", // เพิ่มพิกัดป้องกันบอทอ่านโครงสร้าง Type ของเรา
          "/download/",
          "/*.json$",
          "/not-found",
        ],
      },
      {
        /**
         * 3. การจัดการสิทธิ์สำหรับ AI Crawler (2026 Standard)
         * ป้องกันบอทนำโครงสร้าง Technical SEO และเคสงานเฉพาะทางไปเทรนโมเดล
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
          "/case-studies/", // ล็อคพิกัดงานผลงานความลับ
          "/templates/*/_assets/", // กัน AI ดูด Asset เฉพาะทางของเทมเพลต
        ],
      },
    ],
    // ระบุแผนผังเว็บไซต์เพื่อให้ Index หน้า Landing Page ใหม่ได้ไวขึ้น
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
