# 📑 Project Context Summary (Full Scan)

<!--
  Domain: www.aemdevweb.com
  Canonical: https://aemdevweb.com
  Generated: 2026-01-18 12:21:54
  Type: Full Context & Code Analysis
-->

_Generated on: **2026-01-18 12:21:54**_
> **Project:** www.aemdevweb.com
> **URL:** https://aemdevweb.com
> **Status:** Production-Ready Analysis | Full System Context | De-indexing Focus

## 🔴 1. Project Health & Deployment Readiness
✅ **READY FOR DEPLOY:** The project meets all production standards.

### 📍 Production Route Map
```text
```text
Route (app)                                 Size  First Load JS
┌ ○ /                                    16.3 kB         136 kB
├ ○ /_not-found                            990 B         103 kB
├ ● /[template]                            134 B         170 kB
├   ├ /SalePage
├   ├ /Service
├   └ /Corporate
├ ● /[template]/[slug]                     134 B         170 kB
├   ├ /SalePage/shop-master-pro
├   ├ /Service/sushi-omakase
├   ├ /Corporate/law-firm-pro
├   └ /Service/aura-clinic
├ ○ /about                               6.68 kB         163 kB
├ ○ /blog                                  174 B         111 kB
├ ● /blog/[slug]                           174 B         111 kB
├   ├ /blog/5-points-killing-sales
├   ├ /blog/copywriting-secrets
├   ├ /blog/facebook-ads-vs-website
├   └ [+2 more paths]
├ ○ /case-studies                          132 B         161 kB
├ ƒ /case-studies/[slug]                  2.5 kB         122 kB
├ ○ /case-studies/unlink-th                132 B         161 kB
├ ○ /contact                             5.17 kB         157 kB
├ ○ /robots.txt                            132 B         102 kB
├ ○ /services                            3.12 kB         117 kB
├ ● /services/[slug]                       134 B         170 kB
├   ├ /services/shop-master-pro
├   ├ /services/sushi-omakase
├   ├ /services/law-firm-pro
├   └ /services/aura-clinic
└ ○ /sitemap.xml                           132 B         102 kB
+ First Load JS shared by all             102 kB
  ├ chunks/291-6ac79937ecd9ac89.js       45.7 kB
  ├ chunks/455135d8-30ce3918f044b0b7.js  54.2 kB
  └ other shared chunks (total)          2.05 kB
○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
ƒ  (Dynamic)  server-rendered on demand
```
```

## 📊 2. File Statistics by Extension
```text
     63 tsx
     17 ts
      7 png
      6 webp
      5 sh
      5 mdx
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
  📄 robots.ts
  📄 globals.css
  📄 layout.tsx
  📄 loading.tsx
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
    📄 HomeClientSections.tsx
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
  📄 og-image.png
  📄 grid.svg
  📂 images/
    📄 og-image.png
    📂 showcase/
      📄 unlink-th1.webp
      📄 project-01.webp
      📄 unlink-th.webp
    📂 blog/
      📄 project-01.webp
    📂 templates/
      📄 project-01.webp
      📄 project-01-mobile.webp
  📂 download/
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
Generated at: 2026-01-18 12:17:22
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
┌ ○ /                                    16.3 kB         136 kB
├ ○ /_not-found                            990 B         103 kB
├ ● /[template]                            134 B         170 kB
├   ├ /SalePage
├   ├ /Service
├   └ /Corporate
├ ● /[template]/[slug]                     134 B         170 kB
├   ├ /SalePage/shop-master-pro
├   ├ /Service/sushi-omakase
├   ├ /Corporate/law-firm-pro
├   └ /Service/aura-clinic
├ ○ /about                               6.68 kB         163 kB
├ ○ /blog                                  174 B         111 kB
├ ● /blog/[slug]                           174 B         111 kB
├   ├ /blog/5-points-killing-sales
├   ├ /blog/copywriting-secrets
├   ├ /blog/facebook-ads-vs-website
├   └ [+2 more paths]
├ ○ /case-studies                          132 B         161 kB
├ ƒ /case-studies/[slug]                  2.5 kB         122 kB
├ ○ /case-studies/unlink-th                132 B         161 kB
├ ○ /contact                             5.17 kB         157 kB
├ ○ /robots.txt                            132 B         102 kB
├ ○ /services                            3.12 kB         117 kB
├ ● /services/[slug]                       134 B         170 kB
├   ├ /services/shop-master-pro
├   ├ /services/sushi-omakase
├   ├ /services/law-firm-pro
├   └ /services/aura-clinic
└ ○ /sitemap.xml                           132 B         102 kB
+ First Load JS shared by all             102 kB
  ├ chunks/291-6ac79937ecd9ac89.js       45.7 kB
  ├ chunks/455135d8-30ce3918f044b0b7.js  54.2 kB
  └ other shared chunks (total)          2.05 kB


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
@plugin "@tailwindcss/typography";

/* 🎨 AEM DEVWEB DESIGN SYSTEM 2026: MIDNIGHT DEEP TECH 
   Performance Tuning: TBT & Main-thread Work Optimization (Updated)
*/

@theme {
  /* --- 1. Typography Hierarchy --- */
  --font-prompt: var(--font-prompt), ui-sans-serif, system-ui;
  --font-anuphan: var(--font-anuphan), ui-sans-serif, system-ui;
  --font-mono: var(--font-jetbrains), ui-monospace, monospace;

  /* --- 2. Animations (Smooth & Lightweight) --- */
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(12deg); }
    50% { transform: translateY(-15px) rotate(14deg); }
  }
  --animate-float: float 6s ease-in-out infinite;

  @keyframes aurora {
    0%, 100% { opacity: 0.3; transform: translate(0, 0) scale(1); }
    33% { opacity: 0.4; transform: translate(20px, -30px) scale(1.05); }
    66% { opacity: 0.35; transform: translate(-15px, 15px) scale(0.95); }
  }
  --animate-aurora: aurora 15s ease-in-out infinite;

  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(calc(-100% - 2.5rem)); }
  }
  --animate-marquee: marquee 50s linear infinite;

  /* --- 3. Colors Mapping (OKLCH Color Space) --- */
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-border: var(--border);
  
  /* Aurora Accents */
  --color-aurora-cyan: var(--aurora-cyan);
  --color-aurora-violet: var(--aurora-violet);
  --color-aurora-emerald: var(--aurora-emerald);

  /* --- 4. Shadows & Radius --- */
  --shadow-luminous: 0 20px 60px -15px rgba(0, 0, 0, 0.5);
  --shadow-aurora-glow: 0 0 50px -10px oklch(0.75 0.12 200 / 0.2);

  --radius-xl: 1.25rem;
  --radius-2xl: 2rem;
  --radius-3xl: 2.75rem;
}

@layer base {
  :root {
    /* 🟢 Light Mode Fallback */
    --background: oklch(0.99 0.005 240);
    --foreground: oklch(0.2 0.02 240);
    --border: oklch(0.92 0.01 240);
    --aurora-cyan: oklch(0.65 0.15 200);
    --aurora-violet: oklch(0.55 0.20 280);
    --aurora-emerald: oklch(0.70 0.15 155);
  }

  .dark {
    /* 🌑 Dark Mode: Midnight Deep Tech (Stable Edition) */
    --background: oklch(0.14 0.02 260);
    --foreground: oklch(0.98 0.005 240);
    --border: oklch(0.25 0.03 260 / 0.5);
    
    /* Neon Accents */
    --aurora-cyan: oklch(0.75 0.12 200);
    --aurora-violet: oklch(0.65 0.18 280);
    --aurora-emerald: oklch(0.82 0.18 155);
  }

  * {
    border-color: var(--border);
  }

  body {
    @apply bg-background text-foreground selection:bg-aurora-cyan/30 antialiased;
    font-family: var(--font-prompt);
    
    /* ระบบแสง Ambient พื้นหลังแบบจางๆ 3% (Noise-free) */
    background-image:
      radial-gradient(circle at 2% 2%, color-mix(in oklch, var(--aurora-cyan), transparent 97%), transparent 40%),
      radial-gradient(circle at 98% 98%, color-mix(in oklch, var(--aurora-violet), transparent 97%), transparent 40%);
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-black tracking-tighter uppercase;
  }
  
  p {
    @apply leading-relaxed font-medium;
    font-family: var(--font-anuphan);
  }
}

@layer components {
  /* 🪄 Layered UI Components */

  /* ✅ FIXED: Optimized Aurora Background for Mobile Performance */
  .aurora-bg {
    @apply pointer-events-none absolute opacity-10 transition-all duration-1000;
    z-index: -20;
    
    /* ⚡ Performance Optimization: */
    will-change: transform, opacity; /* แจ้ง Browser ล่วงหน้าเพื่อลด Main-thread work */
    transform: translateZ(0); /* บังคับใช้ GPU (Hardware Acceleration) */
    
    /* Mobile: ลด Blur เหลือ 40px และใช้ Static Radial Gradient */
    filter: blur(40px);
    background: radial-gradient(circle, var(--aurora-cyan), var(--aurora-violet));

    @media (min-width: 768px) {
      /* Desktop: จัดเต็ม Blur 140px และ Animation เต็มรูปแบบ */
      filter: blur(140px);
      background: linear-gradient(
        135deg,
        var(--aurora-cyan),
        var(--aurora-violet),
        var(--aurora-emerald)
      );
      animation: var(--animate-aurora);
    }
  }

  .text-luminous {
    @apply font-black tracking-tighter text-white uppercase;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5));
  }

  .btn-luminous {
    @apply shadow-aurora-glow relative flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-4 font-bold transition-all duration-500 hover:scale-[1.03] active:scale-95;
    background: linear-gradient(135deg, var(--aurora-cyan), var(--aurora-emerald));
    color: oklch(0.14 0.02 260);
  }

  .glass-card {
    @apply shadow-luminous border backdrop-blur-2xl transition-all duration-500;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01));
    border-color: rgba(255, 255, 255, 0.06);
    border-radius: var(--radius-2xl);
  }
}

/* ⚡ Utilities */
@utility no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
}
```
---

