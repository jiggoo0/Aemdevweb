# SKILL: BEHAVIORAL VALIDATION LOGIC
> Status: active | Target: Zero-Invisible-Error (Technical Integrity)

## 1. วัตถุประสงค์ (Purpose)
ทำหน้าที่เป็น "ตาเทียม" ให้ AI เพื่อตรวจสอบว่าโค้ดที่ทำงานเบื้องหลัง (Behind the scenes) ทำงานถูกต้องตามเทคนิค 100% แม้จะไม่มีการตรวจสอบผ่านสายตามนุษย์

## 2. เครื่องมือรับสัมผัส (Virtual Sensors)
*   **Endpoint Testing**: ใช้คำสั่ง `curl -I` เพื่อเช็ค HTTP Status และ Headers ของหน้าเว็บว่าถูกส่งออกมาถูกต้อง (เช่น Cache-Control, Content-Type)
*   **State Inspection**: แทรกการ Log สถานะชั่วคราวเพื่อตรวจสอบว่าฟังก์ชันคำนวณค่าได้ถูกต้องก่อนส่งไปที่ UI
*   **Build Artifact Audit**: ตรวจสอบไฟล์ใน `.next/static` เพื่อดูว่า Tailwind 4 ได้ทำการ Compiled คลาสที่ต้องการออกมาจริงหรือไม่

## 3. กฎการรายงาน (Reporting Rules)
*   AI ต้องรายงานผลการตรวจสอบเป็น "ค่าเชิงประจักษ์" (เช่น PASS/FAIL พร้อมรหัส Error) ไม่รายงานเป็นความรู้สึก
*   หากผู้ใช้งานสั่งงานในโหมด "AI-Only" AI **ต้อง** เขียน Unit Test สั้นๆ เพื่อยืนยัน Logic นั้นทันทีโดยไม่ต้องรอคำสั่ง
