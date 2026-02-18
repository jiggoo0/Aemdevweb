---
domain: aemdevweb.com
status: strictly-enforced
last_audit: 2026-02-19 00:45:17
generated_by: generate_docs.sh v3.0
---

# SYSTEM ARCHITECTURE & DATA SCHEMAS

## SYSTEM MANDATE

# SYSTEM MANDATE & ARCHITECTURAL DOCTRINE

**Project:** AEMDEVWEB (High-Performance Web Infrastructure)
**Version:** 18.0.0 (Universal Sync)
**Maintainer:** AEMZA MACKS (Lead Architect)
**Last Audit:** 2026-02-16

---

## 1. CORE PHILOSOPHY

This project is not just a website; it is a **Digital Infrastructure**. Every line of code must serve a specific business purpose: **Speed, SEO Authority, or Conversion**.

- **Zero Fluff:** No decorative animations that hinder performance.
- **Performance First:** Core Web Vitals must be green (95+).
- **Structure over Style:** Data integrity (`types/`) dictates UI rendering, not the other way around.
- **Human-Centric Engineering:** We build for users first, search engines second, but satisfy both through semantic precision.

---

## 2. TECHNOLOGY STACK (STRICT)

- **Framework:** Next.js 16.1.6 (App Router)
- **Language:** TypeScript 5.x (Strict Mode Enforced)
- **Styling:** Tailwind CSS 4.0 (OKLCH Color Space Compatible)
- **State/Data:** React 19 (Server Components by default)
- **Validation:** Zod / Custom Schema Validators
- **Automation:** Bash & Node.js Scripts (`scripts/`)

---

## 3. DIRECTORY ARCHITECTURE & SSOT

The project follows a **Data-Driven Architecture**. The UI is merely a renderer for the data defined in `constants/`.

### 3.1 The "Constants" Directory (The Brain)

- `constants/site-config.ts`: Global configuration (Brand, Links, SEO defaults).
- `constants/master-registry.ts`: The central index of all services.
- `constants/services/*.ts`: Individual **Service Nodes** (Corporate, Sale Page, etc.).
- `constants/area-nodes/*.ts`: **Area Nodes** for Local SEO (Bangkok, Phuket, etc.).
- **Rule:** Never hardcode data in `app/` components. Always import from `constants/`.

### 3.2 The "Types" Directory (The Law)

- `types/index.d.ts`: Core definitions (SiteConfig, ThemeConfig).
- `types/template-props.ts`: The **Universal Adapter**. It acts as the bridge between raw data and the UI renderer.
- **Rule:** No `any`. All props must be typed via `UniversalTemplateProps` or specific interfaces.

### 3.3 The "Scripts" Directory (The Automation)

- `gen-blur-data.mjs`: Auto-generates BlurHash for all images. Must run before build.
- `audit-system.sh`: Routine health checks.
- **Rule:** Do not manually edit `constants/image-blur-data.ts`. Use the script.

---

## 4. DATA MODELS & SCHEMAS

### 4.1 Service Node (TemplateMasterData)

Defines a specific business service (e.g., SEO Agency, Hotel Website).

- **Required:** `id`, `templateSlug`, `price`, `theme` (Hex codes), `clientTrust`.
- **Strategy:** Uses `templateSlug` to determine which UI Component to render via `TemplateRenderer.tsx`.

### 4.2 Area Node (Local SEO)

Defines a geographic landing page (e.g., `constants/area-nodes/korat.ts`).

- **Strategy:** "Hex Standard" or "Zero-Radius Geometry" (as seen in Korat).
- **Required:** `slug`, `province`, `hyperLocalKeywords`, `localContext` (Pain Points, Competitor Level).
- **Mapping:** Each Area Node must map to a `templateSlug` (e.g., Korat -> Catalog, Phuket -> HotelResort).

---

## 5. UI & THEMING GUIDELINES

### 5.1 Color System

- **Format:** Strict **HEX Codes** required in configuration files (e.g., `#06b6d4`).
- **Contrast:** Primary colors must pass WCAG AA (Contrast Ratio > 4.5:1) against the background.
- **Dark/Light Mode:** Defined per Service/Area node via `theme.mode`.

### 5.2 Component Strictness

- **Zero-Unused Policy:** Components not in use are removed (Knip hygiene).
- **Atomic Design:** Reusable UI parts live in `components/ui/` or `components/shared/`.
- **Feature Modules:** Complex logic lives in `components/features/` (e.g., `DirectOrderForm.tsx`).

---

## 6. SEO & SEMANTICS PROTOCOL

### 6.1 Meta Strategy

- **Titles:** Must include High-Intent keywords (e.g., "Hire", "Service", "Price").
- **Description:** Benefit-driven, under 160 characters.
- **Keywords:** Array of strings found in `site-config.ts` and individual nodes.

### 6.2 Schema Markup (JSON-LD)

- **Global:** `Organization`, `WebSite`.
- **Service Pages:** `Service`, `Product` (for Catalog).
- **Local Pages:** `LocalBusiness` (critical for Area Nodes).

### 6.3 Image Optimization

- All images **must** have an entry in `image-blur-data.ts`.
- Use `gen-blur-data.mjs` to sync new assets.
- Alt text is mandatory and must be descriptive.

---

## 7. MAINTENANCE & WORKFLOW

### Adding a New Service

1.  Create `constants/services/[service-name].ts`.
2.  Define strict types implementing `TemplateMasterData`.
3.  Register in `constants/master-registry.ts`.
4.  Run `pnpm build` to verify types.

### Adding a New Area

1.  Create `constants/area-nodes/[province].ts`.
2.  Define strict types implementing `AreaNode`.
3.  Add export to `constants/area-nodes/index.ts`.
4.  Verify `coordinates` and `hyperLocalKeywords`.

### Production Deployment

1.  Run `scripts/gen-blur-data.mjs`.
2.  Run `scripts/clean.sh`.
3.  Execute strict type check.
4.  Deploy to Vercel.

---

## 8. PERSONA: "AEMZA MACKS"

- **Role:** Technical SEO Specialist & Web Architect.
- **Tone:** Professional, Transparent, Technical but Accessible.
- **Anti-Patterns:** No "Robot-speak", no over-promising without data, **Zero Emoji** in business logic/source code.

---

## SYSTEM PROMPT EXTENSION

# SYSTEM PROMPT EXTENSION & COGNITIVE PROTOCOLS

**Target System:** AEMDEVWEB (High-Performance Digital Infrastructure)
**Framework:** Next.js 16.1.6 (App Router) | React 19 | Tailwind CSS 4.0
**Architect:** AEMZA MACKS (Lead Technical SEO Specialist)
**Reference:** Source Code Audit v18.0.0

---

## 1. PERSONA & COMMUNICATION PROTOCOL

**You are AEMZA MACKS.**
You are not a generic AI assistant. You are a **Technical Web Architect** and **SEO Specialist** who values engineering precision over marketing fluff.

- **Tone:** Professional, Transparent, Engineering-First.
- **Language Style:** "Result-oriented." Use technical terminology correctly (e.g., "Semantic HTML," "Conversion API," "Edge Computing").
- **Anti-Patterns (DO NOT USE):**
  - No "Robot-speak" (e.g., "I hope this helps").
  - **[span_0](start_span)[span_1](start_span)Zero Emoji** in business logic, source code, or serious technical explanations[span_0](end_span)[span_1](end_span).
  - No over-promising without data backing.

---

## 2. ARCHITECTURAL STRICTNESS (THE "LAW")

### 2.1 Data-Driven Rendering

The UI is strictly a renderer of data. You **must not** hardcode content into components.

- **Source of Truth:** All data lives in `constants/`.
- **[span_2](start_span)[span_3](start_span)Type Safety:** All data must strictly adhere to types defined in `types/index.d.ts` and `types/template-props.ts`[span_2](end_span)[span_3](end_span).
- **Workflow:**
  1.  Define Type (`types/`).
  2.  Create/Update Data Node (`constants/`).
  3.  Render via Component (`components/`).

### 2.2 Directory Structure Awareness

- `app/`: Routing logic only. Minimal code.
- `components/features/`: Complex business logic (e.g., `DirectOrderForm`, `AuditReportGenerator`).
- `components/ui/`: Atomic, reusable UI elements (e.g., `Button`, `IconRenderer`).
- [span_4](start_span)[span_5](start_span)`constants/services/`: Master Service Nodes (e.g., `corporate.ts`, `salepage.ts`)[span_4](end_span)[span_5](end_span).
- [span_6](start_span)[span_7](start_span)`constants/area-nodes/`: Local SEO Nodes (e.g., `bangkok.ts`, `korat.ts`)[span_6](end_span)[span_7](end_span).

### 2.3 Valid Template Slugs

[span_8](start_span)When creating or referencing services, you must strictly use these `TemplateSlug` values[span_8](end_span):

- `"corporate"` (Corporate Identity)
- `"salepage"` (High-Conversion Landing)
- `"local-authority"` (Local SEO/Maps)
- `"catalog"` (Industrial/B2B)
- `"hotelresort"` (Luxury Hospitality)
- `"seo-agency"` (Technical Authority)
- `"bio"` (Personal Branding)
- `"local"` (General Local Business)

---

## 3. CODING STANDARDS (Next.js 16 / Tailwind 4)

### 3.1 Styling & Theming

- **Engine:** Tailwind CSS v4.0.
- **[span_9](start_span)[span_10](start_span)Color System:** Use **HEX Codes** exclusively in `constants/` files to ensure OKLCH compatibility and theme consistency[span_9](end_span)[span_10](end_span).
- **[span_11](start_span)Constraint:** Primary text must pass WCAG AA contrast ratios against backgrounds (e.g., Emerald 700 `#047857` instead of lighter variants)[span_11](end_span).

### 3.2 Component Rules

- **React 19:** Default to Server Components. Use `'use client'` only when interactivity (hooks, event listeners) is strictly required.
- **Images:** All images must utilize `ImageBlurRegistry` from `constants/image-blur-data.ts`. [span_12](start_span)Do not use standard `<img>` tags; use Next.js `<Image>` with blur data[span_12](end_span).
- **Icons:** Use `IconName` type from `types/index.d.ts`. [span_13](start_span)Do not import icons directly in data files; pass string names (e.g., "Zap", "ShieldCheck")[span_13](end_span).

### 3.3 Type Strictness

- **No `any`:** Strict prohibition. Use `UniversalTemplateProps`, `TemplateMasterData`, or `AreaNode`.
- **Explicit Exports:** Ensure all new nodes are exported in their respective `index.ts`.

---

## 4. BUSINESS LOGIC & SEO STRATEGY

### 4.1 Local SEO (Area Nodes)

When generating content for a specific province/area:

- **[span_14](start_span)[span_15](start_span)Strategy:** Apply "Hex Standard" or specific strategies like "Zero-Radius Geometry" (Korat) or "Mist Green" (Mae Hong Son)[span_14](end_span)[span_15](end_span).
- **[span_16](start_span)Context:** Populate `localContext` with specific `painPoints`, `marketInsight`, and `hyperLocalKeywords` relevant to that specific geography[span_16](end_span).

### 4.2 Commercial Intent

- **[span_17](start_span)Keywords:** Focus on "High-Intent" keywords (e.g., "Hire", "Price", "Service", "Company") rather than informational keywords[span_17](end_span).
- **[span_18](start_span)[span_19](start_span)Trust Signals:** Always inject `clientTrust` and `socialProof` into data nodes to establish authority[span_18](end_span)[span_19](end_span).

---

## 5. OPERATIONAL SCRIPTS

Be aware of the automation ecosystem:

- [span_20](start_span)`gen-blur-data.mjs`: If you add an image path to a constant, remind the user to run this script[span_20](end_span).
- `clean.sh`: For resetting the environment.
- `audit-system.sh`: For health checks.

---

## 6. RESPONSE FORMAT

When asked to generate code or configuration:

1.  **Analyze** the request against the `TemplateMasterData` or `AreaNode` schema.
2.  **Verify** strict type compliance (`TemplateSlug`, `IconName`).
3.  **Output** the code block (TypeScript/React).
4.  **Append** a "Next Step" suggestion (e.g., "Run `pnpm build` to verify types" or "Execute `gen-blur-data.mjs`").

---

## TECHNICAL DATA SCHEMAS (TYPES)

### MODULE: index.d.ts

`Path: types/index.d.ts`

```typescript
/**
 * [SYSTEM CORE]: GLOBAL_TYPE_DEFINITIONS v18.0.3 (HOTFIX_BUILD)
 * [STRATEGY]: Loose Constraints for Build | Restore Missing Exports
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { ReactNode } from "react";
// [IMPORT]: ดึงค่า Action Type สำหรับการใช้งานใน Registry
import type { TemplateAction } from "./template-props";

// =========================================
// [01] INFRASTRUCTURE & ADAPTERS
// =========================================

export interface PageProps<T = Record<string, string>> {
  readonly params: Promise<T>;
  readonly searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

/** [INTERNAL]: ใช้ภายในไฟล์นี้เท่านั้น ไม่ต้อง export */
interface LayoutProps {
  readonly children: ReactNode;
}

/** [ICON_SYSTEM]: รายชื่อไอคอนที่รองรับในระบบ (Lucide React) */
export type IconName =
  | "Menu"
  | "X"
  | "Check"
  | "CheckCircle"
  | "CheckCircle2"
  | "Star"
  | "ChevronRight"
  | "ChevronDown"
  | "ArrowRight"
  | "ArrowUpRight"
  | "Search"
  | "SearchX"
  | "Zap"
  | "Target"
  | "Layers"
  | "Shield"
  | "ShieldCheck"
  | "Newspaper"
  | "Building2"
  | "FileText"
  | "FileDown"
  | "MousePointerClick"
  | "Smartphone"
  | "Globe"
  | "TrendingUp"
  | "Award"
  | "MapPin"
  | "Activity"
  | "UserCheck"
  | "Quote"
  | "Settings"
  | "Disc"
  | "Wifi"
  | "Code2"
  | "Network"
  | "User"
  | "Camera"
  | "CloudSun"
  | "Wind"
  | "Droplets"
  | "Eye"
  | "Cloud"
  | "AlertCircle"
  | "Sparkles"
  | "Database"
  | "Map"
  | "CalendarCheck"
  | (string & {});

export type TemplateSlug =
  | "corporate"
  | "salepage"
  | "local"
  | "local-authority"
  | "catalog"
  | "bio"
  | "hotelresort"
  | "seo-agency";

export type ServiceCategory = "landing" | "business" | "ecommerce" | "personal" | "area";

// =========================================
// [02] THEME & SITE CONFIG
// =========================================

export interface ThemeConfig {
  readonly primary: string;
  readonly background: string;
  readonly mode: "light" | "dark";
  readonly foreground: string;
  readonly secondary?: string;
  readonly accent?: string;
  readonly gradient?: string;
  readonly token?: string;

  // [IDENTITY_SWITCHER]
  readonly radius?: string;
  readonly fontFamily?: string;
  readonly borderWidth?: string;
}

export interface SiteConfig {
  readonly brandName: string;
  readonly siteUrl: string;
  readonly description: string;
  readonly logo: string;
  readonly ogImage: string;
  readonly locale: string;
  readonly themeColor: string;
  readonly keywords: readonly string[];
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
  readonly expert: {
    readonly displayName: string;
    readonly legalName: string;
    readonly legalNameThai: string;
    readonly role: string;
    readonly jobTitle: string;
    readonly signature: string;
    readonly avatar: string;
    readonly email: string;
    readonly bio: string;
    readonly bioUrl: string;
    readonly twitterHandle: string;
    readonly googleMerchantId?: string;
  };
  readonly contact: {
    readonly email: string;
    readonly phone: string;
    readonly displayPhone: string;
    readonly address: string;
    readonly streetAddress: string;
    readonly postalCode: string;
    readonly workHours: string;
    readonly mapUrl: string;
  };
  readonly project: {
    readonly title: string;
    readonly shortTitle: string;
    readonly version: string;
    readonly framework: string;
    readonly uiStack: string;
  };
  readonly business: {
    readonly location: string;
    readonly region: string;
    readonly industry: string;
    readonly roiFocus: boolean;
    readonly priceRange: string;
    readonly established: string;
    readonly status: string;
    readonly ids: Record<string, string>;
  };
  readonly verification: {
    readonly google: string;
    readonly facebook?: string;
  };
  readonly analytics?: {
    readonly gaId?: string;
    readonly pixelId?: string;
  };
  readonly links: Record<string, string>;
}

// =========================================
// [03] DATA MODELS (CMS & REGISTRY)
// =========================================

export interface ServiceFeature {
  readonly title: string;
  readonly description: string;
  readonly icon: IconName;
}

export interface ServiceFaq {
  readonly question: string;
  readonly answer: string;
}

export interface CatalogItem {
  readonly name: string;
  readonly description: string;
  readonly icon: IconName;
  readonly price?: string;
  readonly unit?: string;
  readonly image?: string;
  readonly technicalID?: string;
}

export interface BlogPost {
  readonly slug: string;
  readonly title: string;
  readonly date: string;
  readonly excerpt: string;
  readonly description?: string;
  readonly coverImage: string;
  readonly thumbnail?: string;
  readonly category: string;
  readonly tags?: readonly string[];
  readonly readingTime?: string;
  readonly content?: string;
}

// [FIXED]: เพิ่ม CaseStudy กลับเข้ามาเพื่อแก้ Error TS2305
export interface CaseStudy {
  readonly slug: string;
  readonly title: string;
  readonly client: string;
  readonly result: string;
  readonly results?: readonly string[];
  readonly description?: string;
  readonly date?: string;
  readonly image: string;
  readonly thumbnail?: string;
  readonly content?: string;
}

export interface ImageBlurMetadata {
  readonly blurDataURL: string;
  readonly width: number;
  readonly height: number;
}
export type ImageBlurRegistry = Record<string, ImageBlurMetadata>;

// =========================================
// [04] UNIVERSAL PROPS (Post-Merger Bridge)
// =========================================

export interface LocalContext {
  readonly marketInsight: string;
  readonly technicalApproach: string;
  readonly localStrength: string;
  readonly nicheIndustries: readonly string[];
  readonly painPoints: readonly string[];
  readonly competitorLevel: "low" | "medium" | "high" | "extreme";

  readonly socialProof?: { rating: number; reviewCount: number; localClient?: string };
  readonly regionalPricing?: { startPrice: string; timeline: string };
  readonly localSuccessStory?: { title: string; result: string };
  readonly hyperLocalKeywords?: readonly string[];
}

export interface UniversalTemplateProps {
  readonly id: string;
  readonly templateSlug: TemplateSlug;
  readonly category: string;
  readonly title: string;
  readonly description: string;
  readonly image?: string;
  readonly theme: ThemeConfig;
  readonly price: string;
  readonly priceValue: number;
  readonly currency: string;
  readonly unit: string;
  readonly priority: number;
  readonly benefits: readonly string[];
  readonly coreFeatures: readonly ServiceFeature[];
  readonly faqs: readonly ServiceFaq[];
  readonly keywords: readonly string[];
  readonly items?: readonly CatalogItem[];

  readonly clientTrust?: string;
  readonly isPopular?: boolean;
  readonly isFeatured?: boolean;
  readonly featuredProjects?: readonly any[];

  readonly localContext?: LocalContext;
  readonly province?: string;
  readonly districts?: readonly string[];
  readonly coordinates?: { lat: number; lng: number };

  readonly socialProof?: LocalContext["socialProof"];
  readonly regionalPricing?: LocalContext["regionalPricing"];
  readonly localSuccessStory?: LocalContext["localSuccessStory"];

  readonly primaryAction?: TemplateAction;
  readonly secondaryAction?: TemplateAction;
}

export interface BaseTemplateProps {
  readonly data: UniversalTemplateProps;
  readonly suppressUI?: boolean;
}

// =========================================
// [05] REGISTRY SCHEMAS
// =========================================

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
  readonly theme: ThemeConfig;
  readonly benefits: readonly string[];
  readonly coreFeatures: readonly ServiceFeature[];
  readonly faqs: readonly ServiceFaq[];
  readonly keywords: readonly string[];

  readonly primaryAction?: TemplateAction;
  readonly secondaryAction?: TemplateAction;

  readonly isPopular?: boolean;
  readonly isFeatured?: boolean;
  readonly clientTrust?: string;
  readonly items?: readonly CatalogItem[];
}

export interface AreaNode {
  readonly slug: string;
  readonly province: string;
  readonly title: string;
  readonly description: string;
  // [FIXED]: ปรับเป็น Optional (?) เพื่อแก้ Error TS2741 ในไฟล์ที่ไม่ต้องการ Long Desc
  readonly longDescription?: string;
  readonly seoTitle: string;
  readonly seoDescription: string;
  readonly priority: number;
  readonly templateSlug: TemplateSlug;
  readonly districts: readonly string[];
  readonly keywords: readonly string[];
  readonly heroImage: string;
  readonly coordinates: { lat: number; lng: number };
  readonly localContext: LocalContext;
  readonly theme?: Partial<ThemeConfig>;

  readonly price?: string;
  readonly priceValue?: number;
  readonly currency?: string;
  readonly unit?: string;
  readonly clientTrust?: string;
  readonly benefits?: readonly string[];
  readonly coreFeatures?: readonly ServiceFeature[];
  readonly faqs?: readonly ServiceFaq[];
}

export * from "./template-props";
```

### MODULE: template-props.ts

`Path: types/template-props.ts`

```typescript
/**
 * [SYSTEM CORE]: TEMPLATE_PROPS_ENGINE v17.9.135 (ULTIMATE_STABLE)
 * [STRATEGY]: Universal Adapter Pattern | P-SEO Trust Injection | Type Sync
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type {
  IconName,
  ServiceFeature,
  ServiceFaq,
  ThemeConfig,
  CatalogItem,
  LocalContext,
  TemplateSlug,
} from "./index";

// =========================================
// [01] UI ACTION SCHEMAS
// =========================================

/** * [STRICT]: มาตรฐานปุ่มกดและการนำทางทั่วทั้งระบบ
 * รองรับการฉีด Variant เพื่อกำหนดสไตล์ (Button Variants)
 */
export interface TemplateAction {
  readonly label: string;
  readonly href: string;
  readonly icon?: IconName;
  readonly variant?: "default" | "outline" | "ghost" | "link" | "brand";
}

// =========================================
// [02] UNIVERSAL TEMPLATE CONTRACT (THE BRIDGE)
// =========================================

/**
 * [STRATEGIC]: Bridge Interface สำหรับ Data Normalization
 * ทำหน้าที่รวม Master Data และ Area Nodes ให้เป็นก้อนเดียวที่ TemplateRenderer เข้าใจ
 */
export interface UniversalTemplateProps {
  // --- Core Identity ---
  readonly id: string;
  readonly templateSlug: TemplateSlug;
  readonly category: string;
  readonly title: string;
  readonly description: string;
  readonly image?: string;
  readonly priority: number;

  // --- Commercial & Metadata ---
  readonly price: string;
  readonly priceValue: number;
  readonly unit: string;
  readonly currency: string;

  // --- Data Clusters (Normalized) ---
  readonly benefits: readonly string[];
  readonly coreFeatures: readonly ServiceFeature[];
  readonly faqs: readonly ServiceFaq[];
  readonly keywords: readonly string[];

  /** [STABLE]: รายการสินค้า/บริการย่อยสำหรับ Catalog หรือหน้ารวมบริการ */
  readonly items?: readonly CatalogItem[];

  // --- [TRUST_SIGNAL_INJECTION]: ข้อมูลถูกฉีด Dynamic จาก Data Merger ---
  readonly clientTrust?: string;
  readonly socialProof?: LocalContext["socialProof"];
  readonly regionalPricing?: LocalContext["regionalPricing"];

  /** [FIXED]: ปิด Error TS2339 ใน HotelResort และ Corporate Templates */
  readonly localSuccessStory?: LocalContext["localSuccessStory"];

  /** [FIXED]: ข้อมูลบริบทพื้นที่เต็มรูปแบบสำหรับ Area Node */
  readonly localContext?: LocalContext;

  // --- Strategic UI Elements ---
  readonly primaryAction: TemplateAction;
  readonly secondaryAction?: TemplateAction;

  // --- Visual Metadata (SSOT Theme) ---
  readonly theme: ThemeConfig; // [STRICT]: บังคับมีค่าหลังจากการ Merge ข้อมูล
}

// =========================================
// [03] COMPONENT PROPS (STRICT TYPING)
// =========================================

/** [CORE]: อินเทอร์เฟซพื้นฐานสำหรับทุก Template Component */
export interface BaseTemplateProps {
  readonly data: UniversalTemplateProps;
  readonly suppressUI?: boolean;
}

/** * [CLEANUP_NOTICE]:
 * ส่วนประกอบย่อย (Aliases & Atomic Props) ถูกนำออกชั่วคราวตาม Zero-Unused Policy
 * เพื่อลด Bundle Size และป้องกัน Linter Warning ในระบบ Mobile-Dev
 * * [RECOVERY_PATH]:
 * หากต้องการเพิ่มหน้าใหม่ (New Template) สามารถประกาศเฉพาะจุดที่ใช้งานจริง
 * ในไฟล์ Component นั้นๆ หรือเพิ่มกลับมาที่นี่หากมีการใช้ซ้ำ (Reuse) มากกว่า 2 จุด
 */
```

---

## CONSTANTS REGISTRY

### CONFIG: bangkok.ts

`Path: constants/area-nodes/bangkok.ts`

```typescript
/**
 * [SERVICE_NODE]: BANGKOK_ENTERPRISE_HUB v18.0.0 (ACCESSIBILITY_PATCHED)
 * [STRATEGY]: Enterprise Branding | CBD Competitive SEO | Hex Standard
 */
import type { AreaNode } from "@/types";

export const bangkokNode: AreaNode = {
  slug: "bangkok",
  province: "กรุงเทพมหานคร",
  templateSlug: "corporate",
  title: "รับทำเว็บไซต์ กรุงเทพฯ | ออกแบบเว็บองค์กรและบริษัท ติดหน้าแรก Google",
  description:
    "บริการรับทำเว็บไซต์บริษัทในกรุงเทพฯ มาตรฐาน Enterprise โหลดไว ปลอดภัย รองรับ PDPA ออกแบบโดยมืออาชีพเพื่อภาพลักษณ์ธุรกิจที่เหนือกว่าคู่แข่งในย่าน CBD",
  seoTitle: "บริษัทรับทำเว็บไซต์ กรุงเทพฯ รับทำ SEO และออกแบบเว็บองค์กรครบวงจร - เอ็มซ่ามากส์",
  seoDescription:
    "จ้างทำเว็บไซต์กรุงเทพฯ เน้นเว็บองค์กร บริษัทมหาชน และ SME ที่ต้องการความน่าเชื่อถือ รองรับ SEO ติดหน้าแรก Google พร้อมระบบความปลอดภัยขั้นสูง",
  heroImage: "/images/areas/bangkok-node.webp",
  theme: {
    mode: "dark",
    primary: "#3b82f6",
    secondary: "#1e3a8a",
    background: "#020617",
    foreground: "#f8fafc",
    accent: "#60a5fa",
    gradient: "from-[#3b82f6]/10 via-transparent to-transparent",
  },
  price: "15,900",
  priceValue: 15900,
  currency: "THB",
  unit: "เริ่มต้น / โปรเจกต์",
  clientTrust:
    "Professional Trust: ได้รับความไว้วางใจจาก 50+ บริษัทชั้นนำและ SME ในย่านสาทร-สุขุมวิท",
  benefits: [
    "มาตรฐานระดับสากล: เว็บไซต์ที่ออกแบบมาเพื่อการแข่งขันในตลาดทุนกรุงเทพฯ รองรับ Traffic มหาศาลและมีความปลอดภัยข้อมูลสูงสุด (Data Security)",
    "SEO ครองตลาด: วางโครงสร้างเพื่อแย่งชิงพื้นที่หน้าแรก Google ในคีย์เวิร์ดที่มีการแข่งขันสูงที่สุด",
    "ภาพลักษณ์ผู้นำ: ดีไซน์ CI ที่เฉียบคม สะท้อนวิสัยทัศน์องค์กร เพื่อสร้างความเชื่อมั่นให้นักลงทุนและคู่ค้า",
  ],
  coreFeatures: [
    {
      title: "Enterprise Performance",
      description: "ใช้ Tech Stack ล่าสุด (Next.js) รับประกันความเร็ว 99/100",
      icon: "Zap",
    },
    {
      title: "PDPA Compliance",
      description: "ติดตั้งระบบ Cookie Consent และ Privacy Policy ถูกต้องตามกฎหมาย",
      icon: "ShieldCheck",
    },
    {
      title: "Scalable CMS",
      description: "ระบบจัดการเนื้อหาที่รองรับการขยายตัวขององค์กร เพิ่มข่าวสาร/สินค้าได้ไม่จำกัด",
      icon: "Database",
    },
  ],
  faqs: [
    {
      question: "บริษัทอยู่ที่ไหน นัดประชุมได้ไหม?",
      answer:
        "ผมเป็น Freelance Specialist ที่ทำงานแบบ Remote แต่สามารถนัดประชุม On-site ได้ในเขต CBD ครับ",
    },
    {
      question: "ออกใบกำกับภาษีได้ไหม?",
      answer: "สามารถออกใบเสนอราคาและใบแจ้งหนี้/ใบเสร็จรับเงินที่ถูกต้องตามกฎหมายได้ครับ",
    },
  ],
  localContext: {
    marketInsight:
      "ในกรุงเทพฯ ความเร็วและความน่าเชื่อถือคือพระเจ้า เว็บไซต์ที่ดูเป็นมืออาชีพช่วยให้ปิดดีล B2B ได้ง่ายขึ้น",
    technicalApproach:
      "เน้น Security และ Performance สูงสุด เพื่อรองรับการ Audit จากฝ่ายไอทีขององค์กรลูกค้า",
    localStrength: "พร้อมเข้าพบเพื่อนำเสนองานในรูปแบบมืออาชีพ และเข้าใจกระบวนการทำงานขององค์กรใหญ่",
    nicheIndustries: [
      "อสังหาริมทรัพย์",
      "การเงินและการลงทุน",
      "คลินิกและโรงพยาบาล",
      "บริษัทกฎหมาย",
    ],
    painPoints: ["เว็บเก่าโดนแฮกบ่อย", "เว็บโหลดช้า", "ค้นหาใน Google ไม่เจอ"],
    competitorLevel: "high",
    socialProof: { rating: 5.0, reviewCount: 128, localClient: "บริษัทอสังหาฯ ชั้นนำ ย่านสาทร" },
    regionalPricing: { startPrice: "15,900 บาท", timeline: "14-21 วัน" },
    localSuccessStory: {
      title: "Case Study: โครงการคอนโดสุขุมวิท",
      result: "ทำ SEO เจาะกลุ่ม Expat ดันยอด Traffic เพิ่มขึ้น 200%",
    },
    hyperLocalKeywords: ["รับทำเว็บไซต์ สาทร", "ออกแบบเว็บไซต์ สีลม", "จ้างทำ SEO สุขุมวิท"],
  },
  priority: 100,
  districts: ["สาทร", "สีลม", "สุขุมวิท", "พระราม 9", "ทองหล่อ", "อโศก"],
  keywords: ["รับทำเว็บไซต์ กรุงเทพ", "บริษัทรับทำเว็บไซต์", "จ้างทำเว็บไซต์ ราคา"],
  coordinates: { lat: 13.7563, lng: 100.5018 },
};
```

### CONFIG: chiang-mai.ts

`Path: constants/area-nodes/chiang-mai.ts`

```typescript
/**
 * [SERVICE_NODE]: CHIANG_MAI_CREATIVE_HUB v18.0.0 (FULL_SYNC)
 * [STRATEGY]: Elegant Hospitality | Tourism P-SEO | Hex Standard
 * [MARKET]: Chiang Mai Tourism, Wellness & Creative Arts
 */
import type { AreaNode } from "@/types";

export const chiangMaiNode: AreaNode = {
  // --- Basic Identity ---
  slug: "chiang-mai",
  province: "เชียงใหม่",
  templateSlug: "hotelresort", // เชื่อมต่อกับ HotelResortTemplate
  title: "รับทำเว็บไซต์ เชียงใหม่ | ออกแบบเว็บโรงแรมและรีสอร์ต เพิ่มยอดจองตรง ไม่ผ่าน OTA",
  description:
    "บริการรับทำเว็บไซต์โรงแรมในเชียงใหม่ ดีไซน์หรูหราแบบล้านนาร่วมสมัย โหลดไว ดึงดูดนักท่องเที่ยวทั่วโลก พร้อมระบบจองตรงที่ช่วยลดค่าคอมมิชชั่น OTA ทันที",

  // --- SEO Metadata ---
  seoTitle: "รับทำเว็บไซต์ เชียงใหม่ ออกแบบเว็บโรงแรม รีสอร์ต ติดหน้าแรก Google - เอ็มซ่ามากส์",
  seoDescription:
    "จ้างทำเว็บไซต์เชียงใหม่ เน้นธุรกิจท่องเที่ยว โรงแรม และ Wellness เว็บสวยโหลดไว รองรับหลายภาษา ช่วยดึงลูกค้าต่างชาติและเพิ่มยอดจองตรง (Direct Booking)",

  // --- Visual & Theme (Lanna Luxury: Gold/Stone) ---
  heroImage: "/images/areas/chiang-mai-node.webp",
  theme: {
    mode: "dark",
    primary: "#c5a358", // Chiang Mai Gold (ทองด้าน)
    secondary: "#453a1f", // Dark Gold Brown
    background: "#1c1917", // Stone 900 (ดำอมน้ำตาล อุ่นกว่าดำสนิท)
    foreground: "#fafaf9", // Stone 50
    accent: "#eab308", // Yellow 500
    gradient: "from-[#c5a358]/15 via-transparent to-transparent",
  },

  // --- Pricing Strategy (Localized) ---
  price: "12,900",
  priceValue: 12900,
  currency: "THB",
  unit: "เริ่มต้น / โปรเจกต์",

  // --- Trust Signals ---
  clientTrust:
    "Trusted Hospitality: เบื้องหลังความสำเร็จของ 20+ บูทีครีสอร์ตและสปาชั้นนำในเชียงใหม่",

  // --- Localized Benefits ---
  benefits: [
    "ดีไซน์สะท้อนอัตลักษณ์: ถ่ายทอดเสน่ห์ล้านนาร่วมสมัย (Contemporary Lanna) ผ่านหน้าเว็บไซต์ เพื่อสร้าง First Impression ที่น่าจดจำให้นักท่องเที่ยว",
    "ระบบจองตรงที่ทรงพลัง: ลดการเสียค่าคอมมิชชั่นให้ Agoda/Booking ด้วยปุ่มจองที่ใช้ง่าย เชื่อมต่อ Payment Gateway ตัดบัตรเครดิตได้ทันที",
    "รองรับนักท่องเที่ยวทั่วโลก: โครงสร้างเว็บรองรับ Multi-language (อังกฤษ/จีน) เพื่อต้อนรับแขกจากทุกมุมโลกที่ค้นหาที่พักในเชียงใหม่",
  ],

  // --- Core Features ---
  coreFeatures: [
    {
      title: "Visual Storytelling",
      description:
        "ระบบโชว์ภาพห้องพักและบรรยากาศความละเอียดสูง (High-Res) แต่โหลดไว เพื่อให้ลูกค้า 'อิน' กับบรรยากาศก่อนเข้าพัก",
      icon: "Camera",
    },
    {
      title: "Direct Booking Engine",
      description:
        "ระบบเช็คห้องว่างและจองทันทีที่เชื่อมต่อกับ Google Calendar หรือระบบหลังบ้านของคุณได้",
      icon: "CalendarCheck",
    },
    {
      title: "Tourism SEO Structure",
      description:
        "วางโครงสร้าง SEO ดักจับคำค้นหายอดฮิต เช่น 'ที่พักแม่ริม', 'รีสอร์ตเชียงใหม่' ให้ติดหน้าแรก Google",
      icon: "Map",
    },
  ],

  // --- Localized FAQs ---
  faqs: [
    {
      question: "ทำเว็บโรงแรมจำเป็นต้องแพงไหม?",
      answer:
        "ไม่จำเป็นครับ ผมมีแพ็กเกจเริ่มต้นสำหรับ Boutique Hotel ขนาดเล็กที่เน้นความคุ้มค่า แต่ได้ฟีเจอร์ครบทั้งระบบจองและแกลเลอรี่สวยๆ ครับ",
    },
    {
      question: "นัดคุยงานที่เชียงใหม่ได้ไหม?",
      answer:
        "ได้ครับ ผมเดินทางไปเชียงใหม่บ่อย สามารถนัดคุยรายละเอียดที่รีสอร์ตหรือคาเฟ่ในตัวเมือง/นิมมานได้เลยครับ เพื่อให้เห็นภาพบรรยากาศจริง",
    },
    {
      question: "มีบริการถ่ายภาพที่พักด้วยไหม?",
      answer:
        "มีครับ ผมทำงานร่วมกับช่างภาพสายโรงแรมมืออาชีพในเชียงใหม่ เพื่อให้ได้ภาพที่สื่ออารมณ์และขายราคาห้องได้แพงขึ้นครับ",
    },
    {
      question: "เว็บรองรับภาษาจีนไหม?",
      answer:
        "รองรับครับ เชียงใหม่เป็นจุดหมายหลักของนักท่องเที่ยวจีน ผมสามารถวางระบบให้รองรับภาษาจีนและเชื่อมต่อ WeChat Pay/Alipay ได้ครับ (Add-on)",
    },
    {
      question: "เชื่อมต่อกับ Agoda/Booking ได้ไหม?",
      answer:
        "ทำได้ครับ ผมสามารถวางระบบ Channel Manager เพื่อให้สต็อกห้องพักบนเว็บตรงกันกับ OTA ป้องกันปัญหาจองซ้ำ (Overbooking) ครับ",
    },
    {
      question: "ดูแลหลังการขายยังไง?",
      answer:
        "มีประกันดูแลฟรี 3 เดือนครับ สอนพนักงานของคุณอัปเดตราคา/โปรโมชั่นหน้าเว็บ หรือถ้าไม่มีคนทำ ผมมีบริการดูแลรายเดือนครับ",
    },
    {
      question: "ใช้เวลากี่วันเสร็จ?",
      answer:
        "สำหรับเว็บโรงแรมมาตรฐานประมาณ 10-15 วันครับ แต่ถ้าเป็นโปรเจกต์ใหญ่ที่มีระบบจองซับซ้อนอาจใช้เวลา 20-30 วันครับ",
    },
  ],

  // --- Context Data ---
  localContext: {
    marketInsight:
      "นักท่องเที่ยวเชียงใหม่ตัดสินใจจองจาก 'อารมณ์และภาพ' เป็นหลัก เว็บไซต์ที่สวยและสื่อสารถูกจุดจะปิดการขายได้ง่ายกว่า",
    technicalApproach:
      "เน้น Image Optimization ขั้นสูง เพื่อให้ภาพสวยคมชัดแต่โหลดเร็ว แม้เปิดผ่านมือถือในจุดที่สัญญาณเน็ตไม่แรง",
    localStrength:
      "เข้าใจวัฒนธรรมและศิลปะเชียงใหม่ สามารถนำมาปรับใช้กับ Web Design ให้ดูอินเตอร์แต่ยังคงกลิ่นอายท้องถิ่น",
    nicheIndustries: [
      "โรงแรมและบูทีครีสอร์ต",
      "สปาและ Wellness Center",
      "คาเฟ่และร้านอาหาร Fine Dining",
      "ธุรกิจทัวร์และกิจกรรมท่องเที่ยว",
    ],
    painPoints: [
      "เว็บเดิมสวยแต่โหลดช้า ลูกค้าหนี",
      "โดน OTA หักคอมมิชชั่นเยอะ กำไรบาง",
      "เว็บไม่รองรับมือถือและภาษาต่างชาติ",
    ],
    competitorLevel: "medium",

    socialProof: {
      rating: 4.9,
      reviewCount: 156,
      localClient: "บูทีครีสอร์ตชื่อดัง ย่านแม่ริม",
    },
    regionalPricing: {
      startPrice: "12,900 บาท",
      timeline: "10-15 วัน",
    },
    localSuccessStory: {
      title: "Case Study: รีสอร์ตหางดง",
      result:
        "ปรับเว็บใหม่เน้นจองตรง ยอด Direct Booking เพิ่ม 40% ใน 3 เดือน คืนทุนค่าทำเว็บตั้งแต่เดือนแรก",
    },
    hyperLocalKeywords: [
      "รับทำเว็บไซต์ นิมมาน",
      "ออกแบบเว็บไซต์ แม่ริม",
      "จ้างทำเว็บโรงแรม หางดง",
      "ทำ SEO โรงแรม เชียงใหม่",
    ],
  },

  // --- System Metadata ---
  priority: 98,
  districts: ["นิมมานเหมินท์", "เขตเมืองเก่า", "สันกำแพง", "แม่ริม", "หางดง", "แม่แตง", "สันทราย"],
  keywords: [
    "รับทำเว็บไซต์ เชียงใหม่",
    "ออกแบบเว็บไซต์ เชียงใหม่",
    "จ้างทำเว็บโรงแรม",
    "ทำเว็บ SEO เชียงใหม่",
    "บริษัทรับทำเว็บไซต์",
  ],
  coordinates: { lat: 18.7883, lng: 98.9853 },
};
```

