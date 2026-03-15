# 🤖 AI WORKFLOW & SKILLS CONFIGURATION

ไฟล์นี้กำหนดมาตรฐานการทำงานของ AI และ Skills ที่บังคับใช้ในโปรเจกต์นี้ เพื่อให้สอดคล้องกับโครงสร้างและเทคโนโลยี

## 🎯 Mandatory Skills (ทักษะที่ต้องเปิดใช้ตามบริบทงาน)

เพื่อให้การพัฒนามีประสิทธิภาพและไม่หลุดมาตรฐาน ให้ AI เรียกใช้ Skills ต่อไปนี้เมื่อทำงานที่เกี่ยวข้อง:

1. **Architecture & Standards**
   - `nextjs-app-router-standards`: ทุกครั้งที่มีการสร้าง/แก้ไข Routing, Layouts, หรือ Server/Client Components
   - `react-best-practices`: สำหรับการสร้าง UI Components, Hooks, และการจัดการ State
   - `tailwind-v4-guidelines`: เมื่อมีการปรับแต่ง UI และ Styles (ห้ามใช้ Tailwind v3 patterns)

2. **Performance & Optimization**
   - `next-cache-components`: เมื่อจัดการ Data Fetching และ Caching Strategy
   - `modern-web-optimization`: สำหรับการทำ Performance Auditing, ปรับปรุง Core Web Vitals, และ Image Optimization

3. **Deployment & Infrastructure**
   - `infrastructure-connections`: เมื่อต้องเชื่อมต่อกับ Turso, Vercel Blob, หรือ External APIs
   - `deploy-to-vercel`: ก่อนการ Build หรือ Push เพื่อตรวจสอบความพร้อมของระบบ

4. **SEO & Content**
   - `human-connect-writing`: สำหรับการปรับแต่งเนื้อหา, Metadata, และ Persona ของแบรนด์ให้เข้าถึงกลุ่มเป้าหมาย (B2B, SME)

## 🛡️ Execution Protocol
1. ทุกครั้งที่รับคำสั่ง AI ต้องประเมินและ `activate_skill` ที่เกี่ยวข้องก่อนเขียนโค้ดเสมอ
2. การเปลี่ยนแปลงโค้ดที่กระทบโครงสร้างหลักต้องเขียนแผนงาน (Plan) ให้ผู้ใช้อนุมัติก่อนเสมอ
3. หลังการเปลี่ยนแปลงโค้ดสำคัญ ต้องยึดมั่นใน **MANDATORY_VALIDATION_SCRIPT** (`pnpm aipc`) เพื่อยืนยันความสมบูรณ์ 100%

---
*Created for Maximum AI Autonomy & Precision Engineering.*
