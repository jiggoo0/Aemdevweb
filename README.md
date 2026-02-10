---
domain: aemdevweb.com
status: strictly-enforced
last_audit: 2026-02-10 23:14:38
---

# SYSTEM ARCHITECTURE & DATA SCHEMAS

> [ERROR] MISSION CRITICAL: 00-SYSTEM-MANDATE.md MISSING

---

> [WARNING] SYSTEM PROMPT EXTENSION MISSING

---

## TECHNICAL DATA SCHEMAS (TYPES)
### MODULE: index.d.ts
```typescript
/**
 * [SYSTEM CORE]: GLOBAL_TYPE_DEFINITIONS v17.5.5 (AUTHENTICATED)
 * [MANDATE]: Zero-Any Policy | Deep Immutability | Async Route Params
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { ReactNode, ComponentType, CSSProperties } from "react";

// =========================================
// [01] UTILITY & NEXT.JS 15 ADAPTERS
// =========================================

export interface PageProps<T = Record<string, string>> {
  readonly params: Promise<T>;
  readonly searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export interface LayoutProps<T = Record<string, string>> {
  readonly children: ReactNode;
  readonly params: Promise<T>;
}

export interface BaseComponentProps {
  readonly children?: ReactNode;
  readonly className?: string;
  readonly style?: CSSProperties;
}

export interface SkeletonCardProps extends BaseComponentProps {
  readonly aspectRatio?: "portrait" | "video" | "square";
}

export type IconName = string;

// =========================================
// [02] SITE CONFIGURATION & IDENTITY
// =========================================

export interface NavItem {
  readonly label: string;
  readonly href: string;
  readonly icon?: IconName;
  readonly description?: string;
  readonly active?: boolean;
  readonly children?: readonly NavItem[];
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
    readonly jobTitle: string;
    readonly signature: string;
    readonly avatar: string;
    readonly email: string;
    readonly bioUrl: string;
    readonly bio?: string;
    readonly googleMerchantId?: string;
  };
  readonly contact: {
    readonly email: string;
    readonly phone: string;
    readonly displayPhone?: string;
    readonly streetAddress: string;
    readonly address: string;
    readonly postalCode: string;
    readonly workHours: string;
    readonly mapUrl?: string;
  };
  readonly links: {
    readonly line: string;
    readonly lineId: string;
    readonly messenger: string;
    readonly facebook: string;
    readonly github: string;
    readonly twitter?: string;
    readonly youtube?: string;
    readonly googleMaps?: string;
    readonly googleReview?: string;
  };
  readonly business: {
    readonly location: string;
    readonly region: string;
    readonly industry: string;
    readonly roiFocus: boolean;
    readonly established: string;
    // [UPDATE]: เพิ่ม field status เพื่อรองรับการแสดงผลใน LayoutEngine
    readonly status?: string;
    readonly ids?: {
      readonly businessProfileId: string;
      readonly storeCode: string;
    };
  };
  readonly verification: {
    readonly google: string;
  };
}

// =========================================
// [03] DATA REGISTRY & SERVICES
// =========================================

export type ServiceCategory = "landing" | "business" | "ecommerce" | "personal";

export interface CatalogItem {
  readonly name: string;
  readonly description: string;
  readonly icon: IconName;
  readonly title?: string;
  readonly price?: string;
  readonly image?: string;
}

export interface ExpertiseItem {
  readonly title: string;
  readonly description: string;
  readonly icon: IconName;
  readonly level?: number;
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

export interface ThemeConfig {
  readonly primary: string;
  readonly secondary?: string;
  readonly background?: string;
  readonly accent?: string;
  readonly gradient?: string;
}

export interface TemplateMasterData {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly image?: string;
  readonly templateSlug: string;
  readonly category: ServiceCategory;
  readonly priceValue: number;
  readonly price: string;
  readonly currency: string;
  readonly unit: string;
  readonly priority: number;
  readonly isPopular?: boolean;
  readonly isFeatured?: boolean;
  readonly theme?: ThemeConfig;
  readonly benefits: readonly string[];
  readonly coreFeatures: readonly ServiceFeature[];
  readonly faqs: readonly ServiceFaq[];
  readonly keywords: readonly string[];
  readonly clientTrust?: string;
  readonly items?: readonly CatalogItem[];
  readonly expertise?: readonly ExpertiseItem[];
}

export type ServiceData = TemplateMasterData;

// =========================================
// [04] CONTENT MODELS (MDX)
// =========================================

export interface SEOMetadata {
  readonly title: string;
  readonly description: string;
  readonly ogImage?: string;
  readonly noIndex?: boolean;
  readonly keywords?: readonly string[];
}

export interface BaseContent extends SEOMetadata {
  readonly slug: string;
  readonly excerpt: string;
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
  readonly relatedPosts?: readonly string[];
}

export interface CaseStudy extends BaseContent {
  readonly client: string;
  readonly industry: string;
  readonly category: string;
  readonly results: readonly string[];
  readonly technicalStack: readonly string[];
  readonly beforeImage?: string;
  readonly afterImage?: string;
}

// =========================================
// [05] GEO & AREA NODES
// =========================================

export interface AreaNode {
  readonly slug: string;
  readonly province: string;
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
  readonly coordinates?: {
    readonly lat: number;
    readonly lng: number;
  };
}

```
### MODULE: mdx.d.ts
```typescript
declare module "*.mdx" {
  import type { ComponentType, ReactNode } from "react";

  const component: ComponentType<{ children?: ReactNode }>;
  export default component;
}

declare module "mdx/types" {
  import type { ComponentType, ReactNode } from "react";
  // Extending definition to allow strictly typed MDX components
  export type MDXComponents = Record<string, ComponentType<{ children?: ReactNode }> | string>;
}

```
### MODULE: template-props.ts
```typescript
/**
 * [SYSTEM CORE]: TEMPLATE_PROPS_ENGINE v17.5.0 (TYPE_SAFE)
 * [STRATEGY]: Decoupled UI Logic | Universal Adapter Pattern
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { ReactNode } from "react";
import type { IconName, ServiceFeature, ServiceFaq } from "./index";

// =========================================
// [01] UI ACTION SCHEMAS
// =========================================

/**
 * Standard Call to Action structure for Buttons/Links
 */
export interface TemplateAction {
  readonly label: string;
  readonly href: string;
  readonly icon?: IconName;
  readonly variant?: "default" | "outline" | "ghost" | "link" | "brand";
}

// =========================================
// [02] UNIVERSAL TEMPLATE CONTRACT
// =========================================

/**
 * [STRATEGIC]: Bridge Interface between ServiceData/AreaNode and UI
 * Designed for "Dumb Components" rendering to ensure consistency.
 */
export interface UniversalTemplateProps {
  // --- Core Identity ---
  readonly id: string;
  readonly title: ReactNode | string; // Support Rich Text Titles
  readonly description: string;
  readonly heroImage?: string;

  // --- Commercial Specs (Optional for Area pages) ---
  readonly price?: string;
  readonly priceValue?: number; // Added for Schema/Calculation
  readonly unit?: string;
  readonly currency?: string;

  // --- Data Clusters ---
  readonly benefits?: readonly string[];
  readonly features?: readonly ServiceFeature[]; // Mapped from coreFeatures
  readonly faqs?: readonly ServiceFaq[];
  readonly keywords?: readonly string[];

  // --- Strategic UI Elements ---
  readonly clientTrust?: string;
  readonly primaryAction?: TemplateAction;
  readonly secondaryAction?: TemplateAction;

  // --- Visual Metadata & Theming ---
  // [UPDATED]: Align with LayoutEngine & ThemeConfig
  readonly theme?: {
    readonly primary?: string;
    readonly secondary?: string;
    readonly background?: string; // Hex or Tailwind Class
    readonly gradient?: string; // Tailwind Gradient
  };
  readonly priority?: number;
}

// =========================================
// [03] SPECIFIC COMPONENT PROPS
// =========================================

/**
 * Base Props for all Template Components
 */
export interface BaseTemplateProps {
  readonly data: UniversalTemplateProps;
  readonly className?: string;
}

/**
 * Specialized Props for Catalog Template
 */
export interface CatalogTemplateProps extends BaseTemplateProps {
  readonly displayMode?: "grid" | "list";
  readonly showPrice?: boolean;
  readonly items?: readonly {
    name: string;
    description: string;
    image?: string;
    price?: string;
  }[];
}

/**
 * Specialized Props for Bio/Portfolio Template
 */
export interface BioTemplateProps extends BaseTemplateProps {
  readonly socialLinks?: readonly {
    readonly platform: string;
    readonly url: string;
    readonly icon: IconName;
  }[];
}

/**
 * [ADAPTER TYPE]: Data Source Validation Helper
 */
export type TemplateDataSource = "service" | "area" | "custom";

```

---

