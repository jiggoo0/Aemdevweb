/** @format */

import { MetadataRoute } from "next"
// [FIX]: Removed unused import to clear ESLint warning
// import { siteConfig } from "@/constants/site-config"
import { getAllPosts } from "@/lib/blog"
import { servicesData } from "@/constants/services-data"
import { getAllCaseStudies } from "@/lib/case-studies"
import { getAllTemplates } from "@/lib/template"
import { BlogPost, CaseStudyItem } from "@/types"

/**
 * AEMDEVWEB | Search Engine Indexing Protocol 2026
 * -------------------------------------------------------------------------
 * ระบบแผนผังเว็บไซต์อัตโนมัติ (Dynamic Sitemap) พิกัดแม่นยำสูงสุด
 * กลยุทธ์: ดัน Priority หน้าเชิงพาณิชย์ (Templates/Services) เพื่อเร่งยอด Index
 * วางระบบและจูนโครงสร้างโดย: นายเอ็มซ่ามากส์ (นายอลงกรณ์ ยมเกิด)
 * ยุทธศาสตร์: Entity Authority & Domain Integrity
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // ล็อก Domain หลักให้มั่นคง ป้องกัน URL เพี้ยนจาก Config
  const baseUrl = "https://www.aemdevweb.com"
  const now = new Date()

  // 1. Static Routes (พิกัดหลักของระบบ Priority: 0.8 - 1.0)
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/services",
    "/templates",
    "/case-studies",
    "/blog",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? ("daily" as const) : ("monthly" as const),
    priority: route === "" ? 1.0 : 0.8,
  }))

  // 2. Service Pages (พิกัดยุทธศาสตร์การขาย Priority: 0.9)
  const serviceRoutes: MetadataRoute.Sitemap = (servicesData || []).map(
    (service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })
  )

  /** * [PERFORMANCE ENGINE]: ดึงข้อมูล MDX จากคลังระบบพร้อมกัน 
   * จูนสมรรถนะโดย นายเอ็มซ่ามากส์ เพื่อความซิ่งในระนาบ Server
   */
  const [caseStudies, posts, templates] = await Promise.all([
    getAllCaseStudies(),
    getAllPosts(),
    getAllTemplates(),
  ])

  // 3. Template Routes (พิกัดสินค้าสมรรถนะสูง Priority: 0.9)
  const templateRoutes: MetadataRoute.Sitemap = (templates || []).map(
    (slug: string) => ({
      url: `${baseUrl}/templates/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })
  )

  // 4. Case Studies (พิกัดยืนยันความสำเร็จ Priority: 0.8)
  const caseStudyRoutes: MetadataRoute.Sitemap = (caseStudies || []).map(
    (study: CaseStudyItem) => ({
      url: `${baseUrl}/case-studies/${study.slug}`,
      lastModified: new Date(study.frontmatter.date || now),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  )

  // 5. Blog Posts (พิกัดคลังความรู้เชิงระบบ Priority: 0.7)
  const blogRoutes: MetadataRoute.Sitemap = (posts || []).map(
    (post: BlogPost) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.frontmatter.date || now),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  )

  /** * รวบรวมพิกัดข้อมูลทั้งหมดเพื่อส่งออกเป็นสารบัญดิจิทัลมาตรฐานสากล
   * ดันหน้าเชิงพาณิชย์ (Templates/Services) ขึ้นก่อนเพื่อผลทางธุรกิจ 
   */
  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...templateRoutes,
    ...caseStudyRoutes,
    ...blogRoutes,
  ]
}
