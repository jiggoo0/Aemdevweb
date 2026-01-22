ไฟล์ ai-system-role.md ชุดนี้คือข้อกำหนดระดับปฏิบัติการ (Standard Operating Procedure) ที่จะทำให้การทำงานร่วมกันระหว่างคุณและ AI มีความแม่นยำสูงสุดตามหลักการ Industrial Mindset ผมได้รวบรวม วิเคราะห์ และจัดระเบียบโครงสร้างใหม่เพื่อให้เป็นคู่มือที่สมบูรณ์สำหรับปี 2026 ดังนี้ครับ
Ai-system-role.md: Operational Identity & Strategy
1. Architecture & Domain Strategy (Entity-Based SEO)
ระบบถูกออกแบบบนสถาปัตยกรรม Authority-Service Separation เพื่อรองรับ Google Search Generative Experience (SGE) และการสร้าง Knowledge Graph ที่แข็งแกร่ง
A. Commercial Domain: www.aemdevweb.com
 * Role: Conversion Endpoint / Professional Service.
 * Entity: Organization (AEMDEVWEB Co., Ltd.).
 * Performance Target: LCP < 1.2s, CLS < 0.1, Performance Score 100.
 * Tone: Professional, Result-Oriented, "Industrial Grade".
B. Authority Domain: me.aemdevweb.com
 * Role: Knowledge Base / E-E-A-T Source.
 * Entity: Person (Alongkorl Yomkerd / M-Zaa-Marks).
 * Strategic Purpose: เป็นแหล่งอ้างอิงความเชี่ยวชาญ (Experience & Expertise) เพื่อส่งต่อ Trust ให้กับโดเมนหลัก
 * Tone: Expert, Insightful, Visionary.
2. Identity Resolution & Schema Graph Mapping
การเชื่อมโยงข้อมูลผ่าน JSON-LD เพื่อสร้างความสัมพันธ์แบบ Semantic ในระดับที่ Search AI เข้าใจ
 * The Person (@id: https://me.aemdevweb.com/#person)
   * Properties: name, jobTitle, worksFor, sameAs (Unlink-th, Github, Socials).
 * The Organization (@id: https://www.aemdevweb.com/#organization)
   * Properties: founder (Link back to Person), serviceArea, legalName.
3. Integrated Sitemap & Routing Logic
Network: Commercial (www)
 * /: Value Proposition & Hero Section.
 * /services: Tier 1 Technical Implementations.
 * /case-studies: B2B Proof of Success.
 * /blog: Corporate Updates & Market Insights.
Network: Personal (me)
 * /: Personal Branding & Key Accomplishments.
 * /projects: Technical Deep-dives (Architecture Analysis).
 * /blog: R&D, Technical Tutorials, Philosophy of Code.
4. Development & Content Standards (Technical Context)
ในการทำงานทุกครั้ง ผมจะยึดถือมาตรฐานระดับ Enterprise ดังนี้:
Technical Compliance (Dev-to-Dev)
 * Next.js 15+ Core: เน้นการใช้ Server Components (RSC) เป็นหลัก เพื่อลด Client-side JavaScript.
 * TypeScript Strict Mode: ห้ามใช้ any, ทุก Interface ต้องมีความหมาย (Semantic Types).
 * Formatting Rule: ห้ามใช้อีโมจิใน Code, Comments และ Technical Documentation โดยเด็ดขาด
 * Configuration First: อ้างอิงค่าจาก constants/site-config.ts เป็นหลัก เพื่อให้เกิด Single Source of Truth.
Content Strategy (P-A-S-O Framework)
 * www (Sales Mode): เน้นแก้ปัญหาธุรกิจ (ROI) แปลงศัพท์เทคนิคเป็นภาษาผลกำไร
 * me (Authority Mode): เน้นการแชร์ "วิธีคิด" และ "ความยาก" เพื่อโชว์ความเหนือกว่าในเชิงเทคนิค
5. Next Steps & Execution Plan
เพื่อให้สอดคล้องกับ DNA และ System Role นี้ ผมพร้อมดำเนินการต่อในส่วนต่อไปนี้ทันที:
 * Refactor Schema Logic: ตรวจสอบไฟล์ JSON-LD ใน components/seo/JsonLd.tsx ให้มีการเชื่อมโยง @id ระหว่าง 2 โดเมนได้ถูกต้อง
 * Internal Linking Strategy: วางแผนการทำ Contextual Link จากหน้า Blog ของ me กลับมายังหน้า Service ของ www เพื่อถ่ายโอน Link Equity
 * Technical Audit: ตรวจสอบ Performance Metrics ใน pre-deploy-report.md ว่าได้ค่า LCP < 1.2s ตามเป้าหมายหรือไม่
?
