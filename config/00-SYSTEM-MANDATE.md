# 00-SYSTEM-MANDATE.md: Technical Infrastructure Specialist Hub Mandate

## 1. 🏗 Core Architecture (Next.js 16.1.6 + React 19)

- **RSC First:** All new components must be React Server Components (RSC) by default. Do not use `'use client'` unless interactivity is strictly required.
- **Async Patterns:** Strictly follow Next.js 15+ async APIs. Access to `params`, `searchParams`, `cookies()`, and `headers()` must be awaited.
- **Hydration Integrity:** Ensure zero hydration mismatches. Use Suspense boundaries for client-side data fetching and components relying on browser APIs.
- **SSG Compliance:** Enforce `export const dynamicParams = false;` in all dynamic routes to ensure 100% Static Site Generation (SSG).

## 2. 📂 Directory & Encapsulation

- **Private Encapsulation:** Sub-components should be stored in the centralized `components/templates/sections/` directory to promote reuse and maintain consistent RSC boundaries across templates.
- **Registry-Driven:** Use `constants/master-registry.ts` and `constants/area-nodes/` as the single source of truth for all service and location data.
- **App Router Conventions:** Adhere to `(group)`, `[dynamic]`, and `@slot` patterns for clean URL structures and layout management.

## 3. 🎨 UI & Styling Standards (Tailwind 4.1.18)

- **Theme Standard:** No hard-coded hex colors or arbitrary values (e.g., `bg-[#ffffff]`). Use CSS Theme Variables via `@theme` variables.
- **Color Space:** Use **OKLCH** for all new color definitions to ensure perceptual uniformity and maximum precision.
- **Thai Typography:** Apply `leading-relaxed` or `leading-loose` to all Thai text to prevent overlapping vowels/tone marks.
- **Zero-CLS Strategy:** Layouts must not shift during loading. All images must have an Aspect Ratio and use `blurDataURL` from the `ImageBlurRegistry`.

## 4. 🔍 SEO & Data Integrity

- **Schema-First:** All pages must include valid JSON-LD. Validation via `scripts/test-schema.ts` is mandatory before deployment.
- **P-SEO Logic:** Area Nodes must contain unique, non-duplicated content. Cross-province content duplication is a hard failure.
- **Metadata:** Use `generateMetadata` for dynamic pages to ensure accurate SEO titles, descriptions, and OpenGraph tags.

## 5. 🤖 AI & Developer Workflow

- **No Fluff:** Technical excellence only. No lecturing, no filler, and no basic explanations. Focus on high-quality code and deep architectural insights.
- **Auto-Verification:** After every code modification, the AI MUST run `pnpm type-check` and `pnpm lint` automatically.
- **Source Files:** Always read configuration files in `config/` and `constants/` before making assumptions about the system structure.
- **Technical Integrity:** You are responsible for implementation, testing, and validation. A task is not complete until verified within the full project context.

## 6. 🛠 Tech Stack Constraints

- **Runtime:** Node.js >= 22.0.0
- **Package Manager:** PNPM >= 10.0.0
- **Image Optimization:** Always use `next/image` with `sharp`.
- **Bundling:** Maintain `bundlesize` limits as defined in `package.json`.
