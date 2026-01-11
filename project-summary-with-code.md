# 📑 รายงานสรุปโปรเจกต์และบริบท AI (Full Context)
_สร้างเมื่อ: 2026-01-11 13:29:38_
> **Status:** Fresh Scan | รวมข้อมูลวิเคราะห์ Route & Code

## 🔴 1. สถานะสุขภาพโปรเจกต์ล่าสุด
✅ **READY FOR DEPLOY** (ผ่านการตรวจสอบทุกขั้นตอน)

### 📍 Production Route Map
```text
```text
Route (app)                                              Size  First Load JS
┌ ○ /                                                 15.8 kB         178 kB
├ ○ /_not-found                                         991 B         103 kB
├ ● /[template_id]                                      327 B         177 kB
├   ├ /clinic
├   ├ /cafe
├   ├ /realestate
├   └ [+3 more paths]
├ ƒ /[template_id]/contact                            2.31 kB         186 kB
├ ƒ /[template_id]/services                             327 B         177 kB
├ ○ /about                                            4.41 kB         119 kB
├ ƒ /api/contact                                        131 B         102 kB
├ ○ /blog                                             2.89 kB         113 kB
├ ● /blog/[slug]                                        173 B         111 kB
├   ├ /blog/case-study-high-performance-orm-platform
├   ├ /blog/nextjs-performance-2025
├   ├ /blog/sme-success-story
├   └ [+2 more paths]
├ ○ /catalog                                          9.35 kB         134 kB
├ ○ /contact                                          51.2 kB         160 kB
├ ○ /robots.txt                                           0 B            0 B
├ ○ /services                                         11.1 kB         131 kB
└ ○ /sitemap.xml                                        131 B         102 kB
+ First Load JS shared by all                          102 kB
  ├ chunks/3c4078ff-db1510ea385e11c8.js               54.2 kB
  ├ chunks/667-fc91a2d66fb02623.js                    45.6 kB
  └ other shared chunks (total)                       2.09 kB
○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
ƒ  (Dynamic)  server-rendered on demand
```
```

## 📊 2. สถิติไฟล์แบ่งตามนามสกุล
```text
     74 tsx
     29 ts
      9 svg
      7 css
      5 webp
      4 png
      3 sh
      1 txt
      1 ico
```

## 📁 3. โครงสร้างโฟลเดอร์ (Tree)
```text
📂 app
  📂 (main)
    📂 about
      📄 page.tsx
    📂 blog
      📂 [slug]
        📄 page.tsx
      📄 loading.tsx
      📄 page.tsx
    📂 catalog
      📄 page.tsx
    📂 contact
      📂 _components
        📄 ContactMap.tsx
      📄 page.tsx
    📄 layout.tsx
    📄 page.tsx
    📂 services
      📄 page.tsx
  📂 (marketing)
    📂 [template_id]
      📂 _config
        📄 registry.ts
      📂 _templates
        📂 WoodBusiness
          📄 WoodBusinessTemplate.tsx
          📄 WoodStyle.module.css
          📂 components
            📄 CartSection.tsx
            📄 FAQSection.tsx
            📄 FeaturesSection.tsx
            📄 Footer.tsx
            📄 Header.tsx
            📄 HeroSection.tsx
            📄 PerformanceSection.tsx
            📄 SuccessSection.tsx
          📄 config.ts
        📂 cafe
          📄 CafeStyle.module.css
          📄 CafeTemplate.tsx
          📄 config.ts
        📂 clinic
          📄 ClinicStyle.module.css
          📄 ClinicTemplate.tsx
          📄 config.ts
        📂 construction
          📄 ConstructionStyle.module.css
          📄 ConstructionTemplate.tsx
          📄 config.ts
        📂 realestate
          📄 RealEstateStyle.module.css
          📄 RealEstateTemplate.tsx
          📄 config.ts
        📂 starter
          📄 StarterStyle.module.css
          📄 StarterTemplate.tsx
          📂 components
            📄 CartSection.tsx
            📄 FAQSection.tsx
            📄 FeaturesSection.tsx
            📄 Footer.tsx
            📄 GuaranteeSection.tsx
            📄 Header.tsx
            📄 HeroSection.tsx
            📄 PerformanceSection.tsx
            📄 SuccessSection.tsx
          📄 config.ts
      📂 contact
        📄 page.tsx
      📄 layout.tsx
      📄 page.tsx
      📂 services
        📄 page.tsx
  📂 api
    📂 contact
      📄 route.ts
  📄 apple-touch-icon.png
  📄 favicon.ico
  📄 globals.css
  📄 layout.tsx
  📄 loading.tsx
  📄 robots.txt
  📄 sitemap.ts
📂 components
  📄 BlogSection.tsx
  📄 CTA.tsx
  📄 ContactForm.tsx
  📄 ContactInfo.tsx
  📄 FAQSection.tsx
  📄 Footer.tsx
  📄 Header.tsx
  📄 Hero.tsx
  📄 PricingSection.tsx
  📄 Services.tsx
  📄 SocialProof.tsx
  📂 catalog
    📄 CatalogProjectCard.tsx
    📄 CatalogProjectsGrid.tsx
  📄 iconMap.ts
  📂 marketing
    📄 ReviewTrustLayer.tsx
    📄 StickyPurchaseBar.tsx
    📄 TechStackBadge.tsx
  📂 seo
    📄 JsonLd.tsx
  📂 ui
    📄 accordion.tsx
    📄 avatar.tsx
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
    📄 tabs.tsx
    📄 textarea.tsx
    📄 toast.tsx
    📄 toaster.tsx
  📄 logo.tsx
  📄 Ecosystem.tsx
📂 lib
  📄 api.ts
  📄 helpers.ts
  📄 supabase.ts
  📄 utils.ts
📂 hooks
  📄 use-toast.ts
📂 types
  📄 blog.ts
  📄 index.ts
  📄 review.ts
  📄 services.ts
📂 scripts
  📄 pre-deploy-check.sh
  📂 dev
    📄 project-summary.sh
    📄 tree-projects.sh
📂 public
  📄 apple-touch-icon.png
  📄 grid.svg
  📂 images
    📄 badge.svg
    📄 feature.svg
    📄 hero.svg
    📄 line-qr.png
    📄 performance.svg
    📂 portfolio
      📄 corporate-1.webp
      📄 default-avatar.webp
      📄 restaurant-1.webp
      📄 sme-1.webp
    📂 profile
      📄 default-avatar.webp
    📂 svg
      📄 guarantee-badge.svg
      📄 mobile.svg
      📄 performance.svg
      📄 speed.svg
  📄 og-image.png
📂 data
  📂 blog
    📄 allposts.ts
    📄 post1.ts
    📄 post2.ts
    📄 post3.ts
    📄 post4.ts
    📄 post5.ts
  📄 catalog.projects.ts
  📄 reviews.ts
  📄 servicesData.ts
  📄 types.ts
```