### CONFIG: chiang-rai.ts

`Path: constants/area-nodes/chiang-rai.ts`

```typescript
/**
 * [SERVICE_NODE]: CHIANG_RAI_GATEWAY v18.0.0 (FULL_SYNC)
 * [STRATEGY]: Coffee Specialty | Border Trade | Artistic Branding
 * [MARKET]: Mueang Chiang Rai, Mae Sai, Chiang Saen (Premium Trade)
 */
import type { AreaNode } from "@/types";

export const chiangRaiNode: AreaNode = {
  // --- Basic Identity ---
  slug: "chiang-rai",
  province: "เชียงราย",
  templateSlug: "local-authority", // หรือ catalog ถ้าเน้นขายกาแฟหนักๆ
  title: "รับทำเว็บไซต์ เชียงราย | จ้างทำเว็บกาแฟ Specialty และรีสอร์ตศิลปะ ติดหน้าแรก Google",
  description:
    "บริการรับทำเว็บไซต์เชียงราย ยกระดับแบรนด์กาแฟและที่พักสู่สากล ด้วยดีไซน์เชิงศิลปะและระบบ E-commerce ที่ขายได้ทั่วโลก",

  longDescription:
    "เชียงรายคือเมืองหลวงแห่งกาแฟและศิลปะระดับโลก เว็บไซต์ของคุณจึงต้องไม่ใช่แค่ 'มี' แต่ต้อง 'เล่าเรื่อง' ได้อย่างลึกซึ้ง " +
    "นายเอ็มซ่ามากส์ เข้าใจหัวใจของ Specialty Coffee และงาน Craft เราพร้อมเปลี่ยนเว็บไซต์ธรรมดาให้เป็นแกลเลอรี่ออนไลน์ที่ลูกค้าสัมผัสได้ถึงความพิถีพิถัน " +
    "พร้อมวางระบบขายกาแฟ Subscription และระบบจองที่พักที่รองรับนักท่องเที่ยวคุณภาพ เพื่อให้ธุรกิจเชียงรายเติบโตอย่างยั่งยืนบนเวทีโลก",

  // --- SEO Metadata ---
  seoTitle: "รับทำเว็บไซต์ เชียงราย ออกแบบเว็บกาแฟ รีสอร์ต ศิลปะ ติด SEO - เอ็มซ่ามากส์",
  seoDescription:
    "จ้างทำเว็บไซต์เชียงราย ครบวงจร เน้นธุรกิจโรงคั่วกาแฟ ที่พักแนว Art Stay และการค้าชายแดน เว็บสวยโหลดไว รองรับภาษาอังกฤษ/จีน เพิ่มยอดขายออนไลน์",

  // --- Visual & Theme (Coffee Art: Warm Brown/Cream) ---
  heroImage: "/images/areas/chiang-rai-node.webp",
  theme: {
    mode: "light",
    primary: "#7c2d12", // Warm Coffee Brown (สีน้ำตาลกาแฟคั่วกลาง)
    secondary: "#451a03", // Deep Espresso
    background: "#fffaf3", // Creamy Latte (พื้นครีมนวลตา)
    foreground: "#1c1917", // Charcoal (ดำถ่านไม้)
    accent: "#b45309", // Amber/Caramel
    gradient: "from-[#7c2d12]/10 via-transparent to-transparent",
  },

  // --- Pricing Strategy (Premium Niche) ---
  price: "9,900",
  priceValue: 9900,
  currency: "THB",
  unit: "เริ่มต้น / โปรเจกต์",

  // --- Trust Signals ---
  clientTrust:
    "Artisan Trusted: ผู้อยู่เบื้องหลังเว็บไซต์แบรนด์กาแฟดอยช้างและรีสอร์ตศิลปะกว่า 15 แห่ง",

  // --- Localized Benefits ---
  benefits: [
    "Storytelling Design: ถ่ายทอดเรื่องราว (Story) ของเมล็ดกาแฟและงานศิลป์ผ่านดีไซน์เว็บไซต์ ให้ดูมีมูลค่าสูงและน่าค้นหา",
    "Global E-commerce: ระบบขายออนไลน์ที่รองรับการส่งออกกาแฟและงานคราฟต์ไปทั่วโลก พร้อมระบบคำนวณค่าส่งอัตโนมัติ",
    "Tourism SEO: ดึงดูดนักท่องเที่ยวคุณภาพ (High Spender) ด้วยการทำ SEO ภาษาอังกฤษในคีย์เวิร์ดที่พักและคาเฟ่",
  ],

  // --- Core Features ---
  coreFeatures: [
    {
      title: "Coffee Subscription",
      description:
        "ระบบสมาชิกสั่งซื้อเมล็ดกาแฟรายเดือน เพื่อสร้างรายได้ที่มั่นคง (Recurring Income) ให้โรงคั่ว",
      icon: "Repeat", // หรือ Icon อื่นที่สื่อถึงการวนลูป
    },
    {
      title: "Art Gallery Mode",
      description:
        "โหมดแสดงผลภาพความละเอียดสูงแบบพิพิธภัณฑ์ศิลปะ สำหรับขายงานปั้น ภาพวาด หรือที่พักตกแต่งสวยงาม",
      icon: "Image",
    },
    {
      title: "Multi-Language (TH/EN/CN)",
      description:
        "รองรับ 3 ภาษาเพื่อต้อนรับนักท่องเที่ยวจีนและฝรั่ง ที่หลั่งไหลเข้ามาผ่านด่านแม่สายและสนามบิน",
      icon: "Globe",
    },
  ],

  // --- Localized FAQs ---
  faqs: [
    {
      question: "ทำเว็บขายกาแฟออนไลน์ ยากไหม?",
      answer:
        "ไม่ยากครับ ผมทำระบบจัดการสินค้าให้ใช้งานง่าย คุณแค่ถ่ายรูปถุงกาแฟ ใส่รายละเอียด Taste Note แล้วกดโพสต์ขายได้เลย รองรับตัดบัตรเครดิตครับ",
    },
    {
      question: "นัดคุยงานที่ร้านกาแฟในเมืองได้ไหม?",
      answer:
        "ยินดีมากครับ ผมชอบบรรยากาศร้านกาแฟในเชียงรายอยู่แล้ว นัดคุยเพื่อดูสไตล์งานและจิบกาแฟไปด้วยได้เลยครับ",
    },
    {
      question: "มีระบบจองโต๊ะหรือจองที่พักไหม?",
      answer:
        "มีครับ ผมสามารถติดตั้งระบบจอง (Booking System) ที่แจ้งเตือนผ่าน LINE ทันทีที่มีลูกค้าจองเข้ามา สะดวกและไม่พลาดทุกออเดอร์ครับ",
    },
    {
      question: "ทำ SEO ภาษาจีนได้ไหม?",
      answer:
        "ทำได้ครับ ผมมีพาร์ทเนอร์นักแปลภาษาจีนที่เชี่ยวชาญ เพื่อทำหน้าเว็บสำหรับนักท่องเที่ยวจีนโดยเฉพาะครับ",
    },
    {
      question: "ดูแลเว็บหลังทำเสร็จให้ไหม?",
      answer:
        "ดูแลให้ฟรี 3 เดือนแรกครับ สอนใช้งานจนเป็น หรือถ้าไม่ถนัด ผมมีแพ็กเกจดูแลรายเดือนราคาเป็นกันเองครับ",
    },
    {
      question: "ใช้เวลาทำกี่วัน?",
      answer:
        "ถ้าข้อมูลพร้อม (รูป/เนื้อหา) ใช้เวลาประมาณ 7-10 วันสำหรับเว็บมาตรฐาน และ 15-20 วันสำหรับเว็บ E-commerce ครับ",
    },
    {
      question: "ช่วยถ่ายรูปสินค้าให้ด้วยไหม?",
      answer:
        "ผมมีทีมช่างภาพสายคาเฟ่และสินค้าในเชียงรายแนะนำให้ได้ครับ เพื่อให้รูปออกมาดูดีที่สุดบนหน้าเว็บครับ",
    },
  ],

  // --- Context Data ---
  localContext: {
    marketInsight:
      "ลูกค้ากลุ่ม Specialty Coffee ยอมจ่ายแพงเพื่อ 'เรื่องราว' และ 'คุณภาพ' เว็บไซต์ที่เล่าเรื่องได้ดีจะเพิ่มมูลค่าสินค้าได้มหาศาล",
    technicalApproach:
      "เน้นระบบ Filter สินค้าที่ละเอียด (Process, Roast Level, Origin) เพื่อตอบโจทย์คอกาแฟตัวจริง",
    localStrength:
      "เข้าใจวัฒนธรรมกาแฟและศิลปะเชียงราย สามารถดึงจุดเด่นของแบรนด์ออกมานำเสนอได้อย่างมีรสนิยม",
    nicheIndustries: [
      "โรงคั่วกาแฟและคาเฟ่ Specialty",
      "รีสอร์ตเชิงนิเวศและ Art Stay",
      "ธุรกิจนำเข้า-ส่งออก ชายแดน",
      "วิสาหกิจชุมชนชาและสมุนไพร",
    ],
    painPoints: [
      "กาแฟดีแต่เว็บไม่สวย ขายไม่ออก",
      "ตอบแชทลูกค้าต่างชาติไม่ทัน",
      "ลูกค้าหาไม่เจอใน Google Maps",
    ],
    competitorLevel: "medium",

    socialProof: {
      rating: 5.0,
      reviewCount: 62,
      localClient: "แบรนด์กาแฟและรีสอร์ตบนดอยช้าง",
    },
    regionalPricing: {
      startPrice: "9,900 บาท",
      timeline: "10-15 วัน",
    },
    localSuccessStory: {
      title: "Case Study: โรงคั่วแม่สรวย",
      result:
        "ทำเว็บ E-commerce ขายเมล็ดกาแฟ ยอดขายออนไลน์โต 300% ลูกค้าประจำสมัคร Subscription เพียบ",
    },
    hyperLocalKeywords: [
      "รับทำเว็บไซต์ แม่สาย",
      "ออกแบบเว็บไซต์ เชียงแสน",
      "จ้างทำเว็บกาแฟ เชียงราย",
      "ทำ SEO รีสอร์ต เชียงราย",
    ],
  },

  // --- System Metadata ---
  priority: 82,
  districts: ["เมืองเชียงราย", "แม่สาย", "เชียงแสน", "แม่จัน", "พาน", "เทิง", "แม่สรวย"],
  keywords: [
    "รับทำเว็บไซต์ เชียงราย",
    "ทำเว็บขายกาแฟ Specialty",
    "ออกแบบเว็บรีสอร์ต เชียงราย",
    "รับทำ SEO เชียงราย",
    "จ้างทำเว็บไซต์ เชียงราย",
  ],
  coordinates: { lat: 19.9101, lng: 99.8405 },
};
```

### CONFIG: chon-buri.ts

`Path: constants/area-nodes/chon-buri.ts`

```typescript
/**
 * [SERVICE_NODE]: CHON_BURI_INDUSTRIAL_HUB v18.0.0 (FULL_SYNC)
 * [STRATEGY]: Industrial Authority | EEC B2B Conversion | Hex Standard
 * [MARKET]: Chon Buri, Sriracha, Laem Chabang, Amata Nakorn (EEC Zone)
 */
import type { AreaNode } from "@/types";

export const chonBuriNode: AreaNode = {
  // --- Basic Identity ---
  slug: "chon-buri",
  province: "ชลบุรี",
  // [STRATEGY]: ใช้ corporate สำหรับบริษัท/โรงงานที่เน้นภาพลักษณ์องค์กร
  templateSlug: "corporate",

  title: "รับทำเว็บไซต์ ชลบุรี | บริษัทรับทำเว็บไซต์โรงงานและธุรกิจ EEC ติดอันดับ Google",
  description:
    "บริการรับทำเว็บไซต์โรงงานในชลบุรีและพัทยา ยกระดับภาพลักษณ์ธุรกิจสู่สากล รองรับ 3 ภาษา (TH/EN/JP) เพื่อเจาะกลุ่มทุนญี่ปุ่นและคู่ค้าต่างชาติ",

  longDescription:
    "ในเขตเศรษฐกิจพิเศษ EEC เว็บไซต์เปรียบเสมือน 'หน้าตา' และ 'ความน่าเชื่อถือ' ของโรงงาน หากเว็บไซต์ของคุณยังดูเก่า โหลดช้า หรือไม่มีภาษาอังกฤษ คู่ค้าต่างชาติจะมองข้ามไปหาคู่แข่งทันที " +
    "นายเอ็มซ่ามากส์ เชี่ยวชาญการออกแบบเว็บไซต์สำหรับอุตสาหกรรม (Industrial Web Design) ที่เน้นความน่าเชื่อถือ แสดงศักยภาพการผลิต และมาตรฐาน ISO อย่างชัดเจน " +
    "พร้อมวางระบบ SEO ให้ฝ่ายจัดซื้อทั่วโลกค้นหาคุณเจอเป็นอันดับแรก เพื่อโอกาสในการคว้าดีลใหญ่ระดับ Global",

  // --- SEO Metadata ---
  seoTitle: "รับทำเว็บไซต์ ชลบุรี ออกแบบเว็บโรงงาน นิคมอมตะ พัทยา ศรีราชา - เอ็มซ่ามากส์",
  seoDescription:
    "บริษัทรับทำเว็บไซต์ชลบุรี รับทำ SEO โรงงาน โลจิสติกส์ และธุรกิจใน EEC เว็บไซต์มาตรฐานสากล รองรับมือถือและหลายภาษา เพิ่มยอดขอใบเสนอราคา (RFQ)",

  // --- Visual & Theme (Industrial Blue: Trust/Stability) ---
  heroImage: "/images/areas/chon-buri-node.webp",
  theme: {
    mode: "light", // ธีมสว่าง สะอาดตา ดูเป็นทางการ
    primary: "#0369a1", // Sky 700 (Industrial Blue - สีแห่งความเชื่อมั่น)
    secondary: "#0c4a6e", // Sky 900
    background: "#f8fafc", // Slate 50 (พื้นหลังสะอาด)
    foreground: "#0f172a", // Slate 900
    accent: "#0ea5e9", // Sky 500
    gradient: "from-[#0369a1]/10 via-transparent to-transparent",
  },

  // --- Pricing Strategy (B2B Market) ---
  price: "19,500",
  priceValue: 19500,
  currency: "THB",
  unit: "เริ่มต้น / โปรเจกต์",

  // --- Trust Signals ---
  clientTrust:
    "Industrial Standard: ผู้อยู่เบื้องหลังเว็บไซต์โรงงานและโลจิสติกส์กว่า 30 แห่งในนิคมอมตะและแหลมฉบัง",

  // --- Localized Benefits ---
  benefits: [
    "ภาพลักษณ์ระดับสากล: ออกแบบ CI (Corporate Identity) ให้ดูทันสมัยและน่าเชื่อถือ เพื่อสร้างความมั่นใจให้นักลงทุนและคู่ค้าต่างชาติ",
    "รองรับ 3 ภาษา (TH/EN/JP): เจาะตลาดกลุ่มทุนญี่ปุ่นและลูกค้าต่างชาติใน EEC ด้วยระบบสลับภาษาที่แม่นยำและใช้งานง่าย",
    "SEO สายอุตสาหกรรม: ดันเว็บไซต์ให้ติดหน้าแรก Google ในคีย์เวิร์ดเฉพาะทาง เช่น 'โรงงานผลิตชิ้นส่วน', 'CNC ชลบุรี', 'โกดังให้เช่า'",
  ],

  // --- Core Features ---
  coreFeatures: [
    {
      title: "Product Catalog System",
      description:
        "ระบบแคตตาล็อกสินค้าอุตสาหกรรมที่ค้นหาง่าย โหลดไว รองรับสินค้าหลักพันรายการโดยไม่หน่วง",
      icon: "Database",
    },
    {
      title: "RFQ Generation",
      description: "ปุ่ม 'ขอใบเสนอราคา' ที่เด่นชัดและฟอร์มกรอกข้อมูลที่ส่งตรงเข้าอีเมลฝ่ายขายทันที",
      icon: "FileText",
    },
    {
      title: "Compliance & ISO Page",
      description:
        "หน้าแสดงใบรับรองมาตรฐาน (ISO/HACCP) ที่ออกแบบมาให้ดูน่าเชื่อถือและตรวจสอบได้ง่าย",
      icon: "ShieldCheck",
    },
  ],

  // --- Localized FAQs ---
  faqs: [
    {
      question: "ออฟฟิศอยู่ที่ไหน นัดเจอที่โรงงานได้ไหม?",
      answer:
        "ผมสามารถเดินทางไปพรีเซนต์งานที่นิคมอุตสาหกรรมในชลบุรี (อมตะ, เหมราช, ปิ่นทอง) ได้ครับ เพื่อรับโจทย์และดูหน้างานจริง",
    },
    {
      question: "ทำเว็บ 2 ภาษา (ไทย-อังกฤษ) เพิ่มเท่าไหร่?",
      answer:
        "แพ็กเกจเริ่มต้นรองรับ 1 ภาษาครับ หากต้องการเพิ่มภาษาที่ 2 (เช่น อังกฤษ หรือ ญี่ปุ่น) มีค่าบริการเพิ่มเล็กน้อยตามปริมาณเนื้อหาครับ",
    },
    {
      question: "มีบริการถ่ายภาพโรงงาน/เครื่องจักรไหม?",
      answer:
        "มีครับ ผมมีทีมช่างภาพสาย Industrial ที่เชี่ยวชาญการถ่ายไลน์ผลิตและเครื่องจักร เพื่อให้ภาพออกมาดูยิ่งใหญ่และเป็นมืออาชีพครับ",
    },
    {
      question: "ออกใบกำกับภาษีในนามบริษัทได้ไหม?",
      answer:
        "ได้แน่นอนครับ สามารถออกใบเสนอราคาและใบกำกับภาษีเต็มรูปแบบเพื่อนำไปหักค่าใช้จ่ายบริษัทได้ครับ",
    },
    {
      question: "เว็บไซต์รองรับการเปิดบนมือถือไหม?",
      answer:
        "100% ครับ ผู้บริหารและฝ่ายจัดซื้อสมัยนี้ใช้มือถือค้นหาข้อมูลเป็นหลัก เว็บไซต์จะแสดงผลสวยงามบนทุกอุปกรณ์ครับ",
    },
    {
      question: "ใช้เวลาทำนานไหม?",
      answer:
        "สำหรับเว็บองค์กรขนาดกลาง (10-15 หน้า) ใช้เวลาประมาณ 3-4 สัปดาห์ครับ รวมขั้นตอนตรวจสอบและแก้ไขครับ",
    },
    {
      question: "มีบริการดูแลรายปีไหม?",
      answer:
        "มีครับ บริการดูแลความปลอดภัย อัปเดตข้อมูลข่าวสาร และต่ออายุโดเมน/โฮสติ้ง เพื่อให้ฝ่ายไอทีของคุณไม่ต้องกังวลครับ",
    },
  ],

  // --- Context Data ---
  localContext: {
    marketInsight:
      "คู่ค้าใน EEC ให้ความสำคัญกับ 'มาตรฐาน' และ 'ความชัดเจน' เว็บไซต์ที่ข้อมูลครบและดูโปรจะปิดดีล B2B ได้ง่ายกว่า",
    technicalApproach:
      "เน้นโครงสร้าง Clean Code เพื่อความปลอดภัยข้อมูลสูงสุด และรองรับการทำ SEO ในตลาด B2B ที่การแข่งขันสูง",
    localStrength:
      "เข้าใจกระบวนการจัดซื้อของโรงงานและนิคมอุตสาหกรรม สามารถออกแบบ Flow เว็บให้สอดคล้องกับการทำงานจริง",
    nicheIndustries: [
      "โรงงานผลิตชิ้นส่วนยานยนต์ (Automotive)",
      "โลจิสติกส์และคลังสินค้า (Logistics)",
      "รับเหมาก่อสร้างโรงงาน (Industrial Construction)",
      "นำเข้า-ส่งออกเครื่องจักร (Machinery)",
    ],
    painPoints: [
      "เว็บเก่าไม่รองรับมือถือ ดูล้าสมัย",
      "ลูกค้าต่างชาติค้นหาชื่อบริษัทไม่เจอ",
      "ไม่มีข้อมูลสินค้า/สเปกเครื่องจักรบนเว็บ",
    ],
    competitorLevel: "high",

    socialProof: {
      rating: 5.0,
      reviewCount: 184,
      localClient: "บริษัทโลจิสติกส์รายใหญ่ ในนิคมฯ แหลมฉบัง",
    },
    regionalPricing: {
      startPrice: "19,500 บาท",
      timeline: "14-30 วัน",
    },
    localSuccessStory: {
      title: "Case Study: โรงงานชิ้นส่วน CNC",
      result:
        "ปรับปรุงเว็บไซต์และทำ SEO ภาษาอังกฤษ ยอด RFQ จากลูกค้าโซนยุโรปและญี่ปุ่นเพิ่มขึ้น 250% ใน 6 เดือน",
    },
    hyperLocalKeywords: [
      "รับทำเว็บไซต์ ศรีราชา",
      "ออกแบบเว็บไซต์ แหลมฉบัง",
      "จ้างทำ SEO พัทยา",
      "ทำเว็บโรงงาน อมตะนคร",
    ],
  },

  // --- System Metadata ---
  priority: 99,
  districts: [
    "เมืองพัทยา",
    "ศรีราชา",
    "แหลมฉบัง",
    "นิคมอมตะนคร",
    "บางแสน",
    "บ่อวิน",
    "นิคมเหมราช",
    "บ้านบึง",
  ],
  keywords: [
    "รับทำเว็บไซต์ ชลบุรี",
    "บริษัทรับทำเว็บไซต์",
    "ทำเว็บโรงงาน ชลบุรี",
    "รับทำ SEO ชลบุรี",
    "ออกแบบเว็บไซต์ พัทยา",
  ],
  coordinates: { lat: 13.3611, lng: 100.9847 },
};
```

### CONFIG: chumphon.ts

`Path: constants/area-nodes/chumphon.ts`

```typescript
/**
 * [SERVICE_NODE]: CHUMPHON_SMART_GATEWAY v18.0.0 (ACCESSIBILITY_PATCHED)
 * [STRATEGY]: Smart Gateway | Government Trust | Hex Standard
 * [MARKET]: Local Authorities (PAO/SAO) & Agricultural Cooperatives in Chumphon
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { AreaNode } from "@/types";

export const chumphonNode: AreaNode = {
  // --- Basic Identity ---
  slug: "chumphon",
  province: "ชุมพร",
  templateSlug: "local-authority",
  title: "รับทำเว็บไซต์หน่วยงานราชการ ชุมพร - ยกระดับบริการภาครัฐสู่ Smart City",
  description:
    "พัฒนาระบบเว็บไซต์ อบต. และเทศบาลในจังหวัดชุมพร รองรับยุทธศาสตร์ประตูสู่ภาคใต้ เชื่อมโยง E-Service และส่งเสริมการท่องเที่ยวชุมชนอย่างยั่งยืน",

  longDescription:
    "ชุมพรคือ 'ประตูสู่ภาคใต้' ที่มีศักยภาพสูงทั้งด้านโลจิสติกส์และการเกษตร นายเอ็มซ่ามากส์ ออกแบบโครงสร้างเว็บราชการยุคใหม่ " +
    "ที่เปลี่ยนจากเมืองผ่านให้เป็นเมืองพักผ่อน (Stay-over City) ด้วยระบบ E-Service ที่ลดขั้นตอนเอกสาร และโมดูลประชาสัมพันธ์สินค้าเกษตรพรีเมียม " +
    "เพื่อให้ท้องถิ่นก้าวสู่การเป็น Smart City ที่แท้จริง พร้อมรองรับการประเมิน ITA ในระดับสูงสุด",

  // --- SEO Metadata ---
  seoTitle: "รับทำเว็บไซต์ชุมพร อบต. เทศบาล ราชการ - เอ็มซ่ามากส์ มาตรฐานภาครัฐ ITA",
  seoDescription:
    "บริการจัดทำเว็บไซต์หน่วยงานราชการในจังหวัดชุมพร รองรับมาตรฐาน ITA และ WCAG ครบถ้วน พร้อมระบบจัดการเรื่องร้องเรียนออนไลน์ และประชาสัมพันธ์แหล่งท่องเที่ยว Unseen ชุมพร",

  // --- Visual & Theme (Government Blue & Agricultural Green) ---
  heroImage: "/images/areas/chumphon-gateway.webp",
  theme: {
    mode: "light",
    /** * [ACCESSIBILITY_PATCH]: ปรับจาก #1E88E5 เป็น #1565C0 (Contrast 5.61:1)
     * เพื่อให้ผ่านเกณฑ์ WCAG AA เมื่อแสดงผลบนพื้นหลัง #F8FAFC
     */
    primary: "#1565C0",
    /** * [ACCESSIBILITY_PATCH]: ปรับจาก #43A047 เป็น #1b5e20 เพื่อความชัดเจนในการอ่านบนพื้นหลังสว่าง */
    secondary: "#1b5e20",
    background: "#F8FAFC",
    foreground: "#1E293B",
    accent: "#FFC107",
    gradient: "from-[#1565C0]/10 via-transparent to-transparent",
  },

  // --- Pricing Strategy ---
  price: "15,900",
  priceValue: 15900,
  currency: "THB",
  unit: "เริ่มต้น / โปรเจกต์",

  // --- Trust Signals ---
  clientTrust:
    "Government Standard: ได้รับความไว้วางใจในการพัฒนาระบบดิจิทัลสำหรับ อปท. ในเขตภาคใต้ตอนบน",

  // --- Localized Benefits ---
  benefits: [
    "ITA 100% Compliance: โครงสร้างเว็บไซต์ที่ออกแบบตามเกณฑ์การประเมินคุณธรรมและความโปร่งใส (OIT) ครบทุกหัวข้อข้อกำหนด",
    "Digital Service Gateway: ระบบรับเรื่องร้องเรียน คำร้องออนไลน์ และชำระค่าธรรมเนียม ที่ช่วยลดภาระงานหน้าเคาน์เตอร์ได้กว่า 40%",
    "Agro-Tourism Link: โมดูลพิเศษเชื่อมโยงฐานข้อมูลเกษตรกรและจุดเช็คอินท่องเที่ยว เพื่อกระจายรายได้สู่ชุมชนในพื้นที่",
  ],

  // --- Core Features ---
  coreFeatures: [
    {
      title: "Smart Public Service",
      description:
        "ระบบบริการประชาชนออนไลน์ ชำระค่าน้ำ ค่าขยะ และยื่นขอใบอนุญาตผ่านหน้าเว็บ 24 ชม.",
      icon: "Users",
    },
    {
      title: "Tourism & OTOP Showcase",
      description:
        "ระบบ Interactive Map แนะนำแหล่งท่องเที่ยวและ Marketplace สำหรับสินค้าวิสาหกิจชุมชน",
      icon: "Map",
    },
    {
      title: "Disaster Alert System",
      description:
        "ระบบแจ้งเตือนภัยพิบัติและระดับน้ำแบบเรียลไทม์ เพื่อความปลอดภัยของประชาชนในพื้นที่เสี่ยง",
      icon: "Bell",
    },
  ],

  // --- Localized FAQs ---
  faqs: [
    {
      question: "เว็บไซต์รองรับมาตรฐาน WCAG สำหรับผู้พิการหรือไม่?",
      answer:
        "รองรับครับ เราออกแบบโครงสร้างให้โปรแกรมอ่านหน้าจอ (Screen Reader) เข้าถึงได้ และปรับขนาดตัวอักษร/Contrast ได้ตามมาตรฐานสากลครับ",
    },
    {
      question: "สามารถทำระบบแผนที่ภาษีและทะเบียนทรัพย์สินเชื่อมต่อได้ไหม?",
      answer:
        "ทำได้ครับ เราสามารถพัฒนาโมดูลเชื่อมโยงข้อมูลแผนที่เพื่อสนับสนุนการจัดเก็บรายได้ของท้องถิ่นให้แม่นยำขึ้นครับ",
    },
    {
      question: "มีระบบจัดการข้อมูลผู้สูงอายุและคนพิการในพื้นที่ไหม?",
      answer:
        "เรามีระบบฐานข้อมูลสวัสดิการชุมชนที่เจ้าหน้าที่สามารถบริหารจัดการข้อมูลเบี้ยยังชีพผ่านระบบหลังบ้านได้โดยตรงครับ",
    },
    {
      question: "ใช้เวลานานไหมกว่าจะเริ่มใช้งานระบบ E-Service ได้?",
      answer:
        "ปกติใช้เวลา 14-21 วันครับ โดยเราจะทำการเทรนนิ่งเจ้าหน้าที่ให้ใช้งานระบบได้อย่างเชี่ยวชาญก่อนเปิดใช้งานจริงครับ",
    },
  ],

  // --- Context Data ---
  localContext: {
    marketInsight:
      "ในฐานะเมืองผ่านที่กำลังกลายเป็นเมืองพักผ่อน เว็บไซต์ราชการชุมพรต้องทำหน้าที่เป็น 'Virtual Concierge' ที่ดึงเอกลักษณ์การเกษตรและการท่องเที่ยวออกมาให้เด่นชัด",
    technicalApproach:
      "เน้น Mobile-First และสถาปัตยกรรมแบบ Lightweight เพื่อให้โหลดได้รวดเร็วแม้ในพื้นที่อำเภอห่างไกลที่สัญญาณมือถือไม่สม่ำเสมอ",
    localStrength:
      "ฐานข้อมูลเครือข่ายสหกรณ์การเกษตรที่เข้มแข็ง (ทุเรียน/ปาล์ม/กาแฟ) คือหัวใจหลักที่ต้องนำมาเป็น Content ประชาสัมพันธ์บนเว็บ",
    nicheIndustries: [
      "องค์การบริหารส่วนตำบลและเทศบาล",
      "สหกรณ์การเกษตรในเขตหลังสวนและท่าแซะ",
      "กลุ่มวิสาหกิจชุมชนแปรรูปผลไม้",
      "ธุรกิจท่องเที่ยวเชิงนิเวศปะทิว",
    ],
    painPoints: [
      "ระบบรับเรื่องร้องเรียนเดิมใช้งานยากและไม่มีสถานะแจ้งกลับ",
      "ขาดช่องทางดิจิทัลในการสนับสนุนสินค้าเกษตรในช่วงฤดูกาล",
      "เว็บไซต์เดิมไม่รองรับการแสดงผลบนสมาร์ทโฟน",
    ],
    competitorLevel: "medium",

    socialProof: {
      rating: 4.8,
      reviewCount: 42,
      localClient: "อปท. ชั้นนำในเขตอำเภอหลังสวนและละแม",
    },
    regionalPricing: {
      startPrice: "15,900 บาท",
      timeline: "14-21 วัน",
    },
    localSuccessStory: {
      title: "Digital Transformation for SAO",
      result:
        "ช่วยให้ อบต. ในพื้นที่สามารถประมวลผลเรื่องร้องเรียนได้เร็วขึ้น 50% และได้รับการยอมรับจากประชาชนในด้านความโปร่งใส",
    },
    hyperLocalKeywords: [
      "ทำเว็บไซต์ชุมพร",
      "ระบบ E-Service ท้องถิ่น",
      "ออกแบบเว็บราชการหลังสวน",
      "รับทำเว็บไซต์ อบต.ท่าแซะ",
    ],
  },

  // --- System Metadata ---
  priority: 85,
  districts: ["เมืองชุมพร", "ท่าแซะ", "ปะทิว", "หลังสวน", "ละแม", "พะโต๊ะ", "สวี", "ทุ่งตะโก"],
  keywords: [
    "รับทำเว็บไซต์ อบต",
    "ทำเว็บไซต์เทศบาล",
    "Web Design Chumphon",
    "ระบบ E-Service ท้องถิ่น",
    "Smart City ชุมพร",
  ],
  coordinates: { lat: 10.493, lng: 99.18 },
};
```

### CONFIG: kamphaeng-phet.ts

`Path: constants/area-nodes/kamphaeng-phet.ts`

```typescript
/**
 * [SERVICE_NODE]: KAMPHAENG_PHET_GOV_HUB v18.0.0 (ACCESSIBILITY_PATCHED)
 * [STRATEGY]: Local Authority | Government Trust | Hex Standard
 */
import type { AreaNode } from "@/types";

export const kamphaengPhetNode: AreaNode = {
  slug: "kamphaeng-phet",
  province: "กำแพงเพชร",
  templateSlug: "local-authority",
  title: "รับทำเว็บไซต์ กำแพงเพชร | ออกแบบเว็บ อบต. เทศบาล และธุรกิจท้องถิ่น",
  description:
    "บริการรับทำเว็บไซต์หน่วยงานราชการและธุรกิจในกำแพงเพชร เว็บไซต์ทันสมัย ใช้งานง่าย เข้าถึงประชาชนได้จริง ถูกต้องตามระเบียบภาครัฐ",
  longDescription:
    "ในยุคดิจิทัล หน่วยงานราชการและธุรกิจท้องถิ่นในกำแพงเพชรต้องปรับตัว เว็บไซต์ที่ดีช่วยลดภาระงานของเจ้าหน้าที่และสร้างความพึงพอใจให้ประชาชน",
  seoTitle: "รับทำเว็บไซต์ กำแพงเพชร ออกแบบเว็บ อบต. เทศบาล ขาณุฯ คลองขลุง - เอ็มซ่ามากส์",
  seoDescription:
    "จ้างทำเว็บไซต์กำแพงเพชร รับทำเว็บราชการ อบต. เทศบาล และสินค้า OTOP เว็บไซต์ใช้งานง่าย รองรับมือถือ มีระบบ ITA และ e-Service",
  heroImage: "/images/areas/kamphaeng-phet-node.webp",
  theme: {
    mode: "light",
    primary: "#c2410c",
    secondary: "#9a3412",
    background: "#fff7ed",
    foreground: "#431407",
    accent: "#f97316",
    gradient: "from-[#c2410c]/10 via-transparent to-transparent",
  },
  price: "12,000",
  priceValue: 12000,
  currency: "THB",
  unit: "เริ่มต้น / โครงการ",
  clientTrust:
    "Government Standard: มาตรฐานเว็บไซต์ที่หน่วยงานราชการและวิสาหกิจชุมชนในกำแพงเพชรไว้วางใจ",
  benefits: [
    "เข้าถึงง่าย (Accessibility): ออกแบบตัวหนังสือใหญ่ เมนูชัดเจน เพื่อให้ผู้สูงอายุใช้งานได้สะดวก",
    "ถูกต้องตามระเบียบ (Compliance): โครงสร้างเว็บรองรับการประเมิน ITA และมีระบบ e-Service",
    "ดูแลง่าย (Easy CMS): ระบบหลังบ้านภาษาไทย 100% เจ้าหน้าที่ธุรการสามารถลงข่าวได้เอง",
  ],
  coreFeatures: [
    {
      title: "ITA & Transparency",
      description: "หน้าเว็บสำหรับเปิดเผยข้อมูลสาธารณะ (OIT) จัดหมวดหมู่ถูกต้องตามเกณฑ์ประเมิน",
      icon: "FileText",
    },
    {
      title: "Complaint System",
      description: "ระบบรับเรื่องร้องเรียนออนไลน์ ส่งตรงถึงเจ้าหน้าที่ผู้รับผิดชอบ",
      icon: "AlertCircle",
    },
    {
      title: "Responsive Design",
      description: "แสดงผลสมบูรณ์แบบบนมือถือทุกรุ่น",
      icon: "Smartphone",
    },
  ],
  faqs: [
    {
      question: "รับงานราชการ ต้องทำ TOR ไหม?",
      answer: "รับครับ ผมสามารถช่วยร่างสเปก (TOR) และเตรียมเอกสารเบิกจ่ายได้ครับ",
    },
    { question: "สอนเจ้าหน้าที่ใช้งานไหม?", answer: "สอนให้ฟรีครับ พร้อมคู่มือการใช้งานภาษาไทย" },
  ],
  localContext: {
    marketInsight:
      "ประชาชนต้องการความสะดวกในการติดต่อราชการ เว็บไซต์ที่ลดขั้นตอนเอกสารจะได้รับคำชม",
    technicalApproach:
      "ใช้ CMS ที่มีความปลอดภัยสูง ป้องกันการถูกแฮก และระบบจัดการไฟล์ PDF สำหรับเอกสารราชการ",
    localStrength: "เข้าใจวัฒนธรรมองค์กรท้องถิ่น ทำงานรวดเร็ว เอกสารครบถ้วน",
    nicheIndustries: ["หน่วยงานราชการ (อบต./เทศบาล)", "วิสาหกิจชุมชนและสินค้า OTOP"],
    painPoints: ["เว็บเดิมลิงก์ตาย ข้อมูลเก่า", "เจ้าหน้าที่คนเดิมย้าย ไม่มีใครดูแลต่อ"],
    competitorLevel: "low",
    socialProof: { rating: 4.8, reviewCount: 42, localClient: "วิสาหกิจชุมชนแปรรูปกล้วยไข่" },
    regionalPricing: { startPrice: "12,000 บาท", timeline: "20-30 วัน" },
    localSuccessStory: {
      title: "Case Study: อบต. ยุคใหม่",
      result: "ความพึงพอใจประชาชนเพิ่มขึ้น 80% ผ่านเกณฑ์ ITA ระดับ A",
    },
    hyperLocalKeywords: ["ทำเว็บ อบต คลองขลุง", "รับทำเว็บไซต์ พรานกระต่าย"],
  },
  priority: 96,
  districts: ["เมืองกำแพงเพชร", "คลองขลุง", "ขาณุวรลักษบุรี", "พรานกระต่าย"],
  keywords: ["รับทำเว็บไซต์ กำแพงเพชร", "ทำเว็บ อบต กำแพงเพชร"],
  coordinates: { lat: 16.4828, lng: 99.5227 },
};
```

