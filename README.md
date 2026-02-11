                                                                 ➜  Aemdevweb git:(main) ✗ ./scripts/clean-project.sh                                                --- [ CLEANING AEMDEVWEB JUNK ] ---               Pruning pnpm store...                             Removed all cached metadata files                 Removed 0 files                                   Removed 0 packages

Cleaning npm cache... npm warn Unknown project config "arch". This will stop working in the next major version of npm. npm warn using --force Recommended protections disabled. Cleaning Termux APT cache... Reading package lists... Done Building dependency tree... Done Reading state information... Done 0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded. Cleaning ~/.cache... --- [ CLEAN COMPLETED ] --- Current storage status: Available: 73G ➜ Aemdevweb git:(main) ✗ pf ! Corepack is about to download https://registry.npmjs.org/pnpm/-/pnpm-10.29.2.tgz ? Do you want to continue? [Y/n] y > aemdevweb.com@7.2.99 format /data/data/com.termux/files/home/Aemdevweb > prettier --write .
.prettierrc 221ms (unchanged) app/(routes)/areas/[slug]/page.tsx 996ms (unchanged) app/(routes)/areas/page.tsx 262ms (unchanged) app/(routes)/blog/[slug]/page.tsx 236ms (unchanged) app/(routes)/blog/page.tsx 139ms (unchanged)
app/(routes)/case-studies/[slug]/page.tsx 204ms (unchanged) app/(routes)/case-studies/page.tsx 115ms (unchanged) app/(routes)/services/[slug]/page.tsx 181ms (unchanged) app/(routes)/services/page.tsx 171ms (unchanged) app/about/page.tsx 232ms (unchanged) app/globals.css 433ms (unchanged) app/layout.tsx 221ms (unchanged) app/loading.tsx 108ms (unchanged) app/manifest.ts 59ms (unchanged) app/not-found.tsx 96ms (unchanged) app/page.tsx 229ms (unchanged) app/privacy/page.tsx 182ms (unchanged) app/robots.ts 60ms (unchanged) app/sitemap.ts 162ms (unchanged) app/status/page.tsx 297ms (unchanged) app/terms/page.tsx 188ms (unchanged) components.json 26ms (unchanged) components/features/areas/AreaCard.tsx 185ms (unchanged) components/features/blog/BlogCard.tsx 138ms (unchanged) components/features/case-studies/CaseStudyCard.tsx 157ms (unchanged) components/features/landing/Hero.tsx 250ms (unchanged) components/features/landing/PricingSection.tsx 254ms (unchanged) components/features/landing/WorkProcess.tsx 298ms (unchanged) components/features/services/ServiceCard.tsx 193ms (unchanged) components/features/services/ServiceListingHub.tsx 146ms (unchanged) components/layout/Footer.tsx 334ms (unchanged) components/layout/Navbar.tsx 405ms (unchanged) components/layout/PageTransition.tsx 163ms (unchanged) components/layout/TopLoader.tsx 98ms (unchanged) components/providers/theme-provider.tsx 79ms (unchanged)
components/seo/JsonLd.tsx 116ms (unchanged) components/shared/ConversionCTA.tsx 178ms (unchanged) components/shared/ImpactStats.tsx 295ms (unchanged) components/shared/LineStickyButton.tsx 126ms (unchanged) components/shared/TrustBadge.tsx 159ms (unchanged)components/templates/bio/Index.tsx 255ms (unchanged) components/templates/bio/Schema.ts 132ms (unchanged) components/templates/catalog/Index.tsx 176ms (unchanged) components/templates/catalog/Schema.ts 86ms (unchanged) components/templates/corporate/Index.tsx 178ms (unchanged) components/templates/corporate/Schema.ts 107ms (unchanged) components/templates/hotelresort/Index.tsx 154ms (unchanged) components/templates/hotelresort/Schema.ts 92ms (unchanged) components/templates/local-authority/index.tsx 200ms components/templates/local-authority/Schema.ts 85ms (unchanged) components/templates/salepage/Index.tsx 165ms (unchanged) components/templates/salepage/Schema.ts 117ms (unchanged) components/templates/sections/DynamicFAQ.tsx 142ms (unchanged) components/templates/sections/FeatureGrid.tsx 125ms (unchanged) components/templates/sections/HeroEngine.tsx 166ms (unchanged) components/templates/sections/LayoutEngine.tsx 125ms (unchanged) components/templates/seo_agency/index.tsx 146ms (unchanged) components/templates/seo_agency/Schema.ts 105ms (unchanged) components/ui/accordion.tsx 111ms (unchanged) components/ui/AmbientBackground.tsx 67ms (unchanged) components/ui/button.tsx 83ms (unchanged) components/ui/Callout.tsx 81ms (unchanged) components/ui/IconRenderer.tsx 110ms (unchanged) components/ui/skeleton-grid.tsx 64ms (unchanged) components/ui/skeleton.tsx 52ms (unchanged) components/ui/SkeletonCard.tsx 79ms (unchanged) components/ui/sonner.tsx 59ms (unchanged) components/ui/ThemeToggle.tsx 96ms (unchanged) config/00-SYSTEM-MANDATE.md 453ms (unchanged) config/01-SYSTEM-PROMPT-EXTENSION.md 397ms (unchanged) constants/area-nodes.ts 179ms (unchanged) constants/image-blur-data.ts 99ms (unchanged) constants/master-registry.ts 137ms (unchanged) constants/navigation.ts 67ms (unchanged) constants/site-config.ts 66ms (unchanged) content/blog/5-points-killing-sales.mdx 287ms (unchanged) content/blog/advanced-schema-markup.mdx 166ms (unchanged) content/blog/case-study-unlink-th.mdx 140ms (unchanged) content/blog/copywriting-secrets.mdx 136ms (unchanged) content/blog/core-web-vitals-speed.mdx 135ms (unchanged) content/blog/ecommerce-conversion-seo.mdx 108ms (unchanged) content/blog/facebook-ads-vs-website.mdx 126ms (unchanged) content/blog/lower-north-digital-transformation.mdx 133ms (unchanged) content/blog/seo-2026-strategy.mdx 203ms (unchanged) content/blog/technical-audit-protocol.mdx 134ms (unchanged) content/case-studies/case-study-industrial-catalog.mdx 125ms (unchanged) content/case-studies/unlink-reputation-management-success.mdx 113ms (unchanged) eslint.config.mjs 103ms (unchanged) knip.json 14ms (unchanged) lib/cms.ts 171ms (unchanged) lib/schema.ts 144ms (unchanged) lib/seo-utils.ts 57ms (unchanged) lib/utils.ts 95ms (unchanged) mdx-components.tsx 109ms (unchanged) next.config.ts 80ms (unchanged) package.json 23ms (unchanged) pmpm-workspace.yaml 15ms (unchanged) pnpm-lock.yaml 4841ms (unchanged) postcss.config.mjs 74ms (unchanged) README.md 1030ms (unchanged) scripts/gen-blur-data.mjs 120ms (unchanged) tsconfig.json 15ms (unchanged) types/index.d.ts 130ms (unchanged) types/mdx.d.ts 34ms (unchanged) types/template-props.ts 54ms (unchanged) vercel.json 31ms (unchanged) ➜ Aemdevweb git:(main) ✗ pch > aemdevweb.com@7.2.99 lint /data/data/com.termux/files/home/Aemdevweb > eslint . > aemdevweb.com@7.2.99 type-check /data/data/com.termux/files/home/Aemdevweb > tsc --noEmit ➜ Aemdevweb git:(main) ✗ pb > aemdevweb.com@7.2.99 build /data/data/com.termux/files/home/Aemdevweb > next build --webpack Skipping creating a lockfile at /data/data/com.termux/files/home/Aemdevweb/.next/lock because we're using WASM bindings ▲ Next.js 16.1.6 (webpack) - Experiments (use with caution): ⨯ mdxRs · optimizePackageImports ✓ scrollRestoration Creating an optimized production build ... ✓ Compiled successfully in 2.0min ✓ Finished TypeScript in 36.3s ✓ Collecting page data using 1 worker in 5.6s ✓ Generating static pages using 1 worker (46/46) in 13.1s Finalizing page optimization . Collecting buil✓ Collecting build traces in 58s ✓ Finalizing page optimization in 58s Route (app) ┌ ○ / ├ ○ /\_not-found ├ ○ /about ├ ○ /areas ├ ● /areas/[slug] │ ├ /areas/bangkok │ ├ /areas/chon-buri │ ├ /areas/chiang-mai │ └ [+9 more paths] ├ ○ /blog ├ ● /blog/[slug] │ ├ /blog/seo-2026-strategy │ ├ /blog/5-points-killing-sales │ ├ /blog/advanced-schema-markup │ └ [+7 more paths] ├ ○ /case-studies ├ ● /case-studies/[slug] │ ├ /case-studies/case-study-industrial-catalog │ └ /case-studies/unlink-reputation-management-success ├ ○ /manifest.webmanifest ├ ○ /privacy ├ ○ /robots.txt ├ ○ /services ├ ● /services/[slug] │ ├ /services/seo_agency │ ├ /services/salepage │ ├ /services/corporate │ └ [+4 more paths] ├ ○ /sitemap.xml ├ ○ /status └ ○ /terms ○ (Static) prerendered as static content ● (SSG) prerendered as static HTML (uses generateStaticParams) ➜ Aemdevweb git:(main) ✗ ./scripts/generate_docs.sh AUDIT COMPLETED: README.md GENERATED. ➜ Aemdevweb git:(main) ✗

