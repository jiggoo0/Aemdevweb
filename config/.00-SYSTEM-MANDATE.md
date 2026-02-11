# SYSTEM MANDATE: AEMDEVWEB INFRASTRUCTURE

> Version: 17.6.0 (STABILIZED)
> Authority: STRICTLY ENFORCED
> Context: High-Performance Web Infrastructure & Technical SEO Specialist

---

## 01. CORE PHILOSOPHY & IDENTITY

**"We are not just building websites; we are engineering digital assets."**

- **System Role:** Technical Infrastructure Specialist.
- **Primary Objective:** สร้างระบบเว็บไซต์ที่มีประสิทธิภาพสูงสุด (Hyper-Performance), รองรับ SEO โครงสร้างระดับสูง (Graph Architecture), และรักษาเสถียรภาพบนทุกอุปกรณ์
- **Identity Anchor:** ข้อมูลทั้งหมดต้องยึดโยงกับ `SITE_CONFIG` ใน `constants/site-config.ts` ห้าม Hardcode ข้อมูลติดต่อหรือชื่อแบรนด์ใน Component โดยเด็ดขาด
- **Tone of Voice:** Professional, Technical, Authoritative, "Specialist" (ไม่ใช้คำฟุ่มเฟือย เน้นผลลัพธ์และตัวเลข)

## 02. ARCHITECTURE & FILE STRUCTURE

**"Everything has a place, and every place has a purpose."**

- **App Router First:** ใช้ Next.js App Router (`app/`) เป็นหลัก
- **Colocation Strategy:**
  - `components/features/`: สำหรับ Business Logic แยกตาม Domain (landing, services, areas).
  - `components/ui/`: สำหรับ Reusable Primitives (Button, IconRenderer) ห้ามมี Business Logic.
  - `components/templates/`: สำหรับ Page Layouts ที่ใช้ซ้ำได้ (Corporate, SalePage).
- **Constants as Database:** ใช้ `constants/` (`master-registry.ts`, `area-nodes.ts`) เป็น Single Source of Truth สำหรับข้อมูลบริการและพื้นที่ ห้ามกระจายข้อมูลไว้ใน Component

## 03. TYPE SAFETY & CODE QUALITY (ZERO-ANY POLICY)

**"Runtime errors are failures of build-time discipline."**

- **Strict Typing:** ห้ามใช้ `any` ในทุกกรณี (Zero-Any Policy). หากไม่ทราบ Type ให้ใช้ `unknown` หรือ `Record<string, unknown>` แล้วทำ Type Guard
- **Immutability:** ข้อมูลใน `constants/` และ Props ต้องเป็น `readonly` เสมอ เพื่อป้องกัน Side Effects
- **Interface Over Types:** ใช้ `interface` สำหรับ Object Definitions และ `type` สำหรับ Unions/Primitives
- **No Magic Strings:** ห้ามใช้ String Hardcode สำหรับ Routing หรือ Keys ให้ดึงจาก `SITE_CONFIG` หรือ Enum/Const เสมอ

## 04. SEO & DATA SCHEMAS (GRAPH ARCHITECTURE)

**"If Google doesn't understand it, it doesn't exist."**

- **Schema First:** ทุกหน้า (`page.tsx`) ต้องมีการ Inject JSON-LD ผ่านคอมโพเนนต์ `JsonLd`
- **Logic Separation:** Logic การสร้าง Schema ต้องแยกออกจาก UI Component (เก็บไว้ใน `Schema.ts` ของแต่ละ Template)
- **Entity Graphing:** Schema ต้องเชื่อมโยงกันเสมอ (WebPage -> Service -> Organization -> Person) ห้ามมี Node ลอยๆ (Orphan Nodes)
- **Dynamic Metadata:** Metadata ต้องถูก generate ผ่าน `constructMetadata` ใน `lib/seo-utils.ts` เท่านั้น

## 05. PERFORMANCE & CORE WEB VITALS (LCP/CLS)

**"Speed is not a feature; it is the foundation."**

- **LCP Protection:** Element ที่เป็น LCP (เช่น Hero Title, Hero Image) **ห้าม** ซ่อนด้วย Animation (`opacity: 0`) หรือใช้ Client-side lazy load
- **Zero-CLS:** ต้องจองพื้นที่ (Height/AspectRatio) ให้กับรูปภาพและ Container เสมอ เพื่อป้องกัน Layout Shift
- **Font Optimization:** ใช้ `next/font` พร้อม `display: swap` และห้ามโหลด Font ภายนอกผ่าน CSS `@import` ที่ไม่ผ่านการ Optimize
- **Termux Friendly:** การตั้งค่า Build ต้องคำนึงถึง Environment ที่จำกัด (Termux/ARM) ห้ามใช้ Worker Threads เกินความจำเป็น (`cpus: 1`)

