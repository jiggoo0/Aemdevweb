/** @format */

import { MetadataRoute } from "next"
import { siteConfig } from "@/constants/site-config"
import { getAllPosts } from "@/lib/blog"
import { services } from "@/constants/services-data"
import { getAllCaseStudies } from "@/lib/case-studies"
import { getAllTemplates } from "@/lib/template"

/**
 * 🗺️ Dynamic sitemap.ts — 2026 Specialist Edition
 * ออกแบบมาเพื่อนำทาง Search Engine ไปยังจุดยุทธศาสตร์ของธุรกิจ
 *
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url //

  // 1. หน้าพื้นฐานของเว็บไซต์ (Static Routes)
  // Priority 1.0 สำหรับหน้าแรก และ 0.7 สำหรับหน้าข้อมูลทั่วไป
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

  // 2. หน้าบริการรายชิ้น (Revenue Layer)
  // Priority 0.9: หน้าสร้างรายได้หลักจากบริการต่างๆ
  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }))

  // 3. หน้าผลงานความสำเร็จ (Social Proof Layer)
  // [SEO]: ระบบจะกวาดหาชื่อไฟล์ใหม่ที่คุณเปลี่ยน (e.g., sme-web-performance) โดยอัตโนมัติ
  const caseStudies = await getAllCaseStudies()
  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: study.frontmatter.date
      ? new Date(study.frontmatter.date)
      : new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  // 4. หน้าเทมเพลตใน Marketplace (Market Conversion Layer)
  // ✅ [FIXED]: Mapping URL ให้ตรงกับโครงสร้าง /templates/[category]/[slug]
  const templates = await getAllTemplates()
  const templateRoutes: MetadataRoute.Sitemap = templates.map((tpl) => ({
    url: `${baseUrl}/templates/${tpl.category.toLowerCase()}/${tpl.slug.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  // 5. หน้าบทความคลังความรู้ (Knowledge Hub)
  // Priority 0.6: เน้นดึง Traffic จากการค้นหาข้อมูลความรู้
  const posts = await getAllPosts()
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  // 🚀 รวบรวมทุกเส้นทางเข้าด้วยกัน
  const allRoutes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...caseStudyRoutes,
    ...templateRoutes,
    ...blogRoutes,
  ]

  // คัดกรอง URL ที่อาจซ้ำซ้อนเพื่อความคลีนของไฟล์ XML
  return allRoutes.filter(
    (route, index, self) => index === self.findIndex((r) => r.url === route.url)
  )
}
