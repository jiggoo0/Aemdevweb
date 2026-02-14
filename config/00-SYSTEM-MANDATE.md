00-SYSTEM-MANDATE.md
PROJECT IDENTITY
Domain: aemdevweb.com
Codename: AEM-HYPER-PERFORMANCE
Version: 17.9.52 (Production-Ready / Hardened)
Framework: Next.js 16.1.6 (App Router)
Runtime: Node.js (Termux / Vercel Edge)
Maintainer: AEMZA MACKS (Alongkorn Yomkerd)
Last Audit: 2026-02-13 03:32:15
Status: STRICTLY_ENFORCED

1. CORE DIRECTIVES (กฎเหล็กสูงสุด)

- Strict Type Safety: ห้ามใช้ any โดยเด็ดขาด ทุกส่วนต้องใช้ Strict Typing จาก types/index.d.ts และรองรับ Async Params ของ Next.js 16
- Single Source of Truth (SSOT): ห้าม Hardcode ข้อมูลทางธุรกิจ ข้อมูลทั้งหมดต้องดึงจาก constants/ และ SITE_CONFIG เท่านั้น
- Static-First Architecture: ทุก Route ที่เป็นไปได้ต้องเป็น ● (SSG) ห้ามใช้ Dynamic Rendering (ƒ) หากไม่จำเป็น เพื่อรักษาขีดความสามารถในการทำ Indexing ของ Google
- Zero-Error Policy: ห้ามข้ามขั้นตอนการรัน tsc --noEmit และ test:schema ก่อนการ Build เด็ดขาด
- Performance or Death: ทุกหน้าต้องทำคะแนน Lighthouse ในส่วน Performance ให้ได้ 95+ โดยใช้ระบบ IMAGE_BLUR_DATA สำหรับภาพประกอบทั้งหมด

2. TECHNOLOGY STACK & DEPENDENCIES
   | Component | Version | Role |
   |---|---|---|
   | Framework | Next.js 16.1.6 | Core Infrastructure (webpack-based) |
   | UI Engine | React 19.0.0 | Rendering Layer |
   | Styling | Tailwind CSS 4.1.18 | Zero-Runtime Atomic CSS |
   | Package Manager | pnpm 10.29.3 | Strict Dependency & Lockfile Integrity |
   | Content Engine | MDX 3.1.1 | Dynamic-Static Content (Blog/Case Studies) |
   | PWA Engine | Next Metadata API | manifest.ts & Web App Features |
3. ARCHITECTURE & ROUTE GROUPS
   ระบบจัดกลุ่มแบบ Route Groups เพื่อแยก Layout Logic อย่างเด็ดขาด:
   app/
   ├── (business)/ # P-SEO & Content (Areas, Blog, Case Studies)
   ├── (main)/ # Core Pages (About, Privacy, Terms, Status)
   ├── (sales)/ # Conversion Funnels (Services Hub)
   ├── api/diag/ # System Diagnostic & Schema Validation
   ├── layout.tsx # Root Layout (Fonts & Theme Provider)
   └── manifest.ts # Dynamic PWA Manifest

4. DATA REGISTRY (THE BRAIN)

- site-config.ts: ควบคุม Brand Identity, Persona (Technical Authority), และช่องทางติดต่อหลัก
- master-registry.ts: ฐานข้อมูลบริการ 7 รายการ (SEO Agency ถึง Bio-Link) พร้อมระบบราคาและ Features
- area-nodes.ts: ฐานข้อมูล P-SEO 12 จังหวัดยุทธศาสตร์ (Bangkok ถึง Uttaradit)
- image-blur-data.ts: ทะเบียน Base64 Placeholders สำหรับระบบ Blur-up ทุกจุด

5. OPERATIONAL PROTOCOLS (ขั้นตอนมาตรฐาน)
   5.1 Pre-Build Validation
   ต้องรันและผ่าน 100% ก่อนทำเรื่อง Deploy:

- pnpm fix: จัดระเบียบโค้ดตาม Prettier และ Lint
- pnpm type-check: ตรวจสอบความสมบูรณ์ของ Type System
- pnpm test:schema: ตรวจสอบความถูกต้องของ JSON-LD ทั้ง 19 Nodes
  5.2 Build Execution
  รัน pnpm build เพื่อสร้าง Artifacts:
- Case Studies Hardening: ต้องแสดงผลเป็น ● (SSG) เท่านั้น (แก้ปัญหา ƒ Dynamic สำเร็จแล้ว)
- Manifest & Robots: ระบบต้อง Generate ไฟล์ Static ออกมาให้ Bot อ่านได้ทันที

6. SYSTEM STATE SNAPSHOT (CURRENT)

- Build Integrity: ✅ PASS (46/46 Pages Prerendered)
- Schema Health: ✅ OK (All 19 nodes are SEO-Ready)
- Performance: ✅ OPTIMIZED (Atomic CSS < 110K, Minimal Chunks)
- PWA Status: ✅ STANDALONE (Manifest & Icons fully integrated)
  END OF MANDATE อำนาจการตัดสินใจทางเทคนิคถูกล็อคตามเอกสารนี้เพื่อรักษามาตรฐาน Specialist Infrastructure
