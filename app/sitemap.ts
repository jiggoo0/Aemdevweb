/**
 * [SEO INFRASTRUCTURE]: DYNAMIC_SITEMAP_ENGINE v17.5.3 (STABILIZED)
 * [STRATEGY]: Tiered Authority Mapping | Parallel Node Discovery
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { MetadataRoute } from "next"; // [FIXED]: Use 'import type' to comply with lint rules
import { SITE_CONFIG } from "@/constants/site-config";
import { AREA_NODES } from "@/constants/area-nodes";
import { MASTER_REGISTRY } from "@/constants/master-registry";
import { getAllPosts, getAllCaseStudies } from "@/lib/cms";

/**
 * @function sitemap
 * @description หน่วยประมวลผล XML Sitemap แบบไดนามิก เพื่อจัดการ Crawl Budget
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // [A] URL PREPARATION: จัดการโครงสร้าง Base URL ให้สะอาดที่สุด
  const baseUrl = SITE_CONFIG.siteUrl.replace(/\/$/, "");

  // [B] SYSTEM_AUDIT_TIMESTAMP: อ้างอิงตาม Audit ล่าสุด 2026-02-10
  const lastAudit = new Date("2026-02-10T04:20:00Z");

  // --- [01] THE POWER NODE (Home) ---
  const homeNode: MetadataRoute.Sitemap[0] = {
    url: baseUrl,
    lastModified: lastAudit,
    changeFrequency: "daily",
    priority: 1.0,
  };

  // --- [02] CORE NAVIGATION ---
  const coreRoutes = ["/services", "/areas", "/blog", "/case-studies", "/about"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastAudit,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // --- [03] STRATEGIC MONEY PAGES (Services & Areas) ---
  const serviceNodes = MASTER_REGISTRY.map((service) => ({
    url: `${baseUrl}/services/${service.templateSlug}`,
    lastModified: lastAudit,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // [TIERED_LOCATIONS]: เน้น Hub สำคัญที่มี Priority สูง
  const areaNodes = AREA_NODES.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: lastAudit,
    changeFrequency: "weekly" as const,
    priority: area.priority >= 95 ? 0.9 : 0.85,
  }));

  // --- [04] AUTHORITY CONTENT (Blog/Case Studies) ---
  const [blogs, cases] = await Promise.all([
    getAllPosts().catch(() => []),
    getAllCaseStudies().catch(() => []),
  ]);

  const blogNodes = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : lastAudit,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const caseNodes = cases.map((item) => ({
    url: `${baseUrl}/case-studies/${item.slug}`,
    lastModified: item.date ? new Date(item.date) : lastAudit,
    changeFrequency: "monthly" as const,
    priority: 0.8, // Case Studies มีน้ำหนักสูงกว่าเพื่อโชว์ ROI Evidence
  }));

  // --- [05] COMPLIANCE NODES (Legal) ---
  const legalNodes = ["/privacy", "/terms"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastAudit,
    changeFrequency: "yearly" as const,
    priority: 0.1,
  }));

  // [IMAGE_INSTRUCTION]: 

  return [
    homeNode,
    ...coreRoutes,
    ...serviceNodes,
    ...areaNodes,
    ...blogNodes,
    ...caseNodes,
    ...legalNodes,
  ];
}
