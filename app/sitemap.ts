/**
 * [SEO INFRA]: SITEMAP_ORCHESTRATOR v17.9.203 (LINT_FIXED)
 * [STRATEGY]: Strict Type-Imports | Parallel Node Discovery | Zero-Unused
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { MetadataRoute } from "next"; // [FIXED]: Use 'import type'

// --- 1. Infrastructure Data (SSOT) ---
import { MASTER_REGISTRY } from "@/constants/master-registry";
import { AREA_NODES } from "@/constants/area-nodes";
import { absoluteUrl } from "@/lib/utils";

// --- 2. Content CMS Data ---
import { getAllPosts, getAllCaseStudies } from "@/lib/cms";

/**
 * @function sitemap
 * @description เครื่องยนต์รวบรวม URL ทั้งหมดแบบ Dynamic พร้อมรองรับ SSG 100%
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  // [FETCH]: ดึงข้อมูลจาก CMS แบบขนานเพื่อประสิทธิภาพสูงสุด (Parallel Processing)
  const [posts, caseStudies] = await Promise.all([
    getAllPosts().catch(() => []),
    getAllCaseStudies().catch(() => []),
  ]);

  /**
   * -------------------------------------------------------
   * GROUP 1: STATIC CORE ROUTES
   * -------------------------------------------------------
   */
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "daily", priority: 1.0 },
    { url: absoluteUrl("/services"), lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/case-studies"), lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: absoluteUrl("/blog"), lastModified, changeFrequency: "daily", priority: 0.8 },
    { url: absoluteUrl("/about"), lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/contact"), lastModified, changeFrequency: "yearly", priority: 0.6 },
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
    priority: service.priority === 0 ? 1.0 : 0.9,
  }));

  /**
   * -------------------------------------------------------
   * GROUP 3: AREA NODES (Programmatic SEO - 37+ Provinces)
   * -------------------------------------------------------
   */
  const areaRoutes: MetadataRoute.Sitemap = AREA_NODES.map((area) => ({
    url: absoluteUrl(`/areas/${area.slug}`),
    lastModified,
    changeFrequency: "weekly",
    priority: Number(((area.priority || 50) / 100).toFixed(1)),
  }));

  /**
   * -------------------------------------------------------
   * GROUP 4: KNOWLEDGE GRAPH NODES (Blog & Success Stories)
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
