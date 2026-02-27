# 🧠 Technical Infrastructure Specialist Hub (v18.0.0)

**Project:** www.aemdevweb.com
**Lead Architect:** [นาย อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์)](https://www.aemdevweb.com)
**Core Mandate:** High-Performance, SEO-Driven, Technical Excellence.

---

## 🏗 Core Architecture

- **Framework:** Next.js 16.1.6 (App Router)
- **Runtime:** React 19.0.0
- **Styling:** TailwindCSS 4.x (CSS-First Strategy)
- **State Management:** RSC-First (Zero-Framer Mandate)
- **Package Manager:** pnpm

### Technical Constraints

- **RSC First:** 100% Server Components by default.
- **Zero-Framer:** No `framer-motion`. Use Compositor-Thread CSS Animations.
- **Strict Type Safety:** Zero `any` usage. Strict TypeScript configuration.
- **Hardware Acceleration:** GPU-based animations via `transform-gpu` and `will-change`.

---

## 🔍 SEO & Content Strategy (P-SEO)

- **Standardized MDX:** Frontmatter validation for all blog and case study content.
- **Area Nodes:** 77+ Provinces implemented via "Blueprint Inheritance" (constants/area-nodes/).
- **Schema-First:** Mandatory JSON-LD (Schema.org) support for all pages.
- **Zero-CLS:** Mandatory use of `blurDataURL` from the `ImageBlurRegistry`.

---

## 🛠 Development Workflow

### Key Scripts

- `pnpm dev`: Start development server with turbo mode.
- `pnpm build`: Run schema tests and build the production application.
- `pnpm lint`: Run ESLint to ensure code quality and style.
- `pnpm type-check`: Run TypeScript compiler for type validation.
- `pnpm test:schema`: Validate SEO Schema integrity (90+ Nodes).
- `pnpm fix`: Run Prettier and ESLint fix.
- `pnpm knip`: Detect unused files, exports, and dependencies.

### Coding Standards

- **Thai Typography:** Use `leading-relaxed` for Thai text.
- **Color Space:** Use **OKLCH** for perceptual uniformity.
- **Validation:** Always run `pnpm lint` and `pnpm type-check` after changes.

---

## 🚀 Deployment & Integrity

- **SSG Compliance:** All dynamic routes enforce `export const dynamicParams = false;`.
- **Integrity Checks:** Automated audits for SEO structure, templates, and assets.
- **Bundlesize:** Strict limits on JavaScript and CSS bundle sizes.

---

_Created by AEMZA MACKS | High-Performance Web Infrastructure Specialist_