## 📄 4. เนื้อหาโค้ดและบริบททางเทคนิค
#### 🔍 Path: ai-context.md
```markdown
🧠 AI Context: AEMDEVWEB (Multi-Template Web Solutions)
Project Status: Ready for Deploy | Stack: Next.js 15.5.7 (App Router) | React: v19
🎯 1. ภารกิจหลัก (Core Mission)
AEMDEVWEB คือแพลตฟอร์ม "Dynamic Marketing & Catalog" ที่ให้บริการสร้างเว็บไซต์ผ่านระบบ Niche Templates เฉพาะทาง เพื่อส่งมอบงานคุณภาพสูง โหลดเร็วระดับ High Performance และมีโครงสร้างที่ออกแบบมาเพื่อ "ปิดการขายโดยเฉพาะ" (Conversion Focused) สำหรับธุรกิจ SME, คลินิก, คาเฟ่, อสังหาริมทรัพย์ และอุตสาหกรรมก่อสร้าง
🏛️ 2. สถาปัตยกรรมระบบ (Project Architecture)
ระบบถูกแยกขาดจากกันอย่างชัดเจนเพื่อป้องกันการปนเปื้อนของดีไซน์และตรรกะ:

- (marketing) - The Template Engine ([template_id]):
  - สร้างหน้าเว็บไซต์ตัวอย่าง (Live Demo) ที่ลูกค้าจะได้รับจริง
  - Isolation Rule: โค้ดและสไตล์ต้องอยู่ภายใต้ \_templates/[template_name] เท่านั้น
  - Controller: ใช้ registry.ts ในการแมป Config และ UI Components
- (main) - Corporate & Public Pages:
  - จัดการหน้าบริษัท (AEMDEVWEB): Home, Catalog, Blog, Services, Contact
  - ใช้สไตล์ Brutalist (Border-4, Hard Shadow) เพื่อแสดงตัวตนของผู้เชี่ยวชาญ
    🚫 3. กฎเหล็กเรื่องดีไซน์ (Design Separation Directive)
- [Strict Prohibition]: ห้ามนำดีไซน์สไตล์ Brutalist หรือองค์ประกอบจากหน้า Main Website (เช่น เส้นขอบหนา, สี Navy/Orange ของบริษัท) ไปใส่ใน Template เด็ดขาด
- [Template Autonomy]: ดีไซน์ใน [template_id] ต้องอิงตาม "ความถูกต้องของอุตสาหกรรมนั้นๆ" เท่านั้น (Industry-Standard Design)
  - Clinic: ต้องดูสะอาด พรีเมียม น่าเชื่อถือ
  - Industrial/Construction: ต้องดูแข็งแรง เป็นระบบ เป็นสัดส่วน
  - Real Estate: เน้นภาพขนาดใหญ่ Space โปร่งสบาย ตา
    🛠️ 4. มาตรฐานทางเทคนิค (Technical Stack Rules)
- Frontend: Next.js 15 (App Router) + React 19 + TypeScript
- Styling:
  - Main: Tailwind CSS v4 (ระบบ CSS-First / No tailwind.config.ts)
  - Templates: Tailwind + CSS Modules (เพื่อสไตล์เฉพาะตัวที่ไม่ตีกัน)
- Performance: บังคับใช้ Image Optimization และต้องรองรับ SSG (Static Site Generation) ผ่าน generateStaticParams เสมอ
- Hydration: ระวังปัญหา ID Mismatch ใน Radix UI/Client Components (ใช้ suppressHydrationWarning หรือ useId ให้ถูกต้อง)
  🏛️ 5. หลักการสร้างเทมเพลต (Template Requirements)
  เทมเพลตไม่ใช่แค่หน้าเว็บตัวอย่าง แต่ต้องเป็น "Salesman" ที่ปิดการขายได้ด้วยตัวเอง:
- Industry Accuracy: เลย์เอาต์ต้องเป็น "Best Practice" ของธุรกิจนั้นๆ (เช่น คลินิกต้องมีปุ่มจอง, คาเฟ่ต้องมีเมนู)
- Interactive but Simple: กดใช้งานได้จริง เห็น Flow การทำงาน แต่ไม่ซับซ้อนจนงง
- Self-Closing Section: ทุกเทมเพลตต้องมีส่วน "สิ่งที่คุณจะได้รับเมื่อใช้บริการเรา" ซึ่งประกอบด้วย:
  - Ready-to-Use Structure: โครงสร้างที่คิดมาเพื่อธุรกิจคุณ ลดเวลาวางแผน
  - Speed & Performance: เว็บโหลดไว ลูกค้าไม่เปลี่ยนใจหนี
  - SEO Friendly: วางโครงสร้าง Semantic HTML ให้ Google หาเจอง่าย
  - Maintenance Free: ดูแลระบบและ Hosting ฟรีในปีแรก
    🗣️ 6. ภาษาและการนำเสนอ (Tone of Voice)
- Human-Centric: ใช้ภาษาไทยที่สุภาพ เข้าใจง่าย เข้าถึงธุรกิจทุกระดับ (ภาษาคน ไม่ใช่ภาษาคอม)
- Business Value: เน้นบอก "ผลประโยชน์" มากกว่า "ฟีเจอร์" (เช่น "โหลดไว" → "ลูกค้าไม่หงุดหงิด ยอดขายไม่ตก")
- Professional Trust: นิ่ง มั่นคง และเป็นผู้เชี่ยวชาญที่พร้อมให้คำปรึกษา
  🛠️ 7. ชุดคำสั่งพิเศษ (AI Special Directives)
- [TEMPLATE-GEN]: สร้าง/ปรับปรุงเทมเพลต โดยเน้นความถูกต้องของธุรกิจนั้น และห้ามปนสไตล์ Brutalist ของบริษัทหลัก
- [SALES-CONTENT]: เขียนเนื้อหาปิดการขายที่เน้นความคุ้มค่าของการลงทุน "ROI"
- [REF-SCAN]: ตรวจสอบความถูกต้องของโค้ด Next.js 15 และปัญหา Hydration ทันที
- [HUMAN-EXPLAIN]: สรุปเรื่องยากให้เข้าใจง่ายใน 2 ประโยคสำหรับเจ้าของธุรกิจ
  "Empowering Businesses with High-Performance Digital Identity & Industry-Standard Templates"
```
---

