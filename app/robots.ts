/** @format */

import { MetadataRoute } from "next"
import { siteConfig } from "@/constants/site-config"

/**
 * ระบบควบคุมการเก็บข้อมูลของระบบค้นหา (Search Engine Crawler Control)
 * จัดการพิกัดการเข้าถึงข้อมูลเพื่อให้บอทเก็บข้อมูลเฉพาะส่วนที่ต้องการสื่อสารต่อสาธารณะ
 * Identity: นายเอ็มซ่ามากส์ (อลงกรณ์ ยมเกิด)
 * Project: AEMDEVWEB - Landing Page SME & technical SEO
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.project.url

  return {
    rules: [
      {
        userAgent: "*",
        /**
         * 1. ส่วนที่อนุญาตให้เข้าถึง (Allowed Paths)
         * เปิดทางให้บอทเก็บข้อมูลหน้าบริการและคลังเทมเพลตเพื่อรองรับ Organic Search
         */
        allow: [
          "/",
          "/about",
          "/services/",
          "/case-studies/",
          "/blog/",
          "/contact",
          "/templates/", // พิกัดหลักสำหรับงานรับทำ Landing Page
          "/images/showcase/",
          "/images/templates/",
        ],

        /**
         * 2. ส่วนที่ห้ามเข้าถึง (Disallowed Paths)
         * ป้องกันบอทเข้าถึงไฟล์ระบบและตรรกะหลังบ้านเพื่อความปลอดภัยของโครงการ
         */
        disallow: [
          "/api/",
          "/_next/",
          "/config/",
          "/content/",
          "/lib/",
          "/types/", // ป้องกันการเข้าถึงโครงสร้างประเภทข้อมูล
          "/download/",
          "/*.json$",
          "/not-found",
        ],
      },
      {
        /**
         * 3. การจัดการสิทธิ์สำหรับ AI Crawler (2026 Standard)
         * ป้องกันบอทนำพิกัดงาน technical SEO และเคสผลงานเฉพาะทางไปประมวลผลต่อโดยไม่ได้รับอนุญาต
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
          "/case-studies/", // ล็อกพิกัดผลงานที่เป็นความลับของลูกค้า
          "/templates/*/_assets/", // กัน AI เข้าถึงทรัพยากรเฉพาะทางของเทมเพลต
        ],
      },
    ],
    /**
     * ระบุตำแหน่งแผนผังเว็บไซต์ (Sitemap)
     * เพื่อให้ Google ค้นพบหน้า Landing Page ใหม่ๆ ได้รวดเร็วและครบถ้วน
     */
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
