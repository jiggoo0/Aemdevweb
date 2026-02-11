---
domain: aemdevweb.com
status: strictly-enforced
last_audit: 2026-02-11 17:17:19
---

# SYSTEM ARCHITECTURE & DATA SCHEMAS

## SYSTEM MANDATE

# SYSTEM MANDATE: AEMDEVWEB INFRASTRUCTURE

> Version: 17.6.0 (STABILIZED)
> Authority: STRICTLY ENFORCED
> Context: High-Performance Web Infrastructure & Technical SEO Specialist

---

## 01. CORE PHILOSOPHY & IDENTITY

**"We are not just building websites; we are engineering digital assets."**

- **System Role:** Technical Infrastructure Specialist.
- **Primary Objective:** สร้างระบบเว็บไซต์ที่มีประสิทธิภาพสูงสุด (Hyper-Performance), รองรับ SEO โครงสร้างระดับสูง (Graph Architecture), และรักษาเสถียรภาพบนทุกอุปกรณ์
- **Identity Anchor:** ข้อมูลทั้งหมดต้องยึดโยงกับ `SITE_CONFIG` ใน `constants/site-config.ts` ห้าม Hardcode ข้อมูลติดต่อหรือชื่อแบรนด์ใน Component โดยเด็ดขาด
- **Tone of Voice:** Professional, Technical, Authoritative, "Specialist" (ไม่ใช้คำฟุ่มเฟือย เน้นผลลัพธ์และตัวเลข)

## 02. ARCHITECTURE & FILE STRUCTURE

**"Everything has a place, and every place has a purpose."**

- **App Router First:** ใช้ Next.js App Router (`app/`) เป็นหลัก
- **Colocation Strategy:**
  - `components/features/`: สำหรับ Business Logic แยกตาม Domain (landing, services, areas).
  - `components/ui/`: สำหรับ Reusable Primitives (Button, IconRenderer) ห้ามมี Business Logic.
  - `components/templates/`: สำหรับ Page Layouts ที่ใช้ซ้ำได้ (Corporate, SalePage).
- **Constants as Database:** ใช้ `constants/` (`master-registry.ts`, `area-nodes.ts`) เป็น Single Source of Truth สำหรับข้อมูลบริการและพื้นที่ ห้ามกระจายข้อมูลไว้ใน Component

## 03. TYPE SAFETY & CODE QUALITY (ZERO-ANY POLICY)

**"Runtime errors are failures of build-time discipline."**

- **Strict Typing:** ห้ามใช้ `any` ในทุกกรณี (Zero-Any Policy). หากไม่ทราบ Type ให้ใช้ `unknown` หรือ `Record<string, unknown>` แล้วทำ Type Guard
- **Immutability:** ข้อมูลใน `constants/` และ Props ต้องเป็น `readonly` เสมอ เพื่อป้องกัน Side Effects
- **Interface Over Types:** ใช้ `interface` สำหรับ Object Definitions และ `type` สำหรับ Unions/Primitives
- **No Magic Strings:** ห้ามใช้ String Hardcode สำหรับ Routing หรือ Keys ให้ดึงจาก `SITE_CONFIG` หรือ Enum/Const เสมอ

## 04. SEO & DATA SCHEMAS (GRAPH ARCHITECTURE)

**"If Google doesn't understand it, it doesn't exist."**

- **Schema First:** ทุกหน้า (`page.tsx`) ต้องมีการ Inject JSON-LD ผ่านคอมโพเนนต์ `JsonLd`
- **Logic Separation:** Logic การสร้าง Schema ต้องแยกออกจาก UI Component (เก็บไว้ใน `Schema.ts` ของแต่ละ Template)
- **Entity Graphing:** Schema ต้องเชื่อมโยงกันเสมอ (WebPage -> Service -> Organization -> Person) ห้ามมี Node ลอยๆ (Orphan Nodes)
- **Dynamic Metadata:** Metadata ต้องถูก generate ผ่าน `constructMetadata` ใน `lib/seo-utils.ts` เท่านั้น

## 05. PERFORMANCE & CORE WEB VITALS (LCP/CLS)

**"Speed is not a feature; it is the foundation."**

- **LCP Protection:** Element ที่เป็น LCP (เช่น Hero Title, Hero Image) **ห้าม** ซ่อนด้วย Animation (`opacity: 0`) หรือใช้ Client-side lazy load
- **Zero-CLS:** ต้องจองพื้นที่ (Height/AspectRatio) ให้กับรูปภาพและ Container เสมอ เพื่อป้องกัน Layout Shift
- **Font Optimization:** ใช้ `next/font` พร้อม `display: swap` และห้ามโหลด Font ภายนอกผ่าน CSS `@import` ที่ไม่ผ่านการ Optimize
- **Termux Friendly:** การตั้งค่า Build ต้องคำนึงถึง Environment ที่จำกัด (Termux/ARM) ห้ามใช้ Worker Threads เกินความจำเป็น (`cpus: 1`)

## 06. STYLING & DESIGN SYSTEM (TAILWIND v4)

**"Consistency creates trust."**

- **Design Tokens:** ห้ามใช้ Hex Color ใน Component โดยตรง ให้ใช้ CSS Variables (`bg-surface-main`, `text-brand-primary`) ที่ประกาศใน `globals.css`
- **GPU Acceleration:** Animation ที่ทำงานตลอดเวลา (Pulse, Float) ต้องใช้ `will-change-transform` และ `transform-gpu` เพื่อลดภาระ Main Thread
- **Responsive Logic:** ใช้ Mobile-First approach เสมอ (`class="w-full md:w-1/2"`)
- **Glassmorphism Standard:** ยึดมาตรฐานความโปร่งแสงและ Blur ตาม `AmbientBackground.tsx` เพื่อคุม Theme ของระบบ

## 07. DATA FETCHING & RENDERING STRATEGY

**"Static when possible, Dynamic when necessary."**

- **SSG Priority:** พยายามทำให้ทุกหน้าเป็น Static Site Generation (SSG) โดยใช้ `generateStaticParams`
- **Parallel Fetching:** หากมีการเรียกข้อมูลหลายแหล่งใน `page.tsx` ต้องใช้ `Promise.all` เสมอ
- **CMS Integration:** การดึงข้อมูลจาก MDX ต้องผ่าน `lib/cms.ts` ที่มีการทำ Error Handling และ Type Guard เรียบร้อยแล้ว
- **Client Boundary:** ใช้ `'use client'` เฉพาะที่จำเป็นจริงๆ (Leaf Nodes) พยายามดัน Logic ไปที่ Server Component ให้มากที่สุด

## 08. COMPONENT ARCHITECTURE

**"Modular, Atomic, and Dumb."**

- **Dumb Components:** UI Components ไม่ควรมี Logic ซับซ้อน หรือรู้เรื่อง Business Data มากเกินไป (รับ Props -> แสดงผล)
- **Prop Interface:** ชื่อ Props ต้องสื่อความหมายชัดเจน (เช่น `isActive` แทน `flag`) และสอดคล้องกับ `types/template-props.ts`
- **Memoization:** ใช้ `React.memo` สำหรับ Component ที่มีการ Re-render บ่อย หรืออยู่ภายใน List ขนาดใหญ่
- **Image Handling:** ใช้ `next/image` เสมอ ห้ามใช้ `<img>` tag ยกเว้นกรณี SVG ที่เป็น Icon

## 09. LOCAL AUTHORITY PROTOCOL

**"Dominate the map, dominate the market."**

- **Area Node Structure:** การเพิ่มพื้นที่ให้บริการใหม่ใน `area-nodes.ts` ต้องระบุ `districts` และ `coordinates` เสมอ เพื่อผลลัพธ์ Local SEO
- **Template Locking:** ห้ามเปลี่ยน `templateSlug` ของ Area Node ที่ถูกล็อคไว้ (เช่น `new-service-name`) หากไม่ได้รับคำสั่ง Migration
- **Keyword Injection:** เนื้อหาในหน้า Area ต้องมีการ Inject ชื่อจังหวัด/อำเภอ เข้าไปใน H1, Title, และ Description อย่างเป็นธรรมชาติ

## 10. DEPLOYMENT & QUALITY ASSURANCE

**"Measure twice, cut once."**

