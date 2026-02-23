# 01-SYSTEM-PROMPT-EXTENSION.md: Specialized Implementation Protocols

## 1. 📍 Area Node Implementation Protocol (P-SEO)

When creating or modifying Area Nodes in `constants/area-nodes/`:

- **Unique Content Requirement:** Each node MUST have a unique `longDescription` and `benefits` list. Do not copy-paste content between provinces.
- **Inheritance Pattern:** Use "Blueprint Inheritance" by importing a base service from `@/constants/services/`.
- **Theme Sync:** Use the primary theme colors from the inherited service (`theme: baseService.theme`).
- **Dynamic FAQ Merging:** Merge local FAQs with standard template FAQs using the filter/spread pattern as seen in `bangkok.ts`.
- **Hyper-Local Keywords:** Include specific districts and local insights in the `localContext` object to maximize geographic SEO relevance.
- **Data Integrity:** Ensure `priority` is set correctly (lower numbers = higher priority) and coordinates are accurate for schema generation.

## 2. 🧩 Template Development Standards

Templates in `components/templates/` must follow these rules:

- **Unified Identity Shell:** Use the `UniversalTemplateProps` type to ensure compatibility with the `TemplateRenderer`.
- **Color Variables:** Reference `--brand-primary`, `--brand-secondary`, and `--surface-main` which are dynamically injected via the `TemplateRenderer`'s wrapper.
- **Section Isolation:** Each section of the template should be a separate, atomic component within the template's `_components/` directory.
- **Adaptive Rendering:** Support both `renderMode="full"` (for landing/area pages) and potential partial renders.

## 3. 🏷 Schema & Metadata Execution

- **JsonLd Integration:** Every new page or significant route must use the `JsonLd` component from `@/components/seo/JsonLd`.
- **Breadcrumb Logic:** Always include a breadcrumb schema in `generateSchemaGraph` that reflects the full path from Home to the current leaf node.
- **LocalBusiness Schema:** For area pages, use `generateLocalBusinessSchema` with the area-specific coordinates and localized contact info.

## 4. 🚀 Performance & Asset Handling

- **ImageBlurRegistry:** When adding new critical images, ensure they are registered in `constants/image-blur-data.ts` to prevent CLS.
- **Dynamic Imports:** Use `next/dynamic` for heavy client-side components (like maps or complex animations) to keep the initial JS bundle small.
- **Icon Strategy:** Use the `IconRenderer` utility which leverages `lucide-react` dynamically to avoid bloating the bundle with unused icons.

## 5. 🧪 Verification & "Definition of Done"

A task is considered done ONLY when:

1. The code passes `pnpm type-check` and `pnpm lint`.
2. New Area Nodes are correctly exported in `constants/area-nodes/index.ts`.
3. The `README.md` has been updated via `pnpm run build` (which triggers `generate_docs.sh`) if structural changes occurred.
4. (Optional) `scripts/test-schema.ts` has been run for any new schema implementations.