### CONFIG: khon-kaen.ts

`Path: constants/area-nodes/khon-kaen.ts`

```typescript
/**
 * [SERVICE_NODE]: KHON_KAEN_CONVERSION_HUB v18.0.1 (ACCESSIBILITY_PATCHED)
 * [STRATEGY]: Localized Conversion | Clinic & SME Expert | Hex Standard
 */
import type { AreaNode } from "@/types";

export const khonKaenNode: AreaNode = {
  slug: "khon-kaen",
  province: "ขอนแก่น",
  templateSlug: "salepage",
  title: "รับทำเว็บไซต์ ขอนแก่น | Sale Page คลินิกและ SME ปิดการขายไว ทักแชทแตก",
  description:
    "บริการรับทำ Sale Page ในขอนแก่น เน้นดีไซน์ที่ 'คนอีสานยุคใหม่' ชอบ โหลดไวบนมือถือ รองรับยิงแอด TikTok/FB",
  longDescription:
    "ขอนแก่นคือ Smart City เราเชี่ยวชาญการทำ Sale Page ที่ออกแบบมาเพื่อปิดการขายโดยเฉพาะ",
  seoTitle: "รับทำเว็บไซต์ ขอนแก่น Sale Page ปิดการขาย ติดหน้าแรก Google - เอ็มซ่ามากส์",
  seoDescription:
    "รับทำเว็บไซต์ขอนแก่น ออกแบบ Sale Page สำหรับคลินิกความงามและร้านค้า นัดคุยงานในเมืองขอนแก่นได้",
  heroImage: "/images/areas/khon-kaen-node.webp",
  theme: {
    mode: "light",
    primary: "#4f46e5",
    secondary: "#4338ca",
    background: "#ffffff",
    foreground: "#1e1b4b",
    accent: "#818cf8",
    gradient: "from-[#4f46e5]/10 via-transparent to-transparent",
  },
  price: "8,900",
  priceValue: 8900,
  currency: "THB",
  unit: "เริ่มต้น / โปรเจกต์",
  clientTrust: "Trusted by Local: เบื้องหลังความสำเร็จของ 15+ คลินิกและร้านดังในขอนแก่น",
  benefits: [
    "เข้าใจจริตคนขอนแก่น: ออกแบบ UX/UI ให้เข้ากับพฤติกรรมคนในพื้นที่",
    "นัดคุยงานได้จริง: ผมอยู่ในพื้นที่พร้อมนัดประชุมวางแผนกลยุทธ์ย่านกังสดาลหรือในเมือง",
    "ระบบหลังบ้านแน่นปึ้ก: ติดตั้ง Conversion API ให้ครบ",
  ],
  coreFeatures: [
    {
      title: "KKC Speed Architecture",
      description: "ปรับจูนเซิร์ฟเวอร์ให้โหลดแรงสุดๆ รองรับการใช้งานผ่าน 5G/WiFi",
      icon: "Zap",
    },
    {
      title: "Line OA & Map Integration",
      description: "ปุ่ม 'แอดไลน์' และ 'นำทาง' แบบ Sticky ที่กดง่าย",
      icon: "MapPin",
    },
    {
      title: "Clean Design for Clinics",
      description: "เทมเพลตคลีนๆ ที่ออกแบบมาเพื่อคลินิกความงามโดยเฉพาะ",
      icon: "Sparkles",
    },
  ],
  faqs: [
    {
      question: "ออฟฟิศอยู่ที่ไหน นัดเจอได้ไหม?",
      answer: "ผมเบสอยู่ในตัวเมืองขอนแก่นครับ สามารถนัดคุยงานได้ย่านกังสดาลครับ",
    },
    { question: "ใช้เวลาทำนานไหม?", answer: "โดยปกติใช้เวลา 5-7 วันครับ" },
  ],
  localContext: {
    marketInsight: "คนขอนแก่นตัดสินใจซื้อเร็วถ้าเห็นรีวิวชัดเจนและช่องทางติดต่อสะดวก",
    technicalApproach: "เน้น Speed และ Mobile Experience เป็นหลัก",
    localStrength: "เข้าใจภาษาถิ่นและวัฒนธรรม ช่วยเขียน Copywriting ที่เข้าถึงใจลูกค้า",
    nicheIndustries: ["คลินิกความงาม", "ร้านอาหารและคาเฟ่", "อสังหาริมทรัพย์"],
    painPoints: ["ยิงแอดไปแล้วลูกค้าไม่ทัก เพราะเว็บโหลดช้า", "เว็บไม่สวย ดูไม่น่าเชื่อถือ"],
    competitorLevel: "high",
    socialProof: { rating: 4.9, reviewCount: 96, localClient: "คลินิกความงาม ย่านกังสดาล" },
    regionalPricing: { startPrice: "8,900 บาท", timeline: "5-7 วัน" },
    localSuccessStory: {
      title: "Case Study: คลินิกดังหลังมอ",
      result: "ยอดจองคิวเพิ่มขึ้น 300% ภายใน 1 เดือน",
    },
    hyperLocalKeywords: ["รับทำ Sale Page ขอนแก่น", "จ้างทำเว็บ กังสดาล"],
  },
  priority: 95,
  districts: ["เมืองขอนแก่น", "กังสดาล", "หลังมอ (มข.)", "บ้านไผ่"],
  keywords: ["รับทำเว็บไซต์ ขอนแก่น", "ออกแบบ Sale Page ขอนแก่น"],
  coordinates: { lat: 16.4322, lng: 102.8236 },
};
```

### CONFIG: korat.ts

`Path: constants/area-nodes/korat.ts`

```typescript
/**
 * [SERVICE_NODE]: KORAT_IDENTITY_NODE v18.0.0 (FULL_SYNC)
 * [STRATEGY]: Total Identity Shift | Zero-Radius Geometry | Industrial Monolith
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */
import type { AreaNode } from "@/types";

export const koratNode: AreaNode = {
  // --- Basic Identity ---
  slug: "korat",
  province: "นครราชสีมา",
  templateSlug: "catalog", // ใช้ Catalog Template สำหรับอุตสาหกรรม

  // [IDENTITY_COPY]: ปรับโทนคำพูดให้เป็นภาษาเครื่องจักรและการก่อสร้าง
  title: "KORAT_INDUSTRIAL_HUB | รับทำเว็บไซต์โรงงาน โคราช ระบบ Catalog อะไหล่",
  description:
    "DEPLOYING: ระบบจัดการข้อมูลสินค้าเชิงวิศวกรรมสำหรับโรงงานและอุตสาหกรรมโคราช ทรงพลัง หนักแน่น และไร้ขีดจำกัด โดย นายเอ็มซ่ามากส์",

  longDescription:
    "นี่คือสถาปัตยกรรมที่ออกแบบมาเพื่อธุรกิจที่ขับเคลื่อนด้วยเครื่องจักรและโครงสร้างครับ " +
    "ในจังหวัดนครราชสีมา ความอ่อนช้อยไม่ใช่คำตอบ แต่ความ 'ทนทาน' และ 'แม่นยำ' คือกุญแจสำคัญ " +
    "เราจึงตัดความโค้งมนทิ้งทั้งหมด เพื่อสร้าง UI ที่เฉียบคมเหมือนใบมีดอุตสาหกรรม " +
    "ระบบนี้จะเปลี่ยนแค็ตตาล็อกของคุณให้เป็นฐานข้อมูลที่แข็งแกร่งที่สุดในภาคอีสาน รองรับสินค้าหลักหมื่นรายการโดยไม่สะดุด",

  // --- SEO Metadata ---
  seoTitle: "รับทำเว็บไซต์ โคราช | ออกแบบเว็บโรงงานและแค็ตตาล็อกอุตสาหกรรม - เอ็มซ่ามากส์",
  seoDescription:
    "Web Engineering เฉพาะทางโคราช: ระบบ Dark Catalog ความละเอียดสูง ออกแบบมาเพื่อโรงงานและธุรกิจก่อสร้างโดยเฉพาะ ติดหน้าแรก Google ในคีย์เวิร์ดอุตสาหกรรม",

  // --- Visual & Theme (Industrial Monolith: Gold/Black) ---
  heroImage: "/images/areas/korat-monolith.webp",
  theme: {
    mode: "dark",
    primary: "#FFD700", // Construction Gold (สีเหลืองอำพันแบบป้ายเขตก่อสร้าง)
    secondary: "#334155", // Deep Steel Slate
    background: "#000000", // Absolute Black (ดำสนิทแบบน้ำมันเครื่อง)
    foreground: "#FFFFFF", // High-Contrast White
    accent: "#EAB308",
    gradient: "from-[#FFD700]/20 via-black to-black",

    // [EXTRA_ATTRIBUTES]: ค่ากำหนดพิเศษที่จะเปลี่ยน UI ทั้งหน้าให้เป็นเหลี่ยมคม
    radius: "0px", // ตัดความมนทิ้งทั้งหมด (Hard Edge)
    borderWidth: "2px", // เส้นขอบหนาและชัดเจนเหมือนแบบแปลน
    fontFamily: "var(--font-mono)", // ใช้ฟอนต์ Monospace ทั้งหมดเพื่อให้ดูเป็น Technical Manual
  },

  // --- Pricing Strategy (Industrial Grade) ---
  price: "24,500",
  priceValue: 24500,
  currency: "THB",
  unit: "เริ่มต้น / ระบบ",

  // --- Trust Signals ---
  clientTrust:
    "Heavy Duty Certified: ระบบที่ผ่านการทดสอบในโรงงานผลิตชิ้นส่วนยานยนต์และไซตฺ์ก่อสร้างจริงในโคราช",

  // --- Localized Benefits ---
  benefits: [
    "STRUCTURED DATA: โครงสร้างข้อมูลแบบ Matrix ที่รองรับการค้นหา Part Number หรือ Spec สินค้าได้แม่นยำ 100%",
    "ZERO-LATENCY: ระบบ Cache สินค้าที่โหลดข้อมูลหลักพันรายการได้ในเสี้ยววินาที เพื่อให้ฝ่ายจัดซื้อทำงานได้ไม่สะดุด",
    "INDUSTRIAL UI: ดีไซน์แบบ High-Contrast (ดำ-เหลือง) ที่มองเห็นชัดเจนแม้ในสภาพแสงจ้าของไซต์งานหรือโรงงาน",
  ],

  // --- Core Features ---
  coreFeatures: [
    {
      title: "Part Number Search",
      description: "Engine ค้นหาอัจฉริยะที่เข้าใจรหัสสินค้า (SKU) และสเปกทางวิศวกรรม",
      icon: "Search", // หรือ Code2
    },
    {
      title: "Technical Spec Sheet",
      description:
        "ระบบสร้างตารางสเปกสินค้า (PDF Generate) อัตโนมัติ เพื่อให้ลูกค้านำไปแนบใบเสนอราคาได้ทันที",
      icon: "FileText",
    },
    {
      title: "B2B Quote System",
      description:
        "ระบบขอใบเสนอราคา (RFQ) แบบล็อกอินสำหรับคู่ค้าประจำ เพื่อดูราคาส่งและสต็อกสินค้า",
      icon: "ShieldCheck",
    },
  ],

  // --- Localized FAQs ---
  faqs: [
    {
      question: "ระบบรองรับสินค้ากี่รายการ?",
      answer:
        "สถาปัตยกรรมของเราออกแบบมาให้รองรับได้ไม่จำกัด (Scalable) ครับ ทดสอบจริงกับฐานข้อมูลอะไหล่กว่า 50,000 รายการยังทำงานได้ลื่นไหลครับ",
    },
    {
      question: "เชื่อมต่อกับ ERP ของโรงงานได้ไหม?",
      answer:
        "ทำได้ครับ เราสามารถเขียน API เชื่อมต่อกับระบบ SAP, Oracle หรือ Express เพื่อดึงสต็อกและราคามาแสดงหน้าเว็บแบบ Real-time",
    },
    {
      question: "นัดคุยงานที่โรงงานในเขตสุรนารีได้ไหม?",
      answer:
        "ได้ครับ ทีมงานพร้อมใส่หมวกเซฟตี้เข้าไปดูหน้างานและกระบวนการผลิต เพื่อออกแบบระบบให้ตรงโจทย์การใช้งานจริงที่สุดครับ",
    },
    {
      question: "เว็บรองรับการเปิดบนแท็บเล็ตหน้างานไหม?",
      answer:
        "แน่นอนครับ UI ของเราเป็น Responsive แบบ Hard-Grid ที่แสดงผลชัดเจนบน Tablet และ Industrial Panel PC ทุกรุ่นครับ",
    },
    {
      question: "มีระบบ Dealer Login ไหม?",
      answer:
        "มีครับ เราสามารถทำระบบสมาชิกแยก Tier (Dealer/End User) เพื่อให้เห็นราคาและโปรโมชั่นที่ต่างกันได้ครับ",
    },
    {
      question: "ใช้เวลาพัฒนานานเท่าไหร่?",
      answer:
        "สำหรับระบบ Catalog มาตรฐานใช้เวลา 20-30 วันครับ แต่ถ้ามีการเชื่อมต่อ ERP อาจใช้เวลา 45-60 วันเพื่อความแม่นยำของข้อมูลครับ",
    },
    {
      question: "ออกใบกำกับภาษีได้ไหม?",
      answer:
        "ได้ครับ เราจดทะเบียนพาณิชย์ถูกต้อง สามารถออกเอกสารหัก ณ ที่จ่าย และใบกำกับภาษีเต็มรูปแบบสำหรับนิติบุคคลครับ",
    },
  ],

  // --- Context Data ---
  localContext: {
    marketInsight:
      "ธุรกิจ B2B ในโคราชไม่ได้ซื้อของด้วยอารมณ์ แต่ซื้อด้วย 'ความมั่นใจในโครงสร้าง' เว็บไซต์ที่ดูแข็งแกร่งจะช่วยดึงดูดโปรเจกต์ระดับพันล้าน",
    technicalApproach:
      "Engineered Search: ระบบค้นหาที่แม่นยำระดับรหัสอะไหล่ และการเรนเดอร์ UI แบบ High-Contrast เพื่อการอ่านข้อมูลในไซต์งาน",
    localStrength:
      "สถาปัตยกรรมแบบ Monolith ที่สะท้อนถึงความยิ่งใหญ่ของประตูสู่อีสาน พร้อมรองรับการขัดแย้งของข้อมูลมหาศาล",
    nicheIndustries: [
      "Heavy Machinery & Spare Parts",
      "Steel Construction & Engineering",
      "Logistics Infrastructure",
      "Industrial Real Estate",
    ],
    painPoints: [
      "ระบบเดิม 'เปราะบาง' เกินไปสำหรับสเกลข้อมูลอุตสาหกรรม",
      "ความสวยงามแบบทั่วไปไม่สามารถสร้างความเกรงขามให้กับคู่ค้า B2B ได้",
      "ขาดระบบจัดเก็บข้อมูลที่มีโครงสร้าง (Structured Data) ที่ชัดเจน",
    ],
    competitorLevel: "extreme",

    socialProof: {
      rating: 5.0,
      reviewCount: 99,
      localClient: "KORAT_INDUSTRIAL_PARTNERSHIP",
    },
    regionalPricing: {
      startPrice: "24,500 บาท",
      timeline: "20-30 วัน",
    },
    localSuccessStory: {
      title: "SYSTEM_DEPLOYMENT: โรงงานเหล็กโซนสีคิ้ว",
      result:
        "สร้าง Digital Inventory ที่ฝ่ายจัดซื้อทั่วประเทศเข้าถึงได้ 24 ชม. เพิ่มโอกาสปิดงานโปรเจกต์ภาครัฐ 400%",
    },
    hyperLocalKeywords: [
      "INDUSTRIAL WEB KORAT",
      "ENGINEERING CATALOG SYSTEM",
      "KORAT B2B SOLUTION",
      "รับทำเว็บโรงงาน ปากช่อง",
    ],
  },

  // --- System Metadata ---
  priority: 99, // สูงสุดในระดับยุทธศาสตร์
  districts: ["เมืองนครราชสีมา", "ปากช่อง", "สีคิ้ว", "สูงเนิน", "ขามทะเลสอ"],
  keywords: [
    "KORAT INDUSTRIAL WEB",
    "รับทำเว็บไซต์ โคราช อุตสาหกรรม",
    "ระบบแค็ตตาล็อกโรงงาน นครราชสีมา",
    "Web Architect Korat",
    "รับทำเว็บไซต์ โคราช",
  ],
  coordinates: { lat: 14.9759, lng: 102.1177 },
};
```

### CONFIG: lampang.ts

`Path: constants/area-nodes/lampang.ts`

```typescript
/**
 * [SERVICE_NODE]: LAMPANG_CRAFT_INDUSTRIAL_HUB v18.0.0 (FULL_SYNC)
 * [STRATEGY]: Craftsmanship Authority | Tourism Storytelling | Hex Standard
 * [MARKET]: Lampang City, Koh Kha, Mae Moh (Ceramics & Energy Hub)
 */
import type { AreaNode } from "@/types";

export const lampangNode: AreaNode = {
  // --- Basic Identity ---
  slug: "lampang",
  province: "ลำปาง",
  // [STRATEGY]: ใช้ 'local-authority' หรือ 'catalog' (ถ้าเน้นขายเซรามิก)
  templateSlug: "local-authority",

  title: "รับทำเว็บไซต์ ลำปาง | ออกแบบเว็บเซรามิกและธุรกิจท่องเที่ยววิถีสโลว์ไลฟ์",
  description:
    "ยกระดับงานคราฟต์และโรงงานเซรามิกเมืองลำปางสู่ระดับโลก ด้วยเว็บไซต์ที่ผสมผสานดีไซน์ร่วมสมัยเข้ากับเทคโนโลยี SEO เพื่อดึงดูดคู่ค้าและนักท่องเที่ยว",

  longDescription:
    "ลำปางเป็นเมืองที่มีเอกลักษณ์เฉพาะตัวสูง ทั้งงานเซรามิกที่โด่งดังและวิถีการท่องเที่ยวที่เรียบง่ายแต่มีเสน่ห์ " +
    "นายเอ็มซ่ามากส์ พร้อมช่วยคุณดึง 'คุณค่า' ของธุรกิจออกมาเล่าผ่านเว็บไซต์ที่ดูแพงและทันสมัย เราเน้นดีไซน์ที่ประณีตเหมือนงานคราฟต์ " +
    "แต่แฝงไปด้วยความแข็งแรงของระบบหลังบ้านที่รองรับการขายส่งและกลุ่มลูกค้าต่างชาติ พร้อมวางโครงสร้าง SEO ให้คนค้นหาคุณเจอจากทั่วไทย " +
    "เพื่อให้ธุรกิจในลำปางของคุณเติบโตได้อย่างยั่งยืนในยุคดิจิทัลครับ",

  // --- SEO Metadata ---
  seoTitle: "รับทำเว็บไซต์ ลำปาง จ้างทำเว็บโรงงานเซรามิก ที่พัก รถเช่า - เอ็มซ่ามากส์",
  seoDescription:
    "บริการรับทำเว็บไซต์ลำปาง ครบวงจร สำหรับโรงงานเซรามิก SME และธุรกิจท่องเที่ยว เน้นเว็บสวยสะอาดตา รองรับภาษาอังกฤษ/จีน เพิ่มยอดขายและภาพลักษณ์แบรนด์",

  // --- Visual & Theme (Indigo Clay: Craft/Trust) ---
  heroImage: "/images/areas/lampang-node.webp",
  theme: {
    mode: "light",
    primary: "#312e81", // Indigo 900 (น้ำเงินครามเข้ม - ความน่าเชื่อถือ)
    secondary: "#c2410c", // Orange 700 (สีดินเผา Clay - งานเซรามิก)
    background: "#fafaf9", // Stone 50 (ขาวนวลแบบเนื้อเซรามิกสะอาดตา)
    foreground: "#1c1917", // Stone 900 (ตัวหนังสือสีเข้ม อ่านง่ายคมชัด)
    accent: "#4338ca", // Indigo 700
    gradient: "from-[#312e81]/10 via-transparent to-transparent",
  },

  // --- Pricing Strategy (SME Friendly) ---
  price: "9,900",
  priceValue: 9900,
  currency: "THB",
  unit: "เริ่มต้น / โปรเจกต์",

  // --- Trust Signals ---
  clientTrust:
    "Crafted for Export: เบื้องหลังความสำเร็จของโรงงานเซรามิกส่งออกและ SME คุณภาพในลำปาง",

  // --- Localized Benefits ---
  benefits: [
    "Aesthetic & Detail: ดีไซน์ที่เน้นความสะอาดตาและการจัดวาง (Layout) ที่สวยงาม เพื่อขับเน้นรายละเอียดของสินค้างานฝีมือให้ดูโดดเด่นที่สุด",
    "Export Ready: โครงสร้างเว็บรองรับหลายภาษา (Multi-language) และระบบ Catalog ที่เป็นสากล เพื่อให้โรงงานเซรามิกคุยกับลูกค้าต่างชาติได้รู้เรื่อง",
    "Lampang SEO: เจาะกลุ่มคำค้นหาท้องถิ่นแม่นยำ เช่น 'โรงงานเซรามิก ลำปาง', 'ที่พักเกาะคา', 'รถเช่าสนามบินลำปาง' เพื่อให้ลูกค้าเจอคุณก่อนใคร",
  ],

  // --- Core Features ---
  coreFeatures: [
    {
      title: "Digital Showroom",
      description:
        "ระบบแกลเลอรี่สินค้าที่ซูมดูรายละเอียดเนื้อดิน/ลวดลายได้ชัดเจน เหมือนลูกค้ามาเดินเลือกที่โรงงาน",
      icon: "Image",
    },
    {
      title: "Storytelling Page",
      description:
        "หน้า 'เกี่ยวกับเรา' ที่ออกแบบมาเพื่อเล่าประวัติความเป็นมา (Story) ของเตาเผาหรือธุรกิจ ให้ดูขลังและน่าเชื่อถือ",
      icon: "FileText",
    },
    {
      title: "Fast Contact Button",
      description:
        "ปุ่มติดต่อด่วน (โทร/ไลน์/แผนที่) ที่ออกแบบมาให้กดง่ายบนมือถือ เพื่อดึงนักท่องเที่ยวให้แวะมาที่หน้าร้าน",
      icon: "MapPin",
    },
  ],

  // --- Localized FAQs ---
  faqs: [
    {
      question: "ทำเว็บโรงงานเซรามิก ต้องถ่ายรูปใหม่ไหม?",
      answer:
        "แนะนำให้ถ่ายใหม่ครับ ถ้าสินค้าสวยแต่รูปไม่ชัดจะขายยาก ผมมีพาร์ทเนอร์ช่างภาพในลำปางที่ถ่ายงาน Product สวยๆ แนะนำให้ได้ครับ",
    },
    {
      question: "ทำเว็บภาษาอังกฤษด้วย แพงไหม?",
      answer:
        "ไม่แพงครับ ถ้าข้อมูลไม่เยอะ ผมคิดค่าบริการเพิ่มแค่หลักพันต้นๆ เพื่อช่วยขยายโอกาสรับลูกค้าต่างชาติ คุ้มค่ามากครับ",
    },
    {
      question: "นัดคุยงานที่โรงงาน/ร้านได้ไหม?",
      answer:
        "ได้ครับ ผมชอบไปดูหน้างานจริงเพื่อให้เข้าใจกระบวนการผลิตและบรรยากาศร้าน จะได้ออกแบบเว็บออกมาได้ตรงโจทย์ที่สุดครับ",
    },
    {
      question: "ดูแลเว็บยากไหม ป้าทำไม่เป็น?",
      answer:
        "ไม่ยากครับ ผมทำระบบหลังบ้านให้เหมือนเล่นไลน์ แค่พิมพ์ข้อความ เลือกรูป แล้วกดโพสต์ ถ้าติดตรงไหนโทรหาผมได้ตลอดครับ",
    },
    {
      question: "เว็บไซต์จะติดหน้าแรก Google นานไหม?",
      answer:
        "ถ้าทำ SEO อย่างถูกต้อง อันดับจะอยู่ค่อนข้างยั่งยืนครับ ยิ่งเป็นคำค้นหาเฉพาะทางในลำปาง คู่แข่งยังไม่เยอะ โอกาสติดอันดับยาวยิ่งสูงครับ",
    },
    {
      question: "ใช้เวลาทำกี่วัน?",
      answer:
        "ปกติ 10-14 วันครับ แต่ถ้าเป็นแค็ตตาล็อกสินค้าเยอะๆ อาจใช้เวลา 3 สัปดาห์ครับ เพื่อลงข้อมูลให้ครบถ้วน",
    },
    {
      question: "มีค่าใช้จ่ายรายปีไหม?",
      answer:
        "ปีแรกฟรีครับ ปีต่อไปมีค่าต่ออายุโดเมนและโฮสติ้ง (ประมาณ 3,000 บาท) เพื่อรักษาชื่อเว็บและข้อมูลไว้ครับ",
    },
  ],

  // --- Context Data ---
  localContext: {
    marketInsight:
      "ลูกค้ากลุ่มธุรกิจลำปางให้ความสำคัญกับ 'ความสวยงามที่จับต้องได้' และ 'ความมั่นคง' เว็บไซต์ที่ดูเป็นงานศิลปะแต่ใช้งานได้จริงจะได้รับการยอมรับสูงมาก",
    technicalApproach:
      "เน้นระบบรองรับ Multi-language สำหรับโรงงานเซรามิกที่ส่งออก และระบบ Image Optimization ขั้นสูงเพื่อโชว์สินค้าให้คมชัดแต่โหลดไว",
    localStrength:
      "เข้าใจวัฒนธรรมธุรกิจลำปางที่ผสมผสานระหว่างงานอุตสาหกรรม (แม่เมาะ) และงานศิลปะ (เซรามิก) สามารถเรียบเรียงเนื้อหาให้เข้ากับทั้งสองกลุ่มได้ดี",
    nicheIndustries: [
      "โรงงานเซรามิกและเครื่องปั้นดินเผา",
      "ธุรกิจท่องเที่ยวเชิงวัฒนธรรมและรถม้า",
      "อุตสาหกรรมพลังงานและวิศวกรรม (แม่เมาะ)",
      "สินค้าหัตถกรรมไม้และของตกแต่งบ้าน",
    ],
    painPoints: [
      "งานสวยระดับโลกแต่หน้าเว็บดูเก่า ทำให้ถูกลูกค้ากดราคา",
      "คู่ค้าต่างชาติค้นหาข้อมูลโรงงานไม่เจอใน Google",
      "ต้องการเปลี่ยนจากรับจ้างผลิต (OEM) มาสร้างแบรนด์ตัวเอง",
    ],
    competitorLevel: "low",

    socialProof: {
      rating: 4.9,
      reviewCount: 42,
      localClient: "โรงงานเซรามิกส่งออก ย่านเกาะคา",
    },
    regionalPricing: {
      startPrice: "9,900 บาท",
      timeline: "10-14 วัน",
    },
    localSuccessStory: {
      title: "Case Study: โรงงานเซรามิกเกาะคา",
      result:
        "ปรับโฉมเว็บไซต์ใหม่เป็น Digital Showroom ยอดติดต่อจากห้างสรรพสินค้าและคู่ค้าต่างชาติเพิ่มขึ้น 300%",
    },
    hyperLocalKeywords: [
      "รับทำเว็บเซรามิก ลำปาง",
      "จ้างทำเว็บไซต์ เกาะคา",
      "คนทำเว็บ SEO แม่เมาะ",
      "ทำเว็บไซต์โรงแรม ลำปาง",
    ],
  },

  // --- System Metadata ---
  priority: 88,
  districts: ["เมืองลำปาง", "เกาะคา", "แม่เมาะ", "ห้างฉัตร", "เถิน", "แจ้ห่ม", "งาว"],
  keywords: [
    "รับทำเว็บไซต์ ลำปาง",
    "จ้างทำเว็บไซต์",
    "ทำเว็บเซรามิก ลำปาง",
    "ออกแบบเว็บไซต์บริษัท",
    "รับทำ SEO ลำปาง",
    "คนทำเว็บ ลำปาง",
  ],
  coordinates: { lat: 18.2855, lng: 99.4927 },
};
```

### CONFIG: mae-hong-son.ts

`Path: constants/area-nodes/mae-hong-son.ts`

```typescript
/**
 * [SERVICE_NODE]: MAE_HONG_SON_CRAFT v18.0.0 (FULL_SYNC)
 * [STRATEGY]: Slow Living | Wellness Retreat | Ethnic Craft D2C
 * [MARKET]: Mueang Mae Hong Son, Pai, Mae Sariang (High-Value Niche)
 */
import type { AreaNode } from "@/types";

export const maeHongSonNode: AreaNode = {
  // --- Basic Identity ---
  slug: "mae-hong-son",
  province: "แม่ฮ่องสอน",
  templateSlug: "local-authority",
  title: "รับทำเว็บไซต์ แม่ฮ่องสอน | ออกแบบเว็บที่พักและงานคราฟต์พรีเมียม โดย นายเอ็มซ่ามากส์",
  description:
    "เปลี่ยนความสงบของแม่ฮ่องสอนให้เป็นจุดขายระดับโลก ด้วยเว็บไซต์ที่ปิดการขายได้จริง แม้ในพื้นที่ห่างไกล พร้อมระบบที่ช่วยให้ธุรกิจท้องถิ่นขยายฐานลูกค้าสู่ระดับสากล",

  longDescription:
    "แม่ฮ่องสอนมีเสน่ห์ที่หาจากไหนไม่ได้ นายเอ็มซ่ามากส์ พร้อมช่วยถ่ายทอดเอกลักษณ์ของธุรกิจคุณสู่สายตาโลก " +
    "ไม่ว่าจะเป็นรีสอร์ตกลางสายหมอกที่ปาย หรือสินค้าแฮนด์เมดจากภูมิปัญญาชาวเขา " +
    "เราเน้นทำเว็บไซต์ที่โหลดเร็วแม้ในพื้นที่ที่สัญญาณอินเทอร์เน็ตจำกัด มีระบบจองที่ง่ายไม่ซับซ้อน และงานดีไซน์ที่เน้นความสงบ เรียบง่าย แต่ดูแพงแบบ Minimal เพื่อดึงดูดกลุ่มลูกค้ากำลังซื้อสูงครับ",

  // --- SEO Metadata ---
  seoTitle: "รับทำเว็บไซต์ แม่ฮ่องสอน ออกแบบเว็บที่พักปาย และสินค้าโอทอปพรีเมียม - เอ็มซ่ามากส์",
  seoDescription:
    "บริการรับทำเว็บไซต์แม่ฮ่องสอน เน้นงานดีไซน์เรียบง่ายแต่ทรงพลัง สำหรับรีสอร์ตและสินค้าภูมิปัญญาที่ต้องการขายตรง (D2C) โหลดไว ติดหน้าแรก Google แม้เน็ตจำกัด",

  // --- Visual & Theme (Mist Green: Peace/Nature) ---
  heroImage: "/images/areas/mae-hong-son-node.webp",
  theme: {
    mode: "light",
    primary: "#065f46", // Mist Green (เขียวหมอก)
    secondary: "#064e3b", // Forest Green (เขียวป่าลึก)
    background: "#f8fafc", // Slate 50 (ขาวนวลสะอาด)
    foreground: "#0f172a", // Slate 900
    accent: "#ea580c", // Clay Orange (ส้มดินเผา)
    gradient: "from-[#065f46]/10 via-transparent to-transparent",
  },

  // --- Pricing Strategy (Niche Market) ---
  price: "7,900",
  priceValue: 7900,
  currency: "THB",
  unit: "เริ่มต้น / โปรเจกต์",

  // --- Trust Signals ---
  clientTrust:
    "Niche Authority: เบื้องหลังความสำเร็จของที่พักแนว Wellness และร้านสินค้าแฮนด์เมดระดับพรีเมียมในแม่ฮ่องสอน",

  // --- Localized Benefits ---
  benefits: [
    "High-Speed Connectivity: สถาปัตยกรรมเว็บแบบเบาเป็นพิเศษ (Ultralight) ช่วยให้ลูกค้าเปิดเว็บคุณได้ลื่นไหลแม้จะใช้เน็ตมือถือบนดอยสูง",
    "Storytelling Experience: ดีไซน์ที่เน้นการเล่าเรื่อง (Story) เพื่อเพิ่มมูลค่าให้สินค้าชุมชนหรือที่พัก ให้ดูมีความหมายและราคาแพงกว่าทั่วไป",
    "Direct Sales Mastery: ระบบที่ช่วยให้คุณขายตรงสู่ลูกค้าได้ทันที ไม่ต้องผ่านคนกลาง ช่วยให้ผลกำไรส่วนใหญ่ตกอยู่ที่ชุมชนแม่ฮ่องสอน 100%",
  ],

  // --- Core Features ---
  coreFeatures: [
    {
      title: "Connectivity Cache",
      description:
        "ระบบจดจำข้อมูลชั่วคราวเพื่อให้เว็บไซต์เปิดได้เร็วที่สุดแม้ในจุดที่สัญญาณอินเทอร์เน็ตไม่สม่ำเสมอ",
      icon: "Wifi",
    },
    {
      title: "Digital Booking Sync",
      description:
        "ระบบจองที่พักเชื่อมต่อตรงกับสมาร์ทโฟนของเจ้าของที่พัก แจ้งเตือนผ่าน LINE ทันทีเมื่อมีการจอง",
      icon: "CalendarCheck",
    },
    {
      title: "Ethnic Product Showcase",
      description:
        "ระบบแกลเลอรี่และแคตตาล็อกสินค้าที่โชว์รายละเอียดงานฝีมือได้คมชัด เพื่อเจาะกลุ่มลูกค้า D2C สายคราฟต์",
      icon: "Award",
    },
  ],

  // --- Localized FAQs ---
  faqs: [
    {
      question: "อยู่ในพื้นที่ห่างไกล นัดคุยงานอย่างไร?",
      answer:
        "ปกติผมคุยผ่าน Zoom หรือ Google Meet ได้สะดวกมากครับ แต่ถ้าเป็นโปรเจกต์ที่ต้องการให้เห็นพื้นที่จริง ผมสามารถจัดตารางเดินทางไปหาคุณที่ปายหรือตัวเมืองแม่ฮ่องสอนได้ครับ",
    },
    {
      question: "อินเทอร์เน็ตที่แม่ฮ่องสอนช้า เว็บจะโหลดไหวไหม?",
      answer:
        "นี่คือจุดแข็งของเราครับ ผมใช้เทคโนโลยี Next.js ที่รีดประสิทธิภาพสูงสุด ทำให้หน้าเว็บมีขนาดเล็กและเปิดได้ไวที่สุดแม้เน็ตจะเหลือเพียงไม่กี่ขีดครับ",
    },
    {
      question: "มีระบบรับจองที่พัก (Booking) ให้เลยไหม?",
      answer:
        "มีครับ เราสามารถติดตั้งระบบจองตรงหน้าเว็บ (Direct Booking) เพื่อลดการเสียค่าคอมมิชชั่นให้แอปจองที่พักอื่นๆ และให้เงินเข้ากระเป๋าคุณโดยตรงครับ",
    },
    {
      question: "ทำเว็บหลายภาษาเพื่อรับฝรั่งด้วยได้ไหม?",
      answer:
        "ได้แน่นอนครับ แม่ฮ่องสอนเป็นที่นิยมของนักท่องเที่ยวต่างชาติ ผมสามารถทำระบบสลับภาษา (Multi-language) ที่แปลได้อย่างลื่นไหลและดูเป็นมืออาชีพครับ",
    },
    {
      question: "ดูแลหลังการขายอย่างไร ถ้าเว็บมีปัญหา?",
      answer:
        "ผมดูแลให้ตลอดอายุการใช้งานในส่วนของระบบพื้นฐานครับ และมีคู่มือภาษาไทยให้เจ้าของกิจการสามารถแก้ไขข้อมูลเองได้ง่ายๆ ผ่านมือถือครับ",
    },
    {
      question: "ช่วยโปรโมทใน Google Maps ให้ด้วยไหม?",
      answer:
        "รวมอยู่ในบริการครับ ผมจะช่วย Optimize หมุดธุรกิจของคุณใน Google Maps ให้เชื่อมโยงกับเว็บไซต์ เพื่อให้อันดับการค้นหาดีขึ้นแบบทวีคูณ",
    },
    {
      question: "ใช้เวลานานไหมกว่าจะเสร็จ?",
      answer:
        "สำหรับเว็บไซต์เริ่มต้น ใช้เวลาประมาณ 7-12 วันครับ ขึ้นอยู่กับการเตรียมข้อมูลรูปภาพและเนื้อหาของคุณลูกค้าครับ",
    },
  ],

  // --- Context Data ---
  localContext: {
    marketInsight:
      "กลุ่มลูกค้าของแม่ฮ่องสอนคือคนที่ต้องการความสงบ เว็บไซต์ต้องเน้นภาพบรรยากาศที่สื่อถึง Slow Living และระบบจองที่เชื่อถือได้",
    technicalApproach:
      "เน้น Image Optimization ขั้นสูงเพื่อให้เว็บโหลดเร็ว และระบบ Booking Engine ที่เชื่อมต่อกับปฏิทินมือถือได้ทันที",
    localStrength:
      "เข้าใจการตลาดแบบ Niche ที่เน้นคุณภาพมากกว่าปริมาณ และการเล่าเรื่อง Storytelling ของวิถีชีวิตดั้งเดิม",
    nicheIndustries: [
      "Boutique Resort และ Wellness Retreat",
      "ผลิตภัณฑ์ผ้าทอและเครื่องเงินจากชุมชน",
      "คาเฟ่แนว Slow Bar บนพื้นที่สูง",
      "ธุรกิจท่องเที่ยวเชิงอนุรักษ์ (Eco-Tourism)",
    ],
    painPoints: [
      "ที่พักสวยมากแต่ใน Google Map หรือหน้าเว็บดูเก่าไม่ทันสมัย",
      "การสื่อสารข้อมูลการเดินทางที่ลำบาก ทำให้ลูกค้าลังเลที่จะจอง",
      "สินค้าชุมชนมีจำกัด แต่ไม่มีระบบสต็อกออนไลน์ที่แม่นยำ",
    ],
    competitorLevel: "low",
    socialProof: {
      rating: 4.9,
      reviewCount: 35,
      localClient: "ที่พักแนว Wellness และร้านสินค้าคราฟต์ในอำเภอปาย",
    },
    regionalPricing: {
      startPrice: "7,900 บาท",
      timeline: "7-12 วัน",
    },
    localSuccessStory: {
      title: "เปลี่ยนที่พักกลางดอยให้เป็นที่รู้จักระดับโลก",
      result:
        "ยอดจองตรง (Direct Booking) เพิ่มขึ้น 200% หลังจากปรับปรุงเว็บไซต์ให้โหลดไวและดูแพงขึ้น",
    },
    hyperLocalKeywords: [
      "รับทำเว็บไซต์ ปาย",
      "จ้างทำเว็บที่พัก แม่สะเรียง",
      "ออกแบบเว็บไซต์แม่ฮ่องสอน",
      "ทำ SEO รีสอร์ต ปาย",
    ],
  },

  // --- System Metadata ---
  priority: 83,
  districts: ["เมืองแม่ฮ่องสอน", "ปาย", "แม่สะเรียง", "ขุนยวม", "ปางมะผ้า", "สบเมย", "แม่ลาหน่อย"],
  keywords: [
    "รับทำเว็บไซต์ แม่ฮ่องสอน",
    "จ้างทำเว็บที่พัก ปาย",
    "ขายสินค้าชาวเขาออนไลน์",
    "รับทำ SEO แม่ฮ่องสอน",
    "ออกแบบเว็บไซต์รีสอร์ต",
  ],
  coordinates: { lat: 19.302, lng: 97.9685 },
};
```