#### 🔍 Path: `app/layout.tsx`
```typescript
/** @format */
import type { Metadata, Viewport } from "next"
import { Prompt, Anuphan } from "next/font/google"
import NextTopLoader from "nextjs-toploader"
import { Toaster } from "@/components/ui/sonner"
import { AppProvider } from "@/providers/AppProvider"
import { siteConfig } from "@/constants/site-config"
import { cn } from "@/lib/utils"
import "./globals.css"

// --- 1. Setup Fonts: High-Performance Thai Stack ---
// ใช้ display: 'swap' เพื่อให้ Text ขึ้นทันที (ลด LCP)
const fontPrompt = Prompt({
  weight: ["400", "500", "600", "700", "900"], // เพิ่ม 500 เผื่อบางเคส
  subsets: ["thai", "latin"],
  variable: "--font-prompt",
  display: "swap",
  preload: true,
})

const fontAnuphan = Anuphan({
  weight: ["400", "500", "600"],
  subsets: ["thai", "latin"],
  variable: "--font-anuphan",
  display: "swap",
  preload: true,
})

// --- 2. SEO & Metadata Strategy ---
export const metadata: Metadata = {
  title: {
    default: siteConfig.name, 
    template: `%s | ${siteConfig.shortName} - รับทำเว็บคุยง่าย`, 
  },
  description: siteConfig.description,
  keywords: [
    "นายเอ็มซ่ามากส์",
    "เอ็มซ่ามากส์รับทำเว็บ",
    "จ้างทำเว็บคุยง่ายๆ",
    "รับทำเซลเพจ SME",
    "เว็บหน้าเดียวปิดการขาย",
    "AEMDEVWEB",
    ...siteConfig.keywords,
  ],
  authors: [{ name: "นายเอ็มซ่ามากส์", url: siteConfig.url }],
  creator: siteConfig.companyName,
  // ตั้งค่า Base URL เพื่อแก้ปัญหา OG Image ไม่ขึ้นในบาง Platform
  metadataBase: new URL(siteConfig.url),
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
        alt: "นายเอ็มซ่ามากส์ - High-Conversion Web Factory",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

// ✅ Viewport Optimization
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
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
    // suppressHydrationWarning จำเป็นสำหรับการใช้ next-themes ใน AppProvider
    <html lang="th" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          "selection:bg-aurora-cyan/30 selection:text-aurora-cyan", // Theme Selection Color
          "transition-colors duration-500", // Smooth Theme Switch
          fontPrompt.variable,
          fontAnuphan.variable
        )}
      >
        {/* 🚀 NextTopLoader: Custom Color for Luminous Theme */}
        <NextTopLoader
          color="oklch(0.78 0.12 200)" // Aurora Cyan
          initialPosition={0.08}
          height={2}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px oklch(0.78 0.12 200),0 0 5px oklch(0.78 0.12 200)"
        />

        <AppProvider>
          {/* Main Wrapper Structure */}
          <div className="relative flex min-h-screen flex-col">
            {children}
          </div>

          {/* Global Notification Engine */}
          <Toaster
            position="bottom-right"
            richColors
            closeButton
            theme="system"
            toastOptions={{
              className: "rounded-3xl border-white/10 bg-background/80 backdrop-blur-xl font-prompt",
              style: { fontFamily: "var(--font-prompt)" },
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
import dynamic from "next/dynamic"

// 🧩 Components - Static Imports (Instant LCP Engine)
// โหลดทันทีเพื่อให้หน้าแรก (Hero Section) แสดงผลเร็วที่สุดโดยไม่มี Layout Shift
import { Hero } from "@/components/landing/Hero"
import { TrustBadge } from "@/components/shared/TrustBadge"
import { LineStickyButton } from "@/components/shared/LineStickyButton"

// 🚀 Client-Side Sections (Deferred Loading - Lazy Load)
// ย้าย Components หนักๆ ที่ต้อง Scroll ถึงจะเจอ มาโหลดแบบ Dynamic เพื่อลด TBT
const ValueProp = dynamic(() => import("@/components/landing/ValueProp").then((mod) => mod.ValueProp))
const InsightsSection = dynamic(() => import("@/components/landing/InsightsSection").then((mod) => mod.InsightsSection))
const WorkProcess = dynamic(() => import("@/components/sales-engine/WorkProcess").then((mod) => mod.WorkProcess))
const LineLeadForm = dynamic(() => import("@/components/sales-engine/LineLeadForm").then((mod) => mod.LineLeadForm))
// ServiceCard เป็น Default Export ไม่ต้องใช้ .then
const ServiceCard = dynamic(() => import("@/components/shared/ServiceCard"))

// 📦 Already Dynamic Internal (ตามที่คุณแจ้งไว้)
import HomeClientSections from "@/components/landing/HomeClientSections"

// 📦 Data & Configuration
import { servicesData } from "@/constants/services-data"
import { siteConfig } from "@/constants/site-config"

/**
 * 🔍 Metadata SEO Strategy
 * จูน Title และ Description ให้ตรงกับตัวตนแบรนด์นายเอ็มซ่ามากส์
 */
export const metadata: Metadata = {
  title: `นายเอ็มซ่ามากส์ | ${siteConfig.tagline}`,
  description: siteConfig.description,
  openGraph: {
    title: `นายเอ็มซ่ามากส์ | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
}

/**
 * 🚀 HomePage: AEM DEVWEB Engine v.2026
 * สถาปัตยกรรม: Hero > Trust > Value > ClientSections > Insights > Services > Process > CTA
 * ✅ Optimized: PageSpeed 100 Focus | Server-First Architecture | High-Conversion
 */
export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden antialiased">
      
      {/* 🌌 Local Decorative Layer: จัดการแสงพื้นหลังแยกส่วน (-z-10) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none">
        <div className="aurora-bg absolute -top-[10%] -right-[10%] h-[800px] w-[1000px] opacity-[0.1] blur-[120px]" />
        <div className="aurora-bg absolute top-1/2 -left-[10%] h-[800px] w-[800px] opacity-[0.05] blur-[120px]" />
      </div>

      {/* 1. HERO & 2. TRUST SIGNALS: วินาทีแรกที่ผู้ใช้สัมผัส (Critical Rendering Path) */}
      {/* ส่วนนี้ยังคง Static ไว้เพื่อ LCP ที่ดีที่สุด */}
      <Hero />
      <div className="relative z-20 -mt-12 md:-mt-16">
        <TrustBadge />
      </div>

      {/* 3. VALUE PROPOSITION: ขยี้ปัญหาและนำเสนอทางออก */}
      <section className="relative overflow-hidden py-24 lg:py-36">
        {/* Background Accent: สร้างมิติด้วย Gradient เอียงจางๆ */}
        <div className="from-aurora-emerald/5 to-aurora-violet/5 absolute inset-0 -z-10 origin-top-left scale-110 -skew-y-3 transform bg-gradient-to-br opacity-50 blur-3xl" />
        <div className="relative z-10">
          <ValueProp />
        </div>
      </section>

      {/* 🚀 4, 8, 9. DYNAMIC CLIENT SECTIONS: Stats, Pricing, Testimonials */}
      {/* ส่วนนี้ถูกแยกโหลดแบบ Lazy เพื่อไม่ให้บล็อกการแสดงผล Hero ด้านบน */}
      <HomeClientSections />

      {/* 5. INSIGHTS SECTION: โชว์ผลงาน Case Study และบทความความรู้ */}
      <div className="relative z-10">
        <InsightsSection />
      </div>

      {/* 6. SERVICES GRID: แคตตาล็อกบริการสำหรับ SME */}
      <section id="services" className="relative py-32 lg:py-48">
        <div className="mx-auto mb-24 max-w-4xl px-4 text-center">
          <div className="text-aurora-cyan font-prompt mb-6 inline-block text-[10px] font-black tracking-[0.4em] uppercase">
            Solutions for Growth
          </div>
          <h2 className="text-luminous mb-10 text-4xl uppercase md:text-8xl italic">
            Services <span className="text-slate-600">&</span> Solutions
          </h2>
          <p className="font-anuphan mx-auto max-w-2xl text-lg font-medium text-slate-400 md:text-2xl">
            เลือกโซลูชันที่ออกแบบมาเพื่อการเติบโตอย่างยั่งยืนของ{" "}
            <span className="text-white italic underline decoration-aurora-cyan/30 underline-offset-8">SME ไทย</span>
          </p>
        </div>

        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} {...service} className="h-full" />
          ))}
        </div>
      </section>

      {/* 7. PROCESS FLOW: แสดงขั้นตอนการทำงานที่โปร่งใส */}
      <WorkProcess />

      {/* 10. FINAL CONVERSION BOX: กระตุ้นการตัดสินใจขั้นสุดท้าย */}
      <section className="mb-40 px-4">
        <div className="glass-card group shadow-luminous hover:border-aurora-cyan/30 relative overflow-hidden p-12 text-center transition-all duration-700 md:p-32">
          {/* Inner Glow Decorative: แสงรัศมีภายในหน้าบัตร */}
          <div className="bg-aurora-emerald/10 absolute -top-24 -right-24 h-96 w-96 rounded-full opacity-40 blur-[120px] transition-all duration-700 group-hover:opacity-60" />

          <h2 className="text-luminous relative z-10 mb-12 text-4xl leading-none uppercase md:text-[6rem] lg:text-[8rem] italic">
            Ready to <span className="text-aurora-emerald">Scale</span> <br />
            Your Business?
          </h2>

          <div className="relative z-10 flex flex-col items-center justify-center gap-10 sm:flex-row">
            <LineLeadForm
              variant="button"
              label="เริ่มโปรเจกต์กับนายเอ็ม"
              className="scale-110 md:scale-125"
            />
          </div>
        </div>
      </section>

      {/* 🛰️ Conversion Floating Engine: ปุ่มติดต่อที่เข้าถึงง่ายที่สุด */}
      <LineStickyButton />
    </div>
  )
}
```
---

#### 🔍 Path: `components/landing/HomeClientSections.tsx`
```typescript
/** @format */
"use client"

