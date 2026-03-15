# แผนการติดตั้งระบบ AI ใน .gemini

## วัตถุประสงค์
วางโครงสร้างระบบ AI ให้อยู่ในโฟลเดอร์ `.gemini/` พร้อมตั้งค่า Skills ให้สอดคล้องกับโปรเจกต์ (Next.js 16, React 19, Tailwind v4)

## รายการที่จะดำเนินการ (Execution Steps)
1. สร้างโฟลเดอร์ `.gemini/context/` และไฟล์ `.gemini/context/PROJECT_STATE.md` เพื่อทำหน้าที่เป็นหน่วยความจำถาวร (Continuity Protocol)
2. สร้างไฟล์ `.gemini/AI_WORKFLOW.md` เพื่อกำหนดกฎและรายการ Skills ที่บังคับใช้ เช่น `nextjs-app-router-standards`, `react-best-practices`, และ `tailwind-v4-guidelines`
3. บันทึกและปรับปรุง AI Context ให้พร้อมสำหรับการพัฒนาในเฟสถัดไป

## การตรวจสอบ
- โฟลเดอร์และไฟล์ถูกสร้างอย่างถูกต้องในรูทของโปรเจกต์
- เนื้อหาครอบคลุมมาตรฐานการทำงานของ AEMDEVWEB อย่างครบถ้วน