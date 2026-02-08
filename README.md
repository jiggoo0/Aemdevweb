---
domain: aemdevweb.com
status: strictly-enforced
last_audit: 2026-02-09 00:59:01
---

# SYSTEM ARCHITECTURE & DATA SCHEMAS

> [ERROR] MISSION CRITICAL: 00-SYSTEM-MANDATE.md MISSING

---

## TECHNICAL DATA SCHEMAS (TYPES)

### MODULE: index.d.ts

```typescript
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
```

### MODULE: mdx.d.ts

```typescript
// types/mdx.d.ts

declare module "*.mdx" {
  import type { ComponentType, ReactNode } from "react";

  const component: ComponentType<{ children?: ReactNode }>;
  export default component;
}

declare module "mdx/types" {
  import type { ComponentType, ReactNode } from "react";
  export type MDXComponents = Record<string, ComponentType<{ children?: ReactNode }> | string>;
}
```

---

## CONSTANTS REGISTRY

### CONFIG: area-nodes.ts

```typescript
/**
 * [SYSTEM CORE]: AREA_NODES_DATA v17.0.1 (STABILIZED)
 * [STRATEGY]: Local SEO & Geographic Authority | Deep Immutability
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { AreaNode } from "@/types";

export const AREA_NODES: readonly AreaNode[] = [
  {
    slug: "bangkok",
    province: "กรุงเทพมหานคร",
    templateSlug: "corporate",
    title: "รับทำเว็บไซต์ กรุงเทพ | ออกแบบเว็บไซต์องค์กรและวางแผน SEO ครบวงจร",
    description:
      "ช่วยให้ธุรกิจใน กทม. เติบโตได้จริง ด้วยเว็บไซต์ที่โหลดไว สวยงาม และติดหน้าแรก Google",
    longDescription:
      "ในย่านธุรกิจที่มีการแข่งขันสูงของกรุงเทพฯ แค่เว็บสวยอย่างเดียวอาจไม่พอ แต่ต้องเป็นเว็บที่ทำงานได้เร็วและคนหาเจอง่าย เราช่วยปรับจูนให้ธุรกิจของคุณดูเป็นมืออาชีพ โดดเด่นกว่าคู่แข่ง และพร้อมแข่งขันได้ในระดับสากล",
    districts: ["ปทุมวัน", "วัฒนา", "จตุจักร", "บางรัก", "ลาดพร้าว", "สุขุมวิท"],
    keywords: ["รับทำเว็บไซต์ กรุงเทพ", "บริษัททำ SEO กทม", "จ้างทำเว็บไซต์มืออาชีพ"],
    heroImage: "/images/areas/bangkok-node.webp",
    priority: 100,
    seoTitle: "รับทำเว็บไซต์ กรุงเทพ | ออกแบบเว็บไซต์ SEO คุณภาพสูงเพื่อธุรกิจองค์กร",
    seoDescription:
      "ยกระดับธุรกิจในกรุงเทพฯ ด้วยเว็บไซต์ที่เน้นยอดขายและการติดอันดับบน Google ด้วยมาตรฐานสากลปี 2026",
  },
  {
    slug: "nakhon-sawan",
    province: "นครสวรรค์",
    templateSlug: "corporate",
    title: "รับทำเว็บไซต์ นครสวรรค์ | ยกระดับร้านค้าและธุรกิจในพื้นที่สู่ระบบออนไลน์เต็มตัว",
    description: "สร้างความน่าเชื่อถือให้ร้านค้าในนครสวรรค์ ด้วยเว็บไซต์ที่ดูดีและใช้งานง่าย",
    longDescription:
      "เราช่วยให้ร้านค้าและธุรกิจในนครสวรรค์มีหน้าร้านบนโลกออนไลน์ที่ได้มาตรฐาน ช่วยให้คู่ค้าและลูกค้ามั่นใจในธุรกิจของคุณมากขึ้น พร้อมระบบจัดการข้อมูลที่ทำให้การทำธุรกิจเป็นเรื่องง่ายกว่าเดิม",
    districts: ["เมืองนครสวรรค์", "ลาดยาว", "ตาคลี", "ชุมแสง"],
    keywords: ["รับทำเว็บไซต์ นครสวรรค์", "ทำเว็บธุรกิจ นครสวรรค์", "บริการ SEO นครสวรรค์"],
    heroImage: "/images/areas/nakhon-sawan-node.webp",
    priority: 98,
    seoTitle: "รับทำเว็บไซต์ นครสวรรค์ | พัฒนาเว็บไซต์เพื่อการค้าและความเชื่อมั่นทางธุรกิจ",
    seoDescription:
      "สร้างตัวตนออนไลน์ให้ธุรกิจในนครสวรรค์โดดเด่นกว่าใคร ด้วยทีมงานทำเว็บและ SEO มืออาชีพ",
  },
  {
    slug: "tak",
    province: "ตาก",
    templateSlug: "salepage",
    title: "รับทำเว็บไซต์ ตาก | ออกแบบ Sale Page ช่วยขายของ สำหรับธุรกิจในแม่สอดและเขตชายแดน",
    description: "เน้นปิดการขายด้วยหน้าเว็บเดียวที่ข้อมูลครบ พร้อมปุ่มทักแชทสอบถามได้ทันที",
    longDescription:
      "สำหรับร้านค้าในตากและแม่สอด เราเน้นทำเว็บไซต์ที่ช่วยขายของได้จริง ด้วยระบบ Sale Page ที่ออกแบบมาให้อ่านง่าย จบงานไว รองรับการยิงโฆษณาและเชื่อมต่อกับ Line OA ให้ลูกค้าทักหาคุณได้สะดวกที่สุด",
    districts: ["เมืองตาก", "แม่สอด", "บ้านตาก", "พบพระ"],
    keywords: ["รับทำ Sale Page ตาก", "ออกแบบเว็บขายสินค้า แม่สอด", "ทำเว็บไซต์ร้านค้า ตาก"],
    heroImage: "/images/areas/tak-node.webp",
    priority: 95,
    seoTitle: "รับทำหน้าปิดการขาย ตาก | รับทำเว็บไซต์ขายสินค้าออนไลน์ในแม่สอด",
    seoDescription:
      "เพิ่มยอดขายให้ธุรกิจในจังหวัดตากด้วยระบบ Sale Page ที่ใช้งานง่าย และช่วยให้ลูกค้าตัดสินใจซื้อได้จริง",
  },
  {
    slug: "kamphaeng-phet",
    province: "กำแพงเพชร",
    templateSlug: "local",
    title: "รับทำเว็บไซต์ กำแพงเพชร | ช่วยให้คนในพื้นที่หาธุรกิจของคุณเจอง่ายๆ บน Google",
    description: "เน้นทำให้ร้านค้าในกำแพงเพชรติดอันดับการค้นหาและแสดงผลบนแผนที่ (Google Maps)",
    longDescription:
      "ช่วยให้คนกำแพงเพชรหาธุรกิจของคุณเจอได้ทันทีผ่านมือถือ เราเน้นวางโครงสร้างให้ร้านค้าท้องถิ่นปรากฏบนหน้าแรกของการค้นหา พร้อมระบบติดต่อกลับที่รวดเร็ว ช่วยเพิ่มโอกาสให้ลูกค้าแวะมาที่ร้านมากขึ้น",
    districts: ["เมืองกำแพงเพชร", "พรานกระต่าย", "ขาณุวรลักษบุรี"],
    keywords: ["รับทำเว็บไซต์ กำแพงเพชร", "ทำ SEO กำแพงเพชร", "จ้างทำเว็บร้านค้ากำแพงเพชร"],
    heroImage: "/images/areas/kamphaeng-phet-node.webp",
    priority: 90,
    seoTitle: "รับทำเว็บไซต์ กำแพงเพชร | บริการทำ SEO ท้องถิ่นให้ธุรกิจติดหน้าแรก",
    seoDescription:
      "รับออกแบบเว็บไซต์ร้านค้าในกำแพงเพชร เน้นความสวยงาม ใช้งานง่าย และหาเจอบนหน้า Google",
  },
  {
    slug: "phichit",
    province: "พิจิตร",
    templateSlug: "local",
    title: "รับทำเว็บไซต์ พิจิตร | สร้างหน้าร้านออนไลน์ให้ธุรกิจบริการ ดูดีและน่าเชื่อถือ",
    description: "เว็บไซต์ใช้งานง่าย ข้อมูลครบ และเน้นให้ลูกค้าในพิจิตรติดต่อสอบถามได้สะดวก",
    longDescription:
      "เราออกแบบเว็บไซต์ที่ช่วยให้ธุรกิจในพิจิตรดูเป็นมืออาชีพมากขึ้น จัดวางข้อมูลและปุ่มติดต่อให้ชัดเจน เพื่อให้ลูกค้าที่ค้นหาเจอสามารถโทรหาหรือทักแชทถามข้อมูลกับคุณได้ทันทีในคลิกเดียว",
    districts: ["เมืองพิจิตร", "ตะพานหิน", "บางมูลนาก"],
    keywords: ["รับทำเว็บไซต์ พิจิตร", "ออกแบบเว็บไซต์บริการ พิจิตร", "ทำ SEO พิจิตร"],
    heroImage: "/images/areas/phichit-node.webp",
    priority: 85,
    seoTitle: "รับทำเว็บไซต์ พิจิตร | ออกแบบเว็บไซต์ที่รองรับมือถือและเน้นการติดต่อ",
    seoDescription:
      "ยกระดับร้านค้าในจังหวัดพิจิตรให้มีมาตรฐาน ด้วยเว็บไซต์ที่ออกแบบมาเพื่อธุรกิจในพื้นที่โดยเฉพาะ",
  },
  {
    slug: "sukhothai",
    province: "สุโขทัย",
    templateSlug: "corporate",
    title: "รับทำเว็บไซต์ สุโขทัย | ออกแบบเว็บไซต์ที่พักและท่องเที่ยว เพื่อรองรับลูกค้าจากทั่วโลก",
    description:
      "เน้นดีไซน์สวยงาม ภาพลักษณ์ดูดี และให้ข้อมูลการเดินทางที่ครบถ้วนสำหรับนักท่องเที่ยว",
    longDescription:
      "สำหรับโรงแรมและที่พักในสุโขทัย เว็บไซต์คือสิ่งแรกที่ลูกค้าเห็น เราเน้นการโชว์รูปภาพที่สวยงามคู่กับความเร็วในการโหลด เพื่อสร้างความประทับใจแรกให้นักท่องเที่ยว และให้ข้อมูลที่พวกเขาต้องการได้อย่างรวดเร็ว",
    districts: ["เมืองสุโขทัย", "ศรีสัชนาลัย", "สวรรคโลก"],
    keywords: ["รับทำเว็บไซต์ สุโขทัย", "ทำเว็บโรงแรม สุโขทัย", "ออกแบบเว็บไซต์ท่องเที่ยว"],
    heroImage: "/images/areas/sukhothai-node.webp",
    priority: 80,
    seoTitle: "รับทำเว็บไซต์ สุโขทัย | บริการออกแบบเว็บไซต์ธุรกิจท่องเที่ยวและรีสอร์ท",
    seoDescription:
      "สร้างความประทับใจให้ลูกค้าด้วยเว็บไซต์ท่องเที่ยวสุโขทัยที่สวยงาม ใช้งานง่าย และข้อมูลครบถ้วน",
  },
] as const;

/**
 * [HELPER]: Get Featured Areas
 * เลือกข้อมูลพื้นที่ที่ต้องการแสดงผล โดยเรียงตามลำดับความสำคัญ (Priority)
 */
export const FEATURED_AREAS = [...AREA_NODES].sort((a, b) => b.priority - a.priority).slice(0, 4);

/**
 * [HELPER]: Get Area by Slug
 * ค้นหาข้อมูลพื้นที่จาก Slug สำหรับหน้า Dynamic Page
 */
export const getAreaBySlug = (slug: string) => AREA_NODES.find((area) => area.slug === slug);
```

