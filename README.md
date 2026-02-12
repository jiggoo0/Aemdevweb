---
domain: aemdevweb.com
status: strictly-enforced
last_audit: 2026-02-12 17:40:40
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
 * [SYSTEM CORE]: GLOBAL_TYPE_DEFINITIONS v17.9.9 (STABILIZED_FINAL)
 * [STRATEGY]: Strict Union Types | Centralized Definitions | Template Bridge
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { ReactNode, ComponentType, CSSProperties } from "react";

// =========================================
// [01] UTILITY & NEXT.JS 16 ADAPTERS
// =========================================

/** [ADAPTER]: รองรับ Next.js 15/16 ที่ Params ต้องเป็น Promise */
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

/** [STRICT]: ไอคอนต้องตรงกับ Registry ใน IconRenderer เท่านั้น */
export type IconName = string;

/**
 * [STRICT]: Centralized Template Slugs
 * กำหนดค่าที่อนุญาตเพื่อให้ระบบ Routing และ Template Mapping ทำงานได้แม่นยำ
 */
export type TemplateSlug =
  | "corporate"
  | "salepage"
  | "local"
  | "local-authority"
  | "catalog"
  | "bio"
  | "hotelresort"
  | "seo-agency";

// =========================================
// [02] SITE CONFIGURATION & NAVIGATION
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
// [03] SERVICE REGISTRY & TEMPLATE DATA
// =========================================

export type ServiceCategory = "landing" | "business" | "ecommerce" | "personal";

export interface ServiceFaq {
  readonly question: string;
  readonly answer: string;
}

export interface ServiceFeature {
  readonly title: string;
  readonly description: string;
  readonly icon: IconName;
}

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

export interface ThemeConfig {
  readonly primary: string;
  readonly secondary?: string;
  readonly background?: string;
  readonly accent?: string;
  readonly gradient?: string;
}

/**
 * [CORE_MODEL]: TemplateMasterData
 * เป็น Single Source of Truth สำหรับข้อมูลบริการและ P-SEO ทั้งหมด
 */
export interface TemplateMasterData {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly image?: string;
  readonly templateSlug: TemplateSlug;
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
// [05] GEO & AREA NODES (Programmatic SEO)
// =========================================

export interface LocalContext {
  readonly marketInsight: string;
  readonly technicalApproach: string;
  readonly localStrength: string;
}

export interface AreaNode {
  readonly slug: string;
  readonly province: string;
  readonly name?: string;
  readonly title: string;
  readonly description: string;
  readonly seoTitle: string;
  readonly seoDescription: string;
  readonly priority: number;
  readonly templateSlug: TemplateSlug;
  readonly districts: readonly string[];
  readonly keywords: readonly string[];
  readonly heroImage: string;
  readonly longDescription?: string;
  readonly coordinates?: {
    readonly lat: number;
    readonly lng: number;
  };
  readonly localContext?: LocalContext;
}

// =========================================
// [06] ASSET & MEDIA INFRASTRUCTURE
// =========================================

export interface ImageBlurNode {
  readonly blurDataURL: string;
  readonly width: number;
  readonly height: number;
}

export type ImageBlurRegistry = Record<string, ImageBlurNode>;

// =========================================
// [07] TEMPLATE BRIDGE (RE-EXPORTS)
// =========================================

/** * [STRATEGIC]: เชื่อมโยง Interface จากไฟล์เฉพาะทาง
 * เพื่อแก้ปัญหา TS2305 และทำให้การ Import สั้นลงทั่วทั้งโปรเจกต์
 */
export * from "./template-props";

/** * [ALIAS]: เพื่อความสะดวกในการเรียกใช้งานในส่วนหน้าบ้าน (Templates)
 */
export type {
  UniversalTemplateProps,
  BaseTemplateProps,
  StickyBuyButtonProps,
} from "./template-props";

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
 * [SYSTEM CORE]: TEMPLATE_PROPS_ENGINE v17.9.9 (STABILIZED_FINAL)
 * [STRATEGY]: Decoupled UI Logic | Universal Adapter Pattern | Type-Safe Bridge
 */

import type { IconName, ServiceFeature, ServiceFaq } from "./index";

// =========================================
// [01] UI ACTION SCHEMAS
// =========================================

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
 * [STRATEGIC]: Bridge Interface สำหรับ Data Normalization
 * [FIXED]: เพิ่ม templateSlug และ category เพื่อให้รองรับ Schema Engine (TS2345)
 */
export interface UniversalTemplateProps {
  // --- Core Identity ---
  readonly id: string;
  readonly templateSlug: string; // [REQUIRED]: สำหรับการทำ SEO & Routing
  readonly category: string; // [REQUIRED]: สำหรับ Schema categorization
  readonly title: string; // เปลี่ยนเป็น string เพื่อความเสถียรใน Metadata
  readonly description: string;
  readonly image?: string; // [SYNC]: ใช้ image แทน heroImage เพื่อความเป็นเอกภาพ

  // --- Commercial & Metadata ---
  readonly price?: string;
  readonly priceValue?: number;
  readonly unit?: string;
  readonly currency?: string;

  // --- Data Clusters (Normalized) ---
  readonly benefits?: readonly string[];
  readonly coreFeatures?: readonly ServiceFeature[]; // [SYNC]: ชื่อเดียวกับ TemplateMasterData
  readonly faqs?: readonly ServiceFaq[];
  readonly keywords?: readonly string[];

  // --- Strategic UI Elements ---
  readonly clientTrust?: string;
  readonly primaryAction?: TemplateAction;
  readonly secondaryAction?: TemplateAction;

