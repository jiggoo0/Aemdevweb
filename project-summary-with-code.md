# 📑 Project Context Summary (Full Scan)

<!--
  Domain: www.unlink-th.com
  Canonical: https://www.unlink-th.com
  Generated: 2026-01-18 03:01:14
  Type: Full Context & Code Analysis
-->

_Generated on: **2026-01-18 03:01:14**_
> **Project:** www.unlink-th.com
> **URL:** https://www.unlink-th.com
> **Status:** Production-Ready Analysis | Full System Context | De-indexing Focus

## 🔴 1. Project Health & Deployment Readiness
✅ **READY FOR DEPLOY:** The project meets all production standards.

### 📍 Production Route Map
```text
```text
Route (app)                                 Size  First Load JS
┌ ○ /                                    16.6 kB         249 kB
├ ○ /_not-found                            990 B         103 kB
├ ● /[template]                          2.45 kB         242 kB
├   ├ /sale-page
├   ├ /food-beverage
├   ├ /corporate
├   └ /health-beauty
├ ● /[template]/[slug]                   4.86 kB         244 kB
├   ├ /SalePage/shop-master-pro
├   ├ /Service/sushi-omakase
├   ├ /Corporate/law-firm-pro
├   └ /Service/aura-clinic
├ ○ /about                               6.42 kB         163 kB
├ ○ /blog                                  174 B         111 kB
├ ● /blog/[slug]                           174 B         111 kB
├   ├ /blog/5-points-killing-sales
├   ├ /blog/copywriting-secrets
├   ├ /blog/facebook-ads-vs-website
├   └ [+2 more paths]
├ ○ /case-studies                           3 kB         162 kB
├ ƒ /case-studies/[slug]                  3.6 kB         160 kB
├ ○ /case-studies/unlink-th                 3 kB         162 kB
├ ○ /contact                             3.12 kB         224 kB
├ ○ /robots.txt                              0 B            0 B
├ ○ /services                            4.44 kB         229 kB
├ ● /services/[slug]                     4.46 kB         234 kB
├   ├ /services/sale-page
├   ├ /services/corporate
├   ├ /services/internal-system
├   └ /services/speed-seo
└ ○ /sitemap.xml                           128 B         102 kB
+ First Load JS shared by all             102 kB
  ├ chunks/291-90e2272a9717bdbd.js       45.7 kB
  ├ chunks/455135d8-30ce3918f044b0b7.js  54.2 kB
  └ other shared chunks (total)          1.94 kB
○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
ƒ  (Dynamic)  server-rendered on demand
```
```

## 📊 2. File Statistics by Extension
```text
     62 tsx
     16 ts
     10 png
      6 webp
      5 sh
      5 mdx
      1 txt
      1 svg
      1 ico
      1 css
```

## 📁 3. Directory Structure (Architecture Tree)
```text
📂 app/
  📂 (main)/
    📂 about/
      📄 page.tsx
    📂 blog/
      📂 [slug]/
        📄 page.tsx
      📄 page.tsx
    📂 contact/
      📄 page.tsx
    📄 layout.tsx
    📄 page.tsx
    📂 services/
      📄 page.tsx
      📂 [slug]/
        📄 page.tsx
    📂 case-studies/
      📂 [slug]/
        📄 page.tsx
      📂 unlink-th/
        📄 page.tsx
      📄 page.tsx
  📄 favicon.ico
  📂 api/
  📄 apple-touch-icon.png
  📄 globals.css
  📄 layout.tsx
  📄 loading.tsx
  📄 robots.txt
  📄 sitemap.ts
  📂 (marketing)/
    📂 [template]/
      📄 page.tsx
      📂 [slug]/
        📄 page.tsx
    📄 layout.tsx
📂 components/
  📂 landing/
    📄 Hero.tsx
    📄 ValueProp.tsx
    📄 Testimonials.tsx
    📄 InsightsSection.tsx
  📂 sales-engine/
    📄 PriceEstimator.tsx
    📄 WorkProcess.tsx
    📄 LineLeadForm.tsx
    📄 ImpactStats.tsx
    📄 SpeedDemon.tsx
  📂 template/
    📂 marketplace/
      📄 TemplateGrid.tsx
      📄 TemplateFilter.tsx
      📄 TemplateSearch.tsx
      📄 TemplateHero.tsx
    📂 shared/
      📄 DevicePreview.tsx
      📄 SalesHook.tsx
      📄 TemplateFeatures.tsx
      📄 TemplatePricingCard.tsx
      📄 TemplateNavbar.tsx
    📂 cafe/
  📂 shared/
    📄 LineStickyButton.tsx
    📄 TrustBadge.tsx
    📄 AemBrandBadge.tsx
    📄 BlogCard.tsx
    📄 ServiceCard.tsx
    📄 Footer.tsx
    📄 Header.tsx
    📄 Navbar.tsx
    📄 SocialProofBanner.tsx
    📄 CaseStudyCard.tsx
  📂 seo/
    📄 JsonLd.tsx
  📂 ui/
    📄 button.tsx
    📄 separator.tsx
    📄 badge.tsx
    📄 sonner.tsx
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
📂 lib/
  📄 mdx.ts
  📂 supabase/
    📄 supabase.ts
  📄 utils.ts
📂 hooks/
  📄 use-toast.ts
📂 types/
  📄 index.ts
📂 scripts/
  📄 pre-deploy-check.sh
  📂 dev/
    📄 project-summary.sh
    📄 tree-projects.sh
  📄 tree.sh
  📄 clean-project.sh
📂 public/
  📄 apple-touch-icon.png
  📄 grid.svg
  📂 images/
    📄 og-image.png
    📂 showcase/
      📄 unlink-th1.webp
      📄 project-01.webp
      📄 project-01.png
      📄 unlink-th.webp
    📂 blog/
      📄 project-01.webp
    📂 templates/
      📄 project-01.webp
      📄 project-01-mobile.webp
  📄 og-image.png
  📂 download/
  📄 icon.png
  📄 android-chrome-192x192.png
  📄 android-chrome-512x512.png
  📄 favicon-16x16.png
  📄 favicon-32x32.png
📂 constants/
  📄 navigation.ts
  📄 services-data.ts
  📄 site-config.ts
  📂 case-studies/
    📄 case-studies-data.ts
  📂 testimonials/
    📄 testimonials.ts
  📂 template/
    📄 temp_fb_01.ts
    📄 temp_svc_01.ts
    📄 temp_eco_01.ts
    📄 temp_hb_01.ts
  📄 templates-data.ts
📂 providers/
  📄 AppProvider.tsx
📂 content/
  📂 blog/
    📄 copywriting-secrets.mdx
    📄 facebook-ads-vs-website.mdx
    📄 5-points-killing-sales.mdx
    📄 seo-for-sme-2026.mdx
    📄 unlink-th-case-study.mdx
```

