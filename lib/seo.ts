/** @format */
// พิกัดข้อมูล: lib/seo.ts
// หน้าที่: ศูนย์กลางจัดการพิกัดข้อมูล SEO และการสร้าง Entity Authority
// มาตรฐาน: Next.js 16 | Ultra-Deep Level 7 | Specialist Logic
// นโยบาย: No backend • No form submission • LINE-only communication
// ควบคุมระบบโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)

import { seoServicesData } from "@/constants/seo-services";
import { siteConfig } from "@/constants/site-config";
import { SeoServiceItem } from "@/types/seo";

/**
 * [DATA RETRIEVAL]: ค้นหาข้อมูลบริการ SEO ผ่านพิกัด Slug
 * หน้าที่: ดึงข้อมูล Service Item พร้อมการันตีความถูกต้องของประเภทข้อมูล (Strict Typing)
 */
export function getSeoServiceBySlug(slug: string): SeoServiceItem | undefined {
  if (!slug) return undefined;
  return seoServicesData.find((service) => service.slug === slug);
}

/**
 * [PATH GENERATOR]: ดึงรายการพิกัด Slug ทั้งหมด
 * หน้าที่: สนับสนุนระบบ generateStaticParams เพื่อทำ Static Site Generation (SSG)
 */
export function getAllSeoSlugs(): string[] {
  return seoServicesData.map((service) => service.slug);
}

/**
 * [SCHEMA GENERATOR]: ระบบสร้างพิกัดข้อมูลโครงสร้าง (Structured Data)
 * ยุทธศาสตร์: สร้างความเชื่อมโยงระหว่าง "บุคคล" และ "องค์กร" (Entity Linking)
 */

// 1. Organization Schema: ยืนยันตัวตนแบรนด์ AEMDEVWEB
export function getOrganizationSchema() {
  return {
    name: siteConfig.company.name,
    url: siteConfig.project.url,
    logo: `${siteConfig.project.url}${siteConfig.project.logo}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangkok",
      addressCountry: "TH",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: siteConfig.links.line,
    },
    sameAs: [
      siteConfig.links.facebook,
      siteConfig.links.linkedin,
      siteConfig.links.github,
      siteConfig.links.x,
    ],
  };
}

// 2. Person Schema: ยืนยันตัวตนผู้เชี่ยวชาญ (นายเอ็มซ่ามากส์)
export function getPersonSchema() {
  return {
    name: siteConfig.expert.name,
    alternateName: siteConfig.expert.realName,
    jobTitle: siteConfig.expert.role,
    url: siteConfig.links.personal,
    description: siteConfig.expert.bio,
    sameAs: [siteConfig.links.linkedin, siteConfig.links.github],
  };
}

// 3. Service Schema: แปลงข้อมูลบริการเป็น Schema.org Service
export function getServiceSchema(service: SeoServiceItem) {
  return {
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.company.name,
    },
    offers: {
      "@type": "Offer",
      price: service.pricing.price,
      priceCurrency: service.pricing.currency,
    },
  };
}

/**
 * [ASSET MAPPING]: จัดการพิกัดรูปภาพประกอบบริการ
 */
export function getSeoImagePath(slug: string): string {
  return `/images/seo/${slug}.webp`;
}

/**
 * [VALIDATOR]: ตรวจสอบสถานะพิกัดบริการในฐานข้อมูล Immutable
 */
export function isSeoServiceExist(slug: string): boolean {
  return seoServicesData.some((service) => service.slug === slug);
}

/**
 * [FILTER]: คัดกรองรายการบริการยุทธศาสตร์ (Popular Nodes)
 */
export function getPopularSeoServices(): SeoServiceItem[] {
  return seoServicesData.filter((service) => service.pricing.isPopular);
}
