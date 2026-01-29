/** @format */

import { MetadataRoute } from "next"
import { siteConfig } from "@/constants/site-config"

/**
 * AEMDEVWEB | Search Engine Intelligence Control 2026
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: "Maximum Visibility" - เปิดโครงสร้างระบบให้บอทเข้าถึงพิกัดข้อมูล 100%
 * วางระบบและควบคุมพิกัดโดย: นายเอ็มซ่ามากส์
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.project.url

  return {
    rules: [
      {
        /** * [OPEN ACCESS PROTOCOL]: อนุญาตให้บอทสากล (Google, Bing, DuckDuckGo) 
         * เข้าเก็บข้อมูลเพื่อสร้างพิกัดความน่าเชื่อถือ (Entity Authority)
         */
        userAgent: "*",
        allow: ["/"],
        disallow: [
          "/api/",       // ป้องกันบอทเข้าถึงระบบรับส่งข้อมูลหลังบ้านโดยตรง
          "/admin/",     // พิกัดระบบควบคุมสารสนเทศภายใน
          "/_not-found", // ป้องกันหน้า Error จากการถูกบันทึกในระบบค้นหา
          "/private/",   // พิกัดข้อมูลจำเพาะที่ไม่ต้องการเปิดเผยสู่สาธารณะ
        ],
      },
      {
        /** * [AI DATA PROTECTION]: ป้องกันบอทดูดข้อมูลเพื่อไปประมวลผล AI (Scraping)
         * ในพิกัดที่อาจส่งผลกระทบต่อลิขสิทธิ์เนื้อหาเทคนิค
         */
        userAgent: ["GPTBot", "CCBot"],
        disallow: ["/private/"], // อนุญาตให้เก็บหน้าทั่วไป แต่ปิดกั้นพิกัดสำคัญ
      }
    ],
    /** แจ้งพิกัดแผนผังเว็บไซต์ (Sitemap) เพื่อให้บอทประมวลผลข้อมูลได้รวดเร็วที่สุด */
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
