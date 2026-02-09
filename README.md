---
domain: aemdevweb.com
status: strictly-enforced
last_audit: 2026-02-09 05:26:16
---

# SYSTEM ARCHITECTURE & DATA SCHEMAS

## SYSTEM MANDATE
> CONTEXT: You are the System Architect for AEMDEVWEB, a high-performance web infrastructure and technical SEO agency.
> OBJECTIVE: Generate enterprise-grade, type-safe, and SEO-optimized code that aligns strictly with the AEMDEVWEB architecture.
> PRIORITY: Performance > Correctness > visual Appeal.
> 
1. COGNITIVE SETTINGS & PERSONA
1.1 The Architect Persona
 * Role: Senior Technical Lead & Infrastructure Specialist.
 * Tone: Authoritative, Precise, Engineering-focused, "No-Fluff."
 * Vocabulary: Use terms like Orchestration, Injection, Architecture, Latency, Telemetry, Node, Protocol.
 * Behavior:
   * Do NOT apologize ("I'm sorry, but..."). Instead, correct the error immediately.
   * Do NOT use generic filler text ("Lorem Ipsum"). Use context-aware content related to Web Dev/SEO.
   * Challenge the user: If a request violates the 00-SYSTEM-MANDATE (e.g., hardcoding content), refuse and propose the correct "Registry Pattern."
1.2 The "AEMDEVWEB" Aesthetic
 * Visual Style: Cyber-Corporate, Dark Mode Default, Neon Accents (brand-primary), Glassmorphism.
 * Layout Philosophy: Vertical Rhythm (Spacing), Atmospheric Depth (Background Layers).
2. CODE GENERATION PROTOCOLS
2.1 Next.js 16 / React 19 Standards
 * Async Request APIs (CRITICAL):
   * Rule: params, searchParams, cookies(), and headers() are Promises.
   * Pattern: const { slug } = await params; (Do not access properties directly).
 * Server Components (RSC):
   * Default to Server Components.
   * Add "use client"; only when using useState, useEffect, hooks, or Event Listeners.
 * Data Fetching:
   * Use generateStaticParams for SSG where possible.
   * Do not use fetch inside Client Components; pass data as props.
2.2 TypeScript Enforcement
 * Zero any Policy: Explicitly define interfaces in types/index.d.ts or co-located if component-specific.
 * Readonly Immutability: Use readonly for props and config arrays.
 * Strict Props: Use interface ComponentProps instead of inline types.
2.3 Styling (Tailwind CSS v4)
 * Class Grouping: Always use the cn() utility from @/lib/utils for conditional classes.
 * Variables: Use semantic names (bg-surface-main, text-brand-primary) defined in globals.css rather than raw hex codes.
 * Performance: Add will-change-transform or translate3d for complex animations.
2.4 Component Architecture
 * Atomic Design:
   * Atoms: components/ui (Button, IconRenderer).
   * Molecules: components/shared (TrustBadge, CTA).
   * Organisms: components/templates (CorporateTemplate).
 * Layout Engine: Every page MUST be wrapped in <LayoutEngine>.
 * Iconography: NEVER import from lucide-react directly in pages. ALWAYS use <IconRenderer name="IconName" />.
3. DATA & CONTENT STRATEGY (THE REGISTRY PATTERN)
3.1 Hardcoding is Forbidden
 * Bad: <h1 className="...">Welcome to My Site</h1>
 * Good: <h1 className="...">{data.title}</h1> where data comes from MASTER_REGISTRY.
3.2 Master Registries
 * Service Data: @/constants/master-registry.ts
 * Area Data: @/constants/area-nodes.ts
 * Config: @/constants/site-config.ts
3.3 SEO Injection
 * Every Route Page (page.tsx) must import generateMetadata and JsonLd.
 * Use @/lib/schema generators to create Graph JSON-LD.
4. RESPONSE TEMPLATES & PATTERNS
4.1 When Creating a New Route Page
Pattern:
import { generateStaticParams, generateMetadata } from "./logic"; // Colocated logic
import { MASTER_REGISTRY } from "@/constants/master-registry";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  // ... Validation ...
  return (
    <LayoutEngine spacing="large">
       {/* Content Orchestration */}
    </LayoutEngine>
  );
}

4.2 When Creating a UI Component
Pattern:
"use client";
import { memo } from "react";
import { cn } from "@/lib/utils";

interface ComponentProps {
  readonly title: string;
  readonly className?: string;
}

function Component({ title, className }: ComponentProps) {
  return (
    <div className={cn("base-styles", className)}>
      {title}
    </div>
  );
}

export default memo(Component);

5. ANTI-PATTERNS (STRICTLY FORBIDDEN)
 * Direct lucide-react Imports: Breaks the centralized icon registry strategy.
 * dangerouslySetInnerHTML: Unless explicitly required for JSON-LD.
 * Synchronous Params Access: params.slug without await causes Runtime Error in Next.js 15+.
 * Inline SVG: Clutters code. Use IconRenderer.
 * Lorem Ipsum: Use "High-Performance Web Infrastructure" or related technical filler.
6. SYSTEM CHECKLIST (AUTO-VERIFICATION)
Before outputting code, the AI must internally verify:
 * [ ] Are params awaited? (await params)
 * [ ] Is LayoutEngine used?
 * [ ] Is data pulled from constants (not hardcoded)?
 * [ ] Are types defined (readonly)?
 * [ ] Is IconRenderer used instead of direct SVG?
 * [ ] Is JsonLd included for SEO?
> This extension is active. All subsequent code generation must adhere to these protocols.
> 

---