## CONSTANTS REGISTRY
### CONFIG: area-nodes.ts
```typescript
/**
 * [SYSTEM CORE]: AREA_NODES_DATA v17.6.1 (STRATEGIC_LOCATIONS)
 * [AI-MANDATE]: DO NOT ALTER 'templateSlug' VALUES OR SCHEMA STRUCTURE.
 * [STRATEGY]: Economic Hubs | Local Dominance | Business Intelligence
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { AreaNode } from "@/types";

/**
 * @description คลังข้อมูลพิกัดยุทธศาสตร์สำหรับการทำ Local SEO และ Dynamic Rendering
 * @note templateSlug "new-service-name" ถูกล็อคไว้สำหรับระบบ Local Authority ชุดใหม่ ห้ามเปลี่ยนกลับเป็น "local"
 */
export const AREA_NODES: readonly AreaNode[] = [
  // --- [TIER 1]: MASTER ECONOMIC HUBS (ศูนย์กลางเศรษฐกิจและเทคโนโลยี) ---
  {
    slug: "bangkok",
    province: "กรุงเทพมหานคร",
    templateSlug: "corporate",
    title:
      "รับทำเว็บไซต์ กรุงเทพฯ | มาตรฐาน Corporate ระดับสากล & Technical SEO สำหรับองค์กรชั้นนำ",
    description:
      "บริการ Web Development และ SEO Strategy สำหรับบริษัทที่ต้องการความเป็นเลิศในตลาดที่มีการแข่งขันสูงสุด",
    longDescription:
      "กรุงเทพฯ คือศูนย์กลางเศรษฐกิจดิจิทัล การมีแค่เว็บไซต์ไม่เพียงพอ แต่ต้องเป็นสินทรัพย์ดิจิทัลที่ทรงพลัง เราให้บริการออกแบบเว็บไซต์มาตรฐานองค์กร (Corporate Grade) และ E-commerce System ที่รองรับ Traffic มหาศาล พร้อมกลยุทธ์ SEO ที่วางแผนโดย Specialist เพื่อให้แบรนด์ของคุณครองตำแหน่งผู้นำในอุตสาหกรรม",
    districts: ["สาทร", "สีลม", "สุขุมวิท", "ทองหล่อ", "พระราม 9", "ลาดพร้าว", "ปทุมวัน", "บางนา"],
    keywords: [
      "รับทำเว็บไซต์ กรุงเทพ",
      "บริษัท SEO กรุงเทพ",
      "Web Development Bangkok",
      "รับทำเว็บ Corporate",
      "Enterprise SEO Solution",
    ],
    heroImage: "/images/areas/bangkok-node.webp",
    priority: 100,
    seoTitle:
      "AEMDEVWEB | รับทำเว็บไซต์ กรุงเทพฯ (Bangkok) | บริษัทพัฒนาเว็บไซต์และ SEO มาตรฐานสากล",
    seoDescription:
      "ยกระดับธุรกิจในกรุงเทพฯ ด้วยเว็บไซต์คุณภาพสูงและกลยุทธ์ SEO สายขาว เน้นผลลัพธ์เชิงธุรกิจและการเติบโตที่ยั่งยืน",
    coordinates: { lat: 13.7563, lng: 100.5018 },
  },
  {
    slug: "chon-buri",
    province: "ชลบุรี",
    templateSlug: "corporate",
    title:
      "รับทำเว็บไซต์ ชลบุรี พัทยา | โซลูชั่นเว็บอุตสาหกรรม EEC และธุรกิจท่องเที่ยวรองรับหลายภาษา",
    description:
      "ออกแบบเว็บไซต์โรงงาน อสังหาฯ และโรงแรม ในเขต EEC รองรับระบบ Multi-Language (ไทย-อังกฤษ-จีน-ญี่ปุ่น)",
    longDescription:
      "ชลบุรีคือประตูสู่การค้าโลกและ EEC ธุรกิจที่นี่ต้องการความน่าเชื่อถือระดับสากล เราเชี่ยวชาญการทำเว็บไซต์โรงงานอุตสาหกรรมที่เน้นข้อมูลทางเทคนิค และเว็บไซต์ธุรกิจบริการในพัทยาที่ต้องรองรับชาวต่างชาติ ด้วยโครงสร้าง SEO ที่เจาะกลุ่มเป้าหมายได้ทั่วโลก",
    districts: ["เมืองพัทยา", "ศรีราชา", "แหลมฉบัง", "อมตะนคร", "บางแสน", "สัตหีบ"],
    keywords: [
      "รับทำเว็บไซต์ ชลบุรี",
      "รับทำเว็บไซต์ พัทยา",
      "Industrial Web Design",
      "ทำเว็บโรงงาน EEC",
      "รับทำ SEO อสังหาริมทรัพย์",
    ],
    heroImage: "/images/areas/chon-buri-node.webp",
    priority: 99,
    seoTitle:
      "AEMDEVWEB | รับทำเว็บไซต์ ชลบุรี พัทยา | ผู้เชี่ยวชาญเว็บอุตสาหกรรม EEC และธุรกิจส่งออก",
    seoDescription:
      "บริการทำเว็บไซต์ในชลบุรี ศรีราชา พัทยา เน้นมาตรฐานโรงงานและธุรกิจอินเตอร์ รองรับ SEO ภาษาต่างประเทศ",
    coordinates: { lat: 13.3611, lng: 100.9847 },
  },
  {
    slug: "chiang-mai",
    province: "เชียงใหม่",
    templateSlug: "corporate",
    title: "รับทำเว็บไซต์ เชียงใหม่ | Web Design ผสานอัตลักษณ์ Lanna Modern เพื่อธุรกิจไลฟ์สไตล์",
    description:
      "ยกระดับธุรกิจคาเฟ่ โรงแรม และ Wellness ด้วยดีไซน์ที่เล่าเรื่องราว พร้อมระบบ Booking Engine ที่ทรงประสิทธิภาพ",
    longDescription:
      "เชียงใหม่เมืองแห่งความคิดสร้างสรรค์ เว็บไซต์ของคุณต้องสะท้อน Taste และ Storytelling ที่โดดเด่น เราผสานงานดีไซน์ที่มีเอกลักษณ์เข้ากับเทคโนโลยีเว็บไซต์สมัยใหม่ ช่วยให้ธุรกิจ Boutique Hotel, Cafe และ Tour Agency สามารถเปลี่ยนผู้ชมให้กลายเป็นลูกค้าได้ทันที",
    districts: ["นิมมาน", "เมืองเก่า", "สันกำแพง", "แม่ริม", "หางดง"],
    keywords: [
      "รับทำเว็บไซต์ เชียงใหม่",
      "Chiang Mai Web Design",
      "ทำเว็บโรงแรม Boutique",
      "รับทำ SEO ท่องเที่ยว",
      "Creative Web Agency",
    ],
    heroImage: "/images/areas/chiang-mai-node.webp",
    priority: 98,
    seoTitle:
      "AEMDEVWEB | รับทำเว็บไซต์ เชียงใหม่ | ออกแบบเว็บสวยมีสไตล์ สำหรับธุรกิจท่องเที่ยวและ Wellness",
    seoDescription:
      "บริการรับทำเว็บไซต์ในเชียงใหม่ ที่เข้าใจ DNA ของธุรกิจไลฟ์สไตล์ เน้นดีไซน์สวยงามและระบบจองที่ใช้งานง่าย",
    coordinates: { lat: 18.7883, lng: 98.9853 },
  },
  {
    slug: "phuket",
    province: "ภูเก็ต",
    templateSlug: "corporate",
    title:
      "รับทำเว็บไซต์ ภูเก็ต | Premium Web Design สำหรับธุรกิจ Luxury และตลาดนักท่องเที่ยว High-End",
    description:
      "สร้างภาพลักษณ์ World-Class ให้กับโรงแรม วิลล่า และธุรกิจ Yacht ด้วยเว็บไซต์และ SEO มาตรฐานสากล",
    longDescription:
      "ภูเก็ตคือตลาดระดับโลกที่ต้องการความเป็นเลิศ เราให้บริการออกแบบเว็บไซต์ Luxury ที่เน้น Visual Experience ระดับสูง สำหรับธุรกิจ Real Estate, 5-Star Hospitality และ Marine Tourism พร้อมทำ SEO ภาษาอังกฤษ/รัสเซีย เพื่อดึงดูดกลุ่มลูกค้าที่มีกำลังซื้อสูงโดยตรง",
    districts: ["ป่าตอง", "กะรน", "เชิงทะเล (Laguna)", "ราไวย์", "เมืองภูเก็ต"],
    keywords: [
      "รับทำเว็บไซต์ ภูเก็ต",
      "Phuket Web Design",
      "Luxury Real Estate Website",
      "ทำเว็บโรงแรมภูเก็ต",
      "International SEO",
    ],
    heroImage: "/images/areas/phuket-node.webp",
    priority: 97,
    seoTitle:
      "AEMDEVWEB | รับทำเว็บไซต์ ภูเก็ต (Phuket) | บริการทำเว็บ Luxury Hotel และอสังหาฯ ระดับโลก",
    seoDescription:
      "ผู้เชี่ยวชาญด้าน Premium Website ในภูเก็ต เจาะตลาดชาวต่างชาติและนักลงทุน ด้วยดีไซน์ที่หรูหราและ SEO ประสิทธิภาพสูง",
    coordinates: { lat: 7.8804, lng: 98.3923 },
  },

  // --- [TIER 2]: REGIONAL GROWTH (หัวเมืองเศรษฐกิจภูมิภาค) ---
  {
    slug: "khon-kaen",
    province: "ขอนแก่น",
    templateSlug: "salepage",
    title: "รับทำเว็บไซต์ ขอนแก่น | Digital Hub แห่งอีสาน โซลูชั่นการตลาดออนไลน์และ Sale Page",
    description:
      "เครื่องมือปิดการขายสำหรับ Smart SME และธุรกิจคลินิกความงาม เน้นความรวดเร็วและแม่นยำด้วย Conversion Focus",
    longDescription:
      "ขอนแก่นคือศูนย์กลาง Smart City ของอีสาน ธุรกิจที่นี่ต้องปรับตัวไว เรานำเสนอเครื่องมือการตลาดอย่าง Sale Page (High Conversion) และระบบเว็บไซต์ที่รองรับการยิงโฆษณาเต็มรูปแบบ เหมาะสำหรับธุรกิจความงาม คลินิก และ SME ที่ต้องการสร้างยอดขายผ่านช่องทางออนไลน์อย่างจริงจัง",
    districts: ["เมืองขอนแก่น", "มหาวิทยาลัยขอนแก่น", "ชุมแพ", "บ้านไผ่"],
    keywords: [
      "รับทำเว็บไซต์ ขอนแก่น",
      "รับทำ Sale Page อีสาน",
      "Digital Marketing ขอนแก่น",
      "ทำเว็บคลินิกความงาม",
      "SME Web Solution",
    ],
    heroImage: "/images/areas/khon-kaen-node.webp",
    priority: 95,
    seoTitle:
      "AEMDEVWEB | รับทำเว็บไซต์ ขอนแก่น | โซลูชั่น Sale Page และการตลาดออนไลน์สำหรับ Smart SME",
    seoDescription:
      "บริการทำเว็บไซต์และ Sale Page ในขอนแก่น ออกแบบมาเพื่อปิดการขายและรองรับ Digital Marketing เต็มรูปแบบ",
    coordinates: { lat: 16.4322, lng: 102.8236 },
  },
  {
    slug: "korat",
    province: "นครราชสีมา",
    templateSlug: "corporate",
    title:
      "รับทำเว็บไซต์ โคราช | ฐานข้อมูลสินค้า (E-Catalog) และเว็บธุรกิจสำหรับโรงงานและผู้รับเหมา",
    description:
      "ระบบจัดการสต็อกสินค้าออนไลน์และเว็บไซต์องค์กร สร้างความน่าเชื่อถือให้ธุรกิจรับเหมาและ Supply Chain",
    longDescription:
      "นครราชสีมาคือประตูสู่อีสานและฐานการผลิตสำคัญ เราช่วยยกระดับธุรกิจรับเหมาก่อสร้าง ร้านวัสดุ และโรงงาน ด้วยระบบ E-Catalog ที่ช่วยบริหารจัดการข้อมูลสินค้าจำนวนมาก และเว็บไซต์ Corporate ที่สร้างความมั่นใจให้กับคู่ค้าและ Supplier",
    districts: ["เมืองนครราชสีมา", "ปากช่อง (เขาใหญ่)", "สีคิ้ว", "วังน้ำเขียว"],
    keywords: [
      "รับทำเว็บไซต์ โคราช",
      "รับทำเว็บไซต์ นครราชสีมา",
      "ทำเว็บรับเหมาก่อสร้าง",
      "ระบบ E-Catalog โคราช",
      "เว็บโรงงานอุตสาหกรรม",
    ],
    heroImage: "/images/areas/korat-node.webp",
    priority: 94,
    seoTitle:
      "AEMDEVWEB | รับทำเว็บไซต์ โคราช (นครราชสีมา) | ออกแบบเว็บโรงงานและระบบจัดการสินค้าออนไลน์",
    seoDescription:
      "บริการรับทำเว็บไซต์ในโคราช เขาใหญ่ เน้นระบบ E-Catalog และเว็บไซต์องค์กร เพื่อสร้างความน่าเชื่อถือทางธุรกิจ",
    coordinates: { lat: 14.9759, lng: 102.1177 },
  },

  // --- [TIER 3]: LOCAL DOMINANCE (การสร้างรากฐานธุรกิจท้องถิ่น) ---
  {
    slug: "nakhon-sawan",
    province: "นครสวรรค์",
    templateSlug: "new-service-name", // [LOCKED]: DO NOT MOVE
    title: "รับทำเว็บไซต์ นครสวรรค์ | ผู้นำตลาดท้องถิ่นด้วย Local SEO และระบบค้นหา Google Maps",
    description:
      "เปลี่ยนร้านค้าดั้งเดิมให้เป็นผู้นำตลาดดิจิทัล ดักจับลูกค้าในพื้นที่ด้วยการค้นหาที่แม่นยำ",
    longDescription:
      "ในยุคที่คนนครสวรรค์ค้นหาทุกอย่างผ่านมือถือ ธุรกิจของคุณต้องเป็น 'ตัวเลือกแรก' ที่ลูกค้าเห็น เราเชี่ยวชาญการทำ Local SEO และปรับแต่ง Google Business Profile เพื่อดึง Traffic จากออนไลน์เข้าสู่หน้าร้านจริง เหมาะสำหรับร้านอาหาร คลินิก และธุรกิจบริการ",
    districts: ["เมืองนครสวรรค์", "ลาดยาว", "ตาคลี", "พยุหะคีรี"],
    keywords: [
      "รับทำเว็บไซต์ นครสวรรค์",
      "Local SEO นครสวรรค์",
      "ปักหมุด Google Maps",
      "Digital Transformation",
    ],
    heroImage: "/images/areas/nakhon-sawan-node.webp",
    priority: 90,
    seoTitle:
      "AEMDEVWEB | รับทำเว็บไซต์ นครสวรรค์ | ยึดพื้นที่การขายในจังหวัดด้วย Local SEO และเว็บไซต์",
    seoDescription:
      "ช่วยร้านค้าในนครสวรรค์ให้ติดอันดับการค้นหา Google Maps เพิ่มยอดขายหน้าร้านด้วยกลยุทธ์ Local Digital Marketing",
    coordinates: { lat: 15.7042, lng: 100.1372 },
  },
  {
    slug: "kamphaeng-phet",
    province: "กำแพงเพชร",
    templateSlug: "new-service-name", // [LOCKED]: DO NOT MOVE
    title:
      "รับทำเว็บไซต์ กำแพงเพชร | ยกระดับธุรกิจเกษตรและร้านค้า ด้วยเว็บไซต์ราคาที่คุ้มค่าการลงทุน",
    description:
      "เริ่มต้นสร้างตัวตนบนโลกออนไลน์อย่างมืออาชีพ ด้วยงบประมาณที่เข้าถึงได้ สำหรับ SME ยุคใหม่",
    longDescription:
      "เปลี่ยนภาพลักษณ์ธุรกิจท้องถิ่นให้ดูทันสมัย เราให้บริการทำเว็บไซต์สำหรับธุรกิจเกษตรสมัยใหม่ (Smart Farm) ร้านทอง และผู้ประกอบการรายย่อยในกำแพงเพชร เพื่อสร้างหน้าร้านออนไลน์ที่ดูดี น่าเชื่อถือ และใช้งานง่าย ในราคาที่สมเหตุสมผลกับการเริ่มต้น",
    districts: ["เมืองกำแพงเพชร", "ขาณุวรลักษบุรี", "คลองขลุง"],
    keywords: [
      "รับทำเว็บไซต์ กำแพงเพชร",
      "ทำเว็บร้านค้าชุมชน",
      "Smart Farm Website",
      "SME Digital",
    ],
    heroImage: "/images/areas/kamphaeng-phet-node.webp",
    priority: 85,
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ กำแพงเพชร | สร้างตัวตนธุรกิจออนไลน์ มาตรฐานมืออาชีพ",
    seoDescription:
      "บริการทำเว็บไซต์ในกำแพงเพชร เน้นความคุ้มค่าและภาพลักษณ์ที่ทันสมัย ช่วยธุรกิจท้องถิ่นเข้าสู่ตลาดออนไลน์ได้ง่ายขึ้น",
    coordinates: { lat: 16.4828, lng: 99.5227 },
  },
  {
    slug: "sukhothai",
    province: "สุโขทัย",
    templateSlug: "new-service-name", // [LOCKED]: DO NOT MOVE
    title:
      "รับทำเว็บไซต์ สุโขทัย | Digital Storytelling สำหรับสินค้า OTOP และการท่องเที่ยวเชิงวัฒนธรรม",
    description:
      "เพิ่มมูลค่าสินค้าชุมชนและโฮมสเตย์ ด้วยเว็บไซต์ที่เน้นการเล่าเรื่อง (Content Marketing) และอัตลักษณ์ไทย",
    longDescription:
      "สุโขทัยมีต้นทุนทางวัฒนธรรมที่สูงลิ่ว เราช่วยนำเสนอคุณค่าเหล่านั้นผ่านเว็บไซต์ที่เน้น Storytelling เพื่อยกระดับสินค้า OTOP งานหัตถกรรม และที่พักเชิงวัฒนธรรม ให้ดึงดูดนักท่องเที่ยวและผู้ซื้อจากทั่วประเทศ เพิ่มมูลค่าสินค้าด้วยภาพลักษณ์ที่ดี",
    districts: ["เมืองสุโขทัย", "ศรีสัชนาลัย", "กงไกรลาศ", "สวรรคโลก"],
    keywords: [
      "รับทำเว็บไซต์ สุโขทัย",
      "ทำเว็บ OTOP",
      "Content Marketing สุโขทัย",
      "เว็บท่องเที่ยวชุมชน",
    ],
    heroImage: "/images/areas/sukhothai-node.webp",
    priority: 84,
    seoTitle:
      "AEMDEVWEB | รับทำเว็บไซต์ สุโขทัย | สร้างมูลค่าเพิ่มให้สินค้า OTOP และธุรกิจท่องเที่ยว",
    seoDescription:
      "รับออกแบบเว็บไซต์ในสุโขทัย เน้นการเล่าเรื่องราวเพื่อเพิ่มมูลค่าสินค้าชุมชนและดึงดูดนักท่องเที่ยว",
    coordinates: { lat: 17.0078, lng: 99.8235 },
  },
  {
    slug: "tak",
    province: "ตาก",
    templateSlug: "corporate",
    title: "รับทำเว็บไซต์ ตาก แม่สอด | ศูนย์กลาง Logistics และการค้าชายแดน (Cross-border Trade)",
    description: "ระบบเว็บไซต์รองรับธุรกิจนำเข้า-ส่งออก และขนส่งสินค้า พร้อมฟังก์ชันหลายภาษา",
    longDescription:
      "ในพื้นที่เศรษฐกิจพิเศษตาก-แม่สอด เว็บไซต์คือเครื่องมือเจรจาธุรกิจที่สำคัญ เราเชี่ยวชาญการทำเว็บสำหรับบริษัท Logistics ชิปปิ้ง และโรงงานชายแดน ที่ต้องการระบบจัดการข้อมูลที่แม่นยำ และรองรับภาษาเพื่อนบ้านเพื่อการสื่อสารที่ไร้รอยต่อ",
    districts: ["เมืองตาก", "แม่สอด", "แม่ระมาด", "พบพระ"],
    keywords: [
      "รับทำเว็บไซต์ ตาก",
      "รับทำเว็บไซต์ แม่สอด",
      "ทำเว็บ Logistics",
      "เว็บนำเข้าส่งออก",
      "Cross-border Web Solution",
    ],
    heroImage: "/images/areas/tak-node.webp",
    priority: 83,
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ ตาก แม่สอด | โซลูชั่นเว็บ Logistics และการค้าชายแดน",
    seoDescription:
      "บริการทำเว็บไซต์ในตากและแม่สอด รองรับธุรกิจขนส่งและนำเข้า-ส่งออก ด้วยระบบมาตรฐานที่รองรับการค้าระหว่างประเทศ",
    coordinates: { lat: 16.8831, lng: 99.1258 },
  },
  {
    slug: "phichit",
    province: "พิจิตร",
    templateSlug: "new-service-name", // [LOCKED]: DO NOT MOVE
    title: "รับทำเว็บไซต์ พิจิตร | Agri-Business Solution ยกระดับธุรกิจเกษตรและโรงสีสู่ตลาดออนไลน์",
    description:
      "สร้างความน่าเชื่อถือให้ธุรกิจโรงสีและร้านวัสดุการเกษตร ด้วยเว็บไซต์ที่ค้นหาเจอง่ายบน Google",
    longDescription:
      "ยกระดับธุรกิจเกษตรดั้งเดิมสู่ Agri-Business ยุคใหม่ เราช่วยสร้างเว็บไซต์ให้โรงสีข้าว ร้านจำหน่ายปุ๋ยยา และธุรกิจท้องถิ่นในพิจิตร ให้มีตัวตนบนโลกออนไลน์ที่น่าเชื่อถือ เพิ่มช่องทางการติดต่อและขยายฐานลูกค้าได้กว้างไกลกว่าเดิม",
    districts: ["เมืองพิจิตร", "ตะพานหิน", "บางมูลนาก", "โพทะเล"],
    keywords: [
      "รับทำเว็บไซต์ พิจิตร",
      "ทำเว็บธุรกิจเกษตร",
      "Agri-Business Website",
      "ปักหมุดร้านพิจิตร",
    ],
    heroImage: "/images/areas/phichit-node.webp",
    priority: 82,
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ พิจิตร | ยกระดับธุรกิจเกษตรและร้านค้าท้องถิ่นสู่ออนไลน์",
    seoDescription:
      "รับทำเว็บไซต์ในพิจิตร ช่วยธุรกิจโรงสีและเกษตรกรรมให้เข้าถึงตลาดออนไลน์ สร้างความน่าเชื่อถือและยอดขาย",
    coordinates: { lat: 16.4428, lng: 100.3501 },
  },
  {
    slug: "uttaradit",
    province: "อุตรดิตถ์",
    templateSlug: "new-service-name", // [LOCKED]: DO NOT MOVE
    title:
      "รับทำเว็บไซต์ อุตรดิตถ์ | จากสินค้าท้องถิ่นสู่ E-commerce ระดับประเทศ (Local to Global)",
    description:
      "ขยายตลาดสินค้าเกษตรแปรรูปและของฝาก ด้วยระบบร้านค้าออนไลน์ที่จัดการออเดอร์ได้เอง 24 ชม.",
    longDescription:
      "ปลดล็อกศักยภาพสินค้าอุตรดิตถ์ด้วยระบบ E-commerce เราช่วยผู้ประกอบการสินค้าแปรรูปและของฝาก สร้างหน้าร้านออนไลน์ที่สามารถรับชำระเงินและจัดการสต็อกได้เอง เปลี่ยนการขายแค่ในจังหวัด เป็นการส่งออกสินค้าดีๆ ไปสู่ลูกค้าทั่วประเทศ",
    districts: ["เมืองอุตรดิตถ์", "ลับแล", "พิชัย", "น้ำปาด"],
    keywords: [
      "รับทำเว็บไซต์ อุตรดิตถ์",
      "ทำเว็บขายของฝาก",
      "E-commerce อุตรดิตถ์",
      "เว็บสินค้าแปรรูป",
    ],
    heroImage: "/images/areas/uttaradit-node.webp",
    priority: 81,
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ อุตรดิตถ์ | ระบบร้านค้าออนไลน์สำหรับสินค้า OTOP และของฝาก",
    seoDescription:
      "บริการทำเว็บไซต์ E-commerce ในอุตรดิตถ์ ช่วยขยายตลาดสินค้าท้องถิ่นสู่ระดับประเทศ ด้วยระบบขายของออนไลน์ที่ใช้งานง่าย",
    coordinates: { lat: 17.6256, lng: 100.0993 },
  },
] as const;

/**
 * [HELPER]: Get Featured Areas
 */
export const FEATURED_AREAS = [...AREA_NODES].sort((a, b) => b.priority - a.priority).slice(0, 6);

/**
 * [HELPER]: Get Area by Slug
 */
export const getAreaBySlug = (slug: string) => AREA_NODES.find((area) => area.slug === slug);

```
### CONFIG: master-registry.ts
```typescript
/**
 * [DATA REGISTRY]: MASTER_SERVICE_REGISTRY v17.7.2 (IDENTITY_LOCKED)
 * [STRATEGY]: Color Psychology | Business Alignment | PSI Optimization
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { TemplateMasterData } from "@/types";

/**
 * @description คลังข้อมูลบริการที่ปรับโทนเป็น "Strategic Partner" เน้นความคุ้มค่าเชิงธุรกิจและมาตรฐานวิศวกรรม
 */
export const MASTER_REGISTRY: readonly TemplateMasterData[] = [
  // ===========================================================================
  // [00. SEO AGENCY]: ความเชื่อมั่นและการเติบโต (Trust & Growth)
  // ===========================================================================
  {
    id: "AEM-SVC-SEO-07",
    title: "Technical SEO & Growth Strategy",
    description:
      "สร้างสินทรัพย์ดิจิทัลระยะยาว ปรับโครงสร้างเว็บให้ Google เข้าใจง่าย เพื่อลดต้นทุนค่าโฆษณาในอนาคต",
    image: "/images/service/seo-agency-node.webp",
    templateSlug: "seo_agency",
    category: "business",
    price: "19,500",
    priceValue: 19500,
    currency: "THB",
    unit: "รายเดือน",
    theme: {
      primary: "#10b981",
      secondary: "#064e3b",
      background: "bg-slate-950",
      gradient: "from-emerald-500/10 via-transparent to-transparent",
    },
    benefits: [
      "Technical Audit: ตรวจสุขภาพเว็บและแก้ไขจุดบอดทางเทคนิคครบวงจร",
      "Keyword Strategy: วางแผนคำค้นหาที่เน้นยอดขาย (Commercial Intent)",
      "Organic Growth: สร้างฐานลูกค้าที่เข้ามาเองตามธรรมชาติอย่างยั่งยืน",
    ],
    coreFeatures: [
      {
        title: "Code Structure",
        description: "ปรับโครงสร้างหลังบ้านให้ Clean และถูกหลัก Google 100%",
        icon: "Code2",
      },
      {
        title: "Speed & Core Vitals",
        description: "ทำความเร็วเว็บให้ผ่านเกณฑ์มาตรฐาน เพื่ออันดับที่ดีกว่า",
        icon: "Zap",
      },
      {
        title: "Analytics",
        description: "วัดผลด้วยข้อมูลจริง ปรับแผนตามพฤติกรรมลูกค้า",
        icon: "TrendingUp",
      },
    ],
    faqs: [
      {
        question: "จำเป็นต้องทำต่อเนื่องไหม?",
        answer:
          "SEO คือการแข่งกับคู่แข่งและอัลกอริทึมที่เปลี่ยนตลอดครับ การดูแลต่อเนื่องช่วยรักษาอันดับและขยายฐานลูกค้าใหม่ๆ",
      },
      {
        question: "ต่างจากการยิงแอดอย่างไร?",
        answer:
          "การยิงแอดคือการเช่าพื้นที่ (หยุดจ่ายจบ) แต่ SEO คือการสร้างบ้านของตัวเอง (ติดอันดับแล้วอยู่ยาว) ครับ",
      },
    ],
    keywords: ["ที่ปรึกษา SEO", "รับทำ SEO สายขาว", "ปรับโครงสร้างเว็บไซต์", "เพิ่มยอดเข้าชมเว็บ"],
    priority: 0,
    isFeatured: true,
  },

  // ===========================================================================
  // [01. SALE PAGE]: การกระตุ้นและปิดการขาย (Action & Urgency)
  // ===========================================================================
  {
    id: "AEM-SVC-SP-01",
    title: "High-Conversion Sale Page",
    description:
      "หน้าเว็บไซต์สำหรับปิดการขายโดยเฉพาะ ออกแบบ UX/UI ให้กระชับ โหลดไว รองรับการทำโฆษณา (Ads Optimization)",
    image: "/images/service/salepage-node.webp",
    templateSlug: "salepage",
    category: "landing",
    price: "3,500",
    priceValue: 3500,
    currency: "THB",
    unit: "เริ่มต้น",
    theme: {
      primary: "#ef4444",
      secondary: "#7f1d1d",
      background: "bg-white",
      gradient: "from-rose-50 to-white",
    },
    benefits: [
      "Performance: โหลดเร็วทันใจ ลดโอกาสลูกค้ากดปิดหนี (Bounce Rate)",
      "Ad-Ready: โครงสร้างพร้อมสำหรับการติด Pixel และ Conversion API",
      "User Friendly: ดีไซน์ปุ่มสั่งซื้อและติดต่อให้กดง่ายที่สุดบนมือถือ",
    ],
    coreFeatures: [
      {
        title: "Fast Loading",
        description: "เทคโนโลยี Server-Side Rendering (SSR) โหลดไวแม้เน็ตช้า",
        icon: "Smartphone",
      },
      {
        title: "Conversion Focus",
        description: "ตัดสิ่งรบกวน เน้นเนื้อหาที่โน้มน้าวใจลูกค้า",
        icon: "Target",
      },
      {
        title: "Easy Update",
        description: "ปรับเปลี่ยนโปรโมชั่นหรือรูปภาพได้รวดเร็ว",
        icon: "RefreshCw",
      },
    ],
    faqs: [
      {
        question: "ทำไมถึงคุ้มกว่าจ้างทั่วไป?",
        answer:
          "เพราะเราใช้โครงสร้างมาตรฐานเดียวกับบริษัทใหญ่ แต่ตัดทอนฟีเจอร์ที่ไม่จำเป็นออก เพื่อให้คุณได้ราคาที่คุ้มค่าที่สุดครับ",
      },
    ],
    keywords: ["รับทำ Sale Page", "Landing Page ยิงแอด", "เว็บหน้าเดียว", "หน้าปิดการขาย"],
    priority: 1,
    isPopular: true,
  },

  // ===========================================================================
  // [02. CORPORATE]: ความเป็นมืออาชีพและความมั่นคง (Stability & Logic)
  // ===========================================================================
  {
    id: "AEM-SVC-CP-03",
    title: "Corporate Standard Website",
    description:
      "ยกระดับความน่าเชื่อถือให้ธุรกิจ ด้วยเว็บไซต์มาตรฐานองค์กร ดีไซน์ทันสมัย และระบบจัดการข้อมูลที่ใช้งานง่าย",
    image: "/images/service/corporate-node.webp",
    templateSlug: "corporate",
    category: "business",
    price: "9,900",
    priceValue: 9900,
    currency: "THB",
    unit: "โปรเจกต์",
    theme: {
      primary: "#2563eb",
      secondary: "#1e3a8a",
      background: "bg-slate-50",
      gradient: "from-blue-500/5 to-transparent",
    },
    benefits: [
      "Professional Look: ออกแบบตามอัตลักษณ์แบรนด์ (CI) สร้างภาพจำที่ดี",
      "SEO Structure: วางโครงสร้างพื้นฐานให้ค้นหาเจอใน Google ได้ง่าย",
      "Scalability: รองรับการขยายเนื้อหาหรือเพิ่มหน้าใหม่ๆ ในอนาคต",
    ],
    coreFeatures: [
      {
        title: "Brand Identity",
        description: "สะท้อนความเป็นมืออาชีพ ผ่านงานดีไซน์ที่ลงตัว",
        icon: "ShieldCheck",
      },
      {
        title: "CMS System",
        description: "ระบบหลังบ้านให้คุณอัปเดตข่าวสารและผลงานได้เอง",
        icon: "Edit3",
      },
      {
        title: "Responsive",
        description: "แสดงผลสวยงามทุกหน้าจอ ทั้งมือถือ แท็บเล็ต และคอมพิวเตอร์",
        icon: "Monitor",
      },
    ],
    faqs: [
      {
        question: "ดูแลหลังการขายอย่างไร?",
        answer:
          "เราดูแลทางเทคนิคให้ตลอดอายุการใช้งานโฮสติ้งกับเราครับ หากมีปัญหาการแสดงผล แจ้งได้ทันที",
      },
    ],
    keywords: ["ทำเว็บองค์กร", "เว็บไซต์บริษัท", "ออกแบบเว็บธุรกิจ", "Web Design Corporate"],
    priority: 2,
    isFeatured: true,
  },

  // ===========================================================================
  // [03. LOCAL EXPERTISE]: ยกระดับธุรกิจรายพื้นที่ (Geographic Authority)
  // ===========================================================================
  {
    id: "AEM-SVC-LS-10",
    title: "Local Authority Engine",
    description:
      "ดันธุรกิจของคุณให้เป็นเบอร์ 1 ในพื้นที่ ด้วยระบบเว็บไซต์ที่ออกแบบมาเพื่อกวาดลูกค้าในจังหวัดโดยเฉพาะ",
    image: "/images/service/local-node.webp",
    // [FIXED]: แมปตรงกับโฟลเดอร์คอมโพเนนต์ใหม่ และ Redirect ใน vercel.json
    templateSlug: "new-service-name",
    category: "business",
    price: "6,900",
    priceValue: 6900,
    currency: "THB",
    unit: "พื้นที่",
    theme: {
      primary: "#f59e0b",
      secondary: "#78350f",
      background: "bg-white",
      gradient: "from-amber-50 to-transparent",
    },
    benefits: [
      "Local Dominance: ติดอันดับต้นๆ เมื่อมีการค้นหาบริการในพื้นที่ของคุณ",
      "Trust & Entity: สร้างความน่าเชื่อถือด้วยข้อมูลพิกัดที่ชัดเจน",
      "Conversion Optimized: เปลี่ยนผู้เข้าชมในพื้นที่ให้เป็นลูกค้าตัวจริง",
    ],
    coreFeatures: [
      {
        title: "Map & Geo SEO",
        description: "ปรับจูนโครงสร้าง Schema LocalBusiness ให้ Google เข้าใจพิกัดร้าน",
        icon: "MapPin",
      },
      {
        title: "Localized Content",
        description: "วางกลยุทธ์เนื้อหาที่เจาะจงพฤติกรรมคนในพื้นที่นั้นๆ",
        icon: "Search",
      },
    ],
    faqs: [
      {
        question: "ทำไมต้องแยกเป็นรายพื้นที่?",
        answer:
          "การทำเจาะจงพื้นที่ช่วยให้ Google จัดอันดับคุณได้ง่ายขึ้น และลูกค้าจะรู้สึกใกล้ชิดมากกว่าครับ",
      },
    ],
    keywords: ["รับปักหมุด", "Local SEO", "Google Maps ร้านค้า", "ทำเว็บรายจังหวัด"],
    priority: 3,
    isFeatured: true,
  },

  // ===========================================================================
  // [04. E-CATALOG]: ความทันสมัยและการจัดการ (Modern & Logic)
  // ===========================================================================
  {
    id: "AEM-SVC-EC-05",
    title: "Smart E-Catalog System",
    description:
      "เปลี่ยนแค็ตตาล็อกเล่มหนาเป็นระบบค้นหาสินค้าออนไลน์ ช่วยฝ่ายขายทำงานง่าย ลูกค้าค้นหาเจอทันที",
    image: "/images/service/catalog-node.webp",
    templateSlug: "catalog",
    category: "ecommerce",
    price: "16,900",
    priceValue: 16900,
    currency: "THB",
    unit: "เริ่มต้น",
    theme: {
      primary: "#8b5cf6",
      secondary: "#4c1d95",
      background: "bg-zinc-50",
      gradient: "from-violet-500/5 via-transparent to-transparent",
    },
    benefits: [
      "Smart Search: ระบบค้นหาและตัวกรองสินค้าที่แม่นยำ",
      "Unlimited Data: รองรับสินค้าจำนวนมาก จัดหมวดหมู่ได้เป็นระเบียบ",
      "Lead Generation: ปุ่มขอใบเสนอราคาอัตโนมัติ เพื่อปิดการขาย",
    ],
    coreFeatures: [
      {
        title: "Product Database",
        description: "จัดการข้อมูลสินค้า สเปค และรูปภาพ ได้อย่างเป็นระบบ",
        icon: "Database",
      },
      {
        title: "Filter System",
        description: "ค้นหาจาก หมวดหมู่ หรือราคา ได้ละเอียด",
        icon: "Filter",
      },
    ],
    faqs: [
      {
        question: "ลงสินค้าเองยากไหม?",
        answer: "ไม่ยากครับ เรามีระบบจัดการที่ง่ายเหมือนการเล่นโซเชียลมีเดียทั่วไป",
      },
    ],
    keywords: ["เว็บแค็ตตาล็อก", "ระบบสินค้าออนไลน์", "E-Catalog", "โปรแกรมสต็อกสินค้า"],
    priority: 4,
  },

  // ===========================================================================
  // [05. PORTFOLIO]: ความทันสมัยและเอกลักษณ์ (Personal & Tech)
  // ===========================================================================
  {
    id: "AEM-SVC-PB-14",
    title: "Professional Bio & Portfolio",
    description: "พื้นที่นำเสนอตัวตนและผลงานแบบมืออาชีพ รวมทุกช่องทางติดต่อไว้ในลิงก์เดียว",
    image: "/images/service/personal-node.webp",
    templateSlug: "bio",
    category: "personal",
    price: "4,900",
    priceValue: 4900,
    currency: "THB",
    unit: "โปรเจกต์",
    theme: {
      primary: "#06b6d4",
      secondary: "#164e63",
      background: "bg-zinc-950",
      gradient: "from-cyan-500/10 via-transparent to-transparent",
    },
    benefits: [
      "Centralized: รวมทุก Social Media และผลงานไว้ที่เดียว",
      "Professional: สร้างความประทับใจแรกด้วยดีไซน์ระดับ Specialist",
    ],
    coreFeatures: [
      {
        title: "Portfolio Gallery",
        description: "จัดแสดงผลงานอย่างมีศิลปะ สวยงามน่าสนใจ",
        icon: "Grid",
      },
      {
        title: "Smart Contact",
        description: "ปุ่มติดต่อที่ออกแบบให้กดง่ายที่สุด",
        icon: "Link",
      },
    ],
    faqs: [
      {
        question: "เอาไปใช้ทำอะไรได้บ้าง?",
        answer: "ใช้เป็น Bio Link ในโปรไฟล์ หรือใช้แนบสมัครงานและเสนองานลูกค้าครับ",
      },
    ],
    keywords: ["ทำเว็บพอร์ตโฟลิโอ", "Bio Link", "เว็บส่วนตัว", "Digital Name Card"],
    priority: 5,
  },

  // ===========================================================================
  // [06. HOSPITALITY]: ความหรูหราและความพรีเมียม (Luxury & Elegance)
  // ===========================================================================
  {
    id: "AEM-SVC-HR-08",
    title: "Hotel & Resort Website",
    description:
      "เว็บไซต์โรงแรมที่เน้นประสบการณ์ผู้ใช้งาน (UX) ภาพสวย โหลดไว กระตุ้นให้อยากจองห้องพัก",
    image: "/images/service/hotel-resort-node.webp",
    templateSlug: "hotelresort",
    category: "business",
    price: "16,900",
    priceValue: 16900,
    currency: "THB",
    unit: "เริ่มต้น",
    theme: {
      primary: "#c5a358",
      secondary: "#1a1a1a",
      background: "bg-[#0a0a0a]",
      gradient: "from-[#c5a358]/10 via-transparent to-transparent",
    },
    benefits: [
      "Visual Impact: นำเสนอภาพบรรยากาศที่พักได้เต็มอารมณ์ แต่ยังโหลดเร็ว",
      "Direct Booking: เพิ่มช่องทางจองตรง ลดค่าคอมมิชชั่น",
    ],
    coreFeatures: [
      {
        title: "Mood & Tone",
        description: "ดีไซน์ที่ถ่ายทอดบรรยากาศการพักผ่อนได้อย่างลงตัว",
        icon: "Image",
      },
      {
        title: "Room Showcase",
        description: "หน้ารายละเอียดห้องพักที่ชัดเจน ตัดสินใจง่าย",
        icon: "Home",
      },
    ],
    faqs: [
      {
        question: "มีระบบจองให้ไหม?",
        answer: "เราสามารถเชื่อมต่อกับระบบจองที่คุณมีอยู่เดิมได้ทันทีครับ",
      },
    ],
    keywords: ["ทำเว็บโรงแรม", "เว็บไซต์รีสอร์ท", "ออกแบบเว็บที่พัก", "Hotel Web Design"],
    priority: 6,
    isFeatured: true,
  },
] as const;

/**
 * @const FEATURED_SERVICES
 * @description คัดกรองบริการแนะนำ (Highlight) โดยเรียงตาม Priority
 */
export const FEATURED_SERVICES = [...MASTER_REGISTRY]
  .filter((svc) => svc.isFeatured || svc.isPopular)
  .sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99));

```
### CONFIG: navigation.ts
```typescript
/**
 * [DATA REGISTRY]: NAVIGATION_INFRASTRUCTURE v17.5.3 (UTILITY_EXPANDED)
 * [STRATEGY]: Information Architecture | SEO Relevancy | System Transparency
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "./site-config";

export const MAIN_NAV = [
  { label: "หน้าแรก", href: "/" },
  { label: "บริการ & ราคา", href: "/services" },
  { label: "ผลงานลูกค้า", href: "/case-studies" },
  { label: "พื้นที่ให้บริการ", href: "/areas" },
  { label: "บันทึกเทคนิค", href: "/blog" },
  { label: "Status", href: "/status" }, // [ADD]: เพิ่มเมนูสถานะระบบ
] as const;

export const SERVICE_SOLUTIONS = [
  { label: "Sale Page ปิดการขาย", href: "/services/salepage" },
  { label: "เว็บไซต์บริษัท (Corporate)", href: "/services/corporate" },
  { label: "Technical SEO Specialist", href: "/services/seo_agency" },
  { label: "E-Catalog & RFQ System", href: "/services/catalog" },
  { label: "Local SEO (ปักหมุดธุรกิจ)", href: "/services/local" },
  { label: "ระบบจองโรงแรม & ที่พัก", href: "/services/hotelresort" },
] as const;

export const FOOTER_MAP = {
  services: [...SERVICE_SOLUTIONS.slice(0, 4), { label: "ดูบริการทั้งหมด", href: "/services" }],
  company: [
    { label: "เกี่ยวกับ AEMDEVWEB", href: "/about" },
    { label: "ขั้นตอนการทำงาน", href: "/services#process" },
    { label: "รวมผลงาน Portfolio", href: "/case-studies" },
    { label: "พื้นที่ให้บริการ", href: "/areas" },
  ],
  connect: [
    { label: "แอดไลน์ปรึกษาฟรี", href: SITE_CONFIG.links.line },
    { label: "Facebook Page", href: SITE_CONFIG.links.facebook },
  ],
  /**
   * [LEGAL_&_SYSTEM]: จัดกลุ่มนโยบายและเส้นทางระบบ
   * [ADDED]: /status และ /sitemap.xml
   */
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "System Status", href: "/status" },
    { label: "Sitemap", href: "/sitemap.xml" },
  ],
} as const;

/* TYPE DEFINITIONS */
export type NavItem = (typeof MAIN_NAV)[number];
export type ServiceItem = (typeof SERVICE_SOLUTIONS)[number];

```
### CONFIG: site-config.ts
```typescript
/**
 * [SYSTEM CORE]: GLOBAL_SITE_CONFIGURATION v17.5.5 (EEAT_STABILIZED)
 * [MANDATE]: Single Source of Truth | EEAT Alignment | Strategic Branding
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { SiteConfig } from "@/types";

export const SITE_CONFIG: SiteConfig = {
  // [01. BRAND IDENTITY]
  brandName: "AEMDEVWEB",
  siteUrl: "https://aemdevweb.com",
  description:
    "AEMDEVWEB | Web Development & SEO Solutions พัฒนาเว็บไซต์มาตรฐานสากล เพื่อการติดอันดับหน้าแรก Google อย่างมีประสิทธิภาพและยั่งยืน",

  // [02. HERO_REGISTRY]
  hero: {
    title: "AEMDEVWEB HYPER PERFORMANCE ARCHITECTURE",
    description:
      "Development & SEO Solutions พัฒนาเว็บไซต์มาตรฐานสากล เพื่อการติดอันดับ Google อย่างมีประสิทธิภาพธุรกิจคุณ By นายเอ็มซ่ามากส์",
    primaryAction: "ปรึกษาวางแผนระบบฟรี",
    secondaryAction: "ดูบริการทั้งหมด",
  },

  // [03. PERSONA ANCHOR]
  persona: {
    tone: "Strategic Partner, Expert Authority, Business-Centric",
    communicationStyle: "Result-oriented, Friendly Specialist, Clear & Honest",
    antiConnotation: "No Fluff, No Robot-speak, Avoid Over-promising without Logic",
  },

  // [04. SEO AUTHORITY]
  keywords: [
    "รับทำเว็บไซต์",
    "รับทำ SEO สายขาว",
    "รับออกแบบเว็บไซต์ บริษัท",
    "รับทำ Sale Page ยิงแอด",
    "จ้างทำเว็บไซต์ ติดหน้าแรก Google",
    "รับทำเว็บ E-commerce",
    "รับทำเว็บไซต์ Next.js",
    "ที่ปรึกษา SEO",
    "AEMDEVWEB",
    "นายเอ็มซ่ามากส์",
    "นาย อลงกรณ์ ยมเกิด",
    "Technical SEO Specialist Thailand",
  ],

  // [05. TECHNICAL_STACK]
  project: {
    title: "AEMDEVWEB | Web Design & SEO Expert Hub",
    shortTitle: "AEMDEVWEB",
    version: "17.5.5", // Sync with types
    framework: "Next.js 16.1 (Latest Stable)",
    uiStack: "Tailwind CSS + React 19",
  },

  // [06. EXPERT NODE]
  expert: {
    displayName: "นายเอ็มซ่ามากส์",
    legalName: "Alongkorn Yomkerd",
    legalNameThai: "อลงกรณ์ ยมเกิด",
    role: "Technical SEO Specialist",
    jobTitle: "Technical SEO Specialist & Web Architect",
    signature: "นายเอ็มซ่ามากส์",
    avatar: "/images/avatar.webp",
    email: "me@aemdevweb.com",
    bioUrl: "/about",
    googleMerchantId: "8653147979146207424",
  },

  // [07. CONTACT & ACCESS]
  contact: {
    email: "me@aemdevweb.com",
    phone: "099-032-2175",
    displayPhone: "099 032 2175 (สายด่วนปรึกษาช่างเอ็ม)",
    address: "กำแพงเพชร, ประเทศไทย (ให้บริการทั่วประเทศ)",
    streetAddress: "ตำบลในเมือง อำเภอเมืองกำแพงเพชร",
    postalCode: "62000",
    workHours: "จันทร์ - ศุกร์, 09:00 - 18:00 (ตอบแชทไวตลอดวัน)",
  },

  // [08. STRATEGIC LINKS]
  links: {
    line: "https://lin.ee/kVRNkIy",
    lineId: "@127cnhtn",
    messenger: "https://m.me/aemdevweb",
    facebook: "https://facebook.com/aemdevweb",
    github: "https://github.com/aemdevweb",
    googleMaps: "https://share.google/MMWnXPv3evv4Qd8aC",
    googleReview: "https://search.google.com/local/writereview?placeid=ChIJ0S9uG79lHTERERERERERERE",
  },

  // [09. BUSINESS METRICS]
  business: {
    location: "กำแพงเพชร",
    region: "Northern Thailand (ภาคเหนือ)",
    industry: "Web Infrastructure & Technical SEO",
    roiFocus: true,
    established: "2026",
    // [UPDATE]: เพิ่มสถานะโหนดเพื่อให้ LayoutEngine แสดงผลถูกต้อง
    status: "Stable",
    ids: {
      businessProfileId: "17539943195708104348",
      storeCode: "01162024004001766449",
    },
  },

  // [10. ENGINE VERIFICATION]
  verification: {
    google: "HmlcGbJ8eKWuc1QN_UUpBQ",
  },
} as const;

export type GlobalConfig = typeof SITE_CONFIG;

```

