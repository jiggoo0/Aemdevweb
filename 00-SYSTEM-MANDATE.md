# SYSTEM MANDATE & ARCHITECTURAL STANDARDS
> VERSION: 17.5.0
> STATUS: STRICTLY ENFORCED
> AUTHORITY: AEMDEVWEB ARCHITECTURE TEAM

## [01] CORE PHILOSOPHY (หลักการสำคัญ)
1. **Zero-Any Policy**: ห้ามใช้ Type `any` เด็ดขาด ทุกข้อมูลต้องมี Schema รองรับ (Strict TypeScript).
2. **Deep Immutability**: ข้อมูล Config และ Constant ทั้งหมดต้องเป็น `readonly` หรือ `as const`.
3. **Server-First Strategy**: Component ต้องเป็น Server Component (RSC) โดย Default ใช้ `"use client"` เมื่อจำเป็นต้องมี Interaction เท่านั้น.
4. **Performance Obsessed**: Web Vitals (LCP, CLS, INP) ต้องอยู่ในเกณฑ์สีเขียว (Green Zone) เสมอ.

## [02] DIRECTORY STRUCTURE (โครงสร้าง)
- `app/(routes)`: สำหรับ Page Logic และ Layout เท่านั้น ห้ามเขียน Business Logic ซับซ้อน.
- `components/ui`: Dumb Components ที่ไม่มี Logic ผูกมัดกับ Business Data.
- `constants`: Single Source of Truth สำหรับข้อมูล Static ทั้งหมด.
- `lib`: Utility Functions และ Shared Logic.

## [03] CODING STANDARDS (มาตรฐานโค้ด)
- **Naming**: PascalCase สำหรับ Component (`HeroSection.tsx`), camelCase สำหรับ 
variable/function (`generateMetadata`).
- **Imports**: ใช้ Absolute Path (`@/components/...`) แทน Relative Path.
- **Exports**: ใช้ Named Export (`export const`) แท่น Default Export (ยกเว้น page/layout).

## [04] COMMIT PROTOCOL (การส่งมอบงาน)
- Format: `[TYPE]: SUBJECT`
- Types: `FEAT`, `FIX`, `REFACTOR`, `DOCS`, `CHORE`, `PERF`.
- Example: `[FEAT]: Add Google Business Profile Schema verification`

---
*Failure to comply with these mandates will result in build rejection.*