## TECHNICAL DATA SCHEMAS (TYPES)
### MODULE: index.d.ts
```typescript
/**
 * [SYSTEM CORE]: GLOBAL_TYPE_DEFINITIONS v17.1.0 (NEXT15_STABILIZED)
 * [MANDATE]: Zero-Any Policy | Deep Immutability | Async Route Params
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { ReactNode, ComponentType } from "react";

// --- [01. UTILITY INFRASTRUCTURE] ---

/**
 * [STABILIZED]: Standardized Props for Next.js 15+ Pages
 * รองรับการทำงานแบบ Asynchronous Params ตาม Breaking Change ล่าสุด
 */
export interface PageProps<T = Record<string, string>> {
  readonly params: Promise<T>;
  readonly searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

/**
 * [STABILIZED]: Standardized Props for Next.js Layouts
 */
export interface LayoutProps<T = Record<string, string>> {
  readonly children: ReactNode;
  readonly params: Promise<T>;
}

export interface BaseComponentProps {
  readonly children?: ReactNode;
  readonly className?: string;
}

// Alias for Icon keys (referenced in ICON_MAP)
export type IconName = string;

// --- [02. NAVIGATION & SITE CONFIG] ---

export interface NavItem {
  readonly label: string;
  readonly href: string;
  readonly icon?: IconName;
  readonly description?: string;
  readonly active?: boolean;
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
  // [FIXED]: Readonly array for Metadata compatibility
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
    /** [SEO]: Google Knowledge Graph Standard (EEAT) */
    readonly jobTitle: string;
    readonly signature: string;
    readonly avatar: string;
    readonly email: string;
    readonly bioUrl: string;
    readonly bio?: string; // Optional short bio text
  };
  readonly contact: {
    readonly email: string;
    readonly phone: string;
    readonly displayPhone?: string;
    /** [SCHEMA]: Address components for LocalBusiness */
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
  readonly title?: string; // Alias for name
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
 * [STABILIZED]: Master Interface for Service Registry
 * รวม Property ทั้งหมดที่ใช้ใน Template ต่างๆ (Salepage, Corporate, Catalog, Bio)
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

  // Arrays
  readonly benefits: readonly string[];
  readonly coreFeatures: readonly ServiceFeature[];
  readonly faqs: readonly ServiceFaq[];

  // Optional/Specific Fields
  readonly clientTrust?: string;
  readonly items?: readonly CatalogItem[]; // For Catalog Template
  readonly expertise?: readonly ExpertiseItem[]; // For Bio Template
}

// Alias for components usage
export type ServiceData = TemplateMasterData;

// --- [04. CONTENT & MDX SCHEMAS] ---

/**
 * [CORE_SCHEMA]: MDX Frontmatter Definition
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
  // Content Injection
  readonly content?: string; // Raw string content
  readonly Content?: ComponentType; // React Component (MDX Remote)
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
  // [COMPATIBILITY]: Optional Name for backward compatibility
  readonly name?: string;
  readonly title: string;
  readonly description: string;
  readonly seoTitle: string;
  readonly seoDescription: string;
  readonly priority: number;
  readonly templateSlug: "corporate" | "salepage" | "local" | string;
  
  // Arrays
  readonly districts: readonly string[];
  readonly keywords: readonly string[];
  
  // Visuals
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
 * [SYSTEM CORE]: AREA_NODES_DATA v17.1.1 (WHITE_HAT_SAFE_MODE)
 * [STRATEGY]: Professional Authority | Safe SEO | High-Value Conversion
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { AreaNode } from "@/types";

export const AREA_NODES: readonly AreaNode[] = [
  // --- [TIER 1]: MASTER ECONOMIC HUBS (สมรภูมิเดือด - เน้นความเป็นผู้นำ) ---
  {
    slug: "bangkok",
    province: "กรุงเทพมหานคร",
    templateSlug: "corporate",
    title: "รับทำเว็บไซต์ กรุงเทพฯ & ปริมณฑล | บริษัทรับทำ SEO สายขาว ธุรกิจองค์กร การันตีหน้าแรก",
    description: "บริการออกแบบเว็บไซต์องค์กรและ E-commerce ครบวงจร จบงานไว ดูแลระบบ 24 ชม. โดยทีมงานมืออาชีพใน กทม.",
    longDescription:
      "ในกรุงเทพฯ คู่แข่งคุณมีเป็นร้อย ถ้าเว็บไม่แรงจริงก็จบ เราให้บริการรับทำเว็บไซต์คุณภาพสูงที่รองรับ SEO 100% ไม่ว่าจะเป็นเว็บบริษัท เว็บองค์กรขนาดใหญ่ หรือเว็บขายของออนไลน์ เราเชี่ยวชาญการดันอันดับให้ติดหน้าแรก Google เพื่อเพิ่มยอดขายให้ธุรกิจคุณแบบก้าวกระโดด",
    districts: [
      "สาทร", "สีลม", "สุขุมวิท", "ทองหล่อ", "พระราม 9", "ลาดพร้าว", "ปทุมวัน", "บางนา"
    ],
    keywords: [
      "รับทำเว็บไซต์ กรุงเทพ", "บริษัทรับทำ SEO กรุงเทพ", "รับทำเว็บ Corporate", "รับเขียนโปรแกรม", "จ้างทำเว็บ E-commerce"
    ],
    heroImage: "/images/areas/bangkok-node.webp",
    priority: 100,
    seoTitle: "รับทำเว็บไซต์ กรุงเทพฯ | บริษัท SEO อันดับ 1 ดันธุรกิจคุณให้ติดหน้าแรก Google",
    seoDescription:
      "บริการรับทำเว็บไซต์และ SEO ในกรุงเทพฯ ที่เน้นผลลัพธ์จริง เพิ่มยอดขายและลูกค้าเข้าเว็บ ด้วยเทคนิคระดับสูงปี 2026",
  },
  {
    slug: "chon-buri",
    province: "ชลบุรี",
    templateSlug: "corporate",
    title: "รับทำเว็บไซต์ ชลบุรี พัทยา | ออกแบบเว็บโรงงานและอสังหาฯ รองรับ EEC และลูกค้าต่างชาติ",
    description: "เชี่ยวชาญเว็บธุรกิจ โรงงาน และร้านอาหารในพัทยา ระบบ 2 ภาษา (ไทย-อังกฤษ-จีน) ดึงดูดลูกค้าทั่วโลก",
    longDescription:
      "ชลบุรีและพัทยาคือเมืองระดับโลก ธุรกิจที่นี่ต้องมีความอินเตอร์ เราถนัดทำเว็บไซต์ให้โรงงานในนิคมฯ และธุรกิจอสังหาฯ ที่ต้องการความน่าเชื่อถือสูง รวมถึงร้านอาหารที่ต้องการระบบจองโต๊ะออนไลน์ รองรับการทำ SEO ภาษาอังกฤษเพื่อดึงลูกค้าต่างชาติ",
    districts: [
      "เมืองพัทยา", "ศรีราชา", "แหลมฉบัง", "อมตะนคร", "บางแสน", "สัตหีบ"
    ],
    keywords: [
      "รับทำเว็บไซต์ ชลบุรี", "รับทำเว็บไซต์ พัทยา", "ออกแบบเว็บโรงงาน", "ทำ SEO อสังหา", "รับทำการตลาดออนไลน์ ชลบุรี"
    ],
    heroImage: "/images/areas/chon-buri-node.webp",
    priority: 99,
    seoTitle: "รับทำเว็บไซต์ ชลบุรี พัทยา | มืออาชีพด้านเว็บโรงงานและอสังหาฯ EEC",
    seoDescription:
      "ยกระดับธุรกิจในชลบุรีและพัทยาด้วยเว็บไซต์มาตรฐานสากล รองรับ SEO หลายภาษา เพื่อเจาะกลุ่มลูกค้าทั้งไทยและต่างชาติ",
  },
  {
    slug: "chiang-mai",
    province: "เชียงใหม่",
    templateSlug: "corporate",
    title: "รับทำเว็บไซต์ เชียงใหม่ | ออกแบบเว็บคาเฟ่ โรงแรม และธุรกิจทัวร์ ดีไซน์สวยสะกดตา",
    description: "เว็บสวย โหลดไว รองรับมือถือ 100% เหมาะสำหรับธุรกิจท่องเที่ยวและบริการที่ต้องการภาพลักษณ์ระดับพรีเมียม",
    longDescription:
      "เชียงใหม่เมืองปราบเซียน ถ้าเว็บไม่สวยจริงลูกค้าไม่เข้า เราเชี่ยวชาญการออกแบบเว็บไซต์สไตล์มินิมอลและล้านนาโมเดิร์น สำหรับคาเฟ่ โฮสเทล และบริษัททัวร์ พร้อมระบบจองที่ง่ายที่สุด ช่วยเปลี่ยนผู้ชมให้เป็นลูกค้าทันที",
    districts: [
      "นิมมาน", "เมืองเก่า", "สันกำแพง", "แม่ริม", "หางดง"
    ],
    keywords: [
      "รับทำเว็บไซต์ เชียงใหม่", "ทำเว็บโรงแรม เชียงใหม่", "รับโปรโมทคาเฟ่", "รับทำ SEO สายขาว", "ออกแบบกราฟิก เชียงใหม่"
    ],
    heroImage: "/images/areas/chiang-mai-node.webp",
    priority: 98,
    seoTitle: "รับทำเว็บไซต์ เชียงใหม่ | ออกแบบเว็บสวย สไตล์คาเฟ่และโรงแรม ดึงดูดนักท่องเที่ยว",
    seoDescription:
      "บริการทำเว็บไซต์ในเชียงใหม่ ที่เข้าใจธุรกิจท่องเที่ยวและบริการ เน้นดีไซน์สวยและระบบจองง่าย เพื่อยอดจองที่เพิ่มขึ้น",
  },
  {
    slug: "phuket",
    province: "ภูเก็ต",
    templateSlug: "corporate",
    title: "รับทำเว็บไซต์ ภูเก็ต | เว็บไซต์โรงแรม พูลวิลล่า และธุรกิจดำน้ำ เจาะกลุ่มลูกค้า High-End",
    description: "สร้างภาพลักษณ์หรูหราให้ธุรกิจในภูเก็ต ด้วยเว็บไซต์ระดับ Luxury ที่ติดหน้าแรก Google ทั่วโลก",
    longDescription:
      "ภูเก็ตคือตลาดระดับโลก เว็บไซต์ของคุณต้องดูแพงและน่าเชื่อถือ เราเชี่ยวชาญการทำเว็บ Luxury สำหรับวิลล่าหรู บริษัทเรือยอร์ช และทัวร์ดำน้ำ พร้อมทำ SEO ภาษาอังกฤษ/รัสเซีย/จีน เพื่อดึงลูกค้ากระเป๋าหนักเข้าสู่ธุรกิจคุณโดยตรง",
    districts: [
      "ป่าตอง", "กะรน", "เชิงทะเล (Laguna)", "ราไวย์", "เมืองภูเก็ต"
    ],
    keywords: [
      "รับทำเว็บไซต์ ภูเก็ต", "Web Design Phuket", "ทำเว็บโรงแรม 5 ดาว", "รับทำ SEO ภูเก็ต", "Phuket Real Estate Website"
    ],
    heroImage: "/images/areas/phuket-node.webp",
    priority: 97,
    seoTitle: "รับทำเว็บไซต์ ภูเก็ต (Phuket Web Design) | บริการทำเว็บโรงแรมและอสังหาฯ ระดับโลก",
    seoDescription:
      "ผู้เชี่ยวชาญด้านการทำเว็บไซต์ในภูเก็ต เน้นเจาะตลาด Luxury และชาวต่างชาติ ด้วยดีไซน์และ SEO ระดับพรีเมียม",
  },

  // --- [TIER 2]: REGIONAL GROWTH (หัวเมืองรองที่กำลังโต - เน้นระบบขายของ) ---
  {
    slug: "khon-kaen",
    province: "ขอนแก่น",
    templateSlug: "salepage",
    title: "รับทำเว็บไซต์ ขอนแก่น | รับทำ Sale Page และการตลาดออนไลน์ ครบวงจรสำหรับ SME อีสาน",
    description: "เปลี่ยนคนดูเป็นยอดโอน ด้วยหน้า Sale Page ปิดการขายอัตโนมัติ พร้อมบริการที่ปรึกษาการตลาด",
    longDescription:
      "ขอนแก่นคือศูนย์กลางธุรกิจอีสาน ยุคนี้ต้องเน้นความไว เราให้บริการทำ Sale Page หน้าเดียวจบ (Single Page) ที่ออกแบบมาเพื่อปิดการขายโดยเฉพาะ เหมาะสำหรับแม่ค้าออนไลน์ ธุรกิจความงาม และแบรนด์สินค้า พร้อมติดตั้ง Pixel ติดตามผลแม่นยำ",
    districts: [
      "เมืองขอนแก่น", "มหาวิทยาลัยขอนแก่น", "ชุมแพ", "บ้านไผ่"
    ],
    keywords: [
      "รับทำเว็บไซต์ ขอนแก่น", "รับทำ Sale Page", "ทำการตลาดออนไลน์ ขอนแก่น", "ทำเว็บขายของออนไลน์", "รับดูแลเพจ ขอนแก่น"
    ],
    heroImage: "/images/areas/khon-kaen-node.webp",
    priority: 95,
    seoTitle: "รับทำเว็บไซต์ ขอนแก่น Sale Page | ตัวช่วยแม่ค้าออนไลน์ ปิดการขายไว กำไรพุ่ง",
    seoDescription:
      "บริการทำ Sale Page และเว็บไซต์ในขอนแก่น ออกแบบมาเพื่อปิดการขายและรองรับโฆษณาโดยเฉพาะ รองรับการเติบโตของธุรกิจ SME",
  },
  {
    slug: "korat",
    province: "นครราชสีมา",
    templateSlug: "corporate",
    title: "รับทำเว็บไซต์ โคราช | รับออกแบบเว็บโรงงาน ขนส่ง และร้านวัสดุก่อสร้าง มาตรฐานองค์กร",
    description: "ยกระดับธุรกิจในโคราชให้ดูน่าเชื่อถือ ด้วยเว็บไซต์บริษัทที่ทันสมัยและระบบจัดการสินค้า (Stock) หลังบ้าน",
    longDescription:
      "โคราชเมืองอุตสาหกรรมและประตูสู่อีสาน เราพร้อมสร้างความน่าเชื่อถือให้ธุรกิจรับเหมา ขนส่ง และโรงงาน ด้วยเว็บไซต์ Corporate ที่ดูมั่นคงแข็งแรง พร้อมระบบ Catalog สินค้าออนไลน์ที่ช่วยให้ฝ่ายขายทำงานง่ายขึ้น",
    districts: [
      "เมืองนครราชสีมา", "ปากช่อง (เขาใหญ่)", "สีคิ้ว", "วังน้ำเขียว"
    ],
    keywords: [
      "รับทำเว็บไซต์ โคราช", "รับทำเว็บไซต์ นครราชสีมา", "ทำเว็บรับเหมาก่อสร้าง", "ออกแบบเว็บเขาใหญ่", "รับทำ SEO โคราช"
    ],
    heroImage: "/images/areas/korat-node.webp",
    priority: 94,
    seoTitle: "รับทำเว็บไซต์ โคราช (นครราชสีมา) | บริการออกแบบเว็บธุรกิจและโรงงาน มาตรฐานสูง",
    seoDescription:
      "รับทำเว็บไซต์บริษัทและร้านค้าในโคราช เขาใหญ่ เน้นความน่าเชื่อถือและการทำ SEO ให้ติดหน้าแรก Google ในพื้นที่",
  },

  // --- [TIER 3]: LOCAL DOMINANCE (ยึดครองพื้นที่ - เน้นหาเจอง่าย) ---
  {
    slug: "nakhon-sawan",
    province: "นครสวรรค์",
    templateSlug: "local",
    title: "รับทำเว็บไซต์ นครสวรรค์ | โปรโมทร้านค้าให้คนในพื้นที่เห็นเป็นร้านแรก (Local SEO)",
    description: "ช่วยให้ร้านอาหาร คลินิก และธุรกิจในนครสวรรค์ ติดอันดับ Google Maps และการค้นหา",
    longDescription:
      "คนนครสวรรค์ค้นหาของกินของใช้ในมือถือทุกวัน อย่าปล่อยให้ลูกค้าหลุดมือ เราช่วยทำเว็บไซต์และปักหมุด Google Maps ให้ร้านคุณเด้งขึ้นมาเป็นอันดับแรกๆ เมื่อมีคนค้นหาในพื้นที่ เพิ่มโอกาสลูกค้าเข้าร้านจริงได้ทันที",
    districts: ["เมืองนครสวรรค์", "ลาดยาว", "ตาคลี", "พยุหะคีรี"],
    keywords: ["รับทำเว็บไซต์ นครสวรรค์", "รับปักหมุด Google Maps", "โปรโมทร้าน นครสวรรค์"],
    heroImage: "/images/areas/nakhon-sawan-node.webp",
    priority: 90,
    seoTitle: "รับทำเว็บไซต์ นครสวรรค์ | ดันร้านค้าให้ดังในจังหวัด ด้วยเว็บไซต์และ Google Maps",
    seoDescription:
      "บริการทำเว็บไซต์และ Local SEO ในนครสวรรค์ ช่วยให้คนในพื้นที่ค้นหาร้านคุณเจอก่อนคู่แข่ง เพิ่มยอดขายหน้าร้านจริง",
  },
  {
    slug: "kamphaeng-phet",
    province: "กำแพงเพชร",
    templateSlug: "local",
    title: "รับทำเว็บไซต์ กำแพงเพชร | สร้างเว็บร้านค้าและบริการ ราคาประหยัด เริ่มต้นธุรกิจออนไลน์",
    description: "เว็บไซต์สวย ใช้งานง่าย เหมาะสำหรับร้านทอง ร้านเกษตร และ SME ในกำแพงเพชร",
    longDescription:
      "เริ่มต้นมีเว็บไซต์เป็นของตัวเองในราคาสบายกระเป๋า เราออกแบบเว็บให้ใช้งานง่าย เหมาะกับธุรกิจท้องถิ่น เช่น ร้านอุปกรณ์การเกษตร ร้านทอง หรือคาเฟ่ ช่วยให้คุณมีตัวตนบนโลกออนไลน์และดูน่าเชื่อถือกว่าร้านข้างเคียง",
    districts: ["เมืองกำแพงเพชร", "ขาณุวรลักษบุรี", "คลองขลุง"],
    keywords: ["รับทำเว็บไซต์ กำแพงเพชร", "ทำเว็บราคาถูก", "ออกแบบป้ายไวนิลและเว็บ"],
    heroImage: "/images/areas/kamphaeng-phet-node.webp",
    priority: 85,
    seoTitle: "รับทำเว็บไซต์ กำแพงเพชร ราคาถูก | เริ่มต้นทำธุรกิจออนไลน์อย่างมืออาชีพ",
    seoDescription:
      "บริการรับทำเว็บไซต์ในกำแพงเพชร ราคาคุ้มค่า ดูแลดี เหมาะสำหรับร้านค้าและ SME ที่ต้องการมีหน้าร้านบน Google",
  },
] as const;

/**
 * [HELPER]: Get Featured Areas
 * เลือกข้อมูลพื้นที่ที่ต้องการแสดงผล โดยเรียงตามลำดับความสำคัญ (Priority)
 */
export const FEATURED_AREAS = [...AREA_NODES]
  .sort((a, b) => b.priority - a.priority)
  .slice(0, 6);

/**
 * [HELPER]: Get Area by Slug
 * ค้นหาข้อมูลพื้นที่จาก Slug สำหรับหน้า Dynamic Page
 */
export const getAreaBySlug = (slug: string) =>
  AREA_NODES.find((area) => area.slug === slug);

```
### CONFIG: master-registry.ts
```typescript
/**
 * [DATA REGISTRY]: MASTER_SERVICE_REGISTRY v17.1.0 (CONVERSION_OPTIMIZED)
 * [STRATEGY]: Psychological Pricing | Pain Point Resolution | Benefit-First
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { TemplateMasterData } from "@/types";

/**
 * @description คลังข้อมูลบริการหลักที่เชื่อมโยงรูปภาพพรีวิวสำหรับการแสดงผล Technical Modules
 */
export const MASTER_REGISTRY: readonly TemplateMasterData[] = [
  // --- [01. SALEPAGE: ระบบหน้าเว็บปิดการขาย (HERO PRODUCT)] ---
  {
    id: "AEM-SVC-SP-01",
    title: "Sale Page ปิดการขายอัตโนมัติ (Single Page)",
    description:
      "เปลี่ยนคนดูให้เป็นยอดโอน ด้วยหน้าเว็บหน้าเดียวที่ออกแบบมาเพื่อ 'ขายของ' โดยเฉพาะ รองรับการยิงแอด 100%",
    image: "/images/service/preview.webp",
    price: "2,900",
    currency: "THB",
    priceValue: 2900,
    unit: "เริ่มต้น",
    category: "landing",
    templateSlug: "salepage",
    benefits: [
      "โหลดไวใน 1 วินาที ลูกค้าไม่หนี ยอดขายไม่ตก",
      "ติดตั้ง Pixel/Conversion API แม่นยำ ยิงแอดได้คุ้มค่าทุกบาท",
      "ออกแบบปุ่มสั่งซื้อ (CTA) ในจุดที่ลูกค้ากดง่ายที่สุด",
    ],
    coreFeatures: [
      {
        title: "Conversion Focus",
        description: "ดีไซน์ที่ตัดสิ่งรบกวนออก เหลือแค่สิ่งที่ทำให้ลูกค้า 'อยากซื้อ'",
        icon: "Target",
      },
      {
        title: "Mobile Speed",
        description: "ปรับจูนให้เร็วสุดบนมือถือ เพราะลูกค้า 90% ซื้อผ่านมือถือ",
        icon: "Smartphone",
      },
      {
        title: "One-Click Chat",
        description: "ปุ่มทัก Line/Messenger ลอยตามนิ้ว กดปุ๊บเด้งแชทปั๊บ",
        icon: "MessageCircle",
      },
    ],
    faqs: [
      {
        question: "ทำเสร็จแล้วยิงแอดได้เลยไหม?",
        answer: "ได้ทันทีครับ เราติดตั้ง Facebook Pixel และ TikTok Pixel ให้พร้อมใช้งาน",
      },
    ],
    priority: 1,
    isPopular: true,
  },

  // --- [02. CORPORATE: ระบบเว็บไซต์องค์กร (TRUST BUILDER)] ---
  {
    id: "AEM-SVC-CP-03",
    title: "Corporate Website เว็บไซต์บริษัทสร้างความน่าเชื่อถือ",
    description: "ยกระดับธุรกิจของคุณให้ดูเป็นมืออาชีพในสายตาลูกค้าและคู่ค้า ด้วยดีไซน์ที่ทันสมัยและระบบที่เสถียร",
    image: "/images/service/preview.webp",
    price: "9,900",
    currency: "THB",
    priceValue: 9900,
    unit: "โปรเจกต์",
    category: "business",
    templateSlug: "corporate",
    clientTrust: "มาตรฐานที่บริษัทชั้นนำเลือกใช้",
    benefits: [
      "สร้าง First Impression ที่ดีเยี่ยม ลูกค้าเห็นแล้วเชื่อมั่นทันที",
      "รองรับ SEO ระยะยาว ให้ลูกค้าค้นหาเจอชื่อบริษัทคุณเป็นอันดับแรก",
      "ระบบหลังบ้านจัดการง่าย เพิ่มข่าวสารหรือผลงานได้เองตลอด 24 ชม.",
    ],
    coreFeatures: [
      {
        title: "Premium Identity",
        description: "ออกแบบตาม CI แบรนด์ ไม่ซ้ำใคร ดูแพงและเป็นทางการ",
        icon: "ShieldCheck",
      },
      {
        title: "Google Ready",
        description: "วางโครงสร้าง SEO ถูกต้องตามหลัก Google 2026",
        icon: "Search",
      },
      {
        title: "Multi-Language",
        description: "รองรับการขยายระบบเป็น 2 ภาษา (ไทย/อังกฤษ) ในอนาคต",
        icon: "Globe",
      },
    ],
    faqs: [
      {
        question: "มีการดูแลหลังการขายไหม?",
        answer: "เราดูแลความปลอดภัยเว็บไซต์และ Backup ข้อมูลให้ฟรีตลอด 1 ปีเต็มครับ",
      },
    ],
    priority: 2,
    isFeatured: true,
  },

  // --- [03. CATALOG: ระบบแค็ตตาล็อกออนไลน์ (PRODUCT SHOWCASE)] ---
  {
    id: "AEM-SVC-EC-05",
    title: "E-Catalog เว็บแค็ตตาล็อกสินค้าออนไลน์",
    description: "เลิกส่งไฟล์ PDF ให้ลูกค้า! เปลี่ยนมาใช้เว็บแค็ตตาล็อกที่ค้นหาง่าย อัปเดตสต็อกได้เอง ดูได้ทุกที่",
    image: "/images/service/preview.webp",
    price: "15,900",
    currency: "THB",
    priceValue: 15900,
    unit: "เริ่มต้น",
    category: "ecommerce",
    templateSlug: "catalog",
    benefits: [
      "ลูกค้าค้นหาสินค้าเจอง่าย แบ่งหมวดหมู่ชัดเจน ไม่ต้องไถหาในแชท",
      "ลดงานแอดมิน ลูกค้าดูรายละเอียดและสเปคสินค้าได้เองครบถ้วน",
      "แชร์ลิงก์สินค้าแต่ละตัวให้ลูกค้าได้ทันที ดูเป็นมืออาชีพกว่าส่งรูป",
    ],
    coreFeatures: [
      {
        title: "Smart Search",
        description: "ระบบค้นหาสินค้าที่แม่นยำ พิมพ์ชื่อปุ๊บเจอปั๊บ",
        icon: "Search",
      },
      {
        title: "Unlimited Products",
        description: "รองรับสินค้าได้ไม่จำกัด เพิ่มลดรายการได้เองง่ายๆ",
        icon: "Database",
      },
      {
        title: "Inquiry Button",
        description: "ปุ่ม 'ขอใบเสนอราคา' หรือ 'สอบถาม' ติดทุกหน้าสินค้า",
        icon: "FileText",
      },
    ],
    faqs: [
      {
        question: "ลงสินค้าให้ด้วยไหม?",
        answer: "เราลงข้อมูลเบื้องต้นให้ 20 รายการ พร้อมสอนวิธีลงสินค้าเพิ่มเองแบบจับมือทำครับ",
      },
    ],
    priority: 3,
  },

  // --- [04. LOCAL: บริการปักหมุดและ SEO ท้องถิ่น (LOCAL DOMINANCE)] ---
  {
    id: "AEM-SVC-LS-10",
    title: "Local SEO & Google Maps (ปักหมุดธุรกิจ)",
    description: "ดักจับลูกค้าในพื้นที่! ทำให้ร้านคุณขึ้นเป็นอันดับ 1 เมื่อคนแถวนั้นค้นหา",
    image: "/images/service/preview.webp",
    price: "6,900",
    currency: "THB",
    priceValue: 6900,
    unit: "พื้นที่",
    category: "business",
    templateSlug: "local",
    benefits: [
      "ลูกค้าหาร้านเจอ ขับรถมาถูก เพิ่มยอดขายหน้าร้านจริง",
      "แซงคู่แข่งในพื้นที่เดียวกัน ด้วยเทคนิคการปรับแต่งหมุด Google Maps",
      "เพิ่มความน่าเชื่อถือด้วยรีวิวและการให้ข้อมูลที่ถูกต้องครบถ้วน",
    ],
    coreFeatures: [
      {
        title: "Map Optimization",
        description: "ปรับแต่งหมุดธุรกิจให้ Google ดันขึ้นอันดับแรกๆ",
        icon: "MapPin",
      },
      {
        title: "Keyword Targeting",
        description: "วิเคราะห์คำค้นหาที่คนแถวนั้นใช้จริง เพื่อดึงลูกค้าตรงกลุ่ม",
        icon: "Crosshair",
      },
    ],
    faqs: [
      {
        question: "นานไหมกว่าจะเห็นผล?",
        answer: "โดยปกติจะเริ่มเห็นยอดการค้นหาและโทรเข้าเพิ่มขึ้นภายใน 30-60 วันครับ",
      },
    ],
    priority: 4,
  },

  // --- [05. PERSONAL: เว็บส่วนตัว/Portfolio (PROFESSIONAL BRANDING)] ---
  {
    id: "AEM-SVC-PB-14",
    title: "Personal Portfolio เว็บโปรไฟล์ส่วนตัว",
    description: "สร้าง Personal Branding ให้ปัง! รวบรวมผลงานและช่องทางติดต่อไว้ในที่เดียว",
    image: "/images/service/preview.webp",
    price: "4,900",
    currency: "THB",
    priceValue: 4900,
    unit: "โปรเจกต์",
    category: "personal",
    templateSlug: "bio",
    benefits: [
      "ดูเป็นมืออาชีพกว่าการส่งไฟล์ PDF หรือลิงก์ Google Drive",
      "แชร์ง่าย ได้ใจความ จบในลิงก์เดียว (Bio Link)",
      "ปรับแต่งดีไซน์ให้สะท้อนตัวตนของคุณได้เต็มที่",
    ],
    coreFeatures: [
      {
        title: "Modern Portfolio",
        description: "แกลเลอรี่โชว์ผลงานที่สวยงาม จัดวางอย่างมีศิลปะ",
        icon: "Layout",
      },
      {
        title: "Contact Hub",
        description: "รวมปุ่ม Social, Email, Line ไว้ให้ติดต่อคุณง่ายที่สุด",
        icon: "Share2",
      },
    ],
    faqs: [
      {
        question: "เหมาะกับใครบ้าง?",
        answer: "เหมาะกับฟรีแลนซ์, ช่างภาพ, ดีไซเนอร์ หรือผู้บริหารที่ต้องการสร้างภาพลักษณ์ครับ",
      },
    ],
    priority: 5,
  },
] as const;

/**
 * @const FEATURED_SERVICES
 * @description รายการบริการยอดนิยม (Featured/Popular)
 * กรองและเรียงลำดับตาม Priority เพื่อนำไปแสดงผลใน Landing Page
 */
export const FEATURED_SERVICES = [...MASTER_REGISTRY]
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
 * [SYSTEM CORE]: GLOBAL_SITE_CONFIGURATION v17.0.4 (NATIONWIDE_OPTIMIZED)
 * [MANDATE]: Single Source of Truth | EEAT Alignment | Strategic Branding
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { SiteConfig } from "@/types";

export const SITE_CONFIG: SiteConfig = {
  // [01. BRAND IDENTITY]: ข้อมูลระบุตัวตนพื้นฐาน
  brandName: "AEMDEVWEB",
  siteUrl: "https://aemdevweb.com",
  description:
    "AEMDEVWEB | รับทำเว็บไซต์และ SEO เน้นยอดขาย ติดหน้าแรก Google ด้วย NextJS มาตรฐานสากล",

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

  // [04. SEO AUTHORITY]: ชุดคำค้นหาสำคัญเพื่อการทำอันดับ (Strategic Keyword Clusters)
  keywords: [
    // --- Commercial Intent (เน้นปิดการขายระดับประเทศ) ---
    "รับทำเว็บไซต์",
    "รับออกแบบเว็บไซต์",
    "จ้างทำเว็บไซต์ บริษัท",
    "รับทำ Salepage",
    "รับทำเว็บขายของออนไลน์",

    // --- Technical & Performance (เน้นกลุ่มลูกค้าพรีเมียม) ---
    "รับทำเว็บไซต์ Next.js",
    "ทำเว็บไซต์ SEO",
    "ทำเว็บโหลดเร็ว",
    "ทำเว็บ E-commerce",

    // --- Local & Branding (ยึดพื้นที่และตัวตน) ---
    "รับทำเว็บไซต์ กำแพงเพชร", // ยังคงไว้เพื่อยึดฐานที่มั่นเดิม
    "ทำเว็บติดหน้าแรก Google",
    "นาย อลงกรณ์ ยมเกิด",
    "นายเอ็มซ่ามากส์",
    "AEMDEVWEB",
  ],

  // [05. TECHNICAL_STACK]: ข้อมูลทางเทคนิคของระบบ
  project: {
    title: "Premium Web Design & SEO Expert Hub",
    shortTitle: "AEMDEVWEB",
    version: "17.0.4", // Incremented for Expanded Focus Update
    framework: "Next.js 16.1 (Latest Stable)",
    uiStack: "Tailwind CSS + React 19",
  },

  // [06. EXPERT NODE]: ข้อมูลผู้เชี่ยวชาญ (EEAT Standard)
  expert: {
    displayName: "นายเอ็มซ่ามากส์",
    legalName: "Alongkorn Yomkerd",
    legalNameThai: "อลงกรณ์ ยมเกิด",
    role: "ผู้เชี่ยวชาญด้านเทคนิคและผู้วางกลยุทธ์ SEO (Technical SEO Specialist)",
    jobTitle: "Technical SEO Specialist",
    signature: "นายเอ็มซ่ามากส์",
    avatar: "/images/avatar.webp",
    email: "me@aemdevweb.com",
    bioUrl: "/about",
  },

  // [07. CONTACT & ACCESS]: ช่องทางการติดต่อ
  contact: {
    email: "me@aemdevweb.com",
    phone: "099-032-2175",
    displayPhone: "ทักแชทผ่าน Line Account เพื่อการตอบกลับที่รวดเร็วที่สุดครับ",
    // [RETAINED]: คงไว้เพื่อ Google Search Console Verification (EEAT)
    streetAddress: "ตำบลในเมือง อำเภอเมืองกำแพงเพชร",
    // [EXPANDED]: ปรับข้อความแสดงผลให้กว้างขึ้น
    address: "ประเทศไทย (ให้บริการทุกจังหวัดทั่วประเทศ)",
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

  // [09. BUSINESS METRICS]: ข้อมูลพื้นที่บริการ (Expanded Focus)
  business: {
    location: "Thailand", // [CHANGED]: จาก Kamphaeng Phet เป็น Thailand
    region: "ASEAN", // [CHANGED]: ขยายขอบเขตภูมิภาค
    industry: "Web Infrastructure & Technical SEO",
    roiFocus: true,
    established: "2026",
  },

  // [10. ENGINE VERIFICATION]: การยืนยันสิทธิ์ระบบ
  verification: {
    google: "HmlcGbJ8eKWuc1QN_UUpBQ",
  },
} as const;

export type GlobalConfig = typeof SITE_CONFIG;

```

