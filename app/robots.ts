/** @format */

import { MetadataRoute } from "next"
import { siteConfig } from "@/constants/site-config"

/**
 * ระบบควบคุมการเก็บข้อมูลของโปรแกรมค้นหา (Search Engine Crawler Control)
 * จัดการพิกัดการเข้าถึงข้อมูลเพื่อให้บอทเก็บข้อมูลเฉพาะส่วนที่ต้องการปิดเผย
 */
export default function robots(): MetadataRoute.Robots {
  // พิกัด URL หลักของเว็บไซต์
  const baseUrl = siteConfig.project.url

  return {
    rules: [
      {
        userAgent: "*",

        // ส่วนที่อนุญาตให้เก็บข้อมูลเพื่อประโยชน์ด้านการค้นหา (SEO)
        allow: [
          "/",
          "/about",
          "/services/",
          "/case-studies/",
          "/blog/",
          "/contact",
          "/careers",
          "/images/showcase/",
          "/images/templates/",
        ],

        // ส่วนที่ห้ามเข้าถึงเพื่อความปลอดภัยและป้องกันการดึงข้อมูลดิบ
        disallow: [
          "/api/", // ระบบเชื่อมต่อหลังบ้าน
          "/_next/", // ไฟล์ระบบของ Next.js
          "/config/", // พิกัดไฟล์ตั้งค่าความปลอดภัย
          "/content/", // ป้องกันบอทเข้าไปอ่านไฟล์ MDX โดยตรง
          "/lib/", // ส่วนจัดการตรรกะระบบ
          "/download/",
          "/*.json$", // ป้องกันการเก็บข้อมูลโครงสร้างไฟล์
          "/not-found",
        ],
      },
      {
        /**
         * การจัดการสิทธิ์สำหรับ AI Crawler (2026 Standard)
         * ป้องกันการนำข้อมูลโครงสร้างเชิงลึกไปใช้งานโดยไม่ได้รับอนุญาต
         */
        userAgent: ["GPTBot", "CCBot", "ClaudeBot", "PerplexityBot"],
        disallow: [
          "/config/", 
          "/lib/", 
          "/content/template/",
          "/case-studies/*" // ป้องกันการนำเคสงานไปใช้เทรน AI โดยไม่ได้รับอนุญาต
        ],
      },
    ],

    // ระบุตำแหน่งไฟล์แผนผังเว็บไซต์เพื่อนำทางบอท
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
