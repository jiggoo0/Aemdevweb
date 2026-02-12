/**
 * [SEO MODULE]: PROGRAMMATIC_SITEMAP_GENERATOR v17.9.9 (STABILIZED)
 * [STRATEGY]: Dynamic Node Mapping | Crawl Budget Optimization | P-SEO Integration
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { MetadataRoute } from "next";
import { MASTER_REGISTRY } from "@/constants/master-registry";
import { AREA_NODES } from "@/constants/area-nodes";
import { SITE_CONFIG } from "@/constants/site-config";
import { getAllBlogs, getAllCaseStudies } from "@/lib/cms";

/**
 * @function sitemap
 * @description รวบรวมและส่งออก URL ทั้งหมดของระบบในรูปแบบ XML Sitemap มาตรฐาน Google
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.siteUrl;

  // 1. [STATIC_NODES]: หน้าหลักและหน้าโครงสร้างพื้นฐาน
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/areas",
    "/blog",
    "/case-studies",
    "/status",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. [SERVICE_NODES]: หน้าบริการระดับ Specialist (MASTER_REGISTRY)
  const serviceRoutes = MASTER_REGISTRY.map((service) => ({
    url: `${baseUrl}/services/${service.templateSlug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // 3. [AREA_NODES]: หน้าพื้นที่ให้บริการ (Geo-Authority Strategy)
  const areaRoutes = AREA_NODES.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 4. [CONTENT_NODES]: บทความ (Knowledge Base)
  const blogs = await getAllBlogs();
  const blogRoutes = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // 5. [CASE_NODES]: กรณีศึกษา (Authority Evidence)
  const cases = await getAllCaseStudies();
  const caseRoutes = cases.map((item) => ({
    url: `${baseUrl}/case-studies/${item.slug}`,
    lastModified: new Date(item.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // [AGGREGATION]: รวมรวมทุก Node เข้าเป็น Sitemap ก้อนเดียว
  return [...staticRoutes, ...serviceRoutes, ...areaRoutes, ...blogRoutes, ...caseRoutes];
}
