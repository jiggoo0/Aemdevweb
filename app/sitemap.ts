/** @format */

import { MetadataRoute } from "next"
import { siteConfig } from "@/constants/site-config"
import { getAllPosts } from "@/lib/blog"
import { services } from "@/constants/services-data"
import { getAllCaseStudies } from "@/lib/case-studies"
import { getAllTemplates } from "@/lib/template"

/**
 * ระบบสร้างแผนผังเว็บไซต์แบบอัตโนมัติ (Dynamic Sitemap)
 * จัดการลำดับความสำคัญและพิกัดข้อมูลเพื่อให้โปรแกรมค้นหาเข้าถึงเนื้อหาได้แม่นยำ
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // จัดการพิกัด URL พื้นฐานให้สะอาด ป้องกันปัญหาเครื่องหมาย / ซ้อนกัน
  const rawBaseUrl = siteConfig.project.url
  const baseUrl = rawBaseUrl.endsWith("/") ? rawBaseUrl.slice(0, -1) : rawBaseUrl

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

  // 2. เส้นทางหน้าบริการรายธุรกิจ (Service Pages)
  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }))

  // 3. เส้นทางหน้าผลงาน (Case Studies)
  const caseStudies = await getAllCaseStudies()
  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => {
    // ตรวจสอบความถูกต้องของพิกัดวันที่เพื่อป้องกันระบบพัง
    const studyDate = study.frontmatter.date ? new Date(study.frontmatter.date) : new Date()
    const validDate = isNaN(studyDate.getTime()) ? new Date() : studyDate

    return {
      url: `${baseUrl}/case-studies/${study.slug}`,
      lastModified: validDate,
      changeFrequency: "monthly",
      priority: 0.8,
    }
  })

  // 4. เส้นทางหน้าเทมเพลต (Templates)
  const templates = await getAllTemplates()
  const templateRoutes: MetadataRoute.Sitemap = templates.map((tpl) => ({
    url: `${baseUrl}/templates/${tpl.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  // 5. เส้นทางหน้าบทความ (Blog Posts)
  const posts = await getAllPosts()
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => {
    const postDate = post.frontmatter.date ? new Date(post.frontmatter.date) : new Date()
    const validDate = isNaN(postDate.getTime()) ? new Date() : postDate

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: validDate,
      changeFrequency: "monthly",
      priority: 0.7,
    }
  })

  // รวมพิกัดข้อมูลทั้งหมดและคัดกรองตัวซ้ำ
  const allRoutes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...caseStudyRoutes,
    ...templateRoutes,
    ...blogRoutes,
  ]

  return allRoutes.filter(
    (route, index, self) => index === self.findIndex((r) => r.url === route.url)
  )
}