import React from "react"
import dynamic from "next/dynamic"

/**
 * 🚀 HomeClientSections: Luminous Performance Engine (v.2026)
 * ✅ FIXED: ปรับจูนความสูง Skeleton เพื่อค่า CLS = 0
 * ✅ Strategy: จองพื้นที่หน้าจอ (Space Reservation) ให้ตรงกับคอมโพเนนต์จริง
 */

// 1. 🏗️ Impact Stats Loading Skeleton (Height Reserved)
const ImpactStats = dynamic(
  () => import("@/components/sales-engine/ImpactStats").then((mod) => mod.ImpactStats),
  {
    ssr: false,
    loading: () => (
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col items-center space-y-5">
              <div className="h-16 w-16 animate-pulse rounded-2xl bg-white/5 border border-white/5" />
              <div className="h-10 w-28 animate-pulse rounded-lg bg-white/5" />
              <div className="h-4 w-36 animate-pulse rounded-lg bg-white/5" />
            </div>
          ))}
        </div>
      </div>
    ),
  }
)

// 2. 💰 Price Estimator Loading Skeleton (Height Fixed: 600px)
const PriceEstimator = dynamic(
  () => import("@/components/sales-engine/PriceEstimator").then((mod) => mod.PriceEstimator),
  {
    ssr: false,
    loading: () => (
      <div className="glass-card mx-auto flex h-[600px] w-full max-w-5xl animate-pulse flex-col items-center justify-center border border-white/10 bg-white/5 rounded-[2.5rem] shadow-luminous">
        {/* Header Placeholder */}
        <div className="mb-12 h-10 w-64 rounded-2xl bg-white/10" />
        {/* List Placeholders */}
        <div className="w-full max-w-2xl space-y-6 px-10">
          <div className="h-20 w-full rounded-2xl bg-white/5 border border-white/5" />
          <div className="h-20 w-full rounded-2xl bg-white/5 border border-white/5" />
          <div className="h-20 w-full rounded-2xl bg-white/5 border border-white/5" />
        </div>
      </div>
    ),
  }
)

// 3. ⭐ Testimonials Loading Skeleton (Masonry Simulation)
const Testimonials = dynamic(
  () => import("@/components/landing/Testimonials").then((mod) => mod.Testimonials),
  {
    ssr: false,
    loading: () => (
      <div className="container mx-auto px-4 pb-20">
        <div className="columns-1 gap-8 space-y-8 md:columns-2 lg:columns-3">
          {/* สร้างกล่องจำลองความสูงต่างกันเพื่อลด Layout Shift ใน Masonry */}
          <div className="glass-card h-[320px] w-full animate-pulse rounded-[2rem] bg-white/5 border border-white/5" />
          <div className="glass-card h-[400px] w-full animate-pulse rounded-[2rem] bg-white/5 border border-white/5" />
          <div className="glass-card h-[350px] w-full animate-pulse rounded-[2rem] bg-white/5 border border-white/5" />
        </div>
      </div>
    ),
  }
)

export default function HomeClientSections() {
  return (
    <>
      {/* 📊 Section 4: Impact Statistics (Social Proof) */}
      <section className="relative z-10 border-y border-white/5 bg-white/[0.01] backdrop-blur-3xl">
        <div className="from-aurora-cyan/5 to-aurora-violet/5 absolute inset-0 bg-gradient-to-r via-transparent opacity-30" />
        <div className="relative">
          <ImpactStats />
        </div>
      </section>

      {/* 💰 Section 8: Pricing Engine (Conversion Hub) */}
      <section id="pricing" className="relative container mx-auto px-4 py-32 lg:py-48">
        {/* Background Glow สำหรับการจองพื้นที่สายตา */}
        <div className="bg-aurora-cyan/10 absolute top-1/2 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-[120px]" />
        
        <div className="mx-auto max-w-5xl">
          <div className="mb-20 text-center">
            <span className="text-aurora-cyan font-prompt mb-6 block text-[10px] font-black tracking-[0.3em] uppercase italic">
              Transparent Pricing
            </span>
            <h2 className="text-luminous mb-6 text-4xl uppercase md:text-6xl italic">
              ประเมินราคา<span className="text-aurora-emerald">เบื้องต้น</span>
            </h2>
            <p className="font-anuphan mx-auto max-w-2xl text-lg text-slate-400 font-medium">
              เลือกฟีเจอร์ที่ต้องการ แล้วระบบจะคำนวณงบประมาณให้ทันที <br className="hidden md:block" />
              <span className="text-white/60 text-sm">(งบประมาณจริงอาจปรับเปลี่ยนตามขอบเขตงาน)</span>
            </p>
          </div>

          {/* Logic Engine ลบ CLS ด้วย Fixed Height Skeleton */}
          <PriceEstimator />
        </div>
      </section>

      {/* ⭐ Section 9: Testimonials (Trust Signals) */}
      <section className="relative overflow-hidden rounded-t-[3rem] border-t border-white/10 bg-white/[0.01] pt-32 md:rounded-t-[4.5rem]">
        <div className="bg-aurora-violet/10 absolute top-0 right-0 h-96 w-96 rounded-full blur-[100px] opacity-50" />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="mb-20 text-center">
             <div className="text-aurora-violet font-prompt mb-6 inline-block text-[10px] font-black tracking-[0.4em] uppercase">
                Customer Voices
              </div>
            <h2 className="text-luminous text-4xl uppercase md:text-6xl italic">
              Voice of <span className="text-slate-500">Success</span>
            </h2>
          </div>
          
          <Testimonials />
        </div>
      </section>
    </>
  )
}
```
---

#### 🔍 Path: `app/(main)/services/[slug]/page.tsx`
```typescript
/** @format */

import React, { Suspense } from "react"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Rocket, Paintbrush, ShieldCheck } from "lucide-react"

// 📦 Data & Utils
import { getTemplateBySlug, templatesData } from "@/constants/templates-data"
import { siteConfig } from "@/constants/site-config"
import { cn } from "@/lib/utils"

// 🧩 Layout Components
import { TemplateNavbar } from "@/components/template/shared/TemplateNavbar"
import { Footer } from "@/components/shared/Footer"
import { LineStickyButton } from "@/components/shared/LineStickyButton"

// 🧩 Page Components
import { TemplateHero } from "@/components/template/marketplace/TemplateHero"
import { TemplateFeatures } from "@/components/template/shared/TemplateFeatures"
import { DevicePreview } from "@/components/template/shared/DevicePreview"
import { TemplatePricingCard } from "@/components/template/shared/TemplatePricingCard"
import { SalesHook } from "@/components/template/shared/SalesHook"

interface DetailPageProps {
  params: Promise<{
    template: string
    slug: string
  }>
}

/**
 * 🧬 1. Static Params Generation: Pre-render all templates at build time
 */
export async function generateStaticParams() {
  return templatesData.map((tpl) => ({
    template: tpl.category || "sale-page",
    slug: tpl.slug,
  }))
}

/**
 * 🔍 2. Dynamic Metadata: Optimized for High CTR Social Sharing
 */
export async function generateMetadata({
  params,
}: DetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const data = getTemplateBySlug(slug)

  if (!data) return { title: "Template Not Found" }

  const title = `${data.title} - Professional Web Template | ${siteConfig.shortName}`
  return {
    title,
    description: data.description,
    openGraph: {
      images: [data.image],
      title,
      description: data.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: data.description,
      images: [data.image],
    },
  }
}

/**
 * 🚀 3. Main Detail Page Component
 */
