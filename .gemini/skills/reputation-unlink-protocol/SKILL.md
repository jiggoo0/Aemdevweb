# SKILL: REPUTATION UNLINK PROTOCOL
> Status: active | Target: Project UnlinkTH (Content Removal Specialist)

## 1. บริบทธุรกิจ (Business Context)
UnlinkTH คือผู้เชี่ยวชาญด้านการจัดการชื่อเสียงออนไลน์ (Online Reputation Management) และการนำข้อมูลออกจากระบบคอมพิวเตอร์ (De-indexing/Content Removal) โดยยึดถือมาตรฐานความปลอดภัยและกฎหมาย PDPA เป็นหลัก

## 2. ขั้นตอนเชิงเทคนิค (Technical Workflow)
* **Content Audit**: วิเคราะห์โครงสร้าง URL และประเภทของข้อมูลที่ต้องการลบ (เช่น News, Social Media, Search Results)
* **De-indexing Strategy**: วางแผนการส่งคำขอไปยัง Search Engines (Google, Bing) ผ่านเครื่องมือมาตรฐาน
* **Technical Communication**: ร่างข้อความแจ้งเตือน (Formal Notices) ด้วยภาษาที่เป็นมืออาชีพและอ้างอิงข้อเท็จจริงทางเทคนิค

## 3. กฎการเขียนโค้ดเฉพาะทาง
* **Data Sensitivity**: ห้าม Hardcode ข้อมูลส่วนบุคคล (PII) ของลูกค้าลงในโค้ดหรือ Log โดยเด็ดขาด
* **ORM Patterns**: ใช้การจัดการสถานะ (Status Management) ที่ชัดเจนสำหรับรายการที่กำลังดำเนินการ (เช่น Pending, In Progress, Removed)
* **Precision Messaging**: หน้า Interface ที่เกี่ยวข้องกับการนำข้อมูลออก ต้องใช้ข้อความที่ชัดเจนและสร้างความเชื่อมั่นสูงสุด