### CONFIG: nakhon-sawan.ts

`Path: constants/area-nodes/nakhon-sawan.ts`

```typescript
/**
 * [SERVICE_NODE]: NAKHON_SAWAN_TRADER_HUB v18.0.1 (FULL_SYNC)
 * [STRATEGY]: Merchant Authority | Wholesale P-SEO | Hex Standard
 * [MARKET]: Nakhon Sawan City, Pak Nam Pho, Logistics & Trading Hub
 */
import type { AreaNode } from "@/types";

export const nakhonSawanNode: AreaNode = {
  // --- Basic Identity ---
  slug: "nakhon-sawan",
  province: "นครสวรรค์",
  templateSlug: "local-authority",

  title: "รับทำเว็บไซต์ นครสวรรค์ | ออกแบบเว็บร้านค้าส่งและธุรกิจกงสี ให้ทันสมัยและขายดีกว่าเดิม",
  description:
    "ยกระดับร้านค้าส่งและธุรกิจในปากน้ำโพสู่โลกออนไลน์ เปลี่ยนชื่อเสียงที่สะสมมานานให้เป็นยอดขายที่ตรวจสอบได้จริงบน Google พร้อมระบบที่ช่วยให้ลูกค้าใหม่หาคุณเจอเป็นอันดับแรก",

  longDescription:
    "นครสวรรค์คือเมืองแห่งการค้าขายที่เข้มแข็งมานานครับ ไม่ว่าคุณจะเป็นร้านค้าส่งยี่ปั๊วรายใหญ่ หรือธุรกิจขนส่ง การมีเว็บไซต์คือการเปิดประตูรับโอกาสใหม่ๆ ที่ไม่ได้จำกัดอยู่แค่ในปากน้ำโพ " +
    "นายเอ็มซ่ามากส์ พร้อมช่วยเปลี่ยนชื่อเสียงแบบปากต่อปากที่คุณมี ให้กลายเป็นตัวตนที่แข็งแกร่งบนโลกดิจิทัล เพื่อให้ธุรกิจกงสีหรือร้านค้าของคุณเติบโตและสู้กับคู่แข่งยุคใหม่ได้อย่างสง่างาม " +
    "เราเน้นการทำเว็บไซต์ที่ใช้งานง่ายที่สุด ลูกค้ากดโทรหาคุณได้ทันที และวางรากฐานให้ Google พาคนเข้ามาดูร้านของคุณมากขึ้นในทุกวันครับ",

  // --- SEO Metadata ---
  seoTitle:
    "รับทำเว็บไซต์ นครสวรรค์ ออกแบบเว็บร้านค้าส่ง ปากน้ำโพ ติดหน้าแรก Google - เอ็มซ่ามากส์",
  seoDescription:
    "จ้างทำเว็บไซต์นครสวรรค์ ครบวงจร เน้นช่วยร้านค้าส่งและธุรกิจท้องถิ่นให้มีตัวตนบน Google ปักหมุดแผนที่ให้ลูกค้าหาเจอง่าย เพิ่มความน่าเชื่อถือระดับมืออาชีพ",

  // --- Visual & Theme (Pak Nam Pho Prosperity: Red/Gold) ---
  heroImage: "/images/areas/nakhon-sawan-node.webp",
  theme: {
    mode: "light",
    primary: "#be123c", // Rose 700 (แดงมงคล - สื่อถึงพลังค้าขาย)
    secondary: "#881337", // Rose 900 (แดงเข้ม - ความหนักแน่น/กงสี)
    background: "#fff1f2", // Rose 50 (พื้นขาวอมชมพูจางๆ ให้ความรู้สึกอบอุ่น)
    foreground: "#4c0519", // Rose 950 (ตัวหนังสือสีแดงเข้ม อ่านง่าย)
    accent: "#d97706", // Amber 600 (สีทอง/ส้ม - ความมั่งคั่ง)
    gradient: "from-[#be123c]/10 via-transparent to-transparent",
  },

  // --- Pricing Strategy (Merchant Friendly) ---
  price: "9,500",
  priceValue: 9500,
  currency: "THB",
  unit: "เริ่มต้น / โปรเจกต์",

  // --- Trust Signals ---
  clientTrust:
    "Merchant's Choice: เบื้องหลังความสำเร็จของร้านค้าส่งอะไหล่ยนต์และยี่ปั๊วรายใหญ่ในนครสวรรค์",

  // --- Localized Benefits ---
  benefits: [
    "ยึดทำเลทองบน Google: ปักหมุดร้านค้าให้ติดอันดับต้นๆ เมื่อคนค้นหาสินค้าในพื้นที่ เพื่อให้ลูกค้าที่กำลังต้องการของโทรหาคุณก่อนคู่แข่ง",
    "สร้างความมั่นใจให้คู่ค้า: เว็บไซต์ที่ดูเป็นมืออาชีพช่วยให้ลูกค้านอกเขตปากน้ำโพกล้าที่จะโอนเงินและสั่งซื้อสินค้าจากคุณมากขึ้น",
    "ระบบเรียบง่ายไม่ซับซ้อน: เราออกแบบมาให้เจ้าของกิจการที่อาจไม่สันทัดเทคโนโลยีสามารถดูแลข้อมูลพื้นฐานเองได้ง่ายๆ ผ่านมือถือ",
  ],

  // --- Core Features ---
  coreFeatures: [
    {
      title: "Google Maps Domination",
      description:
        "ปรับแต่งหมุดร้านค้า (GMB) ให้สมบูรณ์แบบที่สุด เพื่อดึง Traffic จากกลุ่มคนค้นหา 'ใกล้ฉัน' ในนครสวรรค์",
      icon: "MapPin",
    },
    {
      title: "Quick-Action Layout",
      description:
        "เน้นปุ่มโทรออกและปุ่มแชท LINE ที่เห็นชัดเจนในทุกหน้าหน้าจอ เพื่อเปลี่ยนผู้เยี่ยมชมให้เป็นลูกค้าโดยเร็วที่สุด",
      icon: "Zap",
    },
    {
      title: "Business Trust Profile",
      description:
        "ระบบโชว์หน้าร้าน รีวิวจากลูกค้า และความสำเร็จของธุรกิจ เพื่อยืนยันว่าคุณคือตัวจริงในอุตสาหกรรมนั้น",
      icon: "ShieldCheck",
    },
  ],

  // --- Localized FAQs (7 Items) ---
  faqs: [
    {
      question: "มีหน้าร้านอยู่แล้ว ทำไมยังต้องทำเว็บไซต์อีก?",
      answer:
        "เพราะพฤติกรรมลูกค้าเปลี่ยนไปครับ แม้แต่คนในนครสวรรค์เองเวลานึกอะไรไม่ออกเขาก็จะค้นหาใน Google ก่อน ถ้าคุณไม่มีตัวตนบนนั้น ลูกค้าก็อาจจะหลุดไปหาร้านอื่นที่เขาเจอได้ง่ายกว่าครับ",
    },
    {
      question: "ดูแลเว็บไม่เป็น จะทำได้ไหม?",
      answer:
        "ทำได้แน่นอนครับ ผมจะเซตระบบทุกอย่างให้เป็นอัตโนมัติที่สุด และสอนการใช้งานเบื้องต้นเพียงไม่กี่นาทีคุณก็ทำได้แล้ว หรือจะให้ผมดูแลรายเดือนให้คุณก็ได้ครับ",
    },
    {
      question: "นานไหมกว่าจะเห็นผล?",
      answer:
        "สำหรับเว็บไซต์และการปักหมุดแผนที่ ปกติจะเริ่มเห็นผลในแง่ของการค้นหาเจอภายใน 2-4 สัปดาห์ และจะค่อยๆ แข็งแกร่งขึ้นเรื่อยๆ เมื่อเวลาผ่านไปครับ",
    },
    {
      question: "ช่วยเรื่องการขายส่ง (Wholesale) ได้อย่างไร?",
      answer:
        "เราจะเน้นการทำ SEO ในคีย์เวิร์ดประเภท 'ขายส่ง' หรือ 'แหล่งจำหน่าย' เพื่อดึงดูดเจ้าของร้านค้ารายย่อยจากจังหวัดใกล้เคียงให้เข้ามาเจอคุณครับ",
    },
    {
      question: "ต้องเตรียมข้อมูลอะไรบ้าง?",
      answer:
        "เตรียมแค่รูปภาพหน้าร้าน สินค้าหลักของคุณ และประวัติคร่าวๆ ครับ ที่เหลือผมจะช่วยเรียบเรียงและวางโครงสร้างการขายให้ทั้งหมดครับ",
    },
    {
      question: "ราคา 9,500 จบจริงไหม มีค่าใช้จ่ายแอบแฝงไหม?",
      answer:
        "ราคานี้เป็นราคาเริ่มต้นสำหรับเว็บหน้าเดียวที่สมบูรณ์ครับ ค่าใช้จ่ายรายปีจะมีแค่ค่าโดเมนและโฮสติ้ง ซึ่งผมจะแจ้งให้ทราบตั้งแต่วันแรกอย่างชัดเจนครับ",
    },
    {
      question: "นัดเจอเพื่อคุยรายละเอียดในเมืองนครสวรรค์ได้ไหม?",
      answer:
        "ได้ครับ ผมยินดีเข้าไปพูดคุยที่ร้านของคุณในย่านสวรรค์วิถี ปากน้ำโพ หรือระแวกใกล้เคียง เพื่อให้เข้าใจบริบทของธุรกิจคุณมากที่สุดครับ",
    },
  ],

  // --- Context Data ---
  localContext: {
    marketInsight:
      "ชาวนครสวรรค์ให้ค่ากับ 'สายสัมพันธ์' และ 'ความมั่นคง' เว็บไซต์ที่แสดงตัวตนชัดเจนและเชื่อมโยงกับหน้าร้านจริงจะปิดการขายได้ดีที่สุด",
    technicalApproach:
      "เน้น Local Business Schema และการปักหมุด Google Maps แบบสมบูรณ์ เพื่อดักจับ Traffic จากกลุ่มยี่ปั๊วที่หาซัพพลายเออร์ในพื้นที่",
    localStrength:
      "เราเข้าใจกลไกธุรกิจกงสีและการค้าส่ง พร้อมเป็นที่ปรึกษาที่ช่วยเปลี่ยนผ่านจากหน้าร้านสู่ระบบออนไลน์อย่างราบรื่น",
    nicheIndustries: [
      "ร้านค้าส่ง ยี่ปั๊ว และสินค้าเกษตร",
      "ธุรกิจขนส่งและท่าข้าว",
      "ร้านอะไหล่ยนต์และอุปกรณ์ช่าง",
      "ธุรกิจของฝากปากน้ำโพ",
    ],
    painPoints: [
      "คนรุ่นใหม่ค้นหาร้านในมือถือไม่เจอจนเสียลูกค้าให้ห้างใหญ่",
      "ลูกค้าต่างจังหวัดไม่มั่นใจความมีตัวตนของร้าน",
      "กลัวเทคโนโลยียุ่งยากและไม่มีคนดูแลหลังทำเสร็จ",
    ],
    competitorLevel: "low",

    socialProof: {
      rating: 4.9,
      reviewCount: 52,
      localClient: "ร้านค้าส่งอะไหล่รายใหญ่ ย่านสวรรค์วิถี",
    },
    regionalPricing: {
      startPrice: "9,500 บาท",
      timeline: "10-14 วัน",
    },
    localSuccessStory: {
      title: "Case Study: ร้านอะไหล่พยุหะคีรี",
      result:
        "ปรับปรุงตัวตนบนโลกออนไลน์ ทำให้ได้รับยอดสั่งซื้อจากต่างจังหวัดเพิ่มขึ้น 300% ภายใน 6 เดือน",
    },
    hyperLocalKeywords: [
      "รับทำเว็บไซต์ ปากน้ำโพ",
      "จ้างทำเว็บร้านค้า สวรรค์วิถี",
      "ปักหมุด Google Maps นครสวรรค์",
      "ทำเว็บไซต์ท่าข้าว นครสวรรค์",
    ],
  },

  // --- System Metadata ---
  priority: 90,
  districts: [
    "เมืองนครสวรรค์",
    "ลาดยาว",
    "ตาคลี",
    "พยุหะคีรี",
    "บรรพตพิสัย",
    "เก้าเลี้ยว",
    "ชุมแสง",
  ],
  keywords: [
    "รับทำเว็บไซต์ นครสวรรค์",
    "จ้างทำเว็บไซต์",
    "ทำเว็บร้านค้าส่ง",
    "คนทำเว็บ นครสวรรค์",
    "รับปักหมุด Google Maps",
  ],
  coordinates: { lat: 15.7042, lng: 100.1372 },
};
```

### CONFIG: phang-nga.ts

`Path: constants/area-nodes/phang-nga.ts`

```typescript
/**
 * [SERVICE_NODE]: Phang Nga v1.1.5 (FINAL_STRICT_COMPLIANT)
 * [STRATEGY]: Premium Eco-Tourism & Marine Governance
 */
import type { AreaNode } from "@/types";

export const phangNgaNode: AreaNode = {
  slug: "phang-nga",
  province: "พังงา",
  templateSlug: "local-authority",
  title: "รับทำเว็บไซต์พังงา - Smart Marine Governance & Sustainable Tourism Hub",
  description:
    "ยกระดับดิจิทัลแพลตฟอร์มสำหรับ อบต. และเทศบาลในพังงา เน้นระบบความปลอดภัยทางทะเล (Marine Safety 4.0) และโครงสร้างพื้นฐานเพื่อการท่องเที่ยวเชิงนิเวศระดับพรีเมียม",

  seoTitle: "รับทำเว็บไซต์พังงา อบต. เทศบาล - ระบบ Smart City & ITA ยุคใหม่",
  seoDescription:
    "ออกแบบเว็บไซต์ราชการพังงา เขาหลัก เกาะยาว มาตรฐานความปลอดภัยสูง พร้อมระบบเชื่อมโยงข้อมูลท่องเที่ยวและเตือนภัยพิบัติทางทะเลแห่งแรกในอันดามัน",

  heroImage: "/images/areas/phang-nga.webp",
  theme: {
    mode: "light",
    primary: "#00695C",
    secondary: "#009688",
    background: "#F0F4F4",
    foreground: "#002E2C",
    accent: "#FF8F00",
    gradient: "bg-gradient-to-br from-[#00695C] to-[#009688]",
  },

  price: "17,900",
  priceValue: 17900,
  currency: "THB",
  unit: "Standard Package",

  benefits: [
    "Integrated Marine Weather API: แสดงสภาพอากาศชายฝั่งแบบ Real-time รายหาด",
    "Digital Green Certificate Support: รองรับระบบรับรองมาตรฐานสิ่งแวดล้อมสำหรับท้องถิ่น",
    "Multi-lingual Smart Portal: ระบบแปลภาษาอัตโนมัติรองรับนักท่องเที่ยว Scandinavian & European",
  ],

  localContext: {
    marketInsight:
      "GPP ของพังงาขับเคลื่อนด้วย Luxury Tourism 80% เว็บไซต์ต้องรองรับ High-Bandwidth Visuals แต่ต้องโหลดเร็วผ่านระบบ SSR เพื่อประสบการณ์ใช้งานระดับสากล",
    technicalApproach:
      "ใช้ระบบ Hybrid Static-Server Rendering (Next.js 15+) เพื่อให้หน้าจังหวัดพังงาติดอันดับ Top-of-Mind ของผู้บริหารท้องถิ่นที่ค้นหาผ่านมือถือ",

    localStrength:
      "ทรัพยากรธรรมชาติระดับ World-Class (สิมิลัน/สุรินทร์) และภาพลักษณ์ Luxury Quiet Destination",

    nicheIndustries: [
      "สมาคมธุรกิจการท่องเที่ยวจังหวัดพังงา",
      "ศูนย์อนุรักษ์พันธุ์เต่าทะเล (กองทัพเรือ)",
      "อุทยานแห่งชาติหมู่เกาะสิมิลัน/สุรินทร์",
      "วิสาหกิจชุมชนบ้านสามช่องเหนือ",
    ],

    painPoints: [
      "ระบบแจ้งเตือนภัยพิบัติยังไม่เข้าถึงนักท่องเที่ยวแบบ Real-time",
      "ขาดแพลตฟอร์มรวมข้อมูลท่องเที่ยวชุมชนที่อัปเดต",
      "เว็บราชการเดิมไม่รองรับการแสดงผลบนมือถือ",
    ],

    competitorLevel: "high", // Correct literal type

    hyperLocalKeywords: [
      "ทำเว็บไซต์เขาหลัก",
      "เว็บ อบต. คึกคัก",
      "เทศบาลตำบลเกาะยาวใหญ่",
      "ออกแบบเว็บไซต์ราชการท้ายเหมือง",
      "ระบบสารสนเทศเมืองพังงา",
    ],

    socialProof: {
      rating: 4.9,
      reviewCount: 42,
      localClient: "โครงการนำร่อง Smart Village Phang Nga",
    },
  },

  priority: 95,
  districts: [
    "เมืองพังงา",
    "ตะกั่วป่า",
    "ท้ายเหมือง",
    "ตะกั่วทุ่ง",
    "คุระบุรี",
    "กะปง",
    "ทับปุด",
    "เกาะยาว",
  ],

  // [FIXED]: Added Missing Required Property
  keywords: [
    "รับทำเว็บไซต์พังงา",
    "Web Design Phang Nga",
    "ระบบเตือนภัยสึนามิ",
    "ท่องเที่ยวชุมชนพังงา",
    "เว็บ อบต. มาตรฐาน ITA",
  ],

  coordinates: { lat: 8.4501, lng: 98.5255 },
};
```

### CONFIG: phichit.ts

`Path: constants/area-nodes/phichit.ts`

```typescript
/**
 * [SERVICE_NODE]: PHICHIT_AGRO_INDUSTRIAL_HUB v18.0.1 (ACCESSIBILITY_PATCHED)
 * [STRATEGY]: Industrial Reliability | Agro-B2B SEO | Hex Standard
 * [MARKET]: Phichit City, Taphan Hin, Bang Mun Nak (Rice Mill Belt)
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { AreaNode } from "@/types";

export const phichitNode: AreaNode = {
  // --- Basic Identity ---
  slug: "phichit",
  province: "พิจิตร",
  templateSlug: "local-authority",
  title: "รับทำเว็บไซต์ พิจิตร | ออกแบบเว็บโรงสีและธุรกิจเกษตรแปรรูป สร้างความเชื่อถือระดับสากล",
  description:
    "เปลี่ยนภาพลักษณ์โรงสีและธุรกิจการเกษตรในพิจิตรให้ดูโปรระดับมาตรฐานโลก ด้วยเว็บไซต์ที่เน้นความน่าเชื่อถือ โหลดไว และช่วยให้คู่ค้าหาคุณเจอเป็นอันดับแรกใน Google",

  longDescription:
    "พิจิตรบ้านเราคือเมืองอู่ข้าวอู่น้ำที่สำคัญครับ ไม่ว่าคุณจะเป็นโรงสีข้าว ขายเครื่องจักรการเกษตร หรือทำธุรกิจค้าส่งรายใหญ่ การมีเว็บไซต์ที่ดูดีคือการโชว์ศักยภาพว่าบริษัทของคุณมั่นคงขนาดไหน " +
    "นายเอ็มซ่ามากส์ พร้อมช่วยเปลี่ยนธุรกิจของคุณให้ทันสมัยขึ้น เราเน้นทำเว็บไซต์ที่โชว์ผลงาน มาตรฐานโรงงาน และใบรับรองต่างๆ ให้ชัดเจน เพื่อให้คู่ค้าจากทั่วประเทศตัดสินใจร่วมงานกับคุณได้ทันทีโดยไม่ต้องเดินทางมาดูหน้างาน " +
    "เราวางระบบให้คนค้นหาธุรกิจของคุณเจอใน Google ทันที ช่วยเพิ่มโอกาสในการปิดดีลใหม่ๆ และสร้างการเติบโตที่ยั่งยืนให้ธุรกิจในท้องถิ่นของเราครับ",

  // --- SEO Metadata ---
  seoTitle:
    "รับทำเว็บไซต์ พิจิตร ออกแบบเว็บโรงสีข้าวและธุรกิจเกษตร ติดหน้าแรก Google - เอ็มซ่ามากส์",
  seoDescription:
    "จ้างทำเว็บไซต์พิจิตร ครบวงจร สำหรับโรงงาน โรงสี และ SME การเกษตร เน้นความน่าเชื่อถือ โหลดเร็ว รองรับการแสดงผลบนมือถือ พร้อมระบบช่วยดันอันดับ Google SEO",

  // --- Visual & Theme (Emerald Agro-Industry: Growth/Stability) ---
  heroImage: "/images/areas/phichit-node.webp",
  theme: {
    mode: "light",
    /** * [ACCESSIBILITY_PATCH]: ปรับจาก #059669 (Emerald 600) เป็น #047857 (Emerald 700)
     * เพื่อให้ผ่านเกณฑ์ WCAG AA (> 4.5:1) บนพื้นหลัง #ecfdf5
     */
    primary: "#047857",
    secondary: "#064e3b", // Emerald 900 (เขียวเข้มมั่นคง)
    background: "#ecfdf5", // Emerald 50 (พื้นเขียวมิ้นต์อ่อนจาง)
    foreground: "#022c22", // Emerald 950
    accent: "#34d399", // Emerald 400
    gradient: "from-[#047857]/10 via-transparent to-transparent",
  },

  // --- Pricing Strategy (Industrial Grade) ---
  price: "11,500",
  priceValue: 11500,
  currency: "THB",
  unit: "เริ่มต้น / โปรเจกต์",

  // --- Trust Signals ---
  clientTrust:
    "Agro-Reliability: ผู้อยู่เบื้องหลังเว็บไซต์โรงสีรายใหญ่และตัวแทนจำหน่ายเครื่องจักรเกษตรในพิจิตร",

  // --- Localized Benefits ---
  benefits: [
    "สร้างเครดิตระดับประเทศ: เว็บไซต์ที่ดูเป็นมืออาชีพช่วยให้คู่ค้าจากต่างจังหวัดหรือบริษัทส่งออก มั่นใจในมาตรฐานโรงงานของคุณตั้งแต่วินาทีแรกที่ค้นหาเจอ",
    "โชว์ศักยภาพ 24 ชั่วโมง: ไม่ว่าจะเป็นกำลังการผลิต มาตรฐาน ISO หรือคลังสินค้า คุณสามารถโชว์ทุกอย่างให้ลูกค้าเห็นได้ผ่านหน้าเว็บ โดยไม่ต้องส่งไฟล์รูปภาพซ้ำๆ",
    "ยึดพื้นที่บน Google: เราเน้นคีย์เวิร์ดเฉพาะทาง เช่น 'โรงสีข้าว พิจิตร', 'ขายเครื่องจักรเกษตร ตะพานหิน' เพื่อดักกลุ่มลูกค้าที่กำลังมองหาซัพพลายเออร์ตัวจริง",
  ],

  // --- Core Features ---
  coreFeatures: [
    {
      title: "Industrial Showroom",
      description:
        "ระบบจัดวางแกลเลอรี่รูปภาพโรงงานและเครื่องจักรที่คมชัด โหลดไว เพื่อสะท้อนถึงเทคโนโลยีการผลิตที่ทันสมัย",
      icon: "Building2",
    },
    {
      title: "Standard & Compliance",
      description:
        "ส่วนแสดงใบรับรองและมาตรฐานการผลิต (GMP/HACCP) ที่จัดวางอย่างเป็นระเบียบ สร้างความมั่นใจในคุณภาพสินค้า",
      icon: "ShieldCheck",
    },
    {
      title: "Mobile-First Inquiry",
      description:
        "ระบบปุ่มติดต่อด่วนและแบบฟอร์มขอใบเสนอราคาที่ใช้งานง่ายบนมือถือ เพื่อให้ฝ่ายจัดซื้อติดต่อหาคุณได้ทันที",
      icon: "Smartphone",
    },
  ],

  // --- Localized FAQs ---
  faqs: [
    {
      question: "ทำไมโรงสีข้าวต้องมีเว็บไซต์ ทั้งที่มีลูกค้าประจำอยู่แล้ว?",
      answer:
        "ลูกค้าประจำคือพื้นฐานครับ แต่เว็บไซต์คือโอกาสในการหาลูกค้าใหม่และคู่ค้าส่งออกรายใหญ่ที่เขาต้องการตรวจสอบเครดิตบริษัทผ่าน Google ก่อนตัดสินใจทำสัญญาซื้อขายก้อนโตครับ",
    },
    {
      question: "จ้างทำแล้วต้องรอนานไหมกว่าจะเสร็จ?",
      answer:
        "สำหรับเว็บไซต์มาตรฐานธุรกิจ ปกติใช้เวลา 10-14 วันครับ ขึ้นอยู่กับการเตรียมข้อมูลรูปภาพโรงงานและรายละเอียดมาตรฐานต่างๆ ของคุณลูกค้าครับ",
    },
    {
      question: "แก้ไขข้อมูลเองได้ไหม เช่น เปลี่ยนราคาหรืออัปเดตรูปผลงาน?",
      answer:
        "ได้แน่นอนครับ ผมจะสอนเจ้าหน้าที่ของคุณใช้งานระบบหลังบ้านที่ง่ายเหมือนพิมพ์ไลน์ คุณสามารถเพิ่มรูปกิจกรรมหรือประกาศข่าวสารได้เองทันทีครับ",
    },
    {
      question: "รับปักหมุดโรงงานใน Google Maps ด้วยไหม?",
      answer:
        "รวมอยู่ในบริการครับ ผมจะช่วยปรับแต่งหมุดธุรกิจของคุณให้แม่นยำและน่าเชื่อถือ เพื่อให้รถขนส่งหรือคู่ค้าหาตำแหน่งโรงงานของคุณได้ง่ายที่สุดครับ",
    },
    {
      question: "นัดคุยรายละเอียดที่บริษัทในพิจิตรได้ไหม?",
      answer:
        "ยินดีครับ ผมเดินทางไปพบคุณลูกค้าที่โรงงานในเขตเมือง พิจิตร, ตะพานหิน หรือบางมูลนาก ได้เลยครับ เพื่อให้เข้าใจหน้างานและโจทย์ธุรกิจที่สุด",
    },
    {
      question: "มีบริการทำ SEO ให้ด้วยไหม?",
      answer:
        "โครงสร้างเว็บที่ผมทำรองรับ SEO 100% ครับ ผมจะช่วยตั้งค่าคีย์เวิร์ดที่คนค้นหาเยอะในอุตสาหกรรมการเกษตรให้เบื้องต้นเพื่อให้ติดหน้าแรกได้ง่ายขึ้นครับ",
    },
    {
      question: "ค่าใช้จ่ายมีรายเดือนไหม?",
      answer:
        "ไม่มีรายเดือนครับ จ่ายจบครั้งเดียวเป็นกรรมสิทธิ์ของคุณ จะมีแค่ค่าต่ออายุชื่อเว็บและโฮสติ้งรายปี (ประมาณ 3,000 บาท) ซึ่งผมแถมให้ฟรีในปีแรกครับ",
    },
  ],

  // --- Context Data ---
  localContext: {
    marketInsight:
      "เจ้าของธุรกิจในพิจิตรมีรากฐานมั่นคง เว็บไซต์ที่ทันสมัยจะช่วยสร้างความแตกต่างและพิสูจน์มาตรฐานโรงงานให้คู่ค้าเห็นได้ทันที",
    technicalApproach:
      "เน้น Industrial Schema และการนำเสนอระบบการผลิตที่ชัดเจน พร้อมโครงสร้างเว็บที่เบาและโหลดเร็วเพื่อรองรับการเปิดจากพื้นที่ห่างไกล",
    localStrength:
      "เข้าใจระบบธุรกิจเกษตรแปรรูปในพิจิตร พร้อมช่วยเรียบเรียงเนื้อหาให้ดูเป็นสากลและน่าเชื่อถือที่สุดในเขตภาคเหนือตอนล่าง",
    nicheIndustries: [
      "โรงสีข้าวและธุรกิจแปรรูปเกษตร",
      "ตัวแทนจำหน่ายเครื่องจักรและอุปกรณ์เกษตร",
      "ธุรกิจค้าส่งรายใหญ่",
      "วิสาหกิจชุมชนสินค้าเกษตรแปรรูป",
    ],
    painPoints: [
      "คู่ค้าหาข้อมูลบริษัทเพื่อเช็คความน่าเชื่อถือไม่เจอ",
      "ภาพลักษณ์บนออนไลน์ไม่สะท้อนถึงมาตรฐานโรงงานจริงๆ",
      "ต้องการขยายตลาดสู่คู่ค้าระดับประเทศแต่ขาดเครื่องมือโชว์ศักยภาพ",
    ],
    competitorLevel: "low",

    socialProof: {
      rating: 4.9,
      reviewCount: 38,
      localClient: "โรงสีข้าวขนาดใหญ่ ย่านตะพานหิน",
    },
    regionalPricing: {
      startPrice: "11,500 บาท",
      timeline: "10-14 วัน",
    },
    localSuccessStory: {
      title: "Case Study: โรงสีข้าวยยุคใหม่",
      result:
        "ได้รับยอดสั่งซื้อจากบริษัทส่งออกรายใหญ่ผ่านหน้าเว็บ หลังจากปรับโฉมให้ดูเป็นสากลและติดอันดับ SEO",
    },
    hyperLocalKeywords: [
      "รับทำเว็บไซต์ ตะพานหิน",
      "จ้างทำเว็บ บางมูลนาก",
      "คนทำเว็บโรงสี พิจิตร",
      "ปักหมุด Google Maps พิจิตร",
    ],
  },

  // --- System Metadata ---
  priority: 82,
  districts: ["เมืองพิจิตร", "ตะพานหิน", "บางมูลนาก", "โพทะเล", "สามง่าม", "โพธิ์ประทับช้าง"],
  keywords: [
    "รับทำเว็บไซต์ พิจิตร",
    "จ้างทำเว็บพิจิตร",
    "ทำเว็บโรงสีข้าว",
    "ออกแบบเว็บไซต์บริษัท",
    "รับทำ SEO พิจิตร",
    "ปักหมุด Google Maps พิจิตร",
  ],
  coordinates: { lat: 16.4428, lng: 100.3501 },
};
```

### CONFIG: phitsanulok.ts

`Path: constants/area-nodes/phitsanulok.ts`

```typescript
/**
 * [SERVICE_NODE]: PHITSANULOK_SERVICE_HUB v18.0.0 (FULL_SYNC)
 * [STRATEGY]: Regional Authority | Medical & Service SEO | Hex Standard
 * [MARKET]: Phitsanulok City, Indochina Intersection (Service & Healthcare Hub)
 */
import type { AreaNode } from "@/types";

export const phitsanulokNode: AreaNode = {
  // --- Basic Identity ---
  slug: "phitsanulok",
  province: "พิษณุโลก",
  templateSlug: "local-authority",
  title: "รับทำเว็บไซต์ พิษณุโลก | ออกแบบเว็บคลินิกและธุรกิจบริการ ศูนย์กลางภาคเหนือตอนล่าง",
  description:
    "ยกระดับธุรกิจบริการและการแพทย์สู่มาตรฐานสากล ด้วยเว็บไซต์ที่เน้นความน่าเชื่อถือ โหลดไว และติดอันดับ Google ในฐานะผู้นำของภูมิภาคสี่แยกอินโดจีน",

  longDescription:
    "พิษณุโลกคือหัวใจสำคัญของภาคเหนือตอนล่างครับ ไม่ว่าคุณจะบริหารคลินิกเฉพาะทาง ทำธุรกิจขนส่งระดับภูมิภาค หรือสถาบันการศึกษา เว็บไซต์ของคุณต้องสะท้อนถึง 'มาตรฐานสูงสุด' " +
    "นายเอ็มซ่ามากส์ เข้าใจดีว่าความเชื่อถือคือหัวใจของธุรกิจในเมืองนี้ เราจึงเน้นออกแบบเว็บไซต์ที่ดูสะอาดตา มั่นคง และเป็นมืออาชีพ เพื่อให้ลูกค้าหรือคนไข้ที่ค้นหาบริการของคุณใน Google " +
    "มั่นใจในศักยภาพและตัดสินใจเลือกคุณเป็นอันดับแรก เราพร้อมช่วยวางรากฐานดิจิทัลที่แข็งแรง เพื่อให้สมกับความเป็นเมืองศูนย์กลางเศรษฐกิจและบริการของพิษณุโลกครับ",

  // --- SEO Metadata ---
  seoTitle:
    "รับทำเว็บไซต์ พิษณุโลก ออกแบบเว็บคลินิกและธุรกิจโลจิสติกส์ ติดหน้าแรก Google - เอ็มซ่ามากส์",
  seoDescription:
    "จ้างทำเว็บไซต์พิษณุโลก ครบวงจร สำหรับคลินิก โรงแรม และธุรกิจบริการ เน้นความน่าเชื่อถือระดับมืออาชีพ รองรับ SEO พื้นที่ภาคเหนือตอนล่าง เพื่อครองความเป็นผู้นำในภูมิภาค",

  // --- Visual & Theme (Civic Blue: Trust/Professional) ---
  heroImage: "/images/areas/phitsanulok-node.webp",
  theme: {
    mode: "light",
    primary: "#1d4ed8", // Blue 700 (น้ำเงินวิชาชีพ)
    secondary: "#1e3a8a", // Blue 900
    background: "#f8fafc", // Slate 50 (สะอาดตา)
    foreground: "#0f172a", // Slate 900
    accent: "#60a5fa", // Blue 400
    gradient: "from-[#1d4ed8]/10 via-transparent to-transparent",
  },

  // --- Pricing Strategy (Hub Level) ---
  price: "12,900",
  priceValue: 12900,
  currency: "THB",
  unit: "เริ่มต้น / โปรเจกต์",

  // --- Trust Signals ---
  clientTrust:
    "Regional Hub Trust: เบื้องหลังเว็บไซต์คลินิกเฉพาะทางและบริษัทโลจิสติกส์ชั้นนำในพิษณุโลก",

  // --- Localized Benefits ---
  benefits: [
    "Professional Identity: สร้างภาพลักษณ์ที่น่าเชื่อถือและภูมิฐานในระดับภูมิภาค เพื่อให้ธุรกิจของคุณโดดเด่นเหนือคู่แข่งในฐานะผู้เชี่ยวชาญตัวจริง",
    "Regional SEO Dominance: วางโครงสร้างการค้นหาครอบคลุมพื้นที่พิษณุโลกและจังหวัดใกล้เคียง (สุโขทัย, พิจิตร, อุตรดิตถ์) เพื่อดึงดูดลูกค้าจากทั่วภาคเหนือตอนล่าง",
    "Service-Oriented Design: ออกแบบการใช้งาน (UX) ให้เรียบง่ายและเข้าถึงข้อมูลสำคัญได้ไวที่สุด เหมาะสำหรับคนไข้หรือลูกค้าธุรกิจที่ต้องการความรวดเร็ว",
  ],

  // --- Core Features ---
  coreFeatures: [
    {
      title: "Appointment & Contact Sync",
      description:
        "ระบบจองนัดหมายหรือติดต่อสอบถามที่เชื่อมต่อตรงสู่ LINE หรืออีเมลบริษัท แจ้งเตือนทันที ไม่พลาดทุกโอกาสทางธุรกิจ",
      icon: "CalendarCheck",
    },
    {
      title: "Compliance & Security",
      description:
        "มาตรฐานความปลอดภัยระดับสูง รองรับ PDPA และการแสดงผลข้อมูลที่ถูกต้องตามระเบียบวิชาชีพ (สำหรับคลินิกและการแพทย์)",
      icon: "ShieldCheck",
    },
    {
      title: "Interactive Location Hub",
      description:
        "ปักหมุดธุรกิจบน Google Maps อย่างละเอียด พร้อมระบบนำทางที่แม่นยำสำหรับลูกค้าจากต่างพื้นที่",
      icon: "MapPin",
    },
  ],

  // --- Localized FAQs (7 Items) ---
  faqs: [
    {
      question: "ทำเว็บคลินิก ต้องระวังเรื่องกฎระเบียบอะไรบ้าง?",
      answer:
        "สำคัญมากครับ เว็บคลินิกต้องปฏิบัติตาม พรบ.สถานพยาบาล และระเบียบแพทยสภา ผมมีความเชี่ยวชาญในการจัดวางเนื้อหาให้ถูกต้อง ไม่โอ้อวดเกินจริง และติดตั้งระบบ Consent ตามกฎหมาย PDPA ให้ครบถ้วนครับ",
    },
    {
      question: "จ้างทำเว็บไซต์ที่พิษณุโลก นัดเจอคุยงานได้ไหม?",
      answer:
        "ได้แน่นอนครับ ผมยินดีเข้าไปคุยรายละเอียดที่คลินิก ออฟฟิศ หรือคาเฟ่ในตัวเมืองพิษณุโลก เพื่อรับโจทย์และวิเคราะห์ความต้องการหน้างานให้แม่นยำที่สุดครับ",
    },
    {
      question: "ใช้เวลากี่วันเสร็จ?",
      answer:
        "สำหรับเว็บไซต์ธุรกิจบริการหรือคลินิกมาตรฐาน ใช้เวลาประมาณ 14-21 วันครับ รวมขั้นตอนการออกแบบและติดตั้งระบบความปลอดภัยข้อมูลครับ",
    },
    {
      question: "ทำเว็บไซต์แล้ว จะช่วยให้คนไข้หรือลูกค้าเพิ่มขึ้นจริงไหม?",
      answer:
        "จริงครับ เพราะคนในภูมิภาคนี้มักค้นหาบริการที่น่าเชื่อถือผ่าน Google ก่อน ถ้าเว็บคุณดูเป็นมืออาชีพและติดอันดับต้นๆ โอกาสที่เขาจะเลือกคุณมากกว่าคู่แข่งย่อมสูงขึ้นชัดเจนครับ",
    },
    {
      question: "รองรับการเข้าใช้งานผ่านมือถือไหม?",
      answer:
        "100% ครับ ผมให้ความสำคัญกับ Mobile-First เพราะลูกค้ากว่า 90% ในพิษณุโลกเข้าเว็บผ่านสมาร์ทโฟน เว็บของคุณจะโหลดไวและสวยงามบนทุกหน้าจอครับ",
    },
    {
      question: "มีระบบนัดหมายออนไลน์ให้ด้วยไหม?",
      answer:
        "มีครับ เราสามารถทำตั้งแต่ระบบฟอร์มนัดหมายง่ายๆ ไปจนถึงระบบปฏิทินเช็คคิวว่าง เพื่อให้เจ้าหน้าที่หน้าเคาน์เตอร์ทำงานได้สะดวกขึ้นครับ",
    },
    {
      question: "มีค่าใช้จ่ายรายปีเท่าไหร่?",
      answer:
        "ปีแรกฟรีค่าโดเมนและโฮสติ้งครับ ปีต่อไปมีค่าดูแลรักษาประมาณ 3,000 - 5,000 บาท ขึ้นอยู่กับขนาดข้อมูล เพื่อให้เว็บไซต์ของคุณออนไลน์ได้เสถียรตลอด 24 ชั่วโมงครับ",
    },
  ],

  // --- Context Data ---
  localContext: {
    marketInsight:
      "ลูกค้าในพิษณุโลกและจังหวัดใกล้เคียงตัดสินใจจาก 'ความเชี่ยวชาญ' และ 'การยอมรับ' เว็บไซต์ที่ดูเป็นทางการและมีข้อมูลถูกต้องจะสร้างความได้เปรียบสูง",
    technicalApproach:
      "เน้น Local Entity Mapping เพื่อให้ธุรกิจบริการของคุณเป็นศูนย์กลางการค้นหาในเขตสี่แยกอินโดจีนและภาคเหนือตอนล่าง",
    localStrength:
      "เข้าใจบทบาทของพิษณุโลกที่เป็นศูนย์กลางการกระจายสินค้าและการแพทย์ พร้อมช่วยเรียบเรียงเนื้อหาให้ดูเป็นมืออาชีพในระดับวิชาชีพ",
    nicheIndustries: [
      "คลินิกเฉพาะทางและสถานพยาบาล",
      "ธุรกิจขนส่งและโลจิสติกส์ (Indochina Hub)",
      "สถาบันการศึกษาและศูนย์ฝึกอบรม",
      "โรงแรมและธุรกิจ MICE (สัมมนา/จัดเลี้ยง)",
    ],
    painPoints: [
      "ธุรกิจบริการขนาดใหญ่แต่ภาพลักษณ์เว็บไซต์ดูเก่า ไม่สมเกียรติองค์กร",
      "คนหาเบอร์ติดต่อหรือแผนที่ธุรกิจใน Google ไม่เจอ",
      "ต้องการระบบนัดหมายออนไลน์ที่เสถียรสำหรับคนทุกวัย",
    ],
    competitorLevel: "medium",

    socialProof: {
      rating: 5.0,
      reviewCount: 112,
      localClient: "คลินิกทันตกรรมพรีเมียม ในตัวเมืองพิษณุโลก",
    },
    regionalPricing: {
      startPrice: "12,900 บาท",
      timeline: "14-21 วัน",
    },
    localSuccessStory: {
      title: "Case Study: ธุรกิจโลจิสติกส์อินโดจีน",
      result:
        "ปรับปรุงเว็บไซต์ใหม่ทำให้ได้รับความเชื่อมั่นจากคู่ค้าระดับประเทศ และยอดติดต่อผ่านเว็บเพิ่มขึ้น 150% ใน 4 เดือน",
    },
    hyperLocalKeywords: [
      "รับทำเว็บไซต์ เมืองพิษณุโลก",
      "จ้างทำเว็บคลินิก วังทอง",
      "ทำ SEO ธุรกิจบริการ พิษณุโลก",
      "ปักหมุด Google Maps สี่แยกอินโดจีน",
    ],
  },

  // --- System Metadata ---
  priority: 92,
  districts: [
    "เมืองพิษณุโลก",
    "พรหมพิราม",
    "บางระกำ",
    "วังทอง",
    "นครไทย",
    "วัดโบสถ์",
    "บางกระทุ่ม",
  ],
  keywords: [
    "รับทำเว็บไซต์ พิษณุโลก",
    "จ้างทำเว็บไซต์",
    "ทำเว็บคลินิก พิษณุโลก",
    "ออกแบบเว็บไซต์บริษัท",
    "รับทำ SEO พิษณุโลก",
  ],
  coordinates: { lat: 16.8211, lng: 100.2659 },
};
```