  // --- Visual Metadata ---
  readonly theme?: {
    readonly primary?: string;
    readonly secondary?: string;
    readonly background?: string;
    readonly gradient?: string;
  };
}

// =========================================
// [03] COMPONENT PROPS (STRICT TYPING)
// =========================================

export interface BaseTemplateProps {
  readonly data: UniversalTemplateProps;
  readonly className?: string;
}

/**
 * [FIXED]: เพิ่ม StickyBuyButtonProps เพื่อแก้ปัญหา TS2322 ใน SalePage
 */
export interface StickyBuyButtonProps {
  readonly href: string;
  readonly label?: string;
}

export interface CatalogTemplateProps extends BaseTemplateProps {
  readonly displayMode?: "grid" | "list";
  readonly items?: readonly {
    readonly name: string;
    readonly description: string;
    readonly image?: string;
    readonly price?: string;
  }[];
}

export interface BioTemplateProps extends BaseTemplateProps {
  readonly socialLinks?: readonly {
    readonly platform: string;
    readonly url: string;
    readonly icon: IconName;
  }[];
}

```

---

## CONSTANTS REGISTRY
### CONFIG: area-nodes.ts
```typescript
/**
 * [DATA_NODE]: AREA_NODES_DATA v17.9.5 (STABILIZED)
 * [STRATEGY]: Hyper-Local Authority | Semantic Entity Injection | Unique Value Proposition
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { AreaNode } from "@/types";

/**
 * @description คลังข้อมูลพิกัดยุทธศาสตร์ที่ผ่านการปรับปรุงเนื้อหาเฉพาะตัว (Unique Context)
 * เน้นการใส่ Entity ท้องถิ่น (Local Entities) และกำหนด Template Slug ให้ตรงกับจุดแข็งของพื้นที่
 * [STRICT]: ข้อมูลทั้งหมดเป็น Readonly เพื่อรักษาความเสถียรของ Data Layer
 */
export const AREA_NODES: readonly AreaNode[] = [
  // ===========================================================================
  // --- [TIER 1]: MASTER ECONOMIC HUBS (ศูนย์กลางเศรษฐกิจหลัก) ---
  // ===========================================================================
  {
    slug: "bangkok",
    province: "กรุงเทพมหานคร",
    templateSlug: "corporate",
    title: "รับทำเว็บไซต์ กรุงเทพฯ | Enterprise Web Tech & SEO Strategy",
    description:
      "บริการรีด Performance เว็บไซต์มาตรฐานองค์กรข้ามชาติ รองรับ Traffic มหาศาล ย่านสาทร-สุขุมวิท",
    longDescription:
      "กรุงเทพมหานครไม่ใช่แค่เมืองหลวง แต่คือสมรภูมิ Digital Business ที่ดุเดือดที่สุด ธุรกิจย่าน CBD ไม่ได้ต้องการแค่เว็บสวย แต่ต้องการ 'Digital Headquarters' ที่ไม่งอแง และวางโครงสร้าง Technical SEO เพื่อยึดพื้นที่หน้าแรก Google ท่ามกลางคู่แข่งระดับ Global",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ กรุงเทพฯ (Bangkok) | บริษัท SEO สาย Tech มาตรฐานสากล",
    seoDescription:
      "บริการทำเว็บไซต์เกรด Enterprise ในกรุงเทพฯ เน้นระบบ Security และ Speed Performance สำหรับองค์กรที่ต้องการรีดศักยภาพธุรกิจให้ถึงขีดสุด",
    priority: 100,
    districts: ["สาทร", "สีลม", "ทองหล่อ", "พระราม 9", "อโศก", "ปทุมวัน", "บางนา-ตราด"],
    keywords: [
      "รับทำเว็บไซต์ กรุงเทพ",
      "บริษัททำเว็บ มหาชน",
      "Web Development Bangkok",
      "Technical SEO Specialist",
      "ออกแบบเว็บไซต์ Corporate",
    ],
    heroImage: "/images/areas/bangkok-node.webp",
    coordinates: { lat: 13.7563, lng: 100.5018 },
    localContext: {
      marketInsight:
        "การแข่งขันใน BKK เน้นเรื่อง 'Trust' และ 'Speed' สูงสุด ลูกค้าตัดสินใจจาก Performance และความลื่นไหลระดับสากล",
      technicalApproach:
        "ใช้ Next.js 16 (App Router) ทำระบบ Hybrid Rendering เพื่อให้ Index ไวที่สุด และเชื่อมต่อระบบหลังบ้านองค์กรได้ไร้รอยต่อ",
      localStrength:
        "เราวางโครงสร้าง Schema Markup ระดับ Organization เจาะจงสำนักงานใหญ่ เพื่อดันอันดับให้ Google รัก",
    },
  },
  {
    slug: "chon-buri",
    province: "ชลบุรี",
    templateSlug: "corporate",
    title: "รับทำเว็บไซต์ ชลบุรี พัทยา | Industrial & EEC Web Solution",
    description: "ออกแบบเว็บไซต์โรงงาน นิคมอุตสาหกรรม และธุรกิจส่งออก ในเขตยุทธศาสตร์ EEC",
    longDescription:
      "ชลบุรีคือหัวใจของ EEC ธุรกิจที่นี่คือภาคการผลิตและ Logistics ระดับโลก เว็บไซต์ต้องทำหน้าที่เป็น 'Virtual Factory Tour' ที่สร้างความเชื่อมั่นให้นักลงทุนต่างชาติ ด้วยข้อมูลทางเทคนิคที่แม่นยำและระบบ Multi-language ที่ไม่งอแง",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ ชลบุรี ศรีราชา พัทยา | ผู้เชี่ยวชาญเว็บโรงงาน EEC",
    seoDescription:
      "รับทำเว็บไซต์นิคมอุตสาหกรรมชลบุรี รองรับหลายภาษาเพื่อดีลธุรกิจระดับ B2B และ Logistics ข้ามชาติ วางโครงสร้าง SEO ให้ Google รัก",
    priority: 99,
    districts: ["เมืองพัทยา", "ศรีราชา", "แหลมฉบัง", "นิคมอมตะนคร", "บางแสน", "บ่อวิน"],
    keywords: [
      "รับทำเว็บไซต์ ชลบุรี",
      "ทำเว็บโรงงาน EEC",
      "Web Design Pattaya",
      "รับทำเว็บไซต์ ศรีราชา",
      "Industrial Website Design",
    ],
    heroImage: "/images/areas/chon-buri-node.webp",
    coordinates: { lat: 13.3611, lng: 100.9847 },
    localContext: {
      marketInsight:
        "คู่ค้าในเขตนี้คือฝ่ายจัดซื้อบริษัทข้ามชาติ เว็บไซต์ต้องค้นหาสเปคสินค้าได้ง่าย และดาวน์โหลด Catalog ได้ลื่นไหลไม่กินสเปค",
      technicalApproach:
        "ติดตั้งระบบ i18n Routing ที่แยก SEO แต่ละภาษาอย่างชัดเจน และระบบ E-Catalog ที่รองรับ SKU จำนวนมาก",
      localStrength:
        "เราเข้าใจ Supply Chain ของ EEC ช่วยให้ออกแบบ UX/UI ที่ปิดการขายธุรกิจ B2B ได้ตรงจุด",
    },
  },
  {
    slug: "chiang-mai",
    province: "เชียงใหม่",
    templateSlug: "hotelresort",
    title: "รับทำเว็บไซต์ เชียงใหม่ | Creative Web Design & Boutique Hotel",
    description:
      "ดีไซน์เว็บไซต์สะท้อนอัตลักษณ์ Lanna Contemporary สำหรับธุรกิจท่องเที่ยวและ Wellness",
    longDescription:
      "เชียงใหม่คือเมืองหลวงของ Creative Economy เว็บไซต์ต้องมี 'Storytelling' ที่แข็งแรงเพื่อดึงดูดกลุ่ม High Spending เราผสมผสานศิลปะเข้ากับเทคโนโลยีรีด Speed เพื่อให้เว็บโหลดไวแม้ภาพจะสวยระดับ Retina",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ เชียงใหม่ | ออกแบบเว็บโรงแรม Boutique และธุรกิจ Wellness",
    seoDescription:
      "รับทำเว็บไซต์เชียงใหม่ เน้นดีไซน์ระดับพรีเมียม ผสานระบบจองที่ลื่นไหล เจาะตลาดนักท่องเที่ยวทั่วโลกด้วย Technical SEO",
    priority: 98,
    districts: ["นิมมานเหมินท์", "เขตเมืองเก่า", "สันกำแพง", "แม่ริม", "หางดง", "สันทราย"],
    keywords: [
      "รับทำเว็บไซต์ เชียงใหม่",
      "Chiang Mai Web Design",
      "ทำเว็บโรงแรม Boutique",
      "SEO เชียงใหม่",
      "Digital Marketing Chiang Mai",
    ],
    heroImage: "/images/areas/chiang-mai-node.webp",
    coordinates: { lat: 18.7883, lng: 98.9853 },
    localContext: {
      marketInsight:
        "ธุรกิจในเชียงใหม่ต้องขาย 'Experience' ตั้งแต่หน้าแรก การเล่าเรื่องและการใช้ภาพความละเอียดสูงคือหัวใจ",
      technicalApproach:
        "ใช้ Next.js Image Optimization ขั้นสูง เพื่อให้แสดงผลภาพสวยโดยไม่กินสเปคเครื่องลูกค้า",
      localStrength:
        "เราเชี่ยวชาญการทำ International SEO เพื่อดักจับนักท่องเที่ยวตั้งแต่วินาทีแรกที่เริ่มค้นหาข้อมูล",
    },
  },
  {
    slug: "phuket",
    province: "ภูเก็ต",
    templateSlug: "hotelresort",
    title: "รับทำเว็บไซต์ ภูเก็ต | Luxury Real Estate & Hospitality Web",
    description: "สร้างภาพลักษณ์ World-Class ให้กับวิลล่าหรูและธุรกิจท่องเที่ยวระดับพรีเมียม",
    longDescription:
      "ภูเก็ตคือ Destination ระดับโลก ตลาด Luxury Segment ต้องการเว็บไซต์ที่มอบประสบการณ์แบบ 'Premium Touch' เราออกแบบเว็บที่สะท้อนความหรูหรา พร้อมระบบ Lead Generation เพื่อปิดการขายอสังหาฯ ราคาแพง",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ ภูเก็ต | เว็บไซต์ขายวิลล่าและโรงแรม Luxury",
    seoDescription:
      "ผู้เชี่ยวชาญทำเว็บไซต์ภูเก็ต เจาะตลาด Luxury Villa ด้วยดีไซน์ Minimal Luxury และ Technical SEO ภาษาอังกฤษ/รัสเซีย",
    priority: 97,
    districts: ["ป่าตอง", "กะรน", "ลากูน่า (เชิงทะเล)", "ราไวย์", "ไม้ขาว", "เมืองภูเก็ต"],
    keywords: [
      "รับทำเว็บไซต์ ภูเก็ต",
      "Phuket Web Design",
      "Luxury Villa Website",
      "Real Estate SEO Phuket",
      "ทำเว็บโรงแรม 5 ดาว",
    ],
    heroImage: "/images/areas/phuket-node.webp",
    coordinates: { lat: 7.8804, lng: 98.3923 },
    localContext: {
      marketInsight:
        "ลูกค้าภูเก็ตตัดสินใจด้วย 'อารมณ์' และ 'ความน่าเชื่อถือ' เว็บไซต์ต้องดูแพงและมี Social Proof ที่ชัดเจน",
      technicalApproach:
        "เน้น International SEO (Hreflang) เจาะจงกลุ่มประเทศเป้าหมาย และระบบ Virtual Tour ที่ไม่กินทรัพยากรเครื่อง",
      localStrength:
        "การทำ Local SEO ยึดพื้นที่บน Google Maps ในจุดท่องเที่ยวสำคัญ ช่วยดึง Traffic ได้มหาศาล",
    },
  },

  // ===========================================================================
  // --- [TIER 2]: REGIONAL GROWTH (หัวเมืองเศรษฐกิจภูมิภาค) ---
  // ===========================================================================
  {
    slug: "khon-kaen",
    province: "ขอนแก่น",
    templateSlug: "salepage",
    title: "รับทำเว็บไซต์ ขอนแก่น | Smart City & Medical Hub Solution",
    description: "Web Solution สำหรับคลินิกความงาม และธุรกิจ SME ในเมืองขอนแก่น",
    longDescription:
      "ขอนแก่นคือ Medical Hub ของอีสาน เรานำเสนอ Sale Page ที่เน้นการสร้าง 'Medical Trust' และระบบนัดหมายออนไลน์ที่ทันสมัย ตอบโจทย์เมือง Smart City",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ ขอนแก่น | Sale Page คลินิกและธุรกิจ SME",
    seoDescription:
      "บริการรับทำเว็บไซต์ขอนแก่น ออกแบบ Sale Page ที่เน้น Conversion และการยิงแอดให้ประหยัดค่าใช้จ่ายด้วย Quality Score ที่ดี",
    priority: 95,
    districts: ["เมืองขอนแก่น", "กังสดาล", "มข.", "บ้านไผ่", "ชุมแพ"],
    keywords: [
      "รับทำเว็บไซต์ ขอนแก่น",
      "Sale Page ขอนแก่น",
      "ทำเว็บคลินิกความงาม",
      "SEO ขอนแก่น",
      "SME Website Design",
    ],
    heroImage: "/images/areas/khon-kaen-node.webp",
    coordinates: { lat: 16.4322, lng: 102.8236 },
    localContext: {
      marketInsight:
        "กลุ่มคนรุ่นใหม่ในขอนแก่นชอบความสะดวกรวดเร็ว เว็บไซต์ต้อง Mobile-First และเชื่อมต่อระบบหลังบ้านได้ทันที",
      technicalApproach:
        "ใช้ระบบ Event Tracking เพื่อวัดผล Conversion อย่างละเอียด ช่วยให้เจ้าของธุรกิจรู้ยอดขายจริง",
      localStrength:
        "เราเข้าใจพฤติกรรมผู้บริโภคชาวอีสานสมัยใหม่ ช่วยให้การวางปุ่มปิดการขาย (CTA) มีประสิทธิภาพสูงสุด",
    },
  },
  {
    slug: "korat",
    province: "นครราชสีมา",
    templateSlug: "catalog",
    title: "รับทำเว็บไซต์ โคราช | Industrial Catalog & Construction Hub",
    description: "ระบบ E-Catalog สำหรับธุรกิจรับเหมาก่อสร้างและวัสดุอุตสาหกรรม",
    longDescription:
      "โคราชคือประตูสู่อีสาน ธุรกิจที่นี่ต้องการ 'Online Catalog' ที่จัดการ Stock สินค้าจำนวนมากได้ง่าย และรองรับระบบขอใบเสนอราคาเพื่อดึงงานโครงการใหญ่",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ โคราช (นครราชสีมา) | ทำเว็บแค็ตตาล็อกสินค้าและรับเหมา",
    seoDescription:
      "รับทำเว็บไซต์ E-Catalog ในโคราช จัดการสินค้าง่าย ระบบไม่งอแง รองรับ SEO ให้ติดหน้าแรก Google",
    priority: 94,
    districts: ["เมืองนครราชสีมา", "ปากช่อง (เขาใหญ่)", "สีคิ้ว", "วังน้ำเขียว", "จอหอ"],
    keywords: [
      "รับทำเว็บไซต์ โคราช",
      "ทำเว็บรับเหมาก่อสร้าง",
      "E-Catalog โคราช",
      "SEO นครราชสีมา",
      "เว็บขายวัสดุก่อสร้าง",
    ],
    heroImage: "/images/areas/korat-node.webp",
    coordinates: { lat: 14.9759, lng: 102.1177 },
    localContext: {
      marketInsight:
        "ลูกค้า B2B ในโคราชต้องการเห็น Spec สินค้าที่ชัดเจน และ Company Profile ที่ดูมั่นคงพร้อมรับงานใหญ่",
      technicalApproach:
        "ใช้ Database ที่ Optimized มาเพื่อการค้นหาสินค้า SKU จำนวนมากได้อย่างรวดเร็วไม่กินสเปค",
      localStrength:
        "การทำ SEO เจาะกลุ่มคำเฉพาะทางในโซนอีสาน เป็น Blue Ocean ที่เราจะช่วยให้คุณครองตลาด",
    },
  },

  // ===========================================================================
  // --- [TIER 3]: LOCAL DOMINANCE (การสร้างรากฐานธุรกิจท้องถิ่น) ---
  // ===========================================================================
  {
    slug: "nakhon-sawan",
    province: "นครสวรรค์",
    templateSlug: "local-authority",
    title: "รับทำเว็บไซต์ นครสวรรค์ | Logistics Hub & Traditional Trade",
    description: "เปลี่ยนธุรกิจกงสีสู่ออนไลน์ ยึดหัวหาดการค้าภาคเหนือตอนล่าง",
    longDescription:
      "เราช่วยยกระดับธุรกิจกงสีและร้านค้าส่งดั้งเดิมในนครสวรรค์ ให้มีตัวตนบนโลกออนไลน์ เพื่อขยายฐานลูกค้าจากหน้าร้านสู่การส่งของทั่วประเทศ",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ นครสวรรค์ | พัฒนาธุรกิจค้าส่งสู่ออนไลน์",
    seoDescription:
      "บริการทำเว็บไซต์และ Local SEO นครสวรรค์ ช่วยร้านค้าส่งสร้างฐานลูกค้าออนไลน์ แข่งกับ Modern Trade ได้อย่างยั่งยืน",
    priority: 90,
    districts: ["เมืองนครสวรรค์", "ลาดยาว", "ตาคลี", "พยุหะคีรี", "หนองสมบุญ"],
    keywords: [
      "รับทำเว็บไซต์ นครสวรรค์",
      "Local SEO นครสวรรค์",
      "ทำเว็บร้านค้าส่ง",
      "Google Maps นครสวรรค์",
    ],
    heroImage: "/images/areas/nakhon-sawan-node.webp",
    coordinates: { lat: 15.7042, lng: 100.1372 },
    localContext: {
      marketInsight:
        "ธุรกิจในนครสวรรค์มีฐานลูกค้าเดิมดีอยู่แล้ว การทำเว็บต้องเน้น 'ความน่าเชื่อถือ' และการบริการที่จริงใจ",
      technicalApproach:
        "เน้น Google Business Profile ให้คนค้นหาเจอร้าน และหน้าเว็บที่ใช้งานง่ายไม่ซับซ้อน",
      localStrength: "เราเปลี่ยนชื่อเสียงปากต่อปาก ให้กลายเป็นรีวิวดิจิทัลที่ทรงพลังบน Google Maps",
    },
  },
  {
    slug: "kamphaeng-phet",
    province: "กำแพงเพชร",
    templateSlug: "local-authority",
    title: "รับทำเว็บไซต์ กำแพงเพชร | Agri-Tech & Cultural Tourism",
    description: "ยกระดับสินค้าเกษตรแปรรูปและธุรกิจท่องเที่ยวในเมืองมรดกโลก",
    longDescription:
      "เราช่วยผู้ประกอบการ SME กำแพงเพชร สร้างเว็บไซต์ที่ยกระดับสินค้าเกษตรให้ดูพรีเมียม และเว็บท่องเที่ยวที่ดึงดูดคนให้มาสัมผัสมรดกโลก",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ กำแพงเพชร | ทำเว็บสินค้าเกษตรและ SME",
    seoDescription:
      "บริการทำเว็บไซต์ในกำแพngเพชร สำหรับ SME และเกษตรแปรรูป เพื่อสร้างมาตรฐานสินค้าสู่ตลาดสากล",
    priority: 85,
    districts: ["เมืองกำแพงเพชร", "ขาณุวรลักษบุรี", "คลองขลุง", "พรานกระต่าย"],
    keywords: [
      "รับทำเว็บไซต์ กำแพงเพชร",
      "ทำเว็บสินค้าเกษตร",
      "Web Design Kamphaeng Phet",
      "ทำเว็บ อบต",
    ],
    heroImage: "/images/areas/kamphaeng-phet-node.webp",
    coordinates: { lat: 16.4828, lng: 99.5227 },
    localContext: {
      marketInsight: "สินค้าท้องถิ่นต้องการ 'Digital Packaging' ที่สวยงามเพื่ออัปราคาขายให้สูงขึ้น",
      technicalApproach:
        "ใช้ Content Marketing เล่าเรื่องที่มาของวัตถุดิบ เพื่อสร้างมูลค่าเพิ่มให้สินค้าเกษตร",
      localStrength:
        "เราเป็นผู้เชี่ยวชาญในพื้นที่ (Based in Kamphaeng Phet) พร้อมดูแลและซัพพอร์ตธุรกิจคุณอย่างใกล้ชิด",
    },
  },
  {
    slug: "sukhothai",
    province: "สุโขทัย",
    templateSlug: "local-authority",
    title: "รับทำเว็บไซต์ สุโขทัย | Heritage Storytelling & Craftsmanship",
    description: "Digital Gallery สำหรับงานหัตถศิลป์ และธุรกิจท่องเที่ยวเชิงวัฒนธรรม",
    longDescription:
      "เว็บไซต์ที่เราสร้างคือ 'พิพิธภัณฑ์ออนไลน์' ที่บอกเล่าความประณีตของงานหัตถศิลป์สุโขทัย เพื่อสร้างมูลค่าเพิ่มจนสามารถปิดการขายในราคาสูงได้",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ สุโขทัย | เว็บไซต์ OTOP และงานหัตถศิลป์",
    seoDescription:
      "รับออกแบบเว็บไซต์สุโขทัย เน้นการเล่าเรื่องเพื่อเพิ่มมูลค่าสินค้าหัตถกรรมสู่ตลาดออนไลน์ทั่วโลก",
    priority: 84,
    districts: ["เมืองสุโขทัย", "ศรีสัชนาลัย", "กงไกรลาศ", "สวรรคโลก", "ทุ่งเสลี่ยม"],
    keywords: [
      "รับทำเว็บไซต์ สุโขทัย",
      "ทำเว็บขายเครื่องเงิน",
      "Content Marketing สุโขทัย",
      "ทำเว็บ OTOP 5 ดาว",
    ],
    heroImage: "/images/areas/sukhothai-node.webp",
    coordinates: { lat: 17.0078, lng: 99.8235 },
    localContext: {
      marketInsight:
        "ลูกค้าต้องการซื้อ 'งานศิลปะ' เว็บไซต์ต้องมีความสุนทรีย์และให้ข้อมูลเชิงลึกที่น่าเชื่อถือ",
      technicalApproach: "เน้น Typography ภาษาไทยที่สวยงามอ่านง่าย และ Layout แบบ Magazine Style",
      localStrength:
        "การผสาน SEO เข้ากับ Content วัฒนธรรม ช่วยดึง Traffic จากกลุ่มคนรักงานศิลปะได้ทั่วโลก",
    },
  },
  {
    slug: "tak",
    province: "ตาก",
    templateSlug: "corporate",
    title: "รับทำเว็บไซต์ ตาก แม่สอด | Border Trade & Logistics Gateway",
    description: "Web Platform รองรับการค้าชายแดน นำเข้า-ส่งออก และตลาดพม่า",
    longDescription:
      "แม่สอดคือประตูการค้าสำคัญ ธุรกิจที่นี่ต้องการเว็บไซต์ที่รองรับหลายภาษาเพื่อสื่อสารกับคู่ค้าข้ามพรมแดน เราพัฒนาระบบที่ช่วยให้ Logistics ดูน่าเชื่อถือที่สุด",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ ตาก แม่สอด | เว็บไซต์ชิปปิ้งและการค้าชายแดน",
    seoDescription:
      "บริการทำเว็บไซต์ตากและแม่สอด รองรับหลายภาษาสำหรับธุรกิจขนส่งและชิปปิ้ง วางโครงสร้างให้ Google รัก",
    priority: 83,
    districts: ["เมืองตาก", "แม่สอด", "แม่ระมาด", "พบพระ", "อุ้มผาง"],
    keywords: [
      "รับทำเว็บไซต์ ตาก",
      "รับทำเว็บไซต์ แม่สอด",
      "Logistics Website",
      "ทำเว็บภาษาพม่า",
      "Border Trade SEO",
    ],
    heroImage: "/images/areas/tak-node.webp",
    coordinates: { lat: 16.8831, lng: 99.1258 },
    localContext: {
      marketInsight:
        "ความน่าเชื่อถือคือหัวใจของการค้าชายแดน เว็บไซต์ต้องมีข้อมูลบริษัทที่ชัดเจนและตรวจสอบได้",
      technicalApproach:
        "โครงสร้างเว็บที่รองรับ Unicode ภาษาท้องถิ่น และหน้า Landing Page ที่เน้นการปิดการขายบริการชิปปิ้ง",
      localStrength:
        "เราเข้าใจ Flow การค้าชายแดน จึงออกแบบ Navigation ที่เน้นข้อมูลสำคัญที่คู่ค้าต้องการรู้",
    },
  },
  {
    slug: "phichit",
    province: "พิจิตร",
    templateSlug: "local-authority",
    title: "รับทำเว็บไซต์ พิจิตร | Rice Mill & Agro-Industrial Hub",
    description: "Corporate Website สร้างความน่าเชื่อถือให้โรงสีและธุรกิจการเกษตรรายใหญ่",
    longDescription:
      "พิจิตรคืออู่ข้าวอู่น้ำ ธุรกิจโรงสีต้องการเว็บไซต์ที่ดู 'มั่นคง' เพื่อสร้างความมั่นใจให้คู่ค้า เราสร้างเว็บที่โชว์ศักยภาพและมาตรฐานโรงงานของคุณ",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ พิจิตร | เว็บโรงสีข้าวและธุรกิจการเกษตร",
    seoDescription:
      "รับทำเว็บไซต์โรงสีในพิจิตร เน้นภาพลักษณ์องค์กรที่มั่นคงและระบบที่ไม่งอแง ปิดการขายได้จริง",
    priority: 82,
    districts: ["เมืองพิจิตร", "ตะพานหิน", "บางมูลนาก", "โพทะเล", "สากเหล็ก"],
    keywords: ["รับทำเว็บไซต์ พิจิตร", "ทำเว็บโรงสีข้าว", "Agri-Business Website", "SEO พิจิตร"],
    heroImage: "/images/areas/phichit-node.webp",
    coordinates: { lat: 16.4428, lng: 100.3501 },
    localContext: {
      marketInsight:
        "การมีเว็บไซต์ที่ทันสมัยช่วยสร้างความแตกต่างจากคู่แข่งในท้องถิ่นที่ยังทำธุรกิจแบบเดิม",
      technicalApproach:
        "เน้นหน้า 'เกี่ยวกับเรา' ที่โชว์มาตรฐานโรงงาน และหน้าสินค้าที่อัปเดตข้อมูลได้ง่าย",
      localStrength: "เราช่วยทำ Local SEO ให้คู่ค้าค้นหาโรงสีของคุณเจอเป็นอันดับแรกในพื้นที่",
    },
  },
  {
    slug: "uttaradit",
    province: "อุตรดิตถ์",
    templateSlug: "local-authority",
    title: "รับทำเว็บไซต์ อุตรดิตถ์ | Premium Fruit & D2C E-commerce",
    description: "ระบบสั่งจองผลไม้พรีเมียมออนไลน์ ส่งตรงจากสวนถึงมือผู้บริโภค",
    longDescription:
      "เราช่วยเกษตรกรอุตรดิตถ์ตัดวงจรพ่อค้าคนกลางด้วยระบบ D2C รองรับการจองสินค้าล่วงหน้า เพื่อกำไรที่มากขึ้นและแบรนด์ที่แข็งแรง",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ อุตรดิตถ์ | เว็บขายทุเรียนและผลไม้พรีเมียม",
    seoDescription:
      "บริการทำเว็บไซต์ E-commerce ในอุตรดิตถ์ ระบบจองสินค้าล่วงหน้าที่ใช้งานง่ายไม่กินสเปค",
    priority: 81,
    districts: ["เมืองอุตรดิตถ์", "ลับแล", "พิชัย", "น้ำปาด", "ทองแสนขัน"],
    keywords: [
      "รับทำเว็บไซต์ อุตรดิตถ์",
      "ทำเว็บขายทุเรียน",
      "ระบบจองสินค้าออนไลน์",
      "E-commerce อุตรดิตถ์",
    ],
    heroImage: "/images/areas/uttaradit-node.webp",
    coordinates: { lat: 17.6256, lng: 100.0993 },
    localContext: {
      marketInsight:
        "สินค้าพรีเมียมมี Demand สูงแต่ขาดระบบจัดการที่ดี เว็บไซต์จะช่วยลดความผิดพลาดและเพิ่มยอดขาย",
      technicalApproach:
        "ระบบตะกร้าสินค้าที่โหลดไวบนมือถือ และเชื่อมต่อระบบแจ้งเตือนออเดอร์ถึงเจ้าของสวนโดยตรง",
      localStrength:
        "การทำ SEO ด้วย Keyword เฉพาะกลุ่ม ช่วยดึงลูกค้าที่มีกำลังซื้อสูงให้เข้ามาสั่งจองสินค้า",
    },
  },
] as const;

```
### CONFIG: image-blur-data.ts
```typescript
/**
 * [SYSTEM GENERATED]: IMAGE_BLUR_REGISTRY v2026-02-12T08:30:27.861Z
 * [MANDATE]: Strictly Auto-Generated. Do not modify manually.
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */
import type { ImageBlurRegistry } from "@/types";

export const IMAGE_BLUR_DATA: ImageBlurRegistry = {
  "/images/areas/bangkok-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/areas/chiang-mai-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/areas/chon-buri-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/areas/kamphaeng-phet-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/areas/khon-kaen-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/areas/korat-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/areas/nakhon-sawan-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/areas/phichit-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/areas/phuket-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/areas/preview.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/areas/sukhothai-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/areas/tak-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/areas/uttaradit-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/avatar.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoKAAoABUB8JYgCw7ELX8pfUAAA/u3gAyQC8IMrZUbvwbvZBkMNctEdw/hhZZ/1fKU4wgAA",
    width: 554,
    height: 554,
  },
  "/images/blog/advanced-schema-markup.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO6xs/q0FAAAAA==",
    width: 1024,
    height: 768,
  },
  "/images/blog/copywriting-specialist.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO6xs/q0FAAAAA==",
    width: 1024,
    height: 768,
  },
  "/images/blog/core-web-vitals-speed.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO6xs/q0FAAAAA==",
    width: 1024,
    height: 768,
  },
  "/images/blog/default-thumb.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO6xs/q0FAAAAA==",
    width: 1024,
    height: 768,
  },
  "/images/blog/ecommerce-seo.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO6xs/q0FAAAAA==",
    width: 1024,
    height: 768,
  },
  "/images/blog/facebook-ads-vs-website.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAADwAQCdASoKAAcABUB8JZgCdADdKMSBhMAA/tBoIlOWINbqIzgFaTSLze9KjegA",
    width: 696,
    height: 495,
  },
  "/images/blog/seo-google-love.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAAAQAgCdASoKAAcABUB8JYwCdH8AFxTFBsoAAP7uOqzeUfRv1zlnG2Mg+b+uiyr/QEI8lPQxBwAAAA==",
    width: 640,
    height: 479,
  },
  "/images/blog/technical-audit-visual.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAAAQAgCdASoKAAcABUB8JYwCdH8AFxTFBsoAAP7uOqzeUfRv1zlnG2Mg+b+uiyr/QEI8lPQxBwAAAA==",
    width: 640,
    height: 479,
  },
  "/images/case-studies/industrial-catalog.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/case-studies/preview.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/case-studies/unlink-reputation.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAADwAQCdASoKAAcABUB8JZgCdADdKMSBhMAA/tBoIlOWINbqIzgFaTSLze9KjegA",
    width: 696,
    height: 495,
  },
  "/images/experts/profile-hero.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/icon-192.png": {
    blurDataURL:
      "data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAACQAQCdASoKAAoABUB8JZwAAl07E0AA/u/XSoUFR++VhoztkYS+cjLAAAA=",
    width: 192,
    height: 192,
  },
  "/images/og-default.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/og-main.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoKAAgABUB8JYwCdAELG3igAAD+5a74PF+JgX0QnqV42UZTWldO2E4QGRAVa+swAAA=",
    width: 1024,
    height: 768,
  },
  "/images/seo/advanced-schema-markup.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO6xs/q0FAAAAA==",
    width: 1024,
    height: 768,
  },
  "/images/seo/core-web-vitals-speed.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO6xs/q0FAAAAA==",
    width: 1024,
    height: 768,
  },
  "/images/seo/ecommerce-seo.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO6xs/q0FAAAAA==",
    width: 1024,
    height: 768,
  },
  "/images/seo/seo.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO6xs/q0FAAAAA==",
    width: 1024,
    height: 768,
  },
  "/images/service/catalog-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/service/corporate-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/service/hotel-resort-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/service/local-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/service/personal-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO6xs/q0FAAAAA==",
    width: 1024,
    height: 768,
  },
  "/images/service/salepage-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO6xs/q0FAAAAA==",
    width: 1024,
    height: 768,
  },
  "/images/service/seo-agency-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/shared/placeholder.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAADwAQCdASoKAAcABUB8JZgCdADdKMSBhMAA/tBoIlOWINbqIzgFaTSLze9KjegA",
    width: 696,
    height: 495,
  },
  "/images/shared/preview.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
} as const;

