# Project Context Summary (Full Scan)



Generated on: 2026-01-22 22:06:01
Project: www.aemdevweb.com
URL: https://aemdevweb.com
Status: Production-Ready Analysis | Full System Context

## 1. Project Health and Deployment Readiness
STATUS: FIX REQUIRED (Check issue highlights)


## 2. File Statistics by Extension
```text
     59 tsx
     12 ts
     12 mdx
     10 webp
      7 png
      5 sh
      4 json
      3 md
      1 svg
      1 ico
      1 css
```

## 3. Directory Structure (Architecture Tree)
```text
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
dir: types/
types
  |index.ts
dir: scripts/
scripts
  |pre-deploy-check.sh
  |dev
     |project-summary.sh
     |tree-projects.sh
  |tree.sh
  |clean-project.sh
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
dir: config/
config
  |ai-context.core.md
  |ai-context.dna.md
  |ai-system-role.md
```

## 4. Critical Code Analysis and Environment
### File: config/ai-context.core.md
```markdown
🧠 AI CORE CONTEXT — AEMDevWeb (The 2026 Masterfile)
⚠️ SYSTEM DIRECTIVE: เอกสารนี้คือ "Source of Truth" เพียงหนึ่งเดียว ห้าม AI คิดเองเออเองนอกเหนือจากข้อเท็จจริงในนี้

1. FACT — ความจริงทางเทคนิค (Immutable Technical Truth)
   ข้อมูลเหล่านี้อ้างอิงจาก package.json และ Codebase จริง ห้ามบิดเบือน
   🛠️ Tech Stack (The Engine)

- Core: Next.js 16.1.3 (App Router) + React 19.2.3
- Styling: Tailwind CSS v4 (Configured via CSS Variables @theme in globals.css)
- Language: TypeScript 5.7+ (Strict Mode Enabled)
- Content Engine: MDX (via next-mdx-remote/rsc) + Gray Matter
- Performance Libs: next/dynamic, nextjs-toploader, sharp-wasm32
- UI Components: Shadcn/UI (New York Style), Lucide React, Framer Motion
  📂 Directory Architecture (Maps)
  AI ต้องรู้ว่าไฟล์อยู่ที่ไหน:
- app/(main): หน้าหลัก (Home, Services, Blog) เน้น SEO และ Static Content
- app/(marketing): หน้า Marketplace (Templates) เน้นระบบ Filter และ Search
- content/: คลังข้อมูลดิบ (MDX Files) แบ่งเป็น blog, case-studies, template
- lib/: Logic การดึงข้อมูล (ห้ามเขียน Logic ใน UI Component)
- constants/: ข้อมูล Static Config (site-config.ts, navigation.ts)
  ⚡ Performance Benchmark
- Desktop: ต้องได้ 99-100/100 (Green)
- Mobile: ต้องได้ 90+/100 (LCP < 1.5s is acceptable, < 1.0s is target)
- Image Rule: รูป Above the Fold (Hero) ต้องใส่ priority และ sizes เสมอ ห้าม Lazy Load

2. BRAND DNA — ตัวตน "นายเอ็มซ่ามากส์"
   The Solo-Specialist Persona

- ไม่ใช่เอเจนซี่: "ผมคือนักพัฒนาระดับ Senior ที่ลงมาจับงานเอง ไม่ใช่บริษัทที่รับงานแล้วส่งต่อเด็กฝึกงาน"
- คุยกับคนทำจริง: "พี่คุยกับผม จบที่ผม รับผิดชอบโดยผม 100%"
- Industrial Mindset: เข้าใจ Process ของโรงงานและ SME ที่ต้องการความ "ชัวร์" และ "นิ่ง"
  🎨 Visual Identity (Theme DNA)
- Primary Colors: Slate-950 (#020617 - ความสุขุม พรีเมียม) & Emerald-500 (#10B981 - เงิน, ความเร็ว, ไฟเขียว)
- Typography:
  - Heading: Font Prompt (มั่นคง, น่าเชื่อถือ, Modern Thai)
  - Body: Font Anuphan (อ่านง่าย, สบายตา, Humanist)
- Mood: Industrial Minimalism, High Contrast, Clean Lines

3. POWER VOCABULARY (2026 Edition)
   คำศัพท์เหล่านี้ถูกคัดมาเพื่อ "ปิดการขาย" และ "สร้างความเชื่อมั่น"
   ✅ Technical Terms (Translated to Benefit)

- Next.js 16: "สถาปัตยกรรมเว็บไซต์ปี 2026 ที่ Google รักที่สุด"
- Server Components: "ย้ายความหนักไปไว้หลังบ้าน หน้าบ้านพี่เลยเบาหวิว เปิดปุ๊บติดปั๊บ"
- LCP Optimization: "จูนจังหวะการโหลดให้ลูกค้าเห็นสินค้าพี่ก่อนที่จะกระพริบตา"
- Technical SEO: "ทำโครงสร้างให้บอท Google วิ่งสะดวก อันดับพี่ก็ขึ้นง่าย"
  ✅ Business Phrases (Industrial & SME)
- "เครื่องจักรผลิตเงิน" (Money-Making Machine)
- "สถาปัตยกรรมระดับอุตสาหกรรม" (Industrial-Grade Architecture)
- "ระบบจัดการสินค้าหมื่นรายการ" (Scalable Catalog)
- "งานเนี๊ยบ ไม่ทิ้งงาน" (Zero-Abandonment Guarantee)
  🚫 Forbidden Words (ห้ามใช้)
- "ราคาถูก" (เราขายความคุ้มค่า ไม่ใช่ของถูก)
- "ฟรีแลนซ์ทั่วไป" (เราคือ Specialist)
- "น่าจะ/อาจจะ" (ต้องฟันธง: ได้คือได้ ไม่ได้คือไม่ได้)

4. CONTENT STRATEGY (P-A-S-O Framework)
   โครงสร้างการเขียนเพื่อโน้มน้าวใจ (Persuasion Logic)

- Problem (ขยี้แผล): "ยิงแอดวันละพัน แต่เว็บหมุนติ้วๆ ลูกค้ากดออกหมด เสียดายเงินไหมครับ?"
- Agitation (ขยายความเจ็บ): "ทุก 1 วินาทีที่เว็บโหลดช้า ยอดขายพี่หายไป 10% คู่แข่งที่เว็บไวกว่ากำลังเก็บลูกค้าพี่ไปฟรีๆ"
- Solution (ทางออก): "เปลี่ยนมาใช้โครงสร้าง Next.js 16 แบบที่ผมทำ ตัดไขมันส่วนเกินออก เหลือแต่ความไวที่ทำเงินได้จริง"
- Offer (ข้อเสนอ): "ทักมาปรึกษาผมก่อนได้ครับ ผมช่วยดูโครงสร้างให้ฟรี ไม่จ้างไม่ว่ากัน แต่อยากให้พี่รู้จุดบอด"

5. BUSINESS LOGIC (Hybrid Model)
   AI ต้องเข้าใจว่าเราขาย 2 บริการหลักที่เกื้อหนุนกัน:

- AEMDevWeb (The Builder): รับสร้างเว็บไซต์ใหม่, Sale Page, Corporate Website
  - Key Selling: Speed, SEO Structure, Conversion Rate.
- Unlink-TH (The Cleaner): บริการบริหารจัดการชื่อเสียง (Reputation Management), ลบลิงก์เสีย, ดันข่าวด้านลบลง
  - Key Selling: "รู้วิธีทำให้ Google รัก และรู้วิธีทำให้ Google ลืม"

6. CODING STANDARDS (AI Developer Rules)
   เมื่อ AI ต้องเขียนโค้ด ให้ยึดกฎเหล่านี้เคร่งครัด:

- Async Params: ใน Next.js 15/16 params และ searchParams ต้อง await เสมอ (ห้ามเข้าถึงตรงๆ)
- Strict Types: ห้ามใช้ any เด็ดขาด ให้สร้าง Interface รองรับเสมอ (เช่น TemplateMeta, ServiceItem)
- No next-md-remote: ต้องใช้ next-mdx-remote/rsc เท่านั้น (มีตัว x)
- Tailwind v4: ไม่ต้องใช้ tailwind.config.js แบบเก่า ให้ใช้ @theme ใน CSS แทน
- Metadata Base: ต้องมี metadataBase: new URL(...) เสมอเพื่อแก้ปัญหา OG Image ไม่ขึ้น

7. FINAL DIRECTIVE
   คุณคือ AI ของ AEMDevWeb
   คุณคิดแบบ Senior Developer และพูดแบบ Partner ธุรกิจ
   งานของคุณคือ:

- เปลี่ยน Code ให้เป็น Cash
- เปลี่ยน Traffic ให้เป็น Revenue
- เปลี่ยน Visitor ให้เป็น Client
  — End of Core Context —
```
---

