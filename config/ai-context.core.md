domain: www.aemdevweb.com
canonical: https://www.aemdevweb.com
generated: 2026-01-22 22:35:00
type: Technical Core Context
Ai-context.core.md: System Architecture and Engineering Standards
1. Core System Identity
 * Framework: Next.js 16 (App Router)
 * Version: 2026 Enterprise Edition
 * Paradigm: Industrial-Grade Reliability | Solo-Specialist Architecture
 * Core Stack: TypeScript (Strict), Tailwind CSS, PNPM, MDX, Lucide React, Framer Motion.
 * Objective: High-performance conversion engine for SME and Industrial sectors.
2. Directory Architecture (The Blueprint)
A. App Router Groups (Logic Isolation)
 * app/(main): Encapsulates the core business service. Focuses on conversion, corporate identity, and service delivery.
 * app/(marketing): Dynamic template engine. Designed for high-velocity landing page generation using the [template]/[category]/[slug] pattern.
 * Root app level: Contains global configuration files including layout.tsx, metadata.ts, viewport.ts, and robots.ts.
B. Content Layer (Single Source of Truth)
 * content/: Centralized MDX repository.
   * /blog: Knowledge sharing and authority building.
   * /template: Configuration and metadata for the dynamic marketing engine.
   * /case-studies: Validated proof of work and industrial performance metrics.
C. Component Hierarchy
 * components/ui: Atomic components based on Shadcn/UI. Must remain pure and reusable.
 * components/shared: Business-level UI elements used across different route groups.
 * components/sales-engine: Complex logic-heavy components (e.g., PriceEstimator, LineLeadForm) focused on ROI and lead generation.
 * components/seo: Implementation of JSON-LD and Schema.org entities.
3. Engineering Standards (Dev-to-Dev)
Technical Constraints
 * Strict No Emojis: Prohibited in all source code, technical documentation, and system logs.
 * Type Safety: 100% TypeScript coverage. No any types. Interfaces must be defined in types/index.ts.
 * MDX Handling: Termux compatibility requires mdxRs: false in next.config.mjs.
Performance Targets
 * LCP (Largest Contentful Paint): < 1.2s
 * CLS (Cumulative Layout Shift): < 0.1
 * Performance Score: 100 (Lighthouse/PageSpeed)
4. Entity SEO and Schema Strategy
The system architecture facilitates a Person-Organization Graph to maximize E-E-A-T:
 * Organization Entity: Defined at www.aemdevweb.com (@id: https://www.aemdevweb.com/#organization).
 * Person Entity: Defined at me.aemdevweb.com (@id: https://me.aemdevweb.com/#person).
 * Linking Logic: The Organization Schema must reference the Person as founder, and the Person Schema must reference the Organization as worksFor.
5. Deployment and Runtime Protocols
Pre-deployment Inspection
All code must pass the pre-deploy-check.sh protocol:
 * Environment Check: Verify .env integrity.
 * Linting: pnpm lint --fix for code hygiene.
 * Type Check: pnpm exec tsc --noEmit for structural integrity.
 * Production Build: Successful pnpm run build with route analysis.
Required Startup Hooks
 * instrumentation.ts: Must be implemented to validate environment variables and system health at runtime startup.
 * middleware.ts: Must enforce strict Security Headers (CSP, HSTS, X-Frame-Options).
6. Maintenance Logic
 * Solo-Specialist Efficiency: Minimize external dependencies. Favor native Next.js features over third-party libraries.
 * Industrial Stability: Stability over novelty. Changes to the core architecture must be reflected in this document immediately.
