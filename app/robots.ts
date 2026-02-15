/**
 * [SEO MODULE]: ROBOTS_CONFIGURATION v17.9.11 (ULTIMATE_HARDENED)
 * [STRATEGY]: Rendering Optimization | Asset Accessibility | Crawl Budget Management
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { MetadataRoute } from "next"; // [FIXED]: ใช้ import type เพื่อความคลีนของระบบ
import { absoluteUrl } from "@/lib/utils"; // [FIXED]: ใช้ absoluteUrl เพื่อความสอดคล้องกับ sitemap.ts

/**
 * @function robots
 * @description ควบคุมพฤติกรรมการจัดเก็บข้อมูลของ Search Engine เพื่อรักษาความปลอดภัยและประสิทธิภาพสูงสุด
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",

      // [RENDERING_PATH]: อนุญาตให้บอทเข้าถึงทรัพยากรสำคัญเพื่อการเรนเดอร์ UI แบบ Full-Paint
      // หัวใจสำคัญของการรักษาคะแนน LCP และ SEO Visibility
      allow: [
        "/",
        "/_next/static/", // Critical CSS/JS
        "/_next/image", // Optimized Next-Images
        "/images/", // Image Search Assets
      ],

      // [SECURITY_PATH]: ป้องกันการรั่วไหลของข้อมูลและประหยัดงบการไต่ (Crawl Budget)
      disallow: [
        "/api/", // Backend Endpoints
        "/admin/", // Management Console
        "/status", // System Health Checks
        "/private/", // Internal Data
        "/*?*", // [STRATEGY]: ป้องกัน Duplicate Content จาก Tracking Params (?fbclid, ?utm...)
      ],
    },

    // [ORCHESTRATION]: ระบุพิกัดแผนผังเว็บไซต์เพื่อให้บอทค้นพบ 37+ Area Nodes ได้ทันที
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