```
### CONFIG: master-registry.ts
```typescript
/**
 * [DATA REGISTRY]: MASTER_SERVICE_REGISTRY v17.9.2 (CONVERSION_ENGINEERED)
 * [STRATEGY]: Psychological Triggers | Engineering Trust | ROI-Centric
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { TemplateMasterData } from "@/types";

/**
 * @description คลังข้อมูลบริการหลักที่ถูก Rewrite ใหม่ด้วยภาษาเชิงวิศวกรรมและธุรกิจ (High-Value Content)
 * เน้นย้ำจุดขายเรื่อง "Technology Stack" และ "Business Outcome" เพื่อคัดกรองลูกค้าที่มีคุณภาพ
 */
export const MASTER_REGISTRY: readonly TemplateMasterData[] = [
  // ===========================================================================
  // [00. SEO AGENCY]: ความเชื่อมั่นและการเติบโต (Trust & Growth)
  // ===========================================================================
  {
    id: "AEM-SVC-SEO-07",
    title: "Technical SEO & Organic Asset",
    description:
      "เปลี่ยนเว็บไซต์ให้เป็นสินทรัพย์ดิจิทัลที่สร้างรายได้ระยะยาว ด้วยการปรับโครงสร้างวิศวกรรมเว็บ (Architecture) ให้ชนะอัลกอริทึม Google",
    image: "/images/service/seo-agency-node.webp",
    templateSlug: "seo-agency",
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
      "Asset Building: ลงทุนสร้าง Traffic ที่เป็นของคุณเอง ไม่ต้องจ่ายค่าแอดตลอดชีวิต",
      "Technical Hygiene: แก้ไข Core Web Vitals และ Structure Data ให้ Google รักเว็บคุณ",
      "Revenue Focus: โฟกัส Keyword ที่มีโอกาสปิดการขาย (Commercial Intent) ไม่ใช่แค่ยอดวิว",
    ],
    coreFeatures: [
      {
        title: "Code-Level Audit",
        description: "รื้อโครงสร้าง HTML/JS เพื่อกำจัด Code ขยะที่ฉุดคะแนน SEO",
        icon: "Code2",
      },
      {
        title: "Semantic Strategy",
        description: "วางโครงสร้างเนื้อหาแบบ Topic Cluster ให้ Google มองคุณเป็นผู้เชี่ยวชาญ",
        icon: "Network",
      },
      {
        title: "ROI Reporting",
        description: "รายงานผลแบบผู้บริหาร ดูยอดคนเข้าที่แปลงเป็นยอดเงินจริง",
        icon: "TrendingUp",
      },
    ],
    faqs: [
      {
        question: "ทำไมราคาสูงกว่าเจ้าอื่น?",
        answer:
          "เพราะเราทำ Technical SEO (แก้โค้ด) ไม่ใช่แค่เขียนบทความครับ การแก้โครงสร้างเว็บให้ถูกต้องถาวรคืองานวิศวกรรมที่ใช้ความเชี่ยวชาญสูง",
      },
      {
        question: "การันตีอันดับไหม?",
        answer:
          "ไม่มีใครสั่ง Google ได้ครับ แต่เราการันตีว่าเว็บไซต์ของคุณจะ 'สมบูรณ์แบบ' ตามกฎของ Google ซึ่งนำไปสู่อันดับที่ดีขึ้นอย่างยั่งยืนแน่นอน",
      },
    ],
    keywords: [
      "Technical SEO Specialist",
      "รับทำ SEO สายขาว",
      "ปรับปรุง Core Web Vitals",
      "SEO สำหรับธุรกิจ B2B",
    ],
    priority: 0,
    isFeatured: true,
  },

  // ===========================================================================
  // [01. SALE PAGE]: การกระตุ้นและปิดการขาย (Action & Urgency)
  // ===========================================================================
  {
    id: "AEM-SVC-SP-01",
    title: "Ad-Optimized Sale Page",
    description:
      "เครื่องมือปิดการขายที่ออกแบบมาเพื่อ 'ยิงแอด' โดยเฉพาะ โหลดไวระดับมิลลิวินาที ลดต้นทุนค่าโฆษณา (CPC) เพิ่ม Quality Score",
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
      "Zero-Friction: ตัดสิ่งรบกวนออก เหลือแค่เนื้อหาที่โน้มน้าวให้ 'กดซื้อ'",
      "Platform Friendly: โครงสร้างเป็นมิตรกับ Bot ของ Facebook/TikTok แอดไม่อนุมัติยาก",
      "Psychology UX: วาง Layout ตามหลักจิตวิทยา AIDA (Attention, Interest, Desire, Action)",
    ],
    coreFeatures: [
      {
        title: "Instant Mobile Load",
        description: "เทคโนโลยี Static Site (SSG) เปิดปุ๊บติดปั๊บ ลูกค้าไม่กดหนี",
        icon: "Smartphone",
      },
      {
        title: "Conversion Pixel",
        description: "ติดตั้ง Event Tracking พร้อมเก็บ Data ลูกค้าทุกพฤติกรรม",
        icon: "Target",
      },
      {
        title: "Sticky CTA",
        description: "ปุ่มสั่งซื้อ/ติดต่อที่ตามติดลูกค้าไปทุกที่บนหน้าจอ",
        icon: "MousePointerClick",
      },
    ],
    faqs: [
      {
        question: "ต่างจาก Linktree ไหม?",
        answer:
          "คนละเรื่องครับ Linktree คือทางผ่าน แต่ Sale Page คือ 'พนักงานขาย' ที่ปิดการขายได้ในหน้าเดียว และเก็บ Data ได้ละเอียดกว่ามาก",
      },
    ],
    keywords: [
      "รับทำ Sale Page",
      "Landing Page ยิงแอด",
      "หน้าปิดการขาย TikTok",
      "เว็บหน้าเดียว Conversion สูง",
    ],
    priority: 1,
    isPopular: true,
  },

  // ===========================================================================
  // [02. CORPORATE]: ความเป็นมืออาชีพและความมั่นคง (Stability & Logic)
  // ===========================================================================
  {
    id: "AEM-SVC-CP-03",
    title: "Corporate Identity Platform",
    description:
      "สถาปัตยกรรมเว็บไซต์สำหรับองค์กรที่ต้องการ 'Trust' ระดับสูงสุด รองรับ PDPA, Security มาตรฐานสากล และระบบ Scalability",
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
      "Brand Guardian: ดีไซน์ที่ควบคุม CI (Corporate Identity) อย่างเคร่งครัด",
      "Security First: ระบบความปลอดภัยระดับ Enterprise ป้องกันการ Hack และ Data Leak",
      "Investor Ready: โครงสร้างข้อมูลที่พร้อมสำหรับการตรวจสอบ (Audit) และนักลงทุน",
    ],
    coreFeatures: [
      {
        title: "Enterprise Stack",
        description: "พัฒนาด้วย Next.js (React) มาตรฐานเดียวกับ Tech Company ระดับโลก",
        icon: "ShieldCheck",
      },
      {
        title: "Dynamic News/Jobs",
        description: "ระบบประกาศข่าวและรับสมัครงานที่ฝ่าย HR ใช้งานเองได้ง่าย",
        icon: "Newspaper",
      },
      {
        title: "Organization Schema",
        description: "บอก Google ว่าบริษัทคุณคือใคร ตั้งอยู่ที่ไหน อย่างเป็นทางการ",
        icon: "Building2",
      },
    ],
    faqs: [
      {
        question: "รองรับจำนวนคนเข้าได้แค่ไหน?",
        answer:
          "ไม่จำกัดครับ ระบบเราใช้ Serverless Architecture ที่ขยายตัวตาม Traffic อัตโนมัติ (Auto-scaling)",
      },
    ],
    keywords: [
      "ทำเว็บองค์กร มหาชน",
      "เว็บไซต์บริษัท Corporate",
      "Web Design for Business",
      "รับทำเว็บ Next.js",
    ],
    priority: 2,
    isFeatured: true,
  },

  // ===========================================================================
  // [03. LOCAL AUTHORITY]: ยกระดับธุรกิจรายพื้นที่ (Geographic Dominance)
  // ===========================================================================
  {
    id: "AEM-SVC-LS-10",
    title: "Local Domination Engine",
    description:
      "ยึดครองพื้นที่การค้นหาในจังหวัดของคุณ ด้วยกลยุทธ์ Hyper-Local SEO ที่เชื่อมต่อ Website เข้ากับ Google Maps",
    image: "/images/service/local-node.webp",
    templateSlug: "local-authority",
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
      "Maps Ranking: ดันหมุดร้านค้าให้ติด 3 อันดับแรก (Local Pack) เมื่อลูกค้าค้นหา",
      "Walk-in Traffic: เปลี่ยนยอดค้นหา 'ร้านใกล้ฉัน' ให้เป็นลูกค้าที่เดินเข้าร้านจริง",
      "Reputation: ระบบจัดการรีวิวช่วยสร้างความน่าเชื่อถือเหนือคู่แข่งในพื้นที่",
    ],
    coreFeatures: [
      {
        title: "Entity Sync",
        description: "เชื่อมโยงข้อมูลเว็บไซต์กับ Google Business Profile เป็นหนึ่งเดียว",
        icon: "MapPin",
      },
      {
        title: "Geo-Targeted Content",
        description: "บทความที่ดักจับคำค้นหาชื่ออำเภอ/ตำบล ในจังหวัดของคุณ",
        icon: "Compass",
      },
      {
        title: "Review Strategy",
        description: "กลยุทธ์เพิ่ม 5-Star Review อย่างเป็นธรรมชาติ",
        icon: "Star",
      },
    ],
    faqs: [
      {
        question: "ทำไมต้องทำเว็บถ้ามีเพจแล้ว?",
        answer:
          "เพจ Facebook ค้นหาใน Google Maps ไม่เจอครับ การมีเว็บไซต์ช่วยยืนยันตัวตนกับ Google ว่าร้านคุณมีอยู่จริงและน่าเชื่อถือกว่า",
      },
    ],
    keywords: ["รับปักหมุด Google Maps", "Local SEO", "ทำเว็บร้านค้าท้องถิ่น", "เพิ่มยอดหน้าร้าน"],
    priority: 3,
    isFeatured: true,
  },

  // ===========================================================================
  // [04. E-CATALOG]: ระบบจัดการข้อมูลและการขาย (Structured Commerce)
  // ===========================================================================
  {
    id: "AEM-SVC-EC-05",
    title: "Industrial E-Catalog & RFQ",
    description:
      "ระบบจัดการสินค้าสำหรับธุรกิจ B2B/โรงงาน ลดภาระฝ่ายขายด้วยแค็ตตาล็อกออนไลน์ที่ค้นหาง่าย พร้อมระบบขอใบเสนอราคา (RFQ)",
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
      "Sales Enablement: เซลส์ไม่ต้องพกแค็ตตาล็อกเล่มหนา แค่ส่งลิงก์ลูกค้าก็ดูสเปคได้ทันที",
      "Lead Qualify: คัดกรองลูกค้าที่สนใจจริงผ่านระบบขอใบเสนอราคา (Request for Quotation)",
      "Mass SKU Ready: รองรับสินค้า 10,000+ รายการ โดยที่เว็บไม่หน่วง",
    ],
    coreFeatures: [
      {
        title: "Smart Filter",
        description: "ระบบกรองสินค้าละเอียด (ขนาด/วัสดุ/เกรด) สำหรับสินค้าอุตสาหกรรม",
        icon: "Filter",
      },
      {
        title: "Spec Sheet Download",
        description: "ปุ่มดาวน์โหลด PDF Catalog/Datasheet ในหน้าสินค้า",
        icon: "FileText",
      },
      {
        title: "B2B Workflow",
        description: "ไม่ใช่แค่ตะกร้าสินค้า แต่เป็น Flow การเจรจาธุรกิจแบบ B2B",
        icon: "Briefcase",
      },
    ],
    faqs: [
      {
        question: "ต่างจาก Shopee/Lazada ไหม?",
        answer:
          "ต่างมากครับ E-Marketplace แข่งกันที่ราคาถูกที่สุด แต่ E-Catalog ของเราสร้างมาเพื่อสร้างภาพลักษณ์แบรนด์และดีลธุรกิจล็อตใหญ่",
      },
    ],
    keywords: [
      "ทำเว็บ E-Catalog",
      "ระบบขอใบเสนอราคา",
      "เว็บโรงงานอุตสาหกรรม",
      "Digital Catalog System",
    ],
    priority: 4,
  },

  // ===========================================================================
  // [05. PORTFOLIO]: อัตลักษณ์และผลงาน (Professional Persona)
  // ===========================================================================
  {
    id: "AEM-SVC-PB-14",
    title: "Personal Authority Hub",
    description:
      "สร้าง Personal Brand ให้แข็งแกร่งด้วยเว็บไซต์ส่วนตัว รวมผลงาน ช่องทางติดต่อ และการนัดหมายไว้ในจุดเดียว",
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
      "Authority Building: ยืนยันสถานะความเป็น 'ตัวจริง' ในวงการของคุณ",
      "Centralized Asset: ไม่ต้องกลัว Social Media ปิดกั้นการมองเห็น เพราะนี่คือบ้านของคุณ",
      "Premium Impression: ส่งลิงก์เว็บส่วนตัวดูเป็นมืออาชีพกว่าส่งนามบัตรกระดาษ",
    ],
    coreFeatures: [
      {
        title: "Portfolio Gallery",
        description: "โชว์เคสผลงานแบบ Interactive ที่ดึงดูดสายตา",
        icon: "Award",
      },
      {
        title: "Smart Bio Link",
        description: "หน้ารวมลิงก์ Social Media ที่โหลดไวและดีไซน์สวยกว่า Linktree",
        icon: "Link",
      },
      {
        title: "Direct Contact",
        description: "ปุ่มกดโทร/ไลน์/อีเมล ที่ทำงานทันทีบนมือถือ",
        icon: "PhoneCall",
      },
    ],
    faqs: [
      {
        question: "เหมาะกับใคร?",
        answer:
          "Freelance, ที่ปรึกษา, วิทยากร, หรือผู้บริหารที่ต้องการสร้างภาพลักษณ์ผู้นำทางความคิด (Thought Leader) ครับ",
      },
    ],
    keywords: ["ทำเว็บ Portfolio", "Personal Branding Website", "Bio Link Design", "เว็บส่วนตัว"],
    priority: 5,
  },

  // ===========================================================================
  // [06. HOSPITALITY]: ประสบการณ์และความเหนือระดับ (Luxury Experience)
  // ===========================================================================
  {
    id: "AEM-SVC-HR-08",
    title: "Luxury Hospitality Engine",
    description:
      "เว็บไซต์โรงแรม/วิลล่าที่เน้น 'Visual Storytelling' และระบบ 'Direct Booking' เพื่อลดค่าคอมมิชชั่น OTA",
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
      "Profit Maximization: เพิ่มยอดจองตรง (Direct Booking) ไม่ต้องโดนหัก 15-20%",
      "Brand Immersion: ถ่ายทอดบรรยากาศที่พักได้ดีกว่าหน้า listing บน Agoda/Booking",
      "International Standard: รองรับนักท่องเที่ยวทั่วโลกด้วยมาตรฐาน UX ระดับสากล",
    ],
    coreFeatures: [
      {
        title: "Visual Excellence",
        description: "ระบบแสดงภาพความละเอียดสูง (Retina Ready) โดยไม่ทำให้เว็บอืด",
        icon: "Image",
      },
      {
        title: "Booking Integration",
        description: "เชื่อมต่อระบบจอง (Booking Engine) หรือ Channel Manager ได้",
        icon: "CalendarCheck",
      },
      {
        title: "Multilingual SEO",
        description: "โครงสร้างรองรับการทำ SEO หลายภาษา (อังกฤษ/จีน/รัสเซีย)",
        icon: "Languages",
      },
    ],
    faqs: [
      {
        question: "ช่วยลดค่า OTA ได้จริงไหม?",
        answer:
          "จริงครับ ถ้าเว็บคุณสวยและจองง่ายพอลูกค้าจะเลือกจองตรงเพื่อรับสิทธิพิเศษที่เราตั้งไว้ (เช่น อาหารเช้าฟรี)",
      },
    ],
    keywords: [
      "ทำเว็บโรงแรม",
      "เว็บไซต์รีสอร์ท Luxury",
      "Hotel Website Design",
      "ระบบจองห้องพักโรงแรม",
    ],
    priority: 6,
    isFeatured: true,
  },
] as const;