---

## DIRECTORY INFRASTRUCTURE
```text
[3.4K 2026-02-10 23:14]  .
├── [9.5K 2026-02-10 20:48]  AEMDEVWEB-STRUCTURE.txt
├── [ 12K 2026-02-10 07:08]  DEV.md
├── [ 66K 2026-02-10 23:14]  README.md
├── [ 744 2026-02-10 18:43]  a.sh
├── [3.4K 2026-02-10 07:08]  app
│   ├── [3.4K 2026-02-10 07:08]  (routes)
│   │   ├── [3.4K 2026-02-10 07:08]  areas
│   │   │   ├── [3.4K 2026-02-10 07:08]  [slug]
│   │   │   │   └── [5.7K 2026-02-10 21:48]  page.tsx
│   │   │   └── [6.6K 2026-02-10 07:08]  page.tsx
│   │   ├── [3.4K 2026-02-10 07:08]  blog
│   │   │   ├── [3.4K 2026-02-10 07:08]  [slug]
│   │   │   │   └── [5.6K 2026-02-10 07:08]  page.tsx
│   │   │   └── [4.7K 2026-02-10 07:08]  page.tsx
│   │   ├── [3.4K 2026-02-10 07:08]  case-studies
│   │   │   ├── [3.4K 2026-02-10 07:08]  [slug]
│   │   │   │   └── [6.0K 2026-02-10 07:08]  page.tsx
│   │   │   └── [3.1K 2026-02-10 07:08]  page.tsx
│   │   ├── [3.6K 2026-02-10 07:08]  layout.tsx
│   │   └── [3.4K 2026-02-10 07:08]  services
│   │       ├── [3.4K 2026-02-10 07:08]  [slug]
│   │       │   └── [4.6K 2026-02-10 21:48]  page.tsx
│   │       └── [8.0K 2026-02-10 07:08]  page.tsx
│   ├── [3.4K 2026-02-10 07:08]  about
│   │   └── [ 12K 2026-02-10 21:48]  page.tsx
│   ├── [5.6K 2026-02-10 21:48]  globals.css
│   ├── [5.5K 2026-02-10 21:48]  layout.tsx
│   ├── [4.3K 2026-02-10 07:08]  loading.tsx
│   ├── [1.4K 2026-02-10 07:08]  manifest.ts
│   ├── [5.6K 2026-02-10 07:08]  not-found.tsx
│   ├── [7.7K 2026-02-10 21:48]  page.tsx
│   ├── [3.4K 2026-02-10 07:08]  privacy
│   │   └── [ 11K 2026-02-10 07:08]  page.tsx
│   ├── [1.5K 2026-02-10 21:48]  robots.ts
│   ├── [2.7K 2026-02-10 21:48]  sitemap.ts
│   ├── [3.4K 2026-02-10 07:08]  status
│   │   └── [ 12K 2026-02-10 07:08]  page.tsx
│   └── [3.4K 2026-02-10 07:08]  terms
│       └── [ 11K 2026-02-10 07:08]  page.tsx
├── [3.4K 2026-02-09 08:53]  components
│   ├── [3.4K 2026-02-07 19:25]  features
│   │   ├── [3.4K 2026-02-10 07:08]  areas
│   │   │   └── [6.5K 2026-02-10 21:48]  AreaCard.tsx
│   │   ├── [3.4K 2026-02-10 07:08]  blog
│   │   │   └── [5.3K 2026-02-10 21:48]  BlogCard.tsx
│   │   ├── [3.4K 2026-02-10 07:08]  case-studies
│   │   │   └── [6.4K 2026-02-10 21:48]  CaseStudyCard.tsx
│   │   ├── [3.4K 2026-02-10 07:08]  landing
│   │   │   ├── [6.6K 2026-02-10 21:48]  Hero.tsx
│   │   │   ├── [8.0K 2026-02-10 07:08]  PricingSection.tsx
│   │   │   └── [9.2K 2026-02-10 21:48]  WorkProcess.tsx
│   │   └── [3.4K 2026-02-10 07:08]  services
│   │       ├── [7.1K 2026-02-10 21:48]  ServiceCard.tsx
│   │       └── [2.8K 2026-02-10 07:08]  ServiceListingHub.tsx
│   ├── [3.4K 2026-02-10 07:08]  layout
│   │   ├── [9.9K 2026-02-10 21:48]  Footer.tsx
│   │   ├── [ 11K 2026-02-10 23:01]  Navbar.tsx
│   │   ├── [2.2K 2026-02-10 07:08]  PageTransition.tsx
│   │   └── [2.0K 2026-02-10 07:08]  TopLoader.tsx
│   ├── [3.4K 2026-02-10 07:08]  providers
│   │   └── [1.8K 2026-02-10 07:08]  theme-provider.tsx
│   ├── [3.4K 2026-02-10 07:08]  seo
│   │   └── [1.3K 2026-02-10 21:48]  JsonLd.tsx
│   ├── [3.4K 2026-02-10 07:08]  shared
│   │   ├── [6.5K 2026-02-10 07:08]  ConversionCTA.tsx
│   │   ├── [6.2K 2026-02-10 07:08]  ImpactStats.tsx
│   │   ├── [4.2K 2026-02-10 07:08]  LineStickyButton.tsx
│   │   └── [5.6K 2026-02-10 07:08]  TrustBadge.tsx
│   ├── [3.4K 2026-02-10 07:08]  templates
│   │   ├── [3.4K 2026-02-10 07:08]  bio
│   │   │   ├── [9.3K 2026-02-10 21:48]  Index.tsx
│   │   │   └── [2.3K 2026-02-10 20:55]  Schema.ts
│   │   ├── [3.4K 2026-02-10 07:08]  catalog
│   │   │   ├── [6.9K 2026-02-10 21:33]  Index.tsx
│   │   │   └── [2.5K 2026-02-10 20:56]  Schema.ts
│   │   ├── [3.4K 2026-02-10 07:08]  corporate
│   │   │   ├── [9.9K 2026-02-10 20:53]  Index.tsx
│   │   │   └── [3.7K 2026-02-10 20:53]  Schema.ts
│   │   ├── [3.4K 2026-02-10 07:08]  hotelresort
│   │   │   ├── [7.1K 2026-02-10 21:48]  Index.tsx
│   │   │   └── [1.9K 2026-02-10 20:56]  Schema.ts
│   │   ├── [3.4K 2026-02-10 07:08]  new-service-name
│   │   │   ├── [2.9K 2026-02-10 20:52]  Schema.ts
│   │   │   └── [9.5K 2026-02-10 21:48]  index.tsx
│   │   ├── [3.4K 2026-02-10 07:08]  salepage
│   │   │   ├── [8.5K 2026-02-10 20:59]  Index.tsx
│   │   │   └── [2.3K 2026-02-10 20:59]  Schema.ts
│   │   ├── [3.4K 2026-02-10 07:08]  sections
│   │   │   ├── [3.0K 2026-02-10 18:41]  DynamicFAQ.tsx
│   │   │   ├── [4.0K 2026-02-10 18:42]  FeatureGrid.tsx
│   │   │   ├── [5.8K 2026-02-10 18:41]  HeroEngine.tsx
│   │   │   └── [3.8K 2026-02-10 21:48]  LayoutEngine.tsx
│   │   └── [3.4K 2026-02-10 07:08]  seo_agency
│   │       ├── [1.9K 2026-02-10 20:59]  Schema.ts
│   │       └── [6.7K 2026-02-10 20:59]  index.tsx
│   └── [3.4K 2026-02-10 07:08]  ui
│       ├── [3.2K 2026-02-10 21:48]  AmbientBackground.tsx
│       ├── [1.5K 2026-02-10 07:08]  Callout.tsx
│       ├── [4.3K 2026-02-10 07:08]  IconRenderer.tsx
│       ├── [3.0K 2026-02-10 21:48]  SkeletonCard.tsx
│       ├── [3.2K 2026-02-10 07:08]  ThemeToggle.tsx
│       ├── [2.1K 2026-02-10 07:08]  accordion.tsx
│       ├── [4.2K 2026-02-10 07:08]  button.tsx
│       ├── [1.3K 2026-02-10 07:08]  skeleton-grid.tsx
│       ├── [ 894 2026-02-10 07:08]  skeleton.tsx
│       └── [3.3K 2026-02-10 07:08]  sonner.tsx
├── [ 425 2026-02-10 07:08]  components.json
├── [3.4K 2026-02-10 23:14]  config
├── [3.4K 2026-02-10 07:08]  constants
│   ├── [ 29K 2026-02-10 21:48]  area-nodes.ts
│   ├── [ 19K 2026-02-10 21:48]  master-registry.ts
│   ├── [2.4K 2026-02-10 21:05]  navigation.ts
│   └── [4.5K 2026-02-10 18:39]  site-config.ts
├── [3.4K 2026-02-04 00:37]  content
│   ├── [3.4K 2026-02-10 22:45]  blog
│   │   ├── [ 11K 2026-02-10 22:53]  5-points-killing-sales.mdx
│   │   ├── [ 10K 2026-02-10 22:43]  advanced-schema-markup.mdx
│   │   ├── [9.2K 2026-02-10 22:54]  case-study-unlink-th.mdx
│   │   ├── [8.5K 2026-02-10 22:56]  copywriting-secrets.mdx
│   │   ├── [9.9K 2026-02-10 22:42]  core-web-vitals-speed.mdx
│   │   ├── [8.7K 2026-02-10 07:08]  ecommerce-conversion-seo.mdx
│   │   ├── [9.4K 2026-02-10 23:06]  facebook-ads-vs-website.mdx
│   │   ├── [ 10K 2026-02-10 22:59]  lower-north-digital-transformation.mdx
│   │   ├── [ 16K 2026-02-10 22:39]  seo-2026-strategy.mdx
│   │   └── [9.1K 2026-02-10 23:04]  technical-audit-protocol.mdx
│   └── [3.4K 2026-02-10 07:08]  case-studies
│       ├── [ 10K 2026-02-10 07:08]  case-study-industrial-catalog.mdx
│       └── [9.7K 2026-02-10 07:08]  unlink-reputation-management-success.mdx
├── [2.1K 2026-02-10 07:08]  eslint.config.mjs
├── [3.4K 2026-02-07 19:29]  hooks
├── [ 239 2026-02-10 07:08]  knip.json
├── [3.4K 2026-02-10 07:08]  lib
│   ├── [5.9K 2026-02-10 21:48]  cms.ts
│   ├── [5.4K 2026-02-10 21:48]  schema.ts
│   ├── [2.3K 2026-02-10 21:48]  seo-utils.ts
│   └── [3.9K 2026-02-10 21:48]  utils.ts
├── [4.6K 2026-02-10 07:08]  mdx-components.tsx
├── [ 247 2026-02-10 23:12]  next-env.d.ts
├── [2.2K 2026-02-10 22:50]  next.config.ts
├── [2.4K 2026-02-10 18:58]  package.json
├── [238K 2026-02-10 21:48]  pnpm-lock.yaml
├── [  51 2026-02-10 07:08]  pnpm-workspace.yaml
├── [1.1K 2026-02-10 07:08]  postcss.config.mjs
├── [3.4K 2026-02-10 21:37]  public
│   └── [3.4K 2026-02-10 21:37]  images
│       ├── [3.4K 2026-02-10 07:08]  areas
│       ├── [3.4K 2026-02-10 07:08]  blog
│       ├── [3.4K 2026-02-10 21:37]  case-studies
│       ├── [3.4K 2026-02-08 22:09]  expert
│       ├── [3.4K 2026-02-10 07:08]  seo
│       ├── [3.4K 2026-02-10 07:08]  service
│       ├── [3.4K 2026-02-10 07:08]  shared
│       ├── [3.4K 2026-02-10 07:08]  templates
│       │   ├── [3.4K 2026-02-10 07:08]  corporate-pro
│       │   ├── [3.4K 2026-02-10 07:08]  event-magic
│       │   ├── [3.4K 2026-02-10 07:08]  facebook-ads-expert
│       │   ├── [3.4K 2026-02-10 07:08]  hotel-resort
│       │   ├── [3.4K 2026-02-10 07:08]  local-service
│       │   ├── [3.4K 2026-02-10 07:08]  personal-bio
│       │   ├── [3.4K 2026-02-10 07:08]  restaurant-cafe
│       │   ├── [3.4K 2026-02-10 07:08]  salepage-single
│       │   ├── [3.4K 2026-02-10 07:08]  seo-agency
│       │   ├── [3.4K 2026-02-10 07:08]  shopmasterpro
│       │   ├── [3.4K 2026-02-10 07:08]  starter-landing
│       │   └── [3.4K 2026-02-10 07:08]  webrental
│       └── [3.4K 2026-02-08 22:09]  ui
├── [3.4K 2026-02-10 07:08]  scripts
│   ├── [1.2K 2026-02-10 07:08]  check-system.sh
│   ├── [1.2K 2026-02-10 07:08]  clean-dev.sh
│   ├── [2.0K 2026-02-10 07:08]  cleanup-images.sh
│   ├── [3.4K 2026-02-10 07:08]  dev
│   │   ├── [1.2K 2026-02-10 07:08]  clean-project.sh
│   │   ├── [ 937 2026-02-10 07:08]  knip-check.sh
│   │   └── [5.1K 2026-02-10 07:08]  pre-deploy-check.sh
│   └── [2.2K 2026-02-10 21:42]  generate_docs.sh
├── [5.7K 2026-02-10 21:52]  structure.txt
├── [ 693 2026-02-10 07:08]  tsconfig.json
├── [178K 2026-02-10 23:10]  tsconfig.tsbuildinfo
├── [3.4K 2026-02-10 07:08]  types
│   ├── [6.7K 2026-02-10 21:48]  index.d.ts
│   ├── [ 423 2026-02-10 07:08]  mdx.d.ts
│   └── [3.0K 2026-02-10 07:08]  template-props.ts
└── [2.5K 2026-02-10 22:47]  vercel.json

69 directories, 115 files
```