- **Audit Script:** ก่อน Commit หรือ Deploy ต้องรัน `bash a.sh` เพื่อตรวจสอบ Type Check, Lint, และ Build Status เสมอ
- **Dead Code Elimination:** ใช้ `knip` ตรวจสอบและลบไฟล์/Dependencies ที่ไม่ได้ใช้ เพื่อรักษาความสะอาดของโปรเจกต์
- **Asset Resilience:** ตรวจสอบว่ารูปภาพทั้งหมดใน `public/images` มีการใช้งานจริง และอยู่ใน Format ที่เหมาะสม (WebP)
- **Build Stability:** ห้ามปล่อยให้มี Warning ใน Console ตอน Build (ยกเว้น Warning ของ Webpack/Termux ที่ทราบสาเหตุแล้ว)

---

_End of Mandate. Maintainer: AEMDEVWEB Specialist Team._

---

## SYSTEM PROMPT EXTENSION

# SYSTEM PROMPT EXTENSION: AEMDEVWEB AI PROTOCOL

> Version: 17.6.0 (ACTIVE)
> Target: AI Agents & Copilots
> Purpose: Operational Guidelines & Coding Standards

---

## 01. YOUR ROLE & PERSONA

**You are the Lead Infrastructure Specialist for AEMDEVWEB.**

- **Expertise:** High-Performance Next.js, Technical SEO, and Scalable Architecture.
- **Mindset:** You do not just "write code"; you "engineer solutions". You prioritize stability, performance metrics (CWV), and type safety over quick hacks.
- **Environment Awareness:** You are operating within a **Termux (Android)** environment. Resources are finite. Build processes must be efficient.

## 02. CODING STANDARDS (STRICT)

### TypeScript & Type Safety

1.  **Zero-Any Policy:** Never use `any`. Use `unknown`, generics, or specific interfaces.
2.  **Immutability:** Mark all interfaces and array props as `readonly`.
    ```typescript
    interface Props {
      readonly data: readonly Item[];
    }
    ```
3.  **Strict Props:** Use `interface` for object definitions. Use `type` for unions/intersections.
4.  **No Magic Values:** Do not hardcode strings or numbers. Import from `@/constants` or use `SITE_CONFIG`.

### Next.js 15 (App Router)

1.  **Server Components Default:** All components are Server Components unless `useState` or `useEffect` is strictly required. Then, add `"use client";`.
2.  **Async Params:** In `page.tsx`, `params` and `searchParams` must be awaited.
    ```typescript
    const { slug } = await params;
    ```
3.  **Image Optimization:** Always use `next/image`.
    - **LCP Rule:** Hero images must have `priority`.
    - **Aspect Ratio:** Always define `width/height` or `fill` with a parent container.

### Tailwind CSS (v4)

1.  **Variables First:** Use CSS variables defined in `globals.css` (e.g., `bg-surface-main`, `text-brand-primary`) instead of raw hex codes.
2.  **Responsive Design:** Mobile-first approach.
    - ✅ `class="w-full md:w-1/2"`
    - ❌ `class="w-1/2 max-md:w-full"`
3.  **Animation:** Use `transform-gpu` and `will-change-transform` for continuous animations to offload CPU.

## 03. COMPONENT ARCHITECTURE PROTOCOL

### File Structure Map

- `components/features/`: Domain-specific logic (e.g., `Hero.tsx`, `ServiceCard.tsx`).
- `components/templates/`: Page layouts (e.g., `CorporateTemplate`, `BioTemplate`).
- `components/ui/`: Reusable primitives (e.g., `Button`, `IconRenderer`). **NO Business Logic here.**
- `lib/`: Pure functions and utilities (e.g., `utils.ts`, `schema.ts`).

### The "Template" Pattern

When creating a new page template:

1.  **Schema Separation:** Create a `Schema.ts` file alongside `Index.tsx`.
2.  **Data Injection:** The template receives `readonly data: TemplateMasterData`.
3.  **LCP Optimization:** The Hero section must render HTML immediately (no fade-in animations on H1/Img).

## 04. SEO & SCHEMA STRATEGY

1.  **JSON-LD:** Every page must render a `JsonLd` component.
2.  **Graph Construction:** Connect entities using `@id`.
    - `WebPage` -> `isPartOf` -> `WebSite`
    - `Service` -> `provider` -> `Organization`
3.  **Validation:** Ensure strict types for Schema generation functions.

## 05. RESPONSE FORMATTING GUIDELINES

When generating code, adhere to this structure:

1.  **File Header:**
    ```typescript
    /**
     * [COMPONENT_NAME]: MODULE_NAME v17.x.x (STATUS)
     * [STRATEGY]: Brief explanation of the technical approach
     * [MAINTAINER]: AEMDEVWEB Specialist Team
     */
    ```
2.  **Imports:** Group imports:
    1.  React/Next.js
    2.  Internal Infrastructure (`@/lib`, `@/constants`)
    3.  Components
    4.  Types
3.  **Content:** Full, copy-pasteable code. Do not use `// ... existing code` unless explicitly requested for a small snippet.

## 06. CRITICAL CHECKS (PRE-COMPUTATION)

Before outputting code, ask yourself:

- [ ] Did I remove `opacity: 0` from the LCP element?
- [ ] Is `SITE_CONFIG` used for branding/contact info?
- [ ] Are all arrays mapped with a unique `key`?
- [ ] Is this compatible with Tailwind v4 (no `@apply` in complex ways)?
- [ ] Did I export the component using `memo` if it's a client component?

---

_Reference: See `config/00-SYSTEM-MANDATE.md` for absolute rules._

---

## TECHNICAL DATA SCHEMAS (TYPES)

### MODULE: index.d.ts

```typescript
/**
 * [SYSTEM CORE]: GLOBAL_TYPE_DEFINITIONS v17.9.1 (STABILIZED_HOTFIX)
 * [MANDATE]: Zero-Any Policy | Deep Immutability | Async Route Params (Next.js 15+)
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

/** [STRICT]: ไอคอนต้องตรงกับ Registry ใน IconRenderer เท่านั้น */
export type IconName = string;

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

/** [RESOLVED]: Exported for DynamicFAQ & TemplateProps support */
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

/** [RESOLVED]: ผูกนิยามสำหรับการใช้ในระบบ Listing Hub */
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
  readonly templateSlug: "corporate" | "salepage" | "local" | "local-authority" | string;
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
 * [SYSTEM CORE]: TEMPLATE_PROPS_ENGINE v17.9.1 (SYNCED_FINAL)
 * [STRATEGY]: Decoupled UI Logic | Universal Adapter Pattern | Type-Safe Bridge
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { ReactNode } from "react";
import type { IconName, ServiceFeature, ServiceFaq } from "./index";

// =========================================
// [01] UI ACTION SCHEMAS
// =========================================

/**
 * โครงสร้างมาตรฐานสำหรับปุ่ม Call to Action (CTA) และลิงก์ภายในระบบ
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
 * [STRATEGIC]: Bridge Interface ระหว่าง ServiceData และ AreaNode
 * ออกแบบมาเพื่อทำ Data Normalization ก่อนส่งเข้าสู่ Template Components
 * ช่วยให้หนึ่ง Template สามารถรับข้อมูลได้จากหลายแหล่ง (Multi-Source)
 */
export interface UniversalTemplateProps {
  // --- Core Identity ---
  readonly id: string;
  readonly title: ReactNode | string; // รองรับทั้งข้อความดิบและ JSX (Rich Text)
  readonly description: string;
  readonly heroImage?: string;

  // --- Commercial & Metadata (Optional สำหรับหน้า Area) ---
  readonly price?: string;
  readonly priceValue?: number;
  readonly unit?: string;
  readonly currency?: string;

  // --- Data Clusters (Normalized) ---
  readonly benefits?: readonly string[];
  readonly features?: readonly ServiceFeature[]; // Mapped จาก coreFeatures
  readonly faqs?: readonly ServiceFaq[];
  readonly keywords?: readonly string[];

  // --- Strategic UI Elements ---
  readonly clientTrust?: string;
  readonly primaryAction?: TemplateAction;
  readonly secondaryAction?: TemplateAction;

  // --- Visual Metadata & Theming ---
  // สอดคล้องกับ LayoutEngine และ ThemeConfig
  readonly theme?: {
    readonly primary?: string;
    readonly secondary?: string;
    readonly background?: string; // Tailwind class หรือ Hex
    readonly gradient?: string; // Tailwind Gradient
  };
  readonly priority?: number;
}

// =========================================
// [03] SPECIFIC COMPONENT PROPS
// =========================================

/**
 * Base Props พื้นฐานสำหรับ Template ทุกประเภท
 */
export interface BaseTemplateProps {
  readonly data: UniversalTemplateProps;
  readonly className?: string;
}

/**
 * Specialized Props สำหรับ Catalog Template
 */
export interface CatalogTemplateProps extends BaseTemplateProps {
  readonly displayMode?: "grid" | "list";
  readonly showPrice?: boolean;
  readonly items?: readonly {
    readonly name: string;
    readonly description: string;
    readonly image?: string;
    readonly price?: string;
  }[];
}

/**
 * Specialized Props สำหรับ Bio / Personal Portfolio Template
 */
export interface BioTemplateProps extends BaseTemplateProps {
  readonly socialLinks?: readonly {
    readonly platform: string;
    readonly url: string;
    readonly icon: IconName;
  }[];
}

// =========================================
// [04] ADAPTER TYPE DEFINITIONS
// =========================================

/**
 * [ADAPTER TYPE]: ระบุแหล่งที่มาของข้อมูลเพื่อการจัดการ Logic ภายในที่แตกต่างกัน
 */
export type TemplateDataSource = "service" | "area" | "custom";
```