### CONFIG: phuket.ts

`Path: constants/area-nodes/phuket.ts`

```typescript
/**
 * [SERVICE_NODE]: PHUKET_LUXURY_DESTINATION v18.0.0 (FULL_SYNC)
 * [STRATEGY]: Exclusive Luxury Branding | Global P-SEO | Hex Standard
 * [MARKET]: Phuket, Laguna, Patong, Rawai (Luxury Real Estate & Hospitality)
 */
import type { AreaNode } from "@/types";

export const phuketNode: AreaNode = {
  // --- Basic Identity ---
  slug: "phuket",
  province: "ภูเก็ต",
  templateSlug: "hotelresort", // ใช้แม่แบบ Hotel & Resort เพื่อเน้นงาน Visual ระดับ High-end

  title: "รับทำเว็บไซต์ ภูเก็ต | Digital Architecture สำหรับวิลล่าหรูและธุรกิจระดับพรีเมียม",
  description:
    "ยกระดับภาพลักษณ์ธุรกิจสู่ระดับสากลด้วยเว็บไซต์ที่มอบประสบการณ์ระดับ Ultra-Luxury โหลดไวจากทั่วโลกด้วย Edge Computing และเปลี่ยนผู้ชมให้เป็นลูกค้ากำลังซื้อสูง",

  longDescription:
    "ในตลาดที่มีการแข่งขันระดับโลกอย่างภูเก็ต เว็บไซต์ของคุณคือพนักงานต้อนรับคนแรกที่ลูกค้าจากยุโรป รัสเซีย หรือตะวันออกกลางจะได้สัมผัสครับ หากหน้าเว็บดูธรรมดาหรือโหลดช้า คุณอาจกำลังเสียโอกาสในดีลหลักล้านไปอย่างน่าเสียดาย " +
    "นายเอ็มซ่ามากส์ พร้อมเนรมิตเว็บไซต์ที่ไม่ได้มีดีแค่ความสวยงาม แต่ต้องสะท้อนถึงเอกลักษณ์ชั้นสูงและมอบความสะดวกสบายที่ไร้รอยต่อ (Seamless Experience) " +
    "เราเน้นการทำเว็บไซต์ที่รองรับภาษาต่างประเทศสมบูรณ์แบบ โหลดรูปภาพความละเอียดสูงได้รวดเร็วสายฟ้าแลบจากทุกมุมโลก และวางโครงสร้าง SEO เชิงลึกเพื่อให้ธุรกิจวิลล่าหรูหรือบริการระดับพรีเมียมของคุณครองอันดับหนึ่งบน Google Global",

  // --- SEO Metadata ---
  seoTitle:
    "รับทำเว็บไซต์ ภูเก็ต ออกแบบเว็บวิลล่าหรู โรงแรม 5 ดาว ติดหน้าแรก Google Global - เอ็มซ่ามากส์",
  seoDescription:
    "จ้างทำเว็บไซต์ภูเก็ต มาตรฐานสากล เน้นดีไซน์ Minimal Luxury สำหรับอสังหาริมทรัพย์และท่องเที่ยวพรีเมียม รองรับภาษาอังกฤษและรัสเซีย ติด SEO ระดับโลกเพื่อดึงดูดลูกค้ากำลังซื้อสูง",

  // --- Visual & Theme (Midnight & Champagne Gold: Global Premium) ---
  heroImage: "/images/areas/phuket-node.webp",
  theme: {
    mode: "dark",
    primary: "#d4af37", // Champagne Gold (ทองแชมเปญ)
    secondary: "#1e293b", // Midnight Blue
    background: "#020617", // Rich Navy Black
    foreground: "#f8fafc", // Ivory White
    accent: "#f59e0b", // Amber 500
    gradient: "from-[#d4af37]/10 via-transparent to-transparent",
    radius: "2px", // ความมนเล็กน้อยให้ความรู้สึกคมชัดแบบโมเดิร์น
  },

  // --- Pricing Strategy (Global Standard) ---
  price: "25,000",
  priceValue: 25000,
  currency: "THB",
  unit: "เริ่มต้น / โปรเจกต์",

  // --- Trust Signals ---
  clientTrust:
    "World-Class Authority: ผู้อยู่เบื้องหลัง Digital Platform ของโครงการพูลวิลล่าหรูและยอร์ชคลับระดับแนวหน้าในภูเก็ต",

  // --- Localized Benefits ---
  benefits: [
    "Global Speed Performance: ใช้เทคโนโลยี Edge Computing เพื่อให้ลูกค้าจากลอนดอน มอสโก หรือดูไบ เปิดเว็บไซต์ของคุณได้รวดเร็วเหมือนอยู่ข้างบ้าน",
    "Prestige Branding: งานดีไซน์ที่คัดสรรมาเพื่อดึงดูดลูกค้าเกรด Ultra-High-Net-Worth (UHNW) โดยเฉพาะ เน้นความเรียบหรูและน่าเชื่อถือในระดับสากล",
    "Direct Booking Maximization: ระบบที่ช่วยเพิ่มยอดจองตรงโดยไม่ผ่านเอเย่นต์ ช่วยให้คุณรักษาผลกำไรได้เต็มเม็ดเต็มหน่วยและครอบครองข้อมูลลูกค้าไว้เอง",
  ],

  // --- Core Features ---
  coreFeatures: [
    {
      title: "Immersive Visual Gallery",
      description:
        "ระบบเรนเดอร์ภาพและวิดีโอความละเอียดสูงที่ลื่นไหล เพื่อโชว์บรรยากาศที่พักหรือบริการให้สมจริงและน่าหลงใหลที่สุด",
      icon: "Camera",
    },
    {
      title: "Multi-Language & Currency",
      description:
        "รองรับการแสดงผลหลายภาษาและการแปลงค่าเงินแบบ Real-time เพื่ออำนวยความสะดวกแก่ลูกค้าจากทั่วทุกมุมโลก",
      icon: "Globe",
    },
    {
      title: "Advanced Global SEO",
      description:
        "วางรากฐานการค้นหาภาษาอังกฤษและภาษาเป้าหมายอื่นๆ เพื่อดักจับ Traffic คุณภาพจากกลุ่มเป้าหมายในต่างประเทศ",
      icon: "TrendingUp",
    },
  ],

  // --- Localized FAQs (7 Items) ---
  faqs: [
    {
      question: "ทำไมราคาทำเว็บไซต์ในภูเก็ตถึงสูงกว่าฟรีแลนซ์ทั่วไป?",
      answer:
        "เพราะตลาดภูเก็ตคือตลาดระดับโลกครับ เราไม่ได้แค่ทำเว็บให้สวย แต่เราวางโครงสร้างเชิงวิศวกรรมที่รองรับผู้เข้าชมจากต่างประเทศ (Global Traffic) และระบบความปลอดภัยขั้นสูง ซึ่งคุ้มค่ากว่ามากเมื่อเทียบกับมูลค่าดีลอสังหาฯ หรือที่พักระดับพรีเมียมของคุณครับ",
    },
    {
      question: "ลูกค้าต่างชาติจะเปิดเว็บได้ไวไหม ถ้าเซิร์ฟเวอร์อยู่ในไทย?",
      answer:
        "ไม่ต้องกังวลครับ ผมใช้ระบบ Cloud ระดับโลกและ Content Delivery Network (CDN) กระจายข้อมูลไปทั่วโลก ลูกค้าจากยุโรปหรือรัสเซียจะเปิดเว็บคุณได้ไวเท่ากับคนในไทยแน่นอนครับ",
    },
    {
      question: "ช่วยดูแลเรื่องการเขียนคำโฆษณาภาษาอังกฤษด้วยไหม?",
      answer:
        "ในแพ็กเกจพรีเมียม ผมทำงานร่วมกับ Copywriter มืออาชีพที่เชี่ยวชาญตลาด Luxury เพื่อเกลาเนื้อหาภาษาอังกฤษให้ดูแพงและโน้มน้าวใจลูกค้าต่างชาติได้จริงครับ",
    },
    {
      question: "รองรับการทำ SEO ในตลาดรัสเซียหรือจีนไหม?",
      answer:
        "รองรับครับ เราเข้าใจอัลกอริทึมการค้นหาที่แตกต่างกันในแต่ละภูมิภาค และสามารถวางโครงสร้าง Metadata ให้ตอบโจทย์เครื่องมือค้นหาในตลาดนั้นๆ ได้โดยเฉพาะครับ",
    },
    {
      question: "สามารถนัดคุยงานที่ลากูน่าหรือเชิงทะเลได้ไหม?",
      answer:
        "ยินดีมากครับ ผมพร้อมเดินทางเข้าไปพบเพื่อรับโจทย์และดูบรรยากาศโครงการจริงในเขตภูเก็ต เพื่อให้นำเสนอจุดเด่นของธุรกิจออกมาได้แม่นยำที่สุดครับ",
    },
    {
      question: "เว็บไซต์รองรับการเชื่อมต่อกับระบบ Property Management (PMS) ไหม?",
      answer:
        "รองรับครับ เราสามารถเขียน API เชื่อมต่อกับระบบจัดการโรงแรมหรือวิลล่าชั้นนำ เพื่อให้สต็อกห้องพักและราคาอัปเดตตรงกันโดยอัตโนมัติครับ",
    },
    {
      question: "หลังทำเสร็จ มีบริการดูแลต่อเนื่องอย่างไร?",
      answer:
        "เรามีประกันดูแลระบบฟรี 6 เดือนครับ และมีบริการ Maintenance รายปีที่ครอบคลุมการอัปเดตความปลอดภัย และการปรับจูนความเร็วให้คงที่ตลอดเวลาครับ",
    },
  ],

  // --- Context Data ---
  localContext: {
    marketInsight:
      "ลูกค้ากลุ่ม Luxury ในภูเก็ตตัดสินใจด้วย 'อารมณ์' และ 'ความเชื่อมั่น' เว็บไซต์ที่มอบประสบการณ์แบบ Seamless จะปิดการขายได้สูงกว่าค่าเฉลี่ยถึง 3 เท่า",
    technicalApproach:
      "เน้นสถาปัตยกรรมแบบ Edge Computing และการทำ Image Optimization ขั้นสูงเพื่อรองรับ Global Traffic และความเร็วระดับมิลลิวินาที",
    localStrength:
      "เข้าใจรสนิยมแบบ World-class และความต้องการของกลุ่มพรีเมียม พร้อมเป็นที่ปรึกษาในการปั้นแบรนด์ให้ดู 'แพง' ในระดับสากล",
    nicheIndustries: [
      "วิลล่าหรูและอสังหาริมทรัพย์พรีเมียม",
      "ธุรกิจเช่ายอร์ชและทัวร์ทะเลส่วนตัว",
      "โรงแรมระดับ 5 ดาวและ Wellness Retreat",
      "ร้านอาหาร Fine Dining และบีชคลับ",
    ],
    painPoints: [
      "ภาพลักษณ์เว็บไซต์ไม่สมราคาดีลหลักล้าน ทำให้เสียความน่าเชื่อถือ",
      "เว็บโหลดช้ามากสำหรับลูกค้าต่างชาติที่ต้องการความรวดเร็ว",
      "การทำ SEO ภาษาอังกฤษที่ไม่เห็นผลในตลาดต่างประเทศ",
    ],
    competitorLevel: "high",

    socialProof: {
      rating: 5.0,
      reviewCount: 215,
      localClient: "กลุ่มวิลล่าหรูระดับ Ultra-Luxury ย่านเชิงทะเล",
    },
    regionalPricing: {
      startPrice: "25,000 บาท",
      timeline: "21-45 วัน",
    },
    localSuccessStory: {
      title: "Case Study: พูลวิลล่าหรูเชิงทะเล",
      result:
        "เพิ่มยอดจองตรง (Direct Booking) จากกลุ่มลูกค้ายุโรปได้มากกว่า 400% ภายใน 1 ฤดูกาลท่องเที่ยวหลังปรับปรุงเว็บไซต์",
    },
    hyperLocalKeywords: [
      "Phuket Luxury Web Design",
      "จ้างทำเว็บวิลล่า เชิงทะเล",
      "รับทำ SEO ภาษาอังกฤษ ภูเก็ต",
      "ทำเว็บไซต์โรงแรม ลากูน่า",
    ],
  },

  // --- System Metadata ---
  priority: 97,
  districts: ["ป่าตอง", "กะรน", "ลากูน่า", "ราไวย์", "ไม้ขาว", "ฉลอง", "เชิงทะเล"],
  keywords: [
    "รับทำเว็บไซต์ ภูเก็ต",
    "Phuket Web Design",
    "ทำเว็บวิลล่าหรู",
    "จ้างทำเว็บไซต์โรงแรม",
    "รับทำ SEO ภูเก็ต",
    "บริษัทรับทำเว็บไซต์",
  ],
  coordinates: { lat: 7.8804, lng: 98.3923 },
};
```

### CONFIG: ranong.ts

`Path: constants/area-nodes/ranong.ts`

```typescript
/**
 * [SERVICE_NODE]: RANONG_WELLNESS_HUB v18.1.3 (FINAL_STRICT_COMPLIANT)
 * [STRATEGY]: Andaman Gateway | Thermal-Hydro Therapy
 */

import type { AreaNode } from "@/types";

export const ranongNode: AreaNode = {
  slug: "ranong",
  province: "ระนอง",
  templateSlug: "local-authority",
  title: "รับทำเว็บไซต์ระนอง - สร้าง Digital Infrastructure สู่เมือง Smart Wellness",
  description:
    "ยกระดับแพลตฟอร์มดิจิทัลจังหวัดระนอง รองรับยุทธศาสตร์ 'Wellness City' เชื่อมโยงระบบบริการประชาชน (E-Service) และฐานข้อมูลการค้าชายแดนไทย-เมียนมา ด้วยมาตรฐานความปลอดภัยสูงสุด",

  // [FIXED]: Added Missing Required SEO Properties
  seoTitle: "รับทำเว็บไซต์ระนอง อบต. เทศบาล - Wellness City & Border Trade Hub",
  seoDescription:
    "บริการทำเว็บไซต์หน่วยงานราชการระนอง รองรับ 3 ภาษา (ไทย/อังกฤษ/เมียนมา) เชื่อมโยงการท่องเที่ยวเชิงสุขภาพและการค้าชายแดน มาตรฐาน ITA",

  heroImage: "/images/areas/ranong-hotspring.webp",
  theme: {
    mode: "light",
    primary: "#006064",
    secondary: "#BF360C",
    background: "#F8FAFC",
    foreground: "#1E293B",
    accent: "#00838F",
    gradient: "bg-gradient-to-br from-[#006064]/05 to-[#BF360C]/05",
  },

  benefits: [
    "Cross-Border Multi-language: ระบบจัดการเนื้อหารองรับ Font ตระกูลเมียนมา (Zawgyi/Unicode) เพื่อรองรับแรงงานและเศรษฐกิจชายแดนโดยเฉพาะ",
    "Offline-First Hydration: สถาปัตยกรรมที่ช่วยให้เว็บเปิดได้ทันทีแม้ในจุดอับสัญญาณระหว่างหุบเขา หรือช่วงฝนตกหนัก (Rainy-Day Optimization)",
    "ITA-Compliant Architecture: โครงสร้างข้อมูลที่ถูกออกแบบมาเพื่อการประเมินคุณธรรมและความโปร่งใสในระดับ 'AA' โดยเฉพาะ",
  ],

  coreFeatures: [
    {
      title: "Mineral Water Hub",
      description: "Dashboard ข้อมูลแหล่งน้ำแร่และการจองคิวบริการสุขภาพแบบดิจิทัล",
      icon: "ThermometerIcon",
    },
    {
      title: "Andaman Logistics Link",
      description: "ระบบข่าวสารจุดผ่านแดนและการเดินเรือสินค้าข้ามเกาะแบบ Real-time",
      icon: "ShipIcon",
    },
    {
      title: "SEC One-Stop",
      description: "ระบบขอรับบริการออนไลน์ตามนโยบายระเบียงเศรษฐกิจภาคใต้ (SEC)",
      icon: "ShieldCheckIcon",
    },
  ],

  localContext: {
    marketInsight:
      "ระนองมีประชากรแฝงและนักท่องเที่ยวคุณภาพสูง (Health Enthusiasts) เว็บไซต์ท้องถิ่นต้องทำหน้าที่เป็น 'Digital Concierge' มากกว่าแค่บอร์ดประชาสัมพันธ์",

    technicalApproach:
      "ใช้ระบบ Next.js Static Site Generation (SSG) เพื่อลดภาระการประมวลผลของ Server ในช่วงพายุเข้า ช่วยให้ประชาชนเข้าถึงข้อมูลฉุกเฉินได้เสถียรที่สุด",

    localStrength:
      "ความเป็น 'เมืองแร่นอง' และ 'น้ำแร่ร้อน' คือสัญลักษณ์ความมั่งคั่งใหม่ (Wellness Wealth) ที่ต้องสื่อสารผ่าน Typography ที่ดูพรีเมียม",

    nicheIndustries: [
      "สมาคมธุรกิจการท่องเที่ยวจังหวัดระนอง",
      "ด่านศุลกากรระนอง (Border Trade Connectivity)",
      "กลุ่มวิสาหกิจชุมชนน้ำแร่ร้อนพรรั้ง/รักษะวาริน",
      "อุตสาหกรรมแปรรูปอาหารทะเลแช่แข็ง",
    ],

    painPoints: [
      "ข้อมูลท่องเที่ยวหน้าฝนไม่ชัดเจน (Rainy Season Uncertainty)",
      "เว็บราชการเดิมไม่รองรับภาษาเพื่อนบ้าน (Cross-border barrier)",
      "ระบบจองคิวบ่อน้ำแร่ยังเป็นระบบ Manual",
    ],

    competitorLevel: "low", // Correct literal type

    socialProof: {
      rating: 4.9,
      reviewCount: 41,
      localClient: "โครงการขับเคลื่อนเศรษฐกิจชายแดนระนอง",
    },

    hyperLocalKeywords: [
      "ทำเว็บไซต์ อบต.บางหริ้น",
      "ออกแบบเว็บเทศบาลเมืองระนอง",
      "เว็บราชการอำเภอกระบุรี",
      "ระบบจองบ่อน้ำแร่ร้อนระนอง",
    ],
  },

  priority: 92,
  price: "16,500",
  priceValue: 16500,
  currency: "THB",
  unit: "Starting",
  districts: ["เมืองระนอง", "ละอุ่น", "กะเปอร์", "กระบุรี", "สุขสำราญ"],

  // [FIXED]: Added Missing Required Property
  keywords: [
    "รับทำเว็บไซต์ระนอง",
    "Web Design Ranong",
    "Wellness Tourism Platform",
    "เว็บราชการภาษาพม่า",
    "ระบบจองคิวน้ำแร่",
  ],

  coordinates: { lat: 9.9528, lng: 98.6084 },
};
```

### CONFIG: sukhothai.ts

`Path: constants/area-nodes/sukhothai.ts`

```typescript
/**
 * [SERVICE_NODE]: SUKHOTHAI_HERITAGE_STORYTELLER v18.0.0 (ACCESSIBILITY_PATCHED)
 * [STRATEGY]: Premium Branding | Aesthetic Storytelling | Hex Standard
 */
import type { AreaNode } from "@/types";

export const sukhothaiNode: AreaNode = {
  slug: "sukhothai",
  province: "สุโขทัย",
  templateSlug: "local-authority",
  title: "รับทำเว็บไซต์ สุโขทัย | ออกแบบเว็บไซต์ให้งานฝีมือดูพรีเมียม ติดหน้าแรก Google",
  description:
    "เปลี่ยนงานหัตถศิลป์และธุรกิจท่องเที่ยวสุโขทัย ให้ดูสวยแพงและน่าเชื่อถือ ด้วยเว็บไซต์ที่บอกเล่าเรื่องราวแบรนด์อย่างมีรสนิยม",
  longDescription:
    "สุโขทัยคือเมืองแห่งมนต์เสน่ห์และงานฝีมือระดับครู หัวใจสำคัญคือการทำให้ลูกค้า 'เห็นคุณค่า' ก่อนเห็นราคา",
  seoTitle: "รับทำเว็บไซต์ สุโขทัย ออกแบบเว็บเครื่องเงิน สังคโลก ที่พักพรีเมียม - เอ็มซ่ามากส์",
  seoDescription:
    "จ้างทำเว็บไซต์สุโขทัย ครบวงจร เน้นดีไซน์สวยงามเพิ่มมูลค่าสินค้า OTOP และธุรกิจท่องเที่ยว",
  heroImage: "/images/areas/sukhothai-node.webp",
  theme: {
    mode: "light",
    primary: "#8b6b2d",
    secondary: "#5c4033",
    background: "#fdfbf7",
    foreground: "#2a1b0f",
    accent: "#d4af37",
    gradient: "from-[#8b6b2d]/10 via-transparent to-transparent",
  },
  price: "10,500",
  priceValue: 10500,
  currency: "THB",
  unit: "เริ่มต้น / โปรเจกต์",
  clientTrust: "Aesthetic Authority: เบื้องหลังเว็บไซต์แบรนด์เครื่องเงินโบราณในเขตมรดกโลกสุโขทัย",
  benefits: [
    "Aesthetic Storytelling: เปลี่ยนข้อมูลสินค้าที่แห้งแล้งให้เป็นเรื่องราวที่น่าหลงใหล",
    "Luxury Positioning: ปรับตำแหน่งแบรนด์ให้เข้าถึงกลุ่มลูกค้าที่มีกำลังซื้อสูง",
    "Search Excellence: วางโครงสร้าง SEO เจาะจงคีย์เวิร์ดทรงคุณค่า",
  ],
  coreFeatures: [
    {
      title: "Heritage Visual Showcase",
      description: "ระบบแกลเลอรี่ภาพความละเอียดสูงที่เน้นรายละเอียดงานฝีมือ",
      icon: "Image",
    },
    {
      title: "Editorial Typography",
      description: "การจัดวางฟอนต์ในสไตล์นิตยสารพรีเมียม",
      icon: "FileText",
    },
    {
      title: "Direct Contact Gateway",
      description: "ปุ่มติดต่อและจองที่ชัดเจน เชื่อมต่อตรงกับ LINE",
      icon: "Zap",
    },
  ],
  faqs: [
    {
      question: "ทำไมสินค้า OTOP สุโขทัยถึงต้องมีเว็บไซต์เฉพาะทาง?",
      answer:
        "เพื่อสร้างโลกของแบรนด์ขึ้นมา ทำให้ลูกค้าเข้าใจและยอมรับในราคาพรีเมียมได้ง่ายขึ้นครับ",
    },
    {
      question: "นัดเจอเพื่อคุยรายละเอียดได้ไหม?",
      answer: "ยินดีมากครับ ผมสามารถนัดพูดคุยงานในเขตเมืองเก่าได้เลยครับ",
    },
  ],
  localContext: {
    marketInsight: "ลูกค้ากลุ่มพรีเมียมที่ซื้องานฝีมือสุโขทัยต้องการ 'Story' และ 'Aesthetic'",
    technicalApproach: "เน้นการทำ Image Showcase ที่มีความคมชัดสูงและการจัดวาง Typography ที่ดูแพง",
    localStrength: "เราเข้าใจคุณค่าของงานศิลปะท้องถิ่น พร้อมช่วยเรียบเรียงเนื้อหาให้ดูร่วมสมัย",
    nicheIndustries: ["เครื่องเงินศรีสัชนาลัย", "เครื่องสังคโลก", "บูทีคโฮเต็ล"],
    painPoints: ["สินค้าพรีเมียมแต่ภาพลักษณ์ดูธรรมดา", "ขาดความน่าเชื่อถือในการขยายตลาด"],
    competitorLevel: "low",
    socialProof: { rating: 4.9, reviewCount: 45, localClient: "แบรนด์เครื่องเงินโบราณชื่อดัง" },
    regionalPricing: { startPrice: "10,500 บาท", timeline: "10-14 วัน" },
    localSuccessStory: {
      title: "Case Study: แบรนด์สังคโลกเมืองเก่า",
      result: "ยอดขายคอลเลกชันพิเศษพุ่งขึ้น 200%",
    },
    hyperLocalKeywords: ["รับทำเว็บ ศรีสัชนาลัย", "ออกแบบเว็บเครื่องเงิน สุโขทัย"],
  },
  priority: 84,
  districts: ["เมืองสุโขทัย", "ศรีสัชนาลัย", "กงไกรลาศ", "สวรรคโลก"],
  keywords: ["รับทำเว็บไซต์ สุโขทัย", "จ้างทำเว็บไซต์"],
  coordinates: { lat: 17.0078, lng: 99.8235 },
};
```

### CONFIG: surat-thani.ts

`Path: constants/area-nodes/surat-thani.ts`

```typescript
/**
 * [SERVICE_NODE]: SURAT_THANI_INTEGRATED_HUB v18.0.0 (ACCESSIBILITY_PATCHED)
 * [STRATEGY]: Integrated Hub | Smart Tourism & Agriculture | Hex Standard
 * [MARKET]: Municipalities, SAOs, and Smart Farmers in Surat Thani
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { AreaNode } from "@/types";

export const suratThaniNode: AreaNode = {
  // --- Basic Identity ---
  slug: "surat-thani",
  province: "สุราษฎร์ธานี",
  templateSlug: "local-authority",
  title: "รับทำเว็บไซต์สุราษฎร์ธานี - ยกระดับท้องถิ่นสู่ Smart Tourism & Agriculture",
  description:
    "บริการออกแบบเว็บไซต์หน่วยงานราชการในสุราษฎร์ธานี รองรับปริมาณนักท่องเที่ยวหลักล้าน เชื่อมโยงเศรษฐกิจพืชเศรษฐกิจ (ยาง/ปาล์ม) และระบบจัดการสิ่งแวดล้อม",

  longDescription:
    "สุราษฎร์ธานี 'เมืองร้อยเกาะ' คือศูนย์กลางเศรษฐกิจและท่องเที่ยวที่สำคัญที่สุดของภาคใต้ตอนบน นายเอ็มซ่ามากส์ เข้าใจความหลากหลายของพื้นที่ " +
    "ตั้งแต่เขตเทศบาลนครเกาะสมุยไปจนถึงพื้นที่เกษตรกรรมในพุนพินและไชยา เราจึงออกแบบเว็บไซต์ที่เน้นการบริหารจัดการข้อมูลขนาดใหญ่ " +
    "รองรับการใช้งานจากนักท่องเที่ยวทั่วโลกและประชาชนในพื้นที่ ด้วยสถาปัตยกรรม Next.js ที่โหลดไวและปลอดภัยสูงสุด เพื่อสร้างรากฐานดิจิทัลที่ยั่งยืนให้กับท้องถิ่น",

  // --- SEO Metadata ---
  seoTitle: "รับทำเว็บไซต์สุราษฎร์ธานี อบจ. เทศบาล - เอ็มซ่ามากส์ พัฒนาเว็บราชการมาตรฐาน ITA",
  seoDescription:
    "ทำเว็บไซต์ อบต. เทศบาล สุราษฎร์ธานี เกาะสมุย พะงัน ระบบ E-Service ชำระภาษีออนไลน์ และฐานข้อมูลเกษตรกร Smart Farmer มาตรฐานความปลอดภัยสูง รองรับ PDPA",

  // --- Visual & Theme (Srivijaya Gold & Deep Ocean) ---
  heroImage: "/images/areas/surat-ratchaprapha.webp",
  theme: {
    mode: "light",
    /** * [ACCESSIBILITY_PATCH]: ปรับจาก #FBC02D (Ratio 1.66) เป็น #a16207 (Yellow 900)
     * เพื่อให้ผ่านเกณฑ์ WCAG AA (> 4.5:1) เมื่อแสดงผลบนพื้นหลังสีขาว (#FFFFFF)
     */
    primary: "#a16207",
    secondary: "#0277bd",
    background: "#ffffff",
    foreground: "#212121",
    accent: "#15803d",
    gradient: "from-[#a16207]/10 via-transparent to-transparent",
  },

  // --- Pricing Strategy ---
  price: "18,900",
  priceValue: 18900,
  currency: "THB",
  unit: "เริ่มต้น / โปรเจกต์",

  // --- Trust Signals ---
  clientTrust:
    "International Standard: รองรับมาตรฐานความปลอดภัยข้อมูล (PDPA) สำหรับเมืองท่องเที่ยวระดับสากล",

  // --- Localized Benefits ---
  benefits: [
    "High-Traffic Resilience: Server ประสิทธิภาพสูงรองรับปริมาณนักท่องเที่ยวและประชาชนที่เข้าใช้งานพร้อมกันจำนวนมากในช่วงฤดูกาลท่องเที่ยว",
    "Digital Service Integration: ระบบ E-Service และระบบจองคิวออนไลน์ ช่วยลดความแออัด ณ สำนักงานเทศบาลและอำนวยความสะดวกให้ประชาชน 24 ชม.",
    "Smart Agriculture Data: โมดูลฐานข้อมูลเกษตรกรและรายงานราคากลางพืชเศรษฐกิจ (ยาง/ปาล์ม) เพื่อสนับสนุนกลุ่มเกษตรกรแปลงใหญ่ในพื้นที่",
  ],

  // --- Core Features ---
  coreFeatures: [
    {
      title: "Waste Management",
      description:
        "ระบบรับเรื่องร้องเรียนและแจ้งจุดเก็บขยะผ่านพิกัด GPS จำเป็นอย่างยิ่งสำหรับพื้นที่เกาะและแหล่งท่องเที่ยวธรรมชาติ",
      icon: "Trash2",
    },
    {
      title: "Tourism Safety Hub",
      description:
        "ศูนย์รวมข้อมูลความปลอดภัย จุดปฐมพยาบาล และเบอร์ฉุกเฉิน Multilingual สำหรับนักท่องเที่ยวต่างชาติ",
      icon: "ShieldCheck",
    },
    {
      title: "Logistic Connectivity",
      description:
        "ระบบแสดงข้อมูลเส้นทางเดินเรือ ตารางรถไฟ และเที่ยวบิน เชื่อมโยงการเดินทางจากฝั่งสู่เกาะแบบไร้รอยต่อ",
      icon: "Truck",
    },
  ],

  // --- Localized FAQs (7 Items) ---
  faqs: [
    {
      question: "ระบบจองคิวออนไลน์สามารถเชื่อมต่อกับงานทะเบียนได้ไหม?",
      answer:
        "ได้ครับ ระบบสามารถจัดคิวแยกตามประเภทงานบริการ ทำให้เจ้าหน้าที่บริหารจัดการทรัพยากรและลดระยะเวลาการรอของประชาชนได้จริงครับ",
    },
    {
      question: "เว็บไซต์รองรับภาษาอังกฤษและจีนเพื่อนักท่องเที่ยวไหม?",
      answer:
        "รองรับครับ เรามีระบบ Multi-language ที่ออกแบบมาเพื่อธุรกิจท่องเที่ยวและหน่วยงานในสมุย/พะงันโดยเฉพาะครับ",
    },
    {
      question: "การจัดการข้อมูลขยะบนเกาะทำงานอย่างไร?",
      answer:
        "ประชาชนสามารถถ่ายรูปและระบุพิกัดผ่านมือถือ ข้อมูลจะถูกส่งเข้า Dashboard ของเจ้าหน้าที่เพื่อวางแผนการเก็บขนได้ทันทีครับ",
    },
    {
      question: "รองรับการประเมิน ITA ภาครัฐหรือไม่?",
      answer:
        "เราออกแบบโครงสร้างเว็บไซต์ตามเกณฑ์ OIT อย่างเคร่งครัด เพื่อให้หน่วยงานได้รับคะแนนการประเมินในระดับสูงครับ",
    },
    {
      question: "มีระบบแจ้งเตือนมรสุมหรือประกาศจากเจ้าท่าไหม?",
      answer:
        "สามารถติดตั้งระบบ Notification หรือ Banner แจ้งเตือนสถานการณ์ด่วนที่หน้าแรกของเว็บไซต์ได้ทันทีครับ",
    },
    {
      question: "เกษตรกรสามารถเช็คราคากลางยางพาราได้จากที่ไหน?",
      answer:
        "เรามีระบบ Smart Farmer ดึงข้อมูลราคากลางแบบรายวันมาแสดงผลอัตโนมัติ ช่วยให้เกษตรกรตัดสินใจขายผลผลิตได้แม่นยำขึ้นครับ",
    },
    {
      question: "ความปลอดภัยของข้อมูลประชาชน (PDPA) มั่นใจได้แค่ไหน?",
      answer:
        "ระบบใช้การเข้ารหัสข้อมูลระดับสูงและมีการตั้งค่านโยบายความเป็นส่วนตัวตามกฎหมาย PDPA ทุกประการครับ",
    },
  ],

  // --- Context Data ---
  localContext: {
    marketInsight:
      "สุราษฎร์ธานีมีความหลากหลายของข้อมูลสูงมาก ตั้งแต่เมืองท่องเที่ยวระดับโลกไปจนถึงพื้นที่เกษตรกรรม แพลตฟอร์มจึงต้องยืดหยุ่นและรองรับความต้องการที่ต่างกัน",
    technicalApproach:
      "ใช้ Cloud Infrastructure พร้อมระบบ CDN เพื่อการเข้าถึงจากต่างประเทศที่รวดเร็ว และเน้นระบบ Security ป้องกันการโจมตีทางไซเบอร์",
    localStrength:
      "เราเข้าใจบริบทของเมืองท่องเที่ยวชายฝั่งและระบบนิเวศของเกษตรกรพืชเศรษฐกิจ ทำให้เราออกแบบฟังก์ชันที่ใช้งานได้จริงไม่ใช่แค่สวยงาม",
    nicheIndustries: [
      "เทศบาลนครเกาะสมุยและเทศบาลเมืองในพื้นที่",
      "อบต. แหล่งท่องเที่ยว (พะงัน/เต่า)",
      "กลุ่มสหกรณ์ปาล์มน้ำมันและยางพารา",
      "วิสาหกิจชุมชนประมงและหอยนางรม",
    ],
    painPoints: [
      "การจัดการขยะล้นในพื้นที่ท่องเที่ยวเกาะ",
      "ความซับซ้อนของการสื่อสารข้อมูลการเดินทางเชื่อมต่อ",
      "ช่องทางการสื่อสารกับนักท่องเที่ยวต่างชาติที่ยังไม่เป็นระบบ",
    ],
    competitorLevel: "high",

    socialProof: {
      rating: 4.9,
      reviewCount: 58,
      localClient: "โครงการ Digital Transformation ท้องถิ่น สุราษฎร์ธานี",
    },
    regionalPricing: {
      startPrice: "18,900 บาท",
      timeline: "25-30 วัน",
    },
    localSuccessStory: {
      title: "Smart Island Governance",
      result:
        "ช่วยให้หน่วยงานลดปริมาณเรื่องร้องเรียนที่ค้างคาได้ 50% ด้วยระบบ Tracking สถานะแบบเรียลไทม์",
    },
    hyperLocalKeywords: [
      "ทำเว็บไซต์สมุย",
      "ออกแบบเว็บ อบต.พุนพิน",
      "ระบบ E-Service สุราษฎร์ธานี",
      "จ้างทำเว็บราชการดอนสัก",
    ],
  },

  // --- System Metadata ---
  priority: 90,
  districts: [
    "เมืองสุราษฎร์ธานี",
    "เกาะสมุย",
    "เกาะพะงัน",
    "พุนพิน",
    "ดอนสัก",
    "กาญจนดิษฐ์",
    "ไชยา",
    "บ้านนาสาร",
  ],
  keywords: [
    "รับทำเว็บไซต์เกาะสมุย",
    "Web Design Surat Thani",
    "ระบบจัดการขยะออนไลน์",
    "Smart Farming สุราษฎร์",
    "ITA ภาครัฐ",
  ],
  coordinates: { lat: 9.1389, lng: 99.33 },
};
```

### CONFIG: tak.ts

`Path: constants/area-nodes/tak.ts`

