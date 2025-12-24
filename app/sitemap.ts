/** @format */
import { MetadataRoute } from "next"
import { siteConfig } from "@/config/siteConfig"
import { catalogProjects } from "@/data/catalog.projects"
// ✅ แก้ไขจาก @/data/blogData เป็น Path ใหม่ที่รวมไฟล์แล้ว
import { blogData } from "@/data/blog/allposts"
import { BlogPost } from "@/types/blog"

/**
 * 🛠️ Helper: ตรวจสอบวันที่ให้ปลอดภัยก่อนส่งให้ Sitemap
 */
function getSafeDate(dateStr: string | undefined | null): Date {
  if (!dateStr) return new Date()
  const parsedDate = new Date(dateStr)
  return isNaN(parsedDate.getTime()) ? new Date() : parsedDate
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig?.url || "https://www.aemdevweb.com"

  // 1. 📂 หน้าหลัก (Static Routes)
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

  // 2. 🚀 หน้า Landing Templates (Dynamic Routes)
  // 📝 แก้ไข: ปรับ Path ให้ตรงกับที่เราคุยกัน (ถ้าคุณใช้ /[template_id] โดยไม่มีคำว่า landing)
  // แต่ถ้าคุณยืนยันจะใช้ /landing/ ก็นำหน้าได้ครับ
  const templateRoutes: MetadataRoute.Sitemap = catalogProjects.map(
    (project) => ({
      url: `${baseUrl}/${project.templateId}`, // หรือ `/landing/${project.templateId}` ตามโครงสร้างโฟลเดอร์จริง
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })
  )

  // 3. 📝 หน้าบทความ Blog
  // ✅ ระบุ Type ให้ (post: BlogPost) เพื่อแก้ปัญหา Parameter implicitly has an 'any' type
  const blogRoutes: MetadataRoute.Sitemap = (blogData || []).map(
    (post: BlogPost) => ({
      url: `${baseUrl}/blog/${post.slug || post.id}`,
      lastModified: getSafeDate(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })
  )

  return [...staticRoutes, ...templateRoutes, ...blogRoutes]
}