#### 🔍 Path: pre-deploy-report.md
```markdown
# 🚀 Pre-deploy Inspection Report
Generated at: 2026-01-11 13:23:47
Branch: main

## 🔐 1. Environment Check
✅ Status: .env file exists and verified.
## 🛠️  2. Auto-Fix Procedure
✅ Status: Auto-fix completed or no issues found.
## 🧹 3. Code Linting (ESLint)
✅ Status: Linting passed.
## ⌨️ 4. Type Safety Check
✅ Status: TypeScript verified.
## 🏗️  5. Production Build Test
✅ Status: Build successfully optimized.
### 📊 Route Statistics & Bundle Size
```text
Route (app)                                              Size  First Load JS
┌ ○ /                                                 15.8 kB         178 kB
├ ○ /_not-found                                         991 B         103 kB
├ ● /[template_id]                                      327 B         177 kB
├   ├ /clinic
├   ├ /cafe
├   ├ /realestate
├   └ [+3 more paths]
├ ƒ /[template_id]/contact                            2.31 kB         186 kB
├ ƒ /[template_id]/services                             327 B         177 kB
├ ○ /about                                            4.41 kB         119 kB
├ ƒ /api/contact                                        131 B         102 kB
├ ○ /blog                                             2.89 kB         113 kB
├ ● /blog/[slug]                                        173 B         111 kB
├   ├ /blog/case-study-high-performance-orm-platform
├   ├ /blog/nextjs-performance-2025
├   ├ /blog/sme-success-story
├   └ [+2 more paths]
├ ○ /catalog                                          9.35 kB         134 kB
├ ○ /contact                                          51.2 kB         160 kB
├ ○ /robots.txt                                           0 B            0 B
├ ○ /services                                         11.1 kB         131 kB
└ ○ /sitemap.xml                                        131 B         102 kB
+ First Load JS shared by all                          102 kB
  ├ chunks/3c4078ff-db1510ea385e11c8.js               54.2 kB
  ├ chunks/667-fc91a2d66fb02623.js                    45.6 kB
  └ other shared chunks (total)                       2.09 kB


○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
ƒ  (Dynamic)  server-rendered on demand

```

---
## 🏆 Summary Result
### ✅ READY FOR DEPLOY
All protocols verified: Lint passed, Types safe, and Build successful. Deployment is highly recommended.
```
---