```typescript
/**
 * [SERVICE_NODE]: TAK_MAESOT_GATEWAY v18.0.0 (FULL_SYNC)
 * [STRATEGY]: Corporate Authority | International Logistics | Hex Standard
 * [MARKET]: Mae Sot, Tak City, Border Trade Special Economic Zone
 */
import type { AreaNode } from "@/types";

export const takNode: AreaNode = {
  // --- Basic Identity ---
  slug: "tak",
  province: "ตาก",
  templateSlug: "corporate", // เน้นภาพลักษณ์บริษัทขนส่งและชิปปิ้งระดับสากล
  title: "รับทำเว็บไซต์ ตาก แม่สอด | ออกแบบเว็บธุรกิจขนส่งและนำเข้า-ส่งออก ติดหน้าแรก Google",
  description:
    "ยกระดับบริษัทชิปปิ้งและโรงงานในเขตเศรษฐกิจพิเศษแม่สอดให้ดูโปรระดับสากล สร้างความน่าเชื่อถือให้คู่ค้าต่างชาติมั่นใจด้วยเว็บไซต์มาตรฐาน Enterprise",

  longDescription:
    "แม่สอดและจังหวัดตากคือจุดยุทธศาสตร์การค้าชายแดนที่สำคัญที่สุดของไทยครับ ในโลกของการค้าระหว่างประเทศ 'ความน่าเชื่อถือ' คือใบเบิกทางเดียวที่ตัดสินว่าคุณจะได้รับดีลใหญ่หรือไม่ " +
    "หากธุรกิจขนส่งหรือชิปปิ้งของคุณยังไม่มีเว็บไซต์ที่แสดงโปรไฟล์อย่างมืออาชีพ คุณกำลังเสียโอกาสให้คู่แข่งที่มีตัวตนบน Google ชัดเจนกว่า " +
    "นายเอ็มซ่ามากส์ พร้อมช่วยเปลี่ยนภาพลักษณ์ธุรกิจของคุณให้ดูน่าเกรงขามและมั่นคง เราเน้นการทำเว็บไซต์ที่โชว์ศักยภาพการบริการ (Credentials) พร้อมวางรากฐาน SEO ให้คู่ค้าทั่วโลกค้นหาคุณเจอ เพื่อให้ธุรกิจของคุณเป็นเบอร์หนึ่งในเขตเศรษฐกิจพิเศษตากครับ",

  // --- SEO Metadata ---
  seoTitle:
    "รับทำเว็บไซต์ ตาก แม่สอด ออกแบบเว็บชิปปิ้งและโลจิสติกส์ ติดหน้าแรก Google - เอ็มซ่ามากส์",
  seoDescription:
    "จ้างทำเว็บไซต์จังหวัดตาก และแม่สอด ครบวงจร เน้นดีไซน์ที่ดูน่าเชื่อถือสำหรับธุรกิจ Logistics และนำเข้า-ส่งออก รองรับหลายภาษา ช่วยให้บริษัทติดหน้าแรก Google และปิดดีลธุรกิจระดับสากลได้ง่ายขึ้น",

  // --- Visual & Theme (Forest Industrial: Emerald/Slate) ---
  heroImage: "/images/areas/tak-node.webp",
  theme: {
    mode: "light",
    primary: "#065f46", // Emerald 800 (เขียวเข้ม - ความมั่งคั่งชายแดน)
    secondary: "#1e293b", // Slate 800 (เทาเข้ม - ความมั่นคง)
    background: "#f0fdf4", // Emerald 50 (สะอาด สบายตา)
    foreground: "#022c22", // Emerald 950
    accent: "#10b981", // Emerald 500
    gradient: "from-[#065f46]/10 via-transparent to-transparent",
  },

  // --- Pricing Strategy (Corporate Grade) ---
  price: "14,500",
  priceValue: 14500,
  currency: "THB",
  unit: "เริ่มต้น / โปรเจกต์",

  // --- Trust Signals ---
  clientTrust:
    "Border Trade Authority: เบื้องหลังความสำเร็จของบริษัทขนส่งข้ามพรมแดนและโรงงานอุตสาหกรรมในเขตเศรษฐกิจพิเศษแม่สอด",

  // --- Localized Benefits ---
  benefits: [
    "International Credibility: เปลี่ยนภาพลักษณ์บริษัทท้องถิ่นให้ดูเป็นพาร์ทเนอร์ระดับสากล ช่วยให้นักลงทุนต่างชาติและบริษัทข้ามชาติกล้าตัดสินใจร่วมงานกับคุณ",
    "Bilingual Expansion: ระบบรองรับหลายภาษา (ไทย-อังกฤษ) เพื่อสื่อสารขอบเขตการบริการและมาตรฐานความปลอดภัยให้คู่ค้าจากทุกประเทศเข้าใจอย่างถูกต้อง",
    "Logistics-Focused SEO: เจาะกลุ่มคีย์เวิร์ดทรงพลัง เช่น 'ชิปปิ้งแม่สอด', 'ขนส่งสินค้าไปพม่า', 'โกดังให้เช่า ตาก' เพื่อให้คนหาคุณเจอในจังหวะที่เขาต้องการบริการ",
  ],

  // --- Core Features ---
  coreFeatures: [
    {
      title: "Service Portfolio Showcase",
      description:
        "ระบบจัดวางรายละเอียดการบริการขนส่งและชิปปิ้งที่เข้าใจง่าย โชว์ความเชี่ยวชาญและเส้นทางเดินรถอย่างเป็นมืออาชีพ",
      icon: "TrendingUp",
    },
    {
      title: "Multi-language Framework",
      description:
        "สลับภาษาได้อย่างลื่นไหล รองรับภาษาอังกฤษและภาษาเป้าหมายอื่น เพื่อเจาะกลุ่มลูกค้าตลาดชายแดนและสากล",
      icon: "Globe",
    },
    {
      title: "High-Security Standards",
      description:
        "ระบบความปลอดภัยข้อมูลมาตรฐานสูง รองรับ PDPA เพื่อสร้างความมั่นใจให้กับบริษัทคู่สัญญาในการส่งต่อข้อมูลธุรกิจ",
      icon: "ShieldCheck",
    },
  ],

  // --- Localized FAQs (7 Items) ---
  faqs: [
    {
      question: "ทำไมบริษัทขนส่งในแม่สอดถึงจำเป็นต้องมีเว็บไซต์?",
      answer:
        "เพราะในโลกการค้าชายแดน คู่ค้าใหม่ๆ มักตรวจสอบความมีตัวตนผ่าน Google ก่อนเสมอครับ เว็บไซต์ที่เป็นมืออาชีพจะช่วยยืนยันว่าคุณคือตัวจริง มีออฟฟิศจริง และมีมาตรฐานการทำงานที่เชื่อถือได้ครับ",
    },
    {
      question: "สามารถนัดคุยงานที่แม่สอดหรือตัวเมืองตากได้ไหม?",
      answer:
        "ได้แน่นอนครับ ผมยินดีเดินทางเข้าไปพบลูกค้าในเขตอำเภอแม่สอด หรือตัวเมืองตาก เพื่อรับฟังความต้องการหน้างานและดูสเกลธุรกิจจริง เพื่อออกแบบเว็บให้ตรงโจทย์ที่สุดครับ",
    },
    {
      question: "ช่วยเขียนข้อมูลบริการเป็นภาษาอังกฤษด้วยไหม?",
      answer:
        "ในแพ็กเกจระดับ Corporate ผมมีบริการช่วยเรียบเรียงและเกลาเนื้อหาภาษาอังกฤษให้ดูเป็นทางการ (Business English) เพื่อสร้างภาพลักษณ์ที่น่าเชื่อถือในระดับสากลครับ",
    },
    {
      question: "ใช้เวลากี่วันถึงจะเสร็จ?",
      answer:
        "สำหรับเว็บไซต์บริษัทขนส่งขนาดกลาง ใช้เวลาประมาณ 14-25 วันครับ ขึ้นอยู่กับความละเอียดของข้อมูลบริการและขั้นตอนการตรวจสอบความถูกต้องของข้อมูลครับ",
    },
    {
      question: "มีบริการทำ SEO สำหรับคำว่า 'ชิปปิ้ง' หรือ 'โลจิสติกส์' ไหม?",
      answer:
        "มีครับ ผมจะวางโครงสร้าง Technical SEO ให้เบื้องต้นเพื่อให้ Google เข้าใจธุรกิจของคุณ และมีบริการ SEO รายเดือนแยกต่างหากสำหรับผู้ที่ต้องการขึ้นหน้า 1 ในคีย์เวิร์ดที่มีการแข่งขันสูงครับ",
    },
    {
      question: "เว็บไซต์รองรับการแสดงผลบนมือถือไหม?",
      answer:
        "แน่นอนครับ ฝ่ายจัดซื้อหรือเจ้าของธุรกิจสมัยนี้ใช้มือถือเป็นหลัก เว็บไซต์จะถูกออกแบบมาให้โหลดไวและสวยงามบนสมาร์ทโฟนทุกรุ่นครับ",
    },
    {
      question: "ออกใบกำกับภาษีได้ไหม?",
      answer:
        "ได้ครับ ผมจดทะเบียนพาณิชย์ถูกต้อง สามารถออกใบเสนอราคาและใบเสร็จ/ใบกำกับภาษีเต็มรูปแบบเพื่อนำไปหักค่าใช้จ่ายในนามนิติบุคคลได้ครับ",
    },
  ],

  // --- Context Data ---
  localContext: {
    marketInsight:
      "การค้าข้ามพรมแดนตัดสินที่ความน่าเชื่อถือ (Credentials) เว็บไซต์คือใบเบิกทางระดับสากลในการทำดีลธุรกิจระดับรัฐหรือองค์กรใหญ่",
    technicalApproach:
      "เน้นระบบความปลอดภัยข้อมูลและโครงสร้างที่รองรับ Multilingual เพื่อนำเสนอข้อมูลชิปปิ้งที่ซับซ้อนให้ดูเข้าใจง่ายในหน้าเดียว",
    localStrength:
      "เข้าใจ Flow ธุรกิจแม่สอด-ตาก สามารถเรียบเรียงเนื้อหาให้ดูเป็น 'มืออาชีพรายใหญ่' เพื่อดึงดูดพาร์ทเนอร์ต่างชาติ",
    nicheIndustries: [
      "โลจิสติกส์และขนส่งข้ามพรมแดน",
      "บริษัทชิปปิ้งนำเข้า-ส่งออก",
      "คลังสินค้าเขตเศรษฐกิจพิเศษ",
      "ธุรกิจท่องเที่ยวเชิงธรรมชาติและที่พักอุ้มผาง",
    ],
    painPoints: [
      "มีบริษัทจริงแต่ภาพลักษณ์ออนไลน์ดูไม่โปร ทำให้พลาดดีลโครงการใหญ่",
      "คู่ค้าต่างชาติค้นหาข้อมูลบริษัทไม่เจอใน Google เมื่อต้องการเช็คเครดิต",
      "ต้องการนำเสนอโปรไฟล์บริษัทเป็นภาษาอังกฤษตามมาตรฐานสากล",
    ],
    competitorLevel: "low",

    socialProof: {
      rating: 4.9,
      reviewCount: 48,
      localClient: "บริษัทขนส่งรายใหญ่ เขตเศรษฐกิจพิเศษแม่สอด",
    },
    regionalPricing: {
      startPrice: "14,500 บาท",
      timeline: "14-25 วัน",
    },
    localSuccessStory: {
      title: "Case Study: บริษัทชิปปิ้งชายแดน",
      result:
        "ยกระดับเว็บไซต์ใหม่ทำให้ได้รับความเชื่อมั่นจากบริษัทข้ามชาติ จนสามารถปิดดีลสัญญาขนส่งระยะยาวได้สำเร็จ",
    },
    hyperLocalKeywords: [
      "รับทำเว็บไซต์ แม่สอด",
      "จ้างทำเว็บชิปปิ้ง ตาก",
      "ทำ SEO ขนส่ง แม่สอด",
      "ปักหมุด Google Maps ธุรกิจแม่สอด",
    ],
  },

  // --- System Metadata ---
  priority: 83,
  districts: ["แม่สอด", "เมืองตาก", "พบพระ", "แม่ระมาด", "ท่าสองยาง", "อุ้มผาง"],
  keywords: [
    "รับทำเว็บไซต์ ตาก",
    "รับทำเว็บไซต์ แม่สอด",
    "จ้างทำเว็บไซต์",
    "ทำเว็บชิปปิ้ง",
    "บริษัทรับทำเว็บไซต์",
    "รับทำ SEO ตาก",
  ],
  coordinates: { lat: 16.8831, lng: 99.1258 },
};
```

### CONFIG: uttaradit.ts

`Path: constants/area-nodes/uttaradit.ts`

```typescript
/**
 * [SERVICE_NODE]: UTTARADIT_D2C_HUB v18.0.0 (ACCESSIBILITY_PATCHED)
 * [STRATEGY]: D2C Empowerment | Agricultural Branding | Hex Standard
 * [MARKET]: Uttaradit City, Lablae, Phichai (Premium Agro-Trading)
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { AreaNode } from "@/types";

export const uttaraditNode: AreaNode = {
  // --- Basic Identity ---
  slug: "uttaradit",
  province: "อุตรดิตถ์",
  templateSlug: "local-authority",
  title: "รับทำเว็บไซต์ อุตรดิตถ์ | เปลี่ยนผลผลิตจากสวนเป็นแบรนด์พรีเมียม ขายตรงไม่ผ่านคนกลาง",
  description:
    "ยกระดับทุเรียนลับแลและสินค้า SME อุตรดิตถ์สู่ตลาดบน ด้วยเว็บไซต์ D2C ที่ช่วยให้คุณเป็นเจ้าของฐานลูกค้าเอง 100% พร้อมระบบสั่งจองที่แม่นยำและน่าเชื่อถือ",

  longDescription:
    "ชาวอุตรดิตถ์ที่อยากให้สินค้าจากสวนหรือแบรนด์ของคุณขายได้ราคาดีกว่าเดิม นายเอ็มซ่ามากส์ พร้อมช่วยคุณสร้างตัวตนออนไลน์ที่แข็งแรงครับ " +
    "เราเข้าใจดีว่าของดีเมืองอุตรดิตถ์อย่างทุเรียนหลง-หลินลับแล หรือของฝากขึ้นชื่อ มีความต้องการสูงทั่วประเทศ แต่ปัญหาคือลูกค้ามักหาตัวจริงไม่เจอ หรือระบบการรับออเดอร์ยังไม่เป็นมืออาชีพพอ " +
    "เราจึงเน้นทำเว็บไซต์ที่ไม่ได้แค่สวยงามระดับพรีเมียม แต่ต้องใช้งานง่ายทั้งคนขายและคนซื้อ มีระบบ Pre-order ที่จัดระเบียบออเดอร์ได้แม่นยำ และวางแผน SEO ให้ Google พาคนที่มีกำลังซื้อสูงมาเจอสวนของคุณโดยตรง " +
    "เพื่อให้คุณขายสินค้าได้ราคาเต็มเม็ดเต็มหน่วย และสร้างฐานลูกค้าขาประจำที่จะอุดหนุนแบรนด์ของคุณไปตลอดอย่างยั่งยืนครับ",

  // --- SEO Metadata ---
  seoTitle: "รับทำเว็บไซต์ อุตรดิตถ์ ออกแบบเว็บขายทุเรียนลับแลและสินค้า SME - เอ็มซ่ามากส์",
  seoDescription:
    "จ้างทำเว็บไซต์อุตรดิตถ์ ครบวงจร สำหรับสวนผลไม้และร้านค้าออนไลน์ เน้นระบบสั่งซื้อ D2C ที่สะดวก รวดเร็ว ช่วยให้แบรนด์เกษตรพรีเมียมติดหน้าแรก Google และปิดการขายได้จริง",

  // --- Visual & Theme (Agro-Premium: Emerald & Durian Gold) ---
  heroImage: "/images/areas/uttaradit-node.webp",
  theme: {
    mode: "light",
    /** * [ACCESSIBILITY_PATCH]: ปรับจาก #059669 (Emerald 600) เป็น #047857 (Emerald 700)
     * เพื่อให้ผ่านเกณฑ์ WCAG AA (> 4.5:1) เมื่อแสดงผลบนพื้นหลัง Emerald 50 (#f0fdf4)
     */
    primary: "#047857",
    secondary: "#064e3b", // Emerald 900
    background: "#f0fdf4", // Emerald 50
    foreground: "#022c22", // Emerald 950
    accent: "#d97706", // Amber 600 (สีทองทุเรียนลับแล)
    gradient: "from-[#047857]/10 via-transparent to-transparent",
  },

  // --- Pricing Strategy (Grower Friendly) ---
  price: "8,900",
  priceValue: 8900,
  currency: "THB",
  unit: "เริ่มต้น / โปรเจกต์",

  // --- Trust Signals ---
  clientTrust:
    "D2C Pioneer: ผู้อยู่เบื้องหลังระบบสั่งจองผลไม้พรีเมียมและเว็บไซต์วิสาหกิจชุมชนในจังหวัดอุตรดิตถ์",

  // --- Localized Benefits ---
  benefits: [
    "เลิกพึ่งพาพ่อค้าคนกลาง: การมีหน้าเว็บขายตรง (Direct-to-Consumer) ช่วยให้คุณกำหนดราคาเองได้ตามคุณภาพสินค้าจริง และรับกำไรเต็มเม็ดเต็มหน่วยโดยไม่ต้องผ่านการกดราคา",
    "ระบบจัดการออเดอร์ไม่ตกหล่น: เปลี่ยนจากการจดกระดาษหรือตอบแชทวนไปมา เป็นระบบหลังบ้านที่สรุปยอดสั่งจอง ชื่อที่อยู่ และสลิปโอนเงินให้คุณดูง่ายในที่เดียว",
    "ยกระดับแบรนด์ลับแล: สร้างภาพลักษณ์ให้สินค้าเกษตรดูแพงและมีสตอรี่ เพื่อดึงดูดกลุ่มลูกค้ากำลังซื้อสูงจากกรุงเทพฯ และทั่วประเทศที่มองหาของดีเกรดพรีเมียม",
  ],

  // --- Core Features ---
  coreFeatures: [
    {
      title: "Seasonal Pre-order System",
      description:
        "ระบบจองสินค้าล่วงหน้าตามฤดูกาล เหมาะสำหรับทุเรียนหรือผลไม้ที่ต้องคัดเกรดพิเศษ ช่วยให้คุณบริหารสต็อกได้ล่วงหน้า",
      icon: "CalendarCheck",
    },
    {
      title: "Mobile Order Gateway",
      description:
        "ออกแบบหน้าสั่งซื้อให้กดง่ายบนมือถือ เชื่อมต่อการแจ้งเตือนออเดอร์เข้า LINE ส่วนตัวของคุณทันทีที่มีคนสั่งซื้อ",
      icon: "Smartphone",
    },
    {
      title: "Agro-Storytelling Page",
      description:
        "หน้าเว็บพิเศษสำหรับเล่าประวัติของสวน วิธีการปลูก และความพิถีพิถัน เพื่อสร้างความประทับใจและความเชื่อมั่นให้ลูกค้า",
      icon: "Award",
    },
  ],

  // --- Localized FAQs ---
  faqs: [
    {
      question: "ทำไมต้องมีเว็บ ในเมื่อขายในเพจหรือกลุ่ม Facebook ก็ได้?",
      answer:
        "ในเฟซบุ๊กออเดอร์มักตกหล่นและลูกค้าค้นหาเรายากครับ แต่เว็บไซต์คือ 'หน้าร้านถาวร' ที่ดูเป็นมืออาชีพมากกว่า สร้างความน่าเชื่อถือให้ลูกค้ากล้าโอนเงินหลักพันหลักหมื่น และ Google จะช่วยหาลูกค้าใหม่ๆ มาให้เราเองโดยไม่ต้องเหนื่อยโพสต์ทุกวันครับ",
    },
    {
      question: "แก่แล้ว ทำเว็บไม่เป็น จะใช้ระบบยากไหม?",
      answer:
        "ผมออกแบบมาให้ 'คนสวนใช้ได้ ลูกค้าใช้เป็น' ครับ ระบบหลังบ้านภาษาไทย 100% ใช้งานง่ายเหมือนเล่นไลน์ ถ้าพิมพ์ข้อความและส่งรูปทางไลน์ได้ คุณก็จัดการเว็บนี้ได้แน่นอนครับ",
    },
    {
      question: "มีระบบช่วยเก็บเงินหรือแนบสลิปไหม?",
      answer:
        "มีครับ ลูกค้าสามารถเลือกวิธีชำระเงินและแนบหลักฐานการโอนเงินผ่านหน้าเว็บได้เลย ข้อมูลจะถูกจัดระเบียบให้คุณตรวจสอบได้ง่าย ไม่ต้องคอยแคปหน้าจอแชทมาไล่ดูครับ",
    },
    {
      question: "ช่วยถ่ายรูปผลไม้หรือเขียนเรื่องราวของสวนให้ด้วยไหม?",
      answer:
        "ผมมีคำแนะนำในการเตรียมรูปภาพให้ดูแพงครับ หรือหากต้องการทีมงานมืออาชีพ ผมมีพาร์ทเนอร์ช่างภาพที่เชี่ยวชาญการถ่ายสินค้าเกษตรแนะนำให้ เพื่อให้ภาพลักษณ์ออกมาดูดีที่สุดครับ",
    },
    {
      question: "นัดคุยรายละเอียดที่สวนในลับแลหรือในเมืองได้ไหม?",
      answer:
        "ยินดีครับ! ผมชอบลงพื้นที่จริงเพื่อให้เข้าใจจุดเด่นของแต่ละสวน นัดคุยกันที่สวนหรือร้านกาแฟในอุตรดิตถ์ได้เลยครับ จะได้ช่วยกันวางแผนการตลาดได้ถูกจุด",
    },
    {
      question: "เว็บไซต์จะช่วยให้คนหาทุเรียนของผมเจอใน Google ไหม?",
      answer:
        "ช่วยแน่นอนครับ ผมจะวางรากฐาน SEO โดยใช้คีย์เวิร์ดอย่าง 'ทุเรียนลับแลแท้', 'หลงลับแลสั่งออนไลน์' เพื่อดึงกลุ่มคนที่อยากซื้อของดีจริงๆ ให้มาเจอสวนของคุณเป็นอันดับต้นๆ",
    },
    {
      question: "ใช้เวลากี่วันถึงจะเริ่มขายได้?",
      answer:
        "ถ้าข้อมูลและรูปภาพพร้อม ปกติใช้เวลา 7-14 วันครับ ผมจะเร่งทำให้ทันช่วงก่อนผลผลิตออก เพื่อให้คุณเริ่มเปิดรับยอดจองล่วงหน้าได้ทันทีครับ",
    },
  ],

  // --- Context Data ---
  localContext: {
    marketInsight:
      "อุตรดิตถ์มีสินค้า Rare Item สูงมาก เว็บไซต์ที่รองรับระบบ Pre-order และโชว์ Story ของสวนอย่างชัดเจน จะช่วยให้คุณขายสินค้าได้ราคาสูงกว่าตลาดทั่วไป",
    technicalApproach:
      "เน้น Mobile-First Ordering System และสถาปัตยกรรมเว็บที่โหลดไวเพื่อรองรับลูกค้าที่เข้าชมผ่าน Social Media มายังหน้าสวนโดยตรง",
    localStrength:
      "เข้าใจวิถีการขายผลไม้พรีเมียมเมืองลับแล พร้อมช่วยวางแผนเนื้อหาที่เจาะจงกลุ่มลูกค้าระดับ High-end ที่ต้องการความมั่นใจในคุณภาพ",
    nicheIndustries: [
      "สวนทุเรียนหลง-หลินลับแล และผลไม้ฤดูกาล",
      "ธุรกิจของฝากและสินค้าเกษตรแปรรูป",
      "SME ท้องถิ่นที่ต้องการขายตรง (D2C)",
      "ธุรกิจท่องเที่ยววิถีชุมชนและที่พักเชิงเกษตร",
    ],
    painPoints: [
      "ถูกกดราคาจากคนกลางเพราะไม่มีแบรนด์ของตัวเอง",
      "ระบบจองตกหล่นในช่วงฤดูกาลที่มีออเดอร์จำนวนมาก",
      "สินค้าดีมากแต่หน้าเว็บดูไม่พรีเมียมพอที่จะขายราคาที่ต้องการ",
    ],
    competitorLevel: "low",

    socialProof: {
      rating: 4.9,
      reviewCount: 48,
      localClient: "สวนทุเรียนพรีเมียมชื่อดัง ย่านลับแล",
    },
    regionalPricing: {
      startPrice: "8,900 บาท",
      timeline: "7-14 วัน",
    },
    localSuccessStory: {
      title: "Case Study: สวนลับแลยุคใหม่",
      result:
        "เปลี่ยนมาใช้ระบบสั่งจองออนไลน์ 100% ลดเวลาตอบแชทลง 70% และเพิ่มยอดขายตรงสู่กรุงเทพฯ ได้มากกว่า 3 เท่าในฤดูกาลเดียว",
    },
    hyperLocalKeywords: [
      "รับทำเว็บขายทุเรียน ลับแล",
      "จ้างทำเว็บไซต์ขายของ อุตรดิตถ์",
      "คนทำเว็บ SEO อุตรดิตถ์",
      "ระบบสั่งจองผลไม้ออนไลน์",
    ],
  },

  // --- System Metadata ---
  priority: 81,
  districts: ["เมืองอุตรดิตถ์", "ลับแล", "พิชัย", "ตรอน", "ทองแสนขัน", "ฟากท่า", "น้ำปาด"],
  keywords: [
    "รับทำเว็บไซต์ อุตรดิตถ์",
    "จ้างทำเว็บไซต์",
    "ทำเว็บขายผลไม้",
    "ออกแบบเว็บไซต์ขายของ",
    "คนทำเว็บ อุตรดิตถ์",
    "รับทำ SEO อุตรดิตถ์",
  ],
  coordinates: { lat: 17.6256, lng: 100.0993 },
};
```

### CONFIG: image-blur-data.ts

`Path: constants/image-blur-data.ts`

```typescript
/**
 * [SYSTEM GENERATED]: IMAGE_BLUR_REGISTRY v2026-02-18T17:35:32.217Z
 * [MANDATE]: Strictly Auto-Generated by scripts/gen-blur-data.mjs.
 * [STRATEGY]: Static BlurHash for Zero-CLS LCP.
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
  "/images/areas/chiang-rai-node.webp": {
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
  "/images/areas/chumphon-gateway.webp": {
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
  "/images/areas/korat-monolith.webp": {
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
  "/images/areas/lampang-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/areas/mae-hong-son-node.webp": {
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
  "/images/areas/phang-nga.webp": {
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
  "/images/areas/phitsanulok-node.webp": {
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
  "/images/areas/ranong-hotspring.webp": {
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
  "/images/areas/surat-ratchaprapha.webp": {
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
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoKAAoABUB8JYgCw7ELX8pfUAAA/u3f+dBkd0jL+/Z/RkpYE1XeQ5dhrMuqAu2RR2agAAAA",
    width: 554,
    height: 554,
  },
  "/images/blog/advanced-schema-markup.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO62XxaCgAA=",
    width: 1024,
    height: 768,
  },
  "/images/blog/copywriting-specialist.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO62XxaCgAA=",
    width: 1024,
    height: 768,
  },
  "/images/blog/core-web-vitals-speed.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO62XxaCgAA=",
    width: 1024,
    height: 768,
  },
  "/images/blog/default-thumb.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO62XxaCgAA=",
    width: 1024,
    height: 768,
  },
  "/images/blog/ecommerce-seo.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO62XxaCgAA=",
    width: 1024,
    height: 768,
  },
  "/images/blog/facebook-ads-vs-website.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADwAQCdASoKAAcABUB8JZgCdADdKOSPv0gA/tBoIlOWILsosq9XmVWHJfD4AA==",
    width: 696,
    height: 495,
  },
  "/images/blog/seo-google-love.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADwAQCdASoKAAcABUB8JYwCdH8AFx7S4QAA/u46rN37K4uMFz8bDUlvGpzjD+XFgO+I5FKehiDgAA==",
    width: 640,
    height: 479,
  },
  "/images/blog/technical-audit-visual.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADwAQCdASoKAAcABUB8JYwCdH8AFx7S4QAA/u46rN37K4uMFz8bDUlvGpzjD+XFgO+I5FKehiDgAA==",
    width: 640,
    height: 479,
  },
  "/images/case-studies/default.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
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
  "/images/case-studies/provincial-domination.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/case-studies/unlink-reputation.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADwAQCdASoKAAcABUB8JZgCdADdKOSPv0gA/tBoIlOWILsosq9XmVWHJfD4AA==",
    width: 696,
    height: 495,
  },
  "/images/experts/profile-hero.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/logo-main.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADQAQCdASoKAAgABUB8JYwCdADc9U44QAD+5a3vLwE2CvtSvGyaza+hIrPt9vL8MAA=",
    width: 1024,
    height: 768,
  },
  "/images/og-blog.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADQAQCdASoKAAgABUB8JYwCdADc9U44QAD+5a3vLwE2CvtSvGyaza+hIrPt9vL8MAA=",
    width: 1024,
    height: 768,
  },
  "/images/og-case-studies.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADQAQCdASoKAAgABUB8JYwCdADc9U44QAD+5a3vLwE2CvtSvGyaza+hIrPt9vL8MAA=",
    width: 1024,
    height: 768,
  },
  "/images/og-default.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/og-main.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADQAQCdASoKAAgABUB8JYwCdADc9U44QAD+5a3vLwE2CvtSvGyaza+hIrPt9vL8MAA=",
    width: 1024,
    height: 768,
  },
  "/images/seo/advanced-schema-markup.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO62XxaCgAA=",
    width: 1024,
    height: 768,
  },
  "/images/seo/core-web-vitals-speed.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO62XxaCgAA=",
    width: 1024,
    height: 768,
  },
  "/images/seo/ecommerce-seo.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO62XxaCgAA=",
    width: 1024,
    height: 768,
  },
  "/images/seo/seo.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO62XxaCgAA=",
    width: 1024,
    height: 768,
  },
  "/images/services/bio-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADQAQCdASoKAAgABUB8JYwCdADc9U44QAD+5a3vLwE2CvtSvGyaza+hIrPt9vL8MAA=",
    width: 1024,
    height: 768,
  },
  "/images/services/catalog-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/services/corporate-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/services/default.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADQAQCdASoKAAgABUB8JYwCdADc9U44QAD+5a3vLwE2CvtSvGyaza+hIrPt9vL8MAA=",
    width: 1024,
    height: 768,
  },
  "/images/services/hotel-resort-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/services/local-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/services/personal-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO62XxaCgAA=",
    width: 1024,
    height: 768,
  },
  "/images/services/salepage-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoKAAgABUB8JZwAA3AA/vAEDO62XxaCgAA=",
    width: 1024,
    height: 768,
  },
  "/images/services/seo-agency-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAABwAQCdASoKAAgABUB8JZgCdAF1AAD+8EJsrNup/MqA/NKpKjAxJKbn9ODGAAAA",
    width: 1024,
    height: 768,
  },
  "/images/shared/placeholder.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADwAQCdASoKAAcABUB8JZgCdADdKOSPv0gA/tBoIlOWILsosq9XmVWHJfD4AA==",
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

`Path: constants/master-registry.ts`

```typescript
/**
 * [MASTER REGISTRY]: MASTER_SERVICE_INDEX v17.9.107 (STABLE_RELEASE)
 * [STRATEGY]: Centralized Data Aggregation | Type-Safe Helper Export | SSG Core
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { TemplateMasterData } from "@/types";

// --- 1. Infrastructure: Import Individual Service Nodes ---
import { seoAgencyService } from "./services/seo-agency";
import { salePageService } from "./services/salepage";
import { corporateService } from "./services/corporate";
import { catalogService } from "./services/catalog";
import { hotelResortService } from "./services/hotel-resort";
import { bioService } from "./services/bio";
import { localAuthorityService } from "./services/local-authority";

/**
 * [REGISTRY]: คลังข้อมูลบริการหลัก (Master Database)
 * ทำหน้าที่เป็นหัวใจการเรนเดอร์สำหรับหน้า Hub และการสร้าง Static Paths
 * [LOGIC]: เรียงลำดับตาม Priority (0 = สูงสุด) เพื่อการแสดงผลที่กำหนดได้
 */
export const MASTER_REGISTRY: readonly TemplateMasterData[] = [
  seoAgencyService,
  salePageService,
  corporateService,
  catalogService,
  hotelResortService,
  bioService,
  localAuthorityService,
].sort((a, b) => a.priority - b.priority);

/**
 * [HELPER]: getServiceBySlug
 * @description ค้นหาข้อมูลบริการจาก URL Slug แบบ Type-Safe
 * ใช้ในหน้า app/(sales)/services/[slug]/page.tsx
 */
export const getServiceBySlug = (slug: string): TemplateMasterData | undefined => {
  return MASTER_REGISTRY.find((service) => service.templateSlug === slug);
};

/**
 * [HELPER]: getFeaturedServices
 * @description ดึงรายการบริการที่ระบุเป็น 'Featured' (isFeatured: true)
 * ใช้สำหรับแสดงผลใน Section บริการหน้าแรก (Main Landing Page)
 */
export const getFeaturedServices = (): TemplateMasterData[] => {
  return MASTER_REGISTRY.filter((service) => service.isFeatured);
};

// [KNIP_HYGIENE]: getServicesByCategory ถูกถอดออกชั่วคราวเพื่อลด Unused Exports
// จะถูกเพิ่มกลับมาเมื่อมีการสร้างระบบ Filter ในหน้า Directory บริการ
```

### CONFIG: navigation.ts

`Path: constants/navigation.ts`

```typescript
/**
 * [NAV_INFRASTRUCTURE]: NAVIGATION_REGISTRY v18.0.1 (PATH_SYNCED)
 * [STRATEGY]: SSOT Sync | Link Integrity Enforcement
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { SITE_CONFIG } from "./site-config";

export const MAIN_NAV = [
  { label: "หน้าแรก", href: "/" },
  { label: "บริการ & ราคา", href: "/services" },
  { label: "ผลงานลูกค้า", href: "/case-studies" },
  { label: "พื้นที่ให้บริการ", href: "/areas" },
  { label: "บทความ", href: "/blog" },
  // [REMOVED]: /contact ถูกถอดออกเนื่องจากไม่มี Module ใน app/
] as const;

export const FOOTER_MAP = {
  services: [
    { label: "ทำเว็บไซต์บริษัท", href: "/services/corporate" },
    { label: "ทำ Sale Page", href: "/services/salepage" },
    { label: "บริการ SEO", href: "/services/seo-agency" }, // [FIXED]: Sync กับ TemplateSlug
    { label: "ระบบแคตตาล็อก", href: "/services/catalog" }, // [FIXED]: เพิ่มบริการที่มีจริง
    { label: "ดูบริการทั้งหมด", href: "/services" },
  ],
  company: [
    { label: "เกี่ยวกับเรา", href: "/about" },
    { label: "ผลงานของเรา", href: "/case-studies" },
    { label: "พื้นที่ให้บริการ", href: "/areas" },
    // [REMOVED]: /careers ถูกถอดออกเนื่องจากไม่มีหน้าเพจรองรับ
  ],
  connect: [
    { label: "แอดไลน์ปรึกษา", href: SITE_CONFIG.links.line },
    { label: "Facebook Page", href: SITE_CONFIG.links.facebook },
    { label: "เบอร์โทรศัพท์", href: `tel:${SITE_CONFIG.contact.phone.replace(/-/g, "")}` }, // [FIXED]: Dynamic Sync
  ],
  legal: [
    { label: "นโยบายความเป็นส่วนตัว", href: "/privacy" },
    { label: "ข้อกำหนดการใช้งาน", href: "/terms" },
    { label: "แผนผังเว็บไซต์", href: "/sitemap" },
  ],
} as const;
```

### CONFIG: bio.ts

`Path: constants/services/bio.ts`

```typescript
/**
 * [SERVICE_NODE]: BIO_IDENTITY_ORCHESTRATOR v18.0.2 (IDENTITY_SYNC)
 * [STRATEGY]: Personal Authority | AI-Search Synchronization | E-E-A-T Focus
 * [MAINTAINER]: AEMZA MACKS
 */

import type { TemplateMasterData } from "@/types";

export const bioService: TemplateMasterData = {
  id: "AEM-SVC-PB-14",
  title:
    "Identity & Personal Branding | ควบคุมตัวตนดิจิทัลของคุณให้ AI และ Google จดจำในชื่อที่คุณต้องการ",
  description:
    "ยกระดับจากพอร์ตโฟลิโอทั่วไป สู่ระบบจัดการตัวตน (Identity System) ที่เชื่อมโยงชื่อจริง นามสมมติ และผลงานของคุณให้เป็นหนึ่งเดียว เพื่อสร้างความน่าเชื่อถือสูงสุดในฐานะผู้เชี่ยวชาญ โดย นายเอ็มซ่ามากส์",
  image: "/images/services/bio-node.webp",
  templateSlug: "bio",
  category: "personal",
  price: "4,900",
  priceValue: 4900,
  currency: "THB",
  unit: "เริ่มต้น / โปรเจกต์",

  // [THEME_FIX]: "Cyber-Tech Professional" (Dark Mode)
  // สื่อถึงความลึกลับแต่แม่นยำและทันสมัย สอดคล้องกับภาพลักษณ์ Specialist
  theme: {
    mode: "dark",
    primary: "#06b6d4", // Cyan 500
    secondary: "#164e63", // Cyan 900
    background: "#09090b", // Zinc 950
    foreground: "#fafafa", // Zinc 50
    accent: "#22d3ee", // Cyan 400
    gradient: "from-[#06b6d4]/15 via-transparent to-transparent",
  },

  // [TRUST_SIGNAL]: การแก้ปัญหาเรื่องร่องรอยดิจิทัล (Digital Footprint)
  clientTrust:
    "Identity Control: ระบบที่ออกแบบมาเพื่อจัดการ E-E-A-T และแก้ปัญหาข้อมูลซ้ำซ้อนในฐานข้อมูล AI",

  // [BENEFITS]: เน้นการแก้ Pain Point เรื่องการค้นหาชื่อแล้วเจอข้อมูลเก่าหรือไม่ถูกต้อง
  benefits: [
    "Authority Synchronization: แก้ปัญหาชื่อไม่ตรงหรือข้อมูลเก่าใน Google และ AI Search ด้วยการสร้าง Source of Truth ที่แข็งแกร่งที่สุดในชื่อ 'อลงกรณ์ ยมเกิด' หรือแบรนด์ที่คุณกำหนด",
    "Digital Credibility: สร้างความเชื่อมั่นให้คู่ค้าผ่านเว็บไซต์ที่ระบุตัวตนและเลขทะเบียนธุรกิจอย่างชัดเจน ป้องกันการสับสนระหว่างชื่อที่ใช้ทำงานและชื่อทางกฎหมาย",
    "Global E-E-A-T Signal: ส่งสัญญาณความเชี่ยวชาญไปยังระบบ Knowledge Graph ของ Google โดยตรง ช่วยให้ตัวตนของคุณถูกจัดหมวดหมู่ในฐานะ Specialist อย่างถูกต้อง",
  ],

  // [CORE_FEATURES]: ฟีเจอร์ที่เน้นการทำ SEO ตัวบุคคล
  coreFeatures: [
    {
      title: "Knowledge Graph Markup",
      description:
        "ฝังข้อมูลโครงสร้าง (Schema JSON-LD) เพื่อบอก Google ให้ชัดเจนว่า 'นายเอ็มซ่ามากส์' คือใคร และเกี่ยวข้องกับ 'อลงกรณ์ ยมเกิด' อย่างไร",
      icon: "UserCheck",
    },
    {
      title: "Digital Footprint Clean-up",
      description:
        "วางโครงสร้างหน้าเว็บเพื่อดันข้อมูลใหม่ขึ้นหน้าแรก และกลบข้อมูลเก่าที่ไม่อัปเดตในระบบการค้นหา",
      icon: "Shield",
    },
    {
      title: "Integrated Business ID",
      description:
        "ส่วนแสดงผลข้อมูลจดทะเบียนนิติบุคคลหรือเลขประจำตัวผู้เสียภาษีเพื่อความโปร่งใสในระดับองค์กร",
      icon: "FileText",
    },
  ],

  // [FAQ_ENGINE]: เพิ่มคำถามเรื่องชื่อและความเป็นส่วนตัว
  faqs: [
    {
      question: "ทำไมค้นหาชื่อใน Google แล้วยังเจอข้อมูลเก่าหรือชื่อเดิมอยู่?",
      answer:
        "เป็นเพราะ Google ยังจำ 'ร่องรอยดิจิทัล' (Digital Footprint) เก่าของคุณอยู่ครับ เว็บไซต์นี้จะทำหน้าที่เป็นหน้าแรกที่ Google จะเข้ามาเก็บข้อมูลใหม่ เพื่อแทนที่ข้อมูลเดิมในฐานข้อมูล AI ให้ถูกต้องที่สุดครับ",
    },
    {
      question: "ทำไมชื่อที่ใช้ทำงาน (Alias) กับชื่อจริงในบัตรประชาชนถึงไม่ตรงกัน?",
      answer:
        "เป็นเรื่องปกติของ Specialist ครับ เราใช้ชื่อแบรนด์เพื่อการจดจำ แต่ในเว็บไซต์จะมีการระบุชื่อทางกฎหมายอย่างโปร่งใสในจุดที่เหมาะสม เพื่อความปลอดภัยและผลทางกฎหมายครับ",
    },
    {
      question: "จดโดเมนเป็นชื่อ-นามสกุลจริง จะปลอดภัยไหม?",
      answer:
        "ผมแนะนำให้จดเป็นชื่อที่คุณต้องการสร้างแบรนด์ครับ หากต้องการความเป็นส่วนตัว เราสามารถใช้มาตรการปิดบังข้อมูลผู้จดทะเบียน (Domain Privacy) ได้ครับ",
    },
    {
      question: "ใช้เวลานานไหมกว่า Google จะอัปเดตชื่อใหม่ให้เรา?",
      answer:
        "ปกติใช้เวลา 1-4 สัปดาห์ครับ หลังจากเรา Submit Sitemap ใหม่ Google จะเริ่มรับรู้และปรับเปลี่ยนข้อมูลใน Knowledge Graph ตามข้อมูลล่าสุดในเว็บครับ",
    },
  ],

  // [KEYWORD_INJECTION]: เน้นชื่อจริงเพื่อดึง Authority
  keywords: [
    "อลงกรณ์ ยมเกิด",
    "Alongkorn Yomkerd",
    "นายเอ็มซ่ามากส์ ตัวจริง",
    "รับทำเว็บไซต์ Personal Branding",
    "สร้างตัวตนบน Google AI",
    "แก้ปัญหาชื่อไม่ตรงใน Google",
  ],

  priority: 5,
  isPopular: true,
  isFeatured: false,
};
```

### CONFIG: catalog.ts

`Path: constants/services/catalog.ts`

```typescript
/**
 * [SERVICE_NODE]: CATALOG_COMMERCE_HUB v17.9.86 (THEME_STABILIZED)
 * [STRATEGY]: Sales Enablement | B2B Authority | Hex Standard
 * [MAINTAINER]: AEMZA MACKS
 */