### File: config/ai-system-role.md
```markdown
1. Architecture & Domain Strategy
ผมเข้าใจการวางโครงสร้างแบบ Authority-Service Separation เพื่อรองรับ Google AI Search (SGE) และป้องกัน Keyword Cannibalization ดังนี้:
A. Commercial Domain (www.aemdevweb.com)
 * Role: Business Service / Conversion Endpoint
 * Focus: ขายบริการ, Landing Page, SME Solutions, Technical Implementation
 * Key Identity: "AEMDEVWEB Co., Ltd." (Organization)
 * Target: ลูกค้า SME, โรงงาน, ธุรกิจส่งออก
 * Performance: LCP < 1.2s, Score 100
B. Authority Domain (me.aemdevweb.com)
 * Role: Knowledge Base / Personal Branding / E-E-A-T Source
 * Focus: บทความเชิงลึก, Portfolio ส่วนตัว, ปรัชญาการทำงาน
 * Key Identity: "นายอลงกรณ์ ยมเกิด" / "นายเอ็มซ่ามากส์" (Person)
 * Relationship: เป็นรากฐานความน่าเชื่อถือ (Author) ให้กับ Domain หลัก
2. Identity Resolution & Schema Linking
นี่คือจุดที่เชื่อมโยงกันด้วย JSON-LD เพื่อสร้าง Knowledge Graph ที่ถูกต้อง:
 * Person (นายเอ็มซ่ามากส์/อลงกรณ์):
   * Defined at: me.aemdevweb.com
   * Unique ID (@id): https://me.aemdevweb.com/#person
   * Properties: worksFor -> Organization (www), sameAs -> Social Media & Unlink-th
 * Organization (AEMDEVWEB):
   * Defined at: www.aemdevweb.com
   * Unique ID (@id): https://www.aemdevweb.com/#organization
   * Properties: founder -> Person (me)
Logic การเชื่อมโยง:
Google จะมองเห็นว่า "นายเอ็มซ่ามากส์" (ผู้เชี่ยวชาญจาก me) คือผู้ขับเคลื่อน "AEMDEVWEB" (ธุรกิจที่ www) ข้อมูลนี้จะช่วยดัน Ranking ในฝั่ง Commercial โดยไม่อาศัย Keyword spamming แต่ใช้อำนาจของ Author Authority แทน
3. Sitemap & Routing Structure (Merged)
ผมได้ map URL เพื่อให้เห็นภาพรวมของ Network ทั้งหมดครับ
Commercial (www)
 * / (Home): USP "Speed Launch & High Performance"
 * /services: Technical SEO, Next.js Dev
 * /templates: สินค้าสำเร็จรูป (ถ้ามี)
 * /case-studies: ผลงานในนามบริษัท
 * /blog: ข่าวสารองค์กร / Case Study ทางธุรกิจ
 * /contact & /careers: ช่องทางติดต่อทางการ
Personal (me)
 * / (Home): Profile นายเอ็มซ่ามากส์
 * /about: Story, Vision, Unlink-th Architect
 * /services: (อาจจะเป็น Consult ส่วนตัว หรือ link กลับไป www)
 * /projects: Technical Portfolio (Showcase Code/Architecture)
 * /blog: Deep Tech, R&D, Knowledge Sharing
4. Technical Constraints (Dev Context)
สำหรับการเขียน Code หรือ Gen Content ต่อจากนี้ ผมจะยึดตาม config นี้:
 * Specialist Name: ใช้ "นายเอ็มซ่ามากส์" เป็นหลักในบริบท Marketing/Brand และ "Alongkorl Yomkerd" ในบริบท Schema/Formal.
 * Tech Stack: Next.js (App Router), TypeScript, Tailwind (assumed).
 * SEO Standard: 2026 Guarantees (Security, AI Readiness).
 * Formatting:
   * No Emojis in Code/Technical Logs.
   * Strict Typescript usage.
   * Reference siteConfig constants primarily.
พร้อมปฏิบัติงานครับ คุณต้องการให้ผมเริ่มส่วนไหนก่อนครับ?
 * Refactor Code: ตรวจสอบหรือปรับปรุง Component อื่นๆ ให้สอดคล้องกับ site-config นี้
 * Generate Content: เขียนบทความหรือ Copywriting โดยแยกบริบทระหว่าง me (เล่าเรื่อง) กับ www (ขายของ)
 * SEO Strategy: วางแผน Internal Link ระหว่าง 2 Domain นี้
 * Other: (ระบุคำสั่ง)
```
---

### File: config/ai-context.dna.md
```markdown
1. Brand DNA: Solo-Specialist Persona

- ไม่ใช่เอเจนซี่: เน้นการสื่อสารว่าเป็นนักพัฒนาระดับ Senior ที่ลงมาดูแลงานเอง 100% เพื่อลดความผิดพลาดจากการส่งต่องาน
- Industrial Mindset: มีวิธีคิดแบบวิศวกรรมอุตสาหกรรม ที่เน้นความนิ่ง ความเสถียร และความปลอดภัยของระบบเป็นหลัก
- Direct Access: ลูกค้าคุยกับคนทำจริงโดยตรง ไม่ต้องผ่านเซลล์ เพื่อความรวดเร็วและแม่นยำในการแก้ปัญหา

2. หลักการใช้ภาษา (Language Philosophy)
   การสื่อสารจะถูกแบ่งออกเป็น 2 ระดับตามกลุ่มเป้าหมาย (Hybrid Communication):

- Dev to Dev (Technical English): ในส่วนของ Codebase, Comments และ Technical Docs จะใช้ภาษาอังกฤษเชิงเทคนิคที่กระชับและเป็นมืออาชีพ
- Business-Friendly Thai (Client-Facing): ในส่วนที่ลูกค้าเห็น จะเปลี่ยนศัพท์เทคนิคยากๆ ให้เป็น "ภาษาผลกำไร" ที่เจ้าของธุรกิจเข้าใจง่าย
  - ตัวอย่าง: เปลี่ยนจาก "LCP Optimization" เป็น "จูนความเร็วเพื่อให้ลูกค้าเห็นสินค้าก่อนจะกระพริบตา"
  - ตัวอย่าง: เปลี่ยนจาก "Infrastructure" เป็น "รากฐานเว็บไซต์ที่มั่นคงเหมือนสร้างโรงงาน"

3. โครงสร้างการโน้มน้าวใจ (P-A-S-O Framework)
   ทุกการเขียนเนื้อหาการตลาดจะใช้โครงสร้างเพื่อกระตุ้นให้เกิดการตัดสินใจดังนี้:

- Problem (ขยี้ปัญหา): เปิดด้วยปัญหาที่ลูกค้าเจอ เช่น เว็บโหลดช้าจนเสียลูกค้า
- Agitation (ขยายความเจ็บ): ชี้ให้เห็นว่าทุกวินาทีที่เสียไปคือโอกาสขายที่หลุดลอยไปหาคู่แข่ง
- Solution (ทางออก): นำเสนอมาตรฐานเทคโนโลยี Next.js 16 ที่เราเชี่ยวชาญเพื่อแก้ปัญหานั้น
- Offer (ข้อเสนอ): ชวนให้ทักมาปรึกษาหรือตรวจสุขภาพเว็บฟรีในฐานะพาร์ทเนอร์

4. กฎเหล็กและข้อห้าม (Forbidden Rules)

- No Emojis: ห้ามใส่อีโมจิลงในโค้ดหรือบทความความรู้ เพื่อรักษาความคลีนระดับ Industrial Grade
- Avoid Forbidden Words: ห้ามใช้คำว่า "ราคาถูก", "น่าจะ/อาจจะ", หรือคำคมแบบไลฟ์โค้ชที่ดูไม่เป็นมืออาชีพ
- Sincere & Confident: ต้องพูดด้วยความจริงใจ ฟันธงในสิ่งที่รู้ และไม่หมกเม็ดเรื่องทางเทคนิค
```
---

### File: pre-deploy-report.md
```markdown
# Pre-deployment Inspection Report
Generated: 2026-01-22 22:01:15
Branch: main
Build-ID: de2f75c

## 1. Environment Configuration
Status: Environment configuration verified (Found .env)

## 2. Automated Fixes
Status: Partial fixes applied. Manual review suggested for complex linting issues.

## 3. Static Analysis (ESLint)
[ERROR] Status: Linting failed
### Linting Violations Detail:
```text

> aemdevweb.com@1.0.0 lint /data/data/com.termux/files/home/DEVSTORE/aemdevweb
> eslint .


/data/data/com.termux/files/home/DEVSTORE/aemdevweb/middleware.ts
  4:28  error  'request' is defined but never used  no-unused-vars

✖ 1 problem (1 error, 0 warnings)

 ELIFECYCLE  Command failed with exit code 1.
```

## 4. Type Integrity Check
Status: Passed. No type mismatches detected.

## 5. Production Build Test
Status: Build optimized successfully.
### Route Analysis and Bundle Sizes
```text
Route (app)
┌ ○ /
├ ○ /_not-found
├ ƒ /[template]
├ ● /[template]/[category]
│ ├ /templates/booking
│ ├ /templates/e-commerce
│ ├ /templates/landing-page
│ └ /templates/service
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
│ ├ /case-studies/industrial-catalog-rfq-optimization
│ ├ /case-studies/sme-web-performance-growth
│ └ /case-studies/unlink-reputation-management-success
├ ○ /contact
├ ○ /privacy
├ ○ /robots.txt
├ ○ /services
├ ƒ /services/[slug]
├ ○ /sitemap.xml
└ ○ /terms


ƒ Proxy (Middleware)

○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
ƒ  (Dynamic)  server-rendered on demand

```

---
## Summary Result
### FIX REQUIRED
The inspection detected critical issues. Please resolve the failures listed in the sections above before proceeding.
```
---

