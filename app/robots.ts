/**
 * [SEO MODULE]: ROBOTS_CONFIGURATION v17.9.9 (BOT_RENDERING_READY)
 * [STRATEGY]: Rendering Optimization | Asset Accessibility | Security Guard
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants/site-config";

/**
 * @function robots
 * @description กำหนดพฤติกรรมของ Search Engine Crawler เพื่อรักษาความปลอดภัยและประสิทธิภาพ SEO
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_CONFIG.siteUrl;

  return {
    rules: {
      userAgent: "*",
      // [RENDERING_PATH]: เปิดให้ Bot เข้าถึงทรัพยากรที่จำเป็นต่อการประมวลผล Layout (Critical for Core Web Vitals)
      allow: [
        "/",
        "/_next/static/", // [CRITICAL]: ให้ Bot อ่าน CSS/JS เพื่อเรนเดอร์ UI ให้เหมือนผู้ใช้จริง
        "/_next/image", // [CRITICAL]: ให้ Bot เข้าถึงรูปที่ผ่าน Next.js Optimizer เพื่อวัดผล LCP
        "/images/", // ให้บอทเข้าถึงโฟลเดอร์รูปภาพเพื่อทำ Image Search Indexing
      ],
      // [SECURITY_PATH]: ปิดกั้นพื้นที่ที่ไม่ต้องการให้ปรากฏบนผลการค้นหา หรือพื้นที่ส่วนตัว
      disallow: [
        "/api/", // ปิดกั้น Endpoint ข้อมูลเบื้องหลัง
        "/admin/", // ปิดกั้นพื้นที่จัดการระบบ
        "/status", // ปิดกั้นหน้าเช็คสถานะภายใน
        "/private/", // ปิดกั้นโฟลเดอร์ส่วนตัว (ถ้ามี)
        "/*?*", // [STRATEGY]: ป้องกัน URL Parameters ที่อาจทำให้เกิด Duplicate Content
      ],
    },
    // [ORCHESTRATION]: ระบุตำแหน่ง Sitemap เพื่อให้ Bot เริ่มต้น Crawling ได้ทันที
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
