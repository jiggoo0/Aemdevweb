---
domain: aemdevweb.com
status: strictly-enforced
last_audit: 2026-02-11 06:01:50
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
 * [SYSTEM CORE]: AREA_NODES_DATA v17.6.2 (CLEANED)
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
```

### CONFIG: master-registry.ts

```typescript
/**
 * [DATA REGISTRY]: MASTER_SERVICE_REGISTRY v17.7.3 (CLEANED)
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
[3.4K 2026-02-11 06:01]  .
├── [ 78K 2026-02-11 06:01]  README.md
├── [3.4K 2026-02-11 05:49]  app
│   ├── [3.4K 2026-02-11 05:59]  (routes)
│   │   ├── [3.4K 2026-02-11 05:49]  areas
│   │   │   ├── [3.4K 2026-02-11 05:49]  [slug]
│   │   │   │   └── [5.7K 2026-02-11 05:49]  page.tsx
│   │   │   └── [6.6K 2026-02-11 05:49]  page.tsx
│   │   ├── [3.4K 2026-02-11 05:49]  blog
│   │   │   ├── [3.4K 2026-02-11 05:49]  [slug]
│   │   │   │   └── [5.6K 2026-02-11 05:49]  page.tsx
│   │   │   └── [4.7K 2026-02-11 05:49]  page.tsx
│   │   ├── [3.4K 2026-02-11 05:49]  case-studies
│   │   │   ├── [3.4K 2026-02-11 05:49]  [slug]
│   │   │   │   └── [6.0K 2026-02-11 05:49]  page.tsx
│   │   │   └── [3.1K 2026-02-11 05:49]  page.tsx
│   │   └── [3.4K 2026-02-11 05:49]  services
│   │       ├── [3.4K 2026-02-11 05:49]  [slug]
│   │       │   └── [4.6K 2026-02-11 05:49]  page.tsx
│   │       └── [8.0K 2026-02-11 05:49]  page.tsx
│   ├── [3.4K 2026-02-11 05:49]  about
│   │   └── [ 12K 2026-02-11 05:49]  page.tsx
│   ├── [5.6K 2026-02-11 05:49]  globals.css
│   ├── [5.5K 2026-02-11 05:49]  layout.tsx
│   ├── [4.3K 2026-02-11 05:49]  loading.tsx
│   ├── [1.4K 2026-02-11 05:49]  manifest.ts
│   ├── [5.6K 2026-02-11 05:49]  not-found.tsx
│   ├── [8.1K 2026-02-11 05:49]  page.tsx
│   ├── [3.4K 2026-02-11 05:49]  privacy
│   │   └── [ 11K 2026-02-11 05:49]  page.tsx
│   ├── [1.5K 2026-02-11 05:49]  robots.ts
│   ├── [4.7K 2026-02-11 05:49]  sitemap.ts
│   ├── [3.4K 2026-02-11 05:49]  status
│   │   └── [ 12K 2026-02-11 05:49]  page.tsx
│   └── [3.4K 2026-02-11 05:49]  terms
│       └── [ 11K 2026-02-11 05:49]  page.tsx
├── [3.4K 2026-02-11 05:49]  components
│   ├── [3.4K 2026-02-11 05:49]  features
│   │   ├── [3.4K 2026-02-11 05:49]  areas
│   │   │   └── [6.5K 2026-02-11 05:49]  AreaCard.tsx
│   │   ├── [3.4K 2026-02-11 05:49]  blog
│   │   │   └── [5.3K 2026-02-11 05:49]  BlogCard.tsx
│   │   ├── [3.4K 2026-02-11 05:49]  case-studies
│   │   │   └── [6.4K 2026-02-11 05:49]  CaseStudyCard.tsx
│   │   ├── [3.4K 2026-02-11 05:49]  landing
│   │   │   ├── [7.0K 2026-02-11 05:49]  Hero.tsx
│   │   │   ├── [8.0K 2026-02-11 05:49]  PricingSection.tsx
│   │   │   └── [9.2K 2026-02-11 05:49]  WorkProcess.tsx
│   │   └── [3.4K 2026-02-11 05:49]  services
│   │       ├── [7.1K 2026-02-11 05:49]  ServiceCard.tsx
│   │       └── [2.8K 2026-02-11 05:49]  ServiceListingHub.tsx
│   ├── [3.4K 2026-02-11 05:49]  layout
│   │   ├── [9.9K 2026-02-11 05:49]  Footer.tsx
│   │   ├── [ 11K 2026-02-11 05:49]  Navbar.tsx
│   │   ├── [2.2K 2026-02-11 05:49]  PageTransition.tsx
│   │   └── [2.0K 2026-02-11 05:49]  TopLoader.tsx
│   ├── [3.4K 2026-02-11 05:49]  providers
│   │   └── [1.8K 2026-02-11 05:49]  theme-provider.tsx
│   ├── [3.4K 2026-02-11 05:49]  seo
│   │   └── [1.3K 2026-02-11 05:49]  JsonLd.tsx
│   ├── [3.4K 2026-02-11 05:49]  shared
│   │   ├── [6.5K 2026-02-11 05:49]  ConversionCTA.tsx
│   │   ├── [6.2K 2026-02-11 05:49]  ImpactStats.tsx
│   │   ├── [4.2K 2026-02-11 05:49]  LineStickyButton.tsx
│   │   └── [5.6K 2026-02-11 05:49]  TrustBadge.tsx
│   ├── [3.4K 2026-02-11 05:49]  templates
│   │   ├── [3.4K 2026-02-11 05:49]  bio
│   │   │   ├── [9.1K 2026-02-11 05:49]  Index.tsx
│   │   │   └── [2.3K 2026-02-11 05:49]  Schema.ts
│   │   ├── [3.4K 2026-02-11 05:49]  catalog
│   │   │   ├── [6.7K 2026-02-11 05:49]  Index.tsx
│   │   │   └── [2.5K 2026-02-11 05:49]  Schema.ts
│   │   ├── [3.4K 2026-02-11 05:49]  corporate
│   │   │   ├── [9.7K 2026-02-11 05:49]  Index.tsx
│   │   │   └── [3.7K 2026-02-11 05:49]  Schema.ts
│   │   ├── [3.4K 2026-02-11 05:49]  hotelresort
│   │   │   ├── [6.6K 2026-02-11 05:49]  Index.tsx
│   │   │   └── [1.9K 2026-02-11 05:49]  Schema.ts
│   │   ├── [3.4K 2026-02-11 05:49]  new-service-name
│   │   │   ├── [2.9K 2026-02-11 05:49]  Schema.ts
│   │   │   └── [9.6K 2026-02-11 05:49]  index.tsx
│   │   ├── [3.4K 2026-02-11 05:49]  salepage
│   │   │   ├── [8.7K 2026-02-11 05:49]  Index.tsx
│   │   │   └── [2.3K 2026-02-11 05:49]  Schema.ts
│   │   ├── [3.4K 2026-02-11 05:49]  sections
│   │   │   ├── [3.0K 2026-02-11 05:49]  DynamicFAQ.tsx
│   │   │   ├── [4.0K 2026-02-11 05:49]  FeatureGrid.tsx
│   │   │   ├── [6.4K 2026-02-11 05:49]  HeroEngine.tsx
│   │   │   └── [3.8K 2026-02-11 05:49]  LayoutEngine.tsx
│   │   └── [3.4K 2026-02-11 05:49]  seo_agency
│   │       ├── [1.9K 2026-02-11 05:49]  Schema.ts
│   │       └── [6.7K 2026-02-11 05:49]  index.tsx
│   └── [3.4K 2026-02-11 05:49]  ui
│       ├── [3.2K 2026-02-11 05:49]  AmbientBackground.tsx
│       ├── [1.5K 2026-02-11 05:49]  Callout.tsx
│       ├── [4.3K 2026-02-11 05:49]  IconRenderer.tsx
│       ├── [3.0K 2026-02-11 05:49]  SkeletonCard.tsx
│       ├── [3.2K 2026-02-11 05:49]  ThemeToggle.tsx
│       ├── [2.1K 2026-02-11 05:49]  accordion.tsx
│       ├── [4.2K 2026-02-11 05:49]  button.tsx
│       ├── [1.3K 2026-02-11 05:49]  skeleton-grid.tsx
│       ├── [ 894 2026-02-11 05:49]  skeleton.tsx
│       └── [3.3K 2026-02-11 05:49]  sonner.tsx
├── [ 425 2026-02-11 05:49]  components.json
├── [3.4K 2026-02-11 05:49]  config
│   ├── [8.8K 2026-02-11 05:49]  00-SYSTEM-MANDATE.md
│   └── [4.1K 2026-02-11 05:49]  01-SYSTEM-PROMPT-EXTENSION.md
├── [3.4K 2026-02-11 05:49]  constants
│   ├── [ 29K 2026-02-11 05:49]  area-nodes.ts
│   ├── [ 19K 2026-02-11 05:49]  master-registry.ts
│   ├── [2.4K 2026-02-11 05:49]  navigation.ts
│   └── [4.5K 2026-02-11 05:49]  site-config.ts
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
│   ├── [4.7K 2026-02-11 05:49]  schema.ts
│   ├── [2.2K 2026-02-11 05:49]  seo-utils.ts
│   └── [3.6K 2026-02-11 05:49]  utils.ts
├── [4.6K 2026-02-11 05:49]  mdx-components.tsx
├── [ 251 2026-02-11 05:50]  next-env.d.ts
├── [2.2K 2026-02-11 05:49]  next.config.ts
├── [2.4K 2026-02-11 05:49]  package.json
├── [239K 2026-02-11 05:49]  pnpm-lock.yaml
├── [  51 2026-02-11 05:49]  pnpm-workspace.yaml
├── [1.1K 2026-02-11 05:49]  postcss.config.mjs
├── [3.4K 2026-02-11 05:49]  public
│   └── [3.4K 2026-02-11 05:49]  images
│       ├── [3.4K 2026-02-11 05:49]  areas
│       ├── [3.4K 2026-02-11 05:49]  blog
│       ├── [3.4K 2026-02-11 05:49]  case-studies
│       ├── [3.4K 2026-02-11 05:49]  seo
│       ├── [3.4K 2026-02-11 05:49]  service
│       ├── [3.4K 2026-02-11 05:49]  shared
│       └── [3.4K 2026-02-11 05:49]  templates
│           ├── [3.4K 2026-02-11 05:49]  corporate-pro
│           ├── [3.4K 2026-02-11 05:49]  event-magic
│           ├── [3.4K 2026-02-11 05:49]  facebook-ads-expert
│           ├── [3.4K 2026-02-11 05:49]  hotel-resort
│           ├── [3.4K 2026-02-11 05:49]  local-service
│           ├── [3.4K 2026-02-11 05:49]  personal-bio
│           ├── [3.4K 2026-02-11 05:49]  restaurant-cafe
│           ├── [3.4K 2026-02-11 05:49]  salepage-single
│           ├── [3.4K 2026-02-11 05:49]  seo-agency
│           ├── [3.4K 2026-02-11 05:49]  shopmasterpro
│           ├── [3.4K 2026-02-11 05:49]  starter-landing
│           └── [3.4K 2026-02-11 05:49]  webrental
├── [3.4K 2026-02-11 05:49]  scripts
│   ├── [1.2K 2026-02-11 05:49]  check-system.sh
│   ├── [1.2K 2026-02-11 05:49]  clean-dev.sh
│   ├── [2.0K 2026-02-11 05:49]  cleanup-images.sh
│   ├── [3.4K 2026-02-11 05:49]  dev
│   │   ├── [1.2K 2026-02-11 05:49]  clean-project.sh
│   │   ├── [ 937 2026-02-11 05:49]  knip-check.sh
│   │   └── [5.1K 2026-02-11 05:49]  pre-deploy-check.sh
│   └── [2.2K 2026-02-11 05:49]  generate_docs.sh
├── [ 693 2026-02-11 05:49]  tsconfig.json
├── [3.4K 2026-02-11 05:49]  types
│   ├── [6.7K 2026-02-11 05:49]  index.d.ts
│   ├── [ 423 2026-02-11 05:49]  mdx.d.ts
│   └── [3.0K 2026-02-11 05:49]  template-props.ts
└── [2.4K 2026-02-11 05:49]  vercel.json

66 directories, 111 files
```