#### 🔍 Path: app/globals.css
```css
/** @format */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* 🔤 Font Variables (เชื่อมกับ Next.js Font ใน layout.tsx) */
  :root {
    --color-brand-navy: #0f172a;
    --color-brand-blue: #1e3a8a;
    --color-brand-orange: #f97316;
    --color-brand-slate: #64748b;
    --color-brand-gold: #d4af37;
  }

  /* 🌐 Base Styles */
  html {
    scroll-behavior: smooth;
    /* รองรับ iOS Safe Area */
    padding: env(safe-area-inset-top) env(safe-area-inset-right)
      env(safe-area-inset-bottom) env(safe-area-inset-left);
  }

  body {
    @apply bg-background font-sans text-brand-navy antialiased;
    overflow-x: hidden;
  }

  /* 🖋️ Typography Reset */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-heading font-black uppercase tracking-tighter;
  }

  /* Selection Color */
  ::selection {
    @apply bg-brand-blue text-white;
  }
}

@layer components {
  /* 📦 Layout Utilities */
  .container-custom {
    @apply mx-auto max-w-7xl px-6 lg:px-10;
  }

  /* 🎨 Brutalist Buttons */
  .btn-brutal {
    @apply inline-flex items-center justify-center border-4 border-slate-900 px-8 py-4 text-xs font-black uppercase tracking-[0.2em] transition-all active:scale-95;
  }

  .btn-brutal-primary {
    @apply btn-brutal bg-slate-900 text-white shadow-[6px_6px_0px_0px_#f97316] hover:translate-x-1 hover:translate-y-1 hover:shadow-none;
  }

  .btn-brutal-white {
    @apply btn-brutal bg-white text-slate-900 shadow-[6px_6px_0px_0px_#1e3a8a] hover:translate-x-1 hover:translate-y-1 hover:shadow-none;
  }

  /* 🖼️ Brutalist Card Area */
  .card-brutal {
    @apply relative border-4 border-slate-900 bg-white p-6 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] transition-all hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)];
  }

  /* 🖋️ Specific Text Styles */
  .text-stroke {
    -webkit-text-stroke: 1px var(--color-brand-navy);
    color: transparent;
  }

  .text-vertical {
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }
}

@layer utilities {
  /* 🎞️ Animation Classes */
  .animate-float-slow {
    animation: float 6s ease-in-out infinite;
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }

  /* Grid Patterns Background */
  .bg-grid-slate {
    background-image: radial-gradient(#e2e8f0 1px, transparent 1px);
    background-size: 30px 30px;
  }

  /* Glassmorphism Fallback */
  .glass-effect {
    @apply border border-white/20 bg-white/80 backdrop-blur-md;
  }
}
```
---

#### 🔍 Path: app/layout.tsx
```typescript
/** @format */
import type { Metadata, Viewport } from "next"
import { Kanit, Prompt, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { siteConfig } from "@/config/siteConfig"
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"
import JsonLd from "@/components/seo/JsonLd"

// 🔤 1. Font Configurations (เลือกใช้ฟอนต์ยอดนิยม อ่านง่ายสำหรับคนทุกวัย)
const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
  display: "swap",
})

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-prompt",
  display: "swap",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

// 📱 2. Viewport Settings (รองรับการขยายหน้าจอเพื่อกลุ่มผู้สูงอายุ)
export const viewport: Viewport = {
  themeColor: "#1E3A8A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // อนุญาตให้ขยายได้ เพื่อความสะดวกในการอ่าน (Accessibility)
}

// 🔍 3. SEO Metadata (ปรับจูนภาษาให้เข้าถึงใจเจ้าของธุรกิจไทย)
export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "รับทำเว็บไซต์",
    "รับทำเว็บไซต์ SME",
    "รับทำ Landing Page",
    "ทำเว็บไซต์ราคาถูก",
    "ทำเว็บไซต์ปิดการขาย", // เพิ่ม: เน้นผลลัพธ์ทางธุรกิจ
    "รับทำเว็บ หจก บริษัท", // เพิ่ม: กลุ่มธุรกิจจดทะเบียน
    "AEMDEVWEB",
    "ทำเว็บติดหน้าแรก Google", // เพิ่ม: ภาษาที่คนทั่วไปเข้าใจง่าย
    "Digital Marketing SME",
  ],
  authors: [{ name: "AEMDEVWEB Team", url: siteConfig.url }],
  creator: "AEMDEVWEB",
  publisher: "AEMDEVWEB",
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@aemdevweb",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

// 🏗️ 4. Root Layout Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* ✅ แทรก Structured Data เพื่อสร้างความน่าเชื่อถือในระบบค้นหา */}
        <JsonLd />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          kanit.variable, // ใช้สำหรับหัวข้อ (Heading) เพื่อความทันสมัย
          prompt.variable, // ใช้สำหรับเนื้อหา (Body) เพื่อการอ่านที่สบายตา
          jetbrains.variable
        )}
      >
        {/* โครงสร้างหลัก: 
            เน้นการจัดวางที่ยืดหยุ่น (Flexbox) 
            เพื่อให้หน้าเว็บแสดงผลสวยงามในทุกขนาดหน้าจอ 
        */}
        <main className="relative flex min-h-screen flex-col">{children}</main>

        {/*ระบบแจ้งเตือนที่เข้าใจง่าย เมื่อลูกค้าส่งฟอร์มหรือมีปฏิสัมพันธ์กับเว็บ */}
        <Toaster />
      </body>
    </html>
  )
}
```
---

