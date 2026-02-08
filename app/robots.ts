/**
 * [SEO INFRASTRUCTURE]: ROBOTS_CONFIG v17.0.2 (IMAGE_UNBLOCKED)
 * [STRATEGY]: Full-Data Accessibility | AI Search Readiness | Security Filtering
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants/site-config";

/**
 * @function robots
 * @description กำหนดสิทธิ์การเข้าถึงทรัพยากรของ Crawler ให้มีประสิทธิภาพสูงสุด
 * เน้นการอนุญาตให้ Google เข้าถึงระบบ Image Optimization ได้อย่างไร้อุปสรรค
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_CONFIG.siteUrl.endsWith("/")
    ? SITE_CONFIG.siteUrl.slice(0, -1)
    : SITE_CONFIG.siteUrl;

  return {
    rules: {
      userAgent: "*",

      /**
       * 01. TOTAL ACCESS PROTOCOL
       * อนุญาตให้เข้าถึงหน้าหลักและทรัพยากรพื้นฐาน
       */
      allow: [
        "/",
        "/_next/static/images/", // อนุญาตให้ดึงรูปภาพ Static โดยตรง
        "/_next/image*", // [CRITICAL]: ปลดล็อกระบบ Image Optimization ของ Next.js
      ],

      /**
       * 02. STRATEGIC FILTERS
       * บล็อกเฉพาะเส้นทางที่ไม่ต้องการให้ปรากฏบนผลการค้นหา (SERP)
       */
      disallow: [
        "/api/", // ป้องกันการกวาดข้อมูล API Endpoints หลังบ้าน
        "/admin/", // ป้องกันหน้าจัดการระบบในอนาคต
        "/status", // ป้องกันหน้าตรวจสอบสถานะระบบ
        "/test-mdx", // ป้องกันหน้า Sandbox สำหรับทดสอบ MDX
        "/*?tag=*", // บล็อกเฉพาะ Query Filter เพื่อลด Duplicate Content
        "/*?category=*",
      ],
    },

    /**
     * 03. SITEMAP_ORCHESTRATION
     * ระบุตำแหน่งสารบัญเว็บไซต์เพื่อให้ Crawler เก็บข้อมูลได้แม่นยำ 100%
     */
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
