/** @format */
// พิกัด: app/(seo)/seo/_components/technical-structure-audit/data.ts

import { SeoServiceItem } from "@/types/seo";

/**
 * [SEO SERVICE NODE]: Technical Structure Audit
 * พิกัดการสแกนและซ่อมแซมรหัสหลังบ้าน เพื่อเปิดทางให้ Google Bot เข้าถึงข้อมูลได้ 100%
 * ควบคุมมาตรฐานโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB 2026)
 */
export const technicalAuditData: SeoServiceItem = {
  id: "seo-tech-001",
  slug: "technical-structure-audit",
  title: "Technical Structure Audit",
  subtitle: "พิกัดตรวจสอบจุดบอดหลังบ้านและพิกัดโครงสร้างระบบเพื่อการจัดอันดับ",
  description:
    "วิเคราะห์เจาะลึกสถาปัตยกรรมรหัสที่ฉุดรั้งอันดับเว็บไซต์ พร้อมรายงานการแก้ไขเชิงเทคนิคเพื่อเพิ่มประสิทธิภาพการเก็บข้อมูล (Crawl Budget) ของ Google Bot โดย นายเอ็มซ่ามากส์",
  iconName: "ShieldCheck",
  painPoints: [
    "เว็บไซต์มีเนื้อหาคุณภาพสูงแต่ Google Bot ไม่เข้ามาเก็บข้อมูล (Crawlability Error)",
    "โครงสร้างลิงก์ภายในพันกันจนบอทสับสน (Internal Link Loop) และหยุดทำงานกลางคัน",
    "หน้าเว็บสำคัญหายไปจากผลการค้นหาโดยหาสาเหตุเชิงเทคนิคไม่เจอ",
    "มีหน้า Error 404 และการ Redirect ที่ซับซ้อนเกินไปจนเสียคะแนนความน่าเชื่อถือ",
  ],
  features: [
    "Technical Crawlability Audit: ตรวจสอบการเข้าถึงของบอทในทุกพิกัดรหัส",
    "Sitemap & Robots.txt Strategic Tuning: วางแผนผังการจัดเก็บข้อมูลให้สมบูรณ์",
    "Canonical Tag Mastery: แก้ไขปัญหาเนื้อหาซ้ำซ้อนในระดับโครงสร้างฐานข้อมูล",
    "Index Velocity Optimization: จัดลำดับการอ่านข้อมูลเพื่อให้บอทนำหน้าเว็บขึ้น Google ได้ไวขึ้น",
  ],
  benefits: [
    {
      title: "Crawl Budget Optimization",
      desc: "ช่วยให้บอทเข้าถึงหน้าสำคัญได้ครบถ้วนโดยไม่เสียโควตาพิกัดการเก็บข้อมูล",
    },
    {
      title: "Index Velocity Surge",
      desc: "เพิ่มความเร็วในการแสดงผลเนื้อหาใหม่บนหน้า Google ทันทีที่กดเผยแพร่",
    },
  ],
  pricing: {
    price: 15900,
    label: "15,900",
    currency: "THB",
    suffix: "/ ครั้ง",
    isPopular: false,
  },
  faq: [
    {
      question: "การปรับโครงสร้างระบบส่งผลกระทบต่อดีไซน์เดิมไหม?",
      answer:
        "ไม่มีผลกระทบครับ นายเอ็มซ่ามากส์เน้นจัดการรหัสหลังบ้านและลำดับการอ่านข้อมูลของ AI เป็นหลัก ดีไซน์หน้าเว็บของคุณจะยังคงเดิมแต่ทำงานได้ฉลาดขึ้นครับ",
    },
    {
      question: "ควรทำบ่อยแค่ไหน?",
      answer:
        "แนะนำให้ทำอย่างน้อยปีละ 1 ครั้ง หรือทุกครั้งที่มีการปรับโครงสร้างเมนูและหมวดหมู่เว็บไซต์ครั้งใหญ่ครับ",
    },
  ],
};
