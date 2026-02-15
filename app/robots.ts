/**
 * [SEO MODULE]: ROBOTS_CONFIGURATION v17.9.10 (STABLE_FINAL)
 * [STRATEGY]: Rendering Optimization | Asset Accessibility | Duplicate Prevention
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants/site-config";

/**
 * @function robots
 * @description ควบคุมพฤติกรรมการจัดเก็บข้อมูลของ Search Engine เพื่อรักษาความปลอดภัยและประสิทธิภาพสูงสุด
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_CONFIG.siteUrl;

  return {
    rules: {
      userAgent: "*",
      // [RENDERING_PATH]: อนุญาตให้บอทเข้าถึงทรัพยากรสำคัญเพื่อการเรนเดอร์ UI
      // หากปิดส่วนนี้ บอทจะมองเห็นเว็บเป็นหน้าขาว ซึ่งส่งผลเสียต่อคะแนน SEO และ LCP
      allow: [
        "/",
        "/_next/static/", // [CRITICAL]: สำหรับไฟล์ CSS/JS หลัก
        "/_next/image", // [CRITICAL]: สำหรับรูปภาพที่ผ่านการ Optimize (วัดผล LCP)
        "/images/", // สำหรับ Image Search Indexing
      ],
      // [SECURITY_PATH]: ป้องกันบอทเข้าถึงพื้นที่ที่ไม่เกี่ยวข้องกับการค้นหาหรือข้อมูลหลังบ้าน
      disallow: [
        "/api/", // API Endpoints
        "/admin/", // ระบบจัดการ (ถ้ามี)
        "/status", // หน้าเช็คสถานะระบบ
        "/private/", // ข้อมูลส่วนบุคคล
        "/*?*", // [STRATEGY]: ป้องกัน Duplicate Content จาก URL Parameters (เช่น ?fbclid=...)
      ],
    },
    // [ORCHESTRATION]: ลิงก์ไปยัง Sitemap ที่เราเพิ่งสร้างไว้
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