### CONFIG: master-registry.ts

```typescript
/**
 * [DATA REGISTRY]: MASTER_SERVICE_REGISTRY v17.0.1 (STABILIZED)
 * [STRATEGY]: Unified Visual Preview | Single Source of Truth | SEO Optimized
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { TemplateMasterData } from "@/types";

/**
 * @description คลังข้อมูลบริการหลักที่เชื่อมโยงรูปภาพพรีวิวสำหรับการแสดงผล Technical Modules
 */
export const MASTER_REGISTRY: readonly TemplateMasterData[] = [
  // --- [01. SALEPAGE: ระบบหน้าเว็บปิดการขาย] ---
  {
    id: "AEM-SVC-SP-01",
    title: "Sale Page หน้าเว็บที่เน้นปิดการขายโดยเฉพาะ",
    description:
      "เปลี่ยนคนดูให้เป็นลูกค้าด้วยหน้าเว็บที่เน้นให้ข้อมูลครบถ้วน จบในหน้าเดียว และช่วยให้ลูกค้าตัดสินใจซื้อง่ายขึ้น",
    image: "/images/service/preview.webp",
    price: "2,900",
    currency: "THB",
    priceValue: 2900,
    unit: "เริ่มต้น",
    category: "landing",
    templateSlug: "salepage",
    benefits: [
      "หน้าเว็บโหลดไวทันใจ ไม่ปล่อยให้ลูกค้าหลุดเพราะรอโหลดนาน",
      "วางระบบเก็บข้อมูล (Pixel & Tracking) สำหรับยิงโฆษณาได้แม่นยำ",
      "จัดวางข้อมูลให้ลื่นไหล กระตุ้นความอยากซื้อได้ดีกว่าเว็บทั่วไป",
    ],
    coreFeatures: [
      {
        title: "Direct Response Design",
        description: "ออกแบบมาเพื่อนำสายตาไปสู่การกดสั่งซื้อ",
        icon: "Target",
      },
      {
        title: "Mobile First",
        description: "เปิดดูผ่านมือถือได้สวยงามและลื่นไหล 100%",
        icon: "Smartphone",
      },
      {
        title: "Fast Checkout",
        description: "ปุ่มทักแชทหรือปุ่มสั่งซื้อโดดเด่น กดง่ายทันที",
        icon: "Zap",
      },
    ],
    faqs: [
      {
        question: "ใช้เวลานานแค่ไหนถึงจะใช้งานได้?",
        answer: "โดยปกติจะใช้เวลาประมาณ 3-5 วันทำการ หน้า Sale Page ก็พร้อมเปิดรับออเดอร์แล้วครับ",
      },
    ],
    priority: 1,
    isPopular: true,
  },

  // --- [02. CORPORATE: ระบบเว็บไซต์องค์กร] ---
  {
    id: "AEM-SVC-CP-03",
    title: "Website Corporate เว็บไซต์บริษัทที่เน้นความน่าเชื่อถือ",
    description: "สร้างความประทับใจแรกเห็นให้ธุรกิจของคุณ ด้วยเว็บไซต์มาตรฐานสากลที่ดูเป็นมืออาชีพ",
    image: "/images/service/preview.webp",
    price: "9,900",
    currency: "THB",
    priceValue: 9900,
    unit: "โปรเจกต์",
    category: "business",
    templateSlug: "corporate",
    clientTrust: "ได้รับความไว้วางใจจากธุรกิจและองค์กรระดับมืออาชีพ",
    benefits: [
      "ทำให้ภาพลักษณ์บริษัทดูน่าเชื่อถือและดูเป็นมืออาชีพในสายตาคู่ค้า",
      "วางรากฐานระบบให้คนหาธุรกิจคุณเจอใน Google ได้ง่ายในระยะยาว",
    ],
    coreFeatures: [
      {
        title: "Brand Identity",
        description: "งานดีไซน์ที่สะท้อนเอกลักษณ์และความน่าเชื่อถือของธุรกิจคุณ",
        icon: "Shield",
      },
      {
        title: "SEO Infrastructure",
        description: "เตรียมระบบหลังบ้านให้พร้อมสำหรับการติดหน้าแรก Google",
        icon: "Search",
      },
    ],
    faqs: [
      {
        question: "หลังจากทำเว็บเสร็จแล้ว มีคนดูแลไหม?",
        answer: "มีครับ เราดูแลเรื่องความเสถียรของระบบและคอยซัพพอร์ตช่วยเหลือคุณตลอดครับ",
      },
    ],
    priority: 3,
    isFeatured: true,
  },

  // --- [03. CATALOG: ระบบจัดการข้อมูลและแค็ตตาล็อก] ---
  {
    id: "AEM-SVC-EC-05",
    title: "Digital Catalog ระบบโชว์สินค้าและแค็ตตาล็อกออนไลน์",
    description: "จัดระเบียบสินค้าให้เป็นหมวดหมู่ ค้นหาง่าย และโชว์สินค้าของคุณให้น่าสนใจกว่าเดิม",
    image: "/images/service/preview.webp",
    price: "15,900",
    currency: "THB",
    priceValue: 15900,
    unit: "เริ่มต้น",
    category: "ecommerce",
    templateSlug: "catalog",
    benefits: [
      "ช่วยให้ลูกค้าเลือกดูสินค้าได้สะดวก แยกหมวดหมู่ชัดเจน ค้นหาอะไรก็เจอ",
      "คุณสามารถเพิ่มรูปภาพและใส่รายละเอียดสินค้าได้เอง ไม่จำกัดจำนวน",
    ],
    coreFeatures: [
      {
        title: "Smart Gallery",
        description: "โชว์ภาพสินค้าได้สวยงาม ชัดเจน และโหลดไว",
        icon: "Image",
      },
      {
        title: "Data Management",
        description: "ระบบจัดการสินค้าที่ใช้งานง่าย คุณก็อัปเดตเองได้",
        icon: "Database",
      },
    ],
    faqs: [
      {
        question: "ถ้ามีสินค้าเยอะมาก ระบบจะรองรับไหวไหม?",
        answer:
          "ไหวแน่นอนครับ ระบบถูกออกแบบมาให้จัดการข้อมูลจำนวนมากได้สบาย ๆ โดยไม่มีค่าบริการรายเดือนเพิ่มครับ",
      },
    ],
    priority: 6,
  },

  // --- [04. LOCAL: ความเชี่ยวชาญเฉพาะพื้นที่] ---
  {
    id: "AEM-SVC-LS-10",
    title: "Local SEO Service ระบบดึงลูกค้าในพื้นที่ (ปักหมุดธุรกิจ)",
    description: "ทำให้ลูกค้าในละแวกใกล้เคียงหาธุรกิจคุณเจอเป็นเจ้าแรกบน Google Maps",
    image: "/images/service/preview.webp",
    price: "6,900",
    currency: "THB",
    priceValue: 6900,
    unit: "พื้นที่",
    category: "business",
    templateSlug: "local",
    benefits: [
      "ดึงดูดลูกค้าที่อยู่ใกล้คุณ ซึ่งพร้อมจะเข้ามาใช้บริการได้ทันที",
      "เพิ่มโอกาสให้คนตัดสินใจเลือกคุณด้วยรีวิวและพิกัดที่ถูกต้อง",
    ],
    coreFeatures: [
      {
        title: "Area Targeting",
        description: "ใช้คำค้นหาที่คนในพื้นที่นิยมใช้จริง ๆ เพื่อให้คุณติดอันดับ",
        icon: "MapPin",
      },
      {
        title: "Google My Business",
        description: "ดูแลและปรับแต่งข้อมูลธุรกิจบนแผนที่ให้โดดเด่น",
        icon: "Map",
      },
    ],
    faqs: [
      {
        question: "ทำแล้วจะช่วยให้ยอดขายเพิ่มขึ้นจริงไหม?",
        answer:
          "ช่วยได้มากครับ เพราะเราทำให้คนที่กำลังต้องการบริการในพื้นที่นั้น ๆ มองเห็นคุณเป็นลำดับแรก",
      },
    ],
    priority: 10,
  },

  // --- [05. BIO: ประวัติและความเชี่ยวชาญส่วนบุคคล] ---
  {
    id: "AEM-SVC-PB-14",
    title: "Personal Portfolio เว็บโปรไฟล์และรวบรวมผลงาน",
    description: "สร้างตัวตนให้น่าเชื่อถือ และรวบรวมผลงานของคุณไว้ในที่เดียวแบบมืออาชีพ",
    image: "/images/service/preview.webp",
    price: "4,900",
    currency: "THB",
    priceValue: 4900,
    unit: "โปรเจกต์",
    category: "personal",
    templateSlug: "bio",
    benefits: [
      "สร้างความประทับใจให้ผู้ว่าจ้างหรือพาร์ทเนอร์ตั้งแต่ครั้งแรกที่เห็น",
      "รวมช่องทางติดต่อและผลงานทุกอย่างไว้ในลิงก์เดียว แชร์ง่ายและดูดี",
    ],
    coreFeatures: [
      {
        title: "Minimalist Design",
        description: "เน้นดีไซน์ที่ดูสะอาดตาแต่ทรงพลัง โชว์ตัวตนของคุณได้ชัดเจน",
        icon: "User",
      },
      {
        title: "Link in Bio",
        description: "ปุ่มรวมลิงก์โซเชียลและช่องทางติดต่อครบจบในที่เดียว",
        icon: "Link",
      },
    ],
    faqs: [
      {
        question: "ถ้ามีผลงานใหม่ อยากเพิ่มเองทำได้ไหม?",
        answer: "ทำได้ง่ายมากครับ เรามีระบบหลังบ้านที่คุณสามารถอัปเดตข้อมูลเองได้ตลอดเวลา",
      },
    ],
    priority: 15,
  },
];

/**
 * @const FEATURED_SERVICES
 * @description รายการบริการยอดนิยม (Featured/Popular)
 */
export const FEATURED_SERVICES: readonly TemplateMasterData[] = [...MASTER_REGISTRY]
  .filter((svc) => svc.isFeatured || svc.isPopular)
  .sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99));
```

