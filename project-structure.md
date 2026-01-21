---
title: "Project Structure Report"
site: "AEMDevWeb"
url: "https://www.aemdevweb.com"
author: "AEMDevWeb Automation"
projectType: "Web Application"
environment: "pre-deploy"
buildId: "4c3c10c"
generatedAt: "2026-01-21T15:54:29Z"
contentType: "technical-documentation"
tags:
  - project-structure
  - mdx
  - nextjs
  - pre-deploy
  - aemdevweb
---

# 📁 Project Structure Report
_Generated: **2026-01-21T15:54:29Z**_

> **Site:** https://www.aemdevweb.com  
> **Environment:** pre-deploy  
> **Build ID:** 4c3c10c

## 🌳 Folder Structure

📂 config
  📄 ai-context.core.md
  📄 ai-context.marketing.md
  📄 ai-context.seo.md
  📄 ai-context.tech.md

📂 app
  📂 (main)
    📂 about
      📄 page.tsx
    📂 blog
      📂 [slug]
        📄 page.tsx
      📄 page.tsx
    📂 careers
      📄 page.tsx
    📂 case-studies
      📂 [slug]
        📄 page.tsx
      📄 page.tsx
    📂 contact
      📄 page.tsx
    📄 layout.tsx
    📄 page.tsx
    📂 privacy
      📄 page.tsx
    📂 services
      📂 [slug]
        📄 page.tsx
      📄 page.tsx
    📂 terms
      📄 page.tsx
  📂 (marketing)
    📂 [template]
      📂 [category]
        📂 [slug]
          📄 page.tsx
        📄 page.tsx
      📄 page.tsx
    📄 layout.tsx
  📄 favicon.ico
  📄 globals.css
  📄 layout.tsx
  📄 loading.tsx
  📄 metadata.ts
  📄 not-found.tsx
  📄 robots.ts
  📄 sitemap.ts
  📄 viewport.ts

📂 components
  📂 landing
    📄 CTASection.tsx
    📄 Hero.tsx
    📄 HomeClientSections.tsx
    📄 LandingContent.tsx
    📄 ValueProp.tsx
  📂 sales-engine
    📄 ImpactStats.tsx
    📄 LineLeadForm.tsx
    📄 PriceEstimator.tsx
    📄 SpeedDemon.tsx
    📄 WorkProcess.tsx
  📂 seo
    📄 JsonLd.tsx
  📂 shared
    📄 BlogCard.tsx
    📄 CaseStudyCard.tsx
    📄 Footer.tsx
    📄 Header.tsx
    📄 LineStickyButton.tsx
    📄 Navbar.tsx
    📄 ServiceCard.tsx
    📄 TrustBadge.tsx
  📂 template
    📂 marketplace
      📄 TemplateFilter.tsx
      📄 TemplateGrid.tsx
      📄 TemplateHero.tsx
      📄 TemplateSearch.tsx
    📂 shared
      📄 DevicePreview.tsx
      📄 TemplateFeatures.tsx
      📄 TemplateNavbar.tsx
      📄 TemplatePricingCard.tsx
  📂 ui
    📄 badge.tsx
    📄 button.tsx
    📄 card.tsx
    📄 form.tsx
    📄 input.tsx
    📄 label.tsx
    📄 modal.tsx
    📄 skeleton.tsx
    📄 sonner.tsx
    📄 textarea.tsx

📂 lib
  📄 blog.ts
  📄 case-studies.ts
  📄 template.ts
  📄 utils.ts

📂 hooks

📂 constants
  📄 navigation.ts
  📄 services-data.ts
  📄 site-config.ts

📂 content
  📂 blog
    📄 5-points-killing-sales.mdx
    📄 copywriting-secrets.mdx
    📄 facebook-ads-vs-website.mdx
    📄 seo-for-sme-2026.mdx
    📄 unlink-th-case-study.mdx
  📂 case-studies
    📄 case-studies-1.mdx
    📄 case-studies-2.mdx
    📄 case-studies-3.mdx
  📂 template
    📂 booking
      📂 hotel-resort
        📄 index.mdx
        📄 meta.json
    📂 e-commerce
      📂 shop-master-pro
        📄 index.mdx
        📄 meta.json
    📂 landing-page
      📂 facebook-ads-expert
        📄 index.mdx
        📄 meta.json
    📂 service
      📂 cleaning-pro
        📄 index.mdx
        📄 meta.json

📂 types
  📄 index.ts