## 📄 4. Critical Code Analysis & Environment
#### 🔍 Path: `ai-context.md`
```markdown
🧬 Project DNA: AEMDEVWEB (v.2026)
Project Identity: High-Conversion Web Factory for SMEs
Architecture: Next.js 15.x (App Router) + Tailwind CSS 4.0
Design System: Luminous Tech (Midnight Aurora Theme)
Mission: "ไม่ได้แค่ทำเว็บ แต่เราทำเครื่องมือผลิตเงิน" Generated Date: 2026-01-17
⚙️ 1. The Core Engine (Tech Stack & Config)
ระบบฐานรากที่จูนมาเพื่อความเร็วระดับ Unlink-TH Engine (PageSpeed 100)
🛠️ Core Dependencies

- Framework: Next.js 15.5.7 (React 19.2.3) - ใช้ Server Components 100% เพื่อลด Client Bundle
- Styling: Tailwind CSS 4.0 - ใช้ CSS Variables ในการคุม Theme แบบ Dynamic
- Motion: Framer Motion 12.x - สร้าง Micro-interactions แบบ Kinetic (Snappy Feel)
- Content: MDX + mdx-components.tsx - ระบบ Knowledge Hub ที่เขียนด้วย Markdown ผสม React Component
  ⚡ Configuration Strategy (next.config.ts)
- Image Optimization:
  - Formats: AVIF (Priority), WebP
  - Remote Patterns: รองรับรูปจาก lin.ee (Line), supabase.co, และ unsplash.com
- Experimental Flags:
  - mdxRs: true: ใช้ Rust Compiler บิวด์บทความเร็วขึ้น 10x
  - optimizePackageImports: ลดขนาด lucide-react และ framer-motion อัตโนมัติ
    🌳 2. Architectural Blueprint (Directory Map)
    โครงสร้างโฟลเดอร์ถูกออกแบบโดยแยก "ส่วนสร้างความเชื่อมั่น" ออกจาก "ส่วนหารายได้"
    📂 app/ (The Application Layer)
- (main)/ (Corporate Identity): พื้นที่สร้าง Trust ให้แบรนด์
  - about/: Storytelling ด้วย Design แบบ Glassmorphism
  - contact/: หน้าปิดการขายหลัก (Line-First Approach)
  - services/[slug]/: เจาะลึกบริการ (SSG) พร้อมตารางราคาที่ชัดเจน
  - case-studies/unlink-th/: Flagship Page โชว์ศักยภาพความเร็วและดีไซน์สูงสุด
  - blog/[slug]/: SEO Engine ดึง Traffic เข้าเว็บด้วยบทความคุณภาพสูง
- (marketing)/ (Revenue Stream): พื้นที่ขาย Template
  - [template]/[slug]/: ระบบ Dynamic Template Preview ที่จำลองหน้าจอมือถือ/เดสก์ท็อปได้จริง
    📂 components/ (The Component Library)
    แยกตามหน้าที่การทำงาน (Functional Separation)
- 📂 sales-engine/ (Logic & Conversion): สมองของระบบ
  - LineLeadForm.tsx: ฟอร์มดูด Lead ส่งเข้า Line Notify/Supabase
  - PriceEstimator.tsx: เครื่องคิดเลขประเมินราคา (Logic hook ที่ซับซ้อน)
  - ImpactStats.tsx: Component โชว์ตัวเลข (Counter Animation)
  - SpeedDemon.tsx: โมดูลโชว์คะแนน PageSpeed แบบ Real-time
- 📂 template/ (Interactive Demo): หน้าร้านขายของ
  - DevicePreview.tsx: กรอบจำลองมือถือ iPhone/Android
  - TemplateGrid.tsx, TemplateFilter.tsx: ระบบค้นหาและกรองสินค้า
- 📂 shared/ (Global Identity): อัตลักษณ์แบรนด์
  - AemBrandBadge.tsx: โลโก้ Kinetic Edition (หมุนและเรืองแสง)
  - LineStickyButton.tsx: ปุ่ม Line ลอยตัวที่ติดตาม user ไปทุกหน้า
  - ServiceCard.tsx, BlogCard.tsx: การ์ดมาตรฐานแบบ Glass Style
- 📂 ui/ (Atomic Design): ชิ้นส่วนพื้นฐาน
  - Button, Badge, Card, Form Elements (ปรับแต่งจาก Shadcn UI ให้รองรับ Luminous Glow)
    📂 content/ (The Knowledge Base)
- เก็บไฟล์ .mdx สำหรับบทความ เช่น seo-for-sme-2026.mdx
- รองรับการแทรก Component พิเศษ เช่น <CallToAction /> ลงในเนื้อหาบทความได้โดยตรง
  🎨 3. Design System: Luminous Tech
  ธีมออกแบบที่เน้นความ "ล้ำสมัย" "รวดเร็ว" และ "พรีเมียม" (Midnight Aurora)
  🌑 Color Palette (Tailwind Config)
- Background: Slate-950 (Midnight) เป็นฐานหลัก
- Primary (Speed): Aurora Cyan (#06b6d4 -> #22d3ee) - ใช้กับปุ่ม, ลิงก์, และ Technology Elements
- Secondary (Profit): Aurora Emerald (#10b981 -> #34d399) - ใช้กับราคา, ผลลัพธ์ความสำเร็จ, และ Trust Badges
- Accent (Innovation): Aurora Violet (#8b5cf6) - ใช้กับ Background Gradients
  🔡 Typography Stack
- Headings: Prompt (Weight: Black/Bold, Style: Italic)
  - Usage: พาดหัวหลัก, ตัวเลขสถิติ, คำคม
  - Feeling: ดุดัน, รวดเร็ว, มั่นคง
- Body: Anuphan (Weight: Medium)
  - Usage: เนื้อหาบทความ, คำอธิบายยาวๆ
  - Feeling: อ่านง่าย, เป็นมิตร, ไม่มีหัว (Modern Loopless)
- Code/Tech: JetBrains Mono
  - Usage: ส่วนแสดง Code, Technical Specs
  - Feeling: ความเชี่ยวชาญ (Craftsmanship)
    🪄 Visual Effects (FX)
- Aurora Ambient: พื้นหลังที่มีแสงฟุ้งกระจาย (Blur 100px+) เคลื่อนไหวช้าๆ
- Glassmorphism: พื้นผิวโปร่งแสง (bg-white/5 + backdrop-blur-xl) พร้อมขอบเรืองแสง (border-white/10)
- Luminous Shadow: เงาแบบสีเรืองแสง (shadow-[0_0_30px_rgba(...)]) แทนเงาสีดำปกติ
  🎯 4. Business Logic & Conversion Strategy
  🔗 The "Unlink" Strategy
- Concept: ตัดขาดจากความเชื่องช้าเดิมๆ (WordPress/Wix) สู่ Custom Code Engine
- Proof: หน้า case-studies/unlink-th ต้องโชว์ Score 100/100 และ Time-to-Interactive < 0.8s เสมอ
  💬 Line-First Approach
- Flow: หน้าเว็บทำหน้าที่ "ให้ข้อมูล" -> "สร้างความอยาก" -> "ส่งเข้า Line"
- Implementation: ปุ่ม LineStickyButton ต้องอยู่เหนือทุก Layer (Z-Index: 50) และ LineLeadForm ต้องมีอยู่ในทุกหน้า Service/Contact
  🛒 Template Marketplace Logic
- Structure: ใช้ Dynamic Routing [slug] เพื่อสร้างหน้า Landing Page สำหรับเทมเพลตแต่ละตัวโดยไม่ต้องแก้ Code
- Data Source: ข้อมูลเทมเพลต (ราคา, ฟีเจอร์, รูปภาพ) เก็บใน constants/templates-data.ts หรือ Supabase เพื่อความง่ายในการอัปเดต
  📝 5. Workflow Guidelines
- Adding New Case Study:
  - เพิ่มรูปใน public/images/showcase/
  - อัปเดตข้อมูลใน constants/case-studies/case-studies-data.ts
- Writing Blog Post:
  - สร้างไฟล์ .mdx ใหม่ใน content/blog/
  - ใช้ Component <CallToAction /> แทรกกลางบทความเสมอ
- Deployment:
  - Deploy บน Vercel (Recommended for Next.js 15)
  - Environment Variables: NEXT_PUBLIC_SITE_URL, SUPABASE_URL, SUPABASE_ANON_KEY
    Documentation maintained by AEMDEVWEB Core Team.
    Last Updated: 2026-01-17

🗣️ Communication DNA: The Voice of AEMDEVWEB
Brand Persona: Tech Expert Next Door (พี่ชายสาย Tech ที่เก่งแต่คุยรู้เรื่อง)
Tone of Voice: Professional but "Street Smart" (มืออาชีพแต่เข้าถึงง่าย)
Key Promise: "Turn Code into Cash" (เปลี่ยนโค้ดให้เป็นเงิน)
⚡ 1. Core Philosophy (ปรัชญาการสื่อสาร)
เราไม่ได้ขาย "เว็บไซต์" แต่เราขาย "โอกาสทางธุรกิจ" และ "เครื่องมือทุ่นแรง"
✅ The "Aem" Vibe (บุคลิกนายเอ็ม)

- Direct & Bold (ตรงไปตรงมา): ไม่ขายฝัน ไม่ใช้น้ำเยอะ เน้นเนื้อหาที่ "กินใจ" และ "แก้ปัญหา"
  - Bad: "เราให้บริการทำเว็บไซต์ที่มีคุณภาพ สวยงาม ทันสมัย"
  - Good: "เลิกทำเว็บที่แค่สวยแต่ขายไม่ได้... มาสร้าง เครื่องจักรผลิตเงิน ที่ทำงานแทนคุณ 24 ชม. กันดีกว่า"
- Tech Translator (นักแปลภาษาเทพ): เปลี่ยนศัพท์เทคนิคยากๆ ให้เจ้าของธุรกิจเข้าใจง่าย
  - Technical: "เราใช้ Next.js 15 Server Components เพื่อทำ SSR และ optimize LCP"
  - Aem Style: "เราใช้เทคโนโลยีตัวใหม่ล่าสุด (Next.js 15) รับรองว่าลูกค้ากดปุ๊บ มาปั๊บ ไม่ต้องรอโหลดหมุนติ้วให้เสียอารมณ์"
- Brotherhood (พี่น้อง): เป็นกันเอง ไม่ถือตัว แต่มีความรับผิดชอบสูง
  - Keyword: "ครับพี่", "จัดให้", "ทักมาเลย", "ไม่ต้องเกรงใจ"
    📚 2. Power Vocabulary (คลังคำศัพท์ประจำแบรนด์)
    การเลือกใช้คำ (Wording) คือจิตวิทยาที่เปลี่ยนจาก "คนดู" เป็น "ลูกค้า"
    🔥 คำที่ ต้องใช้ (The "Luminous" Words)
- เกี่ยวกับโปรดักต์: เครื่องจักร, เครื่องยนต์, อาวุธลับ, โครงสร้าง, ระบบหลังบ้าน
- เกี่ยวกับผลลัพธ์: ยอดโอน, ปิดการขาย, ทักไลน์แตก, ติดหน้าแรก, เสือนอนกิน, Auto-Pilot
- เกี่ยวกับอารมณ์: ซ่า, ไบร์ท, แรง, ลื่นหัวแตก, ไม่หมอง, พรีเมียม, ตัวจริง
  🚫 คำที่ ห้ามใช้ (The "Legacy" Words)
- คำที่ดูอ่อนแอ: พอใช้ได้, ก็โอเค, ราคาถูก, มือใหม่หัดทำ
- คำที่ดูราชการ/น่าเบื่อ: บูรณาการ, นวัตกรรมล้ำสมัย (โดยไม่อธิบาย), ยินดีต้อนรับเข้าสู่เว็บไซต์
- คำสัญญาเกินจริง: รวยเร็ว, การันตีรวย 100% (เราการันตี ระบบ ไม่ใช่ ดวง)
  🏗️ 3. Content Structure (สูตรเขียนคอนเทนต์)
  ใช้โครงสร้าง P-A-S-O ในการเขียนหน้า Service และ Case Study ทุกครั้ง
- Problem (ขยี้แผล): เริ่มต้นด้วยปัญหาที่ลูกค้าเจออยู่
  - Ex: "ยิงแอดวันละพัน แต่ลูกค้าทักเงียบ? เว็บหมุนติ้วจนลูกค้ากดหนี?"
- Agitation (ขยายความเจ็บ): บอกผลเสียถ้าไม่รีบแก้
  - Ex: "รู้ไหมว่าทุก 1 วินาทีที่เว็บโหลดช้า คุณกำลังโยนเงินค่าแอดทิ้งลงแม่น้ำ แถมคู่แข่งแซงหน้าไปแล้ว"
- Solution (ทางออกแบบ Luminous): เสนอเทคโนโลยีของเรา
  - Ex: "แก้เกมด้วย Unlink Engine เว็บไซต์ระบบ Next.js ที่ออกแบบมาเพื่อความเร็วระดับปีศาจ โหลดเสร็จก่อนลูกค้าจะกระพริบตา"
- Offer (ข้อเสนอที่ปฏิเสธไม่ได้): Call to Action
  - Ex: "อย่ารอให้ยอดตกไปมากกว่านี้ ทักไลน์มาคุยสโคปงานฟรี นายเอ็มตอบเองทุกแชท!"
    💬 4. Reply Strategy (การตอบแชท LINE OA)
    เมื่อลูกค้าทักเข้ามา ต้องรักษา Momentum ความ "ไว" และ "ใส่ใจ"
- Speed: ตอบกลับภายใน 5-10 นาที (ในเวลาทำการ) หรือใช้ Auto-reply ที่ดูเหมือนคนตอบ
  - Auto: "สวัสดีครับพี่! นายเอ็มได้รับข้อความแล้ว เดี๋ยวรีบดูรายละเอียดแล้วตอบกลับทันทีครับ (ไม่เกิน 15 นาที)"
- Consult, Don't Sell: ถามปัญหาเขาก่อนเสนอราคา
  - Step 1: "พี่ขายสินค้าตัวไหนอยู่ครับ? ตอนนี้ติดปัญหาเรื่องเว็บช้า หรือปิดการขายยากครับ?"
  - Step 2: (วิเคราะห์) -> "ถ้าสเกลนี้ ผมแนะนำแพ็กเกจ Corporate ครับ เพราะ..."
- Closing: จบด้วยคำถามปลายเปิดเสมอ อย่าให้บทสนทนาตัน
  - Ex: "สโคปประมาณนี้ พี่สะดวกเริ่มงานช่วงไหน หรืออยากดูตัวอย่างงานแนวนี้เพิ่มไหมครับ?"
    🎨 5. Visual Storytelling (การนำเสนอด้วยภาพ)
    ภาพประกอบต้องตะโกนว่า "High Tech & High Performance"
- PageSpeed Green Score: ใช้รูปคะแนน 100/100 สีเขียว เป็นตราประทับความขลัง
- Before/After: เปรียบเทียบเว็บเก่า (มืด/หมอง/โหลดช้า) vs เว็บใหม่ (ไบร์ท/โหลดไว/สวย)
- Sales Dashboard: แคปหน้าจอ Dashboard ยอดขาย (เบลอข้อมูลสำคัญ) เพื่อโชว์ว่า "เว็บเราทำเงินได้จริง"
- Code Snippet: โชว์รูป Code สวยๆ (JetBrains Mono) นิดหน่อย เพื่อโชว์ความเป็น Expert ว่าเขียนเอง ไม่ได้ลากวางมั่วๆ
  Documentation maintained by AEMDEVWEB Creative Team.
  Last Updated: 2026-01-17
```
---