### File: app/globals.css
```css
/** @format */
@import "tailwindcss";

@theme {
  /* Brand Identity & Core Colors (Shadcn v4 compatible) */
  --color-background: hsl(0 0% 100%);
  --color-foreground: hsl(222.2 84% 4.9%);

  --color-primary: hsl(222.2 47.4% 11.2%);
  --color-primary-foreground: hsl(210 40% 98%);

  --color-secondary: hsl(210 40% 96.1%);
  --color-secondary-foreground: hsl(222.2 47.4% 11.2%);

  --color-accent: hsl(210 40% 96.1%);
  --color-accent-foreground: hsl(222.2 47.4% 11.2%);

  /* Specialist Emerald Logic (Brand DNA) */
  --color-success: hsl(158 64% 52%);
  --color-emerald-500: #10b981;
  --color-emerald-400: #34d399;

  /* Accessibility Safe Colors: Optimized for mobile contrast */
  --color-slate-muted: #64748b; /* Equivalent to Slate-500 for AA/AAA compliance */

  --color-destructive: hsl(0 84.2% 60.2%);

  /* UI Elements & Variables */
  --color-border: hsl(214.3 31.8% 91.4%);
  --color-input: hsl(214.3 31.8% 91.4%);
  --color-ring: hsl(222.2 84% 4.9%);

  /* Industrial Geometry */
  --radius-lg: 0.75rem;
  --radius-md: calc(0.75rem - 2px);
  --radius-sm: calc(0.75rem - 4px);

  /* Typography Bridge */
  --font-prompt: var(--font-prompt);
  --font-anuphan: var(--font-anuphan);

  /* Industrial Micro-Interactions */
  --animate-accordion-down: accordion-down 0.2s ease-out;
  --animate-accordion-up: accordion-up 0.2s ease-out;

  @keyframes accordion-down {
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  }
  @keyframes accordion-up {
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }
  }
}

/* -------------------------------------------------------------------------- */
/* Base Layer: Stability and Framework Standards                              */
/* -------------------------------------------------------------------------- */

@layer base {
  * {
    /* Direct CSS Variable usage to prevent Build Errors in Tailwind v4 */
    border-color: var(--color-border);
    outline-color: color-mix(in srgb, var(--color-ring) 50%, transparent);
  }

  body {
    @apply bg-background text-foreground font-anuphan antialiased;
    font-feature-settings:
      "rlig" 1,
      "calt" 1;

    &::selection {
      @apply bg-success/20 text-primary;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-prompt text-primary font-bold tracking-tight;
  }

  .heading-heavy {
    @apply font-prompt font-black tracking-tighter uppercase italic;
  }
}

/* -------------------------------------------------------------------------- */
/* Utilities Layer: Performance & Accessibility Tuning                        */
/* -------------------------------------------------------------------------- */

@layer utilities {
  /* High contrast utility for Lighthouse compliance */
  .text-muted-safe {
    color: var(--color-slate-muted);
  }

  .text-balance {
    text-wrap: balance;
  }

  /* Prevent Thai Flash of Unstyled Text (FOUT) */
  .thai-font-smoothing {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  /* Industrial depth shadow */
  .industrial-shadow {
    box-shadow: 0 10px 30px -10px rgba(2, 6, 23, 0.1);
  }

  /* Brand gradient */
  .text-gradient-emerald {
    @apply bg-gradient-to-r from-emerald-500 to-emerald-400 bg-clip-text text-transparent;
  }

  /* Infinite Scroll Animation (CPU Optimized) */
  @keyframes infinite-scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  .animate-infinite-scroll {
    animation: infinite-scroll 25s linear infinite;

    /* Performance Optimization: Force GPU Acceleration to reduce Main Thread load */
    will-change: transform;
    transform: translateZ(0);
  }
}
```
---

### File: app/layout.tsx
```typescript
import React from "react"
import type { Metadata, Viewport } from "next"
import NextTopLoader from "nextjs-toploader"
import { Prompt, Anuphan } from "next/font/google"

import { cn } from "@/lib/utils"
import { constructMetadata, siteConfig } from "@/constants/site-config"
import { viewport as defaultViewport } from "./viewport"
import { FacebookChat } from "@/components/shared/FacebookChat"

import "./globals.css"

// Font Configuration: Optimized for Thai/Latin Rendering
// Using 'optional' display strategy to prioritize LCP and prevent CLS
const fontPrompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-prompt",
  display: "optional",
  preload: true,
})

const fontAnuphan = Anuphan({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-anuphan",
  display: "optional",
  preload: true,
})

export const metadata: Metadata = constructMetadata()
export const viewport: Viewport = defaultViewport

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="th"
      className={cn(
        "scroll-smooth focus:scroll-auto",
        fontPrompt.variable,
        fontAnuphan.variable,
        "thai-font-smoothing"
      )}
      suppressHydrationWarning
    >
      <body
        className={cn(
          "font-anuphan min-h-screen bg-white text-slate-900 antialiased",
          "selection:bg-emerald-500/20 selection:text-emerald-900",
          "overflow-x-hidden"
        )}
      >
        {/* Navigation Progress Bar */}
        <NextTopLoader
          color="#10B981"
          height={3}
          showSpinner={false}
          easing="ease-in-out"
          speed={300}
          shadow="0 0 10px #10B981,0 0 5px #10B981"
        />

        {/* Third-party Integrations (Lazy Loaded) */}
        <FacebookChat />

        {/* Main Application Container */}
        <div className="relative flex min-h-screen flex-col">{children}</div>

        {/* Structured Data: Professional Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: siteConfig.name,
              image: siteConfig.ogImage,
              url: siteConfig.url,
              email: siteConfig.email,
              description: siteConfig.description,
              address: {
                "@type": "PostalAddress",
                addressCountry: "TH",
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
```
---

### File: app/(main)/page.tsx
```typescript
/** @format */

import React, { Suspense } from "react"
import type { Metadata } from "next"
import dynamic from "next/dynamic"

import { siteConfig, constructMetadata } from "@/constants/site-config"
import { services } from "@/constants/services-data"
import { JsonLd } from "@/components/seo/JsonLd"
import Hero from "@/components/landing/Hero"

// Dynamic Components Optimization: Prioritizing LCP and TTI
const HomeClientSections = dynamic(
  () => import("@/components/landing/HomeClientSections"),
  {
    ssr: true,
    loading: () => (
      <div className="h-[500px] w-full animate-pulse bg-slate-50" />
    ),
  }
)

const ValueProp = dynamic(() => import("@/components/landing/ValueProp"))
const ServiceCard = dynamic(() => import("@/components/shared/ServiceCard"))
const BlogCard = dynamic(() => import("@/components/shared/BlogCard"))
const WorkProcess = dynamic(
  () => import("@/components/sales-engine/WorkProcess")
)
const CTASection = dynamic(() => import("@/components/landing/CTASection"))

export const metadata: Metadata = constructMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
})

export default function HomePage() {
  // Filter featured services for landing page display
  const featuredServices = services.filter((s) =>
    ["sme-speed-launch", "corporate-trust", "industrial-catalog"].includes(s.id)
  )

  return (
    <main className="relative min-h-screen bg-white antialiased selection:bg-emerald-500/20">
      <JsonLd
        type="WebSite"
        data={{
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
          author: { "@type": "Person", name: siteConfig.expert },
        }}
      />

      <Hero />

      {/* Social Proof and Performance Statistics */}
      <Suspense
        fallback={<div className="h-96 w-full animate-pulse bg-slate-50" />}
      >
        <HomeClientSections />
      </Suspense>

      {/* Brand Value Propositions */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <ValueProp />
      </section>

      {/* Professional Service Grid */}
      <section className="relative bg-slate-50/80 py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-16 space-y-4 text-center lg:text-left">
            <h2 className="font-prompt text-4xl font-black tracking-tighter text-slate-900 uppercase italic md:text-6xl">
              โซลูชัน{" "}
              <span className="text-emerald-500">ที่ออกแบบมาเพื่อธุรกิจ</span>
            </h2>
            <p className="font-anuphan max-w-2xl text-lg leading-relaxed font-bold text-slate-500">
              ยกระดับรากฐานดิจิทัลสำหรับ SME และโรงงานอุตสาหกรรมโดยเฉพาะ
              เน้นความเสถียร ความปลอดภัย และประสิทธิภาพการปิดการขาย
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                price={service.priceValue}
                slug={service.slug}
                features={service.features}
                isPopular={service.highlight}
                themeColor={service.themeColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Workflow */}
      <WorkProcess />

      {/* Insights and Strategic Content */}
      <section className="relative py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="font-prompt text-4xl font-black tracking-tighter text-slate-900 uppercase italic md:text-6xl">
                กลยุทธ์{" "}
                <span className="text-emerald-500">จากประสบการณ์ตรง</span>
              </h2>
              <p className="font-anuphan mt-4 text-lg font-bold text-slate-500">
                อัปเดตเทคนิคการทำเว็บไซต์และ Technical SEO มาตรฐานปี 2026
              </p>
            </div>
            <button className="text-sm font-bold text-emerald-600 hover:underline">
              ดูบทความทั้งหมด
            </button>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {/* Blog content mapping placeholder */}
            <BlogCard
              slug="seo-for-sme-2026"
              title="วิธีเพิ่มความได้เปรียบทางการแข่งขันด้วย SEO 2026"
              excerpt="เจาะลึกโครงสร้างเว็บไซต์ที่ช่วยให้ Google ค้นหาธุรกิจของคุณเจอเป็นเจ้าแรกในยุค AI Search..."
              date="2026-01-20"
              thumbnail="/images/blog/placeholder.webp"
            />
          </div>
        </div>
      </section>

      <CTASection />

      {/* Industrial Grade Footer Credits */}
      <footer className="py-12 text-center opacity-40">
        <p className="font-prompt text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase">
          © {new Date().getFullYear()} {siteConfig.companyName} - Built with
          Next.js 16
        </p>
      </footer>
    </main>
  )
}
```
---

