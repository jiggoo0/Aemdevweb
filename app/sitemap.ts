/** @format */
import type { MetadataRoute } from "next"
import { siteConfig } from "@/config/siteConfig"
import { catalogProjects } from "@/data/catalog.projects"
import { blogData } from "@/data/blog/allposts"
import { BlogPost } from "@/types/blog"

/**
 * 🛠️ Helper: จัดการวันที่ให้ปลอดภัยสำหรับ Sitemap (ISO String Format)
 */
function parseSafeDate(dateStr?: string): string {
  if (!dateStr) return new Date().toISOString()
  const date = new Date(dateStr)
  return isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString()
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig?.url || "https://www.aemdevweb.com"

  // 1. 🏠 Static Pages (High Priority)
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/catalog",
    "/contact",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "daily" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }))

  // 2. 📂 Dynamic Catalog Pages (Template Portfolio)
  // แก้ไข: ใช้ templateId สำหรับ Dynamic Routes [template_id]
  const templateRoutes: MetadataRoute.Sitemap = (catalogProjects || []).map(
    (project) => ({
      url: `${baseUrl}/catalog/${project.templateId}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.9,
    })
  )

  // 3. 📝 Dynamic Blog Pages (Knowledge Base)
  const blogRoutes: MetadataRoute.Sitemap = (
    (blogData as BlogPost[]) || []
  ).map((post) => ({
    url: `${baseUrl}/blog/${post.slug || post.id}`,
    lastModified: parseSafeDate(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [...staticRoutes, ...templateRoutes, ...blogRoutes]
}