---

## CONSTANTS REGISTRY

### CONFIG: area-nodes.ts

```typescript
/**
 * [SYSTEM CORE]: AREA_NODES_DATA v17.9.0 (CONTEXT_REMASTERED)
 * [STRATEGY]: Hyper-Local Authority | Semantic Entity Injection | Unique Value Proposition
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { AreaNode } from "@/types";

/**
 * @description คลังข้อมูลพิกัดยุทธศาสตร์ที่ผ่านการปรับปรุงเนื้อหาเฉพาะตัว (Unique Context)
 * เน้นการใส่ Entity ท้องถิ่น (Local Entities) เพื่อให้ Google มองว่าเป็น Expert Content ไม่ใช่ Spam
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
      "บริการ Web Development มาตรฐานองค์กรข้ามชาติ รองรับ Traffic สูง ย่านสาทร-สุขุมวิท",
    longDescription:
      "กรุงเทพมหานครไม่ใช่แค่เมืองหลวง แต่คือสมรภูมิ Digital Business ที่ดุเดือดที่สุดในอาเซียน ธุรกิจย่าน CBD (สาทร, สีลม, สุขุมวิท) ไม่ได้ต้องการแค่เว็บสวย แต่ต้องการ 'Digital Headquarters' ที่มีความเสถียร (99.9% Uptime) และโครงสร้าง Technical SEO ที่ซับซ้อนเพื่อเอาชนะคู่แข่งระดับ Global Brand",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ กรุงเทพฯ (Bangkok) | บริษัท SEO สาย Tech มาตรฐานสากล",
    seoDescription:
      "บริการทำเว็บไซต์เกรด Enterprise ในกรุงเทพฯ เน้นระบบ Security และ Speed Performance สำหรับองค์กรขนาดใหญ่และ Startup ที่ต้องการ Scaling เร็วที่สุด",
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
        "การแข่งขันใน BKK เน้นเรื่อง 'Trust' และ 'Speed' สูงสุด ลูกค้าตัดสินใจจาก Performance ของเว็บและการแสดงผลบน Mobile ที่สมบูรณ์แบบ",
      technicalApproach:
        "ใช้ Next.js 15 (App Router) ทำระบบ Server-Side Rendering (SSR) เต็มรูปแบบ เพื่อให้ Index ไวที่สุด และเชื่อมต่อ CRM/ERP ขององค์กรได้ไร้รอยต่อ",
      localStrength:
        "เราวางโครงสร้าง Schema Markup ระดับ Organization เจาะจงสำนักงานใหญ่ เพื่อสร้าง Authority ให้กับ Brand ในสายตา Google",
    },
  },
  {
    slug: "chon-buri",
    province: "ชลบุรี",
    templateSlug: "corporate",
    title: "รับทำเว็บไซต์ ชลบุรี พัทยา | Industrial & EEC Web Solution",
    description: "ออกแบบเว็บไซต์โรงงาน นิคมอุตสาหกรรม และธุรกิจส่งออก ในเขต EEC",
    longDescription:
      "ชลบุรีคือหัวใจของ EEC (Eastern Economic Corridor) ธุรกิจที่นี่คือภาคการผลิตและ Logistics ระดับโลก เว็บไซต์ของคุณจึงต้องทำหน้าที่เป็น 'Virtual Factory Tour' ที่สร้างความเชื่อมั่นให้นักลงทุนต่างชาติ (ญี่ปุ่น/จีน/ยุโรป) ด้วยข้อมูลทางเทคนิคที่แม่นยำและระบบ Multi-language ที่ใช้งานได้จริง",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ ชลบุรี ศรีราชา พัทยา | ผู้เชี่ยวชาญเว็บโรงงาน EEC",
    seoDescription:
      "รับทำเว็บไซต์นิคมอุตสาหกรรมชลบุรี (อมตะ/แหลมฉบัง) รองรับ 3 ภาษา (TH/EN/CN/JP) เพื่อดีลธุรกิจระดับ B2B และ Logistics ข้ามชาติ",
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
        "คู่ค้าในเขตนี้คือฝ่ายจัดซื้อ (Procurement) ของบริษัทข้ามชาติ เว็บไซต์ต้องค้นหาสเปคสินค้าได้ง่าย ดาวน์โหลด Catalog สะดวก และดูน่าเชื่อถือระดับสากล",
      technicalApproach:
        "ติดตั้งระบบ i18n Routing (Multi-language) ที่แยก SEO แต่ละภาษาอย่างชัดเจน และระบบ E-Catalog ที่รองรับ SKU จำนวนมาก",
      localStrength:
        "ความเข้าใจใน Supply Chain ของ EEC ช่วยให้เราออกแบบ UX/UI ที่ตอบโจทย์ B2B Industrial ได้ตรงจุดกว่าเอเจนซี่ทั่วไป",
    },
  },
  {
    slug: "chiang-mai",
    province: "เชียงใหม่",
    templateSlug: "hotelresort", // [ADJUST]: เปลี่ยนเป็น hotelresort เพื่อความตรงกลุ่ม
    title: "รับทำเว็บไซต์ เชียงใหม่ | Creative Web Design & Boutique Hotel",
    description:
      "ดีไซน์เว็บไซต์ที่สะท้อนอัตลักษณ์ Lanna Contemporary สำหรับธุรกิจท่องเที่ยวและ Wellness",
    longDescription:
      "เชียงใหม่คือเมืองหลวงของ Creative Economy และ Digital Nomads เว็บไซต์ของธุรกิจที่นี่ต้องมี 'Soul' และ 'Storytelling' ที่แข็งแรง เพื่อดึงดูดนักท่องเที่ยว High Spending เราผสมผสานศิลปะล้านนาร่วมสมัยเข้ากับเทคโนโลยี Web Performance ระดับโลก เพื่อให้เว็บโหลดไวแม้รูปจะสวยแค่ไหนก็ตาม",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ เชียงใหม่ | ออกแบบเว็บโรงแรม Boutique และธุรกิจ Wellness",
    seoDescription:
      "รับทำเว็บไซต์เชียงใหม่ เน้นดีไซน์สวย (Aesthetics) ผสานระบบจองที่ลื่นไหล (Booking Engine) เจาะกลุ่มนักท่องเที่ยวจีนและยุโรป",
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
        "ธุรกิจในเชียงใหม่ต้องขาย 'Experience' ตั้งแต่หน้าเว็บ การใช้ภาพถ่ายคุณภาพสูงและการเล่าเรื่อง (Storytelling) คือหัวใจสำคัญ",
      technicalApproach:
        "ใช้ Next.js Image Optimization ขั้นสูง (AVIF format) เพื่อให้แสดงผลภาพความละเอียดสูงบนจอ Retina ได้โดยไม่ดึงโหลดเว็บให้ช้า",
      localStrength:
        "เราเชี่ยวชาญการทำ Local SEO ภาษาจีนและอังกฤษ เพื่อดักจับนักท่องเที่ยวตั้งแต่พวกเขายังไม่ออกเดินทาง (Pre-travel Search)",
    },
  },
  {
    slug: "phuket",
    province: "ภูเก็ต",
    templateSlug: "hotelresort",
    title: "รับทำเว็บไซต์ ภูเก็ต | Luxury Real Estate & Hospitality Web",
    description: "สร้างภาพลักษณ์ World-Class ให้กับวิลล่าหรูและธุรกิจเรือยอร์ช",
    longDescription:
      "ภูเก็ตคือ Destination ระดับโลก ตลาดที่นี่คือ Luxury Segment (Real Estate & 5-Star Hospitality) เว็บไซต์ต้องมอบประสบการณ์แบบ 'Premium Touch' ตั้งแต่วินาทีแรกที่คลิก เราออกแบบเว็บที่สะท้อนความหรูหรา พร้อมระบบ Lead Generation คุณภาพสูงสำหรับขายอสังหาฯ ราคาแพง",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ ภูเก็ต | เว็บไซต์ขายวิลล่าและโรงแรม Luxury",
    seoDescription:
      "ผู้เชี่ยวชาญทำเว็บไซต์ภูเก็ต เจาะตลาด Luxury Villa และ Yacht Charter ด้วยดีไซน์ Minimal Luxury และ SEO ภาษาอังกฤษ/รัสเซีย",
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
        "ลูกค้าภูเก็ตตัดสินใจด้วย 'อารมณ์' และ 'ความน่าเชื่อถือ' เว็บไซต์ต้องดูแพง (Expensive Look) และมี Social Proof ที่ชัดเจน",
      technicalApproach:
        "เน้น International SEO (Hreflang) เจาะจงประเทศกลุ่มเป้าหมาย (รัสเซีย, ยุโรป, สิงคโปร์) และระบบ Virtual Tour Integration",
      localStrength:
        "การทำ Local SEO ยึดพื้นที่บน Google Maps ในจุดท่องเที่ยวสำคัญ (Beach Areas) ช่วยดึง Walk-in Traffic ได้มหาศาล",
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
    description: "Web Solution สำหรับคลินิกความงาม ศูนย์การแพทย์ และ SME ในเมืองขอนแก่น",
    longDescription:
      "ในฐานะ MICE City และ Medical Hub ของอีสาน ขอนแก่นเต็มไปด้วยธุรกิจบริการและคลินิกเฉพาะทาง เรานำเสนอโซลูชั่น Sale Page และ Corporate Website ที่เน้นการสร้าง 'ความน่าเชื่อถือทางการแพทย์' (Medical Trust) และระบบนัดหมายออนไลน์ที่ทันสมัย ตอบรับวิถีชีวิต Smart City",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ ขอนแก่น | Sale Page คลินิกและธุรกิจ SME",
    seoDescription:
      "บริการรับทำเว็บไซต์ขอนแก่น ออกแบบ Sale Page สำหรับคลินิกความงามและธุรกิจบริการ เน้น Conversion และการยิงแอด Facebook/TikTok",
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
        "กลุ่มคนรุ่นใหม่และนักศึกษาในขอนแก่นมีกำลังซื้อสูง ชอบความสะดวกรวดเร็ว เว็บไซต์ต้อง Mobile-First และเชื่อมต่อ Line OA ได้ทันที",
      technicalApproach:
        "ใช้ Single Page Application (SPA) เพื่อความลื่นไหล และติดตั้ง Event Tracking วัดผล Conversion (Booking/Call) อย่างละเอียด",
      localStrength:
        "เราเข้าใจพฤติกรรมผู้บริโภคชาวอีสานสมัยใหม่ ช่วยให้การวาง Call to Action (CTA) มีประสิทธิภาพในการปิดการขายสูงสุด",
    },
  },
  {
    slug: "korat",
    province: "นครราชสีมา",
    templateSlug: "catalog", // [ADJUST]: เปลี่ยนเป็น catalog ให้ตรงกับ E-Catalog
    title: "รับทำเว็บไซต์ โคราช | Industrial Catalog & Construction Hub",
    description: "ระบบ E-Catalog สำหรับธุรกิจรับเหมาก่อสร้างและวัสดุอุตสาหกรรม",
    longDescription:
      "โคราชคือประตูสู่อีสานและฐานการผลิตขนาดใหญ่ ธุรกิจที่นี่คือกลุ่มรับเหมาก่อสร้าง (Contractor) และผู้ค้าวัสดุรายใหญ่ เว็บไซต์ที่จำเป็นคือ 'Online Catalog' ที่จัดการ Stock สินค้านับพันรายการได้ง่าย และรองรับระบบขอใบเสนอราคา (RFQ System) เพื่อดึงงานประมูลโครงการใหญ่",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ โคราช (นครราชสีมา) | ทำเว็บแค็ตตาล็อกสินค้าและรับเหมา",
    seoDescription:
      "รับทำเว็บไซต์ E-Catalog ในโคราช สำหรับร้านวัสดุก่อสร้างและโรงงาน จัดการสินค้าง่าย รองรับ SEO ให้ติดหน้าแรก Google",
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
        "ลูกค้า B2B ในโคราชต้องการเห็น 'Spec สินค้า' ที่ชัดเจน และ 'Company Profile' ที่แสดงศักยภาพในการรับงานใหญ่",
      technicalApproach:
        "ใช้ Database ที่ Optimized มาเพื่อการ Search สินค้าจำนวนมาก (Mass SKU) และโครงสร้างเว็บที่รองรับไฟล์ PDF Catalog",
      localStrength:
        "การทำ SEO เจาะกลุ่มคำว่า 'ร้านวัสดุ' หรือ 'ผู้รับเหมา' ในโซนอีสาน เป็น Blue Ocean ที่เราช่วยให้คุณครองตลาดได้ง่ายดาย",
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
    description: "เปลี่ยนธุรกิจกงสีและร้านค้าดั้งเดิมสู่ระบบดิจิทัล ยึดหัวหาดภาคเหนือตอนล่าง",
    longDescription:
      "นครสวรรค์คือจุดยุทธศาสตร์ขนส่งและศูนย์กลางการค้าส่ง (Wholesale) ภาคเหนือตอนล่าง เราช่วยยกระดับธุรกิจครอบครัว (Family Business) และร้านค้าส่งดั้งเดิม ให้มีตัวตนบนโลกออนไลน์ เพื่อขยายฐานลูกค้าจากหน้าร้านไปสู่การส่งของทั่วไทย",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ นครสวรรค์ | พัฒนาธุรกิจค้าส่งสู่ออนไลน์",
    seoDescription:
      "บริการทำเว็บไซต์และ Local SEO นครสวรรค์ ช่วยร้านค้าส่งและธุรกิจดั้งเดิมสร้างฐานลูกค้าออนไลน์ แข่งขันกับ Modern Trade ได้",
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
        "ธุรกิจเก๋าแก่ในนครสวรรค์มีฐานลูกค้าเดิมดีอยู่แล้ว แต่ขาดช่องทางดิจิทัล การทำเว็บเน้น 'ความน่าเชื่อถือยาวนาน' (Heritage) คือจุดขาย",
      technicalApproach:
        "เน้น Google Business Profile Optimization ให้คนค้นหาร้านเจอ และหน้าเว็บที่เน้นข้อมูลการติดต่อ/เส้นทางที่ชัดเจน",
      localStrength:
        "เราช่วยเปลี่ยน 'ชื่อเสียงปากต่อปาก' ให้กลายเป็น 'Digital Review' บน Google Maps ที่คนรุ่นใหม่ค้นหาเจอ",
    },
  },
  {
    slug: "kamphaeng-phet",
    province: "กำแพงเพชร",
    templateSlug: "local-authority",
    title: "รับทำเว็บไซต์ กำแพงเพชร | Agri-Tech & Cultural Tourism",
    description: "ยกระดับสินค้าเกษตรแปรรูปและธุรกิจท่องเที่ยวเมืองมรดกโลก",
    longDescription:
      "กำแพงเพชรมีจุดเด่นเรื่องพืชไร่ (อ้อย/มันสำปะหลัง) และอุทยานประวัติศาสตร์ เราช่วยผู้ประกอบการ SME และวิสาหกิจชุมชน สร้างเว็บไซต์ที่ยกระดับสินค้าเกษตรให้ดู Premium (Agri-Tech Image) และเว็บท่องเที่ยวที่ดึงดูดคนให้มาค้างคืน ไม่ใช่แค่ทางผ่าน",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ กำแพงเพชร | ทำเว็บสินค้าเกษตรและ SME",
    seoDescription:
      "บริการทำเว็บไซต์ในกำแพงเพชร ราคาคุ้มค่า สำหรับ SME และกลุ่มสินค้าเกษตรแปรรูป เพื่อสร้างมาตรฐานสินค้าสู่ตลาดสากล",
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
      marketInsight:
        "สินค้า OTOP และเกษตรแปรรูปต้องการบรรจุภัณฑ์ทางดิจิทัล (Digital Packaging) ที่สวยงามเพื่ออัพราคาขาย",
      technicalApproach:
        "ใช้ Template ที่เน้นภาพสินค้าขนาดใหญ่ และ Content Marketing ที่เล่าเรื่องที่มาของวัตถุดิบ (Source of Origin)",
      localStrength:
        "เราคือผู้เชี่ยวชาญในพื้นที่ (Based in Kamphaeng Phet) เข้าใจบริบทธุรกิจท้องถิ่นดีที่สุด พร้อม Support อย่างใกล้ชิด",
    },
  },
  {
    slug: "sukhothai",
    province: "สุโขทัย",
    templateSlug: "local-authority",
    title: "รับทำเว็บไซต์ สุโขทัย | Heritage Storytelling & Craftsmanship",
    description: "Digital Gallery สำหรับงานหัตถศิลป์ ทองสมับย และผ้าซิ่นตีนจก",
    longDescription:
      "คุณค่าของสินค้าสุโขทัยอยู่ที่ 'เรื่องราว' (Story) เว็บไซต์ที่เราสร้างไม่ใช่แค่ร้านค้า แต่คือ 'พิพิธภัณฑ์ออนไลน์' ที่บอกเล่าความประณีตของงานหัตถศิลป์และประวัติศาสตร์ เพื่อสร้างมูลค่าเพิ่ม (Value Added) ให้กับสินค้าท้องถิ่นจนสามารถขายในราคาสูงได้",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ สุโขทัย | เว็บไซต์ OTOP และงานหัตถศิลป์",
    seoDescription:
      "รับออกแบบเว็บไซต์สุโขทัย เน้นการเล่าเรื่อง (Storytelling) เพื่อเพิ่มมูลค่าสินค้าหัตถกรรม ทอง และผ้าทอ สู่ตลาดออนไลน์",
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
        "ลูกค้าต้องการซื้อ 'งานศิลปะ' ไม่ใช่แค่สินค้า เว็บไซต์ต้องมีความสุนทรีย์ (Aesthetic) และให้ข้อมูลเชิงลึกได้",
      technicalApproach:
        "เน้น Typography ภาษาไทยที่สวยงาม และ Layout แบบ Magazine Style เพื่อขับเน้นความงามของสินค้า",
      localStrength:
        "การผสาน SEO เข้ากับ Content เชิงวัฒนธรรม ช่วยดึง Traffic จากกลุ่มคนรักงานศิลปะและของสะสมได้ทั่วโลก",
    },
  },
  {
    slug: "tak",
    province: "ตาก",
    templateSlug: "corporate",
    title: "รับทำเว็บไซต์ ตาก แม่สอด | Border Trade & Logistics Gateway",
    description: "Web Platform รองรับการค้าชายแดน นำเข้า-ส่งออก และภาษาพม่า",
    longDescription:
      "แม่สอด (ตาก) คือประตูการค้าสู่เมียนมาที่สำคัญที่สุด ธุรกิจที่นี่ต้องการเว็บไซต์ที่รองรับ Multi-currency และ Multi-language (ไทย/อังกฤษ/พม่า) เพื่อสื่อสารกับคู่ค้าข้ามพรมแดน เราพัฒนาระบบที่ช่วยให้ธุรกิจ Logistics และ Import/Export ดูเป็นมืออาชีพและน่าเชื่อถือที่สุด",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ ตาก แม่สอด | เว็บไซต์ชิปปิ้งและการค้าชายแดน",
    seoDescription:
      "บริการทำเว็บไซต์ตากและแม่สอด รองรับ 3 ภาษา (TH/EN/MM) สำหรับธุรกิจขนส่ง ชิปปิ้ง และการค้าระหว่างประเทศ",
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
        "ความน่าเชื่อถือคือทุกสิ่งในการค้าข้ามแดน เว็บไซต์ต้องมีระบบ Tracking หรือข้อมูลบริษัทที่ตรวจสอบได้ชัดเจน",
      technicalApproach:
        "โครงสร้างเว็บที่รองรับ Unicode ภาษาพม่าได้อย่างสมบูรณ์ และหน้า Landing Page เฉพาะสำหรับบริการ Customs Clearance",
      localStrength:
        "เราเข้าใจ Flow การค้าชายแดน จึงออกแบบ Navigation ที่เน้นข้อมูลสำคัญที่คู่ค้าต้องการรู้ (ราคา/รอบรถ/เอกสาร) ไว้ในจุดที่เห็นชัดที่สุด",
    },
  },
  {
    slug: "phichit",
    province: "พิจิตร",
    templateSlug: "local-authority",
    title: "รับทำเว็บไซต์ พิจิตร | Rice Mill & Agro-Industrial Hub",
    description: "Corporate Website สร้างความน่าเชื่อถือให้โรงสีและธุรกิจการเกษตร",
    longDescription:
      "พิจิตรคืออู่ข้าวอู่น้ำ ธุรกิจโรงสีและจำหน่ายปัจจัยการเกษตร (ปุ๋ย/เคมีภัณฑ์) ต้องการเว็บไซต์ที่ดู 'มั่นคง' และ 'ตรวจสอบได้' เพื่อสร้างความมั่นใจให้เกษตรกรและคู่ค้า เราสร้างเว็บ Corporate ที่แสดงศักยภาพการผลิตและมาตรฐาน ISO ของธุรกิจคุณ",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ พิจิตร | เว็บโรงสีข้าวและธุรกิจการเกษตร",
    seoDescription:
      "รับทำเว็บไซต์โรงสีและธุรกิจเกษตรในพิจิตร เน้นภาพลักษณ์องค์กรที่มั่นคง (Corporate Identity) และการค้นหาบน Google Maps",
    priority: 82,
    districts: ["เมืองพิจิตร", "ตะพานหิน", "บางมูลนาก", "โพทะเล", "สากเหล็ก"],
    keywords: ["รับทำเว็บไซต์ พิจิตร", "ทำเว็บโรงสีข้าว", "Agri-Business Website", "SEO พิจิตร"],
    heroImage: "/images/areas/phichit-node.webp",
    coordinates: { lat: 16.4428, lng: 100.3501 },
    localContext: {
      marketInsight:
        "ธุรกิจเกษตรมักถูกมองว่าล้าสมัย การมีเว็บไซต์ที่ทันสมัยจะช่วยสร้าง Differentiation จากคู่แข่งในท้องถิ่นได้อย่างชัดเจน",
      technicalApproach:
        "เน้นหน้า 'เกี่ยวกับเรา' (About Us) ที่โชว์ประวัติและมาตรฐานโรงงาน และหน้า 'สินค้า' ที่อัปเดตราคาตลาดได้ง่าย",
      localStrength:
        "เราช่วยทำ Local SEO ให้ชาวนาและคู่ค้าในพื้นที่ค้นหาเบอร์โทรและพิกัดโรงสีของคุณเจอเป็นอันดับแรก",
    },
  },
  {
    slug: "uttaradit",
    province: "อุตรดิตถ์",
    templateSlug: "local-authority",
    title: "รับทำเว็บไซต์ อุตรดิตถ์ | Premium Fruit & D2C E-commerce",
    description: "ระบบสั่งจองผลไม้พรีเมียมออนไลน์ (Pre-order) ส่งตรงจากสวนถึงผู้บริโภค",
    longDescription:
      "ทุเรียนหลง-หลินลับแลคือทองคำเขียวของอุตรดิตถ์ เราช่วยเกษตรกรและผู้ค้า ตัดวงจรพ่อค้าคนกลางด้วยระบบ E-commerce แบบ Direct-to-Consumer (D2C) เว็บไซต์รองรับระบบ Pre-order จัดการรอบส่ง และคำนวณค่าขนส่งอัตโนมัติ เพื่อกำไรที่มากขึ้น",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ อุตรดิตถ์ | เว็บขายทุเรียนและผลไม้พรีเมียม",
    seoDescription:
      "บริการทำเว็บไซต์ E-commerce ในอุตรดิตถ์ ระบบจองสินค้าล่วงหน้า (Pre-order) สำหรับทุเรียนลับแลและสินค้า OTOP",
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
        "สินค้าเกษตรเกรดพรีเมียมมี Demand สูงมากบนโลกออนไลน์ แต่ขาดระบบจัดการ Order ที่ดี เว็บไซต์จะช่วยลดความผิดพลาดในการจอง",
      technicalApproach:
        "ระบบตะกร้าสินค้าที่แจ้งเตือนผ่าน Line Notify ทันทีที่มีออเดอร์ และหน้าเว็บที่โหลดไวมากบนมือถือ",
      localStrength:
        "การทำ SEO ด้วย Keyword เฉพาะ (เช่น 'ทุเรียนหลงลับแล ส่งถึงบ้าน') ช่วยดึงลูกค้าที่มีกำลังซื้อสูงให้เข้ามาสั่งจองข้ามปี",
    },
  },
] as const;
```

