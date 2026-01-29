/** @format */

import { MetadataRoute } from "next"
import { siteConfig } from "@/constants/site-config"

/**
 * AEMDEVWEB | Search Engine Intelligence Control 2026
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: "Full Render Visibility" & "Strategic AI Protection"
 * วางระบบและควบคุมพิกัดโดย: นายเอ็มซ่ามากส์ (อลงกรณ์ ยมเกิด)
 * เป้าหมาย: ล้างพิกัด Error จาก Rich Results Test และรักษาความปลอดภัยข้อมูล Node สำคัญ
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.project.url.replace(/\/$/, "")

  return {
    rules: [
      {
        /** [GENERAL SEARCH BOTS]: เปิดทางให้บอทคุณภาพเข้ามาเก็บพิกัดความแรง */
        userAgent: "*",
        allow: [
          "/",
          "/_next/static/", // เปิดพิกัดให้บอทโหลด JS/CSS เพื่อใช้เรนเดอร์ Interface ให้เนี้ยบ
          "/_next/image",  // เปิดพิกัดให้บอทเข้าถึงรูปภาพที่ นายเอ็มซ่ามากส์ จูนสปีดไว้
          "/api/og",       // พิกัดภาพ Open Graph สำหรับการแชร์โซเชียลที่แม่นยำ
        ],
        disallow: [
          "/api/",         // ปิดพิกัดระบบหลังบ้าน
          "/config/",      // ปิดพิกัดโครงสร้างการตั้งค่า
          "/lib/",         // ปิดพิกัด Library ภายใน
          "/types/",       // ปิดพิกัดนิยาม Type ทั้งหมด
          "/actions/",     // ปิดพิกัด Server Actions
          "/_not-found",   // ไม่ต้อง Index หน้า Error
          "/*?*",          // [STRATEGIC]: ปิดพิกัด Parameter เพื่อป้องกัน Duplicate Content
        ],
      },
      {
        /** * [AI SCRAPER CONTROL]: บล็อกพิกัดบอทสายดูดข้อมูล 
         * ปกป้องทรัพย์สินทางปัญญาของ นายเอ็มซ่ามากส์ จากการถูกนำไปเทรน AI โดยไร้ทราฟฟิก
         */
        userAgent: [
          "GPTBot",
          "CCBot",
          "ChatGPT-User",
          "ClaudeBot",
          "PerplexityBot",
          "Applebot-Extended",
          "Omgilibot",
          "FacebookBot",
          "Bytespider", // บอทจาก ByteDance (TikTok)
          "ImagesiftBot",
        ],
        disallow: [
          "/case-studies/", // ปกป้องพิกัดความสำเร็จที่เป็นความลับธุรกิจ
          "/content/",      // ปิดพิกัด Raw Markdown Data
          "/config/",
          "/_next/data/",   // บล็อกพิกัดข้อมูล JSON ของ Next.js
        ],
      },
    ],
    /** แจ้งพิกัดแผนผังเว็บไซต์เพื่อให้บอทวิ่งงานได้ไวขึ้น */
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
