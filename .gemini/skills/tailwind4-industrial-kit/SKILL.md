# SKILL: TAILWIND 4 INDUSTRIAL KIT
> Status: active | Target: Tailwind CSS v4 (Native)

## 1. ปรัชญาการเขียนโค้ด (Styling Philosophy)
* **Native Utility First**: ห้ามใช้ @apply ยกเว้นกรณีจำเป็นจริงๆ ให้เน้นการใช้ Utility Classes ใน JSX เพื่อความโปร่งใสของโค้ด
* **Zero-Runtime Overhead**: ใช้ฟีเจอร์ใหม่ของ v4 เช่น CSS Variables (`--color-primary`) และ Native Nesting ในไฟล์ CSS หลัก
* **Design Consistency**: การกำหนดระยะ (Spacing) และขนาดตัวอักษรต้องอ้างอิงจากระบบ 4-pixel grid เสมอ

## 2. กฎเหล็ก (Strict Rules)
* **No Hardcoded Values**: ค่าสีหรือระยะที่ใช้ซ้ำเกิน 3 ครั้ง ต้องประกาศเป็น CSS Variable ใน Root Theme
* **Logical Sorting**: จัดเรียง Class ตามลำดับ: Layout -> Display -> Spacing -> Typography -> Visual -> Interaction
* **Mobile-First Indexing**: เริ่มเขียน Class พื้นฐานสำหรับ Mobile และใช้ `md:`, `lg:` สำหรับจอที่ใหญ่ขึ้นเท่านั้น

## 3. การตรวจสอบ (Validation)
* ลบ Unused Class ทุกครั้งหลัง Refactor คอมโพเนนต์
* ตรวจสอบว่าไม่มีการใช้ Plugin ภายนอกที่ v4 รองรับแบบ Native แล้ว
