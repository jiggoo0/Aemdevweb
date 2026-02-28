# SKILL: PROVINCE VISUAL DNA (AEMZA MULTI-TENANT)
> Status: active | Strategy: Dynamic Sub-branding

## 1. วัตถุประสงค์ (Purpose)
เปลี่ยนหน้า Dynamic Route ของจังหวัดทั้ง 77 แห่งให้มีรูปลักษณ์และความรู้สึก (Look & Feel) เหมือนเว็บไซต์อิสระในตัวเอง โดยยังคงรันอยู่บน Codebase เดียวกัน

## 2. วิธีการฉีดอัตลักษณ์ (Visual Injection Method)
*   **Dynamic Theme Overrides**: ใช้ค่าจาก `ProvinceDNA` ในการกำหนด CSS Variables สำหรับสี (`--color-primary`, `--color-accent`) ในระดับ Layout ย่อย
*   **Content-Specific Hero**: ห้ามใช้รูป Hero เดียวกันทุกจังหวัด ต้องดึงรูปจาก `heroUrl` ที่ระบุไว้ในข้อมูล DNA
*   **Contextual Copywriting**: ปรับการใช้คำ (Wording) ให้เข้ากับวัฒนธรรมหรือจุดเด่นของจังหวัดนั้นๆ (เช่น เชียงใหม่ใช้คำว่า "ล้านนา", กรุงเทพฯ ใช้คำว่า "Metropolis")

## 3. โครงสร้างคอมโพเนนต์ (Component Morphing)
*   AI ต้องตรวจสอบระดับความสำคัญของจังหวัด (Tier) จาก DNA:
    *   **Tier 1 (Major City)**: แสดงผลแบบ Full Industrial Lab Dashboard (ซับซ้อนและหรูหรา)
    *   **Tier 2 (Province)**: แสดงผลแบบ Professional Service Focus (เน้นฟังก์ชันและความสะอาด)