### File: components/landing/HomeClientSections.tsx
```typescript
/** @format */

"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2, Users, Factory, Zap } from "lucide-react"

// Data configuration for trusted partnerships
const clients = [
  { name: "Unlink TH", logo: "/images/showcase/unlink-th1.webp" },
  { name: "Industrial Solutions", logo: "/images/showcase/project-01.webp" },
  { name: "SME Thailand", logo: "/images/showcase/aemdevweb-hero.webp" },
  { name: "Factory Pro", logo: "/images/showcase/project-01.webp" },
  { name: "Digital Partner", logo: "/images/showcase/unlink-th1.webp" },
  { name: "Tech Export", logo: "/images/showcase/aemdevweb-hero.webp" },
]

// Strategic Impact Statistics
const stats = [
  {
    label: "ธุรกิจที่ได้รับความไว้วางใจ",
    value: "50+",
    icon: Users,
    description: "ยกระดับสถาปัตยกรรมดิจิทัลให้กับ SME และสตาร์ทอัพไทย",
  },
  {
    label: "ภาคอุตสาหกรรมและโรงงาน",
    value: "12+",
    icon: Factory,
    description: "วางรากฐานระบบเว็บไซต์ที่มีความเสถียรสูงสุดสำหรับโรงงานผลิต",
  },
  {
    label: "ดัชนีประสิทธิภาพเว็บไซต์",
    value: "99/100",
    icon: Zap,
    description: "ค่าเฉลี่ย Google PageSpeed Score ที่ผมทำให้ทุกโปรเจกต์",
  },
]

const HomeClientSections = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      {/* Infrastructure Layer: Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-fixed bg-center" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Infinite Logo Slider: CSS Animation Optimized for TBT/CLS */}
        <div className="mb-32">
          <p className="font-prompt mb-12 text-center text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase italic">
            Trusted by Forward-Thinking Businesses
          </p>

          <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
            <div className="animate-infinite-scroll flex w-max items-center gap-20 pr-20">
              {/* Loop replication for seamless animation with optimized image payload */}
              {[...clients, ...clients, ...clients].map((client, i) => (
                <div
                  key={i}
                  className="relative h-12 w-40 shrink-0 opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                    // Optimized sizes to reduce mobile LCP and unnecessary bandwidth
                    sizes="(max-width: 480px) 100px, (max-width: 768px) 120px, 160px"
                    // Priority rendering for the first visible set of items
                    priority={i < 4}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Statistics Grid: Industrial Value Presentation */}
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group rounded-[2.5rem] border border-slate-200 bg-white p-10 transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/5"
            >
              <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-900 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                <stat.icon className="h-7 w-7" />
              </div>
              <div className="mb-2 flex items-baseline gap-2">
                <span className="font-prompt text-5xl font-black tracking-tighter text-slate-900 italic md:text-6xl">
                  {stat.value}
                </span>
                <CheckCircle2 className="h-6 w-6 text-emerald-500" />
              </div>
              <h3 className="font-prompt text-[11px] font-black tracking-[0.2em] text-slate-600 uppercase italic">
                {stat.label}
              </h3>
              <p className="font-anuphan mt-4 text-sm font-bold text-slate-500">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Strategic Close: Solo-Specialist Authority Hook */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="shadow-3xl mt-28 rounded-[3rem] bg-slate-950 p-12 text-center md:p-24"
        >
          <h2 className="font-prompt text-4xl leading-[1.1] font-black tracking-tighter text-white uppercase italic md:text-6xl">
            จากธุรกิจ SME สู่ระบบโรงงาน <br />
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">
              ผมเปลี่ยนดัชนีความเร็ว ให้เป็นผลกำไรทางธุรกิจ
            </span>
          </h2>
        </motion.div>
      </div>
    </section>
  )
}

export default HomeClientSections
```
---

### File: app/(marketing)/[template]/[category]/[slug]/page.tsx
```typescript
/** @format */

import React, { Suspense } from "react"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"

// 🛠️ Icons & UI Essentials
import { ShieldCheck, Bell } from "lucide-react"

// 📦 Specialist Logic & Data Hub
import { getAllTemplates, getTemplateBySlug } from "@/lib/template"
import { useMDXComponents } from "@/mdx-components"
import { siteConfig } from "@/constants/site-config"

// 🚀 Sales Engine Components
import WorkProcess from "@/components/sales-engine/WorkProcess"
import { ImpactStats } from "@/components/sales-engine/ImpactStats"
import { SpeedDemon } from "@/components/sales-engine/SpeedDemon"

// 🧩 Specialist UI Components
import { TemplateNavbar } from "@/components/template/shared/TemplateNavbar"
import { TemplateHero } from "@/components/template/marketplace/TemplateHero"
import { DevicePreview } from "@/components/template/shared/DevicePreview"
import { TemplatePricingCard } from "@/components/template/shared/TemplatePricingCard"
import LineStickyButton from "@/components/shared/LineStickyButton"
import { JsonLd } from "@/components/seo/JsonLd"

interface TemplatePageProps {
  params: Promise<{ category: string; slug: string }>
}

/**
 * 🛠️ 1. Static Generation
 */
export async function generateStaticParams() {
  const templates = await getAllTemplates()
  return templates.map((t) => ({
    template: "templates",
    category: t.category.toLowerCase(),
    slug: t.slug.toLowerCase(),
  }))
}

/**
 * 🔍 2. Metadata Strategy
 */
export async function generateMetadata({ params }: TemplatePageProps) {
  const { slug } = await params
  const data = await getTemplateBySlug(slug)
  if (!data) return { title: "Template Not Found" }

  return {
    title: `${data.name} | Premium Web Architecture by ${siteConfig.expert}`,
    description: data.description,
    alternates: {
      canonical: `${siteConfig.url}/templates/${data.category.toLowerCase()}/${slug}`,
    },
  }
}

/**
 * 🚀 3. Main Detail Page Component
 */
export default async function TemplateDetailPage({
  params,
}: TemplatePageProps) {
  const { category, slug } = await params
  const data = await getTemplateBySlug(slug)

  if (!data || data.category.toLowerCase() !== category.toLowerCase()) {
    notFound()
  }

  const mdxComponents = {
    ...useMDXComponents({}),
    TemplatePricingCard,
    WorkProcess,
    ImpactStats,
    SpeedDemon,
    ShieldCheck,
    Bell,
    SalesHook: ({ children }: { children: React.ReactNode }) => (
      <div className="group relative my-12 overflow-hidden rounded-[2.5rem] border border-emerald-500/20 bg-emerald-500/[0.03] p-8 transition-all hover:bg-emerald-500/[0.05] md:p-12">
        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <span className="font-prompt text-[10px] font-black tracking-[0.3em] text-emerald-500 uppercase italic">
              Specialist Strategy
            </span>
          </div>
          <div className="font-anuphan text-lg leading-relaxed font-medium text-slate-300 md:text-xl">
            {children}
          </div>
        </div>
      </div>
    ),
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50 antialiased selection:bg-emerald-500/20">
      <JsonLd
        type="Product"
        data={{
          name: data.name,
          description: data.description,
          image: data.image,
          offers: {
            "@type": "Offer",
            price: data.salePrice || data.price,
            priceCurrency: "THB",
          },
        }}
      />

      {/* 🌌 Background Layer */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.02]" />

      <TemplateNavbar />

      <main className="relative z-10 flex-1">
        <TemplateHero
          title={data.name.toUpperCase()}
          subtitle={data.description}
          image={data.image}
          category={data.category}
          themeColor={data.themeColor || "emerald"}
        />

        {/* 🛠️ [LAYOUT FIXED]: จำกัดความกว้างสูงสุดและจัดการ Grid ให้สมดุล */}
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* 📝 Content Area (8/12) */}
            <article className="space-y-20 overflow-hidden lg:col-span-8">
              <div className="prose prose-invert prose-emerald prose-headings:font-prompt prose-p:font-anuphan prose-p:text-lg prose-p:leading-relaxed prose-li:font-anuphan prose-li:text-lg max-w-full">
                <MDXRemote source={data.content} components={mdxComponents} />
              </div>

              {/* Live Preview Interface */}
              <section id="preview" className="scroll-mt-32 space-y-10">
                <div className="border-l-[6px] border-emerald-500 pl-6">
                  <h3 className="font-prompt text-3xl font-black tracking-tighter text-white uppercase italic md:text-5xl">
                    Live Preview
                  </h3>
                </div>
                <Suspense
                  fallback={
                    <div className="h-[500px] w-full animate-pulse rounded-[2.5rem] bg-white/5" />
                  }
                >
                  <DevicePreview desktopSrc={data.image} title={data.name} />
                </Suspense>
              </section>
            </article>

            {/* 💰 Sidebar (4/12) - ปรับ Sticky Behavior ให้ไม่ยืดล้น */}
            <aside className="h-fit space-y-8 lg:sticky lg:top-28 lg:col-span-4">
              <TemplatePricingCard
                title={data.name}
                price={data.price}
                salePrice={data.salePrice}
                features={data.features || []}
                themeColor={data.themeColor}
              />

              {/* Trust Infrastructure Card */}
              <div className="rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 text-center backdrop-blur-md">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                    <ShieldCheck size={20} />
                  </div>
                </div>
                <p className="font-anuphan text-sm leading-relaxed font-bold text-slate-400 italic">
                  สถาปัตยกรรมนี้ผ่านการ Audit โดย{" "}
                  <span className="text-white">{siteConfig.expert}</span>
                  <br />
                  Performance Specialist Standard
                </p>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <LineStickyButton />

      <footer className="mt-24 border-t border-white/5 bg-slate-950 py-12 text-center opacity-30">
        <p className="font-prompt text-[9px] font-black tracking-[0.6em] text-slate-500 uppercase italic">
          Managed by {siteConfig.expert} v2026 — Expert Authority
        </p>
      </footer>
    </div>
  )
}
```
---