#### 🔍 Path: `pre-deploy-report.md`
```markdown
# 🚀 Pre-deploy Inspection Report
Generated at: 2026-01-18 02:56:00
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
Route (app)                                 Size  First Load JS
┌ ○ /                                    16.6 kB         249 kB
├ ○ /_not-found                            990 B         103 kB
├ ● /[template]                          2.45 kB         242 kB
├   ├ /sale-page
├   ├ /food-beverage
├   ├ /corporate
├   └ /health-beauty
├ ● /[template]/[slug]                   4.86 kB         244 kB
├   ├ /SalePage/shop-master-pro
├   ├ /Service/sushi-omakase
├   ├ /Corporate/law-firm-pro
├   └ /Service/aura-clinic
├ ○ /about                               6.42 kB         163 kB
├ ○ /blog                                  174 B         111 kB
├ ● /blog/[slug]                           174 B         111 kB
├   ├ /blog/5-points-killing-sales
├   ├ /blog/copywriting-secrets
├   ├ /blog/facebook-ads-vs-website
├   └ [+2 more paths]
├ ○ /case-studies                           3 kB         162 kB
├ ƒ /case-studies/[slug]                  3.6 kB         160 kB
├ ○ /case-studies/unlink-th                 3 kB         162 kB
├ ○ /contact                             3.12 kB         224 kB
├ ○ /robots.txt                              0 B            0 B
├ ○ /services                            4.44 kB         229 kB
├ ● /services/[slug]                     4.46 kB         234 kB
├   ├ /services/sale-page
├   ├ /services/corporate
├   ├ /services/internal-system
├   └ /services/speed-seo
└ ○ /sitemap.xml                           128 B         102 kB
+ First Load JS shared by all             102 kB
  ├ chunks/291-90e2272a9717bdbd.js       45.7 kB
  ├ chunks/455135d8-30ce3918f044b0b7.js  54.2 kB
  └ other shared chunks (total)          1.94 kB


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

#### 🔍 Path: `app/globals.css`
```css
/** @format */

@import "tailwindcss";
@plugin "tailwindcss-animate";

/* 🎨 AEM DEVWEB DESIGN SYSTEM 2026: LUMINOUS TECH
   Concept: Midnight Aurora & Weightless Glass
*/

@theme {
  /* --- 1. Typography --- */
  --font-prompt: var(--font-prompt), ui-sans-serif, system-ui;
  --font-kanit: var(--font-kanit), ui-sans-serif, system-ui;
  --font-anuphan: var(--font-anuphan), ui-sans-serif, system-ui;
  --font-mono: var(--font-jetbrains), ui-monospace, monospace;

  /* --- 2. Radius Expansion --- */
  --radius-xl: 1.5rem;
  --radius-2xl: 2.5rem;
  --radius-3xl: 3.5rem;
  --radius-4xl: 4.5rem;

  /* --- 3. Luminous Shadow (Fix: Build Error) --- */
  --shadow-luminous: 0 20px 80px -15px rgba(0, 0, 0, 0.3);

  /* --- 4. Custom Animations --- */
  @keyframes aurora {
    0%,
    100% {
      opacity: 0.3;
      transform: translate(0, 0) scale(1);
    }
    33% {
      opacity: 0.5;
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      opacity: 0.4;
      transform: translate(-20px, 20px) scale(0.9);
    }
  }
  --animate-aurora: aurora 15s ease-in-out infinite;

  /* --- 5. Core Mapping --- */
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-border: var(--border);
  --color-ring: var(--ring);

  /* Mapping Aurora Colors */
  --color-aurora-cyan: var(--aurora-cyan);
  --color-aurora-violet: var(--aurora-violet);
  --color-aurora-emerald: var(--aurora-emerald);
}