```
### CONFIG: navigation.ts
```typescript
/**
 * [DATA REGISTRY]: NAVIGATION_INFRASTRUCTURE v17.9.9 (REFINED)
 * [STRATEGY]: Internal Scope Optimization | Pruned Unused Exports
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "./site-config";

export const MAIN_NAV = [
  { label: "หน้าแรก", href: "/" },
  { label: "บริการ & ราคา", href: "/services" },
  { label: "ผลงานลูกค้า", href: "/case-studies" },
  { label: "พื้นที่ให้บริการ", href: "/areas" },
  { label: "บันทึกเทคนิค", href: "/blog" },
  { label: "Status", href: "/status" },
] as const;

/** * [INTERNAL]: เปลี่ยนเป็นค่าภายในไฟล์ เนื่องจากไม่มีการใช้งานภายนอก
 * ป้องกัน Unused Export Warning ใน Knip
 */
const SERVICE_SOLUTIONS = [
  { label: "Sale Page ปิดการขาย", href: "/services/salepage" },
  { label: "เว็บไซต์บริษัท (Corporate)", href: "/services/corporate" },
  { label: "Technical SEO Specialist", href: "/services/seo-agency" },
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
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "System Status", href: "/status" },
    { label: "Sitemap", href: "/sitemap.xml" },
  ],
} as const;