---

vercel

13:45:31.062
Generating static pages using 1 worker (11/46)
13:45:31.658
Generating static pages using 1 worker (22/46)
13:45:32.253
Generating static pages using 1 worker (34/46)
13:45:32.395
✓ Generating static pages using 1 worker (46/46) in 2.6s
13:45:32.639
Finalizing page optimization ...
13:45:32.642
Collecting build traces ...
13:45:38.722
13:45:38.725
Route (app)
13:45:38.726
┌ ○ /
13:45:38.726
├ ○ /\_not-found
13:45:38.726
├ ○ /about
13:45:38.726
├ ○ /areas
13:45:38.726
├ ● /areas/[slug]
13:45:38.726
│ ├ /areas/bangkok
13:45:38.726
│ ├ /areas/chon-buri
13:45:38.726
│ ├ /areas/chiang-mai
13:45:38.726
│ └ [+9 more paths]
13:45:38.726
├ ○ /blog
13:45:38.727
├ ● /blog/[slug]
13:45:38.727
│ ├ /blog/seo-2026-strategy
13:45:38.727
│ ├ /blog/5-points-killing-sales
13:45:38.727
│ ├ /blog/advanced-schema-markup
13:45:38.728
│ └ [+7 more paths]
13:45:38.728
├ ○ /case-studies
13:45:38.728
├ ● /case-studies/[slug]
13:45:38.728
│ ├ /case-studies/case-study-industrial-catalog
13:45:38.728
│ └ /case-studies/unlink-reputation-management-success
13:45:38.728
├ ○ /manifest.webmanifest
13:45:38.729
├ ○ /privacy
13:45:38.729
├ ○ /robots.txt
13:45:38.729
├ ○ /services
13:45:38.729
├ ● /services/[slug]
13:45:38.729
│ ├ /services/seo_agency
13:45:38.729
│ ├ /services/salepage
13:45:38.729
│ ├ /services/corporate
13:45:38.729
│ └ [+4 more paths]
13:45:38.729
├ ○ /sitemap.xml
13:45:38.729
├ ○ /status
13:45:38.731
└ ○ /terms
13:45:38.731
13:45:38.735
13:45:38.735
○ (Static) prerendered as static content
13:45:38.735
● (SSG) prerendered as static HTML (uses generateStaticParams)
13:45:38.735
13:45:39.088
Traced Next.js server files in: 92.423ms
13:45:39.259
Created all serverless functions in: 171.121ms
13:45:39.284
Collected static files (public/, static/, .next/static): 12.318ms
13:45:39.828
Build Completed in /vercel/output [34s]
13:45:40.265
Deploying outputs...

---

/\*\*

- [SYSTEM CORE]: NEXT.JS HYBRID CONFIG v17.5.10 (IMAGE_PATCH)
- [STRATEGY]: Whitelist Image Qualities | Resource Resiliency | Termux Optimized
- [MAINTAINER]: AEMDEVWEB Specialist Team
  \*/

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
source: "/\_next/static/(.\*)",
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

---

domain: aemdevweb.com
status: strictly-enforced
last_audit: 2026-02-11 13:43:22

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
 * [SYSTEM CORE]: GLOBAL_TYPE_DEFINITIONS v17.7.8 (STABILIZED_ASSETS)
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

/** [RESOLVED]: ผูกนิยาม ServiceData สำหรับใช้ในระบบ Listing */
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

/**
 * [RESOLVED]: ข้อมูลสำหรับป้องกัน CLS และสร้าง Blur-up Effect
 */
export interface ImageBlurNode {
  readonly blurDataURL: string;
  readonly width: number;
  readonly height: number;
}

/**
 * [RESOLVED]: ฐานข้อมูลกลางสำหรับ Mapping รูปภาพกับ Metadata
 */
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
 * [SYSTEM CORE]: AREA_NODES_DATA v17.7.8 (PRODUCTION_TOTAL_SYNC)
 * [STRATEGY]: Hyper-Local Authority | Semantic Context Injection | Doorway Defense
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { AreaNode } from "@/types";

/**
 * @description คลังข้อมูลพิกัดยุทธศาสตร์ที่ผ่านการปรับปรุงเนื้อหาเฉพาะตัว (Unique Context) ครบทุกโหนด
 * เพื่อยืนยันคุณภาพเนื้อหาระดับ High-Value Content ต่อ Google Search Console
 */