@layer base {
  :root {
    /* 🟢 Light Mode */
    --background: oklch(0.99 0.005 240);
    --foreground: oklch(0.18 0.02 240);
    --primary: oklch(0.65 0.18 160);
    --border: oklch(0.94 0.01 240);
    --ring: oklch(0.65 0.18 160 / 0.3);
    --radius: 1.25rem;
  }

  .dark {
    /* 🌑 Dark Mode: Midnight Violet Glow */
    --background: oklch(0.12 0.025 260);
    --foreground: oklch(0.98 0.005 240);
    --primary: oklch(0.78 0.18 155);
    --border: oklch(0.25 0.05 260 / 0.5);
    --ring: oklch(0.78 0.18 155 / 0.4);

    /* Aurora Colors Definition */
    --aurora-cyan: oklch(0.75 0.12 200);
    --aurora-violet: oklch(0.65 0.18 280);
    --aurora-emerald: oklch(0.82 0.18 155);
  }

  * {
    border-color: var(--border);
    outline-color: color-mix(in srgb, var(--ring), transparent 60%);
  }

  body {
    background-color: var(--background);
    color: var(--foreground);
    font-family: var(--font-prompt), ui-sans-serif, system-ui;
    -webkit-font-smoothing: antialiased;
    /* แสง Aurora จางๆ บนพื้นหลังเพื่อลบความหมอง */
    background-image:
      radial-gradient(
        circle at 0% 0%,
        color-mix(in oklch, var(--aurora-cyan, transparent), transparent 96%),
        transparent 40%
      ),
      radial-gradient(
        circle at 100% 100%,
        color-mix(in oklch, var(--aurora-violet, transparent), transparent 96%),
        transparent 40%
      );
  }
}

@layer components {
  /* 🪄 Luminous UI Components */

  .btn-luminous {
    @apply relative flex items-center justify-center gap-2 overflow-hidden rounded-full px-10 py-4 font-bold transition-all duration-500 hover:scale-105 active:scale-95;
    background: linear-gradient(
      135deg,
      var(--aurora-cyan),
      var(--aurora-emerald)
    );
    color: oklch(0.12 0.025 260);
    box-shadow: 0 0 30px
      color-mix(in oklch, var(--aurora-cyan), transparent 70%);
  }

  .glass-card {
    @apply shadow-luminous border backdrop-blur-3xl transition-all duration-500;
    /* ไล่เฉดให้สว่างจากภายใน */
    background: linear-gradient(
      135deg,
      color-mix(in oklch, var(--background), white 8%),
      color-mix(in oklch, var(--background), white 2%)
    );
    border-color: rgba(255, 255, 255, 0.08);
    border-radius: var(--radius-3xl);
  }

  .aurora-bg {
    @apply animate-aurora pointer-events-none absolute opacity-20 blur-[120px];
    background: linear-gradient(
      135deg,
      var(--aurora-cyan),
      var(--aurora-violet),
      var(--aurora-emerald)
    );
  }

  .text-luminous {
    @apply leading-[0.9] font-black tracking-tighter text-white uppercase;
    background: linear-gradient(to bottom, #fff 50%, rgba(255, 255, 255, 0.4));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(
      0 0 15px color-mix(in srgb, var(--aurora-cyan), transparent 85%)
    );
  }
}

/* ⚡ Utilities */
@utility no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
```
---

#### 🔍 Path: `app/layout.tsx`
```typescript
/** @format */
import type { Metadata, Viewport } from "next"
import { Inter, Kanit, Prompt, Anuphan } from "next/font/google"
import NextTopLoader from "nextjs-toploader"
import { Toaster } from "@/components/ui/sonner"
import { AppProvider } from "@/providers/AppProvider"
import { siteConfig } from "@/constants/site-config"
import { cn } from "@/lib/utils"
import "./globals.css"

// --- 1. Setup Fonts: Humanistic Palette ---
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const kanit = Kanit({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["thai", "latin"],
  variable: "--font-kanit",
  display: "swap",
})

const prompt = Prompt({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["thai", "latin"],
  variable: "--font-prompt",
  display: "swap",
})

const anuphan = Anuphan({
  subsets: ["thai", "latin"],
  variable: "--font-anuphan",
  display: "swap",
})

// --- 2. SEO & Metadata Strategy ---
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "รับทำเว็บไซต์",
    "Next.js 15",
    "ทำเว็บ SME",
    "Web Development Thailand",
    "Sale Page",
    "aemdevweb",
    ...siteConfig.keywords,
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.companyName,
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: siteConfig.url,
    title: siteConfig.name,
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
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@aemdevweb",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL(siteConfig.url),
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

// --- 3. Root Layout Component ---
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased transition-colors duration-500",
          "selection:bg-aurora-cyan/30 selection:text-aurora-cyan", // ปรับให้เข้ากับธีม Luminous
          inter.variable,
          kanit.variable,
          prompt.variable,
          anuphan.variable
        )}
      >
        {/* แถบโหลด: Gradient สไตล์ Luminous Tech */}
        <NextTopLoader
          color="linear-gradient(to right, oklch(0.75 0.12 200), oklch(0.82 0.18 155))"
          initialPosition={0.08}
          height={3}
          showSpinner={false}
          easing="ease"
          speed={300}
        />

        <AppProvider>
          <div className="relative flex min-h-screen flex-col">{children}</div>

          <Toaster
            position="bottom-right"
            richColors
            closeButton
            theme="system"
            toastOptions={{
              style: {
                borderRadius: "1.25rem",
                padding: "1rem",
                fontFamily: "var(--font-prompt)",
              },
            }}
          />
        </AppProvider>
      </body>
    </html>
  )
}
```
---

#### 🔍 Path: `app/(main)/page.tsx`
```typescript
/** @format */
import { Metadata } from "next"
import { Suspense } from "react"

// 🧩 Components - Landing
import { Hero } from "@/components/landing/Hero"
import { ValueProp } from "@/components/landing/ValueProp"
import { Testimonials } from "@/components/landing/Testimonials"
import { InsightsSection } from "@/components/landing/InsightsSection"

// 🧩 Components - Sales Engine
import { PriceEstimator } from "@/components/sales-engine/PriceEstimator"
import { WorkProcess } from "@/components/sales-engine/WorkProcess"
import { ImpactStats } from "@/components/sales-engine/ImpactStats"
import { LineLeadForm } from "@/components/sales-engine/LineLeadForm"

// 🧩 Components - Shared
import { TrustBadge } from "@/components/shared/TrustBadge"
import ServiceCard from "@/components/shared/ServiceCard"
import { LineStickyButton } from "@/components/shared/LineStickyButton"

// 📦 Data
import { servicesData } from "@/constants/services-data"

export const metadata: Metadata = {
  title: "AemDevWeb | รับทำเว็บไซต์ Next.js มาตรฐานปี 2026",
  description:
    "เปลี่ยนยอดวิวเป็นยอดโอน ด้วยเว็บไซต์ High-Performance ที่ออกแบบมาเพื่อปิดการขายโดยเฉพาะ เร็ว แรง ติด Google",
}

