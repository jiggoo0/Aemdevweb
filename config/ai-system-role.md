1. Architecture & Domain Strategy
ผมเข้าใจการวางโครงสร้างแบบ Authority-Service Separation เพื่อรองรับ Google AI Search (SGE) และป้องกัน Keyword Cannibalization ดังนี้:
A. Commercial Domain (www.aemdevweb.com)
 * Role: Business Service / Conversion Endpoint
 * Focus: ขายบริการ, Landing Page, SME Solutions, Technical Implementation
 * Key Identity: "AEMDEVWEB Co., Ltd." (Organization)
 * Target: ลูกค้า SME, โรงงาน, ธุรกิจส่งออก
 * Performance: LCP < 1.2s, Score 100
B. Authority Domain (me.aemdevweb.com)
 * Role: Knowledge Base / Personal Branding / E-E-A-T Source
 * Focus: บทความเชิงลึก, Portfolio ส่วนตัว, ปรัชญาการทำงาน
 * Key Identity: "นายอลงกรณ์ ยมเกิด" / "นายเอ็มซ่ามากส์" (Person)
 * Relationship: เป็นรากฐานความน่าเชื่อถือ (Author) ให้กับ Domain หลัก
2. Identity Resolution & Schema Linking
นี่คือจุดที่เชื่อมโยงกันด้วย JSON-LD เพื่อสร้าง Knowledge Graph ที่ถูกต้อง:
 * Person (นายเอ็มซ่ามากส์/อลงกรณ์):
   * Defined at: me.aemdevweb.com
   * Unique ID (@id): https://me.aemdevweb.com/#person
   * Properties: worksFor -> Organization (www), sameAs -> Social Media & Unlink-th
 * Organization (AEMDEVWEB):
   * Defined at: www.aemdevweb.com
   * Unique ID (@id): https://www.aemdevweb.com/#organization
   * Properties: founder -> Person (me)
Logic การเชื่อมโยง:
Google จะมองเห็นว่า "นายเอ็มซ่ามากส์" (ผู้เชี่ยวชาญจาก me) คือผู้ขับเคลื่อน "AEMDEVWEB" (ธุรกิจที่ www) ข้อมูลนี้จะช่วยดัน Ranking ในฝั่ง Commercial โดยไม่อาศัย Keyword spamming แต่ใช้อำนาจของ Author Authority แทน
3. Sitemap & Routing Structure (Merged)
ผมได้ map URL เพื่อให้เห็นภาพรวมของ Network ทั้งหมดครับ
Commercial (www)
 * / (Home): USP "Speed Launch & High Performance"
 * /services: Technical SEO, Next.js Dev
 * /templates: สินค้าสำเร็จรูป (ถ้ามี)
 * /case-studies: ผลงานในนามบริษัท
 * /blog: ข่าวสารองค์กร / Case Study ทางธุรกิจ
 * /contact & /careers: ช่องทางติดต่อทางการ
Personal (me)
 * / (Home): Profile นายเอ็มซ่ามากส์
 * /about: Story, Vision, Unlink-th Architect
 * /services: (อาจจะเป็น Consult ส่วนตัว หรือ link กลับไป www)
 * /projects: Technical Portfolio (Showcase Code/Architecture)
 * /blog: Deep Tech, R&D, Knowledge Sharing
4. Technical Constraints (Dev Context)
สำหรับการเขียน Code หรือ Gen Content ต่อจากนี้ ผมจะยึดตาม config นี้:
 * Specialist Name: ใช้ "นายเอ็มซ่ามากส์" เป็นหลักในบริบท Marketing/Brand และ "Alongkorl Yomkerd" ในบริบท Schema/Formal.
 * Tech Stack: Next.js (App Router), TypeScript, Tailwind (assumed).
 * SEO Standard: 2026 Guarantees (Security, AI Readiness).
 * Formatting:
   * No Emojis in Code/Technical Logs.
   * Strict Typescript usage.
   * Reference siteConfig constants primarily.
พร้อมปฏิบัติงานครับ คุณต้องการให้ผมเริ่มส่วนไหนก่อนครับ?
 * Refactor Code: ตรวจสอบหรือปรับปรุง Component อื่นๆ ให้สอดคล้องกับ site-config นี้
 * Generate Content: เขียนบทความหรือ Copywriting โดยแยกบริบทระหว่าง me (เล่าเรื่อง) กับ www (ขายของ)
 * SEO Strategy: วางแผน Internal Link ระหว่าง 2 Domain นี้
 * Other: (ระบุคำสั่ง)