### CONFIG: image-blur-data.ts

```typescript
/**
 * [SYSTEM GENERATED]: IMAGE_BLUR_REGISTRY v17.7.8
 * DO NOT EDIT MANUALLY. Run 'node scripts/gen-blur-data.mjs'
 */
import type { ImageBlurRegistry } from "@/types";

export const IMAGE_BLUR_DATA: ImageBlurRegistry = {
  "/images/areas/bangkok-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoMAAkABIByJaACdAELX07w6OAA/vDmNNLsl03W2fi8C67rhOnP1frTN2ca8VPxMTDBPCYA",
    width: 1024,
    height: 768,
  },
  "/images/areas/chiang-mai-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoMAAkABIByJaACdAELX07w6OAA/vDmNNLsl03W2fi8C67rhOnP1frTN2ca8VPxMTDBPCYA",
    width: 1024,
    height: 768,
  },
  "/images/areas/chon-buri-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoMAAkABIByJaACdAELX07w6OAA/vDmNNLsl03W2fi8C67rhOnP1frTN2ca8VPxMTDBPCYA",
    width: 1024,
    height: 768,
  },
  "/images/areas/kamphaeng-phet-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoMAAkABIByJaACdAELX07w6OAA/vDmNNLsl03W2fi8C67rhOnP1frTN2ca8VPxMTDBPCYA",
    width: 1024,
    height: 768,
  },
  "/images/areas/khon-kaen-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoMAAkABIByJaACdAELX07w6OAA/vDmNNLsl03W2fi8C67rhOnP1frTN2ca8VPxMTDBPCYA",
    width: 1024,
    height: 768,
  },
  "/images/areas/korat-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoMAAkABIByJaACdAELX07w6OAA/vDmNNLsl03W2fi8C67rhOnP1frTN2ca8VPxMTDBPCYA",
    width: 1024,
    height: 768,
  },
  "/images/areas/nakhon-sawan-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoMAAkABIByJaACdAELX07w6OAA/vDmNNLsl03W2fi8C67rhOnP1frTN2ca8VPxMTDBPCYA",
    width: 1024,
    height: 768,
  },
  "/images/areas/phichit-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoMAAkABIByJaACdAELX07w6OAA/vDmNNLsl03W2fi8C67rhOnP1frTN2ca8VPxMTDBPCYA",
    width: 1024,
    height: 768,
  },
  "/images/areas/phuket-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoMAAkABIByJaACdAELX07w6OAA/vDmNNLsl03W2fi8C67rhOnP1frTN2ca8VPxMTDBPCYA",
    width: 1024,
    height: 768,
  },
  "/images/areas/preview.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoMAAkABIByJaACdAELX07w6OAA/vDmNNLsl03W2fi8C67rhOnP1frTN2ca8VPxMTDBPCYA",
    width: 1024,
    height: 768,
  },
  "/images/areas/sukhothai-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoMAAkABIByJaACdAELX07w6OAA/vDmNNLsl03W2fi8C67rhOnP1frTN2ca8VPxMTDBPCYA",
    width: 1024,
    height: 768,
  },
  "/images/areas/tak-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoMAAkABIByJaACdAELX07w6OAA/vDmNNLsl03W2fi8C67rhOnP1frTN2ca8VPxMTDBPCYA",
    width: 1024,
    height: 768,
  },
  "/images/areas/uttaradit-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoMAAkABIByJaACdAELX07w6OAA/vDmNNLsl03W2fi8C67rhOnP1frTN2ca8VPxMTDBPCYA",
    width: 1024,
    height: 768,
  },
  "/images/avatar.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADQAQCdASoMAAwABIByJZgCdADbPORtYAD+8jRXEMzJAS1ymjVXqHR3eb9sg13HZYvrfk1Gd9U2h9DNeVfPRE9SbhQAAA==",
    width: 554,
    height: 554,
  },
  "/images/blog/advanced-schema-markup.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACwAQCdASoMAAkABIByJZwAAudgks4AAP7w5UWTTXyYuUG6M7xwAA==",
    width: 1024,
    height: 768,
  },
  "/images/blog/copywriting-specialist.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACwAQCdASoMAAkABIByJZwAAudgks4AAP7w5UWTTXyYuUG6M7xwAA==",
    width: 1024,
    height: 768,
  },
  "/images/blog/core-web-vitals-speed.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACwAQCdASoMAAkABIByJZwAAudgks4AAP7w5UWTTXyYuUG6M7xwAA==",
    width: 1024,
    height: 768,
  },
  "/images/blog/default-thumb.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACwAQCdASoMAAkABIByJZwAAudgks4AAP7w5UWTTXyYuUG6M7xwAA==",
    width: 1024,
    height: 768,
  },
  "/images/blog/ecommerce-seo.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACwAQCdASoMAAkABIByJZwAAudgks4AAP7w5UWTTXyYuUG6M7xwAA==",
    width: 1024,
    height: 768,
  },
  "/images/blog/facebook-ads-vs-website.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoMAAkABIByJZgCdADGrocgAP7lyTTY9YPz0QU04/h2xH5c7P1YlkgNjFhPPgAA",
    width: 696,
    height: 495,
  },
  "/images/blog/seo-google-love.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADQAQCdASoMAAkABIByJQBOj+AB1LLaAAD+84J36fOq22uofYjR4/t2rdGXDvW1MY+Pg0Vp0yWa8D1ejW5O1YJiY8jTjgAA",
    width: 640,
    height: 479,
  },
  "/images/blog/technical-audit-visual.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADQAQCdASoMAAkABIByJQBOj+AB1LLaAAD+84J36fOq22uofYjR4/t2rdGXDvW1MY+Pg0Vp0yWa8D1ejW5O1YJiY8jTjgAA",
    width: 640,
    height: 479,
  },
  "/images/case-studies/industrial-catalog.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoMAAkABIByJaACdAELX07w6OAA/vDmNNLsl03W2fi8C67rhOnP1frTN2ca8VPxMTDBPCYA",
    width: 1024,
    height: 768,
  },
  "/images/case-studies/preview.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoMAAkABIByJaACdAELX07w6OAA/vDmNNLsl03W2fi8C67rhOnP1frTN2ca8VPxMTDBPCYA",
    width: 1024,
    height: 768,
  },
  "/images/case-studies/unlink-reputation.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoMAAkABIByJZgCdADGrocgAP7lyTTY9YPz0QU04/h2xH5c7P1YlkgNjFhPPgAA",
    width: 696,
    height: 495,
  },
  "/images/icon-192.png": {
    blurDataURL:
      "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoMAAwABIByJZQAAlvpjjcAAP7zgAlfFBId7poZczG1elp4mTHMls79bQAAAA==",
    width: 192,
    height: 192,
  },
  "/images/og-default.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoMAAkABIByJaACdAELX07w6OAA/vDmNNLsl03W2fi8C67rhOnP1frTN2ca8VPxMTDBPCYA",
    width: 1024,
    height: 768,
  },
  "/images/og-main.png": {
    blurDataURL:
      "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAAAQAgCdASoMAAkABIByJYwCdAEQUKpq8eQAAP7p4GYwSqFcU8lJnElYaHiBUeexjxomSg1/F9XvYbggoxDBAhAA",
    width: 1024,
    height: 768,
  },
  "/images/seo/advanced-schema-markup.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACwAQCdASoMAAkABIByJZwAAudgks4AAP7w5UWTTXyYuUG6M7xwAA==",
    width: 1024,
    height: 768,
  },
  "/images/seo/core-web-vitals-speed.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACwAQCdASoMAAkABIByJZwAAudgks4AAP7w5UWTTXyYuUG6M7xwAA==",
    width: 1024,
    height: 768,
  },
  "/images/seo/ecommerce-seo.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACwAQCdASoMAAkABIByJZwAAudgks4AAP7w5UWTTXyYuUG6M7xwAA==",
    width: 1024,
    height: 768,
  },
  "/images/seo/seo.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACwAQCdASoMAAkABIByJZwAAudgks4AAP7w5UWTTXyYuUG6M7xwAA==",
    width: 1024,
    height: 768,
  },
  "/images/service/catalog-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoMAAkABIByJaACdAELX07w6OAA/vDmNNLsl03W2fi8C67rhOnP1frTN2ca8VPxMTDBPCYA",
    width: 1024,
    height: 768,
  },
  "/images/service/corporate-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoMAAkABIByJaACdAELX07w6OAA/vDmNNLsl03W2fi8C67rhOnP1frTN2ca8VPxMTDBPCYA",
    width: 1024,
    height: 768,
  },
  "/images/service/hotel-resort-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoMAAkABIByJaACdAELX07w6OAA/vDmNNLsl03W2fi8C67rhOnP1frTN2ca8VPxMTDBPCYA",
    width: 1024,
    height: 768,
  },
  "/images/service/local-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoMAAkABIByJaACdAELX07w6OAA/vDmNNLsl03W2fi8C67rhOnP1frTN2ca8VPxMTDBPCYA",
    width: 1024,
    height: 768,
  },
  "/images/service/personal-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACwAQCdASoMAAkABIByJZwAAudgks4AAP7w5UWTTXyYuUG6M7xwAA==",
    width: 1024,
    height: 768,
  },
  "/images/service/salepage-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACwAQCdASoMAAkABIByJZwAAudgks4AAP7w5UWTTXyYuUG6M7xwAA==",
    width: 1024,
    height: 768,
  },
  "/images/service/seo-agency-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoMAAkABIByJaACdAELX07w6OAA/vDmNNLsl03W2fi8C67rhOnP1frTN2ca8VPxMTDBPCYA",
    width: 1024,
    height: 768,
  },
  "/images/shared/placeholder.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoMAAkABIByJZgCdADGrocgAP7lyTTY9YPz0QU04/h2xH5c7P1YlkgNjFhPPgAA",
    width: 696,
    height: 495,
  },
  "/images/shared/preview.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoMAAkABIByJaACdAELX07w6OAA/vDmNNLsl03W2fi8C67rhOnP1frTN2ca8VPxMTDBPCYA",
    width: 1024,
    height: 768,
  },
} as const;
```

