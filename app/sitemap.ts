/**
 * [SEO INFRASTRUCTURE]: DYNAMIC_SITEMAP_ENGINE v17.5.10 (AUTO_SYNC)
 * [STRATEGY]: Deep Crawl Logic | Priority Tiering | Error Resilience
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants/site-config";
import { AREA_NODES } from "@/constants/area-nodes";
import { MASTER_REGISTRY } from "@/constants/master-registry";
import { getAllPosts, getAllCaseStudies } from "@/lib/cms";

// [TYPE DEFINITION]: กำหนด Type ให้ชัดเจนเพื่อความปลอดภัย
type ChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.siteUrl.replace(/\/$/, "");
  const lastAudit = new Date();

  // ---------------------------------------------------------------------------
  // [1] CORE STATIC ROUTES (โครงสร้างหลัก)
  // ---------------------------------------------------------------------------
  const routes = [
    "", // Homepage
    "/services",
    "/areas",
    "/blog",
    "/case-studies",
    "/about",
    "/status", // [NEW]: เพิ่มหน้า Status
  ];

  const coreNodes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastAudit,
    changeFrequency: "daily" as ChangeFrequency,
    priority: route === "" ? 1.0 : 0.9,
  }));

  // ---------------------------------------------------------------------------
  // [2] LEGAL ROUTES (หน้านโยบาย)
  // ---------------------------------------------------------------------------
  const legalNodes: MetadataRoute.Sitemap = ["/privacy", "/terms"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastAudit,
    changeFrequency: "yearly" as ChangeFrequency,
    priority: 0.1,
  }));

  // ---------------------------------------------------------------------------
  // [3] DYNAMIC CONTENT FETCHING (ดึงข้อมูลจริงจาก MDX)
  // ---------------------------------------------------------------------------
  // ใช้ Promise.all เพื่อดึงข้อมูลพร้อมกัน (Parallel Fetching)
  const [blogs, cases] = await Promise.all([
    getAllPosts().catch((err) => {
      console.error("[SITEMAP_ERROR] Failed to fetch blog posts:", err);
      return [];
    }),
    getAllCaseStudies().catch((err) => {
      console.error("[SITEMAP_ERROR] Failed to fetch case studies:", err);
      return [];
    }),
  ]);

  // [BLOGS]: รวมหน้า seo-2026-strategy.mdx อัตโนมัติ
  const blogNodes: MetadataRoute.Sitemap = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : lastAudit,
    changeFrequency: "monthly" as ChangeFrequency,
    priority: 0.8, // Blog สำคัญมากสำหรับการดึง Traffic
  }));

  // [CASES]: หน้าผลงาน
  const caseNodes: MetadataRoute.Sitemap = cases.map((item) => ({
    url: `${baseUrl}/case-studies/${item.slug}`,
    lastModified: item.date ? new Date(item.date) : lastAudit,
    changeFrequency: "monthly" as ChangeFrequency,
    priority: 0.8,
  }));

  // ---------------------------------------------------------------------------
  // [4] STRATEGIC NODES (Service & Local SEO)
  // ---------------------------------------------------------------------------

  // [SERVICES]: กรองเฉพาะ TemplateSlug ที่ไม่ซ้ำกัน
  const uniqueServices = Array.from(new Set(MASTER_REGISTRY.map((s) => s.templateSlug)));

  const serviceNodes: MetadataRoute.Sitemap = uniqueServices.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: lastAudit,
    changeFrequency: "weekly" as ChangeFrequency,
    priority: 0.95, // สินค้าหลัก ต้องให้ความสำคัญสูงสุดรองจากหน้าแรก
  }));

  // [AREAS]: Local SEO Nodes (แยกตามความสำคัญ Tier 1 vs Tier 2)
  const areaNodes: MetadataRoute.Sitemap = AREA_NODES.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: lastAudit,
    changeFrequency: "weekly" as ChangeFrequency,
    // [STRATEGY]: ให้ Priority สูงกับเมืองเศรษฐกิจหลัก (Priority >= 95)
    priority: (area.priority ?? 0) >= 95 ? 0.9 : 0.8,
  }));

  // ---------------------------------------------------------------------------
  // [5] MERGE & DEPLOY
  // ---------------------------------------------------------------------------
  return [...coreNodes, ...serviceNodes, ...areaNodes, ...blogNodes, ...caseNodes, ...legalNodes];
}