export default async function TemplateDetailPage({ params }: DetailPageProps) {
  const { slug } = await params
  const data = getTemplateBySlug(slug)

  if (!data) return notFound()

  // ✅ Theme Identity: Mapping to Design System Colors
  const themeColor =
    (data.themeColor as
      | "emerald"
      | "blue"
      | "indigo"
      | "rose"
      | "amber"
      | "slate"
      | "red") || "emerald"

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50 antialiased selection:bg-emerald-500/30">
      <TemplateNavbar />

      <main className="relative z-10 flex-1">
        {/* --- SECTION 1: HERO (Visual Impact) --- */}
        <TemplateHero
          title={data.title}
          subtitle={data.description}
          image={data.image}
          category={data.category}
          themeColor={themeColor}
        />

        {/* --- SECTION 2: VALUE PROPOSITIONS (Trust Signals) --- */}
        <section className="border-y border-white/5 bg-white/[0.02] py-20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="font-prompt mb-4 text-3xl font-black tracking-tighter uppercase md:text-4xl">
                ทุกสิ่งที่คุณต้องการเพื่อ{" "}
                <span
                  className={cn(
                    "transition-colors duration-500",
                    themeColor === "emerald" && "text-emerald-400",
                    themeColor === "blue" && "text-blue-400",
                    themeColor === "rose" && "text-rose-400",
                    themeColor === "amber" && "text-amber-400"
                  )}
                >
                  เติบโตบนโลกออนไลน์
                </span>
              </h2>
              <p className="font-anuphan text-lg font-medium text-slate-400">
                เทมเพลตนี้เตรียม Infrastructure สำหรับการปิดการขายไว้ให้ครบถ้วน
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <ServiceCard
                icon={<Rocket className="text-emerald-400" />}
                title="High-Speed"
                description="คะแนน Google PageSpeed 90+ โหลดไวใน 0.5 วินาที"
              />
              <ServiceCard
                icon={<Paintbrush className="text-blue-400" />}
                title="Premium UI/UX"
                description="ดีไซน์ทันสมัย ปรับแต่ง CI ได้ตามอัตลักษณ์แบรนด์"
              />
              <ServiceCard
                icon={<ShieldCheck className="text-rose-400" />}
                title="Conversion Ready"
                description="ติดตั้ง Facebook CAPI และ TikTok Pixel พร้อมใช้งาน"
              />
            </div>
          </div>
        </section>

        {/* --- SECTION 3: CONTENT & CONVERSION GRID (Main Layout) --- */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            {/* 👈 LEFT: CONTENT AREA */}
            <article className="space-y-32 lg:col-span-8">
              {/* 🛠️ Features List */}
              <section id="features" className="scroll-mt-32">
                <TemplateFeatures data={data} themeColor={themeColor} />
              </section>

              {/* 📱 Interactive Preview */}
              <section id="preview" className="scroll-mt-32">
                <div
                  className={cn(
                    "mb-10 border-l-4 pl-6 transition-colors duration-500",
                    themeColor === "emerald" && "border-emerald-500",
                    themeColor === "blue" && "border-blue-500",
                    themeColor === "rose" && "border-rose-500",
                    themeColor === "amber" && "border-amber-500"
                  )}
                >
                  <h3 className="font-prompt text-3xl font-black text-white uppercase">
                    ตัวอย่างประสบการณ์การใช้งาน
                  </h3>
                  <p className="font-anuphan mt-3 text-lg font-medium text-slate-400">
                    จำลองการแสดงผลจริงบนอุปกรณ์ที่ลูกค้าของคุณใช้งาน
                  </p>
                </div>

                <Suspense
                  fallback={
                    <div className="h-[500px] w-full animate-pulse rounded-3xl bg-white/5" />
                  }
                >
                  <DevicePreview
                    desktopSrc={data.image}
                    mobileSrc={data.mockups?.mobile || data.image}
                    title={data.title}
                    themeColor={themeColor}
                  />
                </Suspense>
              </section>

              {/* 🛣️ Step Process */}
              <section className="space-y-8">
                <h3 className="font-prompt text-2xl font-black text-white uppercase">
                  ขั้นตอนการสั่งซื้อและติดตั้ง
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <StepItem number="01" text="เลือกเทมเพลตและชำระเงิน" />
                  <StepItem number="02" text="ส่งข้อมูลธุรกิจและรูปภาพแบรนด์" />
                  <StepItem number="03" text="ทีมงานปรับแต่งระบบ (3-7 วัน)" />
                  <StepItem number="04" text="ตรวจงานและส่งมอบ Source Code" />
                </div>
              </section>
            </article>

            {/* 👉 RIGHT: CONVERSION SIDEBAR (Sticky Engine) */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-8">
                <TemplatePricingCard
                  title={data.title}
                  price={data.price ?? 0}
                  salePrice={data.salePrice}
                  features={data.features}
                  demoUrl={data.demoUrl || "#"}
                  themeColor={themeColor}
                />

                {/* Developer Insight Card */}
                <div className="glass-card rounded-3xl border border-white/5 bg-white/[0.02] p-8 text-sm text-slate-400 backdrop-blur-xl">
                  <h4
                    className={cn(
                      "font-prompt mb-4 flex items-center gap-2 font-black tracking-widest uppercase",
                      themeColor === "emerald" && "text-emerald-400",
                      themeColor === "blue" && "text-blue-400",
                      themeColor === "rose" && "text-rose-400",
                      themeColor === "amber" && "text-amber-400"
                    )}
                  >
                    Developer Insight
                  </h4>
                  <p className="font-anuphan leading-relaxed opacity-80">
                    เทมเพลตนี้รองรับการทำ{" "}
                    <span className="font-bold text-slate-100">
                      SEO Semantic HTML
                    </span>{" "}
                    ติดหน้าแรก Google ได้ง่ายและยั่งยืน
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* --- SECTION 4: FINAL CALL TO ACTION --- */}
        <SalesHook data={data} isTemplate={true} themeColor={themeColor} />
      </main>

      <Footer />
      <LineStickyButton />
    </div>
  )
}

// --- 🧩 SUB-COMPONENTS ---

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="group glass-card rounded-[2rem] border border-white/5 bg-white/[0.01] p-8 transition-all duration-500 hover:bg-white/[0.05]">
      <div className="mb-6 inline-block rounded-2xl bg-white/5 p-4 transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/10">
        {icon}
      </div>
      <h3 className="font-prompt mb-3 text-xl font-black text-white uppercase">
        {title}
      </h3>
      <p className="font-anuphan text-sm leading-relaxed text-slate-400 opacity-80">
        {description}
      </p>
    </div>
  )
}

function StepItem({ number, text }: { number: string; text: string }) {
  return (
    <div className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-colors hover:bg-white/[0.05]">
      <span className="font-prompt text-2xl font-black text-slate-700 transition-colors group-hover:text-white/20">
        {number}
      </span>
      <span className="font-anuphan text-sm font-bold text-slate-300">
        {text}
      </span>
    </div>
  )
}
```
---

#### 🔍 Path: `app/(main)/blog/[slug]/page.tsx`
```typescript
/** @format */

import { getAllPosts, getPostBySlug } from "@/lib/mdx"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Sparkles,
  MessageCircle,
} from "lucide-react"

// 🛠️ Components
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

/**
 * 🎨 MDX Components Configuration
 * ✅ Fixed: แก้ไขปัญหา href เป็น undefined โดยรองรับทั้ง url และ href จาก MDX
 */
const mdxComponents = {
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const imgSrc = typeof props.src === "string" ? props.src : ""
    return (
      <Image
        src={imgSrc}
        width={800}
        height={450}
        className="rounded-3xl border border-white/10"
        alt={props.alt || "Blog Image Content"}
        loading="lazy"
      />
    )
  },
  // 🚀 CallToAction: รองรับทั้งการพิมพ์ <CallToAction url="..." /> หรือ href="..."
  CallToAction: ({
    title,
    description,
    href,
    url,
  }: {
    title: string
    description: string
    href?: string
    url?: string
  }) => {
    // 🎯 Fallback logic: ถ้าไม่มีทั้งคู่ให้ไปหน้า contact
    const targetPath = href || url || "/contact"

    return (
      <div className="border-aurora-cyan/20 bg-aurora-cyan/5 shadow-luminous my-12 rounded-[2rem] border p-8 text-center">
        <h3 className="font-prompt mb-4 text-2xl font-black text-white uppercase italic">
          {title}
        </h3>
        <p className="font-anuphan mb-8 text-slate-400">{description}</p>
        <Button variant="premium" asChild className="h-12 px-10">
          <Link href={targetPath}>เริ่มโปรเจกต์ของคุณ</Link>
        </Button>
      </div>
    )
  },
}

type Props = {
  params: Promise<{ slug: string }>
}

// ⚙️ SSG Build: สร้างหน้า Static ไว้ล่วงหน้า
export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// 🔍 SEO Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) return {}

  return {
    title: `${post.title} | AemDevWeb`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.coverImage],
    },
  }
}

