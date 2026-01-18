# 📁 รายงานโครงสร้างโปรเจกต์ (Extended Scan)
_สร้างเมื่อ: Sun Jan 18 20:46:45 +07 2026_

## 🌳 Folder Structure
⚠️ ไม่พบโฟลเดอร์: config (Skipped)
📂 app
  📂 (main)
    📂 about
      📄 page.tsx
    📂 blog
      📂 [slug]
        📄 page.tsx
      📄 page.tsx
    📂 case-studies
      📂 [slug]
        📄 page.tsx
      📂 aemdevweb
        📄 page.tsx
      📄 page.tsx
      📂 unlink-th
        📄 page.tsx
    📂 contact
      📄 page.tsx
    📄 layout.tsx
    📄 page.tsx
    📂 services
      📂 [slug]
        📄 page.tsx
      📄 page.tsx
  📂 (marketing)
    📂 [template]
      📂 [slug]
        📄 page.tsx
      📄 page.tsx
    📄 layout.tsx
  📂 api
  📄 apple-touch-icon.png
  📄 favicon.ico
  📄 globals.css
  📄 layout.tsx
  📄 loading.tsx
  📄 robots.ts
  📄 sitemap.ts
📂 components
  📂 landing
    📄 Hero.tsx
    📄 HomeClientSections.tsx
    📄 InsightsSection.tsx
    📄 Testimonials.tsx
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
    📄 AemBrandBadge.tsx
    📄 BlogCard.tsx
    📄 CaseStudyCard.tsx
    📄 Footer.tsx
    📄 Header.tsx
    📄 LineStickyButton.tsx
    📄 Navbar.tsx
    📄 ServiceCard.tsx
    📄 SocialProofBanner.tsx
    📄 TrustBadge.tsx
  📂 template
    📂 cafe
    📂 marketplace
      📄 TemplateFilter.tsx
      📄 TemplateGrid.tsx
      📄 TemplateHero.tsx
      📄 TemplateSearch.tsx
    📂 shared
      📄 DevicePreview.tsx
      📄 SalesHook.tsx
      📄 TemplateFeatures.tsx
      📄 TemplateNavbar.tsx
      📄 TemplatePricingCard.tsx
  📂 ui
    📄 badge.tsx
    📄 button.tsx
    📄 card.tsx
    📄 dialog.tsx
    📄 empty.tsx
    📄 form.tsx
    📄 input.tsx
    📄 label.tsx
    📄 modal.tsx
    📄 select.tsx
    📄 separator.tsx
    📄 sonner.tsx
    📄 tabs.tsx
    📄 textarea.tsx
    📄 toast.tsx
    📄 toaster.tsx
📂 lib
  📄 mdx.ts
  📂 supabase
    📄 supabase.ts
  📄 utils.ts
📂 hooks
  📄 use-toast.ts
📂 constants
  📂 case-studies
    📄 case-studies-data.ts
  📄 navigation.ts
  📄 services-data.ts
  📄 site-config.ts
  📂 template
    📄 temp_eco_01.ts
    📄 temp_fb_01.ts
    📄 temp_hb_01.ts
    📄 temp_svc_01.ts
  📄 templates-data.ts
  📂 testimonials
    📄 testimonials.ts
📂 content
  📂 blog
    📄 5-points-killing-sales.mdx
    📄 copywriting-secrets.mdx
    📄 facebook-ads-vs-website.mdx
    📄 seo-for-sme-2026.mdx
    📄 unlink-th-case-study.mdx
📂 types
  📄 index.ts
📂 content
  📂 blog
    📄 5-points-killing-sales.mdx
    📄 copywriting-secrets.mdx
    📄 facebook-ads-vs-website.mdx
    📄 seo-for-sme-2026.mdx
    📄 unlink-th-case-study.mdx
📂 public
  📄 android-chrome-192x192.png
  📄 android-chrome-512x512.png
  📂 download
  📄 favicon-16x16.png
  📄 favicon-32x32.png
  📄 grid.svg
  📂 images
    📂 blog
      📄 project-01.webp
    📄 og-image.png
    📂 showcase
      📄 aemdevweb-hero.webp
      📄 project-01.webp
      📄 unlink-th.webp
      📄 unlink-th1.webp
    📂 templates
      📄 project-01-mobile.webp
      📄 project-01.webp
  📄 og-image.png
📂 providers
  📄 AppProvider.tsx

## 📦 ตรวจหา package.json
```json
พบ package.json ที่ root ของโปรเจกต์

{
  "name": "aemdevweb.com",
  "version": "0.1.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "format": "prettier --write .",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.2.2",
    "@img/sharp-wasm32": "^0.34.5",
    "@next/mdx": "^16.1.1",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-navigation-menu": "^1.2.14",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-toast": "^1.2.15",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@supabase/ssr": "^0.8.0",
    "@supabase/supabase-js": "^2.90.1",
    "@types/mdx": "^2.0.13",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "framer-motion": "^12.25.0",
    "gray-matter": "^4.0.3",
    "lucide-react": "^0.562.0",
    "next": "15.5.7",
    "next-mdx-remote": "^5.0.0",
    "next-themes": "^0.4.6",
    "nextjs-toploader": "^3.9.17",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "react-hook-form": "^7.71.1",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.4.0",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^4.3.5"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3.3.3",
    "@eslint/js": "^9.39.2",
    "@tailwindcss/postcss": "^4",
    "@tailwindcss/typography": "^0.5.19",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "autoprefixer": "^10.4.23",
    "eslint": "^9",
    "eslint-config-next": "15.5.7",
    "eslint-plugin-import": "^2.32.0",
    "eslint-plugin-jsx-a11y": "^6.10.2",
    "eslint-plugin-react": "^7.37.5",
    "eslint-plugin-react-hooks": "^7.0.1",
    "postcss": "^8.5.6",
    "prettier": "^3.7.4",
    "prettier-plugin-tailwindcss": "^0.7.2",
    "tailwindcss": "^4",
    "tw-animate-css": "^1.4.0",
    "typescript": "^5"
  }
}
```