/** * [CLEANUP]: ลบ NavItem และ ServiceItem types
 * เนื่องจากไม่ได้ถูกเรียกใช้งานใน Component อื่นๆ (Dead Types)
 */

```
### CONFIG: site-config.ts
```typescript
/**
 * [SYSTEM CORE]: GLOBAL_SITE_CONFIGURATION v17.8.1 (REFINED)
 * [STRATEGY]: Single Source of Truth | Dead Type Elimination | Encapsulation
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { SiteConfig } from "@/types";

/**
 * [CORE_IDENTITY]: แหล่งข้อมูลอ้างอิงหลักของระบบ (Single Source of Truth)
 * ห้ามทำการ Hardcode ข้อมูลเหล่านี้ลงใน Component โดยเด็ดขาด
 */
export const SITE_CONFIG: SiteConfig = {
  // =========================================
  // [01] BRAND IDENTITY & CORE MISSION
  // =========================================
  brandName: "AEMDEVWEB",
  siteUrl: "https://aemdevweb.com",
  description:
    "AEMDEVWEB | Web Infrastructure & Technical SEO Specialist พัฒนาเว็บไซต์มาตรฐานสากลเพื่อการติดอันดับ Google อย่างยั่งยืนและมีประสิทธิภาพ",

  // =========================================
  // [02] STRATEGIC HERO REGISTRY
  // =========================================
  hero: {
    title: "AEMDEVWEB HYPER-PERFORMANCE ARCHITECTURE",
    description:
      "วิศวกรรมโครงสร้างเว็บไซต์และกลยุทธ์ SEO ระดับ Specialist เพื่อการเติบโตของธุรกิจในยุค AI-Search 2026 โดย นายเอ็มซ่ามากส์ (Alongkorn Yomkerd)",
    primaryAction: "ปรึกษาวางแผนระบบฟรี",
    secondaryAction: "วิเคราะห์บริการทั้งหมด",
  },

  // =========================================
  // [03] PERSONA & COMMUNICATION ANCHOR
  // =========================================
  persona: {
    tone: "Strategic Partner, Technical Authority, Business-Centric",
    communicationStyle: "Result-oriented, Friendly Specialist, Transparent & Logical",
    antiConnotation: "No Fluff, No Robot-speak, Avoid Over-promising without Engineering Data",
  },

  // =========================================
  // [04] SEO & ENTITY AUTHORITY (EEAT)
  // =========================================
  keywords: [
    "รับทำเว็บไซต์",
    "รับทำ SEO สายขาว",
    "Technical SEO Specialist Thailand",
    "รับออกแบบเว็บไซต์ บริษัท",
    "รับทำ Sale Page ยิงแอด",
    "จ้างทำเว็บไซต์ ติดหน้าแรก Google",
    "รับทำเว็บไซต์ Next.js",
    "AEMDEVWEB",
    "นายเอ็มซ่ามากส์ AEMDEVWEB",
    "อลงกรณ์ ยมเกิด",
    "Alongkorn Yomkerd",
    "Web Infrastructure Specialist",
  ],

  // =========================================
  // [05] TECHNICAL STACK REVISIT
  // =========================================
  project: {
    title: "AEMDEVWEB | High-End Web & SEO Expert Hub",
    shortTitle: "AEMDEVWEB",
    version: "17.8.1",
    framework: "Next.js 16.1.6 (App Router)",
    uiStack: "React 19 + Tailwind CSS 4",
  },

  // =========================================
  // [06] EXPERT NODE (EEAT CORE)
  // =========================================
  expert: {
    displayName: "นายเอ็มซ่ามากส์ (AemSaMak)",
    legalName: "Alongkorn Yomkerd",
    legalNameThai: "อลงกรณ์ ยมเกิด",
    role: "Technical SEO Specialist",
    jobTitle: "Web Architect & Technical SEO Specialist",
    signature: "AEMDEVWEB Specialist",
    avatar: "/images/avatar.webp",
    email: "me@aemdevweb.com",
    bioUrl: "/services/bio",
    bio: "ผู้เชี่ยวชาญด้านวิศวกรรมเว็บไซต์และ Technical SEO ที่เน้นการสร้างผลลัพธ์ทางธุรกิจ (ROI) ผ่านโครงสร้างพื้นฐานดิจิทัลที่แข็งแกร่ง",
    googleMerchantId: "8653147979146207424",
  },

  // =========================================
  // [07] CONTACT & GEOGRAPHIC ACCESS
  // =========================================
  contact: {
    email: "me@aemdevweb.com",
    phone: "099-032-2175",
    displayPhone: "099 032 2175 (สายด่วนปรึกษานายเอ็มซ่ามากส์)",
    address: "กำแพงเพชร, ประเทศไทย",
    streetAddress: "ตำบลในเมือง อำเภอเมืองกำแพงเพชร",
    postalCode: "62000",
    workHours: "จันทร์ - ศุกร์, 09:00 - 18:00 (Engineering Support 24/7)",
    mapUrl: "https://share.google/MMWnXPv3evv4Qd8aC",
  },

  // =========================================
  // [08] STRATEGIC CONNECTIVITY
  // =========================================
  links: {
    line: "https://lin.ee/kVRNkIy",
    lineId: "@127cnhtn",
    messenger: "https://m.me/aemdevweb",
    facebook: "https://facebook.com/aemdevweb",
    github: "https://github.com/aemdevweb",
    googleMaps: "https://share.google/MMWnXPv3evv4Qd8aC",
    googleReview: "https://search.google.com/local/writereview?placeid=ChIJ0S9uG79lHTERERERERERERE",
  },

  // =========================================
  // [09] BUSINESS & TRUST METRICS
  // =========================================
  business: {
    location: "กำแพงเพชร",
    region: "Northern Thailand",
    industry: "Digital Infrastructure & SEO",
    roiFocus: true,
    established: "2026",
    status: "Stable",
    ids: {
      businessProfileId: "17539943195708104348",
      storeCode: "01162024004001766449",
    },
  },

  // =========================================
  // [10] SECURITY & VERIFICATION
  // =========================================
  verification: {
    google: "HmlcGbJ8eKWuc1QN_UUpBQ",
  },
} as const;