### File: app/(main)/blog/[slug]/page.tsx
```typescript
/** @format */

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"

// 🛠️ Icons Essentials
import {
  ArrowLeft,
  Calendar,
  Share2,
  Sparkles,
  MessageCircle,
  ShieldCheck,
} from "lucide-react"

// 📦 Specialist Data & Config
import { getAllPosts, getPostBySlug } from "@/lib/blog"
import { siteConfig } from "@/constants/site-config"
import { useMDXComponents } from "@/mdx-components"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { JsonLd } from "@/components/seo/JsonLd"

/**
 * 🎨 Enhanced MDX Components Mapping
 * ปรับจูนให้หน้าอ่านบทความมีความ "พรีเมียม" และแก้ปัญหา TypeScript Error
 */
const mdxComponents = {
  ...useMDXComponents({}),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <figure className="my-16 space-y-4 text-center">
      <div className="relative aspect-video w-full overflow-hidden rounded-[3rem] border border-slate-100 shadow-2xl">
        <Image
          // ✅ [FIXED]: ทำการ Cast Type เป็น string เพื่อป้องกัน TS2322 (Type 'Blob' mismatch)
          src={(props.src as string) || "/images/og-image.png"}
          fill
          className="object-cover"
          alt={props.alt || "AEMDEVWEB Insight"}
          loading="lazy"
        />
      </div>
      {props.alt && (
        <figcaption className="font-anuphan text-sm font-bold text-slate-400 italic">
          {props.alt}
        </figcaption>
      )}
    </figure>
  ),
  h2: (props: any) => (
    <h2
      className="font-prompt mt-24 mb-10 border-l-8 border-emerald-500 pl-6 text-4xl leading-none font-black tracking-tighter text-slate-900 uppercase italic"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="font-prompt mt-16 mb-6 text-2xl font-black tracking-tight text-slate-800 uppercase italic"
      {...props}
    />
  ),
  p: (props: any) => (
    <p
      className="font-anuphan mb-10 text-xl leading-[1.8] font-medium text-slate-600"
      {...props}
    />
  ),
  li: (props: any) => (
    <li
      className="font-anuphan mb-4 list-inside list-disc text-xl font-medium text-slate-600 marker:text-emerald-500"
      {...props}
    />
  ),
  CallToAction: ({
    title,
    description,
    url,
  }: {
    title: string
    description: string
    url?: string
  }) => (
    <div className="my-24 rounded-[3.5rem] border-2 border-dashed border-emerald-500/30 bg-emerald-50/10 p-12 text-center shadow-2xl shadow-emerald-500/5 transition-transform duration-500 hover:scale-[1.01] md:p-20">
      <Badge className="mb-6 bg-emerald-500 font-black text-slate-950 italic">
        SPECIALIST OFFER
      </Badge>
      <h3 className="font-prompt mb-6 text-3xl leading-tight font-black text-slate-900 uppercase italic md:text-5xl">
        {title}
      </h3>
      <p className="font-anuphan mx-auto mb-10 max-w-2xl text-lg font-bold text-slate-500 md:text-xl">
        {description}
      </p>
      <Button
        asChild
        className="font-prompt h-16 rounded-2xl bg-slate-950 px-12 font-black tracking-widest text-white uppercase shadow-xl transition-all hover:bg-emerald-500 hover:text-slate-950"
      >
        <Link href={url || "/contact"}>ปรึกษานายเอ็มโดยตรง</Link>
      </Button>
    </div>
  ),
}

interface Props {
  params: Promise<{ slug: string }>
}

/**
 * 🛠️ Static Generation Logic
 */
export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

/**
 * 🔍 Metadata Specialist Strategy
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: `ไม่พบบทความ | ${siteConfig.shortName}` }
  return {
    title: `${post.title} | Knowledge Hub`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `${siteConfig.url}/blog/${slug}`,
      images: [{ url: post.thumbnail || siteConfig.ogImage }],
      authors: [siteConfig.expert],
    },
  }
}

/**
 * 🚀 Blog Post Main Engine
 */
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return notFound()

  const formattedDate = new Date(post.date).toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <article className="relative min-h-screen bg-white pt-32 pb-24 antialiased selection:bg-emerald-500/20">
      <JsonLd
        type="Article"
        data={{
          headline: post.title,
          description: post.excerpt,
          image: post.thumbnail,
          datePublished: post.date,
          author: {
            "@type": "Person",
            name: siteConfig.expert,
            url: siteConfig.url,
          },
        }}
      />

      {/* 🌌 Subtle Background Infrastructure */}
      <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.02]" />

      <div className="container mx-auto max-w-4xl px-6">
        <nav className="mb-16">
          <Link
            href="/blog"
            className="group inline-flex items-center text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase transition-all hover:text-emerald-500"
          >
            <ArrowLeft className="mr-3 h-4 w-4 transition-transform group-hover:-translate-x-2" />
            Back to Library
          </Link>
        </nav>

        <header className="mb-20 space-y-10">
          <div className="flex flex-wrap items-center gap-4">
            {(post.tags || []).map((tag) => (
              <Badge
                key={tag}
                className="rounded-full border-slate-200 bg-slate-50 px-5 py-1.5 text-[10px] font-black tracking-widest text-slate-500 uppercase"
              >
                {tag}
              </Badge>
            ))}
            <div className="flex items-center gap-4 text-[10px] font-black text-slate-300 uppercase italic">
              <Calendar className="h-4 w-4 text-emerald-500" /> {formattedDate}
            </div>
          </div>

          <h1 className="font-prompt text-5xl leading-[1] font-black tracking-tighter text-slate-900 uppercase italic md:text-8xl">
            {post.title}
          </h1>

          <p className="font-anuphan border-l-4 border-slate-100 pl-6 text-2xl leading-relaxed font-bold text-slate-400 italic">
            {post.excerpt}
          </p>
        </header>

        <div className="relative mb-24 aspect-[21/10] w-full overflow-hidden rounded-[4rem] shadow-2xl shadow-slate-200/50">
          <Image
            src={post.thumbnail || "/images/og-image.png"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* ✍️ Core Content Area (MDX) */}
        <div className="prose prose-slate prose-xl prose-headings:font-prompt prose-p:font-anuphan prose-p:leading-[1.9] prose-strong:text-slate-950 prose-a:text-emerald-600 max-w-none">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

        {/* 👤 Author Section */}
        <div className="mt-32 flex flex-col items-center justify-between gap-10 rounded-[3.5rem] border border-slate-100 bg-slate-50/80 p-12 md:flex-row">
          <div className="flex items-center gap-8">
            <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-[2rem] bg-slate-950 shadow-xl">
              <span className="font-prompt text-4xl font-black text-emerald-500 italic">
                {siteConfig.expert.charAt(0)}
              </span>
            </div>
            <div className="space-y-1">
              <div className="font-prompt text-2xl leading-none font-black text-slate-900 uppercase italic">
                {siteConfig.expert}
              </div>
              <div className="font-anuphan text-xs font-black tracking-[0.2em] text-emerald-600 uppercase">
                Technical SEO Specialist
              </div>
            </div>
          </div>
          <Button
            variant="outline"
            className="h-14 rounded-2xl border-slate-200 px-8 text-[10px] font-black tracking-widest uppercase transition-all hover:bg-slate-900 hover:text-white"
          >
            <Share2 className="mr-2 h-4 w-4" /> Share this Insight
          </Button>
        </div>

        {/* 🎯 High-Conversion CTA Section */}
        <div className="shadow-3xl relative mt-24 overflow-hidden rounded-[4.5rem] bg-slate-950 p-12 text-center text-white md:p-24">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <ShieldCheck size={250} />
          </div>
          <Sparkles className="mx-auto mb-10 h-16 w-16 animate-pulse text-emerald-500" />
          <h3 className="font-prompt mb-8 text-5xl leading-none font-black tracking-tighter uppercase italic md:text-7xl">
            Ready to <br />{" "}
            <span className="text-emerald-500 underline decoration-emerald-500/30 underline-offset-8">
              Scale
            </span>{" "}
            up?
          </h3>
          <p className="font-anuphan mx-auto mb-12 max-w-2xl text-xl font-medium text-slate-400">
            หากคุณต้องการระบบที่ "นิ่ง" และ "แรง" แบบสถาปัตยกรรมชิ้นนี้
            ทักมาคุยรายละเอียดโปรเจกต์กับผมโดยตรงได้ทันทีครับ
          </p>
          <Button
            asChild
            className="h-20 transform rounded-[2.5rem] bg-emerald-500 px-16 text-slate-950 shadow-2xl shadow-emerald-500/20 transition-all hover:scale-105 hover:bg-white active:scale-95"
          >
            <Link
              href="/contact"
              className="font-prompt text-lg font-black tracking-widest uppercase italic"
            >
              <MessageCircle className="mr-3 h-6 w-6 fill-current" /> Let's Talk
              Project
            </Link>
          </Button>
        </div>
      </div>
    </article>
  )
}
```
---

### File: constants/site-config.ts
```typescript
/** @format */

import type { Metadata } from "next"

/**
 * AEMDEVWEB Identity Configuration (2026 Edition)
 * Core brand identity, SEO strategy, and technical benchmarks.
 * Path: constants/site-config.ts
 * Identity Constraint: Specialist name "นายเอ็มซ่ามากส์" is strictly enforced.
 */

export const siteConfig = {
  // Brand Identity
  name: "AEMDEVWEB",
  nameTH: "เอ็ม-เดฟ-เว็บ",
  shortName: "AEM",
  companyName: "AEMDEVWEB Co., Ltd.",
  expert: "นายเอ็มซ่ามากส์", // Enforced Specialist Identity
  role: "Technical SEO Consultant & Next.js Developer for SME",

  // USP & Positioning
  title: "AEMDEVWEB 2026: High-Performance Next.js & SEO Specialist",
  slogan: "Speed Launch & High Performance",
  description:
    "Specialized Next.js development with rank-first Technical SEO infrastructure by นายเอ็มซ่ามากส์. Optimized for Google AI Search (SGE) and sustainable SME growth.",

  // URLs & Infrastructure
  url: "https://www.aemdevweb.com",
  ogImage: "https://www.aemdevweb.com/og-image.png",
  email: "me@aemdevweb.com",

  // CTA Settings
  cta: {
    main: "Consult Project",
    secondary: "View All Services",
    pricing: "Check Pricing Plans",
  },

  // Contact Infrastructure
  contact: {
    email: "me@aemdevweb.com",
    lineId: "@127cnhtn",
    facebook: "https://facebook.com/aemdevweb",
    linkedin: "https://www.linkedin.com/in/alongkorl-aemdevweb",
  },

  /**
   * Links Infrastructure
   * Standardized links to resolve TS2339 errors across components.
   */
  links: {
    line: "https://line.me/ti/p/@aemdevweb",
    lineId: "@aemdevweb",
    facebook: "https://facebook.com/aemdevweb",
    linkedin: "https://www.linkedin.com/in/alongkorl-aemdevweb",
  },

  // Technical Standards (2026 Guarantees)
  standards: {
    performance: 100, // Google PageSpeed Insights Goal
    lcp: 1.2, // Largest Contentful Paint Target (Seconds)
    security: "Enterprise SSL (HTTPS)",
    aiReadiness: "Schema Markup & JSON-LD Embedded",
  },

  // SEO Strategy: Optimized Keyword Groups (Standardized for 2026)
  keywords: {
    list: [
      "รับทำ SEO SME",
      "รับทำเว็บไซต์ประสิทธิภาพสูง",
      "วางระบบ SEO มาตรฐานสากล",
      "รับทำเว็บไซต์ Next.js",
      "SME Business Speed Launch",
      "ที่ปรึกษา Technical SEO รายเดือน",
      "รับทำเว็บไซต์โรงงานอุตสาหกรรม",
      "รับทำเว็บไซต์ธุรกิจส่งออก",
      "นายเอ็มซ่ามากส์",
      "AEMDEVWEB",
    ],
    all: "รับทำ SEO SME, รับทำเว็บไซต์ประสิทธิภาพสูง, วางระบบ SEO มาตรฐานสากล, รับทำเว็บไซต์ Next.js, SME Business Speed Launch, AEMDEVWEB, ที่ปรึกษา Technical SEO รายเดือน, นายเอ็มซ่ามากส์",
    
    core: [
      "รับทำ SEO SME",
      "รับทำเว็บไซต์ประสิทธิภาพสูง",
      "วางระบบ SEO มาตรฐานสากล",
      "รับทำเว็บไซต์ Next.js",
    ],
    
    // Industry-specific clusters for Topical Authority
    segments: {
      industrial: ["เว็บไซต์โรงงานอุตสาหกรรม", "ระบบ E-Catalog สินค้า", "Industrial Web Architecture"],
      contractor: ["เว็บไซต์ธุรกิจรับเหมา", "มาตรฐานวิศวกรรมนิติบุคคล", "Engineering SEO Strategy"],
      export: ["เว็บไซต์ธุรกิจส่งออก", "Global SEO Infrastructure", "Export Business Web Strategy"],
      tourism: ["ระบบจองทัวร์มาตรฐานสูง", "Corporate Outing Website", "B2B Tourism SEO"],
      agriculture: ["Smart Agri-Tech Web Solution", "เว็บไซต์เกษตรกรรมส่งออก", "GAP Standard Digitalization"],
    },

    tech: [
      "SME Business Speed Launch",
      "Technical SEO Infrastructure",
      "Web Performance Optimization",
      "Google AI Search Optimization",
      "ที่ปรึกษา Technical SEO รายเดือน",
    ],
    brand: ["AEMDEVWEB", "เอ็มเดฟเว็บ", "นายเอ็มซ่ามากส์"],
  },
}

/**
 * Metadata Constructor
 * Generates dynamic metadata for Next.js App Router (SEO Optimized)
 */
export function constructMetadata({
  title = siteConfig.title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title: {
      default: `${title} | ${siteConfig.slogan}`,
      template: `%s | ${siteConfig.shortName}`,
    },
    description,
    authors: [{ name: siteConfig.expert, url: siteConfig.contact.linkedin }],
    creator: siteConfig.expert,
    publisher: siteConfig.companyName,
    keywords: siteConfig.keywords.list,
    openGraph: {
      type: "website",
      locale: "th_TH",
      url: siteConfig.url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${siteConfig.slogan}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: siteConfig.expert,
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
    other: {
      "fb:pages": "914706508399571",
    },
  }
}
```
---

