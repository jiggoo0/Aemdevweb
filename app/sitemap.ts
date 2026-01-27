/** @format */

import { MetadataRoute } from "next"
import { siteConfig } from "@/constants/site-config"
import { getAllPosts } from "@/lib/blog"
import { services } from "@/constants/services-data"
import { getAllCaseStudies } from "@/lib/case-studies"
import { getAllTemplates } from "@/lib/template"
// นำเข้า Types เพื่อระบุตัวตนพิกัดข้อมูลให้ชัดเจน
import { BlogPost, CaseStudyItem } from "@/types"

/**
 * ระบบสร้างแผนผังเว็บไซต์แบบอัตโนมัติ (Dynamic Sitemap)
 * จัดการลำดับความสำคัญ (Priority) และพิกัดข้อมูลเพื่อให้ Google เก็บข้อมูลได้แม่นยำ
 * Identity: อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์)
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const rawBaseUrl = siteConfig.project.url
  const baseUrl = rawBaseUrl.endsWith("/")
    ? rawBaseUrl.slice(0, -1)
    : rawBaseUrl

  // 1. เส้นทางหน้าหลักและหน้าทั่วไป (Static Routes)
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
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }))

  // 2. เส้นทางหน้าบริการรายหมวดธุรกิจ (Service Pages)
  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }))

  // 3. เส้นทางหน้าผลงานจริง (Case Studies)
  const caseStudies = await getAllCaseStudies()
  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map(
    (study: CaseStudyItem) => {
      const studyDate = study.frontmatter.date
        ? new Date(study.frontmatter.date)
        : new Date()

      return {
        url: `${baseUrl}/case-studies/${study.slug}`,
        lastModified: isNaN(studyDate.getTime()) ? new Date() : studyDate,
        changeFrequency: "monthly",
        priority: 0.8,
      }
    }
  )

  // 4. เส้นทางหน้าคลังเทมเพลต (Templates)
  const templates = await getAllTemplates()
  const templateRoutes: MetadataRoute.Sitemap = templates.map(
    (slug: string) => ({
      url: `${baseUrl}/templates/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  )

  // 5. เส้นทางหน้าบทความความรู้ (Blog Posts)
  const posts = await getAllPosts()
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post: BlogPost) => {
    const postDate = post.frontmatter.date
      ? new Date(post.frontmatter.date)
      : new Date()

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: isNaN(postDate.getTime()) ? new Date() : postDate,
      changeFrequency: "monthly",
      priority: 0.7,
    }
  })

  // รวมพิกัดเส้นทางทั้งหมดเข้าด้วยกันเพื่อให้ระบบค้นหาเข้าถึงได้ครบถ้วน
  const allRoutes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...caseStudyRoutes,
    ...templateRoutes,
    ...blogRoutes,
  ]

  // กรอง URL ที่อาจจะซ้ำกันออก เพื่อส่งออกข้อมูลที่สะอาดที่สุดให้ Google
  return allRoutes.filter(
    (route, index, self) => index === self.findIndex((r) => r.url === route.url)
  )
}
