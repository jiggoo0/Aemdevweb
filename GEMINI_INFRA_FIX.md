# 🛠️ รายงานการแก้ไขโครงสร้างพื้นฐาน AI (Architectural Fix Report)

**สถานะ:** สำเร็จ (Verified) | **วันที่:** 2026-02-28
**หัวข้อ:** การแก้ไขปัญหา ENOENT บน Vercel จาก Symbolic Link (Absolute Path Issue)

## 1. ปัญหาที่พบ (Root Cause Analysis)

ในระหว่างการ Build บน Vercel เกิดข้อผิดพลาด:
`Error: ENOENT: no such file or directory, stat '/vercel/path0/commands'`

**สาเหตุเกิดจาก:**

- โฟลเดอร์ `commands` ใน Root Directory ของโปรเจกต์เป็น **Absolute Symbolic Link** ที่ชี้ไปยัง `/data/data/com.termux/files/home/.gemini/commands`
- สภาพแวดล้อมการ Build ของ Vercel ไม่สามารถเข้าถึง Path นอก Repository ได้ ทำให้เกิด **Broken Link** และ Next.js ไม่สามารถสแกนไฟล์เพื่อเริ่มการ Build ได้

## 2. การดำเนินการแก้ไข (Resolution Sequence)

1.  **Migration**: ลบ Symlink เดิมและทำการ **Copy (Physical Move)** ไฟล์คำสั่งจริงจากต้นทางมาไว้ใน `./.gemini/commands` ภายในโปรเจกต์เองเพื่อให้ Vercel เข้าถึงไฟล์ได้ 100%
2.  **Relative Linkage**: สร้าง Symlink ใหม่ใน Root Directory โดยใช้ **Relative Path** (`commands -> ./.gemini/commands`) เพื่อให้ระบบ Local (Termux) ยังทำงานได้ตามปกติผ่าน Path เดิม
3.  **Cross-Platform Support**: โครงสร้างนี้รองรับทั้งการรัน Scripts (aiaem, aipc, etc.) บน Termux และการ Build บน Vercel Cloud โดยไม่มี Error

## 3. คำแนะนำสำหรับ Home AI (Actionable Insights for Master Controller)

- **Standardization**: บังคับใช้การสร้าง Symbolic Link ภายในโปรเจกต์แบบ **Relative Path** เท่านั้น ห้ามใช้ Absolute Path นอกโฟลเดอร์โปรเจกต์เด็ดขาด
- **Sync Logic Update**: ในคำสั่ง `aisync.sh` ควรปรับปรุงให้มีการตรวจสอบความถูกต้องของ Symlink ก่อนส่งมอบงาน (Deployment Readiness)
- **Physical Mirroring**: สำหรับโฟลเดอร์ `commands/` และ `skills/` ควรพิจารณาการ Mirror ไฟล์จริงเข้าไปในแต่ละโปรเจกต์ (หรือใช้ Submodule) แทนการใช้ Symlink ข้ามโฟลเดอร์หลักในเครื่อง เพื่อให้โปรเจกต์มีความเป็นอิสระ (Portable) และพร้อม Build บนทุก Platform

---

**ผู้อ้างอิง:** Project AI (www.aemdevweb.com)
**Protocol Alert:** ปัญหานี้แก้ไขแล้ว 100% ในโปรเจกต์ www.aemdevweb.com พร้อมสำหรับการ Deploy ทันที
