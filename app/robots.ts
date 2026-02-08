/**
 * [SEO INFRASTRUCTURE]: ROBOTS_CONFIG v17.0.1 (STABILIZED)
 * [STRATEGY]: Full-Data Accessibility | AI Search Readiness | Security Filtering
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants/site-config";

/**
 * @function robots
 * @description กำหนดสิทธิ์การเข้าถึงทรัพยากรของ Crawler (GoogleBot, BingBot, GPTBot)
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
       * เปิดให้ Bot เข้าถึงหน้าเว็บและทรัพยากรทั้งหมด (รวมถึง /_next/)
       * เพื่อให้การประมวลผล RSC (React Server Components) และ Chunks ทำงานได้อย่างสมบูรณ์
       */
      allow: "/",

      /**
       * 02. STRATEGIC FILTERS
       * บล็อกเฉพาะเส้นทางที่เป็นความลับ หรือเสี่ยงต่อการเกิด Duplicate Content
       */
      disallow: [
        "/api/", // ป้องกันการกวาดข้อมูลจาก API Endpoints
        "/admin/", // ป้องกันหน้าจัดการหลังบ้าน (ถ้ามีในอนาคต)
        "/*?*", // ลดภาระ Bot จาก Query Strings เพื่อป้องกันการ Index หน้าที่ซ้ำซ้อน
        "/status", // ป้องกันหน้าตรวจสอบสถานะระบบ (Internal Node)
        "/test-mdx", // ป้องกันหน้า Sandbox สำหรับทดสอบ MDX
      ],
    },

    /**
     * 03. SITEMAP_ORCHESTRATION
     * ระบุตำแหน่ง Sitemap เพื่อเป็นสารบัญให้ Crawler เก็บข้อมูลได้ครบ 100%
     */
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
