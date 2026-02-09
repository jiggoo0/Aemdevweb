/**
 * [SEO INFRASTRUCTURE]: DYNAMIC_SITEMAP_ENGINE v17.5.5 (STABILIZED)
 */

import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants/site-config";
import { AREA_NODES } from "@/constants/area-nodes";
import { MASTER_REGISTRY } from "@/constants/master-registry";
import { getAllPosts, getAllCaseStudies } from "@/lib/cms";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.siteUrl.replace(/\/$/, "");
  const lastAudit = new Date("2026-02-10T04:20:00Z");

  const homeNode: MetadataRoute.Sitemap[0] = {
    url: baseUrl,
    lastModified: lastAudit,
    changeFrequency: "daily",
    priority: 1.0,
  };

  const coreRoutes = ["/services", "/areas", "/blog", "/case-studies", "/about"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastAudit,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const serviceNodes = MASTER_REGISTRY.map((service) => ({
    url: `${baseUrl}/services/${service.templateSlug}`,
    lastModified: lastAudit,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const areaNodes = AREA_NODES.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: lastAudit,
    changeFrequency: "weekly" as const,
    priority: area.priority >= 95 ? 0.9 : 0.85,
  }));

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
    priority: 0.8,
  }));

  const legalNodes = ["/privacy", "/terms"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastAudit,
    changeFrequency: "yearly" as const,
    priority: 0.1,
  }));

  return [homeNode, ...coreRoutes, ...serviceNodes, ...areaNodes, ...blogNodes, ...caseNodes, ...legalNodes];
}