/**
 * 📄 BlogPostPage: Luminous Edition
 */
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) return notFound()

  return (
    <article className="relative min-h-screen overflow-hidden bg-slate-950 pt-32 pb-20">
      {/* 🌌 Background Decor: Aurora Ambient */}
      <div className="aurora-bg top-0 left-1/2 h-[600px] w-full -translate-x-1/2 opacity-[0.05] blur-[120px]" />

      <div className="relative z-10 container mx-auto max-w-4xl px-4">
        {/* 🔙 Navigation: Back Link */}
        <Link
          href="/blog"
          className="hover:text-aurora-cyan group font-prompt mb-12 inline-flex items-center text-xs font-black tracking-widest text-slate-500 uppercase transition-all"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-2" />
          Back to Insights
        </Link>

        {/* 🏷️ Header: Luminous Title */}
        <header className="mb-16 space-y-8">
          <div className="flex flex-wrap items-center gap-4">
            <Badge variant="luminous" className="px-4 py-1.5">
              {post.category}
            </Badge>
            <div className="flex items-center gap-4 text-[10px] font-black tracking-widest text-slate-500 uppercase">
              <span className="flex items-center">
                <Calendar className="text-aurora-cyan mr-2 h-3.5 w-3.5" />{" "}
                {post.date.split("T")[0]}
              </span>
              <span className="flex items-center">
                <Clock className="text-aurora-cyan mr-2 h-3.5 w-3.5" />{" "}
                {post.readingTime} READ
              </span>
            </div>
          </div>

          <h1 className="font-prompt text-4xl leading-[1.1] font-black tracking-tighter text-balance text-white uppercase italic md:text-6xl">
            {post.title}
          </h1>

          <p className="font-anuphan text-xl leading-relaxed font-medium text-balance text-slate-400">
            {post.description}
          </p>
        </header>

        {/* 🖼️ Cover Image: Glass Showcase */}
        <div className="shadow-luminous group relative mb-20 aspect-video w-full overflow-hidden rounded-[2.5rem] border border-white/10">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/60 to-transparent" />
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
        </div>

        {/* ✍️ Content Body: Humanistic Reading */}
        <div className="prose prose-lg md:prose-xl prose-invert prose-emerald prose-headings:font-prompt prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-headings:text-white prose-p:font-anuphan prose-p:text-slate-300 prose-p:leading-relaxed prose-p:font-medium prose-strong:text-aurora-cyan prose-a:text-aurora-cyan prose-a:no-underline hover:prose-a:underline prose-img:rounded-3xl prose-img:border prose-img:border-white/10 prose-code:text-aurora-emerald prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md mx-auto max-w-none">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

        {/* 👤 Author & Share: Glass Panel */}
        <div className="mt-20 flex flex-col items-center justify-between gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:flex-row">
          <div className="flex items-center gap-5">
            <div className="from-aurora-cyan to-aurora-emerald shadow-aurora-glow relative size-14 rounded-2xl bg-gradient-to-br p-[1px]">
              <div className="font-prompt flex h-full w-full items-center justify-center rounded-2xl bg-slate-950 text-xl font-black text-white">
                A
              </div>
            </div>
            <div>
              <div className="font-prompt font-black tracking-wider text-white uppercase">
                นายเอ็มซ่ามากส์
              </div>
              <div className="font-anuphan mt-1 text-xs font-bold tracking-widest text-slate-500 uppercase">
                Fullstack Dev & Consultant
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            className="hover:border-aurora-cyan group h-12 gap-2 rounded-xl px-8"
          >
            <Share2 className="h-4 w-4 transition-transform group-hover:scale-110" />
            Share Insight
          </Button>
        </div>

        {/* 🚀 Final CTA */}
        <div className="border-aurora-cyan/30 bg-aurora-cyan/5 group shadow-luminous relative mt-16 overflow-hidden rounded-[3rem] border p-10 text-center md:p-16">
          <div className="aurora-bg -top-1/2 -left-1/2 h-full w-full opacity-10 transition-opacity group-hover:opacity-20" />
          <div className="relative z-10">
            <Sparkles className="text-aurora-cyan mx-auto mb-6 h-10 w-10 animate-pulse" />
            <h3 className="font-prompt mb-6 text-3xl font-black tracking-tighter text-white uppercase italic md:text-5xl">
              อ่านจบแล้ว... <br />
              อยากมีเว็บที่ <span className="text-aurora-cyan">ไบร์ท</span>{" "}
              แบบนี้ไหม?
            </h3>
            <p className="font-anuphan mx-auto mb-10 max-w-xl text-lg leading-relaxed font-medium text-slate-400">
              ปรึกษาฟรี ไม่คิดเงิน
              นายเอ็มพร้อมช่วยวางโครงสร้างที่ปิดการขายได้จริง
              ทักมาคุยไอเดียกันก่อนได้ครับ
            </p>
            <Button
              variant="premium"
              size="lg"
              className="shadow-aurora-glow group h-18 px-12 text-lg"
              asChild
            >
              <Link href="/contact">
                <MessageCircle className="mr-3 h-6 w-6" />{" "}
                ทักไลน์คุยงานกับคุณเอ็ม
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
```
---

#### 🔍 Path: `app/(main)/case-studies/page.tsx`
```typescript
/** @format */

import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

// ✅ Fixed: Removed unused imports (CheckCircle2, TrendingUp, Sparkles, Rocket)
import { Trophy, Zap, ArrowRight } from "lucide-react"

// ✅ Components & UI
// ✅ Fixed: Removed unused LineLeadForm import
import { LineStickyButton } from "@/components/shared/LineStickyButton"
import { ImpactStats } from "@/components/sales-engine/ImpactStats"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

/**
 * 🔍 SEO Metadata
 */
export const metadata: Metadata = {
  title: "เบื้องหลัง Unlink-TH | เว็บไซต์ที่โหลดเร็วที่สุดในปี 2026",
  description:
    "เจาะลึกเบื้องหลังการสร้างเว็บไซต์ www.unlink-th.com ด้วย Next.js 15 และเทคนิค Technical SEO ขั้นสูง",
  openGraph: {
    images: ["/images/showcase/unlink-th.webp"],
  },
}

/**
 * 🚀 Case Study Page: Unlink-TH Engine
 */
export default function UnlinkCaseStudyPage() {
  return (
    <main className="selection:bg-aurora-cyan/30 relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      {/* 🌌 1. HERO: Luminous Identity */}
      <section className="relative pt-40 pb-24 text-center">
        {/* Background Decor */}
        <div className="aurora-bg top-0 left-1/2 h-[700px] w-full -translate-x-1/2 opacity-[0.08] blur-[120px]" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-aurora-cyan shadow-aurora-glow mb-8 inline-flex animate-pulse items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-black tracking-[0.3em] uppercase backdrop-blur-xl">
            <Trophy className="h-4 w-4" />
            Flagship Project: Unlink-TH Engine
          </div>

          <h1 className="font-prompt mb-8 text-5xl leading-[0.9] font-black tracking-tighter text-white uppercase italic md:text-8xl">
            เราทำเว็บให้ตัวเอง <br />
            <span className="text-aurora-cyan drop-shadow-luminous">
              เหมือนที่ทำให้ลูกค้า
            </span>
          </h1>

          <p className="font-anuphan mx-auto mb-12 max-w-3xl text-xl leading-relaxed font-medium text-slate-400 md:text-2xl">
            นี่ไม่ใช่แค่ Portfolio แต่คือบทพิสูจน์ว่าทำไม{" "}
            <span className="text-white italic">"ความเร็ว"</span> และ{" "}
            <span className="text-white italic">"โครงสร้างที่ถูกต้อง"</span>{" "}
            ถึงเป็นหัวใจสำคัญของการปิดการขายในปี 2026
          </p>

          <div className="flex justify-center">
            <Button
              variant="premium"
              size="lg"
              className="shadow-aurora-glow group h-20 px-12 text-xl"
              asChild
            >
              <Link href="/contact">
                อยากได้เว็บแรงๆ แบบนี้{" "}
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 📊 2. STATS BAR: Luminous Impact */}
      <section className="relative z-10 border-y border-white/5 bg-white/[0.02] py-16 backdrop-blur-xl">
        <ImpactStats />
      </section>

      {/* 🛠️ 3. PROBLEM & SOLUTION: Technical Power */}
      <section className="relative z-10 container mx-auto px-4 py-32">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Image Side: PageSpeed Score */}
          <div className="group relative">
            <div className="bg-aurora-cyan/20 absolute -inset-4 rounded-[3rem] opacity-30 blur-3xl transition duration-1000 group-hover:opacity-60" />
            <div className="shadow-luminous relative aspect-square overflow-hidden rounded-[3rem] border border-white/10 bg-slate-900">
              <Image
                src="/images/showcase/unlink-th.webp"
                alt="Unlink-TH Performance Score"
                fill
                className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
              />
              <div className="glass-card border-aurora-emerald/40 shadow-aurora-glow absolute right-10 bottom-10 scale-110 rounded-[2rem] p-8 text-center">
                <div className="font-prompt mb-2 text-[10px] font-black tracking-widest text-slate-400 uppercase">
                  Google PageSpeed
                </div>
                <div className="font-prompt text-aurora-emerald text-6xl leading-none font-black tracking-tighter italic">
                  100
                </div>
              </div>
            </div>
          </div>

          {/* Content Side: Technical Specs */}
          <div className="space-y-10">
            <div className="space-y-6">
              <Badge
                variant="luminous"
                className="px-4 py-1 tracking-widest uppercase"
              >
                Technical Excellence
              </Badge>
              <h2 className="font-prompt text-4xl leading-tight font-black tracking-tighter text-white uppercase md:text-5xl">
                ทำไมต้องเขียนใหม่ <br />
                ด้วย <span className="text-aurora-cyan">Next.js 15?</span>
              </h2>
              <p className="font-anuphan text-lg leading-relaxed font-medium text-slate-400 md:text-xl">
                เป้าหมายของเราคือการสร้างมาตรฐานใหม่{" "}
                <span className="text-white italic">"กดปุ๊บ มาปั๊บ"</span>{" "}
                เพื่อลดอัตราการกดออกของลูกค้าที่ใจร้อนขึ้นทุกวัน
              </p>
            </div>

            <div className="space-y-4">
              {[
                "ใช้ React Server Components (RSC) ลด JavaScript ฝั่ง Client",
                "ทำ Image Optimization อัตโนมัติด้วย Next/Image Engine",
                "โครงสร้าง Technical SEO 100% (JSON-LD, Semantic HTML)",
                "Global Edge Deploy: เร็วแรงทั่วโลกผ่าน Vercel Infrastructure",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="hover:border-aurora-cyan/30 group flex gap-5 rounded-2xl border border-white/5 bg-white/5 p-6 transition-all"
                >
                  <div className="bg-aurora-cyan/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                    <Zap className="text-aurora-cyan h-5 w-5 transition-transform group-hover:scale-125" />
                  </div>
                  <span className="font-anuphan leading-relaxed font-bold text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 4. BUSINESS IMPACT: Result Cards */}
      <section className="relative border-t border-white/5 bg-white/[0.01] py-32">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="font-prompt mb-20 text-4xl font-black tracking-tighter text-white uppercase italic md:text-6xl">
            ผลลัพธ์ทางธุรกิจ <br />
            <span className="text-aurora-cyan">ที่จับต้องได้</span>
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="glass-card hover:border-aurora-cyan/30 rounded-[2.5rem] border-white/5 p-12 transition-all duration-500">
              <div className="font-prompt mb-4 text-6xl font-black tracking-tighter text-white">
                3X
              </div>
              <div className="font-anuphan text-[10px] font-black tracking-widest text-slate-500 uppercase">
                จำนวน Leads เพิ่มขึ้นต่อวัน
              </div>
            </div>

            <div className="glass-card border-aurora-emerald/20 bg-aurora-emerald/5 shadow-luminous rounded-[2.5rem] p-12">
              <div className="font-prompt mb-4 text-6xl font-black tracking-tighter text-white">
                0.8s
              </div>
              <div className="font-anuphan text-[10px] font-black tracking-widest text-slate-500 uppercase">
                เวลาโหลดเฉลี่ย (LCP)
              </div>
            </div>

            <div className="glass-card hover:border-aurora-violet/30 rounded-[2.5rem] border-white/5 p-12 transition-all duration-500">
              <div className="font-prompt mb-4 text-6xl font-black tracking-tighter text-white">
                No.1
              </div>
              <div className="font-anuphan text-[10px] font-black tracking-widest text-slate-500 uppercase">
                Keyword หลักติดหน้าแรก
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📢 5. FINAL CTA */}
      <section className="relative z-10 container mx-auto px-4 py-40">
        <div className="shadow-luminous relative overflow-hidden rounded-[4rem] border border-white/10 p-12 text-center md:p-24">
          <div className="aurora-bg from-aurora-cyan to-aurora-violet inset-0 bg-gradient-to-br opacity-[0.1]" />
          <div className="relative z-10 mx-auto max-w-4xl">
            <h2 className="font-prompt mb-8 text-4xl leading-none font-black tracking-tighter text-white uppercase italic md:text-8xl">
              ธุรกิจของคุณ <br />
              <span className="text-aurora-cyan">ก็ "แรง" แบบนี้ได้</span>
            </h2>
            <div className="flex flex-col justify-center gap-6 sm:flex-row">
              <Button
                variant="premium"
                size="lg"
                className="shadow-aurora-glow group h-20 px-12 text-xl"
                asChild
              >
                <Link href="/contact">
                  ขอคำปรึกษาฟรี (ไม่ซื้อไม่ว่า){" "}
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
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
  // 🏢 1. Brand Identity (ตัวตนที่คนไทยเชื่อใจ)
  name: "นายเอ็มซ่ามากส์ - รับทำเว็บคุยง่าย ไม่ทิ้งงาน",
  companyName: "นายเอ็มซ่ามากส์ DevWeb Solutions",
  shortName: "เอ็มซ่ามากส์",

  // 📢 Tagline: เน้นเรื่องการขายและปากท้อง
  tagline: "ทำเว็บซ่าๆ ปิดการขายไวมากส์ ช่วย SME ไทยโกยยอดขายออนไลน์",

  // 🏷️ SEO จริตคนไทย (เน้นความกังวล: คุยง่าย / งานไว / ไม่หายหัว)
  title:
    "นายเอ็มซ่ามากส์ | รับทำเว็บหน้าเดียวปิดการขาย คุยง่าย งานไว ไม่ทิ้งงาน",
  description:
    "หาคนทำเว็บที่คุยรู้เรื่องอยู่ใช่ไหม? มาหาเอ็มครับ รับทำเว็บ Sale Page งานเนี๊ยบ ปิดการขายไว เน้นกดทักไลน์แล้วจบงานได้เลย ไม่ต้องเก่งคอมก็มีเว็บสวยๆ ไว้ทำเงินได้",

  // 🌐 2. Canonical URLs & Assets
  url: "https://www.aemdevweb.com",
  ogImage: "https://www.aemdevweb.com/og-image.png",

  // 🔗 3. Social Media & Direct Links (เน้น Line เพราะคนไทยชอบใช้)
  links: {
    facebook: "https://www.facebook.com/share/186gv7BAsc/",
    messenger: "https://m.me/aemdevweb",
    line: "https://lin.ee/SVMBEJ8",
    lineId: "@127cnhtn",
    github: "https://github.com/aemdevweb",
  },

  // 📞 4. Contact Details
  contact: {
    email: "me@aemdevweb.com",
    tel: "099-999-8989",
    telDisplay: "099-999-8989 (สายตรงคุณเอ็ม)",
    address: "กรุงเทพฯ และทั่วประเทศ (คุยออนไลน์ได้เลย)",
  },

  // 📣 5. Call to Action (เน้นความเป็นกันเอง ลดกำแพงลูกค้า)
  cta: {
    main: "ทักไลน์ปรึกษาเอ็ม (ฟรีครับ)",
    secondary: "ส่องผลงานที่ผ่านมา",
    consult: "จองคิวทำเว็บวันนี้",
    pricing: "เช็คราคาประเมิน (ไม่บานปลาย)",
  },

  // 📈 6. Keywords Strategy (ใช้คำที่คนไทยค้นหาจริง เวลาเจอปัญหา)
  keywords: [
    "นายเอ็มซ่ามากส์",
    "เอ็มซ่ามากส์รับทำเว็บ",
    "จ้างทำเว็บคุยง่ายๆ",
    "คนทำเว็บไม่ทิ้งงาน",
    "รับทำเซลเพจ SME",
    "เว็บหน้าเดียวปิดการขาย",
    "ทำเว็บทักไลน์จบ",
    "รับทำเว็บไซต์ราคาถูกและดี",
    "สอนทำเว็บ SME",
    "AEMDEVWEB",
  ],

  // 🎨 7. Theme Identity (สีเขียว Aurora Emerald แบบ Luminous)
  // ✅ ใช้ค่า OKLCH เพื่อความสดและเข้ากับ Design System
  themeColor: "oklch(0.82 0.18 155)", 
} as const

export type SiteConfig = typeof siteConfig

/**
 * 🛠️ Metadata Generator Helper
 * ปรับแต่งมาเพื่อ SEO ที่คนไทยชอบ (เน้นชื่อแบรนด์และจุดเด่น)
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
      // โครงสร้าง Title: [ชื่อหน้า] | เอ็มซ่ามากส์ - [จุดขายหลัก]
      default: title
        ? `${title} | ${siteConfig.shortName}`
        : `${siteConfig.title}`,
      template: `%s | ${siteConfig.shortName} - รับทำเว็บคุยง่าย`,
    },
    description,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.companyName,
    openGraph: {
      title: title ? `${title} | ${siteConfig.shortName}` : siteConfig.title,
      description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [{ url: image }],
      type: "website",
      locale: "th_TH",
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteConfig.shortName}` : siteConfig.title,
      description,
      images: [image],
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: { index: false, follow: false },
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
  | "Zap"

export interface ServiceItem {
  id: string
  slug: string
  title: string
  description: string
  longDescription?: string
  // ✅ เก็บชื่อ Icon เป็น String เพื่อความไหลลื่นของ Server/Client Components
  iconName: ServiceIconName
  priceStart: number
  priceDisplay: string
  features: string[]
  isFeatured?: boolean
  mockups: {
    mobile: string
    desktop: string
  }
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
]

/**
 * 🛠️ Helpers Functionality
 */

// 🔍 ดึงข้อมูลบริการตาม Slug
export const getServiceBySlug = (slug: string): ServiceItem | undefined =>
  servicesData.find((s) => s.slug === slug)

// 🔍 ดึงเฉพาะบริการแนะนำ (Featured)
export const getFeaturedServices = (): ServiceItem[] =>
  servicesData.filter((s) => s.isFeatured)

// 🔍 ดึงบริการอื่นๆ ที่ไม่ใช่ตัวปัจจุบัน (สำหรับ Cross-sell)
export const getOtherServices = (currentSlug: string): ServiceItem[] =>
  servicesData.filter((s) => s.slug !== currentSlug)
```
---

#### 🔍 Path: `constants/site-config.ts`
```typescript
/** @format */

import { Metadata } from "next"

export const siteConfig = {
  // 🏢 1. Brand Identity (ตัวตนที่คนไทยเชื่อใจ)
  name: "นายเอ็มซ่ามากส์ - รับทำเว็บคุยง่าย ไม่ทิ้งงาน",
  companyName: "นายเอ็มซ่ามากส์ DevWeb Solutions",
  shortName: "เอ็มซ่ามากส์",

  // 📢 Tagline: เน้นเรื่องการขายและปากท้อง
  tagline: "ทำเว็บซ่าๆ ปิดการขายไวมากส์ ช่วย SME ไทยโกยยอดขายออนไลน์",

  // 🏷️ SEO จริตคนไทย (เน้นความกังวล: คุยง่าย / งานไว / ไม่หายหัว)
  title:
    "นายเอ็มซ่ามากส์ | รับทำเว็บหน้าเดียวปิดการขาย คุยง่าย งานไว ไม่ทิ้งงาน",
  description:
    "หาคนทำเว็บที่คุยรู้เรื่องอยู่ใช่ไหม? มาหาเอ็มครับ รับทำเว็บ Sale Page งานเนี๊ยบ ปิดการขายไว เน้นกดทักไลน์แล้วจบงานได้เลย ไม่ต้องเก่งคอมก็มีเว็บสวยๆ ไว้ทำเงินได้",

  // 🌐 2. Canonical URLs & Assets
  url: "https://www.aemdevweb.com",
  ogImage: "https://www.aemdevweb.com/og-image.png",

  // 🔗 3. Social Media & Direct Links (เน้น Line เพราะคนไทยชอบใช้)
  links: {
    facebook: "https://www.facebook.com/share/186gv7BAsc/",
    messenger: "https://m.me/aemdevweb",
    line: "https://lin.ee/SVMBEJ8",
    lineId: "@127cnhtn",
    github: "https://github.com/aemdevweb",
  },

  // 📞 4. Contact Details
  contact: {
    email: "me@aemdevweb.com",
    tel: "099-999-8989",
    telDisplay: "099-999-8989 (สายตรงคุณเอ็ม)",
    address: "กรุงเทพฯ และทั่วประเทศ (คุยออนไลน์ได้เลย)",
  },

  // 📣 5. Call to Action (เน้นความเป็นกันเอง ลดกำแพงลูกค้า)
  cta: {
    main: "ทักไลน์ปรึกษาเอ็ม (ฟรีครับ)",
    secondary: "ส่องผลงานที่ผ่านมา",
    consult: "จองคิวทำเว็บวันนี้",
    pricing: "เช็คราคาประเมิน (ไม่บานปลาย)",
  },

  // 📈 6. Keywords Strategy (ใช้คำที่คนไทยค้นหาจริง เวลาเจอปัญหา)
  keywords: [
    "นายเอ็มซ่ามากส์",
    "เอ็มซ่ามากส์รับทำเว็บ",
    "จ้างทำเว็บคุยง่ายๆ",
    "คนทำเว็บไม่ทิ้งงาน",
    "รับทำเซลเพจ SME",
    "เว็บหน้าเดียวปิดการขาย",
    "ทำเว็บทักไลน์จบ",
    "รับทำเว็บไซต์ราคาถูกและดี",
    "สอนทำเว็บ SME",
    "AEMDEVWEB",
  ],

  // 🎨 7. Theme Identity (สีเขียว Aurora Emerald แบบ Luminous)
  // ✅ ใช้ค่า OKLCH เพื่อความสดและเข้ากับ Design System
  themeColor: "oklch(0.82 0.18 155)", 
} as const

export type SiteConfig = typeof siteConfig

/**
 * 🛠️ Metadata Generator Helper
 * ปรับแต่งมาเพื่อ SEO ที่คนไทยชอบ (เน้นชื่อแบรนด์และจุดเด่น)
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
      // โครงสร้าง Title: [ชื่อหน้า] | เอ็มซ่ามากส์ - [จุดขายหลัก]
      default: title
        ? `${title} | ${siteConfig.shortName}`
        : `${siteConfig.title}`,
      template: `%s | ${siteConfig.shortName} - รับทำเว็บคุยง่าย`,
    },
    description,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.companyName,
    openGraph: {
      title: title ? `${title} | ${siteConfig.shortName}` : siteConfig.title,
      description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [{ url: image }],
      type: "website",
      locale: "th_TH",
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteConfig.shortName}` : siteConfig.title,
      description,
      images: [image],
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: { index: false, follow: false },
    }),
  }
}
```
---

#### 🔍 Path: `constants/templates-data.ts`
```typescript
/** @format */

// 1. นำเข้า Type กลาง และทำการ Export ออกไปเพื่อให้ไฟล์อื่นที่ Import จากที่นี่ไม่พัง
import { TemplateItem, CategoryInfo } from "@/types"
export type { TemplateItem, CategoryInfo } // ✅ เพิ่มบรรทัดนี้เพื่อส่งต่อ Type

// ⬇️ Import ข้อมูลจากไฟล์ย่อย
import { temp_eco_01 } from "@/constants/template/temp_eco_01"
import { temp_fb_01 } from "@/constants/template/temp_fb_01"
import { temp_svc_01 } from "@/constants/template/temp_svc_01"
import { temp_hb_01 } from "@/constants/template/temp_hb_01"

// --------------------------------------------------------
// 2. Define Categories
// --------------------------------------------------------
export const categoriesData: CategoryInfo[] = [
  {
    slug: "sale-page",
    name: "Sale Page & E-Commerce",
    description: "เทมเพลตสำหรับขายของออนไลน์ เน้นปิดการขายไว รองรับ Pixel/API",
    themeColor: "emerald",
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage",
    description:
      "ร้านอาหาร คาเฟ่ และธุรกิจเครื่องดื่ม ฟังก์ชันจองโต๊ะและเมนูออนไลน์",
    themeColor: "amber",
  },
  {
    slug: "corporate",
    name: "Corporate & Services",
    description: "บริษัท องค์กร และงานบริการ สร้างภาพลักษณ์ความน่าเชื่อถือ",
    themeColor: "blue",
  },
  {
    slug: "health-beauty",
    name: "Health & Beauty",
    description: "คลินิก สปา และสินค้าความงาม ดีไซน์สะอาดตา ดูพรีเมียม",
    themeColor: "rose",
  },
]

// --------------------------------------------------------
// 3. Central Registry
// --------------------------------------------------------
export const templatesData: TemplateItem[] = [
  temp_eco_01 as TemplateItem,
  temp_fb_01 as TemplateItem,
  temp_svc_01 as TemplateItem,
  temp_hb_01 as TemplateItem,
]

// --------------------------------------------------------
// 4. Helper Functions
// --------------------------------------------------------
export const getAllCategories = (): CategoryInfo[] => categoriesData

export const getCategoryInfo = (slug: string): CategoryInfo | undefined => {
  return categoriesData.find((c) => c.slug === slug)
}

export const getTemplatesByCategory = (
  categorySlug: string
): TemplateItem[] => {
  if (!categorySlug || categorySlug === "all") return templatesData
  return templatesData.filter((t) => t.category === categorySlug)
}

export const getTemplateBySlug = (slug: string): TemplateItem | undefined => {
  return templatesData.find((t) => t.slug === slug)
}

export const getFeaturedTemplates = (): TemplateItem[] => {
  // ✅ ใช้ Optional Chaining ป้องกันค่าว่าง
  return templatesData.filter((t) => t.isBestSeller || t.isNew || t.isPopular)
}

export const getRelatedTemplates = (
  currentSlug: string,
  category: string,
  limit: number = 3
): TemplateItem[] => {
  return templatesData
    .filter((t) => t.category === category && t.slug !== currentSlug)
    .slice(0, limit)
}
```
---

#### 🔍 Path: `constants/site-config.ts`
```typescript
/** @format */

import { Metadata } from "next"

export const siteConfig = {
  // 🏢 1. Brand Identity (ตัวตนที่คนไทยเชื่อใจ)
  name: "นายเอ็มซ่ามากส์ - รับทำเว็บคุยง่าย ไม่ทิ้งงาน",
  companyName: "นายเอ็มซ่ามากส์ DevWeb Solutions",
  shortName: "เอ็มซ่ามากส์",

  // 📢 Tagline: เน้นเรื่องการขายและปากท้อง
  tagline: "ทำเว็บซ่าๆ ปิดการขายไวมากส์ ช่วย SME ไทยโกยยอดขายออนไลน์",

  // 🏷️ SEO จริตคนไทย (เน้นความกังวล: คุยง่าย / งานไว / ไม่หายหัว)
  title:
    "นายเอ็มซ่ามากส์ | รับทำเว็บหน้าเดียวปิดการขาย คุยง่าย งานไว ไม่ทิ้งงาน",
  description:
    "หาคนทำเว็บที่คุยรู้เรื่องอยู่ใช่ไหม? มาหาเอ็มครับ รับทำเว็บ Sale Page งานเนี๊ยบ ปิดการขายไว เน้นกดทักไลน์แล้วจบงานได้เลย ไม่ต้องเก่งคอมก็มีเว็บสวยๆ ไว้ทำเงินได้",

  // 🌐 2. Canonical URLs & Assets
  url: "https://www.aemdevweb.com",
  ogImage: "https://www.aemdevweb.com/og-image.png",

  // 🔗 3. Social Media & Direct Links (เน้น Line เพราะคนไทยชอบใช้)
  links: {
    facebook: "https://www.facebook.com/share/186gv7BAsc/",
    messenger: "https://m.me/aemdevweb",
    line: "https://lin.ee/SVMBEJ8",
    lineId: "@127cnhtn",
    github: "https://github.com/aemdevweb",
  },

  // 📞 4. Contact Details
  contact: {
    email: "me@aemdevweb.com",
    tel: "099-999-8989",
    telDisplay: "099-999-8989 (สายตรงคุณเอ็ม)",
    address: "กรุงเทพฯ และทั่วประเทศ (คุยออนไลน์ได้เลย)",
  },

  // 📣 5. Call to Action (เน้นความเป็นกันเอง ลดกำแพงลูกค้า)
  cta: {
    main: "ทักไลน์ปรึกษาเอ็ม (ฟรีครับ)",
    secondary: "ส่องผลงานที่ผ่านมา",
    consult: "จองคิวทำเว็บวันนี้",
    pricing: "เช็คราคาประเมิน (ไม่บานปลาย)",
  },

  // 📈 6. Keywords Strategy (ใช้คำที่คนไทยค้นหาจริง เวลาเจอปัญหา)
  keywords: [
    "นายเอ็มซ่ามากส์",
    "เอ็มซ่ามากส์รับทำเว็บ",
    "จ้างทำเว็บคุยง่ายๆ",
    "คนทำเว็บไม่ทิ้งงาน",
    "รับทำเซลเพจ SME",
    "เว็บหน้าเดียวปิดการขาย",
    "ทำเว็บทักไลน์จบ",
    "รับทำเว็บไซต์ราคาถูกและดี",
    "สอนทำเว็บ SME",
    "AEMDEVWEB",
  ],

  // 🎨 7. Theme Identity (สีเขียว Aurora Emerald แบบ Luminous)
  // ✅ ใช้ค่า OKLCH เพื่อความสดและเข้ากับ Design System
  themeColor: "oklch(0.82 0.18 155)", 
} as const

export type SiteConfig = typeof siteConfig

/**
 * 🛠️ Metadata Generator Helper
 * ปรับแต่งมาเพื่อ SEO ที่คนไทยชอบ (เน้นชื่อแบรนด์และจุดเด่น)
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
      // โครงสร้าง Title: [ชื่อหน้า] | เอ็มซ่ามากส์ - [จุดขายหลัก]
      default: title
        ? `${title} | ${siteConfig.shortName}`
        : `${siteConfig.title}`,
      template: `%s | ${siteConfig.shortName} - รับทำเว็บคุยง่าย`,
    },
    description,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.companyName,
    openGraph: {
      title: title ? `${title} | ${siteConfig.shortName}` : siteConfig.title,
      description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [{ url: image }],
      type: "website",
      locale: "th_TH",
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteConfig.shortName}` : siteConfig.title,
      description,
      images: [image],
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: { index: false, follow: false },
    }),
  }
}
```
---

#### 🔍 Path: `constants/navigation.ts`
```typescript
/** @format */

// --- 🏷️ INTERFACES ---
export interface NavItem {
  name: string
  href: string
  disabled?: boolean // ปุ่มจาง กดไม่ได้
  external?: boolean // เปิดแท็บใหม่
  badge?: "New" | "Hot" | "Sale" // ป้ายกำกับ
  description?: string // คำอธิบายสั้นๆ (สำหรับ Mega Menu)
}

export interface FooterNavigation {
  services: NavItem[]
  company: NavItem[]
  support: NavItem[]
  legal: NavItem[] // ส่วนกฎหมาย
}

export interface NavigationConfig {
  main: NavItem[]
  footer: FooterNavigation
}

/**
 * 🧭 ระบบ Navigation ฉบับ AemDevWeb (Updated 2026)
 * จัดการลิงก์ทั้งหมดให้ตรงกับ Folder Structure ใน app/(main)/ และ app/(marketing)/
 */
export const navigation: NavigationConfig = {
  // 🌟 เมนูหลัก (Header / Mobile Menu)
  main: [
    {
      name: "หน้าแรก",
      href: "/",
    },
    {
      name: "บริการ",
      href: "/services",
    },
    {
      name: "เทมเพลต",
      href: "/sale-page", // ชี้ไปที่ Category แรกของ Marketing Route
      badge: "New",
    },
    {
      name: "ผลงาน",
      href: "/case-studies", // ✅ อ้างอิงตาม Folder: app/(main)/case-studies/
    },
    {
      name: "บทความ",
      href: "/blog",
    },
    {
      name: "ติดต่อเรา",
      href: "/contact",
    },
  ],

  // 🦶 เมนูท้ายเว็บ (Footer)
  footer: {
    // 🛠️ หมวดหมู่บริการหลัก
    services: [
      {
        name: "Sale Page ปิดการขาย",
        href: "/services/sale-page",
        badge: "Hot",
      },
      { name: "เว็บไซต์บริษัท SME", href: "/services/corporate" },
      { name: "ระบบจัดการสต็อก", href: "/services/internal-system" },
      { name: "ปรับความเร็ว & SEO", href: "/services/speed-seo" },
    ],

    // 🏢 หมวดหมู่บริษัท
    company: [
      { name: "เกี่ยวกับนายเอ็ม", href: "/about" },
      { name: "ผลงานที่ผ่านมา", href: "/case-studies" },
      {
        name: "Unlink-TH Case Study",
        href: "/case-studies/unlink-th",
        badge: "Hot",
      },
      { name: "ร่วมงานกับเรา", href: "/careers", disabled: true },
    ],

    // 💬 ส่วนสนับสนุนและช่องทางติดต่อ
    support: [
      {
        name: "ปรึกษาผ่าน Line",
        href: "https://lin.ee/SVMBEJ8", // ✅ ตรวจสอบ ID กับ site-config
        external: true,
      },
      { name: "เช็คราคาประเมิน", href: "/#pricing" },
      { name: "แจ้งชำระเงิน", href: "/contact" },
    ],

    // ⚖️ กฎหมายและนโยบาย
    legal: [
      {
        name: "นโยบายความเป็นส่วนตัว",
        href: "/privacy-policy",
        disabled: true,
      },
      {
        name: "เงื่อนไขการให้บริการ",
        href: "/terms-of-service",
        disabled: true,
      },
    ],
  },
}

// --- 🚀 NAMED EXPORTS ---
// แยก export เพื่อให้เรียกใช้งานได้เบาเครื่องขึ้น (Tree-shaking)
export const mainNav = navigation.main as NavItem[]
export const footerNav = navigation.footer as FooterNavigation

/**
 * ✅ Keywords Cast Fix
 * ใช้สำหรับ Metadata ในไฟล์ที่เรียกใช้ siteConfig เพื่อป้องกัน TS Error 'readonly'
 * หมายเหตุ: ปกติจะทำที่ site-config.ts แต่ถ้าเรียกใช้ตรงนี้ให้ทำดังนี้:
 */
export const siteKeywords = [
  "นายเอ็มซ่ามากส์",
  "เอ็มซ่ามากส์รับทำเว็บ",
  "รับทำเว็บไซต์ SME",
  "รับทำ Sale Page",
  "เว็บหน้าเดียวปิดการขาย",
  "AEMDEVWEB",
  "ทำเว็บทักไลน์",
  "รับทำเว็บ Next.js",
] as string[]
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

const config: Config = {
  // 🎯 1. Content Scanned: ครอบคลุมทุกเลเยอร์ของ AEM DEVWEB
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts}",
    "./constants/**/*.{js,ts}",
    "./content/**/*.{js,ts,md,mdx}",
  ],

  // 🌓 Dark Mode: บังคับใช้ Class เพื่อความแม่นยำของ Midnight Theme
  darkMode: "class",

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        lg: "4rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // 🔤 2. Fonts: เชื่อมโยงกับ Next.js Fonts
      fontFamily: {
        sans: ["var(--font-prompt)", "ui-sans-serif", "system-ui"],
        prompt: ["var(--font-prompt)"],
        anuphan: ["var(--font-anuphan)"],
        mono: ["var(--font-jetbrains)", "ui-monospace"],
      },

      // 🎨 3. Luminous Palette: ดึงค่าจาก CSS Variables ใน globals.css
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },

        // Aurora Accent (Static fallback for components)
        aurora: {
          cyan: "var(--aurora-cyan)",
          violet: "var(--aurora-violet)",
          emerald: "var(--aurora-emerald)",
        },
      },

      // 🔘 4. Radius Expansion
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "3xl": "2.75rem",
        "4xl": "3.5rem",
      },

      // ⚡ 5. Essential Animations: ซิงค์กับ CSS Keyframes
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        aurora: "aurora 15s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },

      // 🪄 6. Custom Luminous Shadows
      boxShadow: {
        luminous: "var(--shadow-luminous)",
        "aurora-glow": "var(--shadow-aurora-glow)",
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
  title: string
  name?: string // รองรับคอมโพเนนต์ที่เรียกใช้ .name
  href: string
  disabled?: boolean
  external?: boolean
  badge?: string
}

