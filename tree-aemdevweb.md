---
domain: www.aemdevweb.com
canonical: https://www.aemdevweb.com
generated: 2026-01-25 20:53:28
project:
  name: AEMDEVWEB
  shortName: AEM
  nameTH: เอ็ม-เดฟ-เว็บ
  companyName: AEMDEVWEB Co., Ltd.
  title: รับทำเว็บไซต์ Landing Page เน้นปิดการขาย - AEMDEVWEB (นายเอ็มซ่ามากส์)
  slogan: เว็บโหลดไว อันดับพุ่ง ยอดขายมาจริง
  expert: นายเอ็มซ่ามากส์
  role: Technical SEO Consultant & Next.js Structure Specialist
  description: บริการวางโครงสร้างระบบ Landing Page สำหรับ SME ที่เน้นประสิทธิภาพความเร็วสูงสุด วางพิกัดงานเทคนิค SEO ตั้งแต่เลเยอร์แรกโดย นายเอ็มซ่ามากส์ เพื่อเพิ่มโอกาสการเข้าถึงและอัตราการปิดยอดขาย การันตี LCP 0.6s พร้อมการดูแลชุดระบบระยะยาว
  url: https://www.aemdevweb.com
  ogImage: https://www.aemdevweb.com/og-image.png
  email: me@aemdevweb.com
keywords:
  core: ["Technical SEO Optimization Organic Search Strategy Conversion Rate Optimization"]
  tech: ["Next.js React Tailwind CSS TypeScript System Structure"]
  brand: ["AEMDEVWEB นายเอ็มซ่ามากส์ Alongkorl Yomkerd Unlink-th Provider"]
cta:
  main: Consult Project
  secondary: View All Services
  pricing: Check Pricing Plans
standards:
  performance: 100
  lcp: 0.6
  security: Enterprise-Grade SSL (HSTS Enabled)
  aiReadiness: Advanced Schema Markup & JSON-LD Injection
links:
  line: https://lin.ee/6lgJox0
  lineId: @127cnthn
  facebook: https://facebook.com/aemdevweb
  linkedin: https://www.linkedin.com/in/alongkorl-aemdevweb
  personal: https://me.aemdevweb.com
---

# Project Structure Report

This system is designed to support SMEs and diverse business sectors including service businesses, tourism, export, corporates, partnerships, and industrial factories.

## 1. Root Configuration Files

The following system files are detected at the project root.

- [x] eslint.config.mjs
- [x] mdx-components.tsx
- [x] next.config.mjs
- [x] package.json
- [x] components.json
- [x] tsconfig.json
- [x] postcss.config.mjs
- [x] proxy.ts

## 2. Directory Structure

Hierarchical view of core business logic and UI components.

### Folder: app

```text
app
  |(main)
     |about
        |page.tsx
     |blog
        |[slug]
           |page.tsx
        |page.tsx
     |careers
        |page.tsx
     |case-studies
        |[slug]
           |page.tsx
        |page.tsx
     |contact
        |page.tsx
     |layout.tsx
     |page.tsx
     |privacy
        |page.tsx
     |services
        |[slug]
           |page.tsx
        |page.tsx
     |terms
        |page.tsx
  |(marketing)
     |[template]
        |[category]
           |[slug]
              |page.tsx
           |page.tsx
        |page.tsx
     |layout.tsx
  |favicon.ico
  |globals.css
  |layout.tsx
  |loading.tsx
  |metadata.ts
  |not-found.tsx
  |robots.ts
  |sitemap.ts
  |viewport.ts
```

### Folder: components

```text
components
  |landing
     |CTASection.tsx
     |Hero.tsx
     |HomeClientSections.tsx
     |ValueProp.tsx
  |sales-engine
     |ImpactStats.tsx
     |LineLeadForm.tsx
     |PriceEstimator.tsx
     |SpeedDemon.tsx
     |WorkProcess.tsx
  |seo
     |JsonLd.tsx
  |shared
     |BlogCard.tsx
     |CaseStudyCard.tsx
     |FacebookChat.tsx
     |Footer.tsx
     |LineStickyButton.tsx
     |Navbar.tsx
     |ServiceCard.tsx
     |TrustBadge.tsx
  |template
     |marketplace
        |TemplateCard.tsx
        |TemplateFilter.tsx
        |TemplateGrid.tsx
        |TemplateHero.tsx
        |TemplateSearch.tsx
     |shared
        |DevicePreview.tsx
        |TemplateFeatures.tsx
        |TemplateNavbar.tsx
        |TemplatePricingCard.tsx
  |ui
     |badge.tsx
     |button.tsx
     |card.tsx
     |form.tsx
     |input.tsx
     |label.tsx
     |modal.tsx
     |skeleton.tsx
     |sonner.tsx
     |textarea.tsx
```

### Folder: lib

```text
lib
  |blog.ts
  |case-studies.ts
  |template.ts
  |utils.ts
```

### Folder: types

```text
types
  |index.ts
```

### Folder: public

```text
public
  |android-chrome-192x192.png
  |android-chrome-512x512.png
  |apple-touch-icon.png
  |favicon-16x16.png
  |favicon-32x32.png
  |grid.svg
  |images
     |blog
        |placeholder.webp
        |project-01.webp
        |seo-google-love.webp
     |hero
        |aemdevweb-hero.webp
     |logo-circuit.png
     |logo-circuit1.png
     |og-image.png
     |showcase
        |Unlike-th-destop99.webp
        |Unlink-th-mobile94.webp
        |aemdevweb-hero.webp
        |project-01.webp
        |unlink-th.webp
        |unlink-th1.webp
        |unlink-th3.webp
        |placeholder.webp
     |templates
        |project-01.webp
  |og-image.png
```

### Folder: constants

```text
constants
  |navigation.ts
  |services-data.ts
  |site-config.ts
```

### Folder: content

```text
content
  |blog
     |5-points-killing-sales.mdx
     |copywriting-secrets.mdx
     |facebook-ads-vs-website.mdx
     |seo-for-sme-2026.mdx
     |unlink-th-case-study.mdx
     |seo-google-love-technical-guide.mdx
  |case-studies
     |industrial-catalog-rfq-optimization.mdx
     |sme-web-performance-growth.mdx
     |unlink-reputation-management-success.mdx
  |template
     |booking
        |hotel-resort
           |index.mdx
           |meta.json
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
```

### Folder: config

```text
config
  |ai-context.core.md
  |ai-context.dna.md
  |ai-system-role.md
```

---

. Format code in ให้ถูกต้อง
การเขียนโค้ดมาตรฐานมีประสิทธิภาพ NexTjs React Report generated by www.aemdevweb.com Internal Automation.
