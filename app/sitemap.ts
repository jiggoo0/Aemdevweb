// @format
// พิกัดข้อมูล: app/sitemap.ts
// หน้าที่: ระบบสร้างแผนผังเว็บไซต์แบบ Dynamic (Sitemap Engine)
// มาตรฐาน: Next.js 16 | Ultra-Deep Level 7 | Search Engine Standards 2026
// ควบคุมระบบโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)

import { MetadataRoute } from "next"
import { seoServicesData } from "@/constants/seo-services"
import { getAllCaseStudies } from "@/lib/case-studies"
import { getBlogPostsMetadata } from "@/lib/blog"
import { siteConfig } from "@/constants/site-config"

/**
 * absoluteUrl: ฟังก์ชันสร้าง URL เต็มรูปแบบเพื่อป้องกันพิกัดข้อมูลคลาดเคลื่อน
 * ตรวจสอบพิกัด Domain จาก siteConfig โดยตรง
 */
const absoluteUrl = (path: string) => `${siteConfig.project.url}${path}`

/**
 * [SITEMAP GENERATOR PROTOCOL]
 * ยุทธศาสตร์: เร่งอัตราการเก็บข้อมูล (Crawl Rate) ด้วยพิกัด Priority ระดับสูง
 * -------------------------------------------------------------------------
 * กระบวนการประมวลผลข้อมูลแบบ Parallel เพื่อความฉับไวของระบบ
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // [1. STATIC ROUTES NODE]: รากฐานและหน้าบริการหลัก
  const staticRoutes = [
    "",
    "/services",
    "/seo",
    "/case-studies",
    "/blog",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }))

  // [2. DYNAMIC SEO NODES]: บริการ Technical SEO เฉพาะทาง
  const seoRoutes = seoServicesData.map((service) => ({
    url: absoluteUrl(`/seo/${service.slug}`),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9, // พิกัดความสำคัญสูงสุดเพื่อชิงพื้นที่การค้นหา
  }))

  // [3. CASE STUDIES NODES]: พิกัดยืนยันผลลัพธ์เชิงประจักษ์
  const allCaseStudies = await getAllCaseStudies()
  const caseStudyRoutes = allCaseStudies.map((item) => ({
    url: absoluteUrl(`/case-studies/${item.slug}`),
    lastModified: new Date(item.frontmatter.date || new Date()),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // [4. BLOG NODES]: พิกัดคลังความรู้เชิงเทคนิค
  const allPosts = await getBlogPostsMetadata()
  const blogRoutes = allPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.date || new Date()),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  /** * [CONSOLIDATION]: รวมพิกัดข้อมูลทั้งหมดเพื่อส่งมอบให้บอท AI
   * ผลลัพธ์: โครงสร้าง XML ที่สมบูรณ์แบบระดับ Specialist
   */
  return [...staticRoutes, ...seoRoutes, ...caseStudyRoutes, ...blogRoutes]
}