```

---

## DIRECTORY INFRASTRUCTURE
```text
[3.4K 2026-02-12 17:37]  .
├── [ 31K 2026-02-12 17:24]  Dev.md
├── [1.1K 2026-02-12 17:37]  MASTER_AUDIT_REPORT.md
├── [ 85K 2026-02-12 17:40]  README.md
├── [ 888 2026-02-12 16:34]  a.sh
├── [3.4K 2026-02-12 14:53]  app
│   ├── [3.4K 2026-02-12 00:53]  (routes)
│   │   ├── [3.4K 2026-02-12 14:19]  areas
│   │   │   ├── [3.4K 2026-02-12 14:19]  [slug]
│   │   │   │   └── [4.0K 2026-02-12 17:28]  page.tsx
│   │   │   └── [5.9K 2026-02-12 16:54]  page.tsx
│   │   ├── [3.4K 2026-02-12 14:19]  blog
│   │   │   ├── [3.4K 2026-02-12 14:19]  [slug]
│   │   │   │   └── [5.8K 2026-02-12 17:29]  page.tsx
│   │   │   └── [5.5K 2026-02-12 16:15]  page.tsx
│   │   ├── [3.4K 2026-02-12 14:19]  case-studies
│   │   │   ├── [3.4K 2026-02-12 14:19]  [slug]
│   │   │   │   └── [6.6K 2026-02-12 17:29]  page.tsx
│   │   │   └── [3.5K 2026-02-12 15:22]  page.tsx
│   │   └── [3.4K 2026-02-12 14:19]  services
│   │       ├── [3.4K 2026-02-12 14:19]  [slug]
│   │       │   └── [5.3K 2026-02-12 17:30]  page.tsx
│   │       └── [8.1K 2026-02-12 15:22]  page.tsx
│   ├── [3.4K 2026-02-12 14:19]  about
│   │   └── [ 12K 2026-02-12 14:19]  page.tsx
│   ├── [5.7K 2026-02-12 15:22]  globals.css
│   ├── [4.4K 2026-02-12 15:22]  layout.tsx
│   ├── [4.0K 2026-02-12 15:35]  loading.tsx
│   ├── [2.4K 2026-02-12 16:54]  manifest.ts
│   ├── [6.2K 2026-02-12 16:19]  not-found.tsx
│   ├── [6.6K 2026-02-12 16:54]  page.tsx
│   ├── [3.4K 2026-02-12 14:19]  privacy
│   │   └── [ 11K 2026-02-12 14:19]  page.tsx
│   ├── [2.3K 2026-02-12 16:54]  robots.ts
│   ├── [2.6K 2026-02-12 16:54]  sitemap.ts
│   ├── [3.4K 2026-02-12 14:19]  status
│   │   └── [ 12K 2026-02-12 14:19]  page.tsx
│   ├── [ 793 2026-02-12 14:53]  template.tsx
│   └── [3.4K 2026-02-12 14:19]  terms
│       └── [ 11K 2026-02-12 14:19]  page.tsx
├── [3.4K 2026-02-12 00:53]  components
│   ├── [3.4K 2026-02-12 00:53]  features
│   │   ├── [3.4K 2026-02-12 14:19]  areas
│   │   │   └── [5.0K 2026-02-12 15:22]  AreaCard.tsx
│   │   ├── [3.4K 2026-02-12 14:19]  blog
│   │   │   └── [4.1K 2026-02-12 15:22]  BlogCard.tsx
│   │   ├── [3.4K 2026-02-12 14:19]  case-studies
│   │   │   └── [4.9K 2026-02-12 15:22]  CaseStudyCard.tsx
│   │   ├── [3.4K 2026-02-12 16:34]  landing
│   │   │   ├── [6.7K 2026-02-12 16:54]  Hero.tsx
│   │   │   ├── [ 10K 2026-02-12 16:54]  PricingSection.tsx
│   │   │   └── [ 11K 2026-02-12 16:29]  WorkProcess.tsx
│   │   └── [3.4K 2026-02-12 14:19]  services
│   │       ├── [6.2K 2026-02-12 15:22]  ServiceCard.tsx
│   │       └── [3.3K 2026-02-12 15:29]  ServiceListingHub.tsx
│   ├── [3.4K 2026-02-12 16:34]  layout
│   │   ├── [ 10K 2026-02-12 16:54]  Footer.tsx
│   │   ├── [9.9K 2026-02-12 16:34]  Navbar.tsx
│   │   ├── [1.8K 2026-02-12 15:22]  PageTransition.tsx
│   │   └── [2.1K 2026-02-12 15:22]  TopLoader.tsx
│   ├── [3.4K 2026-02-12 14:19]  providers
│   │   └── [1.1K 2026-02-12 16:04]  ThemeProvider.tsx
│   ├── [3.4K 2026-02-12 14:19]  seo
│   │   └── [1.3K 2026-02-12 14:19]  JsonLd.tsx
│   ├── [3.4K 2026-02-12 16:34]  shared
│   │   ├── [7.3K 2026-02-12 16:34]  ConversionCTA.tsx
│   │   ├── [2.5K 2026-02-12 15:22]  FloatingContainer.tsx
│   │   ├── [7.1K 2026-02-12 15:22]  ImpactStats.tsx
│   │   ├── [4.1K 2026-02-12 16:25]  LineStickyButton.tsx
│   │   └── [6.1K 2026-02-12 15:22]  TrustBadge.tsx
│   ├── [3.4K 2026-02-12 14:19]  templates
│   │   ├── [3.1K 2026-02-12 16:54]  TemplateRenderer.tsx
│   │   ├── [3.4K 2026-02-12 14:19]  bio
│   │   │   ├── [9.8K 2026-02-12 14:19]  Index.tsx
│   │   │   └── [2.5K 2026-02-12 05:47]  Schema.ts
│   │   ├── [3.4K 2026-02-12 14:19]  catalog
│   │   │   ├── [9.1K 2026-02-12 14:19]  Index.tsx
│   │   │   └── [2.9K 2026-02-12 05:47]  Schema.ts
│   │   ├── [3.4K 2026-02-12 14:19]  corporate
│   │   │   ├── [9.9K 2026-02-12 14:19]  Index.tsx
│   │   │   └── [3.4K 2026-02-12 05:47]  Schema.ts
│   │   ├── [3.4K 2026-02-12 14:19]  hotelresort
│   │   │   ├── [8.2K 2026-02-12 14:19]  Index.tsx
│   │   │   └── [2.6K 2026-02-12 05:47]  Schema.ts
│   │   ├── [3.4K 2026-02-12 14:19]  local-authority
│   │   │   ├── [ 11K 2026-02-12 14:19]  Index.tsx
│   │   │   └── [1.7K 2026-02-12 05:47]  Schema.ts
│   │   ├── [3.4K 2026-02-12 14:37]  salepage
│   │   │   ├── [4.3K 2026-02-12 16:54]  Index.tsx
│   │   │   ├── [2.0K 2026-02-12 16:54]  Schema.ts
│   │   │   └── [3.4K 2026-02-12 14:37]  _components
│   │   │       ├── [6.5K 2026-02-12 15:22]  DirectOrderForm.tsx
│   │   │       ├── [5.9K 2026-02-12 15:22]  FeatureComparison.tsx
│   │   │       ├── [4.1K 2026-02-12 15:22]  FlashSaleTimer.tsx
│   │   │       ├── [5.4K 2026-02-12 15:22]  SaleHero.tsx
│   │   │       ├── [2.5K 2026-02-12 16:54]  StickyBuyButton.tsx
│   │   │       └── [4.7K 2026-02-12 15:22]  ThaiTrustBadge.tsx
│   │   ├── [3.4K 2026-02-12 16:34]  sections
│   │   │   ├── [2.8K 2026-02-12 14:19]  DynamicFAQ.tsx
│   │   │   ├── [3.8K 2026-02-12 14:19]  FeatureGrid.tsx
│   │   │   ├── [6.0K 2026-02-12 16:54]  HeroEngine.tsx
│   │   │   └── [3.9K 2026-02-12 15:22]  LayoutEngine.tsx
│   │   └── [3.4K 2026-02-12 14:19]  seo-agency
│   │       ├── [2.7K 2026-02-12 05:47]  Schema.ts
│   │       └── [8.9K 2026-02-12 14:19]  index.tsx
│   └── [3.4K 2026-02-12 14:19]  ui
│       ├── [2.7K 2026-02-12 14:19]  Accordion.tsx
│       ├── [2.3K 2026-02-12 14:19]  AmbientBackground.tsx
│       ├── [3.7K 2026-02-12 16:54]  Button.tsx
│       ├── [1.5K 2026-02-12 14:19]  Callout.tsx
│       ├── [4.2K 2026-02-12 15:22]  IconRenderer.tsx
│       ├── [ 931 2026-02-12 14:19]  Skeleton.tsx
│       ├── [2.7K 2026-02-12 15:22]  SkeletonCard.tsx
│       ├── [1.5K 2026-02-12 14:19]  SkeletonGrid.tsx
│       ├── [2.9K 2026-02-12 14:19]  Sonner.tsx
│       └── [3.7K 2026-02-12 15:22]  ThemeToggle.tsx
├── [ 425 2026-02-12 00:53]  components.json
├── [3.4K 2026-02-12 17:25]  config
├── [3.4K 2026-02-12 05:47]  constants
│   ├── [ 34K 2026-02-12 15:22]  area-nodes.ts
│   ├── [9.1K 2026-02-12 16:54]  image-blur-data.ts
│   ├── [ 22K 2026-02-12 15:22]  master-registry.ts
│   ├── [2.5K 2026-02-12 16:54]  navigation.ts
│   └── [5.9K 2026-02-12 17:02]  site-config.ts
├── [3.4K 2026-02-12 00:53]  content
│   ├── [3.4K 2026-02-12 00:53]  blog
│   │   ├── [ 11K 2026-02-12 00:53]  5-points-killing-sales.mdx
│   │   ├── [ 10K 2026-02-12 00:53]  advanced-schema-markup.mdx
│   │   ├── [9.2K 2026-02-12 00:53]  case-study-unlink-th.mdx
│   │   ├── [8.5K 2026-02-12 00:53]  copywriting-secrets.mdx
│   │   ├── [9.9K 2026-02-12 00:53]  core-web-vitals-speed.mdx
│   │   ├── [8.7K 2026-02-12 00:53]  ecommerce-conversion-seo.mdx
│   │   ├── [9.5K 2026-02-12 00:53]  facebook-ads-vs-website.mdx
│   │   ├── [ 10K 2026-02-12 00:53]  lower-north-digital-transformation.mdx
│   │   ├── [ 16K 2026-02-12 00:53]  seo-2026-strategy.mdx
│   │   └── [9.2K 2026-02-12 00:53]  technical-audit-protocol.mdx
│   └── [3.4K 2026-02-12 00:53]  case-studies
│       ├── [ 10K 2026-02-12 00:53]  case-study-industrial-catalog.mdx
│       └── [9.7K 2026-02-12 00:53]  unlink-reputation-management-success.mdx
├── [2.1K 2026-02-12 00:53]  eslint.config.mjs
├── [ 476 2026-02-12 15:18]  knip.json
├── [3.4K 2026-02-12 05:47]  lib
│   ├── [3.2K 2026-02-12 16:54]  cms.ts
│   ├── [3.5K 2026-02-12 16:54]  schema.ts
│   ├── [2.2K 2026-02-12 15:49]  seo-utils.ts
│   └── [1.4K 2026-02-12 17:02]  utils.ts
├── [7.7K 2026-02-12 15:26]  master_audit.sh
├── [3.8K 2026-02-12 17:17]  mdx-components.tsx
├── [ 247 2026-02-12 14:27]  next-env.d.ts
├── [2.6K 2026-02-12 16:54]  next.config.ts
├── [2.5K 2026-02-12 15:06]  package.json
├── [268K 2026-02-12 17:17]  pnpm-lock.yaml
├── [  51 2026-02-12 00:53]  pnpm-workspace.yaml
├── [1.1K 2026-02-12 00:53]  postcss.config.mjs
├── [3.4K 2026-02-12 05:41]  public
│   └── [3.4K 2026-02-12 13:25]  images
│       ├── [3.4K 2026-02-12 00:53]  areas
│       ├── [3.4K 2026-02-12 00:53]  blog
│       ├── [3.4K 2026-02-12 00:53]  case-studies
│       ├── [3.4K 2026-02-12 05:24]  experts
│       ├── [3.4K 2026-02-12 00:53]  seo
│       ├── [3.4K 2026-02-12 00:53]  service
│       ├── [3.4K 2026-02-12 00:53]  shared
│       └── [3.4K 2026-02-12 00:53]  templates
│           └── [3.4K 2026-02-12 00:53]  local-service
├── [3.4K 2026-02-12 00:53]  scripts
│   ├── [2.1K 2026-02-12 15:22]  clean-project.sh
│   ├── [2.0K 2026-02-12 00:53]  cleanup-images.sh
│   ├── [4.0K 2026-02-12 16:54]  gen-blur-data.mjs
│   ├── [3.0K 2026-02-12 01:03]  generate_docs.sh
│   └── [ 411 2026-02-12 00:53]  optimize-assets.sh
├── [ 691 2026-02-12 15:22]  tsconfig.json
├── [185K 2026-02-12 17:31]  tsconfig.tsbuildinfo
├── [3.4K 2026-02-12 05:47]  types
│   ├── [8.5K 2026-02-12 16:54]  index.d.ts
│   ├── [ 423 2026-02-12 05:47]  mdx.d.ts
│   └── [3.1K 2026-02-12 16:54]  template-props.ts
└── [2.8K 2026-02-12 05:43]  vercel.json

56 directories, 122 files
```

---

## BUILD ARTIFACT ANALYSIS (.next/static)
```text
2.3M	.next/static
196K	.next/static/chunks/92766bc8-d7271867088c7ae4.js
188K	.next/static/chunks/1966-7874a697c3ff9e79.js
180K	.next/static/chunks/framework-473b702606f6b0d3.js
132K	.next/static/chunks/main-29eea1bfa6c64bd5.js
124K	.next/static/chunks/1409-f3a64b314a20b8ed.js
116K	.next/static/css/81b0250a01c2ea32.css
112K	.next/static/chunks/polyfills-42372ed130431b0a.js
84K	.next/static/media/8e9860b6e62d6359-s.woff2
48K	.next/static/media/e4af272ccee01ff0-s.p.woff2
40K	.next/static/chunks/579-1cb16a719d53866e.js
```
