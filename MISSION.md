## 🚩 MISSION: www.aemdevweb.com

Status: Production Ready | Tech: Next.js 16 (App Router)

## 🎯 Current Tasks (ผู้ใช้งานกรอกที่นี่):

1. [x] [Completed] ปรับปรุงโครงสร้าง Metadata พื้นฐาน (Root Layout)
2. [x] [Completed] ตรวจสอบการรองรับ React 19 ใน Component หลัก (Enable React Compiler, Ref-as-prop pattern)
3. [x] [Completed] พัฒนาหน้า Blog รายการล่าสุด (MDX Integration, Related Posts, Human-centric Date)
4. [x] [Completed] ยกระดับระบบ Services (Hub & Detail) สู่มาตรฐาน Flagship (Next.js 16 Caching, HUD Layer, Schema Collection)
5. [x] [Completed] พัฒนาระบบ Search, Filtering และ Pagination สำหรับหน้า Blog Hub
6. [x] [Completed] เพิ่ม Reading Time และ Table of Contents (TOC) ในหน้าบทความ (Blog Detail)
7. [x] [Completed] ปรับปรุงระบบ Local SEO (Areas) ให้มีการเชื่อมโยงกับ Services แบบ Dynamic Cross-linking
8. [x] [Completed] ตรวจสอบ Performance (Core Web Vitals) และปรับปรุง Tailwind 4 Implementation ให้เป็นแบบ Native @theme
9. [x] [Completed] แก้ไข Build Error (Date/Time conflict) และผ่าน Full Validation (aipc) 100%
10. [x] [Completed] จัดทำกลยุทธ์ Area Template Strategy (77 จังหวัด) และรีแฟคเตอร์ Area Nodes ให้เป็นมาตรฐานเดียวกัน (defineAreaNode)
11. [x] [Completed] ปรับปรุง UI/UX (Typography & Spacing) สำหรับ Hero, Insights และ Portal เพื่อรองรับภาษาไทยระดับ Professional และลด Visual Clutter บนมือถือ
12. [x] [Completed] จัดทำฐานข้อมูลยุทธศาสตร์ SEO ปี 2026 (SEO Strategy Database) จากแหล่งข้อมูลผู้เชี่ยวชาญ เพื่อเป็นแนวทางทางเทคนิคและกลยุทธ์สำหรับโครงการ
13. [x] [Completed] ยกระดับ E-E-A-T และ Identity Synchronization เชื่อมโยงตัวตนผู้เชี่ยวชาญ (#expert) เข้ากับทุกบทความ, บริการ และผลงานผ่าน AuthorCard และ Linked Schema
14. [x] [Completed] ฉีดกลยุทธ์ Strategic Keywords และ aiSignal (GEO/AEO Optimization) เข้าสู่ระบบ Metadata และ Schema.org ทั่วทั้งไซต์ เพื่อครองอันดับบน AI Answer Engines
15. [x] [Completed] ปรับปรุง PageSpeed Insights & Rich Results (Mobile Contrast, Heading Hierarchy, LCP/Aura Optimization) ผ่าน Full Validation (aipc) 100%
16. [ ] [In Progress] วางโครงสร้าง AI Agent Framework ใน lib/ai/ โดยใช้ Firebase Genkit เพื่อรองรับระบบอัตโนมัติในอนาคต
17. [ ] [Pending] พัฒนาชุดบทความยุทธศาสตร์ "AI-First Business" เพื่อครองอันดับบน AI Search Engines (GEO)
18. [ ] [Pending] ตรวจสอบความถูกต้องด้าน Accessibility (WCAG 2.2) สำหรับลูกค้ากลุ่มองค์กรโดยใช้ Axe-core
19. [x] [Completed] พัฒนาระบบติดต่อสอบถาม (Contact Hub) แบบ Specialist Interface (/contact) พร้อมแผนที่และ Social Connectivity สื่อสารความน่าเชื่อถือระดับสูง (v18.0.0)
20. [x] [Completed] ยกระดับระบบนำทาง (Standardized Menu v20.0.0) รองรับ Hierarchical Menus, React 19 Composition และผ่านมาตรฐาน WCAG/Vercel Guidelines

## 🛠️ Tech Stack Status:

- **Core:** Next.js 16.1.6
- **React:** 19.0.0
- **Tailwind:** 4.1.18 (Native Support)
- **Content:** MDX via App Router
- **Status:** [SUCCESS] Build Passed, SSR/SSG Optimized

## 📝 Recent Changes & AI Instructions:

- [AI Note] รีแฟคเตอร์ Navbar.tsx เป็นระบบ Compound Components (React 19) รองรับเมนูหลายชั้นและผ่านมาตรฐาน Accessibility ระดับสูง
- [AI Note] อัปเกรด MAIN_NAV Structure ให้เป็นแบบ Hierarchical เพื่อรองรับการขยายตัวของบริการในอนาคต
- [AI Note] เพิ่มหน้าติดต่อเรา (/contact) โดยใช้มาตรฐานการสื่อสารแบบ Specialist และดึงข้อมูลจาก SITE_CONFIG มาแสดงผลแบบ Dynamic 100%
- [AI Note] รีแฟคเตอร์ระบบ Schema.org ใน lib/schema.ts ให้มีการเชื่อมโยง Graph (@id) ระหว่าง Person, Organization และ Service อย่างสมบูรณ์
- [AI Note] อัปเกรด Metadata Generator ให้รองรับการฉีด Keywords แบบเจาะจงและ Author Identity ตามมาตรฐาน E-E-A-T
- [AI Note] ติดตั้งระบบ aiSignal ใน lib/data-merger.ts เพื่อป้อนข้อมูลสรุปที่เหมาะสมให้กับ AI Crawlers และ Answer Engines (Gemini, Perplexity)
- [AI Note] บังคับใช้นโยบาย "Skill Reference" จาก Home เสมอ