### File: constants/services-data.ts
```typescript
/** @format */

import {
  Layout,
  Store,
  Building2,
  Factory,
  Settings2,
  TrendingUp,
} from "lucide-react"

/**
 * Service Configuration Repository - AEMDEVWEB (2026 Edition)
 * Centralized definition for business services, categories, and pricing tiers.
 * Path: constants/services-data.ts
 */

/* -------------------------------------------------------------------------- */
/* Type Definitions (Strict Mode)                                             */
/* -------------------------------------------------------------------------- */

export type ServiceCategory =
  | "Starter"
  | "SME"
  | "Corporate"
  | "Industrial"
  | "SEO_Technical"
  | "SEO_Organic"

export type ThemeColor =
  | "slate"
  | "emerald"
  | "blue"
  | "indigo"
  | "amber"
  | "rose"

export interface ServiceItem {
  id: string
  title: string
  description: string
  price: string
  priceValue: number
  features: string[]
  promotion?: string
  slug: string
  themeColor: ThemeColor
  category: ServiceCategory
  highlight?: boolean
}

export interface CategoryInfo {
  slug: string
  name: string
  themeColor: ThemeColor
  description: string
  icon: React.ElementType
}

/* -------------------------------------------------------------------------- */
/* Category Metadata - Optimized for SME & Industrial Logic                   */
/* -------------------------------------------------------------------------- */

export const categoriesData: CategoryInfo[] = [
  {
    slug: "starter",
    name: "Sale Page (หน้าเดียวจบ)",
    themeColor: "slate",
    description: "เน้นการปิดการขายและรองรับการยิงโฆษณาด้วยระบบที่โหลดไวที่สุด",
    icon: Layout,
  },
  {
    slug: "sme",
    name: "เว็บไซต์ธุรกิจ SME",
    themeColor: "emerald",
    description:
      "ยกระดับความน่าเชื่อถือด้วยเว็บไซต์มาตรฐานสากล พร้อมระบบ Technical SEO",
    icon: Store,
  },
  {
    slug: "corporate",
    name: "เว็บไซต์องค์กร (Corporate)",
    themeColor: "blue",
    description:
      "เน้นภาพลักษณ์ระดับ B2B ความปลอดภัยสูง และความเสถียรของระบบในระยะยาว",
    icon: Building2,
  },
  {
    slug: "industrial",
    name: "ระบบแคตตาล็อกโรงงาน",
    themeColor: "indigo",
    description:
      "จัดการข้อมูลสินค้าอุตสาหกรรมจำนวนมาก ค้นหาง่าย และรองรับการทำใบเสนอราคา",
    icon: Factory,
  },
  {
    slug: "seo-technical",
    name: "ปรับแต่ง Technical SEO",
    themeColor: "amber",
    description:
      "แก้ไขโครงสร้างหลังบ้านเพื่อให้ Google ค้นหาและจัดอันดับเว็บไซต์ได้ง่ายขึ้น",
    icon: Settings2,
  },
  {
    slug: "seo-organic",
    name: "วางกลยุทธ์ SEO รายเดือน",
    themeColor: "rose",
    description:
      "เพิ่มยอดเข้าชมจากธรรมชาติด้วยคีย์เวิร์ดที่สร้างรายได้จริงให้กับธุรกิจ",
    icon: TrendingUp,
  },
]

/* -------------------------------------------------------------------------- */
/* Service Definitions - Performance & Business Focused                       */
/* -------------------------------------------------------------------------- */

export const services: ServiceItem[] = [
  {
    id: "starter-one-page",
    title: "Sale Page: เน้นการปิดการขาย (High Conversion)",
    slug: "starter-one-page",
    category: "Starter",
    description:
      "หน้าขายของที่ออกแบบตามหลักจิตวิทยาการขาย โหลดไวใน 1 วินาทีเพื่อไม่ให้พลาดทุกโอกาส",
    price: "เริ่มต้น 5,900.-",
    priceValue: 5900,
    features: [
      "Ultra Fast Loading: ความเร็วสูงพิเศษเพื่อลดอัตราการกดออก",
      "Mobile Optimized: แสดงผลสมบูรณ์แบบบนสมาร์ทโฟนทุกรุ่น",
      "Direct Call-to-Action: จัดวางปุ่มติดต่อให้ใช้งานง่ายที่สุด",
      "Standard SSL: ระบบความปลอดภัยขั้นพื้นฐานตามมาตรฐานสากล",
    ],
    themeColor: "slate",
  },
  {
    id: "sme-speed-launch",
    title: "SME Pro: เว็บไซต์ธุรกิจครบวงจร",
    slug: "sme-speed-launch",
    category: "SME",
    description:
      "เว็บไซต์มาตรฐานธุรกิจ 5-8 หน้า ที่ดีไซน์และโครงสร้างถูกออกแบบมาเพื่อ Google โดยเฉพาะ",
    price: "เริ่มต้น 12,900.-",
    priceValue: 12900,
    highlight: true,
    features: [
      "PageSpeed 100/100: การันตีคะแนนความเร็วในระดับสูงสุด",
      "Unique UI Design: งานดีไซน์เฉพาะตัว ไม่ใช้เทมเพลตซ้ำใคร",
      "Search Engine Ready: โครงสร้างรองรับ Google AI ยุคใหม่",
      "Easy CMS: ระบบจัดการหลังบ้านที่เจ้าของธุรกิจใช้งานเองได้ทันที",
    ],
    themeColor: "emerald",
  },
  {
    id: "corporate-trust",
    title: "Corporate Identity: เว็บไซต์องค์กรมาตรฐานสากล",
    slug: "corporate-trust",
    category: "Corporate",
    description:
      "สร้างความเชื่อมั่นให้คู่ค้าด้วยระบบที่นิ่งและปลอดภัย รองรับการขยายตัวของธุรกิจองค์กร",
    price: "เริ่มต้น 25,900.-",
    priceValue: 25900,
    features: [
      "Advanced Security: ระบบป้องกันข้อมูลและความปลอดภัยระดับสูง",
      "Multi-Language Support: รองรับการใช้งานหลายภาษาอย่างสมบูรณ์",
      "Investor Relations: พื้นที่เฉพาะสำหรับข่าวสารและข้อมูลองค์กร",
      "Professional Maintenance: บริการดูแลทางเทคนิคต่อเนื่องรายปี",
    ],
    themeColor: "blue",
  },
  {
    id: "industrial-catalog",
    title: "Industrial E-Catalog: ระบบจัดการสินค้าอุตสาหกรรม",
    slug: "industrial-catalog",
    category: "Industrial",
    description:
      "เปลี่ยนคลังสินค้าให้เป็นระบบออนไลน์ ค้นหาสเปกได้ละเอียด และขอใบเสนอราคาได้รวดเร็ว",
    price: "เริ่มต้น 39,900.-",
    priceValue: 39900,
    features: [
      "Massive Item Support: รองรับสินค้าได้มากกว่า 10,000 รายการ",
      "Technical Filters: ระบบกรองสินค้าเชิงลึกตามคุณสมบัติเฉพาะ",
      "RFQ System: ระบบขอใบเสนอราคาอัตโนมัติส่งตรงถึงฝ่ายขาย",
      "Scalable Infrastructure: รากฐานระบบที่รองรับการใช้งานหนัก",
    ],
    themeColor: "indigo",
  },
  {
    id: "seo-technical-audit",
    title: "Technical SEO Infrastructure & Audit",
    slug: "seo-technical",
    category: "SEO_Technical",
    description:
      "ตรวจสุขภาพและแก้ไข 'จุดบอด' หลังบ้านที่ขัดขวางไม่ให้เว็บของคุณติดอันดับแรก",
    price: "เริ่มต้น 4,900.-",
    priceValue: 4900,
    features: [
      "Schema Markup: ติดตั้งโค้ดระบุประเภทธุรกิจให้บอทอ่านง่าย",
      "Core Web Vitals Fix: ปรับจูนความเร็วให้ผ่านเกณฑ์เขียวทุกตัว",
      "Index Optimization: แก้ปัญหาหน้าเว็บไม่ปรากฏบนผลการค้นหา",
      "Tracking Setup: ตั้งค่า Search Console และ GA4 แบบมืออาชีพ",
    ],
    promotion: "ส่วนลดพิเศษ 50% เมื่อทำพร้อมการจ้างทำเว็บไซต์ใหม่",
    themeColor: "amber",
  },
  {
    id: "seo-organic-growth",
    title: "Monthly SEO: วางกลยุทธ์เติบโตระยะยาว",
    slug: "seo-organic",
    category: "SEO_Organic",
    description:
      "สร้างฐานลูกค้าจาก Google โดยไม่ต้องพึ่งพาค่าโฆษณาเพียงอย่างเดียวด้วยคีย์เวิร์ดที่ทำเงิน",
    price: "เริ่มต้น 8,900.- / เดือน",
    priceValue: 8900,
    features: [
      "Commercial Keyword Focus: คัดเลือกคำที่สร้างยอดขายได้จริง",
      "Authority Content: ผลิตคอนเทนต์คุณภาพเพื่อสร้างความน่าเชื่อถือ",
      "Continuous Optimization: ปรับจูนหน้าเว็บตามอัลกอริทึมทุกเดือน",
      "Performance Report: รายงานสถิติและอันดับที่วัดผลได้ชัดเจน",
    ],
    promotion: "แนะนำทำต่อเนื่องอย่างน้อย 3 เดือน เพื่อผลลัพธ์ที่ยั่งยืน",
    themeColor: "rose",
  },
]
```
---