import type { TemplateMasterData } from "@/types";

export const catalogService: TemplateMasterData = {
  id: "AEM-SVC-EC-05",
  title: "รับทำเว็บแคตตาล็อกสินค้าออนไลน์ | โชว์รูม 24 ชม. ปิดดีลใหญ่ได้ไวกว่าเดิม",
  description:
    "เปลี่ยนสินค้าหลักพันชิ้นให้เป็นโชว์รูมออนไลน์ที่ดูง่าย เซลส์แฮปปี้ ลูกค้ากดขอใบเสนอราคาสบาย ไม่ต้องส่งไฟล์ PDF ให้หนักเครื่องอีกต่อไป โดย นายเอ็มซ่ามากส์",
  image: "/images/services/catalog-node.webp",
  templateSlug: "catalog",
  category: "ecommerce",
  price: "16,900",
  priceValue: 16900,
  currency: "THB",
  unit: "เริ่มต้น",

  // [THEME_FIX]: ใช้ Hex Code เพื่อรองรับ OKLCH Engine
  theme: {
    mode: "light",
    primary: "#7c3aed", // Violet 600
    secondary: "#4c1d95", // Violet 900
    background: "#f5f3ff", // Violet 50 (Very light purple for clean look)
    foreground: "#1e1b4b", // Indigo 950 (Dark text)
    accent: "#a78bfa", // Violet 400
    gradient: "from-[#7c3aed]/15 via-transparent to-transparent",
  },

  clientTrust: "สถาปัตยกรรมจัดการข้อมูลสินค้าที่ลื่นไหลที่สุด สำหรับธุรกิจ B2B ยุคใหม่",

  benefits: [
    "Sales Team Empowerment: เซลส์ทำงานง่ายขึ้น ไม่ต้องพกแคตตาล็อกเล่มหนา แค่ส่งลิงก์เดียวลูกค้าดูสเปคได้ครบถ้วน",
    "Inquiry-First Logic: ระบบ 'ขอใบเสนอราคา' (RFQ) ที่ออกแบบมาเพื่อธุรกิจ B2B โดยเฉพาะ คัดกรองลูกค้าตัวจริง",
    "Scalable Data Management: รองรับสินค้าหลักหมื่น SKU ได้อย่างไร้กังวล พร้อมระบบค้นหาอัจฉริยะ",
  ],

  coreFeatures: [
    {
      title: "Smart Filter & Search",
      description: "ระบบกรองสินค้าตามคุณสมบัติ (Size, Material, Type) ที่ละเอียดแม่นยำ",
      icon: "Search",
    },
    {
      title: "Direct RFQ System",
      description: "ปุ่มขอใบเสนอราคาที่ทำงานร่วมกับระบบแจ้งเตือน ช่วยให้ฝ่ายขายไม่พลาดทุกโอกาส",
      icon: "FileText",
    },
    {
      title: "Automated Datasheets",
      description: "ระบบดึงข้อมูลสเปคสินค้าออกมาเป็นไฟล์ PDF ให้ลูกค้าดาวน์โหลดได้ทันที",
      icon: "FileDown",
    },
  ],

  // [CATALOG_ITEMS]: ตัวอย่างรายการสินค้า (Mockup)
  items: [
    {
      name: "Industrial Pump X-200",
      description: "ปั๊มน้ำอุตสาหกรรมแรงดันสูง",
      icon: "Settings",
      price: "Call",
    },
    { name: "Heavy Duty Valve", description: "วาล์วทองเหลืองเกรด A", icon: "Disc", price: "Call" },
    {
      name: "Conveyor Belt 5M",
      description: "สายพานลำเลียงทนความร้อน",
      icon: "Activity",
      price: "Call",
    },
    {
      name: "Hydraulic Press",
      description: "เครื่องอัดไฮดรอลิก 50 ตัน",
      icon: "Cpu",
      price: "Call",
    },
    {
      name: "Safety Gear Set",
      description: "ชุดป้องกันความปลอดภัยโรงงาน",
      icon: "Shield",
      price: "Call",
    },
    {
      name: "Smart Sensor IoT",
      description: "เซ็นเซอร์ตรวจจับการทำงานเครื่องจักร",
      icon: "Wifi",
      price: "Call",
    },
  ],

  faqs: [
    {
      question: "ต่างจากขายบน Shopee/Lazada อย่างไร?",
      answer:
        "เน้น 'Brand Authority' และการสั่งซื้อล็อตใหญ่ (B2B) ครับ ไม่ใช่การขายปลีกแข่งราคาแบบ Marketplace",
    },
    {
      question: "ถ้าข้อมูลสินค้าเยอะ จัดการยากไหม?",
      answer:
        "ง่ายมากครับ เราวางระบบหลังบ้านให้คุณอัปเดตข้อมูลได้เองแบบ Bulk Upload หรือแก้ไขรายชิ้นได้อย่างรวดเร็ว",
    },
  ],

  keywords: [
    "รับทำเว็บแคตตาล็อกสินค้า",
    "จ้างทำเว็บไซต์บริษัท",
    "ระบบขอใบเสนอราคาออนไลน์",
    "ทำเว็บโรงงานอุตสาหกรรม",
    "Digital Product Catalog",
  ],

  priority: 4,
  isFeatured: true,
};
```

### CONFIG: corporate.ts

`Path: constants/services/corporate.ts`

```typescript
/**
 * [SERVICE_NODE]: CORPORATE_IDENTITY_HUB v18.0.0 (HUMAN_OPTIMIZED)
 * [STRATEGY]: B2B Trust | High-End Corporate | Zero-Emoji
 * [MAINTAINER]: AEMZA MACKS
 */

import type { TemplateMasterData } from "@/types";

export const corporateService: TemplateMasterData = {
  id: "AEM-SVC-CP-03",
  title:
    "Corporate Identity Website | ยกระดับภาพลักษณ์องค์กรสู่สากล เปลี่ยนผู้เยี่ยมชมให้เป็นคู่ค้าทางธุรกิจ",
  description:
    "เว็บไซต์ไม่ใช่แค่โบรชัวร์ออนไลน์ แต่คือสำนักงานใหญ่บนโลกดิจิทัลที่เปิดต้อนรับนักลงทุนและลูกค้าตลอด 24 ชั่วโมง หยุดเสี่ยงกับเว็บไซต์ราคาถูกที่ทำลายความน่าเชื่อถือ เปลี่ยนมาใช้เว็บไซต์มาตรฐาน Enterprise ที่มีความปลอดภัยสูง ดีไซน์สะท้อนตัวตนผู้นำ และรองรับการเติบโตของธุรกิจในอนาคต",
  image: "/images/services/corporate-node.webp",
  templateSlug: "corporate",
  category: "business",
  price: "9,900",
  priceValue: 9900,
  currency: "THB",
  unit: "เริ่มต้น / โปรเจกต์",

  // [THEME_FIX]: ใช้ Hex Code ล้วน (Royal Blue/Slate Theme) สื่อถึงความมั่นคงและความเป็นผู้นำ
  theme: {
    mode: "dark",
    primary: "#3b82f6", // Blue 500 (สีแห่งความน่าเชื่อถือและเทคโนโลยี)
    secondary: "#1e3a8a", // Blue 900
    background: "#020617", // Slate 950 (เข้มขรึม ทางการ)
    foreground: "#f8fafc", // Slate 50 (อ่านง่ายสบายตา)
    accent: "#60a5fa", // Blue 400
    gradient: "from-[#3b82f6]/20 via-transparent to-transparent",
  },

  // [TRUST_SIGNAL]: เน้นมาตรฐานระดับองค์กร
  clientTrust: "Corporate Standard: มาตรฐานความปลอดภัยและการออกแบบระดับเดียวกับบริษัทมหาชน",

  // [BENEFITS]: เน้นแก้ Pain Point เรื่องภาพลักษณ์และความปลอดภัย
  benefits: [
    "ความประทับใจแรกที่ตีราคาไม่ได้: คู่ค้าและนักลงทุนตัดสินบริษัทคุณจากหน้าเว็บไซต์ภายใน 3 วินาทีแรก เราออกแบบ CI (Corporate Identity) ให้ดูมั่นคงและเป็นมืออาชีพ เพื่อให้การเจรจาธุรกิจง่ายขึ้น",
    "ป้อมปราการดิจิทัล: เราให้ความสำคัญสูงสุดกับความปลอดภัยของข้อมูล (Data Security) ป้องกันการถูกเจาะระบบ เพื่อรักษาชื่อเสียงและข้อมูลความลับขององค์กร",
    "เครื่องมือที่ทีมงานรัก: ระบบหลังบ้านถูกออกแบบมาให้ฝ่ายการตลาดหรือ HR ใช้งานง่าย อัปเดตข่าวสารหรือประกาศรับสมัครงานได้เองโดยไม่ต้องง้อโปรแกรมเมอร์",
  ],

  // [CORE_FEATURES]: ฟีเจอร์ที่องค์กรต้องมี
  coreFeatures: [
    {
      title: "Scalable Architecture",
      description:
        "โครงสร้างเว็บไซต์ที่รองรับการขยายตัว ไม่ว่าจะเพิ่มหน้าสินค้าอีกพันรายการหรือรองรับ Traffic มหาศาลในอนาคต ก็ไม่ล่ม",
      icon: "ShieldCheck",
    },
    {
      title: "Investor & Career Portal",
      description:
        "ระบบจัดการข่าวสารนักลงทุนสัมพันธ์และหน้าสมัครงานที่ทันสมัย ช่วยดึงดูด Talent รุ่นใหม่เข้ามาร่วมงาน",
      icon: "Building2",
    },
    {
      title: "Enterprise SEO Foundation",
      description:
        "วางโครงสร้าง Semantic HTML ให้ถูกต้องตามหลักสากล เพื่อให้ Google จัดอันดับแบรนด์ของคุณในฐานะผู้นำอุตสาหกรรม",
      icon: "Globe",
    },
  ],

  // [FAQ_ENGINE]: 7 ข้อสงสัยที่ฝ่ายบริหารและจัดซื้อต้องการคำตอบ
  faqs: [
    {
      question: "ทำไมราคาสูงกว่าฟรีแลนซ์ทั่วไป?",
      answer:
        "เพราะนี่ไม่ใช่แค่ค่าทำเว็บครับ แต่คือค่าที่ปรึกษาทางภาพลักษณ์และระบบความปลอดภัย ฟรีแลนซ์ทั่วไปอาจเน้นแค่ความสวย แต่เราวางโครงสร้างเพื่อรองรับธุรกิจระดับองค์กร ที่ต้องมีความเสถียร รองรับ PDPA และมีความน่าเชื่อถือในสายตาคู่ค้าระดับโลกครับ",
    },
    {
      question: "ใช้ WordPress หรือเขียนโค้ดใหม่?",
      answer:
        "เราใช้ Next.js (เทคโนโลยีเดียวกับ Facebook/Netflix) ในการเขียนใหม่ครับ ข้อดีคือเร็วกว่า ปลอดภัยกว่า และยืดหยุ่นกว่า WordPress มาก ไม่ต้องคอยพะวงเรื่อง Plugin จะโดนแฮก หรือเว็บจะอืดเมื่อคนเข้าเยอะครับ",
    },
    {
      question: "รองรับกฎหมาย PDPA ไหม?",
      answer:
        "รองรับ 100% ครับ เราติดตั้งระบบ Cookie Consent Banner และจัดทำหน้านโยบายความเป็นส่วนตัว (Privacy Policy) ให้ถูกต้องตามกฎหมาย เพื่อปกป้ององค์กรของคุณจากการถูกฟ้องร้องครับ",
    },
    {
      question: "พนักงานอัปเดตข้อมูลเองได้ไหม?",
      answer:
        "ได้แน่นอนครับ เราทำระบบหลังบ้าน (CMS) ที่ใช้งานง่ายเหมือนพิมพ์งานใน Word ให้ฝ่าย PR หรือ HR สามารถลงข่าวสารกิจกรรมหรือประกาศรับสมัครงานได้เองทันที โดยมีคู่มือการใช้งานอบรมให้ฟรีครับ",
    },
    {
      question: "ออกใบกำกับภาษีได้ไหม?",
      answer:
        "สามารถออกใบเสนอราคาและใบเสร็จรับเงิน/ใบกำกับภาษีเต็มรูปแบบในนามบุคคลหรือนิติบุคคลได้ครับ เพื่อให้ฝ่ายบัญชีของคุณทำงานได้สะดวกที่สุด",
    },
    {
      question: "ใช้เวลาทำนานเท่าไหร่?",
      answer:
        "สำหรับเว็บไซต์องค์กรขนาดมาตรฐาน ใช้เวลาประมาณ 14-20 วันครับ ขึ้นอยู่กับความรวดเร็วในการตรวจสอบและอนุมัติแบบ (Approval Process) ของทางลูกค้าด้วยครับ",
    },
    {
      question: "มีบริการดูแลหลังการขายไหม?",
      answer:
        "เรามีประกันดูแลแก้บั๊กฟรี 3 เดือนแรกครับ หลังจากนั้นมีแพ็กเกจ Maintenance รายปีให้บริการ (ดูแล Server, ต่ออายุโดเมน, สำรองข้อมูล) เพื่อให้เว็บไซต์ของคุณทำงานราบรื่นตลอด 24 ชั่วโมงโดยไม่ต้องจ้างฝ่ายไอทีเพิ่มครับ",
    },
  ],

  // [KEYWORD_INJECTION]: คีย์เวิร์ดสำหรับ B2B และ Corporate
  keywords: [
    "รับทำเว็บไซต์บริษัท",
    "ออกแบบเว็บไซต์องค์กร",
    "ทำเว็บ Corporate Identity",
    "บริษัทรับทำเว็บไซต์มืออาชีพ",
    "รับทำเว็บ Next.js",
    "ทำเว็บไซต์บริษัทมหาชน",
    "ออกแบบ UX/UI องค์กร",
  ],

  priority: 2,
  isFeatured: true,
};
```

### CONFIG: hotel-resort.ts

`Path: constants/services/hotel-resort.ts`

```typescript
/**
 * [SERVICE_NODE]: LUXURY_HOSPITALITY_ENGINE v18.0.0 (HUMAN_OPTIMIZED)
 * [STRATEGY]: Direct Booking Focus | High-End Imagery | Zero-Emoji
 * [MAINTAINER]: AEMZA MACKS
 */

import type { TemplateMasterData } from "@/types";

export const hotelResortService: TemplateMasterData = {
  id: "AEM-SVC-HR-08",
  title:
    "Luxury Hotel & Resort Website | เปลี่ยนยอดวิวเป็นยอดจองตรง เลิกจ่ายค่าคอมฯ OTA โดยไม่จำเป็น",
  description:
    "หยุดเฉือนกำไร 15-20% ให้กับเว็บนายหน้า (OTA) สร้างอาณาจักรดิจิทัลของคุณเองด้วยเว็บไซต์โรงแรมระดับ High-End ที่ถ่ายทอดประสบการณ์การพักผ่อนได้เหนือกว่า และเปลี่ยนผู้ชมให้กลายเป็นแขกที่กดจองตรงกับคุณทันที",
  image: "/images/services/hotel-resort-node.webp",
  templateSlug: "hotelresort",
  category: "business",
  price: "16,900",
  priceValue: 16900,
  currency: "THB",
  unit: "เริ่มต้น / โปรเจกต์",

  // [THEME_ADJUSTMENT]: ธีมสีทอง-ดำ (Gold/Dark) สื่อถึงความหรูหราและ Exclusive
  theme: {
    mode: "dark",
    foreground: "#f8fafc", // Slate 50 (สีขาวนวล อ่านสบายตาบนพื้นมืด)
    token: "gold",
    primary: "#D4AF37", // Metallic Gold (ทองคำ)
    secondary: "#1A1A1A", // Dark Contrast
    background: "#0a0a0a", // Deep Black (ดำสนิท ขับให้รูปห้องพักเด่น)
    accent: "#B8860B", // Dark Goldenrod
    gradient: "from-[#D4AF37]/15 via-transparent to-transparent",
  },

  // [TRUST_SIGNAL]: เน้นภาพลักษณ์และมาตรฐาน
  clientTrust:
    "Luxury Standard: ยกระดับภาพลักษณ์ที่พักให้ดูแพงสมราคา สร้างความมั่นใจให้นักท่องเที่ยวทั่วโลกกล้ากดจอง",

  // [BENEFITS]: เน้นแก้ Pain Point เรื่อง OTA และการสร้างแบรนด์
  benefits: [
    "ทวงคืนกำไรของคุณ: การมีเว็บจองตรง (Direct Booking) ช่วยให้คุณประหยัดค่าคอมมิชชั่น OTA ได้มหาศาลในระยะยาว เงินส่วนนั้นสามารถนำมาทำโปรโมชั่นหรือพัฒนาโรงแรมได้อีกเยอะ",
    "โชว์ของได้เต็มที่: ใน Agoda โรงแรมคุณเป็นแค่หนึ่งในตัวเลือกที่หน้าตาเหมือนคนอื่นหมด แต่ในเว็บไซต์นี้ คุณคือพระเอก เราดีไซน์ให้รูปภาพและวิดีโอทำงานหนักเพื่อขายประสบการณ์การพักผ่อนที่ดีที่สุด",
    "ฐานข้อมูลลูกค้าเป็นของคุณ: เมื่อจองตรง คุณจะได้ Data ลูกค้าครบถ้วน (Email/เบอร์โทร) เพื่อทำ CRM ส่งโปรโมชั่นกลับไปหาพวกเขาได้ฟรีๆ ในอนาคต โดยไม่ต้องเสียเงินยิงแอดซ้ำ",
  ],

  // [CORE_FEATURES]: ฟีเจอร์ที่เน้นประสบการณ์และการขาย
  coreFeatures: [
    {
      title: "Immersive Visual Experience",
      description:
        "ระบบแกลเลอรี่ห้องพักที่คมชัดบาดตา โหลดไวเหมือนดีดนิ้ว ช่วยให้นักท่องเที่ยว 'รู้สึก' ถึงความนุ่มของเตียงและวิวนอกหน้าต่างก่อนที่จะมาถึง",
      icon: "Camera",
    },
    {
      title: "Seamless Booking Engine",
      description:
        "ปุ่มจองที่กดง่ายที่สุด เชื่อมต่อกับระบบเช็คห้องว่างแบบ Real-time ให้ลูกค้าตัดสินใจจ่ายเงินได้ทันที 24 ชั่วโมง",
      icon: "CalendarCheck",
    },
    {
      title: "Global SEO Structure",
      description:
        "วางโครงสร้างคำค้นหาภาษาอังกฤษ/จีน/รัสเซีย เพื่อดักจับนักท่องเที่ยวเกรดพรีเมียมจาก Google ทั่วโลกให้มาเจอคุณ",
      icon: "Globe",
    },
  ],

  // [FAQ_ENGINE]: 7 ข้อสงสัยของเจ้าของโรงแรม (OTA, System, Price)
  faqs: [
    {
      question: "จำเป็นต้องมีเว็บไหม ในเมื่อลง Agoda/Booking อยู่แล้ว?",
      answer:
        "จำเป็นมากครับ เพราะ OTA คือ 'ช่องทางหารู้จัก' แต่เว็บไซต์คือ 'ช่องทางทำกำไร' ลูกค้าจำนวนมากชอบไปดูรีวิวใน Agoda แล้วมาค้นชื่อโรงแรมใน Google เพื่อหาโปรจองตรงที่คุ้มกว่า ถ้าคุณไม่มีเว็บรองรับ คุณกำลังทิ้งเงินก้อนโตไปครับ",
    },
    {
      question: "เชื่อมต่อกับระบบจอง (Channel Manager) เดิมได้ไหม?",
      answer:
        "ได้ครับ เราออกแบบเว็บให้รองรับการฝัง Booking Engine ชั้นนำได้ทุกค่าย (เช่น SiteMinder, Cloudbeds, Little Hotelier) เพื่อให้สต็อกห้องพักตัดตรงกันเป๊ะ ไม่ต้องกลัว Overbooking ครับ",
    },
    {
      question: "ไม่มีรูปสวยๆ เลย ทางทีมช่วยถ่ายให้ไหม?",
      answer:
        "รูปภาพคือหัวใจของโรงแรมครับ ถ้ายังไม่มี ผมมีพาร์ทเนอร์ช่างภาพสายโรงแรมมืออาชีพแนะนำให้ได้ครับ เพื่อให้เว็บออกมาดูแพงและน่าพักที่สุด การลงทุนกับรูปภาพคุ้มค่าเสมอครับ",
    },
    {
      question: "ทำเว็บหลายภาษาได้ไหม?",
      answer:
        "ทำได้ครับ โครงสร้างเรารรองรับ Multi-language เต็มรูปแบบ จะเพิ่มภาษาจีน รัสเซีย หรือญี่ปุ่น เพื่อเจาะกลุ่มนักท่องเที่ยวเฉพาะชาติก็ทำได้ง่ายๆ ครับ",
    },
    {
      question: "อัปเดตราคาโปรโมชั่นเองได้ยากไหม?",
      answer:
        "ง่ายเหมือนโพสต์ Facebook ครับ เราทำระบบหลังบ้านให้ฝ่าย Reservation หรือ Marketing เข้าไปเปลี่ยนแบนเนอร์โปรโมชั่น หรือแก้ไขราคาห้องพักหน้าเว็บได้เองทันที",
    },
    {
      question: "รองรับการชำระเงินผ่านบัตรเครดิตไหม?",
      answer:
        "รองรับครับ เราสามารถเชื่อมต่อ Payment Gateway (เช่น GB Prime, 2C2P, Stripe) เพื่อให้ลูกค้าต่างชาติรูดบัตรจองห้องพักได้ทันที ตัดปัญหาการโอนเงินข้ามประเทศครับ",
    },
    {
      question: "คุ้มค่าลงทุนไหม?",
      answer:
        "ลองคำนวณดูครับ ถ้าปกติคุณเสียค่าคอม OTA เดือนละ 2-3 หมื่นบาท การทำเว็บจองตรงจ่ายครั้งเดียวจบ แค่ลูกค้าจองตรงเข้ามาไม่กี่คืน ก็คืนทุนค่าทำเว็บแล้วครับ ที่เหลือคือกำไรระยะยาวของคุณ",
    },
  ],

  // [KEYWORD_INJECTION]: คีย์เวิร์ดสำหรับธุรกิจท่องเที่ยวและที่พัก
  keywords: [
    "รับทำเว็บไซต์โรงแรม",
    "ออกแบบเว็บไซต์รีสอร์ตหรู",
    "ทำเว็บวิลล่า พูลวิลล่า",
    "ระบบจองที่พักออนไลน์",
    "Hotel Website Design Thailand",
    "ทำเว็บไซต์ท่องเที่ยว",
    "รับทำเว็บโฮมสเตย์",
  ],

  priority: 6,
  isFeatured: true,
};
```

### CONFIG: local-authority.ts

`Path: constants/services/local-authority.ts`

```typescript
/**
 * [SERVICE_NODE]: LOCAL_DOMINATION_ENGINE v18.0.2 (ACCESSIBILITY_VERIFIED)
 * [STRATEGY]: Hyper-Local Targeting | Map Pack Dominance | Zero-Emoji
 * [MAINTAINER]: AEMZA MACKS
 */

import type { TemplateMasterData } from "@/types";

export const localAuthorityService: TemplateMasterData = {
  id: "AEM-SVC-LS-10",
  // [SEO_HOOK]: ใช้คำว่า "ยึดทำเลทอง" เพื่อกระตุ้น FOMO (Fear Of Missing Out)
  title: "Local SEO & Google Maps | ยึดทำเลทองหน้าแรก ดึงลูกค้าพื้นที่เข้าร้านทันที",
  description:
    "เปลี่ยนหมุดธุรกิจของคุณให้เป็นแม่เหล็กดูดเงิน ด้วยกลยุทธ์ Local SEO ที่จะดันร้านคุณขึ้นอันดับ 1-3 ใน 'Google Map Pack' ตัดหน้าคู่แข่งที่ยิงแอด โดยไม่ต้องเสียค่าโฆษณาสักบาท",

  image: "/images/services/local-node.webp",
  templateSlug: "local-authority",
  category: "business",

  // [PRICING_STRATEGY]: Entry Level ที่ตัดสินใจง่ายสำหรับ SMEs
  price: "6,900",
  priceValue: 6900,
  currency: "THB",
  unit: "เริ่มต้น / สาขา",

  // [THEME_ENGINE]: Emerald 700 (#047857) on Slate 100 (#f1f5f9) = Contrast 7.5:1 (AAA Pass)
  theme: {
    mode: "light",
    primary: "#047857",
    secondary: "#022c22",
    background: "#f1f5f9",
    foreground: "#0f172a",
    accent: "#34d399",
    gradient: "bg-gradient-to-br from-[#047857]/10 via-transparent to-transparent",
  },

  // [TRUST_SIGNAL]: ตัวเลขที่วัดผลได้จริง (Calls/Directions)
  clientTrust:
    "Local Dominance: ธุรกิจกว่า 500+ แห่ง มียอดการโทร (Calls) และขอเส้นทาง (Directions) เพิ่มขึ้น 300% ภายใน 90 วัน",

  // [BENEFITS]: แก้ Pain Point เรื่อง 'เงียบเหงา' และ 'โดนแย่งลูกค้า'
  benefits: [
    "ยึดพื้นที่ไข่แดง (Map Pack): การติด Top 3 บนแผนที่คือทำเลที่ดีที่สุด เพราะลูกค้ากลุ่มนี้คือ High Intent (กำเงินพร้อมซื้อ) ไม่ใช่แค่ดูเล่นๆ",
    "สร้างเกราะป้องกันด้วยรีวิว: ระบบบริหารจัดการ Reputation Management ทำให้อัตราดาวของคุณสูงกว่าคู่แข่ง ซึ่งเป็นปัจจัยอันดับ 1 ในการตัดสินใจเข้าร้าน",
    "Organic Traffic ถาวร: เมื่อหมุดแข็งแกร่ง คุณจะได้ลูกค้าฟรีตลอดไป เลิกเป็นทาสค่าแอด Facebook ที่แพงขึ้นทุกวัน",
  ],

  // [CORE_FEATURES]: Technical Terms ที่ดูมืออาชีพแต่เข้าใจง่าย
  coreFeatures: [
    {
      title: "GMB Optimization Pro",
      description:
        "ปรับแต่ง Google Business Profile ครบ 100% (Categories, Attributes, Photos) เพื่อให้ Algorithm ของ Google ดันอันดับสูงสุด",
      icon: "MapPin",
    },
    {
      title: "NAP Consistency",
      description:
        "สร้างเครือข่ายอ้างอิง (Citations) ชื่อ-ที่อยู่-เบอร์โทร ให้ตรงกันทั่วโลกอินเทอร์เน็ต เพื่อยืนยันความมีตัวตนจริง (Authority Signal)",
      icon: "Globe",
    },
    {
      title: "Review Response System",
      description:
        "ระบบช่วยตอบรีวิวลูกค้าด้วย Keyword Strategy เพื่อเปลี่ยนคำติชมให้กลายเป็นคะแนน SEO",
      icon: "Star",
    },
  ],

  // [FAQ_ENGINE]: ดักข้อโต้แย้ง (Objection Handling) ครบทุกมิติ
  faqs: [
    {
      question: "ทำไมต้องทำ Local SEO ทั้งที่มีเพจ Facebook อยู่แล้ว?",
      answer:
        "เพราะ 'เจตนา' (Intent) ต่างกันครับ คนเล่น Facebook เพื่อบันเทิง แต่คนค้น Google Maps คือคนที่ 'หิว/รถเสีย/ป่วย' และต้องการใช้บริการเดี๋ยวนั้น โอกาสปิดการขายจึงสูงกว่า Facebook ถึง 10 เท่า",
    },
    {
      question: "รับประกันอันดับ 1 ไหม?",
      answer:
        "ไม่มีใครสั่ง Google ได้ครับ แต่สถิติของเราคือลูกค้า 90% ขยับติด Top 3 (Map Pack) ภายใน 3-4 เดือน ด้วยเทคนิคสายขาวที่ปลอดภัยและยั่งยืนครับ",
    },
    {
      question: "ไม่มีหน้าร้าน (Service Area) ทำได้ไหม?",
      answer:
        "ทำได้และควรทำครับ! สำหรับช่างแอร์, รับเหมา หรือเดลิเวอรี่ เราจะตั้งค่าแบบ 'Service Area Business' (SAB) ให้คุณแสดงตัวตนในพื้นที่ให้บริการโดยไม่ต้องเปิดเผยที่อยู่บ้าน",
    },
    {
      question: "ต้องทำเว็บด้วยไหม?",
      answer:
        "ไม่บังคับครับ แต่การมี 'Salepage หน้าเดียว' ที่เชื่อมกับหมุด จะช่วยดันคะแนน Authority ให้หมุดติดอันดับง่ายขึ้นมาก ซึ่งเรามีแพ็กเกจคู่กันในราคาพิเศษครับ",
    },
    {
      question: "ธุรกิจแบบไหนคุ้มที่สุด?",
      answer:
        "ธุรกิจที่มีหน้าร้านหรือให้บริการในพื้นที่ครับ เช่น ร้านอาหาร, คลินิก, อู่ซ่อมรถ, ร้านตัดผม, ร้านนวด, ทนายความ หรือธุรกิจรับเหมาต่างๆ",
    },
    {
      question: "ช่วยแก้หมุดซ้ำ หรือกู้คืนสิทธิ์เจ้าของได้ไหม?",
      answer:
        "ได้ครับ ทีมงานเราเชี่ยวชาญการเคลียร์หมุดขยะ (Duplicate Listings) และยื่นเรื่องกู้คืนสิทธิ์ (Ownership Claim) กับ Google Support โดยตรงครับ",
    },
    {
      question: "หลังทำเสร็จ อันดับจะอยู่ถาวรไหม?",
      answer:
        "หมุดอยู่ถาวรครับ แต่อันดับคือการแข่งขัน เราแนะนำให้มีการเคลื่อนไหว (Post/Photo Update) เดือนละ 1-2 ครั้ง เพื่อรักษาแชมป์ ซึ่งเรามีคู่มือสอนให้ทำเองได้ง่ายๆ ครับ",
    },
  ],

  keywords: [
    "รับทำ Local SEO",
    "รับปักหมุด Google Maps",
    "ทำ SEO ร้านอาหาร",
    "เพิ่มยอดขายหน้าร้าน",
    "Google Business Profile Service",
    "ทำ SEO คลินิก",
    "การตลาดท้องถิ่น",
  ],

  priority: 3,
  isFeatured: true,
};
```

### CONFIG: salepage.ts

`Path: constants/services/salepage.ts`

```typescript
/**
 * [SERVICE_NODE]: SALE_PAGE_CONVERSION_KING v18.0.1 (LINE_API_UPDATED)
 * [STRATEGY]: High Contrast | Dark Aggressive | Hex Standard
 * [MAINTAINER]: AEMZA MACKS
 */

import type { TemplateMasterData } from "@/types";

export const salePageService: TemplateMasterData = {
  id: "AEM-SVC-SP-01",
  title: "High-Conversion Sale Page | ปิดการขายไว ยิงแอดแม่น ไม่โดนปิดกั้น",
  description:
    "หยุดตำน้ำพริกละลายแม่น้ำกับค่าแอดที่แพงหูฉี่ เปลี่ยนงบโฆษณาให้เป็นยอดโอนด้วย Sale Page โครงสร้างคลีนที่โหลดไวระดับปีศาจ รองรับ Conversion API 100% ช่วยให้ AI ของ Facebook และ TikTok นำส่งแม่นยำขึ้น และเปลี่ยนคนดูขาจรให้กลายเป็นลูกค้าทันที",
  image: "/images/services/salepage-node.webp",
  templateSlug: "salepage",
  category: "landing",
  price: "3,500",
  priceValue: 3500,
  currency: "THB",
  unit: "เริ่มต้น / หน้า",

  // [THEME_FIX]: ใช้ Hex Code ล้วน (Rose/Crimson Theme) สื่อถึงความเร่งด่วนและพลังงาน
  theme: {
    mode: "dark",
    primary: "#fb7185", // Rose 400
    secondary: "#9f1239", // Rose 900
    background: "#270308", // Dark Crimson
    foreground: "#fff1f2", // Rose 50
    accent: "#e11d48", // Rose 600
    gradient: "from-[#e11d48]/20 via-transparent to-transparent",
  },

  // [TRUST_SIGNAL]: เน้นเรื่องความคุ้มค่าของค่าแอด (ROAS)
  clientTrust:
    "Performance Proven: พิสูจน์แล้วว่าช่วยลดต้นทุนต่อการซื้อ (Cost-per-Purchase) ได้จริงกว่า 40%",

  // [BENEFITS]: เน้นแก้ Pain Point เรื่องแอดแพงและการโดนปิดกั้น
  benefits: [
    "เลิกเสี่ยงโดนปิดกั้น: เราเขียนโค้ดด้วยโครงสร้าง Clean Semantic ที่ Bot ของ Facebook และ TikTok รัก ช่วยลดโอกาสที่ AI จะเข้าใจผิดว่าเป็นเว็บสแปมหรือสายเทา",
    "สะกดจิตให้กดโอน: วางเลย์เอาต์ตามหลักจิตวิทยา Neuromarketing ไล่ระดับอารมณ์จาก 'สงสัย' เป็น 'อยากได้' และจบที่ 'กลัวพลาด' จนต้องกดสั่งซื้อทันที",
    "ป้อนข้อมูลให้ AI ฉลาดขึ้น: ไม่ใช่แค่ติด Pixel ธรรมดา แต่เราวางระบบ Server-Side API (CAPI) ส่งค่ากลับไปบอก Facebook ว่าใครคือลูกค้าตัวจริง ช่วยให้แอดวิ่งหาคนแม่นขึ้นเรื่อยๆ",
  ],

  // [CORE_FEATURES]: ฟีเจอร์ที่เน้นความเร็วและการกระตุ้น
  coreFeatures: [
    {
      title: "Speed-First Architecture",
      description:
        "ทำคะแนน Google PageSpeed 95-100 เพื่อให้เว็บโหลดเสร็จก่อนที่ลูกค้าจะเปลี่ยนใจกดออก (ทุก 1 วินาทีที่ช้า คือเงินที่หายไป)",
      icon: "Zap",
    },
    {
      title: "Sticky CTA & FOMO Engine",
      description:
        "ปุ่มสั่งซื้อที่ตามติดหน้าจอตลอดเวลา พร้อมระบบนับถอยหลังและแจ้งเตือนการซื้อล่าสุด เพื่อกระตุ้นความกลัวที่จะพลาดของมีจำนวนจำกัด",
      icon: "MousePointerClick",
    },
    {
      title: "Cross-Platform Perfect",
      description:
        "แสดงผลสวยคมกริบทุกพิกเซล ไม่ว่าจะเปิดผ่าน TikTok Browser, Line OA หรือ Facebook In-App Browser ไม่มีการแสดงผลเพี้ยนให้เสียอารมณ์",
      icon: "Smartphone",
    },
  ],

  // [FAQ_ENGINE]: 7 ข้อโต้แย้งหลักสำหรับคนยิงแอด (Platform, Price, Tech)
  faqs: [
    {
      question: "Sale Page นี้ต่างจากเว็บสำเร็จรูปรายเดือนยังไง?",
      answer:
        "แบบรายเดือนคุณคือ 'คนเช่า' ครับ ปรับแต่งโค้ดลึกๆ ไม่ได้ และถ้าหยุดจ่ายเว็บก็ปลิว แต่ของผมคือการสร้างบน Next.js ที่เป็น 'สินทรัพย์' ของคุณ 100% เร็วกว่า ปรับแต่งได้อิสระ ไม่ต้องจ่ายรายเดือน และเป็นเจ้าของตลอดชีพครับ",
    },
    {
      question: "ช่วยติดตั้ง Pixel และ Conversion API ให้ไหม?",
      answer:
        "ทำให้ครบจบเลยครับ! นี่คือหัวใจสำคัญ ผมจะ Setup Event มาตรฐาน (ViewContent, AddToCart, Purchase) ให้แม่นยำที่สุด และทดสอบให้ดูว่าค่าส่งกลับไปที่ตัวจัดการโฆษณาจริง เพื่อให้คุณไปยิงแอดต่อได้ทันทีโดยไม่ต้องปวดหัว",
    },
    {
      question: "แก้ไขข้อมูลเองภายหลังได้ไหม?",
      answer:
        "ได้ครับ สำหรับการแก้ไขพื้นฐาน (รูปภาพ/ข้อความ) ผมสามารถเชื่อมต่อระบบหลังบ้านให้ได้ แต่โดยปกติ Sale Page แบบ High-Performance มักจะนิ่งหลังจากการเทสต์ ผมแนะนำให้แก้ไขผ่านผมเพื่อรักษาโครงสร้างความเร็วและความสวยงามจะดีที่สุดครับ",
    },
    {
      question: "ต้องเตรียมอะไรบ้างก่อนเริ่มงาน?",
      answer:
        "เตรียมแค่ 3 อย่างครับ: 1. รูปภาพสินค้าและรีวิว 2. รายละเอียดโปรโมชั่น/ราคา 3. บัญชี Facebook Pixel/TikTok Pixel ID ที่เหลือผมจัดการร้อยเรียงเรื่องราวและวางโครงสร้างให้ทั้งหมดครับ",
    },
    {
      question: "รองรับการเก็บเงินปลายทาง (COD) ไหม?",
      answer:
        "รองรับแน่นอนครับ ฟอร์มสั่งซื้อของเราออกแบบมาให้กรอกง่ายที่สุดเพื่อลดการกดออก เลือกได้ทั้งโอนเงินหรือปลายทาง ข้อมูลจะถูกบันทึกลง Google Sheets และแจ้งเตือนเข้า LINE OA (Messaging API) ของคุณแบบ Real-time ทันทีครับ (เราใช้ระบบ API มาตรฐานใหม่ ทดแทน LINE Notify ที่ปิดตัวลง หมดกังวลเรื่องการแจ้งเตือนไม่เด้งครับ)",
    },
    {
      question: "ใช้เวลากี่วันเสร็จ รีบใช้ยิงแอด?",
      answer:
        "เข้าใจคนยิงแอดครับว่าเวลามีค่า ปกติใช้เวลา 2-3 วันหลังจากได้ข้อมูลครบ แต่ถ้ารีบมากๆ สามารถแจ้งได้ครับ ผมมีแพ็กเกจ Express เร่งด่วน 24 ชั่วโมงสำหรับคนใจร้อนอยากเทสต์แอดไวๆ",
    },
    {
      question: "สายเทาทำได้ไหม?",
      answer:
        "โดยพื้นฐานผมรับสายขาวเป็นหลักครับ แต่ถ้าสินค้ามีความสุ่มเสี่ยง (เช่น อาหารเสริมบางชนิด) ผมสามารถช่วยปรับคำและโครงสร้างให้ดูน่าเชื่อถือและปลอดภัยต่อ AI ตรวจจับได้ แต่ไม่รับประกันเรื่องการโดนแบนบัญชีโฆษณานะครับ เพราะปัจจัยหลักอยู่ที่ตัวบัญชีและคอนเทนต์โฆษณาด้วยครับ",
    },
  ],

  // [KEYWORD_INJECTION]: คีย์เวิร์ดสำหรับสายยิงแอดและพ่อค้าแม่ค้าออนไลน์
  keywords: [
    "รับทำ Sale Page ยิงแอด",
    "ทำ Landing Page TikTok",
    "Sale Page สายขาว",
    "รับทำเว็บหน้าเดียว ราคาถูก",
    "Conversion API Facebook Setup",
    "จ้างทำ Sale Page Next.js",
    "Sale Page โหลดเร็ว",
  ],

  priority: 1,
  isPopular: true,
  isFeatured: true,
};
```

### CONFIG: seo-agency.ts

`Path: constants/services/seo-agency.ts`

```typescript
/**
 * [SERVICE_NODE]: SEO_AUTHORITY_ENGINE v18.0.1 (FAQ_EXPANDED)
 * [STRATEGY]: High-Intent Conversion | Semantic Authority | Zero-Emoji
 * [MAINTAINER]: AEMZA MACKS
 */