📂 public
  📄 android-chrome-192x192.png
  📄 android-chrome-512x512.png
  📄 apple-touch-icon.png
  📂 download
  📄 favicon-16x16.png
  📄 favicon-32x32.png
  📄 grid.svg
  📂 images
    📂 blog
      📄 placeholder.webp
      📄 project-01.webp
    📄 og-image.png
    📂 showcase
      📄 Unlike-th-destop99.webp
      📄 Unlink-th-mobile94.webp
      📄 aemdevweb-hero.webp
      📄 project-01.webp
      📄 unlink-th.webp
      📄 unlink-th1.webp
      📄 unlink-th3.webp
    📂 templates
      📂 booking
      📂 e-commerce
      📂 landing-page
      📄 project-01.webp
      📂 service
  📄 og-image.png

⚠️ Skipped: providers (not found)

## 📦 package.json Overview
```json
{
  "name": "aemdevweb.com",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev --webpack",
    "build": "next build --webpack",
    "start": "next start",
    "lint": "eslint .",
    "format": "prettier --write .",
    "type-check": "tsc --noEmit",
    "analyze": "ANALYZE=true next build"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.10.0",
    "@img/sharp-wasm32": "^0.34.5",
    "@next/mdx": "16.1.3",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-navigation-menu": "^1.2.14",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-toast": "^1.2.15",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@swc/helpers": "^0.5.18",
    "@types/mdx": "^2.0.13",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "framer-motion": "^12.25.0",
    "gray-matter": "^4.0.3",
    "lucide-react": "^0.562.0",
    "next": "16.1.3",
    "next-mdx-remote": "^5.0.0",
    "next-themes": "^0.4.6",
    "nextjs-toploader": "^3.9.17",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "react-hook-form": "^7.71.1",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.0.0",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.24.1"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3.3.3",
    "@eslint/js": "^9.39.2",
    "@next/bundle-analyzer": "^16.1.3",
    "@tailwindcss/postcss": "^4.0.0",
    "@tailwindcss/typography": "^0.5.19",
    "@types/node": "^24.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "autoprefixer": "^10.4.23",
    "eslint": "^9.18.0",
    "eslint-config-next": "16.1.3",
    "postcss": "^8.5.1",
    "prettier": "^3.4.2",
    "prettier-plugin-tailwindcss": "^0.6.10",
    "tailwindcss": "^4.0.0",
    "tw-animate-css": "^1.4.0",
    "typescript": "^5.7.3",
    "typescript-eslint": "^8.53.1"
  }
}
```

## 🧩 MDX Components Check
✅ File found: `mdx-components.tsx`

**Purpose**
- Central mapping for MDX rendering
- Controls how headings, links, images, and code appear
- Direct impact on SEO, accessibility, and content consistency

**Review checklist**
- [ ] Heading hierarchy is semantic (h1–h6)
- [ ] External links handle target / rel correctly
- [ ] No inline script or unsafe HTML
- [ ] Compatible with App Router + MDX pipeline

