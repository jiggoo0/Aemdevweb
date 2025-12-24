/** @format */
import { MetadataRoute } from "next"
import { siteConfig } from "@/config/siteConfig"
import { catalogProjects } from "@/data/catalog.projects"
import { blogData } from "@/data/blogData"

/**
 * 🛠️ Helper: ตรวจสอบวันที่ให้ปลอดภัยก่อนส่งให้ Sitemap
 * เพื่อความถูกต้องตามมาตรฐาน XML Sitemap
 */
function getSafeDate(dateStr: string | undefined | null): Date {
  if (!dateStr) return new Date()
  const parsedDate = new Date(dateStr)
  return isNaN(parsedDate.getTime()) ? new Date() : parsedDate
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig?.url || "https://www.aemdevweb.com"

  // 1. 📂 หน้าหลัก (Static Routes)
  // 📝 UX Note: ปรับ /portfolio เป็น /catalog ให้ตรงกับโครงสร้างเมนูที่เราคุยกันไว้
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
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : 0.8,
  }))

  // 2. 🚀 หน้า Landing Templates (Dynamic Routes) - ส่วนที่ทำเงินที่สุด
  // 📝 SEO Note: หน้าเหล่านี้คือสินค้าตัวจริงของเรา ให้ Priority สูงเกือบเท่าหน้าแรก
  const templateRoutes: MetadataRoute.Sitemap = catalogProjects.map(
    (project) => ({
      url: `${baseUrl}/landing/${project.templateId}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })
  )

  // 3. 📝 หน้าบทความ Blog - ส่วนที่สร้าง Trust และ Traffic
  const blogRoutes: MetadataRoute.Sitemap = (blogData || []).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: getSafeDate(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...templateRoutes, ...blogRoutes]
}