#### 🔍 Path: data/servicesData.ts
```typescript
/** @format */
// ----------------------------------------------------
// 🌐 AEMDEVWEB: Services Data Hub (Sales-Optimized)
// ----------------------------------------------------

import { ServiceItem, TargetGroup } from "@/types/services"
import { type IconKey } from "@/components/iconMap"

// 📦 ดึงข้อมูล Config ของแต่ละ Template
import { clinicConfig } from "@/app/(marketing)/[template_id]/_templates/clinic/config"
import { cafeConfig } from "@/app/(marketing)/[template_id]/_templates/cafe/config"
import { realEstateConfig } from "@/app/(marketing)/[template_id]/_templates/realestate/config"
import { constructionConfig } from "@/app/(marketing)/[template_id]/_templates/construction/config"
import { starterConfig } from "@/app/(marketing)/[template_id]/_templates/starter/config"
import { starterConfig as woodBusinessConfig } from "@/app/(marketing)/[template_id]/_templates/WoodBusiness/config"

/**
 * 🔧 Helper: แปลงข้อมูล Features ให้พร้อมใช้งาน (จำกัด 3 ข้อ เพื่อความสบายตา)
 */
const normalizeFeatures = (source?: any[]): string[] => {
  if (!source || !Array.isArray(source)) return []

  return source
    .map((item) => {
      if (!item) return undefined
      if (typeof item === "string") return item
      return item.title || item.label || item.text || item.detail
    })
    .filter((v): v is string => Boolean(v))
    .slice(0, 3)
}

/**
 * 🚀 Services Data: ปรับปรุงชื่อและคำบรรยายให้เข้าถึงคนไทยทุกระดับ
 */
export const servicesData: ServiceItem[] = [
  {
    id: "5",
    slug: "starter",
    title: "FastTrack Landing Page (รุ่นเริ่มต้น)",
    description:
      "สร้างตัวตนบนโลกออนไลน์ใน 3-7 วัน ด้วยเว็บหน้าเดียวที่ออกแบบมาเพื่อปิดการขายโดยเฉพาะ",
    longDescription:
      "เหมาะสำหรับพ่อค้าแม่ค้าออนไลน์ และ SME เริ่มต้น ที่ต้องการเว็บสวย โหลดไว และใช้งานได้จริงในราคาที่คุ้มค่าที่สุด",
    price: "7,500",
    promoPrice: "3,900",
    iconName: "STARTER" as IconKey,
    targetGroup: "SME",
    features: normalizeFeatures(starterConfig?.content?.features),
    status: "READY",
  },
  {
    id: "6",
    slug: "wood-business",
    title: "Industrial & Catalog (รุ่นบริษัท/โรงงาน)",
    description:
      "ยกระดับความน่าเชื่อถือให้โรงงานและร้านค้าวัสดุ ด้วยระบบแคตตาล็อกสินค้าออนไลน์ที่ดูโปรและทันสมัย",
    longDescription:
      "เน้นการโชว์ภาพลักษณ์บริษัทและรายการสินค้า เพื่อให้ลูกค้าส่งคำขอใบเสนอราคาได้ง่ายขึ้น",
    price: "9,500 - 25,000",
    iconName: "CONSTRUCTION" as IconKey,
    targetGroup: "หจก./บริษัท",
    features: normalizeFeatures(woodBusinessConfig?.content?.features),
    status: "READY",
    isPopular: true,
  },
  {
    id: "1",
    slug: "clinic",
    title: "Medical & Wellness (รุ่นคลินิก/สุขภาพ)",
    description:
      "ระบบนัดหมายออนไลน์และโชว์บริการทางการแพทย์ เสริมภาพลักษณ์ความสะอาด มั่นใจ และน่าเชื่อถือ",
    longDescription:
      "รวมระบบแสดงผลบริการที่ชัดเจนและช่องทางติดต่อคุณหมอ เหมาะสำหรับคลินิกความงามและศูนย์สุขภาพ",
    price: "15,000 - 45,000",
    iconName: "MEDICAL" as IconKey,
    targetGroup: "หจก./บริษัท",
    features: normalizeFeatures(clinicConfig?.content?.services),
    status: "READY",
  },
  {
    id: "4",
    slug: "construction",
    title: "Engineering Portfolio (รุ่นรับเหมา/ก่อสร้าง)",
    description:
      "โชว์ผลงานการก่อสร้างระดับมืออาชีพ เพื่อใช้ประมูลงานและดึงดูดคู่ค้าจากหน่วยงานรัฐและเอกชน",
    longDescription:
      "เน้นโชว์ความสำเร็จของโปรเจกต์ (Project Showcase) และมาตรฐานวิศวกรรมที่บริษัทมี",
    price: "12,000 - 35,000",
    iconName: "CONSTRUCTION" as IconKey,
    targetGroup: "หจก./บริษัท",
    features: normalizeFeatures(constructionConfig?.content?.services),
    status: "READY",
  },
  {
    id: "3",
    slug: "realestate",
    title: "Property & Real Estate (รุ่นอสังหาริมทรัพย์)",
    description:
      "เว็บไซต์โครงการบ้านและคอนโด พร้อมระบบแผนที่และข้อมูลทำเล เพื่อการตัดสินใจจองที่ง่ายขึ้น",
    longDescription:
      "ออกแบบมาเพื่อ Agency และโครงการอสังหาฯ โดยเฉพาะ เน้นรูปภาพขนาดใหญ่และข้อมูลที่ครบถ้วน",
    price: "25,000 - 60,000",
    iconName: "PROPERTY" as IconKey,
    targetGroup: "หจก./บริษัท",
    features: normalizeFeatures(realEstateConfig?.content?.highlights),
    status: "READY",
  },
  {
    id: "2",
    slug: "cafe",
    title: "Premium Cafe & Restaurant (รุ่นร้านอาหาร)",
    description:
      "ดึงดูดลูกค้าด้วยบรรยากาศร้านบนหน้าเว็บ พร้อมระบบเมนูออนไลน์ที่สวยงามและใช้งานง่าย",
    longDescription:
      "สร้างประสบการณ์แบรนด์ให้น่าจดจำ เหมาะสำหรับร้านกาแฟ Specialty และร้านอาหารพรีเมียม",
    price: "8,500 - 18,000",
    iconName: "CAFE" as IconKey,
    targetGroup: "ร้านอาหาร",
    features: normalizeFeatures(cafeConfig?.content?.features),
    status: "READY",
  },
]

/**
 * 🔍 ตัวช่วยค้นหา (Helper Functions)
 */
export const getServiceBySlug = (
  slug: string | string[] | undefined
): ServiceItem | undefined => {
  if (!slug) return undefined
  const targetSlug = Array.isArray(slug) ? slug[0] : slug
  return servicesData.find(
    (s) => s.slug.toLowerCase() === targetSlug.toLowerCase()
  )
}

export const getServicesByTarget = (target: TargetGroup): ServiceItem[] => {
  return servicesData.filter((s) => s.targetGroup === target)
}
```
---

