/** @format */

import { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site-config";

/**
 * AEMDEVWEB | Full-Access Robots Engine 2026
 * -------------------------------------------------------------------------
 * กลยุทธ์: "Deep Crawl" - เปิดทุกพิกัดเพื่อให้บอทเก็บข้อมูลได้ลึกระดับ 7
 * มาตรฐาน: Next.js 16 | Ultra-Deep Level 7 | Specialist Logic
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.project.url;

  return {
    rules: [
      {
        /**
         * [MAXIMUM VISIBILITY]: อนุญาตหุ่นยนต์ทุกตัวในโลกสากล
         * เปิดทุกเส้นทางตั้งแต่รากฐานจนถึงปลายทาง (Root to Leaf)
         * เพื่อให้หน้าพิกัดจังหวัด (Area Nodes) ถูกเก็บข้อมูลได้ครบถ้วน
         */
        userAgent: "*",
        allow: ["/"],
        disallow: [
          "/_not-found", // ป้องกันบอทเก็บหน้า Error เข้าไปในดัชนีการค้นหา
          "/api/",       // ป้องกันการเข้าถึง Endpoint ภายใน (หากมีในอนาคต)
        ],
      },
      {
        /**
         * [AI RECOGNITION]: ยินดีให้ AI Crawlers (GPT, Gemini, Claude)
         * เข้ามาเรียนรู้โครงสร้างเทคนิคเพื่อนำไปแนะนำในระบบ Search Generative Experience
         */
        userAgent: ["GPTBot", "Google-Extended", "Anthropic-AI", "CCBot"],
        allow: ["/"],
      },
    ],
    /** * [NAVIGATION HUB]: ระบุพิกัด Sitemap ให้ชัดเจน
     * เพื่อเป็นแผนที่นำทางบอทให้เข้าถึงทุกไฟล์ MDX และ Area Nodes
     */
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
