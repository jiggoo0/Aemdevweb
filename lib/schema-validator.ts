/**
 * [SEO TOOL]: SCHEMA_INTEGRITY_VALIDATOR v18.0.8 (ESLINT_SAFE)
 * [STRATEGY]: Strict Mapping | EEAT Compliance | Zero-Any Logic
 */

// --- [STRICT TYPES FOR VALIDATION] ---
interface BreadcrumbTarget {
  "@id": string;
  name?: string;
}

interface ImageTarget {
  url: string;
}

interface SchemaNode {
  "@type": string;
  "@id"?: string;
  url?: string;
  name?: string;
  image?: string | string[] | ImageTarget;
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

interface BreadcrumbItem {
  "@type": "ListItem";
  position: number;
  item?: string | BreadcrumbTarget;
}

export interface ValidationReport {
  readonly isValid: boolean;
  readonly errors: readonly string[];
  readonly warnings: readonly string[];
}

export function validateSchemaIntegrity(graph: unknown): ValidationReport {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (typeof graph !== "object" || graph === null) {
    return { isValid: false, errors: ["[CRITICAL]: Invalid Object"], warnings: [] };
  }

  const schemaData = graph as Partial<SchemaGraph>;

  if (schemaData["@context"] !== "https://schema.org") {
    errors.push(`[CONTEXT_ERROR]: Missing https context`);
  }

  const graphNodes = Array.isArray(schemaData["@graph"]) ? schemaData["@graph"] : [];
  if (graphNodes.length === 0) {
    errors.push("[STRUCTURE_ERROR]: Empty Graph");
    return { isValid: false, errors, warnings };
  }

  const checkAbsoluteUrl = (url: unknown, path: string) => {
    if (typeof url === "string" && !url.startsWith("http")) {
      errors.push(`[URL_ERROR]: "${path}" must be Absolute (Current: ${url})`);
    }
  };

  // IDENTITY CHECK
  const identityNode = graphNodes.find((n) =>
    ["ProfessionalService", "Organization", "LocalBusiness", "WebSite"].includes(n["@type"]),
  );
  if (!identityNode) errors.push("[EEAT_ERROR]: Missing Identity Node");

  graphNodes.forEach((node, idx) => {
    const type = node["@type"];
    const identifier = node.name || node["@id"] || `@graph[${idx}]`;

    // LocalBusiness Hardening
    if (type === "LocalBusiness" || type === "ProfessionalService") {
      if (!node.address) errors.push(`[SEO_ERROR]: ${identifier} missing address`);
      checkAbsoluteUrl(node.url, `${identifier}.url`);
    }

    // [FIXED]: Breadcrumb Integrity - No Any
    if (type === "BreadcrumbList") {
      const items = Array.isArray(node.itemListElement) ? node.itemListElement : [];
      items.forEach((item: unknown, i: number) => {
        if (item && typeof item === "object" && "item" in item) {
          const listItem = item as BreadcrumbItem;
          // [SAFE_CAST]: ไม่ใช้ any แต่ใช้ Interface ที่นิยามไว้
          const targetUrl =
            typeof listItem.item === "string"
              ? listItem.item
              : (listItem.item as BreadcrumbTarget)?.["@id"];
          if (targetUrl) checkAbsoluteUrl(targetUrl, `Breadcrumb[${i}].item`);
        }
      });
    }

    // [FIXED]: Image Validation - No Any
    if (node.image) {
      const images = Array.isArray(node.image) ? node.image : [node.image];
      images.forEach((img, i) => {
        // [SAFE_CAST]: ตรวจสอบว่าเป็น String หรือ ImageTarget Object
        const imgUrl = typeof img === "string" ? img : (img as ImageTarget)?.url;
        if (imgUrl) checkAbsoluteUrl(imgUrl, `${identifier}.image[${i}]`);
      });
    }
  });

  return {
    isValid: errors.length === 0,
    errors: Object.freeze(errors),
    warnings: Object.freeze(warnings),
  };
}