### CONFIG: navigation.ts

```typescript
/**
 * [DATA REGISTRY]: NAVIGATION_INFRASTRUCTURE v17.0.0 (CLEAN_CORE)
 * [STRATEGY]: Single Source of Truth | Conversion-Driven | Anti-Shops Logic
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { SITE_CONFIG } from "./site-config";

/**
 * 01. MAIN_NAV: เมนูนำทางหลัก (Header)
 * [NOTE]: ใช้เป็น Single Source สำหรับ Navbar และ Mobile Menu
 */
export const MAIN_NAV = [
  { label: "หน้าแรก", href: "/" },
  { label: "บริการของเรา", href: "/services" },
  { label: "ผลงานที่ผ่านมา", href: "/case-studies" },
  { label: "พื้นที่ให้บริการ", href: "/areas" },
  { label: "บทความและเทคนิค", href: "/blog" },
] as const;

/**
 * 02. SERVICE_SOLUTIONS: บริการเฉพาะทาง (Service Modules)
 * [NOTE]: ใช้สำหรับ Dropdown หรือรายการใน Footer
 */
export const SERVICE_SOLUTIONS = [
  { label: "เว็บไซต์องค์กร (Corporate)", href: "/services/corporate" },
  { label: "หน้าปิดการขาย (Sale Page)", href: "/services/salepage" },
  { label: "ระบบแค็ตตาล็อกสินค้า", href: "/services/catalog" },
  { label: "ปักหมุดธุรกิจท้องถิ่น (Local SEO)", href: "/services/local" },
  { label: "ลิงก์โปรไฟล์ (Digital Bio)", href: "/services/bio" },
] as const;

/**
 * 03. FOOTER_MAP: โครงสร้างข้อมูลส่วนท้าย (Footer)
 * [STRATEGY]: รวม Service Solutions เข้ากับลิงก์บริษัทและกฎหมาย
 */
export const FOOTER_MAP = {
  services: [...SERVICE_SOLUTIONS, { label: "ดูบริการทั้งหมด", href: "/services" }],
  company: [
    { label: "เกี่ยวกับเรา", href: "/about" },
    { label: "พื้นที่บริการ", href: "/areas" },
    { label: "แผนผังเว็บไซต์ (Sitemap)", href: "/sitemap.xml" },
  ],
  legal: [
    { label: "นโยบายความเป็นส่วนตัว", href: "/privacy" },
    { label: "ข้อกำหนดและเงื่อนไข", href: "/terms" },
  ],
  connect: [
    { label: "ปรึกษาฟรี (Line OA)", href: SITE_CONFIG.links.line },
    { label: "สถานะระบบ (Status)", href: "/status" },
  ],
} as const;

/**
 * 04. CONVERSION_ACTIONS: ปุ่มดำเนินการสำคัญ (CTAs)
 * [NOTE]: ใช้สำหรับปุ่มที่ต้องการกระตุ้นการตัดสินใจ
 */
export const CONVERSION_ACTIONS = {
  primary: {
    label: "เริ่มปรึกษาฟรี",
    href: SITE_CONFIG.links.line,
    icon: "MessageCircle",
  },
  secondary: {
    label: "ดูเคสความสำเร็จ",
    href: "/case-studies",
    icon: "BarChart3",
  },
} as const;

/* TYPE DEFINITIONS: สำหรับใช้ใน Component */
export type NavItem = (typeof MAIN_NAV)[number];
export type ServiceItem = (typeof SERVICE_SOLUTIONS)[number];
```

