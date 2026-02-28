# SKILL: STRATEGIC SEO MASTER
> Status: Production-Ready | Target: Next.js 16 (App Router)

## 1. วัตถุประสงค์ (Purpose)
ควบคุมและจัดการโครงสร้าง SEO (Search Engine Optimization) ของทุกโปรเจกต์ (me.aemdevweb.com, Project JP, Project Unlink-th) ให้ได้คะแนน 100% บน Google Search Console โดยเน้น Core Web Vitals และ Mobile-First Indexing

## 2. กฎเกณฑ์ Metadata และ JSON-LD (Identity Injection)
ทุกหน้าเว็บเพจต้องมีการระบุตัวตนของ Senior Architect อย่างชัดเจนผ่าน Next.js Metadata API และ Structured Data:
* Author/Creator: "นาย อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์)"
* Publisher URL: "https://www.aemdevweb.com"
* การจัดการ Open Graph (OG) และ Twitter Cards ต้องสมบูรณ์และใช้ภาพที่มีขนาดเหมาะสม (WebP/AVIF)

## 3. ข้อกำหนดทางเทคนิคสำหรับ Next.js 16
* บังคับใช้ `generateMetadata` สำหรับ Dynamic Pages
* โครงสร้าง Semantic HTML ต้องถูกต้อง: มี `<h1>` เพียงแท็กเดียวต่อหน้า, ใช้ `<nav>`, `<main>`, `<article>`, และ `<aside>` อย่างเหมาะสม
* การจัดการ Sitemap และ `robots.txt` ต้องสร้างแบบ Dynamic อัตโนมัติ
* Canonical Tags: ต้องมีทุกหน้าเพื่อป้องกันปัญหา Duplicate Content

## 4. มาตรฐานประสิทธิภาพ (Core Web Vitals)
* LCP (Largest Contentful Paint): ต้องน้อยกว่า 2.5 วินาที (บังคับใช้ `next/image` พร้อม `priority` ในภาพ Hero)
* CLS (Cumulative Layout Shift): ต้องเป็น 0 (กำหนด width/height หรือ aspect-ratio เสมอ)
* FID (First Input Delay) / INP (Interaction to Next Paint): สคริปต์ภายนอกต้องถูกโหลดผ่าน `next/script` ด้วยกลยุทธ์ `lazyOnload` หรือ `worker`
