/**
 * [SYSTEM CORE]: GLOBAL_TYPE_DEFINITIONS v17.0.2 (STABILIZED)
 * [MANDATE]: Zero-Any Policy | Deep Immutability | Type-Safe Routes
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { ReactNode, ComponentType } from "react";

// --- [01. UTILITY INFRASTRUCTURE] ---

/**
 * [STABILIZED]: สำหรับจัดการ Dynamic Route Params ใน Next.js 15/16
 * รองรับการทำงานแบบ Asynchronous Params ตามมาตรฐานใหม่
 */
export interface PageProps<T = Record<string, string>> {
  readonly params: Promise<T>;
  readonly searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export interface BaseComponentProps {
  readonly children?: ReactNode;
  readonly className?: string;
}

export type IconName = string;

// --- [02. NAVIGATION & SITE CONFIG] ---

export interface NavItem {
  readonly label: string;
  readonly href: string;
  readonly icon?: IconName;
  readonly description?: string;
}

export interface SiteConfig {
  readonly brandName: string;
  readonly siteUrl: string;
  readonly description: string;
  readonly hero: {
    readonly title: string;
    readonly description: string;
    readonly primaryAction: string;
    readonly secondaryAction: string;
  };
  readonly persona: {
    readonly tone: string;
    readonly communicationStyle: string;
    readonly antiConnotation: string;
  };
  // [FIXED]: ระบุเป็น readonly string[] เพื่อแก้ปัญหา Type Mismatch กับ Metadata
  readonly keywords: readonly string[];
  readonly project: {
    readonly title: string;
    readonly shortTitle: string;
    readonly version: string;
    readonly framework: string;
    readonly uiStack: string;
  };
  readonly expert: {
    readonly displayName: string;
    readonly legalName: string;
    readonly legalNameThai: string;
    readonly role: string;
    /** [ADDED]: ตำแหน่งงานสากลสำหรับ Google Knowledge Graph (EEAT Standard) */
    readonly jobTitle: string;
    readonly signature: string;
    readonly avatar: string;
    readonly email: string;
    readonly bioUrl: string;
  };
  readonly contact: {
    readonly email: string;
    readonly phone: string;
    readonly displayPhone?: string;
    /** [ADDED]: เพิ่มฟิลด์ที่อยู่แบบละเอียดเพื่อรองรับ Schema Markup (Fix TS2353) */
    readonly streetAddress: string;
    readonly address: string;
    readonly postalCode: string;
    readonly workHours: string;
  };
  readonly links: {
    readonly line: string;
    readonly lineId: string;
    readonly messenger: string;
    readonly facebook: string;
    readonly github: string;
    readonly twitter?: string;
  };
  readonly business: {
    readonly location: string;
    readonly region: string;
    readonly industry: string;
    readonly roiFocus: boolean;
    readonly established: string;
  };
  readonly verification: {
    readonly google: string;
  };
}

// --- [03. DATA REGISTRY & SERVICES] ---

export type ServiceCategory = "landing" | "business" | "ecommerce" | "personal";

export interface CatalogItem {
  readonly name: string;
  readonly description: string;
  readonly icon: IconName;
}

export interface ExpertiseItem {
  readonly title: string;
  readonly description: string;
  readonly icon: IconName;
}

export interface ServiceFeature {
  readonly title: string;
  readonly description: string;
  readonly icon: IconName;
}

export interface ServiceFaq {
  readonly question: string;
  readonly answer: string;
}

/**
 * @interface TemplateMasterData
 * [STABILIZED]: รวมทุก Property สำหรับการเรนเดอร์ในระดับ Enterprise
 */
export interface TemplateMasterData {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly image?: string;
  readonly priceValue: number;
  readonly price: string;
  readonly currency: string;
  readonly unit: string;
  readonly category: ServiceCategory;
  readonly templateSlug: string;
  readonly priority: number;
  readonly isPopular?: boolean;
  readonly isFeatured?: boolean;

  // [FIXED]: ระบุ Type ให้ชัดเจนและเป็น Readonly Array
  readonly benefits: readonly string[];
  readonly coreFeatures: readonly ServiceFeature[];
  readonly faqs: readonly ServiceFaq[];

  readonly clientTrust?: string;
  readonly items?: readonly CatalogItem[];
  readonly expertise?: readonly ExpertiseItem[];
}

// Alias สำหรับใช้ใน Component ที่อาจจะใช้ชื่อ ServiceData
export type ServiceData = TemplateMasterData;

// --- [04. CONTENT & MDX SCHEMAS] ---

/**
 * [CORE_SCHEMA]: หัวใจของการทำ Content SEO
 */
export interface BaseContent {
  readonly slug: string;
  readonly title: string;
  readonly description: string; // Meta description
  readonly excerpt: string; // Short summary for UI
  readonly date: string;
  readonly thumbnail: string;
  readonly tags: readonly string[];
  readonly author: string;
  readonly content?: string;
  readonly Content?: ComponentType;
}

export interface BlogPost extends BaseContent {
  readonly category: string;
  readonly readingTime?: string;
}

export interface CaseStudy extends BaseContent {
  readonly client: string;
  readonly industry: string;
  readonly category: string;
  readonly results: readonly string[];
  readonly technicalStack: readonly string[];
}

// --- [05. LOCAL SEO & AREA NODES] ---

export interface AreaNode {
  readonly slug: string;
  readonly province: string;
  // [FIXED]: เพิ่ม Optional Name เพื่อให้ Component เก่า (AreaCard) ใช้งานได้โดยไม่ Error
  readonly name?: string;
  readonly title: string;
  readonly description: string;
  readonly seoTitle: string;
  readonly seoDescription: string;
  readonly priority: number;
  readonly templateSlug: "corporate" | "salepage" | "local" | string;
  readonly districts: readonly string[];
  readonly keywords: readonly string[];
  readonly heroImage: string;
  readonly longDescription?: string;
}
