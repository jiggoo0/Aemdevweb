// @format
// พิกัดข้อมูล: app/sitemap.ts
// หน้าที่: ระบบสร้างแผนผังเว็บไซต์แบบ Dynamic (Sitemap Engine)
// มาตรฐาน: Next.js 16 | Ultra-Deep Level 7 | Search Engine Standards 2026
// ควบคุมระบบโดย: นายเอ็มซ่ามากส์

import { MetadataRoute } from "next";
import { seoServicesData } from "@/constants/seo-services";
import { getAllCaseStudies } from "@/lib/case-studies";
import { getBlogPostsMetadata } from "@/lib/blog";
import { absoluteUrl } from "@/lib/utils";

/**
 * [SITEMAP GENERATOR]: รวบรวมพิกัดทางเดินทั้งหมดของระบบงาน
 * ยุทธศาสตร์: กระจายพลังงานความน่าเชื่อถือ (Link Juice) ไปยังทุกโหนดข้อมูล
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. พิกัดหน้าหลักและหน้าโครงสร้างระบบ (Static Routes Node)
  // ให้ความสำคัญสูงสุดกับหน้าขายและหน้าบริการหลัก
  const staticRoutes = [
    "", 
    "/services", 
    "/seo", 
    "/case-studies", 
    "/blog", 
    "/about", 
    "/contact",
    "/privacy",
    "/terms"
  ].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. พิกัดบริการ SEO เชิงเทคนิค (Dynamic SEO Services)
  // วางระบบให้บอทเข้ามาตรวจสอบพิกัดข้อมูลทุกสัปดาห์
  const seoRoutes = seoServicesData.map((service) => ({
    url: absoluteUrl(`/seo/${service.slug}`),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // 3. พิกัดกรณีศึกษาและผลลัพธ์เชิงประจักษ์ (Case Studies Node)
  const allCaseStudies = await getAllCaseStudies();
  const caseStudyRoutes = allCaseStudies.map((item) => ({
    url: absoluteUrl(`/case-studies/${item.slug}`),
    lastModified: new Date(item.frontmatter.date || new Date()),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 4. พิกัดคลังความรู้และบทความเทคนิค (Blog Posts Node)
  const allPosts = await getBlogPostsMetadata();
  const blogRoutes = allPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.date || new Date()),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  /** * [CONSOLIDATION]: ผสานพิกัดข้อมูลทั้งหมดเพื่อส่งมอบให้บอท AI 
   * ยืนยันความสมบูรณ์ของโครงสร้างเว็บไซต์ 100%
   */
  return [
    ...staticRoutes,
    ...seoRoutes,
    ...caseStudyRoutes,
    ...blogRoutes,
  ];
}
