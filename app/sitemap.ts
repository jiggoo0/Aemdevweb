/** @format */
import type { MetadataRoute } from "next"
import { siteConfig } from "@/config/siteConfig"
import { catalogProjects } from "@/data/catalog.projects"
import { blogData } from "@/data/blog/allposts"
import { BlogPost } from "@/types/blog" // ✅ แก้ไข: ดึง Type จาก source ที่ถูกต้อง

/**
 * 🛠️ Helper: จัดการวันที่ให้ปลอดภัยสำหรับ Sitemap
 */
function parseSafeDate(dateStr: string): Date {
  const date = new Date(dateStr)
  return isNaN(date.getTime()) ? new Date() : date
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig?.url || "https://www.aemdevweb.com"

  // 1. 🏠 Static Pages: หน้าหลักของเว็บไซต์
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/services",
    "/catalog",
    "/contact",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }))

  // 2. 📂 Dynamic Catalog Pages: หน้าโครงการ/เทมเพลต
  const templateRoutes: MetadataRoute.Sitemap = (catalogProjects || []).map(
    (project) => ({
      url: `${baseUrl}/catalog/${project.templateId}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    })
  )

  // 3. 📝 Dynamic Blog Pages: หน้าบทความ
  const blogRoutes: MetadataRoute.Sitemap = (
    (blogData as BlogPost[]) || []
  ).map((post) => ({
    url: `${baseUrl}/blog/${post.slug || post.id}`,
    lastModified: parseSafeDate(post.date), // ✅ ใช้ Helper ที่สร้างใหม่แทน getSafeDate ที่หายไป
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticRoutes, ...templateRoutes, ...blogRoutes]
}
