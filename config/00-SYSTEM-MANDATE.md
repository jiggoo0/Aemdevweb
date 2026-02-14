# SYSTEM MANDATE & ARCHITECTURAL DOCTRINE

**Version:** 17.9.100 (Ultimate Hardened)
**Last Updated:** 2026-02-14
**Maintainer:** AEMZA MACKS (Lead Architect / Alongkorn Yomkerd)

---

## 1. CORE PHILOSOPHY (ปรัชญาหลัก)

**"We don't just build websites; We engineer Digital Infrastructure."**

ระบบนี้ไม่ใช่แค่เว็บโชว์ข้อมูล แต่คือ **"เครื่องจักรทำเงิน (Revenue Engine)"** ที่ถูกจูนมาเพื่อ:

1.  **Speed:** เร็วระดับปีศาจ (LCP < 2.5s) แม้บนมือถือ
2.  **Trust:** ความน่าเชื่อถือต้องมาเป็นอันดับ 1 (E-E-A-T)
3.  **SEO-First:** โครงสร้างต้องดันอันดับ Google ได้จริง ไม่ใช่แค่แปะ Keyword
4.  **Lean:** ตัดขยะทิ้งให้หมด โค้ดทุกบรรทัดต้องมีหน้าที่

---

## 2. TECHNOLOGY STACK (เสาหลักทางเทคนิค)

ระบบรันบนเทคโนโลยีล่าสุดของปี 2026 (Bleeding Edge) แต่ปรับจูนให้เสถียร:

- **Core:** Next.js 16.1.6 (App Router) + React 19
- **Styling:** Tailwind CSS v4 (No Runtime Overhead)
- **Language:** TypeScript 5.9 (Strict Mode Only - ห้ามใช้ Any)
- **Content:** MDX (สำหรับ Blog/Case Studies)
- **Performance Monitor:** Bundle Analyzer + Knip (Dead Code Hunter)

### ⚠️ Special Environment Constraint (กฎเหล็กสภาพแวดล้อม)

Project นี้พัฒนาแบบ **Hybrid Environment**:

1.  **Local (Dev):** รันบน Android (Termux) -> **ต้องประหยัด Resource สูงสุด**
    - `workerThreads: false`
    - `webpack.cache: false` (เพื่อ save storage)
2.  **Production:** Vercel Cloud -> **อัดเต็มสูบ** (Rust Compiler, Image Optimization)

---

## 3. DATA ARCHITECTURE (โครงสร้างข้อมูล)

เราใช้ระบบ **"The Bridge Pattern"** เพื่อรวมศูนย์ข้อมูล (Single Source of Truth):

### 3.1 Master Registry (`master-registry.ts`)

- คลังข้อมูลบริการทั้งหมด (Services) อยู่ที่นี่ที่เดียว
- ห้าม Hard-code ข้อมูลบริการลงในไฟล์ Page โดยเด็ดขาด
- ข้อมูลจะถูกส่งผ่าน Interface `UniversalTemplateProps` เพื่อให้ Template ทุกตัวคุยภาษาเดียวกัน

### 3.2 Area Nodes (P-SEO Engine)

- ใช้สำหรับทำ Local SEO (เจาะรายจังหวัด/อำเภอ)
- ไฟล์อยู่ที่ `constants/area-nodes/`
- ทุก Node ต้องมี `blurDataURL` (Gen อัตโนมัติ) เพื่อ UX ที่ลื่นไหล

### 3.3 Site Config (Brand Identity)

- ไฟล์ `site-config.ts` คือกฎหมายสูงสุดของ Brand
- ชื่อ, เบอร์โทร, Social Links, Tone of Voice แก้ที่นี่ที่เดียว เปลี่ยนทั้งเว็บ

---

## 4. ROUTE STRUCTURE (โครงสร้างหน้าเว็บ)

เราแบ่ง Folder ด้วย **Route Groups** เพื่อแยก Layout ให้ชัดเจน:

- `app/(main)`: หน้าทั่วไป (Home, About, Legal) -> มี Navbar/Footer เต็มรูปแบบ
- `app/(business)`: หน้าเนื้อหา (Blog, Areas, Case Studies) -> เน้นการอ่านและ Internal Link
- `app/(sales)`: หน้าขายของ (Services, Sale Pages) -> **Conversion Focused** (ตัดเมนูรกๆ ออก เน้นปุ่มซื้อ)

---

## 5. SEO & SCHEMA STRATEGY

นี่คือจุดขายหลักของ AEMDEVWEB:

1.  **Strict Schema:** ทุกหน้าต้องมี JSON-LD ที่ถูกต้อง (เช็คผ่าน `test:schema` ก่อน Build)
2.  **Meta Tags:** ห้ามปล่อยว่าง ต้องมี Title, Description, OG-Image ครบทุกหน้า
3.  **No-Index Logic:**
    - Production: Index ปกติ
    - Dev/Preview: บังคับ `noindex, nofollow` ผ่าน `next.config.ts` เพื่อกัน Google สับสน

---

## 6. CODING STANDARDS (กฎการเขียนโค้ด)

เพื่อให้ Aemza Macks ทำงานง่ายและเร็วที่สุด:

- **Don't Repeat Yourself (DRY):** ถ้า Logic ซ้ำกันเกิน 2 ครั้ง -> แยกเป็น Component หรือ Utility
- **Type Safety:** ห้าม `ts-ignore` ถ้าไม่จำเป็นจริงๆ (ต้องมีเหตุผลแนบ)
- **Image Handling:** ห้ามใช้ `<img>` ธรรมดา ต้องใช้ `<Image />` ของ Next.js และใส่ `alt` เสมอ
- **Clean Imports:** ใช้ Path Alias `@/components`, `@/lib` เสมอ อย่าใช้ `../../`

---

## 7. PERFORMANCE BUDGET (งบประมาณความเร็ว)

ห้ามปล่อยให้เว็บอ้วนเกินความจำเป็น (มี `bundlesize` คุมอยู่):

- **Main Bundle:** ห้ามเกิน 150 kB
- **CSS:** ห้ามเกิน 130 kB (Tailwind v4 ช่วยตรงนี้ได้เยอะ)
- **Images:** ใช้ WebP/AVIF เท่านั้น และ Cache 1 ปี (`immutable`)

---

## 8. DEPLOYMENT CHECKLIST

ก่อนสั่ง `git push` หรือ `pnpm build` ต้องผ่านเช็คลิสต์นี้:

1.  ✅ `pnpm test:schema` -> Schema ต้องเขียวหมด (Audited: OK)
2.  ✅ `pnpm knip` -> ต้องไม่มีไฟล์ขยะหรือตัวแปรที่ไม่ได้ใช้
3.  ✅ `pnpm type-check` -> TypeScript ต้องไม่แดง

---

**"Code is Poetry, Performance is Art, ROI is the Goal."**
