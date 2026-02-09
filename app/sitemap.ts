/**
 * [SEO INFRASTRUCTURE]: DYNAMIC_SITEMAP_ENGINE v17.1.0 (STABILIZED)
 * [STRATEGY]: Tiered Authority Mapping | Parallel Node Discovery | SSR Optimized
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants/site-config";
import { AREA_NODES } from "@/constants/area-nodes";
import { MASTER_REGISTRY } from "@/constants/master-registry";
import { getAllPosts, getAllCaseStudies } from "@/lib/cms";

/**
 * @function sitemap
 * @description หน่วยประมวลผลสารบัญเว็บไซต์แบบ Dynamic 
 * เพื่อเป็น GPS นำทางให้ Googlebot เข้าถึงทุก Local Nodes และ Authority Content ได้อย่างรวดเร็ว
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.siteUrl.endsWith("/")
    ? SITE_CONFIG.siteUrl.slice(0, -1)
    : SITE_CONFIG.siteUrl;

  /**
   * 01. THE POWER NODE: หน้าแรก (Home)
   * [MANDATE]: ศูนย์กลางอำนาจของเว็บไซต์ กำหนด Priority สูงสุดเสมอ
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
   * 03. STRATEGIC NODES: บริการและพื้นที่ยุทธศาสตร์ (Money Pages)
   * [STRATEGY]: กำหนดค่า 0.9 เพื่อให้ Search Engine ให้ความสำคัญรองจากหน้าแรก
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
   * [OPTIMIZATION]: ใช้ Promise.all เพื่อลด I/O Wait Time ในขั้นตอนการสร้าง Static Page
   */
  const [blogs, cases] = await Promise.all([
    getAllPosts().catch(() => []),
    getAllCaseStudies().catch(() => []),
  ]);

  const blogNodes = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date || new Date()),
    changeFrequency: "monthly" as const,
    priority: 0.7, // ปรับเพิ่มขึ้นเล็กน้อยเพื่อดันอันดับ Knowledge Hub
  }));

  const caseNodes = cases.map((item) => ({
    url: `${baseUrl}/case-studies/${item.slug}`,
    lastModified: new Date(item.date || new Date()),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  /**
   * 05. COMPLIANCE_NODES: หน้ากฎหมายและนโยบาย
   * [MANDATE]: กำหนดค่าต่ำสุดเพื่อประหยัด Crawl Budget ให้ไปเน้นหน้าที่ทำเงินแทน
   */
  const legalNodes = ["/privacy", "/terms"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.1,
  }));

  // รวบรวมและส่งออกเป็น Flat Array ตามมาตรฐาน Next.js Sitemap Route
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