/**
 * [SYSTEM CORE]: NEXT.JS HYBRID CONFIG v17.5.10 (IMAGE_PATCH)
 * [STRATEGY]: Whitelist Image Qualities | Resource Resiliency | Termux Optimized
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import nextMDX from "@next/mdx";
import type { NextConfig } from "next";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";

const isVercel = process.env.VERCEL === "1";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  compress: true,

  experimental: {
    scrollRestoration: true,
    workerThreads: false, // [STABILITY]: บังคับปิดเพื่อป้องกัน DataCloneError ใน Termux
    cpus: isVercel ? undefined : 1,

    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@radix-ui/react-slot",
      "tailwindcss-animate",
    ],
    mdxRs: isVercel,
  },

  transpilePackages: ["next-mdx-remote", "lucide-react", "tailwindcss-animate"],

  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    
    // [FIX]: เพิ่มการอนุญาตค่า Quality 85 และ 90 ตามที่ใช้ใน Components
    qualities: [75, 85, 90], 
    
    minimumCacheTTL: 86400,
    unoptimized: false,
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },

  async headers() {
    return [
      {
        source: "/_next/static/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },

  webpack: (config, { dev, isServer }) => {
    if (!isVercel) {
      config.cache = false;
    }

    if (!isServer) {
      config.optimization.usedExports = true;
    }
    
    if (dev && !isVercel) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: ["**/node_modules/**", "**/.next/**", "**/.git/**"],
      };
    }

    return config;
  },
};

export default withMDX(nextConfig);

{
  "version": 2,
  "framework": "nextjs",
  "installCommand": "pnpm install",
  "buildCommand": "pnpm build",
  "cleanUrls": true,
  "trailingSlash": false,
  "images": {
    "sizes": [256, 384, 640, 750, 828, 1080, 1200, 1920, 2048],
    "minimumCacheTTL": 86400,
    "formats": ["image/avif", "image/webp"]
  },
  "redirects": [
    {
      "source": "/services/corporate_lite",
      "destination": "/services/corporate",
      "permanent": true
    },
    {
      "source": "/services/corporate_pro",
      "destination": "/services/corporate",
      "permanent": true
    },
    {
      "source": "/templates/event_magic",
      "destination": "/services/corporate",
      "permanent": true
    },
    {
      "source": "/templates/booking/hotel-resort-node",
      "destination": "/services/hotelresort",
      "permanent": true
    },
    {
      "source": "/templates/local_service",
      "destination": "/services/new-service-name",
      "permanent": true
    },
    {
      "source": "/templates/new_service_name",
      "destination": "/services/new-service-name",
      "permanent": true
    },
    /* --- [STRATEGIC REDIRECTS: BLOG CONSOLIDATION] --- */
    {
      "source": "/blog/technical-seo-guide",
      "destination": "/blog/seo-2026-strategy",
      "permanent": true
    },
    {
      "source": "/seo/technical-seo-guide",
      "destination": "/blog/seo-2026-strategy",
      "permanent": true
    },
    /* --- [SEO LEGACY PATHS] --- */
    {
      "source": "/seo/core-web-vitals-speed",
      "destination": "/blog/core-web-vitals-speed",
      "permanent": true
    },
    {
      "source": "/seo/advanced-schema-markup",
      "destination": "/blog/advanced-schema-markup",
      "permanent": true
    },
    {
      "source": "/seo/(.*)",
      "destination": "/blog/$1",
      "permanent": true
    },
    {
      "source": "/old-service-path",
      "destination": "/services",
      "permanent": true
    }
  ],
  "headers": [
    {
      "source": "/_next/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains; preload"
        }
      ]
    }
  ]
}