### File: constants/navigation.ts
```typescript
/** @format */

/**
 * Navigation System Configuration - AEMDEVWEB Professional Edition
 * Focus: Business Growth, Trustworthiness, and User-Centric Structure.
 * Adjusted for non-technical stakeholders (SME & Industrial Owners).
 */

/* -------------------------------------------------------------------------- */
/* Type Definitions (Strict Mode)                                             */
/* -------------------------------------------------------------------------- */

export interface NavItem {
  name: string
  href: string
  description?: string
  badge?: "New" | "Hot" | "Sale" | "Special" | "Beta" | string
  external?: boolean
  disabled?: boolean
}

export interface FooterNavigation {
  services: NavItem[]
  company: NavItem[]
  support: NavItem[]
  legal: NavItem[]
}

export interface NavigationConfig {
  main: NavItem[]
  footer: FooterNavigation
}

/* -------------------------------------------------------------------------- */
/* Navigation Configuration Repository                                        */
/* -------------------------------------------------------------------------- */

export const navigation: NavigationConfig = {
  /* -------------------------- Main Navbar Menu ---------------------------- */
  main: [
    {
      name: "หน้าแรก",
      href: "/",
      description: "สร้างรากฐานเว็บไซต์ที่เน้นความไวและเพิ่มโอกาสปิดการขาย",
    },
    {
      name: "บริการและราคา",
      href: "/services",
      description: "เลือกแพ็กเกจที่เหมาะกับธุรกิจ SME และโรงงานอุตสาหกรรม",
    },
    {
      name: "เทมเพลตเว็บไซต์",
      href: "/templates",
      badge: "New",
      description: "โครงสร้างเว็บไซต์กึ่งสำเร็จรูปที่ปรับจูนความเร็วมาเพื่อคุณ",
    },
    {
      name: "ผลงานของเรา",
      href: "/case-studies",
      description: "พิสูจน์ผลลัพธ์จากธุรกิจที่ประสบความสำเร็จจริง",
    },
    {
      name: "ความรู้ธุรกิจ",
      href: "/blog",
      description:
        "เทคนิคการทำเว็บและ SEO เพื่อสร้างความได้เปรียบทางการแข่งขัน",
    },
    {
      name: "ปรึกษาโปรเจกต์",
      href: "/contact",
      description: "พูดคุยกับผู้เชี่ยวชาญโดยตรงเพื่อวางแผนระบบของคุณ",
    },
  ],

  /* --------------------------- Footer Menu Area --------------------------- */
  footer: {
    services: [
      {
        name: "Sale Page Strategy",
        href: "/services/starter-one-page",
        badge: "Hot",
        description: "เน้นปิดการขายไวด้วยระบบที่โหลดเร็วที่สุด",
      },
      {
        name: "SME & Business Pro",
        href: "/services/sme-speed-launch",
        description: "ยกระดับความน่าเชื่อถือด้วยเว็บไซต์มาตรฐานสากล",
      },
      {
        name: "Industrial E-Catalog",
        href: "/services/industrial-catalog",
        description: "ระบบจัดการสินค้าอุตสาหกรรมที่ค้นหาง่ายและครบถ้วน",
      },
      {
        name: "Technical SEO Solution",
        href: "/services/seo-technical",
        description: "ปรับโครงสร้างหลังบ้านให้ Google หาคุณเจอได้ง่ายขึ้น",
      },
    ],

    company: [
      {
        name: "เกี่ยวกับ AEMDEVWEB",
        href: "/about",
      },
      {
        name: "ผลงานและความสำเร็จ",
        href: "/case-studies",
      },
      {
        name: "กรณีศึกษา Unlink-TH",
        href: "/blog/unlink-th-case-study",
        badge: "Special",
      },
      {
        name: "ร่วมงานกับเรา",
        href: "/careers",
        disabled: true,
      },
    ],

    support: [
      {
        name: "LINE Official Account",
        href: "https://lin.ee/SVMBEJ8",
        external: true,
      },
      {
        name: "ประเมินงบประมาณ",
        href: "/services#pricing",
      },
      {
        name: "ติดต่อสอบถาม",
        href: "/contact",
      },
    ],

    legal: [
      {
        name: "นโยบายความเป็นส่วนตัว",
        href: "/privacy",
      },
      {
        name: "เงื่อนไขการใช้บริการ",
        href: "/terms",
      },
    ],
  },
}

/* -------------------------------------------------------------------------- */
/* Helpers Export                                                             */
/* -------------------------------------------------------------------------- */

export const mainNav = navigation.main
export const {
  services: footerServicesNav,
  company: footerCompanyNav,
  support: footerSupportNav,
  legal: footerLegalNav,
} = navigation.footer

/* -------------------------------------------------------------------------- */
/* Optimized Keywords for 2026 Strategy                                       */
/* -------------------------------------------------------------------------- */

export const siteKeywords: string[] = [
  "AEMDEVWEB",
  "Technical SEO Specialist Thailand",
  "รับทำเว็บไซต์โรงงานอุตสาหกรรม",
  "รับทำเว็บไซต์ SME คุณภาพสูง",
  "สถาปัตยกรรมเว็บไซต์ความเร็วสูง",
  "เว็บ E-Catalog โรงงาน",
  "ที่ปรึกษาด้านการเพิ่มประสิทธิภาพเว็บไซต์",
]
```
---

