/** @format */

import { MetadataRoute } from "next"
import { siteConfig } from "@/constants/site-config"
import { getAllPosts } from "@/lib/mdx"
import { servicesData } from "@/constants/services-data"
import { templatesData } from "@/constants/templates-data"
// ✅ Fix: นำเข้าข้อมูล Case Studies และระบุ Type ให้ชัดเจน
import { caseStudiesData } from "@/constants/case-studies/case-studies-data"

/**
 * 🗺️ Sitemap.ts: Dynamic SEO Map (AEMDEVWEB Engine v.2026)
 * ทำหน้าที่สร้าง XML Sitemap แบบอัตโนมัติเพื่อให้ Search Engine ค้นพบทุกหน้าได้ 100%
 * DNA: "ติดหน้าแรก Google" - จูนค่า Priority ตามความสำคัญทางธุรกิจ
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url

  // 1. 🟢 Static Routes: โครงสร้างหลัก (The Trust Layer)
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/case-studies",
    "/blog",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }))

  // 2. 🔵 Service Routes: บริการหลัก (The Money Maker)
  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9, 
  }))

  // 3. 🟣 Marketing & Template Routes: (The Marketplace)
  const templateRoutes = templatesData.map((tpl) => ({
    // อิงตามโครงสร้าง app/(marketing)/[template]/[slug]
    url: `${baseUrl}/${tpl.category || "sale-page"}/${tpl.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  // 4. 🟠 Case Study Routes: (The Social Proof)
  // รวมทั้ง Dynamic [slug] และ Static paths ที่ระบุใน Directory Tree
  const caseStudyRoutes = [
    ...caseStudiesData.map((study) => ({
      url: `${baseUrl}/case-studies/${study.slug}`,
      lastModified: new Date(),
      priority: 0.7,
    })),
    // ✅ เพิ่มหน้าสำคัญที่ระบุใน Directory (Hard-coded เพื่อความชัวร์)
    { url: `${baseUrl}/case-studies/unlink-th`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/case-studies/aemdevweb`, lastModified: new Date(), priority: 0.8 },
  ].map(route => ({
    ...route,
    changeFrequency: "monthly" as const,
  }))

  // 5. 🟡 Blog Routes: หน้าบทความ (The Content Engine)
  const posts = await getAllPosts()
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    // ใช้เวลาที่โพสต์จริงเพื่อความแม่นยำของ Crawler
    lastModified: new Date(post.date || new Date()),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // 🚀 Combine & Finalize
  // ลบข้อมูลที่ซ้ำกันออก (Unique URLs)
  const allRoutes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...templateRoutes,
    ...caseStudyRoutes,
    ...blogRoutes,
  ]

  // Filter เพื่อกันค่าว่างหรือ URL ผิดพลาด
  return allRoutes.filter((route, index, self) => 
    index === self.findIndex((t) => t.url === route.url)
  )
}
