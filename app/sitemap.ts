/** @format */

import { MetadataRoute } from "next"
import { siteConfig } from "@/constants/site-config"
import { getAllPosts } from "@/lib/blog"
import { services } from "@/constants/services-data"
import { getAllCaseStudies } from "@/lib/case-studies"
import { getAllTemplates } from "@/lib/template"

/**
 * แผนผังเว็บไซต์แบบพลวัต (Dynamic sitemap.ts)
 * ออกแบบมาเพื่อนำทางระบบการค้นหาไปยังพิกัดยุทธศาสตร์ของธุรกิจ
 * รองรับมาตรฐาน Next.js 16 และชุดข้อมูลแบบ Nested Frontmatter
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url

  // 1. หน้าพื้นฐานของเว็บไซต์ (Static Routes)
  // กำหนดลำดับความสำคัญสูงสุดสำหรับหน้าแรก และระดับรองสำหรับหน้าข้อมูลทั่วไป
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/services",
    "/case-studies",
    "/blog",
    "/contact",
    "/careers",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.7,
  }))

  // 2. หน้าบริการเฉพาะทาง (Service Layer)
  // กำหนดลำดับความสำคัญระดับสูงสำหรับหน้าสร้างรายได้หลัก
  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }))

  // 3. หน้าผลงานและความสำเร็จ (Case Study Layer)
  // ระบบจะกวาดหาข้อมูลจากพิกัดผลงานโดยอัตโนมัติ
  const caseStudies = await getAllCaseStudies()
  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: study.frontmatter.date
      ? new Date(study.frontmatter.date)
      : new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  // 4. หน้าเทมเพลตในระบบงาน Marketplace
  // ตรวจสอบพิกัด URL ให้สอดคล้องกับโครงสร้างระบบการจัดหมวดหมู่
  const templates = await getAllTemplates()
  const templateRoutes: MetadataRoute.Sitemap = templates.map((tpl) => ({
    url: `${baseUrl}/templates/${tpl.category.toLowerCase()}/${tpl.slug.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  // 5. หน้าบทความคลังความรู้ (Knowledge Hub)
  // แก้ไขพิกัดการดึงวันที่ให้ตรงตามโครงสร้างระบบข้อมูลใหม่
  const posts = await getAllPosts()
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.frontmatter.date 
      ? new Date(post.frontmatter.date) 
      : new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  // รวบรวมพิกัดเส้นทางทั้งหมดเข้าด้วยกัน
  const allRoutes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...caseStudyRoutes,
    ...templateRoutes,
    ...blogRoutes,
  ]

  // ตรวจสอบความซ้ำซ้อนของข้อมูลเพื่อความถูกต้องของไฟล์ XML ท้ายที่สุด
  return allRoutes.filter(
    (route, index, self) => index === self.findIndex((r) => r.url === route.url)
  )
}
