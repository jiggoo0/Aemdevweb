/** @format */
import { MetadataRoute } from "next"
import { siteConfig } from "@/config/siteConfig"
// 🟢 เปลี่ยนมาดึงจาก catalogProjects ซึ่งเป็นแหล่งข้อมูลหลักของหน้า Landing
import { catalogProjects } from "@/data/catalog.projects"
import { blogData } from "@/data/blogData"

/**
 * 🛠️ Helper: ตรวจสอบวันที่ให้ปลอดภัยก่อนส่งให้ Sitemap
 */
function getSafeDate(dateStr: string | undefined | null): Date {
  if (!dateStr) return new Date()
  const parsedDate = new Date(dateStr)
  return isNaN(parsedDate.getTime()) ? new Date() : parsedDate
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // ดึง Base URL จาก SiteConfig หรือ Fallback กรณีไม่มี Config
  const baseUrl = siteConfig?.url || "https://yourdomain.com"

  // 1. 📂 หน้าหลัก (Static Routes)
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/contact",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }))

  // 2. 🚀 หน้า Landing Templates (Dynamic Routes)
  // 🟢 ใช้ข้อมูลจาก catalogProjects โดยตรง เพื่อแก้ปัญหา Path Error ของ allTemplates
  const templateRoutes: MetadataRoute.Sitemap = catalogProjects.map(
    (project) => ({
      url: `${baseUrl}/landing/${project.templateId}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })
  )

  // 3. 📝 หน้าบทความ Blog
  // 🛡️ ป้องกันกรณี blogData เป็น undefined
  const blogRoutes: MetadataRoute.Sitemap = (blogData || []).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: getSafeDate(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...templateRoutes, ...blogRoutes]
}
