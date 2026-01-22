---
title: "Project Structure Report"
site: "AEMDevWeb"
url: "https://www.aemdevweb.com"
author: "AEMDevWeb Automation"
projectType: "Web Application"
environment: "pre-deploy"
buildId: "de2f75c"
generatedAt: "2026-01-22T15:05:57Z"
contentType: "technical-documentation"
tags:
  - project-structure
  - mdx
  - nextjs
  - pre-deploy
---

# Project Structure Report
Generated: 2026-01-22T15:05:57Z

> Site: https://www.aemdevweb.com
> Environment: pre-deploy
> Build ID: de2f75c

## 1. Directory Architecture

dir: config/
config
  |ai-context.core.md
  |ai-context.dna.md
  |ai-system-role.md

dir: app/
app
  |(main)
     |about
        |page.tsx
     |blog
        |[slug]
           |page.tsx
        |page.tsx
     |contact
        |page.tsx
     |layout.tsx
     |page.tsx
     |services
        |page.tsx
        |[slug]
           |page.tsx
     |case-studies
        |[slug]
           |page.tsx
        |page.tsx
     |careers
        |page.tsx
     |privacy
        |page.tsx
     |terms
        |page.tsx
  |favicon.ico
  |metadata.ts
  |not-found.tsx
  |viewport.ts
  |globals.css
  |layout.tsx
  |loading.tsx
  |robots.ts
  |(marketing)
     |[template]
        |page.tsx
        |[category]
           |[slug]
              |page.tsx
           |page.tsx
     |layout.tsx
  |sitemap.ts

dir: components/
components
  |landing
     |Hero.tsx
     |ValueProp.tsx
     |CTASection.tsx
     |LandingContent.tsx
     |HomeClientSections.tsx
  |sales-engine
     |PriceEstimator.tsx
     |WorkProcess.tsx
     |LineLeadForm.tsx
     |ImpactStats.tsx
     |SpeedDemon.tsx
  |template
     |marketplace
        |TemplateGrid.tsx
        |TemplateFilter.tsx
        |TemplateSearch.tsx
        |TemplateHero.tsx
        |TemplateCard.tsx
     |shared
        |DevicePreview.tsx
        |TemplateFeatures.tsx
        |TemplatePricingCard.tsx
        |TemplateNavbar.tsx
  |shared
     |LineStickyButton.tsx
     |TrustBadge.tsx
     |FacebookChat.tsx
     |BlogCard.tsx
     |ServiceCard.tsx
     |Footer.tsx
     |Header.tsx
     |Navbar.tsx
     |CaseStudyCard.tsx
  |seo
     |JsonLd.tsx
  |ui
     |button.tsx
     |skeleton.tsx
     |badge.tsx
     |sonner.tsx
     |card.tsx
     |form.tsx
     |input.tsx
     |label.tsx
     |modal.tsx
     |textarea.tsx

dir: lib/
lib
  |blog.ts
  |case-studies.ts
  |utils.ts
  |template.ts

dir: hooks/
hooks

dir: constants/
constants
  |navigation.ts
  |services-data.ts
  |site-config.ts

dir: content/
content
  |blog
     |copywriting-secrets.mdx
     |facebook-ads-vs-website.mdx
     |5-points-killing-sales.mdx
     |seo-for-sme-2026.mdx
     |unlink-th-case-study.mdx
  |template
     |e-commerce
        |shop-master-pro
           |index.mdx
           |meta.json
     |landing-page
        |facebook-ads-expert
           |index.mdx
           |meta.json
     |service
        |cleaning-pro
           |index.mdx
           |meta.json
     |booking
        |hotel-resort
           |index.mdx
           |meta.json
  |case-studies
     |sme-web-performance-growth.mdx
     |unlink-reputation-management-success.mdx
     |industrial-catalog-rfq-optimization.mdx

dir: types/
types
  |index.ts

dir: public/
public
  |og-image.png
  |grid.svg
  |images
     |og-image.png
     |showcase
        |unlink-th1.webp
        |project-01.webp
        |aemdevweb-hero.webp
        |unlink-th.webp
        |Unlike-th-destop99.webp
        |Unlink-th-mobile94.webp
        |unlink-th3.webp
     |blog
        |project-01.webp
        |placeholder.webp
     |templates
        |project-01.webp
        |e-commerce
        |booking
        |service
        |landing-page
  |download
  |android-chrome-192x192.png
  |android-chrome-512x512.png
  |favicon-16x16.png
  |favicon-32x32.png
  |apple-touch-icon.png

[WARN] Skipped: providers (not found)

