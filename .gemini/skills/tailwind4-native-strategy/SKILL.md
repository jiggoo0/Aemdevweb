# SKILL: TAILWIND 4 NATIVE STRATEGY
> Status: Production-Ready | Target: Tailwind CSS v4 & Next.js 16

## 1. วัตถุประสงค์ (Purpose)
บังคับใช้มาตรฐานการเขียน Tailwind CSS เวอร์ชัน 4 แบบ Native Utility เพื่อลดขนาดไฟล์ CSS เพิ่มความเร็วในการเรนเดอร์ และทำให้ Codebase สะอาดที่สุดตามแนวทางของ นาย อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์)

## 2. กฎการเขียนโค้ด (Styling Rules)
* Native First: ใช้ฟีเจอร์ Native ของ CSS ที่ Tailwind 4 รองรับ (เช่น CSS variables, native nesting) แทนการพึ่งพา Plugin ภายนอกที่ไม่จำเป็น
* No `@apply` Abuse: ห้ามใช้ `@apply` เพื่อสร้าง Custom Classes พร่ำเพรื่อ หากคอมโพเนนต์มีความซับซ้อน ให้แยกเป็น React Component (RSC/Client) แทนการแยกไฟล์ CSS
* Arbitrary Values: ใช้ Bracket notation `[...]` เฉพาะกรณีที่จำเป็นจริงๆ หากค่าใดถูกใช้ซ้ำเกิน 3 ครั้ง ต้องนำไปประกาศเป็น CSS Variable ใน Root Theme
* Strict Non-Emoji Policy: หากต้องการใส่ Icon ใน UI ห้ามใช้สัญลักษณ์กราฟิกแบบข้อความเด็ดขาด บังคับใช้ SVG Components (เช่น `lucide-react`)

## 3. โครงสร้างและการจัดระเบียบ (Organization)
* เรียงลำดับ Class (Class Sorting): ต้องจัดเรียง Utility Classes ตามมาตรฐาน (Layout -> Spacing -> Typography -> Visuals) หรือบังคับใช้ Prettier Plugin สำหรับ Tailwind
* Responsive Design: เขียนแบบ Mobile-First เสมอ (ไม่มี Prefix สำหรับ Mobile และไล่ขึ้นไปเป็น `sm:`, `md:`, `lg:`)
* Dark Mode: รองรับผ่านคลาส `dark:` และจัดการผ่าน CSS Variables เพื่อลดความซ้ำซ้อนของโค้ด

## 4. การตรวจสอบและการลบโค้ดขยะ (Zero-Garbage Code)
* ต้องทำงานร่วมกับ Skill `internal-audit-logic`
* โค้ดที่ลบไปจากไฟล์ TSX ต้องลบ Utility Class ที่ผูกติดไว้ออกให้หมดเพื่อไม่ให้เหลือขยะตกค้าง