### CONFIG: site-config.ts

```typescript
/**
 * [SYSTEM CORE]: GLOBAL_SITE_CONFIGURATION v17.0.2 (STABILIZED)
 * [MANDATE]: Single Source of Truth | EEAT Alignment | Strategic Branding
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { SiteConfig } from "@/types";

export const SITE_CONFIG: SiteConfig = {
  // [01. BRAND IDENTITY]: ข้อมูลระบุตัวตนพื้นฐาน
  brandName: "AEMDEVWEB",
  siteUrl: "https://aemdevweb.com",
  description:
    "รับทำเว็บไซต์และ SEO สายพันธุ์ใหม่ เน้นผลลัพธ์ทางธุรกิจ เปลี่ยนผู้เข้าชมให้เป็นลูกค้าด้วยดีไซน์เชิงกลยุทธ์และเทคโนโลยีความเร็วสูงจาก AEMDEVWEB",

  // [02. HERO_REGISTRY]: ศูนย์กลางควบคุมเนื้อหาหน้าแรก
  hero: {
    title: "AEMDEVWEB: Strategic Web Design for High-Conversion",
    description:
      "AEMDEVWEB ไม่ได้ทำแค่เว็บที่สวยงาม แต่เราวางโครงสร้างระบบให้เสถียร โหลดไวระดับเสี้ยววินาที เพื่อเปลี่ยนทุกการเข้าชมให้กลายเป็นยอดขายจริงสำหรับธุรกิจคุณ",
    primaryAction: "ปรึกษาวางแผนระบบฟรี",
    secondaryAction: "ดูบริการทั้งหมด",
  },

  // [03. PERSONA ANCHOR]: โทนและการสื่อสาร (Humanized Specialist)
  persona: {
    tone: "Professional Partner, Expert Authoritative, Trustworthy",
    communicationStyle: "Result-oriented, Friendly Expert, Direct & Clear",
    antiConnotation: "Avoid Robot-speak, No Over-complicated Jargon, Human-to-Human Focus",
  },

  // [04. SEO AUTHORITY]: ชุดคำค้นหาสำคัญเพื่อการทำอันดับ (Optimized for Thai Trends)
  keywords: [
    "รับทำเว็บไซต์",
    "รับออกแบบเว็บไซต์",
    "รับทำเว็บไซต์ กำแพงเพชร", // HQ Core Keyword
    "ทำเว็บติดหน้าแรก Google",
    "รับทำเว็บไซต์ Next.js",
    "รับทำเว็บขายของออนไลน์",
    "นายเอ็มซ่ามากส์", // [FIXED]: Added missing comma
    "จ้างทำเว็บไซต์ บริษัท",
    "ทำเว็บไซต์ SEO",
  ],

  // [05. TECHNICAL_STACK]: ข้อมูลทางเทคนิคของระบบ
  project: {
    title: "Premium Web Design & SEO Expert Hub",
    shortTitle: "AEMDEVWEB",
    version: "17.0.2", // Updated for Schema Stability
    framework: "Next.js 16.1 (Latest Stable)",
    uiStack: "Tailwind CSS + React 19",
  },

  // [06. EXPERT NODE]: ข้อมูลผู้เชี่ยวชาญ (EEAT Standard)
  expert: {
    displayName: "นายเอ็มซ่ามากส์",
    legalName: "Alongkorl Yomkert",
    legalNameThai: "อลงกรณ์ ยมเกิด",
    role: "ผู้เชี่ยวชาญด้านเทคนิคและผู้วางกลยุทธ์ SEO (Technical SEO Specialist)",
    jobTitle: "Technical SEO Specialist",
    signature: "นายเอ็มซ่ามากส์",
    avatar: "/images/avatar.webp",
    email: "me@aemdevweb.com",
    bioUrl: "/about",
  },

  // [07. CONTACT & ACCESS]: ช่องทางการติดต่อ
  // [RECTIFIED]: เพิ่ม streetAddress เพื่อแก้ปัญหา Warning ใน Google Search Console
  contact: {
    email: "me@aemdevweb.com",
    phone: "099-032-2175",
    displayPhone: "ทักแชทผ่าน Line Account เพื่อการตอบกลับที่รวดเร็วที่สุดครับ",
    streetAddress: "ตำบลในเมือง",
    address: "จังหวัดกำแพงเพชร ประเทศไทย",
    postalCode: "62000",
    workHours: "จันทร์ - ศุกร์, 09:00 - 18:00 (พร้อมให้คำปรึกษาแผนงาน)",
  },

  // [08. STRATEGIC LINKS]: ลิงก์ช่องทางโซเชียล
  links: {
    line: "https://lin.ee/kVRNkIy",
    lineId: "@127cnhtn",
    messenger: "https://m.me/aemdevweb",
    facebook: "https://facebook.com/aemdevweb",
    github: "https://github.com/private",
  },

  // [09. BUSINESS METRICS]: ข้อมูลพื้นที่บริการ (Local SEO Focus)
  business: {
    location: "Kamphaeng Phet",
    region: "Thailand",
    industry: "Web Infrastructure & Technical SEO",
    roiFocus: true,
    established: "2026",
  },

  // [10. ENGINE VERIFICATION]: การยืนยันสิทธิ์ระบบ
  verification: {
    // [FIXED]: ใส่รหัสยืนยันจากลิงก์ Search Console ที่คุณส่งมาให้เรียบร้อยแล้ว
    google: "HmlcGbJ8eKWuc1QN_UUpBQ",
  },
} as const;

export type GlobalConfig = typeof SITE_CONFIG;
```