#### 🔍 Path: package.json
```json
{
  "name": "aemdevweb",
  "version": "1.0.0",
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
    "@radix-ui/react-accordion": "^1.2.2",
    "@radix-ui/react-avatar": "^1.1.11",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-tabs": "^1.1.1",
    "@radix-ui/react-toast": "^1.2.15",
    "@supabase/supabase-js": "^2.89.0",
    "@tailwindcss/forms": "^0.5.11",
    "@tailwindcss/typography": "^0.5.19",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "framer-motion": "^12.23.26",
    "lucide-react": "^0.468.0",
    "next": "15.5.7",
    "react": "19.0.0",
    "react-dom": "19.0.0",
    "react-hook-form": "^7.69.0",
    "tailwind-merge": "^2.5.5",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^4.2.1"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3.3.3",
    "@eslint/js": "^9.39.2",
    "@next/eslint-plugin-next": "^16.1.1",
    "@tailwindcss/aspect-ratio": "^0.4.2",
    "@types/node": "^20.17.10",
    "@types/react": "^19.0.1",
    "@types/react-dom": "^19.0.2",
    "@typescript-eslint/eslint-plugin": "^8.50.1",
    "@typescript-eslint/parser": "^8.50.1",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.39.2",
    "eslint-config-next": "^16.1.1",
    "eslint-plugin-react": "^7.37.5",
    "eslint-plugin-react-hooks": "^7.0.1",
    "globals": "^16.5.0",
    "knip": "^5.77.1",
    "postcss": "^8.4.49",
    "postcss-load-config": "^6.0.1",
    "prettier": "^3.4.2",
    "prettier-plugin-tailwindcss": "^0.7.2",
    "tailwindcss": "^3.4.16",
    "typescript": "^5.7.2"
  }
}
```
---

#### 🔍 Path: next.config.ts
```typescript
/** @format */
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    // อนุญาตให้ใช้ SVG เพื่อความยืดหยุ่นของ Icon/Logo
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    // รองรับฟอร์แมตสมัยใหม่เพื่อความเร็ว (High Performance)
    formats: ["image/avif", "image/webp"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui-avatars.com",
        pathname: "/api/**",
      },
      {
        protocol: "https",
        hostname: "dpgmfbnzyhnhwzyozoxe.supabase.co",
        // ✅ ปรับเป็น /** เพื่อให้ครอบคลุมทุกโฟลเดอร์และแก้ปัญหาเรื่อง Case Sensitive
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.dicebear.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.aemdevweb.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    ],
  },

  experimental: {
    // เพิ่มความเร็วในการรัน Dev mode โดยโหลดเฉพาะที่จำเป็น
    optimizePackageImports: ["lucide-react"],
  },
}

export default nextConfig
```
---

#### 🔍 Path: lib/supabase.ts
```typescript
/** @format */
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

/**
 * 🛠️ การสร้าง Supabase Client แบบ Singleton
 * ตรวจสอบค่า ENV เพื่อไม่ให้ Build ล่มเมื่อค่าเหล่านี้หายไปในช่วง Compile
 */
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : (null as any) // หรือคืนค่า mock object เพื่อให้ TypeScript ไม่ฟ้อง

// สำหรับกรณีใช้ใน Server Action หรือ API Route (Service Role)
export const getSupabaseAdmin = () => {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!supabaseUrl || !serviceKey) {
    return null
  }
  return createClient(supabaseUrl, serviceKey)
}
```
---