export default function HomePage() {
  return (
    <main className="bg-background selection:bg-aurora-cyan/30 selection:text-aurora-cyan relative flex min-h-screen flex-col overflow-x-hidden">
      {/* 🌌 Luminous Background: แสง Aurora เต้นระบำทั่วหน้าเว็บ */}
      <div className="aurora-bg -top-[10%] -right-[10%] h-[800px] w-[1000px] opacity-[0.15]" />
      <div className="aurora-bg top-1/2 -left-[10%] h-[800px] w-[800px] opacity-[0.1]" />

      {/* 1. HERO SECTION: ประตูบานแรกสู่ความสว่างพรีเมียม */}
      <Hero />

      {/* 2. TRUST BADGE: เชื่อมั่นทันทีใน 3 วินาที */}
      <div className="relative z-10 -mt-12 md:-mt-16">
        <TrustBadge />
      </div>

      {/* 3. VALUE PROPOSITION: จุดต่างที่เหนือกว่าด้วย Technology */}
      <section className="relative overflow-hidden py-24">
        {/* Soft Aurora Mesh Background */}
        <div className="from-aurora-emerald/5 to-aurora-violet/5 absolute inset-0 z-0 origin-top-left scale-110 -skew-y-3 transform bg-gradient-to-br blur-3xl" />
        <ValueProp />
      </section>

      {/* 4. IMPACT STATS: ตัวเลขพลังที่ชัดเจนและสว่างไสว */}
      <section className="shadow-luminous relative z-10 border-y border-white/5 bg-white/[0.03] py-24 backdrop-blur-3xl">
        <ImpactStats />
      </section>

      {/* 5. INSIGHTS & CASE STUDIES: ผลงานและบทความในสไตล์ Smart Tabs */}
      <InsightsSection />

      {/* 6. SERVICES: โซลูชันที่ปรับตามสเกลธุรกิจ (Luminous Card Style) */}
      <section id="services" className="relative container mx-auto px-4 py-32">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="text-luminous mb-8 text-4xl uppercase md:text-7xl">
            Services <span className="text-slate-600">&</span> Solutions
          </h2>
          <p className="text-lg leading-relaxed font-medium text-slate-400 md:text-xl">
            เลือกแพ็กเกจที่ออกแบบมาเพื่อการเติบโตอย่างยั่งยืน{" "}
            <br className="hidden md:block" />
            ตั้งแต่ธุรกิจเริ่มต้นจนถึงระดับ Corporate
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} {...service} className="h-full" />
          ))}
        </div>
      </section>

      {/* 7. PROCESS: ความชัดเจนที่นุ่มนวลและเป็นมิตร */}
      <WorkProcess />

      {/* 8. PRICE ESTIMATOR: ระบบประเมินราคา (Interactive Luminous) */}
      <section id="pricing" className="container mx-auto px-4 py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <span className="text-aurora-cyan mb-4 block text-[10px] font-black tracking-[0.3em] uppercase">
              Transparent Pricing
            </span>
            <h2 className="text-luminous text-3xl tracking-tighter uppercase md:text-6xl">
              ประเมินราคาเบื้องต้น
            </h2>
          </div>

          <Suspense
            fallback={
              <div className="h-[500px] w-full animate-pulse rounded-4xl border border-white/10 bg-white/5" />
            }
          >
            <PriceEstimator />
          </Suspense>
        </div>
      </section>

      {/* 9. TESTIMONIALS: คำยืนยันจากลูกค้าตัวจริงบนพื้นหลัง Midnight */}
      <section className="rounded-t-4xl border-t border-white/5 bg-white/[0.01] py-32">
        <Testimonials />
      </section>

      {/* 10. FINAL CTA: จุดปิดการขายที่ส่องสว่างและทรงพลัง */}
      <section className="container mx-auto mb-40 px-4">
        <div className="shadow-luminous hover:border-aurora-cyan/30 relative overflow-hidden rounded-4xl border border-white/10 bg-white/[0.02] p-12 text-center transition-all duration-700 md:p-32">
          <div className="aurora-bg -right-40 -bottom-40 h-[600px] w-[600px] opacity-20" />

          <h2 className="text-luminous relative z-10 mb-10 text-4xl leading-none tracking-tighter uppercase md:text-8xl">
            Ready to <span className="text-aurora-emerald">Scale</span> <br />
            Your Business?
          </h2>
          <p className="relative z-10 mx-auto mb-16 max-w-2xl text-xl leading-relaxed font-medium text-slate-400 md:text-2xl">
            หยุดให้เว็บไซต์ช้าฉุดรั้งกำไรของคุณ
            เริ่มสร้างระบบปิดการขายอัตโนมัติวันนี้
          </p>

          <div className="relative z-10 flex flex-col items-center justify-center gap-10 sm:flex-row">
            <LineLeadForm variant="button" label="เริ่มโปรเจกต์กับเรา" />
            <div className="flex items-center gap-4 text-xs font-black tracking-[0.25em] text-slate-500 uppercase">
              <span className="relative flex h-4 w-4">
                <span className="bg-aurora-cyan absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                <span className="bg-aurora-cyan relative inline-flex h-4 w-4 rounded-full"></span>
              </span>
              Available Now
            </div>
          </div>
        </div>
      </section>

      <LineStickyButton />
    </main>
  )
}
```
---

#### 🔍 Path: `app/(main)/services/[slug]/page.tsx`
```typescript
/** @format */
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  // ✅ Fixed: Removed unused 'MessageCircle' to clear ESLint error
  Zap,
} from "lucide-react";

// 📦 Data & Utils
import {
  getServiceBySlug,
  getOtherServices,
  servicesData,
} from "@/constants/services-data";
import { siteConfig } from "@/constants/site-config";

// 🛠️ Components
import { LineLeadForm } from "@/components/sales-engine/LineLeadForm";
import { LineStickyButton } from "@/components/shared/LineStickyButton";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * 🧬 1. Static Params (SSG)
 */
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

/**
 * 🔍 2. Dynamic Metadata
 */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | บริการทำเว็บไซต์โดย ${siteConfig.shortName}`,
    description: service.description,
    openGraph: {
      images: [service.mockups.desktop],
    },
  };
}

/**
 * 🚀 3. Main Service Detail Page
 */
export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return notFound();

  const otherServices = getOtherServices(slug);

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 pt-32 pb-20">
      {/* 🌌 Background Decor: Aurora Ambient */}
      <div className="aurora-bg top-0 right-0 h-[600px] w-[600px] opacity-[0.1] blur-[120px]" />

      {/* --- HEADER: Hero & Pricing --- */}
      <section className="relative z-10 container mx-auto mb-24 px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Content Area */}
          <div className="space-y-8">
            <Badge
              variant="luminous"
              className="px-4 py-1.5 tracking-widest uppercase"
            >
              ✨ Best Value Solution
            </Badge>

            <h1 className="font-prompt text-5xl leading-[1.1] font-black tracking-tighter text-white uppercase italic md:text-7xl">
              {service.title}
            </h1>

            <p className="font-anuphan max-w-xl text-xl leading-relaxed font-medium text-slate-400">
              {service.description}
            </p>

            <div className="flex flex-col items-start gap-8 pt-6 sm:flex-row sm:items-center">
              <div className="flex flex-col">
                <span className="font-anuphan mb-1 text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase">
                  Starting at
                </span>
                <span className="font-prompt text-aurora-cyan drop-shadow-luminous text-4xl font-black italic">
                  {service.priceDisplay}
                </span>
              </div>
              <Button
                variant="premium"
                size="lg"
                className="shadow-aurora-glow group h-16 px-10 text-lg"
                asChild
              >
                <Link href="/contact">
                  สนใจแพ็กเกจนี้{" "}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Mockup Glass Panel */}
          <div className="group relative">
            <div className="bg-aurora-cyan/20 absolute -inset-4 rounded-[3rem] opacity-30 blur-3xl transition-all duration-1000 group-hover:opacity-50" />
            <div className="shadow-luminous relative aspect-video w-full rounded-[2.5rem] border border-white/10 bg-slate-900/50 p-3 backdrop-blur-sm transition-all duration-700 hover:rotate-0 lg:rotate-2">
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-slate-800">
                <Image
                  src={service.mockups.desktop}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DETAILS: Deep Dive Content --- */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Main Content Area */}
          <div className="space-y-16 lg:col-span-8">
            {/* รายละเอียดบริการ */}
            <div className="space-y-6">
              <h3 className="font-prompt flex items-center gap-3 text-2xl font-black tracking-tighter text-white uppercase">
                <div className="bg-aurora-cyan h-8 w-1.5 rounded-full" />
                รายละเอียดบริการ
              </h3>
              <p className="font-anuphan text-lg leading-relaxed font-medium text-slate-400">
                {service.longDescription}
              </p>
            </div>

            {/* Features List Grid */}
            <div className="rounded-[3rem] border border-white/5 bg-white/[0.03] p-10 backdrop-blur-sm">
              <h3 className="font-prompt mb-10 flex items-center gap-3 text-xl font-black tracking-widest text-white uppercase">
                <Zap className="text-aurora-cyan h-6 w-6 animate-pulse" />
                สิ่งที่คุณจะได้รับ
              </h3>
              <ul className="grid gap-6 sm:grid-cols-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="group flex items-start gap-4">
                    <div className="bg-aurora-emerald/10 group-hover:bg-aurora-emerald/30 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors">
                      <CheckCircle2 className="text-aurora-emerald h-4 w-4" />
                    </div>
                    <span className="font-anuphan text-base font-bold text-slate-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4">
            <div className="border-aurora-cyan/30 bg-aurora-cyan/5 shadow-luminous group sticky top-32 overflow-hidden rounded-[2.5rem] border p-8">
              <div className="aurora-bg -top-1/2 -right-1/2 opacity-10 transition-opacity group-hover:opacity-20" />
              <div className="relative z-10">
                <h3 className="font-prompt mb-4 text-2xl font-black tracking-tighter text-white uppercase italic">
                  พร้อมเริ่มงาน?
                </h3>
                <p className="font-anuphan mb-8 font-medium text-slate-400">
                  ส่งข้อมูลให้เราประเมิน หรือนัดคุยรายละเอียดผ่าน{" "}
                  <span className="text-white">LINE Official</span> ตอบไวภายใน 5 นาทีครับ
                </p>
                {/* ✅ เรียกใช้ Lead Form */}
                <LineLeadForm variant="default" />
                <div className="mt-8 border-t border-white/10 pt-6 text-center">
                  <div className="font-prompt text-aurora-cyan inline-flex items-center gap-2 text-[10px] font-black tracking-widest uppercase">
                    <Sparkles className="h-3 w-3" /> Sales Engine Expert
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CROSS SELL: Other Services --- */}
      <section className="relative z-10 border-t border-white/5 bg-white/[0.01] py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
            <h2 className="font-prompt text-3xl leading-none font-black tracking-tighter text-white uppercase italic md:text-5xl">
              บริการอื่นๆ <br />
              <span className="text-aurora-cyan">ที่น่าสนใจ</span>
            </h2>
            <Link
              href="/services"
              className="font-prompt group flex items-center gap-2 text-xs font-black tracking-[0.2em] text-slate-500 uppercase transition-colors hover:text-white"
            >
              View All Solutions{" "}
              <ArrowRight className="text-aurora-cyan h-4 w-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {otherServices.slice(0, 3).map((svc) => (
              <ServiceCard key={svc.id} {...svc} />
            ))}
          </div>
        </div>
      </section>

      <LineStickyButton />
    </main>
  );
}
```
---