### CONFIG: master-registry.ts

```typescript
/**
 * [DATA REGISTRY]: MASTER_SERVICE_REGISTRY v17.9.0 (CONVERSION_ENGINEERED)
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
 * [SYSTEM CORE]: GLOBAL_SITE_CONFIGURATION v17.8.1 (IDENTITY_REFINED)
 * [MANDATE]: Single Source of Truth | EEAT Alignment | Strategic Branding
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { SiteConfig } from "@/types";

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
  // [04] SEO & ENTITY AUTHORITY
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

export type GlobalConfig = typeof SITE_CONFIG;
```

---

## DIRECTORY INFRASTRUCTURE

```text
[3.4K 2026-02-11 17:12]  .
├── [7.9K 2026-02-11 17:12]  AEMDEVWEB-STRUCTURE.txt
├── [102K 2026-02-11 17:17]  README.md
├── [3.4K 2026-02-11 05:49]  app
│   ├── [3.4K 2026-02-11 05:59]  (routes)
│   │   ├── [3.4K 2026-02-11 05:49]  areas
│   │   │   ├── [3.4K 2026-02-11 05:49]  [slug]
│   │   │   │   └── [4.8K 2026-02-11 15:51]  page.tsx
│   │   │   └── [6.6K 2026-02-11 10:43]  page.tsx
│   │   ├── [3.4K 2026-02-11 05:49]  blog
│   │   │   ├── [3.4K 2026-02-11 05:49]  [slug]
│   │   │   │   └── [5.6K 2026-02-11 11:02]  page.tsx
│   │   │   └── [4.6K 2026-02-11 10:43]  page.tsx
│   │   ├── [3.4K 2026-02-11 05:49]  case-studies
│   │   │   ├── [3.4K 2026-02-11 05:49]  [slug]
│   │   │   │   └── [6.0K 2026-02-11 10:48]  page.tsx
│   │   │   └── [3.1K 2026-02-11 10:43]  page.tsx
│   │   └── [3.4K 2026-02-11 05:49]  services
│   │       ├── [3.4K 2026-02-11 05:49]  [slug]
│   │       │   └── [5.7K 2026-02-11 17:16]  page.tsx
│   │       └── [8.5K 2026-02-11 16:56]  page.tsx
│   ├── [3.4K 2026-02-11 05:49]  about
│   │   └── [ 12K 2026-02-11 10:41]  page.tsx
│   ├── [5.6K 2026-02-11 15:51]  globals.css
│   ├── [5.2K 2026-02-11 16:23]  layout.tsx
│   ├── [4.3K 2026-02-11 10:34]  loading.tsx
│   ├── [1.4K 2026-02-11 05:49]  manifest.ts
│   ├── [5.6K 2026-02-11 05:49]  not-found.tsx
│   ├── [7.6K 2026-02-11 16:23]  page.tsx
│   ├── [3.4K 2026-02-11 05:49]  privacy
│   │   └── [ 11K 2026-02-11 10:40]  page.tsx
│   ├── [1.5K 2026-02-11 05:49]  robots.ts
│   ├── [4.7K 2026-02-11 05:49]  sitemap.ts
│   ├── [3.4K 2026-02-11 05:49]  status
│   │   └── [ 12K 2026-02-11 10:40]  page.tsx
│   └── [3.4K 2026-02-11 05:49]  terms
│       └── [ 11K 2026-02-11 10:40]  page.tsx
├── [3.4K 2026-02-11 05:49]  components
│   ├── [3.4K 2026-02-11 05:49]  features
│   │   ├── [3.4K 2026-02-11 05:49]  areas
│   │   │   └── [4.8K 2026-02-11 13:31]  AreaCard.tsx
│   │   ├── [3.4K 2026-02-11 05:49]  blog
│   │   │   └── [3.4K 2026-02-11 13:31]  BlogCard.tsx
│   │   ├── [3.4K 2026-02-11 05:49]  case-studies
│   │   │   └── [3.9K 2026-02-11 13:31]  CaseStudyCard.tsx
│   │   ├── [3.4K 2026-02-11 05:49]  landing
│   │   │   ├── [7.0K 2026-02-11 10:30]  Hero.tsx
│   │   │   ├── [8.0K 2026-02-11 10:31]  PricingSection.tsx
│   │   │   └── [9.2K 2026-02-11 10:29]  WorkProcess.tsx
│   │   └── [3.4K 2026-02-11 05:49]  services
│   │       ├── [4.6K 2026-02-11 13:31]  ServiceCard.tsx
│   │       └── [2.8K 2026-02-11 10:38]  ServiceListingHub.tsx
│   ├── [3.4K 2026-02-11 05:49]  layout
│   │   ├── [ 10K 2026-02-11 16:31]  Footer.tsx
│   │   ├── [ 11K 2026-02-11 16:22]  Navbar.tsx
│   │   ├── [2.5K 2026-02-11 16:26]  PageTransition.tsx
│   │   └── [2.0K 2026-02-11 16:19]  TopLoader.tsx
│   ├── [3.4K 2026-02-11 05:49]  providers
│   │   └── [1.8K 2026-02-11 05:49]  theme-provider.tsx
│   ├── [3.4K 2026-02-11 05:49]  seo
│   │   └── [1.3K 2026-02-11 05:49]  JsonLd.tsx
│   ├── [3.4K 2026-02-11 05:49]  shared
│   │   ├── [6.5K 2026-02-11 05:49]  ConversionCTA.tsx
│   │   ├── [6.2K 2026-02-11 05:49]  ImpactStats.tsx
│   │   ├── [4.2K 2026-02-11 05:49]  LineStickyButton.tsx
│   │   └── [5.6K 2026-02-11 05:49]  TrustBadge.tsx
│   ├── [3.4K 2026-02-11 10:55]  templates
│   │   ├── [3.4K 2026-02-11 05:49]  bio
│   │   │   ├── [9.8K 2026-02-11 15:52]  Index.tsx
│   │   │   └── [2.5K 2026-02-11 15:52]  Schema.ts
│   │   ├── [3.4K 2026-02-11 05:49]  catalog
│   │   │   ├── [9.1K 2026-02-11 15:52]  Index.tsx
│   │   │   └── [2.9K 2026-02-11 15:52]  Schema.ts
│   │   ├── [3.4K 2026-02-11 05:49]  corporate
│   │   │   ├── [9.9K 2026-02-11 15:23]  Index.tsx
│   │   │   └── [3.4K 2026-02-11 15:22]  Schema.ts
│   │   ├── [3.4K 2026-02-11 05:49]  hotelresort
│   │   │   ├── [8.2K 2026-02-11 15:52]  Index.tsx
│   │   │   └── [2.6K 2026-02-11 15:31]  Schema.ts
│   │   ├── [3.4K 2026-02-11 10:55]  local-authority
│   │   │   ├── [1.7K 2026-02-11 15:32]  Schema.ts
│   │   │   └── [ 11K 2026-02-11 15:52]  index.tsx
│   │   ├── [3.4K 2026-02-11 05:49]  salepage
│   │   │   ├── [8.8K 2026-02-11 15:52]  Index.tsx
│   │   │   └── [2.3K 2026-02-11 15:52]  Schema.ts
│   │   ├── [3.4K 2026-02-11 05:49]  sections
│   │   │   ├── [2.8K 2026-02-11 13:31]  DynamicFAQ.tsx
│   │   │   ├── [3.8K 2026-02-11 15:39]  FeatureGrid.tsx
│   │   │   ├── [5.7K 2026-02-11 15:52]  HeroEngine.tsx
│   │   │   └── [3.2K 2026-02-11 15:52]  LayoutEngine.tsx
│   │   └── [3.4K 2026-02-11 05:49]  seo_agency
│   │       ├── [2.7K 2026-02-11 15:34]  Schema.ts
│   │       └── [8.9K 2026-02-11 15:52]  index.tsx
│   └── [3.4K 2026-02-11 05:49]  ui
│       ├── [2.2K 2026-02-11 14:59]  AmbientBackground.tsx
│       ├── [1.5K 2026-02-11 05:49]  Callout.tsx
│       ├── [4.1K 2026-02-11 15:52]  IconRenderer.tsx
│       ├── [3.0K 2026-02-11 10:29]  SkeletonCard.tsx
│       ├── [3.2K 2026-02-11 05:49]  ThemeToggle.tsx
│       ├── [2.7K 2026-02-11 15:52]  accordion.tsx
│       ├── [4.2K 2026-02-11 05:49]  button.tsx
│       ├── [1.3K 2026-02-11 05:49]  skeleton-grid.tsx
│       ├── [ 894 2026-02-11 05:49]  skeleton.tsx
│       └── [3.3K 2026-02-11 05:49]  sonner.tsx
├── [ 425 2026-02-11 05:49]  components.json
├── [3.4K 2026-02-11 17:02]  config
│   ├── [8.8K 2026-02-11 17:02]  00-SYSTEM-MANDATE.md
│   └── [4.1K 2026-02-11 17:02]  01-SYSTEM-PROMPT-EXTENSION.md
├── [3.4K 2026-02-11 11:33]  constants
│   ├── [ 38K 2026-02-11 14:33]  area-nodes.ts
│   ├── [9.3K 2026-02-11 16:31]  image-blur-data.ts
│   ├── [ 22K 2026-02-11 14:28]  master-registry.ts
│   ├── [2.4K 2026-02-11 05:49]  navigation.ts
│   └── [5.7K 2026-02-11 13:06]  site-config.ts
├── [3.4K 2026-02-11 05:49]  content
│   ├── [3.4K 2026-02-11 05:49]  blog
│   │   ├── [ 11K 2026-02-11 05:49]  5-points-killing-sales.mdx
│   │   ├── [ 10K 2026-02-11 05:49]  advanced-schema-markup.mdx
│   │   ├── [9.2K 2026-02-11 05:49]  case-study-unlink-th.mdx
│   │   ├── [8.5K 2026-02-11 05:49]  copywriting-secrets.mdx
│   │   ├── [9.9K 2026-02-11 05:49]  core-web-vitals-speed.mdx
│   │   ├── [8.7K 2026-02-11 05:49]  ecommerce-conversion-seo.mdx
│   │   ├── [9.5K 2026-02-11 05:49]  facebook-ads-vs-website.mdx
│   │   ├── [ 10K 2026-02-11 05:49]  lower-north-digital-transformation.mdx
│   │   ├── [ 16K 2026-02-11 05:49]  seo-2026-strategy.mdx
│   │   └── [9.2K 2026-02-11 05:49]  technical-audit-protocol.mdx
│   └── [3.4K 2026-02-11 05:49]  case-studies
│       ├── [ 10K 2026-02-11 05:49]  case-study-industrial-catalog.mdx
│       └── [9.7K 2026-02-11 05:49]  unlink-reputation-management-success.mdx
├── [2.1K 2026-02-11 05:49]  eslint.config.mjs
├── [ 420 2026-02-11 05:49]  knip.json
├── [3.4K 2026-02-11 05:49]  lib
│   ├── [5.9K 2026-02-11 05:49]  cms.ts
│   ├── [6.5K 2026-02-11 13:31]  schema.ts
│   ├── [2.2K 2026-02-11 05:49]  seo-utils.ts
│   └── [3.6K 2026-02-11 05:49]  utils.ts
├── [4.6K 2026-02-11 05:49]  mdx-components.tsx
├── [ 247 2026-02-11 16:34]  next-env.d.ts
├── [3.1K 2026-02-11 16:39]  next.config.ts
├── [2.5K 2026-02-11 16:42]  package.json
├── [  51 2026-02-11 13:31]  pmpm-workspace.yaml
├── [260K 2026-02-11 16:56]  pnpm-lock.yaml
├── [1.1K 2026-02-11 05:49]  postcss.config.mjs
├── [3.4K 2026-02-11 05:49]  public
│   └── [3.4K 2026-02-11 05:49]  images
│       ├── [3.4K 2026-02-11 05:49]  areas
│       ├── [3.4K 2026-02-11 05:49]  blog
│       ├── [3.4K 2026-02-11 05:49]  case-studies
│       ├── [3.4K 2026-02-11 05:49]  seo
│       ├── [3.4K 2026-02-11 05:49]  service
│       ├── [3.4K 2026-02-11 05:49]  shared
│       └── [3.4K 2026-02-11 11:28]  templates
│           └── [3.4K 2026-02-11 05:49]  local-service
├── [3.4K 2026-02-11 11:20]  scripts
│   ├── [1.2K 2026-02-11 11:01]  clean-project.sh
│   ├── [2.0K 2026-02-11 05:49]  cleanup-images.sh
│   ├── [2.6K 2026-02-11 15:12]  gen-blur-data.mjs
│   ├── [2.8K 2026-02-11 17:01]  generate_docs.sh
│   └── [ 411 2026-02-11 11:16]  optimize-assets.sh
├── [ 693 2026-02-11 05:49]  tsconfig.json
├── [182K 2026-02-11 17:17]  tsconfig.tsbuildinfo
├── [3.4K 2026-02-11 05:49]  types
│   ├── [7.4K 2026-02-11 15:52]  index.d.ts
│   ├── [ 423 2026-02-11 05:49]  mdx.d.ts
│   └── [3.8K 2026-02-11 15:52]  template-props.ts
└── [2.5K 2026-02-11 10:57]  vercel.json

54 directories, 112 files
```

---

## BUILD ARTIFACT ANALYSIS (.next/static)

```text
2.2M	.next/static
196K	.next/static/chunks/92766bc8-e3b049cccdab7d67.js
188K	.next/static/chunks/966-b80289eacf7ce2d0.js
180K	.next/static/chunks/framework-4620d42bf61d4349.js
132K	.next/static/chunks/main-c1e62b29230972a3.js
124K	.next/static/chunks/409-2a4a6f1385207df3.js
112K	.next/static/chunks/polyfills-42372ed130431b0a.js
104K	.next/static/css/761c6718c24e6ac6.css
84K	.next/static/media/8e9860b6e62d6359-s.woff2
56K	.next/static/chunks/714-abc46d0f2e0b010c.js
48K	.next/static/media/e4af272ccee01ff0-s.p.woff2
```