---

## DIRECTORY INFRASTRUCTURE

```text
[3.4K 2026-02-09 00:40]  .
├── [8.3K 2026-02-09 00:41]  AEMDEVWEB-STRUCTURE.txt
├── [ 990 2026-02-08 03:53]  DEV.md
├── [ 40K 2026-02-09 00:59]  README.md
├── [1.9K 2026-02-07 18:40]  a.sh
├── [3.4K 2026-02-09 00:38]  app
│   ├── [3.4K 2026-02-08 12:18]  (routes)
│   │   ├── [3.4K 2026-02-07 18:49]  areas
│   │   │   ├── [3.4K 2026-02-07 18:49]  [slug]
│   │   │   │   └── [6.8K 2026-02-08 23:10]  page.tsx
│   │   │   └── [5.9K 2026-02-08 23:05]  page.tsx
│   │   ├── [3.4K 2026-02-07 18:49]  blog
│   │   │   ├── [3.4K 2026-02-07 18:49]  [slug]
│   │   │   │   └── [ 11K 2026-02-08 23:10]  page.tsx
│   │   │   └── [7.3K 2026-02-08 23:05]  page.tsx
│   │   ├── [3.4K 2026-02-07 18:49]  case-studies
│   │   │   ├── [3.4K 2026-02-07 18:49]  [slug]
│   │   │   │   └── [9.6K 2026-02-08 23:12]  page.tsx
│   │   │   └── [7.5K 2026-02-08 23:05]  page.tsx
│   │   ├── [3.0K 2026-02-08 23:05]  layout.tsx
│   │   ├── [3.4K 2026-02-07 18:49]  services
│   │   │   ├── [3.4K 2026-02-07 18:49]  [slug]
│   │   │   │   └── [5.9K 2026-02-08 23:05]  page.tsx
│   │   │   └── [7.7K 2026-02-08 23:05]  page.tsx
│   │   └── [3.4K 2026-02-08 04:11]  test-mdx
│   │       ├── [4.9K 2026-02-08 23:05]  content.mdx
│   │       └── [6.2K 2026-02-08 23:05]  page.tsx
│   ├── [3.4K 2026-02-07 18:41]  about
│   │   └── [ 14K 2026-02-08 23:05]  page.tsx
│   ├── [5.1K 2026-02-08 23:05]  globals.css
│   ├── [5.7K 2026-02-09 00:49]  layout.tsx
│   ├── [4.0K 2026-02-08 16:30]  loading.tsx
│   ├── [2.3K 2026-02-09 00:47]  manifest.ts
│   ├── [5.6K 2026-02-08 16:30]  not-found.tsx
│   ├── [ 11K 2026-02-08 23:05]  page.tsx
│   ├── [3.4K 2026-02-07 18:41]  privacy
│   │   └── [ 10K 2026-02-08 16:30]  page.tsx
│   ├── [2.4K 2026-02-09 00:26]  robots.ts
│   ├── [3.5K 2026-02-09 00:25]  sitemap.ts
│   ├── [3.4K 2026-02-08 18:42]  status
│   │   └── [ 10K 2026-02-08 23:05]  page.tsx
│   └── [3.4K 2026-02-07 18:41]  terms
│       └── [ 12K 2026-02-08 16:30]  page.tsx
├── [ 10K 2026-02-08 16:30]  color.html
├── [3.4K 2026-02-07 19:29]  components
│   ├── [3.4K 2026-02-07 19:25]  features
│   │   ├── [3.4K 2026-02-07 19:25]  areas
│   │   │   └── [6.8K 2026-02-08 23:05]  AreaCard.tsx
│   │   ├── [3.4K 2026-02-07 19:25]  blog
│   │   │   └── [5.8K 2026-02-08 19:03]  BlogCard.tsx
│   │   ├── [3.4K 2026-02-07 19:25]  case-studies
│   │   │   └── [6.1K 2026-02-08 23:10]  CaseStudyCard.tsx
│   │   ├── [3.4K 2026-02-08 12:18]  landing
│   │   │   ├── [7.7K 2026-02-08 23:05]  Hero.tsx
│   │   │   ├── [ 11K 2026-02-08 23:05]  PricingSection.tsx
│   │   │   └── [7.8K 2026-02-08 23:05]  WorkProcess.tsx
│   │   └── [3.4K 2026-02-07 19:25]  services
│   │       ├── [8.0K 2026-02-08 23:05]  ServiceCard.tsx
│   │       └── [4.5K 2026-02-08 23:05]  ServiceListingHub.tsx
│   ├── [3.4K 2026-02-07 19:29]  layout
│   │   ├── [9.6K 2026-02-08 23:05]  Footer.tsx
│   │   ├── [9.3K 2026-02-08 23:06]  Navbar.tsx
│   │   └── [1.9K 2026-02-08 23:05]  TopLoader.tsx
│   ├── [3.4K 2026-02-07 18:03]  seo
│   │   └── [2.3K 2026-02-08 23:05]  JsonLd.tsx
│   ├── [3.4K 2026-02-08 23:27]  shared
│   │   ├── [6.2K 2026-02-08 23:05]  ConversionCTA.tsx
│   │   ├── [6.0K 2026-02-08 23:05]  ImpactStats.tsx
│   │   ├── [3.7K 2026-02-08 23:05]  LineStickyButton.tsx
│   │   └── [4.6K 2026-02-08 23:05]  TrustBadge.tsx
│   ├── [3.4K 2026-02-07 19:35]  templates
│   │   ├── [3.4K 2026-02-07 19:19]  bio
│   │   │   ├── [9.7K 2026-02-08 23:06]  Index.tsx
│   │   │   └── [2.0K 2026-02-08 23:05]  Schema.ts
│   │   ├── [3.4K 2026-02-07 19:20]  catalog
│   │   │   ├── [7.3K 2026-02-08 23:06]  Index.tsx
│   │   │   └── [2.5K 2026-02-08 23:05]  Schema.ts
│   │   ├── [3.4K 2026-02-07 19:20]  corporate
│   │   │   ├── [9.8K 2026-02-08 23:06]  Index.tsx
│   │   │   └── [2.5K 2026-02-08 23:05]  Schema.ts
│   │   ├── [3.4K 2026-02-07 19:20]  local
│   │   │   ├── [ 10K 2026-02-08 23:06]  Index.tsx
│   │   │   └── [2.7K 2026-02-08 22:20]  Schema.ts
│   │   ├── [3.4K 2026-02-07 19:20]  salepage
│   │   │   ├── [8.5K 2026-02-08 23:06]  Index.tsx
│   │   │   └── [1.9K 2026-02-08 22:18]  Schema.ts
│   │   └── [3.4K 2026-02-08 23:27]  sections
│   │       ├── [9.4K 2026-02-08 23:05]  DynamicFAQ.tsx
│   │       ├── [7.0K 2026-02-08 23:05]  FeatureGrid.tsx
│   │       ├── [6.2K 2026-02-08 23:05]  HeroEngine.tsx
│   │       └── [4.4K 2026-02-08 23:05]  LayoutEngine.tsx
│   └── [3.4K 2026-02-08 00:40]  ui
│       ├── [3.7K 2026-02-08 23:06]  IconRenderer.tsx
│       ├── [2.8K 2026-02-08 23:05]  SkeletonCard.tsx
│       ├── [3.6K 2026-02-08 23:05]  button.tsx
│       ├── [ 828 2026-02-08 23:05]  skeleton.tsx
│       └── [3.0K 2026-02-08 22:30]  sonner.tsx
├── [ 425 2026-02-08 03:53]  components.json
├── [3.4K 2026-02-09 00:58]  config
│   ├── [8.0K 2026-02-09 00:58]  _00-SYSTEM-MANDATE.md
│   └── [7.6K 2026-02-08 03:53]  _01-SYSTEM-PROMPT-EXTENSION.md
├── [3.4K 2026-02-08 23:27]  constants
│   ├── [ 13K 2026-02-08 23:05]  area-nodes.ts
│   ├── [ 12K 2026-02-08 23:05]  master-registry.ts
│   ├── [3.2K 2026-02-08 23:36]  navigation.ts
│   └── [5.3K 2026-02-09 00:24]  site-config.ts
├── [3.4K 2026-02-04 00:37]  content
│   ├── [3.4K 2026-02-05 10:32]  blog
│   │   ├── [4.4K 2026-02-08 15:36]  5-points-killing-sales.mdx
│   │   ├── [5.2K 2026-02-08 15:43]  advanced-schema-markup.mdx
│   │   ├── [4.9K 2026-02-08 15:44]  copywriting-secrets.mdx
│   │   ├── [5.5K 2026-02-08 15:45]  core-web-vitals-speed.mdx
│   │   ├── [5.8K 2026-02-08 15:46]  ecommerce-conversion-seo.mdx
│   │   ├── [5.2K 2026-02-08 15:47]  facebook-ads-vs-website.mdx
│   │   ├── [7.8K 2026-02-08 19:03]  seo-for-sme-2026.mdx
│   │   ├── [6.0K 2026-02-08 15:49]  seo-google-love-technical-guide.mdx
│   │   ├── [5.1K 2026-02-08 15:50]  starting-business-low-budget-website.mdx
│   │   └── [4.3K 2026-02-08 16:30]  technical-structure-audit.mdx
│   └── [3.4K 2026-02-05 10:32]  case-studies
│       ├── [4.3K 2026-02-08 15:28]  industrial-catalog-rfq-optimization.mdx
│       ├── [4.3K 2026-02-08 15:27]  sme-web-performance-growth.mdx
│       └── [3.2K 2026-02-08 16:30]  unlink-reputation-management-success.mdx
├── [2.1K 2026-02-08 23:05]  eslint.config.mjs
├── [3.4K 2026-02-07 19:29]  hooks
├── [ 239 2026-02-08 11:03]  knip.json
├── [3.4K 2026-02-08 01:20]  lib
│   ├── [3.7K 2026-02-08 19:25]  cms.ts
│   ├── [4.5K 2026-02-09 00:01]  schema.ts
│   ├── [4.9K 2026-02-08 23:05]  seo.ts
│   └── [3.6K 2026-02-08 23:05]  utils.ts
├── [6.0K 2026-02-08 19:14]  mdx-components.tsx
├── [ 247 2026-02-08 23:14]  next-env.d.ts
├── [3.3K 2026-02-08 23:31]  next.config.ts
├── [2.0K 2026-02-08 23:27]  package.json
├── [133K 2026-02-08 23:28]  pnpm-lock.yaml
├── [  51 2026-02-04 00:22]  pnpm-workspace.yaml
├── [1.1K 2026-02-08 03:53]  postcss.config.mjs
├── [3.4K 2026-02-09 00:44]  public
│   └── [3.4K 2026-02-09 00:43]  images
│       ├── [3.4K 2026-02-08 22:09]  areas
│       │   └── [ 22K 2026-02-08 22:04]  nakhon-sawan-node.webp (2)
│       ├── [3.4K 2026-02-08 20:58]  blog
│       ├── [3.4K 2026-02-08 22:09]  case-studies
│       ├── [3.4K 2026-02-08 22:09]  expert
│       ├── [3.4K 2026-02-04 00:34]  seo
│       ├── [3.4K 2026-02-08 12:23]  service
│       ├── [3.4K 2026-02-05 23:34]  shared
│       ├── [3.4K 2026-02-08 22:09]  showcase
│       ├── [3.4K 2026-02-08 00:13]  templates
│       │   ├── [3.4K 2026-02-07 03:19]  corporate-pro
│       │   ├── [3.4K 2026-02-07 03:19]  event-magic
│       │   ├── [3.4K 2026-02-07 03:19]  facebook-ads-expert
│       │   ├── [3.4K 2026-02-07 03:19]  hotel-resort
│       │   ├── [3.4K 2026-02-07 03:20]  local-service
│       │   ├── [3.4K 2026-02-07 03:20]  personal-bio
│       │   ├── [3.4K 2026-02-07 03:20]  restaurant-cafe
│       │   ├── [3.4K 2026-02-07 03:20]  salepage-single
│       │   ├── [3.4K 2026-02-07 03:20]  seo-agency
│       │   ├── [3.4K 2026-02-07 03:20]  shopmasterpro
│       │   ├── [3.4K 2026-02-07 03:21]  starter-landing
│       │   └── [3.4K 2026-02-07 03:21]  webrental
│       └── [3.4K 2026-02-08 22:09]  ui
├── [3.4K 2026-02-08 22:09]  scripts
│   ├── [1.2K 2026-02-05 16:14]  check-system.sh
│   ├── [1.2K 2026-02-05 16:18]  clean-dev.sh
│   ├── [2.0K 2026-02-08 22:09]  cleanup-images.sh
│   ├── [3.4K 2026-02-05 21:08]  dev
│   │   ├── [1.2K 2026-02-05 17:09]  clean-project.sh
│   │   ├── [ 937 2026-02-04 20:50]  knip-check.sh
│   │   └── [5.1K 2026-02-04 00:22]  pre-deploy-check.sh
│   └── [1.9K 2026-02-07 19:44]  generate_docs.sh
├── [5.1K 2026-02-09 00:40]  structure.txt
├── [ 670 2026-02-08 03:53]  tsconfig.json
├── [167K 2026-02-09 00:50]  tsconfig.tsbuildinfo
└── [3.4K 2026-02-08 20:33]  types
    ├── [6.1K 2026-02-09 00:22]  index.d.ts
    └── [ 377 2026-02-08 23:05]  mdx.d.ts

68 directories, 109 files
```