#### 🔍 Path: tailwind.config.ts
```typescript
/** @format */
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 🎨 Color Tokens: นิยามสีหลักสไตล์ AEM Architecture
      colors: {
        brand: {
          navy: "#0F172A", // Deep Navy (Base)
          blue: "#1E3A8A", // Brand Blue (Signature)
          orange: "#F97316", // Vibrant Orange (Call to Action)
          slate: "#64748B", // Technical Slate
          gold: "#D4AF37", // Premium Accent
        },
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        background: "#FFFFFF",
        surface: "#F9FAFB",
        border: "#E5E7EB",
        success: "#22C55E",
        warning: "#FACC15",
        error: "#EF4444",
        accent: "#F97316",
      },

      // 🔤 Typography Tokens: กำหนดฟอนต์ที่ใช้ในโปรเจกต์
      fontFamily: {
        sans: ["var(--font-prompt)", "sans-serif"],
        heading: ["var(--font-kanit)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      fontSize: {
        "display-xl": ["3rem", { lineHeight: "1" }],
        "display-lg": ["2.25rem", { lineHeight: "1.1" }],
        "display-md": ["1.75rem", { lineHeight: "1.2" }],
        h1: ["2rem", { lineHeight: "1.3" }],
        h2: ["1.5rem", { lineHeight: "1.4" }],
        h3: ["1.25rem", { lineHeight: "1.4" }],
        body: ["1rem", { lineHeight: "1.6" }],
        small: ["0.875rem", { lineHeight: "1.4" }],
        tiny: ["0.75rem", { lineHeight: "1.3" }],
      },

      // 📐 Spacing Tokens: ระยะห่างมาตรฐานระบบ Grid
      spacing: {
        xs: "0.5rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "4rem",
        "3xl": "6rem",
      },

      // 🟦 Radius Tokens: ความมนของขอบ (Card & Button เป็น 0 ตามสไตล์ Brutalist)
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        md: "0.25rem",
        lg: "0.5rem",
        xl: "1rem",
        full: "9999px",
        card: "0",
        button: "0",
      },

      // 🕶️ Shadow Tokens: เงาแบบหนาและแข็ง (Hard Shadows)
      boxShadow: {
        soft: "0 1px 3px rgba(0,0,0,0.06)",
        "enterprise-sm": "0 2px 4px rgba(0,0,0,0.08)",
        "enterprise-md": "0 4px 8px rgba(0,0,0,0.12)",
        "enterprise-lg": "0 8px 16px rgba(0,0,0,0.16)",
        "brutal-blue": "4px 4px 0px #1E3A8A",
        "brutal-orange": "4px 4px 0px #F97316",
        "brutal-navy": "8px 8px 0px #0F172A",
        "brutal-lg": "12px 12px 0px #0F172A",
      },

      // 🎞️ Animation & Keyframes: รวมระบบ Loading และ Motion
      animation: {
        float: "float 3s ease-in-out infinite",
        fade: "fade 0.5s ease-in-out",
        slide: "slide 0.3s ease-in-out",
        scale: "scale 0.3s ease-in-out",
        "spin-slow": "spin 3s linear infinite", // ปรับความเร็วให้เหมาะกับ Loader
        shimmer: "shimmer 2s infinite", // สำหรับ Skeleton Loading
        marquee: "marquee 60s linear infinite",
      },
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slide: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scale: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },

      // 📦 Container Tokens
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-animate"), // แนะนำให้ติดตั้งเพิ่มสำหรับแอนิเมชันที่ซับซ้อนขึ้น
  ],
}

export default config
```
---

#### 🔍 Path: types/blog.ts
```typescript
/** @format */

// ==============================
// 👤 Author Specification
// ==============================
export interface BlogAuthor {
  name: string
  avatar: string
  role?: string
  bio?: string // เพิ่มข้อมูลผู้เขียนสั้นๆ
}

// ==============================
// 📝 Blog Post Core Structure
// ==============================
export interface BlogPost {
  id: string
  slug: string
  title: string

  /** สรุปสั้น ใช้ใน blog list / card / SEO */
  excerpt: string

  /** คำอธิบายเชิงบทความ (ใช้กับ metadata / hero) */
  description: string

  category: string
  date: string // วันที่สำหรับแสดงผล (e.g., "24 Dec 2024")

  /** * ✅ Tags สำหรับ SEO และการกรองข้อมูล
   * แก้ปัญหา: TS2339: Property 'tags' does not exist on type 'BlogPost'
   */
  tags?: string[]

  /** ภาพปกบทความ */
  image: string

  /** เวลาอ่าน (e.g., "5 min read") */
  readTime: string

  /** ผู้เขียน (รองรับทั้ง object และ string สำหรับ backward compatibility) */
  author: BlogAuthor | string

  /** HTML / MDX content */
  content: string

  /** 🚀 SEO & Analytics Optimization */
  featured?: boolean // สำหรับแสดงในหน้า Home หรือแนะนำ
  viewCount?: number
}

/**
 * 🔍 Helper Type สำหรับการทำ Blog List (ลดขนาดข้อมูลที่ไม่จำเป็น)
 */
export type BlogPostSummary = Omit<BlogPost, "content">
```
---

