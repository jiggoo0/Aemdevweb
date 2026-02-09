/**
 * [SEO INFRASTRUCTURE]: DYNAMIC_SITEMAP_ENGINE v17.2.7 (STABILIZED)
 * [STRATEGY]: Tiered Authority Mapping | Parallel Node Discovery | Crawl Budget Control
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { MetadataRoute } from "next";

// --- Infrastructure & Registries ---
import { SITE_CONFIG } from "@/constants/site-config"; //
import { AREA_NODES } from "@/constants/area-nodes"; //
import { MASTER_REGISTRY } from "@/constants/master-registry"; //
import { getAllPosts, getAllCaseStudies } from "@/lib/cms";

/**
 * @function sitemap
 * @description หน่วยประมวลผลสารบัญเว็บไซต์แบบ Dynamic 
 * ทำหน้าที่เป็นเข็มทิศทางเทคนิคเพื่อให้ Googlebot เข้าถึงเนื้อหาทำเงิน (Money Pages) ได้อย่างแม่นยำ
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.siteUrl.endsWith("/")
    ? SITE_CONFIG.siteUrl.slice(0, -1)
    : SITE_CONFIG.siteUrl;

  // [DATE_ANCHOR]: ใช้วันที่ตรวจสอบระบบล่าสุด (Last Audit) เป็นฐานข้อมูลความสดใหม่
  const lastAudit = new Date("2026-02-09T07:28:27Z");

  /**
   * 01. THE POWER NODE: หน้าแรก (Home)
   * [MANDATE]: ศูนย์กลางอำนาจของเว็บไซต์ กำหนด Priority สูงสุดเสมอ
   */
  const homeNode: MetadataRoute.Sitemap[0] = {
    url: baseUrl,
    lastModified: lastAudit,
    changeFrequency: "daily",
    priority: 1.0,
  };

  /**
   * 02. CORE_NAVIGATION: หน้าหลักรากฐานระบบ
   */
  const coreRoutes = ["/services", "/areas", "/blog", "/case-studies", "/about"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastAudit,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  /**
   * 03. STRATEGIC MONEY PAGES: บริการและพื้นที่ยุทธศาสตร์
   * [STRATEGY]: กำหนดค่า 0.9 เพื่อดึงดูดความสนใจของ Search Engine เป็นลำดับต้น
   */
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
    priority: 0.9,
  }));

  /**
   * 04. AUTHORITY_CONTENT: ข้อมูลเชิงลึกและเคสความสำเร็จ
   * [ORCHESTRATION]: ใช้ Parallel Execution เพื่อเร่งความเร็วขั้นตอนการสร้าง Static Page
   */
  const [blogs, cases] = await Promise.all([
    getAllPosts().catch(() => []),
    getAllCaseStudies().catch(() => []),
  ]);

  const blogNodes = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date || lastAudit),
    changeFrequency: "monthly" as const,
    priority: 0.7, 
  }));

  const caseNodes = cases.map((item) => ({
    url: `${baseUrl}/case-studies/${item.slug}`,
    lastModified: new Date(item.date || lastAudit),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  /**
   * 05. COMPLIANCE_NODES: หน้ากฎหมายและนโยบาย
   * [MANDATE]: กำหนดค่าต่ำสุดเพื่อประหยัด Crawl Budget ให้กับส่วนเนื้อหาหลัก
   */
  const legalNodes = ["/privacy", "/terms"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastAudit,
    changeFrequency: "yearly" as const,
    priority: 0.1,
  }));

  // รวบรวมและส่งออกเป็น Flat Array ตามมาตรฐาน Next.js 16
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
