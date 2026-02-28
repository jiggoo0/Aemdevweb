# SKILL: INDUSTRIAL TEMPLATE ARCHITECT
> Status: active | Target: Master Controller (Home AI) Only

## 1. วัตถุประสงค์ (Purpose)
ทำหน้าที่ "ถอดรหัส" โปรเจกต์ที่มีข้อมูลจริง ให้กลายเป็น "แม่แบบอุตสาหกรรม" (Industrial Template) โดยการแยกเนื้อหาธุรกิจ (Business Content) ออกจากโครงสร้างโค้ด (Architecture) โดยยังคงดีไซน์เดิมไว้ 100%

## 2. กระบวนการถอดโครงสร้าง (Extraction Workflow)
เมื่อได้รับคำสั่งให้ทำ "Template Abstraction" AI **ต้อง** ดำเนินการดังนี้:
*   **Identify Artifacts**: ค้นหาข้อความ (String Literals) ที่เป็นข้อมูลธุรกิจ เช่น ชื่อแบรนด์, รายละเอียดสินค้า, ราคา
*   **Centralize Data**: สร้างไฟล์ `constants/site-config.ts` (หากยังไม่มี) และย้ายข้อมูลเหล่านั้นไปไว้ในรูปแบบ Object/Schema
*   **Variable Binding**: แก้ไขไฟล์ JSX/TSX ให้เรียกใช้ข้อมูลผ่านตัวแปรจากแหล่งกลางแทนการ Hardcode
*   **Placeholder Creation**: ในไฟล์แหล่งกลาง ให้ทิ้งค่าไว้เป็นค่าว่าง `""` หรือตัวอย่างในวงเล็บ `[ระบุชื่อสินค้าที่นี่]` เพื่อให้ผู้ใช้งานมาเติมเอง

## 3. กฎเหล็ก (Safety & Integrity)
*   **No Layout Shift**: ห้ามลบ Class ของ Tailwind หรือเปลี่ยนโครงสร้าง HTML เด็ดขาด เพราะจะทำให้ดีไซน์ "หลุด" หรือ "เพี้ยน"
*   **Structural Verification**: หลังจากถอดโครงสร้างแล้ว ต้องรัน `pnpm check` เพื่อยืนยันว่าการเปลี่ยนไปใช้ตัวแปรไม่ทำให้ Type Error
*   **Clean DNA**: ลบ IDENTITY.md เดิมและสร้างใหม่เป็นแบบ "รอรับอัตลักษณ์ใหม่"