#### 🔍 Path: config/siteConfig.ts
```typescript
/** @format */

// ─── TYPES DEFINITIONS ───

export interface PricingPlan {
  readonly id: string
  readonly name: string
  readonly price: string
  readonly unit?: string
  readonly description: string
  readonly features: readonly string[]
  readonly isRecommended?: boolean
  readonly buttonText: string
}

export interface NavLink {
  readonly title: string
  readonly href: string
  readonly isExternal?: boolean
}

export interface Feature {
  readonly title: string
  readonly description: string
  readonly icon: "MessageSquare" | "Zap" | "ShieldCheck" | "Target" | "Search"
}

// ─── CONFIGURATION ───

export const siteConfig = {
  // 🏢 Brand Identity & SEO (Updated: Focus on Business Results)
  name: "AEMDEVWEB",
  // ปรับ Title ใหม่ให้สั้น กระชับ และตรงกลุ่มเป้าหมาย SME
  title: "AEM DEV | รับทำเว็บไซต์ SME & Landing Page เน้นปิดการขาย",
  description:
    "บริการรับทำเว็บไซต์ธุรกิจ และ Landing Page คุณภาพสูง โหลดไว ใช้งานง่าย ช่วยเพิ่มยอดขายด้วยโครงสร้างเว็บที่มั่นคงและมาตรฐานวิศวกรรมระดับมืออาชีพ",
  url: "https://www.aemdevweb.com",
  ogImage: "/og-image.png",
  version: "1.5.1", // Bump version for SEO fix

  // 📞 Contact Information (Technical Support & Sales)
  contact: {
    email: "contact@aemdevweb.com",
    tel: "08x-xxx-xxxx", // แนะนำให้ใส่เบอร์จริงเพื่อเพิ่ม Trust ใน Local SEO
    lineId: "@127cnhtm",
    lineUrl: "https://lin.ee/XwdZGsn",
    address: "Bangkok, Thailand",
    workHours: "Mon - Fri, 09:00 - 18:00",
  },

  // 🧭 Navigation System
  navLinks: [
    { title: "หน้าแรก", href: "/" },
    { title: "คลังผลงาน", href: "/catalog" },
    { title: "บทความ", href: "/blog" },
    { title: "เกี่ยวกับเรา", href: "/about" },
    { title: "ปรึกษาโปรเจกต์", href: "/contact" },
  ] as NavLink[],

  // 💰 Pricing & Service Architecture
  pricingPlans: [
    {
      id: "starter",
      name: "Starter (Flash Sale)",
      price: "3,900",
      description:
        "แพ็กเกจเริ่มต้นสำหรับ SME ที่ต้องการเว็บไซต์เร็วและดีไซน์เน้นปิดการขาย",
      features: [
        "1 หน้า Landing Page พรีเมียม",
        "รองรับ Mobile Responsive 100%",
        "ปุ่มติดต่อด่วน LINE / Call",
        "Performance คะแนน 90+ (PageSpeed)",
        "ฟรี SSL และโดเมนปีแรก",
      ],
      isRecommended: false,
      buttonText: "จองสิทธิ์ราคาพิเศษ",
    },
    {
      id: "professional",
      name: "SME Pro (Growth)",
      price: "12,900",
      description:
        "เหมาะสำหรับธุรกิจที่ต้องการระบบวัดผลยอดขายและอันดับ SEO ที่ดีกว่า",
      features: [
        "ดีไซน์พรีเมียมเอกลักษณ์เฉพาะแบรนด์",
        "Technical SEO ตั้งต้นทั้งระบบ",
        "ติดตั้ง Tracking (FB Pixel / GA4 / GTM)",
        "โครงสร้างหลายหน้า (Multi-pages)",
        "ฟรีที่ปรึกษาการตลาดออนไลน์ 3 เดือน",
      ],
      isRecommended: true,
      buttonText: "เริ่มสร้างธุรกิจที่เติบโต",
    },
    {
      id: "maintenance",
      name: "Business Partner",
      price: "990",
      unit: "/เดือน",
      description:
        "บริการดูแลเว็บไซต์ต่อเนื่อง ประสิทธิภาพไม่ตกโฟกัสธุรกิจได้เต็มที่",
      features: [
        "อัปเดตข้อมูล/เนื้อหา เดือนละ 2 ครั้ง",
        "Security Update & Daily Backup",
        "Monthly Traffic Report (รายงานผล)",
        "สิทธิ์ปรึกษากลยุทธ์ Digital ฟรี",
      ],
      isRecommended: false,
      buttonText: "สมัครรับการดูแล",
    },
  ] as PricingPlan[],

  // 🛠️ Brand Pillars
  features: [
    {
      title: "คุยง่าย ภาษาธุรกิจ",
      description:
        "เราคุยด้วยภาษาธุรกิจที่คุณเข้าใจ ตัดศัพท์ไอทีที่ยุ่งยากออกไป เพื่อผลลัพธ์ที่ตรงจุด",
      icon: "MessageSquare",
    },
    {
      title: "มาตรฐานวิศวกรรม",
      description:
        "โครงสร้างโค้ดสะอาด ปลอดภัย โหลดไวสูงสุด ตามมาตรฐาน Google Core Web Vitals",
      icon: "Zap",
    },
    {
      title: "ดูแลจริง ไม่ทิ้งงาน",
      description:
        "พร้อมดูแลและ Support หลังการขาย ให้เว็บไซต์เป็นเครื่องมือทำเงินระยะยาว",
      icon: "ShieldCheck",
    },
  ] as Feature[],

  // 🔗 Social Assets & Integrations
  links: {
    facebook: "https://facebook.com/aemdevweb",
    github: "https://github.com/aemdevweb",
    line: "https://lin.ee/XwdZGsn",
    instagram: "https://instagram.com/aemdevweb",
  } as const,

  // 📑 Footer Categories
  footerLinks: [
    {
      title: "Solutions",
      links: [
        { name: "Landing Page", href: "/catalog" },
        { name: "Corporate Website", href: "/catalog" },
        { name: "Service SEO", href: "/services" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog & Insights", href: "/blog" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Sitemap", href: "/sitemap.xml" },
      ],
    },
  ],
} as const

export type SiteConfig = typeof siteConfig
```
---

#### 🔍 Path: types/review.ts
```typescript
/** @format */
export interface ReviewItem {
  id: string
  name: string
  avatar: string
  businessType: string
  category: "cafe" | "clinic" | "construction" | "real-estate" | "other"
  comment: string
  rating: number
  date: string
  isFeatured: boolean
}
```
---

#### 🔍 Path: .env
```text
NEXT_PUBLIC_SUPABASE_ANON_KEY= "********"
POSTGRES_PASSWORD= "********"
POSTGRES_PRISMA_URL= "********"
POSTGRES_URL= "********"
POSTGRES_URL_NON_POOLING= "********"
NEXT_PUBLIC_SUPABASE_ANON_KEY= "********"
SUPABASE_JWT_SECRET= "********"
SUPABASE_SERVICE_ROLE_KEY= "********"```
---

## 📝 บทสรุป
การสแกนเสร็จสิ้น ข้อมูลถูกจัดรูปแบบให้ AI ประมวลผลได้ทันที
. Format code in: Optimized