### File: tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      /* 🚀 Global Shortcut */
      "@/*": ["*"],
      /* 📂 Feature Folders */
      "@/app/*": ["app/*"],
      "@/components/*": ["components/*"],
      "@/lib/*": ["lib/*"],
      "@/types/*": ["types/*"],
      "@/hooks/*": ["hooks/*"],
      "@/constants/*": ["constants/*"],
      /* 🛠️ Specialized Path: เข้าถึง Shared Services Components ได้ทันที */
      "@/services-components/*": ["app/(main)/services/components/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    "constants/**/*.ts",
    "config/**/*.ts",
    "content/**/*.ts",
    ".next/dev/types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}
```
---

### File: package.json
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
---

### File: types/index.ts
```typescript
/** @format */

/**
 * 🧬 Core System Types – AEMDEVWEB (v.2026)
 * ศูนย์รวม Interface และ Types สำหรับระบบสถาปัตยกรรมเว็บไซต์
 * ออกแบบมาเพื่อความเสถียรของระบบ (Type Safety) และรองรับการทำ SEO Specialist
 * Update: รองรับโครงสร้าง Keywords แบบ Complex Object และ Facebook ID
 */

/* -------------------------------------------------------------------------- */
/* 🌐 SITE & NAVIGATION                                                       */
/* -------------------------------------------------------------------------- */

export interface NavItem {
  name: string // ชื่อที่แสดงผล
  href: string // ลิงก์ปลายทาง
  title?: string // รองรับกรณีใช้ title แทน name
  disabled?: boolean
  external?: boolean
  badge?: "New" | "Hot" | "Sale" | "Special" | string
  description?: string
}

export interface FooterNavigation {
  services: NavItem[]
  company: NavItem[]
  support: NavItem[]
  legal: NavItem[]
}

export interface SiteConfig {
  name: string
  shortName: string
  nameTH: string
  companyName: string
  title: string
  slogan: string
  expert: string
  role: string
  description: string
  url: string
  ogImage: string
  email: string

  // 🛠️ Updated Keywords Structure: รองรับการทำ Metadata แบบเจาะจง
  keywords: {
    list: string[] // สำหรับ Metadata Array
    all: string // สำหรับ Legacy String
    core: string[]
    tech: string[]
    brand: string[]
  }

  links: {
    line: string
    lineId: string
    facebook?: string
    linkedin?: string
    github?: string
    messenger?: string
  }

  contact: {
    // ✅ Semantic Contact สำหรับ SEO และเครื่องมือติดต่อ
    email: string
    lineId: string
    facebook?: string
    linkedin?: string
    phone?: string
  }

  cta: {
    main: string
    secondary: string
    pricing: string
  }

  standards: {
    // ✅ Technical Standards ประจำปี 2026
    performance: number
    lcp: number
    security: string
    aiReadiness: string
  }
}

/* -------------------------------------------------------------------------- */
/* 📄 BLOG & CONTENT (MDX Engine)                                             */
/* -------------------------------------------------------------------------- */

export interface BlogMetadata {
  title: string
  description: string
  date: string
  category: string
  coverImage: string
  author: string
  excerpt?: string
  readingTime?: string
  tags?: string[]
}

export interface BlogPost extends BlogMetadata {
  slug: string
  content?: string | unknown
}

/* -------------------------------------------------------------------------- */
/* 💼 SERVICES & SOLUTIONS                                                   */
/* -------------------------------------------------------------------------- */

export type ServiceIconName =
  | "Rocket"
  | "ShieldCheck"
  | "Code2"
  | "Gauge"
  | "Zap"
  | "Layout"
  | "TrendingUp"

export interface ServiceItem {
  id: string
  title: string
  slug: string
  description: string
  longDescription?: string
  icon: ServiceIconName
  features: string[]
  priceDisplay?: string
  priceRange?: string
  badge?: string
  mockups?: {
    desktop: string
    mobile: string
  }
}

/* -------------------------------------------------------------------------- */
/* 🏆 CASE STUDIES & SHOWCASE                                                */
/* -------------------------------------------------------------------------- */

export interface ShowcaseStats {
  label: string
  value: string
}

export interface CaseStudyItem {
  id: string
  slug: string
  title: string
  client: string
  industry: string
  category: string
  description: string
  thumbnail: string
  results: ShowcaseStats[]
  keyFeatures?: string[]
  clientQuote?: {
    text: string
    author: string
    role?: string
  }
}

/* -------------------------------------------------------------------------- */
/* 🎨 TEMPLATE ENGINE                                                        */
/* -------------------------------------------------------------------------- */

export type TemplateCategory =
  | "SalePage"
  | "Corporate"
  | "ECommerce"
  | "Service"
  | "Industrial"
  | string

export interface TemplateItem {
  id: string
  slug: string
  title: string
  description: string
  category: TemplateCategory
  image: string
  features: string[]
  demoUrl?: string
  price?: number
  salePrice?: number
  isPopular?: boolean
  isNew?: boolean
  themeColor?: string
  salesData?: {
    soldCount: number
    rating: number
  }
  mockups?: {
    desktop?: string
    mobile?: string
  }
}

/* -------------------------------------------------------------------------- */
/* 📩 LEAD & CONVERSION                                                      */
/* -------------------------------------------------------------------------- */

export interface LeadFormSubmission {
  name: string
  lineId: string
  businessType: string
  budget: string
  message?: string
  source?: string
  timestamp: string
}

/* -------------------------------------------------------------------------- */
/* ⭐ SOCIAL PROOF                                                           */
/* -------------------------------------------------------------------------- */

export interface TestimonialItem {
  id: string | number
  content: string
  author: string
  role: string
  company?: string
  rating: number
  image?: string
}
```
---

### File: next.config.mjs
```javascript
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
---

### File: components.json
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "ui": "@/components/ui",
    "utils": "@/lib/utils",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {}
}
```
---

### File: lib/blog.ts
```typescript
/** @format */

import fs from "fs"
import path from "path"
import matter from "gray-matter"

/**
 * 🧬 Blog Interfaces
 * สถาปัตยกรรมข้อมูลสำหรับบทความสไตล์ Specialist
 */
export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  thumbnail: string
  tags: string[]
  content: string
}

// 📂 กำหนดเส้นทางไปยังโฟลเดอร์เก็บ MDX ของ Blog
const BLOG_DIR = path.join(process.cwd(), "content/blog")

/**
 * 🛠️ getAllPosts
 * กวาดข้อมูลบทความทั้งหมดจาก content/blog เพื่อส่งให้หน้า Archive Page
 */
export async function getAllPosts(): Promise<Post[]> {
  // 🛡️ Guard Clause: ตรวจสอบความมีอยู่ของโฟลเดอร์
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR)

  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(BLOG_DIR, file)
      const fileContent = fs.readFileSync(filePath, "utf8")
      const { data, content } = matter(fileContent)

      return {
        slug: file.replace(".mdx", ""),
        title: data.title || "Untitled Post",
        date: data.date || "",
        excerpt: data.excerpt || "",
        thumbnail: data.thumbnail || "/images/og-image.png",
        tags: data.tags || [],
        content: content,
      } as Post
    })
    // 📅 จัดเรียงตามวันที่ (ล่าสุดขึ้นก่อน) เพื่อ Conversion ที่ดีกว่า
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

/**
 * 🔍 getPostBySlug
 * ดึงข้อมูลบทความรายตัวสำหรับหน้า [slug]/page.tsx
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) return null

  const fileContent = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContent)

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    thumbnail: data.thumbnail,
    tags: data.tags,
    content,
  } as Post
}
```
---

### File: lib/template.ts
```typescript
/** @format */

import fs from "fs"
import path from "path"
import matter from "gray-matter"

/**
 * 📝 Template Interfaces
 */
export interface TemplateMeta {
  id: string
  name: string
  slug: string
  category: string
  price: number
  salePrice?: number
  isPopular?: boolean
  image: string
  description: string
  themeColor?: "emerald" | "blue" | "rose" | "amber" | "purple"
  features?: string[]
  tags?: string[]
}

export interface TemplateData extends TemplateMeta {
  content: string // MDX Content
}

// 📂 กำหนดเส้นทางไปยังแหล่งเก็บข้อมูล (Content Source)
const TEMPLATE_CONTENT_PATH = path.join(process.cwd(), "content/template")

/**
 * 🛠️ 1. getAllTemplates
 * กวาดหาเทมเพลตทั้งหมดพร้อมระบบตรวจสอบความถูกต้องของข้อมูล (Validation)
 */
export async function getAllTemplates(): Promise<TemplateMeta[]> {
  if (!fs.existsSync(TEMPLATE_CONTENT_PATH)) {
    console.warn("⚠️ [Specialist Warning]: Template content path not found.")
    return []
  }

  const allTemplates: TemplateMeta[] = []

  try {
    const categories = fs
      .readdirSync(TEMPLATE_CONTENT_PATH)
      .filter((f) =>
        fs.statSync(path.join(TEMPLATE_CONTENT_PATH, f)).isDirectory()
      )

    for (const category of categories) {
      const categoryPath = path.join(TEMPLATE_CONTENT_PATH, category)
      const slugs = fs
        .readdirSync(categoryPath)
        .filter((f) => fs.statSync(path.join(categoryPath, f)).isDirectory())

      for (const slug of slugs) {
        const metaPath = path.join(categoryPath, slug, "meta.json")

        if (fs.existsSync(metaPath)) {
          try {
            const fileContent = fs.readFileSync(metaPath, "utf8")
            const metaData = JSON.parse(fileContent)

            // ✅ [FIXED]: ป้องกัน Build Error โดยตรวจสอบว่ามี category และ slug ก่อนเรียก toLowerCase()
            const safeCategory = (
              metaData.category ||
              category ||
              "uncategorized"
            ).toLowerCase()
            const safeSlug = (metaData.slug || slug || "untitled").toLowerCase()

            allTemplates.push({
              ...metaData,
              id: metaData.id || `temp-${safeSlug}`, // Fallback ID
              slug: safeSlug,
              category: safeCategory,
              name: metaData.name || "Untitled Template",
              image: metaData.image || "/images/og-image.png",
              description: metaData.description || "",
              price: metaData.price || 0,
            })
          } catch (error) {
            console.error(`❌ Error parsing meta.json for ${slug}:`, error)
          }
        }
      }
    }
  } catch (globalError) {
    console.error("❌ Global File System Error:", globalError)
  }

  // จัดเรียงตามความนิยม
  return allTemplates.sort((a, b) => (b.isPopular ? 1 : -1))
}

/**
 * 🔍 2. getTemplateBySlug
 * ดึงข้อมูลเชิงลึกพร้อม Safe Path Resolve
 */
export async function getTemplateBySlug(
  slug: string
): Promise<TemplateData | null> {
  if (!slug) return null

  const templates = await getAllTemplates()
  const meta = templates.find((t) => t.slug === slug.toLowerCase())

  if (!meta) return null

  const mdxPath = path.join(
    TEMPLATE_CONTENT_PATH,
    meta.category,
    meta.slug,
    "index.mdx"
  )

  if (!fs.existsSync(mdxPath)) {
    return { ...meta, content: "" }
  }

  try {
    const fileContent = fs.readFileSync(mdxPath, "utf8")
    const { content } = matter(fileContent)
    return { ...meta, content: content || "" }
  } catch (error) {
    console.error(`❌ Error reading MDX for ${slug}:`, error)
    return { ...meta, content: "" }
  }
}

/**
 * 🏷️ 3. getAllCategories
 * รวมรายชื่อหมวดหมู่แบบ Unique พร้อม Safe Mapping
 */
export async function getAllCategories(): Promise<string[]> {
  const templates = await getAllTemplates()
  // ✅ กรองเฉพาะตัวที่มีค่าจริงก่อนประมวลผล
  return Array.from(
    new Set(
      templates
        .map((t) => (t.category ? t.category.toLowerCase() : ""))
        .filter((cat) => cat !== "")
    )
  )
}

/**
 * 🔗 4. getTemplatesByServiceCategory
 */
export async function getTemplatesByServiceCategory(
  serviceCategory: string
): Promise<TemplateMeta[]> {
  if (!serviceCategory) return []

  const allTemplates = await getAllTemplates()
  const searchCat = serviceCategory.toLowerCase()

  return allTemplates.filter((template) => {
    // ✅ Safe Access สำหรับหมวดหมู่และแท็ก
    const templateCat = (template.category || "").toLowerCase()
    const hasMatchingTag = template.tags?.some(
      (tag) => tag && tag.toLowerCase() === searchCat
    )

    return templateCat === searchCat || hasMatchingTag
  })
}
```
---

### File: .env
```text
```
---

## Summary
Architecture scan and context compilation completed successfully.
Focus: Privacy, Security, and AI-readiness.

Report generated by www.aemdevweb.com Internal Automation.
