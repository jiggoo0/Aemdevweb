/** @format */
// พิกัดข้อมูล: components/seo/JsonLd.tsx
// หน้าที่: ระบบสร้างพิกัดข้อมูลโครงสร้าง (Structured Data Engine)
// มาตรฐาน: Next.js 16 | Ultra-Deep Level 7 | Search Engine Standards 2026
// นโยบาย: No backend • No form submission • LINE-only communication
// ควบคุมสมรรถนะโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)

import React from "react";
import { JsonLdData } from "@/types";

/**
 * [TYPE DEFINITIONS]
 * กำหนดขอบเขตพิกัดประเภทข้อมูลที่ระบบสนับสนุนเพื่อการทำ SEO เชิงโครงสร้าง
 */
export interface JsonLdProps {
  type:
    | "Organization"
    | "WebSite"
    | "Service"
    | "BlogPosting"
    | "CollectionPage"
    | "Person"
    | "Article"        // สนับสนุนโหนดกรณีศึกษา (Case Studies)
    | "ContactPage"    // สนับสนุนโหนดการติดต่อ (Contact Protocol)
    | "WebPage"        // สนับสนุนโหนดกฎหมาย (Legal Nodes)
    | "Product"        // สนับสนุนโหนด Marketplace (Templates)
    | "Graph";         // สนับสนุนการเชื่อมโยงข้อมูลแบบโครงข่าย
  data: JsonLdData;
}

/**
 * [COMPONENT: JSON-LD]
 * ทำหน้าที่ฉีดรหัส JSON-LD เข้าสู่ส่วน Header ของหน้าเว็บ
 * เพื่อให้ระบบ AI และบอทการค้นหาสามารถประมวลผล Entity ของแบรนด์ได้อย่างแม่นยำ
 */
export const JsonLd: React.FC<JsonLdProps> = ({ type, data }) => {
  // ตรวจสอบความสมบูรณ์ของข้อมูลก่อนดำเนินการ
  if (!data || Object.keys(data).length === 0) return null;

  // จัดพิกัดโครงสร้างตามประเภท (Single Type หรือ Graph Network)
  const schema =
    type === "Graph"
      ? {
          "@context": "https://schema.org",
          "@graph": Array.isArray(data["@graph"]) ? data["@graph"] : [data],
        }
      : {
          "@context": "https://schema.org",
          "@type": type,
          ...data,
        };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      // ป้องกันการทับซ้อนของข้อมูลด้วย Unique Key ตามประเภทและ ID
      key={`jsonld-${type.toLowerCase()}-${(data["@id"] as string) || "root"}`}
    />
  );
};