___

{
  "name": "aemdevweb.com",
  "version": "7.2.99",
  "private": true,
  "author": "AEMDEVWEB (Technical Infrastructure Specialist)",
  "description": "High-Performance Web Infrastructure & Technical SEO Specialist Hub",
  "engines": {
    "node": ">=22.0.0",
    "pnpm": ">=10.0.0"
  },
  "scripts": {
    "dev": "WATCHPACK_POLLING=true next dev --webpack",
    "type-check": "tsc --noEmit",
    "lint": "eslint .",
    "format": "prettier --write .",
    "fix": "pnpm format && pnpm lint --fix",
    "build": "next build --webpack",
    "start": "next start",
    "knip": "knip --cache --no-exit-code",
    "clean": "rm -rf .next node_modules pnpm-lock.yaml && pnpm install"
  },
  "dependencies": {
    "@img/sharp-wasm32": "^0.34.5",
    "@mdx-js/loader": "^3.1.1",
    "@mdx-js/react": "^3.1.1",
    "@next/mdx": "16.1.6",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-slot": "^1.2.4",
    "@vercel/speed-insights": "^1.3.1",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "framer-motion": "^12.34.0",
    "gray-matter": "^4.0.3",
    "lucide-react": "^0.474.0",
    "next": "16.1.6",
    "next-mdx-remote": "^5.0.0",
    "next-themes": "^0.4.6",
    "nextjs-toploader": "^3.9.17",
    "react": "19.0.0",
    "react-dom": "19.0.0",
    "remark-frontmatter": "^5.0.0",
    "remark-gfm": "^4.0.1",
    "remark-unwrap-images": "^5.0.0",
    "sharp": "^0.34.5",
    "sonner": "^1.7.4",
    "tailwind-merge": "^3.4.0",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.2",
    "@next/eslint-plugin-next": "16.1.6",
    "@swc/helpers": "^0.5.18",
    "@tailwindcss/postcss": "^4.1.18",
    "@types/mdx": "^2.0.13",
    "@types/node": "22.13.1",
    "@types/react": "19.0.8",
    "@types/react-dom": "19.0.3",
    "autoprefixer": "^10.4.24",
    "eslint": "9.19.0",
    "eslint-plugin-tailwindcss": "^3.18.2",
    "eslint-plugin-unused-imports": "^4.4.1",
    "knip": "^5.83.1",
    "postcss": "^8.5.6",
    "prettier": "^3.8.1",
    "prettier-plugin-tailwindcss": "^0.7.2",
    "tailwindcss": "^4.1.18",
    "typescript": "^5.9.3",
    "typescript-eslint": "^8.54.0",
    "vercel": "^50.13.2"
  },
  "pnpm": {
    "shamefully-hoist": true,
    "overrides": {
      "react": "19.0.0",
      "react-dom": "19.0.0",
      "eslint-plugin-tailwindcss>tailwindcss": "$tailwindcss"
    },
    "onlyBuiltDependencies": [
      "esbuild",
      "sharp",
      "unrs-resolver"
    ]
  }
}
___
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    },
    "baseUrl": "."
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    "types/**/*.d.ts",
    ".next/dev/types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}


___
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}


__

{
  "$schema": "https://unpkg.com/knip@5/schema.json",
  "next": {
    "entry": [
      "next.config.ts",
      "app/**/*.{ts,tsx}",
      "components/templates/**/Index.tsx",
      "lib/cms.ts"
    ]
  },
  "project": ["**/*.{ts,tsx}"]
}


__