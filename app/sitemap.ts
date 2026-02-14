/**
 * [SYSTEM CORE]: SITEMAP_GENERATOR v17.9.99 (ULTIMATE_HARDENED)
 * [STRATEGY]: Priority-Based Indexing | Dynamic Node Aggregation | Full Coverage
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { MetadataRoute } from "next";

// --- 1. Infrastructure Data ---
import { SITE_CONFIG } from "@/constants/site-config";
import { MASTER_REGISTRY } from "@/constants/master-registry";
import { AREA_NODES } from "@/constants/area-nodes";

// --- 2. Content CMS Data ---
import { getAllPosts, getAllCaseStudies } from "@/lib/cms";

/**
 * @function sitemap
 * @description เครื่องยนต์รวบรวม URL ทั้งหมดของระบบเพื่อส่งให้ Google Indexing API
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.siteUrl;
  const currentDate = new Date();

  // [FETCH]: ดึงข้อมูลจาก CMS (Parallel Execution) พร้อม Error Handling
  const [posts, caseStudies] = await Promise.all([
    getAllPosts().catch(() => []),
    getAllCaseStudies().catch(() => []),
  ]);

  /**
   * -------------------------------------------------------
   * GROUP 1: STATIC CORE ROUTES (Infrastructure)
   * -------------------------------------------------------
   */
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  /**
   * -------------------------------------------------------
   * GROUP 2: SERVICE NODES (Money Pages)
   * -------------------------------------------------------
   */
  const serviceRoutes: MetadataRoute.Sitemap = MASTER_REGISTRY.map((service) => ({
    url: `${baseUrl}/services/${service.templateSlug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: service.priority === 0 ? 1.0 : 0.9,
  }));

  /**
   * -------------------------------------------------------
   * GROUP 3: AREA NODES (Programmatic SEO)
   * -------------------------------------------------------
   */
  const areaRoutes: MetadataRoute.Sitemap = AREA_NODES.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: Number(((area.priority || 50) / 100).toFixed(1)),
  }));

  /**
   * -------------------------------------------------------
   * GROUP 4: CONTENT NODES (Knowledge Graph)
   * -------------------------------------------------------
   * [FIXED]: เพิ่ม Fallback Logic สำหรับวันที่ (date) เพื่อแก้ปัญหา TS2769
   */
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    // [SAFETY]: ถ้า post.date ไม่มี ให้ใช้วันที่ปัจจุบันแทน
    lastModified: post.date ? new Date(post.date) : currentDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    // [SAFETY]: แก้ไขจุดที่ Error โดยการเช็คค่าก่อนส่งเข้า Constructor
    lastModified: study.date ? new Date(study.date) : currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  /**
   * [AGGREGATION]: รวมทุกเส้นทางเข้าด้วยกัน
   */
  return [...staticRoutes, ...serviceRoutes, ...areaRoutes, ...caseStudyRoutes, ...blogRoutes];
}