## 06. STYLING & DESIGN SYSTEM (TAILWIND v4)

**"Consistency creates trust."**

- **Design Tokens:** ห้ามใช้ Hex Color ใน Component โดยตรง ให้ใช้ CSS Variables (`bg-surface-main`, `text-brand-primary`) ที่ประกาศใน `globals.css`
- **GPU Acceleration:** Animation ที่ทำงานตลอดเวลา (Pulse, Float) ต้องใช้ `will-change-transform` และ `transform-gpu` เพื่อลดภาระ Main Thread
- **Responsive Logic:** ใช้ Mobile-First approach เสมอ (`class="w-full md:w-1/2"`)
- **Glassmorphism Standard:** ยึดมาตรฐานความโปร่งแสงและ Blur ตาม `AmbientBackground.tsx` เพื่อคุม Theme ของระบบ

## 07. DATA FETCHING & RENDERING STRATEGY

**"Static when possible, Dynamic when necessary."**

- **SSG Priority:** พยายามทำให้ทุกหน้าเป็น Static Site Generation (SSG) โดยใช้ `generateStaticParams`
- **Parallel Fetching:** หากมีการเรียกข้อมูลหลายแหล่งใน `page.tsx` ต้องใช้ `Promise.all` เสมอ
- **CMS Integration:** การดึงข้อมูลจาก MDX ต้องผ่าน `lib/cms.ts` ที่มีการทำ Error Handling และ Type Guard เรียบร้อยแล้ว
- **Client Boundary:** ใช้ `'use client'` เฉพาะที่จำเป็นจริงๆ (Leaf Nodes) พยายามดัน Logic ไปที่ Server Component ให้มากที่สุด

## 08. COMPONENT ARCHITECTURE

**"Modular, Atomic, and Dumb."**

- **Dumb Components:** UI Components ไม่ควรมี Logic ซับซ้อน หรือรู้เรื่อง Business Data มากเกินไป (รับ Props -> แสดงผล)
- **Prop Interface:** ชื่อ Props ต้องสื่อความหมายชัดเจน (เช่น `isActive` แทน `flag`) และสอดคล้องกับ `types/template-props.ts`
- **Memoization:** ใช้ `React.memo` สำหรับ Component ที่มีการ Re-render บ่อย หรืออยู่ภายใน List ขนาดใหญ่
- **Image Handling:** ใช้ `next/image` เสมอ ห้ามใช้ `<img>` tag ยกเว้นกรณี SVG ที่เป็น Icon

## 09. LOCAL AUTHORITY PROTOCOL

**"Dominate the map, dominate the market."**

- **Area Node Structure:** การเพิ่มพื้นที่ให้บริการใหม่ใน `area-nodes.ts` ต้องระบุ `districts` และ `coordinates` เสมอ เพื่อผลลัพธ์ Local SEO
- **Template Locking:** ห้ามเปลี่ยน `templateSlug` ของ Area Node ที่ถูกล็อคไว้ (เช่น `new-service-name`) หากไม่ได้รับคำสั่ง Migration
- **Keyword Injection:** เนื้อหาในหน้า Area ต้องมีการ Inject ชื่อจังหวัด/อำเภอ เข้าไปใน H1, Title, และ Description อย่างเป็นธรรมชาติ

## 10. DEPLOYMENT & QUALITY ASSURANCE

**"Measure twice, cut once."**

- **Audit Script:** ก่อน Commit หรือ Deploy ต้องรัน `bash a.sh` เพื่อตรวจสอบ Type Check, Lint, และ Build Status เสมอ
- **Dead Code Elimination:** ใช้ `knip` ตรวจสอบและลบไฟล์/Dependencies ที่ไม่ได้ใช้ เพื่อรักษาความสะอาดของโปรเจกต์
- **Asset Resilience:** ตรวจสอบว่ารูปภาพทั้งหมดใน `public/images` มีการใช้งานจริง และอยู่ใน Format ที่เหมาะสม (WebP)
- **Build Stability:** ห้ามปล่อยให้มี Warning ใน Console ตอน Build (ยกเว้น Warning ของ Webpack/Termux ที่ทราบสาเหตุแล้ว)

---

_End of Mandate. Maintainer: AEMDEVWEB Specialist Team._