## 2. Dependencies and Scripts (package.json)
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
    "@next/eslint-plugin-next": "^16.1.4",
    "@tailwindcss/postcss": "^4.0.0",
    "@tailwindcss/typography": "^0.5.19",
    "@types/node": "^24.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@typescript-eslint/eslint-plugin": "^8.53.1",
    "@typescript-eslint/parser": "^8.53.1",
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

## 3. MDX Rendering Components
Status: File found (mdx-components.tsx)
```typescript
/** @format */

import type { MDXComponents } from "mdx/types"
import Image from "next/image"
import Link from "next/link"
import React from "react"

// 🛠️ Icons Registry (Lucide React)
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Smartphone,
  Bell,
  Settings,
  Globe,
  Layout,
  Database,
  ShoppingBag,
  PackageCheck,
  BarChart3,
  Target,
  MousePointerClick,
  MapPin,
  CalendarCheck,
  Star,
  ClipboardList,
} from "lucide-react"

// 🧩 Specialist Logic Components Integration
import { ImpactStats } from "@/components/sales-engine/ImpactStats"
import { SpeedDemon } from "@/components/sales-engine/SpeedDemon"
import WorkProcess from "@/components/sales-engine/WorkProcess"

/**
 * 🏗️ MDX Components Specialist Edition v2026
 * ลงทะเบียนคอมโพเนนต์และไอคอนมาตรฐานเพื่อให้เรียกใช้ใน .mdx ได้ทันทีโดยไม่เกิด ReferenceError
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,

    // 🔗 1. Core Logic & Icons Registry
    ImpactStats,
    SpeedDemon,
    WorkProcess,
    Zap,
    ShieldCheck,
    Smartphone,
    Bell,
    Settings,
    Globe,
    Layout,
    Database,
    Sparkles,
    ShoppingBag,
    PackageCheck,
    BarChart3,
    Target,
    MousePointerClick,
    MapPin,
    CalendarCheck,
    Star,
    ClipboardList,

    // 🖼️ 2. Optimized Specialist Image (Industrial Standard)
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

    // 🔗 3. Technical Logic Links
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

    // 📣 4. Expert Insights Block
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

    // 🚀 5. Specialist Marketing Blocks
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
          className="relative z-10 inline-flex items-center justify-center rounded-full bg-slate-950 px-12 py-6 text-[11px] font-black tracking-[0.3em] text-white uppercase shadow-2xl transition-all hover:scale-105 hover:bg-emerald-600 active:scale-95"
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

    // ✒️ 6. Industrial Typography System
    h1: ({ children }) => (
      <h1 className="font-prompt mt-24 mb-10 text-5xl leading-none font-black tracking-tighter text-slate-950 uppercase italic md:text-7xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-prompt mt-20 mb-8 flex items-center gap-4 border-b border-slate-100 pb-6 text-4xl font-black tracking-tighter text-slate-950 uppercase italic md:text-5xl">
        <div className="h-10 w-2 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-prompt mt-14 mb-6 text-2xl font-black tracking-tight text-slate-800 uppercase italic md:text-4xl">
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
  }
}
```

## 4. Next.js Runtime Configuration
Status: Config detected (next.config.mjs)
```typescript
/** @format */
import createMDX from "@next/mdx"

/**
 * Next.js Configuration - AEMDEVWEB Professional v2026
 * Focus: High-Performance Image Serving, Termux Compatibility, and Build Efficiency
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  /* Image Optimization Infrastructure */
  images: {
    formats: ["image/avif", "image/webp"],
    // Support for wide screens and Mobile High DPI
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    // Specific sizes for logos and mobile icons to ensure fastest LCP
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      { protocol: "https", hostname: "lin.ee" },
      { protocol: "https", hostname: "**.supabase.co" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  /* Experimental & Build Performance Features */
  experimental: {
    // Disable mdxRs to ensure compatibility with Termux environments (prevents Rust Compiler issues)
    mdxRs: false,
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "sonner",
      "@radix-ui/react-dialog",
      "@radix-ui/react-tabs",
      "@radix-ui/react-dropdown-menu",
    ],
    // External packages that should not be bundled by the server
    serverComponentsExternalPackages: ["@libsql/client"],
  },

  /* Compiler Options */
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
}

const withMDX = createMDX({})
export default withMDX(nextConfig)
```

## 5. Deployment Readiness Analysis
---
Final Status: FIX REQUIRED
### Critical Issues Highlight
[ERROR] Status: Linting failed
  4:28  error  'request' is defined but never used  no-unused-vars
✖ 1 problem (1 error, 0 warnings)
 ELIFECYCLE  Command failed with exit code 1.

---
Report compilation finished. Environment: pre-deploy
