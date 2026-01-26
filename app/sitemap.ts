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
  // ดึง URL พื้นฐานจากพิกัดข้อมูลกลุ่ม project
  const baseUrl = siteConfig.project.url

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
    priority: 0.9, // เน้นความสำคัญสูงเพราะเป็นหน้าปิดการขาย
  }))

  // 3. เส้นทางหน้าผลงาน (Case Studies)
  const caseStudies = await getAllCaseStudies()
  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: study.frontmatter.date
      ? new Date(study.frontmatter.date)
      : new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  // 4. เส้นทางหน้าเทมเพลต (Templates)
  // ใช้ tpl.id เพื่อให้ตรงกับพิกัดระบบจัดการข้อมูลชุดใหม่
  const templates = await getAllTemplates()
  const templateRoutes: MetadataRoute.Sitemap = templates.map((tpl) => ({
    url: `${baseUrl}/templates/${tpl.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  // 5. เส้นทางหน้าบทความ (Blog Posts)
  const posts = await getAllPosts()
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.frontmatter.date
      ? new Date(post.frontmatter.date)
      : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  // รวมพิกัดข้อมูลทั้งหมดเข้าเป็นชุดเดียว
  const allRoutes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...caseStudyRoutes,
    ...templateRoutes,
    ...blogRoutes,
  ]

  // กรองพิกัดที่ซ้ำกันออกเพื่อป้องกันปัญหาด้านการจัดลำดับข้อมูล
  return allRoutes.filter(
    (route, index, self) => index === self.findIndex((r) => r.url === route.url)
  )
}
