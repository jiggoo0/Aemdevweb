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