#### 🔍 Path: `mdx-components.tsx`
```typescript
/** @format */
import type { MDXComponents } from "mdx/types"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // 1. 🖼️ Custom Image (Fixed: HTML Validation & Luminous Style)
    // เปลี่ยนจาก div เป็น span เพื่อป้องกัน Error: <div> cannot be a descendant of <p>
    img: (props) => (
      <span className="shadow-luminous group relative my-12 block w-full overflow-hidden rounded-[2rem] border border-white/10">
        <span className="relative block aspect-video w-full overflow-hidden">
          <Image
            src={props.src || ""}
            alt={props.alt || "Blog Image"}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </span>
        {props.alt && (
          <span className="font-prompt block border-t border-white/5 bg-slate-950/90 p-4 text-center text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">
            {props.alt}
          </span>
        )}
      </span>
    ),

    // 2. 🔗 Custom Link: Luminous Cyan Style
    a: ({ href, children }) => {
      const isInternal = href?.startsWith("/") || href?.startsWith("#")
      const baseClass =
        "font-bold transition-all decoration-aurora-cyan/30 underline-offset-4 hover:decoration-aurora-cyan underline text-aurora-cyan hover:text-white"

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
          {children} <span className="text-[10px] opacity-50">↗</span>
        </a>
      )
    },

    // 3. 📣 Callout / Quote Box: Aurora Emerald Glow
    blockquote: ({ children }) => (
      <div className="border-aurora-emerald bg-aurora-emerald/5 shadow-luminous group relative my-10 rounded-r-[2rem] border-l-4 p-8 text-slate-300 italic">
        <div className="absolute top-4 right-6 opacity-10 transition-opacity group-hover:opacity-20">
          <Sparkles className="text-aurora-emerald h-10 w-10" />
        </div>
        {children}
      </div>
    ),

    // 4. 📢 CTA Box: The Conversion Engine
    CallToAction: ({
      title,
      url,
      label = "เริ่มโปรเจกต์ของคุณ",
    }: {
      title: string
      url: string
      label?: string
    }) => (
      <div className="shadow-luminous group relative my-12 overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.02] p-10 text-center md:p-14">
        <div className="aurora-bg inset-0 opacity-5 transition-opacity group-hover:opacity-10" />
        <h3 className="font-prompt relative z-10 mb-8 text-2xl font-black tracking-tighter text-white uppercase italic md:text-3xl">
          {title}
        </h3>
        <Link
          href={url}
          className="btn-luminous shadow-aurora-glow relative z-10 inline-flex items-center justify-center px-10 py-5 text-sm"
        >
          {label}{" "}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
        </Link>
      </div>
    ),

    // 5. Headings: High-End Typography
    h1: ({ children }) => (
      <h1 className="font-prompt mt-16 mb-8 text-4xl leading-none font-black tracking-tighter text-white uppercase italic md:text-6xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-prompt mt-14 mb-6 flex items-center gap-3 border-b border-white/5 pb-4 text-3xl font-black tracking-tighter text-white uppercase italic md:text-4xl">
        <div className="bg-aurora-cyan h-8 w-1.5 rounded-full" /> {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-prompt mt-10 mb-4 text-2xl font-black tracking-tight text-slate-100 uppercase md:text-3xl">
        {children}
      </h3>
    ),

    // 6. Lists & Paragraphs
    p: ({ children }) => (
      <p className="font-anuphan mb-6 text-lg leading-relaxed font-medium text-slate-400">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="mb-8 ml-2 list-none space-y-4 text-slate-400">
        {children}
      </ul>
    ),
    li: ({ children }) => (
      <li className="flex items-start gap-3">
        <div className="bg-aurora-cyan mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full shadow-[0_0_8px_rgba(122,243,255,0.8)]" />
        <span className="font-anuphan text-lg font-medium">{children}</span>
      </li>
    ),

    ...components,
  }
}
```
---

#### 🔍 Path: `constants/site-config.ts`
```typescript
/** @format */
import { Metadata } from "next"

export const siteConfig = {
  // 🏢 1. Brand Information (Identity)
  name: "นายเอ็มซ่ามากส์",
  companyName: "นายเอ็มซ่ามากส์ DevWeb Solutions",
  shortName: "เอ็มซ่ามากส์",
  tagline: "ทำเว็บซ่าๆ ปิดการขายไวมากส์ สำหรับ SME ไทย",

  // 🏷️ SEO Defaults
  title: "นายเอ็มซ่ามากส์ - รับทำเว็บซ่าๆ ปิดการขายไวมากส์ สำหรับ SME ไทย",
  description:
    "รับทำเว็บไซต์หน้าเดียวปิดการขายฉบับ นายเอ็มซ่ามากส์ - คุยง่าย งานไว ไม่เรื่องเยอะ เน้นกดลิงก์ทักไลน์แล้วจบงานได้เลย ด้วยเทคโนโลยี Next.js 15",

  // 🌐 2. Canonical URLs & Assets
  url: "https://www.aemdevweb.com",
  ogImage: "https://www.aemdevweb.com/og-image.png",

  // 🔗 3. Social Media & Direct Links (The Sales Engine 🚀)
  links: {
    facebook: "https://www.facebook.com/share/186gv7BAsc/",
    messenger: "https://m.me/aemdevweb",
    line: "https://lin.ee/SVMBEJ8", // Link สำหรับกด Add Friend
    lineId: "@127cnhtn", // Display ID
    github: "https://github.com/aemdevweb", // Optional
  },

  // 📞 4. Contact Details
  contact: {
    email: "aemdevweb@gmail.com",
    tel: "099-999-8989",
    telDisplay: "099-999-8989",
    address: "Bangkok, Thailand",
  },

  // 📣 5. Call to Action (Wording)
  cta: {
    main: "ทักไลน์ ปรึกษาเอ็มเลย",
    secondary: "ดูผลงานที่ผ่านมา",
    consult: "จองคิวทำเว็บ",
    pricing: "เช็คราคาประเมิน",
  },

  // 📈 6. Keywords Strategy
  keywords: [
    "นายเอ็มซ่ามากส์",
    "เอ็มซ่ามากส์รับทำเว็บ",
    "รับทำเว็บไซต์ SME",
    "รับทำ Sale Page",
    "เว็บหน้าเดียวปิดการขาย",
    "AEMDEVWEB",
    "ทำเว็บทักไลน์",
    "รับทำเว็บ Next.js",
    "จ้างทำเว็บราคาถูก",
  ],

  // 🎨 7. Theme Identity
  themeColor: "#059669", // Emerald-600 (AEM Green)
} as const

export type SiteConfig = typeof siteConfig

/**
 * 🛠️ Metadata Generator Helper
 * ฟังก์ชันช่วยสร้าง SEO Tags ให้แต่ละหน้าอัตโนมัติ (Next.js 15 Standard)
 */
export function constructMetadata({
  title,
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
      default: title ? `${title} | ${siteConfig.shortName}` : siteConfig.title,
      template: `%s | ${siteConfig.shortName}`,
    },
    description,
    // ✅ Fix: Cast as string[] to resolve 'readonly' incompatibility with Metadata type
    keywords: siteConfig.keywords as unknown as string[],
    authors: [
      {
        name: siteConfig.name,
        url: siteConfig.url,
      },
    ],
    creator: siteConfig.companyName,
    openGraph: {
      title: title ? `${title} | ${siteConfig.shortName}` : siteConfig.title,
      description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
      type: "website",
      locale: "th_TH",
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteConfig.shortName}` : siteConfig.title,
      description,
      images: [image],
      creator: "@aemdevweb",
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}
```
---

#### 🔍 Path: `constants/services-data.ts`
```typescript
/** @format */

