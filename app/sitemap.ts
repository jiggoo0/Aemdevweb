/** @format */

import { MetadataRoute } from "next"
import { siteConfig } from "@/constants/site-config"
import { getAllPosts } from "@/lib/blog"
import { servicesData } from "@/constants/services-data"
import { getAllCaseStudies } from "@/lib/case-studies"
import { getAllTemplates } from "@/lib/template"
import { BlogPost, CaseStudyItem } from "@/types"

/**
 * [Dynamic Sitemap System]
 * ระบบวางแผนผังเว็บไซต์อัตโนมัติ เพื่อให้ระบบค้นหาเข้าถึงพิกัดข้อมูลได้กริบที่สุด
 * วางระบบโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const rawBaseUrl = siteConfig.project.url
  const baseUrl = rawBaseUrl.endsWith("/")
    ? rawBaseUrl.slice(0, -1)
    : rawBaseUrl

  // 1. พิกัดหน้าหลักและหน้าทั่วไป (Static Routes)
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
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }))

  // 2. พิกัดหน้าบริการ (Service Pages)
  const serviceRoutes: MetadataRoute.Sitemap = (servicesData || []).map(
    (service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    })
  )

  // 3. พิกัดหน้าผลงานจริง (Case Studies)
  const caseStudies = await getAllCaseStudies()
  const caseStudyRoutes: MetadataRoute.Sitemap = (caseStudies || []).map(
    (study: CaseStudyItem) => {
      const studyDate = study.frontmatter.date
        ? new Date(study.frontmatter.date)
        : new Date()

      return {
        url: `${baseUrl}/case-studies/${study.slug}`,
        lastModified: isNaN(studyDate.getTime()) ? new Date() : studyDate,
        changeFrequency: "monthly",
        priority: 0.8,
      }
    }
  )

  // 4. พิกัดหน้าแบบระบบงานพร้อมใช้ (Templates)
  const templates = await getAllTemplates()
  const templateRoutes: MetadataRoute.Sitemap = (templates || []).map(
    (slug: string) => ({
      url: `${baseUrl}/templates/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  )

  // 5. พิกัดหน้าบทความและเทคนิค (Blog Posts)
  const posts = await getAllPosts()
  const blogRoutes: MetadataRoute.Sitemap = (posts || []).map(
    (post: BlogPost) => {
      const postDate = post.frontmatter.date
        ? new Date(post.frontmatter.date)
        : new Date()

      return {
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: isNaN(postDate.getTime()) ? new Date() : postDate,
        changeFrequency: "monthly",
        priority: 0.7,
      }
    }
  )

  // รวบรวมพิกัดลิงก์ทั้งหมด
  const allRoutes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...caseStudyRoutes,
    ...templateRoutes,
    ...blogRoutes,
  ]

  // [Safety Filter]: กรองพิกัดเพื่อให้แน่ใจว่าไม่มีลิงก์ซ้ำกันก่อนส่งให้ Google
  return allRoutes.filter(
    (route, index, self) => index === self.findIndex((r) => r.url === route.url)
  )
}
