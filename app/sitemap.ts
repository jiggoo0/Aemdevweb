/**
 * [SEO INFRA]: SITEMAP_ORCHESTRATOR v18.0.4 (PATH_VALIDATED)
 * [STRATEGY]: Strict Type-Imports | Parallel Node Discovery | Path Integrity
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { MetadataRoute } from "next";

// --- 1. Infrastructure Data (SSOT) ---
import { MASTER_REGISTRY } from "@/constants/master-registry";
import { AREA_NODES } from "@/constants/area-nodes";
import { absoluteUrl } from "@/lib/utils";

// --- 2. Content CMS Data ---
import { getAllPosts, getAllCaseStudies } from "@/lib/cms";

/**
 * @function sitemap
 * @description เครื่องยนต์รวบรวม URL ทั้งหมดแบบ Dynamic พร้อมตรวจสอบความถูกต้องของ Path
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  // [FETCH]: ดึงข้อมูลจาก CMS แบบขนาน (Parallel Processing)
  const [posts, caseStudies] = await Promise.all([
    getAllPosts().catch(() => []),
    getAllCaseStudies().catch(() => []),
  ]);

  /**
   * -------------------------------------------------------
   * GROUP 1: STATIC CORE ROUTES (Verified via structure.txt)
   * -------------------------------------------------------
   */
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "daily", priority: 1.0 },
    { url: absoluteUrl("/services"), lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/case-studies"), lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: absoluteUrl("/blog"), lastModified, changeFrequency: "daily", priority: 0.8 },
    { url: absoluteUrl("/about"), lastModified, changeFrequency: "monthly", priority: 0.7 },
    // [REMOVED]: /contact ถูกถอดออกเนื่องจากไม่พบ app/(main)/contact ในโครงสร้างไฟล์
    { url: absoluteUrl("/privacy"), lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/terms"), lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  /**
   * -------------------------------------------------------
   * GROUP 2: SERVICE NODES (Master Blueprints)
   * -------------------------------------------------------
   */
  const serviceRoutes: MetadataRoute.Sitemap = MASTER_REGISTRY.map((service) => ({
    url: absoluteUrl(`/services/${service.templateSlug}`),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  /**
   * -------------------------------------------------------
   * GROUP 3: AREA NODES (Programmatic SEO - Local Context)
   * -------------------------------------------------------
   */
  const areaRoutes: MetadataRoute.Sitemap = AREA_NODES.map((area) => ({
    url: absoluteUrl(`/areas/${area.slug}`),
    lastModified,
    changeFrequency: "weekly",
    // คำนวณ priority จาก area.priority (0-100) ให้อยู่ในเกณฑ์ 0.0-1.0
    priority: Number(((area.priority || 50) / 100).toFixed(1)),
  }));

  /**
   * -------------------------------------------------------
   * GROUP 4: KNOWLEDGE GRAPH NODES (Blog & Case Studies)
   * -------------------------------------------------------
   */
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.date ? new Date(post.date) : lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: absoluteUrl(`/case-studies/${study.slug}`),
    lastModified: study.date ? new Date(study.date) : lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes, ...caseStudyRoutes, ...blogRoutes];
}