// 📦 Define Icon Names Type
// ต้องตรงกับ Keys ใน iconMap ของไฟล์ components/shared/ServiceCard.tsx
export type ServiceIconName =
  | "Rocket"
  | "ShieldCheck"
  | "Code2"
  | "Gauge"
  | "Zap";

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  // ✅ เก็บชื่อ Icon เป็น String เพื่อความไหลลื่นของ Server/Client Components
  iconName: ServiceIconName;
  priceStart: number;
  priceDisplay: string;
  features: string[];
  isFeatured?: boolean;
  mockups: {
    mobile: string;
    desktop: string;
  };
}

/**
 * 🛠️ รายการบริการ AemDevWeb (Updated SME 2026 Strategy)
 * ปรับราคาและเนื้อหาเพื่อเน้นความคุ้มค่าและความเร็วระดับปีศาจ
 */
export const servicesData: ServiceItem[] = [
  {
    id: "svc_01",
    slug: "sale-page",
    title: "Sale Page ปิดการขาย (AI-Driven)",
    description:
      "หน้าเดียวจบ ปิดดีลไว! ออกแบบเพื่อยิง Ads Facebook/TikTok โดยเฉพาะ",
    longDescription:
      "เปลี่ยนคนดูให้กลายเป็นลูกค้าด้วยโครงสร้าง Sale Page ระดับสากล ผสานการเขียนคำขายด้วย AI Copywriting ช่วยกระตุ้นการตัดสินใจ โหลดไวระดับ 0.8 วินาที เพื่อไม่ให้คุณเสียโอกาสแม้แต่วินาทีเดียว",
    iconName: "Rocket",
    priceStart: 2590,
    priceDisplay: "2,590.-",
    features: [
      "ฟรี Domain & Hosting (.com) 1 ปีแรก",
      "AI Copywriting ช่วยร่างคำขายปิดดีล",
      "ติดตั้ง Facebook CAPI & TikTok Pixel",
      "ระบบแจ้งเตือนออเดอร์เข้า Line OA ทันที",
    ],
    isFeatured: true,
    mockups: {
      mobile: "/images/templates/project-01.webp",
      desktop: "/images/templates/project-01.webp",
    },
  },
  {
    id: "svc_02",
    slug: "corporate",
    title: "SME Corporate Standard",
    description:
      "สร้างความน่าเชื่อถือระดับบริษัทจดทะเบียน รองรับ SEO ติดหน้าแรก Google",
    longDescription:
      "เว็บไซต์กึ่งทางการที่เน้นสร้าง Brand Authority ให้กับ หจก. และบริษัทเปิดใหม่ จัดโครงสร้างถูกต้องตามหลัก SEO On-Page 100% เพื่อให้ธุรกิจของคุณดูเป็นมืออาชีพและค้นหาง่ายบนโลกออนไลน์",
    iconName: "ShieldCheck",
    priceStart: 6900,
    priceDisplay: "6,900.-",
    features: [
      "ระบบหลังบ้าน (CMS) แก้ไขข้อมูลเองได้",
      "โครงสร้างรองรับ SEO 100% (On-Page)",
      "SSL Certificate มาตรฐานความปลอดภัยสูง",
      "รองรับ Responsive แสดงผลคมชัดทุกหน้าจอ",
    ],
    isFeatured: true,
    mockups: {
      mobile: "/images/templates/project-01.webp",
      desktop: "/images/templates/project-01.webp",
    },
  },
  {
    id: "svc_03",
    slug: "internal-system",
    title: "Custom Business Logic (Web App)",
    description:
      "เปลี่ยนงาน Excel ที่ยุ่งยาก เป็นระบบอัตโนมัติที่ออกแบบตามการทำงานจริง",
    longDescription:
      "เลิกปวดหัวกับข้อมูลกระจัดกระจาย ด้วยระบบ Web Application ที่ออกแบบมาเพื่อธุรกิจคุณโดยเฉพาะ ไม่ว่าจะเป็นระบบสต็อก, ระบบจัดการสมาชิก หรือ Dashboard สรุปยอดขายแบบ Real-time",
    iconName: "Code2",
    priceStart: 12900,
    priceDisplay: "12,900.-",
    features: [
      "Dashboard สรุปภาพรวมแบบ Real-time",
      "ระบบฐานข้อมูล (Database) ความปลอดภัยสูง",
      "Custom Workflow ตามหน้างานจริง",
      "Database Backup อัตโนมัติ ป้องกันข้อมูลสูญหาย",
    ],
    isFeatured: false,
    mockups: {
      mobile: "/images/templates/project-01.webp",
      desktop: "/images/templates/project-01.webp",
    },
  },
  {
    id: "svc_04",
    slug: "speed-seo",
    title: "Web Surgery (Speed & SEO)",
    description:
      "ผ่าตัดเว็บเก่าให้แรงติดจรวด ปรับจูนคะแนน Google ให้เขียวทั้งกระดาน",
    longDescription:
      "บริการ Technical Optimization สำหรับเจ้าของเว็บที่มีปัญหาเว็บอืด โหลดช้า หรืออันดับตก เราจะเข้าไปผ่าตัดโครงสร้างโค้ด ปรับจูน Core Web Vitals ให้ผ่านเกณฑ์ Google เพื่อประสบการณ์ใช้งานที่ดีที่สุด",
    iconName: "Gauge",
    priceStart: 1900,
    priceDisplay: "1,900.-",
    features: [
      "การันตี Google PageSpeed (Mobile > 90)",
      "แก้ไข Core Web Vitals (LCP, CLS, INP)",
      "Image Optimization ลดขนาดรูปไม่ลดความชัด",
      "ตั้งค่า Search Console & Analytics 4",
    ],
    isFeatured: false,
    mockups: {
      mobile: "/images/templates/project-01.webp",
      desktop: "/images/templates/project-01.webp",
    },
  },
];

/**
 * 🛠️ Helpers Functionality
 */

// 🔍 ดึงข้อมูลบริการตาม Slug
export const getServiceBySlug = (slug: string): ServiceItem | undefined =>
  servicesData.find((s) => s.slug === slug);

// 🔍 ดึงเฉพาะบริการแนะนำ (Featured)
export const getFeaturedServices = (): ServiceItem[] =>
  servicesData.filter((s) => s.isFeatured);

// 🔍 ดึงบริการอื่นๆ ที่ไม่ใช่ตัวปัจจุบัน (สำหรับ Cross-sell)
export const getOtherServices = (currentSlug: string): ServiceItem[] =>
  servicesData.filter((s) => s.slug !== currentSlug);
```
---

#### 🔍 Path: `tsconfig.json`
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
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
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
    "content/**/*.ts"
  ],
  "exclude": ["node_modules"]
}
```
---