**Source snapshot**
```typescript
/** @format */

import type { MDXComponents } from "mdx/types"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Zap,
  ShieldCheck,
} from "lucide-react"

// 🧩 Specialist Components Integration
/**
 * ✅ [FIXED] นำเข้า ImpactStats เพื่อลงทะเบียนเข้ากับระบบ MDX
 * ป้องกัน Error: Expected component ImpactStats to be defined
 */
import { ImpactStats } from "@/components/sales-engine/ImpactStats"

/**
 * 🏗️ MDX Components Specialist Edition v2026
 * ออกแบบมาเพื่อยกระดับ Content Marketing สำหรับ SME และโรงงาน
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,

    // 🔗 1. Core Logic Components
    ImpactStats, // ✅ ลงทะเบียนที่นี่เพื่อให้เรียกใช้ <ImpactStats /> ในไฟล์ .mdx ได้ทันที

    // 🖼️ 2. Optimized Luminous Image (Industrial Standard)
    img: (props) => (
      <span className="group relative my-16 block w-full overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50 shadow-2xl">
        <span className="relative block aspect-video w-full overflow-hidden">
          <Image
            src={props.src || ""}
            alt={props.alt || "AEM DEV WEB Specialist Image"}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </span>
        {props.alt && (
          <span className="font-prompt block border-t border-slate-100 bg-white p-5 text-center text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">
            {props.alt}
          </span>
        )}
      </span>
    ),

    // 🔗 3. Smart Logic Links
    a: ({ href, children }) => {
      const isInternal = href?.startsWith("/") || href?.startsWith("#")
      const baseClass =
        "font-bold transition-all text-emerald-600 hover:text-emerald-500 underline decoration-emerald-500/30 underline-offset-4 hover:decoration-emerald-500"

      if (isInternal) {
        return (
          <Link href={href as string} className={baseClass}>
            {children}
          </Link>
        )
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClass}
        >
          {children}{" "}
          <span className="ml-1 text-[10px] italic opacity-50">↗</span>
        </a>
      )
    },

    // 📣 4. Trust Quote / Expert Insights
    blockquote: ({ children }) => (
      <div className="group relative my-12 overflow-hidden rounded-r-[2.5rem] border-l-4 border-emerald-500 bg-emerald-500/[0.03] p-8 text-slate-600 md:p-10">
        <div className="pointer-events-none absolute -top-4 -right-4 opacity-5 transition-opacity group-hover:opacity-10">
          <Zap className="h-24 w-24 text-emerald-500" />
        </div>
        <div className="font-anuphan relative z-10 text-xl leading-relaxed font-medium italic">
          {children}
        </div>
      </div>
    ),

    // 🚀 5. Marketing Specialist Blocks
    CallToAction: ({
      title,
      url,
      label = "เริ่มโปรเจกต์ของคุณ",
    }: {
      title: string
      url: string
      label?: string
    }) => (
      <div className="relative my-16 overflow-hidden rounded-[3rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-10 text-center md:p-16">
        <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center opacity-40" />
        <h3 className="font-prompt relative z-10 mb-8 text-3xl font-black tracking-tighter text-slate-900 uppercase italic md:text-5xl">
          {title}
        </h3>
        <Link
          href={url}
          className="relative z-10 inline-flex items-center justify-center rounded-full bg-[#0F172A] px-12 py-6 text-[11px] font-black tracking-[0.3em] text-white uppercase shadow-2xl transition-all hover:scale-105 hover:bg-emerald-500 active:scale-95"
        >
          {label} <ArrowRight className="ml-3 h-4 w-4" />
        </Link>
      </div>
    ),

    FeatureList: ({ items }: { items: string[] }) => (
      <div className="my-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 rounded-[1.5rem] border border-slate-100 bg-slate-50/50 p-5 transition-colors hover:bg-white"
          >
            <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-500" />
            <span className="font-anuphan text-lg font-medium text-slate-700">
              {item}
            </span>
          </div>
        ))}
      </div>
    ),

    // ✒️ 6. Typography System (Light Mode Optimized for Readability)
    h1: ({ children }) => (
      <h1 className="font-prompt mt-24 mb-10 text-5xl font-black tracking-tighter text-[#0F172A] uppercase italic md:text-7xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-prompt mt-20 mb-8 flex items-center gap-4 border-b border-slate-100 pb-6 text-4xl font-black tracking-tighter text-[#0F172A] uppercase italic md:text-5xl">
        <div className="h-10 w-2 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-prompt mt-14 mb-6 text-2xl font-black tracking-tight text-slate-800 uppercase md:text-4xl">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="font-anuphan mb-8 text-xl leading-[1.9] font-medium text-slate-600">
        {children}
      </p>
    ),
    ul: ({ children }) => <ul className="mb-10 ml-2 space-y-6">{children}</ul>,
    li: ({ children }) => (
      <li className="flex items-start gap-4">
        <div className="mt-3 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
        <span className="font-anuphan text-xl font-medium text-slate-600">
          {children}
        </span>
      </li>
    ),

    // Export Icons & Components for Inline Usage
    Zap,
    ShieldCheck,
    Sparkles,
  }
}
```

## ⚙️ Next.js Configuration Check
⚠️ next.config.ts not found
Using default Next.js behavior

## 📝 Pre-deploy Analysis
________
🔍 Latest pre-deploy report detected

✅ Status: **READY FOR DEPLOY**

### 📍 Production Route Map
```text
```text
Route (app)
┌ ○ /
├ ○ /_not-found
├ ƒ /[template]
├ ƒ /[template]/[category]
├ ● /[template]/[category]/[slug]
│ ├ /templates/booking/hotel-resort
│ ├ /templates/e-commerce/shop-master-pro
│ ├ /templates/landing-page/facebook-ads-expert
│ └ /templates/service/cleaning-pro
├ ○ /about
├ ○ /blog
├ ● /blog/[slug]
│ ├ /blog/5-points-killing-sales
│ ├ /blog/copywriting-secrets
│ ├ /blog/facebook-ads-vs-website
│ └ [+2 more paths]
├ ○ /careers
├ ○ /case-studies
├ ● /case-studies/[slug]
│ ├ /case-studies/case-studies-1
│ ├ /case-studies/case-studies-2
│ └ /case-studies/case-studies-3
├ ○ /contact
├ ○ /privacy
├ ○ /robots.txt
├ ○ /services
├ ƒ /services/[slug]
├ ○ /sitemap.xml
└ ○ /terms
○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
ƒ  (Dynamic)  server-rendered on demand
```
```

### ⚠️ Issues Highlight
✅ No critical issues detected

---
Status: Scan completed successfully.
Scope: Architecture • MDX • Next.js • Pre-deploy
Target: Production readiness & AI context