export interface NavSection {
  title: string
  items: NavItem[]
}

export interface SiteConfig {
  name: string
  companyName: string
  description: string
  url: string
  ogImage: string
  links: {
    line: string
    facebook?: string
    messenger?: string
    lineId?: string
    github?: string
  }
  keywords: string[]
}

// --- 📄 BLOG & CONTENT (MDX) ---
export interface BlogPostProps {
  title: string
  excerpt?: string
  description?: string // รองรับการดึงจาก MDX Metadata
  slug: string
  date: string
  coverImage: string
  category?: string
  readingTime?: string // แก้ Error ใน BlogCard.tsx
}

export interface BlogMetadata {
  title: string
  description: string
  date: string
  category: string
  coverImage: string
  author: string
  readingTime?: string
}

export interface BlogPost extends BlogMetadata {
  slug: string
  // ✅ Fixed: เปลี่ยน any เป็น unknown เพื่อความปลอดภัยของข้อมูล content
  content?: unknown
}

// --- 💼 SERVICES & SOLUTIONS ---
export type ServiceIconName =
  | "Rocket"
  | "ShieldCheck"
  | "Code2"
  | "Gauge"
  | "Zap"

export interface ServiceItem {
  id: string
  title: string
  description: string
  longDescription?: string
  icon: ServiceIconName
  features: string[]
  priceRange?: string
  slug: string
  priceDisplay?: string
  mockups?: {
    desktop: string
    mobile: string
  }
}