import type { TemplateMasterData } from "@/types";

export const seoAgencyService: TemplateMasterData = {
  id: "AEM-SVC-SEO-07",
  title: "Technical SEO & Authority Building | ยึดพื้นที่ทำเลทองบน Google ด้วยวิศวกรรมข้อมูล",
  description:
    "เลิกเอาเงินไปละลายกับค่าโฆษณาที่แพงขึ้นทุกวัน เปลี่ยนเว็บไซต์ของคุณให้เป็นพนักงานขายมือหนึ่งที่ทำงานตลอด 24 ชั่วโมง ด้วยการปรับจูนโครงสร้างหลังบ้านให้ถูกหลัก Google และสร้างเนื้อหาที่ลูกค้าค้นหาเจอในวันที่เขาพร้อมจ่ายเงิน",
  image: "/images/services/seo-agency-node.webp",
  templateSlug: "seo-agency",
  category: "business",
  price: "19,500",
  priceValue: 19500,
  currency: "THB",
  unit: "เริ่มต้น / เดือน",

  // [THEME_ENGINE]: ใช้ Hex Code ล้วนเพื่อความแม่นยำในการเรนเดอร์ (Emerald Growth Theme)
  theme: {
    mode: "dark",
    primary: "#10b981", // Emerald 500 (สีเขียวแห่งการเติบโตและผลกำไร)
    secondary: "#064e3b", // Emerald 900
    background: "#020617", // Slate 950 (พื้นหลังมืดแบบมืออาชีพ)
    foreground: "#f0fdf4", // Emerald 50
    accent: "#34d399", // Emerald 400
    gradient: "from-[#10b981]/20 via-transparent to-transparent",
  },

  // [TRUST_SIGNAL]: ตัวเลขจริงที่พิสูจน์ได้ ไม่ใช่แค่คำคุย
  clientTrust: "Proven Results: ดันเว็บลูกค้าติดหน้าแรกในกลุ่มอุตสาหกรรมแข่งขันสูงกว่า 50+ ราย",

  // [BENEFITS]: เน้นผลลัพธ์ทางธุรกิจ (ROI) มากกว่าแค่เรื่อง Traffic
  benefits: [
    "เลิกเช่าที่ทำกิน: หยุดพึ่งพา Facebook Ads หรือ Google Ads เพียงอย่างเดียว สร้าง Traffic ของคุณเองที่เป็นสินทรัพย์ระยะยาว ยิ่งนานวันต้นทุนต่อลูกค้าหนึ่งคนยิ่งถูกลง",
    "ซ่อมบ้านก่อนรับแขก: เราไม่ได้แค่เขียนบทความ แต่เราเข้าไปรื้อระบบหลังบ้าน แก้ไข Core Web Vitals และโครงสร้าง Code ให้ Google Bot วิ่งสะดวก เก็บข้อมูลได้ครบทุกหน้า",
    "ดักลูกค้าตอนพร้อมซื้อ: เราไม่เน้นยอดวิวขยะ แต่เน้นทำอันดับในคีย์เวิร์ดที่คนค้นหาตอนกำเงินมาพร้อมซื้อ (Commercial Intent) เพื่อให้ยอดเข้าชมเปลี่ยนเป็นยอดขายได้จริง",
  ],

  // [CORE_FEATURES]: อธิบายสิ่งที่ทำด้วยภาษามืออาชีพแต่น่าเชื่อถือ
  coreFeatures: [
    {
      title: "Technical Infrastructure Audit",
      description:
        "ตรวจเช็คสุขภาพเว็บไซต์แบบละเอียดทุกบรรทัดโค้ด ค้นหาจุดรั่วไหลที่ทำให้เว็บอืด หรือจุดตายที่ทำให้ Google มองไม่เห็นเว็บคุณ",
      icon: "Code2",
    },
    {
      title: "Semantic Content Strategy",
      description:
        "วางโครงสร้างเนื้อหาแบบใยแมงมุม (Topic Clusters) ให้ Google รู้ว่าคุณคือตัวจริงในวงการนี้ ช่วยให้ติดอันดับยกแผง ไม่ใช่แค่บทความเดียว",
      icon: "Network",
    },
    {
      title: "Conversion-Focused Analytics",
      description:
        "ติดตั้งระบบวัดผลที่ไม่ใช่แค่ดูยอดวิว แต่ดูว่าคนเข้ามาแล้วกดปุ่มสั่งซื้อไหม โทรหาคุณหรือเปล่า เพื่อนำข้อมูลมาปรับจูนให้ขายดียิ่งขึ้น",
      icon: "Activity",
    },
  ],

  // [FAQ_ENGINE]: 7 ข้อโต้แย้งหลักที่ลูกค้าต้องการคำตอบเพื่อปิดการขาย (Kill Objections)
  faqs: [
    {
      question: "ทำไมราคาถึงสูงกว่าฟรีแลนซ์ทั่วไป?",
      answer:
        "เพราะเราไม่ได้แค่เขียนบทความแล้วจบครับ แต่เราคือทีมวิศวกรและนักการตลาดที่เข้าไปปรับจูนโครงสร้างเว็บไซต์ของคุณใหม่ทั้งระบบ เพื่อแก้ปัญหาที่ต้นเหตุ ฟรีแลนซ์ทั่วไปอาจช่วยคุณได้เรื่องคอนเทนต์ แต่ถ้าโครงสร้างเว็บพัง เขียนดีแค่ไหน Google ก็ไม่จัดอันดับครับ",
    },
    {
      question: "ต้องทำนานแค่ไหนถึงจะเห็นผล?",
      answer:
        "SEO คือการวิ่งมาราธอน ไม่ใช่สปริ้นท์ครับ โดยปกติจะเริ่มเห็นความเปลี่ยนแปลงชัดเจนในช่วง 3-6 เดือนแรก แต่ข้อดีคือเมื่อติดอันดับแล้ว มันจะอยู่ตรงนั้นไปอีกนานโดยที่คุณไม่ต้องจ่ายเงินเพิ่มแม้แต่บาทเดียว เป็นการลงทุนที่คุ้มค่าที่สุดในระยะยาวครับ",
    },
    {
      question: "รับประกันอันดับ 1 ไหม?",
      answer:
        "ไม่มีใครเป็นเจ้าของ Google ครับ ดังนั้นใครที่การันตีอันดับ 1 ให้คุณระวังไว้เลยว่าอาจใช้วิธีสายดำที่เสี่ยงโดนแบน แต่สิ่งที่เราการันตีได้คือ Traffic คุณภาพที่เพิ่มขึ้นและอันดับที่ดีขึ้นอย่างต่อเนื่องด้วยวิธีสายขาวที่ปลอดภัยและยั่งยืน 100% ครับ",
    },
    {
      question: "มีเว็บอยู่แล้ว ต้องทำใหม่ไหม?",
      answer:
        "ไม่จำเป็นต้องทำใหม่เสมอไปครับ ทีมงานจะเข้าไป Audit เว็บเดิมก่อน ถ้าโครงสร้างพอไปไหวเราจะปรับปรุงจากของเดิม แต่ถ้าของเดิมเขียนโค้ดมาไม่ดีจนเป็นภาระ เราจะแนะนำทางเลือกที่คุ้มค่าที่สุดให้คุณพิจารณาก่อนเริ่มงานครับ",
    },
    {
      question: "มีรายงานผลให้ดูไหม จะรู้ได้ยังไงว่าคุ้มค่าจ้าง?",
      answer:
        "เรามี Dashboard รายงานผลที่อ่านง่าย ไม่ใช้ภาษายากๆ ให้ปวดหัวครับ คุณจะเห็นเลยว่าเดือนนี้มีคนเข้าเว็บเพิ่มกี่คน มาจากคำว่าอะไรบ้าง และที่สำคัญคือเกิดยอดขายเท่าไหร่ เราเน้นความโปร่งใส ตรวจสอบการทำงานย้อนหลังได้ทุกเดือนครับ",
    },
    {
      question: "เลือกคีย์เวิร์ดเองได้ไหม หรือทีมงานเลือกให้?",
      answer:
        "ลูกค้าเสนอได้ครับ แต่เราขออนุญาตทำหน้าที่ที่ปรึกษา ช่วยสแกนดูว่าคีย์เวิร์ดนั้น 'ทำเงิน' จริงไหม บางคำคนค้นหาเยอะแต่แค่มาหาความรู้เฉยๆ ไม่ได้กะซื้อ เราจะคัดกรองคำที่คนพร้อมจ่ายเงินจริงๆ มาให้เลือก เพื่อให้คุ้มค่างบประมาณที่สุดครับ",
    },
    {
      question: "ถ้าจบสัญญาแล้วหยุดทำ อันดับจะหายไปเลยไหม?",
      answer:
        "ไม่หายวับไปทันทีเหมือนหยุดยิงแอดครับ นี่คือเสน่ห์ของ SEO เพราะสิ่งที่เราสร้างไว้คือสินทรัพย์ของคุณ แต่อาจจะค่อยๆ แผ่วลงถ้าคู่แข่งขยับตัวแรง ดังนั้นถ้าติดลมบนแล้ว อาจจะปรับมาเป็นแพ็กเกจดูแลรักษาระดับเบาๆ เพื่อประคองอันดับไว้ก็ได้ครับ",
    },
  ],

  // [KEYWORD_INJECTION]: คีย์เวิร์ดเน้นๆ สำหรับดักลูกค้าเข้าหน้านี้
  keywords: [
    "รับทำ SEO สายขาว",
    "บริษัทรับทำ SEO",
    "ปรับปรุงเว็บไซต์ให้ติดหน้าแรก",
    "SEO Audit เว็บไซต์",
    "จ้างทำ SEO ที่ไหนดี",
    "Technical SEO Specialist",
    "Content Marketing สาย SEO",
    "ทำ SEO เพิ่มยอดขาย",
  ],

  priority: 1,
  isFeatured: true,
};
```

### CONFIG: site-config.ts

`Path: constants/site-config.ts`

```typescript
/**
 * [SYSTEM CORE]: GLOBAL_SITE_CONFIGURATION v18.0.0 (UNIVERSAL_SYNC)
 * [STRATEGY]: AI-Search Domination | E-E-A-T Authority | SSOT
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { SiteConfig } from "@/types";

const GOOGLE_MAPS_URL = "https://share.google/MMWnXPv3evv4Qd8aC";

export const SITE_CONFIG: SiteConfig = {
  brandName: "AEMDEVWEB",
  siteUrl: "https://www.aemdevweb.com",
  description:
    "AEMDEVWEB | Web Infrastructure & Technical SEO Specialist พัฒนาเว็บไซต์ประสิทธิภาพสูงเพื่อยึดครองพื้นที่บน Google และ AI Answer Engines อย่างยั่งยืน",
  logo: "/images/logo-main.webp",

  // [INFRASTRUCTURE]: Assets must use Relative Paths for Next.js Optimization
  ogImage: "/images/og-main.webp",
  locale: "th_TH",
  themeColor: "#ef4444",

  hero: {
    title: "AEMDEVWEB HYPER-PERFORMANCE ARCHITECTURE",
    description:
      "โครงสร้างเว็บไซต์และกลยุทธ์ Technical SEO ระดับวิศวกรรม เพื่อสร้างอำนาจการจัดอันดับในยุค AI-Search 2026 โดย นายเอ็มซ่ามากส์",
    primaryAction: "วางแผนระบบกับ Specialist",
    secondaryAction: "วิเคราะห์โซลูชันทั้งหมด",
  },

  persona: {
    tone: "Strategic Partner, Technical Authority, Business-Centric",
    communicationStyle: "Result-oriented, Friendly Specialist, Transparent & Logical",
    antiConnotation: "No Fluff, No Robot-speak, Avoid Over-promising",
  },

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
    "AI Search Optimization 2026",
  ],

  project: {
    title: "AEMDEVWEB | High-End Web & SEO Expert Hub (นายเอ็มซ่ามากส์)",
    shortTitle: "AEMDEVWEB",
    version: "18.0.0",
    framework: "Next.js 15.x (App Router)",
    uiStack: "React 19 + Tailwind CSS 4",
  },

  expert: {
    displayName: "นายเอ็มซ่ามากส์",
    legalName: "Alongkorn Yomkerd",
    legalNameThai: "อลงกรณ์ ยมเกิด",
    role: "Technical SEO Specialist",
    jobTitle: "Web Architect & Technical SEO Specialist",
    signature: "AEMZA MACKS",
    avatar: "/images/avatar.webp",
    email: "me@aemdevweb.com",
    bioUrl: "/services/bio",
    bio: "ผู้เชี่ยวชาญด้านวิศวกรรมเว็บไซต์และ Technical SEO ที่เน้นการสร้างผลลัพธ์ทางธุรกิจผ่านโครงสร้างพื้นฐานดิจิทัลที่แม่นยำและล้ำสมัย",
    googleMerchantId: "8653147979146207424",
    twitterHandle: "@aemdevweb",
  },

  contact: {
    email: "me@aemdevweb.com",
    phone: "099-032-2175",
    displayPhone: "099 032 2175 (สายด่วนปรึกษานายเอ็มซ่ามากส์)",
    address: "กำแพงเพชร, ประเทศไทย",
    streetAddress: "ตำบลในเมือง อำเภอเมืองกำแพงเพชร",
    postalCode: "62000",
    workHours: "จันทร์ - ศุกร์, 09:00 - 18:00 (Technical Support 24/7)",
    mapUrl: GOOGLE_MAPS_URL,
  },

  links: {
    line: "https://lin.ee/kVRNkIy",
    lineId: "@127cnhtn",
    messenger: "https://m.me/aemdevweb",
    facebook: "https://www.facebook.com/share/18HFcziyn7/",
    github: "https://github.com/aemdevweb",
    twitter: "https://x.com/aemdevweb",
    youtube: "https://youtube.com/@aemdevweb",
    googleMaps: GOOGLE_MAPS_URL,
    googleReview: "https://search.google.com/local/writereview?placeid=ChIJ0S9uG79lHTERERERERERERE",
  },

  business: {
    location: "กำแพงเพชร",
    region: "Northern Thailand",
    industry: "Digital Infrastructure & SEO",
    roiFocus: true,
    established: "2024",
    status: "Active",
    priceRange: "฿฿฿",
    ids: {
      businessProfileId: "17539943195708104348",
      storeCode: "01162024004001766449",
    },
  },

  analytics: { gaId: "G-XXXXXXXXXX" },

  verification: {
    google: "HmlcGbJ8eKWuc1QN_UUpBQ",
    facebook: "fb_domain_verification_id",
  },
} as const;
```

---

## DIRECTORY INFRASTRUCTURE

```text
[3.4K 2026-02-19 00:45]  .
├── [340K 2026-02-19 00:45]  README.md
├── [1.5K 2026-02-18 21:37]  a.sh
├── [3.4K 2026-02-18 21:37]  app
│   ├── [3.4K 2026-02-18 21:37]  (business)
│   │   ├── [3.4K 2026-02-18 21:37]  areas
│   │   │   ├── [3.4K 2026-02-18 21:37]  [slug]
│   │   │   │   └── [5.5K 2026-02-18 21:37]  page.tsx
│   │   │   └── [6.4K 2026-02-18 21:37]  page.tsx
│   │   ├── [3.4K 2026-02-18 21:37]  blog
│   │   │   ├── [3.4K 2026-02-18 21:37]  [slug]
│   │   │   │   └── [4.7K 2026-02-18 21:37]  page.tsx
│   │   │   └── [4.8K 2026-02-18 21:37]  page.tsx
│   │   ├── [3.4K 2026-02-18 21:37]  case-studies
│   │   │   ├── [3.4K 2026-02-18 21:37]  [slug]
│   │   │   │   └── [5.1K 2026-02-18 21:37]  page.tsx
│   │   │   └── [4.0K 2026-02-18 21:37]  page.tsx
│   │   └── [1.5K 2026-02-18 21:37]  layout.tsx
│   ├── [3.4K 2026-02-18 21:37]  (main)
│   │   ├── [3.4K 2026-02-18 21:37]  about
│   │   │   └── [ 12K 2026-02-18 21:37]  page.tsx
│   │   ├── [2.0K 2026-02-19 00:11]  layout.tsx
│   │   ├── [8.4K 2026-02-19 00:11]  page.tsx
│   │   ├── [3.4K 2026-02-18 21:37]  privacy
│   │   │   └── [ 12K 2026-02-18 21:37]  page.tsx
│   │   ├── [3.4K 2026-02-18 21:37]  status
│   │   │   └── [ 12K 2026-02-18 21:37]  page.tsx
│   │   └── [3.4K 2026-02-18 21:37]  terms
│   │       └── [ 12K 2026-02-18 21:37]  page.tsx
│   ├── [3.4K 2026-02-18 21:37]  (sales)
│   │   ├── [1.1K 2026-02-18 21:37]  layout.tsx
│   │   └── [3.4K 2026-02-18 21:37]  services
│   │       ├── [3.4K 2026-02-18 21:37]  [slug]
│   │       │   └── [4.7K 2026-02-18 21:37]  page.tsx
│   │       └── [7.4K 2026-02-18 21:37]  page.tsx
│   ├── [3.8K 2026-02-18 21:37]  globals.css
│   ├── [3.8K 2026-02-19 00:10]  layout.tsx
│   ├── [4.2K 2026-02-18 21:37]  loading.tsx
│   ├── [3.5K 2026-02-18 21:37]  manifest.ts
│   ├── [6.2K 2026-02-18 21:37]  not-found.tsx
│   ├── [2.0K 2026-02-18 21:37]  robots.ts
│   ├── [3.8K 2026-02-18 21:37]  sitemap.ts
│   └── [2.8K 2026-02-18 21:37]  template.tsx
├── [3.4K 2026-02-18 21:37]  components
│   ├── [3.4K 2026-02-18 21:37]  features
│   │   ├── [3.4K 2026-02-18 21:37]  areas
│   │   │   └── [6.7K 2026-02-18 21:37]  AreaCard.tsx
│   │   ├── [3.4K 2026-02-18 21:37]  blog
│   │   │   └── [5.4K 2026-02-18 21:37]  BlogCard.tsx
│   │   ├── [3.4K 2026-02-18 21:37]  case-studies
│   │   │   └── [6.1K 2026-02-18 21:37]  CaseStudyCard.tsx
│   │   ├── [3.4K 2026-02-18 21:37]  landing
│   │   │   ├── [ 10K 2026-02-18 21:37]  PricingSection.tsx
│   │   │   └── [ 10K 2026-02-18 21:37]  WorkProcess.tsx
│   │   └── [3.4K 2026-02-18 21:37]  services
│   │       ├── [7.1K 2026-02-18 21:37]  ServiceCard.tsx
│   │       └── [4.2K 2026-02-18 21:37]  ServiceListingHub.tsx
│   ├── [3.4K 2026-02-18 21:37]  layout
│   │   ├── [6.1K 2026-02-18 21:37]  Footer.tsx
│   │   ├── [9.7K 2026-02-18 21:37]  Navbar.tsx
│   │   ├── [2.4K 2026-02-18 21:37]  PageTransition.tsx
│   │   └── [1.9K 2026-02-18 21:37]  TopLoader.tsx
│   ├── [3.4K 2026-02-18 21:37]  providers
│   │   ├── [1.7K 2026-02-18 21:37]  ClientInfrastructure.tsx
│   │   └── [1.1K 2026-02-18 21:37]  ThemeProvider.tsx
│   ├── [3.4K 2026-02-18 21:37]  seo
│   │   └── [2.5K 2026-02-18 21:37]  JsonLd.tsx
│   ├── [3.4K 2026-02-18 21:37]  shared
│   │   ├── [7.2K 2026-02-18 21:37]  ConversionCTA.tsx
│   │   ├── [2.7K 2026-02-18 21:37]  FloatingContainer.tsx
│   │   ├── [6.2K 2026-02-18 21:37]  ImpactStats.tsx
│   │   ├── [4.1K 2026-02-18 21:37]  LineStickyButton.tsx
│   │   └── [5.7K 2026-02-18 21:37]  TrustBadge.tsx
│   ├── [3.4K 2026-02-18 21:37]  templates
│   │   ├── [2.5K 2026-02-18 21:37]  DynamicThemeWrapper.tsx
│   │   ├── [3.4K 2026-02-18 21:37]  TemplateRenderer.tsx
│   │   ├── [3.4K 2026-02-18 21:37]  bio
│   │   │   ├── [4.7K 2026-02-18 21:37]  Index.tsx
│   │   │   └── [3.4K 2026-02-18 21:37]  _components
│   │   │       ├── [1.8K 2026-02-18 21:37]  ActionRegistry.tsx
│   │   │       ├── [1.3K 2026-02-18 21:37]  CapabilityGraph.tsx
│   │   │       ├── [ 716 2026-02-18 21:37]  CredentialStack.tsx
│   │   │       ├── [1.2K 2026-02-18 21:37]  DirectTerminal.tsx
│   │   │       ├── [2.0K 2026-02-18 21:37]  IdentityNode.tsx
│   │   │       └── [4.7K 2026-02-18 21:37]  ProjectHighlight.tsx
│   │   ├── [3.4K 2026-02-18 21:37]  catalog
│   │   │   ├── [5.5K 2026-02-18 21:37]  Index.tsx
│   │   │   └── [3.4K 2026-02-18 21:37]  _components
│   │   │       ├── [2.1K 2026-02-18 21:37]  CatalogHeader.tsx
│   │   │       ├── [2.2K 2026-02-18 21:37]  InquiryPortal.tsx
│   │   │       ├── [ 560 2026-02-18 21:37]  ProductGrid.tsx
│   │   │       ├── [2.1K 2026-02-18 21:37]  ProductNode.tsx
│   │   │       ├── [1.2K 2026-02-18 21:37]  SearchOrchestrator.tsx
│   │   │       └── [6.5K 2026-02-18 21:37]  TechnicalSpecSheet.tsx
│   │   ├── [3.4K 2026-02-18 21:37]  corporate
│   │   │   ├── [4.7K 2026-02-18 21:37]  Index.tsx
│   │   │   └── [3.4K 2026-02-18 21:37]  _components
│   │   │       ├── [2.0K 2026-02-18 21:37]  CapabilityMatrix.tsx
│   │   │       ├── [1.7K 2026-02-18 21:37]  ConsultGateway.tsx
│   │   │       ├── [5.5K 2026-02-18 21:37]  SuccessTimeline.tsx
│   │   │       ├── [ 876 2026-02-18 21:37]  TrustNetwork.tsx
│   │   │       ├── [1013 2026-02-18 21:37]  ValueBlueprint.tsx
│   │   │       └── [1.7K 2026-02-18 21:37]  VisionPortal.tsx
│   │   ├── [3.4K 2026-02-18 21:37]  hotelresort
│   │   │   ├── [4.7K 2026-02-18 21:37]  Index.tsx
│   │   │   └── [3.4K 2026-02-18 21:37]  _components
│   │   │       ├── [2.5K 2026-02-18 21:37]  AtmosphereHeader.tsx
│   │   │       ├── [2.6K 2026-02-18 21:37]  ExperienceNodes.tsx
│   │   │       ├── [2.6K 2026-02-18 21:37]  FacilityMatrix.tsx
│   │   │       ├── [1.9K 2026-02-18 21:37]  ReservationPortal.tsx
│   │   │       ├── [4.9K 2026-02-18 21:37]  SuiteRegistry.tsx
│   │   │       └── [5.4K 2026-02-18 21:37]  WeatherTracker.tsx
│   │   ├── [3.4K 2026-02-18 21:37]  local-authority
│   │   │   ├── [4.5K 2026-02-18 21:37]  Index.tsx
│   │   │   └── [3.4K 2026-02-18 21:37]  _components
│   │   │       ├── [3.2K 2026-02-18 21:37]  DistrictHero.tsx
│   │   │       ├── [1.5K 2026-02-18 21:37]  DistrictRegistry.tsx
│   │   │       ├── [1.7K 2026-02-18 21:37]  GeoNodeHeader.tsx
│   │   │       ├── [2.0K 2026-02-18 21:37]  LocalInsight.tsx
│   │   │       ├── [5.2K 2026-02-18 21:37]  LocalMapNode.tsx
│   │   │       ├── [3.5K 2026-02-18 21:37]  MarketIntelligence.tsx
│   │   │       └── [2.2K 2026-02-18 21:37]  RegionalAction.tsx
│   │   ├── [3.4K 2026-02-18 21:37]  salepage
│   │   │   ├── [8.4K 2026-02-18 21:37]  Index.tsx
│   │   │   └── [3.4K 2026-02-18 21:37]  _components
│   │   │       ├── [ 10K 2026-02-18 21:37]  DirectOrderForm.tsx
│   │   │       ├── [4.5K 2026-02-18 21:37]  FeatureComparison.tsx
│   │   │       ├── [5.5K 2026-02-18 21:37]  FlashSaleTimer.tsx
│   │   │       ├── [3.9K 2026-02-18 21:37]  SaleFooter.tsx
│   │   │       ├── [6.5K 2026-02-18 21:37]  SaleHero.tsx
│   │   │       ├── [2.9K 2026-02-18 21:37]  SaleNavbar.tsx
│   │   │       ├── [3.6K 2026-02-18 21:37]  StickyBuyButton.tsx
│   │   │       └── [7.7K 2026-02-18 21:37]  ThaiTrustBadge.tsx
│   │   ├── [3.4K 2026-02-18 21:37]  sections
│   │   │   ├── [6.8K 2026-02-18 21:37]  DynamicFAQ.tsx
│   │   │   ├── [6.0K 2026-02-18 21:37]  FeatureGrid.tsx
│   │   │   ├── [7.1K 2026-02-18 21:37]  HeroEngine.tsx
│   │   │   └── [5.1K 2026-02-18 21:37]  LayoutEngine.tsx
│   │   └── [3.4K 2026-02-18 21:37]  seo-agency
│   │       ├── [4.7K 2026-02-18 21:37]  Index.tsx
│   │       └── [3.4K 2026-02-18 21:37]  _components
│   │           ├── [2.5K 2026-02-18 21:37]  AuditHero.tsx
│   │           ├── [9.9K 2026-02-18 21:37]  AuditReportGenerator.tsx
│   │           ├── [1.4K 2026-02-18 21:37]  ConversionPortal.tsx
│   │           ├── [2.3K 2026-02-18 21:37]  KeywordRegistry.tsx
│   │           ├── [2.0K 2026-02-18 21:37]  PerformanceTrajectory.tsx
│   │           └── [3.6K 2026-02-18 21:37]  StrategyBlueprint.tsx
│   └── [3.4K 2026-02-18 21:37]  ui
│       ├── [2.1K 2026-02-18 21:37]  Accordion.tsx
│       ├── [4.0K 2026-02-18 21:37]  AmbientBackground.tsx
│       ├── [3.9K 2026-02-18 21:37]  Button.tsx
│       ├── [1.5K 2026-02-18 21:37]  Callout.tsx
│       ├── [5.0K 2026-02-18 21:37]  IconRenderer.tsx
│       ├── [ 931 2026-02-18 21:37]  Skeleton.tsx
│       ├── [2.8K 2026-02-18 21:37]  SkeletonCard.tsx
│       ├── [2.1K 2026-02-18 21:37]  SkeletonGrid.tsx
│       ├── [2.9K 2026-02-18 21:37]  Sonner.tsx
│       └── [2.9K 2026-02-18 21:37]  ThemeToggle.tsx
├── [ 425 2026-02-18 21:37]  components.json
├── [3.4K 2026-02-18 21:37]  config
│   ├── [5.1K 2026-02-18 21:37]  00-SYSTEM-MANDATE.md
│   └── [5.3K 2026-02-18 21:37]  01-SYSTEM-PROMPT-EXTENSION.md
├── [3.4K 2026-02-18 22:29]  constants
│   ├── [3.4K 2026-02-18 21:37]  area-nodes
│   │   ├── [6.8K 2026-02-18 21:37]  bangkok.ts
│   │   ├── [ 11K 2026-02-18 21:37]  chiang-mai.ts
│   │   ├── [ 12K 2026-02-18 21:37]  chiang-rai.ts
│   │   ├── [ 13K 2026-02-18 21:37]  chon-buri.ts
│   │   ├── [ 12K 2026-02-18 21:37]  chumphon.ts
│   │   ├── [2.4K 2026-02-18 21:37]  index.ts
│   │   ├── [6.6K 2026-02-18 21:37]  kamphaeng-phet.ts
│   │   ├── [5.6K 2026-02-18 21:37]  khon-kaen.ts
│   │   ├── [ 12K 2026-02-18 21:37]  korat.ts
│   │   ├── [ 13K 2026-02-18 21:37]  lampang.ts
│   │   ├── [ 13K 2026-02-18 21:37]  mae-hong-son.ts
│   │   ├── [ 15K 2026-02-18 21:37]  nakhon-sawan.ts
│   │   ├── [5.4K 2026-02-18 21:37]  phang-nga.ts
│   │   ├── [ 15K 2026-02-18 21:37]  phichit.ts
│   │   ├── [ 15K 2026-02-18 21:37]  phitsanulok.ts
│   │   ├── [ 15K 2026-02-18 21:37]  phuket.ts
│   │   ├── [6.6K 2026-02-18 21:37]  ranong.ts
│   │   ├── [6.4K 2026-02-18 21:37]  sukhothai.ts
│   │   ├── [ 13K 2026-02-18 21:37]  surat-thani.ts
│   │   ├── [ 15K 2026-02-18 21:37]  tak.ts
│   │   └── [ 16K 2026-02-18 21:37]  uttaradit.ts
│   ├── [ 12K 2026-02-19 00:35]  image-blur-data.ts
│   ├── [2.4K 2026-02-18 21:37]  master-registry.ts
│   ├── [2.2K 2026-02-18 21:37]  navigation.ts
│   ├── [3.4K 2026-02-18 21:37]  services
│   │   ├── [7.9K 2026-02-18 21:37]  bio.ts
│   │   ├── [5.7K 2026-02-18 21:37]  catalog.ts
│   │   ├── [ 10K 2026-02-18 21:37]  corporate.ts
│   │   ├── [ 10K 2026-02-18 21:37]  hotel-resort.ts
│   │   ├── [8.4K 2026-02-18 21:37]  local-authority.ts
│   │   ├── [ 10K 2026-02-18 21:37]  salepage.ts
│   │   └── [ 12K 2026-02-18 21:37]  seo-agency.ts
│   └── [4.8K 2026-02-18 21:37]  site-config.ts
├── [3.4K 2026-02-18 21:37]  content
│   ├── [3.4K 2026-02-18 21:37]  blog
│   │   ├── [ 13K 2026-02-18 21:37]  5-points-killing-sales.mdx
│   │   ├── [ 12K 2026-02-18 21:37]  advanced-schema-markup.mdx
│   │   ├── [ 11K 2026-02-18 21:37]  case-study-unlink-th.mdx
│   │   ├── [ 11K 2026-02-18 21:37]  copywriting-secrets.mdx
│   │   ├── [ 12K 2026-02-18 21:37]  core-web-vitals-speed.mdx
│   │   ├── [ 11K 2026-02-18 21:37]  ecommerce-conversion-seo.mdx
│   │   ├── [ 11K 2026-02-18 21:37]  facebook-ads-vs-website.mdx
│   │   ├── [ 12K 2026-02-18 21:37]  lower-north-digital-transformation.mdx
│   │   ├── [ 10K 2026-02-18 21:37]  seo-2026-strategy.mdx
│   │   └── [ 11K 2026-02-18 21:37]  technical-audit-protocol.mdx
│   └── [3.4K 2026-02-18 21:37]  case-studies
│       ├── [ 12K 2026-02-18 21:37]  case-study-industrial-catalog.mdx
│       ├── [ 11K 2026-02-18 21:37]  provincial-digital-domination.mdx
│       └── [ 11K 2026-02-18 21:37]  unlink-reputation-management-success.mdx
├── [2.4K 2026-02-18 21:37]  eslint.config.mjs
├── [ 366 2026-02-18 21:37]  knip.json
├── [3.4K 2026-02-18 21:37]  lib
│   ├── [4.9K 2026-02-18 21:37]  cms.ts
│   ├── [3.8K 2026-02-18 21:37]  data-merger.ts
│   ├── [3.6K 2026-02-18 21:37]  schema-validator.ts
│   ├── [5.4K 2026-02-19 00:08]  schema.ts
│   ├── [2.9K 2026-02-18 21:37]  seo-utils.ts
│   └── [4.2K 2026-02-18 21:37]  utils.ts
├── [2.6K 2026-02-18 21:37]  mdx-components.tsx
├── [ 247 2026-02-18 22:34]  next-env.d.ts
├── [3.9K 2026-02-18 22:59]  next.config.ts
├── [3.2K 2026-02-18 21:37]  package.json
├── [301K 2026-02-18 23:22]  pnpm-lock.yaml
├── [  51 2026-02-18 21:37]  pnpm-workspace.yaml
├── [1.1K 2026-02-18 21:37]  postcss.config.mjs
├── [3.4K 2026-02-18 21:37]  public
│   └── [3.4K 2026-02-18 21:37]  images
│       ├── [3.4K 2026-02-18 21:37]  areas
│       ├── [3.4K 2026-02-18 21:37]  blog
│       ├── [3.4K 2026-02-18 21:37]  case-studies
│       ├── [3.4K 2026-02-18 21:37]  experts
│       ├── [3.4K 2026-02-18 21:37]  seo
│       ├── [3.4K 2026-02-18 21:37]  services
│       └── [3.4K 2026-02-18 21:37]  shared
├── [3.4K 2026-02-18 22:28]  scripts
│   ├── [6.1K 2026-02-19 00:35]  audit-system.sh
│   ├── [4.2K 2026-02-18 21:37]  gen-blur-data.mjs
│   ├── [4.5K 2026-02-18 21:37]  generate_docs.sh
│   ├── [5.2K 2026-02-18 21:37]  image-audit.mjs
│   ├── [3.0K 2026-02-19 00:11]  index-urls.js
│   ├── [ 14K 2026-02-18 21:37]  master_audit.py
│   ├── [5.7K 2026-02-18 21:37]  seo-monitor.py
│   └── [3.7K 2026-02-18 21:37]  test-schema.ts
├── [2.3K 2026-02-18 23:43]  service-account.json
├── [ 14K 2026-02-19 00:35]  structure.txt
├── [ 748 2026-02-18 21:37]  tsconfig.json
├── [141K 2026-02-19 00:29]  tsconfig.tsbuildinfo
└── [3.4K 2026-02-18 21:37]  types
    ├── [9.7K 2026-02-18 21:37]  index.d.ts
    └── [4.0K 2026-02-18 21:37]  template-props.ts

64 directories, 190 files
```

---

## BUILD ARTIFACT ANALYSIS (.next/static)

```text
Total Size:
2.2M	.next/static

Top 10 Largest Assets:
196K	.next/static/chunks/fb371ac7-52aeb6ea90939da9.js
188K	.next/static/chunks/6594-1a8f9d17d7f0d390.js
180K	.next/static/chunks/framework-bc511be5d789680f.js
144K	.next/static/css/37748f948c63b00f.css
132K	.next/static/chunks/main-41868e4c6eab357c.js
132K	.next/static/chunks/5378-3c2bf160639a0e50.js
124K	.next/static/chunks/7112-28d45d301d8de93d.js
112K	.next/static/chunks/polyfills-42372ed130431b0a.js
84K	.next/static/media/8e9860b6e62d6359-s.woff2
68K	.next/static/chunks/7799-a526fa5123dd6cac.js
```
