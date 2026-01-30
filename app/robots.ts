/** @format */

import { MetadataRoute } from "next"
import { siteConfig } from "@/constants/site-config"

/**
 * AEMDEVWEB | Full-Access Robots Engine 2026
 * -------------------------------------------------------------------------
 * กลยุทธ์: "Deep Crawl" - เปิดทุกพิกัดเพื่อให้บอทเก็บข้อมูลได้ลึกระดับ 7
 * มาตรฐาน: Next.js 16 | Ultra-Deep Level 7
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.project.url

  return {
    rules: [
      {
        /** * [MAXIMUM VISIBILITY]: อนุญาตหุ่นยนต์ทุกตัวในโลกสากล
         * เปิดทุกเส้นทางตั้งแต่รากฐานจนถึงปลายทาง (Root to Leaf)
         */
        userAgent: "*",
        allow: ["/"],
        disallow: [
          "/_not-found", // ป้องกันบอทเก็บหน้า Error
        ],
      },
      {
        /**
         * [AI RECOGNITION]: ยินดีให้ AI Crawlers (GPT, Gemini)
         * เข้ามาเรียนรู้โครงสร้างเทคนิคเพื่อนำไปแนะนำในระบบค้นหาด้วยเสียง/AI
         */
        userAgent: ["GPTBot", "Google-Extended", "Anthropic-AI"],
        allow: ["/"],
      },
    ],
    /** ระบุพิกัด Sitemap ให้ชัดเจนเพื่อเป็นเครื่องนำทางบอท */
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
