/**
 * [SEO INFRASTRUCTURE]: ROBOTS_GENERATOR v17.5.3 (STABILIZED)
 * [STRATEGY]: Optimized for Rendering | High Performance SEO
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { MetadataRoute } from "next"; // [FIXED]: Use 'import type' for strict lint compliance
import { SITE_CONFIG } from "@/constants/site-config";

/**
 * @function robots
 * @description กำหนดสิทธิ์การเข้าถึงของ Search Engine Bots
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",    // [SECURITY]: ป้องกัน Bot ยิง Endpoint โดยตรง
          "/admin/",  // [PRIVACY]: พื้นที่จัดการระบบส่วนบุคคล
          "/status/", // [SYSTEM]: หน้า Monitor ไม่จำเป็นต้องทำดัชนี
          // [CRITICAL]: ห้ามใส่ /_next/ ใน disallow เพื่อให้ Bot โหลด CSS/JS มา Render ได้สมบูรณ์
        ],
      },
      {
        /**
         * [STRATEGY]: Googlebot Optimization
         * ให้ความสำคัญกับ Google เป็นพิเศษเพื่อให้ดึงภาพขนาดใหญ่ (Large Image Preview) ไปใช้ได้
         */
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    // [DISCOVERY]: ชี้ทางไปยัง Sitemap เพื่อการเก็บข้อมูลที่รวดเร็ว
    sitemap: `${SITE_CONFIG.siteUrl}/sitemap.xml`,
  };
}
