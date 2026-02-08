/**
 * [SEO INFRASTRUCTURE]: DYNAMIC_SITEMAP_ENGINE v17.0.2 (REFINED)
 * [STRATEGY]: Home-Centric Weighting | Single Source of Truth | SSR Optimized
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants/site-config";
import { AREA_NODES } from "@/constants/area-nodes";
import { MASTER_REGISTRY } from "@/constants/master-registry";
import { getAllPosts, getAllCaseStudies } from "@/lib/cms";

/**
 * @function sitemap
 * @description สร้างสารบัญเว็บไซต์แบบ Dynamic เพื่อให้ Search Engine จัดลำดับข้อมูลได้อย่างแม่นยำ
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.siteUrl.endsWith("/")
    ? SITE_CONFIG.siteUrl.slice(0, -1)
    : SITE_CONFIG.siteUrl;

  /**
   * 01. THE POWER NODE: หน้าแรก (Home)
   * [MANDATE]: กำหนดค่าสูงสุด (1.0) และความถี่การเข้าสำรวจรายวัน (Daily)
   */
  const homeNode: MetadataRoute.Sitemap[0] = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1.0,
  };

  /**
   * 02. CORE_NAVIGATION: หน้าหลักรากฐานระบบ
   */
  const coreRoutes = ["/services", "/areas", "/blog", "/case-studies", "/about"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  /**
   * 03. MONEY_PAGES: บริการและพื้นที่ยุทธศาสตร์
   * [STRATEGY]: ความสำคัญสูงเพื่อกระตุ้น Conversion และ Local SEO
   */
  const serviceNodes = MASTER_REGISTRY.map((service) => ({
    url: `${baseUrl}/services/${service.templateSlug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const areaNodes = AREA_NODES.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  /**
   * 04. AUTHORITY_CONTENT: บทความและเคสความสำเร็จ
   * ดึงข้อมูลแบบ Asynchronous พร้อมกันเพื่อประสิทธิภาพสูงสุด
   */
  const [blogs, cases] = await Promise.all([
    getAllPosts().catch(() => []),
    getAllCaseStudies().catch(() => []),
  ]);

  const blogNodes = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date || new Date()),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const caseNodes = cases.map((item) => ({
    url: `${baseUrl}/case-studies/${item.slug}`,
    lastModified: new Date(item.date || new Date()),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  /**
   * 05. COMPLIANCE_NODES: หน้ากฎหมาย
   */
  const legalNodes = ["/privacy", "/terms"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.1,
  }));

  // รวบรวมข้อมูลทั้งหมดและส่งออกเป็น Flat Array
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