#### 🔍 Path: `tailwind.config.ts`
```typescript
/** @format */
import type { Config } from "tailwindcss"
import animate from "tailwindcss-animate"
import typography from "@tailwindcss/typography"
import defaultTheme from "tailwindcss/defaultTheme"

const config: Config = {
  // 🎯 1. Content Scanned
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts}",
    "./constants/**/*.{js,ts}",
    "./content/**/*.{js,ts,md,mdx}",
  ],

  // 🌓 Dark Mode Strategy
  darkMode: "class",

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "4rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // 🔤 2. Fonts: เน้นความโปร่งและอ่านง่าย (Anuphan = Modern Friendly)
      fontFamily: {
        sans: ["var(--font-prompt)", ...defaultTheme.fontFamily.sans],
        kanit: ["var(--font-kanit)"],
        prompt: ["var(--font-prompt)"],
        anuphan: ["var(--font-anuphan)"],
        mono: ["var(--font-jetbrains)", ...defaultTheme.fontFamily.mono],
      },

      // 🎨 3. Luminous Color Palette: ฉีกความหมองด้วยโทน Midnight & Aurora
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Brand Colors: ใช้ OKLCH เพื่อความสว่างที่แม่นยำ
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },

        // Aurora Accent: สีที่ช่วยให้เว็บดู "สว่างจากข้างใน"
        aurora: {
          cyan: "oklch(0.78 0.12 200)", // ความสดใสของท้องฟ้า
          violet: "oklch(0.65 0.18 280)", // ความพรีเมียมของยามค่ำคืน
          emerald: "oklch(0.82 0.18 155)", // เขียวสว่าง (Electric Emerald)
          white: "oklch(0.98 0.01 240)", // ขาวนวลลดความกระด้าง
        },

        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },

      // 🔘 4. Weightless Radius: โค้งมนระดับ Super-ellipse เพื่อความเป็นมิตรสูงสุด
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1.25rem",
        "2xl": "2rem",
        "3xl": "3rem",
        "4xl": "4.5rem",
      },

      // 🎬 5. Keyframes: เพิ่ม Aurora Movement ให้เว็บดูมีชีวิต
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // การลอยแบบนุ่มนวล (Human-like movement)
        float: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-20px) scale(1.02)" },
        },
        // แสงออโรร่าเต้นระบำพื้นหลัง
        aurora: {
          "0%, 100%": { opacity: "0.3", transform: "translate(0, 0) scale(1)" },
          "33%": {
            opacity: "0.5",
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            opacity: "0.4",
            transform: "translate(-20px, 20px) scale(0.9)",
          },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(40px) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },

      // ⚡ 6. Animations
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        aurora: "aurora 15s ease-in-out infinite",
        "fade-in-up": "fade-in-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },

      // 🪄 7. Luminous Utilities
      backgroundImage: {
        "luminous-gradient":
          "linear-gradient(135deg, oklch(0.78 0.12 200) 0%, oklch(0.82 0.18 155) 100%)",
        "midnight-mesh":
          "radial-gradient(at 0% 0%, oklch(0.15 0.05 260) 0%, transparent 50%), radial-gradient(at 100% 100%, oklch(0.12 0.03 280) 0%, transparent 50%)",
      },
      boxShadow: {
        // เงาที่ดูเบาและฟุ้ง (Soft Ambient Shadow)
        luminous: "0 20px 80px -15px rgba(0, 0, 0, 0.3)",
        "aurora-glow": "0 0 60px -10px oklch(0.78 0.12 200 / 0.3)",
      },
    },
  },

  plugins: [animate, typography],
}

export default config
```
---

#### 🔍 Path: `package.json`
```json
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
---

#### 🔍 Path: `types/index.ts`
```typescript
/** @format */

// --- 🌐 SITE & NAVIGATION CONFIG ---
export interface NavItem {
  title: string;
  name?: string; // รองรับคอมโพเนนต์ที่เรียกใช้ .name
  href: string;
  disabled?: boolean;
  external?: boolean;
  badge?: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export interface SiteConfig {
  name: string;
  companyName: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    line: string;
    facebook?: string;
    messenger?: string;
    lineId?: string;
    github?: string;
  };
  keywords: string[];
}

// --- 📄 BLOG & CONTENT (MDX) ---
export interface BlogPostProps {
  title: string;
  excerpt?: string;
  description?: string; // รองรับการดึงจาก MDX Metadata
  slug: string;
  date: string;
  coverImage: string;
  category?: string;
  readingTime?: string; // แก้ Error ใน BlogCard.tsx
}

export interface BlogMetadata {
  title: string;
  description: string;
  date: string;
  category: string;
  coverImage: string;
  author: string;
  readingTime?: string;
}

export interface BlogPost extends BlogMetadata {
  slug: string;
  // ✅ Fixed: เปลี่ยน any เป็น unknown เพื่อความปลอดภัยของข้อมูล content
  content?: unknown; 
}

// --- 💼 SERVICES & SOLUTIONS ---
export type ServiceIconName =
  | "Rocket"
  | "ShieldCheck"
  | "Code2"
  | "Gauge"
  | "Zap";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  icon: ServiceIconName;
  features: string[];
  priceRange?: string;
  slug: string;
  priceDisplay?: string;
  mockups?: {
    desktop: string;
    mobile: string;
  };
}

// --- 🏆 CASE STUDIES & SHOWCASE ---
export interface ShowcaseStats {
  label: string;
  value: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  stats: ShowcaseStats;
  tags: string[];
  results: string[];
  clientQuote?: {
    text: string;
    author: string;
  };
}

// --- 🎨 TEMPLATE ENGINE ---
export type TemplateCategory =
  | "SalePage"
  | "Corporate"
  | "ECommerce"
  | "Service"
  | "Portfolio"
  | string;

export interface CategoryInfo {
  slug: string;
  name: string;
  description: string;
  themeColor?: string;
}

export interface TemplateItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: TemplateCategory;
  image: string;
  demoUrl?: string;
  price?: number;
  salePrice?: number;
  features: string[];
  isPopular?: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  themeColor?: string;
  
  mockups?: {
    desktop?: string;
    mobile?: string;
  };

  salesData?: {
    soldCount: number;
    rating: number;
    reviews: number;
  };
}

// --- 📩 LEAD & CONVERSION ---
export interface LeadFormSubmission {
  name: string;
  email?: string;
  lineId: string;
  businessType: string;
  budget: string;
  message: string;
  source: string;
  timestamp: string;
}

// --- ⭐ SOCIAL PROOF ---
export interface TestimonialItem {
  id: number;
  content: string;
  author: string;
  role: string;
  rating: number;
  image?: string;
  company?: string;
}
```
---

#### 🔍 Path: `next.config.ts`
```typescript
/** @format */
import type { NextConfig } from "next"
import createMDX from "@next/mdx"

/**
 * 🚀 Next.js Config: Luminous Performance Edition
 * ปรับแต่งเพื่อความเร็วสูงสุดสำหรับโดเมน www.unlink-th.com
 * รองรับ Image Optimization และ MDX Rust-based Compiler
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,

  // 📄 รองรับไฟล์หลากหลายนามสกุลสำหรับระบบ Content & Sales Hub
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // 🖼️ Image Optimization: ยกระดับความเร็วด้วย AVIF และ WebP
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lin.ee", // สำหรับ Assets จาก Line Official
      },
      {
        protocol: "https",
        hostname: "**.supabase.co", // สำหรับ Database Assets จาก Supabase
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // สำหรับรูปประกอบชั่วคราว
      },
    ],
  },

  // ⚡ Experimental Features: ขีดสุดของความเร็วระดับ Unlink-TH
  experimental: {
    mdxRs: true, // 🦀 ใช้ Rust-based Compiler เพื่อความเร็วในการบิวด์ MDX
    optimizePackageImports: ["lucide-react", "framer-motion", "sonner"], // ลดขนาด Bundle Size อัตโนมัติ
  },

  // 🛠️ Logging & Performance Monitoring
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

/**
 * 📝 MDX Configuration
 * ติดตั้ง Plugin พื้นฐานเพื่อความลื่นไหลในการเขียน Content
 */
const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
```
---

#### 🔍 Path: `components.json`
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

#### 🔍 Path: `lib/mdx.ts`
```typescript
/** @format */
import fs from "fs"
import path from "path"
import matter from "gray-matter"

// ✅ Type Definition
export interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  coverImage: string
  category: string
  content: string
  readingTime: string
  isFeatured?: boolean
}

const BLOG_PATH = path.join(process.cwd(), "content/blog")

// ⚡ Helper: คำนวณเวลาอ่าน (Reading Time)
function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200
  const noOfWords = text.split(/\s/g).length
  const minutes = Math.ceil(noOfWords / wordsPerMinute)
  return `${minutes} นาที`
}

// 📂 Get All Posts
export async function getAllPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(BLOG_PATH)) return []

  const files = fs.readdirSync(BLOG_PATH)

  const posts = files
    .filter((file) => /\.(mdx|md)$/.test(file))
    .map((file) => {
      try {
        const filePath = path.join(BLOG_PATH, file)
        const fileContent = fs.readFileSync(filePath, "utf8")
        const { data, content } = matter(fileContent)

        return {
          slug: file.replace(/\.(mdx|md)$/, ""),
          title: data.title || "Untitled",
          date: data.date || new Date().toISOString(),
          description: data.description || "",
          coverImage: data.coverImage || "/images/og-image.png",
          category: data.category || "General",
          isFeatured: data.isFeatured || false,
          content: content,
          readingTime: calculateReadingTime(content),
        } as BlogPost
      } catch (e) {
        console.error(`❌ Error parsing ${file}`, e)
        return null
      }
    })
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

// 🔍 Get Single Post
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const allPosts = await getAllPosts()
  return allPosts.find((post) => post.slug === slug) || null
}
```
---

#### 🔍 Path: `.env`
```text
```
---

## 📝 Summary
Architecture scan and context compilation completed successfully.
Focus maintained on Privacy, Security, and AI-readiness.

_Report generated by www.unlink-th.com Internal Automation._