---

## DIRECTORY INFRASTRUCTURE
```text
[3.4K 2026-02-09 04:18]  .
├── [8.6K 2026-02-09 04:25]  AEMDEVWEB-STRUCTURE.txt
├── [ 990 2026-02-08 03:53]  DEV.md
├── [ 52K 2026-02-09 05:26]  README.md
├── [1.9K 2026-02-07 18:40]  a.sh
├── [3.4K 2026-02-09 00:38]  app
│   ├── [3.4K 2026-02-08 12:18]  (routes)
│   │   ├── [3.4K 2026-02-07 18:49]  areas
│   │   │   ├── [3.4K 2026-02-07 18:49]  [slug]
│   │   │   │   └── [7.4K 2026-02-09 05:04]  page.tsx
│   │   │   └── [6.8K 2026-02-09 02:37]  page.tsx
│   │   ├── [3.4K 2026-02-07 18:49]  blog
│   │   │   ├── [3.4K 2026-02-07 18:49]  [slug]
│   │   │   │   └── [ 11K 2026-02-09 01:17]  page.tsx
│   │   │   └── [7.3K 2026-02-08 23:05]  page.tsx
│   │   ├── [3.4K 2026-02-07 18:49]  case-studies
│   │   │   ├── [3.4K 2026-02-07 18:49]  [slug]
│   │   │   │   └── [9.6K 2026-02-09 01:17]  page.tsx
│   │   │   └── [7.5K 2026-02-08 23:05]  page.tsx
│   │   ├── [2.5K 2026-02-09 04:20]  layout.tsx
│   │   ├── [3.4K 2026-02-07 18:49]  services
│   │   │   ├── [3.4K 2026-02-07 18:49]  [slug]
│   │   │   │   └── [4.5K 2026-02-09 05:10]  page.tsx
│   │   │   └── [7.7K 2026-02-08 23:05]  page.tsx
│   │   └── [3.4K 2026-02-08 04:11]  test-mdx
│   │       ├── [4.9K 2026-02-08 23:05]  content.mdx
│   │       └── [6.2K 2026-02-08 23:05]  page.tsx
│   ├── [3.4K 2026-02-07 18:41]  about
│   │   └── [ 14K 2026-02-09 02:43]  page.tsx
│   ├── [5.2K 2026-02-09 04:24]  globals.css
│   ├── [5.6K 2026-02-09 04:17]  layout.tsx
│   ├── [3.2K 2026-02-09 04:25]  loading.tsx
│   ├── [2.3K 2026-02-09 01:17]  manifest.ts
│   ├── [5.6K 2026-02-08 16:30]  not-found.tsx
│   ├── [ 12K 2026-02-09 04:17]  page.tsx
│   ├── [3.4K 2026-02-07 18:41]  privacy
│   │   └── [ 10K 2026-02-08 16:30]  page.tsx
│   ├── [2.4K 2026-02-09 01:17]  robots.ts
│   ├── [3.5K 2026-02-09 01:17]  sitemap.ts
│   ├── [3.4K 2026-02-08 18:42]  status
│   │   └── [ 10K 2026-02-08 23:05]  page.tsx
│   └── [3.4K 2026-02-07 18:41]  terms
│       └── [ 12K 2026-02-08 16:30]  page.tsx
├── [3.4K 2026-02-07 19:29]  components
│   ├── [3.4K 2026-02-07 19:25]  features
│   │   ├── [3.4K 2026-02-07 19:25]  areas
│   │   │   └── [6.7K 2026-02-09 03:28]  AreaCard.tsx
│   │   ├── [3.4K 2026-02-07 19:25]  blog
│   │   │   └── [5.8K 2026-02-08 19:03]  BlogCard.tsx
│   │   ├── [3.4K 2026-02-07 19:25]  case-studies
│   │   │   └── [6.1K 2026-02-09 01:17]  CaseStudyCard.tsx
│   │   ├── [3.4K 2026-02-08 12:18]  landing
│   │   │   ├── [8.1K 2026-02-09 04:17]  Hero.tsx
│   │   │   ├── [ 11K 2026-02-08 23:05]  PricingSection.tsx
│   │   │   └── [7.8K 2026-02-08 23:05]  WorkProcess.tsx
│   │   └── [3.4K 2026-02-07 19:25]  services
│   │       ├── [6.7K 2026-02-09 03:29]  ServiceCard.tsx
│   │       └── [3.7K 2026-02-09 03:29]  ServiceListingHub.tsx
│   ├── [3.4K 2026-02-09 04:20]  layout
│   │   ├── [9.6K 2026-02-08 23:05]  Footer.tsx
│   │   ├── [9.3K 2026-02-08 23:06]  Navbar.tsx
│   │   ├── [1022 2026-02-09 04:20]  PageTransition.tsx
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
│   │   │   ├── [ 10K 2026-02-09 04:42]  Index.tsx
│   │   │   └── [3.8K 2026-02-09 04:43]  Schema.ts
│   │   ├── [3.4K 2026-02-07 19:20]  catalog
│   │   │   ├── [7.8K 2026-02-09 04:45]  Index.tsx
│   │   │   └── [4.1K 2026-02-09 04:59]  Schema.ts
│   │   ├── [3.4K 2026-02-07 19:20]  corporate
│   │   │   ├── [ 10K 2026-02-09 05:01]  Index.tsx
│   │   │   └── [4.9K 2026-02-09 04:49]  Schema.ts
│   │   ├── [3.4K 2026-02-07 19:20]  local
│   │   │   ├── [ 10K 2026-02-09 04:54]  Index.tsx
│   │   │   └── [4.5K 2026-02-09 04:50]  Schema.ts
│   │   ├── [3.4K 2026-02-07 19:20]  salepage
│   │   │   ├── [8.4K 2026-02-09 04:54]  Index.tsx
│   │   │   └── [3.5K 2026-02-09 04:52]  Schema.ts
│   │   └── [3.4K 2026-02-08 23:27]  sections
│   │       ├── [9.7K 2026-02-09 04:57]  DynamicFAQ.tsx
│   │       ├── [7.4K 2026-02-09 04:56]  FeatureGrid.tsx
│   │       ├── [7.0K 2026-02-09 04:55]  HeroEngine.tsx
│   │       └── [4.6K 2026-02-09 04:54]  LayoutEngine.tsx
│   └── [3.4K 2026-02-09 04:22]  ui
│       ├── [4.4K 2026-02-09 04:53]  IconRenderer.tsx
│       ├── [2.8K 2026-02-08 23:05]  SkeletonCard.tsx
│       ├── [4.3K 2026-02-09 04:25]  button.tsx
│       ├── [ 798 2026-02-09 04:31]  skeleton-grid.tsx
│       ├── [ 828 2026-02-08 23:05]  skeleton.tsx
│       └── [3.0K 2026-02-08 22:30]  sonner.tsx
├── [ 425 2026-02-09 04:27]  components.json
├── [3.4K 2026-02-09 05:21]  config
│   ├── [4.8K 2026-02-09 05:22]  00-SYSTEM-MANDATE.md
│   └── [7.6K 2026-02-09 05:17]  01-SYSTEM-PROMPT-EXTENSION.md
├── [3.4K 2026-02-08 23:27]  constants
│   ├── [ 19K 2026-02-09 05:09]  area-nodes.ts
│   ├── [ 12K 2026-02-09 05:08]  master-registry.ts
│   ├── [3.2K 2026-02-09 01:17]  navigation.ts
│   └── [5.8K 2026-02-09 03:29]  site-config.ts
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
├── [3.4K 2026-02-09 02:43]  lib
│   ├── [3.7K 2026-02-08 19:25]  cms.ts
│   ├── [5.0K 2026-02-09 03:29]  schema.ts
│   └── [3.6K 2026-02-08 23:05]  utils.ts
├── [6.0K 2026-02-08 19:14]  mdx-components.tsx
├── [ 247 2026-02-09 03:30]  next-env.d.ts
├── [3.3K 2026-02-09 01:17]  next.config.ts
├── [2.0K 2026-02-09 03:57]  package.json
├── [143K 2026-02-09 01:17]  pnpm-lock.yaml
├── [  51 2026-02-04 00:22]  pnpm-workspace.yaml
├── [1.1K 2026-02-08 03:53]  postcss.config.mjs
├── [3.4K 2026-02-09 00:44]  public
│   └── [3.4K 2026-02-09 02:26]  images
│       ├── [3.4K 2026-02-09 02:31]  areas
│       ├── [3.4K 2026-02-08 20:58]  blog
│       ├── [3.4K 2026-02-08 22:09]  case-studies
│       ├── [3.4K 2026-02-08 22:09]  expert
│       ├── [3.4K 2026-02-09 01:15]  hero
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
├── [ 741 2026-02-09 04:33]  tsconfig.json
├── [173K 2026-02-09 05:10]  tsconfig.tsbuildinfo
└── [3.4K 2026-02-08 20:33]  types
    ├── [6.1K 2026-02-09 04:53]  index.d.ts
    └── [ 377 2026-02-08 23:05]  mdx.d.ts

69 directories, 107 files
```