// --- 🏆 CASE STUDIES & SHOWCASE ---
export interface ShowcaseStats {
  label: string
  value: string
}

export interface CaseStudyItem {
  id: string
  title: string
  slug: string
  category: string
  description: string
  image: string
  stats: ShowcaseStats
  tags: string[]
  results: string[]
  clientQuote?: {
    text: string
    author: string
  }
}

// --- 🎨 TEMPLATE ENGINE ---
export type TemplateCategory =
  | "SalePage"
  | "Corporate"
  | "ECommerce"
  | "Service"
  | "Portfolio"
  | string

export interface CategoryInfo {
  slug: string
  name: string
  description: string
  themeColor?: string
}

export interface TemplateItem {
  id: string
  slug: string
  title: string
  description: string
  category: TemplateCategory
  image: string
  demoUrl?: string
  price?: number
  salePrice?: number
  features: string[]
  isPopular?: boolean
  isNew?: boolean
  isBestSeller?: boolean
  themeColor?: string

  mockups?: {
    desktop?: string
    mobile?: string
  }

  salesData?: {
    soldCount: number
    rating: number
    reviews: number
  }
}

// --- 📩 LEAD & CONVERSION ---
export interface LeadFormSubmission {
  name: string
  email?: string
  lineId: string
  businessType: string
  budget: string
  message: string
  source: string
  timestamp: string
}

