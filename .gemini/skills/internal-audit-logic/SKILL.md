# SKILL: INTERNAL AUDIT LOGIC
> Status: active | Version: 2.0.0
> Target: Zero-Error Deployment & High-Performance Codebase

## 1. วัตถุประสงค์ (Purpose)
ทำหน้าที่เป็นหน่วยตรวจสอบภายใน (Internal Auditor) เพื่อคัดกรองโค้ดและเอกสารให้เป็นไปตามมาตรฐาน "Senior Architect" ของ นาย อลงกรณ์ ยมเกิด ก่อนจะมีการบันทึกไฟล์หรือ Build ระบบ

## 2. ขั้นตอนการตรวจสอบ (Audit Workflow)
ทุกครั้งที่มีการแก้ไขโค้ด AI ต้องตรวจสอบตามลำดับดังนี้:

### ระดับที่ 1: Syntax & Type Integrity
* ตรวจสอบว่าไม่มีการใช้ `any` ในโค้ดเด็ดขาด
* เช็คความถูกต้องของ TypeScript Interfaces/Types ให้ตรงกับมาตรฐาน Next.js 16
* มั่นใจว่าการดึง Component มาใช้เป็นไปตามโครงสร้าง App Router (RSC vs Client Components)

### ระดับที่ 2: Standard Compliance
* **Identity Check**: ข้อมูล Metadata/SEO ต้องระบุถึง นาย อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์) หรือ www.aemdevweb.com อย่างถูกต้อง
* **Data Leakage Audit**: ค้นหาข้อความ (Text) ที่เป็นข้อมูลเฉพาะทางธุรกิจในไฟล์ .tsx หากพบห้ามปล่อยผ่านเด็ดขาด ต้องสั่งให้ย้ายไปที่ \`constants/site-config.ts\` หรือแหล่งข้อมูลที่กำหนดเท่านั้น
* **Emoji Check**: ต้องไม่มี Emoji หลุดรอดเข้าไปในโค้ดหรือเอกสารระบบ (ยกเว้น UI Icons ที่เป็น Component)
* **Tailwind 4 Native Utility**: ตรวจสอบว่าไม่มีการใช้ Class ที่ซ้ำซ้อน หรือขัดกับแนวทาง Native Utility

### ระดับที่ 3: Resource & Stability (Termux Optimized)
* วิเคราะห์ว่าการแก้ไขจะส่งผลต่อ Memory ของระบบ OPPO CPH2579 หรือไม่
* ตรวจสอบว่าไม่มีการสร้าง Infinite Loops หรือการเรียก API ที่ซ้ำซ้อนจนเครื่องค้าง

## 3. เกณฑ์การตัดสิน (Evaluation Criteria)
* **Pass**: ผ่านการตรวจสอบทุกข้อ -> ดำเนินการต่อได้
* **Warning**: พบจุดที่ปรับปรุงได้แต่ไม่เป็นอันตราย -> รายงาน นาย อลงกรณ์ ยมเกิด และขออนุมัติ
* **Fail**: พบจุดผิดพลาดที่ขัดต่อ Master Protocol -> **หยุดการทำงานทันที** และเสนอแนวทางแก้ไขแบบ 1, 2, 3

## 4. คำสั่งที่เกี่ยวข้อง (Triggering)
AI จะต้องรันคำสั่งเหล่านี้เป็นส่วนหนึ่งของการ Audit:
1. `pnpm check` : ตรวจสอบความสอดคล้องของโปรเจกต์
2. `pnpm knip` : ตรวจสอบ Unused Code และ Dependencies ส่วนเกิน
3. `pnpm lint` : ตรวจสอบสไตล์และรูปแบบโค้ด
