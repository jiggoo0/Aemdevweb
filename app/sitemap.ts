/** @format */

import { MetadataRoute } from "next"
import { siteConfig } from "@/constants/site-config"
import { getAllPosts } from "@/lib/mdx"
import { servicesData } from "@/constants/services-data"
import { templatesData } from "@/constants/templates-data"
// ✅ Import ข้อมูล Case Studies (ตรวจสอบชื่อ Export ในไฟล์จริงอีกครั้งนะครับ)
import { caseStudiesData } from "@/constants/case-studies/case-studies-data"

/**
 * 🗺️ Sitemap.ts: แผนที่นำทางสำหรับ Google (SEO Engine)
 * สร้าง Sitemap แบบอัตโนมัติครอบคลุมทุก Route ทั้ง Static และ Dynamic
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url

  // 1. 🟢 Static Routes: หน้าหลักและหน้าสำคัญ
  // ✅ Fixed: เปลี่ยน /showcase เป็น /case-studies ให้ตรงกับ Directory Tree
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

  // 2. 🔵 Service Routes: หน้าบริการ (Priority สูง)
  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9, // สินค้า/บริการควรมี Priority รองจากหน้าแรก
  }))

  // 3. 🟣 Template Routes: หน้าร้านค้าเทมเพลต (Marketplace)
  // Mapping จาก app/(marketing)/[template]/[slug]
  const templateRoutes = templatesData.map((tpl) => ({
    url: `${baseUrl}/${tpl.category || "sale-page"}/${tpl.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  // 4. 🟠 Case Study Routes: หน้าผลงาน
  // Mapping จาก app/(main)/case-studies/[slug]
  const caseStudyRoutes = caseStudiesData.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // 5. 🟡 Blog Routes: หน้าบทความ (Dynamic MDX)
  const posts = await getAllPosts()
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // รวมทุก Route เข้าด้วยกัน
  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...templateRoutes,
    ...caseStudyRoutes,
    ...blogRoutes,
  ]
}