// --- ⭐ SOCIAL PROOF ---
export interface TestimonialItem {
  id: number
  content: string
  author: string
  role: string
  rating: number
  image?: string
  company?: string
}
```
---

#### 🔍 Path: `next.config.ts`
```typescript
/** @format */
import type { NextConfig } from "next"
import createMDX from "@next/mdx"

/**
 * 🚀 Next.js Config: Luminous Performance Edition (Ultimate Tuned)
 * ปรับจูนระดับ Deep-Dive เพื่อ PageSpeed 100/100
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,

  // 🔒 Security & Size: ปิดการแสดง Header ว่าใช้ Next.js (ประหยัด Bytes + ปลอดภัย)
  poweredByHeader: false,

  // ✅ 1. Compression: บีบอัดไฟล์สูงสุด (Gzip/Brotli)
  compress: true,

  // 📄 Extensions: รองรับ MDX เต็มรูปแบบ
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // 🖼️ Image Optimization: เน้น AVIF และลดขนาด Device Sizes ที่ไม่จำเป็น
  images: {
    formats: ["image/avif", "image/webp"],
    // ⚠️ Tips: ตัดขนาดที่ไม่ได้ใช้ออก เพื่อลดภาระ Server ในการ Generate รูป
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96], // ตัด 128+ ออกถ้าใช้ deviceSizes คุมแล้ว
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lin.ee",
      },
      {
        protocol: "https",
        hostname: "**.supabase.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // ⚡ Cache: เพิ่มเวลา Cache รูปภาพให้นานขึ้น (ลดการโหลดซ้ำ)
    minimumCacheTTL: 60,
  },

  // 🛠️ Compiler Options: หัวใจสำคัญของการลด TBT
  compiler: {
    // 🚀 Remove Console: ลบ console.log ใน Production เพื่อคืน Main Thread ให้ Browser
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error"], // เก็บ console.error ไว้ debug
          }
        : false,
  },

  // ⚡ Experimental Features: ขีดสุดของความเร็ว Next.js 15
  experimental: {
    mdxRs: true, // 🦀 Rust Compiler สำหรับ MDX (Build ไวขึ้น 5x)

    // 📦 Optimize Imports: Tree-shaking แบบละเอียด
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "sonner",
      "clsx",
      "tailwind-merge",
      "date-fns", // ✅ เพิ่ม: มักใช้บ่อยและขนาดใหญ่
      "lodash", // ✅ เพิ่ม: เผื่อมีการหลุดเข้ามา
      "@radix-ui/react-icons", // ✅ เพิ่ม: ถ้ามีการใช้ Icons ของ Radix
      "@/components/ui", // ✅ เพิ่ม: ช่วย Tree-shake UI components ภายในโปรเจกต์
    ],

    // 🚀 Turbo: ถ้าใช้ Turbopack ใน dev ให้ config เพิ่มได้ที่นี่ (Optional)
  },

  // 🛠️ Logging: ช่วย Debug ตอน Dev
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

/**
 * 📝 MDX Configuration
 */
const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // ⚡ Performance: บังคับใช้ Rust Compiler ในระดับ MDX Loader
    // (Next.js 15 experimental.mdxRs จัดการให้แล้ว แต่ใส่ options ว่างไว้ตาม pattern)
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

_Report generated by www.aemdevweb.com Internal Automation._
