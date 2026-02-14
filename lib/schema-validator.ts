/**
 * [SEO TOOL]: SCHEMA_INTEGRITY_VALIDATOR v17.9.42 (TYPE_STABILIZED)
 * [STRATEGY]: Pre-flight Validation | E-E-A-T Guard | P-SEO Structural Audit
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "@/constants/site-config";

// --- [TYPE DEFINITIONS] ---
interface SchemaNode {
  "@type": string;
  "@id"?: string;
  url?: string;
  name?: string;
  image?: string | string[];
  address?: unknown;
  geo?: unknown;
  telephone?: string;
  priceRange?: string;
  itemListElement?: unknown[];
  [key: string]: unknown;
}

interface SchemaGraph {
  "@context": string;
  "@graph": SchemaNode[];
}

interface ValidationResult {
  readonly isValid: boolean;
  readonly errors: readonly string[];
  readonly warnings: readonly string[];
}

/**
 * @function validateSchemaIntegrity
 * @description ตรวจสอบโครงสร้าง JSON-LD เพื่อป้องกันปัญหาการโดนลดอันดับจากข้อมูลที่ไม่สมบูรณ์
 */
export function validateSchemaIntegrity(graph: unknown): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // [01] TYPE GUARD: ป้องกัน Input ผิดประเภท
  if (typeof graph !== "object" || graph === null) {
    return {
      isValid: false,
      errors: ["[CRITICAL]: Schema input is not a valid object"],
      warnings: [],
    };
  }

  const schemaData = graph as Partial<SchemaGraph>;

  // [02] CONTEXT CHECK: ต้องเป็น https เท่านั้น
  if (schemaData["@context"] !== "https://schema.org") {
    errors.push(
      `[CONTEXT_ERROR]: '@context' must be 'https://schema.org' (Found: ${schemaData["@context"]})`,
    );
  }

  const graphNodes = Array.isArray(schemaData["@graph"]) ? schemaData["@graph"] : [];
  if (graphNodes.length === 0) {
    errors.push("[STRUCTURE_ERROR]: Schema Graph is empty or missing '@graph'");
    return { isValid: false, errors, warnings };
  }

  /**
   * [INTERNAL HELPER]: ตรวจสอบ Absolute URL (บังคับสำหรับ Google Indexing)
   */
  const checkAbsoluteUrl = (url: unknown, path: string) => {
    if (typeof url === "string" && !url.startsWith("http")) {
      errors.push(`[URL_ERROR]: "${path}" must be an Absolute URL (Current: ${url})`);
    }
  };

  // [03] IDENTITY AUDIT: ตรวจสอบโหนด Organization และ Person
  const identityNode = graphNodes.find((n) =>
    ["ProfessionalService", "Organization", "LocalBusiness"].includes(n["@type"]),
  );
  const expertNode = graphNodes.find((n) => n["@type"] === "Person");

  if (!identityNode) errors.push("[EEAT_ERROR]: Missing Organization/ProfessionalService node");
  if (!expertNode)
    warnings.push("[EEAT_WARNING]: Missing 'Person' node (Affects Author Authority)");

  // [04] P-SEO AUDIT: เจาะลึกโหนด LocalBusiness และ Breadcrumbs
  graphNodes.forEach((node, idx) => {
    const type = node["@type"];
    const identifier = node.name || node.slug || `@graph[${idx}]`;

    // A. LocalBusiness Hardening (หัวใจของ P-SEO)
    if (type === "LocalBusiness" || type === "ProfessionalService") {
      if (!node.address) errors.push(`[SEO_ERROR]: ${identifier} requires 'address'`);
      if (!node.telephone)
        warnings.push(`[SEO_WARNING]: ${identifier} should have 'telephone' for Local Pack`);
      if (!node.geo)
        warnings.push(
          `[SEO_WARNING]: ${identifier} missing 'geo' coordinates (Affects Google Maps)`,
        );
      if (!node.priceRange) warnings.push(`[SEO_WARNING]: ${identifier} missing 'priceRange'`);

      checkAbsoluteUrl(node.url, `${identifier}.url`);
      checkAbsoluteUrl(node["@id"], `${identifier}.@id`);
    }

    // B. Breadcrumb Integrity (กันปัญหา Breadcrumbs ใน Search Console)
    if (type === "BreadcrumbList") {
      const items = Array.isArray(node.itemListElement) ? node.itemListElement : [];
      if (items.length === 0) errors.push(`[SEO_ERROR]: BreadcrumbList "${identifier}" is empty`);

      // [FIXED]: เปลี่ยนจาก item: any เป็น Explicit Type เพื่อแก้ ESLint / TypeScript Error
      items.forEach((item: unknown, i: number) => {
        // ทำการ Type Check อย่างปลอดภัยก่อนเข้าถึง Property
        if (item && typeof item === "object" && "item" in item) {
          const breadcrumbItem = (item as { item: unknown }).item;
          if (typeof breadcrumbItem === "string") {
            checkAbsoluteUrl(breadcrumbItem, `Breadcrumb[${i}].item`);
          }
        }
      });
    }

    // C. Image Validation
    if (node.image) {
      const images = Array.isArray(node.image) ? node.image : [node.image];
      images.forEach((img, i) => checkAbsoluteUrl(img, `${identifier}.image[${i}]`));
    }
  });

  // [05] GLOBAL CONFIG SYNC
  if (SITE_CONFIG.siteUrl && !SITE_CONFIG.siteUrl.startsWith("https")) {
    errors.push("[CONFIG_ERROR]: SITE_CONFIG.siteUrl must use HTTPS");
  }

  return {
    isValid: errors.length === 0,
    errors: Object.freeze(errors),
    warnings: Object.freeze(warnings),
  };
}