export const AREA_NODES: readonly AreaNode[] = [
  // ===========================================================================
  // --- [TIER 1]: MASTER ECONOMIC HUBS (ศูนย์กลางเศรษฐกิจหลัก) ---
  // ===========================================================================
  {
    slug: "bangkok",
    province: "กรุงเทพมหานคร",
    templateSlug: "corporate",
    title: "รับทำเว็บไซต์ กรุงเทพฯ | Corporate Web Standard & Technical SEO",
    description: "บริการ Web Development มาตรฐาน Enterprise สำหรับบริษัทในกรุงเทพฯ",
    longDescription:
      "กรุงเทพฯ คือสมรภูมิธุรกิจที่แข่งขันสูงที่สุด ธุรกิจไม่ได้แข่งแค่ความสวยงาม แต่แข่งกันที่ 'Authority' และความไวของระบบ เราให้บริการออกแบบเว็บไซต์มาตรฐานองค์กรที่รองรับ Traffic มหาศาล พร้อมกลยุทธ์ Technical SEO ระดับ Specialist",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ กรุงเทพฯ (Bangkok) | บริษัท SEO มาตรฐานสากล",
    seoDescription:
      "ยกระดับธุรกิจในกรุงเทพฯ ด้วยเว็บไซต์คุณภาพสูงและกลยุทธ์ Technical SEO เน้นผลลัพธ์ ROI และสถาปัตยกรรม SSR ที่โหลดไวที่สุด",
    priority: 100,
    districts: ["สาทร", "สีลม", "สุขุมวิท", "พระราม 9", "ลาดพร้าว", "ปทุมวัน", "บางนา"],
    keywords: ["รับทำเว็บไซต์ กรุงเทพ", "SEO กรุงเทพ", "Web Design Bangkok", "ทำเว็บ Corporate"],
    heroImage: "/images/areas/bangkok-node.webp",
    coordinates: { lat: 13.7563, lng: 100.5018 },
    localContext: {
      marketInsight:
        "กรุงเทพฯ คือศูนย์กลางการแข่งขันที่สูงที่สุด ธุรกิจต้องสร้าง 'Authority' ผ่านโครงสร้างข้อมูลที่ซับซ้อนเพื่อปิดการขายในตลาดระดับบน",
      technicalApproach:
        "เน้นสถาปัตยกรรม SSR (Server-Side Rendering) และการทำ Schema Graph เชื่อมโยงตัวตนองค์กร (Organization Entity) เข้ากับพิกัดสำนักงานจริง",
      localStrength:
        "ฐานข้อมูลเครือข่าย Backlink คุณภาพสูงในเขตกรุงเทพฯ ช่วยให้การดันอันดับ Keyword แข่งขันสูงเห็นผลได้รวดเร็วกว่าทั่วไป",
    },
  },
  {
    slug: "chon-buri",
    province: "ชลบุรี",
    templateSlug: "corporate",
    title: "รับทำเว็บไซต์ ชลบุรี พัทยา | โซลูชั่นเว็บอุตสาหกรรม EEC",
    description: "ออกแบบเว็บไซต์โรงงาน และธุรกิจท่องเที่ยวในเขต EEC รองรับระบบ Multi-Language",
    longDescription:
      "ชลบุรีคือประตูสู่การค้าโลก ธุรกิจต้องการความน่าเชื่อถือระดับสากล เราเชี่ยวชาญการทำเว็บไซต์โรงงานอุตสาหกรรมที่เน้นข้อมูลทางเทคนิค และเว็บไซต์ธุรกิจพัทยาที่ต้องรองรับชาวต่างชาติด้วยโครงสร้าง SEO ระดับโลก",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ ชลบุรี พัทยา | ผู้เชี่ยวชาญเว็บอุตสาหกรรม EEC",
    seoDescription:
      "บริการทำเว็บไซต์ในชลบุรี พัทยา เน้นมาตรฐานโรงงานและธุรกิจอินเตอร์ รองรับ SEO ภาษาต่างประเทศ เพื่อการขยายตลาดสู่ระดับสากล",
    priority: 99,
    districts: ["เมืองพัทยา", "ศรีราชา", "แหลมฉบัง", "อมตะนคร", "บางแสน", "สัตหีบ"],
    keywords: ["รับทำเว็บไซต์ ชลบุรี", "ทำเว็บโรงงาน EEC", "SEO พัทยา", "Web Design Chonburi"],
    heroImage: "/images/areas/chon-buri-node.webp",
    coordinates: { lat: 13.3611, lng: 100.9847 },
    localContext: {
      marketInsight:
        "ธุรกิจในชลบุรีเน้น B2B Industrial และ Tourism เว็บไซต์ต้องเป็น 'พอร์ตโฟลิโอระดับโลก' ที่สร้างความเชื่อมั่นให้คู่ค้าต่างชาติ",
      technicalApproach:
        "ใช้ระบบ i18n สำหรับ Multi-language และเน้น Technical SEO สำหรับคำค้นหาเชิงอุตสาหกรรมเฉพาะทาง (Niche Industrial Keywords)",
      localStrength:
        "ความเข้าใจในโครงสร้าง EEC ช่วยให้เราวางกลยุทธ์การค้นหาที่เจาะจงกลุ่มคู่ค้า (Supplier & Partner) ได้อย่างแม่นยำ",
    },
  },
  {
    slug: "chiang-mai",
    province: "เชียงใหม่",
    templateSlug: "corporate",
    title: "รับทำเว็บไซต์ เชียงใหม่ | Web Design เพื่อธุรกิจไลฟ์สไตล์และท่องเที่ยว",
    description: "ยกระดับธุรกิจ Boutique Hotel และ Wellness ด้วยดีไซน์ที่เล่าเรื่องราว",
    longDescription:
      "เชียงใหม่เมืองแห่งความคิดสร้างสรรค์ เว็บไซต์ต้องสะท้อน Taste และ Storytelling ที่โดดเด่น เราผสานงานดีไซน์เอกลักษณ์เข้ากับเทคโนโลยีสมัยใหม่ เพื่อช่วยให้ธุรกิจท่องเที่ยวและคาเฟ่เปลี่ยนผู้ชมให้เป็นลูกค้า",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ เชียงใหม่ | ออกแบบเว็บสวย สำหรับท่องเที่ยวและ Wellness",
    seoDescription:
      "รับทำเว็บไซต์เชียงใหม่ เน้นดีไซน์ Lanna Modern ผสานระบบจองที่ใช้งานง่าย และการ Optimize รูปภาพให้โหลดไวระดับ Retina Display",
    priority: 98,
    districts: ["นิมมาน", "เมืองเก่า", "สันกำแพง", "แม่ริม", "หางดง"],
    keywords: ["รับทำเว็บไซต์ เชียงใหม่", "Chiang Mai Web Design", "ทำเว็บโรงแรม", "Creative SEO"],
    heroImage: "/images/areas/chiang-mai-node.webp",
    coordinates: { lat: 18.7883, lng: 98.9853 },
    localContext: {
      marketInsight:
        "เชียงใหม่เป็นเมืองแห่ง Creative Economy เว็บไซต์ต้องมี 'Visual Impact' สูง แต่ต้องโหลดไวสำหรับ Digital Nomad และนักท่องเที่ยว",
      technicalApproach:
        "เน้น Image Optimization ขั้นสูง (WebP/AVIF) และการเชื่อมต่อ API ระบบจองห้องพัก (Booking Engine) ที่มีความลื่นไหลสูงสุด",
      localStrength:
        "การผสานดีไซน์ร่วมสมัย (Lanna Modern) เข้ากับ Code ที่คลีน ช่วยสร้างภาพลักษณ์แบรนด์ที่โดดเด่นท่ามกลางคู่แข่ง",
    },
  },
  {
    slug: "phuket",
    province: "ภูเก็ต",
    templateSlug: "corporate",
    title: "รับทำเว็บไซต์ ภูเก็ต | Premium Web Design สำหรับธุรกิจ Luxury",
    description: "สร้างภาพลักษณ์ World-Class ให้กับโรงแรม วิลล่า และธุรกิจ Yacht",
    longDescription:
      "ภูเก็ตคือตลาดระดับโลกที่ต้องการความเป็นเลิศ เราให้บริการออกแบบเว็บไซต์ Luxury สำหรับธุรกิจอสังหาริมทรัพย์และ Hospitality ระดับ 5 ดาว พร้อมทำ SEO นานาชาติเพื่อดึงกลุ่มลูกค้าที่มีกำลังซื้อสูง",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ ภูเก็ต | บริการทำเว็บ Luxury Hotel และอสังหาฯ",
    seoDescription:
      "ผู้เชี่ยวชาญด้าน Premium Website ในภูเก็ต เจาะตลาดชาวต่างชาติ ด้วยดีไซน์หรูหราและ International SEO ระดับสากล",
    priority: 97,
    districts: ["ป่าตอง", "กะรน", "เชิงทะเล (Laguna)", "ราไวย์", "เมืองภูเก็ต"],
    keywords: [
      "รับทำเว็บไซต์ ภูเก็ต",
      "Phuket Web Design",
      "Luxury Real Estate Website",
      "SEO Phuket",
    ],
    heroImage: "/images/areas/phuket-node.webp",
    coordinates: { lat: 7.8804, lng: 98.3923 },
    localContext: {
      marketInsight:
        "ลูกค้าในภูเก็ตคือกลุ่ม High-End และชาวต่างชาติ ความน่าเชื่อถือ (Trust) และความหรูหราของ UX คือปัจจัยหลักในการตัดสินใจ",
      technicalApproach:
        "เน้น International SEO ด้วยโครงสร้าง Hreflang และ Geo-targeting เพื่อดึง Traffic จากประเทศเป้าหมายโดยตรง",
      localStrength:
        "เชี่ยวชาญการทำ Local SEO ระดับสูงเพื่อยึดพื้นที่บน Google Maps ในจุดยุทธศาสตร์ท่องเที่ยวสำคัญทั่วเกาะภูเก็ต",
    },
  },

  // ===========================================================================
  // --- [TIER 2]: REGIONAL GROWTH (หัวเมืองเศรษฐกิจภูมิภาค) ---
  // ===========================================================================
  {
    slug: "khon-kaen",
    province: "ขอนแก่น",
    templateSlug: "salepage",
    title: "รับทำเว็บไซต์ ขอนแก่น | Digital Hub อีสาน สำหรับ Smart SME",
    description: "เครื่องมือปิดการขายสำหรับ SME และธุรกิจคลินิกความงาม เน้น Conversion Focus",
    longDescription:
      "ขอนแก่นศูนย์กลาง Smart City ของอีสาน ธุรกิจต้องการความไว เรานำเสนอเครื่องมืออย่าง Sale Page ที่โหลดเร็วและรองรับการยิงโฆษณาเต็มรูปแบบ เพื่อเปลี่ยนผู้เข้าชมเป็นยอดขายได้อย่างแม่นยำ",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ ขอนแก่น | โซลูชั่น Sale Page สำหรับ Smart SME",
    seoDescription:
      "บริการทำเว็บไซต์และ Sale Page ในขอนแก่น ออกแบบมาเพื่อปิดการขายและรองรับ Digital Marketing ช่วยเพิ่มอัตราการสั่งซื้อได้จริง",
    priority: 95,
    districts: ["เมืองขอนแก่น", "มหาวิทยาลัยขอนแก่น", "ชุมแพ", "บ้านไผ่"],
    keywords: ["รับทำเว็บไซต์ ขอนแก่น", "Sale Page ขอนแก่น", "ทำเว็บคลินิก", "SEO ขอนแก่น"],
    heroImage: "/images/areas/khon-kaen-node.webp",
    coordinates: { lat: 16.4322, lng: 102.8236 },
    localContext: {
      marketInsight:
        "ขอนแก่นเป็นศูนย์กลางการแพทย์และการศึกษา SME ต้องการระบบที่ 'ปิดการขายได้จริง' และเชื่อมต่อ Chat ได้ง่ายดาย",
      technicalApproach:
        "เน้นโครงสร้าง Sale Page (SPA) ที่โหลดไวระดับเสี้ยววินาทีบนมือถือ และการติดตั้ง Tracking Pixels สำหรับวัดผลโฆษณา 100%",
      localStrength:
        "การวางโครงสร้างเนื้อหาที่เข้าใจจริตคนอีสานยุคใหม่ ช่วยเพิ่มอัตราการคลิกติดต่อ (Conversion Rate) ได้สูงกว่าปกติ",
    },
  },
  {
    slug: "korat",
    province: "นครราชสีมา",
    templateSlug: "corporate",
    title: "รับทำเว็บไซต์ โคราช | E-Catalog & Corporate สำหรับโรงงานและรับเหมา",
    description: "ระบบจัดการสินค้าออนไลน์และเว็บไซต์องค์กร สร้างความเชื่อถือให้ธุรกิจ B2B",
    longDescription:
      "นครราชสีมาประตูสู่อีสานและฐานการผลิตสำคัญ เราช่วยยกระดับธุรกิจรับเหมาและโรงงาน ด้วยระบบ E-Catalog ที่จัดการข้อมูลสินค้าจำนวนมากได้แม่นยำ และเว็บไซต์องค์กรที่สร้างความมั่นใจให้คู่ค้า",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ โคราช (นครราชสีมา) | ออกแบบเว็บโรงงานและ E-Catalog",
    seoDescription:
      "บริการรับทำเว็บไซต์ในโคราช เน้นระบบแค็ตตาล็อกสินค้าและเว็บไซต์บริษัท เพื่อความน่าเชื่อถือทางธุรกิจและรองรับงานประมูลใหญ่",
    priority: 94,
    districts: ["เมืองนครราชสีมา", "ปากช่อง (เขาใหญ่)", "สีคิ้ว", "วังน้ำเขียว"],
    keywords: ["รับทำเว็บไซต์ โคราช", "ทำเว็บโรงงาน", "E-Catalog โคราช", "SEO นครราชสีมา"],
    heroImage: "/images/areas/korat-node.webp",
    coordinates: { lat: 14.9759, lng: 102.1177 },
    localContext: {
      marketInsight:
        "โคราชเป็นจุดเชื่อมต่อ Logistics และอุตสาหกรรมหนัก เว็บไซต์ต้องเน้นข้อมูลทางเทคนิคและการจัดการสินค้าจำนวนมาก (Mass SKU)",
      technicalApproach:
        "ใช้ระบบ Database-driven สำหรับ E-Catalog ที่ค้นหาง่าย และการทำ SEO ที่เน้นคำว่า 'โรงงาน' และ 'ตัวแทนจำหน่าย'",
      localStrength:
        "ความเข้าใจในห่วงโซ่อุปทาน (Supply Chain) ของภาคอีสาน ช่วยให้เราออกแบบ Flow การสอบถามราคาที่ฝ่ายจัดซื้อใช้งานได้สะดวก",
    },
  },

  // ===========================================================================
  // --- [TIER 3]: LOCAL DOMINANCE (การสร้างรากฐานธุรกิจท้องถิ่น) ---
  // ===========================================================================
  {
    slug: "nakhon-sawan",
    province: "นครสวรรค์",
    templateSlug: "local-authority",
    title: "รับทำเว็บไซต์ นครสวรรค์ | Local SEO Expert ดันร้านค้าติดอันดับ Google Maps",
    description: "เปลี่ยนร้านค้าดั้งเดิมให้เป็นผู้นำตลาดดิจิทัล ดักจับลูกค้าด้วยการค้นหาที่แม่นยำ",
    longDescription:
      "นครสวรรค์เมืองต้นน้ำเจ้าพระยาและศูนย์กลางการค้าภาคเหนือตอนล่าง เราช่วยให้ร้านค้าท้องถิ่นมีตัวตนบน Google Maps และเว็บไซต์ เพื่อดึงลูกค้าในพื้นที่ให้เข้าถึงธุรกิจของคุณเป็นเจ้าแรก",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ นครสวรรค์ | ยึดพื้นที่การขายด้วย Local SEO",
    seoDescription:
      "ช่วยร้านค้าในนครสวรรค์ให้ติดอันดับ Google Maps และหน้าแรกการค้นหา เพิ่มยอดขายหน้าร้านด้วย Digital Strategy ที่วัดผลได้จริง",
    priority: 90,
    districts: ["เมืองนครสวรรค์", "ลาดยาว", "ตาคลี", "พยุหะคีรี"],
    keywords: ["รับทำเว็บไซต์ นครสวรรค์", "Local SEO นครสวรรค์", "ปักหมุด Google Maps"],
    heroImage: "/images/areas/nakhon-sawan-node.webp",
    coordinates: { lat: 15.7042, lng: 100.1372 },
    localContext: {
      marketInsight:
        "นครสวรรค์มีธุรกิจค้าปลีกและบริการที่หนาแน่น การดึงลูกค้าจากเส้นทางหลัก (ถนนสายเอเชีย) เข้าสู่หน้าร้านคือโอกาสสำคัญ",
      technicalApproach:
        "เน้นการปรับแต่ง Google Business Profile (GBP) ร่วมกับ Local Landing Page เพื่อเพิ่มคะแนน 'Near Me' Search",
      localStrength:
        "เราเชี่ยวชาญการทำ Content ที่ดัก Keyword ชื่ออำเภอในนครสวรรค์ ช่วยให้ธุรกิจท้องถิ่นครอบคลุมลูกค้าได้ทั้งจังหวัด",
    },
  },
  {
    slug: "kamphaeng-phet",
    province: "กำแพงเพชร",
    templateSlug: "local-authority",
    title: "รับทำเว็บไซต์ กำแพงเพชร | Smart Farm & SME Solution ยกระดับธุรกิจด้วยเทคโนโลยี",
    description: "สร้างตัวตนออนไลน์อย่างมืออาชีพ สำหรับ SME และเกษตรกรยุคใหม่",
    longDescription:
      "เปลี่ยนภาพลักษณ์ธุรกิจเกษตรและร้านค้าในกำแพงเพชรให้ดูทันสมัย ด้วยเว็บไซต์ที่ใช้งานง่ายและน่าเชื่อถือ ช่วยขยายฐานลูกค้าจากออฟไลน์สู่ออนไลน์ได้อย่างยั่งยืน",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ กำแพงเพชร | สร้างตัวตนธุรกิจออนไลน์ มาตรฐานมืออาชีพ",
    seoDescription:
      "บริการทำเว็บไซต์ในกำแพงเพชร เน้นความคุ้มค่าและภาพลักษณ์ที่ทันสมัย ช่วยธุรกิจท้องถิ่นเข้าสู่ตลาดออนไลน์ได้ง่ายและประหยัด",
    priority: 85,
    districts: ["เมืองกำแพงเพชร", "ขาณุวรลักษบุรี", "คลองขลุง"],
    keywords: ["รับทำเว็บไซต์ กำแพงเพชร", "ทำเว็บร้านค้า", "Smart Farm Website"],
    heroImage: "/images/areas/kamphaeng-phet-node.webp",
    coordinates: { lat: 16.4828, lng: 99.5227 },
    localContext: {
      marketInsight:
        "กำแพงเพชรมีศักยภาพด้านอุตสาหกรรมเกษตรสูงมาก ธุรกิจที่นี่ต้องการการนำเสนอที่ดูเป็นระบบ (Structured) เพื่อดีลกับคู่ค้ารายใหญ่",
      technicalApproach:
        "เน้นการสร้าง Trust Signals ผ่านหน้าเว็บไซต์ และการทำ SEO ที่เจาะจงกลุ่มคำ 'แปรรูปเกษตร' และ 'โรงงานกำแพงเพชร'",
      localStrength:
        "ความเข้าใจในบริบท SME ภาคเหนือตอนล่าง ช่วยให้เราออกแบบเว็บไซต์ที่ใช้งบประมาณคุ้มค่าแต่ได้ผลลัพธ์ระดับโปร",
    },
  },
  {
    slug: "sukhothai",
    province: "สุโขทัย",
    templateSlug: "local-authority",
    title: "รับทำเว็บไซต์ สุโขทัย | Digital Storytelling สำหรับ OTOP และท่องเที่ยวเชิงวัฒนธรรม",
    description: "เพิ่มมูลค่าสินค้าชุมชนด้วยเว็บไซต์ที่เน้นการเล่าเรื่องและอัตลักษณ์ไทย",
    longDescription:
      "สุโขทัยเมืองมรดกโลก เราช่วยนำเสนอคุณค่าวัฒนธรรมผ่านเว็บไซต์ที่เน้น Storytelling เพื่อยกระดับสินค้า OTOP และโฮมสเตย์ ให้ดึงดูดผู้ซื้อและนักท่องเที่ยวจากทั่วประเทศ",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ สุโขทัย | สร้างมูลค่าเพิ่มให้สินค้า OTOP และท่องเที่ยว",
    seoDescription:
      "รับออกแบบเว็บไซต์ในสุโขทัย เน้นดีไซน์ที่สะท้อนอัตลักษณ์เมืองเก่าและกลยุทธ์ Content Marketing เพื่อเพิ่มมูลค่าสินค้าชุมชน",
    priority: 84,
    districts: ["เมืองสุโขทัย", "ศรีสัชนาลัย", "กงไกรลาศ", "สวรรคโลก"],
    keywords: ["รับทำเว็บไซต์ สุโขทัย", "ทำเว็บ OTOP", "Content Marketing สุโขทัย"],
    heroImage: "/images/areas/sukhothai-node.webp",
    coordinates: { lat: 17.0078, lng: 99.8235 },
    localContext: {
      marketInsight:
        "สินค้าสุโขทัยมี Story ที่ทรงพลังแต่ขาดช่องทางดิจิทัลที่ดูพรีเมียม การเปลี่ยนจาก 'ของพื้นบ้าน' เป็น 'แบรนด์มรดกโลก' คือหัวใจ",
      technicalApproach:
        "เน้น User Experience (UX) แบบเน้นรูปภาพประกอบการเล่าเรื่อง และการเชื่อมต่อระบบ E-commerce ที่เรียบง่าย",
      localStrength:
        "เราผสานศิลปะการดีไซน์ที่เข้ากับอัตลักษณ์สุโขทัย เข้ากับโครงสร้าง SEO ที่ทำให้คนค้นเจอสินค้า OTOP ของคุณได้ทั่วประเทศ",
    },
  },
  {
    slug: "tak",
    province: "ตาก",
    templateSlug: "corporate",
    title: "รับทำเว็บไซต์ ตาก แม่สอด | Cross-border Trade & Logistics Solution",
    description: "ระบบเว็บไซต์รองรับธุรกิจนำเข้า-ส่งออก และขนส่งสินค้าชายแดน",
    longDescription:
      "ในเขตเศรษฐกิจพิเศษตาก-แม่สอด เว็บไซต์คือเครื่องมือเจรจาธุรกิจสำคัญ เราเชี่ยวชาญการทำเว็บสำหรับ Logistics และชิปปิ้งชายแดน ที่ต้องการความแม่นยำและรองรับหลายภาษา",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ ตาก แม่สอด | โซลูชั่นเว็บ Logistics และการค้าชายแดน",
    seoDescription:
      "บริการทำเว็บไซต์ในตากและแม่สอด รองรับธุรกิจขนส่งชายแดนและนำเข้า-ส่งออก ด้วยระบบมาตรฐานที่รองรับการค้าไทย-เมียนมา",
    priority: 83,
    districts: ["เมืองตาก", "แม่สอด", "แม่ระมาด", "พบพระ"],
    keywords: ["รับทำเว็บไซต์ ตาก", "รับทำเว็บไซต์ แม่สอด", "Logistics Website", "SEO ตาก"],
    heroImage: "/images/areas/tak-node.webp",
    coordinates: { lat: 16.8831, lng: 99.1258 },
    localContext: {
      marketInsight:
        "แม่สอดคือประตูการค้าเมียนมา ธุรกิจต้องการความเป็นมืออาชีพที่สื่อสารได้หลายภาษาเพื่อความได้เปรียบในการเจรจา",
      technicalApproach:
        "เน้นโครงสร้าง Multi-language (ไทย/พม่า/อังกฤษ) และระบบจัดการข้อมูลการขนส่ง (Tracking/Info) ที่ชัดเจน",
      localStrength:
        "ความเข้าใจในบริบทการค้าชายแดนทำให้เราวาง Layout เว็บไซต์ที่เน้น 'ความน่าเชื่อถือ' และ 'ความสะดวกในการติดต่อ' เป็นอันดับหนึ่ง",
    },
  },
  {
    slug: "phichit",
    province: "พิจิตร",
    templateSlug: "local-authority",
    title: "รับทำเว็บไซต์ พิจิตร | Agri-Business Platform สำหรับโรงสีและธุรกิจเกษตร",
    description: "สร้างความน่าเชื่อถือให้ธุรกิจโรงสีและร้านวัสดุการเกษตรบนโลกออนไลน์",
    longDescription:
      "ยกระดับธุรกิจเกษตรพิจิตรสู่ออนไลน์ เราช่วยสร้างหน้าเว็บไซต์ที่ดูเป็นสากลสำหรับโรงสีข้าวและร้านจำหน่ายปัจจัยการผลิต เพื่อขยายฐานคู่ค้าให้กว้างไกลกว่าเดิม",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ พิจิตร | ยกระดับธุรกิจเกษตรและโรงสีสู่ออนไลน์",
    seoDescription:
      "รับทำเว็บไซต์ในพิจิตร ช่วยธุรกิจเกษตรและอุตสาหกรรมโรงสีให้มีตัวตนที่น่าเชื่อถือบน Google เพื่อยอดขายที่มั่นคง",
    priority: 82,
    districts: ["เมืองพิจิตร", "ตะพานหิน", "บางมูลนาก", "โพทะเล"],
    keywords: ["รับทำเว็บไซต์ พิจิตร", "ทำเว็บโรงสี", "Agri-Business Website"],
    heroImage: "/images/areas/phichit-node.webp",
    coordinates: { lat: 16.4428, lng: 100.3501 },
    localContext: {
      marketInsight:
        "พิจิตรมีโรงสีข้าวขนาดใหญ่จำนวนมาก เว็บไซต์ต้องทำหน้าที่เป็น 'สำนักงานดิจิทัล' ที่พร้อมรับคำสั่งซื้อจากคู่ค้าทั่วประเทศ",
      technicalApproach:
        "เน้นการทำ Local SEO ที่เน้นคำว่า 'โรงสีข้าวพิจิตร' และระบบแสดงราคาผลผลิตที่อัปเดตได้ง่าย",
      localStrength:
        "เราเชี่ยวชาญการสร้างโครงสร้างเว็บไซต์ที่ดู 'ยิ่งใหญ่และมั่นคง' ซึ่งเป็นสิ่งสำคัญมากสำหรับธุรกิจสินค้าเกษตรปริมาณมาก",
    },
  },
  {
    slug: "uttaradit",
    province: "อุตรดิตถ์",
    templateSlug: "local-authority",
    title: "รับทำเว็บไซต์ อุตรดิตถ์ | Local to Global E-commerce สำหรับสินค้าของฝาก",
    description: "ขยายตลาดสินค้าเกษตรแปรรูปและ OTOP ด้วยระบบร้านค้าออนไลน์ 24 ชม.",
    longDescription:
      "ปลดล็อกศักยภาพอุตรดิตถ์ด้วย E-commerce เราช่วยผู้ประกอบการสินค้าแปรรูปและผลไม้ สร้างหน้าร้านออนไลน์ที่จัดการออเดอร์ได้เอง เปลี่ยนการขายแค่ในพื้นที่เป็นการส่งออกทั่วประเทศ",
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ อุตรดิตถ์ | ระบบร้านค้าออนไลน์สำหรับสินค้าของฝาก",
    seoDescription:
      "บริการทำเว็บไซต์ E-commerce ในอุตรดิตถ์ ช่วยขยายตลาดสินค้าท้องถิ่นสู่ระดับประเทศด้วยระบบการขายที่ใช้งานง่ายและยั่งยืน",
    priority: 81,
    districts: ["เมืองอุตรดิตถ์", "ลับแล", "พิชัย", "น้ำปาด"],
    keywords: ["รับทำเว็บไซต์ อุตรดิตถ์", "ทำเว็บขายของฝาก", "E-commerce อุตรดิตถ์"],
    heroImage: "/images/areas/uttaradit-node.webp",
    coordinates: { lat: 17.6256, lng: 100.0993 },
    localContext: {
      marketInsight:
        "อุตรดิตถ์มีผลไม้ชื่อดังและสินค้าแปรรูปที่เป็นเอกลักษณ์ (เช่น ทุเรียนหลง-หลิน) การเข้าถึงผู้บริโภคโดยตรง (D2C) คือกุญแจเพิ่มกำไร",
      technicalApproach:
        "เน้นระบบ Shopping Cart ที่ใช้ง่ายบนมือถือ และการทำ SEO ที่ดัก Keyword ชื่อผลไม้ตามฤดูกาล",
      localStrength:
        "เราช่วยสร้างระบบจองและสั่งซื้อล่วงหน้า (Pre-order) ที่มีประสิทธิภาพ ช่วยให้เกษตรกรและร้านค้าในอุตรดิตถ์บริหารจัดการสต็อกได้แม่นยำ",
    },
  },
] as const;
```

### CONFIG: image-blur-data.ts

```typescript
/**
 * [SYSTEM GENERATED]: IMAGE_BLUR_REGISTRY v17.8.2
 * DO NOT EDIT MANUALLY. Generated at: 2026-02-11T06:11:56.470Z
 */
import type { ImageBlurRegistry } from "@/types";

export const IMAGE_BLUR_DATA: ImageBlurRegistry = {
  "/images/areas/bangkok-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoMAAkABUB8JaACdAELX5EEAAD+7qjyCrUuGvdpqlKVAiba465vU14qfiYbO04A",
    width: 1024,
    height: 768,
  },
  "/images/areas/chiang-mai-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoMAAkABUB8JaACdAELX5EEAAD+7qjyCrUuGvdpqlKVAiba465vU14qfiYbO04A",
    width: 1024,
    height: 768,
  },
  "/images/areas/chon-buri-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoMAAkABUB8JaACdAELX5EEAAD+7qjyCrUuGvdpqlKVAiba465vU14qfiYbO04A",
    width: 1024,
    height: 768,
  },
  "/images/areas/kamphaeng-phet-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoMAAkABUB8JaACdAELX5EEAAD+7qjyCrUuGvdpqlKVAiba465vU14qfiYbO04A",
    width: 1024,
    height: 768,
  },
  "/images/areas/khon-kaen-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoMAAkABUB8JaACdAELX5EEAAD+7qjyCrUuGvdpqlKVAiba465vU14qfiYbO04A",
    width: 1024,
    height: 768,
  },
  "/images/areas/korat-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoMAAkABUB8JaACdAELX5EEAAD+7qjyCrUuGvdpqlKVAiba465vU14qfiYbO04A",
    width: 1024,
    height: 768,
  },
  "/images/areas/nakhon-sawan-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoMAAkABUB8JaACdAELX5EEAAD+7qjyCrUuGvdpqlKVAiba465vU14qfiYbO04A",
    width: 1024,
    height: 768,
  },
  "/images/areas/phichit-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoMAAkABUB8JaACdAELX5EEAAD+7qjyCrUuGvdpqlKVAiba465vU14qfiYbO04A",
    width: 1024,
    height: 768,
  },
  "/images/areas/phuket-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoMAAkABUB8JaACdAELX5EEAAD+7qjyCrUuGvdpqlKVAiba465vU14qfiYbO04A",
    width: 1024,
    height: 768,
  },
  "/images/areas/preview.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoMAAkABUB8JaACdAELX5EEAAD+7qjyCrUuGvdpqlKVAiba465vU14qfiYbO04A",
    width: 1024,
    height: 768,
  },
  "/images/areas/sukhothai-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoMAAkABUB8JaACdAELX5EEAAD+7qjyCrUuGvdpqlKVAiba465vU14qfiYbO04A",
    width: 1024,
    height: 768,
  },
  "/images/areas/tak-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoMAAkABUB8JaACdAELX5EEAAD+7qjyCrUuGvdpqlKVAiba465vU14qfiYbO04A",
    width: 1024,
    height: 768,
  },
  "/images/areas/uttaradit-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoMAAkABUB8JaACdAELX5EEAAD+7qjyCrUuGvdpqlKVAiba465vU14qfiYbO04A",
    width: 1024,
    height: 768,
  },
  "/images/avatar.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoMAAwABUB8JZgCdAED7fYMQAD+8ECscxC0w0bFwFnvoNBza+GBYq9uBLMtPI/8CpDRE9SZbwAAAA==",
    width: 554,
    height: 554,
  },
  "/images/blog/advanced-schema-markup.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACwAQCdASoMAAkABUB8JZwAAueIN5joAP7uqGLn5TRGbrQUAAA=",
    width: 1024,
    height: 768,
  },
  "/images/blog/copywriting-specialist.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACwAQCdASoMAAkABUB8JZwAAueIN5joAP7uqGLn5TRGbrQUAAA=",
    width: 1024,
    height: 768,
  },
  "/images/blog/core-web-vitals-speed.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACwAQCdASoMAAkABUB8JZwAAueIN5joAP7uqGLn5TRGbrQUAAA=",
    width: 1024,
    height: 768,
  },
  "/images/blog/default-thumb.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACwAQCdASoMAAkABUB8JZwAAueIN5joAP7uqGLn5TRGbrQUAAA=",
    width: 1024,
    height: 768,
  },
  "/images/blog/ecommerce-seo.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACwAQCdASoMAAkABUB8JZwAAueIN5joAP7uqGLn5TRGbrQUAAA=",
    width: 1024,
    height: 768,
  },
  "/images/blog/facebook-ads-vs-website.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoMAAkABUB8JZgCdADIJrAAAP7cpxEHHvPo6aq8wJ4/HJYq9XmVWHJfD4AAAA==",
    width: 696,
    height: 495,
  },
  "/images/blog/seo-google-love.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADQAQCdASoMAAkABUB8JQBOj+AB1LMIgAD+79c6gumBc371d3e0qBnhjp/Ghj49+xFex5GAnE56c0Bc1yCWL+CAgAA=",
    width: 640,
    height: 479,
  },
  "/images/blog/technical-audit-visual.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADQAQCdASoMAAkABUB8JQBOj+AB1LMIgAD+79c6gumBc371d3e0qBnhjp/Ghj49+xFex5GAnE56c0Bc1yCWL+CAgAA=",
    width: 640,
    height: 479,
  },
  "/images/case-studies/industrial-catalog.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoMAAkABUB8JaACdAELX5EEAAD+7qjyCrUuGvdpqlKVAiba465vU14qfiYbO04A",
    width: 1024,
    height: 768,
  },
  "/images/case-studies/preview.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoMAAkABUB8JaACdAELX5EEAAD+7qjyCrUuGvdpqlKVAiba465vU14qfiYbO04A",
    width: 1024,
    height: 768,
  },
  "/images/case-studies/unlink-reputation.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoMAAkABUB8JZgCdADIJrAAAP7cpxEHHvPo6aq8wJ4/HJYq9XmVWHJfD4AAAA==",
    width: 696,
    height: 495,
  },
  "/images/icon-192.png": {
    blurDataURL:
      "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACQAQCdASoMAAwABUB8JZQAAltP9IAA/vHWxKMMaRteX9t6Ugy2LlCoUoAAAA==",
    width: 192,
    height: 192,
  },
  "/images/og-default.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoMAAkABUB8JaACdAELX5EEAAD+7qjyCrUuGvdpqlKVAiba465vU14qfiYbO04A",
    width: 1024,
    height: 768,
  },
  "/images/og-main.png": {
    blurDataURL:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADwAQCdASoMAAkABUB8JYwCdAEQT9MmPgAA/uW2R/LTLjYAUDqehI6GGTffVUvR+BOQZ1GoBI3evpsM4AA=",
    width: 1024,
    height: 768,
  },
  "/images/seo/advanced-schema-markup.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACwAQCdASoMAAkABUB8JZwAAueIN5joAP7uqGLn5TRGbrQUAAA=",
    width: 1024,
    height: 768,
  },
  "/images/seo/core-web-vitals-speed.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACwAQCdASoMAAkABUB8JZwAAueIN5joAP7uqGLn5TRGbrQUAAA=",
    width: 1024,
    height: 768,
  },
  "/images/seo/ecommerce-seo.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACwAQCdASoMAAkABUB8JZwAAueIN5joAP7uqGLn5TRGbrQUAAA=",
    width: 1024,
    height: 768,
  },
  "/images/seo/seo.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACwAQCdASoMAAkABUB8JZwAAueIN5joAP7uqGLn5TRGbrQUAAA=",
    width: 1024,
    height: 768,
  },
  "/images/service/catalog-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoMAAkABUB8JaACdAELX5EEAAD+7qjyCrUuGvdpqlKVAiba465vU14qfiYbO04A",
    width: 1024,
    height: 768,
  },
  "/images/service/corporate-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoMAAkABUB8JaACdAELX5EEAAD+7qjyCrUuGvdpqlKVAiba465vU14qfiYbO04A",
    width: 1024,
    height: 768,
  },
  "/images/service/hotel-resort-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoMAAkABUB8JaACdAELX5EEAAD+7qjyCrUuGvdpqlKVAiba465vU14qfiYbO04A",
    width: 1024,
    height: 768,
  },
  "/images/service/local-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoMAAkABUB8JaACdAELX5EEAAD+7qjyCrUuGvdpqlKVAiba465vU14qfiYbO04A",
    width: 1024,
    height: 768,
  },
  "/images/service/personal-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACwAQCdASoMAAkABUB8JZwAAueIN5joAP7uqGLn5TRGbrQUAAA=",
    width: 1024,
    height: 768,
  },
  "/images/service/salepage-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACwAQCdASoMAAkABUB8JZwAAueIN5joAP7uqGLn5TRGbrQUAAA=",
    width: 1024,
    height: 768,
  },
  "/images/service/seo-agency-node.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoMAAkABUB8JaACdAELX5EEAAD+7qjyCrUuGvdpqlKVAiba465vU14qfiYbO04A",
    width: 1024,
    height: 768,
  },
  "/images/shared/placeholder.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoMAAkABUB8JZgCdADIJrAAAP7cpxEHHvPo6aq8wJ4/HJYq9XmVWHJfD4AAAA==",
    width: 696,
    height: 495,
  },
  "/images/shared/preview.webp": {
    blurDataURL:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoMAAkABUB8JaACdAELX5EEAAD+7qjyCrUuGvdpqlKVAiba465vU14qfiYbO04A",
    width: 1024,
    height: 768,
  },
} as const;
```

### CONFIG: master-registry.ts

```typescript
/**
 * [DATA REGISTRY]: MASTER_SERVICE_REGISTRY v17.8.5 (STRATEGIC_READY)
 * [STRATEGY]: Color Psychology | ROI Focus | Zero-CLS Preflight
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { TemplateMasterData } from "@/types";

/**
 * @description คลังข้อมูลบริการหลักที่ถูกปรับจูนเพื่อการแปลงผู้เข้าชมเป็นลูกค้า (High-Conversion)
 * จัดกลุ่มตามความต้องการทางธุรกิจและระดับการลงทุน
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
        title: "Architecture Logic",
        description: "ปรับโครงสร้างหลังบ้านให้ Clean และถูกหลัก Google 100%",
        icon: "Code2",
      },
      {
        title: "LCP & Speed Tuning",
        description: "ทำความเร็วเว็บให้ผ่านเกณฑ์มาตรฐาน เพื่ออันดับที่ดีกว่า",
        icon: "Zap",
      },
      {
        title: "Conversion Tracking",
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
      "หน้าเว็บไซต์สำหรับปิดการขายโดยเฉพาะ ออกแบบ UX/UI ให้กระชับ โหลดไว รองรับการทำโฆษณาเต็มรูปแบบ",
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
      "Ultra Performance: โหลดเร็วทันใจ ลดโอกาสลูกค้ากดปิดหนี (Bounce Rate)",
      "Ads-Ready: โครงสร้างพร้อมสำหรับการติด Pixel และ Conversion API",
      "Action Focused: ดีไซน์ปุ่มสั่งซื้อและติดต่อให้กดง่ายที่สุดบนมือถือ",
    ],
    coreFeatures: [
      {
        title: "Instant Loading",
        description: "เทคโนโลยี SSR โหลดไวแม้ในพื้นที่สัญญาณอินเทอร์เน็ตต่ำ",
        icon: "Smartphone",
      },
      {
        title: "Conversion UI",
        description: "จัดเรียงเนื้อหาตามหลักจิตวิทยาการขาย (AIDA Model)",
        icon: "Target",
      },
      {
        title: "Direct Connect",
        description: "เชื่อมต่อ Line, Facebook Messenger และปุ่มโทรออกทันที",
        icon: "MessageSquare",
      },
    ],
    faqs: [
      {
        question: "ทำไมถึงคุ้มกว่าจ้างทั่วไป?",
        answer:
          "เพราะเราใช้โครงสร้างเดียวกับเว็บระดับสูง แต่ปรับให้กระชับเพื่อปิดการขายหน้าเดียว ทำให้ได้ประสิทธิภาพสูงในราคา SME ครับ",
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
      "Brand Authority: ออกแบบตาม CI สร้างภาพลักษณ์องค์กรที่มั่นคง",
      "Future Proof: รองรับการขยายตัวและเพิ่มฟังก์ชันใหม่ในอนาคต",
      "Trust Signals: วางโครงสร้างข้อมูลที่เน้นความโปร่งใสและน่าเชื่อถือ",
    ],
    coreFeatures: [
      {
        title: "Enterprise Design",
        description: "สะท้อนวิสัยทัศน์องค์กร ผ่านงานดีไซน์ระดับ Specialist",
        icon: "ShieldCheck",
      },
      {
        title: "Dynamic CMS",
        description: "ระบบหลังบ้านให้คุณอัปเดตผลงานและข่าวสารได้แบบ Real-time",
        icon: "Database",
      },
      {
        title: "Responsive Matrix",
        description: "แสดงผลสมบูรณ์แบบในทุกอุปกรณ์ (Desktop/Tablet/Mobile)",
        icon: "Monitor",
      },
    ],
    faqs: [
      {
        question: "ดูแลง่ายไหม?",
        answer: "เราใช้ระบบที่คนทั่วไปใช้งานได้ครับ พร้อมมีวิดีโอสอนการใช้งานระบบหลังบ้านให้ฟรี",
      },
    ],
    keywords: ["ทำเว็บองค์กร", "เว็บไซต์บริษัท", "ออกแบบเว็บธุรกิจ", "Web Design Corporate"],
    priority: 2,
    isFeatured: true,
  },

  // ===========================================================================
  // [03. LOCAL AUTHORITY]: ยกระดับธุรกิจรายพื้นที่ (Geographic Dominance)
  // ===========================================================================
  {
    id: "AEM-SVC-LS-10",
    title: "Local Authority Engine",
    description:
      "ครองความเป็นเบอร์ 1 ในพื้นที่ ด้วยระบบเว็บไซต์ที่ออกแบบมาเพื่อกวาดลูกค้าในจังหวัดโดยเฉพาะ",
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
      "Geo-Dominance: ติดอันดับต้นๆ เมื่อมีการค้นหาบริการในพื้นที่ของคุณ",
      "Maps Integration: เชื่อมต่อข้อมูลพิกัดร้านค้าให้ Google เข้าใจง่าย",
      "Hyper-Local SEO: ดึงดูดลูกค้าที่อยู่ใกล้คุณที่สุดให้ตัดสินใจซื้อ",
    ],
    coreFeatures: [
      {
        title: "Entity Graphing",
        description: "สร้างโครงสร้างข้อมูลให้ Google Maps จดจำร้านค้าของคุณ",
        icon: "MapPin",
      },
      {
        title: "Localized Content",
        description: "วางกลยุทธ์เนื้อหาที่สอดรับกับพฤติกรรมลูกค้าในพื้นที่",
        icon: "Search",
      },
      {
        title: "Local Authority",
        description: "ยกระดับความน่าเชื่อถือรายจังหวัดด้วย Local Schema",
        icon: "Navigation",
      },
    ],
    faqs: [
      {
        question: "ทำไมต้องเจาะพื้นที่?",
        answer:
          "การทำเจาะจงพื้นที่ช่วยลดคู่แข่งในระดับประเทศ และเข้าถึงลูกค้าที่มีโอกาสซื้อจริงในพื้นที่ของคุณได้เร็วกว่าครับ",
      },
    ],
    keywords: ["รับปักหมุด", "Local SEO", "Google Maps ร้านค้า", "ทำเว็บรายจังหวัด"],
    priority: 3,
    isFeatured: true,
  },

  // ===========================================================================
  // [04. E-CATALOG]: ระบบจัดการข้อมูลและการขาย (Structured Commerce)
  // ===========================================================================
  {
    id: "AEM-SVC-EC-05",
    title: "Smart E-Catalog System",
    description:
      "เปลี่ยนแค็ตตาล็อกเล่มหนาเป็นระบบค้นหาสินค้าออนไลน์ ช่วยฝ่ายขายทำงานง่าย ลูกค้าปิดการขายไว",
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
      "Sales Support: ช่วยให้ฝ่ายขายส่งข้อมูลสินค้าให้ลูกค้าได้ทันทีผ่านลิงก์",
      "Mass Data: รองรับสินค้าจำนวนมาก จัดหมวดหมู่ได้เป็นระเบียบชัดเจน",
      "Lead Generation: ระบบขอใบเสนอราคาที่ช่วยเก็บข้อมูลผู้สนใจซื้อ",
    ],
    coreFeatures: [
      {
        title: "Advanced Database",
        description: "จัดการสเปคสินค้า รูปภาพ และไฟล์ PDF ได้ในที่เดียว",
        icon: "Database",
      },
      {
        title: "Multi-Filter",
        description: "ระบบกรองสินค้าอัจฉริยะ ค้นหาเจอง่ายในไม่กี่วินาที",
        icon: "Filter",
      },
      {
        title: "Inquiry Flow",
        description: "ระบบรับคำขอใบเสนอราคาผ่าน Line OA อัตโนมัติ",
        icon: "Send",
      },
    ],
    faqs: [
      {
        question: "ใส่สินค้าได้เยอะแค่ไหน?",
        answer: "รองรับได้ไม่จำกัดครับ ระบบออกแบบมาเพื่อจัดการข้อมูลขนาดใหญ่โดยเฉพาะ",
      },
    ],
    keywords: ["เว็บแค็ตตาล็อก", "ระบบสินค้าออนไลน์", "E-Catalog", "โปรแกรมสต็อกสินค้า"],
    priority: 4,
  },

  // ===========================================================================
  // [05. PORTFOLIO]: อัตลักษณ์และผลงาน (Professional Persona)
  // ===========================================================================
  {
    id: "AEM-SVC-PB-14",
    title: "Professional Bio & Portfolio",
    description: "พื้นที่นำเสนอตัวตนและผลงานแบบมืออาชีพ รวมทุกช่องทางติดต่อไว้ในโหนดเดียว",
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
      "Centralized Hub: รวมโซเชียลมีเดียและผลงานเด่นไว้ในที่เดียว",
      "High Authority: สร้างความประทับใจแรกเห็นด้วยดีไซน์ระดับโปร",
      "Speed Connectivity: ลูกค้าเข้าถึงช่องทางติดต่อได้ใน 1 คลิก",
    ],
    coreFeatures: [
      {
        title: "Expert Showcase",
        description: "จัดแสดงทักษะและผลงานอย่างมีชั้นเชิงและน่าสนใจ",
        icon: "Award",
      },
      {
        title: "Digital Bio",
        description: "นามบัตรดิจิทัลที่เข้าถึงได้จากทั่วโลกตลอด 24 ชม.",
        icon: "Fingerprint",
      },
      {
        title: "Link Optimization",
        description: "จัดการทราฟฟิกไปยัง Social Media ต่างๆ ได้อย่างเป็นระบบ",
        icon: "Share2",
      },
    ],
    faqs: [
      {
        question: "ใช้แทน LinkedIn ได้ไหม?",
        answer: "ใช้เสริมกันได้ดีมากครับ เพื่อให้พอร์ตโฟลิโอของคุณดูมีเอกลักษณ์โดดเด่นกว่าใคร",
      },
    ],
    keywords: ["ทำเว็บพอร์ตโฟลิโอ", "Bio Link", "เว็บส่วนตัว", "Digital Name Card"],
    priority: 5,
  },

  // ===========================================================================
  // [06. HOSPITALITY]: ประสบการณ์และความเหนือระดับ (Luxury Experience)
  // ===========================================================================
  {
    id: "AEM-SVC-HR-08",
    title: "Hotel & Resort Website",
    description:
      "เว็บไซต์โรงแรมที่เน้นประสบการณ์ผู้ใช้งาน (UX) ภาพสวย โหลดไว เพื่อยอดจองห้องพักที่เพิ่มขึ้น",
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
      "Visual Immersion: ถ่ายทอดบรรยากาศที่พักผ่านหน้าเว็บที่โหลดไวระดับ Retina",
      "Direct Booking ROI: ลดการจ่ายค่าคอมมิชชั่นให้ OTA ด้วยระบบจองตรง",
      "Guest Trust: สร้างความมั่นใจให้แขกผู้เข้าพักด้วยมาตรฐานความปลอดภัยสูง",
    ],
    coreFeatures: [
      {
        title: "Experience Design",
        description: "ดีไซน์ที่เปลี่ยนผู้เข้าชมเว็บให้กลายเป็นแขกผู้เข้าพัก",
        icon: "Home",
      },
      {
        title: "Booking Gateway",
        description: "รองรับการเชื่อมต่อกับ Channel Manager และ Payment Engine",
        icon: "CreditCard",
      },
      {
        title: "Facility Showcase",
        description: "นำเสนอสิ่งอำนวยความสะดวกด้วย Gallery ความละเอียดสูง",
        icon: "Camera",
      },
    ],
    faqs: [
      {
        question: "รองรับหลายภาษาไหม?",
        answer: "รองรับครับ เพื่อดึงดูดนักท่องเที่ยวจากทั่วทุกมุมโลก",
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
[3.4K 2026-02-11 13:38]  .
├── [ 85K 2026-02-11 13:43]  README.md
├── [3.4K 2026-02-11 05:49]  app
│   ├── [3.4K 2026-02-11 05:59]  (routes)
│   │   ├── [3.4K 2026-02-11 05:49]  areas
│   │   │   ├── [3.4K 2026-02-11 05:49]  [slug]
│   │   │   │   └── [5.5K 2026-02-11 10:48]  page.tsx
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
│   │       │   └── [5.4K 2026-02-11 13:33]  page.tsx
│   │       └── [8.0K 2026-02-11 10:43]  page.tsx
│   ├── [3.4K 2026-02-11 05:49]  about
│   │   └── [ 12K 2026-02-11 10:41]  page.tsx
│   ├── [5.6K 2026-02-11 10:38]  globals.css
│   ├── [5.2K 2026-02-11 11:48]  layout.tsx
│   ├── [4.3K 2026-02-11 10:34]  loading.tsx
│   ├── [1.4K 2026-02-11 05:49]  manifest.ts
│   ├── [5.6K 2026-02-11 05:49]  not-found.tsx
│   ├── [7.6K 2026-02-11 13:31]  page.tsx
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
│   │   ├── [9.9K 2026-02-11 10:32]  Footer.tsx
│   │   ├── [ 11K 2026-02-11 13:31]  Navbar.tsx
│   │   ├── [2.2K 2026-02-11 10:33]  PageTransition.tsx
│   │   └── [2.0K 2026-02-11 10:33]  TopLoader.tsx
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
│   │   │   ├── [9.6K 2026-02-11 13:31]  Index.tsx
│   │   │   └── [2.5K 2026-02-11 13:31]  Schema.ts
│   │   ├── [3.4K 2026-02-11 05:49]  catalog
│   │   │   ├── [8.1K 2026-02-11 13:31]  Index.tsx
│   │   │   └── [2.6K 2026-02-11 13:31]  Schema.ts
│   │   ├── [3.4K 2026-02-11 05:49]  corporate
│   │   │   ├── [9.8K 2026-02-11 13:31]  Index.tsx
│   │   │   └── [3.3K 2026-02-11 13:31]  Schema.ts
│   │   ├── [3.4K 2026-02-11 05:49]  hotelresort
│   │   │   ├── [7.9K 2026-02-11 13:31]  Index.tsx
│   │   │   └── [2.5K 2026-02-11 13:31]  Schema.ts
│   │   ├── [3.4K 2026-02-11 10:55]  local-authority
│   │   │   ├── [1.5K 2026-02-11 13:35]  Schema.ts
│   │   │   └── [ 10K 2026-02-11 13:37]  index.tsx
│   │   ├── [3.4K 2026-02-11 05:49]  salepage
│   │   │   ├── [8.8K 2026-02-11 13:31]  Index.tsx
│   │   │   └── [2.8K 2026-02-11 13:31]  Schema.ts
│   │   ├── [3.4K 2026-02-11 05:49]  sections
│   │   │   ├── [2.8K 2026-02-11 13:31]  DynamicFAQ.tsx
│   │   │   ├── [3.7K 2026-02-11 13:31]  FeatureGrid.tsx
│   │   │   ├── [5.7K 2026-02-11 13:31]  HeroEngine.tsx
│   │   │   └── [3.3K 2026-02-11 13:31]  LayoutEngine.tsx
│   │   └── [3.4K 2026-02-11 05:49]  seo_agency
│   │       ├── [2.7K 2026-02-11 13:31]  Schema.ts
│   │       └── [8.7K 2026-02-11 13:31]  index.tsx
│   └── [3.4K 2026-02-11 05:49]  ui
│       ├── [2.3K 2026-02-11 12:00]  AmbientBackground.tsx
│       ├── [1.5K 2026-02-11 05:49]  Callout.tsx
│       ├── [4.3K 2026-02-11 05:49]  IconRenderer.tsx
│       ├── [3.0K 2026-02-11 10:29]  SkeletonCard.tsx
│       ├── [3.2K 2026-02-11 05:49]  ThemeToggle.tsx
│       ├── [2.1K 2026-02-11 05:49]  accordion.tsx
│       ├── [4.2K 2026-02-11 05:49]  button.tsx
│       ├── [1.3K 2026-02-11 05:49]  skeleton-grid.tsx
│       ├── [ 894 2026-02-11 05:49]  skeleton.tsx
│       └── [3.3K 2026-02-11 05:49]  sonner.tsx
├── [ 425 2026-02-11 05:49]  components.json
├── [3.4K 2026-02-11 13:43]  config
├── [3.4K 2026-02-11 11:33]  constants
│   ├── [ 36K 2026-02-11 13:31]  area-nodes.ts
│   ├── [9.1K 2026-02-11 13:33]  image-blur-data.ts
│   ├── [ 21K 2026-02-11 13:31]  master-registry.ts
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
├── [ 247 2026-02-11 13:40]  next-env.d.ts
├── [2.2K 2026-02-11 05:49]  next.config.ts
├── [2.5K 2026-02-11 13:24]  package.json
├── [  51 2026-02-11 13:31]  pmpm-workspace.yaml
├── [256K 2026-02-11 13:31]  pnpm-lock.yaml
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
│   ├── [2.5K 2026-02-11 13:31]  gen-blur-data.mjs
│   ├── [2.2K 2026-02-11 05:49]  generate_docs.sh
│   └── [ 411 2026-02-11 11:16]  optimize-assets.sh
├── [ 693 2026-02-11 05:49]  tsconfig.json
├── [174K 2026-02-11 13:38]  tsconfig.tsbuildinfo
├── [3.4K 2026-02-11 05:49]  types
│   ├── [7.5K 2026-02-11 12:06]  index.d.ts
│   ├── [ 423 2026-02-11 05:49]  mdx.d.ts
│   └── [3.0K 2026-02-11 05:49]  template-props.ts
└── [2.5K 2026-02-11 10:57]  vercel.json

54 directories, 109 files
```
